# Module 3 Participant Workbook — Agent Token and Delegation Chain

**Module ID:** P1-M03  
**Estimated working time:** 75–105 minutes  
**Required prerequisite:** Module 3 lesson  
**Learner output:** Agent token-and-delegation chain map  
**Content status:** Accepted for public learning use

## Purpose

This workbook tests whether a learner can trace an acting agent across identity, OAuth, OIDC, token, workload, tool, and target boundaries without treating a valid token as complete business authority.

Complete the workbook before opening the model answer.

## Scenario — ORION multi-hop incident response

A regulated enterprise proposes the following design:

1. An incident commander signs in to the operations portal using OpenID Connect.
2. The portal starts ORION-OPS-17 to investigate incident INC-20481 affecting APP-SVC-04.
3. ORION uses the portal’s registered OAuth client to obtain an access token for the incident API.
4. ORION invokes diagnostic agent DIAG-AGENT-02.
5. A token broker exchanges the incident token for a token accepted by the restricted-log API.
6. DIAG-AGENT-02 retrieves logs and recommends restarting APP-SVC-04.
7. ORION requests human approval.
8. After approval, ORION obtains a token for a remediation-tool API.
9. The remediation tool uses its own service identity to restart APP-SVC-04.
10. Monitoring reports recovery, and ORION closes the incident.

The proposed design also has these characteristics:

- The OIDC-authenticated commander and ORION are represented by the same portal session.
- All ORION instances share one OAuth client registration.
- The incident token is accepted by several platform APIs.
- The token broker may retain or add scopes during exchange.
- The log API records only a shared diagnostic-service identity.
- Access tokens last one hour; refresh tokens last eight hours.
- The remediation tool’s service identity can restart any corporate production service.
- The orchestration platform can reach protected-OT support systems.
- Suspending ORION stops new prompts but does not cancel issued tokens, queued jobs, or downstream tool activity.
- Logs exist in every system, but no common transaction identifier has been demonstrated.

The design team states:

> “The user authenticated through OIDC, and every API call has an OAuth token, so the delegation chain is secure.”

## Working boundaries

- Do not design or configure an OAuth flow.
- Do not assume a token is a JWT or that every claim is visible to every party.
- Distinguish stated facts from required proof.
- Treat corporate IT and protected OT as separate authorization domains.
- Route protocol and cryptographic conclusions to qualified architects and engineers.
- Evaluate the final enterprise consequence, not merely token validity.

# Part 1 — Classify the protocols

For each use, identify whether it is primarily OAuth, OIDC, both, or neither.

| Scenario element | Classification | Purpose | What it does not prove |
|---|---|---|---|
| Commander signs in to portal |  |  |  |
| Portal requests access to incident API |  |  |  |
| ORION calls diagnostic agent |  |  |  |
| Broker exchanges a token |  |  |  |
| Tool restarts APP-SVC-04 |  |  |  |
| Monitoring confirms recovery |  |  |  |

## Protocol conclusion

Explain why “OIDC plus OAuth” is not a sufficient governance conclusion.

> 

# Part 2 — Identify every actor and identity

| Object | Named instance in the scenario | Accountable owner | Identity or registration required | Principal risk |
|---|---|---|---|---|
| Human |  |  |  |  |
| Portal client |  |  |  |  |
| Primary agent |  |  |  |  |
| Primary workload |  |  |  |  |
| Diagnostic agent |  |  |  |  |
| Diagnostic workload/client |  |  |  |  |
| Token broker |  |  |  |  |
| Remediation tool |  |  |  |  |
| Tool service identity |  |  |  |  |
| Incident API |  |  |  |  |
| Log API |  |  |  |  |
| APP-SVC-04 |  |  |  |  |

## Separation finding

Which objects are currently collapsed behind the human session, shared OAuth client, shared diagnostic identity, or remediation service identity?

> 

# Part 3 — Classify token objects

