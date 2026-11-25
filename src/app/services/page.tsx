import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { getCanonicalUrl, SITE_URL } from '@/lib/seo';
import {
  Globe,
  Smartphone,
  Cpu,
  Layers,
  Zap,
  Palette,
  Server,
  ArrowRight,
  CheckCircle2,
  Bot,
  ShoppingCart,
  Database,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Software Development & Digital Solutions Services',
  description:
    'Explore Marvel Technologies engineering services: Next.js website development, custom software, ERP systems, business automation, mobile apps, e-commerce, and Telegram bot engineering.',
  alternates: {
    canonical: getCanonicalUrl('/services'),
  },
  openGraph: {
    title: 'Software Engineering Services | Marvel Technologies',
    description:
      'Enterprise-grade digital solutions: custom software, Next.js web applications, ERP management platforms, and business automation in Ethiopia and worldwide.',
    url: getCanonicalUrl('/services'),
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const serviceList = [
  {
    slug: 'web-development',
    title: 'Modern Web Engineering & Next.js Development',
    category: 'Web Development',
    description:
      'Sub-second response times, server-side rendering, and production-grade Next.js 16 and React 19 web applications built for high conversion and search dominance.',
    icon: Globe,
    highlights: ['Next.js App Router', 'React 19 & TypeScript', 'Lighthouse 95+ Score', 'Headless CMS Integration'],
  },
  {
    slug: 'custom-software',
    title: 'Custom Software Development',
    category: 'Custom Software',
    description:
      'Bespoke operational tools, customer portals, and tailored business software engineered to match your organization’s unique operational flows.',
    icon: Cpu,
    highlights: ['Multi-Role RBAC', 'High-Throughput APIs', 'PostgreSQL & Prisma', 'Scalable Architecture'],
  },
  {
    slug: 'erp-systems',
    title: 'ERP & Business Management Systems',
    category: 'Enterprise Software',
    description:
      'Centralized resource planning, automated invoicing, inventory tracking, financial telemetry, and employee role governance for growing enterprises.',
    icon: Database,
    highlights: ['Inventory & Order Control', 'Automated Accounting', 'Real-Time Telemetry', 'Audit Trail Logging'],
  },
  {
    slug: 'ecommerce-development',
    title: 'E-Commerce Storefronts & Platforms',
    category: 'E-Commerce',
    description:
      'Conversion-focused e-commerce experiences with dual domestic (Chapa, Telebirr) and international (Stripe) payment gateways, live inventory, and split-screen management.',
    icon: ShoppingCart,
    highlights: ['Dual Gateways (Stripe + Chapa)', 'Sub-second Checkout', 'Cart & Inventory Sync', 'Split-Screen Admin'],
  },
  {
    slug: 'telegram-bot-development',
    title: 'Telegram Bot & Messaging Automation',
    category: 'Bot Development',
    description:
      'High-velocity Telegram bots, automated order processing, customer support triggers, and multi-channel notification webhooks integrated into your database.',
    icon: Bot,
    highlights: ['Instant Telegram Workflows', 'Payment Bot Integration', 'Webhook Handlers', '24/7 Auto Responders'],
  },
  {
    slug: 'business-automation',
    title: 'Business Automation & Digital Transformation',
    category: 'Business Automation',
    description:
      'Eliminate manual data entry, streamline multi-step approval workflows, and connect legacy software with modern cloud primitives and payment rails.',
    icon: Zap,
    highlights: ['ETL & Data Pipelines', 'Payment Verification', 'Event-Driven Queues', 'Zero-Error Hand-Offs'],
  },
  {
    slug: 'mobile-development',
    title: 'Mobile App Engineering (iOS & Android)',
    category: 'Mobile Development',
    description:
      'Native-feel cross-platform mobile apps built with React Native and modern mobile toolchains, featuring offline-first storage, biometrics, and push notifications.',
    icon: Smartphone,
    highlights: ['React Native & Expo', 'Biometric Enclave Auth', 'Offline-First SQLite/Sync', 'App Store & Play Store Setup'],
  },
  {
    slug: 'ui-ux-design',
    title: 'Modern UI/UX & Design Systems',
    category: 'UI/UX Design',
    description:
      'Precision user journey design, interactive Figma prototypes, WCAG accessibility compliance, and design token architectures inspired by Apple, Linear, and Vercel.',
    icon: Palette,
    highlights: ['Atomic Design Systems', 'Figma Interactive Prototyping', 'WCAG 2.1 AA Compliance', 'Design Tokens in Code'],
  },
];

export default function ServicesDirectoryPage() {
  const serviceSchemas = serviceList.map((svc) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.title,
    serviceType: svc.category,
    description: svc.description,
    provider: {
      '@type': 'Organization',
      name: 'Marvel Technologies',
      url: SITE_URL,
    },
    url: `${SITE_URL}/services/${svc.slug}`,
  }));

  return (
    <div className="pt-24 sm:pt-32 pb-20 relative bg-[#040711]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchemas),
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Services', path: '/services' }]} />

        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-400 mb-4 dc-load-fade-scale">
            <Layers className="w-3.5 h-3.5" />
            <span>Full-Stack Engineering Spectrum</span>
          </div>

          <h1
            className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6 dc-load-clip-up"
            style={{ animationDelay: '70ms' }}
          >
            Software Development &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Digital Solutions
            </span>
          </h1>

          <p
            className="text-base sm:text-lg text-slate-300 leading-relaxed dc-load-fade-scale"
            style={{ animationDelay: '150ms' }}
          >
            At <strong>Marvel Technologies</strong>, we architect resilient digital platforms, custom software, ERP platforms, and automation systems tailored for high-growth businesses in Ethiopia and worldwide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {serviceList.map((service, idx) => {
            const Icon = service.icon;

            return (
              <div
                key={service.slug}
                className="dc-reveal flex"
                data-reveal="unfold-3d"
                style={{ '--reveal-delay': `${(idx % 2) * 75}ms` } as React.CSSProperties}
              >
                <Card className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border-white/10 hover:border-cyan-500/30 flex flex-col justify-between group w-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">
                      {service.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold group/link"
                  >
                    <span>Read Full Service Specification</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Project Inquiry CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-slate-950 border border-cyan-500/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Ready to Architect Your Digital Solution?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              From Kombolcha to Addis Ababa and clients across the world, Marvel Technologies delivers turnkey software on schedule.
            </p>
          </div>

          <Button asChild variant="primary" size="lg">
            <Link href="/contact" className="inline-flex items-center gap-2">
              <span>Start an Engineering Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
