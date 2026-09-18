import { useEffect, useState } from 'react';
import { Markdown } from '../components/Markdown';
import { getDocument } from '../lib/content';
import { prepareMarkdown } from '../lib/prepareMarkdown';
import { curriculum } from '../config/curriculum';
import type { CurriculumModule } from '../config/curriculum';

type DocKey = 'lesson' | 'workbook' | 'answer' | 'record';

const DOC_TABS: { key: DocKey; label: string }[] = [
  { key: 'lesson', label: 'Lesson' },
  { key: 'workbook', label: 'Participant workbook' },
  { key: 'answer', label: 'Model answer & review guide' },
  { key: 'record', label: 'Public release record' },
];

export function ModulePage({ module }: { module: CurriculumModule }) {
  const [activeDoc, setActiveDoc] = useState<DocKey>('lesson');
  const [content, setContent] = useState<string | null | undefined>(undefined);
  const index = curriculum.findIndex(item => item.slug === module.slug);
  const previous = index > 0 ? curriculum[index - 1] : null;
  const next = index < curriculum.length - 1 ? curriculum[index + 1] : null;

  useEffect(() => {
    setActiveDoc('lesson');
  }, [module]);

  useEffect(() => {
    let cancelled = false;
    setContent(undefined);
    getDocument(module[activeDoc]).then(result => {
      if (!cancelled) setContent(result === null || activeDoc === 'record' ? result : prepareMarkdown(result));
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
            Module {String(module.number).padStart(2, '0')} of {curriculum.length}
          </p>
          <h1 className="mt-4 font-serif text-3xl font-normal leading-[1.1] tracking-[-.015em] text-[#1c1a15] sm:text-4xl">{module.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4a463c]">{module.summary}</p>
        </div>
      </header>

      <nav className="sticky top-0 z-10 border-b border-[#d9cfb6] bg-[#f7f2e7]/95 backdrop-blur" aria-label="Module documents">
        <div className="mx-auto flex max-w-4xl flex-wrap gap-1 px-6 py-3 md:px-12">
          {DOC_TABS.map(tab => (
            <button
              key={tab.key}
              type="button"
              onClick={() => {
                setActiveDoc(tab.key);
                window.scrollTo({ top: 0 });
              }}
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
          <a href={`/${previous.slug}`} className="border-b border-[#d9cfb6] p-6 hover:bg-[#f0e9d6] sm:border-b-0 sm:border-r md:p-8">
            <span className="text-[10px] font-semibold uppercase tracking-[.14em] text-[#a15a1f]">Previous</span>
            <strong className="mt-2 block font-serif text-lg font-normal text-[#1c1a15]">← {previous.title}</strong>
          </a>
        ) : (
          <a href="/" className="border-b border-[#d9cfb6] p-6 hover:bg-[#f0e9d6] sm:border-b-0 sm:border-r md:p-8">
            <span className="text-[10px] font-semibold uppercase tracking-[.14em] text-[#a15a1f]">Back</span>
            <strong className="mt-2 block font-serif text-lg font-normal text-[#1c1a15]">← All modules</strong>
          </a>
        )}
        {next ? (
          <a href={`/${next.slug}`} className="p-6 text-right hover:bg-[#f0e9d6] md:p-8">
            <span className="text-[10px] font-semibold uppercase tracking-[.14em] text-[#a15a1f]">Next</span>
            <strong className="mt-2 block font-serif text-lg font-normal text-[#1c1a15]">{next.title} →</strong>
          </a>
        ) : (
          <a href="/" className="p-6 text-right hover:bg-[#f0e9d6] md:p-8">
            <span className="text-[10px] font-semibold uppercase tracking-[.14em] text-[#a15a1f]">Finish</span>
            <strong className="mt-2 block font-serif text-lg font-normal text-[#1c1a15]">Back to all modules →</strong>
          </a>
        )}
      </nav>
    </div>
  );
}
