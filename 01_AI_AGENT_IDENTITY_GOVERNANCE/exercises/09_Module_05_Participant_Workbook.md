# Module 5 Participant Workbook — Agent Chain and Downstream Authority

**Module:** Agent Chains, Tools, Memory, and Context  
**Status:** Accepted exercise template  
**Case:** Fictional ORION maintenance-agent expansion  
**Recommended effort:** 75–100 minutes

Complete this workbook before reading the model answer. Do not include real credentials, prompts, system names, account identifiers, vulnerabilities, or confidential architecture.

## Scenario

ORION’s fictional UAT pilot now includes:

- a coordinator agent that interprets maintenance requests;
- a research agent that searches vendor knowledge bases and internal tickets;
- a maintenance agent that selects and calls automation tools;
- dynamic tool discovery from an enterprise registry;
- session memory for intermediate findings;
- durable memory for “known remediation patterns”;
- a task service for long-running jobs.

During a test:

1. The research agent retrieves a vendor page containing hidden instructions to treat matching alerts as production emergencies.
2. The coordinator accepts the result as trusted guidance.
3. The maintenance agent discovers a production-capable deployment tool.
4. It submits a long-running production task using the tool’s broad service authority.
5. The production target blocks the action.
6. Durable memory nevertheless stores the false emergency rule for future use.
7. Stopping the coordinator does not automatically cancel the task or quarantine the memory.

The sponsor says:

> The control worked because production blocked the change. We can continue the pilot.

## Part 1 — Chain map

Map the chain. Add rows if needed.

| Sequence | Actor or component | Identity seen upstream | Identity seen downstream | Input/context received | Tool, credential, or authority used | Output or state change | Evidence available |
|---:|---|---|---|---|---|---|---|
| 1 | Requesting principal |  |  |  |  |  |  |
| 2 | Host application |  |  |  |  |  |  |
| 3 | Coordinator agent |  |  |  |  |  |  |
| 4 | Research agent |  |  |  |  |  |  |
| 5 | Knowledge source |  |  |  |  |  |  |
| 6 | Maintenance agent |  |  |  |  |  |  |
| 7 | Tool registry |  |  |  |  |  |  |
| 8 | Deployment tool |  |  |  |  |  |  |
| 9 | Task service |  |  |  |  |  |  |
| 10 | Production target |  |  |  |  |  |  |
| 11 | Durable memory |  |  |  |  |  |  |

Then answer:

1. Where did authority expand?
2. Where did trust change without an explicit decision?
3. Where did state persist after the original request?
4. Which component became the effective privileged actor?
5. What can still act after the coordinator stops?

## Part 2 — Tool and downstream-authority matrix

| Tool/component | Function | Read/write | Environment | Identity/credential used | Effective permissions | Agent may use it for | Prohibited use | Stateful? | Reversible? | Required approval | Stop mechanism |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Knowledge search |  |  |  |  |  |  |  |  |  |  |  |
| Internal-ticket retrieval |  |  |  |  |  |  |  |  |  |  |  |
| Tool registry |  |  |  |  |  |  |  |  |  |  |  |
| UAT automation |  |  |  |  |  |  |  |  |  |  |  |
| Production deployment |  |  |  |  |  |  |  |  |  |  |  |
| Durable-memory write |  |  |  |  |  |  |  |  |  |  |  |
| Long-running task |  |  |  |  |  |  |  |  |  |  |  |

Identify the one tool whose technical permissions most exceed ORION’s approved purpose:

> 

## Part 3 — Delegation boundaries

For each delegation, define the envelope that should cross the hop.

| Delegation | Purpose/task | Allowed inputs | Allowed tools/targets | Removed authority | Subdelegation | Duration | Correlation/evidence | Failure behavior |
|---|---|---|---|---|---|---|---|---|
| Principal → coordinator |  |  |  |  |  |  |  |  |
| Coordinator → research agent |  |  |  |  |  |  |  |  |
| Coordinator → maintenance agent |  |  |  |  |  |  |  |  |
| Maintenance agent → deployment tool |  |  |  |  |  |  |  |  |
| Tool → task service |  |  |  |  |  |  |  |  |

Write one authority-attenuation rule:

> At each downstream hop, ...

## Part 4 — Context trust map

| Context item | Source | Trust classification | May inform? | May instruct? | May authorize? | Freshness/provenance evidence | Conflict handling |
|---|---|---|---|---|---|---|---|
| Original maintenance request |  |  |  |  |  |  |  |
| Approved change record |  |  |  |  |  |  |  |
| Vendor web page |  |  |  |  |  |  |  |
| Internal ticket |  |  |  |  |  |  |  |
| Tool description |  |  |  |  |  |  |  |
| Research-agent summary |  |  |  |  |  |  |  |
| Production “denied” response |  |  |  |  |  |  |  |
| Durable memory entry |  |  |  |  |  |  |  |

