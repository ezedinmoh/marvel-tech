import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { AnimatedProfileAvatar } from '@/components/ui/AnimatedProfileAvatar';
import { teamProfiles } from '@/data/teamProfiles';
import { getCanonicalUrl, SITE_URL, generatePersonSchema } from '@/lib/seo';
import {
  Users,
  MapPin,
  ArrowRight,
  ExternalLink,
  Shield,
  Send,
  Phone,
  Mail,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engineering & Leadership Team | Mohammed Imam, Sudeys Ibrahim, Ezedinmoh',
  description:
    'Meet the Marvel Technologies team: Mohammed Imam (Business Lead), Sudeys Ibrahim (Operations Lead), and Ezedinmoh / Ezedin Mohammed (Lead Software Engineer). Based in Kombolcha, Ethiopia with global reach.',
  alternates: {
    canonical: getCanonicalUrl('/team'),
  },
  openGraph: {
    title: 'The Team | Marvel Technologies',
    description:
      'Discover the founders and engineers behind Marvel Technologies: Mohammed Imam, Sudeys Ibrahim, and Ezedinmoh. Delivering modern digital solutions from Ethiopia to the world.',
    url: getCanonicalUrl('/team'),
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function TeamDirectoryPage() {
  const members = Object.values(teamProfiles);

  const personSchemas = members.map((m) =>
    generatePersonSchema({
      name: m.name,
      slug: m.slug,
      role: m.role,
      bio: m.bio,
      image: m.avatar,
      expertise: m.expertise,
      sameAs: Object.values(m.socials).filter(Boolean) as string[],
    })
  );

  return (
    <div className="pt-24 sm:pt-32 pb-20 relative bg-[#040711]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchemas),
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Team', path: '/team' }]} />

        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-4 dc-load-fade-scale">
            <Users className="w-3.5 h-3.5" />
            <span>Founders & Core Leadership</span>
          </div>

          <h1
            className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6 dc-load-clip-up"
            style={{ animationDelay: '70ms' }}
          >
            The Team Driving{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Marvel Technologies
            </span>
          </h1>

          <p
            className="text-base sm:text-lg text-slate-300 leading-relaxed dc-load-fade-scale"
            style={{ animationDelay: '150ms' }}
          >
            Founded by software engineers and business strategists in <strong>Kombolcha, Ethiopia</strong>, Marvel Technologies unites software architecture, operations rigor, and commercial strategy to engineer world-class digital platforms.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {members.map((member, idx) => {
            const isBusinessLead = member.slug === 'mohammed-imam';

            return (
              <div
                key={member.slug}
                className="dc-reveal flex"
                data-reveal="unfold-3d"
                style={{ '--reveal-delay': `${idx * 80}ms` } as React.CSSProperties}
              >
                <Card
                  className={`p-5 sm:p-6 rounded-2xl bg-slate-900/40 border flex flex-col justify-between group w-full ${
                    isBusinessLead
                      ? 'border-cyan-500/40 shadow-[0_0_30px_rgba(0,166,255,0.15)] bg-gradient-to-b from-cyan-950/20 via-slate-900/90 to-[#040711]'
                      : 'border-white/10 hover:border-cyan-500/30'
                  }`}
                >
                <div>
                  {/* Status Banner */}
                  <div className="mb-3">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                      {member.statusBadge}
                    </span>
                  </div>

                  {/* Avatar Frame */}
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-950 border border-white/10 mb-5">
                    {member.slug === 'mohammed-imam' ? (
                      <Image
                        src={member.avatar || '/team/mohammed-imam.jpg'}
                        alt={`${member.name} — ${member.role}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : member.avatarType === 'ezedin' ? (
                      <AnimatedProfileAvatar type="ezedin" />
                    ) : (
                      <AnimatedProfileAvatar type="sudeys" />
                    )}
                  </div>

                  {/* Identity & Role */}
                  <h2 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {member.name}
                  </h2>
                  <p className="text-xs font-mono text-cyan-400 mb-2 font-medium">
                    {member.role}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-4">
                    <MapPin className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                    <span>{member.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-4 mb-5">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/team/${member.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold group/link"
                  >
                    <span>View Profile & Bio</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>

                  <div className="flex items-center gap-2">
                    {member.socials.telegram && (
                      <a
                        href={member.socials.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 flex items-center justify-center border border-white/10"
                        title="Telegram"
                      >
                        <Send className="w-3 h-3" />
                      </a>
                    )}
                    {member.socials.phone && (
                      <a
                        href={`tel:${member.socials.phone}`}
                        className="w-7 h-7 rounded-full bg-white/5 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 flex items-center justify-center border border-white/10"
                        title="Phone"
                      >
                        <Phone className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Company Connection Section */}
        <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Collaborate Directly with Marvel Technologies
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              We collaborate closely with every client, providing transparent communication, milestone-based deliveries, and technical excellence.
            </p>
          </div>

          <Button asChild variant="primary" size="lg">
            <Link href="/contact" className="inline-flex items-center gap-2">
              <span>Connect with Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
