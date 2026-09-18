import { useState } from 'react';
import { getAnswer, setAnswer } from '../lib/workbookAnswers';

export function BlankCell({ moduleSlug, blankId }: { moduleSlug: string; blankId: string }) {
  const [value, setValue] = useState(() => getAnswer(moduleSlug, blankId));
  return (
    <>
    <textarea
      aria-label={`Workbook answer ${blankId}`}
      value={value}
      onChange={event => {
        setValue(event.target.value);
        setAnswer(moduleSlug, blankId, event.target.value);
      }}
      rows={3}
      spellCheck={false}
      className="screen-answer block min-h-[4.5rem] w-full min-w-[8rem] resize-y border-b-2 border-[#a15a1f] bg-transparent p-1 text-inherit focus:outline-none"
    />
    <span className="print-answer">{value || "—"}</span>
    </>
  );
}
