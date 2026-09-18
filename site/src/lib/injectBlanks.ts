const TABLE_ROW = /^\s*\|.*\|\s*$/;
const HEADER_SEPARATOR_ROW = /^\s*\|?[\s:|-]+\|?\s*$/;
const UNDERSCORE_RUN = /_{3,}/g;

export interface InjectBlanksResult {
  markdown: string;
  blankIds: string[];
}

/**
 * Converts two static "fill this in" patterns into real inline inputs: empty table
 * cells (e.g. a "Your definition" column left blank for the reader to complete) and
 * runs of 3+ underscores used as fill-in-the-blank markers in template sentences
 * ("may _____ against _____"). Both are rewritten as a markdown image placeholder
 * (`![blank](blank:N)`) with a stable sequential id — an image is the one inline
 * markdown construct that's valid inside a table cell, a paragraph, or a list item
 * alike, and react-markdown's `img` renderer can be overridden to render an actual
 * `<input>` there instead of a picture. Table header-separator rows ("|---|---|") and
 * non-empty cells are left untouched.
 */
export function injectBlanks(markdown: string): InjectBlanksResult {
  let nextIndex = 0;
  const blankIds: string[] = [];
  // No colon: react-markdown's default URL sanitizer treats "scheme:..." image sources as
  // a potential unsafe protocol and neutralizes them, which would strip this identifier
  // before the custom `img` renderer ever saw it.
  const assignId = () => {
    const id = `blank-${nextIndex++}`;
    blankIds.push(id);
    return id;
  };

  const lines = markdown.split('\n').map(line => {
    if (TABLE_ROW.test(line) && !HEADER_SEPARATOR_ROW.test(line)) {
      const cells = line.split('|');
      return cells
        .map((cell, cellIndex) => {
          if (cellIndex === 0 || cellIndex === cells.length - 1) return cell;
          return cell.trim() === '' ? ` ![blank](${assignId()}) ` : cell;
        })
        .join('|');
    }
    return line;
  });

  const withInlineBlanks = lines.join('\n').replace(UNDERSCORE_RUN, () => `![blank](${assignId()})`);

  return { markdown: withInlineBlanks, blankIds };
}
