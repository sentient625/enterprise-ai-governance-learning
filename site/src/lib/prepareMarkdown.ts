const LABEL_LINE = /^\*\*([^*]+):\*\*/;

// Every lesson/workbook/answer file opens with a metadata block, but the exact fields
// vary by authoring era: some use "Module ID / Learning priority / ... / Version /
// Status / Source status checked / License", others "Module / Version / Status /
// Estimated work time / Published / License", others "Package ID / Related module /
// Version / Status / Case type / Published / License". Rather than match one fixed
// sequence, treat the whole contiguous run of "**Label:** value" lines after the title
// as the metadata block, and drop only the labels that duplicate page chrome the site
// already shows (module identity, version/status bookkeeping, publish date, license) —
// dropping "Status"/"Version" also removes the "Priority 2, ..." wording some Priority 2
// lessons' "Guide coverage" line carried. Labels with actual reading value —
// "Estimated time", "Required output", "Professional level", "Case type" — are kept.
const REDUNDANT_LABELS = new Set([
  'module id',
  'module',
  'package id',
  'related module',
  'learning priority',
  'version',
  'status',
  'source status checked',
  'published',
  'guide coverage',
  'license',
]);

/**
 * Renders a source document for display: drops the leading title (the page already
 * shows the module title and doc-type tab) and filters the metadata block that follows
 * it down to only the fields with real reading value. Only for lesson/workbook/answer
 * docs — the public release record's fields are its actual content and are rendered
 * as-is by not calling this at all. Does not modify the source files.
 */
export function prepareMarkdown(raw: string): string {
  const lines = raw.split('\n');
  let index = 0;

  if (lines[index]?.startsWith('# ')) {
    index += 1;
  }

  const kept: string[] = [];
  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();
    if (trimmed === '') {
      index += 1;
      continue;
    }
    const match = trimmed.match(LABEL_LINE);
    if (!match) break;
    const label = match[1].trim().toLowerCase();
    if (!REDUNDANT_LABELS.has(label)) {
      kept.push(line.replace(/\s*\\$/, '').replace(/\s{2,}$/, ''));
    }
    index += 1;
  }

  const rest = lines.slice(index).join('\n').replace(/^\n+/, '');
  return kept.length > 0 ? `${kept.join('\n')}\n\n${rest}` : rest;
}
