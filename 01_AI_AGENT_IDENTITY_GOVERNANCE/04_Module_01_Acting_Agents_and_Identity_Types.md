# Module 1 — Acting Agents and Identity Types

**Module ID:** P1-M01  
**Learning priority:** AI-agent identity, security, and governance  
**Estimated time:** 75–90 minutes  
**Required output:** Identity-classification and accountability analysis  
**Professional level:** Executive and program leadership
**Version:** 1.0  
**Status:** Accepted for public learning use  
**Source status checked:** 2026-09-17  
**License:** CC BY 4.0

## Why this module matters

Most organizations begin the agent conversation with capability:

- What can the agent do?
- Which tasks can it automate?
- How much time will it save?
- Which systems can it connect to?

The governing questions arrive later:

- What exactly is acting?
- How will the enterprise distinguish it from a human, application, or workload?
- Who owns it?
- Whose authority is it using?
- Which identity will the target system record?
- Can the enterprise stop it without disabling its human owner or unrelated services?
- Who remains accountable when the agent selects an unexpected path?

That sequence is dangerous. Once an agent can call a tool, retrieve protected information, submit a transaction, modify a record, execute code, or initiate a workflow, it is no longer only a content-generation capability. It has become an acting participant in the enterprise control environment.

The first learning objective is therefore not “understand artificial intelligence.” It is:

> Learn to identify every actor in an agent-enabled transaction and prevent the agent from disappearing behind someone else’s identity or authority.

NIST’s AI Agent Standards Initiative describes agents as capable of autonomous action and identifies authentication and identity infrastructure for human-agent and multi-agent interaction as an active research area. NCCoE’s agent identity and authorization project focuses on standards-based approaches to identify, manage, and authorize actions taken by software and AI agents. These efforts are still developing. The immediate enterprise obligation is to use established identity disciplines without pretending every agent-specific question has already been standardized.

## Learning outcomes

After completing this module, a learner should be able to:

1. Explain when an AI capability becomes an identity-governance concern.
2. Distinguish human, service, workload, and agent identities.
3. Identify the difference between an agent service, an agent instance, its owner, and its delegating principal.
4. Explain why a unique agent identity is necessary but not sufficient.
5. Recognize when an agent should be treated as privileged.
6. Identify impersonation and attribution failure.
7. Lead an identity-classification discussion without claiming to design the underlying authentication platform.
8. Produce an initial identity and accountability record for an agent use case.

# 1. From response generator to acting participant

A conversational system that returns text for a human to review presents governance questions, but it may not yet be an acting identity in the target environment.

The boundary changes when the system can do one or more of the following:

- Select a tool.
- Call an API.
- Retrieve nonpublic information.
- Submit a request.
- Create, change, approve, or delete a record.
- Execute a command.
- Trigger a workflow.
- Send a message externally.
- Commit money or resources.
- Grant, request, or exercise access.
- Delegate work to another agent or service.
- Continue pursuing a goal through multiple steps with limited human supervision.

The agent does not need to be fully autonomous before identity matters. Even a human-approved action must be attributable to the agent that proposed or executed it.

## A useful threshold question

Ask:

> Can this capability create an enterprise consequence through a system interaction?

If the answer is yes, identity, authorization, evidence, ownership, and interruption must be designed together.

## Three levels of capability

| Level | Example | Identity-governance implication |
|---|---|---|
| Inform | Summarizes an approved document for a human | Primarily user access, data handling, source provenance, and output review |
| Recommend | Analyzes evidence and proposes a change | Agent identity and reasoning provenance matter; the human decision must remain distinct |
| Act | Calls a tool or system to create a consequence | The acting identity, delegated authority, transaction limits, evidence, and revocation become central |

These levels are not permanent labels for the whole system. The same agent may inform in one step, recommend in another, and act in a third. Governance must classify the action, not merely the product name.

# 2. The four identity types

## 2.1 Human identity

A human identity represents a person.

Examples:

