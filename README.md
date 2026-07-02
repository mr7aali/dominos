# Domino's Next.js Clone

This project is a standalone Next.js App Router rebuild of the captured Domino's pages. The original HTTrack mirror has been removed; pages now render from local TypeScript/TSX files, local styles, local fonts, and local public assets.

## Structure

- `app/page.tsx` renders the home page.
- `app/**/page.tsx` contains concrete route files for each converted page, for example `app/content/accessibility-policy/page.tsx`.
- `app/layout.tsx` is the shared root layout.
- `src/modules/dominos/pages/` contains the modular TSX page bodies and page metadata.
- `src/styles/dominos.css` imports the local site stylesheet set.
- `src/styles/vendor/` contains the converted vendor CSS that used to come from captured `_next` assets.
- `public/site-assets/` contains local images, icons, PDFs, and other static assets used by the pages.
- `public/fonts/dominos/` contains local font files referenced by the CSS.

## Cleanup

The HTTrack source mirror, crawler cache/log/cookie files, runtime HTML loader, catch-all HTML route, copied `_next` bundles, inline scripts, and old asset proxy route have been removed. The app no longer reads from `www.dominos.com` at runtime.

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
