# Marvel Technologies — Official Website Platform

> **Tagline:** Innovation Without Limits.  
> **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Lucide Icons.

---

## 1. Project Overview

Marvel Technologies is a production-ready web platform engineered for an ambitious technology and software engineering company founded by four collaborative software engineers and product designers.

The website is crafted with a high-end, obsidian-and-cobalt tech aesthetic inspired by modern technology front-runners (Linear, Vercel, Apple, Stripe), featuring sub-second load times, strict static typing, and modular data separation.

---

## 2. Architecture & File Structure

```text
marvel-technologies/
├── public/
│   ├── brand/               # Official Marvel Technologies logo asset directory
│   └── ...
│
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with SEO metadata & background mesh
│   │   ├── page.tsx         # Composed Server Component home page
│   │   ├── globals.css      # Tailwind v4 theme, obsidian palette & glow styles
│   │   ├── icon.svg         # SVG favicon matching brand monogram
│   │   ├── not-found.tsx    # Branded 404 error page
│   │   ├── robots.ts        # Search engine crawler directives
│   │   └── sitemap.ts       # Automated sitemap generator
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Floating backdrop-blur pill navbar
│   │   │   ├── MobileMenu.tsx  # Slide-in mobile navigation drawer
│   │   │   └── Footer.tsx      # Multi-column footer with live status indicator
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx               # Hero headline, CTAs & interactive mesh terminal
│   │   │   ├── About.tsx              # 4-founder narrative & 4 core engineering pillars
│   │   │   ├── Services.tsx           # 6 core service modules with modal inspectors
│   │   │   ├── InteractiveSystem.tsx  # Interactive 4-layer ecosystem visualizer
│   │   │   ├── Process.tsx            # 6-stage engineering lifecycle timeline
│   │   │   ├── Projects.tsx           # Categorized portfolio with sample blueprints
│   │   │   ├── Technologies.tsx       # 4-tier technology stack ecosystem
│   │   │   ├── Team.tsx               # 4 founding technology professionals
│   │   │   ├── Faq.tsx                # Interactive client FAQ accordion
│   │   │   └── Contact.tsx            # Validated contact form & direct channels
│   │   │
│   │   └── ui/
│   │       ├── BrandLogo.tsx          # Dual-mode logo (vector mark + asset override)
│   │       ├── Button.tsx             # Accessible button variants with glow
│   │       ├── Card.tsx               # Glassmorphic card surface with hover states
│   │       ├── Badge.tsx              # Status & category pills with pulse dots
│   │       ├── Modal.tsx              # Accessible dialog with ESC & overlay triggers
│   │       ├── Icons.tsx              # Vector SVG icons for GitHub & LinkedIn
│   │       ├── SectionHeading.tsx     # Standardized section header with badge
│   │       └── BackgroundEffects.tsx  # Fixed ambient radial lighting & grid pattern
│   │
│   ├── data/                          # Centralized editable configuration files
│   │   ├── company.ts                 # Company metadata, contacts & legal info
│   │   ├── navigation.ts              # Nav items, anchors & footer links
│   │   ├── services.ts                # Service specs, capabilities & deliverables
│   │   ├── projects.ts                # Portfolio entries & architecture blueprints
│   │   ├── team.ts                    # 4 founders profile data & social links
│   │   ├── technologies.ts            # Tech stack breakdown & skill levels
│   │   ├── process.ts                 # 6 lifecycle stages & deliverables
│   │   └── faq.ts                     # Client FAQ questions & answers
│   │
│   ├── lib/
│   │   └── utils.ts                   # Tailwind class merge utilities
│   │
│   └── types/
│       └── index.ts                   # Strict TypeScript contracts
│
├── next.config.mjs                    # Next.js production settings
├── tsconfig.json                      # Strict TypeScript compiler options
├── postcss.config.mjs                 # PostCSS Tailwind v4 processor
└── package.json                       # Scripts and project dependencies
```

---

## 3. Brand Identity & Logo Asset Integration

The brand uses a geometric **M Monogram** facet with cyan-to-indigo gradient accent lines (`#00D2FF` &rarr; `#0066FF` &rarr; `#8B5CF6`) and crisp typography.

### How to Attach the Official Logo File:
The `BrandLogo` component (`src/components/ui/BrandLogo.tsx`) is already wired to automatically detect and display the official logo asset the moment it is provided.

1. Drop your official logo image file into:
   ```text
   public/brand/marvel-logo.png
   ```
2. Or update the path in `src/components/ui/BrandLogo.tsx` if using an SVG or different filename.
3. If no file is placed there yet, the site automatically renders the high-tech vector logomark fallback.

---

## 4. Getting Started & Development

### Prerequisites
- Node.js `v20.0.0` or higher (tested on Node v24)
- `pnpm` (or `npm`)

