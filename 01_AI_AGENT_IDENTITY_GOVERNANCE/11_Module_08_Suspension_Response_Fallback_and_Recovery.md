# Module 8 — Suspension, Response, Fallback, and Recovery

**Status:** Accepted for public learning use upon reviewed merge

**Version:** 1.0

**Guide coverage:** Days 14–15

**Estimated study time:** 60–90 minutes plus tabletop

## Purpose

A stopped conversation is not necessarily a stopped transaction. Tools may have accepted work, child agents may retain authority, and queued jobs may continue under identities separate from the initiating agent. A business service can also remain at risk after the agent is contained.

This module develops the program-level judgment needed to establish emergency authority, interrupt consequential activity, preserve evidence, maintain a safe operating alternative, and authorize bounded restoration. It extends [Module 7](./10_Module_07_Evidence_Provenance_and_Monitoring.md), which distinguished requested actions from verified outcomes.

The operating model, case, and decision gates below are original educational synthesis. They are not executable response instructions, a production architecture, or a sector-specific compliance determination.

## Learning objectives

A learner should be able to:

- Distinguish suspension, containment, credential revocation, fallback, recovery, and restoration of agent authority.
- Assign emergency decision rights and qualified execution responsibilities.
- Identify work that survives an agent stop, including tokens, sessions, queues, retries, child agents, and target jobs.
- Require evidence of containment rather than relying on a successful stop request.
- Balance evidence preservation with urgent harm reduction.
- Specify viable manual or alternate operation with clear limits and owners.
- Define restoration gates, independent review, observation, rollback, and retirement criteria.
- Lead and defend an unexpected-privileged-action tabletop without claiming incident-response engineering or safety authority.

## 1. Different decisions, different proof

| Term | Meaning here | Evidence needed |
|---|---|---|
| Suspension | Temporary withdrawal of some or all agent operating authority | Scope, decision owner, enforcement points, effective time |
| Containment | Limiting further adverse effects across affected systems and work | Observed restrictions, residual paths, downstream status |
| Revocation | Invalidation/removal of credentials, grants, sessions, or entitlements through their respective mechanisms | Issuer/resource observations and scope of effect |
| Fallback | Approved alternate way to meet a minimum business need | Staff, access, procedures, capacity, limits and oversight |
| Recovery | Re-establishing acceptable service and data state | Validated state, dependencies, business acceptance |
| Restoration | Deliberate return of bounded agent authority | Corrected controls, tested restrictions, named approval |
| Retirement | Ending the agent's permitted use | Removed access, resolved residual work and records disposition |

Business service recovery does not require restoring the same agent. Restoring an agent process does not establish service recovery.

## 2. Prepare the authority before the emergency

Define who may suspend, who executes each control, who accepts continuity risk, and who authorizes return. A program lead coordinates these responsibilities; the role does not automatically confer administrator, incident commander, or safety authority.

| Decision | Accountable role in an illustrative operating model | Boundary |
|---|---|---|
| Declare incident and coordinate response | Designated incident commander | Uses established incident criteria and escalation |
| Suspend agent authority | Preauthorized duty operations/security authority | May act promptly within documented scope; record rationale |
| Disable grants or sessions | IAM/security owner through qualified operators | Assess shared dependencies and actual downstream effect |
| Hold or cancel target work | Tool/target operations owner | Determines safe cancellation or controlled completion |
| Select manual fallback | Service owner and operations lead | Confirms capacity, competence and authorized access |
| Decide OT safe state | Qualified OT operations/safety authority | Agent and program lead do not determine physical safety |
| Approve agent restoration | Designated restoration authority with relevant control-owner concurrence | Independence from the failed action where required |
| External notifications | Assigned communications/legal/regulatory owners | Applicable duties and deadlines require qualified determination |

Name alternates and coverage. A missing approver must not create implied permission to continue. Emergency authority should have limits, expiry, evidence requirements, and post-use review. The affected agent must not approve its own expanded authority or restoration.

## 3. Identify the full interruption boundary

Map the business request through agent, child agents, orchestration, tools, credentials, queues, target operations, and durable state. Include external providers and callbacks. Identify which controls remain available if the usual orchestration or identity service fails.

| Layer | Question to challenge | Proof to seek |
|---|---|---|
| Agent entry point | Can new requests or new plans still start? | Rejected new work and disabled triggers |
| Orchestrator | Are automatic retries, schedules, and child creation stopped? | Scheduler state and attempted dispatch results |
| Identity/grants | Can new authority be issued? What previously issued authority remains usable? | Grant inventory and validation observations |
| Tool/gateway | Can already-authorized calls still reach targets? | Enforced restrictions and denied-call records |
| Queues | Are pending jobs held, cancelled, or still deliverable? | Per-job state and consumer confirmation |
| In-flight operations | Has cancellation arrived before the irreversible step? | Target-owner assessment and observed outcome |
| Child agents/providers | Do they have separate sessions, credentials or queues? | Their acknowledgements plus downstream evidence |
| Target/service | What state changes occurred after the stop request? | Target records and independent state checks |
| Memory/context | Could unsafe retained instructions reactivate after restart? | Quarantine/version review and approved replacement |

