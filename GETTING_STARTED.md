# 🚀 Getting Started - Complete Setup Guide

**Start here!** This guide walks you through everything from installation to going live.

---

## ✅ Step-by-Step Setup (5 minutes)

### Step 1: Verify Prerequisites
- ✅ Windows OS
- ✅ Node.js v16+ installed (`node --version`)
- ✅ npm installed (`npm --version`)
- ✅ Code editor (VS Code recommended)
- ✅ Project folder at: `c:\Users\thepa\Downloads\Sandai project`

### Step 2: Open Terminal/Command Prompt
```powershell
# Navigate to project
cd "c:\Users\thepa\Downloads\Sandai project"
```

### Step 3: Install Dependencies
```bash
npm install
```
This downloads all required packages (takes 1-2 minutes first time)

### Step 4: Start Development Server
```bash
npm run dev
```

Expected output:
```
  VITE v5.0.0  ready in 123 ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

### Step 5: Open in Browser
Visit: `http://localhost:3000`

🎉 **Site is now running!** You should see the homepage with hero section, animations, and all content.

---

## 📖 Understanding What You Have

### Project Structure
```
Your project includes:
├── 6 beautiful pages (Home, About, Services, Events, Contact, 404)
├── Premium design with smooth animations
├── Responsive mobile-first layout
├── All nonprofit content pre-populated
├── 30+ asset images ready to use
├── Comprehensive documentation
└── Production-ready code
```

### What's Ready to Go
- ✅ Full website layout
- ✅ All pages routing
- ✅ Smooth animations
- ✅ Mobile responsive design
- ✅ Professional color scheme
- ✅ Accessible HTML structure
- ✅ SEO-friendly markup

---

## 🎨 Customization Guide

### 1. Change Organization Info (5 min)
Edit: `src/constants/content.ts`

Find and update:
```ts
export const FOUNDATION_INFO = {
  name: 'Your Organization Name',
  contact: {
    email: 'your@email.com',
    phone: '(XXX) XXX-XXXX',
  },
  // ... update other fields
}
```

Changes appear instantly on dev server! (No rebuild needed)

### 2. Update Colors (2 min)
Edit: `tailwind.config.js`

Find and update colors section:
```js
colors: {
  burgundy: {
    500: '#8b2e17',  // Change this color
    600: '#7a2814',
    // ...
  },
}
```

Save and refresh browser to see changes.

### 3. Update Team Photos
1. Place new image in `/assets` folder
2. Update filename in `content.ts`:
```ts
leadership: [
  {
    name: 'Person Name',
    image: 'new-filename.png',  // Update this
    // ...
  },
]
```

### 4. Add New Service
Edit `src/constants/content.ts`, add to `services` array:
```ts
services: [
  // ... existing services
  {
    id: 7,
    title: 'New Service Name',
    shortDescription: '...',
    fullDescription: '...',
    features: ['...', '...'],
    icon: 'Heart', // or other lucide icon
  },
]
```

### 5. Add New Event
Edit `src/constants/content.ts`, add to `events` array:
```ts
events: [
  // ... existing events
  {
    id: 7,
    name: 'Event Name',
    description: '...',
    frequency: 'Weekly/Monthly/etc',
    time: 'Time',
    location: 'Location',
    image: 'event-image.png',
  },
]
```

---

## 🔧 Common Tasks

### Testing Different Pages

All pages accessible from header navigation:
- **Home:** `http://localhost:3000/`
- **About:** `http://localhost:3000/about`
- **Services:** `http://localhost:3000/services`
- **Events:** `http://localhost:3000/event-calendar`
- **Contact:** `http://localhost:3000/contact`
- **404 (Not Found):** `http://localhost:3000/any-random-page`

### Testing Mobile Version

In Chrome DevTools:
1. Press `F12` to open DevTools
2. Click device icon (top left)
3. Select mobile device or customize size
4. Test responsive design

### Stopping the Dev Server

In terminal:
```bash
Ctrl + C
```

### Restarting Dev Server

```bash
npm run dev
```

### Creating Production Build

```bash
npm run build
```

This creates optimized files in `dist/` folder ready for deployment.

---

## 📚 Documentation

Read these docs in order:

1. **This file** - Getting started (you are here)
2. [**PROJECT_SUMMARY.md**](PROJECT_SUMMARY.md) - Complete project overview
3. [**README.md**](README.md) - Project setup & features
4. [**QUICK_REFERENCE.md**](QUICK_REFERENCE.md) - Quick tips & tricks
5. [**DEVELOPMENT.md**](DEVELOPMENT.md) - Development guide details
6. [**DEPLOYMENT.md**](DEPLOYMENT.md) - How to deploy online
7. [**ARCHITECTURE.md**](ARCHITECTURE.md) - Technical architecture
8. [**LAUNCH_CHECKLIST.md**](LAUNCH_CHECKLIST.md) - Before going live
9. [**INDEX.md**](INDEX.md) - Documentation index

---

## 🎯 Next Steps

### This Week
- [ ] Get site running locally (`npm run dev`)
- [ ] Test all pages in browser
- [ ] Review design and animations
- [ ] Customize colors if needed
- [ ] Update organization information

