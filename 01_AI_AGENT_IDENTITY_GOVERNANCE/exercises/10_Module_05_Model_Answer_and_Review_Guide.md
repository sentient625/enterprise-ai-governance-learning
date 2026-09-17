# Module 5 Model Answer and Review Guide

**Module:** Agent Chains, Tools, Memory, and Context  
**Status:** Accepted review guide  
**Use:** Read only after completing the participant workbook

This is a strong-response example, not a universal architecture. Qualified teams must adapt decisions to the enterprise, target technology, threat model, sector, safety context, law, and operating environment.

## 1. Strong diagnosis

The sponsor's framing treats the specialist agent as "just another tool," which hides the actual governance problem: the specialist is a second decision-making actor whose output ORION will treat as an instruction, not as data to independently evaluate.

- Both agents being authenticated with real entitlements is true and does not by itself bound authority to the specific request — this is the same "identity is necessary but insufficient" lesson from Module 1, Section 4, now applied across a chain.
- The specialist's standing, enterprise-wide log-reader entitlement is broader than ORION's specific request requires — a violation of the narrowing principle in Module 5, Section 4.
- ORION executing a command because it "looks reasonable" converts the specialist's output into a trusted instruction with no independent check — the confused-deputy and untrusted-context pattern from Sections 3 and 5.
- Dynamic tool discovery means the design that was reviewed and the design actually running can diverge without a corresponding review.
- Attribution collapsing to the automation tool's identity repeats Module 1's Failure 6 at the multi-agent layer.

## 2. Example chain map

| Hop | Calling agent | Tool or downstream agent | Documented purpose | Actual permission |
|---|---|---|---|---|
| 1 | ORION | Specialist agent | Review logs for one named application and recommend a fix | Specialist can read logs for every application enterprise-wide |
| 2 | Specialist agent | (returns recommendation to ORION as plain text) | Provide a diagnostic finding for ORION's request | No enforced scoping of what the recommendation may contain or direct |
| 3 | ORION | Automation tool | Execute a fix consistent with the original maintenance purpose | Automation tool has broader rights than ORION's documented use case (carried over from Module 4) |

## 3. Example authority and attribution table

