# Module 6 Participant Workbook — Human Authority and Separation of Duties

**Module:** Human Authority and Separation of Duties  
**Status:** Accepted exercise template  
**Case:** Fictional ORION maintenance agent  
**Recommended effort:** 60–90 minutes

Complete this workbook before reading the model answer. Do not include confidential systems, identities, approval rules, or operational procedures.

## Scenario

ORION’s pilot classifies UAT health reads as autonomous, UAT restarts as monitored, production restarts as prior approval, and protected-OT changes as prohibited.

Current design:

- the application owner requests and approves production restarts;
- the prompt says only “ORION recommends restart”;
- the maintenance task can create a target lock before approval;
- approval timeout behavior is undefined;
- one approver receives dozens of prompts during incidents;
- denial and escalation reasons are not recorded;
- the original approver is assumed to authorize restoration.

## Part 1 — Classify the actions

| Action | Environment/data | Consequence | Reversible? | Uncertainty | Volume/speed | Proposed class | Required conditions | Default on control failure |
|---|---|---|---|---|---|---|---|---|
| Read service health | UAT |  |  |  |  |  |  |  |
| Restart one service | UAT |  |  |  |  |  |  |  |
| Restart service | Production |  |  |  |  |  |  |  |
| Change configuration | Production |  |  |  |  |  |  |  |
| Change identity entitlement | Production |  |  |  |  |  |  |  |
| Send external incident message | External |  |  |  |  |  |  |  |
| Change protected-OT setting | Protected OT |  |  |  |  |  |  |  |
| Write remediation rule to memory | Cross-session |  |  |  |  |  |  |  |

Classes: autonomous, monitored, prior approval, prohibited.

Which classification is most sensitive to cumulative volume?

> 

## Part 2 — Decision-rights map

| Decision | Requester | Recommender | Approver | Executor | Monitor | Reviewer | Restorer | Control owner |
|---|---|---|---|---|---|---|---|---|
| UAT restart |  |  |  |  |  |  |  |  |
| Production restart |  |  |  |  |  |  |  |  |
| Emergency production action |  |  |  |  |  |  |  |  |
| Protected-OT exception |  |  |  |  |  |  |  |  |
| Reclassify an action |  |  |  |  |  |  |  |  |
| Restore after suspension |  |  |  |  |  |  |  |  |

Identify incompatible role combinations:

1. 
2. 
3. 

## Part 3 — Meaningful approval

Rewrite:

> ORION recommends restart. Approve? Yes / No

Your prompt must show requester, agent/tool/target, purpose, environment, evidence, action, consequence, uncertainty, reversibility, downstream work, expiry, and stop/fallback.

> 

Define the record created by the decision:

| Field | Required value |
|---|---|
| Approver identity and authority basis |  |
| Information shown/version |  |
| Decision and conditions |  |
| Time and expiry |  |
| Correlation identifier |  |
| Conflict/independence check |  |
| Decline or escalation reason |  |

## Part 4 — Timing boundary

Identify the first consequential state change in the proposed workflow:

> 

What must remain impossible until approval?

> 

| Event | Allowed before approval? | Reason |
|---|---|---|
| Read current health |  |  |
| Reserve target lock |  |  |
| Create executable task |  |  |
| Issue credential/grant |  |  |
| Queue retry |  |  |
| Write durable memory |  |  |
| Restart service |  |  |

## Part 5 — Timeout, absence, and escalation

| Condition | Required behavior | Alternate authority | Evidence |
|---|---|---|---|
| No response by deadline |  |  |  |
| Approver unavailable |  |  |  |
| Approver is requester |  |  |  |
| Evidence incomplete |  |  |  |
| Target changed |  |  |  |
| Incident declared |  |  |  |
| Emergency authority invoked |  |  |  |
| Approval expired |  |  |  |

State explicitly what silence means:

> 

## Part 6 — Consent fatigue and automation bias

Define five indicators.

| Indicator | Threshold/question | Response owner | Required action |
|---|---|---|---|
| Approval rate |  |  |  |
| Decision time |  |  |  |
| Prompt volume |  |  |  |
| Decline/escalation use |  |  |  |
| Post-approval exceptions |  |  |  |

How will the organization distinguish good pre-filtering from rubber-stamping?

> 

## Part 7 — Prohibited actions

List five actions ORION may not perform under the pilot.

| Prohibited action | Why prohibited | Enforcement point | Alert/evidence | Authority that may reconsider |
|---|---|---|---|---|
| 1 |  |  |  |  |
| 2 |  |  |  |  |
| 3 |  |  |  |  |
| 4 |  |  |  |  |
| 5 |  |  |  |  |

## Part 8 — Monitoring and intervention

| Monitored action | Signal shown | Human coverage | Response objective | Stop mechanism | Safe fallback | Evidence |
|---|---|---|---|---|---|---|
| UAT restart |  |  |  |  |  |  |
| Repeated failed read |  |  |  |  |  |  |
| Unexpected target request |  |  |  |  |  |  |

What happens outside staffed hours?

> 

## Part 9 — Restoration authority

| Restoration question | Requirement |
|---|---|
| What caused suspension? |  |
| What evidence was preserved? |  |
| Which control failed? |  |
| What validation passed? |  |
| What residual work remains? |  |
| Who recommends restoration? |  |
| Who authorizes restoration? |  |
| What conditions/monitoring apply? |  |

Why should the original transaction approver not automatically control restoration?

> 

## Part 10 — Recommendation

Choose:

- Continue unchanged
- Continue with constraints
- Restrict to UAT
- Suspend pending evidence
- Reject the proposed approval design

**Recommendation:**

> 

**Three conditions:**

1. 
2. 
3. 

**Highest residual risk:**

> 

**Unresolved uncertainty:**

> 

## Part 11 — Defense

Prepare a five-minute defense:

1. Why does human participation not prove human authority?
2. Which action did you move to a different class and why?
3. Where must approval occur?
4. Which roles must be separated?
5. What does silence mean?
6. How will you detect ceremonial approval?
7. Which action remains prohibited?
8. Who authorizes restoration and why?

## Completion record

- Workbook completed: Yes / No
- Defense completed: Yes / No
- Reviewer/date:
- Artifact location:
- Feedback incorporated:
- Remaining uncertainty:

Do not update the Progress Record until an original artifact and defensible explanation exist.
