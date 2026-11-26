# fvrvz.market — Package & App Marketplace

Personal marketplace showcase for reusable libraries, UI kits, and SaaS platforms by **Faraaz Khan (`fvrvz`)**, hosted at `https://marketplace.byfaraaz.com`.

## Architecture

- **Frontend**: [Astro](https://astro.build) (strict TypeScript, zero `any`) + [`@fayso/nostyle-css`](https://github.com/fvrvz/nostyle-css) + `@lucide/astro` + `motion` + `zod`, deployed statically to **GitHub Pages** (`public/CNAME`).
- **Backend API & Analytics**: **Cloudflare Worker** (`worker/`) connected to **Cloudflare D1** (`marketplace-db`) for total & weekly download tracking and **Resend** for Zod-validated contact form emails.

## Local Development

```bash
# 1. Start the Astro frontend (http://localhost:4321)
npm install
npm run dev

# 2. Start the Cloudflare Worker API locally (http://localhost:8787)
cd worker
npm install
npm run db:migrate:local
npm run db:seed:local
npm run dev
```

## Adding a New Package, UI Kit, or App

1. Add a screenshot in `public/screenshots/<slug>.svg` (or `.png` / `.webp`).
2. Append a typed entry to `MARKETPLACE_ITEMS` in `src/data/registry.ts`.
3. Optionally seed initial download stats in `worker/seed.sql`.

## Deploying the Cloudflare Worker

```bash
cd worker
npx wrangler secret put RESEND_API_KEY
npm run deploy
```

Set `PUBLIC_API_BASE_URL` in GitHub repository variables (`Settings → Secrets and variables → Actions → Variables`) to your deployed Worker URL if different from the default.
