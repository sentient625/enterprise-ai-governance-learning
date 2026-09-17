# Module 1 Participant Workbook — Identity Classification and Accountability

**Module:** P1-M01 — Acting Agents and Identity Types  \
**Version:** 1.0  \
**Status:** Accepted for public learning use  \
**Estimated work time:** 45–60 minutes  \
**Published:** 2026-09-17  \
**License:** CC BY 4.0

## Purpose

Use this workbook after reading **Module 1 — Acting Agents and Identity Types**.

The exercise develops the ability to:

- Identify every human, service, workload, and agent identity in a transaction.
- Separate accountable ownership from transaction-specific delegation.
- Determine what a target system is likely to record.
- Recognize when an agent is privileged by consequence.
- Expose impersonation, shared-account, and attribution risk.
- Route unresolved decisions to qualified owners.

Complete the workbook before consulting the model answer and review guide.

## Professional boundary

This workbook develops executive and program-level control reasoning. It does not qualify a learner to design production identity architecture, configure IAM/PAM systems, make legal or regulatory determinations, or approve operational and safety risk.

# 1. Working definitions

Write each definition in your own words.

| Identity type | Your definition | Example |
|---|---|---|
| Human identity | | |
| Service identity | | |
| Workload identity | | |
| Agent identity | | |

## Distinction check

In two or three sentences, explain why these five elements must not be collapsed:

- Agent
- Runtime or workload
- Credential
- Delegating principal
- Accountable owner

**Your response:**

> 

# 2. Scenario A — Calendar assistant

An employee authorizes an assistant to read the employee’s calendar, find a meeting time, and send invitations to internal attendees.

| Question | Your analysis |
|---|---|
| Human identity or identities | |
| Service identity or identities | |
| Workload identity | |
| Agent identity | |
| Accountable owner | |
| Delegating principal | |
| What the target system is likely to record | |
| Is the agent privileged? Why or why not? | |
| Principal attribution or impersonation risk | |
| Next governing question | |

## Bounded authority statement

Complete:

> The calendar assistant may ______ against ______ for ______ when ______. It may not ______. Its authority ends when ______.

## Evidence required

List the minimum evidence necessary to reconstruct one scheduling transaction.

1. 
2. 
3. 
4. 
5. 

## Recommendation

Select one and explain:

- Approve.
- Approve with conditions.
- Pilot within narrower boundaries.
- Defer pending evidence.
- Reject.

**Recommendation and reasoning:**

> 

# 3. Scenario B — Service restart agent

An operations agent reads an approved incident ticket, retrieves a runbook, requests elevated access, and restarts a corporate production service after operator approval.

| Question | Your analysis |
|---|---|
| Human identity or identities | |
| Service identity or identities | |
| Workload identity | |
| Agent identity | |
| Accountable owner or owners | |
| Delegating principal | |
| What the target system is likely to record | |
| Is the agent privileged? Why? | |
| Principal attribution or impersonation risk | |
| Next governing question | |

## Bounded authority statement

Complete:

> The service-restart agent may ______ against ______ in ______ for ______ when ______. It may not ______. The privilege expires ______ and may be revoked by ______.

## Evidence required

List the records that must connect the incident, human decision, agent, temporary privilege, tool, target, and outcome.

1. 
2. 
3. 
4. 
5. 
6. 

## Recommendation

**Decision:**

> 

**Three conditions or next proofs:**

1. 
2. 
3. 

# 4. Scenario C — Protected OT support

The same operations agent uses a shared automation account to change a configuration on a protected operational-technology support host. An OT manager approved the ticket.

| Question | Your analysis |
|---|---|
| Human identity or identities | |
| Service identity or identities | |
| Workload identity | |
| Agent identity | |
| Accountable owner or owners | |
| Delegating principal | |
| What the target system is likely to record | |
| Is the agent privileged? Why? | |
| Principal attribution or impersonation risk | |
| Next governing question | |

