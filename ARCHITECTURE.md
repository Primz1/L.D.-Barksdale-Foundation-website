# 🗺️ Website Architecture & Sitemap

## Application Architecture

```
App.tsx (Router)
    └── Layout.tsx
        ├── Header.tsx (Navigation)
        ├── Main Content (Page Routes)
        │   ├── Home.tsx
        │   ├── About.tsx
        │   ├── Services.tsx
        │   ├── EventCalendar.tsx
        │   ├── Contact.tsx
        │   └── NotFound.tsx (404)
        └── Footer.tsx
```

---

## Page Routes & Structure

```
ROOT (/)
│
├── / (HOME PAGE)
│   ├── Hero Section
│   │   ├── Background Image
│   │   ├── Headline & Description
│   │   ├── CTA Buttons (Get Help, Donate, Volunteer)
│   │   └── Floating Stats Cards
│   │
│   ├── Impact Section
│   │   ├── Animated Counter: 50+ Years
│   │   ├── Animated Counter: 20,000+ Served
│   │   ├── Animated Counter: 15 Counties
│   │   └── Animated Counter: 1,000+ Screenings
│   │
│   ├── Services Preview
│   │   ├── Service Card 1: Education & Awareness
│   │   ├── Service Card 2: Support Groups
│   │   ├── Service Card 3: Healthcare Navigation
│   │   ├── Service Card 4: Financial Assistance
│   │   ├── Service Card 5: Youth Programs
│   │   └── Service Card 6: Research & Advocacy
│   │
│   ├── Coverage Map Section
│   │   ├── County Grid (15 counties)
│   │   └── Region Description
│   │
│   ├── Events Preview
│   │   ├── Event Card 1: Support Groups
│   │   ├── Event Card 2: Youth Workshops
│   │   └── Event Card 3: Provider Training
│   │
│   ├── Testimonials
│   │   ├── Quote 1: Parent
│   │   ├── Quote 2: Youth
│   │   └── Quote 3: Healthcare Provider
│   │
│   └── Final CTA Section
│       ├── Donation CTA
│       └── Volunteer CTA
│
├── /about (ABOUT PAGE)
│   ├── Hero Section
│   │   ├── Background Image
│   │   └── Title & Tagline
│   │
│   ├── Mission Section
│   │   ├── Mission Image
│   │   ├── Mission Statement
│   │   ├── Organization History
│   │   └── Key Highlights
│   │
│   ├── Core Values Grid
│   │   ├── Value 1: Compassion
│   │   ├── Value 2: Integrity
│   │   ├── Value 3: Excellence
│   │   ├── Value 4: Advocacy
│   │   └── Value 5: Community
│   │
│   ├── Leadership Team Cards
│   │   ├── Member 1: Executive Director
│   │   ├── Member 2: Director of Programs
│   │   ├── Member 3: Director of Development
│   │   └── Member 4: Medical Director
│   │
│   ├── History Timeline
│   │   ├── 1974: Foundation Established
│   │   ├── 1980s: Program Expansion
│   │   ├── 2000s: Regional Leadership
│   │   └── 2020s: Digital Transformation
│   │
│   ├── Board Section
│   │   ├── Board Description
│   │   └── CTA to Join
│   │
│   └── Final CTA
│
├── /services (SERVICES PAGE)
│   ├── Hero Section
│   │
│   ├── How We Help (3-Step Pathway)
│   │   ├── Step 1: Assess Your Needs
│   │   ├── Step 2: Connect You to Resources
│   │   └── Step 3: Provide Ongoing Support
│   │
│   ├── Service 1: Education & Awareness
│   │   ├── Icon
│   │   ├── Description
│   │   └── 5 Key Features
│   │
│   ├── Service 2: Support Groups
│   │   ├── Icon
│   │   ├── Description
│   │   └── 5 Key Features
│   │
│   ├── Service 3: Healthcare Navigation
│   │   ├── Icon
│   │   ├── Description
│   │   └── 5 Key Features
│   │
│   ├── Service 4: Financial Assistance
│   │   ├── Icon
│   │   ├── Description
│   │   └── 5 Key Features
│   │
│   ├── Service 5: Youth Programs
│   │   ├── Icon
│   │   ├── Description
│   │   └── 5 Key Features
│   │
│   ├── Service 6: Research & Advocacy
│   │   ├── Icon
│   │   ├── Description
│   │   └── 5 Key Features
│   │
│   ├── External Resources
│   │   ├── Resource 1: SCDAA
│   │   ├── Resource 2: NIH
│   │   ├── Resource 3: Genetic Counseling
│   │   ├── Resource 4: Pain Management
│   │   ├── Resource 5: Mental Health
│   │   └── Resource 6: Educational Materials
│   │
│   └── Final CTA
│
├── /event-calendar (EVENTS PAGE)
│   ├── Hero Section
│   │
│   ├── Events Grid
│   │   ├── Event 1: Monthly Support Groups
│   │   ├── Event 2: Youth Workshops
│   │   ├── Event 3: Provider Training
│   │   ├── Event 4: Annual Gala
│   │   ├── Event 5: Awareness Walk
│   │   └── Event 6: Family Wellness Day
│   │
│   ├── Annual Gala Highlight
│   │   ├── Event Description
│   │   ├── Significance
│   │   └── Mailing List Signup
│   │
│   ├── Recurring Programs
│   │   ├── Support Groups Info
│   │   ├── Youth Workshops Info
│   │   └── Provider Training Info
│   │
│   ├── Calendar Notes
│   │   └── Newsletter Signup
│   │
│   └── Final CTA with Email Signup
│
├── /contact (CONTACT & ENGAGEMENT PAGE)
│   ├── Hero Section
│   │
│   ├── Quick Donation Cards Section (id: #donate)
│   │   ├── $25 Hope Card
│   │   ├── $50 Care Card
│   │   ├── $100 Healing Card
│   │   ├── $250 Impact Card
│   │   └── Custom Amount Input
│   │
│   ├── Donation Breakdown
│   │   ├── Pie Chart: 65% Direct Services
│   │   ├── Pie Chart: 25% Operations
│   │   └── Pie Chart: 10% Development
│   │
│   ├── Volunteer Section (id: #volunteer)
│   │   ├── Volunteer Role 1: Support Facilitator
│   │   ├── Volunteer Role 2: Youth Mentor
│   │   ├── Volunteer Role 3: Event Coordinator
│   │   ├── Volunteer Role 4: Admin Support
│   │   ├── Volunteer Role 5: Community Educator
│   │   └── Volunteer Role 6: Grant Writer
│   │
│   ├── Contact Information Section
│   │   ├── Phone Number
│   │   ├── Email Address
│   │   ├── Physical Location
│   │   └── Office Hours
│   │
│   ├── Contact Form
│   │   ├── Name Input
│   │   ├── Email Input
│   │   ├── Subject Dropdown
│   │   ├── Message Textarea
│   │   └── Submit Button
│   │
│   └── Sticky Floating Heart Button (Mobile)
│
└── /* (404 NOT FOUND PAGE)
    ├── 404 Error Message
    ├── Home Button
    └── Go Back Button
```

