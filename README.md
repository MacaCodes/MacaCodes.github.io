# Macauley Gibson's Power Platform portfolio

Source for [macacodes.github.io](https://macacodes.github.io/). A one-page portfolio showing
anonymised Power Platform and Dynamics 365 work, built with [Astro](https://astro.build) and
deployed to GitHub Pages by GitHub Actions.

## Run it locally

Requires Node 22 or later.

```bash
npm ci
npm run dev
```

## Change the content

All copy is in [`src/content/site.ts`](src/content/site.ts): the stages, projects, skills,
journey and qualifications. The hero sentence and section headings are in
[`src/pages/index.astro`](src/pages/index.astro). The hero illustration is
`src/assets/macauley-drawing.svg`.

Visual rules are in [`DESIGN.md`](DESIGN.md); tokens are at the top of
[`src/styles/global.css`](src/styles/global.css).

## Check and deploy

```bash
npm run validate
```

This runs the type check, lint, build and the built-site checks in `scripts/check-dist.mjs`.
Pushing to `main` runs the same checks in GitHub Actions and deploys `dist/` to GitHub Pages.
A failed check stops the deployment.

If the hero wording changes, regenerate the social image with `npm run og`.

## Privacy rules for this repository

- Never commit a CV, email address, phone number or home address.
- Current and former employers and clients are not named in public copy.
- Do not commit personal photographs.
- No analytics, cookies or contact form.
