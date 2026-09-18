# Module 9 — Inventory, Lifecycle, and Program Governance

**Status:** Accepted for public learning use

**Version:** 1.0

**Guide coverage:** Days 16–18

**Estimated study time:** 60–90 minutes plus exercise

## Purpose

An agent listed in a spreadsheet is not necessarily owned, authorized, or operating within its approved boundaries. A production instance can keep its familiar name while its model, tools, data, delegated identities, or business purpose change. A completed project can leave continuing obligations without an operational owner.

This module connects the controls developed in Modules 1–8 to an inventory and lifecycle decision process. It teaches a program leader to identify the governed unit, assign accountable owners, organize evidence for decisions, recognize material change, and verify retirement.

The schema, gate model, and case below are original educational synthesis. They are not a NIST-prescribed agent registry, a certification scheme, or a production architecture.

## Learning objectives

A learner should be able to:

- Distinguish an agent definition, deployed instance, identity, and authority envelope.
- Specify an inventory that links owners, dependencies, approved scope, operating state, and evidence.
- Assign decision rights across sponsorship, business ownership, technology, IAM, operations, and control functions.
- Define evidence and authority for every lifecycle gate.
- Determine which changes require reclassification, reauthorization, or operating restriction.
- Lead an architecture review and resolve conditions without substituting meeting attendance for approval.
- Reconcile inventory claims with observed deployments and access.
- Verify ownership transfer and retirement while preserving necessary records.

## 1. Define the governed unit

A product name is too broad when different deployments have different authority. Track a stable agent definition and link each governed deployment or configuration to its environment, purpose, permission set, accountable owner, and authorization decision. Link runtime instance identifiers where needed for attribution.

For example, ORION in UAT and ORION with production restart privileges require distinguishable records even if they use the same model. A helper with separate credentials must be discoverable as a linked actor, not hidden in a description. Record parent/child relationships and shared services without treating every model inference as a separately approved enterprise asset.

Choose granularity according to differences that affect authority, consequence, ownership, or control. Record why records are split or grouped. Inventory identifiers are references; they are not credentials or authorization grants.

## 2. Minimum inventory specification

The inventory may federate existing service, identity, change, risk, and evidence systems. Define which system owns each field and how disagreements are resolved. Avoid copying secrets or creating an uncontrolled duplicate of every source record.

| Group | Minimum content | Question it supports |
|---|---|---|
| Identification | Stable ID, name, definition/version, deployment/instance mapping, environment | Which governed actor is this? |
| Purpose | Business use, intended benefit, prohibited uses, sponsor | Why does it exist? |
| Accountability | Named business, technical, IAM and operational owners; accepted handover; alternates | Who decides and maintains it? |
| Consequence | Risk classification, rationale, affected people/services/data, cumulative scale | What can go wrong and who is affected? |
| Dependencies | Model/provider/version, orchestrator, tools, targets, child agents, shared services | What can change its behavior or authority? |
| Authority | Direct/delegated permissions, grant references, action/target/environment limits | What may it do? |
| Human decisions | Autonomy by action, approval roles, prohibited actions, escalation | When must a human decide? |
| Evidence | Policy/approval versions, test results, monitoring and transaction evidence links | What supports the current permission to operate? |
| Response | Suspension authority, enforcement paths, fallback and restoration references | How can further effects be limited? |
| Lifecycle | Actual state, authorized state, gate decisions, conditions, review/expiry dates | Is current operation still permitted? |
| Change | Approved baseline, change history, pending changes and exceptions | What differs from the last accepted design? |
| Records/exit | Retention/access owners, supplier exit dependencies, retirement proof | What remains when operation ends? |
| Record quality | Field source, last verified time, verifier, missing/conflicting fields | How reliable is this entry? |

An owner marked “IT” or “vendor” is insufficient without an accountable role, a named holder, and accepted responsibilities. Keep sensitive references access-controlled; the registry itself may reveal valuable security relationships.

## 3. Separate accountability from participation

| Role | Core responsibility | Does not automatically confer |
|---|---|---|
| Executive sponsor | Business priority and resources | Technical or legal approval |
| Business owner | Intended use, benefit, impact and continued need | Authority to waive mandatory controls |
| Technical owner | Design/configuration and technical dependencies | Business risk acceptance |
| IAM owner | Identity, grants, delegation and access lifecycle | Approval of every business transaction |
| Operational owner | Coverage, monitoring, response and service readiness | Model engineering or safety authority |
| Qualified control owners | Decisions in security, privacy, records, safety, legal or other assigned domains | Universal approval beyond their remit |
| Program lead | Integrated plan, dependencies, decision evidence, conditions and escalation | Specialist authority through meeting facilitation |

