# Enterprise AI Governance Learning

Free, source-grounded learning materials for leaders responsible for AI-agent identity, privileged access, operational governance, and accountable enterprise adoption.

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

## Curriculum roadmap

| Priority | Area | Status |
|---|---|---|
| 1 | AI-agent identity, security, and governance | Active; Modules 1–5 accepted |
| 2 | Operationalizing AI governance | Planned |
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