A request acknowledgement is not evidence that the requested effect has occurred everywhere. Track each path as verified contained, still active, or unknown. Do not summarize an unknown path as “all stopped.”

## 4. Credential revocation has specific limits

Disabling an account, revoking a token, rotating a secret, terminating a session, and cancelling a job are distinct actions. Determine which authority each downstream actor actually uses. Removing the parent's authority does not establish that a delegated child's separate grant is gone.

[RFC 7009](https://datatracker.ietf.org/doc/html/rfc7009), Sections 2.1–2.2 and 3, describes OAuth token revocation. Related-token effects depend on server policy and support; propagation delay can occur. Its HTTP 200 response can also mean the submitted token was already invalid. That response does not prove all target work is contained. Engineering owners must verify the deployed design rather than assume a universal cascade.

Short token lifetime may limit exposure, but waiting for expiry is not a complete response when consequential work can still occur. Ask qualified IAM and target owners to demonstrate the effective boundary, remaining exposure window, alternative restrictions, and dependent-service effects. Do not put secrets or raw tokens in the tabletop evidence.

## 5. Queued, in-flight, and completed work need different treatment

| Work state | Governing decision |
|---|---|
| Proposed but not submitted | Prevent dispatch and invalidate obsolete approvals |
| Queued | Hold/cancel through the owning system; verify consumers cannot execute stale work |
| In flight, outcome unknown | Establish target state; qualified owner selects safe interruption or completion |
| Completed, reversible | Assess and authorize rollback; verify resulting state |
| Completed, not reversible | Contain further effect; evaluate authorized compensation and business response |
| Retried or duplicate | Reconcile each attempt; prevent further duplicate execution |

Cancellation can race with execution. Rollback is itself consequential work and may require a new approval. A compensating action does not erase the original event or necessarily restore the original state. During restoration, do not automatically release stale queues, callbacks, approvals, or retry schedules.

## 6. Response sequence with parallel responsibilities

The following is a decision sequence, not a requirement to delay urgent containment until all records are collected:

1. Recognize the trigger and establish accountable coordination.
2. Apply preauthorized restrictions proportionate to consequence and safe operation.
3. Trace residual authority and downstream work; verify actual effects.
4. Preserve available evidence while limiting harm.
5. Establish and test an approved fallback.
6. Reconcile target/service state and correct the relevant failure.
7. Test controls and decide whether bounded agent restoration is justified.
8. Observe, close residual actions, and update the operating design.

Record decision time, execution time, verification time, owner, uncertainty and next check. If safety or continuing harm requires immediate action, preserve what is feasible and document any evidence loss. Do not make perfect capture a prerequisite to preventing serious harm.

## 7. Preserve evidence and communicate uncertainty

Use Module 7's transaction/attempt records, authority and approval snapshots, target outcomes and custody controls. Preserve original records, queue dispositions, relevant context versions, and response decisions. Restrict access and use approved retention/hold processes. Quarantine suspect memory or artifacts; do not erase them merely to obtain a clean restart.

An executive status should state the affected scope, known effects, restrictions verified, paths still unknown, operating alternative, responsible owners, and next decision time. Do not label the event fully contained based only on a green dashboard or silence in delayed telemetry. Notification obligations are determined through the organization's qualified processes; this lesson provides no universal reporting deadline.

## 8. A fallback must be workable

“Do it manually” is a proposal until staffing, skill, capacity, access, separation of duties, current procedures, and evidence capture are established. Identify the minimum essential service, backlog tolerances, duration limit, and conditions for reducing service further.

A fallback must not silently become shared credentials, uncontrolled administrator access, or transfer of the same unsafe instructions to another agent. Time-bound emergency access requires explicit authority and review. Validate that the alternate process can operate while the affected agent's access stays restricted.

In environments with physical consequences, abrupt shutdown can itself be hazardous. [NIST SP 800-82 Rev. 3](https://csrc.nist.gov/pubs/sp/800/82/r3/final) emphasizes OT performance, reliability, and safety considerations. Qualified operations and safety owners choose the safe state; a generic agent kill switch is not a substitute for that judgment.

## 9. Restoration is a new decision

| Gate | Required evidence |
|---|---|
| Scope understood | Affected identities, tools, targets, jobs and dependencies reconciled; remaining unknowns explicit |
| Cause/control failure addressed | Verified correction or defensible restriction addressing the failure; hypotheses labeled |
| State validated | Target/service and data state accepted by qualified owners |
| Residual work controlled | Queues, retries, callbacks, delegated grants and approvals individually disposed of or reauthorized |
| Configuration trusted | Approved agent/tool/policy/context versions; suspect memory quarantined or corrected |
| Controls demonstrated | Tests show scope enforcement, effective interruption, evidence continuity and alternate coverage |
| Fallback available | Tested alternative remains staffed and accessible |
| Authority recorded | Named approver, scope, duration, conditions, residual-risk acceptance and expiry |
| Observation planned | Signals, review window, response owner and re-suspension triggers set |

Root cause may remain partly uncertain. Broad restoration is not justified by an untested theory; a narrowly constrained pilot may be considered only if qualified owners can bound the remaining risk and prove the restrictions. Business pressure and an available operator are not sufficient evidence.

Possible outcomes include continued suspension, manual service operation, read-only operation, a limited UAT trial, a bounded production pilot, or retirement. The original approval does not automatically revive after suspension.

## 10. Test interruption and recovery before expanding authority

Test in a controlled environment with authorized scope and safe data. Include failed revocation, independent child credentials, delayed telemetry, cancellation races, orphan queues, unavailable approvers, stale memory, duplicate jobs, and fallback overload.

Measure detection-to-decision, decision-to-enforcement, enforcement-to-verification, unresolved work count, fallback capacity, and restoration defects separately. Choose targets based on consequence and system capability. No universal number of seconds, maximum outage, or observation period is prescribed here.

A tabletop tests judgment and readiness assumptions; it does not prove live controls work. Preserve untested technical claims as follow-up actions with owners and required evidence.

## 11. Applied case — ORION after the stop request

This is a fictional continuation of Module 7, with new facts supplied only for this exercise. The earlier ambiguity is not silently resolved.

At 14:06 the duty operations lead suspends ORION production writes after the unresolved J-82 retry. At 14:07 the parent agent process reports stopped. The identity team reports the parent account disabled; the status of issued access tokens is not established. A delegated helper uses a separate workload identity. Its scheduler shows J-82 queued, but consumer confirmation is unavailable. The target operator reports an administrative operation in flight without a reliable job mapping. The target evidence feed is delayed.

A known-good manual runbook exists, but only one qualified operator is immediately available and independent approval coverage has not been confirmed. A manager requests restart of ORION to clear the backlog. Protected OT remains outside the pilot's permitted authority; no OT change is confirmed. A provider holding a child job has not acknowledged the hold request.

The challenge is to contain and verify remaining work, protect service continuity, and decide what may resume. Do not assume a second restart, token invalidation, provider containment, or safe manual capacity without evidence.

## 12. Exercise, review observations, and completion

Complete the [participant tabletop workbook](./exercises/15_Module_08_Participant_Workbook.md), then consult the [model answer and review guide](./exercises/16_Module_08_Model_Answer_and_Review_Guide.md).

A strong response assigns real stop authority, distinguishes each downstream path, names safe fallback conditions, preserves uncertainty, and refuses unsupported restoration. It handles safety and continuity tradeoffs explicitly rather than treating every stop mechanism as equivalent.

Completion requires an original suspension/fallback runbook, tabletop decision log, residual-work register, restoration recommendation, and oral or written defense. Publication does not establish demonstrated learning. A reviewed learner artifact may later become a portfolio candidate; the supplied answer guide is not the learner's work.

## 13. Interview translation

> I can lead the program work that assigns emergency authority, maps what must stop across an agent chain, requires proof of containment, establishes viable fallback, and governs restoration. I coordinate qualified IAM, security, engineering, operations, safety and business owners without claiming to perform their specialist roles.

## 14. Primary-source map

Publisher pages checked 2026-09-18. These sources inform the lesson; the runbook model and case are educational synthesis.

| Source | Status and focused reading | Use boundary |
|---|---|---|
| [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final), SRC-027 | Final, April 2025; supersedes Rev. 2; incident response and recovery recommendations | Integrates response with cybersecurity risk management; not an agent-specific runbook |
| [RFC 7009](https://datatracker.ietf.org/doc/html/rfc7009), SRC-028 | Standards Track RFC / Proposed Standard, August 2013; Sections 2.1–2.2 and 3 | Token revocation behavior and limitations; not universal session/job cancellation |
| [NIST SP 800-82 Rev. 3](https://csrc.nist.gov/pubs/sp/800/82/r3/final), SRC-019 | Final, September 2023; publisher notes potential updates, not official changes | OT context and safety/reliability constraints; qualified local interpretation required |

Verify applicable versions, deployment behavior and organizational requirements before production use. No claim of legal, safety or regulatory sufficiency follows from this educational package.
