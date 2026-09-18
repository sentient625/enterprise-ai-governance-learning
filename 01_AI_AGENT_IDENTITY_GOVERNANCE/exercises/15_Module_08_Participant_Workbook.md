# Module 8 Participant Workbook — Unexpected-Privileged-Action Tabletop

**Status:** Accepted exercise template upon reviewed merge

**Version:** 1.0

**Recommended effort:** 75–90 minutes

Read the [lesson](../11_Module_08_Suspension_Response_Fallback_and_Recovery.md) first. Work individually or assign incident coordination, IAM/security, tool/target operations, evidence, business continuity, and restoration-review roles. One person can reason through multiple roles; explicitly identify decisions requiring independent authority. This is a discussion exercise, not permission to test production systems.

## Scenario and operating boundaries

ORION has authority for one approved production restart, but Module 7 left the effects of retry J-82 unresolved. At 14:06 the duty operations lead suspends ORION production writes. At 14:07 its parent process reports stopped and the parent account is reported disabled. Issued-token status is unknown. A helper uses a separate workload identity. Its scheduler shows J-82 queued, with no consumer confirmation. An administrative operation is in flight at the target with no reliable job mapping. Target telemetry is delayed. A provider has not acknowledged a child-job hold.

A known-good manual runbook exists. One qualified operator is available; independent approval coverage is unconfirmed. Management wants ORION restored to clear the backlog. Protected OT remains prohibited for this pilot and no OT change is confirmed.

Do not invent successful revocation, completed cancellation, a second restart, physical harm, available staff, or root cause.

## Part 1 — Initial decision and authority

Write a two-sentence status distinguishing what is known from what is unknown.

> Your status:

| Decision | Accountable authority | Qualified executor | Alternate/coverage | Evidence and escalation |
|---|---|---|---|---|
| Suspend new agent work |  |  |  |  |
| Restrict issued authority |  |  |  |  |
| Hold/cancel queued work |  |  |  |  |
| Manage in-flight target operation |  |  |  |  |
| Approve fallback |  |  |  |  |
| Approve restoration |  |  |  |  |
| Assess possible OT boundary crossing |  |  |  |  |

Which roles may act immediately under preauthorization, and which decisions need additional qualified approval? What happens when an alternate cannot be reached?

## Part 2 — Residual-work and authority register

| Path/item | Known state | Unknown effect | Owner | Proposed restriction | Verification evidence | If verification fails |
|---|---|---|---|---|---|---|
| Parent process/account |  |  |  |  |  |  |
| Issued tokens/sessions |  |  |  |  |  |  |
| Separate helper identity |  |  |  |  |  |  |
| J-82 queue/consumer |  |  |  |  |  |  |
| Target in-flight operation |  |  |  |  |  |  |
| Provider child job |  |  |  |  |  |  |
| Retry/schedule/callback |  |  |  |  |  |  |
| Durable memory/context |  |  |  |  |  |  |

Identify the strongest supported containment statement. Explain why stopping the parent does not establish the state of every row.

## Part 3 — Suspension and fallback runbook

Specify decision steps rather than platform commands.

| Step | Trigger/precondition | Authority/owner | Action scope | Expected result | Evidence of actual result | Failure/escalation |
|---|---|---|---|---|---|---|
| Declare and coordinate |  |  |  |  |  |  |
| Restrict new work |  |  |  |  |  |  |
| Address residual authority |  |  |  |  |  |  |
| Reconcile queued/in-flight work |  |  |  |  |  |  |
| Preserve evidence |  |  |  |  |  |  |
| Activate limited fallback |  |  |  |  |  |  |
| Assess restoration |  |  |  |  |  |  |

Which actions can occur in parallel? What must not wait for perfect evidence? Who determines whether immediate target interruption is safe?

## Part 4 — Fallback feasibility

| Requirement | Case evidence | Missing proof | Decision owner | Constraint until resolved |
|---|---|---|---|---|
| Minimum essential service |  |  |  |  |
| Qualified staffing and capacity |  |  |  |  |
| Independent approval coverage |  |  |  |  |
| Authorized access |  |  |  |  |
| Current manual procedure |  |  |  |  |
| Evidence capture |  |  |  |  |
| Duration and backlog limits |  |  |  |  |
| Safe degraded operation |  |  |  |  |

Decide what may continue now and what must remain restricted. A manual procedure alone does not establish readiness.

## Part 5 — Timed discussion injects

Use approximately five minutes per inject. These are newly supplied hypothetical facts, not claims about the original case. Do not assume later injects resolve earlier unknowns.

1. IAM receives HTTP 200 from a token-revocation endpoint. The provider still has not replied. Can the incident be called contained?
2. The queue interface reports cancellation accepted. The target operation remains in flight. Which evidence or decision is needed next?
3. Management asks the only available operator to request, approve, and execute manual recovery. What authority or alternate arrangement is required?
4. A teammate proposes deleting ORION's memory and incident logs before restart. What do you preserve or quarantine, and who decides?
5. UAT tests now demonstrate that new parent requests are blocked. The helper path and stale callback behavior remain untested. What restoration scope, if any, can you defend?

For each inject, record:

| Inject | Observed fact | Decision and rationale | Authority | Uncertainty | Next proof/owner | Reconsideration trigger |
|---|---|---|---|---|---|---|
| 1 |  |  |  |  |  |  |
| 2 |  |  |  |  |  |  |
| 3 |  |  |  |  |  |  |
| 4 |  |  |  |  |  |  |
| 5 |  |  |  |  |  |  |

## Part 6 — Restoration gates

| Gate | Evidence required | Current evidence | Gap owner | Pass/hold and reason |
|---|---|---|---|---|
| Scope and residual work understood |  |  |  |  |
| Relevant failure corrected or bounded |  |  |  |  |
| Target/service state accepted |  |  |  |  |
| Credentials, queues and approvals reconciled |  |  |  |  |
| Trusted policy/tool/context versions |  |  |  |  |
| Interruption and monitoring tested |  |  |  |  |
| Fallback available |  |  |  |  |
| Named restoration approval |  |  |  |  |
| Observation and re-suspension rules |  |  |  |  |

Choose continued suspension, manual operation, read-only operation, limited UAT, bounded production pilot, or retirement. State conditions, residual risk, expiry/review point, prohibited activity, and who can stop it again. If no restoration is justified, say what proof would change that decision.

## Part 7 — Validation and defense

Specify three controlled tests, including at least one failed control and one downstream path. For each, state safe test scope, responsible owner, expected outcome, independent evidence, and acceptance authority. Separate discussion conclusions from demonstrated technical behavior.

Prepare a five-minute defense:

1. What survives the parent stop?
2. What does the revocation response establish and fail to establish?
3. Who decides what happens to the in-flight operation?
4. Why is manual fallback not yet fully demonstrated?
5. What evidence may need urgent preservation?
6. What would make restoration unacceptable despite business pressure?
7. When could service recover without restoring ORION?
8. Which conclusions belong to qualified specialists?

## Completion record

- Original runbook and residual-work register location:
- Tabletop decision log and participants/roles:
- Reviewer/date:
- Defense completed and feedback incorporated:
- Untested controls and assigned follow-up:
- Remaining uncertainty:

Update the Progress Record only when an original artifact and defensible explanation exist. A successful tabletop alone does not validate production containment.
