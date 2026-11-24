'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'am';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    tagline: 'Innovation Without Limits',
    services: 'Services',
    ecosystem: 'Ecosystem',
    solutions: 'Solutions',
    process: 'Process',
    work: 'Work',
    portfolio: 'Projects',
    team: 'Team',
    faq: 'FAQ',
    contact: 'Contact',
    startProject: 'Start a Project',
    letsBuild: "Let's Build",
    heroHeadline: 'Building Next-Generation Digital Systems Without Limits.',
    heroSubhead: 'We transform ambitious concepts into resilient digital products through modern full-stack engineering, cloud architecture, and human-centered design.',
    exploreWork: 'Explore Solutions',
    startYourProject: 'Start Your Project',
    typeSafe: 'Type-Safe Architecture',
    subSecond: 'Sub-second Response Times',
    uptime: '99.9% Uptime Design',
  },
  am: {
    tagline: 'ወሰን የለሽ ፈጠራ',
    services: 'አገልግሎቶች',
    ecosystem: 'ሥነ-ምህዳር',
    solutions: 'መፍትሔዎች',
    process: 'ሂደት',
    work: 'ሥራዎች',
    portfolio: 'ፕሮጀክቶች',
    team: 'ቡድናችን',
    faq: 'ጥያቄዎች',
    contact: 'አግኙን',
    startProject: 'ፕሮጀክት ይጀምሩ',
    letsBuild: 'እንገንባ',
    heroHeadline: 'የወደፊቱን ዲጂታል ሥርዓቶች ያለ ገደብ መገንባት።',
    heroSubhead: 'ታላላቅ የንግድ ሃሳቦችን ወደ ዘመናዊና አስተማማኝ ሶፍትዌሮች፣ የሞባይል አፕሊኬሽኖች እና አውቶሜሽን እንለውጣለን።',
    exploreWork: 'ሥራዎቻችንን ይመልከቱ',
    startYourProject: 'አሁኑኑ ይጀምሩ',
    typeSafe: 'አስተማማኝ አርክቴክቸር',
    subSecond: 'እጅግ ፈጣን አፈፃፀም',
    uptime: '99.9% አስተማማኝነት',
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'am' : 'en'));
  };

  const t = (key: string) => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
