# Module 3 Model Answer and Review Guide — Agent Token and Delegation Chain

**Module ID:** P1-M03  
**Use after:** Module 3 Participant Workbook  
**Purpose:** Review standard and facilitator guidance  
**Content status:** Accepted for public learning use

## How to use this guide

This model demonstrates defensible program-level reasoning. It is not the only acceptable answer and is not a production design.

A strong response may differ if it:

- Uses protocol terms accurately.
- Separates the human, agent, workload, client, token, tool, and target.
- Identifies where authority expands or attribution disappears.
- Preserves corporate IT and protected-OT boundaries.
- States missing evidence rather than inventing implementation facts.
- Routes protocol engineering to qualified owners.

A learner must not submit this guide unchanged as completed work.

# 1. Protocol classification

| Scenario element | Classification | Purpose | What it does not prove |
|---|---|---|---|
| Commander signs in to portal | OIDC using OAuth mechanisms | Provides the portal with information about authenticated end-user identity | ORION identity, agent authorization, or downstream business authority |
| Portal requests incident-API access | OAuth | Obtains limited access for a client to a protected resource | That every incident record or operation is permitted |
| ORION calls diagnostic agent | Neither by itself; may use OAuth in implementation | Delegates a subtask to another governed actor | That the delegation is bounded or that the second agent is registered |
| Broker exchanges token | OAuth token exchange | Obtains a token suitable for a downstream context | That scope, audience, lifetime, or authority narrowed |
| Tool restarts APP-SVC-04 | Protected-resource transaction; OAuth may authorize the tool API | Creates the enterprise consequence | That command execution restored service safely |
| Monitoring confirms recovery | Operational evidence, not OAuth/OIDC | Establishes resulting service state | That the original action was authorized |

## Conclusion

OIDC provides the portal with authentication information about the commander. OAuth may provide clients with access tokens for protected resources. Neither supplies the complete business-purpose, delegation, approval, consequence, and evidence model. The design must connect those facts separately.

# 2. Actors and identities

| Object | Scenario instance | Accountable owner | Required identity/registration | Principal risk |
|---|---|---|---|---|
| Human | Incident commander | Incident-management authority | Human enterprise identity and incident role | Human authority is inherited beyond the approved task |
| Portal client | Operations portal | Portal/application owner | Registered OIDC/OAuth client | Portal identity becomes a proxy for every agent |
| Primary agent | ORION-OPS-17 | Agent product and business owner | Unique governed agent registration | Agent disappears behind human session or shared client |
| Primary workload | ORION runtime | Platform owner | Approved workload identity | Credential can be used by another runtime |
| Diagnostic agent | DIAG-AGENT-02 | Diagnostic capability owner | Separate agent registration | Subtask expands or original purpose disappears |
| Diagnostic workload/client | Diagnostic runtime and OAuth client | Platform/application owner | Workload identity and client registration | Shared identity hides individual agent |
| Token broker | Exchange service | IAM/security platform owner | Registered, controlled exchange service | Broker mints broader downstream authority |
| Remediation tool | Administrative tool | Automation/tool owner | Registered tool/service client | Tool receives broad instruction without origin |
| Tool service identity | Restart service account | Application/infrastructure owner | Dedicated service/workload identity | Broad standing restart privilege |
| Incident API | Incident-management resource server | Service-management owner | Resource-server trust and policy | Platform-wide token accepted too broadly |
| Log API | Restricted-log resource server | Security/log owner | Separate protected-resource boundary | Sensitive logs exposed through shared identity |
| APP-SVC-04 | Corporate production target | Application/service owner | Target enforcement and logging | Tool identity hides ORION and approved incident |

## Separation finding

The human and ORION are collapsed in the portal session. ORION instances are collapsed behind one client. Diagnostic activity is collapsed behind a shared service identity. Final execution is collapsed behind the remediation tool’s service identity. Without correlation, the target cannot show which human, agent, delegation, and policy produced the restart.

# 3. Token classification

