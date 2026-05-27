# defendableos.com

The public marketing site for **DefendableOS** — *Proof of Execution for agentic work.*

A clean, static, ground-up rebuild. No portal, no app, no internal workflow surfaces — a professional brand anchor that explains what DefendableOS is, how it works, and who it's for.

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS](https://tailwindcss.com) — styling (`@astrojs/tailwind`)
- [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — auto sitemap
- Deployed to **Cloudflare Pages**

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # outputs static site to dist/
npm run preview    # serve the built dist/ locally
```

## Deploy (Cloudflare Pages)

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Framework preset:** Astro

### Contact form (Cloudflare Pages Function + Resend)

The `/contact` form POSTs to `functions/api/contact.ts`, a Pages Function that
sends the message via [Resend](https://resend.com) to `build@defendableos.com`.

Set one secret in **Cloudflare Pages → Settings → Environment variables**
(for **both** Production and Preview):

```
RESEND_API_KEY = re_...
```

Optional overrides: `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (the from address
must be on a Resend-verified domain — `defendableos.com` is the verified sender).
Without the key set, the form returns a 503 and the page falls back to the
`mailto:` link.

Test Functions locally with `npx wrangler pages dev dist` (the plain Astro dev
server does not run `functions/`).

Point the existing `defendableos.com` Pages project at this repo (or create a new
Pages project and re-map the custom domain). The previous site lives in the
`SudoSuOps/defendable` repo and is being replaced by this one (`defendable-os-v2`).

## Structure

```
src/
  layouts/Layout.astro          # <head>, SEO/OG meta, JSON-LD
  components/                   # Nav, Footer, Section, StepCard, ValueCard
  pages/
    index.astro                 # home (hero → problem → what → how → value → who → CTA)
    contact.astro               # "make the dial" + mailto
    404.astro
  styles/global.css             # brand grid + glow, base styles
public/
  favicon.svg  og-image.png  robots.txt  llms.txt
```

## Voice

Professional, plain-English, principal-led. Light Mr. Defendable signatures used
sparingly ("make the dial", "to the shed"). No MBA/SaaS jargon, no internal
taxonomy (no Honey/Jelly/Propolis, no deed hashes, no status panels) — those are
back-end concerns and stay off the client-facing site.

---

Swarm and Bee LLC · DBA Swarm & Bee AI · Florida · D-U-N-S 138652395
