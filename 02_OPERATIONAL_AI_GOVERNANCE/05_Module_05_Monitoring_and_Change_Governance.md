# Module 15 — Monitoring and Change Governance

**Status:** Accepted for public learning use

**Version:** 1.0

**Guide coverage:** Days 13–15

**Estimated study time:** 60–90 minutes plus exercise

## Purpose

Module 14 produced retest triggers — a new data class, a population expansion, a vendor model-version update — but did not say what an enterprise should actually be watching in production to notice when one of those triggers has occurred, or what should happen when it does. A use case that passed every TEVV test before deployment can still drift, degrade, or be silently changed by a vendor afterward. Without ongoing monitoring, the enterprise finds out about that drift only when someone complains, or not at all.

This module develops the program-level ability to specify an ongoing monitoring plan distinct from the one-time or periodic testing built in Module 14; distinguish a material change requiring a fresh assessment cycle from a routine operational change; require vendors to disclose changes to a model or system the enterprise depends on but does not control; and assign a real decision owner and deadline to every monitoring signal, so that a signal leads to a response rather than sitting in a dashboard.

The monitoring specification, change-governance model, and case below are original educational synthesis. They are not a NIST-, ISO-, or vendor-prescribed monitoring architecture, a certification, or a substitute for a qualified engineering or security monitoring design.

## Learning objectives

A learner should be able to:

- Distinguish ongoing monitoring from the point-in-time or periodic testing built in Module 14.
- Specify a minimum monitoring plan: what signals to track, their definitions, thresholds, owners, and response deadlines.
- Distinguish a leading indicator of weakening control from a confirmed incident, and route each differently.
- Define what counts as a material change requiring a fresh assessment cycle, distinguishing it from routine operation.
- Require vendor and third-party change disclosure as a specific, checkable obligation, and design a fallback for when that disclosure fails.
- Assign a decision owner and deadline to every monitoring signal so that detection leads to a real response.
- Connect monitoring and change governance to the reclassification, retest, and lifecycle-gate work already built in earlier modules without duplicating it.
- Explain the program-lead's monitoring role without claiming to personally design or operate a technical monitoring platform.

## 1. Monitoring is not testing repeated

Module 14's TEVV plan produces a result at a point in time, under conditions the tester controlled. Monitoring observes a live system's actual behavior continuously, under conditions no one controls, including behavior that only emerges after deployment: model drift as real-world data shifts away from training data, a gradual change in an override rate as staff grow more comfortable with a tool, a vendor pushing an unannounced update, or a slow accumulation of individually small effects into a material one.

A use case that passed TEVV on day one can fail in month six without any single dramatic event — only a monitoring plan, not a repeated test, is positioned to notice that kind of drift as it happens rather than long afterward.

## 2. Minimum monitoring specification

Building directly on Module 7's requirement that every signal need a definition, population, threshold, owner, and response deadline — applied here at the use-case and portfolio level rather than the single-transaction level:

| Field | Minimum content | Question it supports |
|---|---|---|
| Signal | The specific metric being tracked — for example, override rate, disparity rate, complaint/appeal rate, latency, or volume | What exactly is being watched? |
| Definition | Precisely how the signal is calculated, including population and time window | Can two people compute this the same way? |
| Baseline | The value observed at deployment or at the last accepted assessment | What counts as "normal" to drift away from? |
| Threshold | The specific value or rate of change that triggers a response, set before monitoring begins | What counts as a problem, decided in advance? |
| Data source | Where the signal is actually measured, and any known gaps in that measurement | Can this signal be trusted, or does it have blind spots? |
| Owner | Who is accountable for reviewing this signal and deciding a response | Who acts if the threshold is crossed? |
| Response deadline | How quickly a response is required once the threshold is crossed | Does detection actually lead to timely action? |
| Escalation | Who is notified if the owner does not act within the deadline | What happens if the first response fails? |

A dashboard showing a metric with no defined threshold, owner, or deadline is telemetry, not monitoring — the same distinction Module 7 drew between telemetry and evidence applies here between telemetry and governance.

## 3. Leading indicators versus confirmed incidents

| Type | Example | Governing response |
|---|---|---|
| Leading indicator | A rising override rate, a growing backlog of unreviewed exceptions, a declining sample-review rate | Investigate; may not yet require suspension, but requires a defined response deadline |
| Confirmed incident | A verified wrongful benefit denial traced to the tool, a confirmed disparate-impact finding, a verified data breach | Route through Module 8's suspension and response discipline immediately |

