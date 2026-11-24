import { ProcessStage } from '@/types';

export const processStages: ProcessStage[] = [
  {
    step: '01',
    title: 'Discover',
    summary:
      'We dive deep into your domain, dissect business requirements, identify user pain points, and establish project scope.',
    deliverables: ['Discovery Brief', 'Functional Specification', 'Technical Feasibility Report'],
    icon: 'Search',
  },
  {
    step: '02',
    title: 'Strategize & Architect',
    summary:
      'We map out the system architecture, select optimal database schemas, plan API contracts, and define security boundaries.',
    deliverables: ['System Architecture Diagram', 'Database ERD', 'API Specification Contract'],
    icon: 'Cpu',
  },
  {
    step: '03',
    title: 'Design & Prototype',
    summary:
      'We craft high-fidelity wireframes, interactive prototypes, and atomic design systems adhering to rigorous UX standards.',
    deliverables: ['Figma Design System', 'Clickable Prototype', 'Component Style Guide'],
    icon: 'Palette',
  },
  {
    step: '04',
    title: 'Engineer & Integrate',
    summary:
      'We write clean, modular, fully typed TypeScript code across frontend and backend layers with continuous peer reviews.',
    deliverables: ['Type-safe Source Repository', 'Automated Test Suites', 'Staging Deployments'],
    icon: 'Code2',
  },
  {
    step: '05',
    title: 'Test & Launch',
    summary:
      'Rigorous end-to-end testing, cross-browser validation, performance audits, and smooth zero-downtime production deployment.',
    deliverables: ['Lighthouse 95+ Report', 'Security Audit', 'Live Production Release'],
    icon: 'Rocket',
  },
  {
    step: '06',
    title: 'Scale & Improve',
    summary:
      'Continuous telemetry monitoring, proactive performance tuning, feature iteration, and long-term technical support.',
    deliverables: ['System Health Telemetry', 'Monthly Optimization Reports', 'Iterative Feature Releases'],
    icon: 'TrendingUp',
  },
];
