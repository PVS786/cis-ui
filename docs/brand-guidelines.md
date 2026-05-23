# Brand Guidelines — CONSERVVE INFRA SOLUTIONS

> This document is the single source of truth for all visual and verbal brand decisions.
> Every component, page, and piece of copy must reference and comply with these guidelines.

---

## 1. Brand Identity

**Company Name:** CONSERVVE INFRA SOLUTIONS  
**Name Treatment:** Always in ALL CAPS — `CONSERVVE INFRA SOLUTIONS`  
**Short Form (where space-constrained):** CONSERVVE  
**Never abbreviate as:** CIS, Conservve Infra, conservve (lowercase)

---

## 2. Colour Palette

### Primary Brand Colours

| Name          | Hex       | CSS Variable             | Usage                                                          |
|---------------|-----------|--------------------------|----------------------------------------------------------------|
| Navy Blue     | `#0C2C4D` | `--color-primary`        | Primary backgrounds, headings, navigation bar, footer          |
| Golden Beige  | `#BFA052` | `--color-accent`         | CTAs, borders, dividers, hover accents, icon highlights        |

### Secondary & Neutral Colours

| Name          | Hex       | CSS Variable             | Usage                                                          |
|---------------|-----------|--------------------------|----------------------------------------------------------------|
| White         | `#FFFFFF` | `--color-surface`        | Page backgrounds, card surfaces, text on dark backgrounds      |
| Light Grey    | `#F4F4F5` | `--color-surface-muted`  | Alternating section backgrounds, input fields                  |
| Dark Slate    | `#2E3A4A` | `--color-text-body`      | Body copy, paragraph text                                      |
| Mid Grey      | `#6B7280` | `--color-text-muted`     | Captions, meta information, placeholder text                   |
| Border Grey   | `#E5E7EB` | `--color-border`         | Dividers, card borders, input borders                          |

### Colour Combination Rules

| Background        | Acceptable Text/Icon Colours            | Forbidden                   |
|-------------------|-----------------------------------------|-----------------------------|
| Navy (`#0C2C4D`)  | White, Golden Beige                     | Light Grey, Mid Grey        |
| Golden Beige      | Navy Blue, White (only for large text)  | Body text, Mid Grey         |
| White             | Navy Blue, Dark Slate, Golden Beige     | Light Grey (insufficient contrast) |
| Light Grey        | Navy Blue, Dark Slate                   | White, Mid Grey             |

### Do Not
- ❌ Use Golden Beige as a large background area — it is an accent only
- ❌ Use any colour not in the defined palette
- ❌ Introduce tints/shades of the brand colours without explicit sign-off
- ❌ Use raw hex values in code — always use CSS variables

---

## 3. Typography

### Font Families

**Primary — Tibere OTW03-Bold**
- Usage: All headings (H1–H3), hero copy, section titles, display text
- Weight: 700 (Bold only — this is a single-weight display font)
- Character: Elegant, commanding, premium feel
- CSS class: `font-tibere`

**Secondary — Gotham**
- Usage: Body copy, navigation, buttons, labels, captions, UI elements
- Weights available: 400 (Book), 500 (Medium), 600 (Bold)
- Character: Clean, modern, highly legible
- CSS class: `font-gotham`
- Fallback stack: `'Gotham', 'Inter', 'Helvetica Neue', Arial, sans-serif`

### Type Scale

| Element       | Font     | Size (desktop) | Size (mobile) | Weight | Line Height |
|---------------|----------|----------------|---------------|--------|-------------|
| H1 / Hero     | Tibere   | 64–80px        | 40–48px       | 700    | 1.1         |
| H2 / Section  | Tibere   | 44–52px        | 32–36px       | 700    | 1.15        |
| H3 / Card     | Tibere   | 28–32px        | 22–26px       | 700    | 1.2         |
| H4 / Label    | Gotham   | 18–20px        | 16–18px       | 600    | 1.3         |
| Body Large    | Gotham   | 18px           | 16px          | 400    | 1.7         |
| Body Base     | Gotham   | 16px           | 15px          | 400    | 1.75        |
| Body Small    | Gotham   | 14px           | 13px          | 400    | 1.6         |
| Caption / Tag | Gotham   | 12px           | 12px          | 500    | 1.5         |
| Button        | Gotham   | 15–16px        | 15px          | 600    | 1.0         |
| Nav Link      | Gotham   | 15px           | 15px          | 500    | 1.0         |

### Typography Rules
- Tibere is used **exclusively** for headings — never for body copy, buttons, or UI elements
- H1 appears exactly once per page
- Heading hierarchy must never skip levels (H1 → H2 → H3)
- Body text line-length: 60–75 characters per line (use `max-w-prose`)
- Letter-spacing on display headings: `-0.02em` for tighter, premium feel
- All-caps text uses `tracking-widest` (Gotham, weight 500+)

