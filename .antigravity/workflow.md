# Design-to-Code Workflow — CONSERVVE INFRA SOLUTIONS

> This is the primary development workflow for this project.
> All pages and components are designed first (in Google AI Studio or equivalent),
> then handed off to Antigravity/Gemini for implementation in Next.js + TypeScript.
> Gemini must NEVER invent or assume design decisions — derive everything from the provided artifact.

---

## 1. Workflow Overview

```
Designer (Google AI Studio)
        │
        │  Shares one of:
        │  ① Screenshot / image of the design
        │  ② AI Studio–generated HTML/CSS code
        │  ③ Both (preferred)
        ▼
Gemini (Antigravity IDE)
        │
        │  Step 1: Analyse the design artifact
        │  Step 2: Map it to the component inventory
        │  Step 3: Derive all visual decisions
        │  Step 4: Implement in Next.js + TypeScript
        │  Step 5: Self-review against design
        ▼
Codebase (GitHub)
```

---

## 2. Input Types & How to Handle Each

### Input Type A — Screenshot / Image

When a screenshot is provided, Gemini must perform a **Visual Design Analysis** before writing a single line of code. Output the analysis as a comment block at the top of the implementation file:

```
/*
 * DESIGN ANALYSIS — [ComponentName]
 * Source: Screenshot provided [date / task reference]
 *
 * Layout:
 *   - [Describe the overall layout structure — grid, flex, columns]
 *   - [Note any asymmetry, overlap, or special positioning]
 *
 * Typography:
 *   - [Heading: estimated size, weight, font]
 *   - [Body: estimated size, weight, colour]
 *   - [Any all-caps, tracking, or special type treatment]
 *
 * Colours (map to design tokens):
 *   - [Observed colour] → [CSS variable or Tailwind token]
 *
 * Spacing:
 *   - [Section padding estimate — map to 4px grid]
 *   - [Gap between elements]
 *
 * Components identified:
 *   - [List every distinct sub-component visible]
 *
 * Interactions (if inferable):
 *   - [Hover states, animations, scroll effects if visible]
 *
 * Questions / Assumptions:
 *   - [Flag anything ambiguous BEFORE implementing]
 */
```

> Rule: If anything in the screenshot is ambiguous — spacing, exact colour, interaction — LIST IT as a question/assumption. Do not guess silently.

---

### Input Type B — AI Studio HTML/CSS Code

When HTML/CSS code from AI Studio is provided, Gemini must perform a **Code Translation Analysis**:

```
/*
 * CODE TRANSLATION ANALYSIS — [ComponentName]
 * Source: AI Studio code provided [date / task reference]
 *
 * Original tech: [HTML/CSS / Tailwind / inline styles / etc.]
 * Target tech:   Next.js + TypeScript + Tailwind CSS
 *
 * Structure mapping:
 *   - [Original HTML element] → [React component / semantic equivalent]
 *
 * Style mapping:
 *   - [Original inline style / class] → [Tailwind class / CSS variable]
 *   - [Any hardcoded colours] → [Mapped to design token]
 *   - [Any hardcoded fonts] → [Mapped to font-tibere or font-gotham]
 *
 * Static content to extract:
 *   - [Any copy/text found in the code] → move to data JSON file
 *   - [Any image paths] → update to Next.js Image component with /public paths
 *
 * What changes in translation:
 *   - [List every deviation from the original code and why]
 *
 * What stays the same:
 *   - [Visual outcome should be pixel-equivalent]
 */
```

---

### Input Type C — Both Screenshot + Code (Preferred)

Use the code as the structural reference and the screenshot as the visual truth check. If there is a conflict between the two, **the screenshot wins** — it represents the designer's intent.

---

## 3. Step-by-Step Implementation Protocol

### Step 1 — Receive & Acknowledge Design Artifact
Confirm what was received: "I have received [screenshot / AI Studio code / both] for [component/section name]."

### Step 2 — Run Design Analysis
Output the analysis block (Type A or B above) before any code.

### Step 3 — Map to Component Architecture
Identify which files will be created or modified:
```
Files to create:
  src/components/sections/hero-section.tsx
  src/components/ui/stats-bar.tsx  (if new primitive needed)

Files to modify:
  src/app/page.tsx  (import new section)
  src/data/home.json  (extract static content)
```

### Step 4 — Implement
Follow the component template from `coding-standards.md`. Build in this order:
1. TypeScript interface (Props)
2. Static data extraction to JSON
3. Component JSX + Tailwind
4. Responsive variants (mobile → tablet → desktop)
5. Animations (if present in design)

### Step 5 — Self-Review Checklist
Before declaring the component done, run through:
```
[ ] Visual output matches the provided design artifact
[ ] All colours use CSS variables (no raw hex)
[ ] Typography: Tibere for headings, Gotham for body
[ ] Spacing follows 4px grid
[ ] Responsive: tested at 375px, 768px, 1280px
[ ] All static text extracted to data JSON (no hardcoded copy in TSX)
[ ] All images use next/image
[ ] Accessibility: alt text, semantic HTML, focus states
[ ] TypeScript: zero errors, no `any`
[ ] Named export, className prop supported
```

---

## 4. Homepage-Specific Rules

The homepage design is the most advanced design artifact in this project. It sets the visual tone for all other pages. Rules specific to the homepage:

- **Pixel-faithful replication** — the homepage was carefully designed; do not simplify or reinterpret sections
- **Hero section** — treat as the highest-priority component; analyse screenshot in full detail
- **Section order** — must match the design exactly; do not reorder sections
- **Animation** — if the design implies motion (hero text entrance, scroll reveals), implement with Framer Motion
- **Partial design** — the homepage design is "mostly ready but not complete". Implement what is confirmed. For unconfirmed sections, use the `pages-spec.md` blueprint and flag it: `// TODO: Awaiting design confirmation for this section`

---

## 5. Design Handoff Checklist (for Designer)

Before sharing a design artifact with Gemini, confirm:
```
[ ] Screenshot is high-resolution (≥ 1440px wide for desktop view)
[ ] Mobile view is included if layout differs significantly
[ ] Hover/interaction states are noted (even in text, if not in screenshot)
[ ] Any fonts, colours, or spacing NOT in the brand guidelines are called out explicitly
[ ] Section name matches the component inventory in components-spec.md
[ ] If sharing AI Studio code — confirm it's the latest version
```

---

## 6. Deviation Policy

Gemini must NEVER silently deviate from a provided design. The only acceptable reasons to deviate are:

| Reason                              | Action Required                                              |
|-------------------------------------|--------------------------------------------------------------|
| Design uses non-brand colour        | Flag it, use the brand token equivalent, note the substitution |
| Design has inaccessible contrast    | Flag it, fix it, document why                                |
| Design is not responsive            | Implement a sensible responsive equivalent, document the decisions |
| Design references a missing asset   | Use placeholder, add `// TODO: Replace with actual asset`    |
| Design is technically not feasible  | Explain why, propose the closest feasible alternative        |

> If in doubt: implement as close to the design as possible, then add a `// DESIGN NOTE:` comment explaining any decision made.

---

## 7. File Naming for Design Artifacts

When design files are referenced in code comments, use this format:
```
// Design source: [AI Studio] [homepage-hero] [2024-01]
// Design source: [Screenshot] [services-grid-v2] [2024-01]
```

This creates an audit trail linking code to its design origin.
