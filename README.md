# Guntuka Meghana Reddy — Personal Portfolio

> High-end editorial studio portfolio for Guntuka Meghana Reddy, B.Tech CSE (AI & ML) student targeting Software Development, Data Science, and Machine Learning engineering roles.

**Live at:** `http://localhost:5173` (dev) | Deploy to Vercel in one step (see below).

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| Framework | Vite 8 + React 19 + TypeScript 6 |
| Styling | Tailwind CSS v4 with CSS custom properties |
| Animation | Framer Motion + Lenis smooth scroll |
| Icons | Lucide React |
| Typography | Instrument Serif + Inter + JetBrains Mono (Google Fonts) |
| Form | mailto trigger (no backend required) |

---

## Getting Started

### Prerequisites

- **Node.js 22 LTS** (v22.17.0+) — required by Vite 8 / Rolldown bundler
- npm 10.9+

> **On this machine:** Node 22 is installed at `C:\Users\Lenovo\.nodejs22\node-v22.17.0-win-x64`
> Add it to your PATH permanently in System Settings → Environment Variables.

### Development

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:5173
npm run dev
```

### Production Build

```bash
npm run build    # Outputs to /dist
npm run preview  # Preview the production build locally
```

---

## Project Structure

```
meghana-portfolio/
├── index.html              # SEO meta, OG tags, Google Fonts, anti-FOUC theme script
├── public/
│   ├── favicon.svg         # GM monogram with amber dot
│   └── resume.pdf          # Auto-generated professional resume PDF
├── scripts/
│   └── generate-resume.cjs # Node script to regenerate resume.pdf
├── src/
│   ├── data.ts             # ★ ALL RESUME CONTENT — edit here
│   ├── types.ts            # TypeScript interfaces
│   ├── index.css           # Design tokens (CSS vars), animations, typography
│   ├── App.tsx             # Root: Lenis scroll, theme state, modal orchestration
│   └── components/
│       ├── Navbar.tsx      # Sticky nav with active section + theme toggle
│       ├── Hero.tsx        # Huge serif name, pulsing status dot, magnetic CTAs
│       ├── About.tsx       # Bio + 4-metric stat grid
│       ├── Skills.tsx      # Bordered category grid
│       ├── Marquee.tsx     # Infinite CSS ticker strip
│       ├── Projects.tsx    # Numbered editorial rows with hover preview
│       ├── ProjectModal.tsx # Accessible case study modal
│       ├── Achievements.tsx # Year-left hairline list
│       ├── Certifications.tsx # Oracle & Simplilearn cards
│       ├── Education.tsx   # Vertical timeline
│       ├── Contact.tsx     # Mailto form + click-to-copy email
│       ├── Footer.tsx      # Live Hyderabad clock + back-to-top
│       ├── CustomCursor.tsx # Dot + ring cursor (disabled on touch)
│       ├── MagneticButton.tsx # Framer Motion magnetic CTA wrapper
│       └── NoiseOverlay.tsx   # Canvas film grain at 3% opacity
```

---

## Customizing Content

**All editable content lives in one file: [`src/data.ts`](./src/data.ts)**

### Update personal info
```ts
// src/data.ts
export const PERSONAL_INFO = {
  email: "guntukameghanareddy7@gmail.com",
  phone: "+91 62810 38551",
  // ...
}
```

### Add a project
```ts
export const PROJECTS: Project[] = [
  {
    id: "your-project-id",
    number: "04",
    title: "Your Project Title",
    // ...fill in all fields
  }
]
```

### Add GitHub/LinkedIn URLs
Update `SOCIAL_LINKS` in `src/data.ts`:
```ts
export const SOCIAL_LINKS = [
  { label: "GitHub", url: "https://github.com/YOUR_USERNAME", icon: "github" },
  { label: "LinkedIn", url: "https://linkedin.com/in/YOUR_PROFILE", icon: "linkedin" },
]
```

### Regenerate Resume PDF
After updating `scripts/generate-resume.cjs`:
```bash
node scripts/generate-resume.cjs
```

---

## Dark / Light Theme

- **Default:** Dark mode (`#0A0A0A` background).
- Toggle with the sun/moon button in the navbar.
- Theme preference is persisted to `localStorage`.
- CSS custom properties (`--bg-primary`, `--text-primary`, `--accent-amber`, etc.) are defined in `src/index.css`.

---

## Design System Tokens

All tokens are CSS custom properties on `:root` (dark) and `[data-theme="light"]`:

| Token | Dark | Light |
| :--- | :--- | :--- |
| `--bg-primary` | `#0A0A0A` | `#FAFAF8` |
| `--bg-surface` | `#111111` | `#FFFFFF` |
| `--text-primary` | `#F5F5F5` | `#0A0A0A` |
| `--text-secondary` | `#8A8A8A` | `#6B6B6B` |
| `--accent-amber` | `#E8B04B` | `#C48B27` |
| `--accent-sage` | `#9FB8A3` | `#5E7A63` |

---

## Deploying to Vercel

### Option 1: Vercel CLI (recommended)

```bash
npm install -g vercel
vercel
```

Follow prompts. Framework: Vite. Build command: `npm run build`. Output dir: `dist`.

### Option 2: GitHub + Vercel Dashboard

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your GitHub repo.
4. Vercel auto-detects Vite. Click **Deploy**.

### vercel.json (already configured)

The project is Vercel-ready out of the box. For SPA routing add a `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## Accessibility

- All interactive elements have unique `id` attributes and `aria-label` attributes.
- Keyboard accessible: Tab navigation, Escape to close modal, visible focus rings.
- Custom cursor is automatically hidden on touch devices.
- `@media (prefers-reduced-motion: reduce)` disables all Framer Motion animations and marquee.
- Color contrast verified in both dark and light modes.

---

## Performance Notes

- No large image assets (GM monogram is pure SVG, 800 bytes).
- Lenis smooth scroll is dynamically imported to avoid blocking.
- Film grain canvas is throttled to ~10fps.
- Google Fonts loaded with `display=swap` for zero layout shift.

---

*Designed & built by Meghana · 2026*
