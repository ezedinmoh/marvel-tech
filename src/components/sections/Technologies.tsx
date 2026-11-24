'use client';

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { technologiesData } from '@/data/technologies';
import {
  Globe,
  Code2,
  FileCode,
  Layout,
  Server,
  Database,
  Boxes,
  Smartphone,
  Bot,
  Layers,
  GitBranch,
  Container,
  Cloud,
} from 'lucide-react';

export function Technologies() {
  const getTechIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-cyan-400' };
    switch (iconName) {
      case 'Globe':
        return <Globe {...props} />;
      case 'Code2':
        return <Code2 {...props} className="w-5 h-5 text-blue-400" />;
      case 'FileCode':
        return <FileCode {...props} className="w-5 h-5 text-indigo-400" />;
      case 'Layout':
        return <Layout {...props} className="w-5 h-5 text-cyan-400" />;
      case 'Server':
        return <Server {...props} className="w-5 h-5 text-emerald-400" />;
      case 'Database':
        return <Database {...props} className="w-5 h-5 text-blue-400" />;
      case 'DatabaseZap':
        return <Database {...props} className="w-5 h-5 text-amber-400" />;
      case 'Boxes':
        return <Boxes {...props} className="w-5 h-5 text-indigo-400" />;
      case 'Smartphone':
        return <Smartphone {...props} className="w-5 h-5 text-cyan-400" />;
      case 'Bot':
        return <Bot {...props} className="w-5 h-5 text-emerald-400" />;
      case 'Layers':
        return <Layers {...props} className="w-5 h-5 text-blue-400" />;
      case 'GitBranch':
        return <GitBranch {...props} className="w-5 h-5 text-orange-400" />;
      case 'Container':
        return <Container {...props} className="w-5 h-5 text-blue-400" />;
      case 'Cloud':
        return <Cloud {...props} className="w-5 h-5 text-cyan-400" />;
      default:
        return <Code2 {...props} />;
    }
  };

  return (
    <section id="tech" className="py-24 sm:py-32 relative bg-[#040711]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technology Stack"
          title="Battle-Tested Tooling For"
          highlight="Uncompromising Speed."
          subtitle="We select tools based on performance, type safety, ecosystem health, and long-term maintainability."
        />

        {/* 4 Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologiesData.map((category) => (
            <Card key={category.category} className="p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                  {category.category}
                </h3>
                <p className="text-xs text-slate-400">{category.description}</p>
              </div>

              <div className="space-y-4">
                {category.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-colors flex items-start gap-4"
                  >
                    <div className="p-2 rounded-lg bg-black/40 border border-white/10 shrink-0">
                      {getTechIcon(tech.icon)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-sm font-bold text-white font-mono">
                          {tech.name}
                        </span>
                        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                          {tech.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
