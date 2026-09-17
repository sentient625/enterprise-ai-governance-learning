# Module 2 — Authentication, Authorization, and Authority

**Module ID:** P1-M02  
**Learning priority:** AI-agent identity, security, and governance  
**Estimated time:** 90–120 minutes  
**Required output:** Authentication-to-consequence boundary analysis  
**Professional level:** Executive and program leadership  
**Content status:** Accepted for public learning use  

## Why this module matters

An enterprise team proposes an AI agent that will act across several systems. During design review, someone says:

> “The agent uses SSO, so access is controlled.”

That statement may be technically relevant, but it is not a sufficient governance conclusion.

Single sign-on may help establish an authenticated session. It does not, by itself, prove that:

- The agent has its own distinguishable identity.
- The authenticated party is the actor creating the transaction.
- The permissions are appropriate for the current task.
- A business owner delegated authority for this action.
- The agent stayed within the purpose of that delegation.
- The transaction satisfied policy at the moment of action.
- A human approval was informed and meaningful.
- The resulting consequence was acceptable.
- The enterprise can attribute, interrupt, and defend the action.

This distinction becomes critical when an agent can use a valid identity and valid access path to make a harmful, mistaken, or unauthorized business decision. Authentication answers an important question. It does not answer every question.

The program leader’s task is to prevent identity assurance, technical permission, business authority, and transaction consequence from being collapsed into one green check mark.

## Learning outcomes

After completing this module, a learner should be able to:

1. Explain authentication, authorization, delegation, and authority in plain executive language.
2. Distinguish permission to reach a resource from authority to create a business consequence.
3. Explain why SSO, MFA, or a valid access token is necessary in many designs but insufficient as an approval argument.
4. Trace an agent action from authenticated identity through policy decision to recorded consequence.
5. Identify where purpose, scope, amount, environment, time, and human approval must constrain an action.
6. Challenge a design without pretending to select or configure the underlying identity technology.
7. Define the evidence needed to show why one transaction was permitted.
8. Produce an authentication-to-consequence boundary analysis for a regulated-enterprise scenario.

# 1. Five questions that must remain separate

Use five questions to structure an agent-access discussion.

| Boundary | Governing question | What a positive answer establishes | What it does not establish |
|---|---|---|---|
| Identity | What entity is represented? | A distinguishable subject, service, workload, or agent | That the current claimant is genuine |
| Authentication | How was the claimant verified? | Confidence that the claimant controls an accepted authenticator or credential | That the claimant may take this action |
| Authorization | Which resource operations are permitted under policy? | Technical permission within stated conditions | That the business action is appropriate or approved |
| Delegated authority | Who empowered this agent to act, for what purpose and within what limits? | A bounded source of organizational authority | That every proposed transaction remains within the delegation |
| Transaction consequence | What will this action change, obligate, disclose, spend, interrupt, or record? | The actual enterprise effect that must be evaluated and evidenced | That earlier access decisions make the consequence acceptable |

The boundaries are related, but none substitutes for the next.

## Executive shorthand

- **Identity:** Who or what is represented?
- **Authentication:** Is the claimant sufficiently verified?
- **Authorization:** What operations may that identity perform?
- **Authority:** Who allowed the agent to act for this purpose?
- **Consequence:** What enterprise outcome will this transaction create?

An agent transaction is governed only when the enterprise can connect all five.

# 2. Authentication: confidence in the claimant

NIST SP 800-63-4 describes authentication as a process that enables a relying party to trust, to some level of assurance, that a claimant is who it claims to be. A successful process demonstrates possession and control of valid authenticators bound to the represented identity.

For an executive or program leader, the central point is:

> Authentication establishes confidence in a presented identity. It does not grant unlimited permission and it does not establish business purpose.

## Examples

- A human signs in with a password and phishing-resistant authenticator.
- A workload presents a platform-issued credential.
- An agent service presents a short-lived credential to an API.
- A relying application accepts an identity assertion from an identity provider.

