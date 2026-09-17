# Module 3 — OAuth, OIDC, Tokens, and Delegation

**Module ID:** P1-M03  
**Learning priority:** AI-agent identity, security, and governance  
**Estimated time:** 120–150 minutes  
**Required output:** Agent token-and-delegation chain map  
**Professional level:** Executive and program leadership  
**Content status:** Accepted for public learning use

## Why this module matters

An enterprise agent rarely acts through one system. It may begin with a human request, run in an orchestration platform, obtain a token, call a tool, exchange that token for another audience, invoke a specialist agent, and finally reach a target API.

Every transition can change what the receiving system knows about:

- The human or system that initiated the work.
- The agent that selected the action.
- The workload that presented the credential.
- The client that requested the token.
- The resource for which the token was intended.
- The operations represented by scopes or entitlements.
- The authority that justified the transaction.
- The evidence needed to reconstruct the chain.

The presence of OAuth, OpenID Connect, or a valid token does not answer all of those questions. Protocols carry specific meanings. Governance failures occur when teams assign them meanings they do not carry.

The program leader does not need to configure an authorization server. The program leader must be able to recognize the parties, expose where authority widens or attribution disappears, and require qualified owners to prove that each transition is bounded, evidenced, and revocable.

## Learning outcomes

After completing this module, a learner should be able to:

1. Explain OAuth and OpenID Connect in plain executive language without treating them as interchangeable.
2. Distinguish an access token, ID token, refresh token, client identity, workload identity, and agent identity.
3. Identify the issuer, subject, client, audience, scope, resource server, delegating principal, and target consequence in a transaction.
4. Explain why a valid token is necessary evidence but not a complete business-authorization record.
5. Challenge tokens with broad audiences, coarse scopes, excessive lifetime, weak holder binding, or unclear delegation.
6. Trace human-on-behalf-of, client-on-its-own-behalf, token-exchange, and agent-to-agent chains.
7. Require authority to narrow or remain bounded across delegation.
8. Define the minimum evidence needed to reconstruct a multi-hop agent transaction.
9. Lead the review without claiming protocol-design or implementation expertise.

# 1. Begin with the four OAuth roles

OAuth 2.0 defines an authorization framework for limited access to HTTP services. Its original abstract model uses four roles.

| OAuth role | Plain-language meaning | Agent-governance question |
|---|---|---|
| Resource owner | Entity capable of granting access to a protected resource | Who possesses the authority being exercised? |
| Client | Application requesting access | Is the client the agent, its platform, its tool broker, or another service? |
| Authorization server | Service issuing access tokens after evaluating the grant and client | Which policy and evidence caused the token to be issued? |
| Resource server | Service hosting protected resources and accepting access tokens | What target operation does this system actually enforce? |

In an agent design, one product name may hide several roles. The orchestration platform may act as a client. The human may be the resource owner for one data set but not possess authority over another. A tool broker may be both a resource server for the agent and a client to a downstream API.

The design review must map roles per transaction, not per vendor.

## OAuth is not the business process

OAuth can support limited and delegated access. It does not define:

- The enterprise’s business purpose.
- Which organizational role may delegate the action.
- Whether an incident or change record is valid.
- Whether the human approval was informed.
- Whether an agent may act autonomously.
- Whether protected OT may be reached.
- Whether the resulting business consequence is acceptable.

OAuth is part of the enforcement and evidence chain. It is not the entire authority model.

# 2. OAuth and OpenID Connect are not interchangeable

## OAuth

OAuth is principally about authorization: enabling a client to obtain limited access to a protected resource, either on behalf of a resource owner or on its own behalf.

An access token represents access attributes such as scope, lifetime, audience, or other conditions as defined by the issuer and resource server.

## OpenID Connect

OpenID Connect is an identity layer built on OAuth 2.0. It enables a client to verify information about an end user’s authentication and obtain claims about that end user.

