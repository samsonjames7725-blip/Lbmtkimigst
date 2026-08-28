# Supabase Setup — LIFEBridge MedTech BI

## Project

- Supabase URL: `https://tnobrqfxmrwpuxkdsycd.supabase.co`
- Dashboard: https://supabase.com/dashboard/project/tnobrqfxmrwpuxkdsycd

## Environment variables

Create `.env.local` (never commit secrets):

```bash
NEXT_PUBLIC_SUPABASE_URL=https://tnobrqfxmrwpuxkdsycd.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_publishable_key

# Password special chars must be URL-encoded: @ -> %40  # -> %23
DATABASE_URL="postgresql://postgres:YOUR_ENCODED_PASSWORD@db.tnobrqfxmrwpuxkdsycd.supabase.co:5432/postgres"

SESSION_SECRET="long-random-string"
```

## Install

```bash
npm install
npm install @supabase/supabase-js @supabase/ssr
```

## Prisma (PostgreSQL)

Schema uses `provider = "postgresql"`.

```bash
npx prisma generate
npx prisma db push
```

This creates all Business OS + GST + Agent 3 tables on Supabase.

## Supabase client helpers

- `src/utils/supabase/server.ts` — Server Components / Route Handlers
- `src/utils/supabase/client.ts` — Browser
- `src/utils/supabase/middleware.ts` — Session refresh
- `src/middleware.ts` — Next.js middleware

## Security notes

1. Never commit `.env.local` or database passwords.
2. Publishable key is safe for browser; service role key stays server-only.
3. Prisma still owns the application schema (companies, leads, approvals…).
4. Supabase Auth can be layered later; current app also has jose sessions.

## Verify connection

```bash
npx prisma db pull   # optional — inspect remote schema
npx prisma studio    # browse tables
```
