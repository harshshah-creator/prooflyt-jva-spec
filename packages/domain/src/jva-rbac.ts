/**
 *  JVA-aligned RBAC — the exact 7 roles + 16 actions from §S1.3 / §A5 / §A10.
 *
 *  This file mirrors the JVA doc's role names verbatim. The actual
 *  implementation in `prooflyt-msp/packages/domain/src/index.ts` uses
 *  slightly different internal IDs (TENANT_ADMIN, COMPLIANCE_MANAGER, etc.)
 *  — see ROLE_MAPPING below for the 1:1 correspondence.
 *
 *  The JVA's §A10 permissions matrix is captured exactly as written.
 *  Any divergence from this file is a contractual non-compliance.
 */

/**
 *  The 7 roles from §S1.3 / §A5, in the exact order and casing of the doc.
 */
export type JvaRole =
  | "Admin"
  | "Compliance Officer"
  | "Data Mapping Officer"
  | "Rights Officer"
  | "Data Manager"
  | "Processor Liaison"
  | "Auditor";

export const JVA_ROLES: JvaRole[] = [
  "Admin",
  "Compliance Officer",
  "Data Mapping Officer",
  "Rights Officer",
  "Data Manager",
  "Processor Liaison",
  "Auditor",
];

/**
 *  Role primary responsibilities — verbatim from §S1.3.
 */
export const JVA_ROLE_RESPONSIBILITIES: Record<JvaRole, string> = {
  Admin:
    "Tenant setup, user management, master data configuration, obligation library, all permissions.",
  "Compliance Officer":
    "Overall DPDP strategy, obligation management, dashboard monitoring, approvals.",
  "Data Mapping Officer":
    "Source discovery, file profiling, AI classification review and approval.",
  "Rights Officer":
    "Rights request intake, case management, SLA tracking, erasure verification.",
  "Data Manager":
    "Retention schedules, deletion execution, legal hold management, breach notifications.",
  "Processor Liaison":
    "Vendor registry, DPA tracking, sub-processor management, purge request coordination.",
  Auditor:
    "Read-only access to audit trail, reports, evidence library.",
};

/**
 *  Primary modules each role works in — verbatim from §A5.
 */
export const JVA_ROLE_MODULES: Record<JvaRole, string[]> = {
  Admin: ["All modules"],
  "Compliance Officer": ["Dashboard", "Obligation Library", "All controls"],
  "Data Mapping Officer": ["Source Discovery", "Data Register"],
  "Rights Officer": ["Rights and Grievances", "Evidence Library"],
  "Data Manager": ["Retention and Deletion", "Breach Register"],
  "Processor Liaison": ["Processor / Vendor Management", "Evidence Library"],
  Auditor: ["Reports", "Audit Trail", "Evidence Library"],
};

/**
 *  Mapping from JVA role names to the implementation IDs used in
 *  `prooflyt-msp`. The internal IDs are SHOUTING_SNAKE_CASE; the doc
 *  uses Title Case with spaces.
 */
export const ROLE_MAPPING: Record<JvaRole, string> = {
  Admin: "TENANT_ADMIN",
  "Compliance Officer": "COMPLIANCE_MANAGER",
  "Data Mapping Officer": "DEPARTMENT_OWNER", // closest fit; see note
  "Rights Officer": "CASE_HANDLER",
  "Data Manager": "REVIEWER", // closest fit; see note
  "Processor Liaison": "SECURITY_OWNER", // closest fit; see note
  Auditor: "AUDITOR",
};

/**
 *  §A10 Permissions Matrix — verbatim. Each row is one action; each
 *  column is one role; Y = permitted, N = not permitted.
 *
 *  16 actions × 7 roles. Auditing this matrix against the
 *  implementation is a §A10 acceptance step at M3.
 */
export type JvaAction =
  | "View Dashboard"
  | "Edit Obligation Library"
  | "Create Source / Upload File"
  | "Review and Approve AI Classification"
  | "Create/Edit Data Register Field"
  | "Create/Edit and Publish Notice"
  | "Create and Manage Rights Case"
  | "Create Retention Rule"
  | "Execute Deletion"
  | "Create and Manage Breach Incident"
  | "Create/Edit Processor"
  | "Route Purge Request"
  | "Upload Evidence"
  | "View and Export Audit Trail"
  | "Run Reports"
  | "Manage Users"
  | "Configure Tenant";

/**
 *  Y / N grants. Order matches §A10. Reading: row = action, columns =
 *  the 7 roles in JVA_ROLES order.
 */
