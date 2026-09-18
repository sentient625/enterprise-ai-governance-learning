# Module 15 Model Answer and Review Guide — Monitoring and Change Governance

This is a model answer for calibration, not a substitute for your own completed [participant workbook](./09_Module_05_Participant_Workbook.md). A strong response will differ in wording and may reasonably differ in some judgment calls; what matters is whether the reasoning holds up under challenge.

## Part 1 — Monitoring plan (illustrative)

| Signal | Definition | Baseline | Threshold | Owner | Response deadline |
|---|---|---|---|---|---|
| Override/rejection rate | Percentage of AI recommendations overridden by staff, weekly | The rate validated during Module 14's claimed-safeguard test | Falls outside a defined band around that validated rate | Benefits operations lead | Investigate within 5 business days |
| Appeal-overturn rate | Percentage of denial appeals that overturn the original recommendation, monthly | The disparity threshold set in Module 14's fairness evaluation | Exceeds that threshold for two consecutive months | Independent governance/control owner | Immediate investigation |
| Vendor model-version indicator | Any confirmed or detected change to the underlying model | No baseline; any occurrence is the signal | Any change | Technology/vendor-management owner | Trigger material-change review before further live use |
| Claim volume | Number of claims processed monthly | Volume covered by the original impact assessment | Exceeds that population by a defined percentage | Benefits business owner | Trigger reassessment before further growth |

## Part 2 — Leading indicator versus incident (illustrative)

**Scenario A (override rate):** The override rate slowly climbs over three months without any single dramatic event. This is a leading indicator — no specific wrongful outcome has been confirmed, but the drift suggests either automation bias returning or a genuine change in claim mix. The benefits operations lead investigates within the deadline; if the cause is unclear after investigation, it escalates to the independent governance owner.

**Scenario B (appeal-overturn rate):** A specific pattern emerges where claims from one demographic group are overturned on appeal at a rate well above the threshold, and a sampled review confirms the original recommendations were systematically wrong for that group. This is a confirmed incident — a specific, verified disparate outcome — and routes immediately to Module 8's suspension and response process rather than sitting in ordinary monitoring review.

## Part 3 — Change envelope (illustrative)

**Inside the envelope (no full reassessment required):** Routine content or copy changes to the review interface that do not alter the accept/reject click structure; scheduled, previously-tested minor bug fixes from the vendor that do not change the recommendation model itself; staffing changes that keep review capacity at or above the level validated in Module 14.

**Outside the envelope (triggers reassessment):** Any change to the interface's accept/reject friction, since that is exactly the mechanism Module 13 found broken; any vendor model-version change, disclosed or detected; any expansion of the claim population beyond what the original impact assessment covered.

**Justification:** The interface friction boundary is drawn narrowly and specifically because Module 13's actual finding was about that mechanism — a boundary drawn any looser would let the exact failure already identified recur under a different label ("just a copy update").

## Part 4 — Vendor disclosure (illustrative)

Contract term: "Vendor shall provide at least 30 days' advance written notice of any material change to the underlying recommendation model, including retraining, version updates, or changes to input processing, sufficient detail to assess against the enterprise's material-change categories, and shall disclose any confirmed incident involving this model at any customer within 5 business days of vendor's own confirmation." If the vendor does not comply, the enterprise's override-rate and appeal-overturn-rate monitoring (Part 1) serves as the substitute signal — a weaker, reactive detection rather than advance notice, and that gap should be recorded as an accepted, monitored risk rather than treated as equivalent to real disclosure.

## Part 5 — The applied scenario (illustrative)

The vendor model-version indicator (a detection-based signal, since disclosure failed) and the override-rate signal would both plausibly catch this: a model change is likely to shift the override rate even before any confirmed wrongful outcome exists. Under the Part 3 change envelope, an undisclosed model update is explicitly outside the envelope, so it triggers a return to Module 14's TEVV plan against the new model version before the use case continues processing further live claims — not merely an explanation of why the drift happened. The disclosure failure itself becomes a separate vendor-management finding, tracked independently of the technical reassessment.

## Part 6 — Linking outward (illustrative)

Module 14's TEVV plan produces a result at a point in time, under conditions the tester controlled, before or immediately after a change; this module's monitoring plan watches continuously, under conditions no one controls, for drift that only emerges over time. A leading indicator from this module (such as the slowly climbing override rate in Part 2) should trigger investigation under this module's own deadline; if that investigation confirms a specific wrongful outcome, it should immediately hand off to Module 8's suspension and response process rather than continuing to sit in ordinary monitoring review — the moment a leading indicator becomes a confirmed incident is the moment this module's job ends and Module 8's begins.

## Part 7 — Executive summary (illustrative, ~180 words)

Following remediation, the benefits eligibility recommendation now operates under a monitoring plan tracking four signals — override rate, appeal-overturn rate, vendor model-version changes, and claim volume — each with a defined threshold, an accountable owner, and a response deadline. A confirmed disparate-impact pattern routes immediately to our suspension process rather than ordinary review; a slow drift routes to timed investigation first. A change envelope defines what routine operation may adjust without triggering reassessment and specifically excludes any change to the review interface's accept/reject mechanism, given that this was the original point of failure. We have added a vendor contract term requiring 30 days' notice of a material model change and 5-day disclosure of confirmed incidents elsewhere; this obligation has not yet been tested against an actual vendor change, so our monitoring signals remain the real backstop until it is. That gap — reliance on detection rather than confirmed advance notice — is the one open item I want tracked, not resolved by this plan alone.

## Part 8 — Defense (review guidance)

A strong defense on an unnecessary-seeming signal explains why the vendor model-version indicator matters even absent any current evidence of a problem: it is the only signal that would catch a vendor change before it has already caused measurable drift elsewhere, and removing it would leave the enterprise dependent entirely on reactive detection. A strong defense on gaming the change envelope acknowledges that a narrowly worded envelope can be circumvented by mischaracterizing a change (calling an accept/reject friction change a "copy update"), and proposes closing that gap by requiring any interface change affecting the review workflow, however described, to be logged and reviewed by the independent governance owner before release, not merely self-certified by whoever makes the change.

## Review observations for facilitators or self-review

A response that scores well:

- gives every monitoring signal a real threshold, owner, and deadline, not just a metric name;
- correctly separates a leading indicator's timed-investigation response from a confirmed incident's immediate Module 8 handoff;
- draws the change envelope narrowly around the specific mechanism that already failed, rather than broadly enough to miss a recurrence;
- names the vendor-disclosure gap honestly rather than treating an added contract term as a solved problem.

A response that needs revision:

- lists signals without thresholds or owners, functionally describing a dashboard rather than a monitoring plan;
- treats every threshold breach the same way, either over-escalating or under-escalating;
- defines a change envelope broad enough to let the original failure recur under a different description;
- claims the vendor-disclosure term itself closes the risk without acknowledging it is untested.

## Completion and professional translation

This model answer is not a learner-created portfolio artifact. Completion requires the learner's own original workbook responses and a defense addressing at least one challenge from this guide. Update the Progress Record only after that evidence exists.
