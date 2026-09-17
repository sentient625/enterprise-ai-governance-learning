# Module 5 — Agent Chains, Tools, Memory, and Context

**Module ID:** P1-M05  
**Learning priority:** AI-agent identity, security, and governance  
**Guide coverage:** Days 8–10  
**Estimated study time:** 75–100 minutes plus exercise  
**Required output:** Tool and downstream-authority matrix  
**Professional level:** Executive and program leadership  
**Version:** 1.0  
**Status:** Accepted for public learning use  
**Source status checked:** 2026-09-17  
**License:** CC BY 4.0

## Purpose

Modules 1–4 established identity, authentication, authorization, delegated authority, tokens, credentials, and bounded privileged access for a single agent acting on a single target. Real deployments rarely stop there. An agent selects among several tools, retrieves and reasons over content it did not author, remembers information across steps or sessions, and increasingly calls other agents rather than acting alone.

This module addresses the governance problem that appears only once those elements combine: authority and identity can travel through a chain of tools, agents, and content that the enterprise did not design to be governed as a chain. It is educational, not a production design, security-testing, or configuration guide.

## Learning objectives

By the end of this module, a learner should be able to:

- Distinguish a tool's technical capability from its governed authority.
- Recognize the confused-deputy pattern in an agent-and-tool relationship.
- Explain how an agent-to-agent delegation chain can lose or expand authority.
- Identify context and memory as an attack surface distinct from identity or credential compromise.
- Explain why unauthorized or unreviewed tool discovery is a governance failure, not only a technical inconvenience.
- Require a tool-and-downstream-authority matrix before a multi-tool or multi-agent design is approved.
- Lead this review while preserving the boundary with qualified security, architecture, and engineering specialists.

## 1. Why a single-agent, single-target model is not enough

Modules 1–4 model one governed path: a human or system delegates a purpose, an agent presents an identity and credential, a target enforces an entitlement, and evidence records the result. That model still applies to every individual step in a chain. What it does not by itself address is what happens *between* steps:

- The agent chooses among several tools; the choice itself is a decision with consequence.
- A tool's output — a document, a search result, a file, another agent's reply — becomes input to the agent's next decision.
- The agent may retain information (memory) that influences a later, unrelated task.
- The agent may hand a task to another agent, which may hand it to a tool, which may reach a target the first agent never directly touched.

Each of these transitions can be technically correct — every credential valid, every entitlement properly scoped — and still produce a governance failure, because authority, purpose, and attribution do not automatically survive the handoff.

## 2. Tool authority is not the same as tool capability

A tool's capability is what it is technically able to do. A tool's authority is what the enterprise has approved it to do, for whom, and under what conditions.

| Question | What it tests |
|---|---|
| What can this tool technically do? | Capability |
| What is this tool approved to do for this agent, this purpose, this environment? | Authority |
| What does the tool actually enforce versus merely permit? | Enforcement |
| What does the target system see as the acting identity when the tool is used? | Attribution |

A general-purpose automation tool, a broad database connector, or a wide-scope API client is a familiar and convenient capability. Treating that capability as automatically authorized for every agent that can reach it repeats the identity-collapse failures from Module 1 at the tool layer: the tool becomes a shared, over-privileged identity that several agents rely on, and the target can no longer distinguish which agent, for which purpose, requested which action.

### Governing questions

- Does the tool's actual permission set match the documented business purpose of every agent that can call it, or does it satisfy the broadest possible user?
- Can the target distinguish the calling agent and its delegating principal, or does it see only the tool or a shared service account?
- Is tool selection itself logged and reviewable, or only the final target action?
- Can an agent discover and invoke a tool that was never reviewed for its use case?

## 3. The confused-deputy pattern

The confused-deputy problem is a long-standing access-control pattern, not new to AI agents: a program with legitimate authority to act is tricked into using that authority on behalf of a party that should not have it, because the program cannot distinguish "authority granted for this purpose" from "authority available to be used."

An agent that holds a properly issued credential and a properly scoped entitlement is a deputy. If it can be induced — by another agent's request, by a tool's output, or by retrieved content — to exercise that entitlement for a purpose its principal never approved, the enterprise has a confused deputy even though every individual credential and entitlement check passed.

