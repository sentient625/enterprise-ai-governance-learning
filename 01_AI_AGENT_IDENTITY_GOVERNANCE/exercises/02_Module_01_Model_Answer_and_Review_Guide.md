# Module 1 — Model Answer and Review Guide

**Package ID:** P1-M01-MODEL  \
**Related module:** P1-M01 — Acting Agents and Identity Types  \
**Version:** 1.0  \
**Status:** Accepted for public learning use  \
**Case type:** Fictional and illustrative  \
**Published:** 2026-09-17  \
**License:** CC BY 4.0

## Use boundary

Complete the Module 1 Participant Workbook before consulting this guide.

This document illustrates strong executive and program-level reasoning. It is not the only defensible answer, and reading it does not establish a learner’s competence. Learners should compare their analysis, revise judgments they cannot defend, and preserve remaining uncertainty.

This is educational material—not production architecture, technical implementation guidance, or a regulatory conclusion.

# 1. Analytical model

Each scenario is examined through seven control questions.

| Control question | Purpose |
|---|---|
| Who or what is acting? | Distinguish every human, agent, service, and workload identity |
| Who owns the capability? | Preserve durable accountability for operation and governance |
| Who delegated this action? | Identify the source of authority for the specific task |
| What will the target record? | Determine whether the evidence identifies the real actor |
| Is the agent privileged? | Classify authority by possible consequence, not account label |
| Where can attribution fail? | Identify impersonation, shared-account, and correlation gaps |
| What must be decided next? | Route unresolved questions to the correct control owner |

## Identity distinctions used

| Identity type | Working definition |
|---|---|
| Human identity | A person acting through an enterprise role or assigned authority |
| Service identity | An application, platform, integration, or service acting non-interactively |
| Workload identity | The running software instance in a specific environment or trust domain |
| Agent identity | The governed agent capability or instance that selects or takes actions toward a goal |

The same transaction may include all four. One technical credential must not be mistaken for the entire identity and authority chain.

# 2. Scenario A — Calendar assistant

## Scenario

An employee authorizes an assistant to read the employee’s calendar, find a meeting time, and send invitations to internal attendees.

## Classification

| Question | Analysis |
|---|---|
| Human identity | The employee requesting scheduling and any internal attendees whose calendars are consulted |
| Service identity | The calendar platform, scheduling integration, directory service, and messaging service used to send invitations |
| Workload identity | The particular runtime or process executing the assistant task |
| Agent identity | The registered calendar assistant that interprets the request, searches availability, selects a time, and initiates invitations |
| Accountable owner | The business/application owner responsible for the assistant as an enterprise capability; the calendar-platform owner remains accountable for its service boundary |
| Delegating principal | The employee delegates a bounded scheduling task for the employee’s calendar; the employee does not automatically possess authority over every attendee’s private calendar information |
| Target system likely records | Depending on the design, the calendar system may record the employee, the application client, the assistant, or only a delegated application action. This must be verified rather than assumed |
| Privileged? Why? | It is not automatically a traditional administrative identity. It still exercises delegated authority and may become privileged when it can read sensitive calendars, send externally, act for executives, schedule at scale, or create commitments |
| Principal risk | The assistant disappears behind the employee’s identity, receives broader calendar or messaging scope than the task requires, exposes private appointment details, or sends invitations outside the employee’s intent |
| Next governing question | Can the enterprise enforce and evidence the authorized calendar, attendee group, action, data exposure, time window, and prohibition on external or bulk use? |

## Boundary statement

The assistant may read the minimum availability information required from approved internal calendars and send an invitation for the employee’s requested meeting. It may not read unrelated appointment content, invite external participants without separate approval, alter other meetings, or retain calendar content beyond the task.

## What should be evidenced

- Employee request and authenticated identity.
- Registered assistant identity.
- Delegated calendar and messaging scope.
- Calendars and attributes accessed.
- Meeting details selected.
- Invitations sent and recipients.
- Exceptions, failures, or external-recipient attempts.
- Delegation expiration and revocation.

