'use client';

import React, { useState, useEffect } from 'react';
import { Home, Layers, Activity, FolderKanban, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function AndroidBottomBar() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'ecosystem' | 'projects' | 'contact'>('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;

      const contactEl = document.getElementById('contact');
      const faqEl = document.getElementById('faq');
      const teamEl = document.getElementById('team');
      const techEl = document.getElementById('tech');
      const projectsEl = document.getElementById('projects');
      const systemEl = document.getElementById('system');
      const industriesEl = document.getElementById('industries');
      const ecosystemEl = document.getElementById('ecosystem');
      const processEl = document.getElementById('process');
      const servicesEl = document.getElementById('services');
      const aboutEl = document.getElementById('about');

      if (contactEl && contactEl.offsetTop <= scrollPos) {
        setActiveTab('contact');
      } else if (faqEl && faqEl.offsetTop <= scrollPos) {
        setActiveTab('contact');
      } else if (teamEl && teamEl.offsetTop <= scrollPos) {
        setActiveTab('contact');
      } else if (techEl && techEl.offsetTop <= scrollPos) {
        setActiveTab('projects');
      } else if (projectsEl && projectsEl.offsetTop <= scrollPos) {
        setActiveTab('projects');
      } else if (systemEl && systemEl.offsetTop <= scrollPos) {
        setActiveTab('ecosystem');
      } else if (industriesEl && industriesEl.offsetTop <= scrollPos) {
        setActiveTab('ecosystem');
      } else if (ecosystemEl && ecosystemEl.offsetTop <= scrollPos) {
        setActiveTab('ecosystem');
      } else if (processEl && processEl.offsetTop <= scrollPos) {
        setActiveTab('services');
      } else if (servicesEl && servicesEl.offsetTop <= scrollPos) {
        setActiveTab('services');
      } else if (aboutEl && aboutEl.offsetTop <= scrollPos) {
        setActiveTab('home');
      } else {
        setActiveTab('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      id: 'home',
      label: t('navHome', 'Home'),
      icon: Home,
      href: '#hero',
    },
    {
      id: 'services',
      label: t('navServices', 'Services'),
      icon: Layers,
      href: '#services',
    },
    {
      id: 'ecosystem',
      label: t('navEcosystem', 'Ecosystem'),
      icon: Activity,
      href: '#ecosystem',
    },
    {
      id: 'projects',
      label: t('navProjects', 'Projects'),
      icon: FolderKanban,
      href: '#projects',
    },
    {
      id: 'contact',
      label: t('navContact', 'Contact'),
      icon: MessageSquare,
      href: '#contact',
    },
  ] as const;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: typeof activeTab) => {
    setActiveTab(id);
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Android Bottom Navigation"
      className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-[#060b17]/95 backdrop-blur-2xl border-t border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.6)] px-2 pt-1.5 pb-[max(env(safe-area-inset-bottom),10px)] select-none"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;

          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleClick(e, item.href, item.id)}
              className="flex-1 flex flex-col items-center justify-center py-1 group focus:outline-none cursor-pointer"
            >
              <div
                className={`flex items-center justify-center px-3.5 py-1 rounded-full transition-all duration-200 active:scale-90 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600/35 to-cyan-500/35 text-cyan-300 ring-1 ring-cyan-400/40 shadow-[0_0_14px_rgba(0,210,255,0.25)]'
                    : 'text-slate-400 group-hover:text-slate-200'
                }`}
              >
                <Icon
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isActive ? 'scale-110' : 'group-hover:scale-105'
                  }`}
                />
              </div>
              <span
                className={`text-[10px] tracking-tight mt-1 transition-colors duration-200 font-medium ${
                  isActive ? 'text-cyan-300 font-bold' : 'text-slate-400'
                }`}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