This differs from a straightforward credential-theft or privilege-escalation failure. Nothing was stolen, and no entitlement was exceeded. The agent used exactly the access it was properly granted, for the wrong purpose, because something in its inputs told it to.

### Recognizing the pattern

Ask, for any agent that holds a standing entitlement and also consumes untrusted input:

> Could a request, document, tool result, or message the agent merely reads cause it to exercise that entitlement in a way its principal did not intend?

If the answer is yes and there is no independent check between "the agent decided to act" and "the action executed," a confused-deputy path exists regardless of how sound the identity and credential design is.

## 4. Agent-to-agent delegation chains

When Agent A delegates a subtask to Agent B, and Agent B calls Tool C, the chain must preserve — not merely technically connect — several things:

- the original delegating principal and business purpose;
- the scope that was actually intended for the subtask, which may be narrower than Agent A's own scope;
- the identity of each hop, so the target can attribute the final action correctly;
- a mechanism that prevents authority from silently expanding at any hop.

### Authority should narrow, not expand, across a chain

A specialist agent invoked for one bounded subtask should not receive broader authority than that subtask requires, even if the delegating agent holds broader authority itself. RFC 8693's distinction between delegation (the acting party is recorded as acting on behalf of another, with both preserved) and impersonation (the acting party appears as the original party, with the delegation relationship lost) is directly relevant here, even outside a literal OAuth token-exchange implementation: the same distinction — is the chain preserved, or does each hop erase the one before it — determines whether the enterprise can later reconstruct who authorized what.

### Failure pattern — authority laundering

Agent A cannot access a restricted resource directly. Agent A asks Agent B, which holds broader access for an unrelated purpose, to retrieve it "as a favor" or as an unreviewed subtask. Agent B's access was never intended to be transitively available to Agent A's task. If Agent B complies without evaluating whether the request fits its own approved purpose, the restriction on Agent A has been laundered away through Agent B — a variant of the confused-deputy pattern specific to multi-agent designs.

### Governing questions

- At each hop, is the delegating principal and original purpose preserved, or does the chain end in a generic "system" or shared identity?
- Can any hop request access broader than its own task requires, and would the receiving agent or tool grant it without independently evaluating the request?
- If the chain is broken partway through (a step fails, an agent restarts, a message is lost), does any step retain and act on a resulting orphaned entitlement?
- Who can reconstruct the full chain from final target action back to the original human or system request?

## 5. Context and memory as an attack surface

An agent's next action is shaped not only by its instructions and its entitlements but by the content it reads: retrieved documents, search results, tool output, emails, tickets, web pages, and prior conversation or memory. That content is frequently untrusted — authored by someone other than the agent's operator or principal — yet an agent that does not structurally distinguish trusted instructions from untrusted retrieved content can treat both as equally authoritative.

This is why OWASP's Agentic Applications guidance and NIST's agentic-identity commentary both treat untrusted context as a first-class attack surface rather than an implementation detail (see Primary Sources). Two protective-sounding claims are not sufficient by themselves:

> "The agent only has the entitlements it was granted."

True, and insufficient: the risk is not new entitlement, it is a hostile instruction causing the agent to exercise an entitlement it already legitimately holds.

> "We reviewed the agent's own system prompt and instructions."

True, and insufficient: the risk frequently arrives through content the agent retrieves at run time, not through anything reviewed at design time.

### Memory-specific risk

An agent that retains information across turns or sessions can carry a poisoned instruction, a false fact, or a manipulated preference forward into a later, unrelated task — a task where the original poisoned content is no longer present to be caught by a reviewer looking only at the current input. Memory can therefore convert a single successful manipulation into a persistent one.

### Governing questions

- Is untrusted retrieved content structurally separated from trusted instructions, or does the agent's design treat both as equally authoritative?
- Would a single manipulated document, ticket, tool result, or message be sufficient to trigger a privileged action, or does the design require an independent trusted signal — human approval, policy check, allow-listed target — before privileged use?
- If the agent retains memory, what governs what may be written to it, for how long, and what review occurs before memory content can influence a materially different, later task?
- Is there a monitoring signal that would catch an agent reaching a target or taking an action that is technically permitted but contextually anomalous for the stated task?