| Object | Type | Intended recipient | Subject/actor question | Authority represented | Lifetime concern | Misuse risk |
|---|---|---|---|---|---|---|
| OIDC ID token | ID token | Operations portal client | Which human authenticated and for which client? | Authentication information, not API permission | Session and replay handling belong to client design | Presented to APIs as access authority |
| Incident token | OAuth access token | Incident API or narrowly defined platform resource | Is subject the human, client, agent, or combination? | Issuer-defined incident access | One hour may exceed investigation step | Accepted by unrelated platform APIs |
| Incident refresh token | OAuth refresh token | Authorization server | Which client may refresh and under what continuing delegation? | Ability to request new access tokens | Eight hours outlives incident or approval | Renews authority after suspension |
| Exchanged log token | Exchanged access token | Restricted-log API | Does it preserve original subject and actor? | Bounded log access if properly restricted | Must not exceed diagnostic subtask | Adds scopes or loses actor |
| Remediation token | OAuth access token | Remediation-tool API | Which agent/workload and delegator does it represent? | Request to invoke one remediation operation | Should align to approval and one transaction | Used for other tools or services |
| Tool credential | Service/workload credential | APP-SVC-04 or infrastructure control plane | Can target correlate tool to ORION transaction? | Downstream target entitlement | Standing credential can persist indefinitely | Restarts unrelated services |

## ID-token finding

The ID token is intended for the portal client named by its audience. It conveys authentication information about the end user. It should not be repurposed as general authorization for the incident, log, or remediation APIs; those resource servers require their own accepted access-token and policy model.

# 4. Model end-to-end chain

| Hop | Initiator | Agent | Workload/client | Issuer/authority | Subject/actor | Audience/resource | Scope/entitlement | Lifetime | Business authority | Consequence | Evidence |
|---:|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Commander | None yet | Portal OIDC client | Identity provider | Human commander | Portal client | Authentication claims | Session-bound | Assigned incident role | Open portal session | Auth event and claims |
| 2 | Commander/portal | ORION | ORION workload and portal/agent client | Authorization server | Human delegation plus agent actor must correlate | Incident API | Read INC-20481 only | Task-bound | Active incident assignment | Incident data retrieved | Token decision and API read |
| 3 | ORION | DIAG-AGENT-02 | ORION client to agent service | Agent platform/policy | ORION as delegator, diagnostic agent as actor | Diagnostic-agent endpoint | Named diagnostic subtask | One job | ORION may delegate analysis only | Subtask created | Delegation record |
| 4 | Diagnostic agent/broker | DIAG-AGENT-02 | Diagnostic workload/client | Token broker/authorization server | Originating subject plus downstream actor | Restricted-log API | Read minimum logs for APP-SVC-04/time window | Short | Same incident diagnostic purpose | Downstream token issued | Exchange record and policy |
| 5 | Diagnostic agent | DIAG-AGENT-02 | Diagnostic workload/client | Existing token issuer | Preserved chain | Log API | Read named fields/time range | Same or shorter | Diagnostic subtask | Logs returned | Query and data handling |
| 6 | ORION | ORION | ORION workload | Business/operational authority | Commander approves ORION proposal | Remediation decision | One restart proposal | Approval window | Incident commander | Authorization to request execution | Decision context |
| 7 | ORION | ORION | Remediation OAuth client | Authorization server | ORION actor plus commander delegation | Remediation-tool API | Invoke one approved restart | One transaction/short | Approved remediation | Tool request | Token and tool call |
| 8 | Tool | ORION remains correlatable | Tool workload/service identity | Downstream credential authority | Tool actor plus originating chain | APP-SVC-04 | Restart named service only | One transaction | Same approved task | Production service restart | Target command and result |
| 9 | Monitoring/reviewer | ORION assists | Monitoring and incident clients | Operational process | Authorized reviewer | Monitoring/incident systems | Verify and close | Immediate | Incident closure authority | Recovery accepted and record closed | Before/after state and closure |

# 5. Audience and resource findings

| Token/credential | Intended audience | Unintended acceptance risk | Required restriction | IT/OT concern |
|---|---|---|---|---|
| Incident token | Incident API | Other platform APIs | Named resource server; audience validation | Must not be accepted by OT-facing platform services |
| Log token | Restricted-log API | Broader security-data services | Dedicated log resource and query boundary | OT logs require separate data and authority decision |
| Remediation token | Remediation-tool API | Other administrative tools | One tool API and operation class | Tool route must exclude OT control paths |
| Tool credential | APP-SVC-04 control surface | Any production service | Named target or tightly controlled resource set | Separate credential, trust domain, and approval for OT |

