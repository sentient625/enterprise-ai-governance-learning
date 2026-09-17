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

It does not certify learner competence, prescribe an agent-framework, tool-registry, or orchestration-platform implementation, approve production architecture, or provide a security-testing methodology or compliance determination.

## Intended audience

- Senior program and portfolio leaders.
- IAM/PAM and cybersecurity program managers.
- AI governance, risk, compliance, audit, and assurance professionals.
- Enterprise architects and control owners seeking shared governance language.
- Leaders responsible for regulated or high-consequence agent adoption, including multi-agent and multi-tool designs.

## Learning claim

The package develops program-level fluency sufficient to:

- Distinguish a tool's technical capability from its governed authority.
- Recognize the confused-deputy pattern in an agent-and-tool or agent-and-agent relationship.
- Require that authority narrow, not expand, across an agent-to-agent delegation chain.
- Identify context and memory as an attack surface distinct from identity or credential compromise.
- Evaluate whether dynamic tool discovery is acceptable and what must gate it.
- Require a tool-and-downstream-authority matrix before a multi-tool or multi-agent design is approved.
- Preserve qualified technical, security, and engineering boundaries.

## Source-status review

| Source | Status verified 2026-09-17 | Release treatment |
|---|---|---|
| OWASP Agentic Security Initiative | Active initiative | Used for agentic threat and control orientation, tool and multi-agent risk framing |
| OWASP Top 10 for Agentic Applications 2026 | Published resource dated 2025-12-09 | Used for tool-authority, context, and delegation-chain threat categories |
| NIST: Why Agentic AI Needs a Strong Identity Foundation | NIST guidance dated 2026-08-27 | Used as informative agent-specific context; not treated as a standard |
| NCCoE Software and AI Agent Identity and Authorization | Project page; reviewing comments (independently re-checked 2026-09-17 per Source Register verification log) | Used for access-delegation and attribution focus areas |
| RFC 8693 — OAuth 2.0 Token Exchange | Standards Track RFC | Used for delegation-versus-impersonation vocabulary applied to chain preservation |

The confused-deputy pattern itself is treated as a foundational access-control concept predating agentic AI and is not attributed to any single source above; it is applied here to agent-and-tool relationships rather than presented as new research.

## Publication review

| Review dimension | Result |
|---|---|
| Tool capability versus authority distinction | Passed |
| Confused-deputy pattern treatment | Passed |
| Agent-to-agent delegation and narrowing | Passed |
| Authority-laundering treatment | Passed |
| Context and memory as attack surface | Passed |
| Dynamic tool discovery treatment | Passed |
| Tool-and-downstream-authority matrix exercise | Passed |
| Attribution and evidence continuity across chains | Passed |
| Executive/program-lead positioning | Passed |
| Implementation, security-testing, and compliance boundaries | Explicit |
| Fictional scenario and confidentiality | Passed |
| Participant work separated from model answer | Passed |
| License and attribution | CC BY 4.0 |
| Internal navigation | Passed when merged with package |

## Known limitations

- The module is technology- and framework-neutral and intentionally omits tool-registry, orchestration-platform, and protocol-specific configuration guidance.
- The confused-deputy and authority-laundering treatment is conceptual and program-level; it is not a substitute for a qualified security team's threat modeling or red-team testing of a specific design.
- The ORION delegation case is fictional and simplified; it addresses one delegation chain, not the full range of multi-agent topologies.
- Context and memory risk is described at the governance-decision level; specific technical mitigations (input sanitization, structural separation of trusted and untrusted content, sandboxing) remain the responsibility of qualified engineering and security specialists.
- Source status and applicability must be rechecked before revision or production-facing use, particularly for the NCCoE project, whose status was active and evolving at review time.

## Release decision

Module 5 version 1.0 is accepted for public learning use when this record and its linked package are merged into `main`.

Publication does not establish learner completion. The Progress Record must remain unchanged until an original workbook and defense exist.

## Maintenance triggers

Review Module 5 when:

- OWASP's Agentic Security Initiative or Top 10 for Agentic Applications materially updates its threat categories.
- The NCCoE project publishes a draft project description or practice guide materially changing its current access-delegation and attribution treatment.
- Agent-to-agent or tool-registry standards (for example, standardized tool-discovery protocols) establish materially different governance models.
- Reader feedback identifies technical, usability, attribution, confidentiality, or safety concerns.
- The module expands into implementation, product, sector-specific, or compliance claims.
- A commercial or facilitated derivative is proposed.
