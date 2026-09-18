# Module 16 — Vendor and Supply-Chain Governance

**Status:** Accepted for public learning use

**Version:** 1.0

**Guide coverage:** Days 16–18

**Estimated study time:** 60–90 minutes plus exercise

## Purpose

Module 5 required a vendor to disclose a material model change, then found that a one-clause contract term is not enough on its own — the benefits-eligibility vendor's own disclosure obligation went untested for six months before an undisclosed update was caught by monitoring instead. Module 1 separately found that embedded vendor AI is one of the hardest categories to detect in the first place, because it typically arrives inside a product the enterprise already trusted for something else.

This module builds the due-diligence and contract-control discipline that should have existed before the benefits-eligibility contract was ever signed: what to require a vendor to disclose before onboarding, what a concrete AI-specific bill of materials actually contains, what contract terms give the enterprise a real, checkable hold on a vendor's AI supply chain rather than a sales conversation's assurances, and what to do — as a governance decision, not a shrug — when a vendor will not disclose what the enterprise needs to know.

The due-diligence specification, contract-control checklist, and case below are original educational synthesis. They are not a NIST-, CISA-, ISO-, or OMB-prescribed procurement form, a legal contract template, or a substitute for qualified procurement, legal, and security review.

## Learning objectives

A learner should be able to:

- Distinguish AI-specific vendor risk from conventional software vendor risk, and identify what conventional due diligence typically misses.
- Specify a minimum pre-contract due-diligence set covering model identity, data provenance, sub-processor chain, and change-notification capability.
- Recognize an AI bill of materials as a concrete, checkable artifact rather than a sales claim, and require it as a contract deliverable.
- Specify a minimum contract-control checklist: change disclosure, data-use restriction, incident disclosure, audit rights, sub-processor flow-down, and exit/portability.
- Treat vendor non-disclosure as a risk input requiring a governing response, not a neutral unknown to be silently accepted.
- Design ongoing vendor governance — reattestation, audit exercise, sub-processor tracking — distinct from one-time onboarding due diligence.
- Connect vendor governance to the risk tiering, impact assessment, and monitoring work already built without duplicating it.
- Explain the program-lead's vendor-governance role without claiming to personally perform legal contract negotiation or a technical security audit.

## 1. AI-specific vendor risk is not the same as conventional software vendor risk

Conventional vendor due diligence typically checks security certifications, uptime commitments, and data-handling terms for a system whose behavior is fixed at the version the enterprise deployed. AI vendor risk adds questions conventional due diligence usually does not ask:

- What data trained or fine-tuned the model, and does the enterprise have any visibility into whether that data was lawfully obtained, representative, or biased?
- Can the vendor change the model's behavior — through retraining, a version update, or a configuration change — without the enterprise's action, and will the enterprise be told?
- Does the vendor itself depend on a sub-processor (a foundation-model provider, a hosting platform) whose own risk the enterprise has never assessed?
- Will the enterprise's own data be used to further train the vendor's model, for this enterprise's benefit alone or more broadly?
- If the enterprise needs to leave the vendor, can it actually extract its data and replicate the use case elsewhere, or is it functionally locked in?

A vendor can pass every conventional security and compliance check on this list while failing every AI-specific one, exactly as the benefits-eligibility vendor did.

## 2. Minimum pre-contract due-diligence specification

