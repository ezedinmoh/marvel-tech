'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData } from '@/data/projects';
import { companyData } from '@/data/company';
import {
  Search,
  Command,
  Compass,
  Laptop,
  Layers,
  Users,
  Mail,
  ExternalLink,
  Languages,
  Send,
  MessageCircle,
  HelpCircle,
  X,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface PaletteItem {
  id: string;
  category: 'Navigation' | 'Projects' | 'Actions';
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  action: () => void;
  badge?: string;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage } = useLanguage();

  // Listen for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus input & pause Lenis when opened
  useEffect(() => {
    if (isOpen) {
      if (typeof window !== 'undefined' && window.__lenis) {
        window.__lenis.stop();
      }
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);

      return () => {
        if (typeof window !== 'undefined' && window.__lenis) {
          window.__lenis.start();
        }
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen]);

  const scrollTo = (hash: string) => {
    setIsOpen(false);
    const element = document.querySelector(hash);
    if (element) {
      if (typeof window !== 'undefined' && window.__lenis) {
        window.__lenis.scrollTo(element as HTMLElement, { offset: -90 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.pushState(null, '', hash);
    }
  };

  // Build searchable items
  const items: PaletteItem[] = [
    // Navigation
    {
      id: 'nav-hero',
      category: 'Navigation',
      title: 'Top / Introduction',
      subtitle: 'Marvel Technologies headline & mission statement',
      icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
      action: () => scrollTo('#hero'),
    },
    {
      id: 'nav-ecosystem',
      category: 'Navigation',
      title: 'System Constellation Orbit',
      subtitle: 'Live 10-node telemetry ecosystem & scrubbable chart',
      icon: <Compass className="w-4 h-4 text-blue-400" />,
      badge: 'Interactive',
      action: () => scrollTo('#ecosystem'),
    },
    {
      id: 'nav-solutions',
      category: 'Navigation',
      title: 'Industry Solutions Matrix',
      subtitle: '8 enterprise verticals & delivery frameworks',
      icon: <Layers className="w-4 h-4 text-indigo-400" />,
      action: () => scrollTo('#solutions'),
    },
    {
      id: 'nav-projects',
      category: 'Navigation',
      title: 'Production Portfolio',
      subtitle: 'Shipped client web applications, code repos & device simulation',
      icon: <Laptop className="w-4 h-4 text-emerald-400" />,
      badge: '8 Projects',
      action: () => scrollTo('#projects'),
    },
    {
      id: 'nav-services',
      category: 'Navigation',
      title: 'Core Services & Capabilities',
      subtitle: 'Full-stack engineering, cloud architecture, UI/UX design',
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
      action: () => scrollTo('#services'),
    },
    {
      id: 'nav-team',
      category: 'Navigation',
      title: 'Engineering Team',
      subtitle: 'Meet our collaborative engineering and product collective',
      icon: <Users className="w-4 h-4 text-amber-400" />,
      action: () => scrollTo('#team'),
    },
    {
      id: 'nav-faq',
      category: 'Navigation',
      title: 'FAQ & Engagement Models',
      subtitle: 'Timelines, billing, IP ownership & technology stacks',
      icon: <HelpCircle className="w-4 h-4 text-purple-400" />,
      action: () => scrollTo('#faq'),
    },
    {
      id: 'nav-contact',
      category: 'Navigation',
      title: 'Direct Consultation & Contact',
      subtitle: 'Request engineering proposal or schedule technical kickoff',
      icon: <Mail className="w-4 h-4 text-blue-400" />,
      badge: 'Get in Touch',
      action: () => scrollTo('#contact'),
    },

    // Actions
    {
      id: 'act-lang',
      category: 'Actions',
      title: `Switch Language (${language === 'en' ? 'አማርኛ / Amharic' : 'English'})`,
      subtitle: `Currently viewing in ${language === 'en' ? 'English' : 'Amharic'}`,
      icon: <Languages className="w-4 h-4 text-amber-400" />,
      badge: language === 'en' ? 'አማ' : 'EN',
      action: () => {
        setLanguage(language === 'en' ? 'am' : 'en');
        setIsOpen(false);
      },
    },
    {
      id: 'act-tech-ezedin',
      category: 'Actions',
      title: 'Contact Ezedin Mohammed (Lead Software Engineer)',
      subtitle: '+251 983 029 638 · Software Architecture & Systems · Kombolcha, Ethiopia',
      icon: <Send className="w-4 h-4 text-cyan-400" />,
      badge: 'Technical Lead',
      action: () => {
        setIsOpen(false);
        window.open('https://t.me/ezedinmoh', '_blank');
      },
    },
    {
      id: 'act-biz-mohammed',
      category: 'Actions',
      title: 'Contact Mohammed Imam (Business Lead)',
      subtitle: '+251 941 670 897 · Strategic Growth & Client Partnerships',
      icon: <Send className="w-4 h-4 text-cyan-400" />,
      badge: 'Business Lead',
      action: () => {
        setIsOpen(false);
        window.open('https://t.me/Mohamediimam', '_blank');
      },
    },
    {
      id: 'act-ops-sudeys',
      category: 'Actions',
      title: 'Contact Sudeys Ibrahim (Operations Lead)',
      subtitle: '+251 99 350 6625 · Product Operations & Delivery Coordination',
      icon: <Send className="w-4 h-4 text-emerald-400" />,
      badge: 'Operations Lead',
      action: () => {
        setIsOpen(false);
        window.open('https://t.me/Ifshrmr', '_blank');
      },
    },
    {
      id: 'act-wa',
      category: 'Actions',
      title: 'Connect on WhatsApp',
      subtitle: `${companyData.contactPhone} · Direct engineering inquiry`,
      icon: <MessageCircle className="w-4 h-4 text-emerald-400" />,
      badge: 'Instant Chat',
      action: () => {
        setIsOpen(false);
        window.open(`https://wa.me/${companyData.contactPhone.replace(/[^0-9]/g, '')}?text=Hello%20Marvel%20Technologies`, '_blank');
      },
    },

    // Real Projects Direct Links
    ...projectsData.map((project) => ({
      id: `proj-${project.id}`,
      category: 'Projects' as const,
      title: project.title,
      subtitle: `${project.tagline} · ${project.technologies.slice(0, 3).join(', ')}`,
      icon: <ExternalLink className="w-4 h-4 text-cyan-400" />,
      badge: project.category,
      action: () => {
        setIsOpen(false);
        if (project.liveUrl) {
          window.open(project.liveUrl, '_blank');
        } else {
          scrollTo('#projects');
        }
      },
    })),
  ];

  // Filter items
  const filtered = items.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  // Handle keyboard navigation inside the list
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
      }
    }
  };

  // Group filtered items by category
  const categories: Array<'Navigation' | 'Actions' | 'Projects'> = ['Navigation', 'Actions', 'Projects'];

  return (
    <>
      {/* Floating Trigger Pill for Mobile / Desktop Quick Access */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-20 z-40 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 text-xs font-mono shadow-xl transition-all cursor-pointer group"
        title="Open Command Palette (Cmd+K)"
      >
        <Command className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
        <span className="text-[11px] text-slate-300">Quick Actions</span>
        <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-slate-400 font-mono">⌘K</kbd>
      </button>

      {/* Palette Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6" data-lenis-prevent="true">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
            onClick={() => setIsOpen(false)}
            data-lenis-prevent="true"
          />

          {/* Palette Dialog Box */}
          <div
            data-lenis-prevent="true"
            className="relative w-full max-w-2xl bg-slate-950/95 border border-white/15 rounded-2xl shadow-[0_0_60px_rgba(0,102,255,0.25)] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150"
          >
            {/* Header Search Input */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-slate-900/60">
              <Search className="w-5 h-5 text-cyan-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleInputKeyDown}
                placeholder={
                  language === 'am'
                    ? 'ትዕዛዝ፣ ፕሮጀክት ወይም ገጽ ይፈልጉ... (ለመምረጥ ↑ ↓ ይጠቀሙ)'
                    : 'Type a section, project, or action... (or ↑ ↓ to navigate)'
                }
                className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-500 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List Results */}
            <div
              ref={listRef}
              className="max-h-[60vh] overflow-y-auto p-2 space-y-4 divide-y divide-white/5"
            >
              {filtered.length === 0 ? (
                <div className="p-8 text-center text-slate-500 text-sm">
                  {language === 'am'
                    ? <>ምንም ተዛማጅ ውጤት አልተገኘም &ldquo;<span className="text-white">{query}</span>&rdquo;</>
                    : <>No matching results for &ldquo;<span className="text-white">{query}</span>&rdquo;</>}
                </div>
              ) : (
                categories.map((category) => {
                  const catItems = filtered.filter((i) => i.category === category);
                  if (catItems.length === 0) return null;

                  const catLabel =
                    language === 'am'
                      ? category === 'Navigation'
                        ? 'ማውጫ እና ገጾች'
                        : category === 'Projects'
                        ? 'የተሰሩ ፕሮጀክቶች'
                        : 'ፈጣን እርምጃዎች'
                      : category;

                  return (
                    <div key={category} className="pt-2 first:pt-0">
                      <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                        {catLabel}
                      </div>

                      <div className="space-y-1 mt-1">
                        {catItems.map((item) => {
                          const itemIndex = filtered.indexOf(item);
                          const isSelected = itemIndex === selectedIndex;

                          return (
                            <button
                              key={item.id}
                              onClick={item.action}
                              onMouseEnter={() => setSelectedIndex(itemIndex)}
                              className={`w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-blue-600/25 text-white border border-blue-500/40 shadow-sm'
                                  : 'text-slate-300 hover:bg-white/[0.04] border border-transparent'
                              }`}
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <div
                                  className={`p-2 rounded-lg ${
                                    isSelected ? 'bg-blue-500/20 text-cyan-300' : 'bg-white/[0.04] text-slate-400'
                                  }`}
                                >
                                  {item.icon}
                                </div>
                                <div className="min-w-0">
                                  <div className="text-sm font-medium text-white truncate flex items-center gap-2">
                                    <span>{item.title}</span>
                                    {item.badge && (
                                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                                        {item.badge}
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-xs text-slate-400 truncate">
                                    {item.subtitle}
                                  </div>
                                </div>
                              </div>

                              <ArrowRight
                                className={`w-4 h-4 shrink-0 transition-transform ${
                                  isSelected ? 'text-cyan-400 translate-x-0.5' : 'text-slate-600'
                                }`}
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer Quick Keys */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-t border-white/10 text-[11px] font-mono text-slate-500">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-slate-400">↑↓</kbd> Navigate
                </span>
                <span className="inline-flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-slate-400">↵</kbd> Select
                </span>
                <span className="inline-flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-slate-400">ESC</kbd> Close
                </span>
              </div>
              <span className="text-cyan-400/80 hidden sm:inline">Marvel Technologies Navigation Core</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
