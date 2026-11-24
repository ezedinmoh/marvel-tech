import { TeamMember } from '@/types';

export const teamData: TeamMember[] = [
  {
    id: 'ezedin-mohammed',
    name: 'Ezedin Mohammed',
    role: 'Co-Founder & Lead Software Architect',
    bio: 'Full-stack software engineer specializing in Next.js, React 19, TypeScript, and modern distributed cloud architectures. Architect of WEARIFY, ANBESSA, and high-performance digital systems.',
    expertise: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    avatar: '/team/ezedin.jpg',
    socials: {
      github: 'https://github.com/ezedinmoh',
      linkedin: 'https://linkedin.com/in/ezedinmoh',
      email: 'ezedinmoh@gmail.com',
    },
    placeholderAvatar: 'EM',
    statusBadge: 'Co-Founder',
  },
  {
    id: 'mohammed-imam',
    name: 'Mohammed Imam',
    role: 'Co-Founder & Mobile / Systems Engineer',
    bio: 'Software engineer focused on high-performance cross-platform mobile ecosystems, backend integrations, and responsive client architectures. Committed to shipping reliable, user-centered digital solutions.',
    expertise: ['Mobile Engineering', 'React Native', 'TypeScript', 'API Integration', 'Cloud Systems'],
    avatar: '/team/mohammed-imam.jpg',
    socials: {
      telegram: 'https://t.me/Mohamediimam',
      phone: '+251941670897',
      email: 'mohammed@marveltechnologies.et',
    },
    placeholderAvatar: 'MI',
    statusBadge: 'Co-Founder',
  },
  {
    id: 'team-member-3',
    name: 'Co-Founder & Partner', // Editable placeholder: Replace with Founder 3 Name
    role: 'Co-Founder & Product Systems Lead',
    bio: 'Oversees product strategy, architecture validation, and quality engineering. Collaborates across the software lifecycle to ensure seamless client deliverables.',
    expertise: ['Cloud Infrastructure', 'System Architecture', 'DevOps', 'Quality Assurance'],
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'partner@marveltechnologies.et',
    },
    placeholderAvatar: 'MT-03',
    statusBadge: 'Co-Founder',
  },
];