## Control challenge

Explain why neither the approved ticket nor the OT manager’s approval automatically repairs the shared-account problem.

> 

## Environment boundary

What evidence would be required before the corporate agent design could be considered for a protected operational environment?

1. 
2. 
3. 
4. 
5. 

## Recommendation

**Decision and reasoning:**

> 

# 5. Scenario D — Multi-agent research

A primary research agent delegates log analysis to a specialist agent. The specialist retrieves restricted security logs using a service account and returns recommended commands to the primary agent.

| Question | Your analysis |
|---|---|
| Human identity or identities | |
| Service identity or identities | |
| Primary workload identity | |
| Specialist workload identity | |
| Primary agent identity | |
| Specialist agent identity | |
| Accountable owner or owners | |
| Delegation chain | |
| What the log system is likely to record | |
| Which agent is privileged? Why? | |
| Principal attribution or authority-expansion risk | |
| Next governing question | |

## Delegation boundary

What may the primary agent delegate? What must remain prohibited?

> 

## Recommendation versus execution

Explain why returning a recommended command must not automatically authorize its execution.

> 

## Recommendation

**Decision and reasoning:**

> 

# 6. Selected transaction trace

Choose one scenario and trace one transaction.

**Selected scenario:**  

| Sequence | Actor or control point | Identity presented or recorded | Accountable owner | Delegating principal | Required evidence | Possible failure |
|---:|---|---|---|---|---|---|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |
| 6 | | | | | | |
| 7 | | | | | | |
| 8 | | | | | | |

## Authority chain

Write the intended chain using arrows:

> ______ → ______ → ______ → ______ → ______ → ______

Where could authority silently expand?

> 

# 7. Identity-disappearance analysis

Identify at least four points at which an agent could disappear behind another identity.

| Disappearance point | What the record may show | What would be lost | Required correction or correlation |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |

# 8. Privilege determination

| Scenario | Privileged, conditionally privileged, or not privileged? | Consequence supporting your decision |
|---|---|---|
| A — Calendar assistant | | |
| B — Service restart | | |
| C — Protected OT support | | |
| D — Multi-agent research | | |

In one sentence, explain why “read-only” does not always mean “non-privileged.”

> 

# 9. Questions for qualified owners

Write one decision question for each owner. Do not answer technical questions by assumption.

| Qualified owner | Decision question |
|---|---|
| IAM/PAM | |
| Enterprise or solution architecture | |
| Cybersecurity | |
| Data or privacy | |
| OT, operations, or continuity | |

# 10. Two-minute executive explanation

Prepare an explanation that answers:

1. When does an AI capability become an identity-governance concern?
2. Why is a unique agent identity necessary but insufficient?
3. Why are ownership and delegation different?
4. What makes an agent privileged?
5. What must the enterprise be able to prove and revoke?
6. What is the program leader’s role?

**Your explanation:**

> 

# 11. Self-review

| Review question | Yes | Not yet | Revision needed |
|---|:---:|:---:|---|
| Did I identify every material actor? | | | |
| Did I distinguish agent, workload, credential, delegator, and owner? | | | |
| Did I state what the target is likely to record? | | | |
| Did I classify privilege by consequence? | | | |
| Did I identify where the agent could disappear? | | | |
| Did I avoid inventing technical implementation? | | | |
| Did I route unresolved decisions to qualified owners? | | | |
| Can I defend the recommendation without reading the model answer? | | | |

## Completion record

**Learner:**  \
**Date completed:**  \
**Reviewer or defense method:**  \
**Remaining uncertainty:**  

## Next step

After completing this workbook:

1. Compare your reasoning with the Module 1 model answer and review guide.
2. Revise conclusions you cannot defend.
3. Deliver the two-minute explanation without reading it.
4. Preserve your completed workbook as learning evidence.

---

Created by Michael A. Kaplan. Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

