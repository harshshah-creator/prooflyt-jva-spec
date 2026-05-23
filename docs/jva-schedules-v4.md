**PROOFLYT TECHNOLOGIES PRIVATE LIMITED**

**SCHEDULES TO JOINT VENTURE AGREEMENT**

**SCHEDULE 1 - PRODUCT REQUIREMENT DOCUMENT (PRD)**

**AND**

**SCHEDULE 2 - MILESTONE ACCEPTANCE CRITERIA**

  ----------------------- -----------------------------------------------
  Document Status         Execution Draft v1.0 - To be agreed and signed
                          by both Parties before Phase 2 Kick-Off

  Source Documents        Prooflyt DPDP Compliance Desk PRD v2.0 (March
                          2026); FRD v2.0 (March 2026); Master Product
                          Document v2.0 (March 2026)

  Date                    \[●\] \[●\] 2026

  Parties                 Novation Legal \| Codewave Technologies Private
                          Limited

  Governed by             Joint Venture Agreement dated \[●\] \[●\] 2026
  ----------------------- -----------------------------------------------

*These Schedules form an integral part of the Joint Venture Agreement
and are based on the agreed Prooflyt product documents listed above. No
Milestone shall be assessed for acceptance except by reference to the
criteria set out in Schedule 2. The scope of work is defined exclusively
by Schedule 1; no obligation arises to deliver features not expressly
listed herein.*

**Severity Definitions**

The following severity definitions apply to all defects, bugs, and
vulnerabilities referenced in these Schedules and in the JVA:

  ---------------------------------------------------------------------------
  **Severity**   **Definition**        **Examples**          **Response SLA
                                                             (Warranty
                                                             Period)**
  -------------- --------------------- --------------------- ----------------
  Critical       Platform is           Cannot log in; all    48 hours to
                 completely unusable,  data register records resolve
                 core data is at risk  deleted; active data  
                 of loss or            breach; tenant        
                 corruption, or a      isolation broken.     
                 security breach has                         
                 occurred or is                              
                 imminent.                                   

  High           A core, Must Have     Rights request portal 5 Business Days
                 feature defined in    not accepting         to resolve
                 Schedule 1 is broken  submissions; AI       
                 or non-functional,    classification engine 
                 significantly         returning no results; 
                 impeding compliance   breach 72-hour timer  
                 operations, with no   not firing            
                 viable workaround.    escalation.           

  Medium         A feature is          Readiness score       Next scheduled
                 partially broken or   calculating slightly  release
                 behaving unexpectedly incorrectly; PDF      
                 but a workaround      report export failing 
                 exists, or a Should   but CSV works; filter 
                 Have feature is       in Data Register not  
                 non-functional.       returning expected    
                                       results.              

  Low            Cosmetic, UI/UX, or   Misaligned UI         Commercially
                 minor usability issue element; incorrect    reasonable
                 with no impact on     capitalisation in     efforts
                 compliance            error message; minor  
                 functionality or data visual inconsistency  
                 integrity.            on tablet view.       
  ---------------------------------------------------------------------------

For security vulnerabilities, the CVSS score-based definitions in
Schedule 2 acceptance criteria tables shall take precedence over the
above. The severity definitions above govern defects identified during
UAT and the Post-M3 Warranty Period under Clause 25A of the JVA.

**Both Parties must review, agree, and execute these Schedules before
Phase 2 development commences.**

**Schedule 1 - Product Requirement Document (PRD)**

**[S1.1 Product Overview]{.underline}**

