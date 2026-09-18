# Module 7 Participant Workbook — Evidence, Provenance, and Monitoring

**Status:** Accepted for public learning use upon merge

**Version:** 1.0

**Case:** Fictional ORION maintenance agent

**Recommended effort:** 60–90 minutes

Read the [lesson](../10_Module_07_Evidence_Provenance_and_Monitoring.md) and complete this workbook before reading the model answer. Use only fictional or sanitized information.

## Scenario

Approval A-2048 authorizes one restart of APP-PROD-17 from 14:00 through 14:10 UTC. The approval service records an independent approver and policy P-12. ORION reports transaction T-771 successful at 14:03. Tool job J-81 was accepted at 14:02 but retains no target completion ID. After a timeout, J-82 was submitted at 14:04 with no approval reference. The target records a restart at 14:02:30 under a shared service identity, without transaction/job mapping. The runbook URL is mutable and no version was retained. The target collector was delayed from 14:01 through 14:08. The dashboard counts both jobs as successful because they were accepted.

## Part 1 — Claims and limits

For each statement, distinguish observation, supported inference, and unsupported conclusion.

| Statement | Classification | Supporting record | What remains unknown? |
|---|---|---|---|
| A-2048 approved one restart |  |  |  |
| J-81 completed successfully |  |  |  |
| J-82 caused a second restart |  |  |  |
| ORION used the approved runbook version |  |  |  |
| No unauthorized action occurred |  |  |  |
| The target recorded a restart |  |  |  |

What can you report to leadership now without overstating certainty?

> Your answer:

## Part 2 — Reconstruct the chain

| Event | Event time and uncertainty | Collection time | Transaction/parent/attempt ID | Identity | Authority reference | Target outcome reference | Missing link |
|---|---|---|---|---|---|---|---|
| Approval |  |  |  |  |  |  |  |
| J-81 acceptance |  |  |  |  |  |  |  |
| Target restart |  |  |  |  |  |  |  |
| ORION success claim |  |  |  |  |  |  |  |
| J-82 retry |  |  |  |  |  |  |  |

Do not invent timestamps or identifiers. Mark unknown fields explicitly. Explain how delayed collection and shared identities affect your reconstruction.

> Your answer:

## Part 3 — Specify the evidence record

Define fields, responsible producers, joining rules, and required behavior when missing. Include both successful and denied/failed attempts.

| Group | Fields/reference and purpose | Authoritative producer/control owner | Join rule | Required before action or after action? | Missing-evidence behavior |
|---|---|---|---|---|---|
| Business request and owner |  |  |  |  |  |
| Principal, agent, workload, tool, target |  |  |  |  |  |
| Policy and delegated authority |  |  |  |  |  |
| Approval and conditions |  |  |  |  |  |
| Input provenance |  |  |  |  |  |
| Attempts, queues, retries |  |  |  |  |  |
| Target result and verification |  |  |  |  |  |
| Intervention and custody |  |  |  |  |  |
| Evidence quality |  |  |  |  |  |

Which records must be independent of the agent's own account of its behavior?

> Your answer:

## Part 4 — Provenance and information limits

| Item | Retain directly, retain protected reference, or exclude? | Rationale | Version/integrity approach | Access/records decision owner |
|---|---|---|---|---|
| Raw access token |  |  |  |  |
| Approval information shown |  |  |  |  |
| Runbook content used |  |  |  |  |
| Full prompt with personal data |  |  |  |  |
| Model-generated explanation |  |  |  |  |
| Target completion record |  |  |  |  |

Explain why a hash is insufficient when the referenced source has disappeared. Identify who determines retention periods, holds, disposal, and cross-border constraints; do not invent a legal retention requirement.

> Your answer:

## Part 5 — Monitoring and decisions

Include at least two leading/control-health indicators and two incident/outcome indicators. A single signal may serve different purposes; explain your classification.

| Signal/type | Definition, denominator, window | Source and completeness limits | Threshold/rationale | Owner and coverage | Deadline/alternate | Response and closure evidence |
|---|---|---|---|---|---|---|
| Approval mismatch |  |  |  |  |  |  |
| Unknown target outcome |  |  |  |  |  |  |
| Collector delay |  |  |  |  |  |  |
| Unacknowledged alert |  |  |  |  |  |  |
| Broken provenance |  |  |  |  |  |  |
| Learner-selected indicator |  |  |  |  |  |  |

Why does “100% of logged jobs succeeded” fail as an evidence-completeness measure?

> Your answer:

## Part 6 — Failure and validation

| Test | Expected behavior | Evidence of actual behavior | Responsible acceptance authority |
|---|---|---|---|
| Collector stops |  |  |  |
| Target response lost after a write |  |  |  |
| Retry arrives without approval |  |  |  |
| Source URL changes |  |  |  |
| Agent attempts to delete its evidence |  |  |  |
| Critical alert outside staffed hours |  |  |  |

What may safely continue, what must pause, and who authorizes that distinction?

> Your answer:

## Part 7 — Recommendation

Choose continue unchanged, constrain, suspend agent production writes, or defer expansion. Defend your choice using the case facts.

- Decision and scope:
- Three acceptance conditions, each with owner and proof:
- Immediate reconciliation action:
- Highest residual risk:
- Missing fact most likely to change your decision:
- Conclusions reserved to qualified authorities:

## Part 8 — Defense and completion

Prepare a five-minute defense:

1. Which success claim is unsupported?
2. Why does a correlation ID not prove authority?
3. What would establish whether the retry changed the target?
4. What should happen before any further retry?
5. What must be retained without logging secrets?
6. How would you discover a missing population of events?
7. Who responds when monitoring itself fails?
8. Why does provenance not prove truth or deterministic replay?

Record artifact location, reviewer/date, defense completion, feedback incorporated, and remaining uncertainty. Do not mark learning demonstrated merely because this workbook or its model answer has been published.
