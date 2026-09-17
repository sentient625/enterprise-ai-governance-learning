# Regulated-Enterprise Case Workbook

## Case: A privileged AI agent across corporate IT and protected operations

**Purpose:** Demonstrate executive and program-level fluency in AI-agent identity, privileged access, evidence, and accountable authority.  
**Method:** Work the case as a program leader. Do not design product-specific configurations. Identify the decisions, controls, evidence, owners, and unresolved technical questions that qualified specialists must answer.

## Scenario

North River Energy is a fictional regulated electric utility with corporate IT, protected operational technology (OT), test/UAT, and disaster-recovery environments.

The company proposes an AI operations agent called **ORION**. The sponsor expects ORION to reduce service-restoration time, administrative backlog, and after-hours labor by:

- Correlating alerts, tickets, asset records, change records, and approved runbooks.
- Diagnosing likely causes of access and infrastructure incidents.
- Requesting or obtaining temporary privileged access.
- Invoking administrative tools.
- Executing approved remediation steps.
- Validating results.
- Updating the ticket and evidence record.
- Escalating when confidence is low or an exception appears.

The initial business case estimates faster recovery and reduced labor, but the baseline is incomplete. The sponsor wants a 90-day pilot followed by expansion.

## Proposed access

The architecture team proposes that ORION can interact with:

- Service management and change records.
- Identity governance and privileged-access services.
- Directory and cloud administration.
- Corporate Windows and Linux servers.
- Monitoring and configuration platforms.
- A protected OT support environment.
- A knowledge base containing approved runbooks.
- A second specialist agent that can analyze logs and recommend commands.

The draft design uses a registered cloud service principal for some integrations, a shared automation account for legacy tools, and a local operator session for one administrative console. Some API keys are long-lived because the legacy systems cannot issue short-lived credentials.

The same orchestration service would operate across test, corporate production, and the protected OT support environment. Policies would vary by environment.

## Proposed human control

- ORION may perform low-risk remediation autonomously.
- Production changes require an operator to click **Approve**.
- Protected OT activity requires approval by an OT duty manager.
- Emergency incidents allow ORION to use a break-glass workflow.
- The agent may ask the operator for additional information or access during execution.

The approval screen currently displays the proposed command and target hostname. It does not display the originating goal, delegating authority, policy result, predicted downstream effect, or whether ORION has requested similar approvals repeatedly.

## Proposed evidence

The pilot would retain:

- Agent conversation.
- Tool-call logs.
- Service-management ticket.
- Change record.
- Privileged-session recording where available.
- Target-system event logs.

The records use different clocks and identifiers. The team has not yet defined a common transaction ID. Prompt and context records may include secrets or regulated data, so the logging team proposes retaining only final agent output.

## Operational constraints

- Several protected systems have limited maintenance windows.
- Some recovery steps must remain available during network segmentation or cloud-service failure.
- The OT environment has stricter change and availability requirements than corporate IT.
- Annual project funding and contractor authorization are separate from permanent operational ownership.
- Cybersecurity, IAM/PAM, OT, enterprise architecture, legal, privacy, records, internal audit, and operations have overlapping concerns but no single current forum owns the combined decision.
- The sponsor wants rapid proof of value and views recommendation-only capability as insufficient.
- The CISO asks whether the enterprise can stop ORION without disrupting the human operators or unrelated automation.

## Known facts, assumptions, and unknowns

### Known facts

- ORION is expected to take privileged actions.
- Its actions may reach both corporate IT and protected OT support environments.
- At least two proposed access paths cannot uniquely identify ORION at the target.
- Some proposed credentials are shared or long-lived.
- Human approval is planned for production and protected OT activity.
- Evidence cannot yet be correlated reliably across the full transaction.
- Manual or non-agent fallback is required for continuity.

### Assumptions requiring evidence

- Automation will materially reduce recovery time.
- Human approval will prevent consequential misuse.
- Environment-specific policy will compensate for a shared orchestration plane.
- Existing privileged-session recording will provide sufficient accountability.
- Final output is sufficient evidence even if source context is not retained.
- Legacy long-lived credentials can be protected adequately.
- The specialist agent will not expand authority.
- The break-glass process can be used safely by an agent.

### Unknowns

