export interface CurriculumModule {
  slug: string;
  number: number;
  title: string;
  status: string;
  summary: string;
  lesson: string;
  workbook: string;
  answer: string;
  record: string;
}

export interface CurriculumPriority {
  slug: string;
  number: number;
  title: string;
  status: string;
  intro: string;
  modules: CurriculumModule[];
}

const P1_DIR = '01_AI_AGENT_IDENTITY_GOVERNANCE';
const P2_DIR = '02_OPERATIONAL_AI_GOVERNANCE';

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function p1Module(number: number, title: string, summary: string): CurriculumModule {
  const padded = String(number).padStart(2, '0');
  const lessonFiles: Record<number, string> = {
    1: '04_Module_01_Acting_Agents_and_Identity_Types.md',
    2: '05_Module_02_Authentication_Authorization_and_Authority.md',
    3: '06_Module_03_OAuth_OIDC_Tokens_and_Delegation.md',
    4: '07_Module_04_Credentials_Secrets_and_Privileged_Access.md',
    5: '08_Module_05_Agent_Chains_Tools_Memory_and_Context.md',
    6: '09_Module_06_Human_Authority_and_Separation_of_Duties.md',
    7: '10_Module_07_Evidence_Provenance_and_Monitoring.md',
    8: '11_Module_08_Suspension_Response_Fallback_and_Recovery.md',
    9: '12_Module_09_Inventory_Lifecycle_and_Program_Governance.md',
    10: '13_Module_10_Executive_Decision_and_Capstone_Defense.md',
  };
  const exerciseBase = (number - 1) * 2 + 1;
  const workbookIndex = String(exerciseBase).padStart(2, '0');
  const answerIndex = String(exerciseBase + 1).padStart(2, '0');
  const recordIndex = String(number + 5).padStart(2, '0');
  return {
    slug: `module-${padded}-${slugify(title)}`,
    number,
    title,
    status: 'Accepted for public learning use, version 1.0',
    summary,
    lesson: `${P1_DIR}/${lessonFiles[number]}`,
    workbook: `${P1_DIR}/exercises/${workbookIndex}_Module_${padded}_Participant_Workbook.md`,
    answer: `${P1_DIR}/exercises/${answerIndex}_Module_${padded}_Model_Answer_and_Review_Guide.md`,
    record: `00_LEARNING_CONTROL/${recordIndex}_Module_${padded}_Public_Release_Record.md`,
  };
}

function p2Module(number: number, title: string, summary: string): CurriculumModule {
  const padded = String(number).padStart(2, '0');
  const lessonFiles: Record<number, string> = {
    1: '01_Module_01_AI_Inventory_and_Ownership.md',
    2: '02_Module_02_Use_Case_Classification_and_Risk_Tiers.md',
    3: '03_Module_03_Impact_and_Control_Assessment.md',
    4: '04_Module_04_Testing_Evaluation_Verification_and_Validation.md',
    5: '05_Module_05_Monitoring_and_Change_Governance.md',
    6: '06_Module_06_Vendor_and_Supply_Chain_Governance.md',
  };
  const exerciseBase = (number - 1) * 2 + 1;
  const workbookIndex = String(exerciseBase).padStart(2, '0');
  const answerIndex = String(exerciseBase + 1).padStart(2, '0');
  const recordIndex = String(number + 15).padStart(2, '0');
  return {
    slug: `module-${padded}-${slugify(title)}`,
    number,
    title,
    status: 'Accepted for public learning use, version 1.0',
    summary,
    lesson: `${P2_DIR}/${lessonFiles[number]}`,
    workbook: `${P2_DIR}/exercises/${workbookIndex}_Module_${padded}_Participant_Workbook.md`,
    answer: `${P2_DIR}/exercises/${answerIndex}_Module_${padded}_Model_Answer_and_Review_Guide.md`,
    record: `00_LEARNING_CONTROL/${recordIndex}_P2_Module_${padded}_Public_Release_Record.md`,
  };
}

