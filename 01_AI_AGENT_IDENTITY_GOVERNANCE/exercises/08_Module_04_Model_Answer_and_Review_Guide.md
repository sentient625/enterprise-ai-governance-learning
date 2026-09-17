# Module 4 Model Answer and Review Guide

**Module:** Credentials, Secrets, and Privileged Access  
**Status:** Accepted review guide  
**Use:** Read only after completing the participant workbook

This is a strong-response example, not a universal architecture. Qualified teams must adapt decisions to the enterprise, target technology, threat model, sector, safety context, law, and operating environment.

## 1. Strong diagnosis

The sponsor’s control list is incomplete:

- Authentication identifies a service identity at one point in the chain; it does not attribute every target action.
- Secret storage reduces some disclosure risk; a team-accessible shared credential still weakens accountability.
- Human approval is not meaningful when the approver sees only a short label.
- Annual rotation limits neither standing privilege nor cross-environment reach.
- Logging a shared target account cannot reconstruct actor, purpose, approval, tool, and consequence.
- Stopping ORION leaves active sessions and queued jobs able to act.

A strong response separates ORION, its runtime, credential, tool, target account, approver, and downstream work.

## 2. Example control-object analysis

| Object | Scenario fact | Critical unknown |
|---|---|---|
| Business purpose | Accelerate maintenance | Which maintenance action, target, change, and consequence? |
| Accountable owner | Not identified | Who owns continuing authority and accepts residual risk? |
| Agent identity | Service identity mentioned | Is it unique to ORION and to an environment? |
| Runtime/workload | Not described | What runtime is attested and bound to the identity? |
| Credential | Shared platform-admin secret | Can ORION retrieve it; where are copies; what target accepts it? |
| Entitlement | Broad admin implied | Which operations and resources are actually required? |
| Tool identity | General automation tool | Does the target see the tool, ORION, or shared account? |
| Target identity | Shared platform-admin | Can a distinct or brokered identity preserve attribution? |
| Approver | Human for “high-risk” actions | Who qualifies, what information is shown, and what is prohibited? |
| Downstream work | Sessions and queues persist | How are they enumerated, terminated, and evidenced? |

## 3. Example privilege and exposure map

| Path | Consequence | Weakness | Evidence |
|---|---|---|---|
| ORION → secret location | Secret theft or disclosure | Team access; actor may retrieve value | Requester, secret identifier, policy, delivery method, result |
| ORION → automation tool | Broad command execution | Tool rights exceed use case | Agent/tool identity, requested operation, policy decision |
| Tool → UAT | Test disruption or data exposure | Environment-specific rules unclear | Target, command, result, dataset classification |
| Tool → production | Customer or business outage | Standing broad privilege | Approved change, task-bound grant, session evidence |
| Tool → protected OT zone | Operational or safety consequence | IT/OT boundary combined | OT authorization, safety constraints, target action, outcome |
| Stop → session | Continued target access | No session termination | Revocation and termination timestamps/results |
| Stop → queue | Later unauthorized action | Queue not contained | Job inventory, cancellation result, residual-work review |

The first treatment priority should normally be removing cross-environment shared standing privilege, because one reusable credential combines weak attribution, broad reach, and high consequence. A different priority can be defensible if evidence shows an immediate safety or active-compromise condition.

## 4. Example bounded authority statement

> For approved change CHG-2048, ORION may use a distinct UAT workload identity to request a mediated, non-exportable grant for a maximum of 20 minutes. The grant permits the automation tool to restart application service APP-UAT-17 and read only the resulting health status. ORION may not modify configuration, identities, credentials, network policy, production, or protected OT; access other UAT services; retrieve the target secret; or delegate the grant. The application change approver must authorize the request after seeing the actor, purpose, target, action, duration, expected impact, rollback, and conflicting-change status. The approval, grant, tool call, target action, result, revocation, and session termination must share one correlation identifier. Security operations may revoke the grant, terminate the session, and cancel queued work. Any expiry, failure, target change, or material agent/tool change requires a new request and validation.

Strong statements may use other mechanisms, but they should be equally explicit and testable.

## 5. Example credential and access decisions

| Decision | Strong requirement | Reason |
|---|---|---|
| Identity | Distinct, environment-specific actor and target attribution | Avoid shared-account ambiguity and cross-zone reuse |
| Entitlement | Task-bound, action- and resource-limited | Remove unused standing authority |
| Delivery | Mediated use; actor cannot retrieve target secret where feasible | Reduce disclosure and reuse paths |
| Lifetime | Short-lived and automatically expired | Reduce reuse window; not a substitute for scope |
| Environment | Separate UAT, production, and protected OT identities and approvals | Preserve consequence boundaries |
| Approval | Risk-based prompt with decision-grade context | Make human action substantive |
| Emergency access | Separate, alerted, time-bound, independently reviewed path | Prevent ordinary work from using the bypass |
| Revocation | On expiry, completion, incident, owner change, material change, or policy breach | Align access with continuing authority |

Residual risk remains: an approved and correctly credentialed agent can still choose an incorrect action within its permitted envelope, act on poisoned context, or produce an operationally harmful result. Identity and PAM controls do not replace agent-behavior testing, target safeguards, monitoring, or human accountability.

## 6. Example lifecycle plan