- Exact action inventory and transaction volume.
- Baseline recovery performance and labor cost.
- Which legacy systems can support unique agent identity.
- Whether delegated authority remains visible across tool calls.
- Whether the agent can discover or invoke unapproved tools.
- How context, memory, and retrieved runbooks are verified.
- How queued and in-flight actions behave during suspension.
- Who may accept residual risk across IT and OT.
- What evidence regulators or auditors would require for the actual use cases.
- Whether the agent can be restored to a validated trusted state after compromise.

## Assignment 1 — State the Funded Belief

Write the supportable proposition being funded.

Include:

- Expected outcome.
- Proposed path.
- Critical assumptions.
- Dependencies.
- Constraints.
- Principal risks.
- Timing.
- Capability required.
- Conditions that would justify continued funding.
- Evidence that would weaken or invalidate the proposition.

### Working response

> North River Energy believes that ____________________________________________

> This belief depends on _____________________________________________________

> The next funding or expansion decision requires evidence that _______________

> The proposition should be constrained, redirected, or stopped if ____________

## Assignment 2 — Classify the actions

Do not assign one autonomy level to ORION as a whole. Classify each action.

| Proposed action | Environment | Consequence | Reversibility | Authority class | Rationale |
|---|---|---|---|---|---|
| Read ticket and approved runbook | | | | | |
| Retrieve monitoring data | | | | | |
| Recommend remediation | | | | | |
| Request temporary privilege | | | | | |
| Restart noncritical test service | | | | | |
| Restart corporate production service | | | | | |
| Change directory group membership | | | | | |
| Rotate service credential | | | | | |
| Modify protected OT support host | | | | | |
| Disable suspected compromised account | | | | | |
| Invoke specialist log-analysis agent | | | | | |
| Enter break-glass mode | | | | | |
| Update and close incident | | | | | |

Use:

- Autonomous within envelope.
- Human-on-the-loop.
- Prior human authorization.
- Prohibited.

## Assignment 3 — Trace identity and authority

Complete the path for three transactions:

1. Corporate production service restart.
2. Protected OT support-host change.
3. Agent-to-agent log analysis followed by remediation.

| Boundary | Acting identity | Delegating authority | Credential / assertion | Permitted action | Enforcement point | Evidence gap |
|---|---|---|---|---|---|---|
| Owner / operator → ORION | | | | | | |
| ORION → tool | | | | | | |
| Tool → target | | | | | | |
| ORION → specialist agent | | | | | | |
| Specialist agent → data or tool | | | | | | |

Then answer:

- Where can ORION impersonate a human?
- Where does the target see a shared automation account instead of ORION?
- Where can authority widen?
- Where can purpose be lost even if the token remains technically valid?
- Which access path cannot be approved until identity or evidence changes?

## Assignment 4 — Define separate authority domains

Evaluate whether the following should be separated by identity, credential, policy, orchestration, runtime, or all five:

| Boundary | Separation required | Why | Evidence required |
|---|---|---|---|
| Test vs corporate production | | | |
| Corporate IT vs protected OT | | | |
| Read / recommend vs execute | | | |
| Normal operation vs break-glass | | | |
| ORION vs specialist agent | | | |
| Agent operation vs human administration | | | |

Do not assume that different policy files on one shared platform create sufficient separation. Require the architecture and risk owners to demonstrate the actual control boundary.

## Assignment 5 — Rewrite the authority statement

Replace "ORION may perform low-risk remediation" with a testable statement.

> ORION identity __________, owned by __________, may perform __________ using __________ against __________ in environment __________ for purpose __________ under authority delegated by __________ during __________ within limits __________. It may not __________. Prior approval by __________ is required when __________. Authority expires or is suspended when __________.

Evaluate whether the statement includes:

- Named actions.
- Named resources.
- Named environment.
- Time.
- Volume or rate.
- Transaction consequence.
- Delegation depth.
- Human authority.
- Prohibited paths.
- Expiration and suspension.

## Assignment 6 — Repair human approval

Design the minimum approval screen for a consequential action.

The authorized approver should see:

| Item | Required content |
|---|---|
| Agent identity | |
| Requesting owner / delegating principal | |
| Originating goal and ticket | |
| Proposed action | |
| Target and environment | |
| Expected consequence | |
| Authorization policy result | |
| Material context and evidence | |
| Uncertainty / confidence limitation | |
| Similar recent requests | |
| Reversibility and rollback | |
| Alternative | |
| Approval expiry | |

Then answer:

