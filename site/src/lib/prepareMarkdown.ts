const REDUNDANT_LABELS = /^\*\*(Status|Version|Guide coverage):\*\*/;

/**
 * The site already shows the module title and doc-type tab as page chrome, and the
 * source files' own "Status"/"Version"/"Guide coverage" lines duplicate that (and, for
 * Priority 2 lessons, reintroduce "Priority" wording the site otherwise avoids). Drop
 * just the leading title line and those specific label lines; leave everything else,
 * including "Estimated study time" and the release record's own fields, untouched.
 */
export function prepareMarkdown(raw: string): string {
  const lines = raw.split('\n');
  let index = 0;

  if (lines[index]?.startsWith('# ')) {
    index += 1;
  }

  while (index < lines.length) {
    const line = lines[index].trim();
    if (line === '' || REDUNDANT_LABELS.test(line)) {
      index += 1;
      continue;
    }
    break;
  }

  return lines.slice(index).join('\n').replace(/^\n+/, '');
}
