import { TeamMember } from '@/types';

export const teamData: TeamMember[] = [
  {
    id: 'ezedin-mohammed',
    name: 'Ezedin Mohammed',
    role: 'Co-Founder & Lead Software Architect',
    bio: 'Full-stack software architect specializing in Next.js 16, React 19, TypeScript, and modern distributed systems. Architect of WEARIFY, ANBESSA, and high-performance client engineering platforms.',
    expertise: ['System Architecture', 'Next.js 16', 'React 19', 'TypeScript', 'Prisma & PostgreSQL', 'Cloud DevOps'],
    avatar: '/team/ezedin.jpg',
    socials: {
      github: 'https://github.com/ezedinmoh',
      linkedin: 'https://linkedin.com/in/ezedinmoh',
      email: 'ezedinmoh@gmail.com',
    },
    placeholderAvatar: 'EM',
    statusBadge: 'Co-Founder & Technical Lead',
  },
  {
    id: 'mohammed-imam',
    name: 'Mohammed Imam',
    role: 'Co-Founder & Business Lead',
    bio: 'Leads strategic growth, business development, and client partnerships at Marvel Technologies. Drives technology commercialization, venture expansion, and ensures every engineering engagement delivers tangible business ROI.',
    expertise: ['Business Development', 'Strategic Growth', 'Client Partnerships', 'Product Commercialization', 'Venture Strategy'],
    avatar: '/team/mohammed-imam.jpg',
    socials: {
      telegram: 'https://t.me/Mohamediimam',
      phone: '+251941670897',
      email: 'mohammed@marveltechnologies.et',
    },
    placeholderAvatar: 'MI',
    statusBadge: 'Co-Founder & Business Lead',
  },
  {
    id: 'sudeys-ibrahim',
    name: 'Sudeys Ibrahim',
    role: 'Co-Founder & Operations Lead',
    bio: 'Oversees product execution, operational workflows, and delivery coordination. Ensures every engineering initiative runs with rigorous velocity, seamless stakeholder alignment, and uncompromising quality.',
    expertise: ['Product Operations', 'Agile Delivery', 'Project Strategy', 'Client Relations', 'Systems Management'],
    socials: {
      telegram: 'https://t.me/Ifshrmr',
      phone: '+251993506625',
      email: 'sudeys@marveltechnologies.et',
    },
    placeholderAvatar: 'SI',
    statusBadge: 'Co-Founder & Operations Lead',
  },
];
