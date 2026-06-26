# Domino's Next.js Clone

This project converts the HTTrack capture in `www.dominos.com/` into a Next.js App Router project with real route folders and reusable rendering components.

## Structure

- `app/page.tsx` renders the home page from `www.dominos.com/index.html`.
- `app/**/page.tsx` contains concrete route files for the cloned pages, for example `app/content/accessibility-policy/page.tsx`.
- `app/layout.tsx` is the shared root layout.
- `app/site-assets/[[...path]]/route.ts` serves captured images, fonts, CSS, PDFs, and other static assets.
- `src/components/dominos/` contains shared React components for page rendering, head assets, navigation, main content, footer regions, internal `Link` mapping, and safe `Image` mapping.
- `src/lib/dominos-site.ts` reads the captured source files, removes crawler/runtime artifacts, rewrites local asset URLs, and provides page metadata.

## Cleanup

The old catch-all HTML route and old asset route have been removed. Root crawler cache/log/cookie files are removed from the project. Captured HTML is cleaned at render time so crawler comments, injected meta tags, stale runtime data, and inline scripts do not ship through the app.

## Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
```

Open the app at:

```text
http://127.0.0.1:3000
```