A narrow audience reduces where a token can be accepted. It does not ensure narrow scopes, resource instances, context integrity, or business purpose. Each resource server must enforce audience and its local permissions.

# 6. Scope and entitlement findings

| Label | Required operational meaning | Resource limit | Environment limit | Prohibited operations |
|---|---|---|---|---|
| `incident.read` | Read named incident fields | INC-20481 | Corporate incident platform | Update, close, read unrelated incidents |
| `logs.read` | Query approved fields for named services and time window | APP-SVC-04-related logs | Approved corporate logging domain | Bulk export, unrelated investigations, OT logs |
| `remediation.execute` | Invoke approved runbook action | APP-SVC-04 | Corporate production | Configuration, identity changes, other services, OT |
| Tool restart entitlement | Restart one named service with approved parameters | APP-SVC-04 | Corporate production | Arbitrary commands or broad infrastructure administration |

The most dangerous mismatch is a narrow-sounding remediation scope mapped to a service identity that can restart any production service.

# 7. Lifetime and refresh findings

| Object | Proposed | Appropriate boundary | Termination | Reevaluation |
|---|---|---|---|---|
| Portal session | Not stated | Human session with incident-role validation | Logout, role removal, risk event | Human authentication/role as policy requires |
| Incident token | One hour | Investigation task or shorter | Task completion, incident closure, suspension | Current incident and agent status |
| Refresh token | Eight hours | Likely unnecessary or heavily constrained for this task | Incident closure, delegation withdrawal, agent/client suspension | Full current-policy and delegation check |
| Exchanged log token | Not stated | One diagnostic query/job | Result returned or job canceled | Original purpose and current actor |
| Remediation token | Not stated | One approval, one action, short time | Use, denial, timeout, target change | Human decision and safety conditions |
| Tool credential | Standing | Prefer task/target-bound access or tightly controlled service authority | Tool suspension or task completion as applicable | Target and transaction authorization |

The refresh token can outlive the incident, human presence, or agent task. A privileged remediation transaction should not obtain renewable authority merely for convenience. Closing the incident or suspending a participant must prevent new issuance and address existing tokens, jobs, and downstream sessions.

# 8. Bearer and sender constraint

The scenario does not demonstrate whether the access tokens are bearer or sender-constrained.

Qualified owners should show:

| Token | Required question | Replay concern | Remaining governance issue |
|---|---|---|---|
| Incident | Is use bound to approved ORION client/workload? | Stolen bearer token can access incident API | Authorized client can still request excessive data |
| Log | Is use bound to diagnostic workload? | Token may be replayed from another process | Bound diagnostic agent may still exceed purpose |
| Remediation | Is use bound to remediation client/workload? | Stolen token may invoke tool | Correct holder may still execute wrong target/action |

Sender constraint can make token theft and replay by another presenter harder. It does not validate agent context, business purpose, delegation, scope quality, or consequence.

# 9. Token-exchange analysis

## Incoming token

| Element | Finding |
|---|---|
| Issuer | Enterprise authorization server |
| Subject | Human commander or an agent/service subject; not demonstrated |
| Actor/client | ORION client; individual ORION instance not demonstrated |
| Audience | Platform/incident APIs; currently broad |
| Scope | Incident access; exact mapping not demonstrated |
| Lifetime | One hour with eight-hour refresh |
| Purpose | Investigate INC-20481 |

## Exchanged token

| Element | Required result |
|---|---|
| Issuer | Approved broker/authorization server |
| Subject | Original subject preserved or reliably correlated |
| Actor/client | DIAG-AGENT-02 and diagnostic client/workload distinguishable |
| Audience | Restricted-log API only |
| Scope | Minimum log query for APP-SVC-04 and approved time window |
| Lifetime | No longer than the diagnostic task and upstream authority |
| Purpose | Named diagnostic subtask under INC-20481 |
| Further exchange | Prohibited unless separately approved and evidenced |