The bounded authority envelope from Module 4, Section 5 is the primary control here: an agent confined to one named target, one bounded action set, and a short validity window is much harder to steer into a materially different consequence than one holding broad standing privilege — even where both are, in isolation, properly authenticated and entitled.

## 6. Unauthorized or unreviewed tool discovery

Some agent architectures allow an agent to discover and select tools dynamically — for example, through a registry or protocol the agent queries at run time — rather than being limited to a fixed, reviewed tool set decided at design time. This capability is increasingly common as agents connect to external tool and data sources through standardized protocols, and it materially changes the governance question.

A fixed tool set can be reviewed once, as a unit, against the agent's approved purpose. A dynamically discoverable tool set cannot be reviewed that way: the set of tools the agent might select from at run time can change after the design review occurred, and a newly available tool may carry permissions, targets, or risk the original review never evaluated.

### Governing questions

- Is the agent limited to a reviewed, approved tool set, or can it discover and invoke tools that were not part of the design review?
- If dynamic discovery is permitted, what gate — allow-listing, policy check, human approval — sits between "tool discovered" and "tool invoked with live authority"?
- Who owns the ongoing review obligation when the discoverable tool set can change without a corresponding change to the agent's own design?
- Does the target system, and the tool registry or protocol itself, provide enough identity and provenance information to attribute a discovered tool's use back to the calling agent and its principal?

## 7. Building the tool-and-downstream-authority matrix

The required artifact for this module converts an abstract multi-tool, multi-agent design into a reviewable structure. For each tool and each downstream agent the primary agent can reach, directly or transitively, record:

| Column | What it captures |
|---|---|
| Calling agent | Which agent selects or invokes this tool or downstream agent |
| Tool or downstream agent | The specific capability being invoked |
| Documented business purpose | Why this call is expected to occur |
| Actual permission/entitlement | What the tool or downstream agent can do, independent of intended use |
| Target(s) reachable | Systems, data, or resources the call can ultimately reach |
| Trust of the triggering input | Was this call triggered by a trusted instruction or by retrieved/untrusted content? |
| Authority relative to caller | Narrower, equal, or broader than the calling agent's own authority |
| Attribution at target | What identity does the target actually record? |
| Independent check before high-consequence use | What, if anything, sits between selection and execution |

A design where any row shows broader authority than the caller, attribution collapsing to a shared or generic identity, or a high-consequence action triggered directly by untrusted content with no independent check, is not yet ready for a privileged pilot — regardless of how well Modules 1–4's identity and credential controls are implemented elsewhere in the same design.

## 8. Fictional case — ORION delegates to a log-analysis specialist

Continuing the ORION case introduced in Module 4: the enterprise now proposes letting ORION delegate log-analysis subtasks to a specialist agent, and letting ORION discover diagnostic tools dynamically from an internal tool registry rather than using a fixed, reviewed set.

The draft design says:

- ORION can delegate a "review these logs and recommend a fix" subtask to a specialist agent.
- The specialist agent authenticates with its own service identity but uses a broad, standing "log-reader" entitlement that reaches every application's logs, not only the one ORION was asked about.
- The specialist's recommendation, including any command text it generates, is returned directly to ORION as plain text.
- ORION is permitted to execute a recommended command through the automation tool from Module 4 if the command "looks reasonable," without a person reviewing the specialist's reasoning.
- ORION can additionally query an internal tool registry at run time and use any tool the registry returns, without a separate approval step.
- The target system records the automation tool's identity for any resulting action, not ORION's or the specialist's.

### Why this fails

