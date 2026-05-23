# Components Specification — CONSERVVE INFRA SOLUTIONS

> Detailed specification for every component in the design system.
> Agents must consult this before building or modifying any component.

---

## UI Primitives

---

### `Button`
**File:** `src/components/ui/button.tsx`  
**Purpose:** Primary interactive element across the site.

```ts
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;             // renders as Link if provided
  external?: boolean;        // opens in new tab (for external hrefs)
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
```

**Visual Spec:**
| Variant     | Background   | Text         | Border            | Hover                            |
|-------------|--------------|--------------|-------------------|----------------------------------|
| `primary`   | `--color-accent`  | `--color-primary` | none         | bg → `--color-accent-dark`, scale-[1.02] |
| `secondary` | transparent  | `--color-accent`  | 2px solid accent | bg fills with accent, text → primary |
| `ghost`     | transparent  | current colour| none             | Underline                        |

**Size Spec:**
| Size | Padding       | Font     | Tracking |
|------|---------------|----------|----------|
| `sm` | `px-5 py-2.5` | 13px     | wider    |
| `md` | `px-8 py-4`   | 15px     | wider    |
| `lg` | `px-10 py-5`  | 16px     | wider    |

**Rules:**
- If `href` is set → renders as `<Link>` (internal) or `<a target="_blank">` (external)
- If no `href` → renders as `<button>`
- Font: Gotham 600, uppercase, `tracking-wider`
- Border radius: `rounded-none` (sharp corners)
- Loading state: shows spinner, disables interaction
- All variants: `transition-all duration-base`

---

### `SectionLabel`
**File:** `src/components/ui/section-label.tsx`  
**Purpose:** Small category label with Golden Beige accent line, placed above section headings.

```ts
interface SectionLabelProps {
  children: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}
```

**Visual Spec:**
- Golden Beige horizontal line: `h-px w-12 bg-accent`
- Text: Gotham 500, 12px, uppercase, `tracking-widest`, `--color-accent`
- Layout: flex, gap-3, items-center
- Default align: left

**Usage:**
```tsx
<SectionLabel>Our Services</SectionLabel>
<h2>What We Do</h2>
```

---

### `Card`
**File:** `src/components/ui/card.tsx`  
**Purpose:** Surface container used for services, projects, team members, testimonials.

```ts
interface CardProps {
  accent?: boolean;         // shows golden left border
  accentPosition?: 'left' | 'top';
  hover?: boolean;          // enables hover shadow elevation
  padding?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}
```

**Visual Spec:**
- Background: `--color-surface`
- Border: `1px solid --color-border`
- Border radius: `rounded-sm` (4px)
- Accent border: 3px `--color-accent`, left (default) or top
- Hover: `shadow-brand-md`, subtle `translateY(-2px)` transform
- Padding: sm=`p-4`, md=`p-6`, lg=`p-8`

---

### `Container`
**File:** `src/components/ui/container.tsx`  
**Purpose:** Consistent max-width and horizontal padding wrapper.

```ts
interface ContainerProps {
  children: React.ReactNode;
  size?: 'default' | 'narrow' | 'wide';
  className?: string;
}
```

**Spec:**
| Size      | Max Width   | Classes                              |
|-----------|-------------|--------------------------------------|
| `default` | 1280px      | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| `narrow`  | 768px       | `max-w-3xl mx-auto px-4 sm:px-6`    |
| `wide`    | 1536px      | `max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8` |

---

### `AnimateIn`
**File:** `src/components/ui/animate-in.tsx`  
**Purpose:** Wraps children with Framer Motion fade-up-on-scroll animation.

```ts
interface AnimateInProps {
  children: React.ReactNode;
  delay?: number;     // stagger delay in seconds (default: 0)
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}
```

**Rules:**
- Uses Framer Motion `whileInView` + `viewport={{ once: true }}`
- Respects `prefers-reduced-motion` — skip animation if user prefers reduced motion
- Default: `y: 16` → `y: 0`, opacity 0 → 1, duration 500ms

---

## Layout Components

---

### `Header`
**File:** `src/components/layout/header.tsx`  
**Purpose:** Site-wide sticky navigation.

**States:**
1. **Default (top):** Transparent background over hero image. White logo and links.
2. **Scrolled:** White background, Navy logo and links, `shadow-brand-sm`.

**Desktop Layout:**
- Logo (left) + Nav Links (centre) + CTA Button (right)
- Nav links: Gotham 500, 15px, `--color-text-primary`, hover → `--color-accent`
- Active link: `--color-accent` + bottom underline

**Mobile Layout (< 1024px):**
- Logo (left) + Hamburger button (right)
- Opens `MobileMenu` drawer on hamburger click

**Nav Links:**
- Home (`/`)
- About (`/about`)
- Services (`/services`)
- Projects (`/projects`)
- Land Acquisition (`/land-acquisition`)
- Contact (`/contact`) — styled as Button

**Behaviour:**
- `position: sticky; top: 0; z-index: var(--z-nav)`
- Transition: background/shadow on scroll
- `aria-expanded` on hamburger button

---

### `Footer`
**File:** `src/components/layout/footer.tsx`  
**Purpose:** Site-wide footer with 4-column layout.

**Layout (desktop 4 columns | tablet 2×2 | mobile 1 column):**
- Col 1: Logo + company tagline + social icons
- Col 2: Services links
- Col 3: Company links (About, Team, Projects, Testimonials)
- Col 4: Contact info (address, phone, email)

