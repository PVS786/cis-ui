# Architecture — CONSERVVE INFRA SOLUTIONS

> This document defines the Next.js project architecture, folder conventions,
> data patterns, and technical decisions for the CONSERVVE website.

---

## 1. Technology Stack

| Layer            | Technology                  | Version  | Rationale                                   |
|------------------|-----------------------------|----------|---------------------------------------------|
| Framework        | Next.js (App Router)        | 14+      | SSG, image optimisation, metadata API       |
| Language         | TypeScript                  | 5.x      | Type safety, IDE support, maintainability   |
| Styling          | Tailwind CSS                | 3.x      | Utility-first, token-compatible, fast       |
| Animation        | Framer Motion               | 11+      | Polished entry animations, accessible       |
| Icons            | Lucide React                | Latest   | Consistent outlined icon set                |
| Forms            | React Hook Form + Zod       | Latest   | Type-safe, performant form handling         |
| Linting          | ESLint + `eslint-config-next`| Latest  | Code quality, Next.js best practices        |
| Formatting       | Prettier                    | Latest   | Consistent code style                       |
| Deployment       | Vercel (recommended)        | —        | Native Next.js support, CDN, analytics      |

---

## 2. Full Folder Structure

```
conservve-website/
│
├── .antigravity/                    # AI agent configuration (Antigravity IDE)
│   ├── context.md                   # Master project context for Gemini
│   ├── agents.md                    # Agent role definitions
│   └── skills.md                    # Reusable skill definitions
│
├── docs/                            # Developer & design documentation
│   ├── brand-guidelines.md
│   ├── design-system.md
│   ├── architecture.md              # THIS FILE
│   ├── coding-standards.md
│   ├── pages-spec.md
│   └── components-spec.md
│
├── public/
│   ├── fonts/                       # Self-hosted font files (.woff2, .woff)
│   │   ├── TibereOTW03-Bold.woff2
│   │   ├── TibereOTW03-Bold.woff
│   │   ├── Gotham-Book.woff2
│   │   ├── Gotham-Medium.woff2
│   │   └── Gotham-Bold.woff2
│   ├── images/                      # Static images (logos, brand assets)
│   │   ├── logo.svg
│   │   ├── logo-white.svg
│   │   └── og/                      # Open Graph images (1200×630px)
│   └── favicon.ico
│
├── src/
│   │
│   ├── app/                         # Next.js App Router
│   │   ├── layout.tsx               # Root layout (fonts, providers, Header/Footer)
│   │   ├── page.tsx                 # Home page — /
│   │   ├── globals.css              # (import only — actual CSS in styles/)
│   │   ├── about/
│   │   │   └── page.tsx             # /about
│   │   ├── services/
│   │   │   └── page.tsx             # /services
│   │   ├── projects/
│   │   │   └── page.tsx             # /projects
│   │   ├── land-acquisition/
│   │   │   └── page.tsx             # /land-acquisition
│   │   ├── contact/
│   │   │   └── page.tsx             # /contact
│   │   ├── testimonials/
│   │   │   └── page.tsx             # /testimonials
│   │   ├── team/
│   │   │   └── page.tsx             # /team
│   │   ├── sitemap.ts               # Auto-generated sitemap
│   │   └── robots.ts                # robots.txt config
│   │
│   ├── components/
│   │   ├── ui/                      # Primitive, reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── card.tsx
│   │   │   ├── section-label.tsx
│   │   │   ├── divider.tsx
│   │   │   ├── container.tsx
│   │   │   ├── icon.tsx
│   │   │   ├── animate-in.tsx
│   │   │   └── index.ts             # Barrel export
│   │   │
│   │   ├── layout/                  # Site-wide layout components
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── mobile-menu.tsx
│   │   │   ├── page-wrapper.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── sections/                # Page-level section components
│   │       ├── hero-section.tsx
│   │       ├── stats-bar.tsx
│   │       ├── services-grid.tsx
│   │       ├── service-detail.tsx
│   │       ├── featured-projects.tsx
│   │       ├── projects-grid.tsx
│   │       ├── project-card.tsx
│   │       ├── land-acquisition-hero.tsx
│   │       ├── land-process.tsx
│   │       ├── about-hero.tsx
│   │       ├── company-values.tsx
│   │       ├── team-grid.tsx
│   │       ├── testimonials-slider.tsx
│   │       ├── cta-banner.tsx
│   │       ├── contact-form.tsx
│   │       ├── contact-info.tsx
│   │       ├── page-hero.tsx
│   │       └── index.ts
│   │
│   ├── data/                        # Static content JSON files
│   │   ├── navigation.json          # Nav links, footer links
│   │   ├── services.json            # Service list
│   │   ├── projects.json            # Portfolio items
│   │   ├── team.json                # Team member profiles
│   │   ├── testimonials.json        # Client testimonials
│   │   ├── stats.json               # Company statistics
│   │   └── company.json             # Company info, contact details
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── use-mobile-menu.ts       # Mobile nav open/close state
│   │   ├── use-scroll-position.ts   # Header scroll behaviour
│   │   └── use-in-view.ts           # Intersection Observer for animations
│   │
│   ├── lib/                         # Utility functions
│   │   ├── utils.ts                 # cn() helper + general utilities
│   │   ├── data.ts                  # Typed data loaders
│   │   └── seo.ts                   # Metadata builder helpers
│   │
│   ├── styles/                      # Global CSS
│   │   ├── globals.css              # @font-face, CSS variables, base styles
│   │   └── typography.css           # Prose and heading utility classes
│   │
│   └── types/                       # Shared TypeScript interfaces
│       ├── index.ts                 # Barrel export
│       ├── navigation.ts
│       ├── service.ts
│       ├── project.ts
│       ├── team.ts
│       ├── testimonial.ts
│       └── common.ts                # Shared primitives (ImageProps, CTAProps, etc.)
│
├── .env.local                       # Local env vars (never commit)
├── .env.example                     # Env vars template (commit this)
├── .eslintrc.json
├── .prettierrc
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 3. Key Architectural Decisions

### 3.1 Static Site Generation (SSG)
All pages use SSG — no `getServerSideProps`, no API routes. Content is loaded from JSON files at build time.

```ts
// ✅ Correct — data loaded statically
import { getServices } from '@/lib/data';
const services = getServices(); // reads from JSON at build time

