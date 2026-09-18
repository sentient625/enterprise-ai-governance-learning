import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BlankCell } from './BlankCell';
import { BlankInput } from './BlankInput';

export function Markdown({ content, moduleSlug }: { content: string; moduleSlug?: string }) {
  return (
    <div className="prose-doc">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={
          moduleSlug
            ? {
                img: ({ src, alt }) => {
                  if (typeof src === 'string' && src.startsWith('blank-cell-')) {
                    return <BlankCell moduleSlug={moduleSlug} blankId={src} />;
                  }
                  if (typeof src === 'string' && src.startsWith('blank-run-')) {
                    return <BlankInput moduleSlug={moduleSlug} blankId={src} />;
                  }
                  // eslint-disable-next-line jsx-a11y/alt-text
                  return <img src={src} alt={alt} />;
                },
              }
            : undefined
        }
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
