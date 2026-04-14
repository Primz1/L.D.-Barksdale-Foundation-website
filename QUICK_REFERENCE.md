# Quick Reference Guide

## Installation & Setup

```bash
# Clone or navigate to project
cd "c:\Users\thepa\Downloads\Sandai project"

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Current Asset Files Available

Your `/assets` folder contains these images ready to use:

### Team/People Photos
- `Harriett Headshot_PNG.png`
- `Joyce Headshot_PNG.png`
- `Tamara Davis Headshot_PNG.png` (2 versions)
- `rhonda yound headshot.png`

### Event/Program Photos  
- `Support Group 10.png`
- `Support Group 4.png`
- `Support Group 6.png`
- `Swamp Rabbits 1 (1).png`
- `Swamp Rabbits 1 (1) (1) about page.png`

### Healthcare/Medical Photos
- `doctor and patiant.png`
- `Doctor examining baby.png`
- `Patient and Nurse.png`
- `Pharmacist Assisting Customer.png`
- `Blood Pressure.png`

### Hero & Featured Images
- `Home page image.png`
- `home page image 2.png`
- `home page image 3.png`
- `homepage large image .png`
- `large image about page.png`
- `our mission about page.png`
- `Father and Daughter about page.png`

### Logo & Branding
- `Logo.png`
- `Logo-removebg-preview.png`

### Other Assets
- Multiple generic images (Getty, Unsplash sourced)
- Legacy images and variations

## Import Images in Components

```tsx
// Example: Importing image
import heroImage from '../../assets/Home page image.png'

// Then use in JSX:
<img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
```

## Key Directories & Files

```
project-root/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   ├── constants/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── assets/              ← All images here
├── dist/               ← Generated on build
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── DEVELOPMENT.md
└── DEPLOYMENT.md
```

## Customizing the Site

### 1. Change Foundation Name/Info
Edit `src/constants/content.ts`:
```ts
export const FOUNDATION_INFO = {
  name: 'Your Foundation Name',
  contact: {
    email: 'your@email.com',
    phone: '(XXX) XXX-XXXX',
    // ...
  },
  // ...
}
```

### 2. Update Colors
Edit `tailwind.config.js` colors section.

### 3. Add/Remove Services
Edit `FOUNDATION_INFO.services` in `src/constants/content.ts`.

### 4. Update Team Members
Edit `FOUNDATION_INFO.leadership` in `src/constants/content.ts`:
```ts
leadership: [
  {
    name: 'Person Name',
    title: 'Job Title',
    bio: 'Biography',
    image: 'exact-filename.png',  // Must be in /assets
  },
  // ...
]
```

### 5. Add Events
Edit `FOUNDATION_INFO.events` array.

### 6. Modify Donation Tiers
Edit `FOUNDATION_INFO.donationTiers` array.

## Page Structure

### Home Page (`/`)
- Cinematic hero with background image
- Impact stats with animated counters
- Services preview cards
- Coverage map visualization
- Events preview
- Testimonials section
- Call-to-action section

### About Page (`/about`)
- Hero with background image
- Mission statement with image
- 5 core values grid
- Leadership team cards with photos
- History timeline
- Board section

### Services Page (`/services`)
- Service pathway (3 steps)
- 6 detailed service sections (alternating layout/dark)
- Resource cards
- Call-to-action

### Events Page (`/event-calendar`)
- Event cards with details
- Annual gala highlight section
- Recurring programs info
- Calendar notes/info
- Newsletter signup

### Contact Page (`/contact`)
- Quick donation cards ($25/$50/$100/custom)
- Donation breakdown pie charts
- Volunteer opportunity cards
- Office hours & contact info
- Contact form
- Sticky floating CTA button

## Animation Examples

### Scroll-triggered Fade
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, margin: '-100px' }}
>
  Content
</motion.div>
```

### Staggered Animation
```tsx
{items.map((item, idx) => (
  <motion.div
    key={idx}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: idx * 0.1, duration: 0.6 }}
  >
    {item}
  </motion.div>
))}
```

## Deployment

### Quick Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. `npm run build`
2. Drag `dist` folder to Netlify
3. Or connect GitHub repo

## Environment Variables

Create `.env` file:
```
VITE_API_URL=https://api.example.com
```

Access in code:
```ts
const apiUrl = import.meta.env.VITE_API_URL
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Images not showing | Check filename spelling (case-sensitive), verify path `../../assets/filename.png` |
| Styles not applying | Restart dev server, check Tailwind class syntax |
| Animations laggy | Reduce duration, use only `transform`/`opacity` properties |
| Build errors | Check console, re-run `npm install` |
| Imports failing | Verify file paths, ensure file exists |

## Performance Checklist

- [ ] Images optimized (< 200KB each)
- [ ] No console errors or warnings
- [ ] Mobile responsive tested
- [ ] Touch interactions smooth
- [ ] Animations don't stutter
- [ ] Lighthouse score > 90
- [ ] All links working
- [ ] Forms functional (with backend)
- [ ] Accessible (keyboard nav, ARIA labels)
- [ ] SEO meta tags complete

## Useful Tailwind Classes

```tsx
// Spacing
<div className="p-6 md:p-8 lg:p-12">  // Padding
<div className="mb-4 md:mb-6">         // Margin

// Display
<div className="hidden md:block">      // Hidden on mobile
<div className="flex md:grid">         // Flex on mobile, grid on desktop

// Colors
<div className="bg-burgundy-600 text-white">
<div className="border-2 border-slate-300">
<div className="hover:bg-burgundy-700">

// SVG Icons (from lucide)
<Heart size={24} className="text-burgundy-600" />
```

## Next Steps

1. **Customize Content** → Edit `src/constants/content.ts`
2. **Update Images** → Replace/add images in `/assets`
3. **Adjust Colors** → Modify `tailwind.config.js`
4. **Add Features** → Create new components or pages
5. **Test Locally** → Run `npm run dev`
6. **Build & Deploy** → `npm run build` then deploy

## Support & Resources

- **React**: https://react.dev
- **Vite**: https://vitejs.dev
- **Tailwind**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion
- **Lucide Icons**: https://lucide.dev

## License & Credits

Created with ❤️ for L.D. Barksdale Sickle Cell Foundation

Stack: React + Vite + TypeScript + Tailwind CSS + Framer Motion + GSAP
