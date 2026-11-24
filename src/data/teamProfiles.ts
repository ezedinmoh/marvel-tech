export interface TeamProfile {
  slug: string;
  name: string;
  displayName: string;
  role: string;
  statusBadge: string;
  location: string;
  bio: string;
  metaTitle: string;
  metaDescription: string;
  avatar?: string;
  avatarType?: 'ezedin' | 'sudeys';
  isRealPhoto: boolean;
  expertise: string[];
  responsibilities: string[];
  contributions: string[];
  projectsInvolved: { name: string; description: string; url?: string }[];
  socials: {
    telegram?: string;
    phone?: string;
    email?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    tiktok?: string;
    facebook?: string;
    youtube?: string;
    discord?: string;
  };
}

export const teamProfiles: Record<string, TeamProfile> = {
  'mohammed-imam': {
    slug: 'mohammed-imam',
    name: 'Mohammed Imam',
    displayName: 'Mohammed Imam',
    role: 'Co-Founder & Business Lead',
    statusBadge: 'Co-Founder & Business Lead',
    location: 'Ethiopia · Global Client Engagements',
    bio: 'Mohammed Imam is a Co-Founder and Business Lead at Marvel Technologies. He leads strategic growth, business development, and client partnerships, driving the commercialization of technology products and ensuring every software project delivers tangible commercial value for businesses in Ethiopia and abroad.',
    metaTitle: 'Mohammed Imam | Co-Founder & Business Lead at Marvel Technologies',
    metaDescription:
      'Learn about Mohammed Imam, Co-Founder and Business Lead at Marvel Technologies. Leading strategic partnerships, business development, and software commercialization in Ethiopia and worldwide.',
    avatar: '/team/mohammed-imam.jpg',
    isRealPhoto: true,
    expertise: [
      'Business Development & Strategy',
      'Technology Commercialization',
      'Client Partnerships & Accounts',
      'Product Feasibility & Market Fit',
      'Venture Strategy & Growth Operations',
    ],
    responsibilities: [
      'Spearheading enterprise and SME client partnerships across Ethiopia and international markets.',
      'Translating organizational business requirements into actionable technical scopes with the engineering leads.',
      'Overseeing commercial negotiations, contract milestones, and continuous client satisfaction.',
      'Guiding Marvel Technologies’ corporate expansion and brand presence in the technology sector.',
    ],
    contributions: [
      'Co-founded Marvel Technologies to bridge the gap between ambitious product ideas and production-grade engineering.',
      'Established foundational client relationships in retail, education, and digital commerce.',
      'Architected Marvel Technologies’ client onboarding and satisfaction framework.',
    ],
    projectsInvolved: [
      {
        name: 'Enterprise Client Growth & Commercialization',
        description: 'Orchestrating technology partnerships for e-commerce, ERP, and automation deployments.',
      },
    ],
    socials: {
      telegram: 'https://t.me/Mohamediimam',
      phone: '+251941670897',
      email: 'ezedinmoh1@gmail.com',
    },
  },

  'sudeys-ibrahim': {
    slug: 'sudeys-ibrahim',
    name: 'Sudeys Ibrahim',
    displayName: 'Sudeys Ibrahim',
    role: 'Co-Founder & Operations Lead',
    statusBadge: 'Co-Founder & Operations Lead',
    location: 'Ethiopia · Operations Coordination',
    bio: 'Sudeys Ibrahim is a Co-Founder and Operations Lead at Marvel Technologies. He oversees product delivery cycles, agile operational workflows, and resource allocation, ensuring that every engineering sprint runs with high velocity, rigorous QA, and seamless stakeholder alignment.',
    metaTitle: 'Sudeys Ibrahim | Co-Founder & Operations Lead at Marvel Technologies',
    metaDescription:
      'Discover Sudeys Ibrahim, Co-Founder and Operations Lead at Marvel Technologies. Directing agile project execution, operations coordination, and product delivery in Ethiopia and globally.',
    avatarType: 'sudeys',
    isRealPhoto: false,
    expertise: [
      'Product Operations Management',
      'Agile Sprint Delivery & Scrum',
      'Quality Assurance & Release Oversight',
      'Cross-Functional Team Coordination',
      'Client Relations & Delivery Milestones',
    ],
    responsibilities: [
      'Coordinating day-to-day engineering deliverables, backlog prioritization, and sprint velocities.',
      'Managing stakeholder check-ins, progress telemetry, and delivery deadlines.',
      'Implementing quality assurance gates and release testing protocols before production deployment.',
      'Fostering a collaborative, continuous-improvement culture across all client projects.',
    ],
    contributions: [
      'Co-founded Marvel Technologies with a focus on operational excellence and eliminating project delays.',
      'Designed the streamlined 4-step delivery pipeline: Discovery, Architecture, Sprints, and Launch.',
      'Implemented automated progress reporting that keeps clients informed throughout the development lifecycle.',
    ],
    projectsInvolved: [
      {
        name: 'Operations & Agile Delivery Engine',
        description: 'Coordinating delivery across multi-tenant web platforms, custom ERPs, and automation systems.',
      },
    ],
    socials: {
      telegram: 'https://t.me/Ifshrmr',
      phone: '+251993506625',
      email: 'ezedinmoh1@gmail.com',
    },
  },

  'ezedinmoh': {
    slug: 'ezedinmoh',
    name: 'Ezedin Mohammed',
    displayName: 'Ezedinmoh (Ezedin Mohammed)',
    role: 'Co-Founder & Lead Software Engineer',
    statusBadge: 'Co-Founder & Technical Lead',
    location: 'Kombolcha, Ethiopia · Global Systems Architect',
    bio: 'Ezedin Mohammed (known professionally as Ezedinmoh) is a Co-Founder and Lead Software Engineer at Marvel Technologies based in Kombolcha, Ethiopia. Systems architect of high-performance platforms including WEARIFY, ANBESSA, Smart Library, SwiftBus, Ramadanly, and BYD Ethiopia. Specializing in Next.js 16, React 19, TypeScript, cloud deployments, and distributed database systems.',
    metaTitle: 'Ezedinmoh (Ezedin Mohammed) | Lead Software Engineer at Marvel Technologies',
    metaDescription:
      'Learn about Ezedinmoh (Ezedin Mohammed), Co-Founder and Lead Software Engineer at Marvel Technologies. Systems architect specializing in Next.js 16, React 19, TypeScript, and cloud solutions based in Kombolcha, Ethiopia.',
    avatar: '/team/ezedin.jpg',
    avatarType: 'ezedin',
    isRealPhoto: false,
    expertise: [
      'System Architecture & Microservices',
      'Next.js 16 App Router & Server Components',
      'React 19 & TypeScript Development',
      'PostgreSQL, Neon Cloud & Prisma ORM',
      'Cloud DevOps, Docker & Serverless Deployments',
      'Payment Gateway Integration (Stripe, Chapa, Telebirr)',
    ],
    responsibilities: [
      'Leading overall software architecture, system reliability, and technical strategy at Marvel Technologies.',
      'Designing database schemas, high-throughput APIs, and server-side rendering pipelines.',
      'Reviewing code quality, performance metrics, and Core Web Vitals optimization.',
      'Mentoring developers and contributing to open-source software and developer tooling.',
    ],
    contributions: [
      'Co-founded Marvel Technologies as technical lead to prove that world-class software can be engineered from Kombolcha, Ethiopia.',
      'Architected production applications including WEARIFY e-commerce suite, ANBESSA sneaker storefront, and Smart Library platform.',
      'Engineered the zero-technical-debt Next.js 16 codebase powering marvel-tech.tech.',
    ],
    projectsInvolved: [
      {
        name: 'WEARIFY — Streetwear Commerce Suite',
        description: 'Next.js 16, Neon Cloud PostgreSQL, dual Stripe & Chapa payments, and split-screen admin managers.',
        url: 'https://wearify-et.vercel.app',
      },
      {
        name: 'ANBESSA — Premium Footwear Storefront',
        description: 'React 19, TanStack Start, Tailwind CSS v4, and tactile 60fps animations.',
        url: 'https://anbessa-et.vercel.app',
      },
      {
        name: 'Smart Library Management Platform',
        description: 'Enterprise multi-role library cataloging, circulation, and student portal.',
        url: 'https://smart-library-et.vercel.app',
      },
    ],
    socials: {
      telegram: 'https://t.me/ezedinmoh',
      github: 'https://github.com/ezedinmoh',
      linkedin: 'https://www.linkedin.com/in/ezedinmoh',
      twitter: 'https://x.com/ezedinmoh',
      instagram: 'https://www.instagram.com/ezedin__moh',
      tiktok: 'https://www.tiktok.com/@ezedinmoh',
      facebook: 'https://www.facebook.com/ezedinmoh',
      youtube: 'https://www.youtube.com/@ezedin_moh',
      discord: 'https://discord.com/users/ezedinmoh',
      email: 'ezedinmoh1@gmail.com',
      phone: '+251983029638',
    },
  },
};
