# Module 6 — Human Authority and Separation of Duties

**Status:** Accepted for public learning use  
**Version:** 1.0  
**Guide coverage:** Day 11  
**Estimated study time:** 70–90 minutes plus exercise

## Purpose

Adding a human approval step does not automatically make an agent governed. The human may lack authority, context, time, independence, or a real ability to refuse. The agent may also have already taken an irreversible step before approval appears.

This module develops the program-level ability to assign actions to four operating classes—autonomous, monitored, prior approval, and prohibited—and to design meaningful human authority and separation of duties around them.

## Learning objectives

A learner should be able to:

- Distinguish human participation, oversight, approval, and accountability.
- Classify agent actions by consequence, reversibility, uncertainty, and decision authority.
- Define what information an approver must receive and what a valid decision records.
- Identify consent fatigue, automation bias, rubber-stamp approval, self-approval, and authority ambiguity.
- Separate requesting, recommending, approving, executing, monitoring, reviewing, and restoring roles.
- Establish escalation, timeout, absence, emergency, and fallback behavior.
- Require evidence that human intervention is timely, informed, independent, and effective.
- Preserve boundaries with legal, compliance, safety, privacy, security, architecture, audit, and operational authorities.

## 1. Human presence is not human authority

These statements are not equivalent:

- A human saw the action.
- A human was notified.
- A human could interrupt.
- A human approved the action.
- The approving human had authority to approve it.
- The human remains accountable for the consequence.

A person may be “in the loop” yet receive an approval prompt after the consequential action, see too little information, lack subject-matter competence, face hundreds of alerts, or be unable to reject without operational pressure.

The governing question is:

> Which decision must a human make, with what authority and evidence, before which consequence can occur?

## 2. Four action classes

| Class | Meaning | Suitable conditions |
|---|---|---|
| Autonomous | Agent may execute without transaction-specific human approval | Low bounded consequence; tested; reversible; observable; within explicit authority |
| Monitored | Agent may execute while a human or control function observes and can intervene | Bounded consequence; reliable detection and stop capability; clear ownership |
| Prior approval | A qualified human must authorize before execution | Material consequence, uncertainty, sensitive data, privilege, external commitment, or policy trigger |
| Prohibited | Agent may not perform the action in the defined context | Unacceptable consequence, absent authority, legal/safety boundary, inadequate evidence, or unavailable control |

Classification attaches to a specific action, target, environment, data class, purpose, and condition. It should not be assigned to an agent as a whole.

An action can also move between classes. A UAT restart may be autonomous under strict limits, monitored after stable evidence, approval-required in production, and prohibited in protected OT.

## 3. Classification factors

Use the following factors together:

| Factor | Governing question |
|---|---|
| Consequence | What financial, operational, safety, identity, privacy, legal, customer, or reputational effect can result? |
| Reversibility | Can the effect actually be undone, within what time, and with what residual harm? |
| Uncertainty | How reliable are the input, context, model behavior, and target state? |
| Authority | Who is empowered to make this decision? |
| Sensitivity | What data, privilege, environment, or external commitment is involved? |
| Detectability | Will the organization know quickly that the action is wrong? |
| Interruptibility | Can the action, session, task, queue, and downstream effect be stopped? |
| Volume/speed | Can many individually small actions accumulate into material consequence? |
| Novelty/change | Has the model, prompt, tool, target, policy, or environment changed? |
| Evidence | Can the transaction be reconstructed and defended? |

Low monetary value does not necessarily mean low consequence. Identity changes, data disclosure, safety settings, public communication, or cumulative transactions can be material.

## 4. Meaningful prior approval

A meaningful approval occurs before the controlled consequence and includes enough information to exercise judgment.

The approver should see:

- requesting principal and accountable owner;
- agent, tool, credential, and target identities;
- business purpose and governing reference;
- proposed action and material arguments;
- environment, data class, and affected parties;
- expected consequence, uncertainty, and reversibility;
- alternatives and reason automation was selected;
- policy result, exceptions, and conflicts;
- downstream delegation, task, or persistence;
- expiry, volume limit, stop path, and fallback.

The record should capture the approver, authority basis, information shown, decision, conditions, time, expiry, and correlation identifier.

A button labeled “Approve” is an interface element. It is not evidence of meaningful authorization by itself.

## 5. Consent fatigue and automation bias

Consent fatigue occurs when frequent, repetitive, low-information prompts degrade attention. Automation bias occurs when people over-rely on automated recommendations or treat system output as more authoritative than the evidence supports.