The central artifact is an ID token. An ID token is intended for the client that requested authentication. It is not a general-purpose access token for arbitrary APIs.

## Executive distinction

| Question | OAuth access token | OpenID Connect ID token |
|---|---|---|
| Primary purpose | Access to a protected resource | Information about end-user authentication and identity claims |
| Intended receiver | Resource server identified by the applicable audience/resource model | Client identified as the ID-token audience |
| Governing question | May this client call this resource under these token conditions? | What does the client know about the authenticated end user? |
| Common misuse | Treating token possession as unlimited business authority | Presenting an ID token to an API as though it were an access token |

A design can use both. That does not merge their meanings.

## Agent-specific caution

OIDC’s end-user authentication model does not automatically establish the identity of an AI agent, its workload, or each downstream action. If a human signs in and an agent later acts, the design must preserve the distinction between:

- The authenticated human.
- The client application.
- The registered agent.
- The executing workload.
- The credential or token.
- The downstream target.

# 3. Distinguish the token and identity objects

| Object | What it may represent | What it does not prove by itself |
|---|---|---|
| Access token | Permission for a client to access a resource under issuer-defined attributes | Business purpose, informed approval, safe context, acceptable consequence |
| ID token | Claims about an authenticated end user for the intended client | Permission to call an API or identity of a downstream agent |
| Refresh token | Credential used to obtain new access tokens | Continued business need or unchanged delegation |
| Client identifier | Registered client relationship | Runtime integrity, human identity, or transaction approval |
| Client credential | Means by which a client authenticates to an authorization server | That every client action is within business authority |
| Workload identity | Identity of software running in an environment or trust domain | Which agent goal or human delegation is being exercised |
| Agent identity | Governed identity of the acting capability | That the current workload, token, purpose, or transaction is authorized |

A single implementation may combine several of these objects. Governance must keep their meanings separate.

# 4. On behalf of a human versus on its own behalf

OAuth accommodates different authority patterns.

## Human-delegated pattern

A human authorizes a client to access a protected resource. For an agent, the critical questions are:

- Which human authenticated?
- Did that human possess authority for the requested resource and action?
- What exactly was delegated?
- Does the target receive or correlate the human and agent identities?
- May the agent act later when the human is no longer present?
- What ends the delegation?

A human’s authenticated session should not become a standing blank check for an agent.

## Client acting on its own behalf

A service or confidential client may obtain access on its own behalf. In this pattern, do not invent a human delegator when none exists.

Ask instead:

- Which organization or owner authorized the client’s purpose?
- Which registered agent or workload is using the client relationship?
- What resources and operations are allowed?
- Is there a current work item or policy trigger?
- How is the transaction tied to accountable business authority?
- Can the client credential be used by other workloads?

## Mixed pattern

An agent may begin with a human request and then use a service identity downstream. This can be legitimate, but the authority chain must not vanish at the transition.

The target may record only the service client. The evidence architecture must still correlate:

> human request → agent → workload → client → token → tool → target → consequence

# 5. Read a token decision as a bounded statement

A program leader does not need to decode tokens in production. The leader must require qualified owners to explain the material attributes and enforcement.

## Minimum token questions

| Attribute or relationship | Governing question |
|---|---|
| Issuer | Which authority issued the token, under which trust relationship? |
| Subject | Which principal does the token identify or concern? |
| Client | Which registered client obtained and is using the token? |
| Audience/resource | Which resource server is intended to accept it? |
| Scope or entitlement | Which operations or access categories are represented? |
| Issued and expiry time | How long can it be used? |
| Token type | Is it bearer or sender-constrained? |
| Delegation context | On whose behalf, or under which service authority, is it used? |
| Confirmation/binding | Must the presenter prove possession of a key? |
| Policy and transaction reference | Which decision and business record justify this use? |
| Correlation | How will this token use connect to the agent, tool call, and outcome? |

