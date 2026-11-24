'use client';

import React from 'react';
import { Send, MessageCircle, Phone } from 'lucide-react';
import { companyData } from '@/data/company';
import { useLanguage } from '@/context/LanguageContext';

export function FloatingSpeedDial() {
  const { t } = useLanguage();

  return (
    <>
      {/* ============================================================== */}
      {/* MOBILE COMPACT FLOATING ACTIONS (<= 640px)                     */}
      {/* Sleek, unobtrusive right-edge stack that clears bottom nav bar */}
      {/* and keeps 100% of left text & headings free from obstruction   */}
      {/* ============================================================== */}
      <div 
        className="sm:hidden fixed bottom-[74px] right-3 z-30 flex flex-col items-center gap-2 select-none"
        aria-label="Mobile Quick Channels"
      >
        {/* Telegram Direct Action Button (Mobile) */}
        <a
          href={companyData.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-[#0088cc]/95 active:scale-90 text-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,136,204,0.4)] backdrop-blur-md border border-white/25 transition-transform"
          aria-label={t('speedDialTelegram')}
          title={t('speedDialTelegram')}
        >
          <Send className="w-4 h-4 translate-x-[0.5px] -translate-y-[0.5px]" />
        </a>

        {/* WhatsApp / Call Direct Action Button (Mobile) */}
        <a
          href={`https://wa.me/${companyData.contactPhone.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-[#25D366]/95 active:scale-90 text-white flex items-center justify-center shadow-[0_4px_16px_rgba(37,211,102,0.4)] backdrop-blur-md border border-white/25 transition-transform"
          aria-label={t('speedDialWhatsApp')}
          title={t('speedDialWhatsApp')}
        >
          <Phone className="w-4 h-4" />
        </a>

        {/* Quick Consultation / Contact Form Trigger (Mobile) */}
        <a
          href="#contact"
          className="w-9.5 h-9.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 active:scale-90 text-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,166,255,0.45)] backdrop-blur-md border border-white/30 transition-transform"
          aria-label={t('speedDialConsultation')}
          title={t('speedDialConsultation')}
        >
          <MessageCircle className="w-4.5 h-4.5" />
        </a>
      </div>

      {/* ============================================================== */}
      {/* DESKTOP & TABLET FLOATING ACTIONS (>= 640px)                   */}
      {/* Classic wide-margin floating layout with hover effects         */}
      {/* ============================================================== */}

      {/* Floating Bottom Left Direct Channels (WhatsApp & Telegram) - Desktop */}
      <div className="hidden sm:flex fixed bottom-6 left-6 z-30 flex-col gap-2.5">
        {/* Telegram Direct Action Button */}
        <a
          href={companyData.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#0088cc] hover:bg-[#0077b5] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(0,136,204,0.5)] hover:scale-110 active:scale-95 transition-all group border border-white/20"
          aria-label={t('speedDialTelegram')}
          title={t('speedDialTelegram')}
        >
          <Send className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        {/* WhatsApp Direct Action Button */}
        <a
          href={`https://wa.me/${companyData.contactPhone.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all group border border-white/20"
          aria-label={t('speedDialWhatsApp')}
          title={t('speedDialWhatsApp')}
        >
          <Phone className="w-5 h-5 transition-transform group-hover:scale-110" />
        </a>
      </div>

      {/* Floating Bottom Right Consultation Trigger - Desktop */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-30">
        <a
          href="#contact"
          className="w-13 h-13 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white flex items-center justify-center shadow-[0_8px_30px_rgba(0,102,255,0.6)] hover:scale-110 active:scale-95 transition-all group border border-white/25"
          aria-label={t('speedDialConsultation')}
          title={t('speedDialConsultation')}
        >
          <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
        </a>
      </div>
    </>
  );
}
