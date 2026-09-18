import type { CurriculumPriority } from '../config/curriculum';

export function PriorityPage({ priority }: { priority: CurriculumPriority }) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-14 md:px-12 md:py-20">
      <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#a15a1f]">Priority {priority.number}</p>
      <h1 className="mt-5 font-serif text-4xl font-normal leading-[1.05] tracking-[-.02em] text-[#1c1a15] sm:text-5xl">{priority.title}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4a463c]">{priority.intro}</p>
      <p className="mt-3 text-sm font-semibold uppercase tracking-[.1em] text-[#a15a1f]">{priority.status}</p>

      <div className="mt-10 border-t border-[#d9cfb6]">
        {priority.modules.map(module => (
          <a
            key={module.slug}
            href={`/${priority.slug}/${module.slug}`}
            className="group grid gap-2 border-b border-[#d9cfb6] py-6 sm:grid-cols-[auto_1fr] sm:items-baseline sm:gap-6"
          >
            <span className="font-mono text-sm text-[#a15a1f]">Mod. {String(module.number).padStart(2, '0')}</span>
            <div>
              <h2 className="font-serif text-xl font-normal text-[#1c1a15] group-hover:text-[#a15a1f]">{module.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#726c5d]">{module.summary}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
