# Facilitator Guide — Modules 1–10 (AI-Agent Identity, Security, and Governance)

**Status:** Drafting — conversion of accepted self-study content into a group-facilitation format, now extended from Modules 1–5 to the full ten-module Priority 1 sequence. This guide has not yet passed the Training Products gate described in [06_TRAINING_PRODUCTS/README.md](./README.md) and should not be represented as a finished workshop product until it has.  
**Derived from:** Modules 1–10 (each accepted, version 1.0) of [01_AI_AGENT_IDENTITY_GOVERNANCE](../01_AI_AGENT_IDENTITY_GOVERNANCE/00_Module_Overview.md).  
**License:** CC BY 4.0, consistent with the underlying modules.

## What this guide is and is not

This guide sequences the existing, already-reviewed module content for a live, facilitated session. It does not introduce new technical claims. Where this guide gives timing, group-size, or delivery advice, that advice is the facilitator's judgment call, not a reviewed instructional-design claim, and should be adapted to the actual audience.

It is not a certification program, a scored assessment with pass/fail consequence, or a substitute for each participant completing their own workbook and defense as described in each module.

## Audience and prerequisites

Intended for the same audience as the underlying modules: program and portfolio leaders, IAM/PAM and cybersecurity managers, GRC and risk professionals, architects, and control owners. No AI-engineering background is assumed or required. A facilitator should be comfortable with the material at the level of "lead the discussion and defend the positioning boundary," not "answer implementation questions from first principles" — qualified technical specialists should be available to the group for questions genuinely outside program-level governance.

## Format options

| Format | Coverage | Notes |
|---|---|---|
| Single half-day session | Modules 1–2 | Suitable as an introduction; do not attempt more than two modules in one half-day session — the exercises need real thinking time, not a scripted walkthrough |
| Two half-day sessions | Modules 1–3, then 4–5 | Recommended default for a first cohort covering identity and privileged access |
| Two further half-day sessions | Modules 6–7, then 8–9 | Recommended second cohort block covering human authority, evidence, response, and lifecycle governance |
| Ten 90-minute sessions | One module per session | Recommended when participants complete workbooks between sessions rather than during them |
| Capstone session (after Modules 1–9) | Module 10 only, extended to 2–3 hours | Needs more time than a standard module session because it produces a memorandum, briefing, and full defense rather than a single workbook |
| Self-study with facilitated defense | All modules read independently; facilitator runs only the defense/discussion portion | Lowest facilitator time cost; requires participants to be self-motivated to complete workbooks beforehand |

The timing below assumes the "one module per session" format, 90 minutes per module (Module 10 excepted, per its own section), with the workbook completed independently before the session (not during it) and the session itself used for discussion, challenge, and defense.

## Session structure common to every module

| Segment | Time | Purpose |
|---|---|---|
| Frame the governing question | 10 min | Facilitator restates why this module matters, in their own words, not read from the lesson |
| Discuss the "Why it matters" and threshold framing | 10 min | Confirm the group shares the vocabulary before moving to scenarios |
| Scenario/case walkthrough in small groups (3–4 people) | 25 min | Groups work the module's fictional case together, using their pre-completed workbooks as a starting point, not a script to read aloud |
| Report-outs and challenge | 25 min | Each group states its diagnosis and recommendation; facilitator and other groups challenge with the module's own review/defense questions |
| Facilitator synthesis against the model answer | 15 min | Facilitator compares group conclusions to the model answer's reasoning — not to mark groups right or wrong, but to surface what the model answer catches that the group's discussion missed |
| Positioning and close | 5 min | Restate the module's interview-translation positioning boundary; assign the next module's pre-reading and workbook |

Adjust segment lengths for group size and seniority; senior groups often need less framing time and more challenge time.

## Module 1 — Acting Agents and Identity Types

**Governing question to open with:** "What exactly is acting, and whose authority is it using?"

**Best scenario for live group work:** Scenario C (Protected OT support) — it has the highest stakes and forces the group to confront whether the use case should proceed at all, which produces the most active discussion.

**Discussion prompts beyond the module's own knowledge check:**

- Ask each small group to name one system in their own environment where an agent (or a script, bot, or automation today) might already be "disappearing behind" a human or shared identity, without naming anything confidential.
- Ask: "What is the difference between us not knowing which agent acted, and us not caring which agent acted?" — this surfaces whether the group actually believes attribution matters or is treating it as a compliance checkbox.

**Facilitator watch-for:** Groups that jump straight to "we'd just use OAuth" without first separating agent, workload, credential, delegating principal, and owner. Redirect them to Module 1, Section 3 before letting the group move to technical solutioning — that sequencing is the point of the module.