Warning signs include:

- approval rates near 100 percent;
- response times too short for review;
- repeated identical prompts;
- buried differences between transactions;
- no decline, escalation, or request-more-information path;
- incentives that punish delay;
- approvers lacking access to source evidence;
- recommendations displayed without uncertainty or alternatives.

Controls may include risk-tiered routing, batching only genuinely similar low-risk items, quiet periods, workload limits, independent sampling, quality measures, and redesign or suspension when approval becomes ceremonial.

The answer is not simply more prompts.

## 6. Separation of duties

Separation of duties reduces the chance that one actor can initiate, authorize, execute, conceal, and certify a consequential action.

| Role | Core responsibility |
|---|---|
| Requester | States the need and purpose |
| Recommender | Analyzes evidence and proposes action |
| Approver | Exercises the relevant decision authority |
| Executor | Performs the authorized action |
| Monitor | Detects deviation or harmful result |
| Reviewer | Independently evaluates evidence and control operation |
| Restorer | Authorizes return after suspension or incident |
| Control owner | Defines and maintains the governing rule |

An agent should not request, recommend, approve, execute, and attest to the same action. A human should not approve an action they requested when policy requires independence.

Separation must reflect real authority, not merely different usernames controlled by the same person or service.

## 7. Human-in-the-loop and human-on-the-loop

These labels are useful only when their mechanics are explicit.

### Human-in-the-loop

A human decision is required within the transaction before a defined action proceeds. Governance must specify the exact gate, authority, information, timeout, and failure behavior.

### Human-on-the-loop

A human oversees operation and can intervene. Governance must specify visibility, alert quality, response objective, interrupt mechanism, coverage, and what happens when the overseer is unavailable.

For either model, ask:

- What does the human decide?
- Can the human stop the action in time?
- What happens outside staffed hours?
- Does silence approve, deny, pause, or escalate?
- Can the agent route around the gate?
- How is the human’s authority verified?
- What evidence proves intervention worked?

## 8. Timeouts, absence, and escalation

A safe design never assumes that an unanswered prompt means approval.

Define:

- decision deadline;
- default deny, pause, or safe fallback;
- alternate qualified approver;
- conflict-of-interest routing;
- emergency authority;
- maximum escalation depth;
- expiry of approval;
- reapproval after material change;
- containment of queued work.

Business pressure is not emergency authority. Emergency access requires defined triggers, bounded duration, alerting, enhanced evidence, independent review, and post-use revocation or reset.

## 9. Prohibited actions

Some actions should remain prohibited until policy, authority, technology, or evidence changes. Examples may include:

- creating or changing the agent’s own approval authority;
- approving its own exception;
- using unapproved credentials or tools;
- crossing into production or protected OT from a UAT approval;
- deleting or altering evidence needed for review;
- making an external legal, financial, employment, safety, or regulatory commitment without appropriate authority;
- acting when required evidence, monitoring, or interruption is unavailable;
- treating retrieved content or memory as emergency authorization.

“Prohibited” is a current governance decision, not a claim that an action can never be automated.

## 10. Evidence and effectiveness

Measure more than the number of approvals.

Useful evidence includes:

- actions by class and risk;
- approvals, declines, escalations, expiries, and timeouts;
- information displayed to the approver;
- decision time and workload;
- post-approval exceptions or adverse outcomes;
- instances where target-side policy blocked an approved action;
- alerts acknowledged and interventions attempted;
- stop time and residual work;
- conflicts of interest and alternate routing;
- changes that triggered reclassification;
- independent samples comparing decisions with evidence.

A high approval rate may reflect good pre-filtering—or a nonfunctional control. The evidence must distinguish them.

## 11. Fictional case — ORION approval design

ORION now proposes maintenance actions using the agent chain from Module 5.

The pilot design classifies:

- UAT health reads as autonomous;
- UAT restarts as monitored;
- production restarts as prior approval;
- protected-OT configuration changes as prohibited.

However:

- the application owner both requests and approves production restarts;
- the prompt shows “ORION recommends restart” without source evidence, target health, alternatives, or rollback;
- no timeout behavior is defined;
- the maintenance agent can submit the task before approval and mark it “pending”;
- the task service begins preparation that creates a target-side lock;
- the same approver receives dozens of prompts during incidents;
- denial reasons are not recorded;
- the recovery team assumes the original approver can authorize restoration.

### Governing diagnosis

