import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BlankInput } from './BlankInput';

export function Markdown({ content, moduleSlug }: { content: string; moduleSlug?: string }) {
  return (
    <div className="prose-doc">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={
          moduleSlug
            ? {
                img: ({ src, alt }) =>
                  typeof src === 'string' && src.startsWith('blank-') ? (
                    <BlankInput moduleSlug={moduleSlug} blankId={src} />
                  ) : (
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <img src={src} alt={alt} />
                  ),
              }
            : undefined
        }
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
