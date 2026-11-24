'use client';

import React from 'react';
import Link from 'next/link';
import { navItems } from '@/data/navigation';
import { companyData } from '@/data/company';
import { Button } from '../ui/Button';
import { BrandLogo } from '../ui/BrandLogo';
import { X, ArrowUpRight, Mail, Phone, Send } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in menu container */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#060b17] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <BrandLogo size="sm" asLink={false} />
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
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

          <div className="space-y-2 text-xs text-slate-400 pt-2">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{companyData.contactEmail}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{companyData.contactPhone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Send className="w-3.5 h-3.5 text-indigo-400" />
              <span>{companyData.telegramUsername}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
