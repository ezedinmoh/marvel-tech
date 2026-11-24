'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import {
  Store,
  UtensilsCrossed,
  Truck,
  Stethoscope,
  GraduationCap,
  Building2,
  Wallet,
  Factory,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface IndustryItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  features: string[];
  sampleDeliverables: string[];
  referenceProject?: string;
}

export function IndustrySolutions() {
  const industries: IndustryItem[] = [
    {
      id: 'retail',
      name: 'Retail & Ecommerce',
      icon: <Store className="w-5 h-5 text-cyan-400" />,
      tagline: 'High-Conversion Online Stores & Automated Inventory Sync',
      description:
        'End-to-end commerce platforms with instant checkout, live inventory tracking across branches, dual international/local payments, and warehouse fulfillment.',
      features: [
        'Sub-second cart & checkout flows with guest options',
        'Stripe & Ethiopian Chapa payment gateway integrations',
        'Real-time inventory deduction across multiple physical stores',
        'Automated order status dispatch via Telegram & SMS',
      ],
      sampleDeliverables: ['Next.js Storefront', 'Split-Screen Admin Manager', 'Inventory Sync Engine'],
      referenceProject: 'WEARIFY & ANBESSA',
    },
    {
      id: 'hospitality',
      name: 'Restaurants & Cafés',
      icon: <UtensilsCrossed className="w-5 h-5 text-amber-400" />,
      tagline: 'Contactless Table QR Menus & Kitchen Display Systems',
      description:
        'Digitize customer ordering, table-side payments, kitchen order ticketing (KOT), and seasonal fasting menu management with zero app installation needed.',
      features: [
        'Instant table-side QR code menu launching with zero download',
        'Bilingual English & Amharic item descriptions and modifiers',
        'Direct kitchen station ticket routing and order timers',
        'Automated daily sales tally and revenue analytics',
      ],
      sampleDeliverables: ['Progressive Web App (PWA)', 'Table QR Matrix', 'Kitchen Dispatch Terminal'],
      referenceProject: 'Amore Cafe & Restaurant',
    },
    {
      id: 'logistics',
      name: 'Logistics & Transit',
      icon: <Truck className="w-5 h-5 text-blue-400" />,
      tagline: 'Fleet Telemetry, Interactive Seat Locks & Ticketing',
      description:
        'Digital dispatch and route booking platforms engineered for ground freight, passenger transport, and parcel couriers with real-time tracking.',
      features: [
        'Interactive vehicle seat map reservation with concurrency locks',
        'Cryptographic QR boarding pass generation and scanner apps',
        'Multi-depot route scheduling and automated ticket pricing',
        'Driver manifest exports and passenger manifest verification',
      ],
      sampleDeliverables: ['Ticketing Engine', 'Scanner Mobile PWA', 'Fleet Admin Portal'],
      referenceProject: 'SwiftBus Booking Platform',
    },
    {
      id: 'healthcare',
      name: 'Health & Clinics',
      icon: <Stethoscope className="w-5 h-5 text-emerald-400" />,
      tagline: 'Secure Patient Records, Doctor Rosters & Teleconsultation',
      description:
        'HIPAA-inspired clinic management systems for patient registration, doctor appointment bookings, diagnostic lab tracking, and digital billing.',
      features: [
        'Role-based access control protecting confidential patient files',
        'Automated SMS appointment reminders reducing no-show rates',
        'Prescription history logging and lab result uploads',
        'Multi-specialist doctor availability calendar and billing',
      ],
      sampleDeliverables: ['Doctor Scheduling Dashboard', 'Patient Portal', 'Pharmacy Inventory'],
    },
    {
      id: 'education',
      name: 'Education & LMS',
      icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
      tagline: 'Online Learning Management, Student Records & QR Passes',
      description:
        'Unified educational platforms connecting administrators, instructors, and students with video streaming, assignments, gradebooks, and library management.',
      features: [
        'Course video streaming with progressive bandwidth adaptation',
        'Dynamic student ID pass generation with instant QR validation',
        'Tuition fee collection and automated digital receipts',
        'Integrated library borrowing system with overdue alerts',
      ],
      sampleDeliverables: ['Student LMS Portal', 'Instructor Gradebook', 'Digital Library Suite'],
      referenceProject: 'Smart Library Platform',
    },
    {
      id: 'fintech',
      name: 'Finance & Fintech',
      icon: <Wallet className="w-5 h-5 text-cyan-300" />,
      tagline: 'Cryptographic Ledgering, Payment Gateways & Microloans',
      description:
        'Secure transactional microservices with idempotent payment routing, double-entry ledgers, fraud detection rules, and automated audit reconciliation.',
      features: [
        'Sub-15ms proxy routing latency with Redis caching layer',
        'HMAC-SHA256 signature verification for payment callbacks',
        'Automated financial settlement and bank transfer exports',
        'Granular immutable audit logs for compliance requirements',
      ],
      sampleDeliverables: ['Payment Microservice', 'Reconciliation Dashboard', 'Webhook Mesh'],
      referenceProject: 'Strata Cloud API Mesh',
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing & Trade',
      icon: <Factory className="w-5 h-5 text-violet-400" />,
      tagline: 'Production Batch Tracking, Bill of Materials & Procurement',
      description:
        'Custom enterprise ERP platforms mapping raw materials intake, factory floor production stages, wholesale distribution, and invoice generation.',
      features: [
        'Bill of Materials (BOM) cost estimation and inventory tracking',
        'Multi-stage quality assurance checkoffs on factory floor',
        'Wholesale B2B buyer ordering and credit term tracking',
        'Automated batch PDF invoice and delivery waybill generation',
      ],
      sampleDeliverables: ['Factory ERP System', 'Procurement Portal', 'B2B Client Portal'],
    },
    {
      id: 'corporate',
      name: 'Corporate & Automotive',
      icon: <Building2 className="w-5 h-5 text-rose-400" />,
      tagline: 'Brand Storytelling, Interactive Showrooms & Global PR',
      description:
        'High-velocity corporate brand websites and automotive 360 showrooms designed to elevate market credibility, engage investors, and capture qualified inquiries.',
      features: [
        'Interactive 360-degree vehicle showroom and technical specs',
        'Sustainability impact dashboards and corporate milestones',
        'Multilingual internationalization with edge CDN distribution',
        'Sub-second Lighthouse 95+ performance optimization',
      ],
      sampleDeliverables: ['Corporate Web Experience', 'Interactive 360 Showroom', 'Press Portal'],
      referenceProject: 'Holland Dairy & BYD Ethiopia',
    },
  ];

  const [activeTabId, setActiveTabId] = useState<string>('retail');
  const activeIndustry = industries.find((i) => i.id === activeTabId) || industries[0];

  return (
    <section id="industries" className="py-24 sm:py-32 relative bg-[#03060f]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Domain Versatility"
          title="Digital Systems Tailored for"
          highlight="Every Vertical."
          subtitle="Every industry has unique operational constraints. Explore how Marvel Technologies architects specialized software foundations tailored to your business model."
        />

        {/* Industry Pill Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {industries.map((ind) => {
            const isSelected = ind.id === activeTabId;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTabId(ind.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(0,102,255,0.4)] border border-blue-400'
                    : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                <span>{ind.icon}</span>
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Detail Card */}
        <div className="max-w-4xl mx-auto dc-reveal" data-reveal="scale">
          <Card className="p-8 sm:p-10 border-white/15 bg-gradient-to-br from-[#080d1a] to-[#040711] shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10">
                  {activeIndustry.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {activeIndustry.name}
                  </h3>
                  <span className="text-xs font-mono text-cyan-400">
                    {activeIndustry.tagline}
                  </span>
                </div>
              </div>

              {activeIndustry.referenceProject && (
                <div className="px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300">
                  Shipped: <span className="text-white font-semibold">{activeIndustry.referenceProject}</span>
                </div>
              )}
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              {activeIndustry.description}
            </p>

            {/* Core Capabilities */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
                Architecture Blueprint Highlights:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeIndustry.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables & CTA Strip */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-slate-500 uppercase">Deliverables:</span>
                {activeIndustry.sampleDeliverables.map((del) => (
                  <span
                    key={del}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300"
                  >
                    {del}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 shrink-0"
              >
                <span>Request {activeIndustry.name} Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
