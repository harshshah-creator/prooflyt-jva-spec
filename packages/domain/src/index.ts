/**
 *  Module-level access — implementation-flavoured table from prooflyt-msp.
 *
 *  This is the per-module visibility check used by the runtime. The
 *  authoritative JVA matrix (§A10, 16 actions × 7 roles) is in
 *  `./jva-rbac.ts` — that's the contractual reference; this file is the
 *  operational coarse-grained gate.
 *
 *  See jva-rbac.ts ROLE_MAPPING for how the JVA role names
 *  (Admin / Compliance Officer / ...) translate to these internal IDs.
 *
 *  The "connectors" and "dpdp-reference" modules below are not in §S1.4 —
 *  connectors is §S1.12 Phase-2; dpdp-reference is an in-app help view
 *  (cross-cutting, accessible to everyone).
 */

import type { ModuleId, Role } from "../../contracts/dist/index.js";

export const MODULE_ACCESS: Record<ModuleId, Role[]> = {
  dashboard: ["TENANT_ADMIN", "COMPLIANCE_MANAGER", "DEPARTMENT_OWNER", "REVIEWER", "CASE_HANDLER", "SECURITY_OWNER", "AUDITOR"],
  setup: ["TENANT_ADMIN", "COMPLIANCE_MANAGER"],
  sources: ["TENANT_ADMIN", "COMPLIANCE_MANAGER", "REVIEWER"],
  register: ["TENANT_ADMIN", "COMPLIANCE_MANAGER", "REVIEWER", "AUDITOR"],
  notices: ["TENANT_ADMIN", "COMPLIANCE_MANAGER", "REVIEWER"],
  rights: ["TENANT_ADMIN", "COMPLIANCE_MANAGER", "CASE_HANDLER", "AUDITOR"],
  retention: ["TENANT_ADMIN", "COMPLIANCE_MANAGER", "CASE_HANDLER", "SECURITY_OWNER", "AUDITOR"],
  incidents: ["TENANT_ADMIN", "COMPLIANCE_MANAGER", "SECURITY_OWNER", "AUDITOR"],
  processors: ["TENANT_ADMIN", "COMPLIANCE_MANAGER", "SECURITY_OWNER", "AUDITOR"],
  evidence: ["TENANT_ADMIN", "COMPLIANCE_MANAGER", "REVIEWER", "CASE_HANDLER", "SECURITY_OWNER", "AUDITOR"],
  reports: ["TENANT_ADMIN", "COMPLIANCE_MANAGER", "AUDITOR"],
  "dpdp-reference": ["TENANT_ADMIN", "COMPLIANCE_MANAGER", "DEPARTMENT_OWNER", "REVIEWER", "CASE_HANDLER", "SECURITY_OWNER", "AUDITOR"],
  connectors: ["TENANT_ADMIN", "COMPLIANCE_MANAGER", "SECURITY_OWNER", "AUDITOR"],
};

export function canAccessModule(moduleId: ModuleId, roles: Role[]) {
  return MODULE_ACCESS[moduleId].some((role) => roles.includes(role));
}

export * from "./jva-rbac.js";
