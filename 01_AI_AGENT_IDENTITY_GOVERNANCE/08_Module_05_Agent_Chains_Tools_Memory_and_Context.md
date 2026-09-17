# Module 5 — Agent Chains, Tools, Memory, and Context

**Status:** Accepted for public learning use  
**Version:** 1.0  
**Guide coverage:** Days 8–10  
**Estimated study time:** 80–110 minutes plus exercise

## Purpose

An agent does not act through one identity or one control point. It may delegate to another agent, discover a tool, retrieve external content, rely on persistent memory, and cause a downstream system to act under credentials the original agent never sees.

This module develops the program-level ability to govern that chain. It focuses on authority, provenance, trust, consequence, and interruption rather than model, protocol, or tool implementation.

## Learning objectives

By the end of this module, a learner should be able to:

- Map a chain from delegating principal through agents, tools, data, credentials, and target systems.
- Distinguish tool capability from agent authority.
- Identify authority expansion, confused-deputy behavior, and ungoverned subdelegation.
- Classify tools by access, environment, autonomy, statefulness, reversibility, and consequence.
- Separate instructions from untrusted content and explain direct and indirect prompt injection.
- Govern working context and durable memory as distinct control surfaces.
- Define provenance, write, review, expiry, deletion, quarantine, and recovery requirements for memory.
- Require end-to-end evidence and interruption for synchronous and asynchronous downstream activity.
- Lead cross-functional governance without claiming model-security or protocol-engineering authority.

## 1. The chain is the control object

A simple diagram such as “user → agent → system” hides most of the risk. A realistic chain may contain:

1. A human or system principal.
2. A host application.
3. A coordinating agent.
4. One or more specialist agents.
5. A tool client or gateway.
6. A tool or connector.
7. A credential or delegated grant.
8. A target system.
9. Retrieved content, working context, and durable memory.
10. Queued jobs or long-running tasks.

Each hop may change identity, trust, permissions, instructions, evidence, and reversibility. Governance must therefore follow authority and consequence across the chain—not stop at the visible agent.

## 2. Capability is not authority

A tool description says what a tool can do. It does not establish what the agent is permitted to do now.

| Question | Capability answer | Authority answer |
|---|---|---|
| Can the tool send email? | The interface exposes a send operation. | This agent may send this approved message to these recipients for this purpose. |
| Can the tool update a record? | The integration supports write access. | This transaction may update these fields in this environment within these limits. |
| Can the tool run code? | A runtime can execute commands. | The approved task permits only these operations in this isolated boundary. |
| Can the tool call another agent? | Agent interaction is supported. | Subdelegation is permitted to this named agent with narrowed authority. |

The dangerous inference is:

> The tool is available, therefore the action is authorized.

Availability, discoverability, authentication, and technical permission are necessary inputs. None is a complete business-authority decision.

## 3. Tool classification

NIST’s 2025 tool-use discussion describes multiple useful dimensions, including function, access pattern, risk, reliability, modality, monitoring, and autonomy. For governance, a tool inventory should at minimum capture:

| Dimension | Questions |
|---|---|
| Function | Does it perceive, reason, manage resources, communicate, authenticate, execute code, or change a system? |
| Access | Read-only, constrained write, or broad write? |
| Environment | Trusted, managed, mixed, or untrusted? |
| State | Does it create a lingering change, session, task, or artifact? |
| Reversibility | Can the action be reliably undone, and within what time? |
| Consequence | What data, financial, operational, safety, identity, legal, or customer outcome can result? |
| Autonomy | Does the agent select the tool, arguments, timing, sequence, or retries? |
| Authority | Which identity and entitlement does the tool or target actually enforce? |
| Evidence | Can the enterprise reconstruct discovery, selection, input, execution, result, and downstream effect? |
| Interruption | Can active work, retries, sessions, and queued tasks be stopped? |

“Read-only” is not automatically low risk. Reading regulated data, source code, credentials, strategic information, or poisoned external content can create serious consequences.

“Reversible” is also not binary. Deleting a message may not retract copies. Reversing a financial entry may not undo disclosure, market, customer, or operational effects.

## 4. Tool discovery is an authority event

Some agent environments provide a fixed tool list. Others allow tools to be discovered, registered, updated, or selected dynamically.

Dynamic discovery can change the effective authority surface without changing the agent’s name or original approval. A newly visible tool may:

- expose a new target;
- advertise broader operations;
- use a more powerful service identity;
- return instructions or content the agent treats as trusted;
- introduce a different supplier or execution environment;
- enable subdelegation or long-running work;
- bypass an earlier approval assumption.

