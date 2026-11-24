'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Moon,
  Layers,
  TrendingUp,
  RefreshCw,
  Shield,
  Cloud,
  Zap,
  Sparkles,
  Box,
  Globe2,
} from 'lucide-react';

interface Company {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  accent: string;
}

export const trustedCompanies: Company[] = [
  {
    id: 'sleepvoyage',
    name: 'sleepVoyage',
    category: 'IoT Sleep & Smart Wellness',
    icon: <Moon className="w-4 h-4 text-indigo-400" />,
    accent: 'from-indigo-500/20 to-blue-500/10',
  },
  {
    id: 'dais',
    name: 'Dais',
    category: 'InsurTech & Enterprise Systems',
    icon: <Layers className="w-4 h-4 text-cyan-400" />,
    accent: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    id: 'forex-forest',
    name: 'Forex Forest',
    category: 'Algorithmic Trading & FinTech',
    icon: <TrendingUp className="w-4 h-4 text-emerald-400" />,
    accent: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    id: 'rebill',
    name: 'Rebill',
    category: 'Subscription & Payment Engines',
    icon: <RefreshCw className="w-4 h-4 text-blue-400" />,
    accent: 'from-blue-500/20 to-cyan-500/10',
  },
  {
    id: 'apadua',
    name: 'Apadua',
    category: 'Enterprise SaaS & Cloud Infrastructure',
    icon: <Shield className="w-4 h-4 text-violet-400" />,
    accent: 'from-violet-500/20 to-indigo-500/10',
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'Cloud Infrastructure & Serverless',
    icon: <Cloud className="w-4 h-4 text-amber-400" />,
    accent: 'from-amber-500/20 to-orange-500/10',
  },
  {
    id: 'heckul',
    name: 'Heckul',
    category: 'Digital Velocity & Workflow SaaS',
    icon: <Zap className="w-4 h-4 text-rose-400" />,
    accent: 'from-rose-500/20 to-pink-500/10',
  },
  {
    id: 'technova',
    name: 'TechNova',
    category: 'AI Systems & Core Automation',
    icon: <Sparkles className="w-4 h-4 text-sky-400" />,
    accent: 'from-sky-500/20 to-blue-500/10',
  },
  {
    id: 'buildx',
    name: 'BuildX',
    category: 'Construction ERP & PropTech',
    icon: <Box className="w-4 h-4 text-cyan-300" />,
    accent: 'from-cyan-500/20 to-emerald-500/10',
  },
  {
    id: 'german-outsourcing',
    name: 'German Outsourcing Association',
    category: 'European Technology Alliance',
    icon: <Globe2 className="w-4 h-4 text-blue-400" />,
    accent: 'from-blue-600/20 to-cyan-500/10',
  },
];

export function CompaniesMarquee() {
  const { t } = useLanguage();
  // Duplicate array to ensure seamless infinite continuous ticker loop
  const marqueeItems = [...trustedCompanies, ...trustedCompanies];

  return (
    <div className="w-full pt-8 sm:pt-16 pb-4 sm:pb-8 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono uppercase tracking-[0.22em] text-slate-400 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>{t('marqueeBadge')}</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          {t('marqueeSubtitle')}
        </p>
      </div>

      {/* Infinite Scrolling Marquee Track with Left & Right Gradient Fade Masks */}
      <div className="relative w-full overflow-hidden py-3 sm:py-4">
        {/* Left & Right Ambient Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#040711] via-[#040711]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#040711] via-[#040711]/80 to-transparent z-10 pointer-events-none" />

        {/* Continuous Ticker */}
        <div className="animate-marquee-infinite flex items-center gap-3 sm:gap-6">
          {marqueeItems.map((company, idx) => (
            <div
              key={`${company.id}-${idx}`}
              className="group shrink-0 flex items-center gap-2.5 sm:gap-3 px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl bg-[#080d1a]/80 hover:bg-[#0c1428] border border-white/10 hover:border-cyan-500/40 shadow-lg hover:shadow-[0_0_25px_rgba(0,180,255,0.18)] transition-all duration-300 cursor-pointer"
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br ${company.accent} border border-white/10 group-hover:scale-110 transition-transform`}
              >
                {company.icon}
              </div>
              <div className="text-left">
                <span className="text-sm font-bold text-white tracking-tight block group-hover:text-cyan-300 transition-colors">
                  {company.name}
                </span>
                <span className="text-[10px] font-mono text-slate-400 block tracking-tight">
                  {company.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
