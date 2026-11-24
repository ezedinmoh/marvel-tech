'use client';

import React from 'react';
import Link from 'next/link';
import { BrandLogo } from '../ui/BrandLogo';
import { companyData } from '@/data/company';
import { servicesData } from '@/data/services';
import { footerQuickLinks, legalLinks } from '@/data/navigation';
import { Mail, Phone, Send, ArrowUp, Activity } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#03060f] text-slate-400 overflow-hidden">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Company Profile & Status */}
          <div className="lg:col-span-2 space-y-6">
            <BrandLogo size="md" />

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {companyData.description}
            </p>

            {/* Live Operational Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{companyData.statusText}</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={companyData.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/30 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={companyData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/30 flex items-center justify-center text-slate-300 hover:text-blue-400 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={companyData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-500/30 flex items-center justify-center text-slate-300 hover:text-indigo-400 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-4">
              Solutions & Engineering
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href="#services"
                    className="hover:text-blue-400 transition-colors inline-block py-0.5"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${companyData.contactEmail}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="truncate">{companyData.contactEmail}</span>
              </a>

              <a
                href={`tel:${companyData.contactPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{companyData.contactPhone}</span>
              </a>

              <a
                href={companyData.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <Send className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{companyData.telegramUsername}</span>
              </a>

              <div className="pt-2 text-xs text-slate-500 font-mono">
                {companyData.location}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>
              &copy; {new Date().getFullYear()} {companyData.legalName} All rights reserved.
            </span>
            <div className="flex items-center gap-4">
              {legalLinks.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-slate-400 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
