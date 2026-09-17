# Module 2 Participant Workbook — Authentication to Consequence

**Module ID:** P1-M02  
**Estimated working time:** 60–90 minutes  
**Required prerequisite:** Module 2 lesson  
**Learner output:** Authentication-to-consequence boundary analysis  
**Content status:** Accepted for public learning use

## Purpose

This workbook tests whether a learner can challenge an access-control conclusion without confusing authentication with authorization, business authority, or acceptance of the resulting consequence.

Complete the workbook before opening the model answer. The goal is not to reproduce one preferred technical design. The goal is to make the missing decisions, owners, limits, and evidence visible.

## Scenario — ORION service-restoration agent

A regulated enterprise proposes ORION, an AI-enabled operations agent. ORION will:

- Read monitoring alerts and incident tickets.
- Retrieve an approved runbook.
- Recommend remediation.
- Request temporary elevated access.
- Invoke an administrative tool.
- Restart a named corporate production service after approval.
- Update and close the incident record when service health returns.

The proposed design has these characteristics:

- A human operator signs in through enterprise SSO with MFA.
- ORION runs inside the operator’s authenticated session.
- A shared automation account invokes the administrative tool.
- The target system records the shared account.
- The platform team says its prompt and tool description limit ORION to incident response.
- A human approval dialog says, “ORION requests elevated access. Approve / Deny.”
- The same orchestration platform can reach corporate IT and protected operational-technology support systems.
- Logs exist in the identity provider, agent platform, PAM service, tool broker, target system, monitoring platform, and incident system, but no common transaction identifier has been demonstrated.
- Suspending the operator’s account stops the interactive session. The design team has not shown what happens to issued credentials, queued work, or downstream sessions.

The design team concludes:

> “The agent uses SSO, so access is controlled.”

## Working rules

- Analyze the scenario at the executive and program-lead level.
- Do not prescribe a vendor or configuration.
- Distinguish facts from assumptions and unanswered questions.
- Treat corporate IT and protected OT as separate authority domains.
- Route technical, safety, regulatory, legal, privacy, and audit decisions to qualified owners.
- Evaluate privilege by consequence, not by the name of the account or tool.

# Part 1 — Classify the claim

## 1.1 What SSO may contribute

Write three to five sentences explaining what enterprise SSO and MFA may establish or improve.

**Your response:**

> 

## 1.2 What the claim does not establish

Identify at least six material facts that “uses SSO” does not prove.

| # | Missing fact | Why it matters |
|---:|---|---|
| 1 |  |  |
| 2 |  |  |
| 3 |  |  |
| 4 |  |  |
| 5 |  |  |
| 6 |  |  |

## 1.3 Why an acting agent changes the question

Explain why the control discussion changes when software can select and execute actions instead of merely displaying information.

**Your response:**

> 

# Part 2 — Separate the five governing boundaries

Complete every row. If the scenario does not provide an answer, mark it “Not demonstrated” and state who must provide the evidence.

| Boundary | ORION analysis | Evidence or accountable source |
|---|---|---|
| Identity — What entity is represented? |  |  |
| Authentication — How is the claimant verified? |  |  |
| Authorization — Which operations on which resources are permitted? |  |  |
| Delegated authority — Who empowered ORION, for what purpose and limits? |  |  |
| Consequence — What can the transaction change, interrupt, disclose, obligate, or record? |  |  |

## Boundary finding

Which of the five boundaries is best supported by the current SSO statement? Which are unsupported or only implied?

**Your response:**

> 

# Part 3 — Trace one production restart

Trace one proposed restart of application service APP-SVC-04 under incident INC-20481.

| Sequence | Actor or control point | Identity presented or recorded | Decision being made | Required constraint | Required evidence |
|---:|---|---|---|---|---|
| 1 | Monitoring and incident process |  |  |  |  |
| 2 | Human operator |  |  |  |  |
| 3 | ORION agent |  |  |  |  |
| 4 | Agent runtime or workload |  |  |  |  |
| 5 | Privilege decision |  |  |  |  |
| 6 | Administrative tool |  |  |  |  |
| 7 | Target service |  |  |  |  |
| 8 | Consequence verification |  |  |  |  |
| 9 | Review and closure |  |  |  |  |

## Broken-chain analysis

Identify three places where ORION can disappear behind another identity or where authority can expand silently.

| Break point | What the record may show | What is lost or expanded |
|---|---|---|
| 1 |  |  |
| 2 |  |  |
| 3 |  |  |

# Part 4 — Define the authorization boundary

Complete the table with a proposed bounded authority for the corporate production pilot.

| Element | Proposed boundary |
|---|---|
| Subject |  |
| Permitted action |  |
| Named resource or resource class |  |
| Environment |  |
| Business purpose |  |
| Trigger |  |
| Duration or expiration |  |
| Conditions |  |
| Prohibited actions |  |
| Human decision |  |
| Evidence |  |
| Revocation authority |  |
| Revocation mechanism category |  |
| Redelegation |  |

Now write the boundary as one statement:

