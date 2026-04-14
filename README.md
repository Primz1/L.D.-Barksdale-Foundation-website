# L.D. Barksdale Foundation Website

Modern, responsive nonprofit website for sickle cell education, support, advocacy, events, and community engagement.

This repository is a frontend-only React application built with Vite + TypeScript and styled with Tailwind CSS.

## Project Status

- Build status: passing (`npm run build`)
- TypeScript diagnostics: clean
- UX status: advanced visual system with light/dark theme, animated interactions, and interactive event calendar
- Backend status: not connected yet (forms, donations, subscriptions are placeholder UI)

## Tech Stack

- React 18
- Vite 5
- TypeScript 5
- React Router 6
- Tailwind CSS 3
- Framer Motion
- GSAP + ScrollTrigger
- Lucide React icons

## Scripts

```bash
npm run dev      # local development server
npm run build    # type-check + production build
npm run preview  # preview production build locally
npm run lint     # eslint (if project eslint config is present)
```

## How The Project Functions

### 1. App shell and routing

- `src/main.tsx` mounts the app and imports global styles.
- `src/App.tsx` defines route mapping:
  - `/` Home
  - `/about` About
  - `/services` Services
  - `/event-calendar` Events
  - `/contact`, `/donate`, `/volunteer` Contact page variants
  - `*` Not Found
- All routes render inside `src/components/Layout.tsx`.

### 2. Layout and cross-page behaviors

`src/components/Layout.tsx` handles shared runtime behavior:

- scroll reset on route change
- centralized pointer effects:
  - spotlight glow (`data-spotlight`)
  - 3D tilt (`data-tilt`)
  - magnetic hover (`data-magnetic`)

Pages/components opt-in with `data-*` attributes; Layout wires/unwires listeners.

### 3. Content model

`src/constants/content.ts` is the primary content source for:

- organization metadata
- services
- events
- leadership
- donation tiers
- volunteer roles
- testimonials

This keeps page components mostly presentational.

### 4. Theming and visual system

- Global style foundation: `src/index.css`
- Tailwind tokens and gradients: `tailwind.config.js`
- Theme toggle UI + persistence: `src/components/Header.tsx`

Theme flow:

1. Read `localStorage.theme`
2. Fallback to system preference (`prefers-color-scheme`)
3. Toggle `theme-dark` class on `<html>`
4. Global surfaces/buttons/scrollbars transition via CSS

### 5. Animation architecture

- Framer Motion: section and card reveal animations
- GSAP: scroll-trigger and advanced effects
- CSS keyframes: ambient glow and micro-motion

### 6. Event calendar behavior

- Page: `src/pages/EventCalendar.tsx`
- Utility logic: `src/utils/calendar.ts`

Calendar is currently rule-based (recurrence logic), not API-based:

- support group = second Saturday monthly
- workshop = quarterly months
- provider training = spring/fall months
- awareness events = September

The selected day panel shows scheduled items for the chosen date.

## Project Structure

```text
assets/                 # static media
src/
  components/           # shared UI + layout primitives
  constants/            # central content model
  hooks/                # animation hooks
  pages/                # route-level screens
  utils/                # helper modules (calendar, misc)
  App.tsx               # router
  main.tsx              # app bootstrap
  index.css             # global styles + theme system
tailwind.config.js      # design tokens, gradients, animations
tsconfig.json           # TS compiler setup
```

## Debugging and Cleanup Done

- fixed TypeScript deprecation/build friction in `tsconfig.json`
- added workspace CSS lint settings for Tailwind at-rules in `.vscode/settings.json`
- compacted calendar page by extracting scheduling/grid logic to `src/utils/calendar.ts`
- added targeted comments in high-complexity behavior files (theme init, layout pointer wiring, recurrence rules)

## What Is Still Needed

### High priority (product critical)

1. Form handling and backend endpoints
	- contact form submit + validation + spam protection
	- volunteer interest submission
	- newsletter subscription endpoint
2. Donation processing
	- integrate Stripe/PayPal
	- receipt + donor confirmation email
	- failure/retry states
3. Real event data source
	- replace recurrence-only calendar with exact dated events from CMS/API
	- add registration links and capacity status

### Medium priority (quality + operations)

1. Add automated tests
	- unit tests for `src/utils/calendar.ts`
	- component tests for theme toggle and calendar interactions
	- smoke e2e flow tests for navigation and forms
2. Accessibility hardening
	- keyboard trap checks for mobile nav
	- color contrast audit in both themes
	- screen reader labels for all form and icon-only controls
3. Analytics and monitoring
	- privacy-compliant analytics events (donation click, contact submit, calendar interaction)
	- production error tracking (Sentry or equivalent)

### Lower priority (enhancement)

1. Content management workflow
	- migrate `FOUNDATION_INFO` to CMS or headless backend
	- editor roles and publishing workflow
2. Performance refinements
	- image optimization pipeline and responsive image sets
	- route-level prefetch strategy
3. SEO enrichment
	- route-specific metadata utility adoption across all pages
	- organization + event structured data

## Recommended Implementation Order

1. Contact + newsletter backend integration
2. Donations
3. Exact event date model/API
4. Tests + accessibility pass
5. CMS migration

## Environment Notes

- Current setup is static frontend and works without `.env`.
- Once backend integrations are added, create `.env` for public API keys/base URLs.

## Contributing Notes

- Keep content updates centralized in `src/constants/content.ts` until CMS migration.
- Prefer small reusable utilities for repeated UI logic (calendar/grid/date transforms).
- Maintain the established palette and avoid generic SaaS blue/orange combinations.

## License

Project license is not set yet.

