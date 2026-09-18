import { useMemo, useState } from 'react';
import { Markdown } from './Markdown';
import { injectBlanks } from '../lib/injectBlanks';
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
        aria-label={`Response to section ${sectionId}`}
        className="screen-answer w-full resize-y border border-[#d9cfb6] bg-white p-3 text-base leading-relaxed text-[#1c1a15] focus:border-[#a15a1f] focus:outline-none"
      />
      <div className="print-answer response-print">{value || "—"}</div>
    </div>
  );
}

export function Workbook({ moduleSlug, content }: { moduleSlug: string; content: string }) {
  const { markdown: processedContent, blankIds } = useMemo(() => injectBlanks(content), [content]);
  const sections = useMemo(() => splitWorkbookSections(processedContent), [processedContent]);
  const [generation, setGeneration] = useState(0);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'empty' | 'error'>('idle');

  const handleClear = () => {
    if (!window.confirm('Clear all your saved answers for this workbook? This cannot be undone.')) return;
    clearModuleAnswers(moduleSlug, [...sections.map(section => section.id), ...blankIds]);
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
      setCopyStatus('error');
    }
  };

  return (
    <div>
      <div className="workbook-toolbar mb-8 flex flex-wrap items-center justify-between gap-3 border border-[#d9cfb6] bg-[#f0e9d6] p-4 text-sm">
        <p className="text-[#3c392f]">Your responses save automatically in this browser, on this device only.</p>
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" onClick={() => window.print()} className="border border-[#a15a1f] px-3 py-1.5 text-xs font-semibold text-[#a15a1f]">Print / Save as PDF</button>
          {copyStatus === 'error' && <span role="status">Copy failed. Use Print / Save as PDF instead.</span>}
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

      <p className="print-help mb-6 text-sm text-[#726c5d]">To export a completed workbook, choose Print / Save as PDF, then select Save as PDF in your browser’s print dialog. All answer fields are included.</p>

      {sections.map(section => (
        <div key={`${section.id}-${generation}`}>
          <Markdown content={section.body} moduleSlug={moduleSlug} />
          {section.needsResponse && <ResponseBox moduleSlug={moduleSlug} sectionId={section.id} />}
        </div>
      ))}
    </div>
  );
}
