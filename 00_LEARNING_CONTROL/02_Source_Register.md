# Source Register

**Last reviewed:** 2026-09-17

This register records the small primary source set used by the active learning priority. Status labels matter: draft material and project pages must not be described as final requirements.

| ID | Source | Publisher | Status at review | Primary use |
|---|---|---|---|---|
| SRC-001 | [AI Agent Standards Initiative](https://www.nist.gov/artificial-intelligence/ai-agent-standards-initiative) | NIST | Initiative page; created 2026-02-17, updated 2026-08-14 | Standards, protocols, authentication, identity research |
| SRC-002 | [Software and AI Agent Identity and Authorization](https://www.nccoe.nist.gov/projects/software-and-ai-agent-identity-and-authorization) | NCCoE / NIST | Project page; reviewing comments | Enterprise identity and authorization use cases |
| SRC-003 | [Why Agentic AI Needs a Strong Identity Foundation](https://www.nist.gov/blogs/cybersecurity-insights/back-future-why-agentic-ai-needs-strong-identity-foundation) | NIST | Blog guidance dated 2026-08-27 | Credential sharing, tokens, scope, local agents, HITL |
| SRC-004 | [NIST IR 8596 Initial Preliminary Draft](https://nvlpubs.nist.gov/nistpubs/ir/2025/NIST.IR.8596.iprd.pdf) | NIST | Initial preliminary draft, December 2025 | CSF AI profile; identity, privilege, execution, response |
| SRC-005 | [Agentic AI Security Initiative](https://genai.owasp.org/initiatives/agentic-security-initiative/) | OWASP GenAI Security Project | Active initiative | Agentic threats and controls |
| SRC-006 | [Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/) | OWASP GenAI Security Project | Published resource dated 2025-12-09 | Threat orientation |
| SRC-007 | [RFC 6749 — OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc6749) | IETF | RFC; updated by later specifications | Delegated authorization vocabulary |
| SRC-008 | [RFC 9700 — OAuth 2.0 Security Best Current Practice](https://datatracker.ietf.org/doc/html/rfc9700) | IETF | Best Current Practice | OAuth security posture |
| SRC-009 | [SPIFFE standards](https://spiffe.io/docs/latest/spiffe-specs/) | SPIFFE project | Living standards set | Workload identity vocabulary |
| SRC-010 | [NIST SP 800-63-4 — Digital Identity Guidelines](https://pages.nist.gov/800-63-4/sp800-63.html) | NIST | Final publication, July 2025; supersedes SP 800-63-3 | Authentication, assurance, federation, and relying-party concepts; human-subject scope noted |
| SRC-011 | [OpenID Connect Core 1.0 incorporating errata set 2](https://openid.net/specs/openid-connect-core-1_0.html) | OpenID Foundation | Final specification | Authentication identity layer used to distinguish OIDC from OAuth authorization |
| SRC-012 | [RFC 8707 — Resource Indicators for OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc8707) | IETF | Standards Track RFC | Target-resource and audience restriction concepts |
| SRC-013 | [RFC 8693 — OAuth 2.0 Token Exchange](https://datatracker.ietf.org/doc/html/rfc8693) | IETF | Standards Track RFC | Token exchange, delegation, impersonation, subject, and actor relationships |
| SRC-014 | [RFC 8705 — OAuth 2.0 Mutual-TLS Client Authentication and Certificate-Bound Access Tokens](https://datatracker.ietf.org/doc/html/rfc8705) | IETF | Standards Track RFC | Sender-constrained token category using mutual TLS and certificate binding |
| SRC-015 | [RFC 9449 — OAuth 2.0 Demonstrating Proof of Possession](https://datatracker.ietf.org/doc/html/rfc9449) | IETF | Standards Track RFC | Sender-constrained token category using DPoP |
| SRC-016 | [OAuth 2.1 Authorization Framework](https://datatracker.ietf.org/doc/draft-ietf-oauth-v2-1/) | IETF OAuth Working Group | Active Internet-Draft version 16, updated 2026-09-02; work in progress | Emerging-version status context only; not used as a final normative source |
| SRC-017 | [NIST SP 800-53 Rev. 5, Update 1](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) | NIST | Final Special Publication; published 2020, updated 2021 | Access control, separation of duties, least privilege, authenticator management, audit, and control vocabulary |
| SRC-018 | [NIST SP 800-207 — Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final) | NIST | Final Special Publication, August 2020 | Resource-focused access; explicit authentication and authorization |
| SRC-019 | [NIST SP 800-82 Rev. 3 — Guide to Operational Technology Security](https://csrc.nist.gov/pubs/sp/800/82/r3/final) | NIST | Final Special Publication, September 2023 | OT performance, reliability, safety, security, and environment context |
| SRC-020 | [NIST IR 8587 — Protecting Tokens and Assertions from Forgery, Theft, and Misuse](https://csrc.nist.gov/pubs/ir/8587/final) | NIST | Final Interagency Report, September 2026 | Token and assertion protection, key management, verification, lifecycle controls, and monitoring |

## Internal conceptual sources

The active module applies the Funded Belief, Evidence Locker, and accountable-authority concepts from *Forensic Capital Governance*. The accepted books remain separately governed. This repository may apply those concepts but must not silently revise their controlled meanings.

## Maintenance rule

Before using a source for a production-facing recommendation, verify:

- Current version and status.
- Whether it is normative, informative, draft, commentary, or implementation guidance.
- Publication date and superseding material.
- Applicability to the actual sector, jurisdiction, system, and risk.
- Required qualified interpretation.