- Which role may approve corporate production changes?
- Which role may approve protected OT changes?
- May the same person request and approve access?
- Which actions remain prohibited even during an emergency?
- How will repeated approval requests be detected to prevent consent fatigue?
- When is human-on-the-loop monitoring acceptable instead of prior approval?

## Assignment 7 — Build the evidence chain

Define one correlation ID that follows:

> Business request → agent goal → identity assertion → authorization decision → tool call → target transaction → human approval → result → monitoring → ticket / change record

### Minimum transaction record

| Evidence | System of record | Owner | Integrity control | Retention / access limitation |
|---|---|---|---|---|
| Business request | | | | |
| Agent and version | | | | |
| Delegating authority | | | | |
| Policy and authorization decision | | | | |
| Tool and target | | | | |
| Context-source references | | | | |
| Human approval | | | | |
| Executed action | | | | |
| Result and side effects | | | | |
| Rollback | | | | |
| Monitoring signals | | | | |
| Exception or override | | | | |

Resolve the logging conflict:

- Retaining every prompt and retrieved record may expose secrets or regulated information.
- Retaining only final output prevents reconstruction of the action basis.

Specify a governed middle path: references, hashes, versions, redaction, restricted stores, purpose-limited access, retention rules, and qualified review. Do not assume a single universal answer.

## Assignment 8 — Threat and control review

| Failure mode | Preventive control | Detective control | Response | Evidence |
|---|---|---|---|---|
| Shared credential obscures agent identity | | | | |
| Long-lived key is stolen | | | | |
| Agent gains overly broad role | | | | |
| Retrieved runbook contains malicious instruction | | | | |
| Tool output poisons later reasoning | | | | |
| Specialist agent expands authority | | | | |
| Human reflexively approves requests | | | | |
| Agent crosses IT/OT boundary | | | | |
| Valid command creates unexpected consequence | | | | |
| Agent attempts privilege escalation | | | | |
| Logs cannot be correlated | | | | |
| Agent cannot be interrupted | | | | |

