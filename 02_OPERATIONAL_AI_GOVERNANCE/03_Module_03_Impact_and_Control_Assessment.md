# Module 13 — Impact and Control Assessment

**Status:** Accepted for public learning use

**Version:** 1.0

**Guide coverage:** Days 7–9

**Estimated study time:** 60–90 minutes plus exercise

## Purpose

Module 12 assigned the benefits-eligibility recommendation a high-impact tier and attached an obligation: "document an impact assessment" and "define pre-deployment testing." It did not say what either of those actually has to contain, or how anyone would know whether a control someone claims exists is actually working.

This module answers that. It separates two distinct questions that a risk tier alone cannot answer — who could be harmed and how (impact assessment), and is the control that is supposed to prevent that harm actually implemented and operating (control assessment) — and develops the program-level ability to specify both, assign an assessor with real independence from whoever built or owns the use case, and decide what happens when an assessment finds a gap.

The assessment specifications and case below are original educational synthesis. They are not a NIST-, ISO-, or OMB-prescribed assessment form, a certification, or a substitute for a qualified safety, fairness, privacy, or security determination.

## Learning objectives

A learner should be able to:

- Distinguish a risk tier, an impact assessment, and a control assessment as three different questions.
- Specify a minimum impact assessment: affected population, foreseeable use and misuse, benefit and harm, fairness and safety exposure, transparency expectation, and identified mitigation.
- Specify a minimum control assessment: which control, the method used to assess it, the evidence obtained, and whether the control is merely designed, actually implemented, or operating effectively.
- Require assessor independence proportional to a use case's tier, and recognize self-attestation as insufficient for an elevated or high-impact use case.
- Distinguish "the control exists on paper" from "the control is implemented" from "the control is operating effectively," and require evidence for each separately.
- Decide what should happen — proceed, restrict, remediate, or hold — when an assessment finds a gap, rather than treating any completed assessment as a pass.
- Connect impact and control assessment forward to later testing and monitoring work without duplicating it.
- Explain the program-lead's assessment role without claiming to personally perform a fairness, safety, security, or privacy determination.

## 1. Three different questions

| Question | Answered by | What it does not answer |
|---|---|---|
| How much governance attention does this use case need? | The risk tier (Module 12) | Whether any specific harm is likely, or whether a specific control actually works |
| Who could be harmed, how, and how badly? | The impact assessment | Whether the mitigations anyone has proposed for that harm actually exist or function |
| Is the control that is supposed to prevent that harm actually there and working? | The control assessment | Whether the control, even if working, is sufficient to address the full harm identified |

A completed risk tier is not an impact assessment. A completed impact assessment that only lists proposed mitigations, without verifying they exist and work, is not a control assessment. Treating any one of the three as satisfying all three is the single most common way "we assessed it" turns out to mean less than it sounds like.

## 2. Minimum impact assessment specification

| Field | Minimum content | Question it supports |
|---|---|---|
| Scope | The specific use case and deployed instance being assessed, tied to its Module 11 inventory entry | What exactly is being assessed? |
| Affected population | Everyone who could be affected by the output, including people who never chose to interact with the system | Who could be harmed? |
| Foreseeable use and misuse | Intended use, and realistic misuse or edge-case use the design should anticipate | What could go wrong even without malicious intent? |
| Benefit | The specific benefit claimed, and for whom | What does this use case buy, and who receives that value? |
| Harm categories | Safety, fairness/bias, privacy, financial, legal/rights, dignity, or other harm categories relevant to this use case | What kinds of harm are in scope for this assessment? |
| Severity and likelihood | A qualitative or quantitative estimate of how bad and how likely each harm category is | How serious is each identified risk? |
| Transparency expectation | What an affected person or a regulator would reasonably expect to be told or able to challenge | Does the use case owe an explanation, and does it currently provide one? |
| Identified mitigation | The specific control proposed for each material harm, and its intended effect | What is supposed to reduce each risk? |
| Residual risk | What remains after the proposed mitigation, and who has accepted it | What risk is the enterprise actually carrying forward? |
| Assessor and independence | Who performed the assessment, and their relationship to the use case's business and technical owners | Can this assessment be trusted, or does it need independent review? |

An impact assessment that lists mitigations without a separate control assessment verifying they exist and work has not yet answered whether the residual-risk line is accurate.

## 3. Minimum control assessment specification

Adapted from the general discipline of security and privacy control assessment: verifying that a control is not just designed, but implemented and operating.