Each example may support authentication. None alone answers whether the actor may reset a production account, change a firewall rule, approve a payment, or retrieve protected operational data.

## What to ask about authentication

- Which identity is being authenticated: human, agent, service, workload, or a combination?
- Does the target see the agent, the human, or only a shared service identity?
- What assurance is appropriate for the consequence at stake?
- Is the credential bound to the expected actor or reusable by another process?
- Is the credential short-lived and revocable?
- Does authentication survive across tool calls, or does the chain lose the original actor?
- Can the enterprise distinguish direct human action from agent-mediated action?
- What happens when the owner, workload, or agent is suspended?

## Authentication is not identity proofing

Identity proofing establishes confidence in a claimed real-world identity during enrollment. Authentication later establishes that the claimant controls an accepted authenticator connected to an account or identity.

For agents, the enrollment analogy matters even when the exact human-oriented NIST identity-proofing model does not apply. The enterprise still needs a governed registration event:

- The agent is named and uniquely recorded.
- Its owner and sponsor are recorded.
- Its approved purpose is recorded.
- Its runtime and credential relationships are recorded.
- Its initial permissions are approved.
- Its suspension and retirement paths exist.

Registration is not proof that every later action is authorized. It creates the governed entity against which later decisions can be made.

# 3. Authorization: permission under policy

Authorization determines whether an identified or authenticated actor may perform a requested operation on a resource under applicable policy and context.

Examples include permission to:

- Read a named record.
- Invoke one API operation.
- Create but not approve a change.
- Execute an approved runbook in a defined environment.
- Retrieve one class of secret for a limited duration.
- Submit a purchase below a defined threshold.

Authorization should be expressed more precisely than “has access.”

## A bounded authorization statement

A useful authorization statement identifies:

| Element | Example |
|---|---|
| Subject | Registered remediation agent instance |
| Action | Execute approved service-restart operation |
| Resource | Named application service |
| Environment | Corporate production, excluding protected OT |
| Purpose | Restore service under an active incident record |
| Time | Ten-minute credential and execution window |
| Conditions | Approved runbook, healthy monitoring, no freeze window |
| Limits | One service; no configuration or identity changes |
| Approval | Human incident commander for severity below defined threshold |
| Evidence | Agent, delegator, policy, tool, target, result, and correlation ID |

“Administrator,” “power user,” or “full API access” is not a bounded authorization statement. It is a warning that important decisions may have been pushed into the application or left to the agent.

## Authorization is evaluated at more than one layer

An agent action may pass through several enforcement points:

1. The agent platform decides whether the agent may select a tool.
2. The tool broker decides whether the agent may invoke the requested operation.
3. The identity or token service issues a credential with particular claims or scope.
4. The target system decides whether the presented identity may act on the resource.
5. A business rule decides whether the transaction is permitted in the current context.
6. A human may approve, reject, or constrain the action.

A positive decision at one layer does not guarantee a positive decision at the others.

## The lowest-control trap

The effective control strength can collapse to the weakest material enforcement point.

For example:

- The agent platform restricts the agent to “incident response.”
- The downstream service account has broad production administration.
- The target system cannot distinguish approved incident actions from unrelated changes.

The platform’s label does not technically constrain the target. If the broad credential can be used outside the intended context, the design relies on agent behavior instead of enforceable boundaries.

# 4. Business authority: permission is not mandate

Technical authorization answers what a system will allow. Business authority answers who empowered the action and why the enterprise recognizes that empowerment.

An employee may be technically able to approve a purchase while lacking authority for that category or amount. A service account may be able to modify production while no current change record authorizes the modification. An agent may hold a valid token while its owner never approved autonomous execution.

## Sources of authority

Depending on the use case, authority may derive from:

- An assigned organizational role.
- A formally approved business process.
- A change, incident, or work order.
- A policy-approved automation class.
- A specific human delegation.
- A governance decision authorizing a bounded pilot.
- An emergency procedure activated by an authorized role.
- A contract, regulation, or other qualified source interpreted by the appropriate professional.