---

## Component Hierarchy

```
<App>
  <BrowserRouter>
    <Layout>
      <Header>
        - Logo
        - Navigation Links
        - Mobile Menu
        - Donate Button
      </Header>
      
      <Main>
        <Routes>
          <Route path="/" element={<Home />}>
            - Hero Section
            - Impact Stats (StatCard components)
            - Services Grid (FeatureCard components)
            - Events Grid (FeatureCard components)
            - Testimonials
            - Final CTA
          </Route>
          
          <Route path="/about" element={<About />}>
            - Mission Section
            - Values Grid
            - Leadership Cards
            - Timeline
            - Board Section
          </Route>
          
          <Route path="/services" element={<Services />}>
            - Service Pathway
            - Service Sections (6 services)
            - Resource Cards
          </Route>
          
          <Route path="/event-calendar" element={<EventCalendar />}>
            - Events Grid
            - Annual Gala
            - Recurring Programs
            - Newsletter Signup
          </Route>
          
          <Route path="/contact" element={<Contact />}>
            - Donation Cards
            - Donation Breakdown
            - Volunteer Roles
            - Contact Form
            - Office Hours
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
      
      <Footer>
        - About Section
        - Quick Links
        - Get Involved Links
        - Contact Info
        - Social Links
        - Copyright
      </Footer>
    </Layout>
  </BrowserRouter>
</App>
```

