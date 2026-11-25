'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';
import { getFaqData } from '@/data/translations';
import { ChevronDown } from 'lucide-react';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language, t } = useLanguage();
  const faqList = getFaqData(language);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 sm:py-24 lg:py-32 relative bg-[#040711]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('faqBadge')}
          title={t('faqTitle')}
          highlight={t('faqHighlight')}
          subtitle={t('faqSubtitle')}
        />

        <div className="space-y-3 sm:space-y-4">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#090e1c] border border-white/10 overflow-hidden transition-colors hover:border-white/20 dc-reveal"
                data-reveal="dropdown"
                style={{ '--reveal-delay': `${idx * 60}ms` } as React.CSSProperties}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-4 sm:px-6 py-3.5 sm:py-5 flex items-center justify-between gap-3 sm:gap-4 text-left font-medium text-white transition-colors active:bg-white/[0.04]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base lg:text-lg font-bold">{item.question}</span>
                  <div
                    className={`p-1 rounded-full bg-white/[0.05] text-cyan-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-blue-500/20' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3 sm:pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
