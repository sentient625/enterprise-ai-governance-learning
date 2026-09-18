# Module 11 — AI Inventory and Ownership

**Status:** Accepted for public learning use

**Version:** 1.0

**Guide coverage:** Days 1–3

**Estimated study time:** 60–90 minutes plus exercise

## Purpose

Module 9 governed one already-identified agent, ORION, once someone had decided to track it. This module addresses the problem that comes before that: most organizations do not have a single reliable list of everywhere AI is actually running, and a list that exists is not the same thing as an owned, governed inventory.

A spreadsheet a business unit maintains for its own use, a vendor contract that mentions "AI-enabled features," a data-science notebook someone promoted to production, and a chatbot embedded in a SaaS renewal are all AI use, and none of them automatically appears in a security or IT asset register. An enterprise cannot classify risk, assign approval boundaries, require testing, or respond to an incident for a use case it has not found and does not own.

This module develops the program-level ability to define what belongs in an enterprise AI inventory, distinguish traditional software asset management from AI-specific inventory needs, assign real accountable ownership, and lead the reconciliation work that finds the gap between what the inventory says and what is actually running.

The inventory schema, ownership model, and case below are original educational synthesis. They are not a NIST-, ISO-, or OMB-prescribed form, a certification scheme, or a production data model.

## Learning objectives

A learner should be able to:

- Distinguish an AI use case, a deployed instance, and an underlying model or component.
- Specify an enterprise AI inventory that captures purpose, ownership, data, dependency, and lifecycle-state fields sufficient to support later risk classification.
- Separate AI-specific inventory needs from conventional IT asset and software inventories.
- Assign accountable business, technical, and governance ownership, and distinguish ownership from mere participation.
- Identify common blind spots — shadow AI, embedded vendor AI, and legacy models — and design detection approaches for each.
- Reconcile a stated inventory against observed use without claiming false completeness.
- Connect an enterprise-wide inventory to the agent-specific inventory and lifecycle work developed in Module 9, without duplicating it.
- Explain the program-lead's inventory role without claiming data-science, procurement, or legal authority.

## 1. Why a general IT asset inventory is not enough

Conventional IT and software asset management tracks licenses, versions, and hosting. It was not built to answer AI-specific questions:

- What is the AI actually deciding, recommending, generating, or acting on, and for whom?
- What data trained, fine-tuned, or is retrieved by the system, and under what rights?
- Does behavior depend on a model version that the vendor can change without the enterprise's action?
- Is a human decision meant to sit between the AI's output and a consequential action, and does it actually?
- Who can explain, defend, or correct the system's behavior in a specific case?

A license record can be accurate and still tell an organization nothing about these questions. An AI inventory therefore extends, rather than replaces, existing IT and vendor inventories.

## 2. Define the unit that gets inventoried

An "AI use case" is a named business purpose served by one or more AI components in a specific context — for example, "resume screening for corporate-function hiring" or "customer-chat drafting for tier-1 support." A use case can be served by more than one deployed system over time, and a single model or platform can serve more than one use case with different risk profiles.

Track three linked levels:

| Level | What it identifies | Example |
|---|---|---|
| Use case | The business purpose, population affected, and decision it informs | Resume screening for corporate-function hiring |
| Deployed instance | The specific configuration, environment, and version in operation | Screening tool v3.2, production, North America requisitions |
| Component | The underlying model, provider, or engine and its version | Vendor-hosted classifier, model version dated this quarter |

A change at any level can change the risk of the others. Choose inventory granularity by what differs in purpose, population, data, or control — not by product marketing names. Record why entries are split or merged. This mirrors the granularity discipline in Module 9, but here the scope is every AI use case in the enterprise, not one already-identified privileged agent.

## 3. Minimum enterprise AI inventory specification

