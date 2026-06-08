# Jhames Andrew Macabata — Portfolio

Personal portfolio for **Jhames Andrew Macabata**, Software Engineer (Full-Stack · Data · AI).
Dark-navy, single-page design with full Projects, Certifications, and Resume sub-pages.

**Live:** https://jhamesandrewmacabata.space

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript
- Static export (`output: "export"`) → deployed to **GitHub Pages**

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static export)

```bash
npm run build    # outputs static site to ./out
```

## Project structure

```
app/                # routes: / (home), /projects, /certifications, /cv
components/         # Navbar, Footer, ProjectCard, CertGrid, ContactSection, sections…
lib/content.ts     # single source of truth for all copy + data (edit text/links here)
public/            # assets: profile, resume PDF, project gifs, certification PDFs + thumbs
                   #   CNAME (custom domain) + .nojekyll (required for GitHub Pages)
```

## Editing content

Almost all text, links, projects, services, and certifications live in **`lib/content.ts`** —
edit there and the pages update automatically.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static export and
publishes `./out` to GitHub Pages. The `public/CNAME` file keeps the custom domain, and
`public/.nojekyll` ensures the `_next/` asset folder is served.
