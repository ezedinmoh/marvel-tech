'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { AnimatedProfileAvatar } from '../ui/AnimatedProfileAvatar';
import { useLanguage } from '@/context/LanguageContext';
import { getTeamData } from '@/data/translations';
import { Mail, User, Shield, Phone, Send, MapPin, ArrowRight, ArrowUpRight } from 'lucide-react';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterXIcon,
  InstagramIcon,
  TikTokIcon,
  FacebookIcon,
  YouTubeIcon,
  DiscordIcon,
} from '../ui/Icons';

export function Team() {
  const { language, t } = useLanguage();
  const members = getTeamData(language);

  return (
    <section id="team" className="py-12 sm:py-24 lg:py-32 relative bg-[#03060f]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('teamBadge')}
          title={t('teamTitle')}
          highlight={t('teamHighlight')}
          subtitle={t('teamSubtitle')}
        />

        {/* Team Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto">
          {members.map((member, index) => {
            const isBusinessLead = member.id === 'mohammed-imam';

            return (
              <Card
                key={member.id}
                style={{ transitionDelay: `${index * 60}ms` }}
                className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col justify-between group relative overflow-hidden transition-all duration-300 dc-reveal ${
                  isBusinessLead
                    ? 'border-cyan-500/40 shadow-[0_0_35px_rgba(0,166,255,0.15)] bg-gradient-to-b from-cyan-950/25 via-slate-900/90 to-[#040711] ring-1 ring-cyan-500/20'
                    : 'border-white/10 hover:border-blue-500/40'
                }`}
              >
                <div>
                  {/* Business Lead Accent Header Banner */}
                  {isBusinessLead && (
                    <div className="mb-3 sm:mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600/30 to-cyan-500/30 border border-cyan-500/40 text-[11px] font-mono text-cyan-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span>{t('teamBusinessLeadBanner')}</span>
                    </div>
                  )}

                  {/* Avatar / Profile Visualizer */}
                  <div
                    className={`relative w-full aspect-[4/5] sm:aspect-[4/5] rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-900 via-[#0a0f1d] to-[#040711] border flex flex-col items-center justify-center mb-4 sm:mb-6 overflow-hidden transition-colors ${
                      isBusinessLead
                        ? 'border-cyan-500/40 shadow-[0_0_20px_rgba(0,166,255,0.2)]'
                        : 'border-white/10 group-hover:border-cyan-500/30'
                    }`}
                  >
                    {member.id === 'ezedin-mohammed' ? (
                      <AnimatedProfileAvatar type="ezedin" />
                    ) : member.id === 'sudeys-ibrahim' ? (
                      <AnimatedProfileAvatar type="sudeys" />
                    ) : member.avatar ? (
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 mb-2">
                          <User className="w-8 h-8" />
                        </div>
                        <span className="font-mono text-xs text-slate-400 font-bold tracking-wider">
                          {member.placeholderAvatar}
                        </span>
                      </>
                    )}

                    {/* Status Badge */}
                    <div
                      className={`absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono backdrop-blur-md border shadow-lg z-10 ${
                        isBusinessLead
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-cyan-300/40 font-semibold shadow-[0_0_15px_rgba(0,166,255,0.4)]'
                          : 'bg-blue-500/80 text-white border-blue-400/40'
                      }`}
                    >
                      {member.statusBadge}
                    </div>
                  </div>

                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      <Link
                        href={`/team/${member.id === 'ezedin-mohammed' ? 'ezedinmoh' : member.id}`}
                        className="hover:underline inline-flex items-center gap-1.5"
                      >
                        <span>{member.name}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                      </Link>
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-0.5">
                      <span className="text-xs font-mono text-cyan-400 font-medium">
                        {member.role}
                      </span>
                      {member.location && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400">
                          <MapPin className="w-3 h-3 text-cyan-500" />
                          <span>{member.location}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Expertise Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          isBusinessLead
                            ? 'text-cyan-200 bg-cyan-950/40 border border-cyan-500/30'
                            : 'text-slate-300 bg-white/[0.04] border border-white/5'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Channels & Direct Triggers */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {member.socials.telegram && (
                      <a
                        href={member.socials.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-white/10 transition-colors"
                        aria-label={`${member.name} Telegram`}
                        title="Telegram Direct"
                      >
                        <Send className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.phone && (
                      <a
                        href={`tel:${member.socials.phone.replace(/\s+/g, '')}`}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-white/10 transition-colors"
                        aria-label={`Call ${member.name}`}
                        title={member.socials.phone}
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label={`${member.name} GitHub`}
                        title="GitHub Profile"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-white/10 transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                        title="LinkedIn Profile"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label={`${member.name} Twitter / X`}
                        title="Twitter / X"
                      >
                        <TwitterXIcon className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-pink-400 hover:bg-white/10 transition-colors"
                        aria-label={`${member.name} Instagram`}
                        title="Instagram"
                      >
                        <InstagramIcon className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.tiktok && (
                      <a
                        href={member.socials.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors"
                        aria-label={`${member.name} TikTok`}
                        title="TikTok"
                      >
                        <TikTokIcon className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.facebook && (
                      <a
                        href={member.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-blue-500 hover:bg-white/10 transition-colors"
                        aria-label={`${member.name} Facebook`}
                        title="Facebook"
                      >
                        <FacebookIcon className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.youtube && (
                      <a
                        href={member.socials.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-white/10 transition-colors"
                        aria-label={`${member.name} YouTube`}
                        title="YouTube Channel"
                      >
                        <YouTubeIcon className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.discord && (
                      <a
                        href={member.socials.discord}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-400 hover:bg-white/10 transition-colors"
                        aria-label={`${member.name} Discord`}
                        title="Discord Profile"
                      >
                        <DiscordIcon className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.email && (
                      <a
                        href={`mailto:${member.socials.email}`}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors"
                        aria-label={`Email ${member.name}`}
                        title={member.socials.email}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <Link
                    href={`/team/${member.id === 'ezedin-mohammed' ? 'ezedinmoh' : member.id}`}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    <span>Bio & Profile</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