The source must be explicit enough to test the proposed action against it.

## Elements of a delegation record

| Element | Question |
|---|---|
| Delegating principal | Who or what possessed the authority being delegated? |
| Recipient | Which registered agent or service receives it? |
| Purpose | What business objective may be pursued? |
| Permitted actions | Which actions may be taken? |
| Prohibited actions | Which actions remain outside the delegation? |
| Resources and environments | Where may the authority be exercised? |
| Limits | Which amount, volume, rate, duration, or impact limits apply? |
| Approval conditions | When is prior human approval required? |
| Evidence | What must be captured for each use? |
| Expiration | When does the delegation end? |
| Revocation | Who can terminate it and how quickly? |
| Redelegation | May the agent invoke another agent or service? |

If the delegation cannot be written clearly, it is unlikely to be enforceable or auditable.

## Ownership does not automatically create authority

The operational owner of an agent may maintain it without having authority to approve every business action it can take. The business owner may approve the use case without having authority to accept a cybersecurity exception. The IAM team may provision access without owning the business decision.

Ask separately:

- Who owns the capability?
- Who owns the target resource?
- Who may delegate the action?
- Who may approve an exception?
- Who may accept residual risk?
- Who is accountable for the resulting business consequence?

# 5. Transaction consequence: govern the action, not only the account

Agent governance should evaluate the consequence of the requested transaction.

The same authenticated identity and technical permission may support actions with very different consequences.

| Action | Possible consequence |
|---|---|
| Read one public record | Low confidentiality and operational impact |
| Read bulk employee records | Privacy, aggregation, and misuse risk |
| Restart a redundant corporate service | Temporary disruption with designed recovery |
| Restart a protected operational service | Safety, reliability, or production impact |
| Draft a purchase request | No commitment if a human remains the submitter |
| Submit or approve a purchase | Financial obligation and separation-of-duties concern |
| Recommend disabling an account | Decision support |
| Disable hundreds of accounts | Material operational and security consequence |

Authorization should therefore consider attributes of the transaction, not merely the identity and resource.

## Transaction-level conditions

Conditions may include:

- Environment and asset criticality.
- Data classification.
- Transaction amount or cumulative amount.
- Number of affected records or systems.
- Rate and frequency.
- Time of day, change window, or freeze period.
- Incident or work-order status.
- Presence and role of a human approver.
- Confidence or uncertainty threshold.
- Whether the action is reversible.
- Whether a safe fallback exists.
- Whether the agent is delegating to another actor.
- Whether the current context or memory has changed.

The right level of control is driven by the possible consequence, not by whether the user experience looks routine.

# 6. Why “the agent uses SSO” is incomplete

SSO generally allows a user or entity to authenticate once and access multiple relying applications under an established trust arrangement. It can improve consistency, centralize lifecycle controls, and reduce password proliferation. Those are meaningful benefits.

However, the statement “the agent uses SSO” leaves at least twelve questions unanswered:

1. Whose identity is represented—the human, the agent, or a shared service account?
2. Can the target distinguish direct human action from agent action?
3. What authentication assurance was achieved?
4. What claims or attributes did the target receive?
5. Which exact operations are permitted?
6. Which resources and environments are in scope?
7. Who delegated authority to the agent?
8. Is the current action within that delegation?
9. What transaction limits apply?
10. When is human approval required?
11. What evidence correlates the request, agent, credential, policy, tool, target, and outcome?
12. Can the agent be suspended independently without disabling the human or unrelated services?

SSO can be part of the authentication design. It is not the complete control model.

## A stronger design-review response

Use language such as:

> “SSO may establish how an identity enters an authenticated session. Please show which identity the target records, which operations and resources are authorized, whose business authority the agent exercises, which transaction conditions are evaluated, and how an individual agent action can be attributed and revoked.”

This challenges the design at the correct level without prescribing a product configuration.

# 7. Tokens do not carry unlimited meaning

