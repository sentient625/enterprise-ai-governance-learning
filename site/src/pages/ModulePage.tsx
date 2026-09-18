import { useEffect, useState } from 'react';
import { Markdown } from '../components/Markdown';
import { getDocument } from '../lib/content';
import type { CurriculumModule, CurriculumPriority } from '../config/curriculum';

type DocKey = 'lesson' | 'workbook' | 'answer' | 'record';

const DOC_TABS: { key: DocKey; label: string }[] = [
  { key: 'lesson', label: 'Lesson' },
  { key: 'workbook', label: 'Participant workbook' },
  { key: 'answer', label: 'Model answer & review guide' },
  { key: 'record', label: 'Public release record' },
];

export function ModulePage({ priority, module }: { priority: CurriculumPriority; module: CurriculumModule }) {
  const [activeDoc, setActiveDoc] = useState<DocKey>('lesson');
  const [content, setContent] = useState<string | null | undefined>(undefined);
  const index = priority.modules.findIndex(item => item.slug === module.slug);
  const previous = index > 0 ? priority.modules[index - 1] : null;
  const next = index < priority.modules.length - 1 ? priority.modules[index + 1] : null;

  useEffect(() => {
    let cancelled = false;
    setContent(undefined);
    getDocument(module[activeDoc]).then(result => {
      if (!cancelled) setContent(result);
    });
    return () => {
      cancelled = true;
    };
  }, [module, activeDoc]);

  return (
    <div>
      <header className="border-b border-[#d9cfb6] px-6 py-10 md:px-12 md:py-14">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#a15a1f]">
            {priority.title} · Module {String(module.number).padStart(2, '0')}
          </p>
          <h1 className="mt-4 font-serif text-3xl font-normal leading-[1.1] tracking-[-.015em] text-[#1c1a15] sm:text-4xl">{module.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4a463c]">{module.summary}</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[.1em] text-[#a15a1f]">{module.status}</p>
        </div>
      </header>

      <nav className="sticky top-0 z-10 border-b border-[#d9cfb6] bg-[#f7f2e7]/95 backdrop-blur lg:top-0" aria-label="Module documents">
        <div className="mx-auto flex max-w-4xl flex-wrap gap-1 px-6 py-3 md:px-12">
          {DOC_TABS.map(tab => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveDoc(tab.key)}
              aria-current={activeDoc === tab.key ? 'true' : undefined}
              className={
                'px-4 py-2 text-xs font-semibold uppercase tracking-[.1em] ' +
                (activeDoc === tab.key ? 'bg-[#1c1a15] text-white' : 'text-[#726c5d] hover:text-[#a15a1f]')
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-6 py-12 md:px-12 md:py-16">
        {content === undefined ? (
          <p className="text-sm uppercase tracking-[.1em] text-[#8a836f]">Loading document…</p>
        ) : content === null ? (
          <p className="text-base leading-relaxed text-[#726c5d]">This document could not be loaded.</p>
        ) : (
          <Markdown content={content} />
        )}
      </article>

      <nav className="grid border-t border-[#d9cfb6] sm:grid-cols-2" aria-label="Module navigation">
        {previous ? (
          <a href={`/${priority.slug}/${previous.slug}`} className="border-b border-[#d9cfb6] p-6 hover:bg-[#f0e9d6] sm:border-b-0 sm:border-r md:p-8">
            <span className="text-[10px] font-semibold uppercase tracking-[.14em] text-[#a15a1f]">Previous</span>
            <strong className="mt-2 block font-serif text-lg font-normal text-[#1c1a15]">← {previous.title}</strong>
          </a>
        ) : (
          <a href={`/${priority.slug}`} className="border-b border-[#d9cfb6] p-6 hover:bg-[#f0e9d6] sm:border-b-0 sm:border-r md:p-8">
            <span className="text-[10px] font-semibold uppercase tracking-[.14em] text-[#a15a1f]">Back</span>
            <strong className="mt-2 block font-serif text-lg font-normal text-[#1c1a15]">← {priority.title}</strong>
          </a>
        )}
        {next ? (
          <a href={`/${priority.slug}/${next.slug}`} className="p-6 text-right hover:bg-[#f0e9d6] md:p-8">
            <span className="text-[10px] font-semibold uppercase tracking-[.14em] text-[#a15a1f]">Next</span>
            <strong className="mt-2 block font-serif text-lg font-normal text-[#1c1a15]">{next.title} →</strong>
          </a>
        ) : (
          <a href="/" className="p-6 text-right hover:bg-[#f0e9d6] md:p-8">
            <span className="text-[10px] font-semibold uppercase tracking-[.14em] text-[#a15a1f]">Finish</span>
            <strong className="mt-2 block font-serif text-lg font-normal text-[#1c1a15]">All curriculum priorities →</strong>
          </a>
        )}
      </nav>
    </div>
  );
}
