'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, uiTranslations } from '@/data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key: string, fallback?: string) => fallback || key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  // Load persisted language from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('marvel_lang') as Language;
      if (saved === 'en' || saved === 'am') {
        setLanguageState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // Ignore storage errors in private mode
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('marvel_lang', lang);
      document.documentElement.lang = lang;
    } catch {
      // Ignore storage errors
    }
  };

  const toggleLanguage = () => {
    const nextLang: Language = language === 'en' ? 'am' : 'en';
    setLanguage(nextLang);
  };

  const t = (key: string, fallback?: string): string => {
    const dict = uiTranslations[language];
    if (dict && dict[key]) {
      return dict[key];
    }
    const enDict = uiTranslations.en;
    if (enDict && enDict[key]) {
      return enDict[key];
    }
    return fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
