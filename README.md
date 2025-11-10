# Portfolio Next.js Starter

A minimal, dark, clean portfolio starter using **Next.js (App Router)** + **Tailwind**.

## Quickstart

```bash
pnpm i # or npm install / yarn
pnpm dev # or npm run dev
```

## Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. Go to Vercel → `New Project` → import the repo → Deploy.

### Custom domain

After deploy, add your domain in **Settings → Domains** in Vercel, then follow the prompted DNS records. (Usually a CNAME to `cname.vercel-dns.com` for `www` and an ALIAS/ANAME or A record for apex with Vercel.)

## Customize

- Edit copy in `app/page.tsx`
- Add projects in the `projects` array
- Global styles in `app/globals.css`
- Social links in header buttons
