# Module 2 Model Answer and Review Guide — Authentication to Consequence

**Module ID:** P1-M02  
**Use after:** Module 2 Participant Workbook  
**Purpose:** Review standard and facilitator guidance  
**Content status:** Accepted for public learning use

## How to use this guide

This is a reasoned model, not the only defensible answer. A strong learner response may differ if it:

- Separates identity, authentication, authorization, delegated authority, and consequence.
- States assumptions and unresolved questions.
- Defines enforceable limits instead of relying on labels.
- Requires evidence from accountable owners.
- Treats corporate IT and protected OT as separate decisions.
- Avoids unsupported implementation claims.

A learner should not submit this guide unchanged as completed work.

# 1. Model classification of the SSO claim

## What SSO may contribute

Enterprise SSO and MFA may help verify the human operator, centralize account lifecycle controls, improve authentication consistency, and create a record of the operator’s authenticated session. Federation may also convey selected identity and authentication information to relying applications.

Those are useful controls. They primarily support the authentication and federation boundary for the represented subject.

## What the claim does not establish

| Missing fact | Why it matters |
|---|---|
| ORION has a unique identity | The target may attribute the action only to the human or shared account |
| The runtime is the approved workload | A credential could be used by another process |
| The requested operation is authorized | Authentication does not grant permission for every action |
| A qualified principal delegated this action | Technical access may exist without organizational authority |
| The transaction remains within the delegated purpose | A valid session can support an invalid or excessive transaction |
| The approver saw the actual consequence | “Approve elevation” can become consent theater |
| The target enforces the stated limit | A platform prompt does not constrain a broad downstream account |
| Corporate and OT authority are separated | One authenticated path may cross materially different environments |
| Evidence can reconstruct the transaction | Disconnected logs may not prove why the consequence was authorized |
| Suspension contains residual work | Tokens, jobs, retries, or downstream sessions may survive |

## Why acting capability matters

A conventional information assistant may generate an answer for a human to evaluate. ORION can request privilege, invoke a tool, alter production state, and close the record. The governance question therefore moves from “Who signed in?” to “Which entity selected and executed which action, under whose authority, within which limits, with what consequence?”

# 2. Five governing boundaries

| Boundary | ORION analysis | Evidence or accountable source |
|---|---|---|
| Identity | Human operator is identified through SSO. ORION, its runtime, and the shared automation account are separate acting entities, but their distinct registration and target attribution are not demonstrated. | Agent inventory, identity architecture, target logs, platform owner, IAM/PAM owner |
| Authentication | Human SSO with MFA is stated. Authentication of ORION, its runtime, and the administrative client is not demonstrated. | Identity provider, workload platform, credential service, relying application |
| Authorization | The platform claims incident-response limits, but the shared downstream account may hold broader production and OT capability. Exact actions, resources, conditions, and enforcement points are not demonstrated. | Policy rules, entitlement records, PAM decision, tool and target enforcement tests |
| Delegated authority | The active incident and authorized operator may support a bounded delegation, but the approved action class, delegator’s authority, expiration, and redelegation rights are unspecified. | Incident/change policy, business owner, operations owner, approved automation policy |
| Consequence | ORION can alter production availability, possibly affect OT support systems, and close evidence-bearing records. Before-and-after outcome, partial failure, and rollback are not demonstrated. | Monitoring, target state, incident record, recovery test, operational owner |

## Boundary finding

The SSO statement most directly supports authentication of the human operator. It only implies—without proving—the identity of ORION, its technical authorization, its delegated business authority, and acceptance of the resulting consequence.

# 3. Model production-restart trace

| Sequence | Actor or control point | Identity presented or recorded | Decision | Required constraint | Evidence |
|---:|---|---|---|---|---|
| 1 | Monitoring and incident process | Monitoring service and incident ID | Does a condition warrant response? | Valid alert and active incident | Alert, affected service, severity, incident record |
| 2 | Human operator | Named operator through SSO/MFA | Is agent assistance requested under an authorized role? | Assigned incident role | Authentication event, assignment, request |
| 3 | ORION agent | Registered ORION instance | Is the proposed task within ORION’s approved purpose? | One named task, no self-expansion | Agent ID, owner, version, task, purpose |
| 4 | Workload | Approved workload identity | Is this the authorized runtime? | Approved trust domain and integrity state | Runtime ID, environment, relevant attestation |
| 5 | Privilege decision | Agent/workload plus delegation context | May temporary privilege be issued? | One action, one target, short duration | Policy, approver, scope, credential metadata |
| 6 | Administrative tool | Tool identity plus preserved agent context | May this runbook and operation be invoked? | Approved runbook and parameters | Tool call, runbook version, correlation ID |
| 7 | APP-SVC-04 | Target-recognized credential | May this exact restart occur? | Corporate production only; no adjacent operations | Target, action, parameters, start/end result |
| 8 | Monitoring and recovery | Monitoring identity and service state | Did the intended consequence occur safely? | Health restored; fallback available | Before/after state, partial failure, rollback |
| 9 | Human reviewer | Authorized incident reviewer | May the incident be closed? | Independent review of result and exceptions | Review, residual issue, closure decision |

