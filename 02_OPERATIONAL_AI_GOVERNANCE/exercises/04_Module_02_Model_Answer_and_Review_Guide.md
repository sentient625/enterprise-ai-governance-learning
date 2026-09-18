# Module 12 Model Answer and Review Guide — Use-Case Classification and Risk Tiers

This is a model answer for calibration, not a substitute for your own completed [participant workbook](./03_Module_02_Participant_Workbook.md). A strong response will differ in wording and may reasonably differ in some judgment calls; what matters is whether the reasoning holds up under challenge.

## Part 1 — Tier model (illustrative)

Using the lesson's four-tier model:

- **Minimal:** internal use, low consequence, reversible, no sensitive data. Obligation: register and name an owner; no further gate.
- **Limited:** some consequence or sensitivity, bounded, human-reviewed before effect. Obligation: register, plus a lightweight intake review confirming the human-review point actually exists.
- **Elevated:** material consequence or reduced human review, or sensitive data. Obligation: register, document an impact assessment, define pre-deployment testing, and establish ongoing monitoring.
- **High-impact:** affects rights, safety, benefit access, or employment, especially with limited human review. Obligation: all of the above, plus a named executive-level accountable decision, defined pre-deployment testing criteria, mandatory human oversight, and a documented waiver path if a minimum practice cannot be met.

## Part 2 — Classified case (illustrative)

| Use case | Tier | Driving factors | Final or provisional |
|---|---|---|---|
| ORION maintenance agent | Elevated to high-impact, action-dependent | Consequence and reversibility vary by specific action; already governed under Module 6 | Final for what is already governed; any new action type should be re-checked |
| Sales proposal drafting | Elevated | External population, reputational/confidentiality consequence, autonomy and data handling unconfirmed | Provisional — resolves once the tool's actual data retention/transmission is confirmed |
| Benefits eligibility recommendation | High-impact | Affects benefit access; sensitive personal data; human-review depth unconfirmed | Provisional on tier floor (cannot go lower than high-impact given benefit-access consequence), but the exact obligation scope should be confirmed once human-review depth is verified |
| Customer-service analytics pilot | Elevated | Live customer data; no confirmed consequential decision yet | Provisional — resolves once it is confirmed whether any decision is actually made from the output |
| Three disagreeing lists | Not tierable | Process gap, not a use case | N/A — must be resolved before any tier above can be trusted enterprise-wide |

## Part 3 — Intake process (illustrative)

The use case's business owner (named in Module 1) submits the initial classification. For a submission that lands at elevated or high-impact, a designated governance/control owner — not the business owner — makes the final tier decision. Any self-submitted tier within one factor of a tier boundary (for example, "limited, but touches personal data") triggers an automatic independent second review before the tier is accepted. The decision record captures the submitter, the decision owner, the factors considered, the tier assigned, the date, and whether the tier is final or provisional.

## Part 4 — Reclassification triggers (illustrative)

1. Population expands beyond the originally classified group — evidenced by an access-log or deployment-scope change.
2. A new data class is introduced — evidenced by a data-mapping or integration change record.
3. Human review is reduced or removed — evidenced by a workflow or configuration change removing a review step.
4. The use case is repurposed for a new decision — evidenced by a new business requirement or a documented scope change.
5. Volume grows past a defined threshold — evidenced by usage metrics crossing that threshold.
6. An incident or near-miss occurs — evidenced by an incident record naming this use case.

## Part 5 — Challenge a self-classification (illustrative)

Scenario: a business owner wants their new customer-facing recommendation tool approved quickly and submits it as "limited" by describing it as "just a suggestion a human can ignore," while the actual configuration auto-applies the recommendation unless a human actively intervenes within a short window. The intake design in Part 3 would catch this only if the classification form asks a specific, falsifiable question — "does the system act automatically unless a human intervenes, or does it require an affirmative human action before effect?" — rather than accepting a business owner's characterization of autonomy at face value. If the design instead asks a vague question like "is there human oversight?", a technically true but misleading "yes" would pass review, and the tier would be wrong until an incident or audit caught it.

## Part 6 — Linking outward (illustrative)

For ORION, this module's tier determines how much governance ORION's use case as a whole warrants; Module 6 then classifies each specific action ORION might take (a UAT health read versus a production restart) into autonomous, monitored, prior-approval, or prohibited. A high-impact use-case tier does not mean every action within it is prior-approval — it means the use case as a whole warrants the full assessment, testing, and monitoring obligations, within which some individual actions may still be safely autonomous under Module 6's own factors. For lifecycle gates, a minimal-tier use case might pass through Module 9's design and test gates with a lightweight review, while a high-impact use case should expect every gate — classify, design, threat-model, test, authorize — to require the full evidentiary rigor Module 9 describes, because the tier sets how much proof each gate should demand, not whether the gate exists at all.

## Part 7 — Executive summary (illustrative, ~180 words)

Of the five use cases surfaced in the initial inventory pass, four now carry a provisional or confirmed elevated-to-high-impact tier, and none has completed the governance obligations that tier requires. The benefits eligibility recommendation is high-impact regardless of remaining unknowns, because it affects access to a benefit using sensitive personal data; its human-review depth still needs confirmation to scope the exact obligation set. The sales-drafting and analytics use cases are provisionally elevated pending the data-handling and decision-consequence reviews already requested. ORION's tier depends on the specific action in question and is already tracked under existing agent-lifecycle governance. The three conflicting business-unit lists are not yet tierable at all because the underlying inventory itself is not reconciled. Immediate requests: (1) confirm the sales-tool and analytics-pilot open questions within two weeks so their tiers can move from provisional to final; (2) assign an executive-level accountable decision-maker for the benefits use case given its high-impact tier; (3) do not treat any provisional tier as a basis for continued operation beyond a short, explicitly bounded window.

## Part 8 — Defense (review guidance)

A strong defense on likely pushback names the benefits-eligibility tier as the one most likely to be contested, since "it's just a recommendation, a human can override it" is exactly the kind of characterization Part 5 warns about; holding the line requires the specific evidence that human review is real, not the business owner's description of it. A strong defense on gaming a tier model identifies that any model relying on self-described autonomy or self-described consequence is gameable, and the fix is specific, falsifiable intake questions plus independent review at tier boundaries — not simply trusting a more detailed form.

## Review observations for facilitators or self-review

A response that scores well:

- attaches a specific, checkable obligation to every tier, not a vague description;
- keeps a provisional tier visibly provisional rather than treating it as settled;
- separates this module's use-case tier from Module 6's action-level classification and Module 9's lifecycle gates, while showing how they connect;
- designs an intake check that would actually catch the Part 5 scenario, not one that would pass it.

A response that needs revision:

- assigns a tier without naming which classification factors drove it;
- collapses this module's tiering into Module 6's action classification as if they were the same decision;
- treats "human in the loop" or "just a recommendation" as sufficient on its own without a falsifiable check.

## Completion and professional translation

This model answer is not a learner-created portfolio artifact. Completion requires the learner's own original workbook responses and a defense addressing at least one challenge from this guide. Update the Progress Record only after that evidence exists.
