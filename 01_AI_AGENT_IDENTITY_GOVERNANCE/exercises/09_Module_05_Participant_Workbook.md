# Module 5 Participant Workbook — Tool and Downstream-Authority Matrix

**Module:** Agent Chains, Tools, Memory, and Context  
**Status:** Accepted exercise template  
**Case:** Fictional ORION maintenance agent — log-analysis delegation  
**Recommended effort:** 60–90 minutes

Complete this workbook before reading the model answer. The exercise tests judgment, not recall. Do not place real credentials, secrets, system names, account identifiers, or confidential architecture in this public artifact.

## Scenario

Continuing the ORION case from Module 4, the enterprise now proposes:

- ORION may delegate a "review these logs and recommend a fix" subtask to a specialist agent.
- The specialist authenticates with its own service identity but holds a broad, standing "log-reader" entitlement reaching every application's logs, not only the one ORION was asked about.
- The specialist returns its recommendation, including any command text it generates, to ORION as plain text.
- ORION may execute a recommended command through the Module 4 automation tool if the command "looks reasonable," without a person reviewing the specialist's reasoning.
- ORION may additionally query an internal tool registry at run time and use any tool the registry returns, without a separate approval step.
- The target system records the automation tool's identity for any resulting action, not ORION's or the specialist's.

The sponsor says:

> ORION and the specialist are both authenticated, both have their own identities, and both use real entitlements. This is just ORION using another agent as a resource — the same as calling any other tool.

## Part 1 — Map the chain

Complete the table for every hop the request can take, from ORION's original delegation through to the final target action.

| Hop | Calling agent | Tool or downstream agent | Documented business purpose | Actual permission/entitlement |
|---|---|---|---|---|
| 1 |  |  |  |  |
| 2 |  |  |  |  |
| 3 |  |  |  |  |

## Part 2 — Authority and attribution

For each hop above, answer:

| Hop | Authority relative to caller (narrower/equal/broader) | What does the target actually record? | Trust of the triggering input (trusted instruction / untrusted content) | Independent check before high-consequence use |
|---|---|---|---|---|
| 1 |  |  |  |  |
| 2 |  |  |  |  |
| 3 |  |  |  |  |

Then answer:

1. Where does the sponsor's claim ("this is just ORION using another agent as a resource") break down?
2. Which hop shows authority that is broader than it should be?
3. Where does attribution collapse into a shared or generic identity?
4. Is there a point where untrusted content (the specialist's recommendation) is treated as a trusted instruction? Where?

## Part 3 — Identify the confused-deputy or authority-laundering path

Name the specific path in this design where a properly authenticated, properly entitled agent could be caused to act outside its principal's intent.

> 

State what makes this a confused-deputy or authority-laundering pattern rather than a straightforward credential or entitlement failure.

> 

## Part 4 — Dynamic tool discovery

The design lets ORION query a tool registry at run time and use whatever it returns, with no separate approval step.

1. What changes about the governance problem compared to a fixed, reviewed tool set?
2. What must the design show before dynamic discovery is acceptable, if it is kept at all?
3. If you had to choose between removing dynamic discovery and adding a gate before use, which would you require here, and why?

> 

## Part 5 — Fix the design

For each weakness you identified, state the specific governing fix. Do not simply write "add review" — state what must be true.

| Weakness | Governing fix | Who owns the fix |
|---|---|---|
| Specialist's standing log-reader entitlement |  |  |
| Specialist's recommendation treated as trusted instruction |  |  |
| Dynamic tool discovery with no gate |  |  |
| Attribution collapsing to the automation tool identity |  |  |

## Part 6 — Recommendation

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

## Part 7 — Defense

Prepare a five-minute defense answering:

1. Why doesn't authenticating both ORION and the specialist separately resolve the governing problem?
2. What is the difference between the specialist's entitlement and the specialist's authority for this specific request?
3. Where exactly does untrusted content become a trusted instruction in this design, and why is that the highest-priority fix?
4. What would you require to see before allowing dynamic tool discovery back into the design?
5. What remains a residual risk even after every fix in Part 5 is implemented?
6. What new fact would change your recommendation?

## Completion record

- Workbook completed: Yes / No
- Defense completed: Yes / No
- Reviewer or self-review date:
- Artifact location:
- Feedback incorporated:
- Remaining uncertainty:

Do not update the Progress Record until an original completed artifact and defensible explanation exist.
