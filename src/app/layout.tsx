import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BackgroundEffects } from '@/components/ui/BackgroundEffects';
import { FloatingSpeedDial } from '@/components/ui/FloatingSpeedDial';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { MouseSpotlight } from '@/components/ui/MouseSpotlight';
import { GlobalScrollReveal } from '@/components/ui/ScrollReveal';
import { CommandPalette } from '@/components/ui/CommandPalette';
import { LanguageProvider } from '@/context/LanguageContext';
import { companyData } from '@/data/company';

export const metadata: Metadata = {
  title: `${companyData.name} — ${companyData.tagline}`,
  description: companyData.description,
  keywords: [
    'Marvel Technologies',
    'Software Engineering',
    'Next.js Web Development',
    'React Native Mobile Apps',
    'Cloud Systems',
    'Enterprise Software',
    'API Architecture',
  ],
  authors: [{ name: companyData.name }],
  creator: companyData.name,
  publisher: companyData.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${companyData.name} — ${companyData.tagline}`,
    description: companyData.description,
    siteName: companyData.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${companyData.name} — ${companyData.tagline}`,
    description: companyData.description,
    creator: '@ezedinmoh',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#040711',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#040711] text-[#f8fafc] antialiased selection:bg-blue-600/30 selection:text-cyan-300 min-h-screen flex flex-col justify-between">
        <LanguageProvider>
          <SmoothScroll />
          <MouseSpotlight />
          <GlobalScrollReveal />
          <BackgroundEffects />
          <Navbar />
          <main className="flex-1 relative">{children}</main>
          <Footer />
          <FloatingSpeedDial />
          <CommandPalette />
        </LanguageProvider>
      </body>
    </html>
  );
}