| Token or credential | Type | Intended recipient | Subject/actor question | Authority represented | Lifetime concern | Misuse risk |
|---|---|---|---|---|---|---|
| OIDC ID token |  |  |  |  |  |  |
| Incident API access token |  |  |  |  |  |  |
| Incident refresh token |  |  |  |  |  |  |
| Exchanged log API token |  |  |  |  |  |  |
| Remediation-tool access token |  |  |  |  |  |  |
| Tool service credential |  |  |  |  |  |  |

## ID-token test

Who is the intended audience of the ID token? Why should it not be presented to the incident, log, or remediation APIs as general authorization?

> 

# Part 4 — Build the end-to-end chain

Complete every hop.

| Hop | Initiator | Agent | Workload/client | Issuer or credential authority | Subject/actor | Audience/resource | Scope/entitlement | Lifetime | Business authority | Target consequence | Evidence |
|---:|---|---|---|---|---|---|---|---|---|---|---|
| 1 — Sign-in |  |  |  |  |  |  |  |  |  |  |  |
| 2 — Incident read |  |  |  |  |  |  |  |  |  |  |  |
| 3 — Diagnostic delegation |  |  |  |  |  |  |  |  |  |  |  |
| 4 — Token exchange |  |  |  |  |  |  |  |  |  |  |  |
| 5 — Log retrieval |  |  |  |  |  |  |  |  |  |  |  |
| 6 — Remediation approval |  |  |  |  |  |  |  |  |  |  |  |
| 7 — Tool invocation |  |  |  |  |  |  |  |  |  |  |  |
| 8 — Target restart |  |  |  |  |  |  |  |  |  |  |  |
| 9 — Recovery and closure |  |  |  |  |  |  |  |  |  |  |  |

# Part 5 — Challenge audience and resource boundaries

| Token | Intended audience | Other services that may accept it | Required audience restriction | Corporate/OT concern |
|---|---|---|---|---|
| Incident token |  |  |  |  |
| Exchanged log token |  |  |  |  |
| Remediation-tool token |  |  |  |  |
| Tool service credential |  |  |  |  |

Answer:

1. Where can a token wander to an unintended resource?
2. Which target must validate the audience?
3. Where should corporate IT and protected OT become separate authorization domains?
4. Would a narrow audience alone make the token safe? Why or why not?

# Part 6 — Challenge scopes and downstream entitlements

For each permission label, state what the target must prove.

| Label | Operations that must be clarified | Resource-instance limit | Environment limit | Prohibited operations |
|---|---|---|---|---|
| `incident.read` |  |  |  |  |
| `logs.read` |  |  |  |  |
| `remediation.execute` |  |  |  |  |
| Tool service “restart” entitlement |  |  |  |  |

## Coarse-scope finding

Identify one scope that sounds narrow but could map to excessive target authority.

> 

# Part 7 — Evaluate lifetime and refresh

| Authority object | Proposed lifetime | Appropriate task boundary | Termination trigger | Required reevaluation |
|---|---|---|---|---|
| Human portal session |  |  |  |  |
| Incident access token | One hour |  |  |  |
| Refresh token | Eight hours |  |  |  |
| Exchanged log token |  |  |  |  |
| Remediation token |  |  |  |  |
| Tool service credential |  |  |  |  |

Answer:

1. Which authority can outlive the incident or approval?
2. Should refresh be permitted for the privileged remediation action?
3. What happens if the incident is closed early?
4. What happens if the human, ORION, or the workload is suspended?
5. Which controls must address queued work as well as token expiry?

# Part 8 — Evaluate bearer and sender constraint

For each token, record the question qualified architects must answer.

| Token | Bearer or sender-constrained? | Bound to what presenter? | Replay risk | Governance limitation that still remains |
|---|---|---|---|---|
| Incident token |  |  |  |  |
| Exchanged log token |  |  |  |  |
| Remediation token |  |  |  |  |

Explain why sender constraint would not make poisoned context or excessive authority safe.

> 

# Part 9 — Analyze token exchange

## Incoming token

| Element | Finding |
|---|---|
| Issuer |  |
| Subject |  |
| Actor/client |  |
| Audience |  |
| Scope |  |
| Lifetime |  |
| Delegating purpose |  |

## Exchanged token

