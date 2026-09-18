# Module 7 Model Answer and Review Guide

**Status:** Accepted for public learning use upon merge

**Version:** 1.0

**Use:** After completing the [participant workbook](./13_Module_07_Participant_Workbook.md)

This is an illustrative strong response, not a universal architecture or a completed learner artifact. Alternative recommendations are acceptable when the evidence, uncertainty, authority, and operating consequences are defended.

## 1. Claims and limits

| Statement | Strong assessment |
|---|---|
| A-2048 approved one restart | Supported by the scenario's approval record; execution still must match its conditions |
| J-81 completed successfully | Unsupported; acceptance lacks a linked target completion and verified postcondition |
| J-82 caused a second restart | Unknown; submission is observed, execution is not established |
| ORION used the approved runbook version | Unknown; the mutable URL cannot establish the version used |
| No unauthorized action occurred | Unsupported; incomplete records cannot establish absence |
| The target recorded a restart | Supported as a target observation, but attribution to either job is unresolved |

An appropriate executive report: “One restart is recorded at the target, but we cannot yet attribute it conclusively to an approved attempt. A retry was submitted without a recorded approval reference. We are reconciling target and tool records before further agent writes. The dashboard's two successes are acceptance counts, not verified outcomes.”

A blank approval reference is evidence of a control/record gap; it does not by itself prove that no approval existed elsewhere. In this case the only established approval covers one restart, so a second act must not be assumed authorized.

## 2. Reconstruction

A-2048 precedes the authorized window, but its exact decision time is not provided. J-81 acceptance is recorded at 14:02. The target records a restart at 14:02:30. ORION claims success at 14:03. J-82 submission occurs at 14:04. These times suggest a possible relationship between J-81 and the target, but missing mappings and unprovided clock accuracy prevent conclusive attribution.

Collection times, parent event IDs, exact workload identity, and the retry's target outcome remain unknown. The collector delay means event time and arrival time must be separated. Do not rewrite missing records or merge the jobs into one event. Seek target operation IDs, scheduler records, grant use, service state, and the shared account's other activity through authorized operations/security staff.

## 3. Example specification

| Group | Example fields and producer | Validation / missing behavior |
|---|---|---|
| Request | T-771, request reference, purpose, accountable service owner; request system | Resolve owner and scope before approval |
| Actors | Principal, ORION instance/config version, workload/client, tool version, APP-PROD-17; identity and platform owners | Preserve mappings across each hop; shared identity alone is inadequate attribution |
| Authority | P-12 decision snapshot, bounded grant reference, expiry, delegated action; policy/identity services | Match action, environment, resource and validity before write |
| Approval | A-2048, independent authority, information shown, one restart, window; approval service | Missing or mismatched authority prevents additional writes |
| Inputs | Runbook version/snapshot, retrieval time, transformations and trust label; governed content source | Unavailable material source marks reconstruction incomplete |
| Execution | Unique event, parent, transaction, attempt, J-81/J-82 and target mapping; orchestrator/tool | Retain each attempt; reject uncovered retries |
| Outcome | Target operation status and separately observed health state; target/monitoring service | Unknown remains unknown until reconciliation; do not retry blindly |
| Intervention/custody | Stop request and observed effect, incident reference, collector and access history; operations/evidence service | Escalate incomplete containment or custody |
| Quality | Missing records, delay, clock uncertainty, reconciliation owner; monitoring/evidence owner | Expose gaps in reports and gate further activity by consequence |

Approvals, policy decisions, target events, and postcondition observations should not rely solely on the agent's narrative. Their producers still require control assessment; “independent” does not mean infallible.

## 4. Provenance, privacy, and records

| Item | Strong handling |
|---|---|
| Raw access token | Exclude from ordinary evidence; use a protected grant reference and necessary nonsecret metadata |
| Approval information shown | Preserve an access-controlled version tied to the decision |
| Runbook content | Retain the justified version or an authorized durable snapshot/reference; preserve origin and transformations |
| Full prompt with personal data | Avoid indiscriminate capture; minimize/redact or restrict a justified copy under approved handling rules |
| Model explanation | Label as the agent's claim; never substitute it for observed execution evidence |
| Target completion | Preserve protected target record and operation mapping, with verification result kept distinct |

A hash cannot recover deleted content or establish truth. Records/privacy/legal owners determine retention, holds, disposal and jurisdictional conditions; security implements protection and access, with operations ensuring records remain retrievable. No retention duration can be derived from this fictional case. Restrict record administration so ORION cannot delete evidence of its actions.

## 5. Monitoring worksheet — example rules

All times below are hypothetical pilot objectives, not standards or legal requirements. Coverage and safe response must be validated before use.

