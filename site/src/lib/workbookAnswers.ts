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

export function exportAnswers(moduleSlug: string, sections: { id: string; heading: string | null }[]): string {
  const parts: string[] = [];
  for (const section of sections) {
    const value = getAnswer(moduleSlug, section.id).trim();
    if (value !== '') {
      parts.push(`${section.heading ?? 'Notes'}\n${value}`);
    }
  }
  return parts.join('\n\n');
}
