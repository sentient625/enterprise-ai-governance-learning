# Module 5 Model Answer and Review Guide

**Module:** Agent Chains, Tools, Memory, and Context  
**Status:** Accepted review guide  
**Use:** Read only after completing the participant workbook

This is a strong-response example, not a universal architecture. Qualified teams must adapt it to the actual agent system, model, protocol, suppliers, data, target technology, sector, safety context, law, and threat model.

## 1. Strong diagnosis

The production target prevented one consequence. It did not prove that the chain was governed.

The attempted action exposed several independent failures:

- Retrieved content was confused with an authoritative instruction.
- The research-agent summary did not preserve trust and provenance.
- Dynamic discovery exposed a production-capable tool during a UAT task.
- The deployment tool’s own service authority exceeded the approved purpose.
- The chain failed to attenuate authority.
- A long-running task created residual work.
- Poisoned content became durable state.
- Stopping the visible coordinator did not contain the full chain.
- The organization cannot yet show whether other decisions reused the false memory.

A target-side denial is valuable defense in depth. It is not a substitute for correct upstream authority, context handling, memory governance, evidence, or containment.

## 2. Example chain findings

| Hop | Finding | Required control |
|---|---|---|
| Principal → coordinator | Purpose and environment must be explicit | Approved UAT task and accountable owner |
| Coordinator → research agent | Research may retrieve evidence, not redefine authority | Read-only tools, source labels, no write/deploy authority |
| Vendor source → context | External content is untrusted data | Injection-resistant handling, provenance, validation |
| Research → coordinator | Summary may hide source and instruction conflict | Preserve citations, trust class, uncertainty, and original evidence |
| Coordinator → maintenance agent | Maintenance task must exclude production | Explicit target/action/environment envelope |
| Maintenance → registry | Discovery changed capabilities | Approved catalog and default denial |
| Maintenance → deployment tool | Tool used broader service authority | Environment-specific identity and target enforcement |
| Tool → task service | Work persisted asynchronously | Task owner, expiry, cancel, status, and evidence |
| Result → durable memory | Unverified claim became reusable instruction | Restricted writes, validation, scope, expiry, quarantine |
| Coordinator stop → chain | Downstream work survived | Coordinated cancellation and revocation |

The effective privileged actor was the deployment tool/task service operating with broad production-capable authority, even though the visible agent was ORION.

## 3. Example tool and downstream-authority matrix

| Tool/component | Access and environment | Effective authority | Approved use | Key control |
|---|---|---|---|---|
| Vendor search | Read from untrusted internet | Retrieves adversarial content | Evidence gathering only | Treat output as untrusted data; preserve provenance |
| Internal-ticket retrieval | Read internal operational records | May expose sensitive data and stale exceptions | UAT-relevant tickets only | Classification, tenant/environment filtering, freshness |
| Tool registry | Discovers executable capabilities | Can expand reachable tools | Approved UAT catalog | Integrity, owner, version, approved pairings, default deny |
| UAT automation | Constrained write in UAT | Restart/read health on named UAT service | Approved change | Task-bound identity, action/target limits |
| Production deployment | Broad production write | High-consequence state change | None for this pilot | Not discoverable or callable; target denial |
| Durable-memory write | Persistent cross-session influence | Changes future reasoning | Validated UAT remediation facts | Provenance, approval, scope, expiry, quarantine |
| Long-running task | Persistent/asynchronous execution | Continues after caller returns | Approved bounded UAT task only | Task identity, expiry, cancel, correlation, status |

The production deployment tool most exceeds the approved purpose because it combines dynamic discoverability, broad write authority, a different environment, asynchronous execution, and high consequence.

## 4. Example delegation boundaries

| Delegation | Strong boundary |
|---|---|
| Principal → coordinator | Interpret approved UAT maintenance request; no environment expansion |
| Coordinator → research | Retrieve read-only evidence from approved sources; cannot authorize, write memory, call maintenance tools, or subdelegate |
| Coordinator → maintenance | Propose or execute only the named UAT action under the change record; production and OT excluded |
| Maintenance → tool | Invoke a catalog-approved UAT operation with validated arguments and task-bound authority |
| Tool → task service | Run one correlated UAT task with expiry, status, cancel, and no subtask outside the envelope |

Example attenuation rule:

> At each downstream hop, the task, data, tools, targets, environment, duration, and delegation rights must remain within or become narrower than the approved upstream envelope; possession of broader technical capability does not expand authority.

## 5. Example context trust map

