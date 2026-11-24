'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BrandLogo } from '../ui/BrandLogo';
import { Button } from '../ui/Button';
import { navItems } from '@/data/navigation';
import { Menu, X, ArrowUpRight, Languages, Search } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { useLanguage } from '@/context/LanguageContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { language, toggleLanguage, t } = useLanguage();

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
        className={`fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 py-4 transition-all duration-300 ${
          isScrolled ? 'pt-3' : 'pt-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Floating Pill Nav Container */}
          <nav
            className={`w-full flex items-center justify-between gap-4 px-4 sm:px-6 py-2.5 rounded-full border transition-all duration-300 ${
              isScrolled
                ? 'bg-[#060b17]/85 backdrop-blur-xl border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                : 'bg-[#080e1e]/60 backdrop-blur-md border-white/10 shadow-lg'
            }`}
          >
            {/* Brand Logo */}
            <BrandLogo size="md" />

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems
                .filter((item) => !item.isAction)
                .map((item) => {
                  const targetId = item.href.replace('#', '');
                  const isActive = activeSection === targetId;

                  return (
                    <Link
                      key={item.label}
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
                <span className="text-[11px] text-slate-300">Search</span>
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
                {t('letsBuild')}
              </Button>
            </div>

            {/* Mobile Menu Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-slate-300"
                aria-label="Toggle Language"
              >
                <Languages className="w-3 h-3 text-cyan-400" />
                <span>{language === 'en' ? 'አማ' : 'EN'}</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