- An employee signing into the service-management system.
- An OT duty manager approving a protected-environment change.
- A contractor receiving time-limited access.
- A security analyst suspending an agent.

A human identity is connected to employment, contract, role, assigned authority, organizational status, and accountability.

### Governing questions

- Is the person currently authorized?
- Which role or assignment supports the access?
- Is the person requesting, approving, executing, or reviewing?
- Has a transfer, leave, contract end, or termination changed the need?
- Is the person acting personally or delegating authority to software?

Human identity should not become a convenient wrapper that conceals agent activity.

## 2.2 Service identity

A service identity represents an application or service rather than a person.

Examples:

- A monitoring platform writing events to a ticketing system.
- An integration service synchronizing asset records.
- A scheduled process rotating an approved credential.
- An application calling a downstream API.

Service identities are established enterprise patterns, but familiar does not mean well governed. They often accumulate standing privilege, shared secrets, unclear ownership, and access that outlives the original purpose.

### Governing questions

- What application or service does the identity represent?
- Who owns the service?
- Is the credential shared?
- Is the access standing or time-limited?
- Which environments and resources can it reach?
- Does the identity allow the target to distinguish separate processes or agent instances?

An enterprise should not automatically label every agent as “just another service account.” That may conceal material differences in behavior and authority.

## 2.3 Workload identity

A workload identity represents a running software workload in a particular computing environment.

Examples:

- A containerized service in a cloud platform.
- A process running in a defined cluster or trust domain.
- A short-lived job created to perform a bounded task.
- A software component authenticated through platform or runtime attestation.

SPIFFE describes standards for securely identifying software systems in dynamic and heterogeneous environments. Workload-identity mechanisms can help answer whether the running software is the expected workload.

### Governing questions

- Which runtime, environment, and trust domain does the identity represent?
- Is the workload ephemeral?
- How is the running workload verified?
- Is the identity tied to the workload rather than stored as a reusable secret?
- Does workload identity distinguish one agent, task, or instance from another?
- What happens when the workload ends?

Workload identity may establish what software is running. It does not establish why the enterprise authorized the business action.

## 2.4 Agent identity

An agent identity represents an agent service or instance capable of choosing or taking actions in pursuit of a goal.

Examples:

- An operations agent that selects an approved runbook and invokes remediation.
- A procurement agent that prepares or submits a purchase.
- A security agent that investigates events and isolates an endpoint.
- A development agent that changes code and opens a pull request.
- A research agent that delegates subtasks to specialist agents.

An agent may operate through a service or workload identity. “Agent identity” therefore describes a governing need, not necessarily one new technical credential type.

The enterprise needs to connect:

- The registered agent.
- The running workload or instance.
- The credential presented.
- The human or system on whose behalf it acts.
- The business purpose.
- The permitted tools and targets.
- The specific transaction.
- The resulting consequence.

### Governing questions

- Is the agent registered as its own governed entity?
- Can the target system distinguish the agent from the human owner?
- Can the enterprise distinguish one agent instance from another when necessary?
- Who owns the agent as an operational capability?
- Who delegated authority for the current task?
- Which tools and systems may it use?
- May it invoke other agents?
- Can it modify its own goals, tools, permissions, or owner?
- How is it suspended and retired?

# 3. Do not collapse five different things

A mature discussion separates at least five elements.

| Element | Question |
|---|---|
| Agent | What capability is pursuing the goal? |
| Runtime or workload | Where and as what software is it operating? |
| Credential | What proof does it present? |
| Delegating principal | On whose behalf or under whose authority is it acting? |
| Accountable owner | Who remains responsible for operating and governing it? |

These elements may be related, but they are not interchangeable.

## Example

A finance employee asks an expense agent to submit a report.

- The **human identity** is the employee.
- The **agent identity** is the registered expense agent.
- The **workload identity** may represent the running agent instance.
- The **credential** may be a short-lived token.
- The **delegating principal** may be the employee for the specific report.
- The **operational owner** may be the finance automation team.
- The **target system** should record enough information to distinguish the agent’s action from direct human entry.

