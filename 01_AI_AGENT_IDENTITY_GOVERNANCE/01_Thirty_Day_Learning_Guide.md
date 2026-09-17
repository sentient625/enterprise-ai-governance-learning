# Learning Priority 1 — AI-Agent Identity, Security, and Governance

**Audience:** Michael Kaplan — senior enterprise program, cybersecurity, IAM/PAM, and governance leader  
**Duration:** 30 days  
**Time commitment:** 45–75 minutes per weekday  
**Outcome:** Executive and program-level fluency sufficient to lead an enterprise AI-agent identity and privileged-access program, challenge designs, define decision boundaries, and require decision-grade evidence.  
**Technical boundary:** This is not administrator training. It does not require configuring CyberArk, Entra ID, OAuth, SPIFFE, an agent framework, or a secrets platform.

## Why this is the first priority

AI agents do more than produce content. They can select tools, call services, retrieve or change data, invoke workflows, delegate tasks, and take actions across systems. Once an agent can act, the enterprise must answer familiar identity and access questions under unfamiliar speed, scale, and uncertainty:

- What is acting?
- On whose behalf?
- Under which authority?
- Against which resource?
- For what purpose and duration?
- With which constraints?
- What evidence proves what occurred?
- Who can stop it?
- Who owns the consequence?

This learning priority connects three established areas of experience:

1. Multi-year IAM/PAM program leadership involving more than 7,000 privileged IT and OT accounts.
2. Zero Trust and regulated cybersecurity delivery.
3. Forensic governance concepts that connect a Funded Belief to current evidence, assigned authority, and a defensible decision record.

The objective is not to become an AI engineer. It is to become the person who can govern the adoption boundary between enterprise value and machine-speed authority.

## Connection to *Forensic Capital Governance*

The package uses the book's controlled concepts without changing or extending the manuscripts:

- A **Funded Belief** is the enterprise's supportable proposition that the expected outcome, path, assumptions, dependencies, constraints, risks, timing, capability, and conditions justify the commitment being made.
- The **Evidence Locker** preserves relevant identity, provenance, time, version, context, contradiction, and open questions. Storage alone does not establish truth, relevance, authority, completeness, or professional sufficiency.
- An analytical system does not acquire decision rights because it can synthesize records or take action. Authority remains assigned to an accountable human or forum.

Applied to an agent initiative:

- The business case for deploying the agent is the Funded Belief.
- The agent's registration, identity, entitlements, delegations, transactions, approvals, exceptions, incidents, and revocation records belong in the Evidence Locker.
- The agent may execute within recognized authority; it does not create its own authority.
- Continued autonomy is a governed investment decision that must remain connected to current evidence.

## Learning objectives

By Day 30, the learner should be able to:

1. Distinguish human, service, workload, and agent identities.
2. Explain authentication, authorization, delegation, impersonation, entitlement, scope, audience, and proof of possession in plain English.
3. Identify credential sharing, static-secret, excessive-privilege, confused-deputy, context-poisoning, and delegated-authority risks.
4. Explain why a unique agent identity is necessary but not sufficient.
5. Define an agent's permitted action envelope across systems, environments, tools, data, transactions, time, and consequence.
6. Separate human-in-the-loop approval from meaningful human authority and recognize consent fatigue.
7. Require evidence that connects an action to the agent, owner, delegating principal, authorization, policy, tool, target, input context, result, and time.
8. Define suspension, credential revocation, privilege removal, isolation, fallback, recovery, and retirement requirements.
9. Lead an architecture or control review without pretending to be the implementing engineer.
10. present a defensible recommendation to an executive, CISO, CIO, risk committee, audit function, or investment authority.

## The operating model to learn

Use this sentence throughout the month:

> Every consequential agent action must be attributable to a known agent, connected to a recognized owner and delegating authority, constrained to an approved purpose and boundary, observable in evidence, and interruptible before the enterprise loses control of the consequence.

