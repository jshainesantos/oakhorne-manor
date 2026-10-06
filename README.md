# Oakhorne Manor

A premium marketing website for **Oakhorne Manor**, a residential assisted living / board &
care home for seniors with locations in Harbor City and Anaheim, California.

Built with **React + Vite + Tailwind CSS v4**.

## Design

- **Pattern:** Trust & Authority, accessibility-first (WCAG-minded)
- **Type:** Playfair Display (headings) + Inter (body)
- **Palette:** warm cream / sand / tan / terracotta clay / deep bark — drawn from the brand's
  own brochure identity

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  assets/img/        Photography (self-hosted)
  components/        Navbar, Hero, Highlights, About, Services,
                     Mission, QuoteBand, Locations, Contact, Footer, …
  data/site.js       All copy, contact details, locations & services
  index.css          Design tokens (@theme), base styles, scroll-reveal
```

Editable content (phone, addresses, services, highlights) lives in
[`src/data/site.js`](src/data/site.js).

## Notes

- The **contact form** is front-end only — it validates and shows a confirmation state, but
  does not yet send anywhere. Wire it to an email service / backend (e.g. Formspree, a serverless
  function, or an SMTP endpoint) before going live.
- Photography is from [Pexels](https://www.pexels.com) (free to use; attribution not required).

© Oakhorne Manor. Recognized Residential Care Facility for the Elderly.