Use [OWASP's Agentic AI Security Initiative](https://genai.owasp.org/initiatives/agentic-security-initiative/) as a threat-orientation source, but translate technical risks into ownership, control, evidence, and decision consequences.

## Assignment 9 — Design suspension and fallback

### Trigger examples

Classify each as alert, constraint, automatic suspension, or executive reconsideration:

- Unknown tool invocation.
- Attempt to retrieve a secret.
- Cross-environment token use.
- Missing transaction evidence.
- Unexpected destructive command.
- Repeated denials.
- Material drift from approved goal.
- Compromised context source.
- Expired owner certification.
- Inability to revoke an active token.
- Material benefit below pilot threshold.
- Incident indicating a wider architecture weakness.

### Runbook

| Step | Corporate IT mechanism | Protected OT mechanism | Owner | Proof |
|---|---|---|---|---|
| Stop new goals | | | | |
| Disable identity | | | | |
| Revoke credentials and tokens | | | | |
| Disable tool access | | | | |
| Halt queued actions | | | | |
| Reconcile in-flight work | | | | |
| Preserve state and evidence | | | | |
| Activate fallback | | | | |
| Validate environment | | | | |
| Authorize restoration | | | | |

Explain why "turn off the agent service" may be insufficient if tokens, sessions, schedules, queued work, downstream agents, or tool credentials remain active.

## Assignment 10 — Pilot decision

Choose one:

- Approve the proposed 90-day pilot.
- Approve only a narrower pilot.
- Defer until named controls and evidence exist.
- Do not authorize the privileged use case.

### Decision memorandum

#### Decision requested

#### Current evidence

#### Business proposition

#### Authorized identity and scope

#### Required constraints

#### Prohibited actions

#### Human authority

#### Evidence requirements

#### Monitoring and suspension triggers

#### Continuity and fallback

#### Residual risks

#### Unresolved questions requiring qualified judgment

#### Next proof required

#### Accountable decision owner and expiration

## Facilitator observations

These are evaluation points, not a universal answer key.

A strong response should recognize that:

1. ORION is not one risk class. Read, recommend, request, execute, approve, verify, and break-glass functions require separate treatment.
2. Corporate IT and protected OT should not inherit one undifferentiated identity and authority path merely because a shared orchestration service is convenient.
3. Shared automation and local human accounts create attribution and impersonation problems.
4. Long-lived legacy credentials are a material exception requiring explicit ownership, compensating controls, a time-bounded remediation plan, and possibly exclusion from the pilot.
5. A human approval click is weak when the approver lacks purpose, authority, policy, consequence, repetition, and rollback context.
6. Break-glass authority should not become a broad bypass that the agent can invoke or justify for itself.
7. Agent-to-agent delegation requires separate identities, bounded authority, traceable delegation, and preserved transaction context.
8. Privileged-session recording is useful but may not prove the originating goal, delegated authority, context, policy decision, or why the action was permitted.
9. Final output alone is insufficient for decision provenance, but indiscriminate logging may create new confidentiality, privacy, records, and credential risks.
10. Suspension must address identities, tokens, sessions, tools, queues, downstream calls, state, and continuity—not only the visible agent process.
11. Restoration is a new authorization decision supported by evidence, not merely a technical restart.
12. The pilot should test the business proposition as well as technical operation. Activity volume is not proof of value.
13. Recommendation-only or read-only operation may be the appropriate first boundary if identity, evidence, revocation, or protected-environment controls are immature.
14. The final authority must be assigned. A collection of reviewers is not the same as an accountable decision owner.

## Suggested defensible pilot boundary

This is an illustrative starting point for debate, not a predetermined production design.

### Potentially in scope

- Unique ORION identity in an isolated nonproduction environment.
- Read access to approved synthetic or appropriately controlled test evidence.
- Retrieval from a versioned, approved runbook set.
- Recommendation generation.
- Ticket drafting.
- Bounded execution against named test assets.
- Short-lived, narrowly scoped authorization.
- Full correlation across goal, policy, tool, target, result, and approval.
- Demonstrated suspension and fallback.

### Potentially out of scope until separately proven

- Shared human or automation credentials.
- Corporate-production execution.
- Protected OT execution.
- Autonomous privilege grants.
- Agent-initiated break-glass.
- Destructive or irreversible actions.
- Tool discovery or self-added integrations.
- Unbounded agent-to-agent delegation.
- Operation where the agent cannot be independently identified, monitored, and revoked.

### Expansion evidence

Expansion should require evidence that:

- The use case creates measurable value against a credible baseline.
- Identity remains unique across the transaction path.
- Authority is enforced at the necessary granularity.
- Human approvals are informed and not becoming habitual.
- Evidence reconstructs consequential actions.
- Exceptions are declining or are governed.
- Suspension works at machine speed.
- Manual or validated alternate operation remains available.
- Accountable IT and OT authorities approve the next boundary.
- Residual risk remains within an explicitly accepted posture.

## Interview version

Use the case to answer:

> "How would you lead an enterprise program introducing AI agents with privileged access?"

A concise answer:

1. Start with the business proposition and identify which value actually requires action rather than recommendation.
2. Inventory every agent, tool, target, owner, and delegation path.
3. Give each agent a distinguishable identity; do not allow it to disappear behind a human or shared account.
4. Define authority by action, resource, environment, purpose, duration, transaction, and consequence.
5. Treat corporate IT and protected OT as separate authority domains.
6. Assign meaningful human decision rights and prevent approval fatigue.
7. Correlate evidence from business request through authorization, execution, result, and rollback.
8. Demonstrate suspension, revocation, fallback, and governed restoration before activation.
9. Pilot at the smallest reversible boundary.
10. Expand only when current evidence supports both the value proposition and the control proposition.

## Self-assessment

Rate 1–5:

| Capability | Score | Evidence |
|---|---:|---|
| Explain agent identity versus human, service, and workload identity | | |
| Trace delegated authority across tools and agents | | |
| Detect impersonation and shared-credential problems | | |
| Define a least-privilege authority envelope | | |
| Separate IT and OT authorization domains | | |
| Define meaningful human authority | | |
| Specify decision-grade evidence | | |
| Lead an emergency suspension tabletop | | |
| Connect control evidence to continued funding | | |
| Brief an executive without overclaiming engineering expertise | | |

A score is credible only when supported by a completed artifact or a clear oral defense.

---

**Prepared:** 2026-09-17  
**Scenario status:** Fictional. It is constructed for learning and must not be represented as an actual client, employer, system, regulatory conclusion, or production architecture.  
**Repository boundary:** Learning and portfolio material only; no accepted manuscript or control file is changed.
