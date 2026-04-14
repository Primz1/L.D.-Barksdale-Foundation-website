# Development Guide

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── Cards.tsx           # StatCard, FeatureCard components
│   ├── Layout.tsx          # Main layout wrapper
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with links
│   └── Section.tsx         # Reusable section container
├── pages/
│   ├── Home.tsx            # Hero + impact + services
│   ├── About.tsx           # Mission + values + team
│   ├── Services.tsx        # Service details
│   ├── EventCalendar.tsx   # Events listing
│   ├── Contact.tsx         # Donations + volunteer + contact
│   └── NotFound.tsx        # 404 page
├── hooks/
│   └── useAnimation.ts     # Animation hooks (scroll, parallax, counters)
├── utils/
│   └── helpers.ts          # SEO, lazy loading, formatting
├── constants/
│   └── content.ts          # All text content and data
├── App.tsx                 # Routes configuration
├── main.tsx                # React entry point
└── index.css               # Global styles
```

## Common Tasks

### Adding a New Page

1. Create file in `src/pages/NewPage.tsx`
2. Add route in `App.tsx`:
```tsx
<Route path="/new-page" element={<NewPage />} />
```
3. Add navigation link in `Header.tsx`

### Updating Content

All content is in `src/constants/content.ts`. Structure:
```ts
export const FOUNDATION_INFO = {
  services: [
    {
      id: 1,
      title: 'Service Name',
      shortDescription: '...',
      fullDescription: '...',
      features: ['...', '...'],
      icon: 'IconName', // From lucide-react
    },
    // ...
  ],
  // ...
}
```

### Adding Animations

Use Framer Motion for scroll reveals:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, margin: '-100px' }}
>
  Content
</motion.div>
```

Use GSAP for advanced scroll effects (see `useAnimation.ts`).

### Customizing Colors

Edit `tailwind.config.js`:
```js
colors: {
  burgundy: {
    500: '#8b2e17',  // Change here
    600: '#7a2814',
    // ...
  },
  // ...
}
```

Then use in components:
```tsx
<div className="bg-burgundy-500 text-white">...</div>
```

### Adding Images

1. Place image in `/assets` folder
2. Import in component:
```tsx
import imageFile from '../../assets/filename.png'
```
3. Use in JSX:
```tsx
<img src={imageFile} alt="Description" />
```

**Image Naming Tips:**
- Use hyphens for spaces: `my-image.png` not `my image.png`
- Keep names descriptive and lowercase
- Check exact filename including extensions

### Using Icons

Icons from `lucide-react`. Available icons:
- Heart, Users, Zap, BookOpen, Stethoscope, Microscope
- MapPin, Phone, Mail, Clock, Calendar, Gift
- Plus 1000+ more

```tsx
import { Heart, Zap } from 'lucide-react'

<Heart size={24} className="text-burgundy-600" />
```

## Component Props

### StatCard
```tsx
<StatCard
  label="Label"
  value={1000}
  suffix="+"
  prefix="$"
  index={0}  // optional delay
/>
```

### FeatureCard
```tsx
<FeatureCard
  icon={<Heart />}
  title="Title"
  description="Description"
  index={0}
  imageUrl="/path/to/image.png"  // optional
/>
```

### SectionHeading
```tsx
<SectionHeading
  title="Main Title"
  subtitle="Optional subtitle"
  centered={true}
  className="custom-classes"
/>
```

## Performance Tips

1. **Lazy Load Below-Fold Sections**
   ```tsx
   <motion.div whileInView={{ opacity: 1 }} viewport={{ once: true }}>
   ```

2. **Image Optimization**
   - Resize images to needed dimensions
   - Use WebP format where possible
   - Compress with TinyPNG or similar

3. **Monitor Bundle Size**
   ```bash
   npm run build  # Check dist folder size
   ```

4. **Code Splitting**
   Already configured in `vite.config.ts`. Routes automatically split.

## Testing

### Local Testing
```bash
npm run dev
# Test all pages manually
```

### Production Build Testing
```bash
npm run build
npm run preview
# Visit http://localhost:4173
```

### Lighthouse Audit
1. Build for production
2. Deploy to staging
3. Run Lighthouse audit in Chrome DevTools

## Common Issues

### Images not showing
- Check asset filename matches exactly (including spaces, case)
- Verify path: `../../assets/filename.png`
- File must be in `/assets` folder

### Import errors
- Check file path spelling
- Ensure file exists
- Restart dev server

### Animations are laggy
- Reduce `transition` duration
- Use `transform` and `opacity` properties only (best performance)
- Check browser console for errors

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (iOS 12+)
- IE 11: Not supported

## Next Steps for Production

1. [ ] Add analytics (Google Analytics)
2. [ ] Add form backend (Formspree, Basin, etc.)
3. [ ] Add donation processing (Stripe)
4. [ ] Set up newsletter (Mailchimp)
5. [ ] Add email service (SendGrid)
6. [ ] Configure custom domain
7. [ ] Set up SSL certificate
8. [ ] Add monitoring (Sentry)
9. [ ] Create CMS integration
10. [ ] Set up CI/CD pipeline

## Resources

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion)
- [GSAP Docs](https://gsap.com)
- [Lucide Icons](https://lucide.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
