# NIA — Next India Institute of Aesthetics

Marketing website for NIA's dermatology clinic and aesthetic medicine institute (NIIA): treatments, courses, faculty, gallery, blog, and a contact form that emails the customer and logs the lead to Google Sheets.

## Tech Stack

- **Frontend:** React 19, React Router 7, Vite, Tailwind CSS 4
- **Backend:** Express 5 (contact form API)
- **Email:** Resend
- **Lead storage:** Google Sheets, via a Google Apps Script webhook

## Project Structure

```
src/
  components/   Reusable UI — layout (navbar/footer), home sections, gallery, ui helpers
  pages/        One component per route (see src/App.jsx for the route list)
  content/      All site copy, images paths, and content data (src/content/siteContent.js)
  lib/          Small client-side utilities (phone formatting, API client, etc.)
server/
  index.js      Express app entry point
  routes/       API routes
  lib/          Validation, email, and Google Sheets integrations
  google-apps-script/  Script deployed on the Google Sheet that receives leads
scripts/
  generate-sitemap.mjs  Generates public/sitemap.xml and public/robots.txt at build time
public/
  assets/images/  Static images and videos served as-is
```

## Getting Started

Requires Node.js 18+.

```bash
npm install
cp .env.example .env   # fill in real values — see below
```

Run the frontend only (uses the Vite dev proxy for `/api`):

```bash
npm run dev
```

Run the frontend and the contact-form API together:

```bash
npm run dev:all
```

## Environment Variables

Copy `.env.example` to `.env` and fill in the values. Never commit `.env`.

| Variable | Used by | Purpose |
| --- | --- | --- |
| `PORT` | server | Port the Express API listens on (default `3001`) |
| `CLIENT_ORIGIN` | server | Allowed CORS origin for the frontend |
| `RESEND_API_KEY` | server | API key from [resend.com](https://resend.com) for confirmation emails |
| `RESEND_FROM_EMAIL` | server | Verified sender address for outgoing email |
| `SITE_NAME` | server | Display name used in email templates |
| `GOOGLE_SHEETS_WEBHOOK_URL` | server | Apps Script deployment URL that appends leads to a Sheet |
| `GOOGLE_SHEETS_SECRET` | server | Shared secret checked by the Apps Script webhook |
| `VITE_API_URL` | frontend | Base URL for the contact API in production (e.g. `https://api.yourdomain.com/api`) |
| `VITE_SITE_URL` | frontend + sitemap | Canonical site URL used in SEO tags and the generated sitemap |

Setting up the Google Sheets webhook is documented in `server/google-apps-script/contact-form.gs`.

## Building for Production

```bash
npm run build
```

This regenerates `public/sitemap.xml` and `public/robots.txt` from live content, then produces a static build in `dist/`.

```bash
npm run preview   # preview the production build locally
```

## Editing Content

Nearly all copy — treatments, courses, faculty, blog posts, FAQs, gallery items, contact details — lives in `src/content/siteContent.js`. Update text, prices, or image paths there; drop new images into `public/assets/images/<section>/`.

## Deployment

- **Frontend:** static build in `dist/`, deployable to Vercel (see `vercel.json`) or any static host. Set `VITE_API_URL` and `VITE_SITE_URL` for the target environment before building.
- **Backend:** deploy `server/` as a long-running Node process (`npm run start:server`) on a Node host of your choice, with the server-side environment variables above configured.