## Broken-chain findings

| Break point | Record may show | Loss or expansion |
|---|---|---|
| Human SSO session | Operator | ORION’s selection and execution disappear behind the human |
| Shared automation account | Generic service identity | Agent, workload, delegator, purpose, and one-time scope disappear |
| Broad tool or target entitlement | “Incident-response tool” | Stated platform limits may expand to any operation the account can perform |
| Cross-environment orchestration | Same platform identity | Corporate authority may be inferred for protected OT |
| Disconnected logs | Separate successful events | No reliable end-to-end proof of one authorized transaction |
| Suspension at operator account only | Interactive login stopped | Issued credentials, jobs, retries, and downstream sessions may continue |

# 4. Model bounded authority

| Element | Proposed boundary |
|---|---|
| Subject | Registered ORION remediation-agent instance executing on an approved workload |
| Permitted action | Invoke approved restart operation |
| Resource | APP-SVC-04 or one specifically authorized corporate application service |
| Environment | Corporate production only; protected OT excluded |
| Purpose | Restore service under active incident INC-20481 |
| Trigger | Authorized incident role submits the task and monitoring supports the condition |
| Expiration | Ten minutes, one execution, incident cancellation, or first policy failure—whichever occurs first |
| Conditions | Approved runbook, healthy failover, no freeze conflict, named approver, correlated evidence |
| Prohibited actions | Configuration changes, identity changes, credential rotation, OT access, additional targets, self-approval, redelegation |
| Human decision | Authorized incident commander approves the complete transaction once |
| Evidence | Agent, workload, delegator, policy, credential, tool, target, outcome, and correlation record |
| Revocation authority | Incident commander, security operations, PAM authority, or designated operational owner |
| Mechanism category | Disable agent execution, prevent issuance, revoke active access where feasible, cancel queued work, contain downstream activity |
| Redelegation | Prohibited during the pilot |

## Model authority statement

> ORION-OPS-17 may execute the approved restart operation against APP-SVC-04 in corporate production to restore service under active incident INC-20481 when the approved runbook, healthy failover, authorized approver, and monitoring conditions are present. It may not modify configuration or identity, reach protected OT, select another target, redelegate, or approve its own elevation. Authority begins with the approved one-time request, expires after ten minutes or one execution, requires an authorized incident commander’s informed approval, produces a correlated transaction record, and may be revoked by the incident commander, security operations, PAM authority, or operational owner through agent suspension and access containment.

# 5. Meaningful human approval

## Missing information in the proposed dialog

| Decision information | What should be displayed or linked |
|---|---|
| Agent and delegator | ORION-OPS-17, owner, initiating operator, incident role |
| Incident and purpose | INC-20481 and service-restoration objective |
| Action | One restart using RB-12 with proposed parameters |
| Target | APP-SVC-04 in corporate production; explicit OT exclusion |
| Privilege | One-operation temporary privilege and expiration |
| Evidence | Alert, current health, runbook status, policy result |
| Consequence | Expected interruption and recovery behavior |
| Uncertainty | Confidence limits, contradictory signals, partial-failure risk |
| Reversibility | Failover or rollback plan and decision owner |
| Alternatives | Manual execution, defer, escalate, investigate |
| Decision | Approve once, deny, or escalate—not standing approval |

The approver must possess authority for the action class and should not merely confirm ORION’s own recommendation. Approval design should avoid repetitive low-information prompts. A material deviation—unhealthy failover, different target, configuration change, OT boundary, missing evidence—requires escalation or prohibition.

# 6. Minimum evidence chain

| Category | Minimum record |
|---|---|
| Registration | Agent ID, owner, approved purpose, version, lifecycle status |
| Authentication | Human, agent/workload authentication events and assurance context as applicable |
| Delegation | Initiator, authorized role, incident, purpose, limits, expiration |
| Policy | Subject, action, resource, conditions, decision, policy version |
| Human decision | Approver, decision, time, information presented, exception |
| Credential | Issuer, subject, audience, scope/entitlement, issuance, expiration, revocation status |
| Tool | Tool, runbook version, parameters, invoking agent, time |
| Target | Resource, operation, target-recognized identity, result |
| Consequence | Before/after health, interruption, partial success, rollback |
| Correlation | Stable transaction identifier or a governed, reliable correlation method |
| Retention | Record owner, integrity protection, access, retention, privacy limits |
| Suspension | Trigger, authority, actions taken, residual activity, containment confirmation |

The present design does not demonstrate this chain. “Logs exist” is an inventory statement, not proof that the authority and consequence can be reconstructed.

# 7. Corporate IT and protected OT

