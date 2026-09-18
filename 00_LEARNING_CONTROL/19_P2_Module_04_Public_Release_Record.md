# Priority 2, Module 4 Public-Release Record

**Release ID:** P2-M04-R1

**Module:** Testing, Evaluation, Verification, and Validation

**Version:** 1.0

**Review date:** 2026-09-18

**Decision:** Accepted for public learning use

**License:** CC BY 4.0

## Scope and learning claim

The package includes the lesson, participant workbook, model answer/review guide, source-register update, and navigation/content-register changes. It develops executive and program-lead judgment about separating testing, evaluation, verification, and validation as four distinct questions; requiring TEVV scope to cover adversarial and misuse behavior, not only functional accuracy; setting pass/fail criteria before results are known; scaling TEVV independence to a use case's risk tier; and connecting TEVV evidence to Module 3's control-assessment work without collapsing the two activities.

Publication does not establish learner completion, production readiness, independent peer review, or professional authority. The TEVV specification and fictional case are original educational synthesis, not a NIST-, ISO-, or OWASP-prescribed test plan.

## Source treatment

Publisher-adjacent material checked through independent web search on 2026-09-18: NIST AI RMF 1.0 (January 2023), specifically its cross-cutting treatment of TEVV as a lifecycle-wide discipline; NIST AI 100-2e2025 (Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations), published March 2025 and confirmed to substantially expand the prior 2023 edition specifically to cover generative-AI, LLM, RAG, and agent-based attacks — a new source added specifically for this module; NIST AI 600-1, reused from earlier modules; and ISO/IEC 42001:2023, reused from Module 1 for its operational-planning and change-management framing.

Direct publisher-page fetch (nvlpubs.nist.gov, csrc.nist.gov, iso.org) remained unavailable during this authoring session because of the same network egress restriction recorded in the Priority 2, Module 1 through 3 release records. Source status rests on corroboration across multiple independent search results per source, not a direct page read. This is an authoring-time check, not independent peer review, and should be reconfirmed against the primary publisher pages before the next revision or before any production-facing use — particularly NIST AI 100-2's edition number, since it is an actively updated taxonomy that has already been revised once (2023 to 2025) within the period this register covers.

## Authoring review

| Dimension | Review finding |
|---|---|
| Scope discipline | Four TEVV terms (verification, validation, testing, evaluation) kept explicitly distinct, each with a stated question and a counterexample of what it does not answer |
| Adversarial scope | Explicitly required, tied to Priority 1, Module 5's prompt-injection content and to NIST AI 100-2e2025's expanded GenAI/LLM/RAG/agent attack coverage, rather than limited to functional accuracy |
| Criteria discipline | Pass/fail criteria required before testing, with specific warning signs for post-hoc criterion adjustment named |
| Relationship to Module 3 | TEVV and control assessment explicitly distinguished, with a worked example (the claimed-safeguard test) showing how a TEVV finding would have caught Module 3's control-assessment gap proactively rather than reactively |
| Independence | Scaled explicitly to Module 2's tier model, consistent with Module 3's assessor-independence pattern |
| Vendor-benchmark treatment | Explicitly rejected as a substitute for enterprise-specific TEVV at elevated and high-impact tiers, with a stated reason (population and condition mismatch) |
| Applied case | Continues Modules 1–3's benefits-eligibility finding; reconstructs what TEVV should have covered pre-deployment without claiming a resolved outcome |
| Applied learning | Workbook Parts 1–8 align with the model answer's Parts 1–8; a review-observations section supports facilitator or self-review |
| Confidentiality/positioning | Fictional enterprise setting continued from Modules 1–3; program-lead scope and professional boundaries explicit; no claim of personally designing or executing a test methodology |
| Completion | Original artifact and defense required; Progress Record unchanged by this publication |
| Navigation | Relative file links checked before commit; full-repository link check also run |

This is an AI-assisted authoring review, not independent external or human peer review. Independent review of source citation accuracy and cross-module consistency has not yet been separately performed for this package, consistent with the still-open item recorded for Modules 1 through 3, and should occur before any of the four Priority 2 records is treated as unconditional.

## Limitations and maintenance

This module does not itself specify an ongoing monitoring or production-telemetry design; that is reserved for the next planned Priority 2 module (monitoring and change governance). The fictional case's TEVV reconstruction is illustrative and does not claim the described tests were actually run; learners must preserve that distinction rather than treating the model answer's example criteria as validated thresholds. NIST AI 100-2e2025 is cited for its general attack-category framing and its evidence that adversarial-testing scope changes over time, not as a mandated test suite.

Review again when source status changes (particularly a further NIST AI 100-2 revision, given its recent update history, or ISO/IEC 42001-family changes), when the next Priority 2 module on monitoring and change governance is drafted and this module's retest-trigger forward references need tightening, or when reader feedback identifies accuracy, usability, confidentiality, or positioning concerns. Confirm direct publisher-page access for the sources listed above at the next revision opportunity, since this release relied on search-based corroboration rather than a direct fetch.
