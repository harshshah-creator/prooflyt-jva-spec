# Prooflyt — JVA Spec Repo

> 🌐 **Live site:** <https://harshshah-creator.github.io/prooflyt-jva-spec/>
> 📖 **Interactive API spec:** <https://harshshah-creator.github.io/prooflyt-jva-spec/api.html>

This repository contains **only the artifacts explicitly mentioned in the
Prooflyt Schedules v4 Final** (the binding JVA Schedule 1 + Schedule 2 +
Annexure A FRD v2.0).

It is the canonical specification companion to the implementation repo at
[`harshshah-creator/prooflyt-msp`](https://github.com/harshshah-creator/prooflyt-msp).
The implementation repo contains additional Phase-2 capabilities and
nice-to-haves; this repo is **intentionally restricted to Phase-1 JVA scope**.

If you need to know "what is contractually required of Phase 1", read this
repo. If you need a working build, use `prooflyt-msp`.

---

## What's in here

```
prooflyt-jva-spec/
├── README.md                ← this file
├── SPEC-MAP.md              ← every JVA §/Annexure mapped to a file
├── docs/
│   ├── jva-schedules-v4.md  ← the binding spec (auto-converted from .docx)
│   ├── openapi.yaml         ← 12 API endpoint groups per A12
│   ├── admin-guide.md       ← per S1.8A Documentation Deliverables
│   ├── user-guide.md        ← per S1.8A
│   └── deployment-notes.md  ← per S1.8A
└── packages/
    ├── contracts/           ← data models per A11
    ├── domain/              ← RBAC + module access per A5 + A10
    └── mapping/             ← AI smart-mapping heuristics per A7.2
```

## Scope alignment

### What IS included (the JVA-explicit Phase-1 surface)

The doc mandates these and only these for Phase 1:

| JVA section | What it specifies | Where it lives in this repo |
|-------------|---------------------|------------------------------|
| §S1.4 / §A4 / §A7 | **10 core modules** (Setup, Sources, Register, Dashboard, Notices, Rights, Retention, Breach, Processors, Evidence+Audit+Reports) | See SPEC-MAP.md |
| §S1.3 / §A5 / §A10 | **7 user roles** + RBAC matrix | `packages/domain/` |
| §A12 | **12 API endpoint groups** | `docs/openapi.yaml` |
| §A11 | **22 core data entities** | `packages/contracts/src/index.ts` |
| §S1.6 / §A8 | **27 screens** (responsive 1280px+ / 768px+) | Specified, see admin-guide.md |
| §A7.10 | **6 named reports** × PDF/Excel/JSON | docs only; impl in prooflyt-msp |
| §S1.10 / §A16 | Bombay Grooming Labs demo seed | Spec in admin-guide.md §11 |
| §S1.8A | **4 documentation deliverables** | `docs/admin-guide.md`, `docs/user-guide.md`, `docs/deployment-notes.md`, `docs/openapi.yaml` |

### What is NOT included (everything outside Phase-1 JVA scope)

The doc is explicit on what's deferred to Phase 2 (S1.12 / A15) and what's
beyond Phase 1. None of these appear in this repo:

| Excluded item | JVA citation |
|---------------|--------------|
| Native system integrations (Salesforce, HubSpot, SAP, Zoho, Razorpay OAuth) | §A3, §A15 |
| Sector compliance packs (fintech / edtech / healthcare / D2C / NBFC) | §S1.12, §A15 |
| DPO Portal / white-label / MSSP | §S1.12, §A15 |
| Consent management widgets / cookie banners | §S1.12, §A15 |
| AI Compliance Advisor (generative AI chatbot, proactive suggestions) | §S1.12, §A15 |
| Keycloak SSO (OIDC / SAML 2.0 / LDAP) | §S1.12, §A15 |
| Smart Mapping v2 (DB schema connectors, live API mapping) | §S1.12, §A15 |
| Advanced analytics, benchmarking dashboards | §S1.12, §A15 |
| Sahamati Account Aggregator integration | not in JVA |
| DPIA workflow engine | not in JVA |
| Audit anomaly detection | not in JVA |
| SIEM bearer-key authentication | not in JVA (only audit-trail export is required) |
| Outbound webhook subscriptions | not in JVA |
| Audit-firm-specific compliance pack covers (KPMG/EY/PwC/Deloitte/Grant Thornton) | not in JVA (only generic pack) |
| DPA auto-generator | only DPA *tracking* is in JVA (§A7.8) |
| Tamil i18n | only Hindi is cited in JVA (§S2.3 Should Pass) |
| Connector OAuth / API-key flows | §A3 says "CSV/XLS/XLSX file upload input only" |

The doc itself, §A3 *Scope Summary*, states: *"No direct third-party
integrations in Phase 1 — CSV/XLS/XLSX file upload input only."*

---

## How to use this repo

### As a Phase-1 acceptance checklist

Walk through `docs/jva-schedules-v4.md` Schedule 2 and tick off each Must
Pass criterion against the actual `prooflyt-msp` implementation. The
SPEC-MAP file links each criterion to the file path that satisfies it.

### As an OpenAPI source-of-truth

`docs/openapi.yaml` defines the 12 endpoint groups per §A12 with DPDP +
JVA citations inline. Import it into Postman / Swagger UI / Insomnia.

### As a data-model reference

`packages/contracts/src/index.ts` ships the TypeScript types that 1:1
mirror the 22 entities listed in §A11. Use these as the schema target
when designing the relational database.

### As an RBAC reference

`packages/domain/` implements the 7-role permissions matrix from §A10
exactly. The 16 actions and their per-role grants are mapped 1:1.

---

## Relationship to prooflyt-msp

| `prooflyt-msp` (the build) | `prooflyt-jva-spec` (this repo) |
|----------------------------|-----------------------------------|
| Working Cloudflare Worker + Next.js app | Specification artifacts only — no runtime |
| Implements Phase-1 JVA + extras | Implements *only* Phase-1 JVA |
| Has connectors, agents, SIEM, etc. | Does not |
| ~3,400 lines of routes | docs + 22 data-model types |

Read both side-by-side to see *exactly* which parts of the build are
contractual obligations and which are above-and-beyond.

---

## Compliance regimes referenced

The JVA scope addresses the **Digital Personal Data Protection Act, 2023**
and the **DPDP Rules, 2025** (notified 13 November 2025; full enforcement
13 May 2027). Section citations like §5(1), §8(7), §11–§15 throughout the
files refer to the Act unless otherwise noted.

The platform is built for organisations acting as **Data Fiduciaries**
under the Act. Significant Data Fiduciary (SDF) obligations crystallise
on 13 November 2026.

---

## License + governance

This repo is the contractual specification companion to a Joint Venture
Agreement dated [●] 2026 between **Novation Legal** and **Codewave
Technologies Private Limited**. The IP assignment, license, and
governance terms in the JVA govern this repo as well.
