const TABLE_ROW = /^\s*\|.*\|\s*$/;
const HEADER_SEPARATOR_ROW = /^\s*\|?[\s:|-]+\|?\s*$/;
const UNDERSCORE_RUN = /_{3,}/g;

export interface InjectBlanksResult {
  markdown: string;
  blankIds: string[];
}

/**
 * Converts two static "fill this in" patterns into real inputs: empty table cells
 * (e.g. a "Your definition" column left blank for the reader to complete) and runs of
 * 3+ underscores used as fill-in-the-blank markers in template sentences
 * ("may _____ against _____"). Both are rewritten as a markdown image placeholder
 * (`![blank](id)`) with a stable id — an image is the one inline markdown construct
 * valid inside a table cell, a paragraph, or a list item alike, and react-markdown's
 * `img` renderer can be overridden to render a real input there instead of a picture.
 *
 * The two cases get different id prefixes ("blank-cell-" vs "blank-run-") because they
 * need different widgets: a table cell (like "Your definition") can hold a full
 * sentence, so it needs a wrapping, vertically-resizable field, while a mid-sentence
 * blank needs to stay a small fixed-width field so a long answer doesn't stretch the
 * surrounding paragraph or table row.
 *
 * Ids have no colon ("blank-cell-3", not "blank:3") because react-markdown's default
 * URL sanitizer treats a "scheme:" style image source as a potentially unsafe protocol
 * and neutralizes it before the custom renderer ever sees it. Table header-separator
 * rows ("|---|---|") and non-empty cells are left untouched.
 */
export function injectBlanks(markdown: string): InjectBlanksResult {
  let nextCellIndex = 0;
  let nextRunIndex = 0;
  const blankIds: string[] = [];

  const assignCellId = () => {
    const id = `blank-cell-${nextCellIndex++}`;
    blankIds.push(id);
    return id;
  };
  const assignRunId = () => {
    const id = `blank-run-${nextRunIndex++}`;
    blankIds.push(id);
    return id;
  };

  const lines = markdown.split('\n').map(line => {
    if (TABLE_ROW.test(line) && !HEADER_SEPARATOR_ROW.test(line)) {
      const cells = line.split('|');
      return cells
        .map((cell, cellIndex) => {
          if (cellIndex === 0 || cellIndex === cells.length - 1) return cell;
          return cell.trim() === '' ? ` ![blank](${assignCellId()}) ` : cell;
        })
        .join('|');
    }
    return line;
  });

  const withInlineBlanks = lines.join('\n').replace(UNDERSCORE_RUN, () => `![blank](${assignRunId()})`);

  return { markdown: withInlineBlanks, blankIds };
}