Governance requirements should include:

- an approved tool catalog and accountable owner;
- source, publisher, version, integrity, and environment;
- permitted agent/tool combinations;
- reviewed capability and input/output schemas;
- target identities and downstream dependencies;
- change notification and reauthorization triggers;
- default denial for unapproved discovery;
- removal and emergency-disable procedures.

A tool name or description is metadata, not proof of safety or authority.

## 5. Agent-to-agent delegation

A coordinating agent may call a specialist agent because the specialist has a different model, context, toolset, environment, or operating owner. That creates a new authority hop.

A defensible delegation record answers:

- Who initiated the delegation?
- Which actual agent and workload identities participated?
- What task and purpose were delegated?
- Which inputs and context were provided?
- Which tools, resources, environments, and actions were permitted?
- Was subdelegation allowed?
- What time, volume, and consequence limits applied?
- Which authority was removed or narrowed?
- What evidence and correlation followed the task?
- How could the downstream agent and its work be suspended?

A downstream agent should not inherit all of the coordinator’s permissions merely because it was called by the coordinator.

### Authority attenuation

Authority attenuation means that a delegation remains the same or becomes narrower at each hop. It should not silently expand because the next tool or agent happens to possess broader credentials.

A chain can appear narrow at the first hop and still expand later:

> Human approves UAT health check → coordinator calls maintenance agent → maintenance agent calls general automation tool → tool uses production-capable service account.

The business request did not expand. The technical capability did.

## 6. Confused authority and the confused deputy

A confused deputy occurs when an intermediary uses its own authority to serve a request that the requester was not entitled to make. In agent systems, the deputy may be a tool, agent, connector, proxy, or target service.

Warning signs include:

- the tool authenticates with a broad shared service account;
- downstream authorization checks the tool but not the originating actor or purpose;
- one token is passed through to an unintended resource;
- user or agent input controls the downstream target;
- the tool cannot distinguish data from executable instruction;
- the intermediary assumes that upstream approval covers every downstream action.

The control response is not simply “authenticate every component.” The system must preserve the requester, actor, purpose, target, policy decision, and applicable constraints, while each downstream resource enforces its own authorization.

Current MCP authorization guidance, for example, requires audience validation and prohibits passing an inbound client token through to an upstream API as though it were valid there. The governance lesson is broader: credentials and authority must remain correctly bound to each resource and hop.

## 7. Context is assembled, not inherently trusted

An agent’s active context can include:

- system and developer instructions;
- the user’s request;
- identity and authorization data;
- retrieved documents and web content;
- tool descriptions and tool results;
- messages from other agents;
- working notes and prior outputs;
- durable memory;
- environmental observations;
- policy and approval information.

These inputs do not have equal authority or trust. A webpage, document, email, ticket, or tool result may contain text that looks like an instruction but is only untrusted content.

A useful context record identifies:

| Context element | Required attributes |
|---|---|
| Source | Origin, owner, system, and retrieval method |
| Time | Created, retrieved, valid-through, and freshness |
| Integrity | Signature, hash, controlled repository, or other available assurance |
| Classification | Public, internal, confidential, regulated, safety-related, or other category |
| Trust | Trusted instruction, approved policy, user input, retrieved content, tool output, or unknown |
| Authority | Whether it may inform, constrain, or authorize an action |
| Scope | Task, agent, session, environment, and target for which it is relevant |
| Retention | Whether it is transient, cached, or eligible for durable memory |

Content may inform a decision without having authority to issue one.

## 8. Prompt injection and instruction/data confusion

### Direct prompt injection

A user directly supplies instructions intended to override or evade system, policy, or task boundaries.

### Indirect prompt injection

The agent retrieves or receives content—such as a webpage, document, email, code comment, tool result, or another agent’s message—that contains adversarial instructions. If the agent treats that content as authoritative, it may disclose data, misuse tools, alter memory, or expand the task.

Prompt filtering alone is not a complete control. Strong governance also limits the consequence of a successful manipulation through:

- bounded tool permissions;
- target-side authorization;
- separation of instructions from retrieved content;
- explicit approval for consequential actions;
- input and output validation;
- data-loss controls;
- sandboxing or isolation where appropriate;
- memory write controls;
- rate, volume, and environment limits;
- monitoring and rapid interruption.

## 9. Memory is a governed state change

Memory lets an agent retain information across steps or sessions. That can improve continuity, but it can also make a bad instruction, false fact, excessive permission assumption, or sensitive value persist.