## Program-lead conclusion

Proceed only within a bounded, observable pilot if the assistant remains distinguishable from the employee and its data and messaging authority is narrower than the employee’s full access.

# 3. Scenario B — Service restart agent

## Scenario

An operations agent reads an approved incident ticket, retrieves a runbook, requests elevated access, and restarts a corporate production service after operator approval.

## Classification

| Question | Analysis |
|---|---|
| Human identity | The incident requester, assigned operator, approving incident commander or other authorized approver, and any reviewer |
| Service identity | The monitoring platform, service-management system, runbook repository, PAM or credential service, orchestration tool, and target service |
| Workload identity | The specific agent runtime or job executing in the approved corporate environment |
| Agent identity | The registered remediation agent instance interpreting the incident, selecting the approved runbook, requesting privilege, and invoking the restart |
| Accountable owner | The operations-automation product owner owns the agent capability; the application/service owner owns the affected production service; IAM/PAM and security owners govern their control domains |
| Delegating principal | Authority begins with an approved incident process and is exercised for the transaction by the currently authorized operator or incident commander. The ticket alone is evidence, not necessarily the delegating principal |
| Target system likely records | The target may record a temporary agent identity, orchestration identity, privileged service account, or human operator. The design must preserve the agent and delegator even if the target has technical limitations |
| Privileged? Why? | Yes. The agent can obtain elevated access and affect production availability |
| Principal risk | A valid ticket or operator approval is treated as blanket authority; the agent receives broad standing access; the target records only a service account; or the approved runbook, requested parameters, and actual execution diverge |
| Next governing question | Can one transaction correlate the incident, approver, agent instance, workload, short-lived credential, approved operation, target, result, and rollback status? |

## Boundary statement

The remediation agent may request a short-lived credential to execute one named, reversible restart operation against one approved corporate production service under an active incident. It may not modify configuration, change identity or access, reach protected operational environments, select an unapproved runbook, or approve its own elevation.

## What should be evidenced

- Active incident and business purpose.
- Agent and workload identities.
- Runbook version and integrity.
- Human approver, decision, and information presented.
- Policy decision and temporary privilege.
- Credential audience, duration, and target.
- Exact tool invocation and parameters.
- Before-and-after service state.
- Partial failure, rollback, and restoration record.

## Program-lead conclusion

Pilot with conditions. Approval depends on unique attribution, just-in-time privilege, one-operation scope, independent human authority, environment exclusion, correlated evidence, and tested interruption and rollback.

# 4. Scenario C — Protected OT support

## Scenario

The same operations agent uses a shared automation account to change a configuration on a protected operational-technology support host. An OT manager approved the ticket.

## Classification

| Question | Analysis |
|---|---|
| Human identity | The requester, OT manager, assigned operator if one exists, and control owners responsible for the protected environment |
| Service identity | The service-management platform, shared automation account, PAM or secret service, orchestration tool, and protected OT support host |
| Workload identity | The agent runtime from which the protected-environment action originates; its trust domain and network location must be explicit |
| Agent identity | The operations agent that interprets the ticket and initiates the configuration change |
| Accountable owner | The agent owner remains accountable for the capability; the OT system owner remains accountable for the protected host and operating boundary; neither ownership role replaces qualified security, safety, compliance, or change authority |
| Delegating principal | The OT manager appears to approve the action, but the enterprise must verify that this role may delegate agent execution, approve this configuration class, and accept the operational consequence |
| Target system likely records | The shared automation account, not the agent, workload, approver, or original business purpose |
| Privileged? Why? | Yes. The agent can alter configuration in a protected operational environment with possible reliability, safety, compliance, and production consequences |
| Principal risk | The shared account destroys individual attribution, crosses an environment boundary, may carry broad standing privilege, prevents isolated revocation, and can make a ticket approval appear stronger than the enforceable control |
| Next governing question | Is autonomous or agent-mediated configuration change permitted in this protected environment at all, and what separately approved identity, network, change, safety, recovery, and evidence controls would be required? |

