'use client';

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Users, Code, Sparkles, Shield, Cpu, Target } from 'lucide-react';

export function About() {
  const pillars = [
    {
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      title: 'Core Engineering Collective',
      description:
        'Marvel Technologies was founded by collaborative technology professionals combining distinct strengths in systems engineering, mobile development, backend cloud operations, and UI/UX design.',
    },
    {
      icon: <Code className="w-6 h-6 text-blue-400" />,
      title: 'Modern Engineering Discipline',
      description:
        'We reject legacy shortcuts and bloat. Every line of TypeScript, SQL schema, and React component is crafted with strict type safety, modular cohesion, and high maintainability.',
    },
    {
      icon: <Target className="w-6 h-6 text-indigo-400" />,
      title: 'Real Problem Solvers',
      description:
        'We do not build software for the sake of technology alone. We architect tools that automate repetitive labor, reduce operational friction, and generate measurable business momentum.',
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      title: 'Reliability & Ownership',
      description:
        'When you collaborate with us, you work directly with our engineering founders. No account managers, no hidden offshore handoffs, and 100% intellectual property ownership from day one.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Company Identity"
          title="Engineered by Technologists,"
          highlight="Built for the Future."
          subtitle="Marvel Technologies is a modern technology company driven by a shared belief that thoughtful software engineering can solve real-world organizational challenges without limits."
        />

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              We founded <span className="text-white font-semibold">Marvel Technologies</span> to bridge the gap between ambitious product ideas and production-grade software. Too often, businesses are forced to choose between rigid, slow legacy vendors or fragmented freelancers lacking architectural consistency.
            </p>
            <p className="text-slate-400 text-base">
              As a collaborative founding team combining deep software architecture, business leadership, and operations execution, we operate with surgical focus. We leverage modern toolchains—Next.js, React Native, TypeScript, PostgreSQL, and cloud serverless architectures—to craft systems that perform with blistering speed, scale gracefully under load, and feel exceptional to use.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-cyan-400">
              <span className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                #ZeroTechnicalDebt
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                #FullStackPurity
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                #HumanCenteredCode
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-900/20 via-[#0a0f1d] to-[#040711] border border-blue-500/20 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-blue-500/15 border border-blue-500/30 text-cyan-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Our Engineering Oath</h4>
                  <span className="text-xs text-slate-400 font-mono">Founding Principles</span>
                </div>
              </div>

              <blockquote className="italic text-sm text-slate-300 border-l-2 border-cyan-400 pl-4 my-4">
                &ldquo;We engineer every project as if we are its primary operators. We write clean code, document every endpoint, test rigorously, and build solutions that endure.&rdquo;
              </blockquote>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Four Founding Partners</span>
                <span className="font-mono text-cyan-400">Marvel Technologies</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="p-6 flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 w-fit mb-5">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
