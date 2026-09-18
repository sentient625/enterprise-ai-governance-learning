# Module 10 — Executive Decision and Capstone Defense

**Status:** Accepted for public learning use

**Version:** 1.0

**Guide coverage:** Days 19–20; integrates Modules 1–9

**Estimated study time:** 60–90 minutes; allow additional time to complete the original case and prepare the defense

## Purpose

An executive decision must say what may happen, who may authorize it, what evidence supports it, and what will cause it to stop or change. A persuasive presentation cannot compensate for missing authority or unverified controls. Equally, an unresolved question should lead to a specific proof request rather than an indefinite request for more governance.

This capstone turns the preceding modules into an actionable recommendation. The learner prepares a one-page decision memorandum, a 90-second executive briefing, an evidence appendix, and a fifteen-minute defense. The audience is a decision-making group, not a protocol examination panel.

The memorandum, exercise, thresholds, and rubric are original educational synthesis. They are not NIST-prescribed approval forms or a professional certification. Publishing this module completes Modules 1–10 of the instructional sequence; it does not establish learner completion or complete Modules 11–16 and the planned third area.

## Learning objectives

A learner should be able to:

- Compare approval, constrained approval, bounded pilot, and deferral against the same evidence.
- Separate a business hypothesis, a design proposal, a demonstrated control, and an authorization decision.
- Integrate identity, delegated authority, human decisions, evidence, response, and lifecycle ownership into one recommendation.
- Specify preactivation gates, operating obligations, expiry, and reconsideration criteria.
- Connect investment to measurable benefit and credible alternatives without inventing financial results.
- Defend a recommendation under challenge and revise it when new evidence warrants a change.
- Explain the program leader's contribution without claiming specialist implementation experience.

## 1. Begin with the decision

Name the deployment, baseline, environment, actions, data, scale, duration, and decision owner. “Approve ORION” is too broad. “Fund preparation of an isolated recommendation-only pilot, with activation held until named owners accept specified evidence” identifies a decision without implying that preparation funding grants runtime access.

Separate four decisions when necessary: fund exploration; accept the design; authorize operation; activate the accepted configuration. Different roles may own them. An executive sponsor cannot automatically provide missing safety, legal, security, or operational concurrence. If no authorized decision owner has been assigned, record the recommendation as pending and hold activation.

## 2. Compare the choices fairly

| Choice | When defensible | Required boundary |
|---|---|---|
| Approve as designed | Evidence supports the complete proposed scope and authorized owners accept residual risk | Exact baseline, operating limits, expiry, monitoring, and stop authority |
| Approve with constraints | A useful subset can be separated and its controls demonstrated | Enforceable exclusions; clear preactivation conditions versus operating obligations |
| Authorize a bounded pilot | A limited experiment can resolve a material uncertainty at acceptable exposure | Hypothesis, comparator, cost/time ceiling, safety limits, proof gates, and no automatic expansion |
| Defer or do not authorize | Essential authority, control evidence, value, or viable fallback is absent | Specific missing proof, owner, next decision, or reason to discontinue |

A pilot is an experiment, not a waiver. A “conditional approval” that lets unresolved mandatory controls follow activation is not a meaningful gate. Deferral can be the strongest answer when even a narrower experiment lacks safe boundaries. Approval as designed requires proof that the original ORION dossier does not supply.

## 3. Build an evidence-to-decision chain

Use an appendix to keep the executive page short. For every material claim, identify its source, status, applicability, uncertainty, and decision effect.

| Evidence state | Example | Appropriate treatment |
|---|---|---|
| Stated case fact | Shared legacy credentials are proposed | Treat as a design issue requiring disposition |
| Assumption | Automation will reduce after-hours labor | Test against a defined baseline; do not book savings |
| Proposed control | Unique scoped identity and independent stop | Require implementation and relevant test evidence |
| Observed result | A documented test on a named baseline | Limit inference to the tested environment and failure modes |
| Unknown | Queued actions after revocation | Hold dependent authority until resolved |
| Decision record | Authorized owner accepted a defined scope | Check identity, scope, conditions, date, expiry, and continuing validity |

For this capstone, the original case supplies no successful control tests or signed approvals. Earlier module examples and model answers are learning material, not evidence that ORION has passed a gate. A log entry for an attempted command does not establish its target outcome; unknown approval timing remains unknown.

## 4. Integrate the preceding modules

| Prior work | Executive question | Appendix proof or gap |
|---|---|---|
| Modules 1–3: identity and authority | Can each acting principal and authority transfer be traced? | Identity/delegation chain with unresolved paths |
| Module 4: privileged access | Are permissions bounded by action, target, purpose, environment and time? | Authority envelope and credential exceptions |
| Module 5: tools, helpers and context | Can downstream behavior exceed the parent's mandate? | Tool/helper matrix, provenance and trust boundaries |
| Module 6: human authority | Does an authorized person decide before a consequential action? | Action classification, approval content and timing, separation of duties |
| Module 7: evidence | Can we reconstruct what was permitted, attempted and actually changed? | Evidence specification, clock/correlation limitations and records controls |
| Module 8: response | Can further effects be contained while essential work continues? | Tested stop dependencies, queued/in-flight disposition, fallback and restoration gates |
| Module 9: lifecycle | Who owns continued operation and material changes? | Inventory, gate decisions, accepted handover, expiry and retirement obligations |

