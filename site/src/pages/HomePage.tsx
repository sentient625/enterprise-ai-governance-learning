import { curriculum } from '../config/curriculum';

const AUDIENCE = [
  'Senior program and portfolio leaders',
  'IAM/PAM and cybersecurity program managers',
  'AI governance, risk, compliance, and assurance professionals',
  'Enterprise architects and control owners seeking a shared governance model',
  'Leaders working in regulated or high-consequence environments',
];

const HOW_TO_USE = [
  { title: 'Read the lesson', detail: 'Each module develops one governing distinction through worked examples and a case.' },
  { title: 'Complete the participant workbook', detail: 'Apply the lesson to a fictional or sanitized scenario before looking at any answer.' },
  { title: 'Compare the model answer and review guide', detail: 'An illustrative answer, not the only defensible one — use it to test your own reasoning.' },
  { title: 'Read the public release record', detail: 'The acceptance record for that module: scope, decision, version, and license.' },
];

export function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-14 md:px-12 md:py-20">
      <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#a15a1f]">Enterprise AI Governance Learning</p>
      <h1 className="mt-5 font-serif text-4xl font-normal leading-[1.05] tracking-[-.02em] text-[#1c1a15] sm:text-5xl">
        What identity is acting, on whose authority, with what evidence?
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4a463c]">
        A source-grounded curriculum for senior program leaders, IAM/PAM and cybersecurity program managers, and AI
        governance, risk, and assurance professionals working in regulated or high-consequence environments.
      </p>

      <section className="mt-14 border-t border-[#d9cfb6] pt-10">
        <h2 className="text-xs font-semibold uppercase tracking-[.16em] text-[#a15a1f]">Why this curriculum exists</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#3c392f]">
          AI agents are becoming non-human enterprise actors. They can use credentials, invoke tools, retrieve protected
          information, change systems, delegate work, and create business consequences. Organizations need leaders who can
          ask: what identity is acting, whose authority is being exercised, which tools and data are permitted, what
          evidence will reconstruct the transaction, when a human must decide, how the agent can be suspended, and who
          remains accountable.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#3c392f]">
          This curriculum builds that executive and program-level fluency. It does not attempt to turn a learner into an AI
          engineer, identity architect, attorney, auditor, or safety authority.
        </p>
      </section>

      <section className="mt-14 border-t border-[#d9cfb6] pt-10">
        <h2 className="text-xs font-semibold uppercase tracking-[.16em] text-[#a15a1f]">Who it's for</h2>
        <ul className="mt-4 max-w-3xl space-y-3">
          {AUDIENCE.map(item => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-[#3c392f]">
              <span className="text-[#a15a1f]">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 border-t border-[#d9cfb6] pt-10">
        <h2 className="text-xs font-semibold uppercase tracking-[.16em] text-[#a15a1f]">How it's organized</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#3c392f]">
          The curriculum is a single numbered sequence, organized under two areas so far: identity, access, and agent
          governance (modules 1–10), and operationalizing AI governance — moving from framework to operating model
          (modules 11–16). A third area, financial decision fluency, is planned. Every module carries the same four
          documents:
        </p>
        <ol className="mt-6 max-w-3xl space-y-5 border-t border-[#d9cfb6] pt-6">
          {HOW_TO_USE.map((step, stepIndex) => (
            <li key={step.title} className="grid grid-cols-[auto_1fr] gap-4">
              <span className="font-mono text-sm text-[#a15a1f]">{stepIndex + 1}.</span>
              <div>
                <strong className="text-base font-semibold text-[#1c1a15]">{step.title}</strong>
                <p className="mt-1 text-sm leading-relaxed text-[#726c5d]">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-14 border-t-2 border-[#28261f] pt-4">
        {curriculum.map((module, moduleIndex) => {
          const showSectionLabel = moduleIndex === 0 || curriculum[moduleIndex - 1].section !== module.section;
          return (
            <div key={module.slug}>
              {showSectionLabel && (
                <p className={'text-xs font-semibold uppercase tracking-[.14em] text-[#a15a1f] ' + (moduleIndex === 0 ? 'pt-8' : 'pt-10')}>
                  {module.section}
                </p>
              )}
              <a
                href={`/${module.slug}`}
                className="group grid gap-2 border-b border-[#d9cfb6] py-6 sm:grid-cols-[auto_1fr] sm:items-baseline sm:gap-6"
              >
                <span className="font-mono text-sm text-[#a15a1f]">{String(module.number).padStart(2, '0')}</span>
                <div>
                  <h2 className="font-serif text-xl font-normal text-[#1c1a15] group-hover:text-[#a15a1f]">{module.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#726c5d]">{module.summary}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>

      <div className="mt-12 border border-[#d9cfb6] bg-[#f0e9d6] p-7">
        <h2 className="text-xs font-semibold uppercase tracking-[.16em] text-[#a15a1f]">Evidence standard</h2>
        <p className="mt-3 text-base leading-relaxed text-[#3c392f]">
          Reading alone is not completion. Demonstrated learning requires a completed governing artifact, a written or oral
          defense, source-grounded reasoning, clear ownership and authority boundaries, and a statement of unresolved
          uncertainty.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#726c5d]">
          The material is educational and illustrative, not production architecture. Cases are fictional or sanitized.
          Qualified legal, regulatory, accounting, audit, privacy, safety, cybersecurity, architecture, and engineering
          conclusions belong to the appropriate professionals.
        </p>
      </div>

      <p className="mt-8 text-sm text-[#726c5d]">
        Except where otherwise noted, this curriculum is licensed under CC BY 4.0 by Michael Kaplan. You may share and adapt
        it, including commercially, with attribution. Related essays and books:{' '}
        <a href="https://forensicgovernance.com" className="text-[#a15a1f] underline underline-offset-2">forensicgovernance.com</a>.
      </p>
    </div>
  );
}
