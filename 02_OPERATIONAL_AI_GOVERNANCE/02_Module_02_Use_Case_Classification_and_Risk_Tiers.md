# Module 12 — Use-Case Classification and Risk Tiers

**Status:** Accepted for public learning use

**Version:** 1.0

**Guide coverage:** Days 4–6

**Estimated study time:** 60–90 minutes plus exercise

## Purpose

Module 11 produced a list: every AI use case the enterprise could find, with an owner assigned or a gap flagged. A list treats every entry the same size. It does not yet say which entries need an executive-level impact assessment before they touch a customer, and which can proceed with routine oversight.

This module develops the program-level ability to assign each inventoried use case a risk tier, define what governance obligation attaches to each tier, design an intake process that classifies a use case before it is deployed rather than after, and manage reclassification when a use case's purpose, population, or data changes.

This is a different classification from the one built in Module 6. Module 6 classifies individual actions of an already-scoped, already-privileged agent as autonomous, monitored, prior-approval, or prohibited. This module classifies a whole use case — often before any agent, model, or privileged access is even involved — to decide how much governance attention it should receive at all. A use case can be tiered here as high-impact and still need Module 6's action-level classification once it is built; a use case tiered here as minimal-impact may never need Module 6's framework because it never becomes privileged or agentic.

The tier model, intake process, and case below are original educational synthesis. They are not a NIST-, ISO-, or OMB-prescribed scheme, a legal risk classification, or a production control set.

## Learning objectives

A learner should be able to:

- Distinguish use-case-level risk classification from action-level classification and from a technical severity score.
- Identify the factors that should drive a risk tier: affected population, consequence, reversibility, autonomy, data sensitivity, and legal or rights exposure.
- Define a small number of risk tiers, each with a distinct governance obligation.
- Design an intake process that classifies before deployment and assigns a specific decision owner to the classification itself.
- Identify triggers that require reclassification, and distinguish them from routine operation.
- Challenge self-classification, tier creep, and a use case that is deployed before its classification is complete.
- Connect use-case tiering to the later assessment, testing, and monitoring work planned for later modules without duplicating it.
- Explain the program-lead's classification role without claiming a legal, safety, or technical risk-modeling determination.

## 1. A tier is a governance decision, not a technical score

A risk tier answers: how much governance attention does this use case need before and during operation? It is not the same question as a model's technical accuracy, a vendor's security certification, or a system's uptime. A highly accurate model used to deny a benefit claim can still be a high tier; a technically unremarkable tool used only for internal drafting with no downstream consequence can be a low tier regardless of the sophistication of the underlying model.

Tiering also is not permanent. A use case's tier can change when its purpose, population, autonomy, or data changes — the same discipline Module 9 applies to material change in an agent's lifecycle, now applied one level up, at the point a use case is first classified rather than after it already holds privileged access.

## 2. Classification factors

Use these together; no single factor should set the tier alone.

| Factor | Governing question |
|---|---|
| Affected population | Who is affected by the use case's output — employees, customers, job applicants, the public, vulnerable groups? |
| Consequence | What financial, legal, safety, employment, access, or reputational effect can the output cause? |
| Reversibility | If the output is wrong, can the affected person or the enterprise actually undo the harm, and how quickly? |
| Autonomy | Does a human review the output before it affects someone, or does the system act or decide without that review? |
| Data sensitivity | What data classes does the use case use or produce — public, internal, personal, special-category, regulated? |
| Legal or rights exposure | Does the use case touch employment, credit, housing, benefits, healthcare, law enforcement, or another domain where existing law already constrains automated decisions? |
| Scale | How many people or transactions does the use case reach, and could many small effects accumulate into a material one? |
| Explainability need | Would an affected person or a regulator reasonably expect an explanation of the specific output? |

A use case that scores low on most factors but touches even one — for example, an otherwise routine internal tool that happens to use special-category health data — should not be tiered down on the strength of the other factors alone.

## 3. An illustrative four-tier model

| Tier | Illustrative meaning | Illustrative governance obligation |
|---|---|---|
| Minimal | Internal, low-consequence, easily reversible, no sensitive data, no rights exposure | Registration in the inventory; owner named; no further gate before operation |
| Limited | Some consequence or data sensitivity, but bounded, reversible, and human-reviewed before effect | Registration plus a lightweight intake review; defined human-review point confirmed |
| Elevated | Material consequence, limited reversibility, or sensitive data; may operate with reduced human review | Registration, a documented impact assessment, defined testing before deployment, and ongoing monitoring |
| High-impact | Affects rights, safety, access to a benefit, employment, or another legally or materially consequential outcome, especially with limited human review | All of the above, plus a named executive-level accountable decision, pre-deployment testing against defined criteria, mandatory human oversight, and a documented waiver path if any minimum practice cannot be met |

This four-tier model is this module's own synthesis, built to be simple enough for a program lead to apply consistently. An enterprise may need a different number of tiers or different names; what must not vary is that each tier has a distinct, testable governance obligation, not just a different label of concern.