OAuth 2.0 defines a framework in which a client can obtain limited access to an HTTP service, either on behalf of a resource owner or on its own behalf. OpenID Connect adds an identity layer on top of OAuth 2.0 so a client can verify information about an end user’s authentication.

These are different purposes:

- An identity assertion can communicate authentication information.
- An access token can represent delegated or client access to a protected resource.
- A scope can describe requested or granted access in a way defined by the authorization server and resource server.

None should be interpreted as a universal business approval.

## Questions for token-mediated agent access

- Who is the client?
- Who or what is the subject?
- Is the agent acting on behalf of a human or on its own behalf?
- Which resource server is the intended audience?
- Which operations do the granted scopes actually permit?
- Are scopes coarse or resource-specific?
- How long is the token valid?
- Can it be replayed or used by another process?
- Does the target receive the agent identity, delegating principal, and necessary context?
- What happens when the underlying delegation is revoked before token expiration?
- Is the business approval represented elsewhere and correlated to the transaction?

Module 3 covers OAuth, OIDC, tokens, and delegation in greater depth. The Module 2 lesson is simple:

> A valid token is evidence that a credentialing and authorization process occurred. Its meaning is limited to its issuer, audience, claims, scope, conditions, and the receiving system’s enforcement. It is not proof that the enterprise should accept every resulting consequence.

# 8. The authentication-to-consequence control chain

For each material action, require a traceable chain.

| Stage | Required fact | Example evidence |
|---|---|---|
| Registration | The agent exists as an approved governed entity | Agent inventory record and owner |
| Authentication | The expected claimant presented acceptable proof | Authentication event and assurance information |
| Delegation | A valid principal empowered the agent for a defined purpose | Delegation, work order, or approved automation policy |
| Authorization | Policy permitted this subject-action-resource request | Policy identifier, decision, and material inputs |
| Human decision | Required human intervention occurred | Approver identity, decision, time, and information presented |
| Execution | The approved tool performed the bounded operation | Tool invocation, target, parameters, and correlation ID |
| Consequence | The enterprise effect is known | Before-and-after state, transaction result, or exception |
| Accountability | Ownership and review are preserved | Business owner, operational owner, reviewer, and retention record |

The evidence does not need to live in one system. It does need to be correlatable, protected, and understandable.

## Broken-chain examples

- Authentication exists, but the target records only a shared account.
- Authorization exists, but the policy is broader than the approved use case.
- Human approval exists, but the approver saw only “Allow?” without the target, action, or consequence.
- Execution is logged, but the original delegating principal is absent.
- The outcome is recorded, but the enterprise cannot tell whether the action succeeded partially.
- The agent is suspended, but previously issued tokens and queued work remain active.

# 9. Human approval must authorize the actual consequence

Human-in-the-loop is not a magic control label.

A meaningful approval should present enough information for the authorized person to decide:

- Which agent is requesting action.
- On whose behalf it is acting.
- What it proposes to do.
- Which target and environment are affected.
- Why the action is needed.
- Which evidence supports the recommendation.
- What consequence and uncertainty exist.
- Whether the action is reversible.
- What alternatives exist.
- What will happen if no decision is made.

## Weak approval

> “Agent requests elevated access. Approve / Deny.”

## Stronger approval

> “ORION-OPS-17 requests a ten-minute credential to restart APP-SVC-04 in corporate production under incident INC-20481. The action affects one redundant service, excludes protected OT, and uses approved runbook RB-12. Monitoring indicates the secondary node is healthy. Rollback is stop-and-failover. Approve once / Deny / Escalate.”

The stronger approval still requires validation by technical, security, operational, and business owners. Its value is that the human is authorizing a bounded consequence rather than approving an abstract access request.

# 10. Applied case — ORION privileged remediation agent

## Scenario

ORION is a fictional AI-enabled operations agent proposed for a regulated enterprise. It analyzes approved monitoring data, recommends remediation, and may invoke tools that restart services, rotate selected credentials, or isolate endpoints.

