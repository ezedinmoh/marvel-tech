import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { AnimatedProfileAvatar } from '@/components/ui/AnimatedProfileAvatar';
import { teamProfiles } from '@/data/teamProfiles';
import { getCanonicalUrl, SITE_URL, generatePersonSchema } from '@/lib/seo';
import {
  MapPin,
  Send,
  Phone,
  Mail,
  ArrowRight,
  ExternalLink,
  Shield,
  Briefcase,
  CheckCircle2,
  Code2,
  FolderKanban,
  Sparkles,
} from 'lucide-react';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterXIcon,
  InstagramIcon,
  TikTokIcon,
  FacebookIcon,
  YouTubeIcon,
} from '@/components/ui/Icons';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(teamProfiles).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = teamProfiles[slug];

  if (!member) {
    return {
      title: 'Team Member Not Found',
    };
  }

  const canonicalUrl = getCanonicalUrl(`/team/${member.slug}`);

  return {
    title: member.metaTitle,
    description: member.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${member.name} | Marvel Technologies`,
      description: member.metaDescription,
      url: canonicalUrl,
      images: [
        {
          url: member.avatar && member.avatar.startsWith('/') ? member.avatar : '/og-image.png',
          width: 871,
          height: 1024,
          alt: `${member.name} — ${member.role}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${member.name} | Marvel Technologies`,
      description: member.metaDescription,
    },
  };
}

export default async function TeamMemberProfilePage({ params }: Props) {
  const { slug } = await params;
  const member = teamProfiles[slug];

  if (!member) {
    notFound();
  }

  const personSchema = generatePersonSchema({
    name: member.name,
    slug: member.slug,
    role: member.role,
    bio: member.bio,
    image: member.avatar,
    expertise: member.expertise,
    sameAs: Object.values(member.socials).filter(Boolean) as string[],
  });

  const otherMembers = Object.values(teamProfiles).filter((m) => m.slug !== member.slug);

  return (
    <article className="pt-24 sm:pt-32 pb-20 relative bg-[#040711]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Team', path: '/team' },
            { name: member.name, path: `/team/${member.slug}` },
          ]}
        />

        {/* Profile Card Header */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/40 border border-white/10 mb-12 dc-load-fade-scale">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Avatar Column */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 border border-cyan-500/30 shadow-[0_0_35px_rgba(0,166,255,0.15)] dc-load-zoom-in">
                {member.slug === 'mohammed-imam' ? (
                  <Image
                    src={member.avatar || '/team/mohammed-imam.jpg'}
                    alt={`${member.name} — ${member.role} at Marvel Technologies`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                ) : member.avatarType === 'ezedin' ? (
                  <AnimatedProfileAvatar type="ezedin" />
                ) : (
                  <AnimatedProfileAvatar type="sudeys" />
                )}
              </div>
            </div>

            {/* Info Column */}
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-300 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>{member.statusBadge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
                {member.displayName}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-slate-400 mb-5">
                <span className="text-cyan-400 font-semibold">{member.role}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                  <span>{member.location}</span>
                </span>
                <span>·</span>
                <span className="text-slate-400">Marvel Technologies</span>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Direct Channels */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
                {member.socials.telegram && (
                  <a
                    href={member.socials.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0088cc]/20 border border-[#0088cc]/40 text-xs text-cyan-300 hover:bg-[#0088cc]/30 transition-all font-mono"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Telegram</span>
                  </a>
                )}
                {member.socials.phone && (
                  <a
                    href={`tel:${member.socials.phone}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-xs text-emerald-300 hover:bg-emerald-500/30 transition-all font-mono"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Direct</span>
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                    title="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                    title="Twitter / X"
                  >
                    <TwitterXIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Responsibilities & Contributions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Responsibilities */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/30 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <h2 className="text-lg font-bold text-white">
                Responsibilities at Marvel Technologies
              </h2>
            </div>
            <ul className="space-y-3">
              {member.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Key Contributions */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/30 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-indigo-400" />
              <h2 className="text-lg font-bold text-white">
                Company Contributions & Impact
              </h2>
            </div>
            <ul className="space-y-3">
              {member.contributions.map((con, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Technical Expertise */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/30 border border-white/10 mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-bold text-white">
              Documented Technical & Professional Expertise
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {member.expertise.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Involved */}
        {member.projectsInvolved && member.projectsInvolved.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <FolderKanban className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-bold text-white">
                Key Systems & Engineering Initiatives
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {member.projectsInvolved.map((proj, i) => (
                <div key={i} className="p-5 rounded-xl bg-slate-900/40 border border-white/10">
                  <h3 className="text-base font-semibold text-white mb-1.5">{proj.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">{proj.description}</p>
                  {proj.url && (
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300"
                    >
                      <span>Inspect Live Project</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Other Team Members Cross-Link */}
        <section className="pt-8 border-t border-white/10 mb-12">
          <h2 className="text-lg font-bold text-white mb-4">
            Meet Other Marvel Technologies Leaders
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherMembers.map((other) => (
              <Link
                key={other.slug}
                href={`/team/${other.slug}`}
                className="p-4 rounded-xl bg-slate-900/30 border border-white/10 hover:border-cyan-500/30 transition-all flex items-center justify-between group"
              >
                <div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {other.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">{other.role}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </Link>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 via-cyan-900/20 to-slate-900 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Have a Project for {member.name}?
            </h3>
            <p className="text-sm text-slate-300">
              Get in touch with the Marvel Technologies team in Kombolcha, Ethiopia for custom software and engineering proposals.
            </p>
          </div>

          <Button asChild variant="primary" size="lg">
            <Link href="/contact" className="inline-flex items-center gap-2">
              <span>Start Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
