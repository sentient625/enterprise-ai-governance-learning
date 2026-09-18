import { useState } from 'react';
import { getAnswer, setAnswer } from '../lib/workbookAnswers';

export function BlankInput({ moduleSlug, blankId }: { moduleSlug: string; blankId: string }) {
  const [value, setValue] = useState(() => getAnswer(moduleSlug, blankId));
  return (
    <input
      type="text"
      value={value}
      onChange={event => {
        setValue(event.target.value);
        setAnswer(moduleSlug, blankId, event.target.value);
      }}
      size={14}
      className="mx-1 inline-block border-b-2 border-[#a15a1f] bg-transparent px-1 align-baseline text-inherit focus:outline-none"
    />
  );
}