Prooflyt DPDP Compliance Desk is a privacy operations
Software-as-a-Service platform designed to enable organisations acting
as Data Fiduciaries under the Digital Personal Data Protection Act, 2023
(\"DPDP Act\") to achieve and sustain compliance. The platform combines
three integrated systems: (a) a Consent and Rights Operations platform;
(b) a Data Discovery and Governance platform; and (c) a Compliance
Workflow and Evidence platform.

The Phase 1 MVP (the scope of this Agreement) delivers a complete,
investor-ready, and operationally complete product covering all 10 core
modules. Phase 1 represents a fully functional DPDP compliance platform
that organisations can deploy immediately to govern their data
operations, manage obligations, and demonstrate readiness for
enforcement.

**[S1.2 Key Differentiator - AI-Powered Smart Mapping]{.underline}**

The product\'s primary competitive differentiator is AI-Powered Smart
Mapping, which auto-classifies data fields using a privacy-first LLM
approach. No raw personally identifiable information (PII) is ever sent
to any external model. The system operates on a hybrid classification
approach:

- Rule-Based Patterns: Regex-based detection of known Indian PII formats
  (Aadhaar: 12-digit number; PAN: 10-character alphanumeric; phone: +91
  prefix; email: \@domain format).

- LLM Semantic Classification: Column headers and anonymized/masked
  sample rows only are passed to the LLM. The LLM never receives actual
  names, emails, Aadhaar numbers, or any sensitive values.

- Three Profiling Modes: (i) Header-Only - LLM processes column names
  only; (ii) Masked-Sample - first 100 rows with PII masked via
  regex; (iii) Ephemeral Full-Profile - full sample processed and
  deleted within 24 hours of classification.

- Self-Hosted Option: Architecture must support self-hosted / air-gapped
  LLM deployment for enterprise customers.

- Human-in-the-Loop: All AI classifications require human review and
  approval before being pushed to the Data Register. AI assists; humans
  decide.

**[S1.3 Target Users and Roles]{.underline}**

The platform shall support the following seven user roles with
role-based access control (RBAC) as defined in the permissions matrix in
the FRD v2.0:

  -----------------------------------------------------------------------
  **Role**         **Primary Responsibilities**     **Primary Modules**
  ---------------- -------------------------------- ---------------------
  Admin            Tenant setup, user management,   All modules
                   master data configuration,       
                   obligation library, all          
                   permissions                      

  Compliance       Overall DPDP strategy,           Dashboard, Obligation
  Officer          obligation management, dashboard Library, all controls
                   monitoring, approvals            

  Data Mapping     Source discovery, file           Source Discovery,
  Officer          profiling, AI classification     Data Register
                   review and approval              

  Rights Officer   Rights request intake, case      Rights and
                   management, SLA tracking,        Grievances, Evidence
                   erasure verification             Library

  Data Manager     Retention schedules, deletion    Retention and
                   execution, legal hold            Deletion, Breach
                   management, breach notifications Register

  Processor        Vendor registry, DPA tracking,   Processor/Vendor
  Liaison          sub-processor management, purge  Management, Evidence
                   request coordination             Library

  Auditor / Viewer Read-only access to audit trail, Reports, Audit Trail,
                   reports, evidence library        Evidence Library
  -----------------------------------------------------------------------

**[S1.4 Phase 1 Module Scope - 10 Core Modules]{.underline}**

The following 10 modules are in scope for Phase 1 (the MVP). All 10
modules must be fully functional at M3. No module may be deferred
post-MVP. The modules correspond to the four-layer product architecture:
(i) Orchestration and Insight; (ii) Input and Classification; (iii)
Control and Execution; and (iv) Proof and Audit.

  -------------------------------------------------------------------------------
  **No.**   **Module**       **Layer**        **Description**
  --------- ---------------- ---------------- -----------------------------------
  1         Company Setup    Foundation       Multi-tenant company profile, org
            and RBAC                          hierarchy, user invitation, 7-role
                                              RBAC system, tenant settings and
                                              master data configuration.

  2         Source Discovery Input and        CSV/XLS/XLSX file upload and
            and AI-Powered   Classification   validation; 3 profiling modes
            Smart Mapping                     (Header-Only, Masked-Sample,
                                              Ephemeral Full-Profile); AI
                                              classification engine (rule-based +
                                              LLM); confidence scoring; human
                                              review and approval workflow;
                                              workflow states (Draft to Approved
                                              to Archived).

  3         Data Register    Control and      Comprehensive field-level inventory
                             Execution        of all personal data processed.
                                              CRUD operations; field metadata
                                              (name, type, category, purpose,
                                              legal basis, retention period);
                                              source tracking; approval workflow;
                                              versioning; bulk import from Source
                                              Discovery; search and filter.

  4         Compliance       Orchestration    Default landing page. Readiness
            Dashboard /      and Insight      Score (0-100) calculated as
            Obligation                        (evidence_count /
            Control Center                    total_obligations) x 100;
                                              Obligation Library with all DPDP
                                              obligations; Evidence bucketing by
                                              obligation; KPI cards (open
                                              obligations, due rights cases,
                                              scheduled deletions, unacknowledged
                                              processors); quick-action links.

  5         Notice Builder   Control and      Template-driven privacy notice
                             Execution        creation and management. Template
                                              library; drag-and-drop editor;
                                              obligation mapping; version
                                              control; distribution tracking
                                              (email, web, mobile); Hindi and
                                              regional language template support.

  6         Rights and       Control and      Full implementation of DPDP rights
            Grievances       Execution        per Chapter III of the Act. Public
                                              self-service rights request portal;
                                              case management with intake,
                                              assignment, tracking and closure;
                                              SLA tracking (30-day for access
                                              requests; 45-day for deletion
                                              requests); all right types (access,
                                              correction, deletion, portability,
                                              grievance, consent withdrawal);
                                              erasure evidence tracking;
                                              automated notifications; audit
                                              trail.

  7         Retention and    Control and      Rules-based retention schedule
            Deletion         Execution        management. Retention Rules Engine
                                              by data category and purpose;
                                              Retention Calendar with visual
                                              deletion-due dates; batch deletion
                                              (max 10,000 records per batch) with
                                              audit trail; Legal Hold (blocks
                                              deletion for data subject to
                                              litigation or regulatory holds);
                                              deletion proof capture
                                              (screenshot/log required before
                                              task marked complete); notification
                                              queue.

  8         Breach Register  Control and      Personal data breach management and
                             Execution        notification. Quick-create intake;
                                              severity levels (Low, Medium, High,
                                              Critical); 72-hour assessment timer
                                              with auto-escalation to Admin if
                                              not assessed within 72 hours;
                                              breaches affecting more than 1,000
                                              data subjects auto-marked High or
                                              Critical; notification tracking
                                              (data subjects and regulators);
                                              investigation notes and remediation
                                              tasks; evidence capture;
                                              audit-ready export.

  9         Processor /      Control and      Third-party data processor and
            Vendor           Execution        vendor governance. Processor
            Management                        Registry (name, category, country,
                                              data categories, contract status,
                                              DPA status); DPA clause checklist;
                                              new processor requires contract and
                                              DPA status before activation; DPA
                                              missing triggers risk flag on
                                              dashboard; purge request routing
                                              linked to rights cases;
                                              sub-processor tracking; audit log
                                              of all processor communications.

  10        Evidence         Proof and Audit  Centralised evidence repository and
            Library, Audit                    immutable audit trail. Evidence
            Trail, and                        Library: artifact storage
            Reports                           (policies, notices, deletion
                                              proofs, DPAs), tagging to
                                              obligations, version history. Audit
                                              Trail: immutable log of all state
                                              changes across all objects (who,
                                              what, when, why); access logging;
                                              export capability. Reports:
                                              Register Completeness, Open Rights,
                                              Due Deletions, Incident Register,
                                              Audit Extract, Processor Status;
                                              export to PDF, Excel, and JSON.
  -------------------------------------------------------------------------------

**[S1.5 End-to-End Product Workflow]{.underline}**

The complete end-to-end compliance workflow the platform must support
is:

  ---------------------------------------------------------------------------------
  **Step**       **What Happens**                    **Who Is Involved**
  -------------- ----------------------------------- ------------------------------
  1\. Org Setup  Admin creates company profile,      Admin, DPO
                 defines org hierarchy, invites team 
                 (DPO, data owners, engineers)       

  2\. Data Audit DPO plans data sources: SaaS apps,  DPO, Data Owners
  Planning       databases, email, CRM. Prioritises  
                 by risk.                            

  3\. Smart      Team exports CSV/Excel snapshots.   Data Owners (review), LLM
  Mapping        LLM classifies columns: PII types,  (classify)
  (AI-Powered)   purposes, retention rules.          
                 Confidence scores guide review.     

  4\. Data       Team validates LLM suggestions,     DPO, Data Owners
  Register Build fills gaps, adds legal basis.       
                 Builds unified register.            

  5\. Obligation System auto-populates obligation    System (auto), DPO (review)
  Profiling      buckets from register (Collection,  
                 Processing, Rights, Retention,      
                 Breach).                            

  6\. Evidence   Team uploads policies, consent      Compliance Team
  Collection     logs, audit trails, training        
                 certificates. System links to       
                 obligations.                        

  7\. Readiness  System calculates 0-100 maturity    System (auto)
  Scoring        score per obligation bucket. Gaps   
                 are identified.                     

  8\. Continuous DSAR handling, retention purges,    Operations Team
  Operations     vendor onboarding, breach logging.  
                 Audit trail recorded for all        
                 actions.                            
  ---------------------------------------------------------------------------------

**[S1.6 Screen Inventory]{.underline}**

The following screens must be built and functional at M3. All screens
must be responsive (desktop 1280px+ and tablet 768px+):

  ------------------------------------------------------------------------
  **Module**       **Screen Name**  **Purpose**
  ---------------- ---------------- --------------------------------------
  Dashboard        Compliance       Landing page with readiness score and
                   Overview         KPIs

  Dashboard        Obligation       Browse and assign obligations
                   Library          

  Dashboard        Evidence Board   View evidence by obligation

  Source Discovery Source List      Browse all data sources

  Source Discovery File Upload      Upload CSV/XLS/XLSX files (max 100MB)

  Source Discovery Profiling and AI Review AI classifications (confidence
                   Classification   scores); approve or override fields

  Data Register    Register View    Browse all classified fields with
                                    filter and search

  Data Register    Bulk Import      Import classified fields from Source
                                    Discovery

  Notice Builder   Notice List      Browse all notices with version
                                    history

  Notice Builder   Notice Editor    Create/edit notice with templates and
                                    drag-and-drop

  Rights and       Public Rights    External self-service form for data
  Grievances       Form             subjects

  Rights and       Rights Case List Browse all cases with SLA status
  Grievances                        

  Rights and       Rights Case      Case management, SLA tracking, erasure
  Grievances       Details          evidence collection

  Retention and    Retention Rules  Define and manage retention schedules
  Deletion                          

  Retention and    Deletion         Visual calendar of deletion-due dates
  Deletion         Calendar         

  Retention and    Deletion         Execute batch deletions with proof
  Deletion         Execution        capture

  Breach Register  Breach List      Browse all incidents with severity and
                                    status

  Breach Register  Breach           Rapid incident intake form
                   Quick-Create     

  Breach Register  Breach Details   Investigation, notification tracking,
                                    remediation tasks

  Processor        Processor        Browse all vendors/processors with DPA
  Management       Registry         status and risk flags

  Processor        Processor        Add vendor, capture contract details
  Management       Create/Edit      and DPA status

  Processor        DPA Tracking     Manage DPA clauses and documentation
  Management                        

  Processor        Purge Routing    Route deletion requests from rights
  Management                        cases to processors

  Evidence Library Evidence         Artifact storage, tagging to
                   Repository       obligations, search and filter

  Reports          Report Builder   Select report type, date range, and
                                    export format

  Admin            User Management  Create/edit users, assign roles,
                                    manage permissions

  Admin            Tenant Settings  Branding, notification preferences,
                                    master data configuration
  ------------------------------------------------------------------------

**[S1.7 Technical Architecture Requirements]{.underline}**

+---------------------+---------------------------------------------------------------------------+
| **Requirement**     | **Specification**                                                         |
+:====================+:==========================================================================+
| Architecture        | Multi-tenant SaaS. Separate encryption keys, storage prefixes, and audit  |
|                     | trails per tenant. Hard tenant-level data isolation enforced at the       |
|                     | database layer.                                                           |
+---------------------+---------------------------------------------------------------------------+
| Data Philosophy     | Metadata-first: the system persists structured metadata about personal    |
|                     | data, not raw datasets. Raw files (uploaded CSVs/XLS) are temporary and   |
|                     | purged after profiling.                                                   |
+---------------------+---------------------------------------------------------------------------+
| Frontend            | Responsive web application. Desktop (1280px+) and tablet (768px+)         |
|                     | support. No native mobile app in Phase 1.                                 |
+---------------------+---------------------------------------------------------------------------+
| Backend             | RESTful API architecture. API-first design per the API contract in FRD    |
|                     | v2.0, Section 12. All 12 endpoint groups must be implemented.             |
+---------------------+---------------------------------------------------------------------------+
| Authentication      | JWT-based authentication. Token expiry: 1 hour. Role-based access control |
|                     | enforced at API layer on every endpoint.                                  |
+---------------------+---------------------------------------------------------------------------+
| Database            | Relational database with full audit trail capability. All                 |
|                     | compliance-critical records (consent, breach, rights requests, audit      |
|                     | trail) must be immutable (append-only; no deletion or editing of audit    |
|                     | records).                                                                 |
+---------------------+---------------------------------------------------------------------------+
| Data Residency      | All tenant data must be stored within India. Cloud region must be         |
|                     | India-based (AWS ap-south-1, GCP asia-south1, or Azure centralindia).     |
|                     |                                                                           |
|                     | **S1.7A Logging and Observability Requirements**                          |
|                     |                                                                           |
|                     | The Platform shall include, at a minimum, the following application-level |
|                     | logging and monitoring capabilities at M3:                                |
|                     |                                                                           |
|                     |   ----------------------------------------------------------------------- |
|                     |   **Logging Category**  **Requirement**                                   |
|                     |   --------------------- ------------------------------------------------- |
|                     |   Application Error     All unhandled exceptions and application errors   |
|                     |   Logging               must be captured with stack trace, timestamp,     |
|                     |                         user ID (hashed/tokenised), and request context.  |
|                     |                         Errors must be stored in a queryable log store    |
|                     |                         accessible to Codewave and Novation.              |
|                     |                                                                           |
|                     |   API Request Logging   All API requests logged with method, endpoint,    |
|                     |                         response code, and response time. No PII or       |
|                     |                         request body content logged. Log retention:       |
|                     |                         minimum 30 days.                                  |
|                     |                                                                           |
|                     |   Security Event        Failed authentication attempts, role escalation   |
|                     |   Logging               attempts, and bulk export events must be          |
|                     |                         separately logged with IP address and timestamp.  |
|                     |                                                                           |
|                     |   System Health         Basic uptime and health check endpoint (/health   |
|                     |   Monitoring            or equivalent) must be implemented. Suitable for  |
|                     |                         integration with standard monitoring tools        |
|                     |                         (UptimeRobot, Pingdom, AWS CloudWatch, or         |
|                     |                         equivalent).                                      |
|                     |                                                                           |
|                     |   Performance           P95 response time tracked per API endpoint.       |
|                     |   Monitoring            Dashboard readiness score recalculation time      |
|                     |                         logged. AI classification job duration logged per |
|                     |                         batch.                                            |
|                     |   ----------------------------------------------------------------------- |
|                     |                                                                           |
|                     | Logs shall not contain raw PII. Audit Trail logs (per Module 10) are a    |
|                     | separate compliance obligation and are governed by S1.4; application logs |
|                     | governed by this clause are for operational and diagnostic purposes only. |
+---------------------+---------------------------------------------------------------------------+
| AI / LLM            | Privacy-first LLM integration: LLM receives only column headers and       |
|                     | anonymized/masked samples. No raw PII sent to any external model under    |
|                     | any circumstance. Self-hosted/air-gapped LLM option must be               |
|                     | architecturally supported.                                                |
+---------------------+---------------------------------------------------------------------------+
| Encryption          | AES-256 at rest for all personally identifiable data fields. TLS 1.2+ in  |
|                     | transit on all endpoints.                                                 |
+---------------------+---------------------------------------------------------------------------+
| Hosting             | Cloud-hosted. Separate production and staging environments required at    |
|                     | M3.                                                                       |
+---------------------+---------------------------------------------------------------------------+
| API Documentation   | OpenAPI/Swagger documentation covering all API endpoints. Delivered at    |
|                     | M3.                                                                       |
+---------------------+---------------------------------------------------------------------------+
| Logging and         | To be proposed by Codewave and documented in the TSD. No GPL, AGPL, LGPL, |
| Observability       | or MPL-licensed components without prior written approval from Novation   |
|                     | per Clause 16A of the JVA.                                                |
+---------------------+---------------------------------------------------------------------------+

**[S1.8 Non-Functional Requirements and Performance SLAs]{.underline}**

  -----------------------------------------------------------------------
  **Category**           **Requirement**          **SLA / Threshold**
  ---------------------- ------------------------ -----------------------
  Performance            Data Register query      Less than 1 second for
                         response time            10,000 fields

  Performance            Rights case list load    Less than 2 seconds for
                         time                     1,000 cases

  Performance            AI classification        Less than 5 minutes for
                         processing time          10,000 fields

  Performance            Dashboard readiness      Less than 10 seconds
                         score recalculation      

  Performance            Compliance report        Less than 10 seconds
                         generation (5,000 audit  
                         entries)                 

  Availability           Target uptime SLA        99.5% uptime
                         (business hours)         

  Scalability            Multi-tenant             Support 1M+ audit trail
                         architecture with        entries; stateless API
                         horizontal API server    design
                         scaling                  

  Security               All API endpoints        JWT-authenticated; RBAC
                                                  enforced at API layer
                                                  on every endpoint

  Security               PII handling             No raw PII logged in
                                                  audit trail; LLM
                                                  classification on
                                                  masked data only

  Security               Ephemeral profiling      Deleted within 24 hours
                         samples                  of classification
                                                  completion

  File Upload            Maximum file size        100MB per upload

  File Upload            Accepted formats         CSV, XLS, XLSX only

  AI Classification      Low-confidence threshold Confidence score below
                                                  50% flagged for
                                                  mandatory manual review

  Bulk Deletion          Maximum records per      10,000 records
                         batch                    

  Backup                 Automated backup         Daily snapshots with
                         frequency                30-day retention
  -----------------------------------------------------------------------

**[S1.9 Business Rules]{.underline}**

The following business rules are confirmed as agreed and must be
implemented exactly:

- Readiness Score formula: (evidence_count / total_obligations) x 100.
  Evidence classes (system-derived, evidence-derived,
  attestation-derived) contribute equally to the score.

- Obligations marked complete only when all required evidence classes
  are provided.

- AI classification rule precedence: Rule-based regex patterns take
  precedence over LLM if both trigger on the same field.

- All AI classifications require human review and approval before being
  pushed to the Data Register.

- Rights request SLAs: access requests 30-day response window; deletion
  requests 45-day response window. SLA override requires Compliance
  Officer approval.

- Erasure not marked complete until all processors have acknowledged
  deletion.

- Deletion must not execute if a Legal Hold is active on the relevant
  data category.

- Breach not assessed within 72 hours of discovery triggers automatic
  escalation to Admin.

- Breach with affected_count greater than 1,000 data subjects is
  automatically marked High or Critical severity.

- New processor requires contract and DPA status to be recorded before
  activation in the system.

- DPA missing from any processor triggers a risk flag in the processor
  list and on the dashboard KPI.

- Purge requests are automatically routed to all processors handling the
  relevant data category.

- Audit log is immutable: no deletion or editing of any audit trail
  entry is permitted through any interface.

- Bulk deletion limited to 10,000 records per batch.

- Deletion proof (screenshot or log) required before a deletion task can
  be marked complete.

**[S1.10 Demo Seed Data]{.underline}**

At M3, the system must be loaded with the following demo seed data for
investor demonstrations and product onboarding:

  -----------------------------------------------------------------------
  **Seed Data Item**      **Specification**
  ----------------------- -----------------------------------------------
  Demo Company            Bombay Grooming Labs (grooming products
                          company)

  Data Source 1           Customer Database - Fields: customer_id, name,
                          phone, email, address, membership_date

  Data Source 2           Inventory System - Fields: product_id,
                          product_name, quantity, cost (non-PII for
                          contrast)

  Sample Rights Cases     2 access requests (one open, one closed); 1
                          deletion request (in progress)

  Sample Breach           Minor data exposure incident; notification
                          sent; remediated and closed

  Sample Processor        Third-party SMS vendor - DPA status: signed

  Sample Notices          Privacy notice (published, version 2); SMS
                          consent notice (draft)

  Readiness Score         67% (7 of 10 obligations with evidence) -
                          demonstrating a realistic mid-journey
                          compliance state
  -----------------------------------------------------------------------

**[S1.11 Build Order (Phase 1)]{.underline}**

The following build order is agreed for Phase 1 delivery. This informs
the M2 milestone scope:

  -----------------------------------------------------------------------------
  **Build Block**  **Scope**                                **Target**
  ---------------- ---------------------------------------- -------------------
  Block 1 -        JWT-based authentication; multi-tenant   Weeks 1-3 (Phase 1)
  Foundation       data isolation; user management; RBAC (7 
                   roles); master data (obligation library, 
                   data categories, legal bases)            

  Block 2 - Source File upload with validation              Weeks 4-5
  Discovery and AI (CSV/XLS/XLSX, 100MB); profiling engine  
  Profiling Engine (3 modes); AI classification             
                   (rule-based + LLM); regex masking        
                   (Aadhaar, PAN, phone, email);            
                   privacy-first LLM approach               

  Block 3 -        Review UI with confidence scores and     Weeks 5-6
  Classification   override capability; Data Register CRUD; 
  Review and Data  bulk import from Source Discovery;       
  Register         approval workflow; versioning            

  Block 4 -        Compliance Dashboard with readiness      Weeks 6-8 (M2
  Dashboard,       score and KPI cards; Obligation Library; target)
  Notice Builder,  notice editor with templates;            
  Obligations      distribution tracking                    

  Block 5 -        Public rights request portal; case       Weeks 8-10
  Rights,          management with SLA tracking; retention  
  Retention,       rules engine; deletion calendar and      
  Breach, Legal    execution; legal hold; breach            
  Hold             quick-create; 72-hour escalation;        
                   notifications                            

  Block 6 -        Processor registry; DPA tracking; purge  Weeks 10-12
  Processors,      request routing; evidence repository;    
  Evidence         core report types (all 6);               
  Library, Reports PDF/Excel/JSON export                    

  Block 7 - QA     Bug fixes; performance optimisation;     Weeks 12-13 (M3
  Hardening, Demo  demo seed data (Bombay Grooming Labs);   target)
  Data, Polish     end-to-end testing; security review;     
                   load testing                             
  -----------------------------------------------------------------------------

**[S1.12 Phase 2 Scope - Expressly Out of Scope for Phase 1 / This
Agreement]{.underline}**

The following are expressly excluded from Phase 1 scope and this
Agreement. They constitute Phase 2 work, which is deferred to post-Phase
1 delivery and shall require a separate commercial agreement and
Statement of Work:

  -----------------------------------------------------------------------
  **Phase 2 Module**      **Description**
  ----------------------- -----------------------------------------------
  Native System           Salesforce CRM, HubSpot CRM, SAP HR, Zoho CRM,
  Integrations            Razorpay connectors for auto-discovery and data
                          flow mapping

  Sector Compliance Packs Fintech, edtech, healthcare, D2C, NBFC
                          sector-specific obligation templates and risk
                          frameworks

  DPO Portal              Multi-entity dashboard for MSSP and
  (White-Label)           DPO-as-a-service plays; white-label branding
                          for enterprise clients

  Consent Management      Version-tracked consent collection widgets for
                          web/mobile, cookie banners, consent receipts,
                          withdrawal workflows

  AI Compliance Advisor   Context-aware generative AI chatbot over the
                          company register and obligation state;
                          proactive compliance suggestions

  Enterprise SSO          OpenID Connect / SAML 2.0 / LDAP integration
  (Keycloak)              via Keycloak for large enterprise deployments

  Smart Mapping v2        Database schema connectors (PostgreSQL, MySQL,
                          MongoDB), API response mapping, auto-field
                          detection from live systems

  Advanced Analytics and  Trend analysis, obligation maturity by
  Reporting               vertical, comparative benchmarking dashboards
  -----------------------------------------------------------------------

**[S1.13 Schedule 1 Execution]{.underline}**

This Schedule 1 is agreed and executed as part of the Joint Venture
Agreement:

+------------------------------------------------+---+------------------------------------------------+
| **For NOVATION LEGAL**                         |   | **For CODEWAVE TECHNOLOGIES PVT. LTD.**        |
|                                                |   |                                                |
| Signature:                                     |   | Signature:                                     |
| \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |   | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
|                                                |   |                                                |
| Name:                                          |   | Name:                                          |
| \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |   | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
|                                                |   |                                                |
| Date:                                          |   | Date:                                          |
| \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |   | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
+------------------------------------------------+---+------------------------------------------------+

**Schedule 2 - Milestone Acceptance Criteria**

*This Schedule sets out specific, objective, and verifiable acceptance
criteria for each Milestone. Each criterion has a designated
verification method and a Pass/Fail checkbox to be completed by Novation
during acceptance review. No Milestone is accepted unless all Must Pass
criteria are confirmed as Pass. Should Pass criteria may be waived by
Novation in writing. Deemed acceptance under Clause 11.2 of the JVA
(applicable to M2 only) requires all Must Pass criteria to be
demonstrably met in Codewave\'s Delivery Notice.*

**[S2.1 Milestone M1 - Foundation and Discovery (STATUS:
COMPLETE)]{.underline}**

M1 has been completed prior to the Effective Date of the JVA. The
following are recorded for reference and form the baseline for Phase 2:

  -----------------------------------------------------------------------
  **M1 Deliverable**                  **Status**
  ----------------------------------- -----------------------------------
  PRD (this Schedule 1) agreed and    \[To be confirmed on signing\]
  signed by both Parties              

  Technical Scope Document (TSD)      \[To be confirmed on signing\]
  agreed and signed by both Parties   

  System architecture documented:     Complete
  component diagram, data flow        
  diagram, multi-tenant isolation     
  design                              

  Technology stack confirmed and      Complete
  documented in TSD                   

  Database schema (draft) documented  Complete
  and consistent with FRD v2.0 data   
  models                              

  Development environment live and    Complete
  accessible to Novation with Admin   
  access                              

  Code repository created in          Complete
  SPV/Novation-controlled             
  organisation with Novation as       
  Admin/Owner                         

  This Schedule 2 agreed and signed   \[To be confirmed on signing\]
  by both Parties                     
  -----------------------------------------------------------------------

**[S2.2 Milestone M2 - Working Prototype (Target: Week 8 from Phase 2
Kick-Off)]{.underline}**

M2 corresponds to completion of Build Blocks 1 through 4. M2 triggers:
(a) crystallisation of 5% equity obligation on Novation; and (b) release
of Tranche T2 (Rs. 2,50,000). Deemed acceptance applies after 15
Business Days of silence on a valid and complete Delivery Notice.

**M2 Delivery Notice Requirements**

Codewave\'s M2 Delivery Notice must include: (a) written notification of
milestone completion; (b) staging environment URL; (c) login credentials
for each of the 7 user roles; (d) screen recording or walkthrough video
(minimum 20 minutes) demonstrating all Must Pass criteria; (e) updated
OSS Inventory; and (f) list of any Must Pass criteria not yet met with
explanation.

**M2 - Must Pass Criteria (All Required)**

  -----------------------------------------------------------------------
  **Acceptance Criterion**                 **Verification   **Pass /
                                           Method**         Fail**
  ---------------------------------------- ---------------- -------------
  Build Block 1 - Authentication: User     Functional test  \[ \] Pass \[
  registration, login, logout, and         on staging       \] Fail
  password reset functional on staging                      

  Build Block 1 - Multi-tenancy: Two test  Isolation test   \[ \] Pass \[
  tenants exist; Tenant A data is not      on staging       \] Fail
  visible from Tenant B login                               

  Build Block 1 - RBAC: All 7 roles        Role-by-role     \[ \] Pass \[
  (Admin, Compliance Officer, Data Mapping functional test  \] Fail
  Officer, Rights Officer, Data Manager,                    
  Processor Liaison, Auditor) are                           
  creatable and enforce different module                    
  access                                                    

  Build Block 1 - Admin: User invitation   Functional test  \[ \] Pass \[
  by email functional; user can set                         \] Fail
  password and log in                                       

  Build Block 1 - Tenant Settings: Admin   Demo on staging  \[ \] Pass \[
  can configure company profile and master                  \] Fail
  data (data categories, legal bases)                       

  Build Block 2 - Source Discovery: CSV    Functional test  \[ \] Pass \[
  upload functional (minimum 1MB test file with test CSV    \] Fail
  accepted and processed)                                   

  Build Block 2 - Source Discovery: XLS    Functional test  \[ \] Pass \[
  and XLSX upload functional                                \] Fail

  Build Block 2 - Source Discovery: File   Negative         \[ \] Pass \[
  upload rejects files larger than 100MB   functional test  \] Fail
  and non-CSV/XLS/XLSX formats                              

  Build Block 2 - Header-Only profiling    Demo on staging  \[ \] Pass \[
  mode: Column headers extracted and                        \] Fail
  displayed for review                                      

  Build Block 2 - Masked-Sample profiling  Demo with test   \[ \] Pass \[
  mode: First 100 rows processed with      file containing  \] Fail
  Aadhaar, PAN, phone, and email fields    Aadhaar and PAN  
  masked by regex before display           patterns; verify 
                                           masking          

  Build Block 2 - AI Classification: At    Demo on staging  \[ \] Pass \[
  least one classification is returned     with test CSV    \] Fail
  with a confidence score (High, Medium,                    
  or Low) per uploaded field                                

  Build Block 2 - AI Classification:       Demo with a      \[ \] Pass \[
  Fields with confidence below 50% are     field below      \] Fail
  flagged for manual review                threshold        

  Build Block 2 - Classification workflow: Functional test  \[ \] Pass \[
  Data Mapping Officer can approve or                       \] Fail
  override a classification                                 

  Build Block 2 - Classification approval: Functional test  \[ \] Pass \[
  Approved classifications are blocked                      \] Fail
  from pushing to Data Register until                       
  human review is complete                                  

  Build Block 3 - Data Register: Approved  Functional test  \[ \] Pass \[
  classifications from Source Discovery                     \] Fail
  can be bulk imported to the Data                          
  Register                                                  

  Build Block 3 - Data Register: Fields    Functional test  \[ \] Pass \[
  can be created, edited, and viewed with                   \] Fail
  all required metadata (name, category,                    
  purpose, legal basis, retention period)                   

  Build Block 3 - Data Register: Changes   Functional test  \[ \] Pass \[
  to field metadata are tracked in a                        \] Fail
  version history with timestamp                            

  Build Block 3 - Data Register: Approval  Functional test  \[ \] Pass \[
  workflow functional (draft to pending to                  \] Fail
  approved)                                                 

  Build Block 4 - Compliance Dashboard:    Demo on staging  \[ \] Pass \[
  Dashboard loads with a readiness score                    \] Fail
  (0-100) and KPI cards (open obligations,                  
  due rights cases, scheduled deletions,                    
  unacknowledged processors)                                

  Build Block 4 - Compliance Dashboard:    Demo on staging  \[ \] Pass \[
  Obligation Library is present with DPDP                   \] Fail
  obligations listed and categorised                        

  Build Block 4 - Notice Builder: Notice   Demo on staging  \[ \] Pass \[
  editor is navigable and a draft notice                    \] Fail
  can be created using a template                           

  Build Block 4 - Notice Builder: Version  Functional test  \[ \] Pass \[
  control visible - a notice can be saved                   \] Fail
  and a second version created                              

  No Critical (CVSS 9.0+) vulnerabilities  Dependency scan  \[ \] Pass \[
  in dependency scan at time of M2         report submitted \] Fail
  Delivery Notice                          with Delivery    
                                           Notice           

  All source code in                       Repository       \[ \] Pass \[
  SPV/Novation-controlled repository;      access           \] Fail
  Novation confirmed as Admin/Owner        screenshot       

  API: Minimum 15 working endpoints        Postman          \[ \] Pass \[
  documented and testable (covering Auth,  collection or    \] Fail
  Users, Sources, Field Classification,    Swagger          
  Data Register)                           documentation    
                                           submitted with   
                                           Delivery Notice  
  -----------------------------------------------------------------------

**M2 - Should Pass Criteria (Waivable by Novation in Writing)**

  -----------------------------------------------------------------------
  **Acceptance Criterion**                 **Verification   **Pass /
                                           Method**         Fail**
  ---------------------------------------- ---------------- -------------
  Ephemeral Full-Profile mode: Full-sample Functional test  \[ \] Pass \[
  processed and auto-deleted within 24     with timer       \] Fail
  hours; deletion logged in audit trail    verification     

  Data Register: Search and filter by      Functional test  \[ \] Pass \[
  category, source, purpose, and legal                      \] Fail
  basis functional                                          

  Compliance Dashboard: Quick-action links Functional test  \[ \] Pass \[
  to create notices, rights cases, and                      \] Fail
  breach reports functional                                 

  Notice Builder: Distribution tracking UI Demo on staging  \[ \] Pass \[
  visible (even if email sending is not                     \] Fail
  yet live)                                                 

  Page load time under 3 seconds for all   Browser dev      \[ \] Pass \[
  Build Block 1-4 screens under            tools            \] Fail
  single-user load on staging              measurement      
  -----------------------------------------------------------------------

**[S2.3 Milestone M3 - Full MVP (Target: Week 13 from Phase 2
Kick-Off)]{.underline}**

M3 corresponds to completion of all 7 Build Blocks. M3 requires explicit
formal written acceptance from an authorised representative of Novation.
There is no deemed acceptance for M3 under any circumstances. M3
triggers: (a) SPV incorporation; (b) equity issuance at opening cap
table (Novation 90%, Codewave 10%); and (c) release of Tranches T3 and
T4 (Rs. 5,00,000 total). Novation shall have a minimum of 10 Business
Days to conduct UAT before Codewave formally requests M3 acceptance.

**M3 Delivery Notice Requirements**

Codewave\'s M3 Delivery Notice must include: (a) written notification of
M3 completion; (b) production environment URL; (c) staging environment
URL (kept live for UAT); (d) Admin credentials for Novation\'s UAT; (e)
full OpenAPI/Swagger API documentation; (f) final OSS Inventory; (g)
penetration test or security review report; (h) load test report (10,000
fields AI classification SLA; 10,000-field Data Register query SLA); (i)
Credential and Access Handover SOP; (j) copies of all contractor IP
assignment agreements; and (k) confirmation that all M2 Should Pass
criteria have been addressed.

**S1.8A Documentation Deliverables**

In addition to the technical deliverables listed in Clause S1.8,
Codewave shall deliver the following documentation at M3. All
documentation shall be in English, in a format accessible without
specialist software (PDF or web-based), and sufficient for the SPV to
operate the Platform independently:

  -----------------------------------------------------------------------
  **Document**          **Minimum Content Requirement**
  --------------------- -------------------------------------------------
  Admin Guide           Step-by-step instructions for: tenant creation
                        and configuration; user creation and role
                        assignment; master data setup (obligation
                        library, data categories, legal bases); tenant
                        settings. Sufficient for a non-technical
                        compliance team member to onboard a new tenant.

  User Guide            Module-by-module instructions for all 10 modules
                        covering the primary user workflows for each
                        role. Includes screenshots or annotated
                        walkthrough of: Source Discovery and AI
                        classification approval; Data Register review;
                        rights case management; breach incident creation
                        and escalation; report generation.

  Deployment and        Infrastructure overview, environment setup steps,
  Operations Notes      environment variables, database migration
                        commands, and basic restart/recovery procedures.
                        Sufficient for a DevOps engineer to deploy the
                        Platform on the agreed cloud infrastructure
                        without Codewave involvement.

  API Documentation     OpenAPI/Swagger specification as noted in Clause
                        S1.8(e). Must cover all 12 endpoint groups from
                        FRD v2.0 Section 12 with request/response
                        examples.
  -----------------------------------------------------------------------

Documentation shall be updated to reflect any changes made during the M3
cure period, if applicable. Documentation is a Must Pass criterion for
M3 acceptance.

**M3 - Must Pass: Module Completeness**

  -----------------------------------------------------------------------
  **Acceptance Criterion**                 **Verification   **Pass /
                                           Method**         Fail**
  ---------------------------------------- ---------------- -------------
  Module 1 (Company Setup / RBAC): All 7   Role-by-role UAT \[ \] Pass \[
  roles functional; permissions matrix     walkthrough      \] Fail
  from FRD v2.0 Section 10 correctly                        
  enforced (verified by role-by-role                        
  access test)                                              

  Module 2 (Source Discovery / Smart       UAT walkthrough  \[ \] Pass \[
  Mapping): All 3 profiling modes          with test        \] Fail
  functional; AI classification live with  CSV/XLS/XLSX     
  confidence scores; human review and      files            
  approval workflow complete; all                           
  classification workflow states (Draft to                  
  Archived) reachable                                       

  Module 2: AI classification processes    Load test report \[ \] Pass \[
  10,000 fields within 5-minute SLA on     submitted with   \] Fail
  production environment                   Delivery Notice  

  Module 2: No raw PII sent to LLM         Architecture     \[ \] Pass \[
  confirmed: Masked-Sample mode shows      review +         \] Fail
  masked values only; Ephemeral mode       functional test  
  auto-deletes within 24 hours                              

  Module 3 (Data Register): All features   UAT walkthrough  \[ \] Pass \[
  functional - CRUD, bulk import,                           \] Fail
  search/filter, versioning, approval                       
  workflow                                                  

  Module 3: 10,000 fields loadable in Data Load test report \[ \] Pass \[
  Register with query response under 1                      \] Fail
  second                                                    

  Module 4 (Compliance Dashboard):         UAT with         \[ \] Pass \[
  Readiness score calculated correctly     verified score   \] Fail
  using formula (evidence_count /          calculation      
  total_obligations) x 100; all KPI cards                   
  populated; Obligation Library complete                    

  Module 4: Evidence bucketing by          UAT walkthrough  \[ \] Pass \[
  obligation functional; Evidence Gap                       \] Fail
  Analysis identifies missing proofs                        

  Module 5 (Notice Builder): Template      UAT              \[ \] Pass \[
  library available; drag-and-drop editor  walkthrough +    \] Fail
  functional; notice published to a live   URL verification 
  public URL; version control and                           
  distribution tracking functional                          

  Module 5: Compliance gap checker flags   Functional test  \[ \] Pass \[
  at least one intentionally incomplete                     \] Fail
  notice field                                              

  Module 6 (Rights and Grievances): Public UAT test with    \[ \] Pass \[
  rights form accessible externally and    external browser \] Fail
  submission creates a case internally     (no login)       
  with automated notification                               

  Module 6: All 6 right types functional   UAT walkthrough  \[ \] Pass \[
  (access, correction, deletion,           per right type   \] Fail
  portability, grievance, consent                           
  withdrawal)                                               

  Module 6: Access request SLA (30-day)    Functional test  \[ \] Pass \[
  countdown accurate; overdue alert fires                   \] Fail
  for a test case set past due date                         

  Module 6: Deletion request SLA (45-day)  Functional test  \[ \] Pass \[
  countdown accurate                                        \] Fail

  Module 6: Erasure evidence collection    Functional test  \[ \] Pass \[
  tracks deletion across systems; case                      \] Fail
  cannot be closed without erasure                          
  evidence                                                  

  Module 6: 1,000-case list loads under 2  Load test report \[ \] Pass \[
  seconds on production                                     \] Fail

  Module 7 (Retention and Deletion):       UAT walkthrough  \[ \] Pass \[
  Retention Rules Engine functional - rule                  \] Fail
  creation by data category and purpose                     

  Module 7: Deletion Calendar visible with UAT walkthrough  \[ \] Pass \[
  correct deletion-due dates                                \] Fail

  Module 7: Deletion execution completes   Functional test  \[ \] Pass \[
  with mandatory proof capture (screenshot                  \] Fail
  or log); task cannot be marked complete                   
  without proof                                             

  Module 7: Legal Hold blocks deletion;    Functional test  \[ \] Pass \[
  deletion resumes after hold is removed                    \] Fail

  Module 7: Bulk deletion processes up to  Functional test  \[ \] Pass \[
  10,000 records in a single batch with    with             \] Fail
  audit trail                              10,000-record    
                                           test dataset     

  Module 8 (Breach Register): Breach       UAT walkthrough  \[ \] Pass \[
  quick-create functional with severity                     \] Fail
  levels (Low, Medium, High, Critical)                      

  Module 8: 72-hour assessment timer       Functional test  \[ \] Pass \[
  counts down accurately from              with timer set   \] Fail
  discovery_date; auto-escalation to Admin to near-expiry   
  fires if not assessed within 72 hours                     

  Module 8: Breach with affected_count     Functional test  \[ \] Pass \[
  above 1,000 is automatically set to High                  \] Fail
  or Critical                                               

  Module 8: Breach notifications logged    UAT walkthrough  \[ \] Pass \[
  with recipient, sent timestamp, and                       \] Fail
  acknowledged timestamp                                    

  Module 9 (Processor/Vendor Management):  Functional test  \[ \] Pass \[
  Processor Registry functional; new                        \] Fail
  processor requires contract and DPA                       
  status before activation                                  

  Module 9: Missing DPA triggers risk flag Functional test  \[ \] Pass \[
  on processor list and dashboard KPI                       \] Fail

  Module 9: Purge request routing links to Functional test  \[ \] Pass \[
  rights cases and routes to all                            \] Fail
  processors handling the relevant data                     
  category automatically                                    

  Module 9: Sub-processor tracking and     UAT walkthrough  \[ \] Pass \[
  audit log of all processor                                \] Fail
  communications functional                                 

  Module 10 (Evidence Library): Artifact   UAT walkthrough  \[ \] Pass \[
  upload, tagging to obligations, version                   \] Fail
  history functional                                        

  Module 10 (Audit Trail): Immutable log   Functional       \[ \] Pass \[
  captures all state changes (create,      test + negative  \] Fail
  read, update, delete, export, approve)   test (attempt to 
  with user ID and timestamp; deletion of  delete record)   
  any audit record blocked through all                      
  interfaces                                                

  Module 10 (Reports): All 6 report types  UAT walkthrough  \[ \] Pass \[
  generated correctly (Register            per report type  \] Fail
  Completeness, Open Rights, Due                            
  Deletions, Incident Register, Audit                       
  Extract, Processor Status)                                

  Module 10 (Reports): PDF, Excel, and     UAT export test  \[ \] Pass \[
  JSON export functional for all report                     \] Fail
  types                                                     

  Demo Seed Data: Bombay Grooming Labs     Production       \[ \] Pass \[
  dataset loaded in production with all    environment      \] Fail
  specified items (2 data sources, 3       verification     
  rights cases, 1 breach, 1 processor, 2                    
  notices, readiness score at 67%)                          
  -----------------------------------------------------------------------

**M3 - Must Pass: Technical, Security, and Architecture**

  -----------------------------------------------------------------------
  **Acceptance Criterion**                 **Verification   **Pass /
                                           Method**         Fail**
  ---------------------------------------- ---------------- -------------
  Production environment live and stable   URL              \[ \] Pass \[
  at confirmed production URL              verification +   \] Fail
                                           24-hour uptime   
                                           check prior to   
                                           M3 acceptance    
                                           request          

  Staging environment live for parallel    URL verification \[ \] Pass \[
  UAT during acceptance period                              \] Fail

  All tenant data stored in India-based    Cloud console    \[ \] Pass \[
  cloud region - confirmed by cloud        screenshot       \] Fail
  console screenshot (AWS ap-south-1, GCP  submitted with   
  asia-south1, or Azure centralindia)      Delivery Notice  

  Multi-tenant isolation verified:         Penetration /    \[ \] Pass \[
  authenticated Tenant A user cannot       isolation test   \] Fail
  retrieve Tenant B data via any API       report submitted 
  endpoint or UI                           with Delivery    
                                           Notice           

  No Critical (CVSS 9.0+) or High (CVSS    Penetration test \[ \] Pass \[
  7.0-8.9) unmitigated vulnerabilities at  or security      \] Fail
  time of M3 Delivery Notice               review report    
                                           submitted with   
                                           Delivery Notice  

  No hardcoded credentials, secrets, or    Secrets scan     \[ \] Pass \[
  API keys in any repository - confirmed   report submitted \] Fail
  by automated secrets scan                with Delivery    
                                           Notice           

  AES-256 encryption at rest confirmed for Architecture     \[ \] Pass \[
  all PII data fields - confirmed by       document + cloud \] Fail
  architecture documentation and cloud     config evidence  
  config                                                    

  TLS 1.2+ enforced on all production      SSL Labs or      \[ \] Pass \[
  endpoints                                equivalent test  \] Fail
                                           report submitted 
                                           with Delivery    
                                           Notice           

  Audit trail confirmed immutable: no      Functional       \[ \] Pass \[
  user-facing interface or API endpoint    test + negative  \] Fail
  allows deletion or editing of audit log  API test         
  entries                                                   

  Ephemeral Full-Profile profiling samples Functional test  \[ \] Pass \[
  confirmed deleted within 24 hours -      with timestamp   \] Fail
  deletion logged in audit trail           verification     

  No raw PII logged in any audit trail     Audit trail      \[ \] Pass \[
  entry                                    review of 20     \] Fail
                                           sample actions   
                                           across modules   

  Daily automated backup configured with   Backup           \[ \] Pass \[
  30-day retention; test restore verified  configuration    \] Fail
                                           screenshot +     
                                           restore test log 
                                           submitted with   
                                           Delivery Notice  

  Full OpenAPI/Swagger documentation       Documentation    \[ \] Pass \[
  covering all 12 endpoint groups per FRD  review           \] Fail
  v2.0 Section 12                                           

  All source code in                       Repository       \[ \] Pass \[
  SPV/Novation-controlled repository with  access           \] Fail
  Novation as Owner/Admin                  screenshot       

  Credential and Access Handover SOP       Document review  \[ \] Pass \[
  delivered covering all accounts,                          \] Fail
  credentials, and access procedures                        

  OSS Inventory delivered: all components, OSS Inventory    \[ \] Pass \[
  version numbers, and licence types       document review  \] Fail
  listed; no GPL/AGPL/LGPL/MPL components                   
  without prior written approval from                       
  Novation                                                  

  IP assignment confirmations delivered    Document         \[ \] Pass \[
  for all named developers and contractors review - one     \] Fail
  who contributed to the Platform          signed           
                                           assignment per   
                                           contributor      
  -----------------------------------------------------------------------

**M3 - Must Pass: UAT Sign-Off**

  -----------------------------------------------------------------------
  **Acceptance Criterion**                 **Verification   **Pass /
                                           Method**         Fail**
  ---------------------------------------- ---------------- -------------
  UAT environment made available to        Email/calendar   \[ \] Pass \[
  Novation for minimum 10 Business Days    evidence of UAT  \] Fail
  before M3 acceptance is formally         start date       
  requested by Codewave                                     

  All UAT issues raised by Novation during Issue tracker or \[ \] Pass \[
  the UAT period have been resolved or     email thread     \] Fail
  formally waived in writing by Novation   evidence         
  before M3 acceptance is requested                         

  Novation authorised representative       UAT sign-off     \[ \] Pass \[
  completes an end-to-end compliance       record signed by \] Fail
  workflow: source upload through AI       Novation         
  classification through Data Register     representative   
  approval through Compliance Dashboard                     
  through rights case management through                    
  report generation, without encountering                   
  any Critical or High severity bugs                        

  Novation authorised representative       UAT sign-off     \[ \] Pass \[
  successfully submits a rights request    record           \] Fail
  via the public portal and processes it                    
  end-to-end including SLA tracking and                     
  case closure                                              

  Novation authorised representative       UAT sign-off     \[ \] Pass \[
  successfully creates and closes a breach record           \] Fail
  incident including 72-hour timer                          
  verification and notification logging                     

  Demo Seed Data (Bombay Grooming Labs)    UAT sign-off     \[ \] Pass \[
  confirmed as fully loaded and navigable  record           \] Fail
  by Novation on production environment                     
  -----------------------------------------------------------------------

**M3 - Should Pass Criteria (Waivable by Novation in Writing)**

  -----------------------------------------------------------------------
  **Acceptance Criterion**                 **Verification   **Pass /
                                           Method**         Fail**
  ---------------------------------------- ---------------- -------------
  Notice Builder: Hindi language notice    Demo on          \[ \] Pass \[
  template available in template library   production       \] Fail

  Rights Portal: Accessible with no        Accessibility    \[ \] Pass \[
  Critical failures on automated WCAG 2.1  scan report      \] Fail
  Level AA scan                                             

  Source Discovery: Self-hosted LLM        Admin settings   \[ \] Pass \[
  configuration option present in admin    review           \] Fail
  settings (functional LLM connection not                   
  required; UI option and documentation                     
  required)                                                 

  Compliance Dashboard: Regulatory         Demo on          \[ \] Pass \[
  Calendar pre-populated with DPDP Act     production       \] Fail
  enforcement dates (November 2025,                         
  November 2026, May 2027)                                  

  Reports: JSON API export endpoint        API test         \[ \] Pass \[
  functional for programmatic access to                     \] Fail
  report data                                               

  All 6 report types load within 10        Performance test \[ \] Pass \[
  seconds for datasets of 5,000 audit                       \] Fail
  entries                                                   

  Module 6 (Rights): Portability right     Functional test  \[ \] Pass \[
  export generates a machine-readable data                  \] Fail
  export                                                    
  -----------------------------------------------------------------------

**[S2.4 Milestone M4 - Post-MVP Advisory (18-24 Months Post-MVP
Launch)]{.underline}**

M4 is assessed by Novation acting reasonably and in good faith per
Clause 5.2 of the JVA, having regard to Codewave\'s documented activity
log and the following minimum thresholds. Codewave shall maintain a
contemporaneous activity log and share it with Novation quarterly
throughout the Advisory Period.

  ------------------------------------------------------------------------
  **Advisory       **Minimum Threshold**          **Verification Method**
  Category**                                      
  ---------------- ------------------------------ ------------------------
  Architecture and 6 documented advisory sessions Codewave activity log
  Scalability      (email, call record, or        reviewed by Novation
  Guidance         meeting notes) during the      
                   Advisory Period                

  Investor Calls   3 investor call instances      Novation calendar
  and Technical    attended, or documented        records and/or email
  Due Diligence    written availability when      confirmation
                   requested by Novation          

  Post-MVP         Platform stable baseline       Bug tracker and incident
  Stabilisation    within 90 days of MVP Launch,  log
                   defined as: no Critical or     
                   High severity bugs remaining   
                   open for more than 7           
                   consecutive days during the    
                   90-day stabilisation window    

  Strategic        Minimum 4 documented product   Meeting minutes and/or
  Product          direction meetings attended by calendar records
  Direction        Codewave CTO or nominated      
  Meetings         representative                 

  Investment       Reasonable efforts             Codewave activity log
  Facilitation     demonstrated: minimum 2        plus email or calendar
                   documented investor            evidence of
                   introductions, or formal       introductions
                   written explanation of why     
                   introductions were not         
                   feasible                       
  ------------------------------------------------------------------------

*Novation shall issue a written M4 assessment notice to Codewave not
later than 30 days before the end of the Advisory Period. Codewave shall
submit its activity log and supporting evidence within 15 Business Days
of that notice. Novation shall issue its final M4 determination within
15 Business Days of receiving Codewave\'s evidence. Disputes shall be
resolved per Clause 32 of the JVA.*

**[S2.5 Schedule 2 Execution]{.underline}**

This Schedule 2 is agreed and executed as part of the Joint Venture
Agreement. Both Parties confirm that the acceptance criteria are
complete, specific, and mutually agreed:

+------------------------------------------------+---+------------------------------------------------+
| **For NOVATION LEGAL**                         |   | **For CODEWAVE TECHNOLOGIES PVT. LTD.**        |
|                                                |   |                                                |
| Signature:                                     |   | Signature:                                     |
| \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |   | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
|                                                |   |                                                |
| Name:                                          |   | Name:                                          |
| \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |   | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
|                                                |   |                                                |
| Date:                                          |   | Date:                                          |
| \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |   | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
+------------------------------------------------+---+------------------------------------------------+

**ANNEXURE A - FUNCTIONAL REQUIREMENTS DOCUMENT (FRD) v2.0**

The following is the Functional Requirements Document (FRD) v2.0 for the
Prooflyt DPDP Compliance Desk, Phase 1. This Annexure A forms an
integral part of the Schedules to the Joint Venture Agreement and is
incorporated by reference throughout Schedule 2 (Milestone Acceptance
Criteria). In the event of any conflict between this Annexure A and the
body of Schedule 1 or Schedule 2, Schedule 1 and Schedule 2 shall
prevail.

**[A1. Document Control]{.underline}**

  -----------------------------------------------------------------------
  **Attribute**         **Value**
  --------------------- -------------------------------------------------
  Document Title        Prooflyt DPDP Compliance Desk - Functional
                        Requirements Document

  Version               2.0

  Date                  March 24, 2026

  Status                Active

  Phase                 Phase 1 - Investor Ready and Operational
                        Completeness

  Audience              Engineering, Product, Design, QA
  -----------------------------------------------------------------------

**[A2. Purpose]{.underline}**

This FRD translates the Prooflyt product direction into build-ready
functional specifications for Phase 1 delivery. Phase 1 represents a
complete, investor-ready, and operationally complete product covering
all 10 core modules with privacy-first AI-powered classification,
metadata-first persistence, and comprehensive compliance orchestration
capabilities. This document is technical and implementation-focused.

**[A3. Scope Summary]{.underline}**

- Single Phase 1 delivery containing all 10 modules for a complete
  investor-ready product.

- No direct third-party integrations in Phase 1 - CSV/XLS/XLSX file
  upload input only.

- AI-powered field classification using privacy-first LLM approach
  (rule-based + semantic).

- Metadata-first persistence layer with audit trail and versioning.

- Phase 2 covers native system integrations, sector packs, DPO portal,
  consent widgets, and advanced AI advisory.

**[A4. Module Stack and Architecture]{.underline}**

  -----------------------------------------------------------------------
  **Layer**        **Modules**                      **Purpose**
  ---------------- -------------------------------- ---------------------
  Orchestration    Compliance Dashboard /           Readiness scoring,
  and Insight      Obligation Control Center        obligation tracking,
                                                    evidence aggregation

  Input and        Source Discovery and AI-Powered  Data source
  Classification   Smart Mapping                    onboarding, AI field
                                                    classification,
                                                    mapping review

  Control and      Data Register, Notice Builder,   Core DPDP compliance
  Execution        Rights and Grievances, Retention controls and
                   and Deletion, Breach Register,   operational workflows
                   Processor/Vendor Management      

  Proof and Audit  Evidence Library, Audit Trail,   Comprehensive proof,
                   Reports                          immutable records,
                                                    and compliance
                                                    reporting
  -----------------------------------------------------------------------

**[A5. User Roles and Permissions]{.underline}**

  -----------------------------------------------------------------------
  **Role**      **Responsibilities**             **Key Modules**
  ------------- -------------------------------- ------------------------
  Admin         Tenant setup, user management,   All modules
                master data configuration,       
                obligation library, all          
                permissions                      

  Compliance    Overall DPDP compliance          Dashboard, Obligation
  Officer       strategy, obligation management, Library, all controls
                dashboard monitoring, approvals  

  Data Mapping  Source discovery, field          Source Discovery, Data
  Officer       profiling, AI classification     Register
                review and approval              

  Rights        Rights request intake, case      Rights and Grievances,
  Officer       management, SLA tracking,        Evidence Library
                erasure verification             

  Data Manager  Retention schedules, deletion    Retention and Deletion,
                execution, legal hold            Breach Register
                management, breach notifications 

  Processor     Vendor registry, DPA tracking,   Processor/Vendor
  Liaison       sub-processor management, purge  Management, Evidence
                request coordination             Library

  Auditor /     Read-only access to audit trail, Reports, Audit Trail,
  Viewer        reports, and evidence library    Evidence Library
  -----------------------------------------------------------------------

**[A6. High-Level Workflow]{.underline}**

- Admin configures tenant, obligation library, user roles, and master
  data.

- Data Mapping Officer discovers data sources by uploading CSV/XLS/XLSX
  files.

- System profiles the source using header-only, masked-sample, or
  ephemeral full-profile modes.

- AI Classification Engine processes columns using rule-based + LLM
  semantic approach (privacy-first: no raw PII to any model).

- Data Mapping Officer reviews and approves AI classifications. Human
  approval required before push to Data Register.

- Approved classifications are pushed to Data Register with field-level
  metadata.

- Compliance Dashboard shows readiness score and evidence gaps.

- Compliance Officer manages obligations, notices, rights requests,
  retention schedules, breaches, and processors.

- Evidence Library captures all artifacts; Audit Trail tracks all state
  changes immutably.

- Reports provide compliance proof and operational insights.

**[A7. Detailed Functional Requirements by Module]{.underline}**

**A7.1 Compliance Dashboard / Obligation Control Center**

Default landing page after login. Provides real-time compliance
visibility and obligation tracking.

  -----------------------------------------------------------------------
  **Feature**           **Specification**
  --------------------- -------------------------------------------------
  Readiness Score       Aggregate compliance completeness metric.
  (0-100)               Formula: (evidence_count / total_obligations) x
                        100. Evidence classes (system-derived,
                        evidence-derived, attestation-derived) weighted
                        equally.

  Obligation Library    All DPDP obligations listed and categorised by
                        compliance principle.

  Evidence Bucketing    Evidence grouped and displayed per obligation.
                        Evidence Gap Analysis identifies missing proofs.

  Dashboard KPI Cards   Open obligations; due rights cases; scheduled
                        deletions; unacknowledged processors.

  Quick-Actions         Direct links to create notices, rights cases, and
                        breach reports.

  Data Model            ObligationLibrary: id, code, description,
                        principle, evidence_classes. Evidence: id,
                        obligation_id, type, source, confidence,
                        created_at. ReadinessScore: id, tenant_id, score
                        (calculated), last_updated.
  -----------------------------------------------------------------------

**A7.2 Source Discovery and AI-Powered Smart Mapping**

Enables Data Mapping Officers to discover data sources and intelligently
classify fields using AI.

  -----------------------------------------------------------------------
  **Feature**           **Specification**
  --------------------- -------------------------------------------------
  File Upload           CSV, XLS, XLSX. Maximum 100MB per file. Two
                        intake modes: Full Schema (all columns) or Target
                        Mapping (specific columns).

  Profiling Mode 1 -    LLM processes column names only. Fastest mode.
  Header-Only           Safest for PII as no data rows are processed.

  Profiling Mode 2 -    First 100 rows processed. PII fields masked via
  Masked-Sample         regex before processing: Aadhaar (12 digits), PAN
                        (10-char), phone (+91 prefix), email (@domain).
                        LLM never receives raw PII.

  Profiling Mode 3 -    Full sample processed for highest accuracy.
  Ephemeral             Sample automatically deleted within 24 hours of
  Full-Profile          classification completion. Deletion logged in
                        audit trail.

  AI Classification     Hybrid approach: Rule-based regex patterns take
  Engine                precedence; LLM semantic classification applied
                        for remaining fields. Privacy-first: LLM receives
                        only headers and anonymised samples.
                        Self-hosted/air-gapped LLM option architecturally
                        supported. Confidence scoring: High/Medium/Low.
                        Fields below 50% confidence flagged for mandatory
                        manual review.

  Human Review          All AI classifications require human review and
  Requirement           approval before being pushed to the Data
                        Register. Workflow states: Draft, Uploaded,
                        Profiling, AI Classification, Ready for Review,
                        Approved, Archived.

  Data Model            DataSource: id, name, category, system_owner,
                        data_location, created_at. SourceFile: id,
                        source_id, file_name, file_type, upload_date,
                        row_count, status. Field: id, file_id,
                        field_name, data_type, sample_value.
                        FieldClassification: id, field_id, dpdp_relevant,
                        category, role, confidence, approved_at,
                        approved_by.
  -----------------------------------------------------------------------

**A7.3 Data Register**

Comprehensive inventory of all personal data processed, with field-level
metadata and provenance.

  -----------------------------------------------------------------------
  **Feature**           **Specification**
  --------------------- -------------------------------------------------
  CRUD Operations       Create, read, update, delete field records.

  Field Metadata        Name, data type, category, processing purpose,
                        legal basis, retention period, source tracking.

  Search and Filter     By category, source, purpose, legal basis,
                        retention period.

  Bulk Operations       Import classified fields from Source Discovery.
                        Export register to CSV.

  Versioning            Track all changes to field metadata with
                        timestamps and editor identity.

  Approval Workflow     All register changes require Compliance Officer
                        approval. States: Draft, Pending Approval,
                        Approved.

  Data Model            DataRegisterField: id, source_id, field_name,
                        category, purpose, legal_basis, retention_period,
                        updated_at, approved_at.
  -----------------------------------------------------------------------

**A7.4 Notice Builder**

Create, version, and publish privacy notices with template support per
Section 5 DPDP Act.

  -----------------------------------------------------------------------
  **Feature**           **Specification**
  --------------------- -------------------------------------------------
  Template Library      Pre-built DPDP-compliant notice templates
                        covering mandatory Section 5 disclosures.

  Drag-and-Drop Editor  Compose notices from building blocks. Mandatory
                        DPDP fields enforced.

  Obligation Mapping    Link notices to DPDP obligations for evidence
                        bucketing.

  Version Control       Publish and archive notice versions. Each version
                        timestamped and linked to consents collected
                        under it.

  Distribution Tracking Log notice delivery via email, web, and mobile.

  Language Support      Hindi and regional language notice template
                        support.

  Data Model            Notice: id, title, content, legal_basis,
                        published_at, version. NoticeDistribution: id,
                        notice_id, user_email, sent_at, acknowledged_at.
  -----------------------------------------------------------------------

**A7.5 Rights and Grievances**

Full implementation of DPDP rights per Chapter III of the Act (Sections
11-14) with case management.

  -----------------------------------------------------------------------
  **Feature**           **Specification**
  --------------------- -------------------------------------------------
  Public Rights Form    External self-service form for Data Principals to
                        submit rights requests. No login required.

  Right Types Supported Access (Section 11), Correction (Section 12),
                        Deletion/Erasure (Section 12), Portability,
                        Grievance Redressal (Section 13), Consent
                        Withdrawal.

  Case Management       Intake, assignment, tracking, and closure. SLA
                        tracking: 30-day for access requests, 45-day for
                        deletion requests.

  SLA Override          Requires Compliance Officer approval.

  Erasure Evidence      Track evidence of deletion across all systems.
                        Erasure not marked complete until all processors
                        acknowledge deletion. Case cannot close without
                        erasure evidence.

  Notification Queue    Automated notifications to data subject and
                        internal team on case updates.

  Data Model            RightsCase: id, request_id, right_type,
                        data_subject_email, submission_date, due_date,
                        status, assigned_to. RightsCaseAction: id,
                        case_id, action_type, notes, done_at, done_by.
                        ErasureEvidence: id, case_id, system_id,
                        deleted_at, verified_by.
  -----------------------------------------------------------------------

**A7.6 Retention and Deletion**

Define and enforce data retention schedules with automated deletion
triggers and legal hold support.

  -----------------------------------------------------------------------
  **Feature**           **Specification**
  --------------------- -------------------------------------------------
  Retention Rules       Define retention periods by data category and
  Engine                purpose. Minimum retention period of 30 days for
                        personal data.

  Retention Calendar    Visual calendar showing deletion-due dates across
                        all data categories.

  Batch Deletion        Execute bulk deletions with full audit trail.
                        Maximum 10,000 records per batch.

  Deletion Proof        Screenshot or deletion log required before task
                        can be marked complete.

  Legal Hold            Prevent deletion of data subject to litigation or
                        regulatory holds. Deletion blocked while hold is
                        active.

  Notification Queue    Notify data owners before scheduled deletion.

  Data Model            RetentionRule: id, data_category, purpose,
                        retention_days, deletion_action. DeletionTask:
                        id, rule_id, source_id, scheduled_date,
                        executed_at, proof_url. LegalHold: id, reason,
                        affected_categories, held_until.
  -----------------------------------------------------------------------

**A7.7 Breach Register**

Track personal data breaches and manage notification obligations with
72-hour escalation per Section 8(6) DPDP Act.

  -----------------------------------------------------------------------
  **Feature**           **Specification**
  --------------------- -------------------------------------------------
  Quick-Create Intake   Rapid breach incident intake with severity
                        assessment. Severity levels: Low, Medium, High,
                        Critical.

  72-Hour Timer         Auto-escalation to Admin if breach is not
                        assessed within 72 hours of discovery_date.

  Auto-Severity         Breaches with affected_count above 1,000 data
                        subjects automatically marked High or Critical.

  Notification Tracking Record notifications to data subjects and
                        regulators. Log recipient, sent timestamp, and
                        acknowledged timestamp.

  Evidence and          Attach forensic reports and remediation proofs.
  Remediation           Remediation task tracker linked to each incident.

  Breach Register       Audit-ready register export for regulatory
  Export                submission.

  Data Model            BreachIncident: id, discovery_date, description,
                        data_categories, affected_count, severity.
                        BreachNotification: id, incident_id,
                        recipient_type (data_subject / regulator),
                        sent_at, acknowledged_at. BreachRemediationTask:
                        id, incident_id, description, completed_at,
                        proof_url.
  -----------------------------------------------------------------------

**A7.8 Processor / Vendor Management**

Manage relationships with data processors and vendors, DPA compliance,
and sub-processor tracking.

  -----------------------------------------------------------------------
  **Feature**           **Specification**
  --------------------- -------------------------------------------------
  Processor Registry    Name, category, country, data categories shared,
                        contract status, DPA status. New processor
                        requires contract and DPA status before
                        activation.

  DPA Risk Flag         DPA missing triggers risk flag in processor list
                        and on dashboard KPI.

  Purge Request Routing Purge/deletion requests from rights cases
                        automatically routed to all processors handling
                        the relevant data category.

  Acknowledgment        Track processor confirmations of data deletion.
  Collection            

  Sub-Processor         Maintain registry of vendors\' own vendors.
  Tracking              Sub-processor approval delegated to parent
                        processor.

  Audit Interactions    Immutable log of all communications with
                        processors.

  Data Model            Processor: id, name, category, country,
                        is_sub_processor, parent_processor_id,
                        contract_date, dpa_status. ProcessorDataCategory:
                        id, processor_id, category, purpose. DPAClause:
                        id, processor_id, clause_type, documentation_url,
                        signed_date. PurgeRequest: id, processor_id,
                        rights_case_id, sent_date, acknowledged_date,
                        deletion_proof_url.
  -----------------------------------------------------------------------

**A7.9 Evidence Library and Audit Trail**

  -----------------------------------------------------------------------
  **Feature**           **Specification**
  --------------------- -------------------------------------------------
  Evidence Library -    Policies, notices, deletion proofs, assessment
  Artifact Storage      reports, DPAs, training certificates, and any
                        other compliance artifacts.

  Evidence Library -    Link evidence to DPDP obligations and compliance
  Tagging               controls. Version history with timestamps.

  Evidence Library -    Filter by obligation, date range, artifact type.
  Search                

  Audit Trail -         All state changes to all objects across all
  Immutable Log         modules: who, what, when, why. No deletion or
                        editing of audit log entries permitted via any
                        interface.

  Audit Trail - Access  All user actions logged: create, read, update,
  Logging               delete, export, approve.

  Audit Trail - Export  Filtered audit trail export for compliance
                        review.

  Data Model            Evidence: id, artifact_type, file_url,
                        obligation_id, uploaded_by, uploaded_at.
                        AuditLog: id, entity_type, entity_id, action,
                        user_id, timestamp, old_value, new_value.
  -----------------------------------------------------------------------

**A7.10 Reports**

  -----------------------------------------------------------------------
  **Report Type**       **Description**          **Export Formats**
  --------------------- ------------------------ ------------------------
  Register Completeness Data register field      PDF, Excel, JSON
                        coverage, missing        
                        categories, unmapped     
                        fields.                  

  Open Rights           Pending rights cases,    PDF, Excel, JSON
                        overdue SLAs, cases by   
                        right type and status.   

  Due Deletions         Data scheduled for       PDF, Excel, JSON
                        deletion, legal holds    
                        blocking deletion.       

  Incident Register     Breach register, open    PDF, Excel, JSON
                        investigations, 72-hour  
                        escalations.             

  Audit Extract         Filtered audit trail for PDF, Excel, JSON
                        specific date range or   
                        object type.             

  Processor Status      DPA compliance, pending  PDF, Excel, JSON
                        acknowledgments,         
                        sub-processor inventory. 
  -----------------------------------------------------------------------

**[A8. Screen Inventory]{.underline}**

  ------------------------------------------------------------------------
  **Module**       **Screen Name**  **Purpose**
  ---------------- ---------------- --------------------------------------
  Dashboard        Compliance       Landing page with readiness score and
                   Overview         KPIs

  Dashboard        Obligation       Browse and assign obligations
                   Library          

  Dashboard        Evidence Board   View evidence bucketed by obligation

  Source Discovery Source List      Browse all registered data sources

  Source Discovery File Upload      Upload CSV/XLS/XLSX files (max 100MB)

  Source Discovery Profiling and AI Review AI classifications with
                   Classification   confidence scores; approve or override

  Data Register    Register View    Browse all classified fields with
                                    filter and search

  Data Register    Bulk Import      Import classified fields from Source
                                    Discovery

  Notice Builder   Notice List      Browse all notices with version
                                    history

  Notice Builder   Notice Editor    Create/edit notices using templates
                                    and drag-and-drop

  Rights and       Public Rights    External self-service form for data
  Grievances       Form             subjects (no login required)

  Rights and       Rights Case List Browse all cases with SLA status
  Grievances                        indicators

  Rights and       Rights Case      Case management, SLA tracking, erasure
  Grievances       Details          evidence collection

  Retention and    Retention Rules  Define and manage retention schedules
  Deletion                          

  Retention and    Deletion         Visual calendar of deletion-due dates
  Deletion         Calendar         

  Retention and    Deletion         Execute batch deletions with mandatory
  Deletion         Execution        proof capture

  Breach Register  Breach List      Browse all incidents with severity and
                                    72-hour timer status

  Breach Register  Breach           Rapid incident intake form
                   Quick-Create     

  Breach Register  Breach Details   Investigation, notification tracking,
                                    remediation tasks

  Processors       Processor        Browse all vendors/processors with DPA
                   Registry         status and risk flags

  Processors       Processor        Add vendor, capture contract details
                   Create/Edit      and DPA status

  Processors       DPA Tracking     Manage DPA clauses and documentation

  Processors       Purge Routing    Route deletion requests from rights
                                    cases to processors

  Evidence Library Evidence         Artifact storage, obligation tagging,
                   Repository       search and filter

  Reports          Report Builder   Select report type, date range, and
                                    export format

  Admin            User Management  Create/edit users, assign roles,
                                    manage permissions

  Admin            Tenant Settings  Branding, notification preferences,
                                    master data configuration
  ------------------------------------------------------------------------

**[A9. Business Rules]{.underline}**

**A9.1 Compliance Dashboard and Obligations**

- Readiness score formula: (evidence_count / total_obligations) x 100.
  Evidence classes weighted equally.

- Obligations marked complete only when all required evidence classes
  are provided.

**A9.2 Source Discovery and AI Classification**

- File uploads limited to 100MB and CSV/XLS/XLSX formats only.

- AI classification confidence below 50% flagged for mandatory manual
  review.

- All classifications require human approval before Data Register push.

- Ephemeral full-profile samples deleted within 24 hours of
  classification completion.

- Rule-based regex patterns take precedence over LLM if both trigger on
  the same field.

**A9.3 Data Register**

- Field names must be unique per data source.

- Retention period must be 30 days minimum for any personal data field.

- All register changes tracked in audit trail.

**A9.4 Rights and Grievances**

- Access requests: 30-day response deadline. Deletion requests: 45-day
  response deadline.

- SLA override requires Compliance Officer approval.

- Erasure not marked complete until all processors acknowledge deletion.

**A9.5 Retention and Deletion**

- Deletion must not execute if a Legal Hold is active on the relevant
  data category.

- Deletion proof (screenshot or log) required before task can be marked
  complete.

- Bulk deletion limited to 10,000 records per batch.

**A9.6 Breach Register**

- Breach not assessed within 72 hours of discovery triggers
  auto-escalation to Admin.

- Breach with affected_count above 1,000 data subjects automatically
  marked High or Critical severity.

- All breach notifications logged with timestamp and recipient.

**A9.7 Processors and Vendors**

- New processor requires contract and DPA status to be recorded before
  activation in the system.

- DPA missing from any processor triggers a risk flag on the processor
  list and dashboard KPI.

- Purge requests automatically routed to all processors handling the
  relevant data category.

- Sub-processor approval delegated to parent processor.

**A9.8 Audit Trail**

- All user actions logged: create, read, update, delete, export,
  approve.

- Audit log immutable: no deletion or editing of any audit trail entry
  permitted through any interface.

- Audit trail export filterable by date range and object type.

**[A10. Permissions Matrix]{.underline}**

  --------------------------------------------------------------------------------------------------------
  **Module /       **Admin**   **Comp.     **Mapping   **Rights    **Data      **Processor   **Auditor**
  Action**                     Officer**   Officer**   Officer**   Manager**   Liaison**     
  ---------------- ----------- ----------- ----------- ----------- ----------- ------------- -------------
  View Dashboard   Yes         Yes         Yes         Yes         Yes         Yes           Yes

  Edit Obligation  Yes         Yes         \-          \-          \-          \-            \-
  Library                                                                                    

  Create Source /  Yes         Yes         Yes         \-          \-          \-            \-
  Upload File                                                                                

  Review and       Yes         Yes         Yes         \-          \-          \-            \-
  Approve AI                                                                                 
  Classification                                                                             

  Create/Edit Data Yes         Yes         Yes         \-          \-          \-            \-
  Register Field                                                                             

  Create/Edit and  Yes         Yes         \-          \-          \-          \-            \-
  Publish Notice                                                                             

  Create and       Yes         Yes         \-          Yes         \-          \-            \-
  Manage Rights                                                                              
  Case                                                                                       

  Create Retention Yes         Yes         \-          \-          Yes         \-            \-
  Rule                                                                                       

  Execute Deletion Yes         \-          \-          \-          Yes         \-            \-

  Create and       Yes         Yes         \-          \-          Yes         \-            \-
  Manage Breach                                                                              
  Incident                                                                                   

  Create/Edit      Yes         Yes         \-          \-          \-          Yes           \-
  Processor                                                                                  

  Route Purge      Yes         Yes         \-          \-          \-          Yes           \-
  Request                                                                                    

  Upload Evidence  Yes         Yes         Yes         Yes         Yes         Yes           \-

  View and Export  Yes         Yes         Yes         Yes         Yes         Yes           Yes
  Audit Trail                                                                                

  Run Reports      Yes         Yes         Yes         Yes         Yes         Yes           Yes

  Manage Users     Yes         \-          \-          \-          \-          \-            \-

  Configure Tenant Yes         \-          \-          \-          \-          \-            \-
  --------------------------------------------------------------------------------------------------------

**[A11. Core Data Model]{.underline}**

The following core entities and their key fields govern the data
architecture of the Platform:

  -------------------------------------------------------------------------
  **Entity**              **Key Fields**
  ----------------------- -------------------------------------------------
  Tenant                  id, name, country, industry, admin_user_id,
                          created_at

  User                    id, tenant_id, email, role, created_at,
                          last_login

  DataSource              id, tenant_id, name, category, system_owner,
                          created_at

  SourceFile              id, source_id, file_name, file_type, upload_date,
                          row_count, status

  Field                   id, file_id, field_name, data_type, sample_value

  FieldClassification     id, field_id, dpdp_relevant, category, role,
                          confidence, approved_at, approved_by

  DataRegisterField       id, source_id, field_name, category, purpose,
                          legal_basis, retention_period, approved_at

  RightsCase              id, tenant_id, request_id, right_type,
                          data_subject_email, submission_date, due_date,
                          status, assigned_to

  RightsCaseAction        id, case_id, action_type, notes, done_at, done_by

  ErasureEvidence         id, case_id, system_id, deleted_at, verified_by

  Processor               id, tenant_id, name, category, country,
                          is_sub_processor, parent_processor_id,
                          contract_date, dpa_status

  DPAClause               id, processor_id, clause_type, documentation_url,
                          signed_date

  PurgeRequest            id, processor_id, rights_case_id, sent_date,
                          acknowledged_date, deletion_proof_url

  BreachIncident          id, tenant_id, discovery_date, description,
                          data_categories, affected_count, severity, status

  BreachNotification      id, incident_id, recipient_type, sent_at,
                          acknowledged_at

  BreachRemediationTask   id, incident_id, description, completed_at,
                          proof_url

  RetentionRule           id, tenant_id, data_category, purpose,
                          retention_days, deletion_action

  DeletionTask            id, rule_id, source_id, scheduled_date,
                          executed_at, proof_url

  LegalHold               id, reason, affected_categories, held_until

  Notice                  id, tenant_id, title, content, legal_basis,
                          published_date, version

  NoticeDistribution      id, notice_id, user_email, sent_at,
                          acknowledged_at

  ObligationLibrary       id, code, description, principle,
                          evidence_classes

  Evidence                id, tenant_id, artifact_type, file_url,
                          obligation_id, uploaded_by, uploaded_at

  ReadinessScore          id, tenant_id, score (calculated), last_updated

  AuditLog                id, tenant_id, entity_type, entity_id, action,
                          user_id, timestamp, old_value, new_value
  -------------------------------------------------------------------------

**[A12. API Contract - Endpoint Groups]{.underline}**

The following 12 API endpoint groups must be implemented and documented
in OpenAPI/Swagger format at M3:

  --------------------------------------------------------------------------
  **Endpoint       **Methods**   **Key Endpoints**
  Group**                        
  ---------------- ------------- -------------------------------------------
  Auth and Tenant  POST, GET     POST /auth/login, POST /auth/logout, GET
                                 /tenant, POST /tenant/settings

  Users and Roles  GET, POST,    GET /users, POST /users, PUT /users/{id},
                   PUT, DELETE   DELETE /users/{id}

  Sources and      GET, POST,    GET /sources, POST /sources, PUT
  Files            PUT, DELETE   /sources/{id}, POST
                                 /sources/{id}/upload-file

  Field            POST, GET,    POST /sources/{id}/profile, GET
  Classification   PUT           /sources/{id}/classifications, PUT
                                 /sources/{id}/classifications/{field_id}

  Data Register    GET, POST,    GET /data-register, POST /data-register,
                   PUT, DELETE   PUT /data-register/{id}, POST
                                 /data-register/bulk-import

  Notices          GET, POST,    GET /notices, POST /notices, PUT
                   PUT, DELETE   /notices/{id}, POST /notices/{id}/publish

  Rights Cases     GET, POST,    GET /rights-cases, POST /rights-cases, PUT
                   PUT           /rights-cases/{id}, POST
                                 /rights-cases/{id}/actions

  Retention and    GET, POST,    GET /retention-rules, POST
  Deletion         PUT           /retention-rules, GET /deletion-tasks, PUT
                                 /deletion-tasks/{id}/execute

  Breach Register  GET, POST,    GET /breach-incidents, POST
                   PUT           /breach-incidents, PUT
                                 /breach-incidents/{id}, POST
                                 /breach-incidents/{id}/notify

  Processors       GET, POST,    GET /processors, POST /processors, PUT
                   PUT, DELETE   /processors/{id}, DELETE /processors/{id},
                                 POST /processors/{id}/purge-requests

  Evidence and     GET, POST     GET /evidence, POST /evidence, GET
  Audit Trail                    /audit-trail, POST /audit-trail/export

  Reports          POST, GET     POST /reports/generate, GET
                                 /reports/{report_id}, POST
                                 /reports/{report_id}/export
  --------------------------------------------------------------------------

**[A13. Non-Functional Requirements]{.underline}**

  ------------------------------------------------------------------------
  **Category**     **Requirement**             **Target**
  ---------------- --------------------------- ---------------------------
  Performance      Data Register query         Under 1 second for 10,000
                                               fields

  Performance      Rights case list load       Under 2 seconds for 1,000
                                               cases

  Performance      AI classification           Under 5 minutes for 10,000
                   processing                  fields

  Performance      Dashboard readiness score   Under 10 seconds
                   recalculation               

  Performance      Compliance report           Under 10 seconds
                   generation (5,000 audit     
                   entries)                    

  Availability     Uptime SLA (business hours) 99.5% uptime

  Scalability      Multi-tenant with           Support 1M+ audit trail
                   horizontal API scaling      entries; stateless API

  Security         All API endpoints           JWT-authenticated; RBAC
                                               enforced at API layer

  Security         PII handling                No raw PII in audit trail;
                                               LLM on masked/header data
                                               only

  Security         Ephemeral profiling samples Deleted within 24 hours of
                                               classification

  Data Residency   All tenant data             Stored within India (AWS
                                               ap-south-1 / GCP
                                               asia-south1 / Azure
                                               centralindia)

  Backup           Automated backup frequency  Daily snapshots; 30-day
                                               retention; point-in-time
                                               recovery
  ------------------------------------------------------------------------

**[A14. Build Order (Phase 1)]{.underline}**

  ---------------------------------------------------------------------------
  **Build Block**  **Scope**                              **Target**
  ---------------- -------------------------------------- -------------------
  Block 1 -        JWT authentication, multi-tenant data  Weeks 1-3
  Foundation       isolation, user management, RBAC (7    
                   roles), master data (obligation        
                   library, data categories, legal bases) 

  Block 2 - Source File upload with validation            Weeks 4-5
  Discovery and AI (CSV/XLS/XLSX, 100MB limit), profiling 
  Profiling        engine (3 modes), AI classification    
                   (rule-based + LLM), regex masking      
                   (Aadhaar, PAN, phone, email)           

  Block 3 -        Review UI with confidence scores and   Weeks 5-6
  Classification   override capability, Data Register     
  Review and Data  CRUD, bulk import, approval workflow,  
  Register         versioning                             

  Block 4 -        Compliance Dashboard with readiness    Weeks 6-8 (M2
  Dashboard,       score and KPI cards, Obligation        target)
  Notice Builder,  Library, notice editor with templates, 
  Obligations      distribution tracking                  

  Block 5 -        Public rights form, case management    Weeks 8-10
  Rights,          with SLA tracking, retention rules     
  Retention,       engine, deletion calendar and          
  Breach, Legal    execution, legal hold, breach          
  Hold             quick-create, 72-hour escalation,      
                   notifications                          

  Block 6 -        Processor registry, DPA tracking,      Weeks 10-12
  Processors,      purge request routing, evidence        
  Evidence         repository, all 6 report types         
  Library, Reports (PDF/Excel/JSON export)                

  Block 7 - QA     Bug fixes, performance optimisation,   Weeks 12-13 (M3
  Hardening, Demo  demo seed data (Bombay Grooming Labs), target)
  Data, Polish     end-to-end testing, security review,   
                   load testing                           
  ---------------------------------------------------------------------------

**[A15. Phase 2 Scope - Out of Scope for Phase 1]{.underline}**

  -----------------------------------------------------------------------
  **Phase 2 Item**      **Description**
  --------------------- -------------------------------------------------
  Native System         Salesforce CRM, HubSpot CRM, SAP HR, Zoho CRM,
  Integrations          Razorpay connectors for auto-discovery and live
                        data flow mapping

  Sector Compliance     Financial Services, Healthcare, E-Commerce, and
  Packs                 SaaS sector-specific obligation templates and
                        risk frameworks

  DPO Portal            White-label / MSSP support for managing multiple
                        organisations from a single portal

  Consent Management    Web/mobile consent collection widgets, cookie
  Widgets               banners, and consent receipts

  AI Compliance Advisor Generative AI chatbot over the company register;
                        proactive compliance suggestions; policy
                        assessment

  Keycloak SSO          OpenID Connect / SAML 2.0 / LDAP integration for
                        enterprise deployments

  Smart Mapping v2      Database schema connectors (PostgreSQL, MySQL,
                        MongoDB), API response mapping, live auto-field
                        detection

  Advanced Analytics    Trend analysis, obligation maturity benchmarking,
                        comparative dashboards
  -----------------------------------------------------------------------

**[A16. Demo Seed Data Specification]{.underline}**

The following demo seed data must be loaded in the production
environment at M3 for investor demonstrations:

  -----------------------------------------------------------------------
  **Seed Data Item**    **Specification**
  --------------------- -------------------------------------------------
  Demo Company          Bombay Grooming Labs (grooming products company)

  Data Source 1         Customer Database - Fields: customer_id, name,
                        phone, email, address, membership_date (PII
                        fields for demonstration of AI classification)

  Data Source 2         Inventory System - Fields: product_id,
                        product_name, quantity, cost (non-PII fields for
                        contrast)

  Sample Rights Cases   2 access requests (one open, one closed); 1
                        deletion request (in progress)

  Sample Breach         Minor data exposure incident; notification sent;
                        remediated and closed

  Sample Processor      Third-party SMS vendor - DPA status: signed

  Sample Notices        Privacy notice (published, version 2); SMS
                        consent notice (draft)

  Readiness Score       67% (7 of 10 obligations with evidence) -
                        demonstrating a realistic mid-journey compliance
                        state
  -----------------------------------------------------------------------

**[A17. Phase 1 Completion Definition]{.underline}**

Phase 1 is complete when all of the following conditions are met:

- All 10 modules fully functional with all Key Features per Section A7.

- AI-powered field classification live (rule-based + LLM semantic,
  privacy-first, no raw PII to any model).

- Multi-tenant architecture with full RBAC (7 roles) operational.

- End-to-end workflow functional: source upload, AI classification,
  approval, Data Register, Dashboard,
  rights/retention/breach/processors, reports.

- All 27 screens built, responsive (desktop 1280px+, tablet 768px+).

- All 12 API endpoint groups documented in OpenAPI/Swagger format.

- Performance SLAs met per Section A13.

- Security controls implemented: JWT authentication, RBAC, AES-256
  encryption, TLS 1.2+, immutable audit trail, no raw PII in logs.

- Demo seed data loaded and navigable on production environment.

- All documentation deliverables provided per Schedule 1, Clause S1.8A.

- Investor-ready: Compliance Dashboard, readiness scoring, comprehensive
  evidence of compliance operational.

**[Annexure A Acknowledgement]{.underline}**

Both Parties confirm that the FRD v2.0 set out in this Annexure A
accurately reflects the agreed functional specification for the Prooflyt
Platform and forms part of the contractual scope:

**END OF SCHEDULES**