- Request and approval are not separated.
- The decision lacks adequate information.
- Consequence begins before approval.
- Consent fatigue is foreseeable.
- Timeout and absence behavior are unsafe.
- Restoration authority is unexamined.
- The approval record cannot show decision quality.

The classification table is a start, not a complete operating control.

## 12. Applied decision matrix

A defensible matrix includes:

| Action | Environment | Class | Conditions | Human authority | Default on failure |
|---|---|---|---|---|---|
| Read UAT health | UAT | Autonomous | Approved source; no sensitive output; logged | Service owner sets policy | Deny if identity or evidence fails |
| Restart named UAT service | UAT | Monitored | One target; bounded window; cancellable | Operations monitors/intervenes | Pause and fallback |
| Restart production service | Production | Prior approval | Approved change; independent approver; rollback; bounded task | Authorized change/operations role | Deny on timeout or change |
| Change protected-OT configuration | Protected OT | Prohibited for pilot | Separate qualified review required | OT/safety authority | Deny and alert |

The matrix must state who can change the classification and what evidence is required.

## 13. Executive and program-lead questions

1. Which exact consequence does the human decision precede?
2. Does the approver have authority, independence, competence, time, and evidence?
3. Can the agent create state before approval?
4. What does silence mean?
5. How are conflicts, absences, and emergencies handled?
6. Which actions are prohibited and enforced at the target?
7. Can many low-risk actions aggregate into material consequence?
8. What proves monitoring and intervention are timely?
9. Who reviews approval quality and classification drift?
10. Who may restore operation after suspension?

## 14. Knowledge check

1. Why is a human click not automatically authorization?
2. Why classify actions rather than whole agents?
3. What is consent fatigue?
4. What is automation bias?
5. Which roles commonly require separation?
6. Why must approval precede the controlled consequence?
7. What should happen on approval timeout?
8. Why may restoration require different authority?

### Answer guide

1. The person may lack authority, information, independence, time, or a real choice.
2. Consequence changes by action, target, environment, data, purpose, and conditions.
3. Frequent or low-information prompts degrade attention and decision quality.
4. People may over-rely on automated recommendations.
5. Requesting, recommending, approving, executing, monitoring, reviewing, and restoring.
6. Later approval cannot authorize a consequence that already occurred.
7. Deny, pause, or enter an approved safe fallback—not assume consent.
8. Restoration depends on investigation, control validation, operational safety, and independent accountability.

## 15. Exercise and completion evidence

Complete the [Module 6 Participant Workbook](./exercises/11_Module_06_Participant_Workbook.md) before reading the [Model Answer and Review Guide](./exercises/12_Module_06_Model_Answer_and_Review_Guide.md).

Completion requires:

- an action-classification matrix;
- a separation-of-duties map;
- a meaningful approval design;
- timeout, escalation, emergency, and restoration rules;
- an effectiveness and evidence specification;
- a written or oral defense.

Publication does not establish learner completion.

## 16. Interview translation

A credible program-lead statement is:

> I can lead the governance work that classifies agent actions as autonomous, monitored, approval-required, or prohibited; assigns real human decision authority; separates incompatible roles; and tests whether approval, intervention, escalation, and restoration work under operating pressure. Qualified legal, safety, privacy, security, architecture, audit, and operational owners make the conclusions reserved to their authority.

This builds on program disciplines of decision rights, change approval, operational readiness, escalation, exception management, testing, and audit evidence. It does not claim model engineering or professional authority the learner does not hold.

## 17. Primary sources

- [NIST AI Risk Management Framework 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf) — governance, roles, accountability, human oversight, measurement, and risk-management outcomes. AI RMF 1.0 remains published while revision work proceeds.
- [NIST AI 600-1 — Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf) — human-AI configuration, information integrity, testing, monitoring, and incident considerations.
- [NIST SP 800-53 Rev. 5, Update 1](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) — separation of duties, least privilege, account management, audit, and contingency-control vocabulary.
- [NIST IR 8596 Initial Preliminary Draft](https://nvlpubs.nist.gov/nistpubs/ir/2025/NIST.IR.8596.iprd.pdf) — draft Cyber AI Profile context for privilege, execution, human oversight, and response; not treated as final.
- [NIST: Why Agentic AI Needs a Strong Identity Foundation](https://www.nist.gov/blogs/cybersecurity-insights/back-future-why-agentic-ai-needs-strong-identity-foundation) — informative context on agents, permissions, and human oversight.

Source status was reviewed on 2026-09-17. Verify current versions and applicability before production use.