## Boundary statement

No operating authority should be inferred from the corporate agent design, shared automation account, or approved ticket. Protected OT access requires a separately governed decision. Until qualified owners demonstrate distinct identity, environment isolation, bounded action, meaningful approval, recovery, and complete evidence, the agent may not execute the change.

## What should be evidenced before any reconsideration

- Explicit OT use-case authorization.
- Named business, OT, security, safety, change, and identity owners.
- Distinct agent, workload, and privileged-access path.
- Technical prevention of corporate-to-OT authority inheritance.
- Approved change class, target, parameters, timing, and rollback.
- Confirmation that the human approver has the required authority.
- Independent suspension and credential revocation.
- Protected, time-correlated records across every enforcement point.
- Tested manual fallback and operational-continuity plan.

## Program-lead conclusion

Defer. The shared identity and inherited corporate design create material attribution and boundary failures. A ticket approval cannot compensate for missing identity separation and enforceable OT controls.

# 5. Scenario D — Multi-agent research

## Scenario

A primary research agent delegates log analysis to a specialist agent. The specialist retrieves restricted security logs using a service account and returns recommended commands to the primary agent.

## Classification

| Question | Analysis |
|---|---|
| Human identity | The analyst, investigator, or authorized requester who initiated the research task; a separate authorized decision-maker may be required before any recommended command is executed |
| Service identity | The research platform, restricted-log platform, shared or dedicated log-access service account, agent broker, and any command-execution service |
| Workload identity | The primary-agent runtime and the separately executing specialist-agent runtime |
| Primary agent identity | The registered research agent that accepts the task, selects the specialist, receives findings, and prepares or acts on recommendations |
| Specialist agent identity | The registered log-analysis agent that receives a bounded subtask and retrieves restricted security data |
| Accountable owners | The primary-agent owner owns orchestration and task completion; the specialist-agent owner owns the analysis capability; the security-log owner owns permitted data use; ownership must not disappear between agents |
| Delegating chain | Authorized human or system → primary research agent → specialist log-analysis agent → log service. Each transfer must preserve the originating purpose and may narrow but not silently expand authority |
| Target system likely records | The log platform may record only the service account. The primary platform may record Agent A calling Agent B without preserving the final data query or credential use |
| Privileged? Why? | The specialist is privileged for this purpose because restricted security logs may expose sensitive systems, identities, investigations, vulnerabilities, or credentials. The primary becomes more consequential if it can execute the recommended commands |
| Principal risk | The service account hides the specialist; delegation expands beyond the original task; restricted data returns to an unauthorized context; untrusted log content manipulates the analysis; or recommendations become commands without a new authorization decision |
| Next governing question | Can the enterprise restrict and trace the exact log sources, fields, time range, purpose, downstream disclosure, recommendation provenance, and separate authorization required before execution? |

## Boundary statement

The primary agent may delegate a named analysis question to the registered specialist. The specialist may retrieve the minimum approved log subset for the originating investigation and return findings and recommendations. Neither agent may expand the log scope, disclose restricted data outside the authorized case, or execute recommended commands without a separate policy and human-authority decision.

## What should be evidenced

- Original requester and authorized case.
- Primary and specialist agent identities.
- Delegation request and accepted subtask.
- Log-access identity, query, fields, and time range.
- Data classification and handling decision.
- Analysis inputs, references, and output provenance.
- Recommended commands and uncertainty.
- Separate decision if execution is proposed.
- Data-return, retention, and destruction records.

## Program-lead conclusion

Constrain the design before use with restricted logs. Unique identities, purpose-bound delegation, data minimization, output provenance, and a hard separation between recommendation and execution are required.

# 6. Selected transaction trace

## Scenario B — One production service restart