| Stage | Minimum control and evidence | Primary decision roles |
|---|---|---|
| Propose/classify | Purpose, target, consequence, data, environment, alternatives | Business owner, risk/control owners |
| Design | Identity chain, entitlement, mediation, approval, evidence, suspension | IAM/PAM, security, architecture, app/OT owners |
| Approve | Recorded decision and conditions | Accountable business and qualified authorities |
| Provision | Approved identities/grants only; dependency record | IAM/PAM and platform operations |
| Validate allowed | Required action succeeds only under approved conditions | Engineering/operations with control witnesses |
| Validate denied | Prohibited target, action, zone, duration, and delegation fail | Security, IAM/PAM, target owners |
| Operate | Correlated monitoring, exceptions, drift, failed action review | Operations, security monitoring, service owner |
| Change | Material-change test and reauthorization | Change authority and affected specialists |
| Suspend | Revoke, terminate, cancel, preserve evidence | Security/operations under defined authority |
| Recover | Root cause, safe-state check, controlled restoration | Business, technical, operations, safety as applicable |
| Retire | Revoke all artifacts, remove access, close records | Service owner, IAM/PAM, target owners |

## 7. Example evidence record

A strong record includes:

- immutable or controlled correlation identifier;
- request and approved-purpose reference;
- delegating principal and accountable owner;
- agent, runtime/workload, OAuth client if present, tool, and target identities;
- policy and entitlement versions;
- non-secret credential or grant identifier, issuer, issuance, binding, expiry, and revocation;
- approval decision, approver authority, and information displayed;
- requested action, policy decision, executed target action, result, and consequence;
- session and job identifiers;
- exception or emergency-access event;
- suspension, termination, cancellation, fallback, and restoration events.

It excludes password, token, private-key, recovery-code, or other secret values.

## 8. Example meaningful approval prompt

> ORION requests authorization under CHG-2048 to restart APP-UAT-17 through automation tool AUTO-UAT using a 20-minute, non-delegable grant. Expected impact: up to three minutes of UAT unavailability. Production and protected OT are excluded. Health check and automatic rollback are defined in the change record. No conflicting change is open. Approving authorizes this action once before 15:00 UTC; expiry or failure requires a new request. Approve / Decline / Escalate.

Examples of prohibited conditions:

1. The requested target is production or protected OT when the approved use is UAT only.
2. The action would change identities, credentials, security policy, or configuration outside the documented purpose.

## 9. Example suspension and recovery criteria

| Test | Passing result |
|---|---|
| Disable agent identity | New requests fail and the event is correlated |
| Revoke grant | Target rejects subsequent use |
| Terminate session | Active broker/tool session closes within the defined objective |
| Cancel queue | Pending jobs are enumerated and prevented from execution |
| Block target action | Independent target control denies the action |
| Preserve evidence | Records remain available, protected, and linked |
| Activate fallback | Approved manual or alternate service works safely |
| Restore | Independent authority confirms cause, control effectiveness, and bounded reactivation |

A failure in any high-consequence interruption test should block the affected pilot path.

## 10. Example recommendation

**Recommendation:** Pilot under restricted conditions.

**Conditions:**

1. Replace the shared, cross-environment standing account with distinct environment-specific identities and a bounded, task-linked access mechanism.
2. Demonstrate meaningful approval, common correlation, denied-action tests, grant revocation, session termination, and queued-work containment in UAT.
3. Exclude production and protected OT until separate qualified architecture, security, operations, OT/safety, regulatory, and recovery reviews approve a specific use.

**Highest residual risk:** ORION may execute an allowed but contextually wrong maintenance action faster than human oversight can intervene.

**Unresolved uncertainty:** The scenario provides no evidence about ORION’s runtime identity, tool enforcement, target-side controls, queue architecture, or safe operational fallback.

## 11. Review rubric

Score each dimension 0–2.

| Dimension | 0 | 1 | 2 |
|---|---|---|---|
| Concept separation | Treats access as one object | Separates some objects | Separates identity, credential, secret, entitlement, privilege, and authority |
| Authority envelope | Repeats “admin” | Adds partial limits | Defines purpose, actor, action, resource, environment, time, delegation, approval, evidence, and interruption |
| Shared/static risk | Accepts storage/rotation as sufficient | Notes risk generally | Connects attribution, reuse window, reach, and consequence |
| Environment | Ignores zones | Notes environment | Separates UAT, production, corporate IT, and protected OT with qualified review |
| Approval | Human click is sufficient | Requests more detail | Defines information, authority, prohibited actions, and escalation |
| Evidence | Generic logging | Lists events | Correlates purpose through target result without recording secrets |
| Suspension | Stops visible agent | Adds revocation | Covers identities, grants, sessions, queues, downstream jobs, evidence, and fallback |
| Lifecycle | Point-in-time design | Some stages | Covers proposal through retirement and material change |
| Role boundary | Claims technical conclusion | Mentions specialists | Leads governance while assigning qualified technical/safety decisions |
| Recommendation | Unsupported yes/no | Conditions are vague | Decision, gates, residual risk, and uncertainty are explicit |

**Suggested interpretation:**

- 17–20: strong and defensible.
- 13–16: workable; strengthen named boundaries or evidence.
- 8–12: partial; authority and interruption remain weak.
- 0–7: rework before claiming completion.

A score does not by itself establish completion. The learner must explain the reasoning and respond to challenge.

## 12. Defense questions for a reviewer

1. Why did you prioritize one exposure over the others?
2. How would the target distinguish ORION from the tool and shared account?
3. What authority remains continuously available?
4. What does the approver know that the policy engine does not?
5. What work survives credential revocation?
6. Which test would block the pilot?
7. What is different about protected OT?
8. Which conclusion belongs to a qualified specialist?
9. What evidence would cause you to expand the pilot?
10. What fact would cause you to suspend it?

## 13. Positioning boundary

A defensible claim is:

> I can lead the program that converts broad privileged-access demand into bounded identities, entitlements, approvals, evidence, lifecycle controls, and interruption tests.

This exercise does not establish that the learner configured a PAM vault, engineered credential issuance, designed an OT security architecture, or approved compliance.
