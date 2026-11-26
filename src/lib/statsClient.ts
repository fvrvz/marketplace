import type { WeeklyDownloadPoint } from '../data/registry';

export interface LivePackageStats {
  readonly total: number;
  readonly weekly: readonly WeeklyDownloadPoint[];
}

interface AllStatsResponse {
  readonly stats: Record<string, LivePackageStats>;
}

interface SingleStatsResponse {
  readonly slug: string;
  readonly stats: LivePackageStats;
}

const DEFAULT_API_BASE = 'https://marketplace-api.codefaraaz.workers.dev';

export function getApiBaseUrl(): string {
  const configured = import.meta.env.PUBLIC_API_BASE_URL;
  if (typeof configured === 'string' && configured.trim().length > 0) {
    return configured.trim().replace(/\/+$/, '');
  }
  return DEFAULT_API_BASE;
}

export async function fetchAllPackageStats(): Promise<Record<string, LivePackageStats> | null> {
  try {
    const res = await fetch(`${getApiBaseUrl()}/api/stats`, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as AllStatsResponse;
    return data.stats ?? null;
  } catch {
    return null;
  }
}

export async function recordPackageDownload(slug: string): Promise<LivePackageStats | null> {
  try {
    const res = await fetch(`${getApiBaseUrl()}/api/stats/${encodeURIComponent(slug)}/download`, {
      method: 'POST',
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as SingleStatsResponse;
    return data.stats ?? null;
  } catch {
    return null;
  }
}
