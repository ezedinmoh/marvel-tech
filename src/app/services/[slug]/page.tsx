import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { detailedServices } from '@/data/serviceDetails';
import { getCanonicalUrl, SITE_URL, generateServiceSchema } from '@/lib/seo';
import {
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
  ArrowRight,
  ExternalLink,
  HelpCircle,
  Sparkles,
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(detailedServices).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = detailedServices[slug];

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  const canonicalUrl = getCanonicalUrl(`/services/${service.slug}`);

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${service.title} | Marvel Technologies`,
      description: service.metaDescription,
      url: canonicalUrl,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Marvel Technologies`,
      description: service.metaDescription,
      images: ['/og-image.png'],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = detailedServices[slug];

  if (!service) {
    notFound();
  }

  const serviceSchema = generateServiceSchema({
    id: service.slug,
    name: service.title,
    description: service.overview,
    category: service.category,
    path: `/services/${service.slug}`,
  });

  // Get other services for internal linking
  const otherServices = Object.values(detailedServices).filter((s) => s.slug !== service.slug);

  return (
    <article className="pt-24 sm:pt-32 pb-20 relative bg-[#040711]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Services', path: '/services' },
            { name: service.title, path: `/services/${service.slug}` },
          ]}
        />

        {/* Hero Header */}
        <header className="mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-4 dc-load-dropdown">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{service.category}</span>
          </div>

          <h1
            className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6 dc-load-zoom-out"
            style={{ animationDelay: '80ms' }}
          >
            {service.heroHeadline}
          </h1>

          <p
            className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-8 dc-load-fade-scale"
            style={{ animationDelay: '160ms' }}
          >
            {service.heroSubtitle}
          </p>

          <div
            className="flex flex-wrap gap-2 pt-2 dc-load-fade-scale"
            style={{ animationDelay: '230ms' }}
          >
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Overview Narrative */}
        <section className="mb-16 p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-white/10">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Service Architecture & Overview
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {service.overview}
          </p>
          <div className="mt-4 pt-4 border-t border-white/10 text-xs font-mono text-cyan-400">
            Engineered by Marvel Technologies · Kombolcha, Ethiopia & Worldwide Delivery
          </div>
        </section>

        {/* Operational Problems Solved */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-6">
            Operational Challenges We Eliminate
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.problemsSolved.map((item, i) => (
              <Card
                key={i}
                data-reveal="dropdown"
                style={{ '--reveal-delay': `${i * 70}ms` } as React.CSSProperties}
                className="p-5 sm:p-6 rounded-xl bg-slate-900/30 border-white/10 dc-reveal"
              >
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Capabilities & Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Capabilities */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950/20 to-slate-900/50 border border-blue-500/20">
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <h2 className="text-lg font-bold text-white uppercase tracking-wider font-mono text-xs text-cyan-400">
                Technical Capabilities
              </h2>
            </div>

            <ul className="space-y-3.5">
              {service.technicalCapabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-950/20 to-slate-900/50 border border-indigo-500/20">
            <div className="flex items-center gap-2 mb-6">
              <Layers className="w-5 h-5 text-indigo-400" />
              <h2 className="text-lg font-bold text-white uppercase tracking-wider font-mono text-xs text-indigo-400">
                Client Milestone Deliverables
              </h2>
            </div>

            <ul className="space-y-3.5">
              {service.deliverables.map((del, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Real Case Study Reference if available */}
        {service.caseStudyRef && (
          <section className="mb-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyan-950/30 to-blue-950/30 border border-cyan-500/30">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
              Verified Production Reference
            </span>
            <h2 className="text-xl font-bold text-white mt-1 mb-2">
              {service.caseStudyRef.title}
            </h2>
            <p className="text-sm text-slate-300 mb-4">
              {service.caseStudyRef.outcome}
            </p>
            {service.caseStudyRef.liveUrl && (
              <a
                href={service.caseStudyRef.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300"
              >
                <span>Inspect Live Deployment</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </section>
        )}

        {/* Service FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-400" />
              <span>Frequently Asked Questions</span>
            </h2>

            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-xl bg-slate-900/40 border border-white/10">
                  <h3 className="text-base font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Internal Cross-Linking: Related Services */}
        <section className="mb-16 pt-10 border-t border-white/10">
          <h2 className="text-xl font-bold text-white mb-6">
            Explore Other Engineering Disciplines
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {otherServices.slice(0, 3).map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="p-4 rounded-xl bg-slate-900/30 border border-white/10 hover:border-cyan-500/30 transition-all group block"
              >
                <div className="text-xs font-mono text-cyan-400 mb-1">{other.category}</div>
                <h3 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {other.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Inquiry Call to Action */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 via-cyan-900/20 to-slate-900 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Start Your {service.title} Project
            </h3>
            <p className="text-sm text-slate-300">
              Consult with our engineering team in Kombolcha, Ethiopia for local or global engagements.
            </p>
          </div>

          <Button asChild variant="primary" size="lg">
            <Link href="/contact" className="inline-flex items-center gap-2">
              <span>Request Project Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
