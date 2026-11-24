'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { CompaniesMarquee } from './CompaniesMarquee';
import {
  Globe,
  ShoppingBag,
  Bot,
  MessageSquare,
  Database,
  Smartphone,
  Zap,
  TrendingUp,
  Headphones,
  Cpu,
  ArrowRight,
  Activity,
} from 'lucide-react';

interface SubsystemData {
  id: string;
  name: string;
  icon: React.ReactNode;
  coords: { x: number; y: number };
  target: { x: number; y: number };
  curve: { cx: number; cy: number };
  dur: string;
  delay: string;
  windowTitle: string;
  adminSubtitle: string;
  timeframeData: {
    [key in 'Today' | 'This week' | 'This month']: {
      metrics: { label: string; value: string; change: string; isHighlight?: boolean }[];
      chartTotal: string;
      chartPoints: string;
      chartArea: string;
      timeline: { day: string; value: string; x: number; y: number }[];
    };
  };
  description: string;
}

export function ConstellationEcosystem() {
  const [activeSystemId, setActiveSystemId] = useState<string>('erp');
  const [timeframe, setTimeframe] = useState<'Today' | 'This week' | 'This month'>('This week');
  const [hoveredPoint, setHoveredPoint] = useState<{ day: string; value: string; x: number; y: number } | null>(null);

  const subsystems: SubsystemData[] = [
    {
      id: 'website',
      name: 'Website',
      icon: <Globe className="w-4 h-4 text-cyan-400" />,
      coords: { x: 9.5, y: 71 },
      target: { x: 21.5, y: 69 },
      curve: { cx: 15, cy: 70 },
      dur: '4.7s',
      delay: '0.1s',
      windowTitle: 'Marvel Core · Web Platform & CMS',
      adminSubtitle: 'Live visitor traffic, edge rendering, and SEO performance.',
      timeframeData: {
        'Today': {
          metrics: [
            { label: 'Pageviews Today', value: '64,200', change: '+31.2%' },
            { label: 'Avg TTFB', value: '34ms', change: '-18.0%' },
            { label: 'Lighthouse', value: '99/100', change: 'Optimal' },
            { label: 'Active Now', value: '412', change: 'Online', isHighlight: true },
          ],
          chartTotal: '64,200 Views',
          chartPoints: 'M0.0 95.0 L66 80.0 L133 60.0 L200 45.0 L266 50.0 L333 30.0 L400 15.0',
          chartArea: 'M0.0 95.0 L66 80.0 L133 60.0 L200 45.0 L266 50.0 L333 30.0 L400 15.0 L400 120 L0 120 Z',
          timeline: [
            { day: '00:00', value: '2.4K', x: 0, y: 95 },
            { day: '04:00', value: '5.1K', x: 66, y: 80 },
            { day: '08:00', value: '14.2K', x: 133, y: 60 },
            { day: '12:00', value: '18.9K', x: 200, y: 45 },
            { day: '16:00', value: '12.4K', x: 266, y: 50 },
            { day: '20:00', value: '8.2K', x: 333, y: 30 },
            { day: 'Now', value: '3.0K', x: 400, y: 15 },
          ],
        },
        'This week': {
          metrics: [
            { label: 'Total Pageviews', value: '482,900', change: '+24.1%' },
            { label: 'Avg TTFB', value: '38ms', change: '-14.2%' },
            { label: 'Core Web Vitals', value: '99/100', change: '+5.0%' },
            { label: 'Active Sessions', value: '1,420', change: '+18.4%', isHighlight: true },
          ],
          chartTotal: '482,900 Views',
          chartPoints: 'M0.0 90.0 L66 75.0 L133 65.0 L200 50.0 L266 42.0 L333 32.0 L400 12.0',
          chartArea: 'M0.0 90.0 L66 75.0 L133 65.0 L200 50.0 L266 42.0 L333 32.0 L400 12.0 L400 120 L0 120 Z',
          timeline: [
            { day: 'Mon', value: '42K', x: 0, y: 90 },
            { day: 'Tue', value: '58K', x: 66, y: 75 },
            { day: 'Wed', value: '64K', x: 133, y: 65 },
            { day: 'Thu', value: '78K', x: 200, y: 50 },
            { day: 'Fri', value: '89K', x: 266, y: 42 },
            { day: 'Sat', value: '92K', x: 333, y: 32 },
            { day: 'Sun', value: '60K', x: 400, y: 12 },
          ],
        },
        'This month': {
          metrics: [
            { label: 'Monthly Visitors', value: '1.92M', change: '+38.5%' },
            { label: 'Bounce Rate', value: '28.4%', change: '-6.2%' },
            { label: 'Global CDN Hit', value: '98.8%', change: 'Cached' },
            { label: 'Total Bandwidth', value: '4.8 TB', change: 'Optimized', isHighlight: true },
          ],
          chartTotal: '1.92M Views',
          chartPoints: 'M0.0 85.0 L66 70.0 L133 55.0 L200 48.0 L266 38.0 L333 24.0 L400 8.0',
          chartArea: 'M0.0 85.0 L66 70.0 L133 55.0 L200 48.0 L266 38.0 L333 24.0 L400 8.0 L400 120 L0 120 Z',
          timeline: [
            { day: 'Week 1', value: '380K', x: 0, y: 85 },
            { day: 'Week 2', value: '490K', x: 133, y: 55 },
            { day: 'Week 3', value: '540K', x: 266, y: 38 },
            { day: 'Week 4', value: '510K', x: 400, y: 8 },
          ],
        },
      },
      description: 'Next.js 16 high-performance web frontends with sub-second hydration and international SEO.',
    },
    {
      id: 'ecommerce',
      name: 'Ecommerce',
      icon: <ShoppingBag className="w-4 h-4 text-emerald-400" />,
      coords: { x: 6.5, y: 50 },
      target: { x: 21.5, y: 52 },
      curve: { cx: 14, cy: 51 },
      dur: '5.0s',
      delay: '0.4s',
      windowTitle: 'Marvel Commerce · Storefront & Orders',
      adminSubtitle: 'Real-time order pipeline, dual Stripe & Chapa settlements.',
      timeframeData: {
        'Today': {
          metrics: [
            { label: 'Sales Today', value: '$112,400', change: '+14.2%' },
            { label: 'Orders Today', value: '248', change: '+8.1%' },
            { label: 'Cart Success', value: '5.12%', change: '+0.8%' },
            { label: 'Live Shoppers', value: '88', change: 'Active', isHighlight: true },
          ],
          chartTotal: '$112,400 Today',
          chartPoints: 'M0.0 100.0 L66 85.0 L133 70.0 L200 55.0 L266 60.0 L333 40.0 L400 20.0',
          chartArea: 'M0.0 100.0 L66 85.0 L133 70.0 L200 55.0 L266 60.0 L333 40.0 L400 20.0 L400 120 L0 120 Z',
          timeline: [
            { day: '00:00', value: '$8.2K', x: 0, y: 100 },
            { day: '06:00', value: '$14.1K', x: 66, y: 85 },
            { day: '12:00', value: '$38.4K', x: 133, y: 70 },
            { day: '16:00', value: '$29.0K', x: 200, y: 55 },
            { day: 'Now', value: '$22.7K', x: 400, y: 20 },
          ],
        },
        'This week': {
          metrics: [
            { label: 'Gross Sales', value: '$849,200', change: '+18.9%' },
            { label: 'Cart Conversion', value: '4.82%', change: '+1.2%' },
            { label: 'Orders Placed', value: '1,842', change: '+12.4%' },
            { label: 'Pending Dispatch', value: '38', change: '$34,900', isHighlight: true },
          ],
          chartTotal: '$849,200 Settled',
          chartPoints: 'M0.0 100.0 L66 88.0 L133 72.0 L200 60.0 L266 45.0 L333 32.0 L400 15.0',
          chartArea: 'M0.0 100.0 L66 88.0 L133 72.0 L200 60.0 L266 45.0 L333 32.0 L400 15.0 L400 120 L0 120 Z',
          timeline: [
            { day: 'Mon', value: '$92K', x: 0, y: 100 },
            { day: 'Tue', value: '$110K', x: 66, y: 88 },
            { day: 'Wed', value: '$128K', x: 133, y: 72 },
            { day: 'Thu', value: '$145K', x: 200, y: 60 },
            { day: 'Fri', value: '$162K', x: 266, y: 45 },
            { day: 'Sat', value: '$112K', x: 333, y: 32 },
            { day: 'Sun', value: '$100K', x: 400, y: 15 },
          ],
        },
        'This month': {
          metrics: [
            { label: 'Monthly GMV', value: '$3.41M', change: '+26.8%' },
            { label: 'Repeat Customers', value: '42.1%', change: '+5.4%' },
            { label: 'Avg Order Value', value: '$184.20', change: '+$18.00' },
            { label: 'Dispute Rate', value: '0.01%', change: 'Protected', isHighlight: true },
          ],
          chartTotal: '$3.41M GMV',
          chartPoints: 'M0.0 90.0 L66 75.0 L133 58.0 L200 45.0 L266 32.0 L333 20.0 L400 10.0',
          chartArea: 'M0.0 90.0 L66 75.0 L133 58.0 L200 45.0 L266 32.0 L333 20.0 L400 10.0 L400 120 L0 120 Z',
          timeline: [
            { day: 'W1', value: '$720K', x: 0, y: 90 },
            { day: 'W2', value: '$840K', x: 133, y: 58 },
            { day: 'W3', value: '$990K', x: 266, y: 32 },
            { day: 'W4', value: '$860K', x: 400, y: 10 },
          ],
        },
      },
      description: 'Omnichannel ecommerce suites powering WEARIFY and consumer retail brands.',
    },
    {
      id: 'ai-sales',
      name: 'AI Sales Agent',
      icon: <Bot className="w-4 h-4 text-cyan-300" />,
      coords: { x: 10, y: 29 },
      target: { x: 21.5, y: 36 },
      curve: { cx: 16, cy: 32 },
      dur: '5.5s',
      delay: '0.6s',
      windowTitle: 'Marvel Intelligence · AI Sales Agent',
      adminSubtitle: 'Autonomous lead qualification, dynamic pricing, and upsell generation.',
      timeframeData: {
        'Today': {
          metrics: [
            { label: 'Leads Qualified', value: '412', change: '+28.5%' },
            { label: 'Conversion Lift', value: '+24.0%', change: 'Optimal' },
            { label: 'Latency', value: '1.1s', change: 'Fast' },
            { label: 'Active Deals', value: '$82K', change: 'Warm', isHighlight: true },
          ],
          chartTotal: '412 Leads',
          chartPoints: 'M0.0 95.0 L66 80.0 L133 65.0 L200 52.0 L266 40.0 L333 28.0 L400 12.0',
          chartArea: 'M0.0 95.0 L66 80.0 L133 65.0 L200 52.0 L266 40.0 L333 28.0 L400 12.0 L400 120 L0 120 Z',
          timeline: [
            { day: '00:00', value: '28', x: 0, y: 95 },
            { day: '06:00', value: '64', x: 66, y: 80 },
            { day: '12:00', value: '142', x: 133, y: 65 },
            { day: '18:00', value: '118', x: 266, y: 40 },
            { day: 'Now', value: '60', x: 400, y: 12 },
          ],
        },
        'This week': {
          metrics: [
            { label: 'Leads Handled', value: '3,840', change: '+34.2%' },
            { label: 'Conversion Lift', value: '+22.5%', change: '+4.1%' },
            { label: 'Avg Resolution', value: '1.2s', change: '-45.0%' },
            { label: 'Pipeline Value', value: '$340,000', change: 'Engaged', isHighlight: true },
          ],
          chartTotal: '3,840 Leads',
          chartPoints: 'M0.0 95.0 L66 82.0 L133 68.0 L200 50.0 L266 40.0 L333 24.0 L400 10.0',
          chartArea: 'M0.0 95.0 L66 82.0 L133 68.0 L200 50.0 L266 40.0 L333 24.0 L400 10.0 L400 120 L0 120 Z',
          timeline: [
            { day: 'Mon', value: '410', x: 0, y: 95 },
            { day: 'Tue', value: '520', x: 66, y: 82 },
            { day: 'Wed', value: '640', x: 133, y: 68 },
            { day: 'Thu', value: '710', x: 200, y: 50 },
            { day: 'Fri', value: '820', x: 266, y: 40 },
            { day: 'Sat', value: '480', x: 333, y: 24 },
            { day: 'Sun', value: '260', x: 400, y: 10 },
          ],
        },
        'This month': {
          metrics: [
            { label: 'Monthly Leads', value: '16,200', change: '+42.1%' },
            { label: 'Closed Revenue', value: '$1.28M', change: '+$310K' },
            { label: 'Accuracy Score', value: '99.4%', change: 'High' },
            { label: 'Human Handoff', value: '4.2%', change: '-8.0%', isHighlight: true },
          ],
          chartTotal: '16,200 Leads',
          chartPoints: 'M0.0 88.0 L66 72.0 L133 54.0 L200 42.0 L266 30.0 L333 18.0 L400 6.0',
          chartArea: 'M0.0 88.0 L66 72.0 L133 54.0 L200 42.0 L266 30.0 L333 18.0 L400 6.0 L400 120 L0 120 Z',
          timeline: [
            { day: 'W1', value: '3.4K', x: 0, y: 88 },
            { day: 'W2', value: '4.1K', x: 133, y: 54 },
            { day: 'W3', value: '4.8K', x: 266, y: 30 },
            { day: 'W4', value: '3.9K', x: 400, y: 6 },
          ],
        },
      },
      description: 'Multi-lingual LLM agents that qualify enterprise leads and automate order closure.',
    },
    {
      id: 'chatbot',
      name: 'Chatbot',
      icon: <MessageSquare className="w-4 h-4 text-blue-400" />,
      coords: { x: 26, y: 13.5 },
      target: { x: 29, y: 25.5 },
      curve: { cx: 27, cy: 19 },
      dur: '5.1s',
      delay: '0.9s',
      windowTitle: 'Marvel Mesh · 24/7 Smart Chatbot',
      adminSubtitle: 'Real-time Telegram, WhatsApp, and Web customer service bot.',
      timeframeData: {
        'Today': {
          metrics: [
            { label: 'Messages Handled', value: '6,420', change: '+22.4%' },
            { label: 'Avg Latency', value: '340ms', change: '-12ms' },
            { label: 'Resolution Rate', value: '91.2%', change: '+3.1%' },
            { label: 'Queued', value: '0', change: 'Clear', isHighlight: true },
          ],
          chartTotal: '6,420 Msgs',
          chartPoints: 'M0.0 90.0 L66 76.0 L133 60.0 L200 48.0 L266 38.0 L333 26.0 L400 14.0',
          chartArea: 'M0.0 90.0 L66 76.0 L133 60.0 L200 48.0 L266 38.0 L333 26.0 L400 14.0 L400 120 L0 120 Z',
          timeline: [
            { day: '00:00', value: '410', x: 0, y: 90 },
            { day: '06:00', value: '890', x: 66, y: 76 },
            { day: '12:00', value: '2.1K', x: 133, y: 60 },
            { day: '18:00', value: '1.9K', x: 266, y: 38 },
            { day: 'Now', value: '1.1K', x: 400, y: 14 },
          ],
        },
        'This week': {
          metrics: [
            { label: 'Messages Routed', value: '42,910', change: '+19.3%' },
            { label: 'Automation Rate', value: '88.4%', change: '+6.1%' },
            { label: 'Satisfaction CSAT', value: '4.9/5', change: '+0.2' },
            { label: 'Escalations', value: '12', change: 'Resolved', isHighlight: true },
          ],
          chartTotal: '42,910 Messages',
          chartPoints: 'M0.0 85.0 L66 78.0 L133 65.0 L200 50.0 L266 42.0 L333 28.0 L400 14.0',
          chartArea: 'M0.0 85.0 L66 78.0 L133 65.0 L200 50.0 L266 42.0 L333 28.0 L400 14.0 L400 120 L0 120 Z',
          timeline: [
            { day: 'Mon', value: '5.2K', x: 0, y: 85 },
            { day: 'Tue', value: '6.4K', x: 66, y: 78 },
            { day: 'Wed', value: '7.1K', x: 133, y: 65 },
            { day: 'Thu', value: '8.4K', x: 200, y: 50 },
            { day: 'Fri', value: '7.9K', x: 266, y: 42 },
            { day: 'Sat', value: '4.8K', x: 333, y: 28 },
            { day: 'Sun', value: '3.1K', x: 400, y: 14 },
          ],
        },
        'This month': {
          metrics: [
            { label: 'Monthly Conversations', value: '184,200', change: '+31.4%' },
            { label: 'Resolved Without Human', value: '93.2%', change: '+4.0%' },
            { label: 'Languages Active', value: '4 (EN, AM, etc.)', change: 'Global' },
            { label: 'Uptime', value: '100.0%', change: 'Zero Fail', isHighlight: true },
          ],
          chartTotal: '184,200 Msgs',
          chartPoints: 'M0.0 82.0 L66 68.0 L133 52.0 L200 40.0 L266 28.0 L333 18.0 L400 8.0',
          chartArea: 'M0.0 82.0 L66 68.0 L133 52.0 L200 40.0 L266 28.0 L333 18.0 L400 8.0 L400 120 L0 120 Z',
          timeline: [
            { day: 'W1', value: '42K', x: 0, y: 82 },
            { day: 'W2', value: '48K', x: 133, y: 52 },
            { day: 'W3', value: '51K', x: 266, y: 28 },
            { day: 'W4', value: '43K', x: 400, y: 8 },
          ],
        },
      },
      description: 'Zero-latency Telegram Bot API and web widget instant message responder.',
    },
    {
      id: 'erp',
      name: 'ERP',
      icon: <Database className="w-4 h-4 text-cyan-400" />,
      coords: { x: 43, y: 7.5 },
      target: { x: 44, y: 25.5 },
      curve: { cx: 43.5, cy: 16 },
      dur: '4.2s',
      delay: '0.1s',
      windowTitle: 'Marvel ERP · Enterprise Resource Center',
      adminSubtitle: 'Unified business system, inventory telemetry, and corporate finances.',
      timeframeData: {
        'Today': {
          metrics: [
            { label: 'Revenue Today', value: '$184,200', change: '+16.4%' },
            { label: 'Orders Today', value: '54', change: '+12.0%' },
            { label: 'Active Staff', value: '38', change: 'Clocked In' },
            { label: 'Pending Batches', value: '6', change: '$32,000', isHighlight: true },
          ],
          chartTotal: '$184,200 Today',
          chartPoints: 'M0.0 102.0 L66 88.0 L133 74.0 L200 58.0 L266 45.0 L333 34.0 L400 18.0',
          chartArea: 'M0.0 102.0 L66 88.0 L133 74.0 L200 58.0 L266 45.0 L333 34.0 L400 18.0 L400 120 L0 120 Z',
          timeline: [
            { day: '00:00', value: '$14K', x: 0, y: 102 },
            { day: '06:00', value: '$28K', x: 66, y: 88 },
            { day: '12:00', value: '$68K', x: 133, y: 74 },
            { day: '18:00', value: '$49K', x: 266, y: 45 },
            { day: 'Now', value: '$25K', x: 400, y: 18 },
          ],
        },
        'This week': {
          metrics: [
            { label: 'Total Revenue', value: '$1,248,900', change: '+12.5%' },
            { label: 'Processed Orders', value: '356', change: '+8.2%' },
            { label: 'Active Clients', value: '89', change: '+15.3%' },
            { label: 'Pending Audits', value: '24', change: '$224,500', isHighlight: true },
          ],
          chartTotal: '$1,248,900',
          chartPoints: 'M0.0 108.0 L66 94.9 L133 75.1 L200 62.0 L266 48.9 L333 32.4 L400 16.0',
          chartArea: 'M0.0 108.0 L66 94.9 L133 75.1 L200 62.0 L266 48.9 L333 32.4 L400 16.0 L400 120 L0 120 Z',
          timeline: [
            { day: 'Mon', value: '$142K', x: 0, y: 108 },
            { day: 'Tue', value: '$178K', x: 66, y: 95 },
            { day: 'Wed', value: '$198K', x: 133, y: 75 },
            { day: 'Thu', value: '$210K', x: 200, y: 62 },
            { day: 'Fri', value: '$245K', x: 266, y: 49 },
            { day: 'Sat', value: '$165K', x: 333, y: 32 },
            { day: 'Sun', value: '$110K', x: 400, y: 16 },
          ],
        },
        'This month': {
          metrics: [
            { label: 'Monthly Invoiced', value: '$5.18M', change: '+19.2%' },
            { label: 'Net Operating Margin', value: '31.4%', change: '+3.8%' },
            { label: 'Vendor Payables', value: '$410K', change: 'On Time' },
            { label: 'Uncollected AR', value: '$64K', change: 'Current', isHighlight: true },
          ],
          chartTotal: '$5.18M MTD',
          chartPoints: 'M0.0 95.0 L66 80.0 L133 62.0 L200 48.0 L266 34.0 L333 22.0 L400 10.0',
          chartArea: 'M0.0 95.0 L66 80.0 L133 62.0 L200 48.0 L266 34.0 L333 22.0 L400 10.0 L400 120 L0 120 Z',
          timeline: [
            { day: 'W1', value: '$1.1M', x: 0, y: 95 },
            { day: 'W2', value: '$1.4M', x: 133, y: 62 },
            { day: 'W3', value: '$1.5M', x: 266, y: 34 },
            { day: 'W4', value: '$1.18M', x: 400, y: 10 },
          ],
        },
      },
      description: 'Complete centralized resource management, inventory control, and workforce RBAC.',
    },
    {
      id: 'mobile-app',
      name: 'Mobile App',
      icon: <Smartphone className="w-4 h-4 text-indigo-400" />,
      coords: { x: 57, y: 7.5 },
      target: { x: 56, y: 25.5 },
      curve: { cx: 56.5, cy: 16 },
      dur: '4.8s',
      delay: '0.3s',
      windowTitle: 'Marvel Mobile · Cross-Platform Fleet Engine',
      adminSubtitle: 'Native iOS & Android sync, offline SQLite cache, push notification pipelines.',
      timeframeData: {
        'Today': {
          metrics: [
            { label: 'Active Devices', value: '4,120', change: '+18.2%' },
            { label: 'Crash Rate', value: '0.01%', change: 'Stable' },
            { label: 'Notifications', value: '18.4K', change: 'Sent' },
            { label: 'Offline Syncs', value: '840', change: '100% OK', isHighlight: true },
          ],
          chartTotal: '4,120 Devices Today',
          chartPoints: 'M0.0 94.0 L66 80.0 L133 65.0 L200 52.0 L266 40.0 L333 26.0 L400 14.0',
          chartArea: 'M0.0 94.0 L66 80.0 L133 65.0 L200 52.0 L266 40.0 L333 26.0 L400 14.0 L400 120 L0 120 Z',
          timeline: [
            { day: '00:00', value: '620', x: 0, y: 94 },
            { day: '06:00', value: '1.2K', x: 66, y: 80 },
            { day: '12:00', value: '1.8K', x: 133, y: 65 },
            { day: '18:00', value: '1.5K', x: 266, y: 40 },
            { day: 'Now', value: '780', x: 400, y: 14 },
          ],
        },
        'This week': {
          metrics: [
            { label: 'Active Devices', value: '18,420', change: '+28.4%' },
            { label: 'Crash-Free Rate', value: '99.98%', change: '+0.04%' },
            { label: 'Push Open Rate', value: '42.1%', change: '+9.3%' },
            { label: 'Offline Syncs', value: '9,410', change: 'Instant', isHighlight: true },
          ],
          chartTotal: '18,420 Mobile Clients',
          chartPoints: 'M0.0 92.0 L66 84.0 L133 68.0 L200 54.0 L266 42.0 L333 28.0 L400 12.0',
          chartArea: 'M0.0 92.0 L66 84.0 L133 68.0 L200 54.0 L266 42.0 L333 28.0 L400 12.0 L400 120 L0 120 Z',
          timeline: [
            { day: 'Mon', value: '2.1K', x: 0, y: 92 },
            { day: 'Tue', value: '2.6K', x: 66, y: 84 },
            { day: 'Wed', value: '3.1K', x: 133, y: 68 },
            { day: 'Thu', value: '3.4K', x: 200, y: 54 },
            { day: 'Fri', value: '3.8K', x: 266, y: 42 },
            { day: 'Sat', value: '2.2K', x: 333, y: 28 },
            { day: 'Sun', value: '1.2K', x: 400, y: 12 },
          ],
        },
        'This month': {
          metrics: [
            { label: 'Monthly Installs', value: '74,200', change: '+38.4%' },
            { label: 'Session Length', value: '8m 14s', change: '+1m 20s' },
            { label: 'Store Rating', value: '4.9 ★', change: '+0.2' },
            { label: 'OTA Updates', value: '100% Deployed', change: 'Ready', isHighlight: true },
          ],
          chartTotal: '74,200 Installs',
          chartPoints: 'M0.0 85.0 L66 70.0 L133 52.0 L200 38.0 L266 26.0 L333 16.0 L400 8.0',
          chartArea: 'M0.0 85.0 L66 70.0 L133 52.0 L200 38.0 L266 26.0 L333 16.0 L400 8.0 L400 120 L0 120 Z',
          timeline: [
            { day: 'W1', value: '16K', x: 0, y: 85 },
            { day: 'W2', value: '19K', x: 133, y: 52 },
            { day: 'W3', value: '22K', x: 266, y: 26 },
            { day: 'W4', value: '17.2K', x: 400, y: 8 },
          ],
        },
      },
      description: 'React Native & Expo cross-platform mobile apps with native hardware hooks.',
    },
    {
      id: 'automation',
      name: 'Automation',
      icon: <Zap className="w-4 h-4 text-amber-400" />,
      coords: { x: 74, y: 13.5 },
      target: { x: 71, y: 25.5 },
      curve: { cx: 73, cy: 19 },
      dur: '4.6s',
      delay: '0.2s',
      windowTitle: 'Marvel Flow · Event Orchestration',
      adminSubtitle: 'Automated invoice generation, customer notification triggers, and ETL jobs.',
      timeframeData: {
        'Today': {
          metrics: [
            { label: 'Jobs Executed', value: '18,400', change: '+44.2%' },
            { label: 'Hours Saved', value: '210 hrs', change: 'Automated' },
            { label: 'Failures', value: '0', change: 'Zero Error' },
            { label: 'Queue Time', value: '4ms', change: 'Instant', isHighlight: true },
          ],
          chartTotal: '18,400 Executions',
          chartPoints: 'M0.0 98.0 L66 84.0 L133 70.0 L200 55.0 L266 44.0 L333 30.0 L400 16.0',
          chartArea: 'M0.0 98.0 L66 84.0 L133 70.0 L200 55.0 L266 44.0 L333 30.0 L400 16.0 L400 120 L0 120 Z',
          timeline: [
            { day: '00:00', value: '2.1K', x: 0, y: 98 },
            { day: '06:00', value: '4.8K', x: 66, y: 84 },
            { day: '12:00', value: '6.2K', x: 133, y: 70 },
            { day: '18:00', value: '4.1K', x: 266, y: 44 },
            { day: 'Now', value: '1.2K', x: 400, y: 16 },
          ],
        },
        'This week': {
          metrics: [
            { label: 'Jobs Executed', value: '124,800', change: '+41.2%' },
            { label: 'Hours Saved', value: '1,420 hrs', change: '+180 hrs' },
            { label: 'Error Margin', value: '0.00%', change: 'Zero Fail' },
            { label: 'Active Queues', value: '16', change: 'Healthy', isHighlight: true },
          ],
          chartTotal: '124,800 Jobs',
          chartPoints: 'M0.0 102.0 L66 89.0 L133 76.0 L200 62.0 L266 48.0 L333 34.0 L400 18.0',
          chartArea: 'M0.0 102.0 L66 89.0 L133 76.0 L200 62.0 L266 48.0 L333 34.0 L400 18.0 L400 120 L0 120 Z',
          timeline: [
            { day: 'Mon', value: '14.2K', x: 0, y: 102 },
            { day: 'Tue', value: '18.1K', x: 66, y: 89 },
            { day: 'Wed', value: '21.0K', x: 133, y: 76 },
            { day: 'Thu', value: '24.2K', x: 200, y: 62 },
            { day: 'Fri', value: '26.8K', x: 266, y: 48 },
            { day: 'Sat', value: '12.4K', x: 333, y: 34 },
            { day: 'Sun', value: '8.1K', x: 400, y: 18 },
          ],
        },
        'This month': {
          metrics: [
            { label: 'Monthly Automated', value: '580,000', change: '+52.0%' },
            { label: 'Time Reclaimed', value: '6,400 hrs', change: '+$180K Value' },
            { label: 'Queue Throughput', value: '450/sec', change: 'Parallel' },
            { label: 'Reliability', value: '100.0%', change: 'Self-Healing', isHighlight: true },
          ],
          chartTotal: '580,000 Jobs',
          chartPoints: 'M0.0 88.0 L66 74.0 L133 58.0 L200 44.0 L266 30.0 L333 18.0 L400 8.0',
          chartArea: 'M0.0 88.0 L66 74.0 L133 58.0 L200 44.0 L266 30.0 L333 18.0 L400 8.0 L400 120 L0 120 Z',
          timeline: [
            { day: 'W1', value: '130K', x: 0, y: 88 },
            { day: 'W2', value: '150K', x: 133, y: 58 },
            { day: 'W3', value: '165K', x: 266, y: 30 },
            { day: 'W4', value: '135K', x: 400, y: 8 },
          ],
        },
      },
      description: 'Self-healing background job queues and business process automation.',
    },
    {
      id: 'analytics',
      name: 'Analytics',
      icon: <TrendingUp className="w-4 h-4 text-emerald-400" />,
      coords: { x: 90, y: 29 },
      target: { x: 78.5, y: 36 },
      curve: { cx: 84, cy: 32 },
      dur: '5.5s',
      delay: '0.4s',
      windowTitle: 'Marvel Telemetry · Real-Time Analytics',
      adminSubtitle: 'Multi-tenant event analytics, user retention cohorts, and conversion tracking.',
      timeframeData: {
        'Today': {
          metrics: [
            { label: 'Events Today', value: '412,000', change: '+38.2%' },
            { label: 'User Retention', value: '71.2%', change: '+3.4%' },
            { label: 'Avg Session', value: '7m 10s', change: 'High' },
            { label: 'Conversion', value: '19.8%', change: '+4.1%', isHighlight: true },
          ],
          chartTotal: '412,000 Events',
          chartPoints: 'M0.0 95.0 L66 80.0 L133 65.0 L200 50.0 L266 38.0 L333 24.0 L400 10.0',
          chartArea: 'M0.0 95.0 L66 80.0 L133 65.0 L200 50.0 L266 38.0 L333 24.0 L400 10.0 L400 120 L0 120 Z',
          timeline: [
            { day: '00:00', value: '42K', x: 0, y: 95 },
            { day: '06:00', value: '88K', x: 66, y: 80 },
            { day: '12:00', value: '142K', x: 133, y: 65 },
            { day: '18:00', value: '98K', x: 266, y: 38 },
            { day: 'Now', value: '42K', x: 400, y: 10 },
          ],
        },
        'This week': {
          metrics: [
            { label: 'Tracked Events', value: '2.84M', change: '+52.4%' },
            { label: 'Retention (30d)', value: '68.4%', change: '+7.1%' },
            { label: 'Avg Session', value: '6m 42s', change: '+1m 12s' },
            { label: 'Goal Funnel', value: '18.4%', change: '+3.2%', isHighlight: true },
          ],
          chartTotal: '2.84M Events',
          chartPoints: 'M0.0 98.0 L66 82.0 L133 66.0 L200 50.0 L266 36.0 L333 22.0 L400 8.0',
          chartArea: 'M0.0 98.0 L66 82.0 L133 66.0 L200 50.0 L266 36.0 L333 22.0 L400 8.0 L400 120 L0 120 Z',
          timeline: [
            { day: 'Mon', value: '310K', x: 0, y: 98 },
            { day: 'Tue', value: '390K', x: 66, y: 82 },
            { day: 'Wed', value: '440K', x: 133, y: 66 },
            { day: 'Thu', value: '490K', x: 200, y: 50 },
            { day: 'Fri', value: '540K', x: 266, y: 36 },
            { day: 'Sat', value: '380K', x: 333, y: 22 },
            { day: 'Sun', value: '290K', x: 400, y: 8 },
          ],
        },
        'This month': {
          metrics: [
            { label: 'Monthly Stream', value: '12.4M Events', change: '+68.0%' },
            { label: 'Churn Rate', value: '0.8%', change: '-0.3%' },
            { label: 'Telemetry Uptime', value: '99.99%', change: 'Unbroken' },
            { label: 'Storage Size', value: '18 GB', change: 'Compressed', isHighlight: true },
          ],
          chartTotal: '12.4M Events',
          chartPoints: 'M0.0 90.0 L66 74.0 L133 56.0 L200 42.0 L266 28.0 L333 16.0 L400 6.0',
          chartArea: 'M0.0 90.0 L66 74.0 L133 56.0 L200 42.0 L266 28.0 L333 16.0 L400 6.0 L400 120 L0 120 Z',
          timeline: [
            { day: 'W1', value: '2.8M', x: 0, y: 90 },
            { day: 'W2', value: '3.2M', x: 133, y: 56 },
            { day: 'W3', value: '3.6M', x: 266, y: 28 },
            { day: 'W4', value: '2.8M', x: 400, y: 6 },
          ],
        },
      },
      description: 'Privacy-first telemetry, executive dashboard charts, and funnel cohorts.',
    },
    {
      id: 'support',
      name: 'Customer Support',
      icon: <Headphones className="w-4 h-4 text-violet-400" />,
      coords: { x: 93.5, y: 50 },
      target: { x: 78.5, y: 52 },
      curve: { cx: 86, cy: 51 },
      dur: '5.1s',
      delay: '0.1s',
      windowTitle: 'Marvel Desk · Unified Client Support',
      adminSubtitle: 'Omnichannel ticket routing, SLA timers, and automated customer notifications.',
      timeframeData: {
        'Today': {
          metrics: [
            { label: 'Tickets Solved', value: '412', change: '+18.2%' },
            { label: 'Avg Speed', value: '2.8m', change: '-45.0%' },
            { label: 'CSAT Score', value: '99.8%', change: 'Top Tier' },
            { label: 'Open In Queue', value: '1', change: 'Clear', isHighlight: true },
          ],
          chartTotal: '412 Solved',
          chartPoints: 'M0.0 96.0 L66 82.0 L133 68.0 L200 54.0 L266 40.0 L333 26.0 L400 12.0',
          chartArea: 'M0.0 96.0 L66 82.0 L133 68.0 L200 54.0 L266 40.0 L333 26.0 L400 12.0 L400 120 L0 120 Z',
          timeline: [
            { day: '00:00', value: '24', x: 0, y: 96 },
            { day: '06:00', value: '68', x: 66, y: 82 },
            { day: '12:00', value: '148', x: 133, y: 68 },
            { day: '18:00', value: '118', x: 266, y: 40 },
            { day: 'Now', value: '54', x: 400, y: 12 },
          ],
        },
        'This week': {
          metrics: [
            { label: 'Tickets Solved', value: '2,940', change: '+14.2%' },
            { label: 'First Response', value: '3.4 mins', change: '-48.0%' },
            { label: 'SLA Adherence', value: '99.4%', change: '+0.5%' },
            { label: 'Open Queue', value: '4', change: 'Low', isHighlight: true },
          ],
          chartTotal: '2,940 Solved Tickets',
          chartPoints: 'M0.0 94.0 L66 85.0 L133 68.0 L200 54.0 L266 38.0 L333 26.0 L400 16.0',
          chartArea: 'M0.0 94.0 L66 85.0 L133 68.0 L200 54.0 L266 38.0 L333 26.0 L400 16.0 L400 120 L0 120 Z',
          timeline: [
            { day: 'Mon', value: '380', x: 0, y: 94 },
            { day: 'Tue', value: '440', x: 66, y: 85 },
            { day: 'Wed', value: '510', x: 133, y: 68 },
            { day: 'Thu', value: '560', x: 200, y: 54 },
            { day: 'Fri', value: '580', x: 266, y: 38 },
            { day: 'Sat', value: '290', x: 333, y: 26 },
            { day: 'Sun', value: '180', x: 400, y: 16 },
          ],
        },
        'This month': {
          metrics: [
            { label: 'Monthly Handled', value: '12,800', change: '+22.4%' },
            { label: 'Net Satisfaction', value: '99.2%', change: '+1.1%' },
            { label: 'Reopened Rate', value: '1.2%', change: '-0.8%' },
            { label: 'Resolution Rate', value: '98.8%', change: 'Optimal', isHighlight: true },
          ],
          chartTotal: '12,800 Tickets',
          chartPoints: 'M0.0 88.0 L66 74.0 L133 56.0 L200 42.0 L266 30.0 L333 18.0 L400 8.0',
          chartArea: 'M0.0 88.0 L66 74.0 L133 56.0 L200 42.0 L266 30.0 L333 18.0 L400 8.0 L400 120 L0 120 Z',
          timeline: [
            { day: 'W1', value: '2.8K', x: 0, y: 88 },
            { day: 'W2', value: '3.4K', x: 133, y: 56 },
            { day: 'W3', value: '3.8K', x: 266, y: 30 },
            { day: 'W4', value: '2.8K', x: 400, y: 8 },
          ],
        },
      },
      description: 'Integrated helpdesk routing with Telegram webhooks and automated status alerts.',
    },
    {
      id: 'integrations',
      name: 'Integrations',
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      coords: { x: 90.5, y: 71 },
      target: { x: 78.5, y: 69 },
      curve: { cx: 85, cy: 70 },
      dur: '4.6s',
      delay: '0.2s',
      windowTitle: 'Marvel Gateway · Connected Integrations',
      adminSubtitle: 'Payment APIs, Telebirr, Chapa, Stripe, and third-party webhook mesh.',
      timeframeData: {
        'Today': {
          metrics: [
            { label: 'Connected APIs', value: '38 Active', change: 'Online' },
            { label: 'Daily Calls', value: '840,000', change: '+28.0%' },
            { label: 'Latency', value: '14ms', change: '-4ms' },
            { label: 'Failed Handshakes', value: '0', change: '100% Pass', isHighlight: true },
          ],
          chartTotal: '840K API Calls',
          chartPoints: 'M0.0 95.0 L66 80.0 L133 64.0 L200 50.0 L266 38.0 L333 24.0 L400 12.0',
          chartArea: 'M0.0 95.0 L66 80.0 L133 64.0 L200 50.0 L266 38.0 L333 24.0 L400 12.0 L400 120 L0 120 Z',
          timeline: [
            { day: '00:00', value: '62K', x: 0, y: 95 },
            { day: '06:00', value: '140K', x: 66, y: 80 },
            { day: '12:00', value: '280K', x: 133, y: 64 },
            { day: '18:00', value: '240K', x: 266, y: 38 },
            { day: 'Now', value: '118K', x: 400, y: 12 },
          ],
        },
        'This week': {
          metrics: [
            { label: 'Connected APIs', value: '38 Active', change: '+6' },
            { label: 'Webhook SLA', value: '99.99%', change: 'Guaranteed' },
            { label: 'Sync Latency', value: '18ms', change: '-22.0%' },
            { label: 'Throughput', value: '8.4K req/s', change: 'Stable', isHighlight: true },
          ],
          chartTotal: '38 Connected Gateways',
          chartPoints: 'M0.0 96.0 L66 84.0 L133 66.0 L200 50.0 L266 36.0 L333 24.0 L400 12.0',
          chartArea: 'M0.0 96.0 L66 84.0 L133 66.0 L200 50.0 L266 36.0 L333 24.0 L400 12.0 L400 120 L0 120 Z',
          timeline: [
            { day: 'Mon', value: '5.4M', x: 0, y: 96 },
            { day: 'Tue', value: '6.8M', x: 66, y: 84 },
            { day: 'Wed', value: '7.9M', x: 133, y: 66 },
            { day: 'Thu', value: '8.4M', x: 200, y: 50 },
            { day: 'Fri', value: '9.2M', x: 266, y: 36 },
            { day: 'Sat', value: '6.1M', x: 333, y: 24 },
            { day: 'Sun', value: '4.8M', x: 400, y: 12 },
          ],
        },
        'This month': {
          metrics: [
            { label: 'Total Invocations', value: '42.8M', change: '+44.0%' },
            { label: 'Mean Error Rate', value: '0.0001%', change: 'Resilient' },
            { label: 'Retries Absorbed', value: '100% OK', change: 'Self-Healed' },
            { label: 'Payment Volume', value: '$8.4M', change: 'Processed', isHighlight: true },
          ],
          chartTotal: '42.8M Requests',
          chartPoints: 'M0.0 90.0 L66 74.0 L133 58.0 L200 42.0 L266 28.0 L333 16.0 L400 6.0',
          chartArea: 'M0.0 90.0 L66 74.0 L133 58.0 L200 42.0 L266 28.0 L333 16.0 L400 6.0 L400 120 L0 120 Z',
          timeline: [
            { day: 'W1', value: '9.2M', x: 0, y: 90 },
            { day: 'W2', value: '11.4M', x: 133, y: 58 },
            { day: 'W3', value: '12.8M', x: 266, y: 28 },
            { day: 'W4', value: '9.4M', x: 400, y: 6 },
          ],
        },
      },
      description: 'Production payment adapters and webhooks for Telebirr, Chapa, and international gateways.',
    },
  ];

  const currentSystem = subsystems.find((s) => s.id === activeSystemId) || subsystems[4];
  const currentData = currentSystem.timeframeData[timeframe];

  return (
    <section id="ecosystem" className="py-24 sm:py-32 relative overflow-hidden bg-[#040711]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[650px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="The Connected Platform"
          title="Everything Your Business Needs —"
          highlight="Connected."
          subtitle="Hover or click any satellite node to see it come alive on the central command center. Every part talks to every other part in real time."
        />

        {/* Mobile/Tablet Quick Selector Pills */}
        <div className="flex md:hidden flex-wrap items-center justify-center gap-2 mb-8">
          {subsystems.map((sub) => {
            const isSelected = sub.id === activeSystemId;
            return (
              <button
                key={sub.id}
                onClick={() => {
                  setActiveSystemId(sub.id);
                  setHoveredPoint(null);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-lg border border-blue-400'
                    : 'bg-white/[0.05] text-slate-400 border border-white/10'
                }`}
              >
                <span>{sub.icon}</span>
                <span>{sub.name}</span>
              </button>
            );
          })}
        </div>

        {/* Constellation Container: 10 Orbiting Satellites + Central Dashboard */}
        <div className="relative w-full max-w-6xl mx-auto min-h-[760px] lg:min-h-[840px] flex items-center justify-center pt-8 pb-12">
          {/* SVG Curved Flowing Connector Lines */}
          <svg
            className="absolute inset-0 hidden md:block size-full pointer-events-none z-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="marvel-active-glow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#0066FF" stopOpacity="0.95" />
              </linearGradient>
            </defs>

            {subsystems.map((sub) => {
              const isSelected = sub.id === activeSystemId;
              const pathD = `M ${sub.coords.x} ${sub.coords.y} Q ${sub.curve.cx} ${sub.curve.cy} ${sub.target.x} ${sub.target.y}`;

              return (
                <path
                  key={sub.id}
                  d={pathD}
                  fill="none"
                  stroke={isSelected ? 'url(#marvel-active-glow)' : 'rgba(255, 255, 255, 0.18)'}
                  strokeOpacity={isSelected ? 1 : 0.45}
                  strokeWidth={isSelected ? 2.4 : 1.2}
                  strokeDasharray={isSelected ? '6 3' : '3 4'}
                  vectorEffect="non-scaling-stroke"
                  className={isSelected ? 'dc-flow transition-all duration-300' : 'transition-all duration-300'}
                />
              );
            })}
          </svg>

          {/* 10 Orbiting Floating Satellites (Desktop) */}
          {subsystems.map((sub) => {
            const isSelected = sub.id === activeSystemId;

            return (
              <div
                key={sub.id}
                className="absolute hidden md:block -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                style={{
                  left: `${sub.coords.x}%`,
                  top: `${sub.coords.y}%`,
                }}
                onClick={() => {
                  setActiveSystemId(sub.id);
                  setHoveredPoint(null);
                }}
                onMouseEnter={() => {
                  setActiveSystemId(sub.id);
                  setHoveredPoint(null);
                }}
              >
                <div
                  className={`dc-bob flex items-center gap-2.5 rounded-2xl px-3.5 py-2 text-xs font-semibold whitespace-nowrap transition-all duration-300 select-none shadow-2xl backdrop-blur-xl ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-900/95 to-indigo-950/95 text-cyan-300 border-2 border-cyan-400 shadow-[0_0_35px_rgba(0,210,255,0.6)] scale-110 ring-2 ring-cyan-400/40'
                      : 'bg-[#090e1c]/90 text-slate-300 border border-white/15 hover:border-cyan-400/50 hover:text-white hover:scale-105'
                  }`}
                  style={
                    {
                      '--dur': sub.dur,
                      '--bob-delay': sub.delay,
                    } as React.CSSProperties
                  }
                >
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-cyan-500/25 text-cyan-300' : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    {sub.icon}
                  </div>
                  <span className="tracking-tight">{sub.name}</span>
                </div>
              </div>
            );
          })}

          {/* Central Command Center Window */}
          <div className="relative z-10 w-full max-w-xl lg:max-w-2xl mt-24 sm:mt-28 rounded-3xl bg-[#080d1a]/95 border border-white/15 p-5 sm:p-7 shadow-[0_30px_90px_-20px_rgba(0,102,255,0.4)] backdrop-blur-2xl transition-all duration-300">
            {/* Window Top Controls */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57] inline-block shadow-[0_0_8px_rgba(255,95,87,0.5)]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e] inline-block shadow-[0_0_8px_rgba(254,188,46,0.5)]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840] inline-block shadow-[0_0_8px_rgba(40,200,64,0.5)]" />
                <span className="ml-2 font-mono text-xs text-slate-400 font-medium truncate max-w-[260px] sm:max-w-none">
                  {currentSystem.windowTitle}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/10 text-[11px] font-mono text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sync
                </span>
              </div>
            </div>

            {/* Dashboard Header Bar + Timeframe Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span>Good morning, Admin</span>
                  <span className="text-cyan-400 text-xs font-mono font-normal">
                    [{currentSystem.name}]
                  </span>
                </h4>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  {currentSystem.adminSubtitle}
                </p>
              </div>

              {/* Timeframe Filter Buttons */}
              <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-lg border border-white/10 self-start">
                {(['Today', 'This week', 'This month'] as const).map((tf) => (
                  <button
                    key={tf}
                    onClick={() => {
                      setTimeframe(tf);
                      setHoveredPoint(null);
                    }}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-all cursor-pointer ${
                      timeframe === tf
                        ? 'bg-blue-600 text-white shadow-sm font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            {/* 4 Metric Tiles Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {currentData.metrics.map((m) => (
                <div
                  key={m.label}
                  className={`rounded-xl border p-3 transition-colors ${
                    m.isHighlight
                      ? 'border-cyan-500/40 bg-cyan-500/10'
                      : 'border-white/10 bg-white/[0.03]'
                  }`}
                >
                  <p className="truncate text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {m.label}
                  </p>
                  <p className="mt-1 font-mono text-base sm:text-lg font-bold text-white leading-tight">
                    {m.value}
                  </p>
                  <p
                    className={`text-[11px] font-mono font-semibold mt-0.5 ${
                      m.isHighlight ? 'text-cyan-300' : 'text-emerald-400'
                    }`}
                  >
                    {m.change}
                  </p>
                </div>
              ))}
            </div>

            {/* Scrubbable Telemetry Chart */}
            <div className="rounded-2xl border border-white/10 bg-black/50 p-4 relative">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-white flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Telemetry Pulse (Hover chart to scrub)</span>
                </span>
                <span className="text-xs font-mono font-bold text-cyan-400">
                  {hoveredPoint ? `${hoveredPoint.day}: ${hoveredPoint.value}` : currentData.chartTotal}
                </span>
              </div>

              {/* Dynamic SVG Wave Chart with hover hit zones */}
              <div
                className="relative h-28 sm:h-32 w-full cursor-crosshair"
                onMouseLeave={() => setHoveredPoint(null)}
              >
                <svg
                  viewBox="0 0 400 120"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="marvel-chart-gradient-v2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#0066FF" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Grid guidelines */}
                  <line x1="0" x2="400" y1="30" y2="30" stroke="white" strokeOpacity="0.06" />
                  <line x1="0" x2="400" y1="60" y2="60" stroke="white" strokeOpacity="0.06" />
                  <line x1="0" x2="400" y1="90" y2="90" stroke="white" strokeOpacity="0.06" />

                  {/* Filled Area */}
                  <path d={currentData.chartArea} fill="url(#marvel-chart-gradient-v2)" />

                  {/* Top Glowing Stroke */}
                  <path
                    d={currentData.chartPoints}
                    fill="none"
                    stroke="#00D2FF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Scrub Vertical Line & Point */}
                  {hoveredPoint && (
                    <>
                      <line
                        x1={hoveredPoint.x}
                        x2={hoveredPoint.x}
                        y1="0"
                        y2="120"
                        stroke="#00D2FF"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                        strokeOpacity="0.8"
                      />
                      <circle
                        cx={hoveredPoint.x}
                        cy={hoveredPoint.y}
                        r="5"
                        fill="#00D2FF"
                        stroke="#ffffff"
                        strokeWidth="2"
                        className="animate-pulse"
                      />
                    </>
                  )}
                </svg>

                {/* Invisible hit testing slices for scrubbing */}
                <div className="absolute inset-0 flex justify-between">
                  {currentData.timeline.map((point) => (
                    <div
                      key={point.day}
                      className="flex-1 h-full"
                      onMouseEnter={() => setHoveredPoint(point)}
                    />
                  ))}
                </div>

                {/* Floating Scrub Tooltip */}
                {hoveredPoint && (
                  <div
                    className="absolute pointer-events-none -top-1 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-cyan-400 text-[11px] font-mono text-white shadow-xl -translate-x-1/2 backdrop-blur-md"
                    style={{ left: `${(hoveredPoint.x / 400) * 100}%` }}
                  >
                    <span className="text-cyan-300 font-bold">{hoveredPoint.day}:</span>{' '}
                    <span>{hoveredPoint.value}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Insight Footer */}
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="truncate">{currentSystem.description}</span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold shrink-0 ml-2"
              >
                <span>Deploy Module</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Companies We Build For Slideshow / Marquee */}
        <CompaniesMarquee />
      </div>
    </section>
  );
}
