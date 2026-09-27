# Personal Portfolio

A modern, bilingual (English / Indonesian) personal portfolio built with
Next.js 14 (App Router), TypeScript, and Tailwind CSS. No backend, no
database — everything is static and ready to deploy to Vercel.

## Stack

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS** for styling
- No UI/animation libraries beyond what ships with the browser — theme and
  language switching, scroll reveals, and the certificate modal are all
  built with plain React state, `IntersectionObserver`, and CSS transitions.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To check the production build before deploying:

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. Go to https://vercel.com/new and import the repository.
3. Vercel auto-detects Next.js — leave the default build command
   (`next build`) and output settings as they are.
4. Click **Deploy**. No environment variables are required.

You can also deploy from the CLI:

```bash
npm install -g vercel
vercel
```

## Project structure

```
app/
  layout.tsx          Root layout: fonts, SEO metadata, theme init script
  page.tsx             Assembles all sections into the home page
  globals.css          Base styles, focus states, section utility classes

components/            One component per UI piece (Navbar, Hero, About, ...)
context/
  ThemeContext.tsx      Light/dark mode, persisted to localStorage
  LanguageContext.tsx   EN/ID switching, persisted to localStorage
data/
  translations.ts       Every UI string, in English and Indonesian
  portfolio.ts           Your content: profile, projects, skills, certificates,
                          education, experience, social links
hooks/
  useInView.ts           Powers the scroll-reveal animation
  useActiveSection.ts     Powers the navbar's active-link indicator
types/
  index.ts                Shared TypeScript types for the data above
public/
  images/                 Where your real photos and screenshots go
```

## What to edit to add your real content

Everything you need to personalize lives in **`data/portfolio.ts`** and
**`data/translations.ts`** — you should not need to touch any component file
just to update content.

| Content                          | File                                    |
| --------------------------------- | ---------------------------------------- |
| Name, title, location, email      | `data/portfolio.ts` → `profile`          |
| Projects                          | `data/portfolio.ts` → `projects`         |
| Skills                            | `data/portfolio.ts` → `skills`           |
| Certificates                      | `data/portfolio.ts` → `certificates`     |
| Education                         | `data/portfolio.ts` → `education`        |
| Experience                        | `data/portfolio.ts` → `experience`       |
| Social links (email/LinkedIn/etc) | `data/portfolio.ts` → `socialLinks`      |
| Hero copy, nav labels, buttons    | `data/translations.ts`                   |

### Adding your photos

The site currently renders labeled placeholder boxes instead of real
`<img>` elements, so it runs with zero image files. See
`public/images/README.md` for the exact steps and which components to
update once you have real photos — it's a small, mechanical change
(swap a placeholder `<div>` for a Next.js `<Image>`).

Update the favicon by replacing `public/favicon.svg`, and update the site
name/description/URL used for SEO and Open Graph tags near the top of
`app/layout.tsx`.

## Features implemented

- Sticky, glassmorphism navbar with scroll-based styling and an active
  section indicator; mobile hamburger menu with a slide-in panel
- Hero section with photo placeholder and subtle decorative elements
- About, Projects (with working category filter), Certificate & Skills
  (skills with level badges, certificates with a lightbox modal), Education
  timeline, Experience timeline, Contact, and Footer sections
- Full English/Indonesian language switching with no mixed-language leftovers
- Light/dark theme toggle, persisted across refreshes
- Scroll-reveal animations that respect `prefers-reduced-motion`
- Responsive from 320px up to large desktop screens
- Semantic HTML, keyboard focus states, ARIA labels on interactive controls
- No TypeScript errors, no unused/broken links, no external image
  dependencies — builds cleanly for production

## Notes

This container could not run `npm install` (no network access in this
environment), so please run `npm install && npm run build` yourself as a
final check before deploying — the code was written carefully against
Next.js 14 / TypeScript 5 conventions, but a local build is the definitive
verification.
