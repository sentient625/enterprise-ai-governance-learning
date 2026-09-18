# Terminology

This register supports consistent learning. It is not a substitute for the formal definitions in the underlying standards.

| Term | Working meaning |
|---|---|
| Agent identity | A distinguishable identity assigned to an agent service or instance that may select or take actions. |
| Authentication | Establishing confidence that an asserted identity is valid. |
| Authorization | Determining and enforcing what an identity may do. |
| Delegation | Allowing one principal to exercise bounded authority on behalf of another. |
| Entitlement | An assigned right, permission, role, or access capability. |
| Impersonation | Acting in a way that causes the target to see another identity rather than the actual actor. |
| Service identity | An identity representing an application or service. |
| Workload identity | An identity representing running software in an environment, often supported by runtime or platform attestation. |
| Scope | A bounded expression of requested or granted access; it may not fully represent business purpose or transaction consequence. |
| Audience | The intended recipient of a credential or token. |
| Bearer token | A token usable by whoever possesses it, absent additional sender constraint. |
| Proof of possession | Evidence that the presenter controls key material or another binding associated with the credential. |
| Least privilege | Granting only the access required for the authorized purpose. |
| Least standing privilege | Minimizing privilege that remains continuously available. |
| Just-in-time access | Providing access for a bounded need and duration rather than permanently. |
| Authority envelope | The approved purpose, actions, tools, resources, environments, time, volume, delegation, human decision, and consequence limits around an agent. |
| Human-in-the-loop | A design requiring human participation in a step; participation is not automatically meaningful authorization. |
| Human-on-the-loop | Human oversight of operation with defined visibility and intervention authority. |
| Consent fatigue | Degradation of judgment caused by frequent or low-information approval prompts. |
| Context poisoning | Manipulation of information or instructions used by an agent to influence later behavior. |
| Decision provenance | Recoverable evidence of inputs, authority, policy, interpretation, recommendation, and authorization supporting a decision. |
| Suspension | Temporary removal or reduction of an agent's ability to act pending investigation or decision. |
| Revocation | Invalidating credentials, sessions, grants, or permissions. |
| Fallback | A validated alternate operating method used when the agent is unavailable or untrusted. |
| Funded Belief | The enterprise's supportable proposition that an initiative's outcome, path, assumptions, dependencies, constraints, risks, timing, capability, and conditions justify the commitment being made. |
| Evidence Locker | A structured, governed repository in which relevant evidence can be retrieved, sourced, timestamped, contextualized, compared, and maintained as a trustworthy record. |

## Maintenance rule

When a source uses a materially different definition, preserve the source-specific definition and cite it. Do not force emerging terminology into false consensus.


## Module 3 additions

### OAuth client

An application making protected-resource requests on behalf of a resource owner and with its authorization, or on its own behalf under an applicable OAuth grant and policy. In this curriculum, an OAuth client is not automatically identical to an agent or workload.

### Access token

A credential used by a client to access a protected resource under attributes such as scope, lifetime, audience, and other issuer- and resource-defined conditions. It is not a complete business-authorization record.

### ID token

An OpenID Connect token containing claims about an end user’s authentication for the intended client. It is not a general-purpose API-access token.

### Refresh token

A credential used to obtain new access tokens. Its lifetime and revocation must remain aligned with continuing business authority.

### Audience

The intended recipient or resource server for a token. Audience restriction limits where a token should be accepted but does not define every permitted operation.

### Scope

An issuer- and resource-server-defined label representing requested or granted access. Scope names do not have universal meaning and may be coarser than the required business boundary.

### Sender-constrained token

A token whose use requires the presenter to demonstrate possession of associated key material. Sender constraint reduces replay by a different presenter but does not prove business purpose or decision integrity.

### Token exchange

A process in which a client obtains one security token using another security token. Governance must verify subject, actor, audience, scope, lifetime, delegation semantics, and whether authority narrows or expands.


## Module 4 additions

### Credential

Evidence or a mechanism presented to establish or obtain access under defined technical conditions. A credential can carry capability but is not a complete record of business authority.

### Secret

Sensitive data or key material whose unauthorized disclosure or use could enable impersonation, access, decryption, signing, or another protected operation.

### Privileged access

Access capable of materially changing systems, controls, identities, data, security posture, or operations. Classification depends on consequence, not merely on an “admin” label.

### Standing privilege

Privilege that remains continuously available rather than being activated for a bounded approved need.

### Task-bound access

Access constrained to a specific approved purpose, actor, action, target, environment, duration, and related conditions.