| Signal/type | Definition and window | Rule | Accountable response |
|---|---|---|---|
| Approval mismatch — incident/control exception | Attempts failing authority joins divided by all consequential attempts; continuous reconciliation | Any production mismatch | Operations blocks further agent writes; control owner investigates immediately and records disposition |
| Unknown outcome — outcome exception | Unreconciled attempts, by age, divided by consequential attempts; per transaction | Any consequential unknown | Operations stops retries and reconciles target state before another write |
| Collector delay — leading/control health | Current arrival lag by source; watch continuously | Over two minutes | Monitoring owner alerts operations and invokes the approved restricted mode |
| Unacknowledged critical alert — leading/control health | Open critical alerts and age; continuous | Five minutes | Named duty alternate receives escalation; closure requires action evidence |
| Broken provenance — evidence-quality exception | Unresolvable material references divided by material references tested; before decision and during reconstruction | Any material missing version | Evidence owner obtains preserved source or records inability; control owner restricts affected actions |
| Retry rate — leading/control health | Retry attempts/all attempted writes, by action/version, in an hourly window | Material departure from validated baseline; baseline must be established | Service owner investigates faults or policy misuse; do not invent a numerical baseline |

Request-side and target-side populations must be reconciled. If completeness of either population is unknown, the coverage percentage is unknown. Acceptance is not success; success is not completeness; missing events may be absent from both numerator and denominator. Investigate blind spots and validate collection with controlled tests.

## 6. Failure tests and operating behavior

| Test | Expected behavior and proof | Acceptance authority |
|---|---|---|
| Collector stops | Alert delivered; consequential agent writes restricted under approved safe mode; timestamps and actual gate behavior retained | Operations and monitoring owners |
| Response lost after write | No blind retry; target state reconciled; distinct unknown-to-resolved history | Target/service owner |
| Retry lacks approval | Rejected or held before consequential action; policy decision and target check prove no uncovered execution | Control and tool owners |
| URL changes | Historical version remains retrievable or evidence gap declared; current content cannot silently replace it | Evidence/content owner |
| Agent deletes evidence | Attempt denied and independently recorded; privileged storage administration reviewed | Security/evidence owner |
| Alert outside coverage | Named alternate acknowledges and acts, or restricted mode applies; actual response captured | Operations duty manager |

Operations may permit bounded health reads if their risks and degraded evidence rules are accepted. Production writes remain restricted until controls are demonstrated. Operations/safety authorities determine how to avoid unsafe interruption of in-flight work. Restoration is separately governed; Module 8 develops that process.

## 7. Recommendation

Suspend further agent production writes and defer expansion while qualified operations staff reconcile the target. This does not instruct an abrupt shutdown of the target service. Preserve existing evidence and evaluate whether J-82 remains queued or has executed.

Three acceptance conditions:

1. Identity, tool, and target owners demonstrate joinable per-attempt records, approved scope, and rejection of uncovered retries in a controlled test.
2. Monitoring and operations owners demonstrate collector-failure detection, actual restriction behavior, alternate coverage, and reconciliation of target outcomes.
3. Evidence, privacy, records, and security owners approve minimized capture, durable source versions, protected custody, and retention/disposal rules; a reviewer reconstructs a sample transaction without relying on ORION's success claim.

Highest residual risk: a consequential action may occur while evidence is incomplete or delayed. The fact most likely to change the immediate recommendation is reliable target/queue evidence showing the full effects of both jobs and the effective controls preventing additional execution. Even then, the misleading dashboard and provenance gap require correction before expansion.

## 8. Review rubric

Score each dimension 0 (missing/incorrect), 1 (partial), or 2 (explicit, consistent, and defensible).

| Dimension | What earns 2 |
|---|---|
| Claims | Separates observation, inference, and unknown outcomes |
| Correlation | Transaction, parent, attempt, target mapping, and time uncertainty |
| Authority | Historical policy and exact approval scope matched to execution |
| Outcome | Acceptance, execution, verification and retry ambiguity distinguished |
| Provenance | Source versions, trust, transformations, and unavailable content addressed |
| Integrity | Independent records, controlled custody and collection gaps assessed |
| Privacy/records | Minimization, secret exclusion, retention and qualified owners |
| Monitoring | Definitions, denominator/window, thresholds, coverage, owners and closure |
| Failure tests | Observable proof of degraded-mode and alternate-response behavior |
| Recommendation | Bounded action, gates, residual risk and decision-changing uncertainty |
| Defense | Explains why correlation, provenance and agent explanations have limits |
| Positioning | Program leadership without unsupported engineering or professional claims |

20–24: strong; 15–19: revise identified gaps; 9–14: partial; 0–8: rework. Regardless of score, claims that missing evidence proves no event occurred, that acceptance proves completion, or that raw tokens should be routinely logged require correction before completion.

The reviewer should use the workbook's eight defense questions and ask which observation would falsify the learner's recommendation. Publication and reading do not satisfy this rubric; an original artifact and defense are required.
