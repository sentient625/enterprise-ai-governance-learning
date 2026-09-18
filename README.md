# Enterprise AI Governance Learning

Free, source-grounded learning materials for leaders responsible for AI-agent identity, privileged access, operational governance, and accountable enterprise adoption.

> **Status: in progress, published in stages.** Priority 1 (AI-agent identity, security, and governance) has all ten instructional modules accepted for public learning use — see [Published learning package](#published-learning-package) below. Priority 2 (Operationalizing AI Governance) has begun, with Module 1 (AI Inventory and Ownership) accepted for public learning use; Modules 2–10 remain planned. Priority 3 (Financial Decision Fluency) is planned and not yet built — see [Curriculum roadmap](#curriculum-roadmap). This is not a completed end-to-end curriculum.

## Why this repository exists

AI agents are becoming non-human enterprise actors. They can use credentials, invoke tools, retrieve protected information, change systems, delegate work, and create business consequences.

Organizations therefore need leaders who can ask:

- What identity is acting?
- Whose authority is being exercised?
- Which tools, data, systems, and environments are permitted?
- What evidence will reconstruct the transaction?
- When must a human decide?
- How can the agent and its downstream activity be suspended?
- Who remains accountable?

This curriculum develops that executive and program-level fluency. It does not attempt to turn a learner into an AI engineer, identity architect, attorney, auditor, or safety authority.

## Who it is for

- Senior program and portfolio leaders.
- IAM/PAM and cybersecurity program managers.
- AI governance, risk, compliance, and assurance professionals.
- Enterprise architects and control owners seeking a shared governance model.
- Leaders working in regulated or high-consequence environments.

## Published learning package

### Module 1 — Acting Agents and Identity Types

**Status:** Accepted for public learning use, version 1.0.

Module 1 teaches learners to distinguish human, service, workload, and agent identities; identify accountable owners and delegating principals; recognize privileged agents; and expose attribution and impersonation risk.

Use the package in this order:

1. [Read the Module 1 lesson](./01_AI_AGENT_IDENTITY_GOVERNANCE/04_Module_01_Acting_Agents_and_Identity_Types.md).
2. [Complete the participant workbook](./01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/01_Module_01_Participant_Workbook.md).
3. [Review the model answer and review guide](./01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/02_Module_01_Model_Answer_and_Review_Guide.md).
4. [Read the public-release record](./00_LEARNING_CONTROL/06_Module_01_Public_Release_Record.md).

Completion requires an artifact and an explanation the learner can defend. Reading the answer guide is not completion.

### Module 2 — Authentication, Authorization, and Authority

**Status:** Accepted for public learning use, version 1.0.

Module 2 teaches learners to distinguish authenticated identity, technical authorization, delegated business authority, and transaction consequence. It challenges the incomplete conclusion that SSO alone means an acting agent is controlled.

Use the package in this order:

1. [Read the Module 2 lesson](./01_AI_AGENT_IDENTITY_GOVERNANCE/05_Module_02_Authentication_Authorization_and_Authority.md).
2. [Complete the Module 2 participant workbook](./01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/03_Module_02_Participant_Workbook.md).
3. [Review the Module 2 model answer and review guide](./01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/04_Module_02_Model_Answer_and_Review_Guide.md).
4. [Read the Module 2 public-release record](./00_LEARNING_CONTROL/07_Module_02_Public_Release_Record.md).

As with Module 1, publication of the content does not establish any learner’s completion.

### Module 3 — OAuth, OIDC, Tokens, and Delegation

**Status:** Accepted for public learning use, version 1.0.

Module 3 teaches learners to distinguish OAuth from OpenID Connect; separate access, ID, and refresh tokens; trace agents, workloads, clients, token exchanges, tools, and targets; and identify where audience, scope, lifetime, or delegation can expand authority.

Use the package in this order:

1. [Read the Module 3 lesson](./01_AI_AGENT_IDENTITY_GOVERNANCE/06_Module_03_OAuth_OIDC_Tokens_and_Delegation.md).
2. [Complete the Module 3 participant workbook](./01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/05_Module_03_Participant_Workbook.md).
3. [Review the Module 3 model answer and review guide](./01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/06_Module_03_Model_Answer_and_Review_Guide.md).
4. [Read the Module 3 public-release record](./00_LEARNING_CONTROL/08_Module_03_Public_Release_Record.md).

The module develops program-lead recognition and challenge skills. It does not teach protocol configuration.

### Module 4 — Credentials, Secrets, and Privileged Access

**Status:** Accepted for public learning use, version 1.0.

Module 4 teaches learners to distinguish credentials, secrets, entitlements, privilege, and business authority; challenge shared and standing access; convert broad admin access into a bounded authority envelope; and require meaningful approval, evidence, suspension, recovery, and lifecycle controls.

Use the package in this order:

1. [Read the Module 4 lesson](./01_AI_AGENT_IDENTITY_GOVERNANCE/07_Module_04_Credentials_Secrets_and_Privileged_Access.md).
2. [Complete the Module 4 participant workbook](./01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/07_Module_04_Participant_Workbook.md).
3. [Review the Module 4 model answer and review guide](./01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/08_Module_04_Model_Answer_and_Review_Guide.md).
4. [Read the Module 4 public-release record](./00_LEARNING_CONTROL/09_Module_04_Public_Release_Record.md).

The module builds program-lead governance and challenge fluency. It does not teach PAM-platform, secret-management, or credential-engineering configuration.

### Module 5 — Agent Chains, Tools, Memory, and Context

**Status:** Accepted for public learning use, version 1.0.

Module 5 teaches learners to map a full agent chain from principal through agents, tools, credentials, and targets; distinguish a tool's technical capability from its governed authority; recognize confused-deputy and authority-attenuation failure across agent-to-agent delegation; separate trusted instructions from untrusted retrieved content, including direct and indirect prompt injection; govern working context and durable memory through provenance, write control, expiry, correction, deletion, and quarantine; and require chain-level evidence and interruption before a multi-tool or multi-agent design proceeds.

Use the package in this order:

1. [Read the Module 5 lesson](./01_AI_AGENT_IDENTITY_GOVERNANCE/08_Module_05_Agent_Chains_Tools_Memory_and_Context.md).
2. [Complete the Module 5 participant workbook](./01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/09_Module_05_Participant_Workbook.md).
3. [Review the Module 5 model answer and review guide](./01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/10_Module_05_Model_Answer_and_Review_Guide.md).
4. [Read the Module 5 public-release record](./00_LEARNING_CONTROL/10_Module_05_Public_Release_Record.md).

The module builds program-lead governance and challenge fluency across tool and agent chains. It does not teach agent-framework, tool-registry, or security-testing implementation.

### Module 6 — Human Authority and Separation of Duties

**Status:** Accepted for public learning use, version 1.0.

Module 6 teaches learners to classify agent actions as autonomous, monitored, prior approval, or prohibited; assign real human decision authority; separate incompatible roles; detect consent fatigue and automation bias; and establish timeout, escalation, intervention, and restoration controls.

Use the package in this order:

1. [Read the Module 6 lesson](./01_AI_AGENT_IDENTITY_GOVERNANCE/09_Module_06_Human_Authority_and_Separation_of_Duties.md).
2. [Complete the Module 6 participant workbook](./01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/11_Module_06_Participant_Workbook.md).
3. [Review the Module 6 model answer and review guide](./01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/12_Module_06_Model_Answer_and_Review_Guide.md).
4. [Read the Module 6 public-release record](./00_LEARNING_CONTROL/11_Module_06_Public_Release_Record.md).

The module develops decision-rights and operating-control judgment. It does not confer legal, safety, audit, architecture, or engineering authority.

### Module 7 — Evidence, Provenance, and Monitoring

**Status:** Accepted for public learning use, version 1.0.

Module 7 teaches learners to connect requests, identities, authority, approvals, tool attempts, and verified target outcomes; preserve provenance and uncertainty; protect evidence while limiting sensitive capture; and assign monitoring failures to accountable responses.

Use the package in this order:

1. [Read the Module 7 lesson](./01_AI_AGENT_IDENTITY_GOVERNANCE/10_Module_07_Evidence_Provenance_and_Monitoring.md).
2. [Complete the Module 7 participant workbook](./01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/13_Module_07_Participant_Workbook.md).
3. [Review the Module 7 model answer and review guide](./01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/14_Module_07_Model_Answer_and_Review_Guide.md).
4. [Read the Module 7 public-release record](./00_LEARNING_CONTROL/12_Module_07_Public_Release_Record.md).

The module develops evidence and monitoring judgment. It does not prescribe production logging architecture, establish legal retention requirements, or confer audit authority. Publication does not establish learner completion.

### Module 8 — Suspension, Response, Fallback, and Recovery

**Status:** Accepted for public learning use, version 1.0.

Module 8 teaches learners to assign emergency authority, identify work that survives an agent stop, verify containment, preserve evidence, establish viable fallback, and require evidence before restoring agent authority.

Use the package in this order:

1. [Read the Module 8 lesson](./01_AI_AGENT_IDENTITY_GOVERNANCE/11_Module_08_Suspension_Response_Fallback_and_Recovery.md).
2. [Complete the participant tabletop workbook](./01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/15_Module_08_Participant_Workbook.md).
3. [Review the model answer and review guide](./01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/16_Module_08_Model_Answer_and_Review_Guide.md).
4. [Read the public-release record](./00_LEARNING_CONTROL/13_Module_08_Public_Release_Record.md).

The module develops program-level response and recovery judgment. A tabletop does not prove production controls, and publication does not establish learner completion.

### Module 9 — Inventory, Lifecycle, and Program Governance

**Status:** Accepted for public learning use, version 1.0.

Module 9 teaches learners to define governed deployments, assign accountable owners, specify an agent inventory, lead lifecycle gate reviews, assess material changes, verify operational handover, and govern retirement.

Use the package in this order:

1. [Read the Module 9 lesson](./01_AI_AGENT_IDENTITY_GOVERNANCE/12_Module_09_Inventory_Lifecycle_and_Program_Governance.md).
2. [Complete the participant workbook](./01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/17_Module_09_Participant_Workbook.md).
3. [Review the model answer and review guide](./01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/18_Module_09_Model_Answer_and_Review_Guide.md).
4. [Read the public-release record](./00_LEARNING_CONTROL/14_Module_09_Public_Release_Record.md).

The module develops program-lead governance judgment. Inventory registration is not authorization, and publication does not establish learner completion.

### Module 10 — Executive Decision and Capstone Defense

**Status:** Accepted for public learning use, version 1.0.

Module 10 integrates the preceding modules into an ORION decision dossier, one-page memorandum, 90-second executive briefing, and fifteen-minute capstone defense. It separates preparation funding from operational authorization and activation, and requires explicit proof gates, accountable owners, value measurement, and expansion decisions.

1. [Read the Module 10 lesson](./01_AI_AGENT_IDENTITY_GOVERNANCE/13_Module_10_Executive_Decision_and_Capstone_Defense.md).
2. [Complete the participant workbook and memorandum template](./01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/19_Module_10_Participant_Workbook.md).
3. [Review the model answer and scoring rubric](./01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/20_Module_10_Model_Answer_and_Review_Guide.md).
4. [Read the public-release record](./00_LEARNING_CONTROL/15_Module_10_Public_Release_Record.md).

All ten Priority 1 instructional packages are now available. Demonstrated learning still requires original artifacts and a reviewed defense. The [facilitator guide covering Modules 1–10](./06_TRAINING_PRODUCTS/01_Facilitator_Guide_Modules_1-10.md) remains a draft. A formal GitHub Release is a separate versioned snapshot.

### Priority 2, Module 1 — AI Inventory and Ownership

**Status:** Accepted for public learning use, version 1.0.

Module 1 teaches learners to define an enterprise-wide AI inventory distinct from a conventional software asset register, assign accountable business, technical, and governance ownership, detect shadow AI and embedded vendor AI that self-attestation alone would miss, and reconcile a stated inventory against independently observed use. It connects to, and does not duplicate, the agent-specific lifecycle governance in Priority 1, Module 9.

Use the package in this order:

1. [Read the Module 1 lesson](./02_OPERATIONAL_AI_GOVERNANCE/01_Module_01_AI_Inventory_and_Ownership.md).
2. [Complete the participant workbook](./02_OPERATIONAL_AI_GOVERNANCE/exercises/01_Module_01_Participant_Workbook.md).
3. [Review the model answer and review guide](./02_OPERATIONAL_AI_GOVERNANCE/exercises/02_Module_01_Model_Answer_and_Review_Guide.md).
4. [Read the public-release record](./00_LEARNING_CONTROL/16_P2_Module_01_Public_Release_Record.md).

This module's source verification relied on independent web search rather than a direct publisher-page fetch; the public-release record flags that as pending further independent review. Modules 2–10 of Priority 2 remain planned. Priority 3 remains planned and not yet built.

## Curriculum roadmap

| Priority | Area | Status |
|---|---|---|
| 1 | AI-agent identity, security, and governance | Modules 1–10 accepted; learner completion requires artifacts and defense |
| 2 | Operationalizing AI governance | Module 1 accepted; Modules 2–10 planned |
| 3 | Financial decision fluency | Planned |

The [Learning Roadmap](./00_LEARNING_CONTROL/01_Learning_Roadmap.md) and [Content Build Register](./00_LEARNING_CONTROL/05_Content_Build_Register.md) show the planned sequence and current status.

## Repository structure

| Path | Purpose |
|---|---|
| `00_LEARNING_CONTROL/` | Charter, roadmap, sources, content status, progress, and terminology |
| `01_AI_AGENT_IDENTITY_GOVERNANCE/` | Active curriculum, exercises, and applied artifacts |
| `02_OPERATIONAL_AI_GOVERNANCE/` | Framework-to-operating-model learning |
| `03_FINANCIAL_DECISION_FLUENCY/` | Capital and financial decision learning |
| `04_CASE_STUDIES/` | Cross-domain cases |
| `05_PORTFOLIO_ARTIFACTS/` | Reviewed demonstrations |
| `06_TRAINING_PRODUCTS/` | Future workshop and facilitator materials |

## Evidence standard

Reading alone is not completion. Demonstrated learning requires:

- A completed governing artifact.
- A written or oral defense.
- Source-grounded reasoning.
- Clear ownership and authority boundaries.
- A statement of unresolved uncertainty.
- A distinction between program leadership and qualified technical or professional authority.

## Use boundaries

- The material is educational and illustrative, not production architecture.
- Cases are fictional or sanitized.
- External sources retain their own status, ownership, and terms.
- Drafts, initiatives, project pages, commentary, and final standards are labeled differently.
- Users must verify source versions and applicability to their organization, sector, and jurisdiction.
- Qualified legal, regulatory, accounting, audit, privacy, safety, cybersecurity, architecture, and engineering conclusions belong to the appropriate professionals.

## License

Except where otherwise noted, original educational material is licensed under [CC BY 4.0](./LICENSE.md). You may share and adapt it, including commercially, with attribution.

## Relationship to other work

The curriculum may apply concepts developed in *The Sentient PMO* and *Forensic Capital Governance*, including accountable authority and evidence-based governance. Those books and their manuscripts are separately governed and are not licensed through this repository.

## Author

Michael Kaplan is a senior enterprise program leader whose work connects cybersecurity, IAM/PAM, regulated delivery, AI governance, and accountable decision-making.