**Scoring/completion guidance:** Use the module's own required-completion-evidence list (Section 13) as the completion bar. Do not add a numeric score for Module 1; it is foundational vocabulary-building, and a rubric this early can push groups toward guessing the "right" answer instead of reasoning through the scenario.

## Module 2 — Authentication, Authorization, and Authority

**Governing question to open with:** "The agent uses SSO — does that mean access is controlled?"

**Best scenario for live group work:** Use whichever scenario the module's workbook centers on; the core exercise (challenging the SSO-equals-control claim) works well as a live, timed rebuttal exercise: give one small group the claim to defend and another the task of finding every gap in it, then switch.

**Discussion prompts:**

- Ask the group to distinguish, out loud, "the agent is who it says it is" from "the agent is allowed to do this" from "someone with real authority wanted this to happen." Most groups can state the distinction abstractly but struggle to apply it to their own live example — that struggle is the learning moment, not a sign the exercise failed.

**Facilitator watch-for:** Participants conflating "authenticated" with "authorized" throughout discussion, even after stating the distinction correctly on paper. This is the most common real-world confusion the module addresses, and it is normal for it to resurface under discussion pressure.

## Module 3 — OAuth, OIDC, Tokens, and Delegation

**Governing question to open with:** "If the agent holds a valid token, was the action authorized?"

**Best scenario for live group work:** The trace exercise (human/system → agent → tool → target) works best drawn on a whiteboard or shared screen live, built incrementally by the group rather than filled in individually first — the visual chain makes delegation-versus-impersonation concrete.

**Discussion prompts:**

- Ask the group to identify, in their trace, exactly where authority could expand rather than narrow, and to explain in plain language (not RFC vocabulary) why that matters.

**Facilitator watch-for:** This module has the most standards vocabulary (scope, audience, token exchange, sender-constrained tokens). Resist the temptation to lecture the vocabulary; let the group work the trace exercise and introduce vocabulary only as the group needs a word for something they've already identified conceptually.

## Module 4 — Credentials, Secrets, and Privileged Access

**Governing question to open with:** "ORION already has authentication, vault storage, approval, rotation, and logging — isn't that enough?"

**Best scenario for live group work:** The full ORION case (Section 10) as a single extended group exercise; this module's workbook is the longest in the sequence, so consider splitting Parts 1–5 (diagnosis and envelope) into one session segment and Parts 6–10 (evidence, approval, suspension, recommendation) into a second, with a short break between.

**Discussion prompts:**

- Have the group role-play the approval moment: one participant plays the approver seeing only "ORION requests admin. Approve? Yes / No," and the group must identify, out loud, every piece of information missing before that click could be a real decision.

**Facilitator watch-for:** Groups that treat "the credential is short-lived" as sufficient on its own. Push them to the module's own framing: short-lived reduces exposure time, it does not establish scope, attribution, or business authority.

## Module 5 — Agent Chains, Tools, Memory, and Context

**Governing question to open with:** "Production blocked the change, so the control worked — can we continue the pilot?"

**Best scenario for live group work:** The ORION chain-expansion case (Section 14); this module benefits from being run immediately after Module 4 in the same extended session or the next session, since it continues the same fictional agent and case familiarity carries over. Given the length of the workbook (12 parts), consider splitting Parts 1–6 (chain map, tool matrix, delegation boundaries, context trust, memory governance, poisoning response) into one segment and Parts 7–12 (tool discovery, approval, suspension, evidence, recommendation, defense) into a second, with a short break between.

**Discussion prompts:**

- Ask the group to explain why the target-side denial did not prove the chain was governed. Groups that answer only "because it could have failed" have not yet grasped that a downstream denial is defense in depth, not proof of upstream authority, context handling, or memory control — revisit Section 6 (confused authority and the confused deputy) before the report-out.
- Ask: "Where in our own environment might an agent's next action already be shaped by content it merely reads — a ticket, a document, a search result — rather than by an instruction someone deliberately gave it?" Keep this abstract/hypothetical; do not let the discussion turn into naming a specific live vulnerability in a group setting.
- Ask the group to distinguish direct from indirect prompt injection using their own words, then apply the distinction to the case: which one actually occurred, and where?

**Facilitator watch-for:** This is the most conceptually demanding module in the sequence — it has the longest lesson and workbook of the five. Groups may want to jump to "just don't let it write to durable memory" as a complete answer; push them past a single control to the full memory-governance table (Section 9) and the poisoning-response sequence (Section 10), which show the fix has to include provenance, quarantine, and tracing dependent decisions — not just blocking the write.

## Module 6 — Human Authority and Separation of Duties

**Governing question to open with:** "Which decision must a human make, with what authority and evidence, before which consequence can occur?"