Not every token format carries every fact. Some facts may remain in an authorization or transaction record. The governing requirement is that they remain reliable and correlatable.

# 6. Scope is not the complete authority boundary

OAuth scopes are strings defined by the authorization server and resource server. Their meaning is local to that trust relationship.

A scope such as:

- `read`
- `write`
- `admin`
- `incident.response`

does not have a universal meaning.

## Scope questions

- Which API operations does the scope permit?
- Which records, assets, or resource instances are affected?
- Does the scope apply across environments?
- Can one scope reach both corporate IT and protected OT?
- Does “write” include delete, approve, close, publish, or execute?
- Does the resource server enforce the intended interpretation?
- Can additional transaction conditions narrow the scope?
- Is the scope granted to the client, to the subject, or to both under local policy?

## The coarse-scope trap

A platform may request `incident.response`, while the downstream API maps that scope to broad administrative operations. The label sounds bounded; the target permission is not.

A defensible boundary combines:

- Subject or client.
- Action.
- Resource.
- Audience.
- Environment.
- Purpose.
- Time.
- Transaction limits.
- Approval conditions.
- Prohibitions.
- Evidence.

Scope may contribute to that boundary. It rarely expresses the whole boundary alone.

# 7. Audience and resource prevent token wandering

The audience identifies the service or services for which a token is intended. OAuth resource indicators can allow a client to identify the target protected resource when requesting authorization.

The governance principle is:

> A token intended for one resource should not become a reusable credential for unrelated resources.

Ask:

- Is the token audience one named resource server or a broad platform?
- Will every target validate that it is the intended audience?
- Can an agent present the same token to multiple tools or environments?
- Does a broker exchange a broad token for narrower downstream tokens?
- Can a test token be accepted in production?
- Is protected OT a distinct audience and authorization domain?

A narrow audience does not prove narrow operations, but it reduces where the token can travel.

# 8. Lifetime, refresh, and continuing authority

Short-lived access tokens reduce the period in which a stolen or misused token can be replayed. They do not eliminate risk within that period.

Refresh tokens can extend access by enabling new access tokens to be obtained. For acting agents, the refresh path deserves explicit governance.

## Review questions

- Is the token lifetime proportional to the task?
- Does the token survive the incident, approval, session, or agent job?
- Can a refresh token outlive the business delegation?
- What happens when the agent owner, human delegator, workload, or use case is suspended?
- Is refresh permitted for privileged actions?
- Does a new access token require reevaluation of current policy and delegation?
- Are queued actions allowed to obtain new tokens after suspension?
- What evidence connects refreshed authority to the original and current decision?

A ten-minute token is not task-bound if the task should have ended after one transaction. A one-transaction design may require both time and use constraints.

# 9. Bearer and sender-constrained tokens

## Bearer token

A bearer token can generally be used by whoever possesses it. Theft or unintended disclosure can therefore enable replay until the token expires or is otherwise rejected.

## Sender-constrained token

A sender-constrained token requires the presenter to demonstrate possession of associated key material. Standards such as mutual-TLS certificate-bound tokens and DPoP provide mechanisms for this category.

At the governance level, sender constraint answers:

> Can a stolen token be used by a different presenter that lacks the required key?

It does not answer:

- Whether the intended workload is trustworthy.
- Whether the agent selected an authorized action.
- Whether the scope and audience are appropriate.
- Whether the delegation remains valid.
- Whether poisoned context caused a harmful but technically authorized request.
- Whether the consequence is acceptable.

Sender constraint is a credential-use control, not a substitute for business authority.

# 10. Workload identity and token presentation

A workload identity identifies software running in an environment or trust domain. SPIFFE, for example, specifies a URI-form identity called a SPIFFE ID for a workload or a group of workloads.

A workload identity can help establish that the expected software environment is presenting a credential. It does not automatically identify:

- The governed agent capability.
- The human or system that originated the task.
- The business purpose.
- The delegated authority.
- The specific action or consequence.