| Group | Minimum content | Question it supports |
|---|---|---|
| Identification | Use-case name, deployed instance(s), component/model/provider and version, environment | What exactly is this? |
| Purpose | Business function, intended benefit, decision the output informs, prohibited uses | Why does it exist and what may it not be used for? |
| Population and data | Affected individuals or entities, data classes used and produced, training/retrieval data provenance | Who and what is affected? |
| Ownership | Named business owner, technical owner, and governance/control owner; accepted handover | Who decides and who maintains it? |
| Human role | Degree of automation, whether a human reviews or decides before consequence, override path | Where does a human sit in the loop? |
| Acquisition path | Built in-house, embedded in a purchased product, open-source component, or vendor-hosted service | How did this enter the enterprise, and who controls change? |
| Dependency | Upstream data sources, downstream systems, integration points, shared infrastructure | What else does this depend on or affect? |
| Lifecycle state | Development, pilot, production, paused, retired; date of last verification | Is this still active, and since when? |
| Evidence | Links to risk classification, approval, testing, and monitoring records once they exist | What supports current permission to operate? |
| Record quality | Source of each field, last verified date and verifier, known gaps | How reliable is this entry? |

Later modules will build the risk-tiering, impact-assessment, and monitoring content that some fields point to. This module establishes the inventory those later decisions depend on; it does not itself assign a risk tier.

## 4. Ownership means accountability, not attendance

| Role | Core responsibility | Does not automatically confer |
|---|---|---|
| Business owner | Defines the purpose, accepts the benefit and the consequence, decides whether the use case continues | Technical or control authority |
| Technical owner | Maintains the deployed configuration and its dependencies | Business risk acceptance |
| Governance/control owner | Confirms the use case is registered, classified, and evidenced according to enterprise policy | Universal veto over business decisions outside their remit |
| Executive sponsor | Provides priority and resourcing | Any of the above roles by default |
| Inventory/record steward | Maintains the registry itself, resolves conflicting entries, tracks reconciliation | Ownership of any individual use case |

An owner named as "the vendor," "IT," or "the department" is not an accountable owner. Record a named role or person, an accepted handover, and a designated alternate. When a use case has no accepted owner, that is itself a finding — not a reason to leave the entry blank or delete it.

## 5. Where AI use hides

An inventory built only from a survey or self-attestation will systematically miss:

| Blind spot | Why it is missed | A detection approach |
|---|---|---|
| Shadow AI | A team adopts a consumer or low-code AI tool without procurement or IT review | Cross-check network, SaaS-access, and expense records against the registry; ask business units directly rather than assuming silence means absence |
| Embedded vendor AI | A purchased platform adds AI-enabled features through a routine update | Review vendor release notes and renewal terms; require vendors to disclose AI features as a contract term going forward |
| Legacy models | A model deployed before an AI governance program existed is still running and was never registered | Reconcile against production deployment records, scheduled jobs, and system inventories, not only against people's memory |
| Personal or team-level use | An individual uses a general-purpose AI tool for a business task without it being called a "deployment" | Define the threshold at which repeated individual use becomes a governed use case, and communicate it, rather than treating all such use as unreportable |
| Research or pilot carryover | A pilot quietly continues serving real business decisions after the project closed | Apply Module 9's lifecycle discipline: closeout is not the same as authorized continued operation |

Self-attestation is a useful starting signal, not a completeness proof. State explicitly what population the inventory covers and what it does not yet cover, rather than claiming full coverage prematurely.

## 6. Reconciliation is the actual work

Maintaining an inventory is not a one-time survey. Reconcile the registry regularly against:

- procurement and contract records for AI-enabled products and services;
- cloud and platform billing or usage records for AI/ML services;
- identity and access records for AI platforms and model APIs;
- security and network telemetry showing traffic to known AI service endpoints;
- business-unit attestation, refreshed on a defined cadence.

Each source has blind spots of its own; use more than one. Track unmatched deployments, ownerless entries, and use cases whose classification evidence has expired, the same way Module 9 tracks unmatched agent deployments and expired approvals. An entry found in telemetry but absent from the registry is a discrepancy to investigate, not proof of malicious intent. Assign a cadence based on how quickly the organization's AI use actually changes, plus event-driven triggers such as a new vendor contract or a reported incident elsewhere in the industry.

