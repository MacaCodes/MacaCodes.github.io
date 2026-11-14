# Design system

The approved direction is "lifecycle": one coloured line running from Discover to Support.
It is the only decorative element, and it carries meaning: the order work happens in.

## Principles

- One bold thing. The lifecycle line is the only gradient and the only colour beyond ink.
- No labels above headings, no uppercase, no monospace, no numbered markers, no status pills.
  Status is written as a sentence ("In production. I still support them.").
- No cards, shadows or rounded boxes. Structure comes from rules, columns and white space.
- Left-aligned throughout. Reading text never runs wider than 38rem.
- Every claim must be supported by the CV. Consultancy clients stay anonymous.

## Colour

| Token           | Hex       | Use                                   | Contrast          |
| --------------- | --------- | ------------------------------------- | ----------------- |
| `--paper`       | `#FFFFFF` | Page background                       |                   |
| `--wash`        | `#EEF3F0` | Alternate section background          |                   |
| `--ink`         | `#0F2A24` | All main text, rules, diagram strokes | 15.25 on paper, 13.59 on wash |
| `--ink-soft`    | `#4C5F59` | Supporting text                       | 6.80 on paper, 6.06 on wash   |
| `--rule`        | `#D5DDD9` | Hairline dividers, unfilled stage bar |                   |
| `--stage-start` | `#2447D6` | Line start (Discover), focus outline  | 7.13 on paper, 6.35 on wash   |
| `--stage-mid`   | `#0A8791` | Line middle (Test)                    | graphic only      |
| `--stage-end`   | `#1F7A4A` | Line end (Support)                    | graphic only      |

Stage colours are never used for text and never carry meaning on their own:
every stage is also named in words.

## Type

One family: Archivo Variable (SIL Open Font Licence), self-hosted through
`@fontsource-variable/archivo`. No requests to Google.

| Role            | Size token   | Weight | Width |
| --------------- | ------------ | ------ | ----- |
| Hero sentence   | `--text-xxl` | 500    | 108%  |
| Section heading | `--text-xl`  | 600    | 108%  |
| Sub-heading, lead paragraph | `--text-l` | 600 / 400 | 108% / 100% |
| Body            | `--text-m` (17px) | 400 | 100% |
| Supporting      | `--text-s` (15px) | 400 | 100% |

Sentence case everywhere. Line height 1.6 for body, 1.15 for headings.

## Layout and spacing

- Page width 70rem, gutter `clamp(1.25rem, 5vw, 3rem)`.
- Section padding `clamp(2.5rem, 5.5vw, 3.875rem)` for a compact but unhurried rhythm.
- Breakpoints: 60rem (tablet), 42rem (phone). Multi-column grids collapse to one column on phones.
- The hero line keeps all six clickable stages visible across breakpoints, alternating labels above
  and below the line to stay compact.

## Components

- **Lifecycle line**: 3px, horizontal in the hero (also the stage navigation), vertical beside the walk-through.
- **Stage**: name on the left, lead sentence, short list, one `<details>` for technical depth.
- **Case study**: title followed by Context, My role, What changed, Status and Built with. The three strongest case studies appear before the delivery process.
- **Delivered system**: concise title, delivery summary, status or outcome and technologies. No stage-coverage bars.
- **Links**: ink, underlined, thicker underline on hover. No buttons.
- **Focus**: 2px `--stage-start` outline, 3px offset.
- **Illustration**: one line-drawn plant, on the 404 page only.
- **Navigation**: text labels remain icon-free for immediate recognition. The solid header stays
  visible on long pages; the lifecycle bar sits directly beneath it while the work section scrolls.
  The hero portrait docks beside the name once its larger version leaves the viewport.

## Motion

One effect: the vertical line draws in as the walk-through scrolls past (CSS scroll-driven
animation, no JavaScript). It is skipped when the browser lacks support or when
`prefers-reduced-motion: reduce` is set; the line is then simply shown in full.

## Second pass (approved changes)

### Dark mode

Follows the system setting by default. The header toggle overrides it and the choice is
saved in `localStorage`. Dark tokens:

| Token        | Hex       |
| ------------ | --------- |
| `--paper`    | `#0F1F1B` |
| `--wash`     | `#162B26` |
| `--ink`      | `#E8EFEC` |
| `--ink-soft` | `#A9BBB5` |
| `--rule`     | `#2C433D` |
| Stage line   | `#7C96FF` to `#3CC1CB` to `#5CCB8F` |

### Icons

Fluent UI System Icons (Microsoft, MIT licence), 24px regular, inlined at build time by
`src/components/Icon.astro`. Used for the featured case studies, the three supporting practice
areas, the six skill groups and the theme toggle. No
Microsoft product logos: their terms limit those to diagrams, training
and documentation.

### Text density

- Each stage shows one sentence. Everything else sits behind its disclosure.
- The page is evidence-led: three featured case studies first, then supporting systems, then
  the delivery lifecycle. Outcomes distinguish production work from work still in testing.
- UX/UI, governance and enablement sit together under "The work around the build" so those strengths
  support the engineering story without taking over the site.
- The background section is three short facts and a timeline, not paragraphs.

### Data visuals

- Search before and after: two bars drawn to scale (120 seconds against 5).
- Dev, UAT, Production: three boxes in the stage colours.

### Other

- The transparent line-drawn portrait sits beside the hero and follows the active theme.
- The favicon is a compact custom M with the lifecycle line. It stays legible at small sizes and
  uses the dark theme colours for consistent contrast.
- A sticky stage bar inside the walk-through highlights the stage being read.
- Header reads "Macauley - Power Platform Developer" and stays on one line.

### Portrait

The hero portrait is an original transparent line drawing (`src/assets/macauley-drawing.svg`),
inlined so it takes the ink colour in both themes. Its natural oval eyes, restrained toothy smile
and collared shirt keep the character approachable without becoming cartoonish. Dark mode adds
separate dark lenses with softly hexagonal frames in the lifecycle gradient. Personal photographs
are not stored in the public repository.