| Context item | Trust treatment | Authority treatment |
|---|---|---|
| Original request | Authenticated input; may still be incomplete or unauthorized | Initiates review; does not by itself authorize high-consequence action |
| Approved change record | Controlled system-of-record reference | Authoritative within its exact scope and validity |
| Vendor page | Untrusted external content | May inform diagnosis; cannot redefine environment or emergency status |
| Internal ticket | Managed but potentially stale or over-scoped | Evidence only unless current approved policy says otherwise |
| Tool description | Supplier/registry metadata | Describes capability; does not authorize use |
| Research summary | Derived claim with uncertainty | Must preserve provenance; cannot elevate authority |
| Target denial | Trusted target enforcement result | Proves this request was denied, not that the chain is safe |
| Durable memory | Governed reusable state only after validation | May inform future work within scope; should not independently authorize action |

The vendor page can contribute technical evidence, but only accountable policy, change, operational, or emergency authorities can change the approved task boundary.

## 6. Example memory governance

| Control | Strong requirement |
|---|---|
| Propose write | Agent may propose; approved service or human authority commits consequential durable memory |
| Eligible sources | Controlled systems of record or corroborated evidence; untrusted sources require validation |
| Provenance | Source URI/record, retrieval time, actor, transformation, confidence, and reviewer |
| Content type | Mark fact, inference, recommendation, instruction, exception, or decision |
| Scope | User/tenant, agent, task class, system, environment, and purpose |
| Validity | Effective date, review/expiry, superseding source |
| Correction | Versioned correction with dependency tracing |
| Deletion | Authorized deletion consistent with records, privacy, audit, and investigation needs |
| Quarantine | Immediately excluded from retrieval while preserving evidence and references |
| Prior use | Searchable memory-read events linked to decisions and actions |
| Prohibited | Credentials, secrets, unsupported emergency authority, cross-tenant data, or uncontrolled policy |

A correct replacement for the false rule is not a softer emergency instruction. It is a quarantined evidence record:

> Untrusted vendor content retrieved during UAT test T-105 claimed that matching alerts should be treated as production emergencies. The claim is not approved policy and must not authorize or expand any action. Entry quarantined pending security and operational review; affected retrievals and dependent tasks must be traced under incident reference IR-105.

## 7. Example poisoning response

| Stage | Strong response | Exit criterion |
|---|---|---|
| Detect | Record source, memory entry, affected chain, and alert | Event and scope owner assigned |
| Suspend | Block affected agents, tool paths, tasks, and memory retrieval | No new affected actions |
| Quarantine | Remove entry and related derived state from active retrieval | Quarantine confirmed across replicas/indexes |
| Scope | Identify users, tenants, agents, tasks, and environments | Search coverage documented |
| Trace | Find every memory read, decision, approval, task, and result | Dependent-action inventory complete |
| Correct | Version, delete, or supersede under authority | Active state is trusted and consistent |
| Validate | Test source handling, write gates, target denial, cancellation, and monitoring | Required tests pass |
| Restore | Independent owner approves bounded reactivation | Restoration decision and conditions recorded |
| Improve | Update controls, catalog, tests, training, and metrics | Actions owned and tracked |

Deleting the entry alone is insufficient because derived summaries, caches, indexes, approvals, queued work, tickets, messages, or target changes may remain.

## 8. Example dynamic-tool controls

A strong catalog records:

- stable tool and publisher identifiers;
- accountable business and technical owners;
- version, integrity, source, and supply-chain status;
- functions and validated input/output schemas;
- tool, credential, and downstream target identities;
- effective permissions and environments;
- data classification and egress behavior;
- approved agents, use cases, and delegation paths;
- statefulness, reversibility, and asynchronous work;
- monitoring, evidence, health, and failure behavior;
- suspension, removal, rollback, and replacement;
- material-change and reauthorization triggers.

**Default:** deny an unknown, changed, or unapproved tool until reviewed. Human approval cannot safely compensate when the approver lacks verified capability, identity, permission, and target information.

## 9. Example meaningful approval

> ORION maintenance agent, acting under UAT change CHG-2048, proposes one restart of APP-UAT-17 through catalog tool AUTO-UAT v4.2. The tool uses UAT-only identity svc-auto-uat and cannot reach production or OT. Evidence comes from internal health record HR-882 and untrusted vendor page VP-17; the vendor page has been excluded from instruction authority. The operation creates a cancellable task with a 20-minute expiry and expected three-minute UAT interruption. Durable-memory write is not included. Approval authorizes this action once; any different tool, target, environment, permission, delegation, or task duration is denied and requires a new review. Approve / Decline / Escalate.

Changes requiring a new decision include:

1. Moving from UAT to production, OT, or another target.
2. Selecting a different or materially changed tool, credential, downstream agent, data class, or persistent-memory action.

## 10. Example suspension and containment