## Judgment

| Dimension | Finding |
|---|---|
| Audience | Must narrow from platform/incident context to log API |
| Scope | Must narrow to log query; broker must not add permissions |
| Resources | Must narrow to named log sources, fields, service, and time |
| Environment | Corporate only; no protected OT |
| Lifetime | Same or shorter |
| Delegation depth | One approved downstream agent; no open redelegation |
| Actor traceability | Original human/system authority, ORION, diagnostic agent, and broker must remain correlatable |

This should be modeled as delegation if DIAG-AGENT-02 acts as a downstream actor on the originating authority. If the exchange causes the diagnostic service to appear as the subject without preserving the actor chain, the design risks indistinguishable impersonation. Qualified architects must demonstrate the actual semantics.

# 10. Model bounded delegation

> The authorized incident commander delegates to ORION-OPS-17 the investigation of degraded service APP-SVC-04 under INC-20481. ORION may delegate the named log-analysis subtask to DIAG-AGENT-02 through the approved diagnostic workload and client, for the restricted-log API only, limited to approved fields, sources, and the incident time window in the corporate environment. DIAG-AGENT-02 may not retrieve unrelated or protected-OT logs, execute commands, retain data beyond the case, or exchange the token further. The transaction must preserve the commander, ORION, diagnostic actor, incident purpose, policy decision, and correlation record. Authority ends when the subtask returns, the incident closes, time expires, or any participant is suspended. Suspension by incident command, security operations, or the agent owner requires prevention of new issuance, containment of active and refresh authority, cancellation of queued work, and confirmation of downstream termination.

# 11. Suspension model

| Object/activity | Containment | Owner | Evidence |
|---|---|---|---|
| New ORION work | Disable execution eligibility | Agent/platform owner | Denied new job test |
| New tokens | Deny issuance and exchange | Authorization/broker owner | Policy decision logs |
| Access tokens | Revoke where supported, otherwise block and expire | IAM/API owners | Revocation/denial/expiry evidence |
| Refresh tokens | Revoke or invalidate | Authorization owner | Failed refresh test |
| Exchanged tokens | Propagate containment to downstream issuer/resources | Broker/log owner | Denied downstream call |
| Queued diagnostic jobs | Cancel and prevent retry | Platform owner | Queue state and cancellation |
| Remediation calls | Cancel unexecuted work; contain partial work | Tool/operations owner | Job and target state |
| Tool credential | Prevent use for suspended transaction | Tool/PAM owner | Access denial or policy block |
| Open approvals | Withdraw or mark invalid | Workflow owner | Approval-state record |
| Evidence | Preserve with access and integrity controls | Records/security owner | Case evidence manifest |
| Fallback | Use validated manual procedure | Operations owner | Continuity activation record |

Disabling ORION’s prompt interface alone is not suspension.

# 12. Corporate IT versus protected OT

| Dimension | Corporate IT pilot | Protected OT |
|---|---|---|
| Purpose | Restore APP-SVC-04 | No authorized purpose demonstrated |
| Issuer/client | Enterprise corporate trust relationship | Separate qualified design required |
| Audience | Corporate incident, log, tool, and target resources | Distinct OT resources and trust domain |
| Scope | One corporate incident/service | No inherited corporate scope |
| Approver | Authorized corporate incident role | OT, safety, security, change, and operational authority |
| Workload | Approved corporate runtime | Separately approved and isolated runtime/path |
| Recovery | Tested corporate failover/rollback | OT-specific safety and continuity evidence |
| Recommendation | Narrow pilot after proof | Defer; block current path |

Technical token acceptance by an OT-facing service proves only that a trust or configuration path exists. It does not prove a valid OT business purpose, safety decision, authorized approver, recovery plan, or accepted residual risk.

# 13. Model recommendation

## Corporate production

**Decision:** Pilot within narrower boundaries.

### Principal findings

1. OIDC authentication of the commander and OAuth token presence do not establish distinguishable ORION or downstream-agent attribution.
2. Shared clients, broad audiences, possible scope addition during exchange, and the broad remediation credential can expand authority beyond INC-20481 and APP-SVC-04.
3. Eight-hour refresh, incomplete suspension, and disconnected evidence allow authority or activity to survive the task.

