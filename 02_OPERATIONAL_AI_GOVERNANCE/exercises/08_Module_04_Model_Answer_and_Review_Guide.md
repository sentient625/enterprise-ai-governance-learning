# Module 14 Model Answer and Review Guide — Testing, Evaluation, Verification, and Validation

This is a model answer for calibration, not a substitute for your own completed [participant workbook](./07_Module_04_Participant_Workbook.md). A strong response will differ in wording and may reasonably differ in some judgment calls; what matters is whether the reasoning holds up under challenge.

## Part 1 — Four questions (illustrative)

- **Verification** asks whether the system was built to its stated specification. A system could pass validation, testing, and evaluation by coincidence — working well for the intended population despite not actually matching what was specified — while still failing verification, which would only be caught by checking the build against the spec directly.
- **Validation** asks whether the system actually works for its intended use and population. A system can be perfectly verified (built exactly to spec) and pass every planned test and evaluation metric, and still fail validation if the specification itself did not match the real population — for example, built and tested against one demographic's claim patterns but deployed against a different one.
- **Testing** asks what happens when the system is actually exercised, including adversarially. A system can be verified, validated for its intended population under normal use, and evaluated as meeting its accuracy criterion, while still failing a testing question no one asked — such as what happens when a claimant deliberately submits information designed to game the recommendation.
- **Evaluation** asks whether measured performance meets a defined criterion. A system can be verified, validated, and even survive adversarial testing without a specific failure being found, and still fail evaluation if the actual measured performance — say, a disparity rate across protected groups — exceeds the threshold set in advance.

## Part 2 — TEVV plan (illustrative)

- **Functional/accuracy test:** Compare the tool's eligibility recommendation against a sample of claims independently adjudicated by a human expert panel, using this enterprise's own historical claim population.
- **Adversarial/misuse test:** Submit a set of claims deliberately crafted to include information patterns known to trigger favorable or unfavorable automated recommendations (for example, specific phrasing changes that should not affect eligibility but might affect the model's output) and measure whether the recommendation changes inappropriately.
- **Fairness/bias evaluation:** Measure the recommendation's approval and denial rates across protected demographic groups in the enterprise's own claim population, with a pass/fail threshold (for example, no more than a defined percentage-point disparity) set and approved before the test runs.
- **Claimed-safeguard test:** Simulate a realistic high-volume week and measure the actual rate at which staff override or reject the AI recommendation, comparing it against the rate assumed when the "human review" control was originally approved.

## Part 3 — Criteria before results (illustrative)

- Functional/accuracy: "The tool's recommendation must match the expert panel's determination in at least [enterprise-defined threshold]% of a representative sample, approved by the benefits business owner and an independent test reviewer before the sample is drawn."
- Adversarial/misuse: "No more than [enterprise-defined threshold] of the adversarial claim set may produce a recommendation change attributable solely to the crafted manipulation, approved by the independent test reviewer before the adversarial set is finalized."
- Fairness/bias: "No protected-group disparity in approval/denial rate may exceed [enterprise-defined percentage points], approved by legal/compliance and the independent test reviewer before the historical sample is analyzed."
- Claimed-safeguard: "The measured override/rejection rate under simulated high volume must fall within [enterprise-defined range] of the rate assumed at original approval; a rate outside that range requires the interface redesign already identified in Module 13, approved by the same executive decision-maker who accepted the original control."

## Part 4 — Independence (illustrative)

Given the high-impact tier, TEVV should be designed and executed (or at minimum independently reviewed) by someone independent of the benefits business owner and the platform's technical owner, matching Module 13's control-assessment independence requirement. The vendor's own benchmark should not substitute for any of the four tests above because it reflects the vendor's chosen population, conditions, and framing — not this enterprise's actual claim population, actual adversarial exposure, or actual staffing and workload pattern.

## Part 5 — Distinguishing TEVV from control assessment (illustrative)

Module 13's control assessment found, after the fact, that the "human review" control was designed but not operating effectively, based on staff interviews and interface examination performed only once a concern had already been raised. A claimed-safeguard TEVV test — simulating realistic high-volume conditions and measuring the actual override rate before deployment — should have caught this same gap before the system went live, rather than the enterprise discovering it through an ad hoc post-deployment interview. This illustrates the difference: TEVV proactively tests system and safeguard behavior across a planned set of conditions before reliance begins; control assessment verifies one already-proposed mitigation, and can be triggered reactively once a concern surfaces. A mature program uses TEVV to prevent needing a reactive control assessment in the first place, though both remain necessary because TEVV cannot anticipate every future concern.

## Part 6 — Retest triggers (illustrative)

1. Population expansion (a Module 12 reclassification trigger) — if the tool is extended to a new employee population or benefit type, retest the fairness/bias evaluation against that new population.
2. A new data class or integration (a Module 9-style material change) — if the tool begins ingesting a new data source, retest functional accuracy and adversarial robustness against the changed input.
3. A vendor model-version update — since the underlying model can change without the enterprise's action, any version change should retrigger the full TEVV plan, not just a spot check, given the high-impact tier.

## Part 7 — Executive summary (illustrative, ~180 words)

Before the benefits eligibility recommendation can move from Module 13's hold toward continued or expanded use, four specific tests must be completed and must meet criteria set in advance: a functional-accuracy comparison against an independent expert panel using our own claim population; an adversarial test measuring whether crafted input can manipulate the recommendation; a fairness/bias evaluation measuring approval-rate disparity across protected groups against a threshold legal and compliance approve before the analysis runs; and a claimed-safeguard test simulating realistic high-volume conditions to measure the actual human-override rate against the rate assumed at original approval. None of these has been performed using our own data and conditions; the vendor's benchmark does not substitute for any of them. Recommendation: commission all four tests, independently designed and reviewed, before revisiting the hold decision. This is testing work, distinct from and in addition to the control-assessment and interface-redesign work already identified.

## Part 8 — Defense (review guidance)

A strong defense on the vendor-benchmark risk explains that the vendor's benchmark reflects its own chosen population and conditions, which may not represent this enterprise's actual claimants, workload, or threat exposure — and that accepting it as sufficient would repeat the exact mistake that let the ineffective human-review control go undetected until Module 13's interview. A strong defense on resisting softened criteria explains that a fairness/bias threshold set loosely to guarantee a pass defeats the purpose of setting it in advance, and that a disappointing result should trigger Module 13's governing responses (remediate, accept with a named owner, or hold) rather than a quiet criterion change.

## Review observations for facilitators or self-review

A response that scores well:

- keeps verification, validation, testing, and evaluation as four distinct findings rather than one combined "tested" claim;
- writes criteria specific and numeric enough that they could not be reinterpreted after a result is known;
- explicitly rejects a vendor benchmark as sufficient for an elevated or high-impact use case;
- connects a specific TEVV test to the specific control-assessment gap Module 13 already found, rather than treating TEVV as an unrelated activity.

A response that needs revision:

- treats "we ran some tests" as satisfying all four TEVV questions;
- writes a criterion only after describing what result was actually observed;
- proposes only a functional/accuracy test and omits adversarial, fairness, or claimed-safeguard testing for a high-impact use case.

## Completion and professional translation

This model answer is not a learner-created portfolio artifact. Completion requires the learner's own original workbook responses and a defense addressing at least one challenge from this guide. Update the Progress Record only after that evidence exists.
