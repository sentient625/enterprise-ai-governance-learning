import { useMemo, useState } from 'react';
import { Markdown } from './Markdown';
import { splitWorkbookSections } from '../lib/splitWorkbookSections';
import { clearModuleAnswers, exportAnswers, getAnswer, setAnswer } from '../lib/workbookAnswers';

function ResponseBox({ moduleSlug, sectionId }: { moduleSlug: string; sectionId: string }) {
  const [value, setValue] = useState(() => getAnswer(moduleSlug, sectionId));
  return (
    <div className="mb-10 mt-3">
      <label className="mb-2 block text-xs font-semibold uppercase tracking-[.1em] text-[#a15a1f]">Your response</label>
      <textarea
        value={value}
        onChange={event => {
          setValue(event.target.value);
          setAnswer(moduleSlug, sectionId, event.target.value);
        }}
        rows={5}
        placeholder="Write your answer here."
        className="w-full resize-y border border-[#d9cfb6] bg-white p-3 text-base leading-relaxed text-[#1c1a15] focus:border-[#a15a1f] focus:outline-none"
      />
    </div>
  );
}

export function Workbook({ moduleSlug, content }: { moduleSlug: string; content: string }) {
  const sections = useMemo(() => splitWorkbookSections(content), [content]);
  const [generation, setGeneration] = useState(0);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'empty'>('idle');

  const handleClear = () => {
    if (!window.confirm('Clear all your saved answers for this workbook? This cannot be undone.')) return;
    clearModuleAnswers(moduleSlug, sections.map(section => section.id));
    setGeneration(current => current + 1);
    setCopyStatus('idle');
  };

  const handleCopy = async () => {
    const text = exportAnswers(moduleSlug, sections);
    if (!text) {
      setCopyStatus('empty');
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('empty');
    }
  };

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border border-[#d9cfb6] bg-[#f0e9d6] p-4 text-sm">
        <p className="text-[#3c392f]">Your responses save automatically in this browser, on this device only.</p>
        <div className="flex items-center gap-3">
          {copyStatus === 'copied' && <span className="text-xs text-[#3c392f]">Copied</span>}
          {copyStatus === 'empty' && <span className="text-xs text-[#3c392f]">Nothing to copy yet</span>}
          <button
            type="button"
            onClick={handleCopy}
            className="border border-[#a15a1f] px-3 py-1.5 text-xs font-semibold uppercase tracking-[.08em] text-[#a15a1f] hover:bg-[#a15a1f] hover:text-white"
          >
            Copy my answers
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="border border-[#9b8f78] px-3 py-1.5 text-xs font-semibold uppercase tracking-[.08em] text-[#726c5d] hover:border-[#a15a1f] hover:text-[#a15a1f]"
          >
            Clear answers
          </button>
        </div>
      </div>

      {sections.map(section => (
        <div key={`${section.id}-${generation}`}>
          <Markdown content={section.body} />
          {section.needsResponse && <ResponseBox moduleSlug={moduleSlug} sectionId={section.id} />}
        </div>
      ))}
    </div>
  );
}
