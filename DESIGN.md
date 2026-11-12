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
- Section padding `clamp(4.5rem, 10vw, 8rem)`.
- Breakpoints: 60rem (tablet), 42rem (phone). Multi-column grids collapse to one column on phones.
- The hero line is six columns on desktop, three on tablet, two on phone.

## Components

- **Lifecycle line**: 3px, horizontal in the hero (also the stage navigation), vertical beside the walk-through.
- **Stage**: name on the left, lead sentence, short list, one `<details>` for technical depth.
- **Project**: title, status sentence, paragraph, technologies, six-segment bar showing stages covered, with the same information in words.
- **Diagram**: HTML boxes with 1px ink borders, so it reflows on small screens. Only for real architecture.
- **Links**: ink, underlined, thicker underline on hover. No buttons.
- **Focus**: 2px `--stage-start` outline, 3px offset.
- **Illustration**: one line-drawn plant, on the 404 page only.

## Motion

One effect: the vertical line draws in as the walk-through scrolls past (CSS scroll-driven
animation, no JavaScript). It is skipped when the browser lacks support or when
`prefers-reduced-motion: reduce` is set; the line is then simply shown in full.
