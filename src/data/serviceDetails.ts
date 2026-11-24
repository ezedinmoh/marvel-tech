export interface DetailedService {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  heroHeadline: string;
  heroSubtitle: string;
  overview: string;
  problemsSolved: { title: string; desc: string }[];
  technicalCapabilities: string[];
  deliverables: string[];
  techStack: string[];
  caseStudyRef?: { title: string; outcome: string; liveUrl?: string };
  faqs: { question: string; answer: string }[];
}

export const detailedServices: Record<string, DetailedService> = {
  'web-development': {
    slug: 'web-development',
    title: 'Website & Web Application Development',
    metaTitle: 'Website Development & Next.js Web Engineering',
    metaDescription:
      'Marvel Technologies builds high-performance Next.js 16 and React 19 web applications with sub-second response times, Google SEO dominance, and responsive design in Ethiopia and worldwide.',
    category: 'Website Development',
    heroHeadline: 'High-Performance Web Applications Engineered for Speed and Search Dominance.',
    heroSubtitle:
      'We build full-stack web applications using cutting-edge Next.js 16 App Router, React 19, TypeScript, and serverless architectures with sub-second response times and 99.9% uptime design.',
    overview:
      'Modern businesses require web platforms that not only look exceptional but load instantaneously and rank prominently on Google. Marvel Technologies engineers custom web solutions that eliminate slow page loads, provide dynamic server-side rendering (SSR), and deliver intuitive user journeys across all device viewports.',
    problemsSolved: [
      {
        title: 'Slow Loading & Poor Core Web Vitals',
        desc: 'Legacy WordPress or bloated template sites suffer from poor LCP, high bounce rates, and penalties in Google rankings. We engineer pure Next.js 16 with Lighthouse 95+ scores.',
      },
      {
        title: 'Weak Google Search Discoverability',
        desc: 'Client-only single-page apps leave search crawlers with blank pages. We implement full server-rendered HTML, structured schema, and dynamic OpenGraph metadata.',
      },
      {
        title: 'Clunky Mobile Experiences',
        desc: 'Over 75% of web traffic in Ethiopia and internationally originates on smartphones. Our mobile-first responsive architecture ensures smooth, app-like navigation on all screens.',
      },
    ],
    technicalCapabilities: [
      'Next.js 16 App Router & Server Components Architecture',
      'React 19, TypeScript & Tailwind CSS v4 styling purity',
      'Server-Side Rendering (SSR) & Incremental Static Regeneration (ISR)',
      'Headless CMS integration (Sanity, Strapi, Contentful)',
      'High-performance Core Web Vitals engineering (LCP < 2.0s, CLS < 0.05)',
      'Full Schema.org JSON-LD structured data and semantic HTML5 hierarchy',
    ],
    deliverables: [
      'Production-ready Next.js web application repository',
      'Fully responsive layouts for mobile, tablet, and desktop',
      'Automated CI/CD deployment on Vercel or cloud provider',
      'Lighthouse 95+ speed, accessibility, and SEO audit report',
    ],
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Vercel', 'PostgreSQL'],
    caseStudyRef: {
      title: 'WEARIFY & ANBESSA Web Storefronts',
      outcome: 'Sub-second transitions across 50+ routes, guest checkout, and 99.9% uptime on Vercel.',
      liveUrl: 'https://wearify-et.vercel.app',
    },
    faqs: [
      {
        question: 'Why choose custom Next.js over generic WordPress or Wix?',
        answer: 'Next.js provides enterprise-grade performance, complete code ownership, zero plugin bloat, superior Google SEO indexing through server rendering, and infinite scalability as your business grows.',
      },
      {
        question: 'Does Marvel Technologies serve clients outside Kombolcha and Ethiopia?',
        answer: 'Yes. While based in Kombolcha, Ethiopia, Marvel Technologies engineers digital systems for startups, businesses, and organizations locally, nationwide, and internationally.',
      },
    ],
  },

  'custom-software': {
    slug: 'custom-software',
    title: 'Custom Software Development',
    metaTitle: 'Custom Software Development Company | Tailored Digital Solutions',
    metaDescription:
      'Custom software development by Marvel Technologies in Ethiopia. We engineer tailored business platforms, portals, and high-throughput backend systems for local and international clients.',
    category: 'Custom Software Development',
    heroHeadline: 'Bespoke Software Architecture Engineered Around Your Business Operations.',
    heroSubtitle:
      'Off-the-shelf software forces businesses to change their workflows. Marvel Technologies engineers custom software platforms that adapt to your exact operations, compliance, and growth goals.',
    overview:
      'From custom operational portals to complex inventory control and multi-role dashboards, Marvel Technologies develops software systems from first principles. We prioritize strict type-safety, clean domain-driven architecture, resilient databases, and automated error handling.',
    problemsSolved: [
      {
        title: 'Rigid Off-the-Shelf Software Limits',
        desc: 'Commercial SaaS tools charge exorbitant per-user license fees while missing the exact workflows your team needs every day.',
      },
      {
        title: 'Scattered Spreadsheets & Human Error',
        desc: 'Managing operations via disconnected Excel files leads to data corruption, lost invoices, and zero audit accountability. We build unified, relational software systems.',
      },
      {
        title: 'Security & Access Control Gaps',
        desc: 'Our systems incorporate granular role-based access control (RBAC), multi-factor authentication, and encrypted database connections.',
      },
    ],
    technicalCapabilities: [
      'Multi-tenant and multi-role architecture with strict RBAC',
      'Relational database engineering with PostgreSQL, Neon Cloud & Prisma ORM',
      'High-throughput RESTful and GraphQL APIs with OpenAPI documentation',
      'Asynchronous task queues and event-driven background processing',
      'Automated PDF document and invoice generation engines',
    ],
    deliverables: [
      'Tailored business software platform with source code ownership',
      'Documented database schema and automated migration pipelines',
      'Role-based permission matrix and security audit documentation',
      'Staff onboarding and administrative operating manuals',
    ],
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker', 'Redis'],
    caseStudyRef: {
      title: 'Smart Library Enterprise Management Platform',
      outcome: 'Multi-role student/librarian portal with live cataloging, borrowing workflows, and real-time fine calculation.',
      liveUrl: 'https://smart-library-et.vercel.app',
    },
    faqs: [
      {
        question: 'How long does a custom software development project take?',
        answer: 'Depending on scope, initial production sprints typically deploy within 4 to 8 weeks, followed by continuous iterative enhancements.',
      },
      {
        question: 'Do we own the software source code and data?',
        answer: 'Yes, 100%. All intellectual property, source code, database architectures, and assets belong entirely to your organization upon project completion.',
      },
    ],
  },

  'erp-systems': {
    slug: 'erp-systems',
    title: 'ERP & Business Management Systems',
    metaTitle: 'ERP Systems & Enterprise Business Management Software',
    metaDescription:
      'Modern ERP system development by Marvel Technologies in Ethiopia. Streamline inventory, order processing, financial accounting, and operations management locally and globally.',
    category: 'Enterprise ERP Systems',
    heroHeadline: 'Unified Enterprise Resource Planning & Operational Control Centers.',
    heroSubtitle:
      'Bring all your business telemetry into one unified command center. Real-time inventory tracking, multi-branch operations, automated invoicing, and role-based staff oversight.',
    overview:
      'Marvel Technologies architects modular ERP and Business Management Systems tailored for distributors, retailers, manufacturers, and service enterprises. Our ERP platforms replace chaotic paperwork with real-time financial tracking, automated purchase orders, and live business telemetry.',
    problemsSolved: [
      {
        title: 'Inventory Shrinkage & Blind Spots',
        desc: 'Manual stock counts lead to stockouts, misplaced assets, and discrepancies. Our real-time inventory ledger updates instantly with every transaction.',
      },
      {
        title: 'Delayed Financial Reporting',
        desc: 'Waiting until month-end to understand profitability hampers strategic growth. Our dashboards display live gross margins, pending accounts, and operational cash flow.',
      },
      {
        title: 'Multi-Branch Disconnection',
        desc: 'Sync multiple stores, warehouses, or regional branches seamlessly through centralized cloud databases with offline resiliency.',
      },
    ],
    technicalCapabilities: [
      'Perpetual inventory management with barcode/SKU integration',
      'Automated sales order, purchase order, and quotation workflows',
      'Double-entry accounting integration and financial telemetry charts',
      'Multi-branch and multi-warehouse stock transfer verification',
      'Immutable audit logs tracking every user action and data modification',
    ],
    deliverables: [
      'Centralized web ERP application accessible on desktop, tablet, and mobile',
      'Custom inventory and financial reporting modules',
      'Automated database backups and disaster recovery setup',
      'Role-specific dashboard views for executives, managers, and cashiers',
    ],
    techStack: ['Next.js', 'PostgreSQL', 'Prisma ORM', 'Tailwind CSS', 'Docker', 'Chart.js'],
    faqs: [
      {
        question: 'Can the ERP system integrate with local Ethiopian payment systems?',
        answer: 'Yes. Our ERP systems natively integrate with Telebirr, Chapa, CBE Birr, and international payment processors like Stripe for seamless transaction reconciliation.',
      },
      {
        question: 'Is training provided for our administrative and operational staff?',
        answer: 'Yes. We conduct hands-on training sessions and provide comprehensive documentation and video guides for all operational roles.',
      },
    ],
  },

  'ecommerce-development': {
    slug: 'ecommerce-development',
    title: 'E-Commerce Storefronts & Platforms',
    metaTitle: 'E-Commerce Website Development | Local & Global Payment Integration',
    metaDescription:
      'Marvel Technologies builds high-converting e-commerce storefronts with dual local (Chapa, Telebirr) and international (Stripe) payments, live inventory, and sub-second checkout.',
    category: 'E-Commerce Solutions',
    heroHeadline: 'Modern E-Commerce Storefronts Engineered for High Conversion.',
    heroSubtitle:
      'Sell to customers in Ethiopia and around the world. Ultra-fast checkout, dual payment integrations, interactive 3D product previews, and independent live admin managers.',
    overview:
      'We build custom e-commerce experiences that turn visitors into loyal customers. From boutique fashion brands to large-scale wholesale distributors, our stores feature frictionless checkout, automated order notifications via Telegram/SMS, and robust stock management.',
    problemsSolved: [
      {
        title: 'Cart Abandonment Due to Sluggish Checkout',
        desc: 'Every millisecond of checkout latency costs sales. We optimize checkout flows to under 2 seconds with guest checkout and local payment options.',
      },
      {
        title: 'Payment Gateway Barriers',
        desc: 'Most platforms support either only international cards or only local mobile money. We bridge both, allowing simultaneous Stripe, Chapa, and Telebirr payments.',
      },
      {
        title: 'Difficult Content & Banner Management',
        desc: 'Our split-screen admin managers let non-technical store owners update hero banners, discounts, and collections in real-time without writing code.',
      },
    ],
    technicalCapabilities: [
      'Dual domestic (Chapa, Telebirr) and international (Stripe) payment gateways',
      'Live 50/50 split-screen admin section customization engine',
      'NextAuth.js authentication supporting Google, GitHub, and phone OTP',
      'Server-side rendered dynamic category and product detail pages',
      'Real-time inventory decrementing and cart synchronization',
    ],
    deliverables: [
      'Full e-commerce customer storefront and administrative portal',
      'Configured payment gateway accounts and webhook listeners',
      'Product catalog database with search and category filtering',
      'Automated email and Telegram customer order notification bots',
    ],
    techStack: ['Next.js 16', 'TypeScript', 'Prisma', 'Neon Cloud PostgreSQL', 'Stripe', 'Chapa'],
    caseStudyRef: {
      title: 'WEARIFY Streetwear Suite',
      outcome: 'Full-stack brand storefront with 50+ routes, live dual payment checkout, and split-screen visual customization.',
      liveUrl: 'https://wearify-et.vercel.app',
    },
    faqs: [
      {
        question: 'Can customers pay using Telebirr or local Ethiopian bank cards?',
        answer: 'Yes. We integrate Chapa and Telebirr API webhooks so customers can pay with Telebirr, CBE, Awash, or local debit cards with instant automated order verification.',
      },
      {
        question: 'Can we also accept international credit cards from the USA, Europe, and Middle East?',
        answer: 'Yes. We configure Stripe checkout for international credit/debit cards with multi-currency conversion alongside local payment rails.',
      },
    ],
  },

  'telegram-bot-development': {
    slug: 'telegram-bot-development',
    title: 'Telegram Bot & Messaging Automation',
    metaTitle: 'Telegram Bot Development Company | Business Automation & Orders',
    metaDescription:
      'Custom Telegram bot development by Marvel Technologies in Ethiopia. Automate customer ordering, inquiries, payments, and notifications directly in Telegram.',
    category: 'Telegram Bot Development',
    heroHeadline: 'Turn Telegram into an Automated Revenue & Operations Channel.',
    heroSubtitle:
      'Telegram is the primary digital communication hub in Ethiopia and many emerging markets. We build automated Telegram bots that take orders, verify payments, and answer inquiries 24/7.',
    overview:
      'Rather than forcing customers to download heavy apps, meet them where they already spend their time. Marvel Technologies develops powerful Telegram bots that connect directly to your database, inventory, and payment gateways for instant customer engagement.',
    problemsSolved: [
      {
        title: 'Overwhelmed Manual Customer Support',
        desc: 'Staff waste hours answering repetitive price questions and availability inquiries. Our bots provide instantaneous 24/7 interactive menus and FAQ answers.',
      },
      {
        title: 'Manual Screenshot-Based Payment Verification',
        desc: 'Customers sending payment screenshots requires tedious manual verification. Our bots generate dynamic payment links and confirm deposits automatically.',
      },
      {
        title: 'Lost Leads & Delayed Responses',
        desc: 'Delayed replies result in lost sales. Automated interactive Telegram flows guide customers from product discovery to confirmed delivery in seconds.',
      },
    ],
    technicalCapabilities: [
      'Telegram Bot API with interactive inline keyboards and web app integration',
      'Direct integration with PostgreSQL and business databases for live inventory',
      'Automated Telebirr and Chapa payment generation and verification webhooks',
      'Multi-admin alert forwarding and order dispatching channels',
      'Bilingual Amharic and English conversational interfaces',
    ],
    deliverables: [
      'Fully deployed and verified Telegram bot hosted on high-uptime cloud infrastructure',
      'Administrative broadcast and notification management channels',
      'Webhook listener server with rate limiting and automated recovery',
      'Step-by-step user operation and command reference documentation',
    ],
    techStack: ['Node.js', 'TypeScript', 'Telegram Bot API', 'PostgreSQL', 'Docker', 'Webhooks'],
    faqs: [
      {
        question: 'Can a Telegram bot process payments automatically in Ethiopia?',
        answer: 'Yes. The bot can generate unique Chapa or Telebirr payment links and automatically process orders once the webhook receives verified settlement.',
      },
      {
        question: 'Does the bot support Amharic language menus and messages?',
        answer: 'Yes. All interactive buttons, responses, and receipts can be fully localized in Amharic and English based on the user’s preference.',
      },
    ],
  },

  'business-automation': {
    slug: 'business-automation',
    title: 'Business Automation & Digital Transformation',
    metaTitle: 'Business Automation & Digital Transformation Services',
    metaDescription:
      'Marvel Technologies delivers business process automation and digital transformation in Ethiopia. Eliminate manual tasks, connect software systems, and accelerate workflows.',
    category: 'Business Process Automation',
    heroHeadline: 'Eliminate Repetitive Tasks and Connect Your Entire Digital Ecosystem.',
    heroSubtitle:
      'Modern businesses lose hundreds of hours to manual data re-entry and fragmented tools. We build intelligent connective pipelines that sync data, trigger actions, and eliminate human error.',
    overview:
      'Digital transformation is about eliminating operational friction. Marvel Technologies analyzes your operational bottlenecks and engineers custom automation bridges between your payment processors, CRM tools, communication channels, and internal accounting systems.',
    problemsSolved: [
      {
        title: 'Repetitive Manual Data Entry',
        desc: 'Staff manually copying orders from chat into Excel or accounting software creates delays and costly mistakes. We automate data pipelines from end to end.',
      },
      {
        title: 'Fragmented Software Silos',
        desc: 'When marketing, sales, inventory, and finance software don’t communicate, management flies blind. We integrate disparate systems into unified sync engines.',
      },
      {
        title: 'Operational Bottlenecks as You Scale',
        desc: 'Growing order volumes overwhelm manual processes. Our automated workflows scale horizontally to handle thousands of transactions without extra overhead.',
      },
    ],
    technicalCapabilities: [
      'Event-driven webhook handlers and asynchronous message queues',
      'Custom ETL (Extract, Transform, Load) pipelines for data migration',
      'Third-party API connectors for Google Workspace, Telegram, and CRMs',
      'Automated reconciliation engines for bank deposits and payment gateways',
      'System health telemetry, uptime monitors, and error notification webhooks',
    ],
    deliverables: [
      'Custom automation middleware deployed on containerized cloud nodes',
      'Data mapping and synchronization pipelines with zero data loss guarantees',
      'Automated monitoring dashboards and alerting configurations',
      'Operational workflow documentation and maintenance guides',
    ],
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'REST / Webhooks'],
    faqs: [
      {
        question: 'What types of business processes can be automated?',
        answer: 'Common automations include customer invoice generation, payment reconciliation, inventory reorder notifications, multi-platform data syncing, customer support routing, and automated compliance reporting.',
      },
      {
        question: 'How do you ensure data security during automation transfers?',
        answer: 'All data in transit is encrypted using TLS 1.3, API secrets are stored in secure vault environments, and all transactions are tracked with immutable audit logs.',
      },
    ],
  },

  'mobile-development': {
    slug: 'mobile-development',
    title: 'Mobile App Engineering (iOS & Android)',
    metaTitle: 'Mobile App Development Company | Cross-Platform React Native',
    metaDescription:
      'Cross-platform iOS and Android mobile app development by Marvel Technologies in Ethiopia. Offline-first architectures, biometric security, and fluid 60fps experiences.',
    category: 'Mobile App Development',
    heroHeadline: 'Fluid Cross-Platform Mobile Applications Built for iOS and Android.',
    heroSubtitle:
      'Deliver seamless mobile experiences to your customers. High-performance React Native applications with offline-first synchronization, push notifications, and biometric authentication.',
    overview:
      'A great mobile app must be fast, reliable even on patchy cellular networks, and intuitive from the first touch. Marvel Technologies engineers native-feel cross-platform mobile apps that give your brand a permanent presence on customer devices.',
    problemsSolved: [
      {
        title: 'High Cost of Dual Native Development',
        desc: 'Building separate Swift and Kotlin codebases doubles engineering costs. Our unified React Native architecture delivers native performance from a single maintainable codebase.',
      },
      {
        title: 'Network Dropouts & Poor Connectivity',
        desc: 'Mobile users in emerging markets frequently encounter spotty cellular data. Our offline-first SQLite architectures cache data locally and sync automatically when reconnected.',
      },
      {
        title: 'Slow App Store Approvals & Updates',
        desc: 'We implement Over-The-Air (OTA) update pipelines allowing critical bug fixes and content updates to deploy instantly without waiting days for app store review.',
      },
    ],
    technicalCapabilities: [
      'React Native & Expo ecosystem with modular native bridges',
      'Offline-first SQLite data storage with background synchronization engines',
      'Biometric authentication (FaceID, Fingerprint) utilizing Secure Enclave keys',
      'Push notification pipelines with segmented customer targeting',
      'Native camera, GPS location, and Bluetooth hardware integrations',
    ],
    deliverables: [
      'Production iOS (IPA) and Android (AAB/APK) application binaries',
      'Complete App Store and Google Play Store submission and launch setup',
      'Over-The-Air (OTA) update architecture configuration',
      'Mobile UI component library matching your brand identity',
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Redux / Zustand', 'Tailwind'],
    faqs: [
      {
        question: 'Will our app work on both iPhones and Android devices?',
        answer: 'Yes. React Native compiles directly to native iOS and Android components, ensuring uniform high performance on both major operating systems.',
      },
      {
        question: 'Do you assist with Google Play and Apple App Store submission?',
        answer: 'Yes. We manage the entire store listing, privacy compliance, app signing, screenshot preparation, and review submission process through approval.',
      },
    ],
  },

  'ui-ux-design': {
    slug: 'ui-ux-design',
    title: 'Modern UI/UX & Product Design Systems',
    metaTitle: 'UI/UX Design Services & Design Systems | Marvel Technologies',
    metaDescription:
      'Modern UI/UX design and design systems by Marvel Technologies. Bespoke user flows, high-fidelity Figma prototypes, and WCAG accessibility standards for web and mobile apps.',
    category: 'UI/UX Design',
    heroHeadline: 'Bespoke Digital Design Systems Aligned with International Standards.',
    heroSubtitle:
      'Great software begins with thoughtful human-centered design. We craft interfaces inspired by design leaders like Apple, Linear, and Vercel—built for clarity, engagement, and conversion.',
    overview:
      'We believe software should feel intuitive, effortless, and visually striking. Marvel Technologies bridges the gap between aesthetic beauty and engineering practicality, designing comprehensive design systems and interactive Figma prototypes ready for development.',
    problemsSolved: [
      {
        title: 'Confusing User Interfaces & Lost Conversions',
        desc: 'Cluttered screens and confusing navigation frustrate users and cause high churn. We conduct user journey mapping to design simple, goal-oriented paths.',
      },
      {
        title: 'Inconsistent Visual Identity Across Platforms',
        desc: 'When web, mobile, and print look disjointed, brand credibility suffers. We build unified atomic design token systems that enforce visual consistency everywhere.',
      },
      {
        title: 'Design-to-Code Disconnect',
        desc: 'Too often, designs look pretty in Figma but fail in actual code. As software engineers, our designs are built with real CSS grid, flexbox, and components in mind.',
      },
    ],
    technicalCapabilities: [
      'Comprehensive Figma component libraries and atomic design structures',
      'Interactive motion studies, hover micro-interactions, and transitions',
      'WCAG 2.1 AA accessibility compliance and contrast ratio auditing',
      'Design token architectures (colors, typography, spacing, shadows) translated to CSS',
      'Responsive multi-breakpoint wireframes and user flow diagrams',
    ],
    deliverables: [
      'Complete Figma design file with organized layers and auto-layout components',
      'Interactive clickable prototype for investor and user testing',
      'Design token export package for development teams',
      'Brand typography and color usage guidelines documentation',
    ],
    techStack: ['Figma', 'Design Tokens', 'Tailwind CSS', 'Framer Motion', 'WCAG 2.1 AA'],
    faqs: [
      {
        question: 'Can you redesign our existing software or website?',
        answer: 'Yes. We audit your current user experience, identify drop-off points, and modernize the visual styling and navigation flow while preserving your core data.',
      },
      {
        question: 'Do you provide clickable prototypes before coding begins?',
        answer: 'Yes. We build interactive Figma prototypes that allow you to click through the entire user experience on phone or desktop before a single line of code is written.',
      },
    ],
  },
};