| Field | Minimum content | Question it supports |
|---|---|---|
| Control | The specific control being assessed, tied to a mitigation named in the impact assessment | Which control is this? |
| Assessment method | Examine (review documentation or configuration), interview (ask the people who operate it), or test (actually exercise the control and observe the result) | How was this control actually checked? |
| Evidence obtained | The specific artifact, observation, or test result supporting the finding | What proves the finding, rather than asserts it? |
| Designed | Whether the control, as specified, would address the risk if it worked as intended | Is the design adequate on paper? |
| Implemented | Whether the control actually exists in the current deployed configuration, not just in a design document | Is it actually there? |
| Operating effectively | Whether the control, when exercised, actually produces the intended effect | Does it actually work when used? |
| Gap | Any difference between designed, implemented, and operating-effectively findings | Where does the control fall short? |
| Assessor and independence | Who performed the assessment, and their relationship to whoever built or operates the control | Can this finding be trusted, or does it need independent review? |
| Retest trigger | What change would require this control to be reassessed | When does this finding expire? |

"Designed," "implemented," and "operating effectively" are three separate findings. A control can be well designed and not implemented; implemented and not operating effectively; or all three, but that combination must be demonstrated, not assumed from the existence of a design document.

## 4. Assessor independence must scale with the tier

| Tier (from Module 12) | Minimum assessor independence |
|---|---|
| Minimal | Self-assessment by the business or technical owner is acceptable |
| Limited | Self-assessment, with the governance/control owner spot-checking a sample |
| Elevated | An assessor independent of the use case's business owner; technical owner may still perform the control test itself under that independent assessor's review |
| High-impact | An assessor independent of both the business and technical owner, with findings reviewed by the same executive-level accountable decision-maker Module 12 requires for this tier |

This mirrors Module 6's separation-of-duties logic, applied to assessment rather than to approval: the person who most wants a use case to pass its assessment should not be the sole judge of whether it does.

## 5. What an assessment finding should trigger

An assessment is not complete when a form is filled out. It is complete when its finding leads to a decision:

| Finding | Governing response |
|---|---|
| No material gap found | Proceed, with the retest trigger recorded |
| A gap found, with an available fix that can be implemented before deployment | Remediate, then reassess the specific control before proceeding |
| A gap found, with no available fix, but the residual risk is acceptable to an authorized owner | Proceed with a documented, owned, and time-bounded risk acceptance — not a silent gap |
| A gap found that the tier's minimum obligations do not permit leaving open (for example, a high-impact use case with no verified human-review point) | Hold; do not proceed until the gap is closed or the tier itself is reconsidered |

A finding that goes unrecorded, or that is recorded but never leads to one of these four outcomes, has not actually functioned as governance — it has functioned as documentation.

## 6. Relationship to the rest of the curriculum

- **Module 12** assigns the tier that determines whether an impact and control assessment is required at all, and how independent the assessor must be.
- **Module 4** already established that a short-lived credential or a vault does not by itself prove business authority; this module applies the same discipline to any proposed mitigation — existence of a control is not evidence that it works.
- **Module 7** developed evidence and provenance for a transaction already in operation; this module produces the pre-deployment evidence that later operational evidence will be checked against.
- **Later modules** (testing, evaluation, verification, and validation; monitoring and change governance) will build out the ongoing testing and monitoring that keeps an assessment's findings current after deployment. This module produces the pre-deployment and periodic assessment; it does not itself specify a continuous testing pipeline.

## 7. Applied case — assessing the benefits-eligibility recommendation

Continuing the fictional case from Modules 11 and 12, the benefits eligibility recommendation was tiered high-impact, provisionally, pending confirmation of its actual human-review depth.

The vendor's own documentation claims: "a human reviews every recommendation before a final decision." No enterprise assessment has verified this. When an assessor actually interviews the benefits team and observes the workflow:

- the interface displays the AI recommendation prominently, with a single default "accept" action requiring no additional click, and a rejection path requiring three additional steps and a written justification;
- benefits staff report that during high-volume weeks, "we mostly just accept what it says because we don't have time to second-guess it";
- no record exists of how often staff actually override the recommendation;
- the vendor has not disclosed what data trained the underlying model or whether it was evaluated for disparate impact across protected groups;
- an appeal path exists for employees who are denied a benefit, but no one has checked whether appeal outcomes differ from the original recommendation at a rate that would suggest the recommendation is unreliable.

### Governing diagnosis

- The claimed control ("a human reviews every recommendation") is designed on paper but not operating effectively — the interface and workflow make acceptance the default and rejection costly, which is a classic automation-bias pattern from Module 6.
- No control assessment had actually tested this before now; the enterprise had been relying on the vendor's design claim alone.
- The fairness/bias harm category has not been assessed at all, because the vendor has not disclosed the information needed to assess it.
- The appeal path's existence has not been checked for whether it actually catches wrong recommendations, which would show whether the "residual risk is acceptable" claim has any support.
- Given the tier and these findings, this use case should be held, not merely flagged, until the human-review point is redesigned and reassessed and the fairness question is answered or the vendor relationship is reconsidered.

