'use client';

import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';
import { getInteractiveLayers } from '@/data/translations';
import {
  Code,
  Globe,
  Cpu,
  Database,
  ShieldCheck,
} from 'lucide-react';

export function InteractiveSystem() {
  const { language, t } = useLanguage();
  const layers = getInteractiveLayers(language);
  const [selectedLayerId, setSelectedLayerId] = useState('frontend');
  const [isHovered, setIsHovered] = useState(false);
  const [manualPauseUntil, setManualPauseUntil] = useState<number>(0);

  const handleSelectLayer = (id: string) => {
    setSelectedLayerId(id);
    setManualPauseUntil(Date.now() + 9000);
  };

  const layerIcons: Record<string, React.ReactNode> = {
    frontend: <Globe className="w-4 h-4 text-cyan-400" />,
    gateway: <Cpu className="w-4 h-4 text-blue-400" />,
    persistence: <Database className="w-4 h-4 text-indigo-400" />,
    security: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
  };

  // Auto-cycle active architecture layer smoothly on both desktop & mobile
  useEffect(() => {
    if (isHovered || layers.length === 0) return;
    const timer = setInterval(() => {
      if (Date.now() < manualPauseUntil) return;
      setSelectedLayerId((prevId) => {
        const currentIndex = layers.findIndex((l) => l.id === prevId);
        const nextIndex = (currentIndex + 1) % layers.length;
        return layers[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered, manualPauseUntil, layers]);

  const activeLayer = layers.find((l) => l.id === selectedLayerId) || layers[0];

  // Repeat 2x per half (4x total) so -50% infinite marquee covers wide desktop screens seamlessly
  const halfTrack = [...layers, ...layers];
  const marqueeLayers = [...halfTrack, ...halfTrack];

  return (
    <section
      id="system"
      className="py-12 sm:py-24 lg:py-32 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('systemBadge')}
          title={t('systemTitle')}
          highlight={t('systemHighlight')}
          subtitle={t('systemSubtitle')}
          variant="editorial"
        />
      </div>

      {/* Continuous Auto-Sliding Layer Selector Marquee (Desktop & Mobile) */}
      <div className="relative w-full overflow-hidden py-3 sm:py-4 mb-6 sm:mb-10 dc-reveal" data-reveal="cascade-row">
        {/* Left & Right Ambient Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#040711] via-[#040711]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#040711] via-[#040711]/80 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-infinite flex items-center gap-3 sm:gap-4">
          {marqueeLayers.map((layer, idx) => {
            const isSelected = layer.id === selectedLayerId;
            return (
              <button
                key={`${layer.id}-${idx}`}
                onClick={() => handleSelectLayer(layer.id)}
                className={`shrink-0 flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-mono active:scale-95 transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600/90 text-white shadow-[0_0_24px_rgba(0,102,255,0.45)] border border-cyan-400/60 scale-[1.03]'
                    : 'bg-[#080d1a]/85 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-500/40'
                }`}
              >
                <span className="p-1.5 rounded-lg bg-white/[0.06] border border-white/10 shrink-0">
                  {layerIcons[layer.id] || <Code className="w-4 h-4 text-cyan-400" />}
                </span>
                <span>{layer.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick Progress Dots for Manual / Auto Slide Indicator */}
        <div className="flex items-center justify-center gap-1.5 mb-5 sm:mb-7">
          {layers.map((layer) => (
            <button
              key={layer.id}
              onClick={() => handleSelectLayer(layer.id)}
              aria-label={layer.name}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                layer.id === selectedLayerId
                  ? 'w-7 bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(0,210,255,0.6)]'
                  : 'w-2 bg-white/15 hover:bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Interactive Architecture Console */}
        <div className="dc-reveal" data-reveal="unfold-3d">
          <div key={activeLayer.id} className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch animate-slide-fade">
          {/* Left Details Panel */}
          <div className="lg:col-span-6 rounded-2xl sm:rounded-3xl bg-[#090e1c] border border-white/15 p-4 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
                {activeLayer.badge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                {activeLayer.headline}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {activeLayer.description}
              </p>

              {/* Technologies Badges */}
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                  Core Technologies in this Layer:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeLayer.tech.map((tItem) => (
                    <span
                      key={tItem}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.05] text-slate-200 border border-white/10"
                    >
                      {tItem}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Telemetry Strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
              {activeLayer.metrics.map((m) => (
                <div key={m.label}>
                  <div className="text-lg sm:text-xl font-bold font-mono text-cyan-400">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-slate-400 uppercase font-mono mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Live Code & Diagram Terminal */}
          <div className="lg:col-span-6 rounded-3xl bg-[#03060f] border border-white/15 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" />
                <span>layer-spec.{activeLayer.id}.ts</span>
              </div>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                Validated
              </span>
            </div>

            <pre className="p-4 rounded-xl bg-black/60 font-mono text-xs sm:text-sm text-cyan-300 overflow-x-auto leading-relaxed my-4 border border-white/5">
              <code>{activeLayer.codeSample}</code>
            </pre>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Standard: Strict TypeScript · Zero Runtime Errors</span>
              <span className="text-blue-400 font-bold">Marvel Verified</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
