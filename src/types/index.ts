export interface NavItem {
  label: string;
  href: string;
  isAction?: boolean;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  headline: string;
  description: string;
  mission: string;
  vision: string;
  contactEmail: string;
  contactPhone: string;
  telegramUsername: string;
  telegramUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  location: string;
  foundedYear: string;
  statusText: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  capabilities: string[];
  deliverables: string[];
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full-Stack' | 'E-Commerce' | 'Mobile & PWA' | 'Enterprise & Cloud' | string;
  technologies: string[];
  isSample: boolean;
  status: 'Production Shipped' | 'Live Deployment' | 'Production Ready' | 'In Development';
  features: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  accentColor?: string;
  caseStudy?: {
    problem: string;
    solution: string;
    outcome: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  avatar?: string;
  socials: {
    github?: string;
    linkedin?: string;
    telegram?: string;
    phone?: string;
    email?: string;
  };
  placeholderAvatar: string;
  statusBadge: string;
}

export interface TechStackCategory {
  category: string;
  description: string;
  technologies: {
    name: string;
    icon: string;
    level: string;
    description: string;
  }[];
}

export interface ProcessStage {
  step: string;
  title: string;
  summary: string;
  deliverables: string[];
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