Identity answers **what is acting**.  
Authentication answers **how its identity is verified**.  
Authorization answers **what it may do**.  
Delegation answers **whose authority it is using and how that authority narrows across the chain**.  
Governance answers **why that authority exists, who accepted the risk, what evidence must be preserved, and when the authority must change or end**.

## Thirty-day plan

### Week 1 — Identity and delegated authority

**Purpose:** Build the vocabulary needed to participate credibly in agent identity and authorization discussions.

#### Day 1 — From chatbot to acting principal

Read:

- [NIST AI Agent Standards Initiative](https://www.nist.gov/artificial-intelligence/ai-agent-standards-initiative)
- [NCCoE Software and AI Agent Identity and Authorization project](https://www.nccoe.nist.gov/projects/software-and-ai-agent-identity-and-authorization)

Write a one-page answer:

- What makes an AI agent different from a conventional chatbot?
- At what point does the agent become an identity and access governance concern?
- Which proposed actions would make the agent privileged?

**Completion test:** Explain the issue in two minutes without using the phrases "responsible AI" or "AI ethics."

#### Day 2 — Identity types

Learn the practical distinctions:

| Identity type | Primary referent | Typical authority basis | Governance concern |
|---|---|---|---|
| Human identity | A person | Employment, role, contract, explicit assignment | Accountability, role change, termination |
| Service identity | An application or service | Application registration and service purpose | Ownership, secrets, standing privilege |
| Workload identity | A running software workload | Attested runtime and workload policy | Ephemerality, environment, trust domain |
| Agent identity | An agent instance or governed agent service capable of selecting or taking actions | Registered agent purpose plus delegated and direct authority | Autonomy, tool choice, delegation chains, probabilistic behavior, consequence |

Deliverable: Create four examples from a regulated utility or financial-services environment and identify where identity could be confused with the human owner.

#### Day 3 — Authentication is not authorization

Learn:

- Authentication establishes confidence in identity.
- Authorization establishes permitted action.
- An authenticated agent can still be overprivileged.
- A technically valid token does not prove that a proposed action remains within business intent.
- Identity, authority, and transaction consequence must remain distinguishable.

Deliverable: Write three challenge questions for an architect who says, "The agent uses SSO, so access is controlled."

#### Day 4 — OAuth, OIDC, tokens, and delegation

Learn these at recognition level:

- OAuth 2.0: delegated or client access to protected resources.
- OpenID Connect: identity information layered on OAuth 2.0.
- Access token: evidence presented to a resource server to exercise granted access.
- Refresh token: a mechanism for obtaining new access tokens; its protection is consequential.
- Scope: a bounded expression of requested or granted access.
- Audience: the intended recipient of a token.
- Sender-constrained token / proof of possession: reduces the usefulness of a stolen bearer token.
- Token exchange and transaction context: ways authorization may be narrowed and carried across a call chain.

Primary reference:

- [IETF RFC 6749 — OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc6749)
- [IETF RFC 9700 — OAuth 2.0 Security Best Current Practice](https://datatracker.ietf.org/doc/html/rfc9700)

Deliverable: Draw a simple path: human or system owner → agent → tool → target system. Label identity, delegation, authorization, and evidence at each boundary.

#### Day 5 — Workload identity and agent identity

Read:

- [SPIFFE standards overview](https://spiffe.io/docs/latest/spiffe-specs/)
- [NIST: Why Agentic AI Needs a Strong Identity Foundation](https://www.nist.gov/blogs/cybersecurity-insights/back-future-why-agentic-ai-needs-strong-identity-foundation)

Understand why dynamic software identity helps but does not answer:

- Who owns the agent?
- Why is it authorized?
- Which goal is approved?
- Which tools and transactions are allowed?
- May it delegate?
- Which consequences require human authorization?

**Week 1 artifact:** Complete Sections 1–4 of the companion [AI Agent Privileged-Access Lifecycle](./02_AI_Agent_Privileged_Access_Lifecycle.md).

### Week 2 — Privilege, tools, and runtime boundaries

**Purpose:** Move from identity vocabulary to an enforceable authority envelope.

#### Day 6 — Credential-sharing and impersonation failure

Study the failure pattern:

1. A human gives an agent the human's credential.
2. The target system sees the human, not the agent.
3. The agent inherits broad access and may impersonate the user.
4. Evidence cannot cleanly distinguish human action from agent action.
5. Revoking the agent may require disrupting the human.
6. Non-repudiation and accountability weaken.

Deliverable: Define the minimum evidence needed to prove that an agent—not the owner—initiated a transaction.

#### Day 7 — Standing privilege versus time-bound authority

Learn:

- Least privilege.
- Least standing privilege.
- Just-in-time access.
- Short-lived credentials.
- Task- or transaction-scoped authorization.
- Step-up authorization for higher-consequence actions.
- Automatic expiry.

Deliverable: Convert one broad entitlement such as "administer servers" into a bounded statement including environment, asset group, allowed action, prohibited action, time window, transaction limit, and approval condition.

#### Day 8 — Tools are authority boundaries

For every agent tool, ask:

- What can the tool read, create, change, execute, approve, delete, publish, purchase, or transmit?
- Does the tool enforce granular actions, or only broad roles?
- Can the agent discover or invoke tools that were not approved?
- Can tool output alter later agent reasoning?
- Does the tool call another service under a different identity?
- Is the target corporate IT, protected OT, test, UAT, or production?

Deliverable: Build a tool inventory with risk tier, owner, permitted operations, target environment, and kill mechanism.

#### Day 9 — Agent-to-agent delegation

Learn the core rule:

> Delegated authority must narrow or remain bounded as it moves; it must not silently expand because another agent or tool joins the chain.

Challenge:

- Can Agent A invoke Agent B?
- Is Agent B separately registered?
- Which principal's authority is being used?
- Does the downstream system receive the original delegation context?
- Who owns the combined outcome?
- Can either agent create additional agents or tools?

Deliverable: Identify where an apparently valid chain can lose the original purpose, scope, or accountability.

#### Day 10 — Memory, context, and instruction poisoning

Understand three distinct control objects:

- **Identity state:** who or what the agent is.
- **Authorization state:** what it may do now.
- **Context state:** information and instructions influencing what it decides to do.

A secure identity does not make corrupted context safe. Retrieved documents, tool output, persistent memory, messages, and webpages may contain instructions that redirect behavior or expose secrets.

Primary OWASP orientation:

- [OWASP Agentic AI Security Initiative](https://genai.owasp.org/initiatives/agentic-security-initiative/)
- [OWASP Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)

**Week 2 artifact:** Finish the authority envelope and tool-control sections of the lifecycle artifact.

### Week 3 — Human authority, evidence, monitoring, and response

**Purpose:** Define what makes agent operation governable after access has been granted.

#### Day 11 — Human-in-the-loop is not a control by itself

Distinguish:

- A meaningful decision made by an authorized person with sufficient context.
- A routine confirmation click.
- Consent fatigue caused by excessive approvals.
- An approval request that conceals credentials or sensitive information.
- Human-on-the-loop monitoring with intervention authority.
- Prohibited activity that no user may approve through an ad hoc prompt.

Deliverable: Classify ten proposed agent actions into autonomous, monitored, prior-approval, or prohibited.

#### Day 12 — Evidence and provenance

For a consequential action, preserve:

- Agent identity and version.
- Owner and accountable business authority.
- Delegating principal.
- Credential or token identifier—not the secret.
- Policy and authorization decision.
- Requested goal and approved purpose.
- Tool and target resource.
- relevant context sources and versions.
- Proposed and executed action.
- Human approval when required.
- Result, error, side effect, and rollback.
- Timestamp and correlation or transaction ID.
- Exceptions, policy overrides, and monitoring signals.

Deliverable: Complete the evidence-record schema in the lifecycle artifact.

#### Day 13 — Monitoring the authorization boundary

Monitor more than model output:

- New identities or unregistered agents.
- Privilege grants and entitlement changes.
- Token issuance, refresh, exchange, and expiry.
- Tool discovery and invocation.
- Cross-environment movement.
- Failed and denied actions.
- unusual action volume or speed.
- Delegation depth.
- Attempts to access credentials or secrets.
- Deviation from the approved goal or transaction pattern.
- Human override and emergency-stop activity.

Deliverable: Define five leading indicators and five incident indicators.

#### Day 14 — Suspension, revocation, and fallback

A shutdown design should identify:

1. Who may declare suspension.
2. How the agent identity is disabled.
3. How active tokens and credentials are revoked or allowed to expire.
4. How tool access is removed.
5. How agent-to-agent calls are blocked.
6. How queued or in-flight actions are contained.
7. How state and evidence are preserved.
8. How operations continue manually or through a validated non-agent process.
9. What must be proven before restoration.
10. Who authorizes return to service.

Deliverable: Conduct a tabletop: "The agent begins attempting valid but unexpected privileged actions across multiple systems."

#### Day 15 — Incident and decision records

Separate:

- Technical event.
- Security incident.
- Control failure.
- Business consequence.
- Evidence sufficiency.
- Qualified interpretation.
- Risk acceptance.
- Decision and accountable authority.

**Week 3 artifact:** Complete Sections 5–10 and the emergency-revocation section of the lifecycle artifact.

### Week 4 — Lead the program

**Purpose:** Convert learning into executive and program leadership behavior.

#### Day 16 — Agent inventory and ownership

Define minimum inventory fields:

- Agent name and unique identifier.
- Business purpose and risk tier.
- Executive sponsor, business owner, technical owner, IAM owner, and operational owner.
- Model, orchestration layer, tools, target systems, and environments.
- Direct and delegated permissions.
- Data classifications.
- Autonomy level.
- Human decision boundaries.
- Monitoring and evidence locations.
- Suspension authority and mechanism.
- Review and expiry dates.

#### Day 17 — Lifecycle governance

Map the gates:

1. Propose.
2. Classify.
3. Design.
4. Threat-model.
5. Test.
6. Authorize.
7. Activate.
8. Monitor.
9. Change.
10. Suspend or recover.
11. Retire.

For every gate, identify decision owner, required evidence, unresolved uncertainty, and expiration condition.

#### Day 18 — Architecture-review leadership

Use this review sequence:

1. Establish the business proposition.
2. Identify every acting identity.
3. Trace authority from owner to transaction.
4. Locate where scope can widen.
5. identify credential and secret handling.
6. Identify tool, environment, and data boundaries.
7. Define human decision rights.
8. Define evidence and monitoring.
9. Demonstrate suspension and fallback.
10. State residual risk and accountable acceptance.

Deliverable: Run the sequence against the case workbook.

#### Day 19 — Executive communication

Prepare three versions of the same recommendation:

- 90-second executive briefing.
- One-page decision memorandum.
- 15-minute architecture and governance review.

Do not lead with protocol names. Lead with business value, authority, consequence, evidence, and reversibility.

#### Day 20 — Capstone review

Complete the companion [Regulated-Enterprise Case Workbook](./03_Regulated_Enterprise_Case_Workbook.md).

**Capstone test:** Defend one of four recommendations:

- Approve as designed.
- Approve with constraints.
- Run a bounded pilot only.
- Do not authorize until named evidence or controls exist.

The recommendation must identify who decides, what evidence supports the decision, what remains uncertain, what is prohibited, and what would trigger suspension or reconsideration.

## Executive challenge questions

Use these in interviews, design reviews, vendor sessions, and steering forums:

1. What uniquely identifies the agent, and can the target distinguish it from the human or service that owns it?
2. Is the agent using its own credential, a delegated credential, or a shared human credential?
3. Where is the approved purpose represented and enforced?
4. Which permissions are standing, which are just-in-time, and which expire with the task?
5. Can the agent select unapproved tools, create new integrations, or delegate to another agent?
6. How does authority narrow across an agent-to-agent or agent-to-tool call chain?
7. Which actions are autonomous, monitored, prior-approval, or prohibited?
8. What information will the human approver see, and how are we preventing consent fatigue?
9. Can the agent cross from corporate IT into protected OT under the same identity or token?
10. What proves that a specific action was authorized at the time it occurred?
11. How do we preserve model, prompt, context, tool, policy, and transaction provenance without logging secrets?
12. Which monitoring signal automatically reduces or suspends authority?
13. Can we revoke the agent without disabling its human owner or disrupting unrelated services?
14. What happens to queued and in-flight actions during suspension?
15. What is the validated fallback if the agent is unavailable or untrusted?
16. Who may restore service, and what evidence is required?
17. Which control owner periodically certifies that access is still required?
18. Which assumption in the business case would invalidate continued autonomy?
19. What residual risk is being accepted, by whom, and for how long?
20. If an auditor asks who authorized the consequence, what record will we produce?

## Knowledge check

A satisfactory answer should explain the governing issue, not merely name a technology.

1. Why is a unique identity necessary but insufficient for an AI agent?
2. Why is a long-lived API key a poor default for a privileged agent?
3. What is the difference between a token scope and a business-purpose boundary?
4. Why can human-in-the-loop approval reduce accountability?
5. What evidence connects a delegated action to its originating authority?
6. What changes when an agent can choose among several tools?
7. Why should corporate IT and protected OT normally be treated as separate authorization domains?
8. What must happen to active authority when an agent is suspended?
9. When does an agent-identity problem become a capital-governance problem?
10. What current evidence would justify expanding, constraining, or ending the agent initiative?

## Primary source set

The source set is deliberately small and primary.

1. [NIST AI Agent Standards Initiative](https://www.nist.gov/artificial-intelligence/ai-agent-standards-initiative) — current initiative, created February 17, 2026 and updated August 14, 2026.
2. [NCCoE Software and AI Agent Identity and Authorization](https://www.nccoe.nist.gov/projects/software-and-ai-agent-identity-and-authorization) — project page; status was "Reviewing Comments" when this package was prepared.
3. [NIST: Back to the Future—Why Agentic AI Needs a Strong Identity Foundation](https://www.nist.gov/blogs/cybersecurity-insights/back-future-why-agentic-ai-needs-strong-identity-foundation) — August 27, 2026.
4. [NIST IR 8596 Initial Preliminary Draft — Cybersecurity Framework Profile for Artificial Intelligence](https://nvlpubs.nist.gov/nistpubs/ir/2025/NIST.IR.8596.iprd.pdf) — a draft, not final guidance. Relevant areas include PR.AA-03, PR.AA-04, PR.AA-05, PR.PS-05, and RS.MI-01.
5. [OWASP Agentic AI Security Initiative](https://genai.owasp.org/initiatives/agentic-security-initiative/).
6. [OWASP Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/).
7. [IETF RFC 6749 — OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc6749).
8. [IETF RFC 9700 — OAuth 2.0 Security Best Current Practice](https://datatracker.ietf.org/doc/html/rfc9700).
9. [SPIFFE standards](https://spiffe.io/docs/latest/spiffe-specs/).

## Completion standard

This priority is complete when the learner can produce and defend:

- An agent inventory entry.
- An identity and delegation path.
- A bounded authority envelope.
- A tool and target-system matrix.
- A human-authority model.
- An evidence-record specification.
- A monitoring and response design.
- A suspension, revocation, and fallback procedure.
- A decision memorandum recommending approval, constraint, pilot, or deferral.

Completion does not mean memorizing every protocol. It means being able to expose missing ownership, authority, evidence, reversibility, and decision logic before privileged autonomy becomes an unmanaged enterprise fact.

---

**Prepared:** 2026-09-17  
**Source status note:** External standards and guidance continue to evolve. Verify version and publication status before using this package as the basis for a production control decision.  
**Repository boundary:** Learning material only. No manuscript or book-control file is modified by this package.