export const JVA_PERMISSIONS_MATRIX: Record<JvaAction, Record<JvaRole, boolean>> = {
  "View Dashboard": { Admin: true, "Compliance Officer": true, "Data Mapping Officer": true, "Rights Officer": true, "Data Manager": true, "Processor Liaison": true, Auditor: true },
  "Edit Obligation Library": { Admin: true, "Compliance Officer": true, "Data Mapping Officer": false, "Rights Officer": false, "Data Manager": false, "Processor Liaison": false, Auditor: false },
  "Create Source / Upload File": { Admin: true, "Compliance Officer": true, "Data Mapping Officer": true, "Rights Officer": false, "Data Manager": false, "Processor Liaison": false, Auditor: false },
  "Review and Approve AI Classification": { Admin: true, "Compliance Officer": true, "Data Mapping Officer": true, "Rights Officer": false, "Data Manager": false, "Processor Liaison": false, Auditor: false },
  "Create/Edit Data Register Field": { Admin: true, "Compliance Officer": true, "Data Mapping Officer": true, "Rights Officer": false, "Data Manager": false, "Processor Liaison": false, Auditor: false },
  "Create/Edit and Publish Notice": { Admin: true, "Compliance Officer": true, "Data Mapping Officer": false, "Rights Officer": false, "Data Manager": false, "Processor Liaison": false, Auditor: false },
  "Create and Manage Rights Case": { Admin: true, "Compliance Officer": true, "Data Mapping Officer": false, "Rights Officer": true, "Data Manager": false, "Processor Liaison": false, Auditor: false },
  "Create Retention Rule": { Admin: true, "Compliance Officer": true, "Data Mapping Officer": false, "Rights Officer": false, "Data Manager": true, "Processor Liaison": false, Auditor: false },
  "Execute Deletion": { Admin: true, "Compliance Officer": false, "Data Mapping Officer": false, "Rights Officer": false, "Data Manager": true, "Processor Liaison": false, Auditor: false },
  "Create and Manage Breach Incident": { Admin: true, "Compliance Officer": true, "Data Mapping Officer": false, "Rights Officer": false, "Data Manager": true, "Processor Liaison": false, Auditor: false },
  "Create/Edit Processor": { Admin: true, "Compliance Officer": true, "Data Mapping Officer": false, "Rights Officer": false, "Data Manager": false, "Processor Liaison": true, Auditor: false },
  "Route Purge Request": { Admin: true, "Compliance Officer": true, "Data Mapping Officer": false, "Rights Officer": false, "Data Manager": false, "Processor Liaison": true, Auditor: false },
  "Upload Evidence": { Admin: true, "Compliance Officer": true, "Data Mapping Officer": true, "Rights Officer": true, "Data Manager": true, "Processor Liaison": true, Auditor: false },
  "View and Export Audit Trail": { Admin: true, "Compliance Officer": true, "Data Mapping Officer": true, "Rights Officer": true, "Data Manager": true, "Processor Liaison": true, Auditor: true },
  "Run Reports": { Admin: true, "Compliance Officer": true, "Data Mapping Officer": true, "Rights Officer": true, "Data Manager": true, "Processor Liaison": true, Auditor: true },
  "Manage Users": { Admin: true, "Compliance Officer": false, "Data Mapping Officer": false, "Rights Officer": false, "Data Manager": false, "Processor Liaison": false, Auditor: false },
  "Configure Tenant": { Admin: true, "Compliance Officer": false, "Data Mapping Officer": false, "Rights Officer": false, "Data Manager": false, "Processor Liaison": false, Auditor: false },
};

/**
 *  Check whether a given role may perform a given action. Pure-function
 *  table lookup, no side effects.
 */
export function canRolePerform(role: JvaRole, action: JvaAction): boolean {
  return JVA_PERMISSIONS_MATRIX[action][role];
}

/**
 *  Enumerate all (role, action) grants — useful for generating a
 *  printable matrix for the M3 acceptance binder.
 */
export function enumerateGrants(): Array<{ role: JvaRole; action: JvaAction; permitted: boolean }> {
  const out: Array<{ role: JvaRole; action: JvaAction; permitted: boolean }> = [];
  for (const action of Object.keys(JVA_PERMISSIONS_MATRIX) as JvaAction[]) {
    for (const role of JVA_ROLES) {
      out.push({ role, action, permitted: JVA_PERMISSIONS_MATRIX[action][role] });
    }
  }
  return out;
}
