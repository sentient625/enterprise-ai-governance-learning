export interface WorkbookSection {
  id: string;
  heading: string | null;
  body: string;
  needsResponse: boolean;
}

const HEADING_LINE = /^(#{1,6})\s+(.*)$/;
// Closing instructions ("Completion note", "Submission and completion gate", ...) are not
// exercise prompts, so they don't get a response box even though they're headed sections.
const SKIP_RESPONSE = /^(completion|submission)/i;

/**
 * Splits a workbook document into sections at heading lines, at whatever heading depth
 * the document uses (some workbooks use "#" for top-level exercises and "##" for
 * sub-steps within them; others use only "##"). Each section after the first gets a
 * response box unless its heading marks it as a closing note rather than a prompt. The
 * first section (framing text and any kept metadata line before the first heading) never
 * gets one.
 */
export function splitWorkbookSections(markdown: string): WorkbookSection[] {
  const lines = markdown.split('\n');
  const sections: WorkbookSection[] = [];
  let heading: string | null = null;
  let level = 0;
  let buffer: string[] = [];

  const flush = () => {
    const body = buffer.join('\n').trim();
    if (heading === null && body === '') return;
    const isFirst = sections.length === 0;
    sections.push({
      id: String(sections.length),
      heading,
      body: heading !== null ? `${'#'.repeat(level)} ${heading}\n\n${body}` : body,
      needsResponse: !isFirst && heading !== null && !SKIP_RESPONSE.test(heading),
    });
  };

  for (const line of lines) {
    const match = line.match(HEADING_LINE);
    if (match) {
      flush();
      heading = match[2].trim();
      level = match[1].length;
      buffer = [];
    } else {
      buffer.push(line);
    }
  }
  flush();

  return sections;
}