The enterprise operates corporate IT and protected operational environments. ORION’s first pilot is described as “corporate IT only,” but the same service-management platform contains records for both domains. The automation team proposes to let ORION use an existing operations account through the enterprise SSO platform.

The design presentation states:

> “Risk is controlled because ORION uses SSO, MFA is required for the sponsoring administrator, and every action is logged.”

## Initial control analysis

| Claim | What it may establish | What remains unresolved |
|---|---|---|
| ORION uses SSO | A centralized authentication path may exist | Whether ORION has its own identity and what the target records |
| Sponsor uses MFA | The human sponsor authenticated with stronger assurance | Whether ORION later acts under the sponsor’s session or credential |
| Existing operations account is approved | An account has been through some access process | Whether it is shared, overprivileged, current, or appropriate for autonomous use |
| Every action is logged | Some execution events may be recorded | Whether logs preserve delegation, policy, human approval, parameters, and outcome |
| Pilot is corporate IT only | A stated business boundary exists | Whether identity, tools, data, and target controls enforce the boundary |

## Required program decisions

Before pilot approval, require evidence that:

1. ORION is registered with its own governed identity and accountable owners.
2. Direct human action, ORION action, and downstream tool execution remain distinguishable.
3. Corporate IT and protected operational targets are technically separated or explicitly denied.
4. Each privileged operation is individually defined; “operations administrator” is not the control boundary.
5. The initiating incident or work order supplies a valid purpose and delegation context.
6. Human approval requirements are defined by action and consequence.
7. Credentials are bounded in audience, duration, operation, resource, and environment where feasible.
8. Transaction evidence preserves the chain from request through outcome.
9. ORION, its credentials, queued actions, and downstream sessions can be suspended.
10. Failed, partial, ambiguous, or out-of-policy actions trigger containment and review.

## Illustrative authority rule

An acceptable pilot rule might read:

> ORION may request execution of named, reversible remediation operations against approved corporate IT assets only when linked to an active incident record. A currently assigned incident commander must approve each privileged execution after receiving the target, operation, evidence, expected consequence, and rollback. ORION may not act against protected operational assets, change identity entitlements, approve its own request, expand its tool set, or redelegate privileged authority.

This is an illustrative governing statement, not production architecture or legal guidance.

# 11. Executive design-review questions

## Identity and authentication

- Which distinct actor does each target system record?
- Is the agent using its own credential, a workload credential, a human session, or a shared account?
- What assurance is appropriate for the possible consequence?
- Can the credential be used outside the expected runtime?

## Authorization

- Which subject-action-resource combinations are permitted?
- Are environment, asset criticality, data class, time, amount, and rate evaluated?
- Where is policy enforced: platform, broker, target, or several layers?
- Which broad downstream permissions could bypass the intended boundary?

## Delegated authority

- Who has authority to delegate this action?
- What purpose and duration limit the delegation?
- May the agent redelegate to another tool or agent?
- How is authority withdrawn when the owner, work order, or risk condition changes?

## Human decision

- Which actions require prior approval, monitoring, retrospective review, or prohibition?
- Does the approver see the actual transaction and consequence?
- Is the approver independent and authorized?
- How will the design prevent routine approval fatigue?

## Consequence and evidence

- What can the transaction change, expose, spend, interrupt, or obligate?
- Can the action be reversed, and has fallback been tested?
- Can evidence reconstruct the complete authority chain?
- What happens after a partial success or ambiguous outcome?

# 12. Required exercise — challenge the SSO conclusion

## Instructions

Prepare a one- to two-page response to this design assertion:

> “The agent uses SSO, so access is controlled.”

Use the ORION scenario or another fictional regulated-enterprise agent. Do not specify vendor configuration. Complete all four parts.

### Part A — classify the claim

State:

1. What SSO may contribute.
2. What the claim does not establish.
3. Why the gap matters for an acting agent.

### Part B — complete the boundary table