| Sequence | Actor or control point | Identity presented or recorded | Accountable owner | Delegating principal | Required evidence | Failure to challenge |
|---:|---|---|---|---|---|---|
| 1 | Monitoring and incident process | Monitoring service and incident record | Operations process owner | None yet; an alert does not delegate action | Alert, incident ID, affected service, severity | Alert becomes assumed authority |
| 2 | Human triage | Assigned operator | Incident-management owner | Authorized incident role validates need | Assignment, assessment, decision time | Unassigned or unauthorized person initiates action |
| 3 | Remediation agent | Registered agent identity | Agent product owner | Operator or incident commander delegates one task | Agent ID, task, purpose, limits, expiration | Agent acts through the human session and disappears |
| 4 | Agent runtime | Workload identity in approved trust domain | Platform owner | Inherits only the bounded task context | Runtime ID, environment, integrity/attestation evidence as applicable | Credential is usable from another workload |
| 5 | Privilege decision | Agent requests temporary access | IAM/PAM owner | Delegation and policy are evaluated | Subject, action, target, policy, approval, duration | Broad admin credential is issued |
| 6 | Tool invocation | Orchestrator or tool identity plus agent context | Automation/tool owner | No new authority unless explicitly allowed | Tool, runbook, version, parameters, correlation ID | Tool identity replaces the agent in evidence |
| 7 | Target execution | Target-recognized credential or service identity | Application/service owner | Target enforces the approved operation | Target, operation, start/end, result | Target permits adjacent operations |
| 8 | Consequence and recovery | Service state and monitoring | Operations owner | Incident authority evaluates outcome | Before/after state, availability, partial failure, rollback | “Command succeeded” is mistaken for restored service |
| 9 | Review and closure | Human reviewer and incident owner | Incident-management owner | Authorized role accepts restoration and closes work | Review, exceptions, residual risk, closure | No one validates the actual consequence |

## Authority chain

The intended chain is:

> Authorized incident role → bounded task delegation → registered agent → approved workload → temporary credential → approved tool and runbook → named target operation → verified service outcome.

The authority should narrow as it moves downstream. No tool, credential, or agent-to-service transition should silently expand it.

# 7. Where the agent can disappear

| Disappearance point | What the record may show | What is lost |
|---|---|---|
| Human SSO session | Employee or operator | Whether the human or agent chose and executed the action |
| Shared service account | Generic automation account | Which agent, task, owner, and delegation applied |
| Workload-only identity | Runtime or cluster workload | Which governed agent capability and business purpose acted |
| Tool broker | Tool or orchestrator | Original requester and agent decision |
| Target application | Local service account | Upstream policy, approval, and delegation |
| Agent-to-agent handoff | Specialist service | Originating task, limits, and accountable orchestration owner |
| Consolidated logging | Disconnected events | End-to-end transaction and consequence |

The governing requirement is not that every target natively store every fact. The requirement is that the enterprise can reliably correlate the facts without reconstructing them through unsupported inference.

# 8. Privilege determination

An agent is privileged when its permitted action can materially affect protected resources, confidentiality, security posture, operational continuity, money, rights, obligations, or evidence.

| Scenario | Privilege determination |
|---|---|
| A — Calendar assistant | Governed delegated authority; conditionally privileged when sensitive data, external messaging, executive accounts, or scale create material consequence |
| B — Service restart | Privileged because it receives elevation and can affect production availability |
| C — Protected OT support | Highly privileged because it can change a protected operational host and affect regulated operations |
| D — Multi-agent research | Specialist is privileged for restricted-log access; the primary crosses a further boundary if recommendations can become executed commands |

The classification follows consequence rather than the account name or whether access is technically read-only.

# 9. Five unanswered questions for qualified owners

## 1. IAM/PAM

Can the enterprise issue and revoke a short-lived, audience-bound credential that preserves the agent, workload, delegating principal, permitted operation, target, and duration without forcing the target to trust a broad shared account?

**Required owner:** IAM/PAM architect and platform owner.

## 2. Enterprise and solution architecture

