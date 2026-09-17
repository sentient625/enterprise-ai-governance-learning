# Facilitator Guide — Modules 1–5 (AI-Agent Identity, Security, and Governance)

**Status:** Drafting — first conversion of accepted self-study content into a group-facilitation format. This guide has not yet passed the Training Products gate described in [06_TRAINING_PRODUCTS/README.md](./README.md) and should not be represented as a finished workshop product until it has.  
**Derived from:** Modules 1–4 (accepted, version 1.0) and Module 5 (accepted, version 1.0) of [01_AI_AGENT_IDENTITY_GOVERNANCE](../01_AI_AGENT_IDENTITY_GOVERNANCE/00_Module_Overview.md).  
**License:** CC BY 4.0, consistent with the underlying modules.

## What this guide is and is not

This guide sequences the existing, already-reviewed module content for a live, facilitated session. It does not introduce new technical claims. Where this guide gives timing, group-size, or delivery advice, that advice is the facilitator's judgment call, not a reviewed instructional-design claim, and should be adapted to the actual audience.

It is not a certification program, a scored assessment with pass/fail consequence, or a substitute for each participant completing their own workbook and defense as described in each module.

## Audience and prerequisites

Intended for the same audience as the underlying modules: program and portfolio leaders, IAM/PAM and cybersecurity managers, GRC and risk professionals, architects, and control owners. No AI-engineering background is assumed or required. A facilitator should be comfortable with the material at the level of "lead the discussion and defend the positioning boundary," not "answer implementation questions from first principles" — qualified technical specialists should be available to the group for questions genuinely outside program-level governance.

## Format options

| Format | Coverage | Notes |
|---|---|---|
| Single half-day session | Modules 1–2 | Suitable as an introduction; do not attempt all five modules in one half-day session — the exercises need real thinking time, not a scripted walkthrough |
| Two half-day sessions | Modules 1–3, then 4–5 | Recommended default for a first cohort |
| Five 90-minute sessions | One module per session | Recommended when participants complete workbooks between sessions rather than during them |
| Self-study with facilitated defense | All modules read independently; facilitator runs only the defense/discussion portion | Lowest facilitator time cost; requires participants to be self-motivated to complete workbooks beforehand |

The timing below assumes the "one module per session" format, 90 minutes per module, with the workbook completed independently before the session (not during it) and the session itself used for discussion, challenge, and defense.

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

**Governing question to open with:** "Both agents are authenticated and both have real entitlements — isn't that enough?"

**Best scenario for live group work:** The ORION delegation case (Section 8); this module benefits from being run immediately after Module 4 in the same extended session or the next session, since it continues the same fictional agent and case familiarity carries over.

**Discussion prompts:**

- Ask the group to state, in one sentence, why this is not a credential-theft problem. Groups that cannot articulate this distinction have not yet grasped the confused-deputy pattern and should revisit Module 5, Section 3 before the report-out.
- Ask: "Where in our own environment might an agent's next action already be shaped by content it merely reads — a ticket, a document, a search result — rather than by an instruction someone deliberately gave it?" Keep this abstract/hypothetical; do not let the discussion turn into naming a specific live vulnerability in a group setting.

**Facilitator watch-for:** This is the most conceptually demanding module in the sequence. Groups may want to jump to "just don't let it auto-execute" as a complete answer; push them to the tool-and-downstream-authority matrix to show the fix has to be structural (bounded entitlements, independent checks, attribution) rather than a single control.

## Cross-module capstone option (after Module 5)

For cohorts completing all five modules together, consider a single combined session (90–120 minutes) using the ORION case end to end: identity and ownership (Module 1), the SSO/authority challenge (Module 2), the token and delegation trace (Module 3), the bounded privileged-access envelope (Module 4), and the tool-and-agent-chain matrix (Module 5), culminating in one program-lead recommendation memo the group defends together. This is a facilitator-designed extension, not a reviewed module artifact, and should be built from the five modules' own fictional case material rather than introducing new scenario facts.

## What this guide does not provide

- A scored, certifying assessment. Use each module's own rubric (where one exists, as in Modules 4 and 5) for self- or peer-calibration, not for pass/fail determinations with employment or compliance consequences.
- Slide decks. None exist yet in this repository; a facilitator delivering from this guide should build minimal visual aids from the module text directly rather than waiting on a future slide product.
- Facilitator certification or train-the-trainer material. This guide assumes the facilitator has personally completed all five modules' workbooks and defenses before facilitating them for others.

## Maintenance

Update this guide when any of Modules 1–5 materially changes, or when the Content Build Register's Training Products gate review (per [06_TRAINING_PRODUCTS/README.md](./README.md)) identifies accuracy, attribution, licensing, audience-level, or unsupported-claim issues. This guide's own status line should be updated from "Drafting" to "Accepted" only after that gate review occurs — the same discipline the underlying modules apply to their own release records.
