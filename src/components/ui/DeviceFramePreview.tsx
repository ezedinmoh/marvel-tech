'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ProjectItem } from '@/types';
import {
  Monitor,
  Smartphone,
  ExternalLink,
  Lock,
  RotateCw,
  Copy,
  Check,
  Sparkles,
  Globe,
  ImageIcon,
} from 'lucide-react';

interface DeviceFramePreviewProps {
  project: ProjectItem;
  className?: string;
}

export function DeviceFramePreview({ project, className = '' }: DeviceFramePreviewProps) {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [viewMode, setViewMode] = useState<'screenshot' | 'iframe'>('screenshot');
  const [iframeKey, setIframeKey] = useState(0);
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

  const reloadIframe = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className={`flex flex-col items-center w-full ${className}`}>
      {/* Top Device & Mode Selector Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 w-full mb-4 px-1">
        {/* Device Viewport Selector */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900/90 border border-white/10 shadow-inner">
          <button
            onClick={() => setDevice('desktop')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
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
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              device === 'mobile'
                ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(0,102,255,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile (390px)</span>
          </button>
        </div>

        {/* View Mode Toggle (Interactive Iframe vs High-Res Screenshot) */}
        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900/90 border border-white/10">
              <button
                onClick={() => setViewMode('screenshot')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all cursor-pointer ${
                  viewMode === 'screenshot'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ImageIcon className="w-3 h-3" />
                <span>Screenshot</span>
              </button>

              <button
                onClick={() => setViewMode('iframe')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all cursor-pointer ${
                  viewMode === 'iframe'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Load live responsive webview inside chassis"
              >
                <Globe className="w-3 h-3" />
                <span>Interactive Live View</span>
              </button>
            </div>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-cyan-300 border border-blue-500/30 text-xs font-medium transition-colors"
            >
              <span>Launch Tab</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      {/* Frame Container */}
      <div className="w-full flex justify-center py-1">
        {device === 'desktop' ? (
          /* Desktop Chassis */
          <div className="w-full rounded-2xl bg-slate-900/95 border border-white/15 shadow-2xl overflow-hidden transition-all duration-300 ring-1 ring-white/5 flex flex-col">
            {/* Browser Header Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-white/10 gap-3">
              {/* Traffic lights */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>

              {/* URL Address Bar */}
              <div className="flex items-center gap-2 flex-1 max-w-lg mx-auto px-3 py-1 rounded-md bg-slate-900 border border-white/10 text-xs font-mono text-slate-400">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate text-slate-200 select-all">{displayUrl}</span>
                <button
                  onClick={copyUrl}
                  title="Copy URL"
                  className="ml-auto text-slate-500 hover:text-slate-300 transition-colors shrink-0 cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              {/* Refresh / Tools */}
              <div className="flex items-center gap-2 shrink-0">
                {viewMode === 'iframe' && (
                  <button
                    onClick={reloadIframe}
                    title="Reload webview"
                    className="p-1 rounded text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                  </button>
                )}
                <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">1440×900</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>

            {/* Viewport Screen Content */}
            <div
              data-lenis-prevent="true"
              className="relative w-full h-[380px] sm:h-[460px] bg-slate-950 overflow-y-auto overscroll-contain"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {viewMode === 'iframe' && project.liveUrl ? (
                <iframe
                  key={iframeKey}
                  src={project.liveUrl}
                  title={project.title}
                  className="w-full h-full border-0 bg-white"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              ) : project.image ? (
                <div className="relative w-full min-h-[500px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1440}
                    height={900}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                  <div className="sticky bottom-3 left-1/2 -translate-x-1/2 w-max px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-400 pointer-events-none shadow-lg">
                    Scroll inside to inspect responsive layout
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center text-slate-400">
                  <Sparkles className="w-8 h-8 text-blue-400 mb-2 animate-bounce" />
                  <p className="text-sm font-medium text-white">{project.title}</p>
                  <p className="text-xs text-slate-500">Live preview viewport container</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Mobile iPhone Chassis */
          <div className="w-[280px] sm:w-[310px] h-[480px] sm:h-[540px] rounded-[42px] bg-slate-950 p-3 border-4 border-slate-700/80 shadow-[0_0_50px_rgba(0,0,0,0.8)] ring-1 ring-white/20 transition-all duration-300 relative flex flex-col">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 flex items-center justify-between px-3 w-24 h-5 rounded-full bg-black border border-white/10 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-slate-900 border border-white/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
            </div>

            {/* Inner Phone Screen */}
            <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-slate-900 border border-white/10 flex flex-col">
              {/* Mobile Status Bar */}
              <div className="shrink-0 pt-2.5 pb-1 px-4 z-20 flex items-center justify-between text-[10px] font-mono font-bold text-white bg-slate-950/90 border-b border-white/5">
                <span>9:41</span>
                <span className="text-[9px] text-slate-400 font-mono">5G 100%</span>
              </div>

              {/* Scrollable Screen Content */}
              <div
                data-lenis-prevent="true"
                className="flex-1 overflow-y-auto overscroll-contain bg-slate-950 relative"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                {viewMode === 'iframe' && project.liveUrl ? (
                  <iframe
                    key={iframeKey}
                    src={project.liveUrl}
                    title={project.title}
                    className="w-full h-full border-0 bg-white"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                ) : project.image ? (
                  <div className="relative w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={390}
                      height={844}
                      className="w-full h-auto object-cover object-top"
                      priority
                    />
                    {/* Floating Mobile Card Overlay */}
                    <div className="sticky bottom-4 mx-3 p-2.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-left shadow-lg">
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
              <div className="shrink-0 py-1 flex justify-center bg-slate-950">
                <div className="w-24 h-1 rounded-full bg-white/40" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