| Boundary | Your answer |
|---|---|
| Identity represented | |
| Authentication method and assurance question | |
| Authorized operations | |
| Resources and environments | |
| Delegating principal | |
| Business purpose | |
| Transaction limits | |
| Human decision boundary | |
| Evidence required | |
| Suspension mechanism and owner | |

### Part C — write a bounded authority statement

Complete this sentence:

> “[Named agent] may [permitted action] against [named resource class] in [environment] for [business purpose] when [conditions]. It may not [prohibited actions]. Authority begins [trigger], expires [time or event], requires [human decision], produces [evidence], and may be revoked by [role] through [mechanism category].”

### Part D — make a recommendation

Select one:

- Approve.
- Approve with conditions.
- Pilot within narrower boundaries.
- Defer pending evidence.
- Reject.

Identify the three most important reasons and the next proof required.

# 13. Review observations

A strong response should recognize that:

- SSO belongs primarily to the authentication and federation discussion.
- Authentication of a human sponsor does not automatically authenticate or identify later agent actions.
- The target must receive enough identity and transaction context to enforce and evidence the intended boundary.
- Authorization must be expressed as operations on resources under conditions, not as a broad role label.
- Business authority needs a named source, purpose, limit, expiration, and revocation path.
- Human approval is useful only when the approver is authorized and sees the material consequence.
- Logs must be correlated across the agent, identity service, tool, target, and business record.
- Corporate IT and protected operational environments require enforceable separation, not only a presentation statement.
- Suspension must address the agent, credentials, sessions, queued work, and downstream activity.
- The program leader can require this evidence without claiming to design the authentication protocol or policy engine.

A weak response will:

- Treat MFA as proof that ORION itself is controlled.
- Repeat “least privilege” without naming an action, resource, condition, or duration.
- Assume a valid token equals business approval.
- Accept generic logging without defining the evidence chain.
- Use “human-in-the-loop” without specifying who decides what and with which information.
- Recommend a product before the authority model is clear.

# 14. Knowledge check

Answer before reading the guide.

1. What does successful authentication establish?
2. Why is authorization not the same as business authority?
3. Name four transaction attributes that can change an authorization decision.
4. Why can a broad downstream service account defeat a narrow agent-platform policy?
5. What must a human see for approval to be meaningful?
6. What does a valid access token fail to prove?
7. Why must ownership and delegation be recorded separately?
8. What evidence connects authentication to consequence?

## Answer guide

1. It establishes confidence, to an appropriate assurance level, that the claimant controls accepted authentication material bound to the represented identity. It does not establish permission for every action.
2. Authorization is a system or policy decision about permitted operations. Business authority identifies who empowered the action, for which purpose, within which organizational limits.
3. Examples include environment, asset criticality, data class, amount, volume, rate, time, work-order status, human approval, reversibility, and current risk condition.
4. The target may enforce only the broad service-account permissions. If the narrow platform purpose is not carried to or enforced by the target, the agent can technically create consequences outside the stated boundary.
5. The approver needs the agent, delegator, target, action, purpose, supporting evidence, expected consequence, uncertainty, reversibility, and alternatives appropriate to the decision.
6. It does not necessarily prove current business purpose, informed approval, acceptable consequence, trustworthy context, or continued validity of the underlying delegation.
7. Ownership assigns durable responsibility for the capability. Delegation identifies whose authority is exercised for a particular purpose or transaction. They may belong to different roles.
8. Correlated records should connect the registered agent, authentication event, delegation source, policy decision, human decision when required, tool invocation, target operation, and resulting state.

# 15. Completion evidence

This module is not completed by reading it.

Completion requires:

1. A completed four-part exercise.
2. A boundary table that distinguishes all five governing questions.
3. A bounded authority statement with explicit prohibitions and expiration.
4. A recommendation and next-proof requirement.
5. A five-minute oral or written defense answering:
   - Why is SSO insufficient as the control conclusion?
   - Where can the authority chain break?
   - What evidence would change your recommendation?

