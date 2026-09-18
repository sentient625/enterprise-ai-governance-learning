import { Sidebar } from './components/Sidebar';
import { HomePage } from './pages/HomePage';
import { ModulePage } from './pages/ModulePage';
import { findModule } from './config/curriculum';

const path = window.location.pathname.replace(/\/+$/, '') || '/';

function Content() {
  if (path === '/') return <HomePage />;

  const slug = path.slice(1);
  if (!slug.includes('/')) {
    const module = findModule(slug);
    if (module) return <ModulePage module={module} />;
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#a15a1f]">404</p>
      <h1 className="mt-4 font-serif text-3xl font-normal text-[#1c1a15]">Page not found</h1>
      <a href="/" className="mt-6 inline-block text-[#a15a1f] underline underline-offset-2">Return to the curriculum</a>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f2e7] text-[#1c1a15] lg:flex">
      <Sidebar path={path} />
      <main className="flex-1">
        <Content />
      </main>
    </div>
  );
}
