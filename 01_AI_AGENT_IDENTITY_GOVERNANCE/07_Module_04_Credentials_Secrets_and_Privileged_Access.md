# Module 4 — Credentials, Secrets, and Privileged Access

**Status:** Accepted for public learning use  
**Version:** 1.0  
**Guide coverage:** Days 6–8  
**Estimated study time:** 75–100 minutes plus exercise

## Purpose

An AI agent may be correctly identified and properly authenticated yet still create unacceptable risk if it can reach a powerful credential, retain standing privilege, or use a tool whose target permissions exceed the approved business purpose.

This module develops the program-level ability to convert broad technical access into a bounded authority statement. It is educational, not a production design or configuration guide.

## Learning objectives

By the end of this module, a learner should be able to:

- Distinguish identity, credential, secret, entitlement, privileged access, and authority.
- Explain why a credential is a means of access rather than proof of approved business purpose.
- Identify static-secret, shared-credential, impersonation, and privilege-accumulation risk.
- Challenge standing privilege and frame least privilege, least standing privilege, and just-in-time access.
- Define a privileged authority envelope across action, target, environment, duration, volume, delegation, approval, and consequence.
- Require evidence, suspension, emergency-access, and recovery controls.
- Lead the governance work while preserving boundaries with IAM, PAM, security, architecture, operations, safety, and legal specialists.

## 1. The governing distinction

The control problem becomes clearer when six concepts remain separate.

| Concept | Governing question |
|---|---|
| Identity | Who or what is acting? |
| Credential | What evidence or mechanism is presented to obtain access? |
| Secret | What sensitive value or key material must be protected from unauthorized disclosure or use? |
| Entitlement | What technical right has been assigned? |
| Privileged access | What access could materially change systems, controls, data, identities, or operations? |
| Authority | For what purpose, under whose accountability, and within what consequence boundary may the action occur? |

A valid credential can unlock an entitlement. It does not establish that the requested action is timely, necessary, properly approved, or within business authority.

> A credential is a capability carrier, not a complete authority record.

Privilege should be classified by consequence, not by whether a role contains the word “admin.” The ability to change an identity policy, release code, alter a financial record, modify an operational set point, retrieve regulated data, or create another credential may all be privileged.

## 2. Why agents change the privileged-access problem

Traditional privileged-access programs already address powerful accounts, credentials, sessions, approvals, rotation, monitoring, and emergency access. Agents add several pressures:

- They may select and sequence actions at machine speed.
- They may reach credentials through tools rather than sign in directly.
- Their runtime, service identity, OAuth client, tool identity, and target account may be different actors.
- Context, memory, or instructions may influence credential use.
- A successful technical action may exceed the delegating human’s business authority.
- Queued or downstream work may continue after the visible agent is stopped.
- Shared credentials can collapse attribution at exactly the point evidence matters most.

The core PAM disciplines still apply, but the object being governed is no longer only an account. It is the full authority chain from purpose and accountable owner through agent, credential, tool, target, evidence, and interruption.

## 3. Credential and secret failure patterns

### Shared credentials and impersonation

When a human, agent, service, or tool uses a shared privileged account, the target may record only the shared identity. The organization can lose reliable attribution to the actual actor, delegating principal, request, and approval.

A named agent that later uses a common administrator credential is not end-to-end attributable merely because the agent authenticated earlier.

### Static and long-lived secrets

Long-lived passwords, API keys, private keys, and similar secrets enlarge the interval in which theft, replay, forgotten copies, or unauthorized reuse can occur. Rotation helps, but rotation alone does not correct excessive privilege, poor attribution, unrestricted targets, or absent business authority.

Short-lived credentials reduce exposure time. They are not automatically least-privileged, task-bound, audience-restricted, or safe.

### Secret exposure surfaces

Secrets can escape through:

- source code, scripts, configuration, or container images;
- environment variables and local files;
- prompts, retrieved context, memory, and tool results;
- logs, traces, screenshots, tickets, and chat;
- copied test data and support bundles;
- model output or error handling.