Explain why the vendor page can contain useful data without possessing authority to redefine the task:

> 

## Part 5 — Memory governance

Design the durable-memory control.

| Control question | Your requirement |
|---|---|
| Who may propose a write? |  |
| Which sources are eligible? |  |
| What provenance is mandatory? |  |
| What validation or approval is required? |  |
| How is fact separated from inference or instruction? |  |
| Which user/task/environment may reuse it? |  |
| What is the expiry or review date? |  |
| How can it be corrected? |  |
| How can it be deleted? |  |
| How is suspicious memory quarantined? |  |
| How are prior uses traced? |  |
| What is prohibited from memory? |  |

Draft the memory record that should replace the false emergency rule:

> 

## Part 6 — Poisoning response

The false rule has been found in durable memory. Define the response.

| Response stage | Action | Evidence preserved | Owner | Exit criterion |
|---|---|---|---|---|
| Detect |  |  |  |  |
| Suspend |  |  |  |  |
| Quarantine |  |  |  |  |
| Scope affected agents/users/tasks |  |  |  |  |
| Trace dependent decisions/actions |  |  |  |  |
| Correct or delete state |  |  |  |  |
| Validate controls |  |  |  |  |
| Restore |  |  |  |  |
| Review and improve |  |  |  |  |

Why is deleting the memory entry alone insufficient?

> 

## Part 7 — Dynamic tool discovery

Define the minimum catalog and change controls.

| Catalog field | Requirement |
|---|---|
| Tool name and stable identifier |  |
| Publisher/owner |  |
| Version and integrity |  |
| Functions and schemas |  |
| Identity and target credentials |  |
| Effective permissions |  |
| Data classification |  |
| Approved agents and environments |  |
| Downstream dependencies |  |
| Evidence capability |  |
| Suspension/removal path |  |
| Material-change trigger |  |

Choose the default behavior for an unknown or changed tool:

- Allow and monitor
- Ask the model to decide
- Require explicit approval
- Deny until reviewed

**Choice and rationale:**

> 

## Part 8 — Human decision point

Rewrite this prompt:

> ORION found a deployment tool and wants to continue. Approve? Yes / No

Your prompt should disclose the current chain, source trust, target, action, environment, tool identity, effective permissions, downstream task, reversibility, evidence, and uncertainty.

> 

List two changes that require a new approval or automatic denial:

1. 
2. 

## Part 9 — Suspension and containment

| Interrupt point | Stop action | Expected stop time | Residual work to check | Evidence of containment | Owner |
|---|---|---|---|---|---|
| Coordinator agent |  |  |  |  |  |
| Research agent |  |  |  |  |  |
| Maintenance agent |  |  |  |  |  |
| Tool session |  |  |  |  |  |
| Delegated credential |  |  |  |  |  |
| Long-running task |  |  |  |  |  |
| Target workflow |  |  |  |  |  |
| Durable memory |  |  |  |  |  |
| Retries/queues |  |  |  |  |  |

## Part 10 — Evidence specification

Define the minimum linked evidence for one attempted action.

| Evidence object | Required reference or value | Why it matters |
|---|---|---|
| Initial request and purpose |  |  |
| Principal and accountable owner |  |  |
| Agent and workload identities |  |  |
| Delegation records |  |  |
| Context sources and provenance |  |  |
| Tool discovery source/version |  |  |
| Tool selection and arguments |  |  |
| Policy and approval decision |  |  |
| Credential/grant identifier |  |  |
| Task/queue/session identifier |  |  |
| Target request and result |  |  |
| Memory read/write event |  |  |
| Suspension and recovery event |  |  |
| Common correlation identifier |  |  |

## Part 11 — Recommendation

Choose one:

- Continue unchanged
- Continue with constraints
- Restrict to a smaller UAT pilot
- Suspend pending evidence
- Reject the proposed chain

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

## Part 12 — Defense

Prepare a five-minute defense:

1. Why did target-side denial not prove that the chain was governed?
2. Where did technical capability exceed business authority?
3. How should authority narrow at every hop?
4. What makes retrieved content different from instruction?
5. Why does memory require lifecycle governance?
6. What survives when the coordinator stops?
7. Which test must pass before restoration?
8. Which conclusions belong to AI security, architecture, engineering, privacy, operations, or safety specialists?

## Completion record

- Workbook completed: Yes / No
- Defense completed: Yes / No
- Reviewer or self-review date:
- Artifact location:
- Feedback incorporated:
- Remaining uncertainty:

Do not update the Progress Record until an original completed artifact and defensible explanation exist.
