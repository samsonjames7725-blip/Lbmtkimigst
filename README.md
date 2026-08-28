# LIFEBridge MedTech — Business OS + GST DAS + Business Intelligence

**Repository:** `Lbmtkimigst`  
**Owner:** samsonjames7725-blip  
**Version:** 7.0.0 (Agent 3 integrated)

## Architecture

```
                 LIFEBridge MEDTECH MOS
                         │
                 ONE APPLICATION
                         │
                 ONE MYSQL DATABASE
                         │
                  ONE PRISMA SCHEMA
                         │
        ┌────────────────┼────────────────┐
        │                │                │
    BUSINESS OS       GST DAS       INTELLIGENCE
        │                │                │
     Finance          GST Engine       Discovery
     Billing          ITC             Research
     CRM               RCM             Leads
     Inventory         Returns         Tenders
     Procurement       Reconciliation  Enquiries
     Projects                          Scoring
     Assets                            Evidence
     Service                           AI
        │                                │
        └────────────────┬───────────────┘
                         │
                  HUMAN APPROVAL
                         │
                  EMAIL / WHATSAPP
```

## Agent 3 — Business Intelligence & Lead Acquisition

- Configurable source registry (`TenderSource`)
- Lead discovery with evidence & explainable scoring
- Deduplication across sources
- Enquiry classification
- AI message drafting with **mandatory human approval**
- Market signals & watchlists
- Full audit trail & company isolation

See `docs/business-intelligence.md` for details.

## Stack

- Next.js 16 + React 19 + TypeScript
- Prisma 6 + MySQL
- Zod validation
- Tailwind CSS 4
- jose (sessions) + bcryptjs

## Quick Start

```bash
cp .env.example .env
# set DATABASE_URL and optional OPENAI_API_KEY / SEARCH_API_KEY

npm install
npx prisma generate
npx prisma db push
npm run dev
```

## Security Rules (non-negotiable)

1. No automatic external email / WhatsApp — human approval required.
2. All APIs enforce authentication + company scope + RBAC.
3. Never fabricate leads, tenders, contacts or tender numbers.
4. Always store and expose original source URL.
5. Do not scrape sites that disallow automated access.

## Status

| Area | Status |
|------|--------|
| Core Business OS + GST | Inherited / present |
| Prisma schema (Agent 3 models) | **IMPLEMENTED** |
| Scoring engine | **IMPLEMENTED** |
| Discovery services / APIs / UI | SCAFFOLDED — next iteration |
| Email / WhatsApp providers | REQUIRES EXTERNAL CONFIG |
| Tests (critical paths) | Pending |

## Environment

```
DATABASE_URL=
OPENAI_API_KEY=        # optional
AI_API_KEY=            # alternative
SEARCH_API_KEY=        # optional research
EMAIL_API_KEY=         # optional
WHATSAPP_API_KEY=      # optional
```

Never use `NEXT_PUBLIC_` for secrets.
