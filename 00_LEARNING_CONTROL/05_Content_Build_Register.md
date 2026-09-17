# Content Build Register

**Purpose:** Track what learning content must be created, reviewed, accepted, and later converted into portfolio or training material.

**Last updated:** 2026-09-17

## Two tracking systems

| Register | Tracks | Governing question |
|---|---|---|
| This Content Build Register | Repository content production | What material still needs to be built and accepted? |
| [Progress Record](./03_Progress_Record.md) | Michael's demonstrated learning | What can Michael now explain, apply, and defend? |

A document can be accepted as content while the corresponding learning remains incomplete. Reading an accepted document does not establish demonstrated competence.

## Content status

| Status | Meaning |
|---|---|
| Backlog | Required content has been identified but drafting has not started |
| Drafting | Content is being developed |
| Ready for review | A complete draft exists and awaits source, positioning, and usability review |
| Accepted | Content has passed review for its current learning purpose |
| Superseded | Replaced by a newer accepted item; retained only when useful for history |

## Standard module package

Each substantive learning module should eventually include:

1. **Module lesson** — executive explanation of the concepts and governing problem.
2. **Primary-source map** — the smallest authoritative reading set, including status and version.
3. **Applied example** — a fictional or sanitized enterprise situation.
4. **Exercise** — work Michael must perform rather than merely read.
5. **Review observations** — what a strong response should recognize without pretending there is one universal technical answer.
6. **Completion evidence** — the artifact or defense required for the Progress Record.
7. **Interview translation** — a concise explanation tied to Michael's credible role.
8. **Portfolio candidate** — only when the work can demonstrate judgment without exposing confidential information or overstating technical implementation.

Training-product materials such as slides, facilitator notes, participant workbooks, and answer keys are a later conversion layer. They are not required to complete personal learning.

# Priority 1 — AI-Agent Identity, Security, and Governance

## Foundation already accepted

| ID | Content | Location | Status |
|---|---|---|---|
| P1-F01 | Module overview | [Priority 1 Overview](../01_AI_AGENT_IDENTITY_GOVERNANCE/00_Module_Overview.md) | Accepted |
| P1-F02 | Thirty-day learning guide | [Learning Guide](../01_AI_AGENT_IDENTITY_GOVERNANCE/01_Thirty_Day_Learning_Guide.md) | Accepted |
| P1-F03 | AI Agent Privileged-Access Lifecycle template | [Lifecycle](../01_AI_AGENT_IDENTITY_GOVERNANCE/02_AI_Agent_Privileged_Access_Lifecycle.md) | Accepted |
| P1-F04 | Regulated-enterprise case workbook | [Case Workbook](../01_AI_AGENT_IDENTITY_GOVERNANCE/03_Regulated_Enterprise_Case_Workbook.md) | Accepted |
| P1-F05 | Initial source register | [Source Register](./02_Source_Register.md) | Accepted |
| P1-F06 | Initial terminology register | [Terminology](./04_Terminology.md) | Accepted |

These items establish the path and applied artifacts. They do not yet provide the complete instructional content for every topic in the 30-day guide.

## Instructional modules to build

| ID | Module | Guide coverage | Core material required | Required exercise | Status | Next action |
|---|---|---|---|---|---|---|
| P1-M01 | Acting agents and identity types | Days 1–2 | Agent versus chatbot; human, service, workload, and agent identities; when an agent becomes privileged | Classify four regulated-enterprise identities and identify impersonation risk | Accepted | Maintain source status and incorporate substantiated reader feedback |
| P1-M02 | Authentication, authorization, and authority | Day 3 | Identity proof, permissions, business authority, transaction consequence; why identity is not authority | Challenge the statement: “The agent uses SSO, so access is controlled” | Accepted | Maintain source status and incorporate substantiated reader feedback |
| P1-M03 | OAuth, OIDC, tokens, and delegation | Days 4–5 | OAuth/OIDC recognition; clients, scopes, audiences, token lifetime, proof of possession, workload identity, delegation chains | Trace human/system → agent → tool → target | Accepted | Maintain source status and incorporate substantiated reader feedback |
| P1-M04 | Credentials, secrets, and privileged access | Days 6–8 | Credential sharing, impersonation, static secrets, short-lived credentials, least privilege, least standing privilege, JIT access, tool permissions | Convert broad “admin” access into a bounded authority statement | Accepted | Maintain source status and incorporate substantiated reader feedback |
| P1-M05 | Agent chains, tools, memory, and context | Days 8–10 | Tool authority, agent-to-agent delegation, confused authority, context and memory poisoning, unauthorized tool discovery | Build a tool and downstream-authority matrix | Accepted | Maintain source status and incorporate substantiated reader feedback |
| P1-M06 | Human authority and separation of duties | Day 11 | Human-in-the-loop, human-on-the-loop, consent fatigue, meaningful approval, prohibited activity, separation of duties | Classify actions as autonomous, monitored, prior approval, or prohibited | Backlog | Build action-classification exercise and approval-quality rubric |
| P1-M07 | Evidence, provenance, and monitoring | Days 12–13 | Transaction correlation, identity and policy evidence, context references, log integrity, privacy/records limits, leading and incident indicators | Specify an agent transaction evidence record | Backlog | Draft evidence-chain lesson and monitoring worksheet |
| P1-M08 | Suspension, response, fallback, and recovery | Days 14–15 | Emergency authority, disabling identity, revoking credentials, containing queued work, preserving evidence, continuity, governed restoration | Conduct the unexpected-privileged-action tabletop | Backlog | Draft tabletop package and decision prompts |
| P1-M09 | Inventory, lifecycle, and program governance | Days 16–18 | Inventory, ownership, lifecycle gates, change reauthorization, architecture-review leadership | Complete an agent inventory entry and lifecycle gate review | Backlog | Draft inventory and gate-review lesson |
| P1-M10 | Executive decision and capstone defense | Days 19–20 | Executive briefing, decision memorandum, recommendation choices, residual uncertainty, next proof | Defend approve, constrain, pilot, or defer | Backlog | Build memorandum template, defense questions, and scoring rubric |