A reviewer must be able to trace an executive claim to a specific artifact or visible gap. A list of standards or a folder of documents alone is insufficient.

## 5. Make the business proposition testable

State the expected outcome and causal path: which work changes, why that might improve service or cost, what conditions must hold, and what would falsify the proposition. Compare with manual process improvement, conventional automation, and recommendation-only assistance where relevant.

Choose a defined population of comparable tasks and a baseline period. Measure end-to-end effort, including human review, corrections, failed attempts, response coverage, provider/tool cost, and maintenance. Distinguish time saved from cash savings: released capacity is not a realized budget reduction without a credible operational change. Separate control effectiveness from business value; neither proves the other.

Agree success thresholds, exposure limits, sample sufficiency, observation period, and cost ceiling before activation. When those values are absent, name who must establish them and keep the activation gate open. Never invent a favorable return or claim that a small UAT sample establishes production benefit. Expansion is a separate decision supported by evidence relevant to the expanded scope.

## 6. Write conditions that change permission

Every condition needs an accountable owner, acceptance authority, evidence requirement, deadline or event, and consequence if unmet. Label its type:

- **Preactivation gate:** No affected operation until accepted proof exists.
- **Operating obligation:** A requirement that remains monitored during authorized operation, with a defined breach response.
- **Expansion gate:** Proof needed for additional tools, environments, autonomy, volume, or duration.

For example: “Before activation, the IAM owner supplies identity and scope tests for the specified pilot baseline; the designated security acceptance authority accepts them. Shared or human-session execution remains excluded. Failure keeps activation on hold.” This is actionable; “IAM will review later” is not.

Define emergency authority and distinguish immediate containment from a later investment decision. Missing evidence needed to govern an action can justify holding that action. Poor benefit may justify ending an experiment at a planned review without implying a cyber incident. Expiry must actually end or restrict permission through an assigned mechanism; a date in a document is insufficient.

## 7. Communicate the same recommendation at three lengths

**Ninety seconds:** Lead with the requested decision, expected value, decisive evidence gap, permitted boundary, and next proof. Avoid a recital of acronyms.

**One page:** State the decision and owner, business hypothesis and alternatives, evidence and uncertainty, permitted/prohibited scope, conditions and owners, and next review. Keep detailed matrices in a referenced appendix. Target roughly 450–600 words and check the rendered page if exporting; do not reduce readability to fit a word count.

**Fifteen minutes:** Explain the recommendation, trace a consequential transaction, defend the value and control assumptions, answer a challenge, and close with the decision record. Concision must preserve the distinction between recommendation and accepted authorization.

## 8. Capstone case and exercise

Use the original fictional [ORION case workbook](./03_Regulated_Enterprise_Case_Workbook.md) and its assignments. The proposed 90-day pilot crosses corporate IT and protected OT boundaries, includes shared and long-lived credentials and incomplete approval context, and lacks correlated evidence and proven stop/fallback behavior. Business benefit is a hypothesis with an incomplete baseline. The case does not establish that deployment has occurred.

Complete the [Module 10 participant workbook](./exercises/19_Module_10_Participant_Workbook.md) before reading the [model answer and review guide](./exercises/20_Module_10_Model_Answer_and_Review_Guide.md). Use your own prior artifacts; preserve unresolved defects rather than replacing them with the answer guide. Explicitly identify any new assumptions. Challenge injects are hypothetical branches, not additions to the original case history.

## 9. Completion and professional translation

Completion requires an original populated privileged-access lifecycle, completed ORION case response, evidence appendix, one-page memorandum, 90-second briefing, fifteen-minute oral or equivalent written defense, and revisions addressing review findings. Cite artifact versions and record reviewer feedback, unresolved issues, and reassessment. Self-review must be labeled as such. The rubric is an educational assessment, not independent certification.

Update the Progress Record only after the learner's artifacts and defense exist and their quality has been reviewed. Reading, generating, or copying this package does not establish demonstrated learning. Portfolio promotion requires separate accuracy, confidentiality and positioning review. The Modules 1–10 facilitator guide remains a separate draft training product.

A credible interview explanation is: “I can lead the decision process for an agent program: define the business hypothesis, bring qualified owners together, require evidence of bounded authority and recoverability, and maintain explicit conditions for operation and expansion.” Present ORION as a fictional learning case. Claim real implementation outcomes only when independently supported by your actual work.

## 10. Primary-source map

Publisher documents checked 2026-09-18. These voluntary frameworks inform risk/accountability reasoning; they do not prescribe this capstone or establish regulatory compliance.

| Source | Status and focused reading | Use in this module |
|---|---|---|
| [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf), SRC-025 | Published January 2023; GOVERN 2 and MANAGE 1–2 | Assigned accountability, risk response and documented decisions about continuation |
| [NIST CSF 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf), SRC-029 | Published February 26, 2024; GV.RM, GV.RR and GV.OV | Risk strategy, responsibilities and oversight of continuing cybersecurity decisions |

The detailed control vocabulary remains in the preceding modules and their source maps. Qualified organizational owners determine applicability, risk tolerance and implementation. Neither framework supplies a universal pilot duration, scoring threshold, return target or approval authority.
