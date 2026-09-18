import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { curriculum } from '../config/curriculum';

function SidebarContents({ path, onNavigate }: { path: string; onNavigate?: () => void }) {
  return (
    <nav aria-label="Curriculum" className="flex h-full flex-col">
      <a href="/" onClick={onNavigate} className="block border-b border-white/10 px-6 py-6">
        <span className="block text-[11px] font-semibold uppercase tracking-[.2em] text-[#e9c46a]">Source-grounded curriculum</span>
        <strong className="mt-2 block font-serif text-xl font-normal leading-tight text-white">Enterprise AI Governance Learning</strong>
      </a>
      <ol className="flex-1 space-y-0.5 overflow-y-auto px-3 py-4">
        {curriculum.map((module, moduleIndex) => {
          const href = `/${module.slug}`;
          const active = path === href;
          const showSectionLabel = moduleIndex === 0 || curriculum[moduleIndex - 1].section !== module.section;
          return (
            <li key={module.slug}>
              {showSectionLabel && (
                <p className={'px-3 pb-1 text-[10px] font-semibold uppercase tracking-[.14em] text-white/40 ' + (moduleIndex === 0 ? '' : 'pt-4')}>
                  {module.section}
                </p>
              )}
              <a
                href={href}
                onClick={onNavigate}
                aria-current={active ? 'page' : undefined}
                className={
                  'flex items-baseline gap-3 rounded-sm px-3 py-2 text-sm leading-snug ' +
                  (active ? 'bg-[#e9c46a] text-[#14211c] font-semibold' : 'text-white/80 hover:bg-white/5')
                }
              >
                <span className={'font-mono text-[11px] ' + (active ? 'text-[#14211c]' : 'text-[#e9c46a]')}>
                  {String(module.number).padStart(2, '0')}
                </span>
                <span>{module.title}</span>
              </a>
            </li>
          );
        })}
      </ol>
      <div className="border-t border-white/10 px-6 py-5 text-xs leading-relaxed text-white/50">
        CC BY 4.0 · Michael Kaplan
        <br />
        <a href="https://forensicgovernance.com" className="text-[#e9c46a] hover:underline">forensicgovernance.com →</a>
      </div>
    </nav>
  );
}

export function Sidebar({ path }: { path: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-black/10 bg-[#14211c] px-4 py-3 text-white lg:hidden">
        <a href="/" className="font-serif text-base font-normal">Enterprise AI Governance Learning</a>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open curriculum menu"
          aria-expanded={isOpen}
          className="p-2"
        >
          <Menu size={22} />
        </button>
      </div>

      <aside className="hidden w-[320px] shrink-0 bg-[#14211c] lg:block">
        <div className="sticky top-0 h-screen">
          <SidebarContents path={path} />
        </div>
      </aside>

      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-[85%] max-w-sm bg-[#14211c]">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close curriculum menu"
              className="absolute right-3 top-3 p-2 text-white"
            >
              <X size={22} />
            </button>
            <SidebarContents path={path} onNavigate={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
