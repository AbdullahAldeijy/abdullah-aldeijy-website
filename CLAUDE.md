# abdullah-aldeijy-website

A futuristic personal portfolio for Abdullah Aldeijy — projects, articles, social, and certifications.

## Tech stack

- **Framework:** Next.js 15 (App Router) on React 19, run with Turbopack
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 with CSS variables (no `tailwind.config.js`; tokens live in `src/app/globals.css` via `@theme`)
- **UI primitives:** shadcn/ui (Slate-leaning palette overridden by our design tokens)
- **3rd-party components:** 21st.dev (Spline scene wrapper at `src/components/ui/splite.tsx`)
- **Animation:** Framer Motion
- **Smooth scroll:** Lenis
- **Theming:** next-themes (dark/light)
- **3D:** three, @react-three/fiber, @react-three/drei
- **Icons:** lucide-react
- **i18n (planned):** next-intl for Arabic / English

## Folder structure

```
src/
├── app/                       App Router routes
│   ├── layout.tsx             Root layout (fonts, theme provider, smooth scroll)
│   ├── page.tsx               Home (Hero + sections)
│   ├── works/page.tsx
│   ├── articles/page.tsx
│   ├── certifications/page.tsx
│   ├── about/page.tsx
│   └── globals.css            Tailwind v4 entrypoint + design tokens
├── components/
│   ├── ui/                    shadcn primitives + 3rd-party (button, splite, ...)
│   ├── sections/              Page-level sections (Hero, Works, Articles, ...)
│   └── layout/                Navbar, Footer, CustomCursor, SmoothScroll
├── lib/
│   ├── utils.ts               cn() + helpers
│   └── constants.ts           SITE, NAV_LINKS, SOCIAL_LINKS
└── styles/                    Optional extra stylesheets
```

## Design conventions

### Colors (dark-first)

- `--background` deep black (`#05060a`)
- `--foreground` soft gray (`#e6e7eb`)
- `--primary` neon blue (`#3b82f6` → glow `#60a5fa`)
- `--muted-foreground` cool gray (`#9aa0a6`)

CSS variables live in `globals.css` under `@theme` and `:root` / `.dark`.

### Typography

- **English:** Geist (loaded via `next/font/google`)
- **Arabic:** IBM Plex Sans Arabic (import prepared, swapped in once next-intl lands)
- Headings: tight tracking, semibold–bold; body: regular, generous leading

### Motion

- Timings — fast `200ms`, base `400ms`, slow `800ms`
- Easing — `cubic-bezier(0.22, 1, 0.36, 1)` (named `--ease-out-quint`)
- Use Framer Motion for entrances and hover states; Lenis for page scroll

## Code conventions

- **TypeScript everywhere.** Prefer `type` for unions/aliases, `interface` for object shapes that may extend.
- **Named exports** for components and utilities. Avoid `export default` except for Next.js route files (`page.tsx`, `layout.tsx`) where it is required.
- **React Server Components by default.** Add `"use client"` only when a file needs hooks, browser APIs, or event handlers.
- **Imports use the `@/*` alias** (`@/components/...`, `@/lib/...`).
- **Tailwind for styling** — compose with `cn()` from `@/lib/utils`. Avoid inline `style` except for dynamic values.
- **File names:** `kebab-case` for files, `PascalCase` for component identifiers.
- **No comments unless the why is non-obvious.** Identifiers do the talking.