Treating every leading indicator as an incident causes alarm fatigue and burns the escalation path's credibility; treating a confirmed incident as merely a leading indicator delays a response that should already be underway. Both errors are foreseeable, and both should have a named owner whose job is to make the distinction rather than defaulting to whichever framing is more convenient.

## 4. What counts as a material change

A material change reopens an earlier gate — Module 12's tier, Module 13's assessment, or Module 14's TEVV plan — rather than being absorbed as routine operation. Building on the material-change discipline in Module 9, applied here at the use-case level:

| Change | Governing question |
|---|---|
| Model or provider version update | Has anything relevant to the last assessment's findings changed, even if the enterprise did not request the change? |
| Population or scope expansion | Does the new population differ from what the original impact assessment and TEVV plan covered? |
| Interface or workflow change | Could this change affect a claimed safeguard's actual operation, the way Module 13's interface-driven automation bias did? |
| Volume or usage-pattern growth | Could cumulative effects that were immaterial at the original volume become material now? |
| New data source or integration | Does this introduce a data class or dependency the original assessment did not consider? |
| A confirmed incident elsewhere with the same vendor or model family | Does that incident suggest a risk this use case's own assessment did not anticipate? |

Define a change envelope in advance: a specific, bounded set of changes an owner may make without triggering a full reassessment, and require anything outside it to route back through the relevant gate. "Nothing we changed" is not sufficient when the vendor changed something instead — the obligation to reassess attaches to the change, not to who initiated it.

## 5. Vendor and third-party change disclosure

Module 11 already identified that a model's behavior can depend on a version the vendor controls, not the enterprise. Monitoring and change governance make that risk concrete: an enterprise that only finds out about a vendor's model update by noticing its own metrics drift has no advance warning at all.

Require, as a contract or vendor-management term going forward:

- advance notice of a material model or feature change, with enough detail to assess against the change categories in Section 4;
- a defined channel for reporting a confirmed incident involving the vendor's model or platform, even one that occurred at another customer;
- retained access to the specific model version in use, where feasible, so that a change can be independently confirmed rather than taken on the vendor's word alone.

Where a vendor will not agree to disclosure, or where the enterprise has no realistic way to compel it for an already-signed contract, monitoring must do more work to detect drift as a substitute signal — but a substitute signal is a weaker control than actual disclosure, and that gap should be recorded, not silently absorbed as acceptable.

## 6. Relationship to the rest of the curriculum

- **Module 7** built transaction-level evidence and monitoring; this module builds use-case- and portfolio-level monitoring, watching for drift and change rather than reconstructing a single transaction.
- **Module 8** governs suspension and response once an incident is confirmed; this module's job is to get a confirmed incident to Module 8's process quickly, and to catch a leading indicator before it becomes one.
- **Module 9** and **Module 12** both already define material change and reclassification triggers at the agent-lifecycle and risk-tier level; this module operationalizes watching for those triggers in an already-deployed use case, rather than redefining what a material change is.
- **Module 14** produced retest triggers; this module is where those triggers are actually detected in live operation, closing the loop Module 14 opened.

## 7. Applied case — monitoring the benefits-eligibility recommendation after remediation

Continuing the fictional case from Modules 11 through 14, assume the interface redesign and the fairness evaluation Module 14 called for have been completed, and the use case has moved from Module 13's hold to a constrained continued-operation decision. The monitoring plan going forward should include:

| Signal | Threshold (illustrative) | Owner | Response deadline |
|---|---|---|---|
| Override/rejection rate | Falls outside the range validated during Module 14's claimed-safeguard test | Benefits operations lead | Investigate within five business days; escalate if unresolved within two weeks |
| Appeal-overturn rate | Exceeds the disparity threshold set in Module 14's fairness evaluation | Independent governance/control owner | Immediate investigation; route to Module 8 if a confirmed pattern is found |
| Vendor model-version change | Any change, disclosed or detected | Technology/vendor-management owner | Trigger Section 4's material-change review before the new version processes further live claims |
| Volume | Exceeds the population the original impact assessment covered | Benefits business owner | Trigger reassessment before further expansion |

Six months later, the enterprise's override-rate monitoring shows a sudden shift with no corresponding interface change on the enterprise's side. Investigation reveals the vendor pushed a model update without notice, despite the contract term requiring disclosure that was added after Module 14. The vendor's own release notes, found only after the drift was noticed, confirm the update changed the underlying recommendation model.

### Governing diagnosis

- The monitoring plan worked as designed: it caught the drift before a confirmed incident occurred, even though the disclosure obligation failed.
- The disclosure failure is itself a vendor-management finding, not merely a technical curiosity — the contract term exists precisely because monitoring alone should not be the only signal.
- This is a material change under Section 4, and the use case should return to Module 14's TEVV plan against the new model version before continued reliance, not merely resume operation once the drift is explained.
- The response deadline in the monitoring plan is what turned a detected signal into a scheduled action, rather than a data point someone might eventually notice.

