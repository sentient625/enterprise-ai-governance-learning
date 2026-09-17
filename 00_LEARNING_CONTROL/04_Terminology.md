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