Secrets should not be placed in prompts, durable memory, logs, or ordinary work records. Architecture and engineering teams must determine approved secret delivery and protection mechanisms.

### Credential multiplication

An agent workflow can accumulate several usable artifacts: workload credentials, access tokens, refresh tokens, target-system passwords, API keys, session cookies, and delegated grants. Inventory and revocation must cover the chain, not only the first credential.

## 4. From standing privilege to bounded access

### Least privilege

Least privilege asks whether the granted actions and resources are limited to what the approved purpose requires.

### Least standing privilege

Least standing privilege asks how much power remains continuously available when no approved task is active. An entitlement can be narrowly defined and still be dangerous if it is always on.

### Just-in-time and task-bound access

Just-in-time access makes privilege available for a bounded need and duration. A stronger governance design also binds it to:

- a specific requesting actor and accountable owner;
- an approved purpose or change;
- permitted actions and targets;
- an environment;
- start and expiry conditions;
- transaction or volume limits;
- required human decisions;
- downstream delegation limits;
- evidence and suspension paths.

The goal is not merely “temporary admin.” The goal is the minimum authority envelope needed for the approved task.

### Brokered or mediated access

A vault, broker, proxy, or privileged-session service may keep a target secret away from the actor, inject it at use time, record a session, or issue a short-lived credential. These mechanisms can improve control, but none substitutes for correct entitlements, meaningful approval, target enforcement, evidence quality, and lifecycle ownership.

Program leaders should ask what the target sees, what the actor can retrieve, what is recorded, what can be revoked, and what work continues after revocation.

## 5. The privileged authority envelope

Convert “the agent needs admin” into a statement that can be reviewed and tested.

| Dimension | Required boundary |
|---|---|
| Purpose | Approved business outcome and reference |
| Actor | Agent, workload, client, tool, and target identity |
| Accountable owner | Named role responsible for continued use |
| Actions | Explicit allowed operations; prohibited operations |
| Resources | Named systems, accounts, data, or resource classes |
| Environment | Development, test, UAT, production, corporate IT, protected OT, or other zone |
| Time | Start, maximum duration, expiry, renewal conditions |
| Volume | Transaction, record, change, or rate limits |
| Delegation | Whether downstream agents or tools may act and how authority narrows |
| Human decision | Actions needing prior approval and required decision information |
| Evidence | Correlation, approval, credential issuance, action, result, and revocation records |
| Interruption | Identity disablement, credential revocation, session termination, queue containment |
| Recovery | Validation, restoration authority, and fallback process |

A bounded statement might read:

> For approved change CHG-2048, the release agent may use its distinct workload identity to request a 20-minute mediated session that can restart one named application service in UAT only. It may not change identities, retrieve the target secret, access production or OT, delegate the session, or modify configuration. The change approver must authorize the request; all issuance, tool calls, target actions, results, and session termination must share a correlation identifier. Security operations may terminate the session and revoke the grant; expired or failed work requires a new request.

That statement is reviewable. “Admin access with logging” is not.

## 6. Separation by environment and consequence

A credential or role should not silently cross development, test, UAT, production, corporate IT, and protected OT boundaries. Similar account names do not mean similar risk.

Operational technology environments can impose safety, reliability, availability, timing, and recovery constraints that differ from corporate IT. NIST SP 800-82 Rev. 3 describes these distinctive OT security considerations. Any agent access affecting protected OT therefore requires qualified OT, safety, operations, architecture, security, and regulatory review.

Program questions include:

- Is the identity unique per environment?
- Can one approval or credential reach multiple zones?
- Are test tools connected to production targets?
- Can corporate identities traverse into protected OT?
- Do emergency and recovery procedures match operational constraints?
- Is the fallback safe if the agent or broker becomes unavailable?

## 7. Privileged-access lifecycle

