'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { companyData } from '@/data/company';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Terminal, Layers, Activity, ShieldCheck, Zap, Server } from 'lucide-react';

export function Hero() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'telemetry'>('architecture');
  const { language, t } = useLanguage();
  const previewRef = useRef<HTMLDivElement>(null);

  // Subtle GPU scroll-linked parallax/scale depth on the Hero terminal card
  useEffect(() => {
    const el = previewRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId: number | null = null;
    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        const y = Math.min(Math.max(window.scrollY, 0), 600);
        const progress = y / 600;
        const scale = 1 - progress * 0.025;
        const translateY = progress * -12;
        el.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0) scale(${scale.toFixed(4)})`;
        rafId = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="hero" className="relative pt-24 pb-12 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Tagline Badge — Crisp Page-Load Entrance */}
          <div className="mb-4 sm:mb-6 dc-load-fade-scale" style={{ animationDelay: '0ms' }}>
            <Badge variant="cyan" dot={true}>
              {t('heroBadge')}
            </Badge>
          </div>

          {/* Main Headline — Editorial Clip Reveal */}
          <h1
            className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.12] sm:leading-[1.08] dc-load-clip-up"
            style={{ animationDelay: '70ms' }}
          >
            {t('heroTitlePrefix')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
              {t('heroTitleHighlight')}
            </span>{' '}
            {t('heroTitleSuffix')}
          </h1>

          {/* Supporting Narrative — Silky Fade & Scale */}
          <p
            className="mt-3.5 sm:mt-6 text-sm sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal dc-load-fade-scale"
            style={{ animationDelay: '150ms' }}
          >
            {t('heroSubtitle')}
          </p>

          {/* Action CTAs — Tactile Spring Pop */}
          <div
            className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto dc-load-pop-spring"
            style={{ animationDelay: '220ms' }}
          >
            <Button
              href="#contact"
              size="lg"
              variant="primary"
              className="w-full sm:w-auto active:scale-95 transition-transform"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              {t('heroStartProject')}
            </Button>
            <Button
              href="#projects"
              size="lg"
              variant="outline"
              className="w-full sm:w-auto active:scale-95 transition-transform"
            >
              {t('heroExploreSolutions')}
            </Button>
          </div>

          {/* Tech Trust Metrics — Individually Staggered Pills */}
          <div className="mt-6 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-10 text-[11px] sm:text-xs font-mono text-slate-400">
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/5 sm:border-transparent sm:bg-transparent dc-load-pop-spring"
              style={{ animationDelay: '280ms' }}
            >
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
              <span>{t('heroTypeSafe')}</span>
            </div>
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/5 sm:border-transparent sm:bg-transparent dc-load-pop-spring"
              style={{ animationDelay: '330ms' }}
            >
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
              <span>{t('heroSubSecond')}</span>
            </div>
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/5 sm:border-transparent sm:bg-transparent dc-load-pop-spring"
              style={{ animationDelay: '380ms' }}
            >
              <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
              <span>{t('heroUptime')}</span>
            </div>
          </div>

          {/* Interactive Technology Preview Terminal Widget — 3D Unfold + Decoupled Scroll Depth */}
          <div
            ref={previewRef}
            className="mt-8 sm:mt-16 w-full max-w-4xl mx-auto will-change-transform"
          >
            <div
              className="w-full rounded-2xl sm:rounded-3xl bg-[#090e1c]/90 border border-white/15 p-3.5 sm:p-6 shadow-[0_20px_60px_-15px_rgba(0,102,255,0.3)] backdrop-blur-2xl text-left dc-load-unfold-3d"
              style={{ animationDelay: '340ms' }}
            >
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="ml-3 text-slate-400">marvel-core-mesh · v2.4.0</span>
              </div>

              {/* View Switcher */}
              <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-lg border border-white/5">
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    activeTab === 'architecture'
                      ? 'bg-blue-600/30 text-cyan-400 border border-blue-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t('heroArchMesh')}
                </button>
                <button
                  onClick={() => setActiveTab('telemetry')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    activeTab === 'telemetry'
                      ? 'bg-blue-600/30 text-cyan-400 border border-blue-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t('heroRealtimeTelemetry')}
                </button>
              </div>
            </div>

            {/* Terminal Body Content */}
            <div className="pt-4 font-mono text-xs sm:text-sm">
              {activeTab === 'architecture' ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  {/* Node 1 */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-cyan-400 font-semibold">{t('heroLayer1Title')}</span>
                      <Layers className="w-4 h-4 text-cyan-400" />
                    </div>
                    <p className="text-slate-400 text-[11px] mb-2">
                      {t('heroLayer1Desc')}
                    </p>
                    <div className="flex items-center gap-2 text-emerald-400 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>{t('heroLayer1Metric')}</span>
                    </div>
                  </div>

                  {/* Node 2 */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-400 font-semibold">{t('heroLayer2Title')}</span>
                      <Server className="w-4 h-4 text-blue-400" />
                    </div>
                    <p className="text-slate-400 text-[11px] mb-2">
                      {t('heroLayer2Desc')}
                    </p>
                    <div className="flex items-center gap-2 text-emerald-400 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{t('heroLayer2Metric')}</span>
                    </div>
                  </div>

                  {/* Node 3 */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-indigo-400 font-semibold">{t('heroLayer3Title')}</span>
                      <Terminal className="w-4 h-4 text-indigo-400" />
                    </div>
                    <p className="text-slate-400 text-[11px] mb-2">
                      {t('heroLayer3Desc')}
                    </p>
                    <div className="flex items-center gap-2 text-emerald-400 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{t('heroLayer3Metric')}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 text-slate-300 text-xs bg-black/40 p-4 rounded-xl border border-white/5">
                  <div className="text-slate-500">{t('heroLogsTitle')}</div>
                  <div className="text-emerald-400">[2026-11-24T12:00:01Z] {t('heroLog1')}</div>
                  <div className="text-cyan-400">[2026-11-24T12:00:02Z] {t('heroLog2')}</div>
                  <div className="text-blue-400">[2026-11-24T12:00:03Z] {t('heroLog3')}</div>
                  <div className="text-slate-400">[2026-11-24T12:00:04Z] {t('heroLog4')}</div>
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