## Required mapping

For a privileged agent, require a documented relationship among:

| Object | Example |
|---|---|
| Agent registration | ORION-OPS-17 |
| Agent owner | Enterprise operations |
| Workload identity | Approved ORION runtime in production trust domain |
| OAuth client | Registered orchestration client |
| Token issuer | Enterprise authorization server |
| Token audience | Tool broker or named target API |
| Tool | Service-remediation operation |
| Target | APP-SVC-04 |
| Delegating record | INC-20481 and authorized incident role |
| Correlation | One transaction identifier |

Do not accept “the pod has an identity” as proof that the entire agent transaction is governed.

# 11. Token exchange and delegation chains

OAuth token exchange defines a way for a client to request and obtain a security token using another security token, including delegation and impersonation semantics.

The program-level issue is not merely whether exchange is supported. It is what changes across the exchange.

## For every exchange, identify

- Incoming token issuer, subject, client, audience, scope, and lifetime.
- Actor requesting the exchange.
- Downstream audience.
- Downstream subject and actor representation.
- Scopes or permissions removed, retained, or added.
- Maximum delegation depth.
- Whether the downstream token may be exchanged again.
- Whether the original delegating principal and purpose remain traceable.
- Whether the exchange is delegation or impersonation.
- Which policy decision authorized the exchange.
- How revocation or suspension propagates.
- What evidence connects both tokens to one transaction.

## Delegation versus impersonation

In broad terms:

- **Delegation** preserves that one actor is acting on behalf of another.
- **Impersonation** represents the acting party as the subject for the relevant context.

The exact protocol representation belongs to qualified architects. The governance requirement is that the enterprise knows which model it is using and does not silently turn delegation into indistinguishable impersonation.

## The narrowing rule

> Authority should narrow or remain explicitly bounded as it moves downstream. It should not expand merely because a new agent, broker, client, or token joins the chain.

If Agent A may read one incident record, an exchange should not produce a token that lets Agent B administer the incident platform. If a corporate token reaches a broker, the broker should not mint authority for protected OT unless a separately governed decision permits it.

# 12. Common failure patterns

## Failure 1 — ID token used as an API credential

The client treats an ID token as permission to call a protected API.

**Failure:** Authentication information for the client is confused with authorization at the resource server.

## Failure 2 — Human token becomes agent identity

The agent reuses the human’s access token.

**Failure:** The target records the human; agent attribution and independent revocation weaken.

## Failure 3 — Shared client across agents

Several agents use one OAuth client and credential.

**Failure:** Client-level evidence cannot distinguish which agent acted, and the broadest use case drives permissions.

## Failure 4 — Broad audience

One token is accepted by many resource servers.

**Failure:** Compromise and misuse can travel across tools, systems, or environments.

## Failure 5 — Coarse scope with broad target entitlement

The scope appears narrow, but the resource server maps it to broad privileges.

**Failure:** The label creates false confidence while enforcement remains excessive.

## Failure 6 — Refresh outlives delegation

The agent can refresh access after the human session, incident, or approval ends.

**Failure:** Technical authority continues after business authority expires.

## Failure 7 — Token exchange expands authority

A broker exchanges a limited upstream token for a broader downstream token.

**Failure:** Delegation silently widens.

## Failure 8 — Actor disappears in exchange

The downstream token identifies only a service subject.

**Failure:** The original human, agent, or client cannot be reconstructed.

## Failure 9 — Token is sender-constrained to the wrong boundary

A token is bound to a platform client used by many agent instances.

**Failure:** Replay protection improves, but individual-agent attribution remains absent.

## Failure 10 — Valid token, poisoned decision

The token, scope, audience, and signature are valid, but the agent’s context was manipulated.

**Failure:** Credential validity is mistaken for decision integrity.

# 13. Applied case — ORION calls a specialist and a tool