Separate incompatible duties. Assign a decision owner for each gate and identify required concurrence. If authorities disagree, document the disagreement and escalate to the designated authority; do not average opinions or mark the review complete. Risk acceptance must come from an authorized role and cannot override a prohibition outside that role's power.

## 4. Lifecycle gates

A gate records a decision about a defined scope, supported by evidence. A document upload or calendar meeting is not the decision. The sequence is iterative; material changes can reopen earlier gates.

| Gate | Decision owner or lead authority | Required evidence and decision | Expiry/reopening trigger |
|---|---|---|---|
| Propose | Business owner/sponsor | Purpose, benefit hypothesis, alternatives and accountable owner; accept exploration or reject | Purpose or ownership changes |
| Classify | Designated risk authority with business/control owners | Consequence, data, environment, autonomy and scale; required review path | New impact, population, data or authority |
| Design | Architecture authority with technical/IAM/operations owners | Identity and dependency maps, bounded permissions, human/evidence/response design | Material design or dependency change |
| Threat-model | Security lead with relevant specialists | Misuse/failure scenarios, trust boundaries and mitigations | New trust path, tool, threat or data exposure |
| Test | Qualified test/control acceptance owners | Positive/negative tests, failure behavior, unresolved defects and scope of proof | Baseline changes or evidence becomes stale |
| Authorize | Designated operating/risk authority with required concurrence | Exact scope, conditions, residual uncertainty, expiry and stop rules | Expiry, breached condition or material change |
| Activate | Operational release authority | Deployed baseline matches authorization; coverage, access and fallback ready | Deployment mismatch or readiness failure |
| Monitor | Operational/control owners | Outcomes, drift, evidence health, incidents and continued benefit | Threshold breach, missing evidence or changed need |
| Change | Change authority and affected gate owners | Difference from approved baseline, impact assessment, test and reauthorization decision | Scope exceeds approved change envelope |
| Suspend/recover | Emergency/restoration authorities | Containment, reconciled state and restoration proof from Module 8 | New adverse evidence or restoration condition failure |
| Retire | Business/service owner with IAM, operations, records and supplier owners | Removed authority, resolved work, continuity and retained/disposed records | Residual execution or access found |

Use approve, approve with explicit conditions, hold, or reject. A condition must name its owner, required evidence, deadline, and effect on permission to operate. Distinguish conditions that must be closed before activation from monitored obligations allowed during operation.

## 5. Decision record and state control

Every gate decision needs the governed deployment ID, baseline version, decision, deciding authority, required concurrence, evidence references, unresolved uncertainty, conditions, permitted scope, expiry/review trigger, and time. Keep history rather than replacing yesterday's approval with today's status.

Distinguish authorized state from observed state. “Production — approved” in a registry can conflict with expired authorization or a changed tool grant. Reconcile both and assign the discrepancy to an owner. Pending approval is not active permission. Project closure is not operational acceptance.

Where practical, qualified engineering owners bind deployment/access controls to approved state. A spreadsheet alone cannot enforce suspension or expiry. Test the actual enforcement and record manual dependencies where automation is absent.

## 6. Material change is broader than code change

| Change | Governance question |
|---|---|
| Read-only tool gains write capability | Has the action class, consequence, approval or stop design changed? |
| UAT moves to production | Does evidence cover the new environment and operational impact? |
| Model/provider version changes | Which behavior tests, data handling or dependencies need reassessment? |
| New memory source or reusable instruction | Has trust, provenance, persistence or authority interpretation changed? |
| Helper receives a separate identity | Are delegation, attribution and containment still complete? |
| Volume or concurrency grows | Do cumulative consequence, human coverage and fallback remain adequate? |
| New data class or recipients | Which privacy, security and business boundaries change? |
| Owner departs or supplier agreement ends | Who can sustain controls and exercise response authority? |

Not every small edit requires every gate. Define a preapproved change envelope with objective limits and proof requirements. A change outside it must be assessed by the affected authorities before activation. “No code changed” and “same product name” do not establish immateriality. An emergency change uses a separately authorized process with evidence, expiry and retrospective review; urgency does not silently erase constraints.

## 7. Architecture-review leadership

The program lead should organize a review around decisions:

1. Establish the business proposition and exact deployment under review.
2. Trace identities, delegation, tools, data, targets and trust boundaries.
3. Confirm consequence, autonomy and prohibited actions.
4. Challenge approval timing, evidence sufficiency and failure behavior.
5. Examine suspension, fallback, restoration and supplier dependencies.
6. Identify differences from the approved baseline and missing proof.
7. Obtain decisions from the appropriate authorities; record holds and conditions.
8. Assign closure owners and verify evidence before release.

Reuse existing enterprise review evidence when it applies. A prior approval for a different environment, action or version may be relevant background, but it is not transferable authorization without an explicit decision. The aim is a coherent decision record, not another disconnected set of templates.

