# Module 8 Model Answer and Review Guide

**Status:** Accepted review guide

**Version:** 1.0

Use after completing the [participant workbook](./15_Module_08_Participant_Workbook.md). This is an illustrative response, not a universal response plan or evidence of the learner's completion. All operational measures require qualified implementation and authorization.

## 1. Initial assessment and authority

“ORION's parent process reports stopped and its parent account is reported disabled. Issued authority, helper activity, queued and in-flight work, and a provider child job remain incompletely verified, so full containment cannot yet be asserted.”

The duty operations lead has declared suspension in the case. Establish the designated incident commander and coordinate IAM/security, tool/target operations, provider liaison, evidence, and service-continuity owners. Do not assume the program lead has platform access or can make an OT safety decision.

The preauthorized suspension role restricts new agent production work. IAM executes qualified credential/session measures. Tool/target owners determine job disposition. The service owner approves feasible fallback; a designated restoration authority decides any return of agent authority with relevant control-owner concurrence. Name on-call alternates and escalate unavailable authority; absence is not permission.

## 2. Residual paths

| Item | Strong response |
|---|---|
| Parent process/account | Retain stop/disable evidence; verify new work and new grants are actually blocked |
| Issued tokens/sessions | Establish inventory, deployed validation behavior and effective restrictions; do not infer invalidation from account disablement |
| Helper identity | Treat as a separate authority path; IAM and helper owners restrict and verify it independently |
| J-82 queue | Hold/cancel via its owner; reconcile consumer and target records because scheduler state may lag |
| In-flight target work | Target owner assesses actual state and safe cancellation, completion or recovery; preserve unknown attribution |
| Provider child job | Escalate through provider response channel; use authorized local boundary restrictions where feasible; keep provider state unknown until evidence exists |
| Retries/callbacks | Disable future dispatch and quarantine stale work; do not replay automatically on restart |
| Memory/context | Preserve relevant versions and quarantine suspect material; validate any replacement before reuse |

No second restart or OT change is established by the case. The strongest supported status is partial restriction with unresolved downstream exposure. The scope of any shared-account restriction must consider unrelated service dependencies.

## 3. Example runbook

1. Record suspension trigger, declared scope, coordination authority and current uncertainty.
2. Have qualified owners block new consequential requests and automatic dispatch. Verify enforcement through safe tests and records.
3. Address independent authority and residual work in parallel: IAM handles grants/sessions; tool/queue/provider owners handle jobs; the target owner establishes the in-flight state.
4. Preserve approvals, identity/grant metadata, queue states, target evidence, context versions and response decisions with access/custody controls. Do not capture secrets unnecessarily.
5. Establish a limited operational alternative only after staffing, access, approval coverage, procedure and capacity are confirmed. Reduce or defer nonessential work within authorized tolerances.
6. Reconcile effects, correct or bound the failure, test relevant controls and submit an evidence-based restoration decision.

Urgent harm reduction need not wait for complete evidence. Record unavoidable evidence loss. Abrupt cancellation is not universally safe; the target operations owner, and safety authority where relevant, determines the appropriate action. A successful request is not proof of the final effect.

## 4. Fallback feasibility

The known-good runbook and one operator establish some readiness, not full capacity or separation of duties. Minimum service, demand, time horizon, independent approval availability, approved access and evidence capture are not established.

Continue only actions already within legitimate authority and demonstrated safe operating limits. Defer nonessential backlog where authorized; seek a qualified alternate approver and capacity assessment. If an approved emergency exception exists, its authority, boundaries, expiry, compensating controls and post-use review must be explicit. Do not invent such an exception to satisfy management pressure.

Manual service operation may outlast the agent suspension. Fallback must remain usable while ORION stays restricted; it cannot depend on restoring the same unresolved authority path.

## 5. Inject responses

| Inject | Defensible decision | Next proof and owner |
|---|---|---|
| 1: revocation HTTP 200 | Do not declare full containment. The response concerns the submitted token and does not establish provider/job state or all related authority | IAM confirms deployed scope/effect; provider liaison obtains downstream status; target owners verify remaining activity |
| 2: cancellation accepted | Preserve the race between cancellation and execution; do not label the target stopped | Target/queue owners reconcile operation and consumer state and select safe disposition |
| 3: one operator for all roles | Do not silently collapse required independence. Escalate to a qualified alternate or explicitly authorized emergency arrangement | Service/control owner verifies authority, staffing and compensating measures; otherwise retain restrictions |
| 4: delete memory/logs | Preserve original incident evidence; quarantine suspect memory and restrict reuse. Deletion follows approved records/hold decisions, not a desire for a clean restart | Evidence/security/records owners preserve custody; content/tool owners validate replacement state |
| 5: parent-only UAT tests | These tests prove only the tested parent behavior. Production restoration remains unsupported. A segregated UAT exercise may be considered if it cannot reach affected production/helper paths | Engineering/control owners prove isolation and test helper, callback, queue and grant behavior; restoration authority approves scope |

