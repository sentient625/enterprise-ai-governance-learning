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
