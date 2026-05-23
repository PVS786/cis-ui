# Coding Standards — CONSERVVE INFRA SOLUTIONS

> These standards are non-negotiable. Every file in this codebase must conform.
> When in doubt: readable > clever, explicit > implicit, simple > complex.

---

## 1. TypeScript Standards

### Strict Mode
`tsconfig.json` must have:
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "exactOptionalPropertyTypes": true
  }
}
```

### Typing Rules
```ts
// ✅ Interfaces for object shapes
interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

// ✅ Types for unions and aliases
type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type Maybe<T> = T | null | undefined;

// ❌ Never use `any`
const data: any = fetchData();          // FORBIDDEN

// ✅ Use unknown + type narrowing
const data: unknown = fetchData();
if (typeof data === 'object' && data !== null) { ... }

// ❌ Never use type assertions without narrowing
const name = (user as AdminUser).name;  // FORBIDDEN without prior check

// ✅ Use optional chaining and nullish coalescing
const name = user?.profile?.name ?? 'Unknown';

// ✅ Readonly for data arrays
const services: readonly Service[] = getServices();
```

### Naming Conventions
| Entity              | Convention          | Example                        |
|---------------------|---------------------|--------------------------------|
| Components          | PascalCase          | `HeroSection`, `Button`        |
| Hooks               | camelCase + `use`   | `useMobileMenu`, `useScrollPos`|
| Utilities           | camelCase           | `formatDate`, `cn`             |
| Interfaces          | PascalCase          | `ServiceProps`, `TeamMember`   |
| Type aliases        | PascalCase          | `ButtonVariant`, `PageRoute`   |
| Constants           | UPPER_SNAKE_CASE    | `MAX_PROJECTS`, `SITE_URL`     |
| Files               | kebab-case          | `hero-section.tsx`, `utils.ts` |
| Directories         | kebab-case          | `components/sections/`         |
| JSON keys           | camelCase           | `"projectTitle"`, `"imageUrl"` |

---

## 2. Component Standards

### File Structure (mandatory order)
```tsx
// 1. 'use client' directive (if needed — at very top)
'use client';

// 2. External imports (React, Next.js, libraries)
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// 3. Internal imports (components, hooks, utils, types)
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { ServiceProps } from '@/types';

// 4. Constants (file-scoped, not exported)
const ANIMATION_DELAY = 0.1;

// 5. TypeScript interface
interface ComponentNameProps {
  prop1: string;
  prop2?: number;
  className?: string;
}

// 6. Named component export
/**
 * ComponentName — brief one-line description.
 * @param prop1 - description
 * @param className - optional class overrides
 */
export function ComponentName({ prop1, prop2 = 0, className }: ComponentNameProps) {
  // hooks first
  const [state, setState] = useState(false);

  // derived values
  const computedValue = prop2 * 2;

  // handlers
  function handleClick() {
    setState(true);
  }

  // render
  return (
    <div className={cn('base-classes', className)}>
      {/* JSX */}
    </div>
  );
}
```

### Component Rules
- **One component per file** — no multi-export component files
- **Named exports only** on components (exception: `page.tsx` files must be default export)
- **Props interface before the component** — always
- **className prop** — every component must accept and apply it via `cn()`
- **No magic strings** — extract repeated strings to constants
- **No inline event handlers in JSX** — define handlers as named functions
- **Conditional rendering** — use ternary for short cases, early return for complex conditions

```tsx
// ✅ Clean conditional rendering
if (!isVisible) return null;

return (
  <div>
    {hasTitle && <h2>{title}</h2>}
    {items.length > 0 ? <List items={items} /> : <EmptyState />}
  </div>
);