| Element | Required result |
|---|---|
| Issuer |  |
| Subject |  |
| Actor/client |  |
| Audience |  |
| Scope |  |
| Lifetime |  |
| Delegating purpose |  |
| Further exchange permitted? |  |

## Exchange judgment

Classify each dimension:

| Dimension | Narrows | Remains bounded | Expands | Not demonstrated |
|---|:---:|:---:|:---:|:---:|
| Audience |  |  |  |  |
| Scope |  |  |  |  |
| Resource instances |  |  |  |  |
| Environment |  |  |  |  |
| Lifetime |  |  |  |  |
| Delegation depth |  |  |  |  |
| Actor traceability |  |  |  |  |

State whether the exchange is delegation or impersonation and what evidence supports the conclusion.

> 

# Part 10 — Write a bounded delegation statement

Complete this model:

> “[Delegating principal] authorizes [primary agent] to [purpose]. The primary agent may delegate [named subtask] to [downstream agent] using [approved client/workload relationship] for [named audience/resource], limited to [operations, resources, environment, and time]. The downstream agent may not [prohibitions], may/may not exchange the token further, and must preserve [actor, purpose, policy, and correlation evidence]. Authority ends when [event], and suspension by [role] requires [containment actions].”

**Your statement:**

> 

# Part 11 — Define suspension behavior

When ORION is suspended, what must happen?

| Object or activity | Required containment | Responsible owner | Confirmation evidence |
|---|---|---|---|
| New ORION executions |  |  |  |
| New token issuance |  |  |  |
| Existing access tokens |  |  |  |
| Refresh tokens |  |  |  |
| Exchanged downstream tokens |  |  |  |
| Queued diagnostic jobs |  |  |  |
| Queued remediation calls |  |  |  |
| Tool service credential use |  |  |  |
| Open human approvals |  |  |  |
| Evidence and logs |  |  |  |
| Manual operational fallback |  |  |  |

# Part 12 — Separate corporate IT and protected OT

| Decision dimension | Corporate IT pilot | Protected OT |
|---|---|---|
| Authorized purpose |  |  |
| Accepted issuer/client relationship |  |  |
| Audience/resource boundary |  |  |
| Scope and entitlement |  |  |
| Approver |  |  |
| Workload/trust domain |  |  |
| Recovery and fallback |  |  |
| Current recommendation |  |  |

Explain why a token technically accepted by an OT-facing service does not establish authorized OT use.

> 

# Part 13 — Make the recommendation

Select one for the corporate production chain:

- [ ] Approve.
- [ ] Approve with conditions.
- [ ] Pilot within narrower boundaries.
- [ ] Defer pending evidence.
- [ ] Reject.

**Recommendation:**

> 

## Three principal findings

1. 
2. 
3. 

## Evidence required at the next gate

| Required proof | Accountable provider | Acceptance evidence |
|---|---|---|
| 1 |  |  |
| 2 |  |  |
| 3 |  |  |
| 4 |  |  |

## Protected-OT decision

> 

# Part 14 — Five-minute defense

Answer without reading the model guide.

1. What did OIDC establish?
2. What did it not establish about ORION?
3. Which components are OAuth clients?
4. Why might one shared client be insufficient for attribution?
5. Which token is intended for which receiver?
6. Where can audience or scope be broader than the task?
7. Where can refresh outlive the delegation?
8. Does sender constraint solve agent-governance risk?
9. How can token exchange widen authority?
10. What record proves the final restart remained within the original authority?
11. What must happen during suspension?
12. Why is protected OT a separate decision?

## Completion declaration

- [ ] I completed this workbook before reading the model answer.
- [ ] I can distinguish OAuth, OIDC, access tokens, ID tokens, and refresh tokens.
- [ ] I can trace the agent, workload, client, token, tool, and target separately.
- [ ] I identified where authority can expand or attribution can disappear.
- [ ] I can defend my recommendation and name evidence that would change it.
- [ ] I did not claim implementation experience from completing this exercise.

**Learner:**  
**Date:**  
**Defense completed with:**  
**Revisions required:**  

---

This workbook is educational and illustrative. It is not production architecture, protocol configuration, legal advice, or a compliance determination.

Created by Michael Kaplan. Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
