# Domino's Next.js Clone

This project wraps the HTTrack mirror in a Next.js App Router project.

## Structure

- `app/[[...slug]]/route.ts` serves mirrored HTML pages like `/`, `/menu.html`, and `/deals.html`.
- `app/legacy-assets/[[...path]]/route.ts` serves captured CSS, images, fonts, and JavaScript from the mirror.
- `src/lib/legacy-site.ts` rewrites legacy asset paths so they work inside Next without conflicting with Next's own `/_next` files.
- `www.dominos.com/` contains the original mirrored Domino's files.

The old Domino's JavaScript chunks captured by HTTrack are stripped at request time because the mirror is incomplete and those scripts try to fetch missing chunks. The local Sign In drawer script is preserved.

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
