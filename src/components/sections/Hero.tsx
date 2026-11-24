'use client';

import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { companyData } from '@/data/company';
import { ArrowRight, Terminal, Layers, Activity, ShieldCheck, Zap, Server } from 'lucide-react';

export function Hero() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'telemetry'>('architecture');

  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Tagline Badge */}
          <div className="mb-6 animate-fade-in">
            <Badge variant="cyan" dot={true}>
              Marvel Technologies · Innovation Without Limits
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.08]">
            Building Next-Generation{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
              Digital Systems
            </span>{' '}
            Without Limits.
          </h1>

          {/* Supporting Narrative */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
            We transform ambitious concepts into resilient digital products through modern full-stack engineering, cloud architecture, and human-centered design.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="#contact"
              size="lg"
              variant="primary"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              Start Your Project
            </Button>
            <Button
              href="#projects"
              size="lg"
              variant="outline"
            >
              Explore Solutions
            </Button>
          </div>

          {/* Tech Trust Metrics */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Type-Safe Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-400" />
              <span>Sub-second Response Times</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>99.9% Uptime Design</span>
            </div>
          </div>

          {/* Interactive Technology Preview Terminal Widget */}
          <div className="mt-16 w-full max-w-4xl mx-auto rounded-3xl bg-[#090e1c]/90 border border-white/15 p-4 sm:p-6 shadow-[0_20px_60px_-15px_rgba(0,102,255,0.3)] backdrop-blur-2xl text-left">
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
                  Architecture Mesh
                </button>
                <button
                  onClick={() => setActiveTab('telemetry')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    activeTab === 'telemetry'
                      ? 'bg-blue-600/30 text-cyan-400 border border-blue-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Real-time Telemetry
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
                      <span className="text-cyan-400 font-semibold">01 / FRONTEND LAYER</span>
                      <Layers className="w-4 h-4 text-cyan-400" />
                    </div>
                    <p className="text-slate-400 text-[11px] mb-2">
                      Next.js App Router, React 19 Server Components, Edge CDN Caching
                    </p>
                    <div className="flex items-center gap-2 text-emerald-400 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>TTFB: 42ms · Optimized</span>
                    </div>
                  </div>

                  {/* Node 2 */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-400 font-semibold">02 / BACKEND & API</span>
                      <Server className="w-4 h-4 text-blue-400" />
                    </div>
                    <p className="text-slate-400 text-[11px] mb-2">
                      TypeScript Microservices, Distributed Redis, Idempotent Queues
                    </p>
                    <div className="flex items-center gap-2 text-emerald-400 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Cluster: 3 Nodes Healthy</span>
                    </div>
                  </div>

                  {/* Node 3 */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-indigo-400 font-semibold">03 / PERSISTENCE</span>
                      <Terminal className="w-4 h-4 text-indigo-400" />
                    </div>
                    <p className="text-slate-400 text-[11px] mb-2">
                      PostgreSQL Relational DB, Prisma ORM, Automated Backups
                    </p>
                    <div className="flex items-center gap-2 text-emerald-400 text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Replication: Synchronous</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 text-slate-300 text-xs bg-black/40 p-4 rounded-xl border border-white/5">
                  <div className="text-slate-500">// Real-time operational logs</div>
                  <div className="text-emerald-400">[2026-11-24T12:00:01Z] [OK] System health check verified. 0 defects reported.</div>
                  <div className="text-cyan-400">[2026-11-24T12:00:02Z] [DEPLOY] CI/CD pipeline succeeded (build time: 24.3s).</div>
                  <div className="text-blue-400">[2026-11-24T12:00:03Z] [LATENCY] Global edge p99 response: 18.2ms.</div>
                  <div className="text-slate-400">[2026-11-24T12:00:04Z] [SECURITY] Zero vulnerable dependencies detected.</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