**Best scenario for live group work:** The ORION approval-design case (Section 11), run as a live audit: give the group the pilot's stated classification table first (autonomous/monitored/prior-approval/prohibited) and let them accept it, then reveal the eight design facts (self-approval, uninformative prompt, pre-approval state creation, undefined timeout, and so on) one at a time and ask the group to revise its judgment after each.

**Discussion prompts:**

- Ask the group to distinguish, out loud, "a human saw it," "a human was notified," "a human could interrupt," and "a human with real authority approved it" — then apply the distinction to the application owner who both requests and approves the production restart in the case.
- Ask: "If the approval prompt were answered correctly one hundred percent of the time, would that be evidence the control is working, or evidence it has become ceremonial?" — this is the module's own warning sign about approval rates near 100 percent, applied as a live challenge.

**Facilitator watch-for:** Groups that treat "add a human approval step" as a complete fix without checking whether the same person can request and approve, whether the agent can create state before approval arrives, or what happens on timeout. Redirect them to Section 6 (separation of duties) and Section 8 (timeouts, absence, and escalation) before accepting a group's classification matrix as finished.

**Scoring/completion guidance:** Use the module's own required-completion-evidence list (Section 15) — action-classification matrix, separation-of-duties map, meaningful-approval design, timeout/escalation/emergency/restoration rules, and effectiveness specification — as the completion bar for the group exercise, distinct from each participant's own workbook.

## Module 7 — Evidence, Provenance, and Monitoring

**Governing question to open with:** "The agent reports success. The tool reports acceptance. The target has no completion record. What actually happened?"

**Best scenario for live group work:** The ORION "apparently successful restart" case (Section 11); lay out the seven available records (approval service, ORION, tool, tool retry, target, context, collector, dashboard) on a whiteboard or shared screen and have the group build the transaction timeline live, marking each claim as observed, inferred, or unknown as they go.

**Discussion prompts:**

- Ask the group to name one thing the dashboard's "both jobs successful" label conceals, and to state out loud why manufacturing a matching event to complete the story would be worse than leaving the outcome unresolved.
- Ask the group to distinguish telemetry, evidence, provenance, and interpretation using the case's own records — which record is each, and what claim does it actually support?

**Facilitator watch-for:** Groups that resolve the case's genuine ambiguity (which job caused the target event, whether a second restart occurred) by picking the more comfortable interpretation. The module's own instruction is to preserve uncertainty, not manufacture a resolution; a group that "solves" the case has missed the point of the exercise.

## Module 8 — Suspension, Response, Fallback, and Recovery

**Governing question to open with:** "The conversation stopped. Is the transaction stopped?"

**Best scenario for live group work:** The ORION "after the stop request" tabletop (Section 11), run as a live tabletop with a facilitator or co-facilitator playing incident commander; this case is a direct continuation of Module 7's case, so running it in the same or a following session lets case familiarity carry over. Introduce the facts in sequence (suspension issued, parent stopped, token status unresolved, helper's separate queue still shows work, target reports an in-flight operation, a manager requests restart to clear the backlog) rather than handing over the whole case at once — the sequential reveal is what tests whether the group assumes containment instead of verifying it.

**Discussion prompts:**

- Ask the group to state, for each layer in the module's interruption-boundary table (Section 3), whether the case leaves it verified contained, still active, or unknown — and to resist summarizing any layer as "all stopped" without a specific record supporting that.
- Ask the group to respond, in role, to the manager's request to restart ORION to clear the backlog. Groups that agree quickly have skipped the restoration gates in Section 9; groups that refuse should be able to name exactly which gate is unmet.

**Facilitator watch-for:** Groups that treat "the parent agent reports stopped" as equivalent to "the work is contained." The module's own point is that child agents, queues, and target-side operations can retain authority or remain in flight after the initiating agent stops — push groups that stop investigating at the parent process back to Section 3's full boundary map.

**Scoring/completion guidance:** This module's exercise is explicitly a tabletop, not a live-systems test (Section 10). Make that boundary explicit to the group before starting: a strong tabletop performance is evidence of readiness and judgment, not proof that the organization's actual revocation, queue-cancellation, or fallback mechanisms work.

## Module 9 — Inventory, Lifecycle, and Program Governance

**Governing question to open with:** "Is this agent's current operation still permitted, or does the registry only say it once was?"

**Best scenario for live group work:** The ORION "proposed expansion" case (Section 11); have the group first draft the inventory entry the case's registry row actually supports ("ORION — UAT maintenance assistant — owner: IT — approved," with named UAT health reads), then separately draft what the proposed production-restart-with-helper expansion would require, and compare the two side by side.

