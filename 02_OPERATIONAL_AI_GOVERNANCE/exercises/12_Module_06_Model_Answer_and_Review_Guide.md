# Module 16 Model Answer and Review Guide — Vendor and Supply-Chain Governance

This is a model answer for calibration, not a substitute for your own completed [participant workbook](./11_Module_06_Participant_Workbook.md). A strong response will differ in wording and may reasonably differ in some judgment calls; what matters is whether the reasoning holds up under challenge.

## Part 1 — Retroactive due-diligence record (illustrative)

| Field | Addressed at signing? | Finding if not |
|---|---|---|
| Model/component identity | No | The specific model version at signing was never independently recorded; the enterprise relied on the vendor's product name alone |
| Data provenance | No | The vendor's later refusal to disclose training-data composition was discovered reactively in Module 3, not caught as a pre-signing gap |
| Sub-processor chain | No | Never asked; unknown whether the vendor's own model depends on a further third party |
| Change-notification capability | No | Never tested before signing; only added, and only partially effective, after Module 5 |
| Security and incident history | No | Never requested from the vendor as a condition of signing |
| Data-use restriction | No | Unknown whether this enterprise's claim data trains the vendor's model for other customers |
| Exit and portability | No | Never assessed; the enterprise does not currently know whether it could replace this tool without losing historical scoring data |

## Part 2 — AI bill of materials request (illustrative)

Request: model identity and version; training and fine-tuning dataset provenance and composition, including whether protected-class-relevant attributes were included or excluded; sub-processor and infrastructure dependencies; and a documented update-cadence record describing how and when the vendor changes the model. If the vendor cannot produce these, treat the gap as a finding requiring one of Section 5's four governing responses — for a high-impact use case like this one, the case's own facts already show the correct answer was "remediate" (require disclosure as a condition of continued use) or "hold," not silent acceptance.

## Part 3 — Contract-control checklist (illustrative)

| Control | Status | Evidence needed to confirm it actually works |
|---|---|---|
| Change disclosure | Present, added after Module 5, but untested against the actual undisclosed update — so effectively unverified | A future disclosed change, confirmed to have actually been reported in advance |
| Data-use restriction | Absent | Would need to be added at the next renewal; no evidence exists either way currently |
| Incident disclosure | Absent | Would need to be added; the vendor's own release notes were only found after the fact, not disclosed proactively |
| Audit/inspection rights | Absent | Would need to be added and then actually exercised at least once |
| Sub-processor disclosure and flow-down | Absent | Would need to be added; the enterprise still does not know if a sub-processor exists |
| Exit and portability | Absent | Would need to be added and tested, for example through a documented data-export exercise |

## Part 4 — Governing response to non-disclosure (illustrative)

The training-data non-disclosure should have triggered a governing response at signing, not after Module 3's control assessment found it. Given the use case's high-impact tier (from Module 2), the correct response was remediate — require the vendor to disclose training-data composition, or at minimum a defensible disparate-impact evaluation performed by the vendor or an independent third party, as a condition of signing — or hold if the vendor would not comply at all. Proceeding without either response, as actually happened, left the enterprise carrying an unassessed fairness risk for the entire period the tool was in production before Module 3 caught it.

## Part 5 — Ongoing vendor governance plan (illustrative)

Given the high-impact tier, reattestation of the full due-diligence record should occur annually and at any material-change event; the audit/inspection right should be exercised at least once within the first year of any renewed or newly signed contract, specifically targeting the training-data and fairness claims that were never previously verified; sub-processor tracking should be a standing item at each contract review, since the enterprise currently has no visibility into whether one exists at all.

## Part 6 — Linking outward (illustrative)

A completed due-diligence record at signing would very likely have caught the fairness-assessment gap immediately — the vendor's non-disclosure would have been visible as a signing-time finding rather than something discovered only when Module 3's control assessment specifically interviewed staff and examined the interface. It is less clear that due diligence alone would have caught the interface-friction problem, since that finding depended on observing actual staff behavior under real workload, which a pre-signing review typically cannot do — that gap is better suited to Module 4's claimed-safeguard testing before deployment. The undisclosed model update in Module 5 might have been prevented by a properly negotiated and tested change-disclosure term at signing, though even a well-drafted term still depends on the vendor's actual compliance, so monitoring remains a necessary backstop regardless.

## Part 7 — Executive summary (illustrative, ~180 words)

A retroactive due-diligence review of the benefits eligibility recommendation vendor finds that none of the six minimum contract controls were in place at signing, and only one (change disclosure) has since been added — and that one remains unverified against an actual test. The vendor's original non-disclosure of training-data composition, which Module 3 later found created an unassessed fairness risk, should have triggered a remediate-or-hold decision at signing rather than being discovered after deployment. Recommendation: at the next contract renewal, require the full six-control checklist, including data-use restriction, incident disclosure, audit rights, sub-processor disclosure, and a tested exit plan; exercise the audit right within the first year specifically to verify the training-data and fairness claims never previously confirmed; and treat this vendor relationship as a template for what pre-signing due diligence should look like for every future AI vendor at this tier, not only this one.

## Part 8 — Defense (review guidance)

A strong defense on retrofitting versus signing-time terms explains that a contract term added after deployment has already missed the entire period during which the risk it addresses was live and unmanaged — in this case, an unknown number of months during which the training-data fairness question was simply unassessed. A strong defense on an unverified "present" control acknowledges that a written clause is not the same as a demonstrated control, echoing Module 3's designed/implemented/operating-effectively distinction, and proposes a specific verification step (for example, deliberately triggering the change-disclosure clause through a direct vendor conversation, rather than waiting for the next unannounced update).

## Review observations for facilitators or self-review

A response that scores well:

- treats every unaddressed due-diligence field as a specific finding, not a blank;
- applies the same four governing responses to vendor non-disclosure that Module 3 established for any other assessment gap;
- distinguishes a written contract clause from a demonstrated, tested control;
- connects the case's actual sequence of discoveries (Modules 3–5) back to the due-diligence gap at signing that made each one likely.

A response that needs revision:

- treats an added contract clause as if it resolves the underlying risk without any verification;
- proposes a due-diligence record without connecting any specific field to a specific consequence already documented in the case;
- recommends "trust the vendor" or "wait and see" as an implicit fifth governing response.

## Completion and professional translation

This model answer is not a learner-created portfolio artifact. Completion requires the learner's own original workbook responses and a defense addressing at least one challenge from this guide. Update the Progress Record only after that evidence exists.