// ❌ Incorrect — no dynamic data fetching
const res = await fetch('/api/services'); // no API routes exist
```

### 3.2 Server vs Client Components
| Component Type          | Rule                                                        |
|-------------------------|-------------------------------------------------------------|
| Page files (`page.tsx`) | Always Server Components                                    |
| Layout components       | Server Components unless they need event handlers           |
| Section components      | Server Components unless they need animation hooks          |
| UI primitives           | Server Components by default; `'use client'` only for interactivity |
| Forms                   | Must be `'use client'` — use React Hook Form                |
| Mobile menu             | Must be `'use client'` — state management needed            |
| Testimonials slider     | Must be `'use client'` — touch events                       |

### 3.3 Import Aliases
```json
// tsconfig.json — paths
{
  "@/components/*": ["./src/components/*"],
  "@/lib/*":        ["./src/lib/*"],
  "@/data/*":       ["./src/data/*"],
  "@/types/*":      ["./src/types/*"],
  "@/hooks/*":      ["./src/hooks/*"],
  "@/styles/*":     ["./src/styles/*"]
}
```

### 3.4 Image Handling
- All images use `next/image` — never `<img>`
- Static brand assets: `public/images/` → referenced as `/images/filename.jpg`
- Project photography: `public/images/projects/`
- Team photos: `public/images/team/`
- All images must have explicit `width` and `height` (or `fill` with positioned parent)
- Hero images use `priority={true}`; below-fold images use lazy loading (default)

---

## 4. Data Architecture

### 4.1 Data File Convention
Every content type follows this 3-file pattern:

```
src/types/service.ts      ← Interface definition
src/data/services.json    ← Static content array
src/lib/data.ts           ← Typed loader function
```

### 4.2 Loader Function Pattern
```ts
// src/lib/data.ts
import servicesData from '@/data/services.json';
import type { Service } from '@/types/service';

export function getServices(): Service[] {
  return servicesData as Service[];
}

export function getServiceById(id: string): Service | undefined {
  return getServices().find((s) => s.id === id);
}
```

---

## 5. Root Layout

```tsx
// src/app/layout.tsx
import type { Metadata } from 'next';
import { PageWrapper } from '@/components/layout';
import '@/styles/globals.css';
import '@/styles/typography.css';

export const metadata: Metadata = {
  title: {
    default: 'CONSERVVE INFRA SOLUTIONS',
    template: '%s | CONSERVVE INFRA SOLUTIONS',
  },
  description: 'Premium construction and land acquisition management across India.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-gotham antialiased">
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
```

---

## 6. Performance Targets

| Metric                  | Target       | Strategy                                             |
|-------------------------|--------------|------------------------------------------------------|
| Lighthouse Performance  | ≥ 90         | SSG, optimised images, no unused JS                 |
| Lighthouse Accessibility| ≥ 95         | Semantic HTML, ARIA, WCAG 2.1 AA                    |
| Lighthouse SEO          | ≥ 95         | Metadata, structured data, canonical URLs            |
| Lighthouse Best Practices| ≥ 95        | HTTPS, no deprecated APIs, secure headers            |
| LCP                     | < 2.5s       | `priority` on hero images, font preloading           |
| CLS                     | < 0.1        | Explicit image dimensions, no layout shifts          |
| Bundle size (First Load)| < 120kB JS   | Server Components, dynamic imports for heavy libs    |