If the agent simply uses the employee’s username and password, the target may record only the employee. The agent has disappeared from the evidence chain.

# 4. Unique identity is necessary but insufficient

NIST’s current identity guidance argues that agents should be treated as first-class entities with their own identifiers, credentials, and entitlements connected to the user or system operating them.

That closes an important attribution gap, but it does not answer the entire governance problem.

A unique agent identity proves none of the following by itself:

- The business purpose is valid.
- The owner has authority to deploy it.
- The requested action is necessary.
- The permission is appropriately scoped.
- The context influencing the agent is trustworthy.
- The tool selected is approved.
- The transaction remains within delegated intent.
- The human approval is informed.
- The resulting consequence is acceptable.
- The agent should continue operating.

The program leader should therefore resist two incomplete statements:

> “We know which agent it is, so the transaction is governed.”

and:

> “The agent used a valid token, so the action was authorized.”

Identity is one required fact. Governance connects identity to purpose, authority, evidence, consequence, and accountable decision-making.

# 5. Ownership is not the same as delegation

## Ownership

Ownership answers who is responsible for the capability over time.

An agent may require several owners:

| Ownership role | Responsibility |
|---|---|
| Executive sponsor | Owns the business proposition and investment support |
| Business owner | Owns the use case, value, acceptable operating boundary, and business consequence |
| Technical owner | Owns the platform or application operation |
| IAM/PAM owner | Owns relevant identity, credential, entitlement, and access processes |
| Security owner | Owns security control requirements and response integration |
| Data owner | Owns permitted data use and handling |
| Operational owner | Owns day-to-day operation, support, continuity, and retirement |

A list of reviewers is not the same as one accountable owner.

## Delegation

Delegation answers whose authority is being exercised for a particular action.

Examples:

- An employee delegates permission to an agent to retrieve that employee’s calendar.
- A service delegates a bounded transaction to a specialist agent.
- An authorized change record permits an operations agent to execute one defined action.
- A governance forum authorizes a pilot within named limits.

The delegating principal may change by transaction. The operational owner usually does not.

## Program-level challenge

Ask:

> If the agent performs an authorized action that creates an unexpected consequence, who owns the agent, who delegated the action, who approved the transaction, and who had authority to accept the residual risk?

If those answers cannot be separated, accountability is probably being inferred rather than designed.

# 6. When is an agent privileged?

An agent should be considered privileged when it can exercise authority capable of materially affecting protected resources, security posture, operations, money, rights, obligations, or evidence.

Privilege is not limited to a traditional administrator account.

## Privilege indicators

Treat the agent as potentially privileged when it can:

- Change identity, access, roles, groups, or entitlements.
- Retrieve, use, rotate, or expose credentials or secrets.
- Execute code or commands.
- Modify production or protected OT systems.
- Start, stop, isolate, or reconfigure services.
- Create, approve, or close changes, incidents, or exceptions.
- Delete records or alter evidence.
- Transmit restricted data.
- Commit money, purchases, or contractual action.
- Publish externally on behalf of the enterprise.
- Disable users, devices, or controls.
- Invoke another privileged tool or agent.
- Use break-glass capability.
- Operate at machine speed or scale even when each individual action appears routine.

## Read access can also be privileged

An agent that cannot change a system may still retrieve:

- Passwords or secrets.
- Vulnerability details.
- Employee or customer information.
- Protected operational data.
- Legal or investigation material.
- Security architecture.
- Financial or transaction data.

The correct question is not “Is it read-only?” It is:

> What consequence can this access create if it is misused, combined, transmitted, or used to guide later action?

# 7. Identity failure patterns

## Failure 1 — Human credential sharing

The agent uses the human owner’s username, password, session, or personal token.

Consequences:

- The target sees the human rather than the agent.
- Human and agent actions become difficult to distinguish.
- The agent inherits broad access.
- Revoking the agent may disrupt the human.
- Evidence may imply the human personally executed the transaction.

## Failure 2 — One shared automation identity

Several workflows and agents use one automation account.

