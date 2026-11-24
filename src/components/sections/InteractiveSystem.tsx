'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';
import { getInteractiveLayers } from '@/data/translations';
import {
  Code,
} from 'lucide-react';

export function InteractiveSystem() {
  const { language, t } = useLanguage();
  const layers = getInteractiveLayers(language);
  const [selectedLayerId, setSelectedLayerId] = useState('frontend');
  const activeLayer = layers.find((l) => l.id === selectedLayerId) || layers[0];

  return (
    <section id="system" className="py-12 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('systemBadge')}
          title={t('systemTitle')}
          highlight={t('systemHighlight')}
          subtitle={t('systemSubtitle')}
        />

        {/* Android Segmented Layer Selector Bar */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 sm:gap-3 mb-6 sm:mb-12 py-1 px-1 -mx-4 sm:mx-0 px-4 sm:px-0 snap-x scroll-smooth justify-start sm:justify-center">
          {layers.map((layer) => {
            const isSelected = layer.id === selectedLayerId;
            return (
              <button
                key={layer.id}
                onClick={() => setSelectedLayerId(layer.id)}
                className={`snap-center shrink-0 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-mono active:scale-95 transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(0,102,255,0.4)] border border-blue-400'
                    : 'bg-white/[0.04] text-slate-300 hover:text-white border border-white/10 hover:border-white/20 active:bg-white/10'
                }`}
              >
                {layer.name}
              </button>
            );
          })}
        </div>

        {/* Interactive Architecture Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
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
    </section>
  );
}
