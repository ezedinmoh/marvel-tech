import { TechStackCategory } from '@/types';

export const technologiesData: TechStackCategory[] = [
  {
    category: 'Frontend & User Interface',
    description: 'Modern, high-performance web tooling engineered for responsive elegance and instant interactions.',
    technologies: [
      {
        name: 'Next.js 15+',
        icon: 'Globe',
        level: 'Primary Framework',
        description: 'Server Components, App Router, streaming SSR, and edge deployment.',
      },
      {
        name: 'React 19',
        icon: 'Code2',
        level: 'Core UI Library',
        description: 'Concurrent rendering, modern hooks, and state management.',
      },
      {
        name: 'TypeScript',
        icon: 'FileCode',
        level: 'Language Standard',
        description: 'End-to-end strict static type safety across frontend and backend layers.',
      },
      {
        name: 'Tailwind CSS',
        icon: 'Layout',
        level: 'Styling Engine',
        description: 'Utility-first token-based styling with zero runtime overhead.',
      },
    ],
  },
  {
    category: 'Backend & Data Architecture',
    description: 'Robust server logic, resilient databases, and type-safe object-relational mapping.',
    technologies: [
      {
        name: 'Node.js & Express',
        icon: 'Server',
        level: 'Runtime Environment',
        description: 'Event-driven, asynchronous I/O powering fast and scalable API services.',
      },
      {
        name: 'PostgreSQL',
        icon: 'Database',
        level: 'Primary Database',
        description: 'ACID-compliant relational database engine with JSONB extensibility.',
      },
      {
        name: 'MySQL',
        icon: 'DatabaseZap',
        level: 'Relational Database',
        description: 'High-speed relational storage for structured enterprise applications.',
      },
      {
        name: 'Prisma ORM',
        icon: 'Boxes',
        level: 'Data Access Layer',
        description: 'Type-safe database queries, automated schema migrations, and relational modeling.',
      },
    ],
  },
  {
    category: 'Mobile & Multi-Platform',
    description: 'Cross-platform engineering for iOS and Android with native performance.',
    technologies: [
      {
        name: 'React Native',
        icon: 'Smartphone',
        level: 'Mobile Framework',
        description: 'Shared cross-platform codebase compiling to native mobile primitives.',
      },
      {
        name: 'Android Toolchain',
        icon: 'Bot',
        level: 'Platform Engineering',
        description: 'Gradle configurations, native module bridges, and APK/AAB compilation.',
      },
      {
        name: 'Expo Ecosystem',
        icon: 'Layers',
        level: 'Mobile Tooling',
        description: 'Rapid testing, OTA asset updates, and hardware sensor integrations.',
      },
    ],
  },
  {
    category: 'DevOps, Cloud & Version Control',
    description: 'Disciplined version control, automated testing, containerization, and continuous delivery.',
    technologies: [
      {
        name: 'Git & GitHub',
        icon: 'GitBranch',
        level: 'Version Control',
        description: 'Trunk-based development, peer code reviews, and GitOps workflows.',
      },
      {
        name: 'Docker Containers',
        icon: 'Container',
        level: 'Virtualization',
        description: 'Reproducible build environments from local development to production.',
      },
      {
        name: 'Cloud & Vercel Edge',
        icon: 'Cloud',
        level: 'Deployment Platform',
        description: 'Global CDN distribution, automated rollbacks, and serverless compute.',
      },
    ],
  },
];