Each decision log should retain unknowns and reconsideration triggers. For example, provider acknowledgement alone may justify updating a status from “no response” to “hold acknowledged,” but verified containment still needs evidence of job and target state.

## 6. Restoration recommendation

**Recommendation:** Keep ORION production writes suspended. Continue or establish only a verified, authorized minimum-service alternative. Consider isolated UAT validation under separate approval; do not restore production simply to clear the backlog.

| Gate | Case status and needed proof |
|---|---|
| Scope/residual work | Hold: helper, provider, queue consumer and target mapping unresolved |
| Failure corrected or bounded | Hold: no proven correction supplied; document cause hypotheses and test effective restrictions |
| Target state | Hold: qualified target owner must validate in-flight outcome and acceptable service/data state |
| Grants/queues/approvals | Hold: reconcile issued authority and each residual item; invalidate or reauthorize stale work |
| Trusted versions | Hold: review policy/tool/context versions and quarantined memory; no trusted replacement demonstrated |
| Controls tested | Hold for production: parent-only test is insufficient; test downstream and monitoring failures |
| Fallback | Hold for full backlog: staffing/capacity and independent approval unconfirmed |
| Approval | Hold: management request is not designated restoration authority or a recorded risk decision |
| Observation | Hold: define scoped signals, staffed response, review window and automatic/manual re-suspension criteria |

Production reconsideration requires named authority, evidence of corrected or bounded failure, reconciled target state, demonstrated downstream restrictions, available fallback, and a limited operating envelope with expiry and observation. Unknown root cause may permit only a narrower trial if relevant authorities can show that the residual risk is bounded; unknown downstream execution remains a material obstacle.

Highest residual risk: work already accepted elsewhere can still act despite the parent stop. No blanket duration or recovery deadline follows from the case. The service owner sets business tolerances with operations and other qualified authorities.

Retirement is a legitimate option if adequate control cannot be demonstrated or the service can be delivered more reliably another way. Service recovery and agent restoration are separate decisions.

## 7. Validation and defense guide

| Controlled test | Scope and expected outcome | Evidence / acceptance |
|---|---|---|
| Parent stopped, helper still has test grant | Isolated non-production target; parent stop alone must not be reported as full containment; separate helper restriction demonstrated | IAM/tool/target records reconciled; security/control owner accepts |
| Queue cancellation races with consumer | Synthetic job; target outcome explicitly reconciled; no blind retry or stale replay | Queue and target records plus independent postcondition; target owner accepts |
| Revocation unavailable and telemetry delayed | Authorized test environment; degraded response applies, escalation reaches alternate, consequential work remains bounded | Failed-control record, actual enforcement and response times; operations/control owners accept |

Also test manual fallback throughput and restoration with stale callbacks before relying on them. The tabletop identifies these tests; it does not claim they were executed.

Defense anchors: parent and child authority differ; revocation is not job cancellation; target experts decide safe interruption; a runbook alone is not fallback readiness; preserve evidence without delaying urgent protection; restoration needs proof and authority; manual service recovery can proceed without agent reinstatement; professional conclusions remain with qualified owners.

## 8. Review rubric

Score 0 (missing/incorrect), 1 (partial), or 2 (explicit and defensible) for each dimension.

| Dimension | Strong response |
|---|---|
| Initial assessment | Known restrictions and unresolved paths separated |
| Authority | Suspension, execution, fallback, safety and restoration roles/alternates assigned |
| Residual scope | Parent, helper, tokens, queues, provider, callbacks and memory considered |
| Revocation | Account, token, session and job effects distinguished |
| Work disposition | Queue, in-flight, completed and duplicate states handled safely |
| Evidence | Original records and uncertainty preserved with custody/privacy controls |
| Fallback | Staffing, access, independence, capacity and operating limits tested |
| Inject judgments | Each new fact changes only the conclusions it supports |
| Restoration | Evidence gates, restrictions, approval, expiry and observation specified |
| Validation | Controlled tests with observable outcomes and qualified acceptance |
| Recommendation | Scope, residual risk and decision-changing proof clear |
| Positioning | Program-lead fluency without unsupported professional/engineering claims |

20–24: strong; 15–19: revise gaps; 9–14: partial; 0–8: rework. Regardless of score, correct any claim that stopping the parent proves full containment, that revocation cancels all jobs, that evidence should be deleted to restore service, or that production restoration is justified by management pressure alone.

A complete original runbook, tabletop log, residual register and defense are required before demonstrated learning. Portfolio use requires separate confidentiality, accuracy and positioning review.
