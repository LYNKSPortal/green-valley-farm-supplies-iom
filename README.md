# Green Valley Supplies — Website

A Next.js (App Router) + TypeScript + Tailwind CSS catalogue and
lead-generation website for Green Valley Supplies, an Isle of Man supplier
of agricultural, landscaping, fencing, building, drainage, equestrian and
garden products.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # ESLint
```

## Project Structure

```text
app/                     Routes (App Router)
  products/               Drainage, Roofing, Timber, Composite, Gates
  agricultural/           Landing + Animal Housing + Supplies
  equestrian/
  garden/                 Landing + Garden Furniture + Greenhouses
  about/ contact/
  api/contact/            Contact form submission handler
components/
  layout/                 Header, TopBar, MegaMenu, MobileNav, Footer, Logo, SearchDialog
  shared/                 Hero, PageHero, CategoryCard, ProductCard, Gallery,
                          CTABanner, BrandStrip, Breadcrumbs, FeatureGrid,
                          FaqAccordion, RelatedCategories, MapBlock, etc.
  ui/                     Button, Badge, Container, SmartImage, icons, Skeleton
  forms/                  ContactForm
data/                     categories.ts, brands.ts, nav.ts — all editable content
lib/                      site-config.ts, schema.ts, search.ts, metadata.ts, utils.ts
types/                    Shared TypeScript types
```

## Editing Content

All product category content (titles, descriptions, products, features,
FAQs, related categories) lives in `data/categories.ts`. Navigation is
defined in `data/nav.ts`, and brand/supplier info in `data/brands.ts`.
Business details (phone, email, address, hours) are centralised in
`lib/site-config.ts`.

**Placeholder values requiring confirmation before launch** (all marked with
comments in `lib/site-config.ts`):

- Phone number and email address
- Physical address and postcode
- Opening hours
- Google Maps embed URL
- Social media links

## Images

No product photography was supplied for this build. Every image slot uses
`components/ui/smart-image.tsx`, which renders a tasteful on-brand
placeholder graphic (deterministic colour + initials) when no `src` is
provided, keeping layouts and aspect ratios intact.

To add real photography: drop files into `public/images/...` and set the
`src` field on the relevant `ImageRef` in `data/categories.ts` (e.g.
`{ src: "/images/drainage/twinwall-pipe.jpg", alt: "..." }`). The component
automatically switches to `next/image` with correct `sizes`/`object-cover`
behaviour — no other code changes required.

## Contact Form

`app/api/contact/route.ts` validates and logs submissions server-side. Wire
up an email provider (e.g. Resend, SendGrid) or CRM before launch — see the
`TODO` comment in that file.

## SEO

- `app/sitemap.ts` and `app/robots.ts` are generated automatically from the
  category data.
- Organisation and LocalBusiness JSON-LD schema is injected in
  `app/layout.tsx`; per-page Breadcrumb and CollectionPage schema is
  injected via `components/shared/category-template.tsx`.
- Each page sets a unique title/description/canonical via the Metadata API.
