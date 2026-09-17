# Module 2 Public-Release Record

**Release ID:** P1-M02-R1  
**Module:** Authentication, Authorization, and Authority  
**Version:** 1.0  
**Review date:** 2026-09-17  
**Decision:** Accepted for public learning use  
**License:** CC BY 4.0  
**Repository visibility at acceptance:** Public

## Release scope

This decision applies to:

1. Module 2 lesson.
2. Module 2 participant workbook.
3. Module 2 model answer and review guide.
4. Source Register entries used by Module 2.
5. Module overview, Content Build Register, and public README descriptions.

It does not certify learner competence, approve a production design, provide legal or regulatory conclusions, or convert the material into a paid training product.

## Intended audience

- Senior program and portfolio leaders.
- IAM/PAM and cybersecurity program managers.
- AI governance, risk, compliance, audit, and assurance professionals.
- Enterprise architects and control owners seeking a shared decision model.
- Leaders responsible for regulated or high-consequence agent adoption.

## Learning claim

The package teaches a learner to keep five questions separate and then reconnect them through evidence:

1. Which entity is represented?
2. How was the claimant authenticated?
3. Which operations are technically authorized?
4. Whose organizational authority is being exercised?
5. What enterprise consequence will the transaction create?

The package specifically challenges the incomplete conclusion:

> “The agent uses SSO, so access is controlled.”

## Source-status review

| Source | Status verified 2026-09-17 | Release treatment |
|---|---|---|
| NIST SP 800-63-4 | Final Digital Identity Guidelines; supersedes SP 800-63-3 | Used for human authentication, assurance, federation, and relying-party concepts; its stated exclusion of machine-to-machine and API-on-behalf-of-subject cases is preserved |
| RFC 6749 | Standards-track OAuth 2.0 framework, updated by later specifications | Used for limited-access and delegated-authorization vocabulary, not as a complete agent-governance model |
| RFC 9700 | OAuth 2.0 Security Best Current Practice | Used to establish that current OAuth security guidance extends beyond the original RFC; implementation is reserved for qualified practitioners |
| OpenID Connect Core 1.0, errata set 2 | Final OpenID specification | Used to distinguish OIDC’s identity layer from OAuth authorization |
| NIST agent-identity article | NIST guidance dated 2026-08-27 | Used as emerging agent-specific context, not as a final control standard |

## Review findings

| Dimension | Result |
|---|---|
| Source accuracy and status | Passed for the stated educational scope |
| Human-subject scope limit of SP 800-63-4 | Explicitly preserved |
| Authentication versus authorization distinction | Passed |
| Technical authorization versus business authority distinction | Passed |
| Transaction-consequence analysis | Passed |
| Corporate IT versus protected OT separation | Passed |
| Executive/program-lead positioning | Passed |
| Fictional scenario and confidentiality | Passed |
| Unsupported outcome or implementation claims | None required |
| Participant work separated from model answer | Passed |
| Evidence, suspension, and residual-work treatment | Passed |
| License and attribution | CC BY 4.0 |
| Internal navigation | To be merged with the release package |

## Material changes made during review

- Converted learner-specific wording in outcomes into participant-neutral language.
- Preserved the distinction between authentication of a human and authentication or attribution of an agent/workload.
- Added a standalone participant workbook rather than asking learners to edit the lesson.
- Added a separate model answer, review rubric, defense questions, and completion boundary.
- Made protected OT a separate authority and release decision.
- Expanded suspension analysis to include credentials, sessions, queued work, retries, and downstream activity.
- Required evidence of consequence, not merely successful command execution.
- Kept protocol implementation outside the program-lead claim.

## Known limitations

- Agent-specific identity and authorization standards continue to evolve.
- The ORION design is fictional and omits implementation details intentionally.
- The five-boundary model is an original teaching construct, not a quoted standard.
- No universal authentication, authorization, approval, or evidence design is asserted.
- Organizations must adapt the analysis to their sector, jurisdiction, architecture, safety obligations, and qualified authorities.
- Source status should be rechecked before material revision or production-facing use.

## Release decision

Module 2 version 1.0 is accepted for public learning use when this record and the linked package are merged into `main`.

The learner must complete an original workbook and defense before the Progress Record may show demonstrated learning. Publication of the content does not establish the author’s or any participant’s personal completion.

## Maintenance triggers

Review Module 2 when:

- A cited specification is superseded or materially updated.
- NIST publishes agent-specific authentication or authorization standards that change the framing.
- OAuth or OpenID guidance materially changes the source treatment.
- The curriculum expands into implementation, sector-specific, or compliance claims.
- Reader feedback identifies factual, usability, attribution, or confidentiality concerns.
- A commercial or facilitated training derivative is proposed.
