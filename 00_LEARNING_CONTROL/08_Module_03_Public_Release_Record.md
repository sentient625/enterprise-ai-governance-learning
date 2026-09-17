# Module 3 Public-Release Record

**Release ID:** P1-M03-R1  
**Module:** OAuth, OIDC, Tokens, and Delegation  
**Version:** 1.0  
**Review date:** 2026-09-17  
**Decision:** Accepted for public learning use  
**License:** CC BY 4.0  
**Repository visibility at acceptance:** Public

## Release scope

This decision applies to:

1. Module 3 lesson.
2. Module 3 participant workbook.
3. Module 3 model answer and review guide.
4. Module 3 primary-source entries.
5. Module overview, Content Build Register, and public README descriptions.

It does not certify learner competence, prescribe an OAuth/OIDC implementation, approve production architecture, or provide a compliance determination.

## Intended audience

- Senior program and portfolio leaders.
- IAM/PAM and cybersecurity program managers.
- AI governance, risk, compliance, audit, and assurance professionals.
- Enterprise architects and control owners seeking shared governance language.
- Leaders responsible for regulated or high-consequence agent adoption.

## Learning claim

The package develops recognition-level fluency sufficient to:

- Distinguish OAuth from OpenID Connect.
- Distinguish access, ID, and refresh tokens.
- Separate the human, agent, workload, OAuth client, tool, and target.
- Challenge audience, resource, scope, lifetime, refresh, and sender-constraint boundaries.
- Trace token exchange and agent-to-agent delegation.
- Require authority to narrow or remain bounded.
- Specify evidence and suspension expectations.

It does not teach protocol configuration.

## Source-status review

| Source | Status verified 2026-09-17 | Release treatment |
|---|---|---|
| RFC 6749 | Standards Track; updated by later RFCs including RFC 9700 | Used for the OAuth authorization framework, roles, and token vocabulary; not treated as complete current security guidance by itself |
| RFC 9700 | Best Current Practice | Used for current OAuth 2.0 security posture |
| OpenID Connect Core 1.0, errata set 2 | Final OpenID specification | Used to distinguish the end-user authentication identity layer and ID token from API authorization |
| RFC 8707 | Standards Track | Used for resource indicators and intended target-resource concepts |
| RFC 8693 | Standards Track | Used for token exchange, delegation, impersonation, subject, and actor concepts |
| RFC 8705 | Standards Track | Used as one sender-constrained-token mechanism through mutual TLS and certificate binding |
| RFC 9449 | Standards Track | Used as one sender-constrained-token mechanism through DPoP |
| SPIFFE ID specification | Current SPIFFE specification | Used for workload-identity vocabulary; not treated as agent or business authority |

## Publication review

| Review dimension | Result |
|---|---|
| OAuth and OIDC distinction | Passed |
| ID, access, and refresh-token distinction | Passed |
| Agent, workload, and client separation | Passed |
| Audience/resource treatment | Passed |
| Scope versus target-entitlement treatment | Passed |
| Lifetime and continuing-authority treatment | Passed |
| Sender-constraint benefits and limits | Passed |
| Token-exchange and delegation treatment | Passed |
| IT/OT separation | Passed |
| Suspension and residual-work treatment | Passed |
| Executive/program-lead positioning | Passed |
| Implementation and cryptographic boundaries | Explicit |
| Fictional scenario and confidentiality | Passed |
| Unsupported claims | None required |
| Participant work separated from model answer | Passed |
| License and attribution | CC BY 4.0 |
| Internal navigation | Passed when merged with package |

## Known limitations

- OAuth and OpenID ecosystems continue to evolve through additional RFCs, profiles, drafts, and product implementations.
- The module intentionally omits flow-selection and configuration guidance.
- A token may be opaque or structured; the module does not assume one format.
- Scope and claim meanings are local to trust relationships and implementations.
- The ORION case is fictional and simplified.
- Production decisions require qualified architecture, security, IAM, privacy, records, operational, safety, and sector-specific review.
- Source status must be rechecked before revision or production-facing use.

## Release decision

Module 3 version 1.0 is accepted for public learning use when this record and its linked package are merged into `main`.

Publication does not establish learner completion. The Progress Record must remain unchanged until an original chain map and defense exist.

## Maintenance triggers

Review Module 3 when:

- An included RFC or OpenID specification is superseded or materially updated.
- OAuth 2.1 or another standards development changes current terminology or security posture.
- Agent-specific identity standards establish materially different models.
- Reader feedback identifies protocol, usability, attribution, or confidentiality concerns.
- The module expands into implementation, sector-specific, or compliance claims.
- A commercial or facilitated derivative is proposed.