Consequences:

- Attribution stops at the shared account.
- Privileges must satisfy the broadest user.
- Individual suspension becomes difficult.
- Ownership and certification become unclear.
- A compromised process exposes unrelated workflows.

## Failure 3 — One identity across environments

The same identity or credential reaches test, corporate production, and protected OT.

Consequences:

- Environment boundaries weaken.
- A test compromise may affect production.
- Policy differences may exist only on paper.
- Suspension may disrupt several operating domains.
- Evidence may not show which authority applied.

## Failure 4 — Agent identity without transaction context

The agent is uniquely identified, but the evidence does not preserve the business request, delegating principal, policy, approved purpose, or human authorization.

Consequence:

The enterprise can answer “which agent acted” but not “why this consequence was authorized.”

## Failure 5 — Ownerless agent

The development team deploys the agent, but no durable operational and business ownership exists.

Consequences:

- Access certification becomes ceremonial.
- Incidents move between teams.
- Changes occur without reauthorization.
- Credentials and integrations persist after the use case changes.
- Retirement is incomplete.

## Failure 6 — Agent chain loses the origin

Agent A invokes Agent B, which calls Tool C using a broad service identity.

Consequences:

- The target sees Tool C or the service account.
- The original delegating principal disappears.
- Authority may expand across the chain.
- No owner can reconstruct the entire transaction.

# 8. Regulated-enterprise example

## Scenario

A regulated utility introduces an agent to help restore corporate infrastructure and support protected OT operations.

The agent can:

- Read alerts and tickets.
- Retrieve an approved runbook.
- Recommend remediation.
- Request temporary access.
- Invoke an administrative tool.
- Restart a service after approval.
- Update the incident record.

## Weak design

- The agent runs inside the operator’s local session.
- It uses the operator’s existing privileges.
- A shared automation account reaches legacy tools.
- The same orchestration platform reaches corporate IT and protected OT.
- The target system records the human or shared account.
- The ticket stores only the agent’s final summary.

## Why this fails

The design cannot reliably answer:

- Which action came from the human and which came from the agent?
- Which identity crossed the IT/OT boundary?
- Whose authority supported the action?
- Which version of the agent and runbook was used?
- Whether the agent selected an unexpected tool.
- How to disable the agent without disabling the operator.
- Whether the action remained inside the approved purpose.

## Stronger governing direction

The program leader should require qualified architects and control owners to demonstrate:

- A registered agent identity.
- A distinguishable runtime or workload identity where necessary.
- Separate authority paths for materially different environments.
- No routine use of shared human credentials.
- Named business, technical, security, IAM, data, and operational ownership.
- A traceable connection from business request to agent, credential, policy, tool, target, and result.
- Independent suspension and revocation.
- A validated fallback if the agent becomes unavailable or untrusted.

The program leader does not need to configure the identity provider to lead this review. The program leader must make the missing decisions and evidence visible.

# 9. Executive review questions

Use these questions in architecture, vendor, pilot, and steering discussions:

1. What exactly is the acting entity?
2. Is the enterprise registering an agent service, each agent instance, or both?
3. Which identity will the target system record?
4. Can the target distinguish the agent from its human owner?
5. Is the agent using its own credential or borrowing another identity?
6. Which runtime or workload is presenting the credential?
7. Who owns the agent’s business purpose?
8. Who owns day-to-day operation?
9. Who delegated authority for this task?
10. What action makes the agent privileged?
11. Does one identity cross test, production, corporate IT, or protected OT?
12. Can the agent invoke another agent or tool under broader authority?
13. Can the agent be suspended without disabling its owner or unrelated services?
14. What record will prove who—or what—acted?
15. What evidence will show why the action was authorized?

# 10. Applied exercise — Identity classification

## Instructions

For each scenario:

1. Identify every human, service, workload, and agent identity.
2. Identify the accountable owner.
3. Identify the delegating principal.
4. State what the target system is likely to record.
5. Identify the principal attribution or impersonation risk.
6. Decide whether the agent is privileged.
7. State the next governing question.