## 8. Executive and program-lead questions

1. For each elevated or high-impact use case, does an impact assessment exist, and does it name specific harms rather than a general "AI risk" statement?
2. For each mitigation an impact assessment claims, has a control assessment actually verified it is implemented and operating effectively, or only that it is designed?
3. Who assessed each control, and is that person independent enough for the use case's tier?
4. When an assessment found a gap, which of the four governing responses in Section 5 actually happened?
5. Is any control's "operating effectively" finding based on an actual test, or only on a vendor's or owner's description?
6. Does any residual-risk acceptance have a named accountable owner and an expiry, or is it open-ended?

## 9. Knowledge check

1. Why is a risk tier not the same thing as an impact assessment?
2. Why is a completed impact assessment not the same thing as a control assessment?
3. Name the three separate findings a control assessment should produce.
4. Why must assessor independence scale with a use case's tier?
5. Name the four governing responses to an assessment finding.
6. In the applied case, why was the vendor's claim that "a human reviews every recommendation" insufficient on its own?

### Answer guide

1. A tier says how much governance attention is warranted; it does not identify a specific harm or verify any specific mitigation.
2. An impact assessment can list proposed mitigations without verifying they exist or work; a control assessment tests that separately.
3. Designed, implemented, and operating effectively.
4. The person who most wants a use case to pass should not be the sole judge of whether it does, and the stakes of getting that judgment wrong rise with the tier.
5. Proceed; remediate then reassess; proceed with a documented, owned, time-bounded risk acceptance; or hold.
6. The claim described the control's design, not whether it was implemented as described or operating effectively; the actual interface and workload pattern made rejection costly, undermining the claimed review.

## 10. Exercise and completion evidence

Complete the [Module 13 Participant Workbook](./exercises/05_Module_03_Participant_Workbook.md) before reading the [Model Answer and Review Guide](./exercises/06_Module_03_Model_Answer_and_Review_Guide.md).

Completion requires:

- an original impact assessment for at least one elevated or high-impact use case from the ongoing case;
- a control assessment for at least one claimed mitigation, distinguishing designed, implemented, and operating-effectively findings;
- an assessor-independence justification tied to the use case's tier;
- a decision on which of the four governing responses applies to at least one finding;
- a written or oral defense.

Publication does not establish learner completion.

## 11. Interview translation

A credible program-lead statement is:

> I can lead the program work that specifies what an impact assessment and a control assessment must actually contain for an AI use case, assigns assessor independence proportional to risk tier, and requires a real decision — proceed, remediate, accept, or hold — when an assessment finds a gap, rather than accepting a vendor's or owner's description of a control as proof it works. Fairness, safety, security, and privacy specialists make the technical determinations reserved to their authority.

This builds on program disciplines of control testing, independent assurance, and evidence-based risk acceptance. It does not claim to personally perform a fairness, safety, security, or privacy determination.

## 12. Primary sources

- [NIST AI Risk Management Framework 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf) — the MEASURE function informs this module's assessment discipline, particularly MEASURE 1 (assessing AI characteristics against defined methods) and MEASURE 2 (evaluating trustworthy-AI characteristics including validity, safety, fairness, and transparency). AI RMF 1.0 remains the published framework while revision work proceeds; MEASURE is a risk-measurement function, not a mandated assessment form.
- [ISO/IEC 42005:2025 — AI system impact assessment](https://www.iso.org/standard/42005) — a guidance standard, published May 2025 as a companion to ISO/IEC 42001, specifically addressing how and when to perform an AI system impact assessment across the AI lifecycle. This module's impact-assessment specification draws on its general framing, not a claim of conformance to its detailed guidance.
- [ISO/IEC 42001:2023 — AI management systems](https://www.iso.org/standard/42001), reused from Module 11 — its impact-assessment requirement (establishing a standing process to assess consequences for individuals, groups, and society, not only the organization) frames this module's distinction between organizational risk and individual/societal impact.
- [NIST Special Publication 800-53A Revision 5 — Assessing Security and Privacy Controls in Information Systems and Organizations](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final) — a final publication providing assessment methodology (examine, interview, test) and the designed/implemented/operating-effectively distinction this module adapts for AI-specific control assessment. It is a security- and privacy-control assessment methodology, not an AI-specific standard, and this module does not claim SP 800-53A-conformant assessment procedures.

Source status was checked through independent web search on 2026-09-18; direct publisher-page fetch was unavailable during this session due to network egress restrictions in the authoring environment, consistent with the limitation already recorded for Modules 11 and 12. Verify current versions and organizational applicability before production or public-sector use.
