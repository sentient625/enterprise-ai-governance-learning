# Enterprise AI Governance Learning — Site

A standalone reading app for the curriculum in this repository. It reads the sibling `00_LEARNING_CONTROL/`,
`01_AI_AGENT_IDENTITY_GOVERNANCE/`, and `02_OPERATIONAL_AI_GOVERNANCE/` markdown directly at build time — there is
no copy of the curriculum text inside `site/`, so content changes anywhere else in this repository take effect on
the next build without touching this folder.

This is intentionally a separate app from `forensicgovernance.com`, with its own persistent-sidebar reading layout
suited to a multi-module curriculum, rather than being squeezed into that site's short-form decision-brief page
format. The main site links to this app; it does not embed it.

## Local development

```bash
cd site
npm install
npm run dev
```

## Type checking and build

```bash
npm run lint
npm run build
```

Build output goes to `site/dist`.

## Deployment

Deploy as its own Cloudflare Pages project (separate from the `forensic-governance-site` project):

- **Root directory:** `site`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node version:** 22

Point a subdomain (e.g. `learn.enterpriseaigov.com`) at this Pages project, then add a single linked entry on
`forensicgovernance.com` to it — do not re-embed the curriculum in the main site.