---

## 4. Spacing & Layout

### Grid System
- **Base unit:** 4px
- **Content max-width:** 1280px (`max-w-7xl`)
- **Section padding (vertical):** `py-20 lg:py-28` (80px / 112px)
- **Container padding (horizontal):** `px-4 sm:px-6 lg:px-8`
- **Card gap:** `gap-6 lg:gap-8`
- **Component inner padding:** `p-6 lg:p-8`

### Section Rhythm
Sections alternate between:
1. White background (`bg-[var(--color-surface)]`)
2. Light Grey background (`bg-[var(--color-surface-muted)]`)
3. Navy background (`bg-[var(--color-primary)] text-white`) — used sparingly for emphasis

---

## 5. UI Components — Visual Spec

### Buttons

**Primary CTA**
- Background: `--color-accent` (Golden Beige)
- Text: `--color-primary` (Navy Blue)
- Font: Gotham 600, 15px, uppercase, `tracking-wider`
- Padding: `px-8 py-4`
- Border radius: `rounded-none` (sharp — communicates precision)
- Hover: Background darkens to `#A8893D`, slight `scale-[1.02]` transform

**Secondary CTA**
- Background: transparent
- Border: 2px solid `--color-accent`
- Text: `--color-accent`
- Hover: Background fills with `--color-accent`, text becomes `--color-primary`

**Ghost / Nav CTA**
- Background: transparent
- Text: `--color-primary` or white (depending on context)
- Underline on hover

### Cards
- Background: White
- Border: 1px `--color-border`
- Border radius: `rounded-sm` (4px — refined, not bubbly)
- Padding: `p-6 lg:p-8`
- Shadow: `shadow-sm` base, `shadow-md` on hover
- Accent: Golden Beige left border or top border, 3px wide

### Dividers & Accents
- Section separator: Thin golden line, 48–64px wide, centred or left-aligned
- Pattern: `h-px w-16 bg-[var(--color-accent)] mb-4`
- Used above section titles to add brand warmth

---

## 6. Imagery Guidelines

### Photography Style
- **Subject:** Large-scale construction sites, land development, infrastructure, professional teams
- **Tone:** Aspirational, grounded, real — not stock-photo generic
- **Colour treatment:** Slightly cooler/desaturated to complement Navy palette; avoid warm-filtered photography
- **Composition:** Strong geometric lines (beams, foundations, land horizons) that echo the brand's precision

### Overlays
- On hero images: Navy Blue overlay at 50–65% opacity for text legibility
- Never use a Golden Beige overlay on photography (colour clash)

### Icons
- Style: Outlined, 2px stroke weight — no filled/solid icons
- Colour: Navy Blue or Golden Beige only
- Grid: 24×24px base, scale to 32×32px or 48×48px as needed
- Recommended library: Lucide Icons (already consistent with this spec)

---

## 7. Voice & Tone

### Brand Personality

CONSERVVE INFRA SOLUTIONS speaks like a senior partner — authoritative yet warm, knowledgeable but never condescending.

### Active Voice Always
| ❌ Passive                              | ✅ Active                              |
|----------------------------------------|----------------------------------------|
| Projects are delivered on schedule     | We deliver every project on schedule   |
| Land is acquired through due diligence | We acquire land through rigorous due diligence |

### Specific Over Vague
| ❌ Vague                        | ✅ Specific                              |
|---------------------------------|------------------------------------------|
| Many successful projects        | 23 landmark projects across India        |
| Experienced team                | A team with 15+ years in infrastructure  |
| Quality construction            | Construction that meets IS:456 standards |

### Calls to Action
| Context          | CTA Text                          |
|------------------|-----------------------------------|
| Primary page CTA | "Start Your Project"              |
| Contact          | "Talk to Our Team"                |
| Services         | "Explore Our Services"            |
| Projects         | "View Our Portfolio"              |
| Land Acquisition | "Enquire About Land"              |
| Newsletter/etc.  | "Stay Informed"                   |

> Never use: "Click Here", "Learn More" (generic), "Submit" (cold)

---

## 8. Logo Usage

### Clear Space
- Minimum clear space around logo: equivalent to the height of the letter "C" in the wordmark
- Never place logo on a background with insufficient contrast

### Acceptable Logo Backgrounds
| Background | Logo Variant         |
|------------|----------------------|
| White      | Full colour (Navy + Gold) |
| Navy       | Reversed (White + Gold)   |
| Light Grey | Full colour               |
| Photography| Reversed with drop shadow |

### Forbidden
- ❌ Stretching or distorting the logo
- ❌ Placing on Golden Beige background
- ❌ Recreating the logo in different fonts
- ❌ Using the logo below 120px width