## 4. A real illustration of a consolidated high-impact category

OMB Memorandum M-25-21 (April 2025), covered as illustrative federal-sector context in Module 11, replaced its predecessor's separate "rights-impacting" and "safety-impacting" categories with a single consolidated "high-impact AI" definition, covering AI whose output serves as a principal basis for a decision or action with a legal, material, or safety-related effect on rights, safety, or critical operations. It attaches minimum practices — pre-deployment testing, an impact assessment, ongoing monitoring, and human oversight — to that single tier, with a defined waiver path for a system that cannot meet a minimum practice, rather than a blanket exemption.

This is cited only to show a real government's example of consolidating multiple high-risk categories into one, and of tying a tier to specific, checkable minimum practices rather than a vague "handle carefully" instruction. It does not apply to a private-sector or non-U.S.-government learner's organization, and this module's own four-tier model is not a rewording of it.

## 5. Intake: classify before deployment, not after

A tier assigned after a use case is already live in production has already missed the decisions it was meant to inform. Intake should require, before deployment:

- a named submitter, who is not automatically the same person who classifies;
- a completed set of answers to the classification factors in Section 2;
- a named classification decision owner, distinct from the use case's own business owner where the tier reaches elevated or high-impact;
- a record of the tier assigned, the factors that drove it, and the date;
- for elevated and high-impact tiers, confirmation that the obligations in Section 3 are scheduled before, not merely after, deployment.

Self-classification by the same person who wants the use case approved is a foreseeable source of tier creep — the tendency for a use case to be classified one tier lower than its actual risk to avoid the associated governance obligation. Require an independent check on any self-submitted tier, proportional to how close the submission sits to a tier boundary.

## 6. Reclassification triggers

A tier assigned at intake can become wrong without any code change, for the same reasons Module 9 treats "no code changed" as insufficient to prove a deployment is unchanged:

- the population served expands (for example, from one internal team to all employees, or from a pilot region to all customers);
- a new data class is introduced, especially personal or special-category data;
- human review is reduced or removed;
- the use case is repurposed for a new decision it was not originally classified against;
- volume grows enough that formerly immaterial cumulative effects become material;
- an incident or near-miss reveals a consequence the original classification did not anticipate.

Define these as explicit triggers requiring a reclassification review, not as informal judgment calls left to whoever happens to notice.

## 7. Relationship to the rest of the curriculum

- **Module 6** classifies individual actions of an already-privileged agent. This module's tier can trigger the need for that work — a use case tiered elevated or high-impact that becomes agentic should expect its actions to require Module 6's autonomous/monitored/approval/prohibited classification — but the two classifications answer different questions at different points in a use case's life.
- **Module 9** governs lifecycle gates for an already-identified, already-privileged agent. This module's tier should inform which of Module 9's gates apply and how rigorously — a minimal-tier use case may need a lighter design and test gate than a high-impact one — without this module re-defining Module 9's gate structure.
- **Module 11** supplies the population to be tiered. A use case cannot be classified if it is not first inventoried and owned.
- **Later modules** (impact and control assessment; testing, evaluation, verification, and validation; monitoring and change governance) will build out exactly what an elevated or high-impact tier's obligations require in practice. This module assigns the tier; it does not itself specify the assessment or test method.

## 8. Applied case — tiering the enterprise's discovered use cases

Continuing the fictional case from Module 11, the same five findings now need a tier assignment.

| Use case | Population | Consequence/reversibility | Autonomy | Data | Illustrative tier |
|---|---|---|---|---|---|
| ORION maintenance agent | Internal operations/IT | Can affect production service availability; partially reversible | Currently governed under Module 6's own action classes | Operational/system data | Elevated to high-impact depending on the specific action being performed; already tracked via Module 6's governance, cross-referenced rather than re-derived here |
| Sales proposal drafting (consumer tool) | External customers receive the drafted output | Reputational and possible confidentiality exposure; reversible before sending, not after | Human sends the output, but tool's data handling is unknown | Customer and possibly competitive-sensitive data, handling unverified | Elevated, pending the data-handling review Module 11 already flagged; provisionally treat as elevated until that review closes, not as minimal by default |
| Benefits eligibility recommendation (vendor feature) | Employees seeking benefits | Denial or delay of a benefit; reversibility depends on appeal path | Recommendation only, but real human-review depth is unconfirmed | Sensitive employee benefits data | High-impact: affects access to a benefit and touches sensitive personal data; requires the full obligation set before continued use is accepted |
| Customer-service analytics pilot | Customers, aggregated | Currently informational; no direct decision consequence documented in the case | No decision authority — analytics only, as far as documented | Live customer data | Elevated on data-sensitivity grounds alone, pending confirmation that no consequential decision is actually being made from its output |
| Three disagreeing business-unit lists | N/A — a process gap, not a use case | N/A | N/A | N/A | Not tierable; this is the record-steward gap from Module 11 and must be resolved before any of the above tiers can be trusted enterprise-wide |

