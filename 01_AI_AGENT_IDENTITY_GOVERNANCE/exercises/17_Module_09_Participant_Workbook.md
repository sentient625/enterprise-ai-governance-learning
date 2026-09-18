# Module 9 Participant Workbook — Agent Inventory and Lifecycle Gate Review

**Status:** Accepted exercise template

**Version:** 1.0

**Recommended effort:** 60–90 minutes

Read the [lesson](../12_Module_09_Inventory_Lifecycle_and_Program_Governance.md) first. Use fictional or sanitized information. Complete this workbook before consulting the model answer.

## Scenario

ORION's inventory says “UAT maintenance assistant — owner: IT — approved.” The documented authorization permits named UAT health reads. A proposal adds production restarts, a write tool and a separately credentialed helper. There is no deployment-specific record, approval expiry, evidence link or helper relationship in the inventory. The provider schedules an automatic model update. The sponsor seeks project closeout this week, but the intended operational owner has not accepted handover. The vendor's general assurance supplies no evidence about the proposed enterprise authority envelope.

No production activation or unauthorized execution is established. Module 8's incident is not assumed resolved by this separate exercise.

## Part 1 — Governed units and evidence

| Unit | Separate record or linked dependency? | Reason | Known authorization | Unknown facts |
|---|---|---|---|---|
| ORION definition |  |  |  |  |
| UAT deployment |  |  |  |  |
| Proposed production deployment |  |  |  |  |
| Credentialed helper |  |  |  |  |
| Shared model/provider |  |  |  |  |

Which facts are observations, which are proposals, and which would be unsupported claims?

> Your answer:

## Part 2 — Inventory entry

Create entries sufficient to distinguish existing UAT authority from the proposed production scope. Use “unknown — owner to resolve” rather than inventing facts.

| Field group | UAT record | Proposed production record | Authoritative source | Verifier and missing-proof action |
|---|---|---|---|---|
| IDs, definition/deployment and environment |  |  |  |  |
| Purpose, benefit and prohibited uses |  |  |  |  |
| Sponsor/business/technical/IAM/operations owners |  |  |  |  |
| Risk tier and rationale |  |  |  |  |
| Model, tools, target and helper relationships |  |  |  |  |
| Direct/delegated permissions and limits |  |  |  |  |
| Human decision boundaries |  |  |  |  |
| Approval, policy and test evidence |  |  |  |  |
| Monitoring and suspension/fallback |  |  |  |  |
| Actual state and authorized state |  |  |  |  |
| Review/expiry and material-change triggers |  |  |  |  |
| Records, supplier exit and retirement |  |  |  |  |
| Last verified, source conflicts and gaps |  |  |  |  |

Explain why a registry ID is not a credential and why changing the status cell cannot enforce a stop.

## Part 3 — Lifecycle gate matrix

For each gate, identify the actual deciding role and required concurrence. A generic “committee” is insufficient without decision rights.

| Gate | Decision authority | Evidence required | Current case gap | Decision/condition | Reopening or expiry trigger |
|---|---|---|---|---|---|
| Propose |  |  |  |  |  |
| Classify |  |  |  |  |  |
| Design |  |  |  |  |  |
| Threat-model |  |  |  |  |  |
| Test |  |  |  |  |  |
| Authorize |  |  |  |  |  |
| Activate |  |  |  |  |  |
| Monitor |  |  |  |  |  |
| Change |  |  |  |  |  |
| Suspend/recover |  |  |  |  |  |
| Retire |  |  |  |  |  |

Separate pre-activation conditions from obligations that may remain open during specifically authorized operation.

## Part 4 — Material-change assessment

| Change | Impact on authority/consequence/control | Gates to reopen | Required owner/evidence | Operating constraint pending decision |
|---|---|---|---|---|
| UAT reads to production restarts |  |  |  |  |
| New write tool |  |  |  |  |
| Separately credentialed helper |  |  |  |  |
| Automatic model update |  |  |  |  |
| Operational ownership transfer |  |  |  |  |
| Hypothetical increase in concurrency |  |  |  |  |

The concurrency increase is an additional hypothetical, not an observed case fact. Define one example of a bounded routine change that would not require every gate, and state how its limits would be verified.

## Part 5 — Architecture-review decision record

- Deployment and exact baseline under review:
- Business proposition and alternatives:
- Deciding authority and required concurrence:
- Evidence reviewed and missing evidence:
- Decision: approve / approve with conditions / hold / reject:
- Permitted scope and prohibited actions:
- Uncertainty and residual risk:
- Conditions, each with owner, proof, deadline and effect if unmet:
- Expiry/review event:
- Escalation for disagreement:

Write a three-sentence sponsor update explaining the effect on production activation and project closeout.

## Part 6 — Reconciliation, handover and retirement

| Control question | Source/proof needed | Owner | Action on discrepancy |
|---|---|---|---|
| Is every observed deployment matched? |  |  |  |
| Do actual grants match approved scope? |  |  |  |
| Are owner assignments accepted? |  |  |  |
| Are approvals/conditions still valid? |  |  |  |
| Does supplier change match the baseline? |  |  |  |
| Is operational handover complete? |  |  |  |
| Can retirement remove all residual authority/work? |  |  |  |
| Are records and supplier copies properly disposed of or retained? |  |  |  |

Define two indicators with a population/denominator, reporting window, responsible owner and response. Explain when an inventory coverage percentage must be reported as unknown.

## Part 7 — Recommendation and defense

Recommend what may proceed now, what must be held, and which proof would change the decision. Distinguish current UAT scope, proposed production scope and project handover.

Prepare a five-minute defense:

1. Why is “ORION — approved” insufficient?
2. Who owns the business outcome and who owns operation?
3. Which change invalidates reliance on existing UAT authorization?
4. Why does a vendor assurance not close the enterprise review?
5. How do you prevent a condition from becoming indefinite permission?
6. What proves an inventory entry matches actual operation?
7. What must remain after retirement?
8. Which decisions exceed the program lead's authority?

## Completion record

Record original artifact location, reviewer/date, defense completion, feedback, outstanding uncertainty and follow-up owners. Update the Progress Record only after original work and a defensible explanation exist. Reading this workbook or the answer guide does not establish completion.
