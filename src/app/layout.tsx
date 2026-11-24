import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { AndroidBottomBar } from '@/components/layout/AndroidBottomBar';
import { Footer } from '@/components/layout/Footer';
import { BackgroundEffects } from '@/components/ui/BackgroundEffects';
import { FloatingSpeedDial } from '@/components/ui/FloatingSpeedDial';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { MouseSpotlight } from '@/components/ui/MouseSpotlight';
import { GlobalScrollReveal } from '@/components/ui/ScrollReveal';
import { CommandPalette } from '@/components/ui/CommandPalette';
import { LanguageProvider } from '@/context/LanguageContext';
import {
  SITE_URL,
  COMPANY_SEO,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Marvel Technologies | Software Development & Digital Solutions',
    template: '%s | Marvel Technologies',
  },
  description:
    'Marvel Technologies is an Ethiopian technology company delivering modern software development, web applications, ERP systems, business automation, and digital solutions for businesses in Ethiopia and worldwide.',
  applicationName: 'Marvel Technologies',
  keywords: [
    // Brand queries
    'Marvel Technologies',
    'Marvel Technology',
    'Marvel Tech',
    'Marvel Technologies Ethiopia',
    'Marvel Tech Ethiopia',
    'Marvel Technologies Kombolcha',
    'Marvel Tech Company',
    'Marvel Technologies Official Website',
    'Technologies Marvel',
    'Marvel Tech Solutions',
    // Location queries
    'Technology company in Kombolcha',
    'IT company in Kombolcha',
    'Software development company in Kombolcha',
    'Web development in Kombolcha',
    'Website development company in Kombolcha',
    'Digital solutions in Kombolcha',
    'Technology company in Ethiopia',
    'Software company in Ethiopia',
    'Web development company in Ethiopia',
    'IT solutions Ethiopia',
    'Ethiopian technology company',
    // Service queries
    'Custom Software Development',
    'Next.js 16 Web Engineering',
    'React 19 Web Applications',
    'ERP Systems Ethiopia',
    'Business Management Systems',
    'E-commerce Development',
    'Telegram Bot Development',
    'Business Automation',
    'Digital Transformation',
    'Mobile App Development',
    'React Native iOS Android',
    'Modern UI/UX Design',
  ],
  authors: [{ name: 'Marvel Technologies', url: SITE_URL }],
  creator: 'Marvel Technologies',
  publisher: 'Marvel Technologies Ltd.',
  alternates: {
    canonical: SITE_URL,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Marvel Technologies | Software Development & Digital Solutions',
    description:
      'Ethiopian technology company building modern software, Next.js web applications, ERP systems, and cloud solutions locally and globally.',
    url: SITE_URL,
    siteName: 'Marvel Technologies',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Marvel Technologies — Innovation Without Limits',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marvel Technologies | Software Development & Digital Solutions',
    description:
      'Ethiopian technology company delivering modern software, web platforms, and business automation in Ethiopia and worldwide.',
    creator: '@ezedinmoh',
    site: '@ezedinmoh',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
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
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="bg-[#040711] text-[#f8fafc] antialiased selection:bg-blue-600/30 selection:text-cyan-300 min-h-screen flex flex-col justify-between">
        <LanguageProvider>
          <SmoothScroll />
          <MouseSpotlight />
          <GlobalScrollReveal />
          <BackgroundEffects />
          <Navbar />
          <main className="flex-1 relative pb-14 sm:pb-0">{children}</main>
          <Footer />
          <FloatingSpeedDial />
          <AndroidBottomBar />
          <CommandPalette />
        </LanguageProvider>
      </body>
    </html>
  );
}
