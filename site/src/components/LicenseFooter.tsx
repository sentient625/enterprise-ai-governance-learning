export function LicenseFooter() {
  return (
    <footer className="license-footer border-t border-[#d9cfb6] px-6 py-6 text-sm leading-relaxed text-[#726c5d] md:px-12">
      <div className="mx-auto max-w-4xl">
        <p>Original educational material by Michael Kaplan is licensed under{' '}
          <a className="underline" href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>, except where otherwise noted.
          You may share and adapt it, including for internal enterprise use and commercially.
          Credit Michael Kaplan, link to the source and license, and indicate any changes.
          Referenced third-party materials retain their own terms.</p>
        <p className="mt-2"><a className="underline" href="https://learn.enterpriseaigov.com/">Enterprise AI Governance Learning</a>{' · '}
          <a className="underline" href="https://github.com/sentient625/enterprise-ai-governance-learning/blob/main/LICENSE.md">Repository license</a></p>
      </div>
    </footer>
  );
}