## Scenario

A human incident commander authorizes ORION-OPS-17 to investigate degraded service APP-SVC-04.

The proposed chain is:

1. The commander signs in using OIDC.
2. The ORION platform receives the human identity information.
3. ORION obtains an access token for the incident API.
4. ORION invokes DIAG-AGENT-02 to analyze restricted logs.
5. A token broker exchanges ORION’s token for a token accepted by the log API.
6. DIAG-AGENT-02 recommends a restart.
7. ORION obtains a token for the remediation tool.
8. The remediation tool uses its own service credential against APP-SVC-04.
9. The incident is closed after monitoring reports recovery.

## Weak design

- The OIDC-authenticated human identity is treated as ORION’s identity.
- The same client registration serves every ORION instance.
- The incident token has a platform-wide audience.
- The broker may add scopes during exchange.
- The log token records only the shared diagnostic service.
- The remediation tool does not receive the incident, delegator, or agent context.
- The tool’s service credential can restart any production service.
- Refresh remains available for eight hours.
- Suspending ORION does not cancel exchanged tokens or queued calls.
- Each system logs locally, but transaction correlation is not demonstrated.

## Program-level conclusion

Do not approve the chain as designed. A bounded pilot could proceed only after qualified owners demonstrate:

- Distinguishable agent and workload identities.
- Separate and appropriate clients or reliable per-agent attribution.
- Audience-restricted tokens for each resource.
- Scopes and target entitlements aligned to one task.
- No authority expansion during exchange.
- Preserved subject, actor, delegator, and purpose correlation.
- Short lifetime and refresh rules tied to the incident and job.
- Meaningful approval before remediation.
- Independent containment of tokens, jobs, and downstream activity.
- End-to-end evidence of the actual consequence.

# 14. Agent token-and-delegation map

Use this structure for each hop.

| Hop | Initiator | Agent | Workload/client | Token issuer | Subject/actor | Audience/resource | Scope/entitlement | Lifetime | Business authority | Target consequence | Evidence |
|---:|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Human commander | ORION | ORION platform | Enterprise issuer | Human plus agent correlation | Incident API | Read named incident | Task-bound | Active incident role | Read incident | Authentication and request |
| 2 | ORION | DIAG agent | Diagnostic workload/client | Enterprise issuer or broker | Delegated actor chain | Log API | Read bounded log subset | Short | Named diagnostic subtask | Retrieve restricted logs | Exchange and query |
| 3 | ORION | ORION | Remediation workload/client | Enterprise issuer | Agent/workload with delegator | Remediation tool | Request one restart | Approval window | Approved remediation task | Invoke tool | Policy and approval |
| 4 | Remediation tool | ORION remains correlatable | Tool service identity | Downstream authority | Tool actor plus originating chain | APP-SVC-04 | One restart | One transaction | Same approved task | Change service state | Target and outcome |

This table is illustrative. The participant workbook requires the learner to build and challenge the map rather than copy it.

# 15. Executive design-review questions

1. Is this OAuth, OIDC, or both, and what purpose does each serve?
2. Which human or system is the resource owner for this action?
3. Which component is the OAuth client at each hop?
4. Is the client the same thing as the agent? If not, how are they correlated?
5. Which workload presents the token?
6. Is the agent acting on behalf of a human or on its own behalf?
7. Which audience is intended to accept the token?
8. Can any other service accept it?
9. What operations do the scopes actually permit at the target?
10. Which resource instances and environments remain reachable?
11. How long can the token and any refresh authority survive?
12. Is the token bearer or sender-constrained?
13. If constrained, to which client or workload boundary?
14. Does token exchange preserve the original subject, actor, delegator, and purpose?
15. Can exchange add audience, scope, duration, or delegation depth?
16. Can a downstream agent exchange again?
17. What separates corporate IT from protected OT?
18. What happens to tokens, sessions, and queued calls on suspension?
19. Which record connects the token chain to the business authorization?
20. What consequence does the final target record?