### Mediated access

Access in which a vault, broker, proxy, privileged-session service, or similar control delivers or exercises a credential without necessarily exposing the target secret to the actor.

### Credential rotation

Replacement of credential or secret material according to defined time, event, risk, or lifecycle triggers. Rotation reduces some exposure but does not correct excessive privilege, weak attribution, or missing authority.

### Emergency access

A separately governed, time-bounded access path activated under defined urgent conditions, with strong authentication, alerting, evidence, independent review, and post-use revocation or reset.

### Break-glass

A common term for emergency access that bypasses or alters ordinary access steps under controlled conditions. It is not a permanent exception to governance.


## Module 5 additions

### Confused deputy

An access-control pattern in which a program or agent holding legitimate, properly scoped authority is induced — by another agent's request, by a tool's output, or by retrieved content — to exercise that authority for a purpose its principal did not intend. No credential is necessarily stolen and no entitlement is necessarily exceeded; the failure is that the deputy cannot distinguish "authority available to be used" from "authority granted for this purpose."

### Authority laundering

A multi-agent variant of the confused-deputy pattern in which one agent uses a second agent's broader, unrelated access to accomplish something the first agent could not do directly, because the second agent did not independently evaluate whether the request fit its own approved purpose.

### Tool authority

What an enterprise has approved a tool to do, for which agents, purposes, and conditions — distinct from the tool's technical capability, which is what it is able to do regardless of approval.

### Delegation chain

A sequence of agent-to-agent or agent-to-tool handoffs in which authority, purpose, and attribution must be preserved at each hop rather than assumed to survive automatically.

### Tool discovery

An agent's ability to identify and select a tool at run time, whether from a fixed, pre-reviewed set or dynamically from a registry or protocol. Dynamic discovery changes the governance problem because the reachable tool set can change after the design review occurred.

### Authority attenuation

The requirement that a delegation remain the same or become narrower at each hop in a chain, rather than expand because a downstream tool or agent happens to hold broader credentials than the task requires.

### Direct prompt injection

A user directly supplies instructions intended to override or evade an agent's system, policy, or task boundaries.

### Indirect prompt injection

An agent retrieves or receives content — a webpage, document, email, code comment, tool result, or another agent's message — that contains adversarial instructions. If the agent treats that content as authoritative rather than as data, it may disclose data, misuse tools, alter memory, or expand the task beyond its approved purpose.

### Memory poisoning

The introduction of false, malicious, stale, unauthorized, or mis-scoped information into an agent's working context or durable memory so that it changes later behavior, including behavior in a session or task where the original poisoned content is no longer present to be caught by review.

### Token passthrough

The practice of an intermediary (such as a tool gateway or protocol server) accepting a credential from a client and forwarding it unmodified to a downstream resource without validating that the credential was issued for that downstream resource. This can create or worsen a confused-deputy condition and is prohibited under current Model Context Protocol authorization guidance.


## Module 6 additions

### Human authority

The decision right held by a person or role to authorize, refuse, condition, escalate, suspend, or restore an action within a defined business, legal, operational, safety, or control boundary.

### Autonomous action

An action an agent may execute without transaction-specific human approval under explicit, tested, and enforced conditions.

### Monitored action

An action an agent may execute while a human or control function has defined visibility, intervention authority, response objectives, and interruption capability.

### Prior-approval action

An action that may not cross its defined consequential boundary until a qualified human authority records an approval.

### Prohibited action

An action an agent may not perform in the defined context because authority, evidence, control, or acceptable consequence is absent.

### Meaningful approval

A decision made before the controlled consequence by an authorized, sufficiently informed, independent person who can approve, decline, condition, request more evidence, or escalate.

### Automation bias

A tendency to over-rely on automated recommendations or treat system output as more authoritative than supporting evidence warrants.

### Separation of duties

Assignment of incompatible responsibilities to different actors so that one person, agent, identity, or service cannot unilaterally request, approve, execute, conceal, and certify a consequential action.

### Approval timeout

The defined point at which an unanswered approval request expires and follows a governed deny, pause, escalation, or safe-fallback path rather than implying consent.


## Module 7 additions

### Telemetry

Observations emitted by systems, such as events and metrics. Collection alone does not establish completeness or reliability, and telemetry is not automatically evidence.

### Provenance

The source of an item, its version, and its transformations. A traceable source can still be wrong or malicious; provenance supports assessment, it does not itself establish trust.

### Transaction boundary

The reconstructed span of a business request from initiation through verified outcome or explicit unresolved state, including child agents, tools, queues, retries, callbacks, and target effects.

