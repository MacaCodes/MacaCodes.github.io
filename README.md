# Macauley's portfolio

Source for <https://macacodes.github.io/>. A one-page static site built with [Astro](https://astro.build)
and deployed to GitHub Pages by GitHub Actions.

## Run it locally

Requires Node 22 or later.

```bash
npm install
npm run dev
```

## Change the content

All copy is in [`src/content/site.ts`](src/content/site.ts): the stages, projects, skills,
journey and qualifications. Projects use a fixed formula (need, what I did, result, built with). The hero sentence and section headings are in
[`src/pages/index.astro`](src/pages/index.astro). The hero illustration is
`src/assets/macauley-drawing.svg`.

Visual rules are in [`DESIGN.md`](DESIGN.md); tokens are at the top of
[`src/styles/global.css`](src/styles/global.css).

## Check and deploy

```bash
npm run validate
```

This runs the type check, lint, build and the built-site checks in `scripts/check-dist.mjs`
(no email, phone number or surname in the output, no broken links or anchors, required metadata present).

Pushing to `main` runs the same checks in GitHub Actions and deploys `dist/` to GitHub Pages.
A failed check stops the deployment.

If the hero wording changes, regenerate the social image with `npm run og`.

## Privacy rules for this repository

- Never commit a CV, or any email address, phone number or home address.
- Current and former employers and clients are not named in public copy.
- Do not commit personal photographs.
- No analytics, cookies or contact form.
