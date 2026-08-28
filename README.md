# LIFEBridge MedTech — Business OS + GST + Business Intelligence

**Repo:** [samsonjames7725-blip/Lbmtkimigst](https://github.com/samsonjames7725-blip/Lbmtkimigst)  
**Version:** 7.0.0 · Agent 3 · Supabase PostgreSQL

## Architecture

One Next.js app · One Prisma schema · One Supabase PostgreSQL database

```
Business OS  +  GST DAS  +  Intelligence (Agent 3)
     │              │              │
  Finance        GST Engine    Leads / Tenders
  CRM            ITC/RCM       Scoring / Evidence
  Billing        Returns       Approvals (human-only)
```

## Quick start

```bash
git clone https://github.com/samsonjames7725-blip/Lbmtkimigst.git
cd Lbmtkimigst
npm install

# Create .env.local — see docs/FIX_AND_SETUP.md
npx prisma generate
npx prisma db push
npm run dev
```

## Supabase

- Project: `tnobrqfxmrwpuxkdsycd`
- URL: https://tnobrqfxmrwpuxkdsycd.supabase.co
- Full setup: [docs/FIX_AND_SETUP.md](docs/FIX_AND_SETUP.md)
- BI design: [docs/business-intelligence.md](docs/business-intelligence.md)

## Routes

| Path | Purpose |
|------|---------|
| `/login` | Auth |
| `/dashboard` | Executive dashboard |
| `/intelligence` | Lead radar (Agent 3) |
| `/approvals` | Human approval (no auto-send) |

## Security rules

1. **No automatic email/WhatsApp** — human approval required
2. Company isolation on all intelligence APIs
3. Original source URL always stored on leads
4. Explainable scores (0–100 breakdown)
5. Secrets only in `.env.local` (never committed)

## Stack

Next.js 16 · React 19 · Prisma 6 · PostgreSQL (Supabase) · Zod · jose · Tailwind 4 · @supabase/ssr

## Status (fixed)

| Area | Status |
|------|--------|
| Prisma → PostgreSQL | Done |
| Schema validates | Done |
| AUTH_SECRET / SESSION_SECRET | Fixed |
| Supabase SSR clients + middleware | On GitHub |
| Scoring + lead service + approval APIs | Working tree |
| `db push` to Supabase | Run on your machine (DB host not reachable from CI) |