## Module 1 public-release package

| ID | Public material | Location | Status |
|---|---|---|---|
| P1-PUB01 | Module 1 lesson | [Acting Agents and Identity Types](../01_AI_AGENT_IDENTITY_GOVERNANCE/04_Module_01_Acting_Agents_and_Identity_Types.md) | Accepted |
| P1-PUB02 | Participant workbook | [Identity Classification and Accountability](../01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/01_Module_01_Participant_Workbook.md) | Accepted |
| P1-PUB03 | Model answer and review guide | [Model Answer and Review Guide](../01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/02_Module_01_Model_Answer_and_Review_Guide.md) | Accepted |
| P1-PUB04 | Public-release record | [Module 1 Public-Release Record](./06_Module_01_Public_Release_Record.md) | Accepted |
| P1-PUB05 | Content license | [CC BY 4.0](../LICENSE.md) | Accepted |

## Module 2 public-release package

| ID | Public material | Location | Status |
|---|---|---|---|
| P1-PUB06 | Module 2 lesson | [Authentication, Authorization, and Authority](../01_AI_AGENT_IDENTITY_GOVERNANCE/05_Module_02_Authentication_Authorization_and_Authority.md) | Accepted |
| P1-PUB07 | Module 2 participant workbook | [Authentication-to-Consequence Workbook](../01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/03_Module_02_Participant_Workbook.md) | Accepted |
| P1-PUB08 | Module 2 model answer and review guide | [Model Answer and Review Guide](../01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/04_Module_02_Model_Answer_and_Review_Guide.md) | Accepted |
| P1-PUB09 | Module 2 public-release record | [Module 2 Public-Release Record](./07_Module_02_Public_Release_Record.md) | Accepted |

## Module 3 public-release package

| ID | Public material | Location | Status |
|---|---|---|---|
| P1-PUB10 | Module 3 lesson | [OAuth, OIDC, Tokens, and Delegation](../01_AI_AGENT_IDENTITY_GOVERNANCE/06_Module_03_OAuth_OIDC_Tokens_and_Delegation.md) | Accepted |
| P1-PUB11 | Module 3 participant workbook | [Agent Token and Delegation Chain](../01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/05_Module_03_Participant_Workbook.md) | Accepted |
| P1-PUB12 | Module 3 model answer and review guide | [Model Answer and Review Guide](../01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/06_Module_03_Model_Answer_and_Review_Guide.md) | Accepted |
| P1-PUB13 | Module 3 public-release record | [Module 3 Public-Release Record](./08_Module_03_Public_Release_Record.md) | Accepted |

## Module 4 public-release package

| ID | Public material | Location | Status |
|---|---|---|---|
| P1-PUB14 | Module 4 lesson | [Credentials, Secrets, and Privileged Access](../01_AI_AGENT_IDENTITY_GOVERNANCE/07_Module_04_Credentials_Secrets_and_Privileged_Access.md) | Accepted |
| P1-PUB15 | Module 4 participant workbook | [Bounded Privileged Authority](../01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/07_Module_04_Participant_Workbook.md) | Accepted |
| P1-PUB16 | Module 4 model answer and review guide | [Model Answer and Review Guide](../01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/08_Module_04_Model_Answer_and_Review_Guide.md) | Accepted |
| P1-PUB17 | Module 4 public-release record | [Module 4 Public-Release Record](./09_Module_04_Public_Release_Record.md) | Accepted |

