# Module 5 Public-Release Record

**Release ID:** P1-M05-R1  
**Module:** Agent Chains, Tools, Memory, and Context  
**Version:** 1.0  
**Review date:** 2026-09-17  
**Decision:** Accepted for public learning use  
**License:** CC BY 4.0  
**Repository visibility at acceptance:** Public

## Release scope

This decision applies to:

1. Module 5 lesson.
2. Module 5 participant workbook.
3. Module 5 model answer and review guide.
4. Module 5 source and terminology additions.
5. Module overview, Content Build Register, and public README descriptions.

It does not certify learner competence, prescribe an agent framework or MCP implementation, approve production architecture, or provide a model-security, compliance, privacy, safety, or regulatory determination.

## Intended audience

- Senior program and portfolio leaders.
- IAM/PAM, cybersecurity, and AI-governance program managers.
- Risk, compliance, audit, privacy, and assurance professionals.
- Enterprise architects and control owners seeking shared governance language.
- Leaders responsible for regulated or high-consequence agent adoption.

## Learning claim

The package develops program-level fluency sufficient to:

- Map principals, agents, workloads, tools, credentials, targets, tasks, context, and memory.
- Separate tool capability and technical permission from business authority.
- Identify authority expansion, subdelegation, and confused-deputy risk.
- Classify tools by access, environment, state, reversibility, consequence, autonomy, evidence, and interruption.
- Treat dynamic discovery and tool changes as governed authority events.
- Distinguish trusted instruction from untrusted retrieved content.
- Frame direct and indirect prompt injection as part of a broader consequence-control problem.
- Govern durable memory through provenance, write control, scope, expiry, correction, deletion, quarantine, and recovery.
- Require chain-level evidence, cancellation, and restoration.

## Source-status review

| Source | Status verified 2026-09-17 | Release treatment |
|---|---|---|
| NIST tool-use lessons | Informative NIST workshop output, released 2025-08-05 and updated 2025-08-07 | Used for multidimensional tool classification; not treated as a final standard |
| NIST AI 600-1 | Final NIST AI publication, July 2024 | Used for generative-AI risk, information-integrity, provenance, testing, and monitoring context |
| OWASP Top 10 for Agentic Applications 2026 | Published community guidance dated 2025-12-09 | Used for agentic threat orientation; not treated as a government or consensus standard |
| MCP specification 2026-07-28 | Current published protocol revision at review | Used to ground tool/resource connectivity and current protocol context; not treated as a universal enterprise control framework |
| MCP authorization security considerations 2026-07-28 | Normative security requirements within the current MCP specification | Used for audience validation, confused-deputy, privilege restriction, and token-passthrough examples |

## Publication review

| Review dimension | Result |
|---|---|
| Complete agent-chain treatment | Passed |
| Capability versus authority distinction | Passed |
| Tool classification and catalog governance | Passed |
| Dynamic discovery and material-change treatment | Passed |
| Agent-to-agent delegation and attenuation | Passed |
| Confused-deputy treatment | Passed |
| Context provenance and trust classification | Passed |
| Direct and indirect prompt-injection treatment | Passed |
| Working versus durable memory | Passed |
| Memory poisoning and recovery | Passed |
| Meaningful human decision | Passed |
| Downstream evidence and correlation | Passed |
| Task, queue, session, and memory containment | Passed |
| Executive/program-lead positioning | Passed |
| Technical, privacy, safety, and professional boundaries | Explicit |
| Fictional scenario and confidentiality | Passed |
| Participant work separated from model answer | Passed |
| License and attribution | CC BY 4.0 |
| Internal navigation | Passed when merged with package |

## Known limitations

- Agent, tool, memory, and protocol designs evolve rapidly.
- The module is architecture- and vendor-neutral and intentionally omits implementation guidance.
- MCP is one tool-connectivity protocol; the governance model is not limited to MCP.
- Prompt injection cannot be reduced to one filter or one test.
- Tool descriptions, schemas, model output, and agent messages may be inaccurate or adversarial.
- “Reversible,” “read-only,” “trusted,” and “memory” depend on system and business context.
- The ORION case is fictional and simplified.
- Production use requires qualified AI security, cybersecurity, IAM, architecture, privacy, records, legal, operational, safety, engineering, and sector-specific review.
- Source status and applicability must be rechecked before revision or production-facing use.

## Release decision

Module 5 version 1.0 is accepted for public learning use when this record and its linked package are merged into `main`.

Publication does not establish learner completion. The Progress Record must remain unchanged until an original chain map, matrix, response plan, and defense exist.

## Maintenance triggers

Review Module 5 when:

- Included NIST, OWASP, or MCP sources are superseded or materially updated.
- Agent interoperability or tool protocols establish materially different identity or authorization models.
- New evidence changes current treatment of prompt injection, tool misuse, memory poisoning, or agent delegation.
- Reader feedback identifies technical, usability, attribution, confidentiality, privacy, or safety concerns.
- The module expands into implementation, product, sector-specific, or compliance claims.
- A commercial or facilitated derivative is proposed.
