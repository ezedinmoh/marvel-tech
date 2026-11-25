import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Contact } from '@/components/sections/Contact';
import { getCanonicalUrl, COMPANY_SEO, SITE_URL } from '@/lib/seo';
import { MapPin, Phone, Mail, Send, Sparkles, Clock, Globe2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Technology Company in Kombolcha, Ethiopia',
  description:
    'Contact Marvel Technologies in Kombolcha, Ethiopia. Direct software engineering, ERP solutions, and web development consultations for businesses in Ethiopia and worldwide.',
  alternates: {
    canonical: getCanonicalUrl('/contact'),
  },
  openGraph: {
    title: 'Contact Marvel Technologies | Kombolcha, Ethiopia',
    description:
      'Connect with Marvel Technologies for custom software development, Next.js web applications, and enterprise digital solutions.',
    url: getCanonicalUrl('/contact'),
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/contact#service`,
    name: 'Marvel Technologies',
    url: SITE_URL,
    telephone: COMPANY_SEO.contact.phone,
    email: COMPANY_SEO.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: COMPANY_SEO.address.addressLocality,
      addressRegion: COMPANY_SEO.address.addressRegion,
      addressCountry: COMPANY_SEO.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_SEO.geo.latitude,
      longitude: COMPANY_SEO.geo.longitude,
    },
    areaServed: COMPANY_SEO.areaServed,
    priceRange: '$$',
  };

  return (
    <div className="pt-24 sm:pt-32 pb-20 relative bg-[#040711]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Contact', path: '/contact' }]} />

        {/* Hero Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-4 dc-load-fade-scale">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Engineering Consultations</span>
          </div>

          <h1
            className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6 dc-load-clip-up"
            style={{ animationDelay: '70ms' }}
          >
            Contact{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Marvel Technologies
            </span>
          </h1>

          <p
            className="text-base sm:text-lg text-slate-300 leading-relaxed dc-load-fade-scale"
            style={{ animationDelay: '150ms' }}
          >
            Based in <strong>Kombolcha, Ethiopia</strong>, serving forward-thinking businesses locally, nationwide, and internationally. Reach out directly to discuss your custom software, web platform, or ERP requirements.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/10 dc-reveal" data-reveal="pop-spring" style={{ '--reveal-delay': '0ms' } as React.CSSProperties}>
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-white mb-1">Company Base</h2>
            <p className="text-xs font-mono text-cyan-400 mb-2">Kombolcha, Ethiopia</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Serving Kombolcha, Addis Ababa, and international clients with cloud delivery.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/10 dc-reveal" data-reveal="pop-spring" style={{ '--reveal-delay': '75ms' } as React.CSSProperties}>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-white mb-1">Direct Telephone & WhatsApp</h2>
            <a
              href={`tel:${COMPANY_SEO.contact.phone}`}
              className="text-xs font-mono text-emerald-400 hover:text-emerald-300 block mb-2"
            >
              {COMPANY_SEO.contact.telephoneDisplay}
            </a>
            <p className="text-xs text-slate-400 leading-relaxed">
              Available Monday – Saturday for technical and partnership inquiries.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/10 dc-reveal" data-reveal="pop-spring" style={{ '--reveal-delay': '150ms' } as React.CSSProperties}>
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-white mb-1">Official Email</h2>
            <a
              href={`mailto:${COMPANY_SEO.contact.email}`}
              className="text-xs font-mono text-blue-400 hover:text-blue-300 block mb-2"
            >
              {COMPANY_SEO.contact.email}
            </a>
            <p className="text-xs text-slate-400 leading-relaxed">
              Send your project specifications for a detailed architectural breakdown.
            </p>
          </div>
        </div>

        {/* Form Component */}
        <div className="rounded-3xl border border-white/10 overflow-hidden bg-slate-900/20">
          <Contact />
        </div>
      </div>
    </div>
  );
}