## 8. Maintain inventory through reconciliation

Compare the registry against authorized deployment records, identity/grant inventories, tool catalogs, observed activity, procurement/provider records and change history. Each source has blind spots. An agent found in telemetry but absent from inventory is a discrepancy to investigate, not proof that every unknown agent is malicious.

Track unmatched deployments, ownerless records, expired approvals, unresolved conditions, unknown dependencies and unverified retirement actions. Define source populations and exclusions before reporting coverage. If the observed population is incomplete, do not claim 100% inventory completeness.

Assign cadence based on risk and change rate, plus event-driven review triggers. Owner attestations support accountability but do not replace evidence of actual configuration and use. Restrict registry edits, retain change history, and reconcile conflicts through a designated record steward.

## 9. Program governance and handover

Integrate lifecycle evidence into delivery planning: dependencies, accountable decisions, acceptance conditions, staffing and operating cost must have owners. Release planning should identify which unclosed conditions prevent activation. Funding approval does not authorize access, and a technical release does not demonstrate benefits.

Before project closeout, require accepted ownership, funded or otherwise committed operational capacity, monitoring and response coverage, maintained procedures, open-condition disposition and supplier support. If the handover is incomplete, retain a visible hold or constrained state rather than relabeling it “business as usual.”

An executive review should answer: which agents have valid authority, which have material unresolved conditions, what changed, who must decide, and what proof is due next? Count decisions resolved and risk-relevant gaps closed; meeting volume and document counts alone do not demonstrate control effectiveness.

## 10. Retirement and exit

Stop new work, reconcile queued and in-flight activity, remove direct and delegated authority, address child/provider dependencies, and verify target/service continuity. Coordinate shared identities carefully so retirement does not disable unrelated services.

Resolve retained memory, data copies, provider retention and records holds through qualified owners. Preserve decision and evidence history for approved periods. Do not delete the inventory record merely because the process was removed: retain a retired status with proof and residual obligations. Business owner confirmation, IAM verification, operations acceptance and records/supplier disposition together support closure.

## 11. Applied case — ORION's proposed expansion

All facts are fictional. This is a separate planning exercise using the ORION setting; it does not claim that Module 8's incident was resolved.

An inventory row says “ORION — UAT maintenance assistant — owner: IT — approved.” The documented authorization covers named UAT health reads. A proposal seeks production restarts using a new write tool and a helper with separate credentials. The inventory has no deployment-specific record, approval expiry, evidence links or helper relationship. The model provider schedules an automatic version update. The project sponsor wants closeout this week; the intended operational owner has not accepted the handover. A vendor says its platform is secure, but supplies no evidence about this enterprise's proposed authority envelope.

No production activation or unauthorized execution is established. Your task is to specify the missing inventory and decisions, determine what may proceed, and identify what would be required for later retirement.

## 12. Exercise and completion

Complete the [participant workbook](./exercises/17_Module_09_Participant_Workbook.md), then use the [model answer and review guide](./exercises/18_Module_09_Model_Answer_and_Review_Guide.md).

A strong response separates current authorized UAT scope from proposed production scope, assigns real owners, identifies material changes, and places explicit holds on unsupported activation and handover. It does not invent proof from a vendor assurance or sponsor request.

Completion requires an original agent inventory entry, lifecycle gate matrix, material-change assessment, architecture-review decision record, and written or oral defense. Connect the work to the [privileged-access lifecycle](./02_AI_Agent_Privileged_Access_Lifecycle.md). Update learning progress only when an original artifact and defense exist. Portfolio promotion requires separate review.

## 13. Interview translation

> I can lead the program that gives each agent deployment an accountable owner, a bounded authorization, evidence-based lifecycle decisions, and a controlled path for change and retirement. I coordinate qualified architecture, IAM, security, operations and other control owners while preserving their decision authority.

## 14. Primary-source map

Publisher material checked 2026-09-18. The schema and gates are educational synthesis, not exact implementations prescribed by these sources.

| Source | Status and focused reading | Use boundary |
|---|---|---|
| [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf), SRC-025 | Published framework, January 2023; GOVERN 1.5–1.7 and GOVERN 2 | Inventory, periodic review, decommissioning and accountability; voluntary framework |
| [NIST CSF 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf), SRC-029 | Published February 2024; GV.RR, GV.OV, ID.AM, ID.RA-07, GV.SC | Cybersecurity governance, assets, change and suppliers; outcome framework, not an agent schema |
| [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final), SRC-017 | Final; publisher notes Release 5.2.0; CM-3, CM-8 and AC-2 as focused control vocabulary | Change control, component inventory and account management; applicability and implementation require qualified tailoring |

Verify versions and applicability before production use. No compliance, legal, audit or safety determination follows from completing the exercise.