### Installation & Running Locally
```bash
# Navigate to the project directory
cd /home/ezedinmoh/Web-Projects/marvel-technologies

# Run development server
pnpm dev
# or
./node_modules/.bin/next dev -p 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Launch
```bash
# Build optimized production bundle
./node_modules/.bin/next build

# Start production server
./node_modules/.bin/next start -p 3000
```

---

## 5. Centralized Content Updates

All content is strictly separated from component UI logic:

| Content Area | Configuration File |
| :--- | :--- |
| **Company Info & Contacts** | `src/data/company.ts` |
| **Navigation Links** | `src/data/navigation.ts` |
| **Services & Deliverables** | `src/data/services.ts` |
| **Portfolio Projects** | `src/data/projects.ts` |
| **Team Profiles (4 Founders)** | `src/data/team.ts` |
| **Technology Stack** | `src/data/technologies.ts` |
| **Engineering Stages** | `src/data/process.ts` |
| **FAQ Answers** | `src/data/faq.ts` |

---

## 6. Features Implemented

1. **Floating Pill Navigation Bar:**
   - Dynamic sticky backdrop blur on scroll.
   - Active section highlighting across viewports.
   - Accessible mobile menu drawer with touch-friendly layout.
2. **Hero Experience:**
   - Bold headline: *"Building Next-Generation Digital Systems Without Limits."*
   - Interactive technology terminal widget with real-time architecture mesh toggles and operational telemetry logs.
   - Dual high-contrast action CTAs (*Start Your Project*, *Explore Solutions*).
3. **About Section:**
   - Founding story of the 4 collaborative engineers.
   - 4 Core Engineering Pillars (*Core Collaborators*, *Modern Discipline*, *Real Problem Solvers*, *Reliability & Ownership*).
   - "Our Engineering Oath" callout.
4. **Comprehensive Services Matrix:**
   - 6 full-lifecycle service categories (Modern Web Engineering, Mobile App Engineering, UI/UX Systems, Custom ERP, API & Cloud, Workflow Automation).
   - Interactive modal inspection view for each service showing exact architectural scope and milestone deliverables.
5. **Interactive System Architecture Showcase:**
   - Live 4-layer interactive console allowing users to toggle between:
     - 01 / Edge & Frontend
     - 02 / API & Logic Core
     - 03 / Persistence & Cache
     - 04 / Integrations & Webhooks
   - Features real code snippets and live simulated performance telemetry.
6. **Development Lifecycle Timeline:**
   - 6 structured stages: *Discover*, *Strategize & Architect*, *Design & Prototype*, *Engineer & Integrate*, *Test & Launch*, *Scale & Improve*.
7. **Production Projects Showcase:**
   - Filterable portfolio with category tabs (*All*, *Full-Stack*, *E-Commerce*, *Enterprise & Cloud*, *Mobile & PWA*).
   - Real production projects sourced directly from founder Ezedin Mohammed's portfolio:
     - **WEARIFY** (Next.js 16 Streetwear Storefront & Split Admin Suite)
     - **ANBESSA** (React 19 / TanStack Start Footwear PWA)
     - **Amore Cafe & Restaurant** (Table QR Digital Dining Experience)
     - **BYD Ethiopia** (Digital Automotive Showroom & Range Simulator)
     - **Smart Library** (Next.js 16 Multi-Role System with QR Passports)
     - **SwiftBus** (Intercity Bus Ticket Reservation Engine)
     - **Holland Dairy Ethiopia** (Corporate Platform & Sustainable Storytelling)
     - **Ramadanly** (Offline-first PWA Quran & Habit Companion)
   - High-resolution Cloudinary previews, live website links, verified GitHub repositories, and interactive Case Study modals (*The Challenge*, *Engineering Solution*, *Measurable Impact*).
8. **Technology Ecosystem:**
   - Categorized across 4 core domains (Frontend, Backend & Data, Mobile & Multi-Platform, DevOps & Cloud) with visual proficiency levels.
9. **Founding Team Section:**
   - Dedicated profiles for all 4 founding partners.
   - Lead Founder **Ezedin Mohammed** (Co-Founder & Lead Software Architect) with real portrait photograph, technical background, GitHub, LinkedIn, and direct contact.
   - 3 collaborative partner placeholders ready for the remaining three co-founders.
10. **Interactive FAQ Accordion:**
    - Smooth expand/collapse answers addressing client onboarding, IP ownership, and tech choices.
11. **Contact & Consultation Hub:**
    - Clean contact form with client-side validation, loading spinner state, success notification, and error handling.
    - Direct contact links for Email, Phone, Telegram, and LinkedIn.
12. **SEO & Performance:**
    - Complete OpenGraph & Twitter card metadata.
    - Automated `/robots.txt` and `/sitemap.xml` routes.
    - Geometric vector SVG favicon.