# 16. Required exercise

Complete the companion Module 3 participant workbook.

The required artifact must:

1. Map the ORION chain from human request through both agents, clients, issuers, tokens, tools, and target.
2. Distinguish OAuth from OIDC at every relevant point.
3. Classify access, ID, and refresh tokens.
4. Identify audience, scope, lifetime, and holder-binding questions.
5. Show each token exchange and whether authority narrows, remains bounded, or expands.
6. Identify where the original actor or purpose can disappear.
7. State corporate IT and protected-OT boundaries.
8. Define suspension behavior for tokens and downstream work.
9. Recommend approve, constrain, pilot, defer, or reject.
10. Defend the recommendation without prescribing implementation.

# 17. Review observations

A strong response will recognize that:

- OIDC can establish information about the authenticated human for the client; it does not become the agent’s identity.
- OAuth access tokens support access to resources; they do not independently express complete business authority.
- ID tokens and access tokens serve different recipients and purposes.
- The client, agent, and workload may be three different objects.
- Scope meaning depends on issuer and resource-server policy.
- Audience restricts where a token is intended to be accepted, not every operation it permits.
- Short lifetime reduces exposure but must be tied to task and delegation.
- Sender constraint reduces replay by another presenter but does not prove decision integrity.
- Token exchange must preserve traceability and must not silently expand authority.
- A downstream service credential can break the evidence chain even when upstream OAuth is well designed.
- Corporate and protected OT require separate audiences, authority, and approval decisions.
- The program leader should require proof from qualified specialists without selecting protocol configurations.

# 18. Knowledge check

Answer before reading the guide.

1. What problem does OAuth address?
2. What does OpenID Connect add?
3. Why should an ID token not be treated as a general API-access token?
4. What is the difference between an agent identity, workload identity, and OAuth client?
5. Why can a scope named `incident.response` still be excessive?
6. What does a token audience constrain?
7. What risk does a refresh token create for an agent?
8. What does sender constraint protect against, and what does it not prove?
9. What must remain visible across token exchange?
10. What is the governing rule for downstream delegation?

## Answer guide

1. OAuth enables a client to obtain limited access to protected HTTP resources, either on behalf of a resource owner or on its own behalf.
2. OpenID Connect adds an identity layer that lets a client obtain information about an end user’s authentication and claims.
3. An ID token is intended for the client as authentication information. API authorization should use the resource server’s accepted access-token model.
4. The agent is the governed acting capability; the workload is the executing software identity; the OAuth client is the registered application relationship used to request tokens. They may be correlated but are not automatically identical.
5. Scope names are locally defined. The resource server may map a narrow-sounding label to broad operations or resources.
6. Audience constrains which resource server is intended to accept the token. It does not by itself constrain all operations or prove business purpose.
7. It may allow access to continue or be renewed after the original session, task, approval, or delegation should have ended.
8. Sender constraint can reduce use of a stolen token by a different presenter lacking the key. It does not prove that the intended agent action, context, or consequence is authorized.
9. The original subject or authority, each actor, the purpose, audience, scopes, limits, policy decisions, exchanges, and final consequence must remain reliably correlatable.
10. Authority should narrow or remain explicitly bounded; it must not silently expand because another agent, broker, client, tool, or token is introduced.

# 19. Completion evidence

This module is not completed by reading it.

Completion requires:

- An original agent token-and-delegation chain map.
- A completed protocol and token classification.
- At least three authority-expansion findings.
- A bounded downstream delegation statement.
- A suspension analysis.
- A written recommendation.
- A five-minute defense answering:
  - Where can the human or agent disappear?
  - Where can scope, audience, lifetime, or exchange expand authority?
  - Which evidence would change the recommendation?

Store completed learner work under `completed_work/` only after the exercise has been performed and defended. Publication of this module does not update the Progress Record.

