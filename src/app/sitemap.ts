import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Public, crawlable routes for Marvel Technologies
  const routes = [
    {
      path: '',
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      path: '/about',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      path: '/services',
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      path: '/services/web-development',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      path: '/services/custom-software',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      path: '/services/erp-systems',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      path: '/services/ecommerce-development',
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      path: '/services/telegram-bot-development',
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      path: '/services/business-automation',
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      path: '/services/mobile-development',
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      path: '/services/ui-ux-design',
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      path: '/team',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      path: '/team/mohammed-imam',
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      path: '/team/sudeys-ibrahim',
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      path: '/team/ezedinmoh',
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      path: '/contact',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
