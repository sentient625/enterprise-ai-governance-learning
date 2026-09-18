# Priority 2, Module 4 — Testing, Evaluation, Verification, and Validation

**Status:** Accepted for public learning use

**Version:** 1.0

**Guide coverage:** Priority 2, Days 10–12

**Estimated study time:** 60–90 minutes plus exercise

## Purpose

Modules 2 and 3 both used the phrase "pre-deployment testing" as an obligation attached to an elevated or high-impact use case, without saying what testing actually has to establish. A vendor's accuracy benchmark, a demo that worked in front of an executive, and a security scan that found no open ports are all forms of testing. None of them, alone, tells an enterprise whether a system is built to specification, whether it is fit for the specific context it will operate in, whether it fails safely under adversarial or unexpected input, or whether it is actually meeting a defined performance bar.

This module develops the program-level ability to separate testing, evaluation, verification, and validation as four distinct questions; specify a minimum TEVV plan that covers adversarial and misuse behavior, not only accuracy; require pass/fail criteria defined before testing rather than reverse-engineered from whatever result appears; and connect TEVV evidence to the control assessment work built in Module 3, without collapsing the two into one activity.

The TEVV specification and case below are original educational synthesis. They are not a NIST-, ISO-, or OWASP-prescribed test plan, a certification, or a substitute for a qualified test engineer's or security specialist's own methodology.

## Learning objectives

A learner should be able to:

- Distinguish testing, evaluation, verification, and validation as four related but different questions.
- Require TEVV scope to include adversarial and misuse behavior, not only functional accuracy.
- Specify pass/fail criteria before testing begins, and challenge criteria chosen or adjusted after a result is known.
- Distinguish a vendor's own benchmark or demonstration from independent, context-specific testing.
- Connect TEVV evidence to Module 3's control-assessment findings without treating either as a substitute for the other.
- Define what population, data, and environment a test must use to be representative of actual deployment conditions.
- Identify retest triggers tied to Module 2's reclassification triggers and Module 9's material-change discipline.
- Explain the program-lead's TEVV role without claiming to personally design or execute a technical test methodology.

## 1. Four different questions

| Term | Question it answers | What it does not answer |
|---|---|---|
| Verification | Was the system built to its stated specification? | Whether the specification itself is right for the actual use |
| Validation | Does the system actually work for its intended use, population, and context? | Whether a specific test run found a specific failure |
| Testing | What happens when the system is actually exercised, including with adversarial, edge-case, or malicious input? | Whether the result meets any particular bar — that is evaluation |
| Evaluation | Does the system's measured performance meet a defined criterion? | Whether that criterion was appropriate, or whether the system was tested against realistic conditions |

A system can be verified (built exactly as specified) and still fail validation (the specification did not match the real population or context). A system can pass every planned test and still be poorly evaluated, if the criteria were set too low or after the fact. Treat these as four separate checkboxes, not one combined "we tested it" claim.

## 2. TEVV scope must include adversarial and misuse behavior

A functional accuracy score alone tests only how the system behaves under intended, well-formed input. It does not test:

- what happens when a user or an attacker deliberately tries to manipulate the system's output, including the prompt-injection patterns developed in Priority 1, Module 5;
- what happens under data poisoning, model extraction, or other attacks specific to the system's architecture;
- what happens when input is malformed, out of distribution, or from a population the training or tuning data underrepresented;
- what happens when the system is used at a volume, speed, or duration the original testing did not anticipate;
- what happens when a claimed safeguard (a content filter, a refusal behavior, a human-review interface) is specifically targeted rather than encountered incidentally.

A current, real illustration: NIST AI 100-2e2025 substantially expanded its predecessor's adversarial machine-learning taxonomy specifically to cover generative-AI, large-language-model, retrieval-augmented-generation, and agent-based attack patterns — evidence that the testing discipline this module describes is an active, moving target, not a settled checklist. A TEVV plan that only reuses last year's test suite without checking whether the attack surface has changed is not current.

## 3. Minimum TEVV specification

