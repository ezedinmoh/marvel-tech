'use client';

import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { useLanguage } from '@/context/LanguageContext';
import { getIndustriesData } from '@/data/translations';
import {
  Store,
  UtensilsCrossed,
  Truck,
  Stethoscope,
  GraduationCap,
  Building2,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export function IndustrySolutions() {
  const { language, t } = useLanguage();
  const rawIndustries = getIndustriesData(language);

  const iconMap: Record<string, React.ReactNode> = {
    retail: <Store className="w-5 h-5 text-cyan-400" />,
    hospitality: <UtensilsCrossed className="w-5 h-5 text-amber-400" />,
    logistics: <Truck className="w-5 h-5 text-blue-400" />,
    healthcare: <Stethoscope className="w-5 h-5 text-emerald-400" />,
    education: <GraduationCap className="w-5 h-5 text-indigo-400" />,
    realestate: <Building2 className="w-5 h-5 text-violet-400" />,
  };

  const industries = rawIndustries.map((ind) => ({
    ...ind,
    icon: iconMap[ind.id] || <Store className="w-5 h-5 text-cyan-400" />,
  }));

  const [activeTabId, setActiveTabId] = useState<string>('retail');
  const [isHovered, setIsHovered] = useState(false);
  const [manualPauseUntil, setManualPauseUntil] = useState<number>(0);

  const handleSelectIndustry = (id: string) => {
    setActiveTabId(id);
    setManualPauseUntil(Date.now() + 9000);
  };

  // Auto-cycle active industry card smoothly on both desktop & mobile
  useEffect(() => {
    if (isHovered || industries.length === 0) return;
    const timer = setInterval(() => {
      if (Date.now() < manualPauseUntil) return;
      setActiveTabId((prevId) => {
        const currentIndex = industries.findIndex((ind) => ind.id === prevId);
        const nextIndex = (currentIndex + 1) % industries.length;
        return industries[nextIndex].id;
      });
    }, 3800);

    return () => clearInterval(timer);
  }, [isHovered, manualPauseUntil, industries]);

  const activeIndustry = industries.find((i) => i.id === activeTabId) || industries[0];

  // Duplicate twice per half (4x total) so -50% infinite marquee covers wide desktop screens seamlessly
  const halfTrack = [...industries, ...industries];
  const marqueeIndustries = [...halfTrack, ...halfTrack];

  return (
    <section
      id="industries"
      className="py-12 sm:py-24 lg:py-32 relative bg-[#03060f]/90 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('industriesBadge')}
          title={t('industriesTitle')}
          highlight={t('industriesHighlight')}
          subtitle={t('industriesSubtitle')}
          variant="split"
        />
      </div>

      {/* Continuous Auto-Sliding Industry Marquee (Desktop & Mobile) */}
      <div className="relative w-full overflow-hidden py-3 sm:py-4 mb-6 sm:mb-10 dc-reveal" data-reveal="cascade-row">
        {/* Left & Right Ambient Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#03060f] via-[#03060f]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#03060f] via-[#03060f]/80 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-infinite flex items-center gap-3 sm:gap-4">
          {marqueeIndustries.map((ind, idx) => {
            const isSelected = ind.id === activeTabId;
            return (
              <button
                key={`${ind.id}-${idx}`}
                onClick={() => handleSelectIndustry(ind.id)}
                className={`shrink-0 flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold active:scale-95 transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600/90 text-white shadow-[0_0_24px_rgba(0,102,255,0.45)] border border-cyan-400/60 scale-[1.03]'
                    : 'bg-[#080d1a]/85 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-500/40'
                }`}
              >
                <span className="p-1.5 rounded-lg bg-white/[0.06] border border-white/10 shrink-0">
                  {ind.icon}
                </span>
                <div className="text-left">
                  <span className="block leading-tight">{ind.name}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick Progress Dots for Manual / Auto Slide Indicator */}
        <div className="flex items-center justify-center gap-1.5 mb-5 sm:mb-7">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => handleSelectIndustry(ind.id)}
              aria-label={ind.name}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                ind.id === activeTabId
                  ? 'w-7 bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(0,210,255,0.6)]'
                  : 'w-2 bg-white/15 hover:bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Active Industry Architecture Card */}
        <div className="max-w-4xl mx-auto dc-reveal" data-reveal="clip-up">
          <Card className="p-5 sm:p-10 rounded-2xl sm:rounded-3xl border-white/15 bg-gradient-to-br from-[#080d1a] to-[#040711] shadow-2xl">
            <div key={activeIndustry.id} className="animate-slide-fade">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10">
                    {activeIndustry.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {activeIndustry.name}
                    </h3>
                    <span className="text-xs font-mono text-cyan-400">
                      {activeIndustry.tagline}
                    </span>
                  </div>
                </div>

                {activeIndustry.referenceProject && (
                  <div className="px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300">
                    {t('industriesReferencePrefix')} <span className="text-white font-semibold">{activeIndustry.referenceProject}</span>
                  </div>
                )}
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {activeIndustry.description}
              </p>

              {/* Core Capabilities */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
                  {t('industriesCapabilitiesTitle')}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeIndustry.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & CTA Strip */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-500 uppercase">{t('industriesDeliverablesTitle')}:</span>
                  {activeIndustry.sampleDeliverables.map((del) => (
                    <span
                      key={del}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300"
                    >
                      {del}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 shrink-0"
                >
                  <span>{activeIndustry.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