Two results are worth naming explicitly. First, the benefits-eligibility case reaches high-impact primarily because of what it decides (access to a benefit), not because of its technical sophistication — a simple recommendation engine can still be high-impact. Second, the sales-drafting and analytics cases are provisionally tiered pending information Module 11 already identified as missing; a tier assigned without that information should be labeled provisional, not final.

## 9. Executive and program-lead questions

1. Is every use case in the inventory assigned a tier, or does the inventory stop at "found and owned"?
2. Who classifies, and is that person different from whoever wants the use case approved?
3. What specific obligation attaches to each tier, and can someone check whether it was actually met?
4. Has any use case been deployed before its classification was complete?
5. What triggers a reclassification, and who watches for those triggers?
6. Is a high-impact use case's tier driven by its actual consequence, or by how sophisticated its underlying model happens to be?
7. Where a use case's tier is provisional pending missing information, is that provisional status visible, or has it quietly become permanent?

## 10. Knowledge check

1. Why is use-case classification a different question from Module 6's action classification?
2. Name three factors that should jointly drive a risk tier.
3. What is tier creep, and why is self-classification a foreseeable source of it?
4. Why should classification happen before deployment rather than after?
5. Give two examples of a reclassification trigger that does not involve a code change.
6. Why can a technically simple system still be high-impact?

### Answer guide

1. Module 6 classifies individual actions of an already-privileged agent; this module classifies whether a use case needs governance attention at all, often before any privileged access exists.
2. Any three of: affected population, consequence, reversibility, autonomy, data sensitivity, legal/rights exposure, scale, explainability need.
3. Tier creep is classifying a use case one tier lower than its actual risk to avoid governance obligation; the same person who wants approval has an incentive to underclassify.
4. A tier assigned after deployment has already missed the decisions — testing, impact assessment, human-oversight design — it was meant to inform.
5. Any two of: population expansion, new data class introduced, reduced human review, repurposing to a new decision, volume growth, an incident revealing an unanticipated consequence.
6. Consequence depends on what the output decides or affects, not on how sophisticated the model producing it is.

## 11. Exercise and completion evidence

Complete the [Module 12 Participant Workbook](./exercises/03_Module_02_Participant_Workbook.md) before reading the [Model Answer and Review Guide](./exercises/04_Module_02_Model_Answer_and_Review_Guide.md).

Completion requires:

- an original risk-tier model with a distinct governance obligation per tier;
- a populated classification of the Module 11 case's use cases, including at least one provisional tier with its missing information named;
- an intake-process design naming the submitter and classification decision-owner roles;
- a reclassification-trigger list;
- a written or oral defense.

Publication does not establish learner completion.

## 12. Interview translation

A credible program-lead statement is:

> I can lead the program work that assigns each AI use case a risk tier tied to a specific, checkable governance obligation; designs an intake process that classifies before deployment rather than after; watches for tier creep in self-classified submissions; and defines the triggers that require reclassification as a use case's purpose, population, or data changes. Data-science, legal, and safety specialists make the technical and legal risk determinations reserved to their authority.

This builds on program disciplines of intake and gating, risk-based prioritization, and accountable decision assignment. It does not claim a technical risk-modeling method or a legal risk-classification determination.

## 13. Primary sources

- [NIST AI Risk Management Framework 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf) — the MAP function, particularly MAP 1 (context, purpose, population, and prospective impacts) and MAP 5 (characterizing likelihood and magnitude of impact), informs this module's classification-factor set. AI RMF 1.0 remains the published framework while revision work proceeds; MAP is a risk-characterization function, not a mandated tier scheme.
- [NIST AI 600-1 — Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf) — informs awareness that generative-AI-specific risks (information integrity, confabulation, and related categories) may warrant classification attention beyond a conventional software risk view.
- [ISO/IEC 42001:2023 — AI management systems](https://www.iso.org/standard/42001) — its AI risk assessment and AI system impact assessment requirements inform the general discipline of assessing a use case before and during operation; a certifiable management-system standard, not a public tier schema, and this module does not claim ISO-conformant control mapping.
- [OMB Memorandum M-25-21 — Accelerating Federal Use of AI through Innovation, Governance, and Public Trust](https://static.carahsoft.com/concrete/files/9717/4412/5797/Guidance_M-25-21_Accelerating_Federal_Use_of_AI_through_Innovation_Governance_and_Public_Trust.pdf) (issued April 3, 2025; rescinds and replaces M-24-10) — cited specifically because it consolidated its predecessor's separate "rights-impacting" and "safety-impacting" categories into one "high-impact AI" tier with defined minimum practices and a waiver path; illustrative federal-sector context only, not applicable as a compliance requirement to this curriculum's general audience.

Source status was checked through independent web search on 2026-09-18; direct publisher-page fetch was unavailable during this session due to network egress restrictions in the authoring environment, consistent with the limitation already recorded for Module 11. Verify current versions and organizational applicability before production or public-sector use, and specifically reconfirm that M-25-21's consolidated "high-impact AI" definition (rather than its rescinded predecessor's two-category split) remains current at the time of reuse.
