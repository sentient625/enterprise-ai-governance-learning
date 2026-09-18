export interface CurriculumModule {
  slug: string;
  number: number;
  title: string;
  summary: string;
  section: string;
  lesson: string;
  workbook: string;
  answer: string;
  record: string;
}

const P1_DIR = '01_AI_AGENT_IDENTITY_GOVERNANCE';
const P2_DIR = '02_OPERATIONAL_AI_GOVERNANCE';

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

interface RawModule {
  dir: string;
  localNumber: number;
  title: string;
  summary: string;
  lessonFile: string;
  recordPrefix: 'plain' | 'p2';
}

const rawModules: RawModule[] = [
  { dir: P1_DIR, localNumber: 1, title: 'Acting Agents and Identity Types', summary: 'Distinguish human, service, workload, and agent identities; identify accountable owners and delegating principals; recognize privileged agents; and expose attribution and impersonation risk.', lessonFile: '04_Module_01_Acting_Agents_and_Identity_Types.md', recordPrefix: 'plain' },
  { dir: P1_DIR, localNumber: 2, title: 'Authentication, Authorization, and Authority', summary: 'Distinguish authenticated identity, technical authorization, delegated business authority, and transaction consequence — and challenge the conclusion that SSO alone means an acting agent is controlled.', lessonFile: '05_Module_02_Authentication_Authorization_and_Authority.md', recordPrefix: 'plain' },
  { dir: P1_DIR, localNumber: 3, title: 'OAuth, OIDC, Tokens, and Delegation', summary: 'Distinguish OAuth from OpenID Connect; separate access, ID, and refresh tokens; trace agents, workloads, clients, token exchanges, tools, and targets; and identify where authority can expand.', lessonFile: '06_Module_03_OAuth_OIDC_Tokens_and_Delegation.md', recordPrefix: 'plain' },
  { dir: P1_DIR, localNumber: 4, title: 'Credentials, Secrets, and Privileged Access', summary: 'Distinguish credentials, secrets, entitlements, privilege, and business authority; challenge shared and standing access; and convert broad admin access into a bounded authority envelope.', lessonFile: '07_Module_04_Credentials_Secrets_and_Privileged_Access.md', recordPrefix: 'plain' },
  { dir: P1_DIR, localNumber: 5, title: 'Agent Chains, Tools, Memory, and Context', summary: 'Map a full agent chain from principal through agents, tools, credentials, and targets; recognize confused-deputy failure and prompt injection; and govern working context and durable memory.', lessonFile: '08_Module_05_Agent_Chains_Tools_Memory_and_Context.md', recordPrefix: 'plain' },
  { dir: P1_DIR, localNumber: 6, title: 'Human Authority and Separation of Duties', summary: 'Classify agent actions as autonomous, monitored, prior approval, or prohibited; assign real human decision authority; separate incompatible roles; and detect consent fatigue and automation bias.', lessonFile: '09_Module_06_Human_Authority_and_Separation_of_Duties.md', recordPrefix: 'plain' },
  { dir: P1_DIR, localNumber: 7, title: 'Evidence, Provenance, and Monitoring', summary: 'Connect requests, identities, authority, approvals, tool attempts, and verified target outcomes; preserve provenance and uncertainty; and assign monitoring failures to accountable responses.', lessonFile: '10_Module_07_Evidence_Provenance_and_Monitoring.md', recordPrefix: 'plain' },
  { dir: P1_DIR, localNumber: 8, title: 'Suspension, Response, Fallback, and Recovery', summary: 'Assign emergency authority, identify work that survives an agent stop, verify containment, preserve evidence, establish viable fallback, and require evidence before restoring agent authority.', lessonFile: '11_Module_08_Suspension_Response_Fallback_and_Recovery.md', recordPrefix: 'plain' },
  { dir: P1_DIR, localNumber: 9, title: 'Inventory, Lifecycle, and Program Governance', summary: 'Define governed deployments, assign accountable owners, specify an agent inventory, lead lifecycle gate reviews, assess material changes, and govern retirement.', lessonFile: '12_Module_09_Inventory_Lifecycle_and_Program_Governance.md', recordPrefix: 'plain' },
  { dir: P1_DIR, localNumber: 10, title: 'Executive Decision and Capstone Defense', summary: 'Integrate the preceding modules into a decision dossier, one-page memorandum, executive briefing, and capstone defense with explicit proof gates and accountable owners.', lessonFile: '13_Module_10_Executive_Decision_and_Capstone_Defense.md', recordPrefix: 'plain' },
  { dir: P2_DIR, localNumber: 1, title: 'AI Inventory and Ownership', summary: 'Define an enterprise-wide AI inventory distinct from a software asset register, assign accountable ownership, and detect shadow AI and embedded vendor AI that self-attestation alone would miss.', lessonFile: '01_Module_01_AI_Inventory_and_Ownership.md', recordPrefix: 'p2' },
  { dir: P2_DIR, localNumber: 2, title: 'Use-Case Classification and Risk Tiers', summary: 'Assign each inventoried AI use case a risk tier tied to a checkable governance obligation, design an intake process that classifies before deployment, and resist tier creep.', lessonFile: '02_Module_02_Use_Case_Classification_and_Risk_Tiers.md', recordPrefix: 'p2' },
  { dir: P2_DIR, localNumber: 3, title: 'Impact and Control Assessment', summary: 'Specify an impact assessment and a control assessment as two distinct artifacts, distinguish designed/implemented/operating-effectively findings, and decide a real governing response to a gap.', lessonFile: '03_Module_03_Impact_and_Control_Assessment.md', recordPrefix: 'p2' },
  { dir: P2_DIR, localNumber: 4, title: 'Testing, Evaluation, Verification, and Validation', summary: 'Separate testing, evaluation, verification, and validation as four distinct questions; require adversarial and misuse-scenario coverage; and set pass/fail criteria before results are known.', lessonFile: '04_Module_04_Testing_Evaluation_Verification_and_Validation.md', recordPrefix: 'p2' },
  { dir: P2_DIR, localNumber: 5, title: 'Monitoring and Change Governance', summary: 'Specify an ongoing monitoring plan with real signal thresholds, owners, and response deadlines; distinguish a leading indicator from a confirmed incident; and define a material-change envelope.', lessonFile: '05_Module_05_Monitoring_and_Change_Governance.md', recordPrefix: 'p2' },
  { dir: P2_DIR, localNumber: 6, title: 'Vendor and Supply-Chain Governance', summary: 'Perform AI-specific vendor due diligence, request a concrete AI bill of materials, build a contract-control checklist, and treat vendor non-disclosure as a governed risk finding.', lessonFile: '06_Module_06_Vendor_and_Supply_Chain_Governance.md', recordPrefix: 'p2' },
];

