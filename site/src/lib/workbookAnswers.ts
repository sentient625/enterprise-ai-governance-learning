const PREFIX = 'workbook-answer:';

function storageKey(moduleSlug: string, sectionId: string) {
  return `${PREFIX}${moduleSlug}:${sectionId}`;
}

export function getAnswer(moduleSlug: string, sectionId: string): string {
  try {
    return localStorage.getItem(storageKey(moduleSlug, sectionId)) ?? '';
  } catch {
    return '';
  }
}

export function setAnswer(moduleSlug: string, sectionId: string, value: string): void {
  try {
    if (value === '') localStorage.removeItem(storageKey(moduleSlug, sectionId));
    else localStorage.setItem(storageKey(moduleSlug, sectionId), value);
  } catch {
    // Private browsing, blocked storage, or quota exceeded: answers just won't persist.
  }
}

export function clearModuleAnswers(moduleSlug: string, sectionIds: string[]): void {
  sectionIds.forEach(id => setAnswer(moduleSlug, id, ''));
}

export function exportAnswers(moduleSlug: string, sections: { id: string; heading: string | null; body: string }[]): string {
  let hasAnswers = false;
  const parts = sections.map(section => {
    const body = section.body.replace(/!\[blank\]\((blank-(?:cell|run)-\d+)\)/g, (_match, id: string) => {
      const value = getAnswer(moduleSlug, id).trim();
      if (value) hasAnswers = true;
      // Preserve Markdown tables while retaining multiline answers.
      return value ? value.replace(/\|/g, '&#124;').replace(/\r?\n/g, '<br>') : '—';
    });
    const response = getAnswer(moduleSlug, section.id).trim();
    if (response) hasAnswers = true;
    return body + (response ? `\n\nYour response:\n${response}` : '');
  });
  return hasAnswers ? parts.join('\n\n') : '';
}