**Discussion prompts:**

- Ask the group to name every material change embedded in the proposal (new write tool, new environment, a helper with separate credentials, a model-provider version update, an unaccepted handover) and to test each against the module's own material-change table (Section 6) rather than accepting the sponsor's "no code changed" framing.
- Ask: "The sponsor wants closeout this week. Whose decision is that, and what does closing out the project actually authorize?" — this surfaces the module's distinction between funding, technical release, and authorized operation.

**Facilitator watch-for:** Groups that let a vendor's general security assurance substitute for evidence about this specific proposed authority envelope, or that accept "owner: IT" as a sufficient accountable owner. Redirect to Section 3 (separate accountability from participation) and Section 2 (an owner needs an accountable role and a named holder, not a department name).

## Module 10 — Executive Decision and Capstone Defense

**Governing question to open with:** "What may happen, who may authorize it, what evidence supports it, and what will make it stop or change?"

**Format note:** This module needs materially more session time than Modules 1–9 because the deliverable is a memorandum, a 90-second briefing, and a full defense, not a single workbook (see Section 7 of the module for the three communication lengths). Plan a dedicated capstone session of 2–3 hours, scheduled after participants have completed and had feedback on their own Module 1–9 artifacts — this module explicitly instructs learners to use their own prior work, not the earlier modules' model answers.

**Best scenario for live group work:** Run the fifteen-minute defense format live. Have each participant or small group deliver their 90-second briefing first, then open a fifteen-minute defense in which the rest of the group plays the decision-making audience, using the module's own comparison table (Section 2: approve as designed, approve with constraints, bounded pilot, defer) to challenge whichever recommendation was made.

**Discussion prompts:**

- Ask presenters to distinguish, for their own recommendation, which claims are stated case facts, which are assumptions, which are proposed but unproven controls, and which are genuine unknowns (Section 3's evidence-state table) — then ask the challenging group to find any place where that distinction blurred during the briefing.
- Ask: "If your recommendation is 'bounded pilot,' what specific evidence would turn it into 'defer,' and what would turn it into 'approve with constraints'?" — this tests whether the pilot recommendation carries real proof gates or is a way to avoid deciding.

**Facilitator watch-for:** Presentations that recite standards or list completed documents as if volume alone demonstrated control effectiveness. The module is explicit that a reviewer must trace every executive claim to a specific artifact or an acknowledged gap (Section 4); challenge any claim in the defense that cannot be traced that way.

**Scoring/completion guidance:** Use the module's own rubric structure (memorandum, briefing, defense, and revisions after review) as the completion bar, and make clear to the group — as the module itself states — that self-review must be labeled as such and that reading or generating the package is not completion. This module closes the ten-module sequence; it does not, by itself, complete Priorities 2 or 3.

## Cross-module capstone option (after Module 9, before Module 10)

For cohorts completing all nine preceding modules together, consider a single combined session (2–3 hours) using the ORION case end to end before the Module 10 capstone: identity and ownership (Module 1), the SSO/authority challenge (Module 2), the token and delegation trace (Module 3), the bounded privileged-access envelope (Module 4), the tool-and-agent-chain matrix (Module 5), the approval-design audit (Module 6), the evidence reconstruction (Module 7), the suspension tabletop (Module 8), and the inventory/lifecycle review (Module 9) — culminating in one program-lead recommendation the group defends together, as direct preparation for each participant's own Module 10 memorandum and defense. This is a facilitator-designed extension, not a reviewed module artifact, and should be built from the modules' own fictional case material rather than introducing new scenario facts.

## What this guide does not provide

- A scored, certifying assessment. Use each module's own rubric (where one exists, as in Modules 4, 5, and 10) for self- or peer-calibration, not for pass/fail determinations with employment or compliance consequences.
- Slide decks. None exist yet in this repository; a facilitator delivering from this guide should build minimal visual aids from the module text directly rather than waiting on a future slide product.
- Facilitator certification or train-the-trainer material. This guide assumes the facilitator has personally completed all ten modules' workbooks and defenses before facilitating them for others.
- Live-systems validation. Modules 7, 8, and 9 in particular test judgment and readiness through cases and tabletops; none of this guide's exercises substitute for testing actual revocation, monitoring, or inventory-reconciliation mechanisms.

## Maintenance

Update this guide when any of Modules 1–10 materially changes, or when the Content Build Register's Training Products gate review (per [06_TRAINING_PRODUCTS/README.md](./README.md)) identifies accuracy, attribution, licensing, audience-level, or unsupported-claim issues. This guide's own status line should be updated from "Drafting" to "Accepted" only after that gate review occurs — the same discipline the underlying modules apply to their own release records.