function buildModule(raw: RawModule, number: number): CurriculumModule {
  const padded = String(number).padStart(2, '0');
  const localPadded = String(raw.localNumber).padStart(2, '0');
  const exerciseBase = (raw.localNumber - 1) * 2 + 1;
  const workbookIndex = String(exerciseBase).padStart(2, '0');
  const answerIndex = String(exerciseBase + 1).padStart(2, '0');
  const record =
    raw.recordPrefix === 'plain'
      ? `00_LEARNING_CONTROL/${String(raw.localNumber + 5).padStart(2, '0')}_Module_${localPadded}_Public_Release_Record.md`
      : `00_LEARNING_CONTROL/${String(raw.localNumber + 15).padStart(2, '0')}_P2_Module_${localPadded}_Public_Release_Record.md`;
  return {
    slug: `module-${padded}-${slugify(raw.title)}`,
    number,
    title: raw.title,
    summary: raw.summary,
    section: raw.recordPrefix === 'plain' ? 'Identity, Access, and Agent Governance' : 'Operationalizing AI Governance',
    lesson: `${raw.dir}/${raw.lessonFile}`,
    workbook: `${raw.dir}/exercises/${workbookIndex}_Module_${localPadded}_Participant_Workbook.md`,
    answer: `${raw.dir}/exercises/${answerIndex}_Module_${localPadded}_Model_Answer_and_Review_Guide.md`,
    record,
  };
}

export const curriculum: CurriculumModule[] = rawModules.map((raw, index) => buildModule(raw, index + 1));

export function findModule(slug: string) {
  return curriculum.find(item => item.slug === slug) ?? null;
}
