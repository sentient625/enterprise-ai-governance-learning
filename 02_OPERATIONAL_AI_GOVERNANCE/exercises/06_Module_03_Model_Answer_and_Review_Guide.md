# Module 13 Model Answer and Review Guide — Impact and Control Assessment

This is a model answer for calibration, not a substitute for your own completed [participant workbook](./05_Module_03_Participant_Workbook.md). A strong response will differ in wording and may reasonably differ in some judgment calls; what matters is whether the reasoning holds up under challenge.

## Part 1 — Impact assessment (illustrative)

- **Scope:** Benefits eligibility recommendation, production deployment, current vendor version.
- **Affected population:** All employees who submit a benefits claim reviewed by this workflow.
- **Foreseeable use and misuse:** Intended use is a recommendation to inform a human decision; foreseeable misuse is staff treating the recommendation as the decision itself under time pressure.
- **Benefit:** Faster initial triage of claims for the benefits team.
- **Harm categories:** Safety — low, not applicable. Fairness/bias — unknown, unassessed because the vendor has not disclosed training-data composition or disparate-impact testing. Privacy — moderate, sensitive benefits and health-adjacent data is processed. Financial/rights — high, an incorrect denial affects an employee's access to a benefit they may be entitled to.
- **Severity and likelihood:** Fairness and financial/rights harms are both potentially severe and, given the observed acceptance-by-default workflow, more likely than the vendor's design claim would suggest.
- **Transparency expectation:** An employee denied a benefit should reasonably expect to know a recommendation system was involved and have a real path to challenge it.
- **Identified mitigation:** Human review before a final decision; an appeal path for denied claims.
- **Residual risk:** Currently unknown and likely higher than assumed, because the mitigations have not been control-assessed.
- **Assessor and independence:** Should be someone independent of both the benefits business owner and the platform's technical owner, given the high-impact tier.

## Part 2 — Control assessment (illustrative)

- **Control:** "A human reviews every recommendation before a final decision."
- **Assessment method:** Interview (benefits staff) plus examine (interface and workflow configuration).
- **Evidence obtained:** Staff statements that high-volume weeks lead to near-automatic acceptance; the interface design itself, showing a one-click accept versus a three-step, justification-requiring rejection.
- **Designed:** Adequate on paper — a human decision point exists in the workflow specification.
- **Implemented:** Partially — the review step technically exists in the interface, but its design actively discourages the rejection path.
- **Operating effectively:** No — the evidence (self-reported near-automatic acceptance during high volume, no override-rate record) does not support that meaningful review is actually occurring.
- **Gap:** Designed-but-not-operating-effectively; the interface's default and friction pattern undermines the control's intended effect.
- **Retest trigger:** Any interface change, any staffing or volume change materially affecting review time, or a defined periodic reassessment interval.

## Part 3 — Assessor independence (illustrative)

Given the high-impact tier, the control assessment should be performed by someone independent of both the benefits business owner (who wants the tool's efficiency benefit to stand) and the platform's technical owner (who did not design or catch the interface's friction pattern). The enterprise's prior reliance on the vendor's own claim did not meet this bar for two reasons: the vendor is neither independent of the outcome (it wants its feature adopted) nor in a position to observe how the enterprise's own staff actually use the interface under real workload conditions.

## Part 4 — Governing response (illustrative)

Hold. The use case's tier does not permit leaving open a benefit-access decision with an unverified, and now specifically evidenced-as-weak, human-review control and an entirely unassessed fairness/bias harm category. This is not a case where residual risk can simply be accepted, because the specific mechanism (interface-driven automation bias) is now documented, not merely theoretical, and the fairness question has not been assessed at all rather than assessed and found acceptable. Moving to a less restrictive response would require redesigning the interface to remove the acceptance/rejection asymmetry, recording actual override rates for a defined observation period, and obtaining the vendor's training-data and disparate-impact information or commissioning an independent fairness assessment.

## Part 5 — A second control (illustrative)

**Control:** Appeal-outcome tracking — whether appeals of denied benefits succeed at a rate suggesting the original recommendation was frequently wrong. **Method:** Test — pull a sample of actual appeal outcomes over a defined period and compare against the original recommendation. **Evidence sought:** The rate at which appeals overturn the original recommendation, and whether that rate is stable or changing. **Assessor:** Someone independent of the benefits team, since a high overturn rate would reflect on that team's reliance on the tool.

## Part 6 — Linking outward (illustrative)

Module 1's inventory entry only confirms the use case is known and has an owner; it says nothing about whether any specific harm exists or whether any control works. Module 2's tier only says how much governance attention this use case warrants; it points at the need for an impact and control assessment but does not itself perform one. This module adds the actual test of whether the claimed mitigation is real — the specific finding that "human review" is designed but not operating effectively could not have been produced by either the inventory or the tier alone; it required someone to interview staff and examine the interface.

## Part 7 — Executive summary (illustrative, ~180 words)

The benefits eligibility recommendation's impact assessment identifies fairness/bias and financial/rights-access harm as the material risks. Its control assessment finds that the claimed mitigation — human review before a final decision — is designed but not operating effectively: staff report near-automatic acceptance during high-volume periods, and the interface's own design makes rejection materially harder than acceptance. No fairness or disparate-impact assessment has been performed at all, because the vendor has not disclosed the information needed to conduct one. Recommendation: hold continued production use of this recommendation feature until (1) the review interface is redesigned to remove the acceptance/rejection asymmetry, (2) actual override rates are tracked for a defined observation period and reviewed independently, and (3) the vendor supplies disparate-impact information or an independent fairness assessment is commissioned. This is a hold, not a pilot extension — the specific gap identified is not one this use case's tier permits leaving open on a promise that it will be fixed later.

## Part 8 — Defense (review guidance)

A strong defense on "the vendor says" versus "it actually happens" points to the specific control-assessment evidence — staff interviews and interface examination — that contradicted the vendor's design-level claim, and explains that a claim about design says nothing about implementation or operation. A strong defense on an unresolved gap names something concrete, such as "we have not yet quantified the actual override rate, only staff's qualitative description of it," and states that a sampled review of real decisions over a defined period would resolve it.

## Review observations for facilitators or self-review

A response that scores well:

- keeps the impact assessment, control assessment, and risk tier as three distinct artifacts rather than merging them;
- produces separate designed/implemented/operating-effectively findings rather than a single pass/fail judgment;
- selects a governing response that matches the severity of what was actually found, not a default "proceed with monitoring";
- names assessor independence specifically, rather than asserting the assessment is independent without saying from whom.

A response that needs revision:

- treats a vendor's or owner's description of a control as evidence that it works;
- produces a governing response disconnected from the specific findings (for example, recommending "proceed" immediately after finding the control is not operating effectively);
- skips the fairness/bias harm category because it is harder to assess than the others.

## Completion and professional translation

This model answer is not a learner-created portfolio artifact. Completion requires the learner's own original workbook responses and a defense addressing at least one challenge from this guide. Update the Progress Record only after that evidence exists.