| Field | Minimum content | Question it supports |
|---|---|---|
| Scope | The specific use case and deployed instance, tied to its Module 1 inventory entry and Module 2 tier | What exactly is being tested? |
| Specification | What the system is supposed to do, precisely enough that verification is possible | What does "built correctly" mean here? |
| Intended context and population | The actual population, environment, and conditions of real deployment | What does "fit for use" mean here? |
| Test types | Functional/accuracy, adversarial/misuse, robustness under distribution shift, fairness/bias (tied to Module 3's harm categories), safety, and any claimed-safeguard-specific test | What kinds of failure is this plan actually looking for? |
| Pass/fail criteria | Defined and recorded before testing begins, including who approved them | What counts as passing, decided before anyone knows the result? |
| Test data and environment | How representative the test data and environment are of actual production conditions, and where they differ | Can this result be trusted to predict production behavior? |
| Independence | Who designed and executed the test, and their relationship to whoever built or sells the system | Can this result be trusted, or does it need independent review? |
| Results, including failures | Both passing and failing results, retained rather than only the favorable summary | Is the record honest about what was actually found? |
| Retest trigger | What change requires this test to be run again | When does this result expire? |

A TEVV plan that specifies test types but not pass/fail criteria in advance has already created room for a result to be reinterpreted favorably after the fact.

## 4. Distinguishing TEVV from Module 3's control assessment

Module 3's control assessment asks whether a specific, already-proposed mitigation is designed, implemented, and operating effectively. TEVV is broader: it tests the AI system's own behavior — including behavior no one has yet proposed a specific control for — before and periodically during operation. TEVV results often become the evidence a control assessment relies on: an adversarial test showing a content filter can be bypassed a defined percentage of the time is TEVV evidence that directly informs a control assessment's "operating effectively" finding for that filter. Neither activity replaces the other. A use case can pass a narrow control assessment for one specific claimed mitigation while its broader TEVV plan reveals a failure mode no one had proposed a control for at all.

## 5. Criteria before results, not after

The single most common way TEVV becomes theater rather than evidence is setting or adjusting the pass/fail bar after seeing the result. Warning signs include:

- a criterion described only as "acceptable performance" without a number or defined threshold;
- a criterion that changes between the test-plan document and the results summary;
- a test rerun with different parameters after an initial failing result, without documenting why;
- a vendor-supplied benchmark substituted for the enterprise's own criteria without the enterprise checking whether the benchmark's population and conditions match its actual deployment.

Require the criteria, the population, and the environment to be recorded and approved before the test executes. A result that fails a properly pre-set criterion is a finding to route through Module 3's governing responses (proceed, remediate, accept, or hold) — not a reason to quietly lower the bar.

## 6. Who performs the test, and who trusts the result

Independence should scale with tier, the same way Module 3 scales assessor independence for control assessments:

| Tier | Minimum TEVV independence |
|---|---|
| Minimal | Vendor or internal-team testing, spot-checked |
| Limited | Internal testing by a team member independent of whoever built the specific feature |
| Elevated | Testing designed or reviewed by someone independent of the use case's business owner, using the enterprise's own criteria rather than a vendor benchmark alone |
| High-impact | Independent testing covering adversarial and misuse behavior specifically, reviewed by the same executive-level accountable decision-maker Module 2 requires, before deployment |

A vendor's own benchmark score is evidence of the vendor's chosen test conditions, not proof of behavior under the enterprise's actual population, data, and threat model. Treat it as one input, not as the enterprise's own TEVV result.

## 7. Applied case — testing the benefits-eligibility recommendation before it should have gone live

Continuing the fictional case from Modules 1 through 3, the benefits eligibility recommendation was found in Module 3 to have a human-review control that was designed but not operating effectively, and a fairness/bias harm category that had never been assessed because the vendor would not disclose training-data information.

Reconstructing what TEVV should have covered before this use case went live:

- **Verification:** Was the system built to the specification the enterprise actually approved, or to the vendor's own default configuration? The enterprise never independently confirmed this.
- **Validation:** Was the system fit for this enterprise's actual population of benefits claims, given that the vendor's benchmark was reportedly built on a different industry's claim population? Unknown — never checked.
- **Adversarial/misuse testing:** Has anyone tested what happens when a claimant submits information specifically designed to trigger a favorable or unfavorable recommendation? Not performed.
- **Fairness/bias evaluation:** Has the recommendation's outcome been measured across protected groups against a defined disparity threshold set in advance? Not performed, and the vendor's non-disclosure makes an enterprise-run version of this test necessary regardless of vendor cooperation.
- **Claimed-safeguard test:** Has anyone specifically tested whether the "human review" interface actually produces a different outcome than the AI recommendation at some measurable rate, under realistic workload? This is exactly the gap Module 3's control assessment already found — TEVV should have caught it before deployment rather than after.

### Governing diagnosis

- No independent verification or validation was performed against this enterprise's actual specification and population before deployment.
- No adversarial or misuse testing was performed, despite this use case affecting benefit-access decisions.
- The fairness/bias evaluation gap identified in Module 3 is, structurally, a TEVV gap that should have been closed before deployment, not discovered afterward through an ad hoc interview.
- Given Module 3's hold decision, a return to production requires an actual TEVV plan meeting this module's minimum specification, not merely a repeat of the vendor's original benchmark.

## 8. Executive and program-lead questions

1. For each elevated or high-impact use case, were verification, validation, adversarial/misuse testing, and evaluation each performed, or only one or two of the four?
2. Were pass/fail criteria set and recorded before testing, or chosen to match whatever result appeared?
3. Was the test population and environment representative of actual deployment conditions, or a vendor's own more favorable benchmark?
4. Who performed the test, and was that independence sufficient for the use case's tier?
5. Were failing results retained and routed to a governing response, or only the favorable summary kept?
6. What would trigger a retest, and has that trigger already occurred without a retest happening?

## 9. Knowledge check

1. Name the four TEVV terms and the distinct question each answers.
2. Why is a functional accuracy score alone an insufficient test for an elevated or high-impact use case?
3. Why must pass/fail criteria be set before testing rather than after?
4. How does TEVV differ from Module 3's control assessment?
5. Why is a vendor's own benchmark not sufficient on its own for an elevated or high-impact use case?
6. In the applied case, what TEVV gap turned out to be the same gap Module 3's control assessment later found?

### Answer guide

1. Verification (built to spec), validation (fit for actual use and context), testing (what happens when exercised, including adversarially), evaluation (does measured performance meet a defined criterion).
2. It does not test adversarial, misuse, distribution-shift, volume, or safeguard-targeted behavior.
3. Criteria set after a result is known can be adjusted to make an unfavorable result look acceptable.
4. TEVV tests the system's own behavior broadly, including behavior no one has proposed a specific control for yet; control assessment verifies one already-proposed mitigation specifically.
5. A vendor benchmark reflects the vendor's chosen population and conditions, not necessarily the enterprise's actual deployment population and threat model.
6. Whether the "human review" safeguard actually produces a different outcome under realistic workload — a claimed-safeguard test that TEVV should have performed before deployment.

## 10. Exercise and completion evidence

Complete the [Priority 2, Module 4 Participant Workbook](./exercises/07_Module_04_Participant_Workbook.md) before reading the [Model Answer and Review Guide](./exercises/08_Module_04_Model_Answer_and_Review_Guide.md).

Completion requires:

- an original TEVV plan for at least one elevated or high-impact use case from the ongoing case, covering all four TEVV terms;
- pass/fail criteria recorded before any result is assumed;
- at least one adversarial or misuse test scenario relevant to the use case;
- an independence justification tied to the use case's tier;
- a written or oral defense.

Publication does not establish learner completion.

## 11. Interview translation

A credible program-lead statement is:

> I can lead the program work that specifies a TEVV plan covering verification, validation, adversarial testing, and evaluation against criteria set before results are known; that requires independence proportional to a use case's risk tier; and that connects TEVV evidence into the control-assessment and governing-response work already built. Test engineering, security, and data-science specialists design and execute the technical test methodology itself.

This builds on program disciplines of test planning, independent quality assurance, and evidence-based acceptance criteria. It does not claim to personally design or execute an adversarial-testing or statistical-evaluation methodology.

## 12. Primary sources

- [NIST AI Risk Management Framework 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf) — establishes test, evaluation, verification, and validation (TEVV) as a cross-cutting discipline running throughout the AI lifecycle, informing this module's four-term distinction. AI RMF 1.0 remains the published framework while revision work proceeds; it does not itself prescribe a specific test plan template.
- [NIST AI 100-2e2025 — Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations](https://csrc.nist.gov/pubs/ai/100/2/e2025/final) — published March 2025, substantially expanding the prior 2023 edition's taxonomy to cover generative-AI, large-language-model, retrieval-augmented-generation, and agent-based attacks. This module cites it as evidence that adversarial-testing scope is an active, changing target and draws its general attack-category framing, not a specific mandated test suite.
- [NIST AI 600-1 — Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf), reused from earlier modules — its testing, evaluation, and monitoring discussion for generative-AI-specific risk categories informs this module's coverage of claimed-safeguard testing.
- [ISO/IEC 42001:2023 — AI management systems](https://www.iso.org/standard/42001), reused from Module 1 — its operational-planning and change-management requirements inform this module's retest-trigger discipline, connecting forward to Module 9's material-change treatment; a certifiable management-system standard, not a test methodology.

Source status was checked through independent web search on 2026-09-18; direct publisher-page fetch was unavailable during this session due to network egress restrictions in the authoring environment, consistent with the limitation already recorded for Modules 1 through 3. Verify current versions and organizational applicability before production use, and specifically confirm NIST AI 100-2's edition number at the time of reuse, since this is an actively updated taxonomy.
