# Skills — CONSERVVE INFRA SOLUTIONS

> Skills are reusable, self-contained capabilities that any agent can invoke.
> Each skill defines its trigger condition, exact output format, and quality bar.

---

## Skill: `analyze-design-screenshot`

**Trigger:** A screenshot or image of a design is shared for implementation

### Process
1. Acknowledge the artifact: "I have received the screenshot for [section name]. Running design analysis."
2. Study the image in full — layout, typography, colours, spacing, components, interactions
3. Output the full **Design Analysis Report** (see `workflow.md` for exact format)
4. Map all observed colours to CSS variables from `design-system.md`
5. Map all fonts to `font-tibere` or `font-gotham`
6. Identify and name every sub-component visible
7. List all ambiguities before writing a single line of code
8. Only proceed to implementation after the analysis is complete

### Quality Gates
- [ ] Every colour mapped to a CSS variable (no raw hex in analysis)
- [ ] Every font identified and mapped to brand font
- [ ] All sub-components named and listed
- [ ] All ambiguities explicitly listed
- [ ] Responsive behaviour noted (does design show mobile? tablet?)

---

## Skill: `translate-ai-studio-code`

**Trigger:** HTML/CSS code from Google AI Studio is shared for implementation

### Process
1. Acknowledge: "I have received AI Studio code for [section name]. Running translation analysis."
2. Parse the full code — structure, styles, content, dependencies
3. Output the full **Code Translation Analysis** (see `workflow.md` for exact format)
4. Map every hardcoded value (hex colour, font name, px size) to a design token
5. Extract all static text/copy to a `src/data/*.json` file
6. Replace all `<img>` tags with `next/image` and all `<a>` tags with `next/link`
7. Convert inline styles and non-Tailwind classes to Tailwind utilities
8. Remove any non-brand fonts, colours, or styling patterns
9. Implement with full TypeScript typing

### Translation Rules
- If original code uses `position: absolute` extensively — evaluate if CSS Grid/Flex achieves the same; prefer modern layout
- If original code has hardcoded widths in px — convert to responsive Tailwind (`w-full md:w-1/2`, etc.)
- If original code uses `@media` in `<style>` — convert to Tailwind responsive prefixes
- If original code uses JavaScript/jQuery — re-implement with React hooks
- Visual outcome must be equivalent to or better than the original

### Quality Gates
- [ ] Zero inline styles remain
- [ ] Zero hardcoded hex values remain
- [ ] Zero hardcoded font names remain (replaced by font-tibere / font-gotham classes)
- [ ] All static copy extracted to JSON data file
- [ ] All images use next/image with correct props
- [ ] TypeScript: typed props, no `any`

---

## Skill: `design-review-against-artifact`

**Trigger:** "Review [component] against the design" / after `ui-builder` completes implementation

### Process
1. Compare the implemented component visually against the original design artifact
2. Check every element: position, size, colour, typography, spacing, alignment
3. Output a structured diff report

### Diff Report Format
```
DESIGN REVIEW — [ComponentName]
Artifact: [screenshot / AI Studio code / both]

MATCHES ✅
  - [List everything that correctly matches the design]

DISCREPANCIES ⚠️
  - [Element]: Design shows [X], implementation has [Y] → Fix: [suggestion]

IMPROVEMENTS MADE 🔧
  - [Accessibility fix] — [reason]
  - [Responsive addition] — [reason]
  - [Design note addition] — [reason]

OPEN QUESTIONS ❓
  - [Anything still unclear that needs designer input]
```

### Quality Gates
- [ ] Every section of the design has been reviewed
- [ ] All discrepancies are documented
- [ ] All improvements are justified
- [ ] No undocumented deviations remain

---



**Trigger:** "Build a [name] component" / "Create a [name] section"

### Process
1. Read `docs/design-system.md` — confirm tokens, spacing, and variants needed
2. Read `docs/components-spec.md` — check if component already exists or is specced
3. Define the TypeScript `Props` interface first, before any JSX
4. Build the component using Tailwind CSS + CSS variables
5. Add JSDoc comment block above the component
6. Export as named export

### Output Template
```tsx
import { cn } from '@/lib/utils';

interface ComponentNameProps {
  // typed props here
  className?: string;
}

/**
 * ComponentName — brief description of purpose.
 * Used in: [list pages/sections that use this]
 */
export function ComponentName({ className, ...props }: ComponentNameProps) {
  return (
    <div className={cn('base-classes', className)}>
      {/* implementation */}
    </div>
  );
}
```

### Quality Gates
- [ ] Zero TypeScript errors
- [ ] Uses only CSS variables for brand colours
- [ ] Responsive across all breakpoints
- [ ] Accessible (ARIA, keyboard)
- [ ] `className` prop supported for extension

---

## Skill: `generate-page`

**Trigger:** "Build the [page name] page" / "Create the /route page"

### Process
1. Read `docs/pages-spec.md` — get section list, copy guidelines, and data needs
2. Create the page file at `src/app/[route]/page.tsx`
3. Add `generateMetadata()` at the top of the file
4. Compose sections from existing components in `src/components/sections/`
5. Create any missing section components before assembling the page
6. Add JSON-LD structured data where appropriate

### Page File Template
```tsx
import type { Metadata } from 'next';
// section imports

export const metadata: Metadata = {
  title: 'Page Title | CONSERVVE INFRA SOLUTIONS',
  description: '...',
};

export default function PageName() {
  return (
    <main>
      {/* sections in order */}
    </main>
  );
}
```