## 7. Relationship to Module 9

Module 9 governs the lifecycle of an already-identified, already-privileged agent such as ORION: its owners, its authorized scope, its gates, its retirement. This module governs the wider population that agent sits inside — every AI use case across the enterprise, most of which will never hold privileged, agentic authority at all. ORION should appear in this enterprise inventory as one entry among many, cross-referenced to its Module 9 lifecycle record rather than duplicating it. A program lead should be able to answer both "is ORION's specific authority still valid?" (Module 9) and "what AI is running across the enterprise, and does each entry have an owner?" (this module) without treating either question as a substitute for the other.

## 8. Fictional case — the enterprise ORION sits inside

All names and facts are fictional. The enterprise that sponsors ORION also has, according to its existing IT asset register, "approximately 40 software products with AI-related marketing claims" and no consolidated AI-specific inventory. A governance program is asked to produce one within a quarter.

Early findings include:

- ORION is well documented under Module 9's lifecycle record, but is not yet cross-referenced in any enterprise-wide AI list;
- a regional sales team has been using a consumer generative-AI tool to draft customer proposals for eight months, funded through a personal expense account;
- a benefits-administration vendor added an AI-driven eligibility-recommendation feature in a routine platform update six months ago; no one reviewed it;
- a customer-service analytics pilot from two years ago never received a lifecycle closeout and still runs against live customer data;
- three business units each independently maintain their own partial AI lists, none of which agree with each other or with IT's asset register.

### Governing diagnosis

- No single accountable owner exists for the enterprise-wide inventory itself.
- Self-attestation alone would have missed the vendor-embedded feature and likely the consumer-tool use.
- "Documented under Module 9" is not the same as "registered in the enterprise inventory"; the two must be linked, not treated as duplicates or as substitutes for each other.
- The abandoned pilot is a lifecycle failure, not evidence that inventory work is unnecessary.
- Three disagreeing partial lists are worse than no list, if leadership believes any one of them is complete.

## 9. Applied inventory and ownership assignment

A defensible response separates what is known, what is suspected, and what remains unknown, and assigns a next action to each:

| Use case | Current state | Owner gap | Immediate action |
|---|---|---|---|
| ORION maintenance agent | Documented (Module 9) | Not cross-referenced in enterprise inventory | Add enterprise-inventory entry linked to existing lifecycle record |
| Sales proposal drafting (consumer tool) | Discovered, unregistered | No business or technical owner; no data-handling review | Register as shadow AI finding; assign interim owner; assess data exposure before deciding to sanction, restrict, or replace |
| Benefits eligibility recommendation (vendor feature) | Discovered, unregistered | Vendor manages the model; enterprise has not accepted or reviewed it | Register as embedded vendor AI; request vendor documentation; assign a business owner to accept or reject continued use |
| Customer-service analytics pilot | Registered informally, never closed out | No current accountable owner | Apply Module 9's lifecycle discipline: reopen a lifecycle decision rather than leaving it running by default |
| Three disagreeing business-unit lists | Exist, conflict | No steward reconciling them | Assign a record steward; reconcile to one authoritative registry; retain disagreement history rather than silently picking one list |

The point of this table is not to reach zero unknowns immediately. It is to make every gap visible, owned, and scheduled for resolution, rather than leaving it invisible.

## 10. Executive and program-lead questions

1. Is there one authoritative AI inventory, or several that disagree?
2. What population and sources does the inventory actually cover, and what does it not yet cover?
3. Does every entry have a named accountable business owner, not just a department?
4. How would the organization detect a consumer AI tool or an embedded vendor feature it did not procure?
5. Is a completed pilot still running without a lifecycle decision?
6. How often is the inventory reconciled against independent sources, and by whom?
7. Are agent-specific lifecycle records (Module 9) linked to the enterprise inventory, or duplicated and drifting apart?
8. What happens to a use case discovered with no owner — does it get an owner, or does it get deleted from view?