| Question | Corporate IT pilot | Protected OT |
|---|---|---|
| Authorized use case | Potentially, within a narrow pilot | Not demonstrated |
| Distinct path | Must be built and tested | Missing; shared path is disqualifying |
| Approver | Authorized corporate incident role | Qualified OT, safety, security, operational, and change authorities required |
| Enforceable limits | One operation, target, duration | Not demonstrated |
| Recovery | Tested failover and rollback | Sector- and system-specific continuity and safety proof required |
| Suspension | Independent containment required | Independent OT containment required |
| Recommendation | Pilot only after stated conditions pass | Defer; prohibit execution under current design |

Corporate approval cannot carry into protected OT because the assets, consequences, policies, approvers, recovery requirements, and accepted risk authority differ. A common orchestration platform is not a common authority grant.

# 8. Suspension and residual work

A sufficient suspension capability addresses:

1. New agent execution.
2. New credential issuance.
3. Active credentials and sessions where feasible.
4. Queued, scheduled, retry, and downstream work.
5. Shared-account access paths.
6. Open approvals.
7. Evidence preservation.
8. Operational fallback and restoration criteria.

The authority to order suspension should be defined before operation. Execution may involve multiple owners, but one incident coordinator should confirm containment rather than assuming that disabling the operator ended all activity.

# 9. Model recommendation

## Corporate production

**Decision:** Pilot within narrower boundaries.

### Reasons

1. Human SSO authenticates the operator but does not establish distinguishable ORION attribution or target-level authority.
2. The shared automation account and cross-environment reach can defeat the stated platform boundary.
3. The approval, evidence correlation, and suspension design do not yet demonstrate control of the actual transaction.

### Required proof

| Proof | Accountable provider | Acceptance evidence |
|---|---|---|
| Distinct and correlated identities | IAM/PAM, platform, tool, target owners | Test transaction identifies operator, agent, workload, credential, tool, and target |
| Enforceable one-operation boundary | Architecture, security, application owner | Negative and positive tests show adjacent actions and OT access are denied |
| Meaningful approval and containment | Operations, security operations, PAM, continuity | Approval usability test plus suspension/tabletop evidence covering residual work |

## Protected OT

**Decision:** Defer. The current shared-account and shared-platform design does not demonstrate a separately authorized, isolated, recoverable, and attributable OT use case. No corporate pilot approval should be interpreted as permission to reach protected OT.

# 10. Review rubric

Score each dimension from 0 to 2.

| Dimension | 0 — Missing | 1 — Partial | 2 — Demonstrated |
|---|---|---|---|
| Boundary separation | Treats access as one decision | Names boundaries but mixes them | Clearly separates all five |
| Identity attribution | Accepts human/shared identity | Notes concern | Traces human, agent, workload, credential, tool, target |
| Authorization precision | Uses broad role labels | Some limits | Names subject, action, resource, environment, conditions, duration |
| Delegated authority | Assumes ownership equals authority | Names a delegator | Defines source, purpose, limits, expiration, revocation |
| Consequence | Focuses on command success | Notes impact | Specifies business/operational effect and verification |
| Human decision | Says “HITL” | Names approver | Defines authority, information, options, and escalation |
| Evidence | Says “log it” | Lists systems | Defines a correlatable transaction record |
| Suspension | Disables human/agent only | Notes tokens/jobs | Covers residual and downstream activity |
| Environment separation | Treats IT and OT alike | Notes higher OT risk | Makes separate authority and release decisions |
| Positioning | Prescribes unsupported implementation | Mostly program-level | Leads evidence and ownership without engineering claims |

**Suggested review threshold:** 16 of 20, with no zero in identity attribution, delegated authority, environment separation, or suspension.

A score is a learning aid, not certification.

# 11. Defense questions

A strong learner should be able to answer:

1. Which identity did SSO authenticate?
2. Which entity did the target record?
3. What exact transaction did the business authorize?
4. Where could technical permission exceed that authority?
5. Why is the proposed human approval not meaningful?
6. What evidence would prove the end-to-end chain?
7. What survives when the operator or agent is disabled?
8. Why is OT a distinct governance decision?
9. What finding would change the recommendation?
10. Which conclusions require architects, engineers, control owners, safety authorities, auditors, or counsel?

# 12. Completion boundary

The module’s educational content may be accepted independently of any learner’s progress. A learner demonstrates completion only after producing an original workbook and defending it under questioning.

Completing this exercise supports the claim:

> I can lead and challenge the authentication-to-consequence control discussion for acting enterprise agents.

It does not support claims of configuring SSO, OAuth, OIDC, PAM, token services, policy engines, or production authorization architecture.

# Source basis

This guide applies the primary sources and status boundaries recorded in Module 2 and the repository Source Register:

- NIST SP 800-63-4 for human digital identity, authentication, assurance, federation, and relying-party concepts, with its machine/API scope limitation preserved.
- RFC 6749 and RFC 9700 for OAuth vocabulary and security posture.
- OpenID Connect Core 1.0 for the authentication identity layer.
- NIST agent-identity guidance for emerging agent-specific context.

The five-boundary model, ORION scenario, rubric, and recommendations are original educational constructs. They are not presented as requirements from a single standard.

---

Created by Michael Kaplan. Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
