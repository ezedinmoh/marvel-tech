'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ProjectItem } from '@/types';
import { Monitor, Smartphone, ExternalLink, Lock, RotateCw, Copy, Check, Sparkles } from 'lucide-react';

interface DeviceFramePreviewProps {
  project: ProjectItem;
  className?: string;
}

export function DeviceFramePreview({ project, className = '' }: DeviceFramePreviewProps) {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [copied, setCopied] = useState(false);

  const displayUrl = project.liveUrl
    ? project.liveUrl.replace(/^https?:\/\//, '')
    : `${project.id}.marveltechnologies.et`;

  const copyUrl = () => {
    if (project.liveUrl) {
      navigator.clipboard.writeText(project.liveUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`flex flex-col items-center w-full ${className}`}>
      {/* Device Viewport Selector Bar */}
      <div className="flex items-center justify-between w-full mb-4 px-2">
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-white/10 shadow-inner">
          <button
            onClick={() => setDevice('desktop')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              device === 'desktop'
                ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(0,102,255,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Desktop (1440px)</span>
          </button>

          <button
            onClick={() => setDevice('mobile')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              device === 'mobile'
                ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(0,102,255,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile (390px)</span>
          </button>
        </div>

        {/* Live Link Badge */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-mono transition-colors"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      {/* Frame Container */}
      <div className="w-full flex justify-center py-2">
        {device === 'desktop' ? (
          /* Desktop Chassis */
          <div className="w-full max-w-3xl rounded-2xl bg-slate-900/90 border border-white/15 shadow-2xl overflow-hidden transition-all duration-300 ring-1 ring-white/5">
            {/* Browser Header Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-white/10 gap-3">
              {/* Traffic lights */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>

              {/* URL Address Bar */}
              <div className="flex items-center gap-2 flex-1 max-w-md mx-auto px-3 py-1 rounded-md bg-slate-900/90 border border-white/10 text-xs font-mono text-slate-400">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate text-slate-300 select-all">{displayUrl}</span>
                <button
                  onClick={copyUrl}
                  title="Copy URL"
                  className="ml-auto text-slate-500 hover:text-slate-300 transition-colors shrink-0"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              {/* Refresh / Tools */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">1440×900</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
              </div>
            </div>

            {/* Viewport Screen Content */}
            <div className="relative w-full aspect-[16/10] bg-slate-950 overflow-hidden group">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center text-slate-400">
                  <Sparkles className="w-8 h-8 text-blue-400 mb-2 animate-bounce" />
                  <p className="text-sm font-medium text-white">{project.title}</p>
                  <p className="text-xs text-slate-500">Live preview viewport container</p>
                </div>
              )}

              {/* Subtle Scanline Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        ) : (
          /* Mobile iPhone Chassis */
          <div className="w-72 sm:w-80 rounded-[44px] bg-slate-950 p-3.5 border-4 border-slate-700/80 shadow-[0_0_50px_rgba(0,0,0,0.8)] ring-1 ring-white/20 transition-all duration-300 relative">
            {/* Antenna bands */}
            <div className="absolute -left-1 top-24 w-1 h-8 bg-slate-700 rounded-l" />
            <div className="absolute -left-1 top-36 w-1 h-8 bg-slate-700 rounded-l" />
            <div className="absolute -right-1 top-28 w-1 h-12 bg-slate-700 rounded-r" />

            {/* Inner Phone Screen */}
            <div className="relative w-full rounded-[34px] overflow-hidden bg-slate-900 border border-white/10 aspect-[9/18]">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 flex items-center justify-between px-3 w-28 h-6 rounded-full bg-black border border-white/10 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-white/20" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
              </div>

              {/* Mobile Status Bar */}
              <div className="absolute top-2 left-4 right-4 z-10 flex items-center justify-between text-[10px] font-mono font-bold text-white px-1">
                <span>9:41</span>
                <span className="text-[9px] text-slate-400 font-mono">5G 100%</span>
              </div>

              {/* Screen Content */}
              <div className="relative w-full h-full pt-8 pb-6 bg-slate-950 overflow-hidden">
                {project.image ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="320px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                    
                    {/* Floating Mobile Card Overlay */}
                    <div className="absolute bottom-4 left-3 right-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-left">
                      <p className="text-xs font-bold text-white truncate">{project.title}</p>
                      <p className="text-[10px] text-cyan-300 font-mono truncate">{project.category}</p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-400">
                    <p className="text-xs font-medium text-white">{project.title}</p>
                  </div>
                )}
              </div>

              {/* Home indicator bar */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-white/40 z-20" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