## 8. Executive and program-lead questions

1. For each elevated or high-impact use case, does a monitoring plan exist with defined signals, thresholds, owners, and deadlines, or only a dashboard?
2. Is every signal's threshold set before monitoring begins, or adjusted after seeing what is normal?
3. Are leading indicators and confirmed incidents routed differently, with a named owner deciding which is which?
4. Does the vendor contract require change disclosure, and has that obligation ever actually been tested?
5. What happens when a threshold is crossed and the named owner does not respond within the deadline?
6. Is there a defined change envelope, or does every operational tweak require asking whether it counts as material?
7. When a material change is detected, does it actually trigger Module 14's TEVV plan again, or does operation continue while the review is "scheduled"?

## 9. Knowledge check

1. Why is monitoring not the same as repeating Module 14's TEVV plan?
2. Name the minimum fields a monitoring signal specification should include.
3. Why must a leading indicator and a confirmed incident be routed differently?
4. Give three examples of a material change that does not involve the enterprise changing anything itself.
5. Why is vendor disclosure a weaker substitute when replaced only by monitoring for drift?
6. In the applied case, what specifically turned the detected drift into a scheduled response rather than an unnoticed data point?

### Answer guide

1. TEVV produces a point-in-time result under controlled conditions; monitoring observes continuous, uncontrolled live behavior, including drift that only emerges after deployment.
2. Signal, definition, baseline, threshold, data source, owner, response deadline, escalation.
3. Treating every leading indicator as an incident causes alarm fatigue; treating a confirmed incident as a mere indicator delays a response that should already be underway.
4. Any three of: a vendor model-version update, a confirmed incident elsewhere with the same vendor, population or scope expansion, an interface or workflow change, volume growth, a new data source.
5. Monitoring for drift only detects a change after it has already begun to have an effect; disclosure provides advance notice before that effect occurs.
6. A monitoring plan with a defined threshold, a named owner, and a response deadline, rather than only a dashboard someone might eventually check.

## 10. Exercise and completion evidence

Complete the [Module 15 Participant Workbook](./exercises/09_Module_05_Participant_Workbook.md) before reading the [Model Answer and Review Guide](./exercises/10_Module_05_Model_Answer_and_Review_Guide.md).

Completion requires:

- an original monitoring plan for at least one elevated or high-impact use case from the ongoing case, with signals, thresholds, owners, and deadlines;
- a leading-indicator-versus-incident routing decision for at least one scenario;
- a defined change envelope and at least one material-change trigger;
- a vendor-disclosure requirement and a fallback for when it fails;
- a written or oral defense.

Publication does not establish learner completion.

## 11. Interview translation

A credible program-lead statement is:

> I can lead the program work that specifies ongoing monitoring signals with real thresholds, owners, and response deadlines; distinguishes a leading indicator from a confirmed incident; defines what counts as a material change requiring reassessment; and requires vendor disclosure of changes the enterprise depends on but does not control, with a fallback when that disclosure fails. Engineering and security specialists design and operate the monitoring platform itself.

This builds on program disciplines of operational monitoring, vendor management, and change control. It does not claim to personally design or operate a technical monitoring or observability platform.

## 12. Primary sources

- [NIST AI Risk Management Framework 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf) — the MANAGE function, particularly MANAGE 1 (prioritizing and responding to risks), MANAGE 3 (managing risks and benefits from third-party entities), and MANAGE 4 (risk treatment, response, recovery, and communication plans), informs this module's monitoring-response and vendor-disclosure framing. AI RMF 1.0 remains the published framework while revision work proceeds; MANAGE is a risk-treatment function, not a mandated monitoring architecture.
- [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf), reused from earlier modules — its Detect function informs general continuous-monitoring discipline, and its supplier-facing outcomes (GV.SC) reinforce the third-party disclosure framing.
- [ISO/IEC 42001:2023 — AI management systems](https://www.iso.org/standard/42001), reused from Module 11 — its Clause 9 (monitoring, measurement, analysis, evaluation, internal audit, and management review) and Clause 10 (nonconformity, corrective action, and continual improvement) inform this module's ongoing-monitoring and change-response discipline; a certifiable management-system standard, not a monitoring-platform specification.

Source status was checked through independent web search on 2026-09-18; direct publisher-page fetch was unavailable during this session due to network egress restrictions in the authoring environment, consistent with the limitation already recorded for Modules 11 through 14. Verify current versions and organizational applicability before production use.
