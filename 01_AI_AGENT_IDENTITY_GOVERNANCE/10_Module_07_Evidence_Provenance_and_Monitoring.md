# Module 7 — Evidence, Provenance, and Monitoring

**Status:** Accepted for public learning use upon merge

**Version:** 1.0

**Guide coverage:** Days 12–13

**Estimated study time:** 60–90 minutes plus exercise

## Purpose

An agent reports that a restart succeeded. The tool reports that a request was accepted. The target has no corresponding completion record. These statements describe different events. None alone proves that the authorized business outcome occurred.

This module develops the program-level ability to specify evidence that connects a request, acting identities, delegated authority, policy, human decision, execution, and independently observed outcome. It also defines what an organization should do when that connection is incomplete.

The evidence-record design and ORION thresholds below are original educational examples. They are not a schema prescribed by NIST or W3C, a compliance determination, or a production implementation.

## Learning objectives

A learner should be able to:

- Separate telemetry, evidence, provenance, and an interpretation of events.
- Specify transaction, event, parent, attempt, and target identifiers across an agent chain.
- Link execution to the identities, policy versions, and approval conditions applicable at the time.
- Distinguish submitted, accepted, executed, verified, denied, failed, and unknown outcomes.
- Preserve source versions and uncertainty without indiscriminately copying sensitive content.
- Challenge incomplete collection, mutable records, clock ambiguity, and misleading success rates.
- Assign monitoring signals to response owners, deadlines, escalation, and operating restrictions.
- Defend a bounded recommendation while leaving professional conclusions with qualified authorities.

## 1. Four different concepts

| Concept | Meaning in this module | Limitation |
|---|---|---|
| Telemetry | Observations emitted by systems, such as events and metrics | Collection alone does not establish completeness or reliability |
| Evidence | Records used to support or challenge a specific claim | Relevance, origin, integrity, and missing information must be assessed |
| Provenance | Where an item came from, its version, and its transformations | A traceable source can still be wrong or malicious |
| Interpretation | A conclusion drawn from records | Keep inference separate from observed facts |

Ask which claim each record supports. A credential issuance event supports a claim that a grant was issued. It does not prove the grant was used, that the action was authorized by the business, or that the intended outcome occurred.

## 2. Reconstruct the transaction boundary

Begin with the business request and end with a verified outcome or an explicit unresolved state. Include child agents, tools, queues, retries, callbacks, and target effects. A conversation identifier alone cannot distinguish two consequential actions in the same conversation.

Specify a business transaction ID; a unique event ID; parent/child links; each execution attempt; and the target's own operation identifier. Maintain the mapping when a supplier cannot propagate your identifiers. Record both event time and collection time, timezone, and known clock uncertainty. Do not infer causal order from nearly equal timestamps alone.