| Hop | Authority relative to caller | Target records | Trust of triggering input | Independent check |
|---|---|---|---|---|
| 1 | Broader — specialist's standing grant exceeds ORION's specific request | Specialist's own service identity for log reads, but scope is not bound to ORION's task | Trusted (ORION's own delegation) | None required at this hop for read access, but the *grant itself* is not task-bound |
| 2 | N/A — this hop is a content handoff, not an access grant | No target; this is agent-to-agent | The specialist's recommendation is, by content, untrusted with respect to ORION's principal — it was produced by reasoning over log content the specialist merely read | None — this is the critical gap |
| 3 | Equal to or broader than ORION's own — automation tool's excess rights apply | Automation tool identity only | Treated as trusted by ORION ("looks reasonable") though it originated from Hop 2's untrusted content | None — "looks reasonable" is not an independent check |

### Answers

1. The sponsor's claim breaks down at Hop 2: calling the specialist "a resource, same as any other tool" ignores that the specialist's *output* becomes ORION's next instruction, not a data value ORION evaluates against its own policy. A database query tool returns data; this design lets the specialist's output drive execution.
2. Hop 1: the specialist's standing, enterprise-wide entitlement is broader than the single-application scope ORION's request requires.
3. At Hop 3, the target records only the automation tool's identity — ORION's and the specialist's roles in producing the action are lost.
4. Between Hop 2 and Hop 3: the specialist's recommendation, which is untrusted content relative to ORION's principal, is executed because it "looks reasonable," with no independent check.

## 4. Example confused-deputy / authority-laundering path

> ORION cannot itself read logs outside its own application scope and cannot independently determine what command to run. By delegating to the specialist and then executing whatever the specialist recommends, ORION effectively gains the specialist's broader log access and decision authority without either being bounded to ORION's original, narrower purpose. If the specialist's recommendation is influenced by manipulated log content or a manipulated ticket, ORION — properly authenticated, properly entitled — executes an action its principal never approved.

This is a confused-deputy and authority-laundering pattern, not a credential or entitlement failure, because no credential was stolen and no entitlement was technically exceeded: ORION used exactly the access it was granted (execute a "reasonable-looking" command through the automation tool), and the specialist used exactly the access it was granted (read logs). The failure is that the combination routes broader, unreviewed authority to ORION's task through a second agent that never evaluated whether the request fit its own approved purpose.

## 5. Example answers — dynamic tool discovery

1. A fixed, reviewed tool set can be evaluated once, as a unit, against ORION's documented purpose. Dynamic discovery means the reachable tool set — and therefore the risk surface — can change after that review without triggering a new one. The design running in production can diverge silently from the design that was approved.
2. Before dynamic discovery is acceptable, the design must show: an allow-list or policy gate between "tool discovered" and "tool invoked with live authority"; provenance information sufficient to attribute a discovered tool's use back to ORION and its principal; and an owner responsible for reviewing newly discoverable tools on an ongoing basis, not only at initial design.
3. For this scenario, add a gate rather than remove discovery outright only if the business case for dynamic discovery is demonstrated and the gate can be shown to work under denied-action testing (Module 4, Section 7); otherwise, remove dynamic discovery for the pilot and revisit once the gate is validated. Either answer is defensible if the reasoning connects to evidence rather than convenience.

## 6. Example fixes

| Weakness | Governing fix | Owner |
|---|---|---|
| Specialist's standing log-reader entitlement | Replace with a task-bound grant scoped to the single application named in ORION's request, issued per delegation and expiring with the subtask | IAM/PAM, specialist's technical owner |
| Specialist's recommendation treated as trusted instruction | Require ORION to evaluate the specialist's recommendation as untrusted input against ORION's own bounded authority envelope (Module 4, Section 5) before execution — same independent check any other untrusted-content-triggered action requires | Architecture, security, ORION's accountable owner |
| Dynamic tool discovery with no gate | Add an allow-list or policy check between discovery and invocation; alternatively remove dynamic discovery for the pilot | Security, platform engineering |
| Attribution collapsing to the automation tool identity | Preserve a shared correlation identifier from ORION's original request through the specialist's finding to the automation tool's executed action | IAM/PAM, evidence/logging owner |

## 7. Example recommendation

**Recommendation:** Defer pending evidence.

**Conditions:**

1. Bind the specialist's entitlement to the specific application and log scope of each ORION request; demonstrate it cannot reach unrelated applications' logs.
2. Require ORION to evaluate the specialist's recommendation against its own bounded authority envelope before execution, with a defined independent check (policy, allow-list, or human approval) for any high-consequence action — do not accept "looks reasonable" as the standard.
3. Either remove dynamic tool discovery or demonstrate a working gate under denied-action testing before the pilot proceeds.

**Highest residual risk:** A manipulated log entry or ticket could steer the specialist's recommendation, and ORION could execute it as if it were a trusted instruction, even after the entitlement is properly bounded — because bounding the specialist's *access* does not by itself prevent the specialist's *output* from being treated as authoritative.

**Unresolved uncertainty:** The scenario does not describe how the specialist's recommendation is structured, whether it distinguishes fact from suggested action, or what monitoring would catch an anomalous-but-permitted action.

## 8. Review rubric

Score each dimension 0–2.

| Dimension | 0 | 1 | 2 |
|---|---|---|---|
| Tool authority vs. capability | Treats access as sufficient | Notes a gap generally | Distinguishes documented purpose from actual permission for every hop |
| Confused-deputy recognition | Not identified | Identified but not explained | Names the specific path and explains why it is not a credential/entitlement failure |
| Chain narrowing | Not addressed | Notes authority should be limited | Shows where authority is broader than the caller's and what would narrow it |
| Context/memory as attack surface | Not addressed | Notes it generally | Identifies the specific point where untrusted content becomes a trusted instruction |
| Dynamic discovery | Not addressed | Notes risk generally | States the specific gate or removal condition required |
| Attribution | Ignores target recording | Notes attribution loss | Specifies a correlation mechanism across the full chain |
| Recommendation | Unsupported yes/no | Conditions are vague | Decision, gates, residual risk, and uncertainty are explicit |
| Role boundary | Claims technical conclusion | Mentions specialists | Leads governance while assigning qualified technical conclusions appropriately |

**Suggested interpretation:**

- 13–16: strong and defensible.
- 9–12: workable; strengthen the confused-deputy explanation or the narrowing analysis.
- 5–8: partial; the chain and attribution treatment remain weak.
- 0–4: rework before claiming completion.

A score does not by itself establish completion. The learner must explain the reasoning and respond to challenge.

## 9. Defense questions for a reviewer

1. Why doesn't authenticating both ORION and the specialist separately resolve the governing problem?
2. What is the difference between the specialist's entitlement and the specialist's authority for this specific request?
3. Where exactly does untrusted content become a trusted instruction in this design?
4. Why is "looks reasonable" not an independent check?
5. What would you require to see before allowing dynamic tool discovery back into the design?
6. What remains a residual risk even after every fix is implemented?
7. How does this case differ from a straightforward credential-theft scenario?
8. What evidence would cause you to expand the pilot? What fact would cause you to reject it outright?

## 10. Positioning boundary

A defensible claim is:

> I can lead the program that requires authority to narrow across tool and agent chains, requires an independent check before untrusted content can trigger a privileged action, and requires attribution to survive the full chain before a multi-agent design proceeds.

This exercise does not establish that the learner designed a tool registry, engineered prompt-injection defenses, or configured an agent-orchestration platform.