| Field | Minimum question | Why it matters |
|---|---|---|
| Model/component identity | What specific model, version, and provider underlies this feature? | Without this, no later disclosure obligation has anything specific to attach to |
| Data provenance | What data trained or fine-tuned the model, and under what rights? | Determines fairness, privacy, and IP exposure the impact assessment in Module 3 needs to evaluate |
| Sub-processor chain | Does the vendor depend on another vendor's model, hosting, or service? | A risk in the sub-processor is a risk to the enterprise, whether or not the primary vendor discloses it |
| Change-notification capability | Can the vendor actually notify the enterprise of a material change, and has it done so for any other customer? | A vendor with no operational mechanism for this cannot meaningfully commit to Module 5's disclosure obligation |
| Security and incident history | Has this model or vendor had a confirmed security or safety incident, at this enterprise or elsewhere? | Informs the risk tier and the assessor-independence decision in Modules 2–3 |
| Data-use restriction | Will the enterprise's data be used to train the vendor's model for other customers' benefit? | A material term affecting both privacy exposure and competitive risk |
| Exit and portability | Can the enterprise extract its data and configuration if it needs to leave? | Determines whether "hold" (Module 3's governing response) is actually achievable without existential cost |

A vendor's inability to answer a question is itself an answer. Record "vendor could not or would not disclose" as a specific finding, not as a blank field.

## 3. The AI bill of materials as a concrete artifact

A sales conversation's assurances are not evidence. A real illustration of what a checkable artifact looks like: CISA, together with G7 partners, published joint guidance in 2026 on AI bill-of-materials minimum elements, organizing AI-specific supply-chain documentation into clusters covering metadata, model identity and weight provenance, dataset properties, key performance indicators, infrastructure dependencies, and a documented update cadence.

This module does not require an enterprise to adopt that guidance's exact format. It requires the same underlying discipline: request a structured, specific artifact describing what is actually inside the AI component the enterprise is relying on, rather than accepting a marketing description of "AI-powered" features. Where a vendor cannot produce anything resembling this, that gap should feed directly into the risk tier and impact assessment already built in Modules 2 and 3, not be treated as an acceptable cost of doing business with every AI vendor.

## 4. Minimum contract-control checklist

| Control | Minimum term | Connects to |
|---|---|---|
| Change disclosure | Advance notice of a material model or system change, with enough detail to assess against Module 5's material-change categories | Module 5's monitoring and change governance |
| Data-use restriction | The enterprise's data will not train the vendor's model for other customers' benefit without separate, explicit agreement | Module 3's privacy harm category |
| Incident disclosure | Notification of a confirmed security or safety incident involving this model, at this enterprise or elsewhere, within a defined window | Module 8's suspension and response process |
| Audit/inspection rights | The enterprise, or an independent assessor it designates, may request evidence supporting the vendor's disclosures | Module 3's assessor-independence requirement |
| Sub-processor disclosure and flow-down | The vendor must disclose its own AI-relevant sub-processors and flow down equivalent obligations to them | Section 1's sub-processor risk |
| Exit and portability | A defined, tested process for extracting data and replicating or transitioning the use case | Module 3's "hold" governing response remaining actually achievable |

Liability, indemnification, and the precise legal enforceability of any of these terms are matters for qualified legal review; this module specifies what a program lead should insist a contract addresses, not how to draft the clause.

## 5. Non-disclosure is a risk finding, not a neutral unknown

A vendor that will not disclose training-data provenance, sub-processor identity, or incident history has not given the enterprise "no information" — it has given the enterprise a specific finding: this vendor's practice does not currently support the assessment Module 3 requires. Route that finding through the same governing responses already built:

- **Proceed** only if the use case's tier is low enough that the undisclosed information would not materially change the impact assessment.
- **Remediate** by requiring disclosure as a condition of continued or expanded use, with a deadline.
- **Documented risk acceptance** only when an authorized owner explicitly accepts operating without that information, time-bounded and reviewed.
- **Hold**, as Module 3 already concluded for the benefits-eligibility case, when the use case's tier does not permit proceeding without it.

Accepting non-disclosure silently, by continuing to operate without any of these four responses being explicitly chosen, is the same failure Module 3 identified when a claimed control was assumed to work without being tested.

## 6. Ongoing vendor governance, not just onboarding

Due diligence performed once at signing goes stale. Maintain:

- periodic reattestation of the due-diligence fields in Section 2, on a cadence tied to the use case's risk tier;
- at least one actual exercise of the audit/inspection right during the contract term for an elevated or high-impact use case, not merely a clause that is never used;
- tracking of sub-processor changes, since a vendor's own supply chain can change without the vendor itself changing anything the enterprise would notice;
- a documented review at each contract renewal of the vendor's incident history and any confirmed problems at other customers.

## 7. Relationship to the rest of the curriculum

- **Module 11** identified embedded vendor AI as a blind spot; this module gives the enterprise the due-diligence and contract tools to catch it before signing, not only after discovering it already in production.
- **Module 15** required a change-disclosure contract term as one illustration; this module builds that term into a complete contract-control checklist and treats the disclosure failure already dramatized in Module 5's case as a predictable outcome of inadequate due diligence at signing, not a one-off surprise.
- **Module 13** assigns a governing response to a risk finding; this module applies the same four responses to vendor non-disclosure specifically.
- **Module 8** governs suspension and response once an incident is confirmed; this module's incident-disclosure term is what gets a vendor-side incident into that process at all.

## 8. Applied case — what should have happened before the benefits-eligibility contract was signed

Continuing the fictional case, reconstruct the due-diligence review the enterprise did not perform before onboarding the benefits eligibility recommendation vendor.

| Due-diligence field | What a proper pre-contract review should have found |
|---|---|
| Model/component identity | The vendor's recommendation engine, and its specific version at the time of signing — never independently recorded |
| Data provenance | The vendor's later refusal to disclose training-data composition should have been caught here, before signing, not discovered during Module 3's control assessment after deployment |
| Sub-processor chain | Unknown — never asked whether the vendor's model itself depends on a further third-party provider |
| Change-notification capability | Never tested before signing; the contract term added after Module 5 was the first time this was addressed at all |
| Data-use restriction | Never specified; unknown whether this enterprise's claim data is used to improve the vendor's model for other customers |
| Exit and portability | Never assessed; unknown whether the enterprise could actually replace this tool without losing historical claim-scoring data |

### Governing diagnosis

- Every gap Module 3 discovered reactively — the undisclosed training data, the untested human-review claim — traces back to due diligence that was never performed before signing.
- The vendor's non-disclosure of training-data composition should have been treated, at signing, as a specific risk finding requiring one of Section 5's four governing responses — most plausibly remediate (require disclosure as a condition of signing) or hold (do not sign until it is provided).
- Retrofitting a change-disclosure term after deployment, as Module 5 did, is strictly worse than having it at signing: the enterprise operated for an unknown period without any disclosure mechanism at all.
- Going forward, renewal of this contract should require the full checklist in Section 4, not merely the single clause added reactively.

## 9. Executive and program-lead questions

1. For each vendor supplying an elevated or high-impact AI use case, does a completed due-diligence record exist, or only a signed contract and a sales deck?
2. Has the enterprise ever requested anything resembling an AI bill of materials from this vendor, or only accepted a marketing description?
3. Does the contract contain each of the six controls in Section 4, or only whichever ones happened to be raised during negotiation?
4. Where the vendor would not disclose something material, which of the four governing responses was actually chosen, and by whom?
5. Has the audit/inspection right ever actually been exercised, or does it exist only on paper?
6. Is the enterprise tracking this vendor's own sub-processor chain, or trusting the vendor to disclose a problem there voluntarily?
7. Could the enterprise actually exit this vendor relationship if it needed to, or is that assumption untested?

## 10. Knowledge check

1. Name three questions AI-specific vendor due diligence asks that conventional software vendor due diligence typically does not.
2. Why is a vendor's inability to answer a due-diligence question itself a finding, not a blank field?
3. What is an AI bill of materials, and why does it matter that it is a specific, structured artifact rather than a marketing claim?
4. Name the six controls in the minimum contract-control checklist.
5. Why should vendor non-disclosure route through the same four governing responses as any other assessment finding?
6. In the applied case, what single due-diligence gap, if closed at signing, would have prevented the largest number of problems found later?

### Answer guide

1. Any three of: training-data provenance, change-notification capability, sub-processor chain, data-use restriction, exit/portability.
2. Because the absence of an answer is information about the vendor's practice and the enterprise's actual risk exposure, not an absence of information.
3. A structured, checkable description of what is actually inside an AI component — model identity, data provenance, dependencies — as opposed to an unverifiable claim of being "AI-powered."
4. Change disclosure, data-use restriction, incident disclosure, audit/inspection rights, sub-processor disclosure and flow-down, exit and portability.
5. Because non-disclosure is a risk finding like any other, and treating it differently (as a neutral unknown) creates an ungoverned gap in the same assessment discipline Module 3 already established.
6. Data provenance — the vendor's refusal to disclose training-data composition, caught at signing rather than discovered reactively, would have triggered a remediate-or-hold decision before deployment rather than after.

## 11. Exercise and completion evidence

Complete the [Module 16 Participant Workbook](./exercises/11_Module_06_Participant_Workbook.md) before reading the [Model Answer and Review Guide](./exercises/12_Module_06_Model_Answer_and_Review_Guide.md).

Completion requires:

- an original pre-contract due-diligence record for at least one vendor from the ongoing case;
- a contract-control checklist populated against the six minimum controls;
- a governing-response decision for at least one instance of vendor non-disclosure;
- an ongoing vendor-governance plan (reattestation cadence, audit exercise, sub-processor tracking);
- a written or oral defense.

Publication does not establish learner completion.

## 12. Interview translation

A credible program-lead statement is:

> I can lead the program work that specifies AI-specific vendor due diligence, requires a concrete AI bill of materials rather than a marketing claim, builds a contract-control checklist covering change disclosure, data use, incidents, audit rights, sub-processors, and exit, and treats vendor non-disclosure as a governed risk finding rather than an accepted unknown. Legal and procurement specialists negotiate and enforce the actual contract terms.

This builds on program disciplines of vendor management, contract governance, and risk-based due diligence. It does not claim to personally negotiate a legal contract or perform a technical supply-chain security audit.

## 13. Primary sources

- [NIST AI Risk Management Framework 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf), reused from earlier modules — MANAGE 3 (managing risks and benefits from third-party entities) directly informs this module's due-diligence and ongoing-governance framing.
- [NIST Special Publication 800-161 Revision 1 — Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations](https://csrc.nist.gov/pubs/sp/800/161/r1/final) — final publication, November 2024, applicable to any organization (not only federal agencies) that acquires, develops, or operates technology systems and services. Informs this module's general supply-chain risk-management framing; it is a cybersecurity supply-chain standard, not an AI-specific one, and this module does not claim conformance to its detailed practices.
- [CISA and G7 partners — Software Bill of Materials for AI: Minimum Elements](https://www.cisa.gov/resources-tools/resources/software-bill-materials-ai-minimum-elements) — joint guidance released 2026 organizing AI-specific supply-chain documentation (metadata, model identity and weight provenance, dataset properties, key performance indicators, infrastructure, and update-cadence records). Cited as a real, concrete illustration of what a checkable AI bill of materials contains; this module does not require conformance to its exact structure.
- [OMB Memorandum M-25-22 — Driving Efficient Acquisition of Artificial Intelligence in Government](https://static.carahsoft.com/concrete/files/6317/4412/5796/Guidance_M-25-22_Driving_Efficient_Acquisition_of_Artificial_Intelligence_in_Government.pdf) (issued April 3, 2025; replaces the rescinded M-24-18) — illustrative federal-sector context only, cited specifically for its contract-requirement pattern (data-use restrictions, IP/data ownership protections, vendor lock-in protections, mandatory AI disclosure provisions) informing this module's contract-control checklist. Not applicable as a compliance requirement to this curriculum's general audience.

Source status was checked through independent web search on 2026-09-18; direct publisher-page fetch was unavailable during this session due to network egress restrictions in the authoring environment, consistent with the limitation already recorded for Modules 1 through 5. Verify current versions and organizational applicability before production or public-sector use.
