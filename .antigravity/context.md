# CONSERVVE INFRA SOLUTIONS — Project Context

## Project Identity

| Field            | Value                                         |
|------------------|-----------------------------------------------|
| Company          | CONSERVVE INFRA SOLUTIONS                     |
| Industry         | Construction & Land Acquisition Management    |
| Website Type     | Portfolio / Corporate Brochure Site           |
| Stack            | Next.js 14+ (App Router), TypeScript          |
| Styling          | Tailwind CSS + CSS Variables (design tokens)  |
| Rendering        | Static Site Generation (SSG) — no backend     |
| AI IDE           | Antigravity IDE                               |
| AI Model         | Gemini                                        |

---

## Mission Statement

CONSERVVE INFRA SOLUTIONS is a premium construction and land acquisition management firm. The website must position the company as a trusted, authoritative industry leader — capable of handling large-scale infrastructure and land projects with precision, transparency, and excellence.

---

## Brand Voice & Tone

The website communicates across four tonal pillars simultaneously:

| Pillar                    | What it means in practice                                                     |
|---------------------------|-------------------------------------------------------------------------------|
| **Premium & Authoritative** | Language is confident, never boastful. We lead, we don't pitch.             |
| **Bold & Modern**           | Clean layouts, strong visual hierarchy, contemporary typography choices.     |
| **Trustworthy & Professional** | Data-backed claims, clear service descriptions, no vague filler copy.   |
| **Warm & Approachable**     | Human-first language. Clients feel welcome, not intimidated.                |

> Copy rule: Write like a senior partner speaking to a valued client — knowledgeable, direct, warm, never salesy.

---

## Brand Colours (Design Tokens)

```css
--color-primary:       #0C2C4D;  /* Navy Blue   – dominant brand colour */
--color-accent:        #BFA052;  /* Golden Beige – highlight, CTA, borders */
--color-surface:       #FFFFFF;  /* White        – primary background      */
--color-surface-muted: #F4F4F5;  /* Light Grey   – section alternation     */
--color-text-primary:  #0C2C4D;  /* Navy         – headlines               */
--color-text-body:     #2E3A4A;  /* Dark Slate   – body copy               */
--color-text-muted:    #6B7280;  /* Grey         – captions, meta text      */
--color-border:        #E5E7EB;  /* Light border – dividers                */
```

---

## Typography

| Role              | Font               | Weight | Usage                              |
|-------------------|--------------------|--------|------------------------------------|
| Display / H1      | Tibere OTW03-Bold  | 700    | Hero headlines, section titles     |
| H2 / H3           | Tibere OTW03-Bold  | 700    | Sub-section headings               |
| Body / UI         | Gotham             | 400    | All body copy, labels, navigation  |
| UI Emphasis       | Gotham             | 600    | Buttons, callouts, stats           |
| Captions / Meta   | Gotham             | 400    | Dates, tags, small print           |

> Font loading: Self-host Tibere OTW03-Bold via `@font-face` in `globals.css`. Load Gotham via same method or fallback to `'Inter', sans-serif` if unavailable.

---

## Site Pages

| Page               | Route                | Priority |
|--------------------|----------------------|----------|
| Home               | `/`                  | P0       |
| About Us           | `/about`             | P0       |
| Services           | `/services`          | P0       |
| Projects           | `/projects`          | P0       |
| Land Acquisition   | `/land-acquisition`  | P1       |
| Contact            | `/contact`           | P0       |
| Testimonials       | `/testimonials`      | P1       |
| Team               | `/team`              | P1       |

---

## Technical Constraints

- **No backend, no API routes** — all data is static JSON or MDX files in `/data`
- **No auth, no CMS** — content lives in the codebase
- **SEO-first** — every page must have `generateMetadata()`, OG tags, structured data
- **Performance target** — Lighthouse score ≥ 90 on all four metrics
- **Accessibility** — WCAG 2.1 AA compliance minimum
- **Mobile-first** — design breakpoints: `sm:640 md:768 lg:1024 xl:1280 2xl:1536`

---

## Repository Structure (Expected)

```
conservve-website/
├── .antigravity/           ← AI agent config (this folder)
├── docs/                   ← Developer & design documentation
├── public/
│   ├── fonts/              ← Self-hosted Tibere & Gotham
│   └── images/             ← Optimised assets
├── src/
│   ├── app/                ← Next.js App Router pages
│   ├── components/
│   │   ├── ui/             ← Primitive components (Button, Card, etc.)
│   │   ├── layout/         ← Header, Footer, Nav
│   │   └── sections/       ← Page-level section components
│   ├── data/               ← Static JSON content files
│   ├── hooks/              ← Custom React hooks
│   ├── lib/                ← Utility functions
│   ├── styles/             ← globals.css, tokens
│   └── types/              ← Shared TypeScript interfaces
├── .antigravity/
│   ├── context.md          ← THIS FILE
│   ├── agents.md
│   └── skills.md
└── docs/
    ├── brand-guidelines.md
    ├── design-system.md
    ├── architecture.md
    ├── coding-standards.md
    ├── pages-spec.md
    └── components-spec.md
```

---

## Development Workflow — Design First

**All pages and components in this project are designed before they are coded.**  
Designs originate from Google AI Studio and are handed off as screenshots, HTML/CSS code, or both.

> ⚠️ Gemini must NEVER invent or assume visual/layout decisions. Every implementation must be derived from a provided design artifact.

**Read `.antigravity/workflow.md` before starting any implementation task.**

### Current Design Status

| Page / Section        | Design Status              | Action for Gemini                                 |
|-----------------------|----------------------------|---------------------------------------------------|
| Homepage (most)       | ✅ Mostly designed          | Analyse provided artifact, replicate faithfully   |
| Homepage (some parts) | 🔶 Partially ready          | Implement confirmed sections; flag unconfirmed    |
| All other pages       | 🕐 Pending — coming later   | Wait for design artifact; use pages-spec.md as interim brief |

### Handoff Input Types
1. **Screenshot** — visual ground truth; analyse layout, type, colour, spacing before coding
2. **AI Studio HTML/CSS code** — structural reference; translate to Next.js + TypeScript + Tailwind
3. **Both** — preferred; screenshot = visual truth, code = structural guide

---

## Golden Rules for Every AI Agent

1. **Never deviate from brand colours** — no inline hex values; always use CSS variables.
2. **Typography hierarchy is sacred** — Tibere for headings, Gotham for everything else.
3. **Components are single-responsibility** — one component, one concern.
4. **TypeScript is strict** — no `any`, no implicit types, interfaces over types for objects.
5. **Accessibility first** — semantic HTML, ARIA labels, keyboard navigation on all interactives.
6. **No placeholder logic** — if a feature isn't needed, don't scaffold it.
7. **File names are kebab-case** — `hero-section.tsx`, not `HeroSection.tsx` in the file system.
8. **Export components as named exports** — not default exports (except page files).