### Next Week
- [ ] Update team photos
- [ ] Update services/events content
- [ ] Test on mobile devices
- [ ] Configure deployment platform
- [ ] Get domain name ready

### Before Launch
- [ ] Run `npm run build` successfully
- [ ] Test production build locally
- [ ] Review LAUNCH_CHECKLIST.md
- [ ] Perform final QA testing
- [ ] Get stakeholder approval

### After Launch
- [ ] Monitor site performance
- [ ] Set up Google Analytics
- [ ] Add contact form backend
- [ ] Configure email notifications
- [ ] Gather user feedback

---

## 🆘 Troubleshooting

### "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org

### Port 3000 already in use
**Solution:** 
```bash
# Kill the process or use different port
npm run dev -- --port 3001
```

### Images not showing
**Solution:** 
1. Check filename in `/assets` folder
2. Verify filename matches exactly in `content.ts`
3. Restart dev server

### Styles look wrong
**Solution:**
1. Hard refresh browser: `Ctrl+Shift+R` (Windows)
2. Clear browser cache
3. Restart dev server: `Ctrl+C` then `npm run dev`

### Build fails
**Solution:**
1. Check console for error message
2. Try: `npm install` again
3. Delete `node_modules` folder and reinstall
4. Check TypeScript errors: `npm run build`

### Need help?
Refer to:
- DEVELOPMENT.md - Common issues section
- Code comments in source files
- Component documentation in components/

---

## 💡 Quick Tips

### 1. Live Reload
Any code changes automatically refresh the browser (except CSS sometimes).

### 2. Component Reuse
Look at existing pages to use same pattern for new pages.

### 3. Colors
All colors are defined in `tailwind.config.js` - change there for consistency.

### 4. Images
Put ALL images in `/assets` folder, even if you don't use them yet.

### 5. Content
ALWAYS edit content in `content.ts` - one source of truth.

### 6. Mobile Testing
Test on actual mobile device when possible, not just browser DevTools.

### 7. Performance
After customizing, run: `npm run build` to check final size.

### 8. Safety
Always test on dev server before deploying to production!

---

## 📋 Checklist: First Day Setup

- [ ] Install Node.js (if needed)
- [ ] Navigate to project folder
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Open `http://localhost:3000`
- [ ] Test all pages load
- [ ] Test mobile view
- [ ] Review design/animations
- [ ] Understand file structure
- [ ] Read PROJECT_SUMMARY.md
- [ ] Practice making small edit to content.ts
- [ ] Verify changes appear instantly

**Time investment:** ~30 minutes

---

## 📋 Checklist: First Week Tasks

- [ ] Customize colors to match brand
- [ ] Update organization information
- [ ] Review all page content
- [ ] Update team member photos
- [ ] Test all interactive features
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Read DEPLOYMENT.md
- [ ] Set up deployment platform
- [ ] Plan content updates
- [ ] Document any customizations

**Time investment:** ~4 hours

---

## 🎓 Learning Resources

### For Customization
- How to edit content: DEVELOPMENT.md → Common Tasks
- How to add images: QUICK_REFERENCE.md → Adding Images
- How to change colors: QUICK_REFERENCE.md → Customizing Colors

### For Deployment
- Full guide: DEPLOYMENT.md
- Quick steps: QUICK_REFERENCE.md → Commands

### For Architecture
- Page structure: ARCHITECTURE.md
- Component tree: ARCHITECTURE.md → Component Hierarchy
- Data flow: ARCHITECTURE.md → Data Flow

---

## 🚀 Ready to Deploy?

When you're ready to go live:

1. Run: `npm run build`
2. Upload `dist` folder to hosting
3. Configure domain
4. Test live site
5. Monitor performance

See **DEPLOYMENT.md** for detailed platform-specific instructions.

---

## ✅ Success Criteria

You'll know everything is working when:

- ✅ Site loads at `http://localhost:3000`
- ✅ All pages accessible from navigation
- ✅ Images display correctly
- ✅ Animations run smoothly
- ✅ Mobile layout responsive
- ✅ No console errors
- ✅ Forms interactive (no backend yet)
- ✅ Links work (internal and external)

---

## 📞 Need Help?

### Documentation
- Check relevant .md file in project root
- Use INDEX.md to find specific topics
- Read code comments in source files

### Common Issues
- See DEVELOPMENT.md → Troubleshooting
- See QUICK_REFERENCE.md → Troubleshooting

### Code Questions
- Look at existing components for patterns
- Review ARCHITECTURE.md for structure
- Read component documentation

---

## 🎉 You're All Set!

Everything is ready to go. The site is production-quality and just needs your finishing touches.

**Next action:** Open terminal and type:
```bash
npm run dev
```

Enjoy your beautiful nonprofit website! 🎨

---

**Questions?** Start here:
1. Read the relevant .md file
2. Check QUICK_REFERENCE.md
3. Review code comments
4. Refer to ARCHITECTURE.md

**Questions about specific technologies?**
- React: https://react.dev
- Tailwind: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion
- Vite: https://vitejs.dev

---

**Happy coding! 🚀**