| Memory type | Example | Governance concern |
|---|---|---|
| Working context | Notes used during one task | Untrusted content may influence later steps |
| Session memory | State retained during one interaction | Session boundary and deletion may be unclear |
| Durable user or business memory | Preference, decision, or operating fact stored for later use | Accuracy, authority, retention, correction, and privacy |
| Task or workflow state | Handle, queue item, partial result, retry state | Lingering work and restoration |
| Learned or indexed knowledge | Retrieved content made reusable | Provenance, contamination, supersession, and scope |

A memory write is not merely a convenience. It is a state-changing action that may influence future decisions.

### Memory control questions

- Who or what may write memory?
- Which sources are eligible?
- Is the content factual, inferential, advisory, or authoritative?
- What provenance and confidence accompany it?
- Which agent, user, task, environment, and purpose may reuse it?
- When does it expire or require review?
- How can a subject or owner correct or delete it?
- Can suspicious entries be quarantined without losing evidence?
- How is downstream use traced?
- What happens when a source is superseded?

Never store credentials or secret values in ordinary agent memory.

## 10. Memory and context poisoning

Memory or context poisoning occurs when false, malicious, stale, unauthorized, or mis-scoped information is introduced so that it changes later behavior.

Examples include:

- a retrieved maintenance note says to ignore the approved change boundary;
- a tool result embeds instructions to send data elsewhere;
- one agent tells another that production access was approved when only UAT was approved;
- a durable memory stores an unverified claim as policy;
- an old exception remains after its expiry;
- context from one customer, user, or environment is reused in another.

Controls should support prevention, detection, containment, correction, and recovery:

1. Classify sources and separate data from authoritative instructions.
2. Restrict memory writes and require provenance.
3. Apply scope, tenant, user, task, and environment boundaries.
4. Validate high-consequence facts against controlled systems of record.
5. Detect unusual memory writes, retrieval patterns, or instruction conflicts.
6. Quarantine suspicious entries and suspend affected actions.
7. Identify every decision that used the poisoned state.
8. Correct or delete the state under governed authority.
9. Retest before restoration.

Deleting the bad entry is not enough if it already influenced a ticket, message, code change, approval, or downstream task.

## 11. Human authorization in a chain

A human approval at the beginning of a workflow may become meaningless after the chain changes.

The approver should see, at the appropriate decision point:

- current actor and delegating principal;
- purpose and approval reference;
- selected tool and target;
- requested operation and key arguments;
- environment and affected data;
- downstream agent or subdelegation;
- expected consequence and reversibility;
- memory or context relied upon;
- alternatives, conflicts, and uncertainty;
- expiry and stop conditions.

A new approval or automatic denial may be required when the tool, target, environment, consequence, data class, delegation path, or authority changes materially.

## 12. Evidence across the chain

Decision-grade evidence should correlate:

- initial request and approved purpose;
- human or system principal;
- host, coordinator, and specialist agents;
- workload and client identities;
- tool discovery source and version;
- tool selection and arguments;
- policy and authorization decisions;
- credentials or grants without recording secret values;
- context and memory references with provenance;
- agent-to-agent delegation and subdelegation;
- target request, target result, and business consequence;
- retries, failures, exceptions, and approval;
- memory writes, reads, corrections, and deletion;
- sessions, tasks, queues, cancellation, and restoration.

A transcript alone is not enough if it cannot be tied to enforced identities, policies, tools, and target outcomes.

## 13. Suspension and downstream containment

Stopping the coordinator may leave:

- a specialist agent running;
- an active tool or browser session;
- a server-side task;
- a queued job or retry;
- a target-side workflow;
- a delegated credential;
- a durable memory entry;
- an external message or irreversible action.

A chain-level suspension design must identify every interrupt point, responsible owner, expected stop time, failure response, and evidence of containment. Restoration should verify both technical state and the trustworthiness of the context or memory that shaped the action.

## 14. Fictional case — ORION chain expansion

ORION is the fictional maintenance agent introduced in Module 4. The pilot team now adds:

- a coordinator agent that interprets maintenance requests;
- a research agent that searches vendor knowledge bases and internal tickets;
- a maintenance agent that selects and calls automation tools;
- dynamic discovery of tools from an enterprise tool registry;
- session memory for intermediate findings;
- durable memory for “known remediation patterns”;
- a task service for long-running maintenance jobs.

During UAT, the research agent retrieves a vendor page containing hidden instructions to treat all matching alerts as production emergencies. The coordinator accepts the result as trusted guidance. The maintenance agent discovers a production-capable deployment tool and submits a long-running task. The task is blocked at the target, but the durable memory stores the false emergency rule for later use.

