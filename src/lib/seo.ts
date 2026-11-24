/**
 * Centralized SEO & Search Visibility Configuration for Marvel Technologies
 * Official Domain: https://www.marvel-tech.tech
 */

export const SITE_URL = 'https://www.marvel-tech.tech';

export const COMPANY_SEO = {
  name: 'Marvel Technologies',
  alternateName: 'Marvel Tech',
  legalName: 'Marvel Technologies Ltd.',
  tagline: 'Innovation Without Limits',
  description:
    'Marvel Technologies is an Ethiopian technology company based in Kombolcha, Ethiopia, engineering modern software development, web applications, ERP systems, business automation, and digital solutions for enterprises in Ethiopia and worldwide.',
  shortDescription:
    'Ethiopian technology company building modern software, Next.js web applications, ERP systems, and cloud solutions globally.',
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo.svg`,
  logoFallback: `${SITE_URL}/icon.png`,
  ogImage: `${SITE_URL}/og-image.png`,
  address: {
    addressLocality: 'Kombolcha',
    addressRegion: 'Amhara',
    addressCountry: 'ET',
    countryName: 'Ethiopia',
  },
  geo: {
    latitude: '11.0833',
    longitude: '39.7333',
  },
  contact: {
    email: 'ezedinmoh1@gmail.com',
    phone: '+251983029638',
    telephoneDisplay: '+251 983 029 638',
  },
  founders: [
    {
      name: 'Ezedin Mohammed',
      slug: 'ezedinmoh',
      role: 'Co-Founder & Lead Software Engineer',
      sameAs: [
        'https://github.com/ezedinmoh',
        'https://www.linkedin.com/in/ezedinmoh',
        'https://t.me/ezedinmoh',
        'https://x.com/ezedinmoh',
      ],
    },
    {
      name: 'Mohammed Imam',
      slug: 'mohammed-imam',
      role: 'Co-Founder & Business Lead',
      sameAs: [
        'https://t.me/Mohamediimam',
      ],
    },
    {
      name: 'Sudeys Ibrahim',
      slug: 'sudeys-ibrahim',
      role: 'Co-Founder & Operations Lead',
      sameAs: [
        'https://t.me/Ifshrmr',
      ],
    },
  ],
  sameAs: [
    'https://t.me/ezedinmoh',
    'https://github.com/ezedinmoh',
    'https://www.linkedin.com/in/ezedinmoh',
    'https://x.com/ezedinmoh',
    'https://www.instagram.com/ezedin__moh',
    'https://www.tiktok.com/@ezedinmoh',
    'https://www.facebook.com/ezedinmoh',
    'https://www.youtube.com/@ezedin_moh',
  ],
  knowsAbout: [
    'Custom Software Development',
    'Next.js 16 Web Engineering',
    'React 19 & TypeScript',
    'Enterprise Resource Planning (ERP) Systems',
    'Business Management Systems',
    'E-Commerce Development',
    'Telegram Bot Development',
    'Business Workflow Automation',
    'Cross-Platform Mobile App Engineering (React Native)',
    'UI/UX Design Systems',
    'API Architecture & Cloud Infrastructure',
    'PostgreSQL & Database Design',
  ],
  areaServed: [
    { '@type': 'Country', name: 'Ethiopia' },
    { '@type': 'AdministrativeArea', name: 'Kombolcha' },
    { '@type': 'AdministrativeArea', name: 'Addis Ababa' },
    { '@type': 'Place', name: 'Worldwide' },
  ],
};

/**
 * Generate absolute canonical URL
 */
export function getCanonicalUrl(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return cleanPath === '/' ? SITE_URL : `${SITE_URL}${cleanPath}`;
}

/**
 * Common Schema.org JSON-LD Generators
 */

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: COMPANY_SEO.name,
    alternateName: COMPANY_SEO.alternateName,
    legalName: COMPANY_SEO.legalName,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: COMPANY_SEO.ogImage,
      width: 1200,
      height: 630,
      caption: 'Marvel Technologies — Innovation Without Limits',
    },
    description: COMPANY_SEO.description,
    slogan: COMPANY_SEO.tagline,
    email: COMPANY_SEO.contact.email,
    telephone: COMPANY_SEO.contact.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: COMPANY_SEO.address.addressLocality,
      addressRegion: COMPANY_SEO.address.addressRegion,
      addressCountry: COMPANY_SEO.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_SEO.geo.latitude,
      longitude: COMPANY_SEO.geo.longitude,
    },
    areaServed: COMPANY_SEO.areaServed,
    knowsAbout: COMPANY_SEO.knowsAbout,
    sameAs: COMPANY_SEO.sameAs,
    founders: COMPANY_SEO.founders.map((f) => ({
      '@type': 'Person',
      '@id': `${SITE_URL}/team/${f.slug}#person`,
      name: f.name,
      jobTitle: f.role,
      url: `${SITE_URL}/team/${f.slug}`,
    })),
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: COMPANY_SEO.name,
    alternateName: COMPANY_SEO.alternateName,
    description: COMPANY_SEO.description,
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: ['en', 'am'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/#projects?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateServiceSchema(service: {
  id: string;
  name: string;
  description: string;
  category: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${service.path}#service`,
    name: service.name,
    description: service.description,
    serviceType: service.category,
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    areaServed: COMPANY_SEO.areaServed,
    url: `${SITE_URL}${service.path}`,
  };
}

export function generatePersonSchema(person: {
  name: string;
  slug: string;
  role: string;
  bio: string;
  image?: string;
  expertise: string[];
  sameAs?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/team/${person.slug}#person`,
    name: person.name,
    jobTitle: person.role,
    description: person.bio,
    image: person.image ? (person.image.startsWith('http') ? person.image : `${SITE_URL}${person.image}`) : undefined,
    url: `${SITE_URL}/team/${person.slug}`,
    worksFor: {
      '@id': `${SITE_URL}/#organization`,
    },
    affiliation: {
      '@id': `${SITE_URL}/#organization`,
    },
    knowsAbout: person.expertise,
    sameAs: person.sameAs || [],
  };
}

export function generateBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
