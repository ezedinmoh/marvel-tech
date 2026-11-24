'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Modal } from '../ui/Modal';
import { useLanguage } from '@/context/LanguageContext';
import { getServicesData } from '@/data/translations';
import { ServiceItem } from '@/types';
import {
  Globe,
  Smartphone,
  Palette,
  Cpu,
  Server,
  Zap,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
} from 'lucide-react';

export function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const { language, t } = useLanguage();
  const servicesList = getServicesData(language);

  // Icon mapper
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'Globe':
        return <Globe {...props} className="w-6 h-6 text-cyan-400" />;
      case 'Smartphone':
        return <Smartphone {...props} className="w-6 h-6 text-blue-400" />;
      case 'Palette':
        return <Palette {...props} className="w-6 h-6 text-indigo-400" />;
      case 'Cpu':
        return <Cpu {...props} className="w-6 h-6 text-violet-400" />;
      case 'Server':
        return <Server {...props} className="w-6 h-6 text-emerald-400" />;
      case 'Zap':
        return <Zap {...props} className="w-6 h-6 text-amber-400" />;
      default:
        return <Sparkles {...props} className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 relative bg-[#03060f]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('servicesBadge')}
          title={t('servicesTitle')}
          highlight={t('servicesHighlight')}
          subtitle={t('servicesSubtitle')}
        />

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <Card
              key={service.id}
              className="p-8 flex flex-col justify-between group cursor-pointer border-white/[0.08] hover:border-blue-500/30 dc-reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
              onClick={() => setSelectedService(service)}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {renderIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors tracking-tight">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Micro Capabilities Pill Preview */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.capabilities.slice(0, 3).map((cap) => (
                    <span
                      key={cap}
                      className="text-[11px] font-mono text-slate-400 bg-white/[0.03] border border-white/5 px-2.5 py-1 rounded-lg"
                    >
                      {cap.split(' ')[0]} {cap.split(' ')[1] || ''}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors">
                <span>{t('servicesViewArchitecture')}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal View for Detailed Service Inspection */}
      {selectedService && (
        <Modal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
          badge={selectedService.badge || 'Engineering Capability'}
          closeLabel="Close & Return to Services"
          size="2xl"
        >
          <div className="space-y-6">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {selectedService.fullDescription}
            </p>

            {/* Architectural Capabilities */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" /> {t('servicesScopeTitle')}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> {t('servicesDeliverablesTitle')}
              </h4>
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                {selectedService.deliverables.map((del) => (
                  <div key={del} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar in Modal */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10">
              <button
                onClick={() => setSelectedService(null)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
              >
                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                <span>{t('navClose')}</span>
              </button>

              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/25 transition-all"
              >
                {t('servicesInquirePrefix')} {selectedService.title}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