## Scenario A — Calendar assistant

An employee authorizes an assistant to read the employee’s calendar, find a meeting time, and send invitations to internal attendees.

| Question | Response |
|---|---|
| Human identity | |
| Service identity | |
| Workload identity | |
| Agent identity | |
| Accountable owner | |
| Delegating principal | |
| Target system records | |
| Privileged? Why? | |
| Principal risk | |
| Next governing question | |

## Scenario B — Service restart agent

An operations agent reads an approved incident ticket, retrieves a runbook, requests elevated access, and restarts a corporate production service after operator approval.

| Question | Response |
|---|---|
| Human identity | |
| Service identity | |
| Workload identity | |
| Agent identity | |
| Accountable owner | |
| Delegating principal | |
| Target system records | |
| Privileged? Why? | |
| Principal risk | |
| Next governing question | |

## Scenario C — Protected OT support

The same operations agent uses a shared automation account to change a configuration on a protected OT support host. An OT manager approved the ticket.

| Question | Response |
|---|---|
| Human identity | |
| Service identity | |
| Workload identity | |
| Agent identity | |
| Accountable owner | |
| Delegating principal | |
| Target system records | |
| Privileged? Why? | |
| Principal risk | |
| Next governing question | |

## Scenario D — Multi-agent research

A primary research agent delegates log analysis to a specialist agent. The specialist retrieves restricted security logs using a service account and returns recommended commands to the primary agent.

| Question | Response |
|---|---|
| Human identity | |
| Service identity | |
| Workload identity | |
| Primary agent identity | |
| Specialist agent identity | |
| Accountable owner(s) | |
| Delegating chain | |
| Target system records | |
| Privileged? Why? | |
| Principal risk | |
| Next governing question | |

# 11. Review observations

A strong response should recognize the following.

## Scenario A

The employee is the delegating principal, but the assistant should remain distinguishable as the actor that sends invitations. The action is lower consequence than system administration, but it can still expose private information or create external commitments. The next question is whether the agent’s scope is limited to the authorized calendar, attendees, time window, and action.

## Scenario B

The agent is privileged because it can affect production availability and exercise elevated access. Operator approval does not eliminate the need for agent identity. The target should not record only the operator or a shared administrative identity. The next question is how the transaction links the ticket, approval, temporary privilege, tool call, target action, and result.

## Scenario C

The shared automation identity creates a material attribution gap. The protected OT boundary should not inherit the corporate access design without separate analysis. Approval of a ticket does not prove the target can identify the agent or enforce the approved action. A strong response should challenge whether this use case may proceed at all until identity, environment separation, revocation, and evidence are demonstrated.

## Scenario D

Both agents require identification, ownership, and bounded delegation. The restricted log access may be privileged even if it is read-only. The chain must preserve the original task and delegating authority. The next question is whether the specialist agent can access only the necessary logs and whether the primary agent may execute the recommended command without a separate authorization decision.

# 12. Knowledge check

Answer in complete sentences.

1. When does an AI capability become an identity-governance concern?
2. What is the difference between a service identity and an agent identity?
3. What can workload identity prove, and what can it not prove?
4. Why should an agent not use the human owner’s credential?
5. Why is unique identity necessary but insufficient?
6. What is the difference between the accountable owner and delegating principal?
7. When should a read-only agent be considered privileged?
8. Why is one identity across test, production, and protected OT concerning?
9. What is lost when an agent chain ends in a shared service account?
10. What must a program leader require without designing the technical implementation?

## Answer guide

