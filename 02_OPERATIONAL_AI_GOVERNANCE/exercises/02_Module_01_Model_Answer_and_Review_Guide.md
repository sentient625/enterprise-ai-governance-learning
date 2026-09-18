# Module 11 Model Answer and Review Guide — Enterprise AI Inventory and Ownership

This is a model answer for calibration, not a substitute for your own completed [participant workbook](./01_Module_01_Participant_Workbook.md). A strong response will differ in wording and may reasonably differ in some judgment calls; what matters is whether the reasoning holds up under challenge.

## Part 1 — Inventory schema: what a blank field costs later

- **Identification:** Without it, no one can confirm which system a later risk or incident finding actually refers to.
- **Purpose:** Without it, risk classification has nothing to classify against — the same technical system can be low- or high-consequence depending on what it is used for.
- **Population and data:** Without it, privacy, fairness, and data-rights exposure cannot be assessed at all.
- **Ownership:** Without it, a classification or incident has no one accountable to respond.
- **Human role:** Without it, an approval-design review (as in Module 6) cannot even begin.
- **Acquisition path:** Without it, the organization does not know who controls the next version change.
- **Dependency:** Without it, a change elsewhere (a data source, a shared platform) can silently change this use case's behavior with no warning.
- **Lifecycle state:** Without it, a use case that should have been retired keeps being treated as live, or a live one is mistakenly ignored as closed.
- **Evidence:** Without it, "approved" cannot be distinguished from "no one has checked."
- **Record quality:** Without it, the whole inventory's reliability is unknowable, and false confidence becomes likely.

## Part 2 — Populated case (illustrative)

| Field group | ORION | Sales drafting | Benefits recommendation | Analytics pilot | Three lists |
|---|---|---|---|---|---|
| Identification | Known, documented elsewhere | Known only informally | Known informally | Known informally | Unknown which is authoritative |
| Purpose | Known | Known (customer proposal drafting) | Partially known (eligibility recommendation) | Known but stale | Unknown per-entry |
| Population/data | Known via Module 9 record | Unknown — customer data exposure unassessed | Unknown — employee benefits data, likely sensitive | Known — live customer data | Unknown |
| Ownership | Known via Module 9 | Unknown | Unknown (vendor manages model; enterprise has not accepted) | Unknown — pilot sponsor likely gone | Unknown — no steward |
| Human role | Known via Module 9 | Unknown | Unknown | Unknown | Unknown |
| Acquisition path | In-house/managed agent | Consumer tool, unofficial | Vendor feature update | In-house pilot | Mixed |
| Dependency | Known via Module 9 | Unknown | Vendor-controlled | Unknown | Unknown |
| Lifecycle state | Active, governed | Active, unregistered | Active, unregistered | Should be closed; still running | Unknown per-entry |
| Evidence | Exists via Module 9 | None | None | Stale or absent | Unknown |
| Record quality | High | Low | Low | Low | Low — internally conflicting |

The pattern to notice: ORION is the only entry with real evidence, precisely because it already went through Module 9's governance track. Everything else is "unknown" far more often than it is "known" — that is the accurate state of an inventory that has just started reconciliation, not a sign the exercise was done incorrectly.

## Part 3 — Ownership assignment (illustrative)

- **ORION:** Owners already exist per Module 9; the only gap is that the enterprise inventory does not yet cross-reference that record. Low urgency, easy fix.
- **Sales proposal drafting:** No accountable owner exists. Interim step: the sales leader whose team is using the tool becomes the accountable business owner by default until formally accepted or reassigned, specifically because leaving it ownerless while customer data exposure is unassessed is not acceptable.
- **Benefits eligibility recommendation:** No enterprise owner has accepted this vendor-added feature. The benefits/HR platform owner becomes the interim accountable business owner. Acceptable to leave running only if a rapid data-handling and appeal-path review is scheduled immediately; not acceptable to leave open-ended given the sensitivity of eligibility decisions.
- **Analytics pilot:** The original sponsor has likely moved on. This is a Module 9 lifecycle failure applied at enterprise scale: reopen a lifecycle decision now rather than waiting for the inventory project's own reconciliation cadence, because live customer data is already in use without an accountable owner.
- **Three disagreeing lists:** Assign a record steward immediately; this is a structural gap, not a per-use-case gap, and it will keep generating new ownerless entries until resolved.