## Module 5 public-release package

| ID | Public material | Location | Status |
|---|---|---|---|
| P1-PUB18 | Module 5 lesson | [Agent Chains, Tools, Memory, and Context](../01_AI_AGENT_IDENTITY_GOVERNANCE/08_Module_05_Agent_Chains_Tools_Memory_and_Context.md) | Accepted |
| P1-PUB19 | Module 5 participant workbook | [Tool and Downstream-Authority Matrix](../01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/09_Module_05_Participant_Workbook.md) | Accepted |
| P1-PUB20 | Module 5 model answer and review guide | [Model Answer and Review Guide](../01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/10_Module_05_Model_Answer_and_Review_Guide.md) | Accepted |
| P1-PUB21 | Module 5 public-release record | [Module 5 Public-Release Record](./10_Module_05_Public_Release_Record.md) | Accepted |

## Priority 1 exercises and completed-work artifacts

| ID | Artifact | Purpose | Content status | Learning status |
|---|---|---|---|---|
| P1-A01 | [Identity Classification and Accountability Map — participant workbook](../01_AI_AGENT_IDENTITY_GOVERNANCE/exercises/01_Module_01_Participant_Workbook.md) | Show every acting identity and authority transfer | Template accepted | Not started |
| P1-A02 | Completed privileged-access lifecycle | Demonstrate lifecycle control reasoning | Template accepted | Not started |
| P1-A02B | Module 2 authentication-to-consequence analysis | Separate identity, authentication, authorization, delegated authority, and consequence | Workbook accepted | Not started |
| P1-A02C | Module 3 agent token-and-delegation chain | Trace agents, workloads, clients, tokens, exchanges, tools, and targets | Workbook accepted | Not started |
| P1-A02D | Module 4 bounded privileged-authority analysis | Convert broad admin access into a testable authority envelope and lifecycle control plan | Workbook accepted | Not started |
| P1-A02E | Module 5 tool and downstream-authority matrix | Trace authority, attribution, and confused-deputy risk across a tool and agent-delegation chain | Workbook accepted | Not started |
| P1-A03 | Tool and target-system matrix | Expose authority across tools, agents, systems, and environments | Superseded by P1-A02E | Not started |
| P1-A04 | Human-authority decision matrix | Separate autonomous, monitored, approval, and prohibited actions | Backlog | Not started |
| P1-A05 | Evidence-record specification | Define decision-grade transaction evidence | Backlog | Not started |
| P1-A06 | Suspension and fallback runbook | Demonstrate interruptibility and continuity | Backlog | Not started |
| P1-A07 | Completed ORION case workbook | Apply the full control model | Workbook accepted | Not started |
| P1-A08 | One-page decision memorandum | Recommend approval, constraint, pilot, or deferral | Backlog | Not started |
| P1-A09 | Fifteen-minute defense guide | Test ability to explain and defend the recommendation | Backlog | Not started |
| P1-A10 | Interview-ready explanation | Translate learning into credible professional positioning | Backlog | Not started |

## Priority 1 build sequence

The build should follow the learning path:

1. P1-M01 through P1-M03 — identity and delegated authority.
2. P1-M04 and P1-M05 — privileged access, tools, and agent chains.
3. P1-M06 through P1-M08 — human authority, evidence, and response.
4. P1-M09 and P1-M10 — program leadership and capstone decision.
5. Populate P1-A02 and P1-A07 throughout the sequence.
6. Complete P1-A08 through P1-A10 only after the underlying exercises exist.
7. Review portfolio candidates after demonstrated learning, not before.

# Priority 2 — Operationalizing AI Governance

## Planned instructional modules

| ID | Module | Core output | Status |
|---|---|---|---|
| P2-M01 | AI inventory and ownership | Inventory schema and owner model | Backlog |
| P2-M02 | Use-case classification and risk tiers | Classification and approval matrix | Backlog |
| P2-M03 | Impact and control assessment | Assessment template and evidence requirements | Backlog |
| P2-M04 | Testing, evaluation, verification, and validation | TEVV decision model | Backlog |
| P2-M05 | Monitoring and change governance | Monitoring and material-change standard | Backlog |
| P2-M06 | Vendor and supply-chain governance | Due-diligence and contract-control checklist | Backlog |
| P2-M07 | Incident response and decommissioning | Response and retirement lifecycle | Backlog |
| P2-M08 | Evidence retention and defensibility | Evidence architecture and retention questions | Backlog |
| P2-M09 | Framework-to-control crosswalk | NIST AI RMF, NIST CSF 2.0, ISO/IEC 42001, IAM/PAM, privacy, risk, and records map | Backlog |
| P2-M10 | Executive AI governance operating model | Decision rights, forums, gates, evidence, and escalation | Backlog |

