# LIFEBridge — Fix All & Setup Guide

## Repo
https://github.com/samsonjames7725-blip/Lbmtkimigst

## 1. Clone & install

```bash
git clone https://github.com/samsonjames7725-blip/Lbmtkimigst.git
cd Lbmtkimigst
npm install
```

## 2. Environment

Create `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://tnobrqfxmrwpuxkdsycd.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_fwqDGfuS4LFCizYBXZeJ3A_3EaNH9DW

# Get the exact connection string from:
# Supabase Dashboard → Project Settings → Database → Connection string (URI)
# Encode password: @ → %40   # → %23
DATABASE_URL="postgresql://postgres:YOUR_ENCODED_PASSWORD@db.tnobrqfxmrwpuxkdsycd.supabase.co:5432/postgres?sslmode=require"

AUTH_SECRET="lifebridge-session-secret-min-16-chars"
SESSION_SECRET="lifebridge-session-secret-min-16-chars"
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**If project is paused:** Dashboard → restore project, wait until status is Active.

**If direct DB fails:** use the **Session pooler** connection string from the same Database settings page (port 6543).

## 3. Push schema to Supabase

### Option A — Prisma (recommended)

```bash
npx prisma generate
npx prisma db push
```

### Option B — SQL Editor

1. Open https://supabase.com/dashboard/project/tnobrqfxmrwpuxkdsycd/sql
2. Paste contents of `prisma/init-supabase.sql` (generate locally with):

```bash
npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script
```

3. Run the SQL.

## 4. Run the app

```bash
npm run dev
```

- Login: `/login`
- Intelligence: `/intelligence`
- Approvals: `/approvals`
- Dashboard: `/dashboard`

## Fixes applied

| Issue | Fix |
|-------|-----|
| MySQL → PostgreSQL | Prisma `provider = "postgresql"` |
| AUTH_SECRET missing | Accepts `AUTH_SECRET` or `SESSION_SECRET` |
| Supabase clients | `src/utils/supabase/*` + middleware |
| No auto-send | Approval PATCH never sends external messages |
| Secrets in git | `.env.local` gitignored |
| Schema validation | Prisma schema validates successfully |

## Security

1. Rotate DB password after sharing it in chat.
2. Never commit `.env.local`.
3. AI never auto-sends email/WhatsApp.

## Status

- Schema (Business OS + GST + Agent 3): **valid**
- Supabase helpers: **on GitHub**
- Scoring + lead service + approval APIs: **in working tree**
- DB push from CI sandbox: blocked (DB host not reachable) — run on your machine