### Outcome state

One of a defined vocabulary — submitted, accepted, executed, verified, denied/failed, or unknown — used to describe what evidence can actually support about a requested action, rather than treating any acknowledgement as proof of completion.

### Evidence custody

Accountability for who can write, read, export, correct, retain, and delete evidence records, and for preserving the original record when a correction is made.


## Module 8 additions

### Containment

Limiting further adverse effects across affected systems and work once suspension has begun, distinct from suspension itself and from revocation of any single credential or grant.

### Recovery

Re-establishing an acceptable business service and data state. Recovery is a service-level judgment; restoring the same agent process does not by itself establish that recovery occurred, and recovering the service does not require restoring the same agent.

### Restoration

A deliberate, separately authorized decision to return bounded agent authority after suspension, requiring corrected controls, tested restrictions, and a named approval — not an automatic reversal of suspension.

### Retirement

Ending an agent's permitted use, including removal of access, resolution of residual work, and disposition of associated records.


## Module 9 additions

### Governed unit

The specific agent definition, deployment, or configuration being tracked and authorized — distinguished from a product name, which may cover multiple deployments with materially different authority.

### Lifecycle gate

A recorded decision about a defined scope of an agent's development or operation, supported by evidence and made by a named decision owner. A document upload or calendar meeting is not itself a gate decision.

### Material change

A change to an agent's environment, tools, helper or provider relationships, data, concurrency, or ownership sufficient to require reopening an earlier lifecycle gate, regardless of whether the underlying code changed.


## Module 10 additions

### Preactivation gate

A condition type requiring accepted proof to exist before an affected operation may begin; the operation does not proceed on a promise that the proof will follow.

### Operating obligation

A condition type that remains monitored during authorized operation, with a defined response if it is breached, rather than a one-time precondition to activation.

### Expansion gate

A condition type defining the proof needed before additional tools, environments, autonomy, volume, or duration may be added to an already-authorized agent's operation.


## Priority 2, Module 1 additions

### AI use case

A named business purpose served by one or more AI components in a specific context. A single use case can be served by more than one deployed instance over time, and a single model or platform can serve more than one use case with different risk profiles.

### Shadow AI

AI use adopted or operated without going through the enterprise's procurement, security, or governance review — for example, an unofficially adopted consumer AI tool. Its absence from self-attestation does not mean it does not exist.

### Embedded vendor AI

AI functionality added to an already-purchased product or platform, often through a routine vendor update, without a separate enterprise decision to adopt it. Contract and release-note review, not only self-attestation, is needed to detect it.

### Record steward

The role accountable for maintaining the inventory registry itself, resolving conflicting entries, and tracking reconciliation — distinct from ownership of any individual AI use case.


## Priority 2, Module 2 additions

### Risk tier

A governance-obligation category assigned to an AI use case as a whole, based on factors such as affected population, consequence, reversibility, autonomy, data sensitivity, and legal or rights exposure — distinct from a technical risk or accuracy score, and distinct from the action-level classification in Priority 1, Module 6.

### Tier creep

The tendency for a use case to be classified one tier lower than its actual risk, typically because the person submitting the classification has an incentive to avoid the governance obligation the correct tier would require.

### Provisional tier

A risk tier assigned with named missing information still outstanding. A provisional tier must remain visibly provisional until the missing information is resolved, rather than being treated as final by default.

### Reclassification trigger

A defined event — such as population expansion, a new data class, reduced human review, repurposing, volume growth past a threshold, or an incident — that requires a use case's risk tier to be reviewed again, rather than left to informal judgment.


## Priority 2, Module 3 additions

### Impact assessment

An assessment of who could be affected by an AI use case's output, how, and how severely — covering benefit, harm categories, transparency expectation, and proposed mitigation — distinct from a risk tier, which only sets the level of governance attention, and distinct from a control assessment, which verifies that a proposed mitigation actually exists and works.

### Control assessment

An assessment that a specific control is designed, implemented, and operating effectively, using methods such as examination, interview, and testing, and producing evidence-based findings for each of those three separately rather than a single pass/fail judgment.

### Designed / implemented / operating effectively

Three separate control-assessment findings. A control can be adequately designed without being implemented in the actual deployed configuration, and can be implemented without actually producing its intended effect when exercised.

### Assessor independence

The requirement that a control or impact assessment be performed, or reviewed, by someone sufficiently separate from the use case's business or technical owner that the assessment's finding can be trusted — with the required degree of separation scaling to the use case's risk tier.