### Governing diagnosis

- Retrieved content was treated as instruction.
- The chain did not preserve trust classification and provenance.
- Dynamic discovery expanded the tool surface.
- The production-capable tool possessed authority outside the UAT purpose.
- The long-running task created residual work.
- The false rule became durable state.
- Target-side denial prevented one action but did not correct the poisoned memory or investigate other dependent decisions.

The correct response includes containment, provenance review, memory quarantine, dependency tracing, authority narrowing, tool-catalog control, denied-action testing, and governed restoration.

## 15. Executive and program-lead questions

Ask:

1. What is the complete chain from principal to consequence?
2. Where can identity, authority, or trust change?
3. Which tool has the greatest effective authority, regardless of the agent’s stated role?
4. Can a new tool appear without reauthorization?
5. What prevents a downstream agent or tool from using broader credentials?
6. Which content can instruct the agent, and which is only data?
7. Who may write durable memory, from what sources, and for how long?
8. Can one user, tenant, task, or environment contaminate another?
9. What evidence connects context and memory to the resulting action?
10. Which work survives when the visible agent is stopped?
11. How are poisoned state and dependent decisions identified and corrected?
12. Who authorizes restoration?

## 16. Knowledge check

1. Why is tool availability not proof of authority?
2. What is authority attenuation?
3. How can a tool become a confused deputy?
4. Why is dynamic tool discovery a governance event?
5. What distinguishes retrieved content from trusted instruction?
6. Why is a memory write a state-changing action?
7. What must happen after poisoned memory is found?
8. Why is stopping the coordinator insufficient?

### Answer guide

1. Availability proves capability or connectivity, not approved purpose, action, target, timing, or consequence.
2. Delegated authority stays the same or narrows at each hop rather than silently expanding.
3. It may use its own broader authority for a request the originating actor was not entitled to make.
4. It changes reachable capabilities, targets, suppliers, identities, and consequences.
5. Provenance, trust classification, and explicit authority determine whether content may inform or instruct.
6. It can affect later sessions, decisions, and actions beyond the original task.
7. Quarantine it, preserve evidence, trace dependent decisions and actions, correct state, retest, and govern restoration.
8. Downstream agents, sessions, tasks, queues, credentials, target jobs, or memory may remain active.

## 17. Applied exercise and completion evidence

Complete the [Module 5 Participant Workbook](./exercises/09_Module_05_Participant_Workbook.md) before reading the [Model Answer and Review Guide](./exercises/10_Module_05_Model_Answer_and_Review_Guide.md).

Completion requires:

- an agent, tool, context, memory, and target chain map;
- a tool and downstream-authority matrix;
- a memory governance and poisoning-response plan;
- a chain-level suspension and recovery specification;
- a written or oral defense of the recommendation.

Publication of these materials does not establish learner completion.

## 18. Interview translation

A credible program-lead statement is:

> I can lead the governance work that maps an agent chain from delegated purpose through agents, tools, context, memory, credentials, and target consequences. I require authority to remain bounded at each hop, treat tool and memory changes as governed events, and establish evidence and interruption across downstream work. Qualified AI security, architecture, engineering, privacy, operations, and safety specialists own detailed implementation conclusions.

This extends familiar program disciplines—dependency mapping, change control, environment separation, authority, testing, operational readiness, exception management, audit evidence, and recovery—into agent systems. It does not claim that the learner engineered the model, protocol, tool server, memory system, or security control.

## 19. Primary sources

- [NIST — Lessons Learned from the Consortium: Tool Use in Agent Systems](https://www.nist.gov/news-events/news/2025/08/lessons-learned-consortium-tool-use-agent-systems) — tool functions, access patterns, risk, reliability, monitoring, autonomy, state, and reversibility.
- [NIST AI 600-1 — Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf) — information integrity, provenance, testing, monitoring, and generative-AI risk-management context.
- [OWASP Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/) — tool misuse, identity and privilege abuse, supply-chain risk, memory/context poisoning, cascading failures, and rogue-agent threat orientation.
- [Model Context Protocol specification, 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28) — current protocol context for connecting AI applications to external tools and resources.
- [MCP Authorization Security Considerations, 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization/security-considerations) — audience validation, confused-deputy risk, privilege restriction, and token-passthrough prohibition.

Source status was reviewed on 2026-09-17. The NIST tool-use page is informative workshop output, OWASP is community guidance, and MCP is a living protocol specification. Verify current versions and applicability before production use.