### Quality Gates
- [ ] Unique `metadata.title` and `metadata.description`
- [ ] Open Graph and Twitter Card tags present
- [ ] One `<h1>` per page
- [ ] Uses Server Component by default (no `'use client'` on page files)
- [ ] All sections imported from `@/components/sections/`

---

## Skill: `generate-data-file`

**Trigger:** "Create the data file for [page/feature]"

### Process
1. Define a TypeScript interface for the data shape in `src/types/`
2. Create the JSON file in `src/data/` with real or realistic placeholder content
3. Apply brand copy rules (specific, confident, premium tone)
4. Export a typed loader function from `src/lib/data.ts`

### Output Template
```ts
// src/types/services.ts
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

// src/data/services.json  — array of Service objects
// src/lib/data.ts         — getServices(): Service[]
```

### Quality Gates
- [ ] Interface defined before JSON file
- [ ] All string fields are non-empty and brand-voice compliant
- [ ] Loader function is typed and handles missing data gracefully

---

## Skill: `generate-types`

**Trigger:** "Define types for [feature]" / whenever a new data shape is needed

### Rules
- Use `interface` for object shapes (not `type`)
- Use `type` for unions, intersections, and primitives
- Export all types from `src/types/index.ts` (barrel export)
- Never use `any` — use `unknown` and narrow where necessary
- Use `readonly` for arrays that should not be mutated

### Output Template
```ts
// src/types/[feature].ts

export interface FeatureName {
  id: string;
  readonly createdAt: string;
  // ...
}

export type FeatureStatus = 'active' | 'archived' | 'draft';
```

---

## Skill: `accessibility-audit`

**Trigger:** "Audit [component/page] for accessibility" / before any PR merge

### Checklist
```
Semantic HTML
[ ] Headings are hierarchical (h1 → h2 → h3, no skipping)
[ ] Lists use <ul>/<ol>/<li>, not <div> chains
[ ] Buttons are <button>, links are <a> — never swapped
[ ] Forms have <label> elements linked via htmlFor

ARIA
[ ] Decorative images: alt=""
[ ] Informative images: descriptive alt text
[ ] Icon-only buttons: aria-label set
[ ] Modals/drawers: aria-modal, focus trap, Escape key closes
[ ] Dynamic content regions: aria-live where appropriate

Keyboard
[ ] All interactive elements reachable via Tab
[ ] Focus order follows visual order
[ ] Focus-visible ring visible (outline, not outline:none)
[ ] Skip-to-content link at top of page

Colour & Contrast
[ ] Body text (#2E3A4A on white): ratio ≥ 4.5:1 ✓
[ ] Navy on white: ratio ≥ 7:1 ✓
[ ] Golden on navy: verify and adjust if < 3:1 for large text
```

---

## Skill: `generate-seo-metadata`

**Trigger:** "Add metadata to [page]" / whenever a page file is created

### Output Template
```ts
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '[Page] | CONSERVVE INFRA SOLUTIONS',
    description: '[150–160 chars, includes primary keyword naturally]',
    keywords: ['construction', 'land acquisition', 'infrastructure', 'India'],
    openGraph: {
      title: '[Page] | CONSERVVE INFRA SOLUTIONS',
      description: '[same as above]',
      url: 'https://conservveinfra.com/[route]',
      siteName: 'CONSERVVE INFRA SOLUTIONS',
      images: [{ url: '/og/[page].jpg', width: 1200, height: 630, alt: '...' }],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: '[Page] | CONSERVVE INFRA SOLUTIONS',
      description: '[same as above]',
      images: ['/og/[page].jpg'],
    },
    alternates: {
      canonical: 'https://conservveinfra.com/[route]',
    },
  };
}
```

---

## Skill: `responsive-check`

**Trigger:** "Check [component/page] responsiveness" / before marking any task done

### Breakpoint Matrix
| Breakpoint | Width  | Tailwind prefix | Key behaviour checks                          |
|------------|--------|-----------------|-----------------------------------------------|
| Mobile     | 375px  | (default)       | Single column, hamburger nav, full-width CTAs |
| SM         | 640px  | `sm:`           | 2-col grids begin                             |
| MD         | 768px  | `md:`           | Tablet layout, nav may expand                 |
| LG         | 1024px | `lg:`           | Desktop layout, full nav visible              |
| XL         | 1280px | `xl:`           | Max content width cap at 1280px               |
| 2XL        | 1536px | `2xl:`          | Large monitor, centred with padding           |

### Rules
- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Hero sections: full-viewport-height on desktop, min-height on mobile
- All grid components must collapse to 1 column on mobile by default
- Touch targets: minimum 44×44px

---

## Skill: `code-review`

**Trigger:** "Review [file/component]" / before any significant commit

### Review Dimensions
1. **TypeScript** — strict typing, no `any`, proper generics usage
2. **Brand Compliance** — CSS variables used, no raw hex values
3. **Performance** — images optimised, no unnecessary client components, no blocking renders
4. **Accessibility** — semantic HTML, ARIA, keyboard navigation
5. **Maintainability** — clear naming, single responsibility, documented props
6. **Security** — no `dangerouslySetInnerHTML` with unsanitised input, no exposed secrets

### Output Format
```
[CRITICAL] src/components/ui/button.tsx:12
  Issue: Raw hex colour #0C2C4D used in className
  Fix: Replace with `text-[var(--color-primary)]` or `text-primary`

[WARNING] src/components/sections/hero.tsx:34
  Issue: Missing alt text on next/image
  Fix: Add descriptive alt prop

[SUGGESTION] src/lib/utils.ts:8
  Issue: Function lacks JSDoc comment
  Fix: Add description of params and return value
```
