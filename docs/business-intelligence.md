# LIFEBridge MedTech — Business Intelligence & Lead Acquisition (Agent 3)

## Architecture Principle

**One application · One MySQL database · One Prisma schema**

Agent 3 is a module of the existing LIFEBridge MedTech Business OS. It reuses Companies, Users, Roles, Permissions, Customers, Products, Quotations, Audit logs and Authentication.

## Purpose

Discover genuine healthcare business opportunities from publicly available information (hospitals, clinics, diagnostic centres, veterinary, medical colleges, government tenders, RFQs, EOIs, equipment & infrastructure needs).

Every opportunity carries source evidence, an explainable score, and links into the existing CRM / tender / quotation flow.

## Key Models

| Model | Purpose |
|-------|---------|
| TenderSource | Configurable source registry |
| Lead | Discovered opportunity |
| LeadEvidence | Source URL + snippet |
| LeadScore | 0–100 explainable breakdown |
| LeadContact | Public business contacts only |
| Enquiry | Incoming website / email / WhatsApp |
| MessageDraft | AI drafts (never auto-sent) |
| ApprovalRequest | Human approval gate |
| WebResearchRun | Research job history |
| MarketSignal | New hospital / expansion signals |
| LeadWatchlist | User watch criteria |

## Communication Rule (Mandatory)

AI Draft → PENDING_APPROVAL → Human Approve/Reject → Send (only after approve)

No automatic external email or WhatsApp. Ever.

## Scoring (Explainable, max 100)

Source credibility 20 · Healthcare relevance 15 · Business fit 15 · Opportunity value 15 · Deadline 10 · Organization confidence 10 · Contact 5 · Completeness 5 · Cross-source 5

## Status

- Schema: IMPLEMENTED
- Scoring engine: IMPLEMENTED
- Services / APIs / UI: SCAFFOLDED
- External providers: REQUIRES CONFIGURATION