How will transaction context and correlation survive the transitions among the initiating system, agent platform, workload, tool broker, credential service, downstream agent, and target?

**Required owner:** Enterprise/solution architecture with application owners.

## 3. Cybersecurity

What threats arise from credential replay, tool misuse, malicious or poisoned context, agent-to-agent authority expansion, excessive logging of sensitive data, and incomplete suspension?

**Required owner:** Cybersecurity architecture and operations.

## 4. Protected OT

Which agent actions, if any, are permitted in the protected operational environment, and what safety, reliability, segmentation, change, recovery, compliance, and evidence conditions must be satisfied?

**Required owner:** OT system owner with qualified safety, security, compliance, and operational authorities.

## 5. Operations and continuity

Who may delegate and approve each action class, how will the enterprise verify successful consequence rather than command completion, and what manual fallback exists when the agent, identity, tool, or target becomes unavailable?

**Required owner:** Business and operations owner with incident/change and continuity leadership.

These questions are intentionally unresolved. Program leadership requires the right evidence from accountable specialists rather than invented technical certainty.

# 10. Two-minute executive explanation

> An AI agent becomes an identity-governance concern when it can create an enterprise consequence through a system, tool, or transaction. At that point, we must distinguish the human requester, the agent, the running workload, the credential, the tool, and the target. If the agent acts through a human or shared account, the target may record the wrong actor, authority can become broader than the approved purpose, and we may be unable to stop the agent independently.
>
> A unique agent identity is necessary, but it is not the whole control. The enterprise also needs the accountable owner, delegating principal, permitted action, target environment, time and transaction limits, evidence, and suspension path. In a production or protected operational environment, a ticket or human approval cannot compensate for a shared identity or an unenforceable boundary.
>
> My role is not to configure the identity provider or design the token protocol. My role is to lead the program across IAM/PAM, architecture, cybersecurity, operations, data, audit, and accountable executives so they can prove who or what acted, under whose authority, within which limits, with what consequence, and how the enterprise can stop it.

# 11. Learner defense

A learner should answer these questions without reading the scenario conclusions.

1. Why is the calendar assistant an identity-governance concern even if it is not a traditional administrator?
2. In Scenario B, who delegates the restart, and why is the ticket alone insufficient?
3. Why does the OT manager’s approval not repair the shared-account failure in Scenario C?
4. Where does authority risk expanding in the multi-agent scenario?
5. What is the difference between the agent identity and workload identity?
6. Which facts must remain correlated if a target records only a service identity?
7. When can read-only access be privileged?
8. What would cause you to defer the corporate production pilot?
9. What would cause you to prohibit the OT use case?
10. Which decisions belong to the program leader, and which require qualified technical or control owners?

## Self-review checklist

- [ ] I completed the participant workbook before reading this guide.
- [ ] I can explain where my analysis differs and why.
- [ ] I can defend the selected transaction trace.
- [ ] I can distinguish accountable ownership from transaction-specific delegation.
- [ ] I classified privilege by consequence rather than account label.
- [ ] I identified where the agent can disappear behind another identity.
- [ ] I routed unresolved decisions to qualified owners.
- [ ] I can deliver the two-minute explanation without reading it.
- [ ] I have not represented this exercise as production architecture or implementation experience.

## Completion boundary

A learner may preserve a revised workbook as completion evidence only after being able to defend the reasoning. This model answer must not be submitted unchanged as the learner’s work.

# 12. Source basis

This model answer applies the concepts and source set governed in P1-M01:

- NIST AI Agent Standards Initiative.
- NCCoE Software and AI Agent Identity and Authorization project.
- NIST guidance on the identity foundation for agentic AI.
- SPIFFE workload-identity standards.

Source status and links remain controlled in the repository Source Register and Module 1. No new external requirement is asserted here.

---

**Positioning boundary:** Use of this model answer does not demonstrate hands-on design or implementation of agent identity, OAuth, SPIFFE, PAM, OT, or production security controls.

Created by Michael A. Kaplan. Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
