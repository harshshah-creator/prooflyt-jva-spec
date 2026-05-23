# JVA Spec Map

Every section of **Prooflyt Schedules v4 Final** mapped to the file (in
this repo or in `prooflyt-msp`) that satisfies it.

The canonical source is `docs/jva-schedules-v4.md` — the auto-converted
copy of the binding `.docx`. Where the doc uses §S* numbering it refers
to Schedule 1; §A* refers to Annexure A (FRD v2.0).

---

## Schedule 1 — Product Requirement Document

| Section | Title | This repo | `prooflyt-msp` |
|---------|-------|-----------|------------------|
| §S1.1 | Product overview | `README.md` "Scope" | `README.md` |
| §S1.2 | AI-Powered Smart Mapping | `packages/mapping/` | `apps/api-worker/src/pii-scanner.ts` + `packages/mapping/` |
| §S1.3 | Target users + 7 roles | `packages/domain/src/roles.ts` | same |
| §S1.4 M1 | Company Setup + RBAC | `packages/domain/src/` + `docs/admin-guide.md` §3 | `apps/web/components/module-views.tsx` Setup module |
| §S1.4 M2 | Source Discovery + AI Smart Mapping | `packages/mapping/` | `apps/api-worker/src/pii-scanner.ts` |
| §S1.4 M3 | Data Register | `packages/contracts/src/index.ts` RegisterEntry | `apps/web/components/module-views.tsx` Register |
| §S1.4 M4 | Compliance Dashboard / Obligations | `packages/contracts/src/index.ts` ReadinessScore, ObligationBucket | DashboardView |
| §S1.4 M5 | Notice Builder | `docs/admin-guide.md` §6 | `apps/api-worker/src/notice-rule3.ts` + `apps/web/components/admin/notice-block-*` |
| §S1.4 M6 | Rights and Grievances | `packages/contracts/src/index.ts` RightsCase | `apps/api-worker/src/dsr-sla.ts` |
| §S1.4 M7 | Retention and Deletion | `packages/contracts/src/index.ts` DeletionTask | `apps/api-worker/src/retention-enforcement.ts` |
| §S1.4 M8 | Breach Register | `packages/contracts/src/index.ts` Incident (= BreachIncident) | `apps/api-worker/src/breach-rules.ts` |
| §S1.4 M9 | Processor / Vendor Management | `packages/contracts/src/index.ts` Processor | Processors module view |
| §S1.4 M10 | Evidence Library, Audit Trail, Reports | `packages/contracts/src/index.ts` EvidenceArtifact, AuditEvent | `apps/api-worker/src/reports.ts` |
| §S1.5 | End-to-end workflow | `docs/admin-guide.md` | n/a |
| §S1.6 | Screen inventory (27 screens, responsive) | `docs/admin-guide.md` §2-§11 enumerates | `apps/web/app/workspace/*` |
| §S1.7 | Technical architecture | `docs/deployment-notes.md` §1 | `apps/api-worker/wrangler.toml`, `apps/web/next.config` |
| §S1.7A | Logging and observability | `docs/deployment-notes.md` §6 | Cloudflare Workers Analytics integration |
| §S1.8 | Non-functional SLAs + performance | `docs/admin-guide.md` §13 (Troubleshooting), `docs/deployment-notes.md` §6 | n/a |
| §S1.8A | Documentation deliverables | `docs/admin-guide.md`, `docs/user-guide.md`, `docs/deployment-notes.md`, `docs/openapi.yaml` | (referenced from msp) |
| §S1.9 | Business rules | `docs/admin-guide.md` §3-§11 | `apps/api-worker/src/dsr-sla.ts`, `breach-rules.ts`, `retention-enforcement.ts` |
| §S1.10 | Demo seed data | `docs/admin-guide.md` §4.3 | `apps/api/src/data/seed.ts` |
| §S1.11 | Build order (7 Build Blocks) | `docs/deployment-notes.md` §10 | n/a |
| §S1.12 | Phase 2 scope (explicit out-of-scope) | `README.md` "What is NOT included" | n/a (kept extras live in msp) |

## Schedule 2 — Milestone Acceptance Criteria

| Section | Title | Where to verify |
|---------|-------|------------------|
| §S2.1 | M1 — Foundation and Discovery (complete) | `docs/jva-schedules-v4.md` |
| §S2.2 | M2 — Working Prototype (Must Pass + Should Pass) | `docs/jva-schedules-v4.md` |
| §S2.3 | M3 — Full MVP (Must Pass × 30+ + Should Pass) | `docs/jva-schedules-v4.md`; `prooflyt-msp/docs/openapi.yaml` for API coverage |
| §S2.4 | M4 — Post-MVP Advisory (18-24 months) | `docs/jva-schedules-v4.md` |

---

## Annexure A — Functional Requirements Document (FRD v2.0)