## 11. Knowledge check

1. Why is a conventional software asset inventory insufficient for AI governance?
2. Name the three linked levels an AI inventory should track.
3. Why is "IT" not an acceptable owner entry?
4. Give two examples of AI use that a self-attestation survey would likely miss.
5. Why must reconciliation use more than one independent source?
6. How does this module's inventory differ in scope from Module 9's agent lifecycle record?

### Answer guide

1. It tracks licenses and hosting, not purpose, data, human role, or model-version dependency.
2. Use case, deployed instance, and underlying component/model.
3. It names no accountable person or defined role who can answer for the use case's decisions.
4. Shadow AI adopted without procurement review, and AI features embedded in a vendor product update.
5. Each source has its own blind spots; a single source can systematically miss the same category of use every time.
6. Module 9 governs one already-identified, already-privileged agent's lifecycle; this module governs the full population of AI use across the enterprise, most of which never becomes a privileged agent at all.

## 12. Exercise and completion evidence

Complete the [Module 11 Participant Workbook](./exercises/01_Module_01_Participant_Workbook.md) before reading the [Model Answer and Review Guide](./exercises/02_Module_01_Model_Answer_and_Review_Guide.md).

Completion requires:

- an original enterprise AI inventory schema populated for the fictional case;
- a named ownership assignment for each discovered use case, including gaps;
- a shadow-AI and embedded-vendor-AI detection plan;
- a reconciliation cadence and source list;
- a written or oral defense.

Publication does not establish learner completion.

## 13. Interview translation

A credible program-lead statement is:

> I can lead the program work that builds and maintains an enterprise-wide AI inventory: defining what belongs in it, assigning real accountable ownership, designing detection for shadow and embedded AI that a survey alone would miss, and reconciling the registry against independent sources on a defined cadence. I connect this enterprise view to agent-specific lifecycle governance without duplicating it. Data-science, procurement, and legal specialists make the conclusions reserved to their authority.

This builds on program disciplines of asset management, vendor governance, stakeholder reconciliation, and accountable ownership. It does not claim model inventory tooling engineering or a specific compliance certification.

## 14. Primary sources

- [NIST AI Risk Management Framework 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf) — GOVERN 1.5 (periodic review), GOVERN 1.6 (AI system inventory mechanisms, resourced by risk priority), and GOVERN 1.7 (safe decommissioning) inform this module's inventory and lifecycle-boundary framing. AI RMF 1.0 remains the published framework while revision work proceeds.
- [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf) — ID.AM (asset management) informs the general asset-inventory discipline this module extends into AI-specific fields; CSF 2.0 is an outcomes framework, not an AI-specific schema.
- [ISO/IEC 42001:2023 — AI management systems](https://www.iso.org/standard/42001) — establishes requirements for an organizational AI management system, including AI-system impact assessment and lifecycle-oriented controls; a certifiable management-system standard, not a public inventory schema, and this module does not claim ISO-conformant control mapping.
- [OMB Memorandum M-25-21 — Accelerating Federal Use of AI through Innovation, Governance, and Public Trust](https://static.carahsoft.com/concrete/files/9717/4412/5797/Guidance_M-25-21_Accelerating_Federal_Use_of_AI_through_Innovation_Governance_and_Public_Trust.pdf) (issued April 3, 2025; rescinds and replaces OMB M-24-10, "Advancing Governance, Innovation, and Risk Management for Agency Use of Artificial Intelligence") — illustrative context only: a real government requirement for agencies to inventory AI use cases, assign Chief AI Officer accountability, and publicly report annually. This module does not apply to federal agencies specifically and draws only the general inventory-and-ownership pattern, not the memo's compliance obligations.

Source status was checked through independent web search on 2026-09-18; direct publisher-page fetch was unavailable during this session due to network egress restrictions in the authoring environment. Verify current versions and organizational applicability, including the exact publisher URL for M-25-21, before production or public-sector use.