- The specialist's broad, standing log-reader entitlement is not bounded to ORION's specific request — a confused-deputy risk: if the specialist's inputs (log content, ticket text) can steer its recommendation, that recommendation carries authority ORION never independently evaluated.
- The specialist's recommended command becomes an unreviewed trusted instruction the moment ORION receives it, even though it originated from content the specialist merely read and reasoned over.
- ORION executing a command because it "looks reasonable" is not an independent check; it is the same untrusted-content-to-privileged-action path Section 5 describes, with the specialist agent instead of a document as the intermediate untrusted source.
- Dynamic tool discovery without a gate means the reviewed design and the design actually running in production can diverge without anyone deciding that they should.
- Attribution collapsing to the automation tool's identity repeats Module 1's Failure 6 (the agent chain loses the origin) at the multi-agent layer: no one can reconstruct whether ORION, the specialist, or the tool registry actually drove the final action.

### Stronger governing direction

- Bound the specialist's entitlement to the specific application and log scope ORION's request concerns, not a standing enterprise-wide grant.
- Treat the specialist's recommendation as untrusted input to ORION, not as an instruction — meaning execution still requires the same independent check (policy, allow-list, or human approval) any other untrusted-content-triggered action would require under Module 4's bounded authority envelope.
- Either remove dynamic tool discovery or gate it behind an approval step that evaluates a newly discoverable tool before it is live for the agent to use.
- Preserve the delegating principal and original purpose through every hop so target evidence can show ORION's request, the specialist's finding, and the executed action as one correlated chain.

## 9. Executive and program-lead questions

Ask these in architecture, vendor, pilot, and steering discussions for any multi-tool or multi-agent design:

1. Is every tool and downstream agent this design can reach part of the reviewed design, or can the reachable set change at run time?
2. For each tool or downstream agent, does its actual permission match the documented purpose, or does it satisfy the broadest possible caller?
3. Where does untrusted content (retrieved documents, tool output, another agent's reply) become an input to a privileged decision, and what independent check sits between that input and execution?
4. At each hop in a delegation chain, does authority narrow, stay equal, or expand relative to the delegating agent?
5. If a chain is interrupted partway through, does any step retain an entitlement or continue queued work outside the visible agent's control?
6. Can the target and evidence record reconstruct the full chain from original request to final action, or does attribution collapse into a shared identity partway through?
7. What memory does any agent in this design retain across tasks, and what review governs what can be written to it?
8. Which conclusion in this design belongs to a qualified security or engineering specialist rather than to program-level governance judgment?

## 10. Knowledge check

Answer in complete sentences.

1. What is the difference between a tool's capability and its authority?
2. What makes the confused-deputy pattern different from a straightforward privilege-escalation failure?
3. Why should authority narrow, not merely transfer, across an agent-to-agent delegation chain?
4. What is authority laundering, and how does it relate to the confused-deputy pattern?
5. Why is context and memory a distinct attack surface from identity or credential compromise?
6. Why is a reviewed, fixed tool set easier to govern than dynamic tool discovery?
7. What single design element in the ORION delegation case creates the clearest confused-deputy risk?
8. What must the tool-and-downstream-authority matrix show before a multi-tool or multi-agent design is ready for a privileged pilot?

### Answer guide

1. Capability is what a tool is technically able to do; authority is what it has been approved to do, for whom, and under what conditions. A design that treats capability as automatically authorized repeats Module 1's identity-collapse failure at the tool layer.
2. In a confused-deputy failure, no credential is stolen and no entitlement is exceeded; the agent uses exactly the access it was properly granted, but for a purpose its principal did not intend, because untrusted input steered the decision.
3. If authority does not narrow, a specialist agent invoked for a bounded subtask can end up with broader access than the subtask requires, and any weakness at one hop propagates outward rather than being contained.
4. Authority laundering occurs when one agent uses a second agent's broader, unrelated access to accomplish something the first agent could not do directly, without the second agent independently evaluating whether the request fits its own approved purpose; it is a multi-agent variant of the confused-deputy pattern.
5. Identity and credential controls address who or what is acting and what it can present as proof. Context and memory determine what the agent decides to do next; a properly authenticated, properly entitled agent can still be steered into a wrong or harmful action by content it merely reads.
6. A fixed tool set can be reviewed once, as a unit, against the agent's approved purpose. A dynamically discoverable set can change after that review, so the design actually running can diverge from the design that was approved.
7. The specialist agent's recommended command is treated as a trusted instruction by ORION without independent review, even though it originated from the specialist reasoning over log content the specialist merely read — a direct confused-deputy and untrusted-context path.
8. It must show, for every reachable tool or downstream agent, that authority does not exceed the caller's, that attribution survives to the target, and that no high-consequence action is triggered directly by untrusted content without an independent check.

## 11. Required completion evidence

Complete the [Module 5 Participant Workbook](./exercises/09_Module_05_Participant_Workbook.md) before reading the [Model Answer and Review Guide](./exercises/10_Module_05_Model_Answer_and_Review_Guide.md).

Completion requires:

- a completed tool-and-downstream-authority matrix for the ORION delegation scenario;
- an identified confused-deputy or authority-laundering path with its governing fix;
- a statement of what the design must show before dynamic tool discovery, if used, is acceptable;
- a written or oral defense of the highest residual risk.

Store the completed artifact under `01_AI_AGENT_IDENTITY_GOVERNANCE/completed_work/`.

Publication of these materials does not establish learner completion. Do not update the Progress Record until an original completed artifact and defensible explanation exist.

## 12. Two-minute executive explanation

Use this as a model, not a script to memorize:

> Once an agent can call more than one tool, retrieve content it did not author, remember information across tasks, or hand work to another agent, identity and credential controls alone stop being sufficient. A properly authenticated agent holding exactly the access it was granted can still be steered into the wrong action by a document, a tool result, or another agent's reply — that's a confused deputy, not a stolen credential. My role is to require that every tool and downstream agent in a design map to a documented purpose and a bounded authority narrower than or equal to its caller's, that untrusted content never triggers a high-consequence action without an independent check, and that the chain can be reconstructed end to end. I don't design the tool registry or the agent framework — I make sure the architects and control owners can prove the chain holds together before it goes into production.

## 13. Interview translation

### Question

“How is governing a multi-agent system different from governing one agent?”

### Credible answer

> The identity and access controls are the same discipline as a single agent — the difference is that authority now has to survive handoffs between tools and agents, and the content an agent reads becomes part of the attack surface, not just its credentials. I lead the review that requires every tool and downstream agent in a design to map to a documented purpose, that authority narrows rather than expands across a delegation chain, and that a manipulated document or another agent's output can't trigger a privileged action without an independent check. I rely on qualified security and engineering specialists for the technical implementation; my role is making sure the chain can be reconstructed and defended before it goes into production.

### Positioning boundary

Do not say:

- “I secure agent-to-agent protocols.”
- “I design prompt-injection defenses.”
- “I architect tool registries or agent orchestration platforms.”
- “I am an AI red-team engineer.”

The demonstrated claim is:

> I can lead the enterprise program that governs authority, attribution, and evidence across tool and agent chains, and require the technical proof that the chain holds together.

## 14. Primary sources

- [OWASP Agentic AI — Agentic Security Initiative](https://genai.owasp.org/initiatives/agentic-security-initiative/) — agentic threat and control orientation, including tool and multi-agent risk framing.
- [OWASP Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/) — threat categories used for tool-authority, context, and delegation-chain framing.
- [NIST: Why Agentic AI Needs a Strong Identity Foundation](https://www.nist.gov/blogs/cybersecurity-insights/back-future-why-agentic-ai-needs-strong-identity-foundation) — agent identity, credential sharing, and context/token-scope framing referenced in prior modules and extended here to chains.
- [NCCoE Software and AI Agent Identity and Authorization](https://www.nccoe.nist.gov/projects/software-and-ai-agent-identity-and-authorization) — access-delegation and attribution focus areas relevant to agent-to-agent chains.
- [RFC 8693 — OAuth 2.0 Token Exchange](https://datatracker.ietf.org/doc/html/rfc8693) — delegation-versus-impersonation vocabulary used in Section 4 to describe chain preservation.

The confused-deputy problem is a foundational access-control concept predating agentic AI; this module applies it to agent-and-tool relationships rather than presenting it as new research. Source status was reviewed on 2026-09-17. Verify current status and applicability before production use.

---

**Published:** 2026-09-17  
**Content status:** Accepted for public learning use  
**Scope:** Executive and program-level learning. This is not an implementation standard, security-testing methodology, or production architecture.  
**License:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