// ❌ Nested ternaries in JSX
{condition1 ? (condition2 ? <A /> : <B />) : <C />}  // FORBIDDEN
```

---

## 3. Styling Standards

### Tailwind Class Ordering (follow this sequence)
1. Layout: `flex`, `grid`, `block`, `hidden`
2. Position: `relative`, `absolute`, `fixed`, `sticky`
3. Box model: `w-`, `h-`, `p-`, `m-`, `overflow-`
4. Typography: `text-`, `font-`, `leading-`, `tracking-`
5. Visual: `bg-`, `border-`, `rounded-`, `shadow-`
6. Interactive: `cursor-`, `select-`
7. Transitions: `transition-`, `duration-`, `ease-`
8. Responsive: `sm:`, `md:`, `lg:`, `xl:` prefixed variants
9. State: `hover:`, `focus:`, `active:`, `focus-visible:`

### The `cn()` Utility
```ts
// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Brand Colour Usage in Classes
```tsx
// ✅ Correct — CSS variable via Tailwind config
className="bg-primary text-accent"
className="border-[var(--color-border-accent)]"
className="text-[var(--color-text-muted)]"

// ❌ Forbidden — raw hex in className
className="bg-[#0C2C4D]"    // never hard-code brand colours
className="text-[#BFA052]"  // always use tokens
```

---

## 4. File & Import Standards

### Import Order (enforced by ESLint)
```ts
// 1. React
import { useState, useEffect } from 'react';

// 2. Next.js
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// 3. Third-party libraries
import { motion } from 'framer-motion';
import { cn } from 'clsx';

// 4. Internal — components
import { Button } from '@/components/ui';
import { HeroSection } from '@/components/sections';

// 5. Internal — hooks, lib, types
import { useMobileMenu } from '@/hooks/use-mobile-menu';
import { getServices } from '@/lib/data';
import type { Service } from '@/types';
```

### Barrel Exports
Every folder has an `index.ts` for clean imports:
```ts
// src/components/ui/index.ts
export { Button } from './button';
export { Badge } from './badge';
export { Card } from './card';
// ...

// Usage in other files:
import { Button, Badge, Card } from '@/components/ui';
// NOT: import { Button } from '@/components/ui/button';
```

---

## 5. Accessibility Standards

### Semantic HTML Rules
```tsx
// ✅ Buttons for actions, links for navigation
<button onClick={handleOpen}>Open Menu</button>          // action
<Link href="/services">View Services</Link>              // navigation

// ❌ Never use div/span as interactive elements
<div onClick={handleOpen}>Open Menu</div>                // FORBIDDEN

// ✅ Proper heading hierarchy
<h1>CONSERVVE INFRA SOLUTIONS</h1>
  <h2>Our Services</h2>
    <h3>Construction Management</h3>

// ✅ Images
<Image src={src} alt="Construction team on-site in Mumbai" />  // informative
<Image src={decorative} alt="" aria-hidden="true" />          // decorative
```

### Focus Management
```css
/* globals.css — never remove focus styles */
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

### ARIA Patterns
```tsx
// Mobile menu
<button aria-expanded={isOpen} aria-controls="mobile-nav" aria-label="Toggle navigation">

// Icon-only buttons
<button aria-label="Close menu"><XIcon aria-hidden="true" /></button>

// Skip link (in root layout)
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

---

## 6. Git Commit Standards

### Commit Message Format
```
type(scope): short description (max 72 chars)

[optional body — explains WHY, not what]

[optional footer — breaking changes, issue refs]
```

### Types
| Type       | When to use                                    |
|------------|------------------------------------------------|
| `feat`     | New component, page, or feature                |
| `fix`      | Bug fix                                        |
| `style`    | CSS/Tailwind changes, visual tweaks            |
| `refactor` | Code restructure without behaviour change      |
| `docs`     | Documentation updates                          |
| `chore`    | Config, dependencies, tooling                  |
| `perf`     | Performance improvement                        |
| `a11y`     | Accessibility improvement                      |

### Examples
```
feat(sections): add HeroSection component with animation
fix(header): correct mobile menu close on route change
style(button): align padding with design system spec
a11y(nav): add aria-current to active nav link
docs(brand): update colour token naming in guidelines
```

---

## 7. ESLint & Prettier Configuration

### `.eslintrc.json`
```json
{
  "extends": ["next/core-web-vitals", "next/typescript"],
  "rules": {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "react/self-closing-comp": "warn",
    "react/jsx-sort-props": ["warn", { "callbacksLast": true, "reservedFirst": true }],
    "import/order": ["warn", {
      "groups": ["builtin", "external", "internal"],
      "newlines-between": "always"
    }]
  }
}
```

### `.prettierrc`
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```
