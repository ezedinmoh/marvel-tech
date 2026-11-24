'use client';

import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { useLanguage } from '@/context/LanguageContext';
import { getAboutPillars } from '@/data/translations';
import { Users, Code, Sparkles, Shield, Cpu, Target, ArrowRight } from 'lucide-react';

export function About() {
  const { language, t } = useLanguage();
  const rawPillars = getAboutPillars(language);
  const icons = [
    <Users key="users" className="w-6 h-6 text-cyan-400" />,
    <Code key="code" className="w-6 h-6 text-blue-400" />,
    <Target key="target" className="w-6 h-6 text-indigo-400" />,
    <Shield key="shield" className="w-6 h-6 text-emerald-400" />,
  ];

  const pillars = rawPillars.map((p, i) => ({
    ...p,
    icon: icons[i % icons.length],
  }));

  return (
    <section id="about" className="py-12 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('aboutBadge')}
          title={t('aboutTitle')}
          highlight={t('aboutHighlight')}
          subtitle={t('aboutSubtitle')}
        />

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center mb-8 sm:mb-16">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base lg:text-lg dc-reveal" data-reveal="left">
            <p>
              {t('aboutP1')}
            </p>
            <p className="text-slate-400 text-xs sm:text-base">
              {t('aboutP2')}
            </p>
            <div className="pt-2 flex flex-wrap gap-2 sm:gap-4 text-xs font-mono text-cyan-400">
              <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-[11px] sm:text-xs">
                #ZeroTechnicalDebt
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[11px] sm:text-xs text-blue-400">
                #FullStackPurity
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-[11px] sm:text-xs text-indigo-400">
                #HumanCenteredCode
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 dc-reveal" data-reveal="right" style={{ transitionDelay: '100ms' }}>
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-900/20 via-[#0a0f1d] to-[#040711] border border-blue-500/20 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-blue-500/15 border border-blue-500/30 text-cyan-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{t('aboutOathTitle')}</h4>
                  <span className="text-xs text-slate-400 font-mono">{t('aboutOathSub')}</span>
                </div>
              </div>

              <blockquote className="italic text-sm text-slate-300 border-l-2 border-cyan-400 pl-4 my-4">
                {t('aboutOathQuote')}
              </blockquote>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>{t('aboutOathRole')}</span>
                <span className="font-mono text-cyan-400">Marvel Technologies</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar, idx) => (
            <Card
              key={pillar.title}
              className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col justify-between dc-reveal"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/10 w-fit mb-4 sm:mb-5">
                  {pillar.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Link to Dedicated About Us Page */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/30 text-xs font-mono text-cyan-300 hover:text-white transition-all shadow-md group"
          >
            <span>Read Complete Company Vision, Location & Story</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
