# Deployment Guide

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## Deployment Options

### Option 1: Vercel (Recommended for React/Vite)

1. Push repository to GitHub
2. Connect repo to Vercel
3. Vercel automatically deploys on push

```bash
npm install -g vercel
vercel
```

### Option 2: Netlify

1. Build locally: `npm run build`
2. Connect to Netlify by dragging `dist` folder
3. Or connect GitHub repo in Netlify dashboard

### Option 3: Traditional Hosting

1. Build: `npm run build`
2. Upload `dist` folder contents to your web server
3. Configure server to serve `index.html` for all routes (SPA routing)

## Environment Variables

Create `.env` file in root:

```
VITE_API_URL=https://your-api.com
```

## Performance Checklist

- [ ] Images optimized (use WebP where possible)
- [ ] Lazy loading enabled for below-fold sections
- [ ] Code splitting configured in vite.config.ts
- [ ] CSS purging enabled in tailwind.config.js
- [ ] Analytics configured (Google Analytics, etc.)
- [ ] SEO meta tags verified
- [ ] Mobile responsiveness tested
- [ ] Lighthouse score > 90

## Monitoring

Consider adding:

- Sentry for error tracking
- Google Analytics for traffic
- Mailchimp for newsletter
- Stripe for donations (when ready)

## SSL/HTTPS

Most modern hosting provides free HTTPS:
- Vercel: Automatic
- Netlify: Automatic
- Custom: Use Let's Encrypt + certbot

## Updating Content

Content is stored in `src/constants/content.ts`. To update:

1. Edit the content file
2. Rebuild: `npm run build`
3. Redeploy

Future: Add CMS integration (Contentful, Sanity, etc.)
