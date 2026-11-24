'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Modal } from '../ui/Modal';
import { projectsData } from '@/data/projects';
import { ProjectItem } from '@/types';
import { ExternalLink, CheckCircle, Eye, ArrowRight, ShieldCheck, Sparkles, Smartphone, Layers, FileText } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { DeviceFramePreview } from '../ui/DeviceFramePreview';

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [modalTab, setModalTab] = useState<'case-study' | 'device-preview'>('case-study');

  const categories = ['All', 'Full-Stack', 'E-Commerce', 'Enterprise & Cloud', 'Mobile & PWA'];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-[#03060f]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Production Portfolio"
          title="Real Systems Shipped &"
          highlight="Deployed to Production."
          subtitle="Explore high-impact production web applications, enterprise platforms, and digital products engineered with our modern stack."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(0,102,255,0.35)] border border-blue-400'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between group border-white/10 hover:border-blue-500/35 overflow-hidden"
            >
              <div>
                {/* Project Screenshot Container */}
                {project.image && (
                  <div className="relative w-full h-56 sm:h-64 bg-slate-950 overflow-hidden border-b border-white/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090e1c] via-transparent to-transparent opacity-80" />

                    {/* Category Pill Over Image */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-300 bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 px-3 py-1 rounded-full shadow-lg">
                        {project.category}
                      </span>
                    </div>

                    {/* Status Pill */}
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-mono text-emerald-400 bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {project.status}
                      </span>
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-blue-400 mb-4">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features Highlights */}
                  <div className="space-y-2 mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Key Engineering Highlights:
                    </span>
                    {project.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-slate-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-white/5">
                <div className="flex items-center gap-2.5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600/20 hover:bg-blue-600/40 text-cyan-300 border border-blue-500/30 text-xs font-medium transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Live</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 text-xs font-medium border border-white/10 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setModalTab('device-preview');
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-950/40 hover:bg-cyan-900/50 text-cyan-400 border border-cyan-500/30 text-xs font-medium transition-colors cursor-pointer"
                    title="Interactive Desktop & Mobile Chassis Preview"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Device View</span>
                  </button>

                  {project.caseStudy && (
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setModalTab('case-study');
                      }}
                      className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
                    >
                      <span>Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Interactive Project Modal (Case Study + Device Preview) */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          badge={`Project Detail · ${selectedProject.category}`}
          closeLabel="Close & Return to Projects"
          size="5xl"
        >
          <div className="space-y-6">
            {/* Modal Tab Switcher */}
            <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-3 gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setModalTab('case-study')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    modalTab === 'case-study'
                      ? 'bg-blue-600/30 text-cyan-300 border border-blue-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Architecture & Case Study</span>
                </button>

                <button
                  onClick={() => setModalTab('device-preview')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    modalTab === 'device-preview'
                      ? 'bg-blue-600/30 text-cyan-300 border border-blue-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Interactive Device Simulator (Desktop & Mobile)</span>
                </button>
              </div>

              <span className="text-[11px] font-mono text-emerald-400 hidden sm:inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {selectedProject.status}
              </span>
            </div>

            {/* Tab 1: Architecture & Case Study */}
            {modalTab === 'case-study' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <p className="text-xs font-mono text-cyan-400">
                  {selectedProject.tagline}
                </p>

                {selectedProject.caseStudy ? (
                  <div className="space-y-4">
                    {/* Problem */}
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-1">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold">
                        The Challenge
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {selectedProject.caseStudy.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 space-y-1">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
                        Engineering Solution
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {selectedProject.caseStudy.solution}
                      </p>
                    </div>

                    {/* Outcome */}
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                        Measurable Outcome & Impact
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {selectedProject.caseStudy.outcome}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                )}

                {/* Switch to device view quick trigger */}
                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => setModalTab('device-preview')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/40 hover:bg-cyan-900/50 text-cyan-400 border border-cyan-500/30 text-xs font-medium transition-colors cursor-pointer"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Open in Device Simulator →</span>
                  </button>
                </div>

                {/* Key Stack */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                    Production Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-cyan-300 bg-white/[0.05] border border-white/10 px-2 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Interactive Device Viewport */}
            {modalTab === 'device-preview' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-1">
                  <button
                    onClick={() => setModalTab('case-study')}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-cyan-400" />
                    <span>← Back to Architecture & Case Study</span>
                  </button>
                </div>
                <DeviceFramePreview project={selectedProject} />
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                  <span>Back to Projects</span>
                </button>

                {selectedProject.githubUrl ? (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Inspect GitHub Repo</span>
                  </a>
                ) : (
                  <span className="text-xs text-slate-500 font-mono">Proprietary System</span>
                )}
              </div>

              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/25 transition-all"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
