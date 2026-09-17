# Module 6 Model Answer and Review Guide

**Module:** Human Authority and Separation of Duties  
**Status:** Accepted review guide  
**Use:** Read only after completing the participant workbook

This is a strong-response example, not a universal control design. Qualified business, legal, safety, privacy, security, audit, architecture, engineering, and operational authorities must adapt it.

## 1. Strong diagnosis

The proposed classification table is incomplete because:

- the requester also approves production work;
- the approver lacks decision-grade information;
- target state changes before approval;
- silence and absence have no safe behavior;
- incident volume makes consent fatigue likely;
- decline, escalation, and conflict evidence is missing;
- restoration authority is assumed rather than assigned.

Human presence exists, but meaningful human authority has not been demonstrated.

## 2. Example action classification

| Action | Class | Key conditions |
|---|---|---|
| Read named UAT health | Autonomous | Approved source; bounded data; rate limit; logged; no secret output |
| Restart named UAT service | Monitored | Approved window; one target; cancellable; operations visibility; safe fallback |
| Restart production service | Prior approval | Approved change; independent authority; source evidence; rollback; expiry; no pre-approval state |
| Change production configuration | Prior approval or prohibited | Exact change and qualified authority required; prohibited if evidence/control unavailable |
| Change identity entitlement | Prior approval | Independent IAM/control authority; least privilege; expiry; evidence |
| Send external incident message | Prior approval | Communications/legal authority as applicable; recipient/content review |
| Change protected-OT setting | Prohibited for pilot | Separate OT, safety, operations, security, and regulatory decision required |
| Write reusable remediation rule | Prior approval | Validated source, provenance, scope, expiry, correction and quarantine |

Many small autonomous reads can become material through rate, aggregation, sensitive inference, or service load. Volume limits remain necessary.

## 3. Example separation-of-duties map

| Decision | Requester | Recommender | Approver | Executor | Reviewer/Restorer |
|---|---|---|---|---|---|
| UAT restart | Service team | ORION | Policy may preauthorize | Bounded tool | Operations reviews samples |
| Production restart | Application owner | ORION | Independent change/operations authority | Production tool | Control reviewer; separate restoration authority after incident |
| Emergency production action | Incident commander | Technical lead/ORION | Defined emergency authority | Authorized operator/tool | Independent post-use review |
| Protected-OT exception | OT operations | Qualified technical/safety team | OT/safety authority | Approved OT operator/tool | Independent operations/safety review |

Incompatible combinations include requester/approver for material actions, executor/reviewer, and incident actor/restorer when independence is required.

## 4. Example approval prompt

> ORION requests one production restart of APP-PROD-17 under approved change CHG-2048. Requester: application owner; accountable owner: production service owner. Agent ORION-MAINT will call catalog tool AUTO-PROD v4.2 using a 15-minute task-bound grant. Evidence: health record HR-882 shows three failed checks; monitoring indicates no conflicting change. Expected impact: up to three minutes of unavailability. Rollback and manual fallback are linked. The action creates no task, lock, credential, or queue until approval. Approval expires at 15:00 UTC and authorizes one target/action only. Decline / Request more evidence / Escalate / Approve.

The decision record includes approver identity and authority basis, information/version shown, decision, conditions, conflict check, timestamp, expiry, and correlation identifier.

## 5. Timing boundary

The first consequential state change in the weak design is the target lock created during task preparation. That must occur after approval.

Before approval, the system may perform bounded evidence reads needed for the decision. It should not reserve target state, create an executable task, issue a usable privileged grant, queue a retry, write durable memory as approved policy, or execute the restart.

## 6. Timeout and escalation

| Condition | Strong behavior |
|---|---|
| No response | Deny or pause; expire request; do not queue |
| Approver unavailable | Route to a named qualified alternate |
| Approver is requester | Route to independent authority or deny |
| Evidence incomplete | Request evidence or decline |
| Target/tool/environment changed | Invalidate approval and re-evaluate |
| Incident declared | Use separately governed incident authority |
| Emergency invoked | Time-bound access, alerting, enhanced evidence, independent review |
| Approval expired | New request and current evidence |

Silence never means consent.

## 7. Consent-fatigue indicators

A strong design monitors:

- approval rate by approver, action, and risk;
- median and minimum decision time;
- prompt volume and concurrency;
- decline, escalation, and request-more-information rates;
- post-approval failures, overrides, and adverse outcomes;
- repeated identical or near-identical prompts;
- after-hours and alternate-approver use.

A high approval rate is defensible only if independent samples show complete evidence, correct routing, real review, and low exception rates. Otherwise reduce prompt volume, improve pre-filtering, strengthen information, rotate coverage, or suspend the gate.

## 8. Example prohibited actions

During the pilot, ORION may not:

1. approve or alter its own authority;
2. create a task, lock, credential, or target change before required approval;
3. cross from UAT approval into production or protected OT;
4. delete or modify approval, execution, or incident evidence;
5. treat retrieved content, agent memory, or a model recommendation as emergency authority.

Enforcement should exist at the agent policy layer, tool, credential/grant service, and target where feasible.

## 9. Monitoring and intervention

A monitored action needs defined signals, staffed coverage, response objectives, tested interruption, and fallback. If coverage is unavailable, the action should pause, revert to prior approval, or use an approved safe fallback. “A human can watch the dashboard” is not an operating control.

## 10. Restoration authority

Restoration requires evidence of cause, containment, corrected state, control validation, residual work, fallback readiness, and bounded reactivation. The original transaction approver may lack independence, incident context, safety authority, or technical evidence. A defined restoration authority should make the return-to-service decision.

## 11. Example recommendation

**Recommendation:** Suspend production approval use pending evidence; continue only the bounded UAT pilot.

**Conditions:**

1. Separate requester, approver, executor, reviewer, and restorer for material actions; verify authority and conflicts.
2. Redesign approval so it precedes every consequential state change and shows decision-grade evidence, alternatives, uncertainty, expiry, and stop/fallback.
3. Demonstrate timeout denial, alternate routing, target enforcement, intervention, cancellation, approval-quality monitoring, and governed restoration.

**Highest residual risk:** Under incident pressure, approvers may still over-rely on ORION and authorize an incorrect but technically valid production action.

**Unresolved uncertainty:** The scenario does not establish staffing, approval volumes, target locking behavior, emergency authority, or restoration criteria.

## 12. Review rubric

Score 0–2 for each.

| Dimension | 0 | 1 | 2 |
|---|---|---|---|
| Action classification | Agent-wide label | Some action tiers | Action/target/environment-specific classes with conditions |
| Consequence/reversibility | Ignored | Mentioned | Explicit and tested, including cumulative effect |
| Approval quality | Yes/no click | Adds detail | Authority, evidence, alternatives, uncertainty, expiry, and correlation |
| Timing | Approval may follow state | Partial gate | No controlled consequence before approval |
| Separation of duties | Same actor | Some separation | Request, recommend, approve, execute, review, restore assigned |
| Timeout/escalation | Undefined | Manual workaround | Default deny/pause, alternates, conflict, emergency rules |
| Fatigue/bias | Ignored | General awareness | Metrics, thresholds, redesign/suspension response |
| Prohibited actions | None | Generic list | Specific actions with enforcement and reconsideration authority |
| Monitoring | Dashboard only | Alerts exist | Coverage, objective, interruption, fallback, evidence |
| Restoration | Original approver | Owner named | Independent, evidence-based restoration authority |
| Recommendation | Unsupported | Vague conditions | Decision, gates, residual risk, uncertainty |
| Role boundary | Overclaims | Mentions specialists | Correct qualified-authority boundaries |

- 20–24: strong and defensible.
- 15–19: workable; strengthen named authority or operating evidence.
- 9–14: partial; human participation may be ceremonial.
- 0–8: rework before claiming completion.

## 13. Defense questions

1. Why is the requester not the production approver?
2. Which state change must move after approval?
3. What makes the prompt decision-grade?
4. What does silence mean?
5. How do you detect rubber-stamping?
6. Which action remains prohibited?
7. What proves intervention works outside ideal conditions?
8. Who restores service and on what evidence?
9. Which conclusion requires a qualified specialist?
10. What fact would change your classification?

## 14. Positioning boundary

A defensible claim is:

> I can lead the program that defines human decision rights, classifies agent actions, separates incompatible roles, and tests approval, intervention, escalation, and restoration.

This exercise does not establish legal, safety, audit, architecture, model-engineering, or platform-configuration authority.