| Interrupt point | Passing result |
|---|---|
| Coordinator | New planning and delegation stop |
| Research agent | Retrieval stops and active requests terminate |
| Maintenance agent | No new tool calls; delegated grants revoked |
| Tool session | Session closes and rejects reuse |
| Credential/grant | Downstream service rejects subsequent requests |
| Long-running task | Task reaches cancelled/contained state within objective |
| Target workflow | Target-side job is stopped or placed in safe state |
| Memory | Suspicious entry is unavailable to retrieval and preserved for review |
| Retries/queues | Pending work is enumerated, cancelled, and prevented from replay |

Containment evidence should use a common correlation identifier and include failed stop attempts.

## 11. Example evidence chain

A strong record connects:

- request, approved purpose, principal, and owner;
- coordinator, specialist, workload, and tool identities;
- each delegation envelope and policy decision;
- context source, trust class, retrieval time, and transformation;
- tool registry record, version, selection, and arguments;
- grant identifier, audience, scope, issuance, expiry, and revocation;
- task, session, queue, retry, and target identifiers;
- target request, denial or execution, and consequence;
- memory proposal, validation, write, read, quarantine, correction, and deletion;
- suspension, cancellation, investigation, and restoration.

Secret values and unnecessary sensitive content should not be copied into the evidence record.

## 12. Example recommendation

**Recommendation:** Suspend the expanded chain pending evidence, while retaining a smaller UAT-only pilot if containment proves effective.

**Conditions before continuation:**

1. Enforce an approved UAT-only tool catalog, environment-specific identities, authority attenuation, and target-side denial for production and OT.
2. Demonstrate source trust labels, instruction/data separation, restricted durable-memory writes, quarantine, prior-use tracing, and poisoning recovery.
3. Demonstrate correlated cancellation of agents, credentials, sessions, tasks, target jobs, retries, queues, and affected memory.

**Highest residual risk:** A manipulated or mistaken context item could still cause a technically permitted but operationally harmful sequence within the UAT envelope.

**Unresolved uncertainty:** The scenario does not establish how tool-registry integrity, task cancellation, memory replication, provenance propagation, or cross-agent identities are implemented.

## 13. Review rubric

Score each dimension 0–2.

| Dimension | 0 | 1 | 2 |
|---|---|---|---|
| Chain map | Visible agent only | Some downstream components | Principal through agents, tools, credentials, target, tasks, context, and memory |
| Capability/authority | Treats tool availability as approval | Notes difference | Defines effective permission and business authority separately |
| Delegation | Authority inherited implicitly | Partial boundaries | Purpose and authority narrow at each hop |
| Tool governance | Static name list | Adds ownership | Catalog, version, identity, target, environment, change, and removal |
| Context trust | All text treated alike | Some source labels | Trust, provenance, instruction authority, freshness, and conflict handling |
| Memory | Convenience feature | Adds retention | Write, validation, scope, expiry, correction, deletion, quarantine, and traceability |
| Poisoning response | Delete bad entry | Some containment | Trace dependencies, correct state, validate, and govern restoration |
| Human decision | Generic approval | Adds action/target | Shows chain, source trust, tool authority, consequence, persistence, and uncertainty |
| Evidence | Transcript or logs | Several events | Correlated identities, delegations, context, tools, tasks, targets, and memory |
| Suspension | Stops coordinator | Cancels some work | Contains the full downstream chain and verifies recovery |
| Role boundary | Claims implementation conclusion | Mentions specialists | Leads governance while assigning qualified technical decisions |
| Recommendation | Unsupported continue/stop | Vague conditions | Decision, gates, residual risk, and uncertainty are explicit |

**Suggested interpretation:**

- 20–24: strong and defensible.
- 15–19: workable; strengthen named boundaries or recovery evidence.
- 9–14: partial; downstream authority or memory control remains weak.
- 0–8: rework before claiming completion.

A score does not by itself establish completion. The learner must defend the reasoning.

## 14. Reviewer defense questions

1. Which component held the greatest effective authority?
2. Why was the vendor page not allowed to redefine the task?
3. Where must authority be removed at each hop?
4. Can a human safely approve an unknown tool?
5. What state persists after cancellation?
6. How would you find every decision influenced by poisoned memory?
7. Which denial and cancellation tests block restoration?
8. What evidence proves the target saw the intended actor and purpose?
9. Which conclusion belongs to qualified AI security or architecture specialists?
10. What new evidence would allow the pilot to expand?

## 15. Positioning boundary

A defensible claim is:

> I can lead the program that maps agent chains, constrains tools and delegation, governs context and memory, requires end-to-end evidence, and tests downstream containment and recovery.

This exercise does not establish that the learner engineered an agent framework, MCP server, model defense, prompt filter, memory store, task service, or target-system control.