[W3C Trace Context](https://www.w3.org/TR/2021/REC-trace-context-1-20211123/) defines propagation of distributed tracing context. A trace identifier is a correlation aid, not proof of authenticated identity or delegated authority. Its privacy and security considerations also matter when context crosses trust boundaries. Engineering owners select and validate the mechanism.

## 3. Evidence-record specification

The following is a logical specification, not a requirement to put all information in one database or log entry. References must resolve for authorized reviewers throughout the required retention period.

| Evidence group | Minimum question answered | Example fields or linked records |
|---|---|---|
| Purpose | What was requested and why? | Transaction ID, request reference, business purpose, accountable owner |
| Actors | Who or what acted? | Principal, agent instance/version, workload/client identity, tool version, target identity |
| Authority | What bounded the action? | Delegation reference, action/resource/environment scope, grant metadata, expiry, policy version and decision |
| Human decision | What did an authorized person approve? | Decision ID, approver/authority basis, information shown/version, exact action/target, conditions, time/expiry |
| Inputs | What information informed the proposal? | Source IDs, retained versions, retrieval times, trust labels, memory version, transformations |
| Execution | What was attempted? | Event/parent IDs, attempt number, sanitized parameters, queue/job ID, target request ID, timestamps |
| Result | What actually happened? | Submission status, target outcome, independent observation, observation time, unresolved effects |
| Intervention | What changed the course of execution? | Denial, cancellation, escalation, incident and restoration references |
| Custody | Can reviewers rely on and retrieve the records? | Producer, collector, integrity checks, access history, retention class, disposal/hold state |
| Quality | What cannot be established? | Missing fields, collection gaps, clock uncertainty, reconciliation status, responsible owner |

Record usable token metadata or a protected grant reference, not a bearer token or secret. Where a field is not applicable, record why. An empty field must not silently mean “approved.”

## 4. Approval and policy must match execution

Join the transaction to the actual policy decision and approval snapshot. The current policy is not necessarily the policy used at execution time. A later policy change cannot retroactively authorize an earlier action.

Check action, target, environment, parameters, time window, and applicable conditions. If a retry is a separate consequential act, determine whether the original approval covers it. Approval of one restart is not automatically approval of repeated restarts. Keep denied and expired decisions available for reconciliation.

## 5. Context provenance without unlimited capture

Record the source, version, retrieval time, trust classification, and transformations needed to assess material inputs. A current URL does not preserve the text used yesterday. A hash can help compare bytes against a trusted reference; it neither preserves unavailable content nor proves that the source was truthful.

Use approved, access-controlled snapshots or durable version references when justified. Record redaction and transformation steps. Preserve the distinction between a retrieved instruction, an agent's interpretation, and an authorized policy decision. Untrusted material does not gain authority by being logged.

Do not require hidden model reasoning as audit proof. Observable inputs, decisions, tool calls, approvals, and outcomes are the primary records. A model-generated explanation is a claim to assess, not a faithful causal transcript or independent evidence.

## 6. Outcome vocabulary prevents false success

| State | Defensible meaning |
|---|---|
| Submitted | A request left the initiating component |
| Accepted | A receiving component acknowledged the request |
| Executed | The target reports performing the operation |
| Verified | A defined observation supports the required postcondition |
| Denied / failed | A specified control refused the request / a specified operation failed |
| Unknown | Available records cannot establish the outcome |

An HTTP success response may describe acceptance only. A timeout does not establish that nothing happened. Before retrying an uncertain write, reconcile target state and duplicate-execution risk. Distinguish rollback requested from rollback completed and verified.

Evidence reconstruction supports an assessment of what happened. It does not guarantee deterministic replay of a model, recover missing external state, or authorize re-execution against production.

## 7. Evidence integrity and collection health

Separate the agent's operational privileges from administration of its evidence. Define who can write, read, export, correct, retain, and delete records. Corrections should preserve the original and explain the change. Security and records specialists select storage protections, authenticated collection, integrity verification, access controls, and recovery arrangements.

Test missing-event detection, collector failures, dropped records, delayed delivery, and restoration from retained evidence. Tamper resistance does not prove that a producer reported every event. Reconcile tool requests against independent target records where available. Preserve documented custody when exporting incident evidence; do not promise legal admissibility from a technical control alone.

## 8. Privacy and records boundaries

Collect information for a defined purpose. Prefer references and minimized fields over full prompts, documents, credentials, or personal data. Restricted evidence may need separate storage and narrower access than operational dashboards.

Assign records, privacy, legal, and security owners to determine retention, access, holds, jurisdictional restrictions, and disposal. This module prescribes no universal retention period. Record the approved schedule and ensure referenced material remains accessible for its required lifetime. A deletion or hold conflict is a decision for qualified owners, not for the agent to resolve independently.

## 9. Monitoring must lead to a decision

Distinguish indicators of weakening controls from observed incidents. A backlog of unreviewed exceptions may warn of declining coverage. A confirmed unauthorized target change is an incident indicator. One metric cannot establish causation.

Every signal needs a definition, population/denominator, time window, data source, threshold rationale, owner, response deadline, escalation route, and evidence of closure. Segment results by environment, consequence, agent/tool version, and action class. Low alert volume could reflect low risk or failed collection.

Illustrative pilot rules, to be validated by qualified owners:

| Signal | Pilot decision rule | Owner and response |
|---|---|---|
| Approval mismatch on production write | Any occurrence | Operations/control owner blocks further agent writes and escalates immediately |
| Unreconciled target outcome | Any consequential attempt | Operations pauses retries and reconciles before another write |
| Collector delay | Over two minutes for this pilot | Monitoring owner alerts and restricts consequential actions; two minutes is not a general standard |
| Broken provenance reference | Any material decision input | Evidence owner marks reconstruction incomplete and obtains the preserved version |
| Unacknowledged critical alert | No acknowledgement within five minutes | Escalate to named alternate; no assumed human coverage |
| Rising denial/retry rate | Compare a defined window with a validated baseline | Service/control owners investigate; separate attacks, faults, and policy changes |

For evidence completeness, count reconciled consequential attempts against all consequential attempts identified across reconciled request and target populations. If the denominator is unknown, report coverage as unknown. Show missing counts and exclusions alongside percentages.

## 10. Operating with evidence failure

Define the response before deployment. A low-risk read may continue under an approved degraded mode; a privileged write may need to pause. Avoid a universal “stop everything” rule where abrupt interruption could itself create harm. Operations and safety authorities determine safe behavior.

An agent may not treat missing telemetry as permission to expand authority. Separate detection from successful containment. Record whether interruption reached queued and downstream work. Module 8 will develop suspension, continuity, and governed restoration in greater depth.

## 11. Applied case — ORION's apparently successful restart

All names and identifiers are fictional. Production restart authority allows one restart of APP-PROD-17 between 14:00 and 14:10 UTC under approval A-2048.

| Available record | Observation |
|---|---|
| Approval service | A-2048 approves one restart; independent approver and policy P-12 recorded |
| ORION | Transaction T-771 reports “restart succeeded” at 14:03 |
| Tool | J-81 accepted at 14:02; no target completion ID retained |
| Tool retry | J-82 submitted at 14:04 after response timeout; approval reference blank |
| Target | Restart event at 14:02:30 under shared service identity; no T-771 or job mapping |
| Context | A mutable runbook URL; no retained version |
| Collector | Target feed delayed during 14:01–14:08 |
| Dashboard | Both jobs counted as successful because the tool accepted them |

The facts do not establish which job caused the target event, whether a second restart occurred, or which runbook version informed the action. They also do not establish that no unauthorized action occurred. Preserve that uncertainty. Do not manufacture a matching event to complete the story.

## 12. Exercise and review observations

Complete the [participant workbook](./exercises/13_Module_07_Participant_Workbook.md), then use the [model answer and review guide](./exercises/14_Module_07_Model_Answer_and_Review_Guide.md).

A strong response separates observation from inference, identifies the unapproved retry risk, specifies joinable records and responsible producers, limits sensitive capture, and assigns decisions to evidence failures. It does not resolve an unknown result by trusting the dashboard.

## 13. Completion evidence

Completion requires an original transaction evidence specification, case reconstruction, monitoring/response worksheet, privacy and retention decision map, and written or oral defense. Content publication does not demonstrate the learner's competence. Update the Progress Record only after that evidence exists.

A completed and reviewed specification may become a portfolio candidate after confidentiality and positioning review. The supplied model answer is not a learner-created portfolio artifact.

## 14. Interview translation

> I can lead the work that defines what evidence must connect an agent's request, authority, approval, execution, and verified outcome. I can challenge gaps, establish accountable monitoring responses, and require proof before expanding a pilot. Security, engineering, operations, privacy, records, and legal specialists make the decisions reserved to their authority.

This connects to program leadership in acceptance criteria, operational readiness, change control, audit evidence, and exception management. It does not claim logging-platform engineering or audit certification.

## 15. Primary-source map

Publisher pages checked 2026-09-18. These sources inform the concepts; the case, schema, thresholds, and rubric are educational synthesis.

| Source | Status and focused reading | Use and boundary |
|---|---|---|
| [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final), SRC-017 | Final publication; publisher notes Release 5.2.0 (2025). Read AU-2, AU-3, AU-6, AU-8, AU-9, AU-11, AU-12 and SI-4 | Audit content, review, time, protection, retention, generation, and monitoring vocabulary; not an automatic compliance baseline |
| [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf), SRC-025 | Published January 2023; read MEASURE and MANAGE | Risk monitoring and accountable response; voluntary framework, not an agent log schema |
| [NIST AI 600-1](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf), SRC-022 | Published July 2024; read information integrity, data privacy, and content-provenance discussion | Provenance and privacy context; does not make provenance proof of truth |
| [W3C Trace Context Level 1](https://www.w3.org/TR/2021/REC-trace-context-1-20211123/), SRC-026 | Recommendation, 23 November 2021; read overview, privacy, security | Correlation across services; not authentication, authorization, or complete audit evidence |

Check versions and organizational applicability before production use. No draft agent-specific source is necessary for this module's core lesson.