## Part 4 — Detection plan (illustrative)

**Shadow AI:** Cross-check SaaS/network access logs and expense reports for known consumer AI tool domains and billing categories; separately, ask business units directly on a defined cadence rather than relying on the absence of complaints. Each source can miss the case: access logs miss browser-based or personal-device use outside monitored networks; expense reports miss free-tier or personally-paid use; direct asking depends on the business unit recognizing that its tool use counts as "AI" at all.

**Embedded vendor AI:** Require a standing review of vendor release notes and renewal/contract terms for AI-feature additions; separately, require new and renewing AI-relevant contracts to include an AI-feature disclosure term going forward. Each source can miss the case: release notes may not flag an AI feature clearly; a disclosure term only covers contracts signed or renewed after it is adopted, leaving a gap for anything mid-term.

## Part 5 — Reconciliation cadence (illustrative)

Tie cadence to how fast each source actually changes, not a single calendar default: business-unit attestation on a quarterly cycle (business use changes slowly enough that more frequent attestation mostly adds fatigue); procurement/contract review triggered at every new or renewing AI-relevant contract (event-driven, not calendar-driven); access/telemetry cross-check monthly (technical use can change faster than business attestation would catch); an immediate out-of-cycle review whenever an industry incident or a new regulatory requirement makes a category of use newly material.

## Part 6 — Linking to Module 9

The enterprise inventory entry for ORION should contain only what is needed to place it correctly in the enterprise-wide list: its use-case name, its business purpose, top-level ownership, and a reference link to the Module 9 lifecycle record. It should not duplicate ORION's full authority envelope, approval design, or evidence specification — those live in, and are maintained by, the Module 9 record, and duplicating them creates two sources of truth that can drift apart. The enterprise inventory's job is to make sure ORION is not invisible in the enterprise-wide view and that a person looking at the whole AI portfolio can find its detailed governance record; Module 9's job is to actually govern ORION's operation.

## Part 7 — Executive summary (illustrative, ~180 words)

The enterprise AI inventory effort has confirmed one fully governed use case (ORION, already tracked under the agent-lifecycle program) and surfaced four others with real or partial gaps: unregistered consumer-tool use in sales drafting with unassessed customer-data exposure, an unreviewed vendor-added eligibility-recommendation feature touching sensitive benefits data, a customer-service analytics pilot that never received a closeout decision and still runs against live customer data, and three business-unit AI lists that disagree with each other and with the corporate asset register. None of the four gap use cases currently has an accepted accountable owner. Immediate requests: (1) authority to assign interim business owners to the four gap use cases within two weeks; (2) a data-handling review of the sales and benefits use cases before any decision to continue, restrict, or replace them; (3) a designated record steward to reconcile the three conflicting lists into one authoritative registry; (4) confirmation that the analytics pilot's lifecycle decision will be reopened rather than left running by default. The inventory is not yet complete; this is the first reconciliation pass.

## Part 8 — Defense (review guidance)

A strong defense on "leave it running until the review is done" distinguishes cases by actual exposure: the analytics pilot and benefits-recommendation cases involve live, sensitive data with no current owner, which argues against simply waiting; a lower-exposure case might tolerate a short, explicitly time-boxed continuation while review proceeds. A strong defense on an unresolved unknown names the specific missing evidence (for example, "we do not yet know what customer data the consumer drafting tool retains or transmits") and what would resolve it (a vendor data-handling disclosure, or a technical review of the tool's actual data flows) — not a vague "more investigation is needed."

## Review observations for facilitators or self-review

A response that scores well:

- treats "unknown" as a legitimate, explicitly labeled answer rather than filling gaps with assumptions;
- assigns an interim owner rather than leaving a use case ownerless while resolution is pending;
- keeps the enterprise inventory and the Module 9 lifecycle record distinct but linked;
- ties reconciliation cadence to a reason, not a default calendar choice;
- does not claim the inventory is complete.

A response that needs revision:

- invents ownership, data handling, or approval facts the case does not support;
- merges the enterprise inventory with ORION's detailed lifecycle record instead of cross-referencing it;
- treats the exercise as complete once every row has some entry, rather than checking whether "unknown" rows have an assigned next action.

## Completion and professional translation

This model answer is not a learner-created portfolio artifact. Completion requires the learner's own original workbook responses and a defense addressing at least one challenge from this guide. Update the Progress Record only after that evidence exists.
