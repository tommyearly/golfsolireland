# AGENTS.md

## Cursor Cloud specific instructions

### Overview

Golf Sol Ireland is a standalone **Next.js 14** (App Router) frontend for a golf holiday marketing site. There is no backend, database, or Docker dependency. All API calls (contact form, newsletter) fall back to mock/demo responses when `NEXT_PUBLIC_API_URL` is unset.

### Running the app

```bash
npm run dev     # starts dev server on http://localhost:3000
npm run build   # production build
npm run lint    # ESLint via next lint
```

See `README.md` for full details on the design system, component hierarchy, and routes.

### Caveats

- The first time `npm run lint` is executed, Next.js may prompt interactively for ESLint config selection if `.eslintrc.json` is missing. The repo includes `.eslintrc.json` with `next/core-web-vitals` to prevent this.
- No automated test suite exists (`npm test` is not configured). Validate changes via `npm run lint`, `npm run build`, and manual browser testing.
- Remote images from Unsplash/Pexels are configured in `next.config.mjs`. If images fail to load, it is a network issue, not a code bug.
