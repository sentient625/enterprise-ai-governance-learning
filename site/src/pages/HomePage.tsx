import { curriculum } from '../config/curriculum';

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

      <div className="mt-12 border-t border-[#d9cfb6]">
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