export const curriculum: CurriculumPriority[] = [
  {
    slug: 'ai-agent-identity-governance',
    number: 1,
    title: 'AI-Agent Identity, Security, and Governance',
    status: 'Modules 1–10 accepted for public learning use',
    intro:
      'Distinguish acting identities, authority, credentials, tool and agent chains, human decision rights, evidence, suspension and recovery, program-level inventory, and an executive capstone defense.',
    modules: [
      p1Module(1, 'Acting Agents and Identity Types', 'Distinguish human, service, workload, and agent identities; identify accountable owners and delegating principals; recognize privileged agents; and expose attribution and impersonation risk.'),
      p1Module(2, 'Authentication, Authorization, and Authority', 'Distinguish authenticated identity, technical authorization, delegated business authority, and transaction consequence — and challenge the conclusion that SSO alone means an acting agent is controlled.'),
      p1Module(3, 'OAuth, OIDC, Tokens, and Delegation', 'Distinguish OAuth from OpenID Connect; separate access, ID, and refresh tokens; trace agents, workloads, clients, token exchanges, tools, and targets; and identify where authority can expand.'),
      p1Module(4, 'Credentials, Secrets, and Privileged Access', 'Distinguish credentials, secrets, entitlements, privilege, and business authority; challenge shared and standing access; and convert broad admin access into a bounded authority envelope.'),
      p1Module(5, 'Agent Chains, Tools, Memory, and Context', 'Map a full agent chain from principal through agents, tools, credentials, and targets; recognize confused-deputy failure and prompt injection; and govern working context and durable memory.'),
      p1Module(6, 'Human Authority and Separation of Duties', 'Classify agent actions as autonomous, monitored, prior approval, or prohibited; assign real human decision authority; separate incompatible roles; and detect consent fatigue and automation bias.'),
      p1Module(7, 'Evidence, Provenance, and Monitoring', 'Connect requests, identities, authority, approvals, tool attempts, and verified target outcomes; preserve provenance and uncertainty; and assign monitoring failures to accountable responses.'),
      p1Module(8, 'Suspension, Response, Fallback, and Recovery', 'Assign emergency authority, identify work that survives an agent stop, verify containment, preserve evidence, establish viable fallback, and require evidence before restoring agent authority.'),
      p1Module(9, 'Inventory, Lifecycle, and Program Governance', 'Define governed deployments, assign accountable owners, specify an agent inventory, lead lifecycle gate reviews, assess material changes, and govern retirement.'),
      p1Module(10, 'Executive Decision and Capstone Defense', 'Integrate the preceding modules into a decision dossier, one-page memorandum, executive briefing, and capstone defense with explicit proof gates and accountable owners.'),
    ],
  },
  {
    slug: 'operational-ai-governance',
    number: 2,
    title: 'Operationalizing AI Governance',
    status: 'Modules 1–6 accepted for public learning use; Modules 7–10 planned',
    intro:
      'Move from framework to operating model: inventory and ownership, risk tiering, impact and control assessment, testing and validation, monitoring and change governance, and vendor and supply-chain governance.',
    modules: [
      p2Module(1, 'AI Inventory and Ownership', 'Define an enterprise-wide AI inventory distinct from a software asset register, assign accountable ownership, and detect shadow AI and embedded vendor AI that self-attestation alone would miss.'),
      p2Module(2, 'Use-Case Classification and Risk Tiers', 'Assign each inventoried AI use case a risk tier tied to a checkable governance obligation, design an intake process that classifies before deployment, and resist tier creep.'),
      p2Module(3, 'Impact and Control Assessment', 'Specify an impact assessment and a control assessment as two distinct artifacts, distinguish designed/implemented/operating-effectively findings, and decide a real governing response to a gap.'),
      p2Module(4, 'Testing, Evaluation, Verification, and Validation', 'Separate testing, evaluation, verification, and validation as four distinct questions; require adversarial and misuse-scenario coverage; and set pass/fail criteria before results are known.'),
      p2Module(5, 'Monitoring and Change Governance', 'Specify an ongoing monitoring plan with real signal thresholds, owners, and response deadlines; distinguish a leading indicator from a confirmed incident; and define a material-change envelope.'),
      p2Module(6, 'Vendor and Supply-Chain Governance', 'Perform AI-specific vendor due diligence, request a concrete AI bill of materials, build a contract-control checklist, and treat vendor non-disclosure as a governed risk finding.'),
    ],
  },
];

export function findPriority(prioritySlug: string) {
  return curriculum.find(priority => priority.slug === prioritySlug) ?? null;
}

export function findModule(prioritySlug: string, moduleSlug: string) {
  const priority = findPriority(prioritySlug);
  if (!priority) return null;
  const module = priority.modules.find(item => item.slug === moduleSlug);
  if (!module) return null;
  return { priority, module };
}

export function flatModules() {
  return curriculum.flatMap(priority => priority.modules.map(module => ({ priority, module })));
}
