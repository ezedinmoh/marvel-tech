import { ServiceItem } from '@/types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Modern Web Engineering',
    shortDescription:
      'High-performance Next.js and React web applications engineered for lightning speed, SEO dominance, and uncompromising reliability.',
    fullDescription:
      'We build full-stack web applications using cutting-edge React 19, Next.js App Router, TypeScript, and serverless architectures. From multi-tenant SaaS dashboards to dynamic consumer portals, every product is engineered with sub-second response times, rock-solid security, and responsive layouts.',
    iconName: 'Globe',
    badge: 'Core Competency',
    capabilities: [
      'Next.js 15+ & React 19 Full-Stack Architecture',
      'Server-Side Rendering (SSR) & Dynamic Static Generation',
      'Headless CMS & Commerce Integration',
      'High-Performance Core Web Vitals Optimization',
      'Modern State Management & Real-time WebSockets',
    ],
    deliverables: [
      'Production-Ready Next.js Application Source Code',
      'Responsive Mobile & Tablet Viewports',
      'Automated CI/CD Deployment Pipelines',
      'Comprehensive Lighthouse 95+ Audit Report',
    ],
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Engineering',
    shortDescription:
      'Native-feel cross-platform iOS and Android applications developed with React Native and modern mobile toolchains.',
    fullDescription:
      'We engineer fluid mobile applications that provide intuitive user experiences on both Android and iOS devices. Using React Native and modular native bridges, our apps deliver smooth 60fps animations, offline-first data synchronization, biometric authentication, and push notification infrastructures.',
    iconName: 'Smartphone',
    badge: 'Cross-Platform',
    capabilities: [
      'React Native & Expo Ecosystem',
      'Offline-First Local Storage & Sync Engine',
      'Biometric Security & Secure Enclave Keys',
      'Push Notification Pipelines & Analytics',
      'Native Hardware Integrations (Camera, GPS, Bluetooth)',
    ],
    deliverables: [
      'Production iOS & Android Application Bundles',
      'App Store & Google Play Deployment Setup',
      'OTA (Over-The-Air) Update Architecture',
      'Mobile UI Component Library',
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Product Design Systems',
    shortDescription:
      'Bespoke digital design systems, user flows, wireframes, and high-fidelity interactive interfaces aligned with international tech standards.',
    fullDescription:
      'Great engineering requires intuitive design. We craft design systems inspired by industry leaders like Apple, Linear, and Vercel. We conduct thorough user journey mapping, design accessible interfaces, and deliver reusable component libraries that ensure visual consistency across all touchpoints.',
    iconName: 'Palette',
    badge: 'Precision Design',
    capabilities: [
      'Figma Design Systems & Atomic Components',
      'Interactive Micro-interactions & Motion Studies',
      'Accessibility Standards (WCAG 2.1 AA Compliance)',
      'User Journey Mapping & Information Architecture',
      'Design Token Synchronizations into Code',
    ],
    deliverables: [
      'Complete Figma Component & Pattern Library',
      'Interactive Prototyping Assets',
      'Design Tokens (Colors, Typography, Spacing)',
      'Usability & Accessibility Guidelines',
    ],
  },
  {
    id: 'custom-software',
    title: 'Custom Software & ERP Solutions',
    shortDescription:
      'Tailored internal tools, resource planning systems, and operations management dashboards designed specifically for your business workflow.',
    fullDescription:
      'Off-the-shelf software often creates bottlenecks. We develop bespoke enterprise resource planning (ERP) platforms, inventory control modules, automated invoicing workflows, and custom CRM systems that reflect exactly how your operations function.',
    iconName: 'Cpu',
    capabilities: [
      'Multi-Role Access Control (RBAC) & Audit Logs',
      'Inventory, Order & Supply Chain Management Modules',
      'Real-Time Telemetry & Financial Analytics',
      'Custom Workflow Automation Engines',
      'Document Generation & Invoicing Systems',
    ],
    deliverables: [
      'Modular Business Dashboard System',
      'Database Architecture & Seed Migrations',
      'Automated Reporting & Export Features',
      'Role-based Permission Matrix',
    ],
  },
  {
    id: 'api-cloud',
    title: 'API Engineering & Cloud Architecture',
    shortDescription:
      'Resilient backend services, microservices, REST & GraphQL endpoints, and scalable cloud infrastructure deployment.',
    fullDescription:
      'We architect secure, horizontally scalable backend foundations. Using Node.js, Express, PostgreSQL, Prisma, Docker, and modern cloud primitives, we ensure your databases and APIs deliver consistent millisecond latencies even during high peak demand.',
    iconName: 'Server',
    badge: 'Scalability',
    capabilities: [
      'RESTful & GraphQL API Specifications',
      'PostgreSQL, MySQL & Redis Caching Layer',
      'Database Normalization, Indexing & Prisma ORM',
      'Docker Containerization & Serverless Deployment',
      'Zero-Downtime Migration Strategies',
    ],
    deliverables: [
      'Documented API Endpoints (Swagger / OpenAPI)',
      'Database Schema with Automated Migrations',
      'Containerized Environment Configs (Docker)',
      'Security Hardening & Rate Limiting Rules',
    ],
  },
  {
    id: 'automation-transformation',
    title: 'Workflow Automation & System Integration',
    shortDescription:
      'Eliminate repetitive manual tasks, connect fragmented platforms, and automate business processes with custom integrations.',
    fullDescription:
      'We build intelligent connective tissue between your third-party tools, payment gateways, messaging services (Telegram, SMS, WhatsApp), and internal databases. Our automation pipelines reduce human error and accelerate operational throughput.',
    iconName: 'Zap',
    capabilities: [
      'Payment Gateway Integration (Telebirr, Chapa, Stripe)',
      'Automated Notification Bots (Telegram, Email, Webhooks)',
      'Scheduled Background Jobs & Event-driven Queues',
      'Third-Party CRM, Accounting & POS Connectors',
      'Data Extraction, Transformation & ETL Pipelines',
    ],
    deliverables: [
      'Webhook Handlers & Reliability Queues',
      'Integration Monitoring & Error Fallbacks',
      'Payment Verification Webhooks',
      'Automated Operations Documentation',
    ],
  },
];
