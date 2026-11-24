'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { navItems } from '@/data/navigation';
import { companyData } from '@/data/company';
import { Button } from '../ui/Button';
import { BrandLogo } from '../ui/BrandLogo';
import { X, ArrowUpRight, Mail, Phone, Send, ArrowLeft } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return;

    if (typeof window !== 'undefined' && window.__lenis) {
      window.__lenis.stop();
    }
    const prevBody = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      if (typeof window !== 'undefined' && window.__lenis) {
        window.__lenis.start();
      }
      document.body.style.overflow = prevBody;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" data-lenis-prevent="true">
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
        data-lenis-prevent="true"
      />

      {/* Slide-in menu container */}
      <div
        data-lenis-prevent="true"
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#060b17] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto overscroll-contain animate-in slide-in-from-right duration-200"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <BrandLogo size="sm" asLink={false} />
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-slate-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-medium transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
              <span>Close</span>
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-1.5 py-6">
            {navItems
              .filter((item) => !item.isAction)
              .map((item) => {
                const targetId = item.href.replace('#', '');
                const isActive = activeSection === targetId;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-blue-600/15 text-cyan-400 border border-blue-500/20'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
          </div>
        </div>

        {/* Footer Contact Info */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <Button
            href="#contact"
            variant="primary"
            size="md"
            className="w-full"
            iconRight={<ArrowUpRight className="w-4 h-4" />}
            onClick={onClose}
          >
            Get In Touch
          </Button>

          <div className="space-y-2.5 text-xs text-slate-400 pt-2">
            <a
              href={`mailto:${companyData.contactEmail}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{companyData.contactEmail}</span>
            </a>
            <a
              href={`tel:${companyData.contactPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{companyData.contactPhone}</span>
            </a>
            <a
              href={companyData.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Send className="w-3.5 h-3.5 text-sky-400" />
              <span>{companyData.telegramUsername}</span>
            </a>
            <div className="text-[11px] font-mono text-slate-500 pt-1">
              {companyData.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