### Next-gate evidence

| Proof | Accountable provider | Acceptance evidence |
|---|---|---|
| End-to-end identity and actor correlation | IAM, platform, application, broker owners | Test trace distinguishes human, ORION, workload, client, diagnostic agent, tool, target |
| Narrow audiences, scopes, targets, and exchange | Authorization, API, security architects | Positive and negative tests demonstrate no scope/audience/OT expansion |
| Task-bound lifetime and suspension | IAM, platform, security operations | Revocation/expiry/queue-containment tabletop and test results |
| Consequence evidence and fallback | Operations and application owner | Before/after state, partial-failure handling, rollback, manual fallback |

## Protected OT

**Decision:** Defer and prevent access under the current design. A separately authorized and isolated OT use case is required.

# 14. Review rubric

Score each dimension from 0 to 2.

| Dimension | 0 — Missing | 1 — Partial | 2 — Demonstrated |
|---|---|---|---|
| OAuth/OIDC distinction | Treats as interchangeable | Partial distinction | Correct purpose and receiver distinction |
| Identity separation | Treats session/client as agent | Names some identities | Separates human, agent, workload, client, tool |
| Token classification | Calls all tokens credentials | Partial classification | Distinguishes ID, access, refresh, downstream credential |
| Audience/resource | Ignores audience | Names targets | Tests acceptance and cross-environment limits |
| Scope/entitlement | Accepts labels | Notes coarseness | Maps labels to exact operations/resources/prohibitions |
| Lifetime/refresh | Notes expiry only | Questions duration | Ties access and refresh to task/delegation |
| Sender constraint | Assumes it solves authorization | Understands replay | States replay value and governance limits |
| Token exchange | Accepts broker result | Notes chain risk | Tests subject, actor, scope, audience, lifetime, depth |
| Delegation | No originating authority | Names delegator | Preserves and narrows purpose across hops |
| Evidence | Lists logs | Some correlation | Reconstructs full authority-to-consequence chain |
| Suspension | Stops agent UI | Includes tokens | Contains tokens, refresh, exchange, queues, tools |
| IT/OT separation | Common path accepted | Higher risk noted | Separate authority, trust, approval, and decision |
| Positioning | Claims implementation | Mostly leadership | Requires proof without prescribing configuration |

**Suggested threshold:** 21 of 26, with no zero in identity separation, token exchange, delegation, suspension, or IT/OT separation.

The rubric is a learning aid, not certification.

# 15. Defense questions

A learner should answer without reading:

1. Why is OIDC not the agent’s authorization model?
2. Which identity does the target actually record?
3. Which clients obtain tokens at each hop?
4. What could a broad audience expose?
5. How can a narrow scope name hide broad entitlement?
6. What continues when a refresh token survives the task?
7. What does sender constraint prevent?
8. What does it fail to prove?
9. Does token exchange narrow, preserve, or expand each dimension?
10. Is the downstream action delegation or impersonation?
11. How is the original incident authority preserved?
12. What stops every downstream action on suspension?
13. Why does OT require a separate decision?
14. What proof would change the recommendation?

# 16. Completion boundary

Module 3 content may be accepted publicly while learner progress remains incomplete.

A learner demonstrates completion only after producing an original chain map, identifying expansion points, writing a bounded delegation, analyzing suspension, and defending the recommendation.

Completion supports this statement:

> I can lead a program-level review of OAuth, OIDC, token, workload, and delegated-agent boundaries and require evidence that authority remained bounded through the final consequence.

It does not support claims of protocol implementation, authorization-server configuration, cryptographic design, or production architecture.

# Source basis

This guide applies the primary specifications listed in Module 3 and the Source Register:

- RFC 6749 and RFC 9700.
- OpenID Connect Core 1.0.
- RFC 8707 resource indicators.
- RFC 8693 token exchange.
- RFC 8705 mutual-TLS-bound tokens.
- RFC 9449 DPoP.
- SPIFFE ID specification.

The ORION scenario, authority-narrowing rule, chain map, recommendation, and rubric are original educational constructs.

---

Created by Michael Kaplan. Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
