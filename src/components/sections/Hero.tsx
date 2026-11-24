'use client';

import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { companyData } from '@/data/company';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Terminal, Layers, Activity, ShieldCheck, Zap, Server } from 'lucide-react';

export function Hero() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'telemetry'>('architecture');
  const { language, t } = useLanguage();

  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Tagline Badge */}
          <div className="mb-6 dc-reveal" style={{ transitionDelay: '0ms' }}>
            <Badge variant="cyan" dot={true}>
              {t('heroBadge')}
            </Badge>
          </div>

          {/* Main Headline */}
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.08] dc-reveal"
            style={{ transitionDelay: '100ms' }}
          >
            {t('heroTitlePrefix')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
              {t('heroTitleHighlight')}
            </span>{' '}
            {t('heroTitleSuffix')}
          </h1>

          {/* Supporting Narrative */}
          <p
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal dc-reveal"
            style={{ transitionDelay: '180ms' }}
          >
            {t('heroSubtitle')}
          </p>

          {/* Action CTAs */}
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-4 dc-reveal"
            style={{ transitionDelay: '260ms' }}
          >
            <Button
              href="#contact"
              size="lg"
              variant="primary"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              {t('heroStartProject')}
            </Button>
            <Button
              href="#projects"
              size="lg"
              variant="outline"
            >
              {t('heroExploreSolutions')}
            </Button>
          </div>

          {/* Tech Trust Metrics */}
          <div
            className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-slate-400 dc-reveal"
            style={{ transitionDelay: '340ms' }}
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>{t('heroTypeSafe')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-400" />
              <span>{t('heroSubSecond')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>{t('heroUptime')}</span>
            </div>
          </div>

          {/* Interactive Technology Preview Terminal Widget */}
          <div
            className="mt-16 w-full max-w-4xl mx-auto rounded-3xl bg-[#090e1c]/90 border border-white/15 p-4 sm:p-6 shadow-[0_20px_60px_-15px_rgba(0,102,255,0.3)] backdrop-blur-2xl text-left dc-reveal"
            data-reveal="scale"
            style={{ transitionDelay: '420ms' }}
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
    </section>
  );
}
