import { z } from 'zod';

interface Env {
  marketplace_db: D1Database;
  ALLOWED_ORIGINS: string;
  CONTACT_FROM_EMAIL: string;
  CONTACT_TO_EMAIL: string;
  RESEND_API_KEY?: string;
}

interface PackageStatRow {
  slug: string;
  total_downloads: number;
  updated_at: string;
}

interface WeeklyDownloadRow {
  slug: string;
  week_start: string;
  downloads: number;
}

export interface WeeklyPoint {
  week: string;
  count: number;
}

export interface PackageStats {
  total: number;
  weekly: WeeklyPoint[];
}

const ContactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100),
  email: z.email('Please provide a valid email address'),
  subject: z.string().trim().min(3, 'Subject must be at least 3 characters').max(140),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(2000),
});

function getCorsHeaders(request: Request, env: Env): Record<string, string> {
  const origin = request.headers.get('Origin') ?? '';
  const allowed = env.ALLOWED_ORIGINS.split(',').map((item) => item.trim());
  const allowOrigin = allowed.includes(origin) ? origin : (allowed[0] ?? '*');

  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
  };
}

function jsonResponse(
  data: unknown,
  status: number,
  corsHeaders: Record<string, string>,
): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders,
    },
  });
}

function getCurrentWeekStart(): string {
  const now = new Date();
  const day = now.getUTCDay();
  const diffToMonday = day === 0 ? -6 : 1 - day;
  const monday = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + diffToMonday));
  return monday.toISOString().slice(0, 10);
}

async function handleGetAllStats(db: D1Database): Promise<Record<string, PackageStats>> {
  const statsRes = await db
    .prepare('SELECT slug, total_downloads, updated_at FROM package_stats')
    .all<PackageStatRow>();
  const weeklyRes = await db
    .prepare('SELECT slug, week_start, downloads FROM weekly_downloads ORDER BY week_start ASC')
    .all<WeeklyDownloadRow>();

  const result: Record<string, PackageStats> = {};

  for (const row of statsRes.results) {
    result[row.slug] = {
      total: row.total_downloads,
      weekly: [],
    };
  }

  for (const row of weeklyRes.results) {
    const existing = result[row.slug] ?? { total: 0, weekly: [] };
    existing.weekly.push({ week: row.week_start, count: row.downloads });
    result[row.slug] = existing;
  }

  return result;
}

async function handleGetSingleStats(db: D1Database, slug: string): Promise<PackageStats> {
  const statRow = await db
    .prepare('SELECT slug, total_downloads, updated_at FROM package_stats WHERE slug = ?')
    .bind(slug)
    .first<PackageStatRow>();

  const weeklyRes = await db
    .prepare('SELECT slug, week_start, downloads FROM weekly_downloads WHERE slug = ? ORDER BY week_start ASC')
    .bind(slug)
    .all<WeeklyDownloadRow>();

  return {
    total: statRow?.total_downloads ?? 0,
    weekly: weeklyRes.results.map((row) => ({
      week: row.week_start,
      count: row.downloads,
    })),
  };
}

async function handleRecordDownload(db: D1Database, slug: string): Promise<PackageStats> {
  const nowIso = new Date().toISOString();
  const weekStart = getCurrentWeekStart();

  await db.batch([
    db
      .prepare(
        `INSERT INTO package_stats (slug, total_downloads, updated_at)
         VALUES (?, 1, ?)
         ON CONFLICT(slug) DO UPDATE SET
           total_downloads = total_downloads + 1,
           updated_at = excluded.updated_at`,
      )
      .bind(slug, nowIso),
    db
      .prepare(
        `INSERT INTO weekly_downloads (slug, week_start, downloads)
         VALUES (?, ?, 1)
         ON CONFLICT(slug, week_start) DO UPDATE SET
           downloads = downloads + 1`,
      )
      .bind(slug, weekStart),
  ]);

  return handleGetSingleStats(db, slug);
}

async function sendViaResend(
  apiKey: string,
  from: string,
  to: string,
  payload: z.infer<typeof ContactSchema>,
): Promise<boolean> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject: `[Marketplace Contact] ${payload.subject}`,
      text: `From: ${payload.name} <${payload.email}>\n\n${payload.message}`,
    }),
  });

  return res.ok;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const corsHeaders = getCorsHeaders(request, env);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, '') || '/';

    try {
      if (request.method === 'GET' && path === '/api/health') {
        return jsonResponse({ ok: true, service: 'marketplace-api' }, 200, corsHeaders);
      }

      if (request.method === 'GET' && path === '/api/stats') {
        const stats = await handleGetAllStats(env.marketplace_db);
        return jsonResponse({ stats }, 200, corsHeaders);
      }

      const singleMatch = /^\/api\/stats\/([a-z0-9-]+)$/.exec(path);
      if (request.method === 'GET' && singleMatch?.[1]) {
        const stats = await handleGetSingleStats(env.marketplace_db, singleMatch[1]);
        return jsonResponse({ slug: singleMatch[1], stats }, 200, corsHeaders);
      }

      const downloadMatch = /^\/api\/stats\/([a-z0-9-]+)\/download$/.exec(path);
      if (request.method === 'POST' && downloadMatch?.[1]) {
        const stats = await handleRecordDownload(env.marketplace_db, downloadMatch[1]);
        return jsonResponse({ slug: downloadMatch[1], stats }, 200, corsHeaders);
      }

      if (request.method === 'POST' && path === '/api/contact') {
        const rawBody: unknown = await request.json();
        const parsed = ContactSchema.safeParse(rawBody);
        if (!parsed.success) {
          return jsonResponse(
            {
              error: 'Validation failed',
              issues: parsed.error.issues.map((issue) => ({
                field: issue.path.join('.'),
                message: issue.message,
              })),
            },
            400,
            corsHeaders,
          );
        }

        const data = parsed.data;
        await env.marketplace_db
          .prepare(
            'INSERT INTO contact_messages (name, email, subject, message, created_at) VALUES (?, ?, ?, ?, ?)',
          )
          .bind(data.name, data.email, data.subject, data.message, new Date().toISOString())
          .run();

        let emailDispatched = false;
        if (env.RESEND_API_KEY) {
          emailDispatched = await sendViaResend(
            env.RESEND_API_KEY,
            env.CONTACT_FROM_EMAIL,
            env.CONTACT_TO_EMAIL,
            data,
          );
        }

        return jsonResponse(
          {
            ok: true,
            emailDispatched,
            message: 'Thank you! Your message has been received.',
          },
          200,
          corsHeaders,
        );
      }

      return jsonResponse({ error: 'Not found' }, 404, corsHeaders);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unexpected server error';
      return jsonResponse({ error: message }, 500, corsHeaders);
    }
  },
};
