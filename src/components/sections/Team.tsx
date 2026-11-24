'use client';

import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { teamData } from '@/data/team';
import { Mail, User, Shield, Phone, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export function Team() {
  return (
    <section id="team" className="py-24 sm:py-32 relative bg-[#03060f]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Founding Team"
          title="Collaborative"
          highlight="Engineering Collective."
          subtitle="A focused core of technology professionals combining deep domain knowledge in distributed web platforms, mobile engineering, and cloud systems."
        />

        {/* Team Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamData.map((member) => (
            <Card
              key={member.id}
              className="p-6 flex flex-col justify-between group border-white/10 hover:border-blue-500/40 relative overflow-hidden"
            >
              <div>
                {/* Avatar / Profile Visualizer */}
                <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-slate-900 via-[#0a0f1d] to-[#040711] border border-white/10 flex flex-col items-center justify-center mb-6 overflow-hidden group-hover:border-cyan-500/30 transition-colors">
                  {member.avatar ? (
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 mb-2">
                        <User className="w-8 h-8" />
                      </div>
                      <span className="font-mono text-xs text-slate-500 tracking-wider">
                        {member.placeholderAvatar}
                      </span>
                    </>
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-mono bg-blue-500/80 backdrop-blur-md text-white border border-blue-400/40 shadow-lg z-10">
                    {member.statusBadge}
                  </div>
                </div>

                <div className="mb-2">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 mt-0.5">
                    {member.role}
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
                      className="text-[10px] font-mono text-slate-300 bg-white/[0.04] border border-white/5 px-2 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-2">
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
                    href={`tel:${member.socials.phone}`}
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
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
                {member.socials.email && (
                  <a
                    href={`mailto:${member.socials.email}`}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
