# Module 4 Participant Workbook — Bounded Privileged Authority

**Module:** Credentials, Secrets, and Privileged Access  
**Status:** Accepted exercise template  
**Case:** Fictional ORION maintenance agent  
**Recommended effort:** 60–90 minutes

Complete this workbook before reading the model answer. The exercise tests judgment, not recall. Do not place real credentials, secrets, system names, account identifiers, or confidential architecture in this public artifact.

## Scenario

ORION is a proposed maintenance agent in a fictional regulated enterprise.

- ORION authenticates through a service identity.
- A shared `platform-admin` credential is stored in a team-accessible secret location.
- The credential reaches corporate production, UAT, and a protected OT support zone.
- ORION calls a general automation tool whose permissions exceed the documented use case.
- The credential is rotated annually and after known incidents.
- A human approves “high-risk” actions from a screen that shows only a short action label.
- Stopping ORION does not terminate active tool sessions or queued jobs.
- Target logs identify the shared account; approval, credential use, tool calls, and target actions do not share a common correlation identifier.

The sponsor says:

> ORION already has authentication, vault storage, human approval, rotation, and logging. Give it admin access so the pilot can proceed.

## Part 1 — Separate the control objects

Complete the table.

| Object | What exists in the scenario | What remains unknown | Why the distinction matters |
|---|---|---|---|
| Business purpose |  |  |  |
| Accountable owner |  |  |  |
| Agent identity |  |  |  |
| Runtime/workload identity |  |  |  |
| Credential or secret |  |  |  |
| Entitlement |  |  |  |
| Automation tool identity |  |  |  |
| Target identity/account |  |  |  |
| Human approver |  |  |  |
| Downstream session/job |  |  |  |

## Part 2 — Privilege and exposure map

For each path, identify the consequence, control weakness, and minimum evidence needed.

| Path | Potential consequence | Exposure or control weakness | Minimum evidence |
|---|---|---|---|
| ORION → secret location |  |  |  |
| ORION → automation tool |  |  |  |
| Tool → UAT |  |  |  |
| Tool → corporate production |  |  |  |
| Tool → protected OT support zone |  |  |  |
| Stop request → active session |  |  |  |
| Stop request → queued job |  |  |  |

Then answer:

1. Where does technical access exceed the described business purpose?
2. Where can attribution collapse into a shared identity?
3. What secret material might appear in prompts, memory, logs, or tool results?
4. Which privilege remains standing when no task is approved?
5. Which single exposure would you treat first, and why?

## Part 3 — Convert “admin” into a bounded authority envelope

Draft one paragraph that replaces “give ORION admin access.” It must specify every dimension below.

| Dimension | Your boundary |
|---|---|
| Approved purpose and reference |  |
| Agent, workload, client, tool, and target identity |  |
| Accountable owner |  |
| Permitted actions |  |
| Prohibited actions |  |
| Named resources or resource class |  |
| Environment |  |
| Start, duration, and expiry |  |
| Volume or rate limits |  |
| Delegation limits |  |
| Human authorization |  |
| Evidence and correlation |  |
| Suspension and queue containment |  |
| Recovery and reauthorization |  |

### Your bounded authority statement

> 

## Part 4 — Credential and access decision

Choose a governance pattern for the pilot. This is not a product-selection or configuration exercise.

| Decision | Your requirement | Rationale | Qualified owner |
|---|---|---|---|
| Distinct versus shared target identity |  |  |  |
| Standing versus task-bound entitlement |  |  |  |
| Actor-retrievable versus mediated credential |  |  |  |
| Long-lived versus short-lived credential |  |  |  |
| Environment separation |  |  |  |
| Approval design |  |  |  |
| Emergency access |  |  |  |
| Rotation/revocation trigger |  |  |  |

State one risk that remains even if every preferred pattern is implemented:

> 

## Part 5 — Lifecycle control plan

| Lifecycle stage | Required decision or control | Required evidence | Stop/go owner |
|---|---|---|---|
| Propose and classify |  |  |  |
| Design |  |  |  |
| Approve |  |  |  |
| Provision |  |  |  |
| Validate allowed actions |  |  |  |
| Validate denied actions |  |  |  |
| Operate and monitor |  |  |  |
| Change |  |  |  |
| Suspend and contain |  |  |  |
| Recover and restore |  |  |  |
| Retire |  |  |  |

## Part 6 — Evidence record

Define the record needed to reconstruct one privileged action without storing a secret value.

| Evidence element | Required value or reference | System of record/owner | Retention or access question |
|---|---|---|---|
| Correlation identifier |  |  |  |
| Approved purpose/change |  |  |  |
| Delegating principal |  |  |  |
| Accountable owner |  |  |  |
| Agent/workload/client identity |  |  |  |
| Tool and target identity |  |  |  |
| Entitlement/policy version |  |  |  |
| Credential or grant identifier |  |  |  |
| Issuance and expiry |  |  |  |
| Human approval and information shown |  |  |  |
| Requested action |  |  |  |
| Executed action and target result |  |  |  |
| Revocation/session termination |  |  |  |
| Exception or emergency use |  |  |  |

## Part 7 — Meaningful approval

Rewrite this prompt:

> ORION requests admin. Approve? Yes / No

Your prompt must give the approver enough information to exercise actual authority.

> 

List two conditions that make an action prohibited rather than merely approval-required:

1. 
2. 

## Part 8 — Suspension and recovery test

Describe the expected result of each test.

| Test | Expected result | Evidence | Failure owner |
|---|---|---|---|
| Disable ORION identity |  |  |  |
| Revoke active credential/grant |  |  |  |
| Terminate tool session |  |  |  |
| Cancel queued job |  |  |  |
| Block new target action |  |  |  |
| Preserve evidence |  |  |  |
| Activate safe fallback |  |  |  |
| Restore after investigation |  |  |  |

## Part 9 — Recommendation

Choose one:

- Approve
- Approve with constraints
- Pilot under restricted conditions
- Defer pending evidence
- Reject the proposed use

**Recommendation:**

> 

**Three conditions before the next decision:**

1. 
2. 
3. 

**Highest residual risk:**

> 

**Unresolved uncertainty:**

> 

## Part 10 — Defense

Prepare a five-minute defense answering:

1. Why do authentication, storage, approval, rotation, and logging not make the original proposal sufficient?
2. Which authority-envelope boundary most reduces consequence?
3. What proves the target action belongs to ORION’s approved purpose?
4. What remains after the visible agent is stopped?
5. Who must make the final technical, OT/safety, business, and restoration decisions?
6. What new fact would change your recommendation?

## Completion record

- Workbook completed: Yes / No
- Defense completed: Yes / No
- Reviewer or self-review date:
- Artifact location:
- Feedback incorporated:
- Remaining uncertainty:

Do not update the Progress Record until an original completed artifact and defensible explanation exist.