A governed lifecycle should cover more than credential issuance.

1. **Propose:** document purpose, owner, consequence, targets, and alternatives.
2. **Classify:** identify privileged actions, environment, data, safety, and regulatory impact.
3. **Design:** select identities, entitlements, credential form, mediation, approval, evidence, and interruption.
4. **Approve:** obtain decisions from accountable business and qualified control authorities.
5. **Provision:** issue only approved identities, grants, and dependencies.
6. **Validate:** test allowed and denied actions, expiry, revocation, logging, and fallback.
7. **Operate:** monitor use, exceptions, drift, failed actions, and credential health.
8. **Change:** re-evaluate material changes to model, prompt, tools, targets, permissions, dependencies, or environment.
9. **Suspend and recover:** contain the full chain, preserve evidence, validate safety, and govern restoration.
10. **Retire:** revoke credentials and grants, remove dependencies, close records, and confirm no residual access.

## 8. Approval, separation of duties, and emergency access

Meaningful approval requires decision-grade information. A prompt that says “Allow admin?” invites consent fatigue and does not show purpose, target, action, duration, consequence, or alternatives.

The requester, approver, credential authority, operator, reviewer, and emergency-access custodian may need separation depending on risk. An agent should not request, approve, execute, and attest to its own privileged action.

Emergency or break-glass access needs:

- defined triggering conditions;
- tightly limited eligible users or services;
- strong authentication and explicit activation;
- bounded permissions and duration;
- immediate alerting and enhanced evidence;
- post-use review by an independent authority;
- credential reset or revocation;
- testing that does not expose the emergency secret.

Emergency access is not a permanent bypass labeled for emergencies.

## 9. Evidence and interruption

Decision-grade privileged-access evidence should connect:

- approved purpose and request;
- delegating principal and accountable owner;
- agent, workload, client, tool, and target identities;
- entitlement and policy version;
- credential or grant issuance, binding, expiry, and revocation;
- human approval and information shown;
- requested and executed actions;
- target result and business consequence;
- exceptions, overrides, and emergency use;
- session termination, queue containment, and recovery.

Do not record secret values. Evidence should identify the credential or grant without reproducing it.

Suspension must address identity, credentials, sessions, queued work, downstream agents, target jobs, and cached grants. Disabling the visible agent is incomplete if a tool session or scheduled job can still act.

## 10. Fictional case — ORION maintenance agent

ORION is a fictional agent proposed to accelerate application maintenance across a regulated enterprise.

The draft design says:

- ORION authenticates through a service identity.
- A shared “platform-admin” credential is stored in a team-accessible secret location.
- The credential reaches corporate production, UAT, and a protected OT support zone.
- ORION can call a general automation tool that has broader rights than ORION’s documented use case.
- The credential is rotated annually and after known incidents.
- A human approves “high-risk” actions, but the approval screen shows only a short action label.
- Stopping ORION does not terminate active tool sessions or queued jobs.
- Logs record the shared target account but not a common correlation identifier across approval, credential use, tool call, and target action.

The design has authentication, a secret store, approval, rotation, and logs. It still lacks a defensible authority envelope.

### Governing diagnosis

- The shared account weakens attribution and may create impersonation.
- Annual rotation leaves a long reuse window.
- The tool’s permissions exceed the documented purpose.
- Cross-environment reach combines distinct consequence classes.
- Approval lacks enough information for a meaningful decision.
- Suspension is not end-to-end.
- Evidence cannot reliably reconstruct the authority chain.

The correct response is not simply “add more logging.” ORION needs distinct identities, bounded target entitlements, mediated and short-lived access where feasible, environment separation, meaningful approvals, correlation, and full-chain interruption and recovery.

## 11. Executive and program-lead questions

Ask:

1. Which privileged outcomes can this agent cause, directly or through tools?
2. Is each target action attributable to the actual agent, workload, delegating principal, and approval?
3. Can the actor retrieve or disclose a target secret?
4. What privilege is continuously available when no approved task exists?
5. How are access and duration bound to a specific purpose?
6. Can authority cross environments or expand through a tool?
7. Which actions require independent human authorization?
8. What proves denied actions, expiry, revocation, and session termination work?
9. Can active sessions, queued work, and downstream jobs be contained?
10. Who decides restoration, and what evidence supports it?

## 12. Knowledge check

1. Why is a valid credential not proof of business authority?
2. What risk remains when a long-lived secret is rotated regularly?
3. How does least standing privilege differ from least privilege?
4. Why can a vault or broker improve but not complete governance?
5. What makes an approval meaningful?
6. Why must suspension include downstream work?
7. What special review is needed before protected-OT access?
8. What should evidence record instead of a secret value?

### Answer guide

1. It proves or enables access under technical conditions; it does not prove purpose, approval, timing, or consequence authority.
2. Excessive entitlements, theft during the validity window, unauthorized reuse, poor attribution, and copied secret material may remain.
3. Least privilege narrows what may be done; least standing privilege minimizes power continuously available.
4. Mediation can protect delivery and record use, but cannot fix incorrect entitlements, authority, approval, target enforcement, or lifecycle ownership.
5. The approver receives adequate purpose, actor, action, target, duration, consequence, and alternative information and has actual decision authority.
6. Sessions, queues, jobs, cached grants, and delegated actors may continue after the visible agent stops.
7. Qualified OT, safety, operations, architecture, security, regulatory, and continuity review appropriate to the environment.
8. A non-secret identifier, issuer, subject/actor relationship, scope or entitlement, target, issuance, expiry, use, and revocation evidence.

## 13. Applied exercise and completion evidence

Complete the [Module 4 Participant Workbook](./exercises/07_Module_04_Participant_Workbook.md) before reading the [Model Answer and Review Guide](./exercises/08_Module_04_Model_Answer_and_Review_Guide.md).

Completion requires:

- a credential-and-privilege exposure map;
- a bounded authority statement replacing broad admin access;
- an access-lifecycle and evidence specification;
- a written or oral defense of the highest residual risk.

Publication of these materials does not establish learner completion.

## 14. Interview translation

A credible program-lead statement is:

> I translate broad privileged-access requests for AI agents into bounded authority envelopes covering identity, target, action, environment, duration, delegation, approval, evidence, and interruption. I lead the cross-functional decisions and delivery controls while qualified IAM, PAM, security, architecture, OT, and engineering specialists own detailed technical conclusions and configuration.

Leadership of a multi-year PAM program can provide a strong bridge to this work: inventory, ownership, onboarding, entitlement decisions, exceptions, dependencies, rotation, testing, operational readiness, audit evidence, and lifecycle governance remain central. That experience does not by itself establish AI engineering or PAM-platform administration expertise.

## 15. Primary sources

- [NIST SP 800-53 Rev. 5 — Security and Privacy Controls for Information Systems and Organizations](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) — access control, separation of duties, least privilege, authenticator management, and audit/control vocabulary.
- [NIST SP 800-207 — Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final) — resource-focused access and explicit authentication and authorization principles.
- [NIST SP 800-82 Rev. 3 — Guide to Operational Technology Security](https://csrc.nist.gov/pubs/sp/800/82/r3/final) — OT performance, reliability, safety, and security context.
- [NIST IR 8587 — Protecting Tokens and Assertions from Forgery, Theft, and Misuse](https://csrc.nist.gov/pubs/ir/8587/final) — token protection, key management, verification, lifecycle controls, and continuous monitoring.
- [NIST: Why Agentic AI Needs a Strong Identity Foundation](https://www.nist.gov/blogs/cybersecurity-insights/back-future-why-agentic-ai-needs-strong-identity-foundation) — agent identity, credential sharing, token scope, and human oversight context.

Source status was reviewed on 2026-09-17. Verify current status and applicability before production use.