> “[Named agent] may [permitted action] against [named resource class] in [environment] for [business purpose] when [conditions]. It may not [prohibited actions]. Authority begins [trigger], expires [time or event], requires [human decision], produces [evidence], and may be revoked by [role] through [mechanism category].”

**Your authority statement:**

> 

# Part 5 — Evaluate the human decision

The proposed approval dialog says:

> “ORION requests elevated access. Approve / Deny.”

## 5.1 Why this is insufficient

Identify the information an authorized approver would need to make a meaningful decision.

| Decision information | What should be displayed or linked |
|---|---|
| Agent and delegating principal |  |
| Incident and business purpose |  |
| Proposed action and parameters |  |
| Target and environment |  |
| Requested privilege and duration |  |
| Supporting evidence |  |
| Expected consequence |  |
| Uncertainty and failure condition |  |
| Reversibility and fallback |  |
| Alternatives and escalation |  |

## 5.2 Approval quality

Answer briefly:

1. Who is authorized to approve this action class?
2. Is that person independent of ORION’s recommendation and operation?
3. What prevents routine approval fatigue?
4. Which action would require escalation rather than approval?
5. Which action should be prohibited for this pilot?

# Part 6 — Specify the evidence chain

Define the minimum transaction record that would allow an executive, incident reviewer, or auditor to reconstruct why the restart occurred.

| Evidence category | Minimum record |
|---|---|
| Agent registration and owner |  |
| Authentication event |  |
| Delegating principal and authority source |  |
| Policy decision |  |
| Human decision |  |
| Temporary credential |  |
| Tool and runbook |  |
| Target action |  |
| Before-and-after state |  |
| Exception, partial failure, or rollback |  |
| Common correlation method |  |
| Retention and access owner |  |

## Evidence test

Can the current design prove all of the following without unsupported inference?

- [ ] Which human initiated or approved the work.
- [ ] Which registered agent selected the action.
- [ ] Which workload executed it.
- [ ] Which authority and policy applied.
- [ ] Which credential and tool were used.
- [ ] Which target and parameters were affected.
- [ ] What consequence actually occurred.
- [ ] Whether queued or downstream work remained after suspension.

List every unchecked item as a release condition.

# Part 7 — Separate corporate IT from protected OT

The same orchestration platform can reach both domains. Complete the decision table.

| Question | Corporate IT pilot | Protected OT |
|---|---|---|
| Is the use case currently authorized? |  |  |
| Is a distinct identity and authority path demonstrated? |  |  |
| Are environment-specific approvers named? |  |  |
| Are action limits technically enforceable? |  |  |
| Are safety, reliability, and recovery owners engaged? |  |  |
| Is independent suspension demonstrated? |  |  |
| Current recommendation |  |  |

Explain why an approval for corporate IT must not be interpreted as authority for protected OT.

**Your response:**

> 

# Part 8 — Suspension and residual work

State what must be stopped or contained when ORION is suspended.

- [ ] Agent registration or execution eligibility.
- [ ] Active sessions.
- [ ] Issued credentials or tokens where feasible.
- [ ] New credential issuance.
- [ ] Queued jobs.
- [ ] Downstream agent or tool activity.
- [ ] Scheduled or retry activity.
- [ ] Access through the shared automation account.
- [ ] Open approval requests.
- [ ] Evidence preservation.

Who has authority to order suspension? Who executes it? Who confirms containment?

**Your response:**

> 

# Part 9 — Make the program recommendation

Select one for the corporate production use case:

- [ ] Approve.
- [ ] Approve with conditions.
- [ ] Pilot within narrower boundaries.
- [ ] Defer pending evidence.
- [ ] Reject.

**Recommendation:**

> 

## Three most important reasons

1. 
2. 
3. 

## Required proof before the next gate

| Required proof | Accountable provider | Acceptance evidence |
|---|---|---|
| 1 |  |  |
| 2 |  |  |
| 3 |  |  |

## Protected-OT recommendation

Select separately and explain:

> 

# Part 10 — Five-minute defense

Answer without reading the model guide.

1. What does SSO establish in this scenario?
2. Why does authenticating the operator not necessarily identify ORION at the target?
3. What is the difference between technical authorization and delegated business authority?
4. Where does the current design rely on ORION’s behavior instead of an enforceable boundary?
5. What makes the human approval meaningful?
6. What makes the action privileged?
7. Which fact would cause you to stop the pilot immediately?
8. What evidence would most improve your confidence?
9. Why is protected OT a separate decision?
10. Which decisions belong to the program leader, and which require qualified specialists?

## Completion declaration

- [ ] I completed this workbook before reading the model answer.
- [ ] I can explain all five governing boundaries in plain language.
- [ ] I can defend my recommendation and name evidence that would change it.
- [ ] I did not treat the model answer as my own work.
- [ ] I did not claim implementation experience from completing this exercise.

**Learner:**  
**Date:**  
**Defense completed with:**  
**Revisions required:**  

---

This workbook is educational and illustrative. It is not production architecture, legal advice, regulatory interpretation, or an implementation standard.

Created by Michael Kaplan. Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