Store completed work under a `completed_work/` folder only when the exercise has actually been performed. Update the Progress Record only after the artifact and defense exist.

# 16. Two-minute executive explanation

> “For an acting AI agent, authentication is only the beginning of the control chain. It tells us, to some level of assurance, which identity presented a credential. Authorization tells us which operations the system permits. Neither one, by itself, proves that the enterprise delegated authority for this purpose or that the specific transaction is acceptable. I would require the design to preserve the agent identity, delegating principal, permitted action, target, conditions, human decision boundary, and resulting consequence. SSO and valid tokens can support that design, but they are not substitutes for it. The program decision should be based on whether those boundaries are enforceable, evidenced, and revocable.”

# 17. Interview translation

## Credible positioning statement

> “I lead the program-level integration of IAM, PAM, security, operational, and governance decisions for acting AI agents. I know how to challenge whether authentication, technical authorization, business delegation, human approval, and transaction evidence form one defensible control chain.”

## If asked about implementation depth

> “I would not represent myself as the engineer configuring the identity provider, token service, or policy engine. My role is to ensure the right owners make those design decisions, that authority is bounded to the use case, that downstream permissions do not defeat the control intent, and that executives and auditors receive decision-grade evidence.”

# 18. Primary-source map

| Source | Status checked | Use in this module |
|---|---|---|
| [NIST SP 800-63-4, Digital Identity Guidelines](https://pages.nist.gov/800-63-4/sp800-63.html) | Final publication; supersedes SP 800-63-3; checked 2026-09-17 | Authentication, assurance, federation, and relying-party concepts; its stated scope is human subjects and does not explicitly address machine-to-machine or API access on behalf of subjects |
| [RFC 6749, OAuth 2.0 Authorization Framework](https://datatracker.ietf.org/doc/html/rfc6749) | Standards-track RFC, updated by later specifications; checked 2026-09-17 | Limited-access and delegated-authorization vocabulary |
| [RFC 9700, OAuth 2.0 Security Best Current Practice](https://datatracker.ietf.org/doc/html/rfc9700) | Best Current Practice; checked 2026-09-17 | Current OAuth security posture; implementation detail is reserved for qualified architects and engineers |
| [OpenID Connect Core 1.0 incorporating errata set 2](https://openid.net/specs/openid-connect-core-1_0.html) | Final OpenID specification; checked 2026-09-17 | Distinguishing the OIDC identity layer from OAuth authorization |
| [NIST — Why Agentic AI Needs a Strong Identity Foundation](https://www.nist.gov/blogs/cybersecurity-insights/back-future-why-agentic-ai-needs-strong-identity-foundation) | NIST blog guidance dated 2026-08-27; checked 2026-09-17 | Agent identifiers, credentials, entitlements, token scope, and risks of inherited human access |

## Source boundary

The five-question model and the ORION case are original learning constructs for executive and program-level analysis. They are not represented as requirements from a single standard. Production design requires applicable architecture, cybersecurity, IAM/PAM, privacy, legal, operational, safety, audit, and regulatory review.

## Positioning boundary

Completing this module supports a claim that a learner can lead and challenge the authentication-to-consequence control discussion for enterprise agents.

It does not support a claim that he personally configured SSO, OAuth, OIDC, token services, policy engines, or production authorization controls.


# Public learning package

Use the materials in this order:

1. Complete the [Module 2 Participant Workbook](./exercises/03_Module_02_Participant_Workbook.md) without consulting the model answer.
2. Review the [Module 2 Model Answer and Review Guide](./exercises/04_Module_02_Model_Answer_and_Review_Guide.md).
3. Revise and defend the analysis before claiming completion.
4. Consult the [Module 2 Public-Release Record](../00_LEARNING_CONTROL/07_Module_02_Public_Release_Record.md) for scope, source status, and limitations.

---

**Published:** 2026-09-17  
**Version:** 1.0  
**Content status:** Accepted for public learning use  
**Scope:** Executive and program-level learning. This is not implementation guidance or production architecture.  
**License:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
