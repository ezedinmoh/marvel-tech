'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BrandLogo } from '../ui/BrandLogo';
import { Button } from '../ui/Button';
import { getNavItems } from '@/data/translations';
import { Menu, X, ArrowUpRight, Languages, Search } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { useLanguage } from '@/context/LanguageContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { language, toggleLanguage, t } = useLanguage();
  const currentNavItems = getNavItems(language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section detection
      const sections = ['hero', 'about', 'services', 'ecosystem', 'industries', 'system', 'process', 'projects', 'tech', 'team', 'faq', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 transition-all duration-300 ${
          isScrolled ? 'pt-2 sm:pt-3' : 'pt-3 sm:pt-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Floating Pill Nav Container / Mobile Android Top Bar */}
          <nav
            className={`w-full flex items-center justify-between gap-2 sm:gap-4 px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-2xl sm:rounded-full border transition-all duration-300 ${
              isScrolled
                ? 'bg-[#060b17]/90 backdrop-blur-xl border-white/15 shadow-[0_8px_25px_rgba(0,0,0,0.6)]'
                : 'bg-[#080e1e]/75 backdrop-blur-md border-white/10 shadow-lg'
            }`}
          >
            {/* Brand Logo */}
            <BrandLogo size="md" />

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {currentNavItems
                .filter((item) => !item.isAction)
                .map((item) => {
                  const targetId = item.href.replace('#', '');
                  const isActive = activeSection === targetId;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20'
                          : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Cmd+K Quick Trigger */}
              <button
                onClick={() => {
                  window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
                }}
                className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-slate-400 hover:text-white transition-all cursor-pointer"
                title="Search & Quick Actions (Cmd+K)"
              >
                <Search className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[11px] text-slate-300">{t('navSearch')}</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-slate-400 font-mono">⌘K</kbd>
              </button>

              {/* Language Switcher Pill (EN / አማርኛ) */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-cyan-500/15 border border-white/15 hover:border-cyan-500/30 text-xs font-semibold text-slate-200 hover:text-cyan-300 transition-all cursor-pointer select-none"
                title="Switch Language / ቋንቋ ቀይር"
                aria-label="Switch Language"
              >
                <Languages className="w-3.5 h-3.5 text-cyan-400" />
                <span>{language === 'en' ? 'አማርኛ' : 'EN'}</span>
              </button>

              <Button
                href="#contact"
                size="sm"
                variant="primary"
                iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                {t('navLetsBuild')}
              </Button>
            </div>

            {/* Mobile Actions (Language Switcher & Hamburger Menu) */}
            <div className="flex lg:hidden items-center gap-2 shrink-0">
              {/* Mobile Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.08] active:bg-cyan-500/20 border border-white/15 text-xs font-semibold text-slate-200 active:scale-95 transition-all cursor-pointer select-none"
                aria-label="Toggle Language"
              >
                <Languages className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-semibold">{language === 'en' ? 'አማ' : 'EN'}</span>
              </button>

              {/* Mobile Menu Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all focus:outline-none cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
