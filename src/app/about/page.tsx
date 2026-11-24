import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  SITE_URL,
  COMPANY_SEO,
  getCanonicalUrl,
  generateOrganizationSchema,
} from '@/lib/seo';
import {
  ShieldCheck,
  Compass,
  Cpu,
  Globe2,
  MapPin,
  ArrowRight,
  Code2,
  Users,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Ethiopian Technology Company with Global Scale',
  description:
    'Marvel Technologies is a software engineering company based in Kombolcha, Ethiopia. Learn about our mission, architectural philosophy, and digital solutions for local and international businesses.',
  alternates: {
    canonical: getCanonicalUrl('/about'),
  },
  openGraph: {
    title: 'About Marvel Technologies | Innovation Without Limits',
    description:
      'Discover Marvel Technologies: an Ethiopian technology firm delivering world-class software development, web applications, and ERP systems from Kombolcha to the global market.',
    url: getCanonicalUrl('/about'),
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  const orgSchema = generateOrganizationSchema();

  return (
    <div className="pt-24 sm:pt-32 pb-20 relative bg-[#040711]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(orgSchema),
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'About Us', path: '/about' }]} />

        {/* Hero Section */}
        <div className="mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Company Identity & Roots</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            Engineered by Technologists,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Built for the Future.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            <strong className="text-white">Marvel Technologies</strong> is a modern software engineering company based in{' '}
            <strong className="text-cyan-300">Kombolcha, Ethiopia</strong>, driven by a conviction that rigorous, thoughtful engineering can solve real-world operational challenges for organizations locally and across the globe.
          </p>
        </div>

        {/* Strategic Positioning: Local Roots & International Ambition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          <Card className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border-white/10 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white mb-3">Rooted in Kombolcha, Ethiopia</h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Our engineering foundation is grounded in Kombolcha, Ethiopia. We believe regional hubs possess tremendous software talent capable of architecting digital infrastructure that rivals premier international firms.
            </p>
            <p className="text-xs font-mono text-cyan-400">
              Local Grounding · High-Quality Technical Delivery
            </p>
          </Card>

          <Card className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border-white/10 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
              <Globe2 className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white mb-3">International Delivery & Standards</h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Our target market is not limited by geography. We adhere to global engineering standards—zero technical debt, Type-safe Next.js & TypeScript pipelines, Sub-second response times, and WCAG accessibility standards for clients worldwide.
            </p>
            <p className="text-xs font-mono text-blue-400">
              Global Standards · Multi-Currency & Cloud Architecture
            </p>
          </Card>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950/30 to-slate-900/60 border border-blue-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Compass className="w-5 h-5 text-cyan-400" />
              <h2 className="text-lg font-bold text-white uppercase tracking-wider font-mono text-xs text-cyan-400">
                Our Mission
              </h2>
            </div>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {COMPANY_SEO.description}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-950/30 to-slate-900/60 border border-indigo-500/20">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-5 h-5 text-indigo-400" />
              <h2 className="text-lg font-bold text-white uppercase tracking-wider font-mono text-xs text-indigo-400">
                Our Vision
              </h2>
            </div>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              To be the benchmark technology partner recognized for unwavering code purity, architectural elegance, and digital products that scale smoothly under intense demand.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-8">
            Our Architectural & Engineering Philosophy
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-900/30 border border-white/10">
              <Code2 className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="text-base font-semibold text-white mb-2">Purity & Maintainability</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We write clean, strictly typed, self-documenting code. No bloated dependencies, no fragile hacks, and zero accumulated technical debt.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/30 border border-white/10">
              <Cpu className="w-6 h-6 text-blue-400 mb-3" />
              <h3 className="text-base font-semibold text-white mb-2">Performance by Default</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every application is optimized for Core Web Vitals, sub-second TTFB, efficient server-side rendering, and responsive fluid animations.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/30 border border-white/10">
              <Users className="w-6 h-6 text-emerald-400 mb-3" />
              <h3 className="text-base font-semibold text-white mb-2">Tangible Business ROI</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We don’t build technology for technology’s sake. Every system is engineered to automate manual work, increase revenue, or streamline team operations.
              </p>
            </div>
          </div>
        </div>

        {/* CTA to Team & Services */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 via-cyan-900/20 to-slate-900 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Meet the Founding Engineers & Leaders
            </h3>
            <p className="text-sm text-slate-300">
              Learn about Mohammed Imam, Sudeys Ibrahim, and Ezedinmoh and our technical disciplines.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild variant="primary" size="sm">
              <Link href="/team" className="inline-flex items-center gap-2">
                <span>View Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="sm">
              <Link href="/services">
                <span>Explore Services</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
