# Module 4 Public-Release Record

**Release ID:** P1-M04-R1  
**Module:** Credentials, Secrets, and Privileged Access  
**Version:** 1.0  
**Review date:** 2026-09-17  
**Decision:** Accepted for public learning use  
**License:** CC BY 4.0  
**Repository visibility at acceptance:** Public

## Release scope

This decision applies to:

1. Module 4 lesson.
2. Module 4 participant workbook.
3. Module 4 model answer and review guide.
4. Module 4 source and terminology additions.
5. Module overview, Content Build Register, and public README descriptions.

It does not certify learner competence, prescribe a PAM or secret-management implementation, approve production architecture, or provide a compliance, OT-safety, or regulatory determination.

## Intended audience

- Senior program and portfolio leaders.
- IAM/PAM and cybersecurity program managers.
- AI governance, risk, compliance, audit, and assurance professionals.
- Enterprise architects and control owners seeking shared governance language.
- Leaders responsible for regulated or high-consequence agent adoption.

## Learning claim

The package develops program-level fluency sufficient to:

- Separate identity, credential, secret, entitlement, privileged access, and business authority.
- Recognize shared, static, standing, cross-environment, and tool-mediated privilege risk.
- Challenge the assumption that vault storage, rotation, approval, or logging is sufficient by itself.
- Convert broad admin access into a bounded authority envelope.
- Frame least privilege, least standing privilege, just-in-time, mediated, and short-lived access without prescribing implementation.
- Define evidence, suspension, emergency-access, recovery, and lifecycle expectations.
- Preserve qualified technical, operational, safety, and professional boundaries.

## Source-status review

| Source | Status verified 2026-09-17 | Release treatment |
|---|---|---|
| NIST SP 800-53 Rev. 5, Update 1 | Final NIST Special Publication; December 2020, update December 2021 | Used for access control, separation of duties, least privilege, authenticator management, audit, and control vocabulary |
| NIST SP 800-207 | Final NIST Special Publication, August 2020 | Used for resource-focused access and explicit authentication/authorization principles |
| NIST SP 800-82 Rev. 3 | Final NIST Special Publication, September 2023 | Used for OT performance, reliability, safety, and security context |
| NIST IR 8587 | Final NIST Interagency Report, September 2026 | Used for token/assertion protection, key management, verification, lifecycle control, and monitoring context |
| NIST agent identity blog | NIST guidance dated 2026-08-27 | Used as informative agent-specific context; not treated as a standard |

## Publication review

| Review dimension | Result |
|---|---|
| Identity/credential/secret/entitlement separation | Passed |
| Credential versus business-authority treatment | Passed |
| Shared credential and impersonation treatment | Passed |
| Static and short-lived credential treatment | Passed |
| Least privilege and least standing privilege | Passed |
| Just-in-time and task-bound access | Passed |
| Mediation benefits and limitations | Passed |
| Tool and target entitlement distinction | Passed |
| Environment and IT/OT separation | Passed |
| Meaningful approval and separation of duties | Passed |
| Emergency-access treatment | Passed |
| Evidence without secret disclosure | Passed |
| Full-chain suspension and recovery | Passed |
| Lifecycle and material-change treatment | Passed |
| Executive/program-lead positioning | Passed |
| Implementation, OT, safety, and compliance boundaries | Explicit |
| Fictional scenario and confidentiality | Passed |
| Participant work separated from model answer | Passed |
| License and attribution | CC BY 4.0 |
| Internal navigation | Passed when merged with package |

## Known limitations

- The module is technology-neutral and intentionally omits product selection and configuration guidance.
- “Short-lived,” “just-in-time,” and “privileged” depend on risk and system context; the module does not assign universal durations or classifications.
- The ORION case is fictional and simplified.
- PAM or secret mediation cannot by itself establish business authority or correct agent behavior.
- OT access requires environment-specific safety, reliability, operations, regulatory, architecture, and security review.
- Evidence and retention requirements depend on applicable privacy, records, labor, legal, contractual, and sector obligations.
- Source status and applicability must be rechecked before revision or production-facing use.

## Release decision

Module 4 version 1.0 is accepted for public learning use when this record and its linked package are merged into `main`.

Publication does not establish learner completion. The Progress Record must remain unchanged until an original workbook and defense exist.

## Maintenance triggers

Review Module 4 when:

- Included NIST publications are superseded or materially updated.
- Agent-specific identity, credential, PAM, or authorization standards establish materially different models.
- New evidence changes current treatment of token, secret, or credential protection.
- Reader feedback identifies technical, usability, attribution, confidentiality, or safety concerns.
- The module expands into implementation, product, sector-specific, or compliance claims.
- A commercial or facilitated derivative is proposed.