Priority 2 source versions must be verified when work begins. Do not prebuild the crosswalk from stale versions.

# Priority 3 — Financial Decision Fluency

## Planned instructional modules

| ID | Module | Core output | Status |
|---|---|---|---|
| P3-M01 | Financial statements and project economics orientation | Executive concept map | Backlog |
| P3-M02 | Time value of money, NPV, and IRR | Worked scenarios | Backlog |
| P3-M03 | Cost of capital and risk-adjusted value | Decision worksheet | Backlog |
| P3-M04 | CAPEX, OPEX, and treatment boundaries | Classification questions and authority limits | Backlog |
| P3-M05 | Benefits realization and forecast confidence | Benefits evidence model | Backlog |
| P3-M06 | Scenario and sensitivity analysis | Scenario model | Backlog |
| P3-M07 | Sunk cost and continuing-investment validity | Continuation case | Backlog |
| P3-M08 | Impairment, abandonment, and recovery value | Decision case with qualified-authority boundaries | Backlog |
| P3-M09 | Reversibility and option value | Option-value decision model | Backlog |
| P3-M10 | Stage funding and capital release | Investment gate model | Backlog |
| P3-M11 | Investment-committee capstone | Continue, constrain, redirect, or stop memorandum | Backlog |

Priority 3 must teach executive fluency without implying accounting, valuation, tax, or legal authority.

# Integrated case and external outputs

| ID | Output | Dependency | Status |
|---|---|---|---|
| INT-C01 | Privileged AI agent in regulated IT/OT environment | Priorities 1 and 2 | Backlog |
| INT-C02 | Agent program investment continuation case | Priorities 1, 2, and 3 | Backlog |
| PORT-01 | AI Agent Privileged-Access Lifecycle — completed example | Demonstrated P1-A02 | Backlog |
| PORT-02 | Sanitized regulated-enterprise decision memorandum | Demonstrated P1-A08 | Backlog |
| PORT-03 | Executive operating-model one-pager | Demonstrated Priority 2 | Backlog |
| PORT-04 | Investment continuation decision case | Demonstrated Priority 3 | Backlog |
| TRAIN-01 | Executive briefing deck | Portfolio review complete | Backlog |
| TRAIN-02 | [Facilitator guide — Modules 1–5](../06_TRAINING_PRODUCTS/01_Facilitator_Guide_Modules_1-5.md) | Demonstrated content and license review | Drafting; sequences accepted Modules 1–5, not yet passed the Training Products gate |
| TRAIN-03 | Participant workbook | Demonstrated content and license review | Backlog |
| TRAIN-04 | Agent suspension tabletop | P1-M08 accepted and demonstrated | Backlog |

# Immediate content backlog

Only one item should be actively drafted at a time unless there is a clear independent need.

| Order | ID | Action | Definition of done |
|---:|---|---|---|
| 1 | P1-A01 | Complete the Module 1 participant workbook and defense | Preserve a learner-created artifact; do not submit the model answer as completed work |
| 2 | P1-A02B | Complete the Module 2 participant workbook and defense | Create and defend the authentication-to-consequence boundary analysis |
| 3 | P1-A02C | Complete the Module 3 participant workbook and defense | Create and defend the agent token-and-delegation chain |
| 4 | P1-A02D | Complete the Module 4 participant workbook and defense | Create and defend the bounded privileged-authority analysis; do not submit the model answer as completed work |
| 5 | P1-A02E | Complete the Module 5 participant workbook and defense | Create and defend the tool and downstream-authority matrix; do not submit the model answer as completed work |
| 6 | P1-M06 | Build “Human Authority and Separation of Duties” | Complete lesson, participant workbook, model answer, source review, and release record |
| 7 | TRAIN-02 | Build a facilitator/timing guide for group delivery of Modules 1–5 | One-page-per-module facilitator guide with timing, discussion prompts, and scoring guidance; does not replace individual completion evidence |
| 8 | P1-A01 | Promote the reviewed identity map after learner defense | Completed artifact stored under Priority 1 completed work; learning status updated only after defense |
| 9 | Progress | Record Week 1 evidence | Progress Record updated only after the exercise and defense exist |

## Update rule

For every content change:

1. Update the item's content status here.
2. Add or update the artifact link.
3. Record source additions or status changes in the Source Register.
4. Update the Progress Record only when Michael completes the work.
5. Promote an item to Portfolio Artifacts only after the portfolio gate is satisfied.
