'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { companyData } from '@/data/company';
import { useLanguage } from '@/context/LanguageContext';
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../ui/Icons';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = language === 'am' ? 'እባክዎ ሙሉ ስምዎን ያስገቡ' : 'Please provide your name';
    if (!formData.email.trim()) {
      newErrors.email = language === 'am' ? 'እባክዎ የኢሜይል አድራሻዎን ያስገቡ' : 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'am' ? 'እባክዎ ትክክለኛ የኢሜይል አድራሻ ያስገቡ' : 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = language === 'am' ? 'እባክዎ ርዕሰ ጉዳዩን ይግለጹ' : 'Please specify a subject';
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = language === 'am' ? 'እባክዎ ቢያንስ 10 ፊደላት ያለው መልእክት ያስገቡ' : 'Please provide a message with at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setStatusMessage('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setStatusMessage(t('contactSuccessAlert'));
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch {
      setStatus('error');
      setStatusMessage(t('contactErrorAlert'));
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-24 lg:py-32 relative bg-[#03060f]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('contactBadge')}
          title={t('contactTitle')}
          highlight={t('contactHighlight')}
          subtitle={t('contactSubtitle')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8 dc-reveal" data-reveal="left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Connect Directly</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Whether you need a custom enterprise platform, mobile application, or technical consulting, our team is ready to discuss architectural feasibility and project timelines.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${companyData.contactEmail}`}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-colors group"
              >
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-0.5">
                    Official Email
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {companyData.contactEmail}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${companyData.contactPhone.replace(/\s+/g, '')}`}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-colors group"
              >
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-0.5">
                    Telephone Line
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {companyData.contactPhone}
                  </span>
                </div>
              </a>

              <a
                href={companyData.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/30 transition-colors group"
              >
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-0.5">
                    Telegram Channel
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {companyData.telegramUsername}
                  </span>
                </div>
              </a>

              <a
                href={companyData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-colors group"
              >
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-0.5">
                    LinkedIn Network
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                    Marvel Technologies
                  </span>
                </div>
              </a>
            </div>

            {/* Direct Leadership Contacts */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/30 via-slate-900/60 to-slate-950 border border-cyan-500/30 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                Direct Executive & Partnerships Desk:
              </span>
              <div className="space-y-2.5 text-xs">
                {/* Ezedin Mohammed - Technical Lead */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div>
                    <span className="font-semibold text-white block">Ezedin Mohammed</span>
                    <span className="text-[10px] text-cyan-400 font-mono">Co-Founder & Lead Software Engineer · Kombolcha</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      href="https://t.me/ezedinmoh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                      title="Telegram @ezedinmoh"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="tel:+251983029638"
                      className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                      title="Call +251 983 029 638"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://github.com/ezedinmoh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                      title="GitHub @ezedinmoh"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Mohammed Imam - Business Lead */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div>
                    <span className="font-semibold text-white block">Mohammed Imam</span>
                    <span className="text-[10px] text-cyan-400 font-mono">Co-Founder & Business Lead</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      href="https://t.me/Mohamediimam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                      title="Telegram @Mohamediimam"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="tel:+251941670897"
                      className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                      title="Call +251 941 670 897"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Sudeys Ibrahim - Operations Lead */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div>
                    <span className="font-semibold text-white block">Sudeys Ibrahim</span>
                    <span className="text-[10px] text-slate-400 font-mono">Co-Founder & Operations Lead</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      href="https://t.me/Ifshrmr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                      title="Telegram @Ifshrmr"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="tel:+251993506625"
                      className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                      title="Call +251 99 350 6625"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 dc-reveal" data-reveal="right" style={{ transitionDelay: '100ms' }}>
            <Card className="p-5 sm:p-10 rounded-2xl sm:rounded-3xl border-white/15">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    {t('contactFullName')} <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('contactFullNamePlaceholder')}
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.name ? 'border-rose-500' : 'border-white/10 focus:border-blue-500'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    {t('contactWorkEmail')} <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t('contactWorkEmailPlaceholder')}
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-white/10 focus:border-blue-500'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    {t('contactSubject')} <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={t('contactSubjectPlaceholder')}
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.subject ? 'border-rose-500' : 'border-white/10 focus:border-blue-500'
                    }`}
                  />
                  {errors.subject && <p className="mt-1 text-xs text-rose-400">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    {t('contactMessage')} <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('contactMessagePlaceholder')}
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-y ${
                      errors.message ? 'border-rose-500' : 'border-white/10 focus:border-blue-500'
                    }`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-rose-400">{errors.message}</p>}
                </div>

                {/* Status Banners */}
                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-400 text-xs sm:text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-rose-400 text-xs sm:text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Submit Action */}
                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  className="w-full"
                  disabled={status === 'loading'}
                  icon={status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : undefined}
                  iconRight={status !== 'loading' ? <ArrowRight className="w-4 h-4" /> : undefined}
                >
                  {status === 'loading' ? t('contactSubmitting') : t('contactSubmitBtn')}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