**Bottom Bar:**
- Left: `© 2024 CONSERVVE INFRA SOLUTIONS. All rights reserved.`
- Right: Privacy Policy | Terms of Use (if applicable)

**Visual:**
- Background: `--color-primary` (Navy)
- Text: `--color-text-inverse` (White)
- Link hover: `--color-accent`
- Divider: `--color-accent` thin line above bottom bar
- Heading: Gotham 600, 12px, uppercase, `tracking-widest`, `--color-accent`

---

## Section Components

---

### `HeroSection`
**Props:**
```ts
interface HeroSectionProps {
  headline: string;
  subheadline?: string;
  body: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  backgroundImage: string;
  backgroundAlt: string;
}
```
**Layout:** Relative positioned container. `next/image` with `fill` and `priority`. Navy overlay div. Content centred vertically using flexbox.

---

### `StatsBar`
**Props:**
```ts
interface Stat {
  value: string;    // e.g. "23+"
  label: string;    // e.g. "Landmark Projects"
}
interface StatsBarProps {
  stats: Stat[];
}
```
**Layout:** Full width, `bg-primary`. Stats in `grid grid-cols-2 md:grid-cols-4`. Each stat: value in `font-tibere text-display-sm text-accent`, label in `font-gotham text-body-sm text-white/70 uppercase tracking-widest`.

---

### `PageHero`
**Props:**
```ts
interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
  backgroundImage?: string;
}
```
**Layout:** `py-24 lg:py-32`. Navy background (or image with overlay). Breadcrumbs above title. Title in `font-tibere text-display-lg text-white`.

---

### `CTABanner`
**Props:**
```ts
interface CTABannerProps {
  title: string;
  body?: string;
  primaryCTA: { label: string; href: string };
  variant?: 'navy' | 'accent';
}
```
**Layout:** Full-width section. Centred content. `py-20 lg:py-24`. Default variant: Navy background, white title, accent CTA button.

---

### `ContactForm`
**Client Component** (`'use client'`)  
**Libraries:** React Hook Form + Zod

```ts
const contactSchema = z.object({
  name:            z.string().min(2, 'Please enter your name'),
  company:         z.string().optional(),
  email:           z.string().email('Please enter a valid email'),
  phone:           z.string().regex(/^[+\d\s-]{10,}$/, 'Please enter a valid phone number'),
  serviceInterest: z.enum(['Construction Management', 'Land Acquisition', 'Project Planning', 'Infrastructure', 'Other']),
  message:         z.string().min(20, 'Please provide a brief description (min 20 characters)'),
});
```

**Field Styling:**
- Label: Gotham 500, 13px, `--color-text-primary`, uppercase, tracking-wider
- Input: border `--color-border`, focus border `--color-accent`, padding `px-4 py-3`, `rounded-sm`, Gotham 400
- Error: `--color-accent` text, 12px, below field
- Submit: Full-width primary Button, "Send Enquiry"

---

### `ProjectCard`
```ts
interface ProjectCardProps {
  id: string;
  title: string;
  category: 'Construction' | 'Land Acquisition' | 'Infrastructure';
  location: string;
  year: number;
  description: string;
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
}
```
**Layout:** Card with image top (aspect-video), golden badge for category, project title, location + year in muted text, 2-line description truncated.

---

## Data File Schemas

### `src/data/services.json`
```json
[
  {
    "id": "construction-management",
    "title": "Construction Management",
    "shortDescription": "End-to-end project oversight from planning through completion.",
    "fullDescription": "...",
    "icon": "building-2",
    "highlights": ["Budget Management", "Contractor Oversight", "Quality Control", "Timeline Management"]
  }
]
```

### `src/data/projects.json`
```json
[
  {
    "id": "project-slug",
    "title": "Project Name",
    "category": "Construction",
    "location": "Mumbai, Maharashtra",
    "year": 2024,
    "description": "Brief project description.",
    "imageUrl": "/images/projects/project-slug.jpg",
    "imageAlt": "Descriptive alt text",
    "featured": true,
    "value": "₹45 Cr",
    "area": "12,000 sq ft"
  }
]
```

### `src/data/team.json`
```json
[
  {
    "id": "firstname-lastname",
    "name": "Full Name",
    "title": "Managing Director",
    "department": "Leadership",
    "bio": "Short professional biography.",
    "imageUrl": "/images/team/firstname-lastname.jpg",
    "imageAlt": "Full Name, Managing Director",
    "linkedin": "https://linkedin.com/in/..."
  }
]
```

### `src/data/testimonials.json`
```json
[
  {
    "id": "testimonial-1",
    "quote": "Client testimonial text here.",
    "author": "Client Name",
    "role": "Director",
    "company": "Company Name",
    "projectId": "project-slug"
  }
]
```

### `src/data/company.json`
```json
{
  "name": "CONSERVVE INFRA SOLUTIONS",
  "tagline": "Building Infrastructure. Acquiring Land. Delivering Excellence.",
  "address": {
    "line1": "Office Address Line 1",
    "line2": "City, State — PIN Code",
    "country": "India"
  },
  "phone": "+91 XXXXX XXXXX",
  "email": "info@conservveinfra.com",
  "foundedYear": 2009,
  "socialLinks": {
    "linkedin": "https://linkedin.com/company/conservve",
    "instagram": ""
  }
}
```