---

## Component Dependencies

```
Layout
  ├── Header
  │   └── Link (React Router)
  │
  ├── Main (Routes)
  │   ├── Home
  │   │   ├── Section
  │   │   ├── SectionHeading
  │   │   ├── StatCard
  │   │   ├── FeatureCard
  │   │   ├── Motion (Framer)
  │   │   └── useAnimation (custom hook)
  │   │
  │   ├── About
  │   │   ├── Section
  │   │   ├── SectionHeading
  │   │   ├── Motion (Framer)
  │   │   └── Images
  │   │
  │   ├── Services
  │   │   ├── Section
  │   │   ├── SectionHeading
  │   │   ├── Motion (Framer)
  │   │   ├── Icons (Lucide)
  │   │   └── Images
  │   │
  │   ├── EventCalendar
  │   │   ├── Section
  │   │   ├── SectionHeading
  │   │   ├── Motion (Framer)
  │   │   ├── Icons (Lucide)
  │   │   └── Images
  │   │
  │   ├── Contact
  │   │   ├── Section
  │   │   ├── SectionHeading
  │   │   ├── Motion (Framer)
  │   │   ├── Icons (Lucide)
  │   │   └── Form Elements
  │   │
  │   └── NotFound
  │       ├── Motion (Framer)
  │       └── Link (React Router)
  │
  └── Footer
      └── Link (React Router)
```

---

## Data Flow

```
src/constants/content.ts (FOUNDATION_INFO)
       ↓
All Pages & Components
       ↓
Displays in UI
       ↓
User Interaction (Forms, Links, etc.)
       ↓
Backend (Future Integration)
```

---

## Animation Flow

```
Page Load
  ├── Initial: Hero Animation
  │   └── Staggered reveals
  │
  ├── Scroll Event
  │   ├── useScrollTrigger Hook
  │   │   └── GSAP ScrollTrigger
  │   │       ├── Fade-in animations
  │   │       ├── Staggered card reveals
  │   │       └── Parallax effects
  │   │
  │   └── Framer Motion whileInView
  │       └── Component scroll reveals
  │
  └── User Interaction
      ├── Hover Effects
      │   └── Shadow, scale, color changes
      │
      └── Click Events
          └── Form submission, navigation
```

---

## Navigation Flow

```
Header Navigation
├── Home (/)
├── About (/about)
├── Services (/services)
├── Events (/event-calendar)
├── Contact (/contact)
└── Donate Button → /contact#donate

Footer Links
├── Home (/)
├── About (/about)
├── Services (/services)
├── Events (/event-calendar)
├── Contact (/contact)
├── Donate (/contact#donate)
├── Volunteer (/contact#volunteer)
└── Social Links

Redirect Routes
├── /donate → /contact#donate
└── /volunteer → /contact#volunteer

Error Handling
└── /* → 404 Page
```

---

## Asset Organization