# 20. Two-minute executive explanation

> OAuth can help an agent obtain limited access to a protected resource, and OpenID Connect can tell a client about an authenticated human. Neither protocol, by itself, proves that the agent had business authority for a particular consequence. I would trace the human or system request through the registered agent, executing workload, OAuth client, token issuer, audience, scope, exchange, tool, and target. At every hop, I would require authority to narrow or remain bounded, preserve the originating purpose and accountable actor, expire with the task, and remain independently interruptible. My role is to lead that control and evidence discussion across IAM/PAM, architecture, security, operations, application owners, and accountable executives—not to configure the protocol.

# 21. Interview translation

## Credible positioning

> I understand OAuth, OIDC, tokens, and workload identity at the level required to lead an enterprise agent-governance program. I can distinguish authentication from authorization, map a multi-hop delegation chain, challenge scopes, audiences, lifetimes, token exchange, and shared-client risks, and require evidence that the final action remained within business authority.

## Positioning boundary

Do not claim:

- OAuth or OIDC implementation engineering.
- Token-service architecture.
- Cryptographic protocol design.
- SPIFFE or service-mesh implementation.
- Production configuration of authorization servers or resource servers.

The demonstrated claim is program leadership over identity, delegated authority, evidence, and lifecycle controls.

# Primary-source map

| Source | Status checked 2026-09-17 | Use in this module |
|---|---|---|
| [RFC 6749 — OAuth 2.0 Authorization Framework](https://datatracker.ietf.org/doc/html/rfc6749) | Standards Track; updated by later RFCs including RFC 9700 | OAuth roles, limited access, client, resource owner, authorization server, resource server, access and refresh tokens |
| [RFC 9700 — Best Current Practice for OAuth 2.0 Security](https://datatracker.ietf.org/doc/html/rfc9700) | Best Current Practice | Current security posture and the need to read RFC 6749 with later guidance |
| [OpenID Connect Core 1.0 incorporating errata set 2](https://openid.net/specs/openid-connect-core-1_0.html) | Final OpenID specification | Identity layer, end-user authentication, ID-token purpose |
| [RFC 8707 — Resource Indicators for OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc8707) | Standards Track | Target resource and audience restriction concepts |
| [RFC 8693 — OAuth 2.0 Token Exchange](https://datatracker.ietf.org/doc/html/rfc8693) | Standards Track | Delegation, impersonation, actor and subject relationships, downstream exchange |
| [RFC 8705 — OAuth 2.0 Mutual-TLS Client Authentication and Certificate-Bound Access Tokens](https://datatracker.ietf.org/doc/html/rfc8705) | Standards Track | Sender-constrained access-token category using client certificates |
| [RFC 9449 — OAuth 2.0 Demonstrating Proof of Possession](https://datatracker.ietf.org/doc/html/rfc9449) | Standards Track | Sender-constrained access-token category using DPoP |
| [SPIFFE ID specification](https://spiffe.io/docs/latest/spiffe-specs/spiffe-id/) | Current SPIFFE specification | Workload-identity vocabulary and separation from agent/business authority |
| [OAuth 2.1 Authorization Framework](https://datatracker.ietf.org/doc/draft-ietf-oauth-v2-1/) | Active Internet-Draft version 16, updated 2026-09-02; work in progress | Status context only; not treated as a final normative source |

## Source boundary

This module explains recognition-level concepts. It does not choose an OAuth flow, token format, signing method, proof mechanism, lifetime, claim set, or workload-identity implementation. Those decisions require qualified architecture and security analysis.

The authority-narrowing rule, ORION case, governance tables, and executive questions are original learning constructs. They are not represented as requirements from one protocol specification.

---

**Published:** 2026-09-17  
**Version:** 1.0  
**Content status:** Accepted for public learning use  
**Scope:** Executive and program-level learning; not implementation guidance or production architecture.  
**License:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