1. It becomes an identity-governance concern when it can create an enterprise consequence through access, a tool, a transaction, or a system interaction.
2. A service identity represents an application or integration; an agent identity identifies a capability that may select actions and pursue goals. An agent may technically use a service identity, but the governance record must still distinguish the agent and its authority.
3. Workload identity can help establish which software is running in which environment. It does not prove that the business purpose, transaction, or consequence is authorized.
4. The target may see only the human, the agent inherits broad access, evidence becomes ambiguous, and revocation may disrupt the human.
5. Identity answers what acted. It does not establish purpose, permission sufficiency, context integrity, business authority, acceptable consequence, or continuation.
6. The owner remains responsible for the capability over time. The delegating principal provides authority for a particular task or transaction.
7. When its information access can materially affect confidentiality, security, operations, rights, money, investigations, or later privileged action.
8. The design weakens environment separation, expands compromise impact, complicates revocation, and may conceal which policy and authority applied.
9. The target can no longer reliably attribute the transaction to the originating agent, owner, or delegated purpose, and authority may expand invisibly.
10. Named identities and owners, a traceable authority chain, environment separation, evidence, independent revocation, fallback, and qualified proof that the controls work.

# 13. Required completion evidence

Create one document titled:

> Identity Classification and Accountability Map — Module 1

It must contain:

- The completed four-scenario exercise.
- One diagram or table tracing a selected transaction from human/system request through agent, workload, credential, tool, and target.
- The accountable owner and delegating principal at each relevant point.
- A statement identifying where the agent could disappear behind another identity.
- A statement identifying what makes the agent privileged.
- Five unanswered questions requiring architecture, IAM/PAM, security, data, OT, or operational input.
- A two-minute executive explanation.

Store the completed artifact under:

`01_AI_AGENT_IDENTITY_GOVERNANCE/completed_work/`

Do not update the Progress Record to Demonstrated until the artifact can be defended under questioning.

# 14. Two-minute executive explanation

Use this as a model, not a script to memorize:

> The identity issue begins when an AI capability can take action through enterprise systems. At that point, we need to distinguish the human, the agent, the running workload, the credential, and the service or tool it invokes. If the agent operates through a human or shared account, the target may record the wrong actor, privileges may be broader than intended, and we may be unable to revoke the agent independently. A unique agent identity is necessary, but it is not the entire control. We must also preserve the owner, delegating authority, business purpose, permitted action, environment, evidence, and shutdown mechanism. My role is to lead that program boundary—ensuring the architects and control owners can prove who or what acted, under whose authority, within which limits, and how the enterprise can stop it.

# 15. Interview translation

## Question

“How does your IAM/PAM experience apply to AI agents?”

## Credible answer

> My experience is at the program-leadership level rather than as the identity engineer. The connection to AI agents is direct: once an agent can act through enterprise systems, it becomes a non-human identity and potentially a privileged one. The enterprise has to distinguish the agent from the human owner, constrain authority by purpose and environment, preserve the delegation and evidence chain, and revoke the agent independently. I can lead the program that connects IAM/PAM, architecture, cybersecurity, operations, audit, vendors, and accountable executives around those decisions. I would add only verified examples from my own experience.

## Positioning boundary

Do not say:

- “I design agent identity protocols.”
- “I implement OAuth or SPIFFE.”
- “I architect agent authentication.”
- “I am an AI security engineer.”

The demonstrated claim is:

> I can lead the enterprise program that governs agent identity, privileged authority, evidence, and lifecycle controls.

# Primary sources

- [NIST AI Agent Standards Initiative](https://www.nist.gov/artificial-intelligence/ai-agent-standards-initiative) — initiative page; created February 17, 2026 and updated August 14, 2026 when this module was prepared.
- [NCCoE Software and AI Agent Identity and Authorization](https://www.nccoe.nist.gov/projects/software-and-ai-agent-identity-and-authorization) — project status: Reviewing Comments when this module was prepared.
- [NIST: Why Agentic AI Needs a Strong Identity Foundation](https://www.nist.gov/blogs/cybersecurity-insights/back-future-why-agentic-ai-needs-strong-identity-foundation) — August 27, 2026.
- [SPIFFE Standards](https://spiffe.io/docs/latest/spiffe-specs/) — workload-identity reference.

---

**Published:** 2026-09-17  
**Content status:** Accepted for public learning use  
**Scope:** Executive and program-level learning. This is not an implementation standard or production architecture.  
**License:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