```
/assets
├── Images
│   ├── Logo & Branding
│   │   ├── Logo.png
│   │   └── Logo-removebg-preview.png
│   │
│   ├── Hero Images
│   │   ├── Home page image.png
│   │   ├── home page image 2.png
│   │   ├── home page image 3.png
│   │   └── homepage large image.png
│   │
│   ├── About Page Images
│   │   ├── large image about page.png
│   │   ├── our mission about page.png
│   │   ├── Father and Daughter about page.png
│   │   ├── blured out legacy image about page.png
│   │   ├── Legacy circular image.png
│   │   └── Exhibit image.png
│   │
│   ├── Team Photos
│   │   ├── Harriett Headshot_PNG.png
│   │   ├── Joyce Headshot_PNG.png
│   │   ├── Tamara Davis Headshot_PNG.png
│   │   └── rhonda yound headshot.png
│   │
│   ├── Event & Program Photos
│   │   ├── Support Group 4.png
│   │   ├── Support Group 6.png
│   │   ├── Support Group 10.png
│   │   ├── Swamp Rabbits 1 (1).png
│   │   └── Swamp Rabbits 1 (1) (1).png
│   │
│   └── Healthcare & Medical Images
│       ├── doctor and patiant.png
│       ├── Doctor examining baby.png
│       ├── Patient and Nurse.png
│       ├── Pharmacist Assisting Customer.png
│       └── Blood Pressure.png
```

---

## Content Structure (content.ts)

```
FOUNDATION_INFO
├── Basic Info
│   ├── name
│   ├── foundedYear
│   ├── yearsOfService
│   └── motto
│
├── Contact
│   ├── email
│   ├── phone
│   ├── address
│   └── hours
│
├── Mission & Values
│   ├── mission
│   └── values[] (5 values)
│
├── Statistics
│   ├── stats[] (4 metrics)
│   └── countyServed[] (15 counties)
│
├── Services
│   └── services[] (6 services with features)
│
├── Events
│   └── events[] (6 recurring events)
│
├── Team
│   └── leadership[] (4 team members)
│
├── Community Engagement
│   ├── donationTiers[] (4 tiers)
│   ├── volunteerRoles[] (6 roles)
│   └── testimonials[] (3 quotes)
```

---

## Module Dependencies

```
External Libraries
├── react@18 (Core framework)
├── react-dom@18 (Rendering)
├── react-router-dom@6 (Routing)
├── framer-motion@10 (Animations)
├── gsap@3 (Advanced animations)
├── tailwindcss@3 (Styling)
├── lucide-react@0.308 (Icons)
└── postcss + autoprefixer (CSS processing)

Custom Modules
├── components/* (Reusable components)
├── pages/* (Page components)
├── hooks/* (Custom React hooks)
├── utils/* (Helper functions)
└── constants/* (Data & configuration)
```

---

## Performance Optimization Points

```
Code Splitting
├── React Router lazy loading (per route)
├── Dynamic imports for large components
└── Separate vendor/animation chunks

Image Optimization
├── Lazy loading with whileInView
├── Responsive image sizing
├── Format optimization (WebP when possible)
└── Compression before deployment

Bundle Optimization
├── Tree shaking unused code
├── CSS purging with Tailwind
├── Minification in production build
└── Source map removal
```

---

## Security & Accessibility Points

```
Security
├── No sensitive data in client code
├── Form validation on frontend
├── CSP headers in production
└── Regular dependency updates

Accessibility
├── Semantic HTML structure
├── ARIA labels and roles
├── Keyboard navigation
├── Focus indicators
├── Color contrast WCAG AA
└── Screen reader support
```

---

## Deployment Pipeline

```
Development
├── npm install
├── npm run dev
├── Develop features
└── Test locally

Pre-Production
├── npm run build
├── npm run preview
├── Run Lighthouse audit
└── Final testing

Production
├── Push to repository
├── Trigger CI/CD pipeline
├── Deploy to Vercel/Netlify
└── Monitoring & logging
```

---

## Key Files at a Glance

| File | Purpose | Edit For |
|------|---------|----------|
| `content.ts` | All text content | Content updates |
| `tailwind.config.js` | Color/design tokens | Color/style changes |
| `App.tsx` | Route definitions | Adding new pages |
| `Header.tsx` | Navigation | Menu changes |
| `package.json` | Dependencies | Adding packages |
| `index.css` | Global styles | Global style overrides |

---

**Last Updated:** April 8, 2026
**Version:** 1.0 - Complete
