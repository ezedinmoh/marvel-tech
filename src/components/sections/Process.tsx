'use client';

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { useLanguage } from '@/context/LanguageContext';
import { getProcessStages } from '@/data/translations';
import { Search, Cpu, Palette, Code2, Rocket, TrendingUp, CheckCircle } from 'lucide-react';

export function Process() {
  const { language, t } = useLanguage();
  const stages = getProcessStages(language);

  const getIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-cyan-400' };
    switch (iconName) {
      case 'Search':
        return <Search {...props} />;
      case 'Cpu':
        return <Cpu {...props} className="w-5 h-5 text-blue-400" />;
      case 'Palette':
        return <Palette {...props} className="w-5 h-5 text-indigo-400" />;
      case 'Code2':
        return <Code2 {...props} className="w-5 h-5 text-cyan-400" />;
      case 'Rocket':
        return <Rocket {...props} className="w-5 h-5 text-emerald-400" />;
      case 'TrendingUp':
        return <TrendingUp {...props} className="w-5 h-5 text-amber-400" />;
      default:
        return <CheckCircle {...props} />;
    }
  };

  return (
    <section id="process" className="py-12 sm:py-24 lg:py-32 relative bg-[#040711]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('processBadge')}
          title={t('processTitle')}
          highlight={t('processHighlight')}
          subtitle={t('processSubtitle')}
          variant="kinetic"
        />

        {/* 6-Stage Timeline Grid — Sequential Domino Cadence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 relative">
          {stages.map((stage, idx) => (
            <div
              key={stage.step}
              className="dc-reveal flex"
              data-reveal="cascade-row"
              style={{ '--reveal-delay': `${idx * 55}ms` } as React.CSSProperties}
            >
              <Card
                className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between w-full relative group hover:border-blue-500/30 active:scale-[0.98]"
              >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                    {getIcon(stage.icon)}
                  </div>
                  <span className="text-3xl font-mono font-black text-white/10 group-hover:text-blue-500/30 transition-colors">
                    {stage.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {stage.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {stage.summary}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                  {t('processDeliverablesTitle')}
                </span>
                {stage.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