| Section | Title | This repo |
|---------|-------|------------|
| §A1 | Document control | `docs/jva-schedules-v4.md` |
| §A2 | Purpose | `docs/jva-schedules-v4.md` |
| §A3 | Scope summary — "No direct third-party integrations in Phase 1" | `README.md` "What is NOT included" |
| §A4 | Module stack / 4-layer architecture | `docs/admin-guide.md` §1 |
| §A5 | User roles + responsibilities | `packages/domain/src/roles.ts` |
| §A6 | High-level workflow | `docs/admin-guide.md` §2 |
| §A7.1 | Compliance Dashboard / Obligation Control Center | `packages/contracts/src/index.ts` ReadinessScore + ObligationBucket |
| §A7.2 | Source Discovery + AI Smart Mapping (3 modes) | `packages/contracts/src/index.ts` DataSource, SourceFieldProfile + `packages/mapping/` |
| §A7.3 | Data Register | `packages/contracts/src/index.ts` RegisterEntry |
| §A7.4 | Notice Builder (template + drag-and-drop + Hindi support) | `packages/contracts/src/index.ts` Notice + `prooflyt-msp/apps/web/components/admin/notice-block-templates.ts` |
| §A7.5 | Rights and Grievances (6 right types, 30d/45d SLAs) | `packages/contracts/src/index.ts` RightsCase, ErasureEvidence + `prooflyt-msp/apps/api-worker/src/dsr-sla.ts` |
| §A7.6 | Retention and Deletion (rules + calendar + legal hold + 10k batch + proof) | `packages/contracts/src/index.ts` DeletionTask + `prooflyt-msp/apps/api-worker/src/retention-enforcement.ts` |
| §A7.7 | Breach Register (72h timer + auto-severity > 1k affected) | `packages/contracts/src/index.ts` Incident + `prooflyt-msp/apps/api-worker/src/breach-rules.ts` |
| §A7.8 | Processor / Vendor Management (DPA + sub-processors + purge routing) | `packages/contracts/src/index.ts` Processor |
| §A7.9 | Evidence Library + Audit Trail (immutable) | `packages/contracts/src/index.ts` EvidenceArtifact, AuditEvent |
| §A7.10 | 6 Reports × PDF/Excel/JSON | `prooflyt-msp/apps/api-worker/src/reports.ts` (`renderReport`) |
| §A8 | Screen inventory | `docs/admin-guide.md` §3-§11 enumerates per module |
| §A9 | Business rules (8 subsections) | `docs/admin-guide.md` §3-§11; `prooflyt-msp/apps/api-worker/src/{dsr-sla, breach-rules, retention-enforcement}.ts` |
| §A10 | Permissions matrix (16 actions × 7 roles) | `packages/domain/src/access.ts` |
| §A11 | Core data model (22 entities) | `packages/contracts/src/index.ts` |
| §A12 | API contract — 12 endpoint groups | `docs/openapi.yaml` |
| §A13 | Non-functional requirements | `docs/deployment-notes.md` §6 |
| §A14 | Build order | `docs/deployment-notes.md` §10 |
| §A15 | Phase 2 scope | `README.md` "What is NOT included" |
| §A16 | Demo seed data (Bombay Grooming Labs) | `docs/admin-guide.md` §4.3 + `prooflyt-msp/apps/api/src/data/seed.ts` |
| §A17 | Phase 1 completion definition | `README.md` |

---

## Should Pass items (M3, §S2.3, waivable in writing)

| Item | This repo's notes |
|------|---------------------|
| Hindi notice template | `docs/admin-guide.md` §6.4 |
| WCAG 2.1 Level AA | Acknowledged; impl in `prooflyt-msp` |
| Self-hosted LLM configuration UI | `docs/admin-guide.md` §3.5 |
| Regulatory Calendar (Nov 2025 / Nov 2026 / May 2027) | `docs/admin-guide.md` §3.6 |
| JSON API export | `docs/openapi.yaml` |
| 6 reports load <10s for 5k entries | `docs/deployment-notes.md` §6 |
| Portability right export (machine-readable) | `packages/contracts/src/index.ts` RightsCase.type = "PORTABILITY" |

---

## How to verify the mapping

For any single JVA section X:

1. Find it in `docs/jva-schedules-v4.md` (search by `§X`)
2. Open the file listed in the right column
3. Confirm the requirement is met

For acceptance auditing during M3:

1. Walk Schedule 2 §S2.3 in `docs/jva-schedules-v4.md`
2. Tick each Must Pass against the build at `harshshah-creator/prooflyt-msp`
3. Use `docs/openapi.yaml` to verify the 12 endpoint groups exist
4. Use `packages/contracts/src/index.ts` to verify the 22 data entities
5. Use `packages/domain/src/access.ts` to verify the 16-action × 7-role matrix
