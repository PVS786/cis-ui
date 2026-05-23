# Design System — CONSERVVE INFRA SOLUTIONS

> This document defines all design tokens, Tailwind configuration, and the component
> library inventory. Treat it as the single source of truth for visual implementation.

---

## 1. Design Tokens (CSS Variables)

Place in `src/styles/globals.css`:

```css
:root {
  /* Brand Colours */
  --color-primary:        #0C2C4D;
  --color-accent:         #BFA052;
  --color-accent-dark:    #A8893D;  /* accent hover state */
  --color-accent-light:   #D4B76A;  /* accent subtle highlight */

  /* Surface Colours */
  --color-surface:        #FFFFFF;
  --color-surface-muted:  #F4F4F5;
  --color-surface-dark:   #0C2C4D;  /* alias of primary for semantic use */

  /* Text Colours */
  --color-text-primary:   #0C2C4D;
  --color-text-body:      #2E3A4A;
  --color-text-muted:     #6B7280;
  --color-text-inverse:   #FFFFFF;

  /* Border */
  --color-border:         #E5E7EB;
  --color-border-accent:  #BFA052;

  /* Shadows */
  --shadow-sm:  0 1px 3px rgba(12, 44, 77, 0.08);
  --shadow-md:  0 4px 16px rgba(12, 44, 77, 0.12);
  --shadow-lg:  0 12px 40px rgba(12, 44, 77, 0.16);

  /* Spacing Scale (4px base) */
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-6:   24px;
  --space-8:   32px;
  --space-10:  40px;
  --space-12:  48px;
  --space-16:  64px;
  --space-20:  80px;
  --space-28:  112px;

  /* Border Radius */
  --radius-sm:  4px;
  --radius-md:  8px;
  --radius-lg:  12px;
  --radius-full: 9999px;

  /* Transitions */
  --transition-fast:   150ms ease;
  --transition-base:   250ms ease;
  --transition-slow:   400ms ease;

  /* Z-index Scale */
  --z-base:    0;
  --z-raised:  10;
  --z-nav:     100;
  --z-overlay: 200;
  --z-modal:   300;
  --z-toast:   400;
}
```

---

## 2. Tailwind Configuration

`tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:       'var(--color-primary)',
        accent:        'var(--color-accent)',
        'accent-dark': 'var(--color-accent-dark)',
        surface:       'var(--color-surface)',
        'surface-muted': 'var(--color-surface-muted)',
        border:        'var(--color-border)',
      },
      fontFamily: {
        tibere: ['Tibere OTW03', 'serif'],
        gotham: ['Gotham', 'Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(48px, 6vw, 80px)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(36px, 4.5vw, 64px)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(28px, 3vw, 48px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(22px, 2.5vw, 32px)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'body-lg':    ['18px', { lineHeight: '1.75' }],
        'body-base':  ['16px', { lineHeight: '1.75' }],
        'body-sm':    ['14px', { lineHeight: '1.6' }],
        'label':      ['12px', { lineHeight: '1.5', letterSpacing: '0.08em' }],
      },
      maxWidth: {
        content: '1280px',
        prose:   '68ch',
      },
      boxShadow: {
        'brand-sm': 'var(--shadow-sm)',
        'brand-md': 'var(--shadow-md)',
        'brand-lg': 'var(--shadow-lg)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
        slow: '400ms',
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 3. Font Setup

`src/styles/globals.css` — above the `:root` block:

```css
@font-face {
  font-family: 'Tibere OTW03';
  src: url('/fonts/TibereOTW03-Bold.woff2') format('woff2'),
       url('/fonts/TibereOTW03-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Gotham';
  src: url('/fonts/Gotham-Book.woff2') format('woff2'),
       url('/fonts/Gotham-Book.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Gotham';
  src: url('/fonts/Gotham-Medium.woff2') format('woff2'),
       url('/fonts/Gotham-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Gotham';
  src: url('/fonts/Gotham-Bold.woff2') format('woff2'),
       url('/fonts/Gotham-Bold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
```

Place font files in: `public/fonts/`

---

## 4. Component Library Inventory

### Layer 1 — UI Primitives (`src/components/ui/`)

| Component        | File                    | Description                                    |
|------------------|-------------------------|------------------------------------------------|
| `Button`         | `button.tsx`            | Primary, Secondary, Ghost variants             |
| `Badge`          | `badge.tsx`             | Status/category tags                           |
| `Card`           | `card.tsx`              | Surface container with optional accent border  |
| `SectionLabel`   | `section-label.tsx`     | Golden accent line + uppercase category text   |
| `Divider`        | `divider.tsx`           | Golden horizontal accent line                  |
| `Container`      | `container.tsx`         | Max-width + horizontal padding wrapper         |
| `Icon`           | `icon.tsx`              | Lucide icon wrapper with brand sizing          |
| `AnimateIn`      | `animate-in.tsx`        | Intersection Observer fade/slide wrapper       |

### Layer 2 — Layout (`src/components/layout/`)

| Component        | File                    | Description                                    |
|------------------|-------------------------|------------------------------------------------|
| `Header`         | `header.tsx`            | Sticky nav — logo, links, CTA, mobile menu     |
| `Footer`         | `footer.tsx`            | 4-col footer — links, contact, social, legal   |
| `MobileMenu`     | `mobile-menu.tsx`       | Full-screen mobile drawer nav                  |
| `PageWrapper`    | `page-wrapper.tsx`      | Layout shell wrapping Header + Footer          |

### Layer 3 — Sections (`src/components/sections/`)

| Component              | File                         | Used on Page(s)         |
|------------------------|------------------------------|-------------------------|
| `HeroSection`          | `hero-section.tsx`           | Home                    |
| `StatsBar`             | `stats-bar.tsx`              | Home, About             |
| `ServicesGrid`         | `services-grid.tsx`          | Home, Services          |
| `ServiceDetail`        | `service-detail.tsx`         | Services                |
| `FeaturedProjects`     | `featured-projects.tsx`      | Home, Projects          |
| `ProjectsGrid`         | `projects-grid.tsx`          | Projects                |
| `ProjectCard`          | `project-card.tsx`           | Projects                |
| `LandAcquisitionHero`  | `land-acquisition-hero.tsx`  | Land Acquisition        |
| `LandProcess`          | `land-process.tsx`           | Land Acquisition        |
| `AboutHero`            | `about-hero.tsx`             | About                   |
| `CompanyValues`        | `company-values.tsx`         | About                   |
| `TeamGrid`             | `team-grid.tsx`              | About, Team             |
| `TestimonialsSlider`   | `testimonials-slider.tsx`    | Home, Testimonials      |
| `CTABanner`            | `cta-banner.tsx`             | All pages               |
| `ContactForm`          | `contact-form.tsx`           | Contact                 |
| `ContactInfo`          | `contact-info.tsx`           | Contact                 |
| `PageHero`             | `page-hero.tsx`              | All inner pages         |

---

## 5. Animation Principles

- **Entry animations:** Fade in + translate Y (12px → 0) on scroll enter
- **Duration:** 500ms with 100ms stagger between sibling elements
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo feel)
- **Library:** Framer Motion (`motion/react`) — install as `framer-motion`
- **Rule:** Animations are additive only — never distract, never block content
- **Reduce motion:** Always respect `prefers-reduced-motion` media query

```ts
// Standard entry variant
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};
```

---

## 6. Responsive Behaviour Summary

| Element             | Mobile (default)     | MD (768px+)           | LG (1024px+)           |
|---------------------|----------------------|-----------------------|------------------------|
| Header              | Logo + hamburger     | Logo + hamburger      | Full nav + CTA button  |
| Hero text           | 40px H1, centred     | 52px H1, left-aligned | 72px H1, left-aligned  |
| Services            | 1 column             | 2 columns             | 3 columns              |
| Projects            | 1 column             | 2 columns             | 3 columns              |
| Stats Bar           | 2 × 2 grid           | 4 in a row            | 4 in a row             |
| Footer              | Single column        | 2 columns             | 4 columns              |
| Section padding     | `py-16` (64px)       | `py-20` (80px)        | `py-28` (112px)        |
