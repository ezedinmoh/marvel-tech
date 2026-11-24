'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import {
  Globe,
  Smartphone,
  Server,
  Database,
  CreditCard,
  Send,
  Zap,
  Shield,
  Layers,
  Code,
  CheckCircle,
} from 'lucide-react';

interface LayerInfo {
  id: string;
  name: string;
  badge: string;
  headline: string;
  description: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  codeSample: string;
}

const layers: LayerInfo[] = [
  {
    id: 'frontend',
    name: '01 / Edge & Frontend',
    badge: 'Presentation Layer',
    headline: 'Sub-second SSR & Universal Mobile Interfaces',
    description:
      'High-velocity consumer and administrative experiences engineered with Next.js 15 App Router and React Native. Optimized with streaming SSR, dynamic imports, and instant edge CDN hydration.',
    tech: ['Next.js 15', 'React 19', 'React Native', 'Tailwind CSS', 'TypeScript'],
    metrics: [
      { label: 'Edge Hydration', value: '< 45ms' },
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'Asset Payload', value: '48 KB compressed' },
    ],
    codeSample: `// Next.js App Router Edge Handler
export const runtime = 'edge';

export async function GET(request: Request) {
  const telemetry = await getEdgeTelemetry();
  return Response.json({ status: 200, latency: '12ms', telemetry });
}`,
  },
  {
    id: 'gateway',
    name: '02 / API & Logic Core',
    badge: 'Microservices & Routing',
    headline: 'Resilient Microservices & Event Orchestration',
    description:
      'Stateless, horizontal-scaling backend services built on Node.js and Express. Features cryptographic JWT token validation, rate-limiting shields, and transactional event streams.',
    tech: ['Node.js', 'Express', 'JWT Auth', 'Redis Queues', 'Docker'],
    metrics: [
      { label: 'Throughput', value: '12,000 req/sec' },
      { label: 'Error Rate', value: '0.001%' },
      { label: 'Availability', value: '99.95%' },
    ],
    codeSample: `// Authenticated Microservice Handler
router.post('/v1/process-mission', verifyAuth, rateLimit(100), async (req, res) => {
  const job = await dispatchQueue.add('order-sync', req.body);
  res.status(202).json({ jobId: job.id, status: 'enqueued' });
});`,
  },
  {
    id: 'database',
    name: '03 / Persistence & Cache',
    badge: 'Data Integrity',
    headline: 'ACID-Compliant Relational Schemas & In-Memory Caching',
    description:
      'Rock-solid PostgreSQL persistence layer orchestrated with Prisma ORM. Paired with in-memory Redis caching clusters to eliminate cold reads and prevent database throttling.',
    tech: ['PostgreSQL', 'Prisma ORM', 'Redis', 'Connection Pooling', 'Automated Backups'],
    metrics: [
      { label: 'Query Latency', value: '< 2.4ms (p95)' },
      { label: 'Cache Hit Rate', value: '94.2%' },
      { label: 'Replication Lag', value: '0.0s' },
    ],
    codeSample: `// Type-Safe Prisma Relational Query
const activeSession = await prisma.systemNode.findUnique({
  where: { id: nodeId },
  include: { auditLogs: { take: 10, orderBy: { createdAt: 'desc' } } },
});`,
  },
  {
    id: 'integrations',
    name: '04 / Integrations & Webhooks',
    badge: 'Connective Tissue',
    headline: 'Reliable Payment Gateways & Automated Dispatch',
    description:
      'Seamlessly connects Telebirr, Chapa, Stripe, and Telegram bots. Features automated webhook retries with exponential backoffs and dead-letter queue isolation for guaranteed delivery.',
    tech: ['Telebirr SDK', 'Chapa Pay', 'Telegram Bot API', 'Stripe', 'Webhook Queues'],
    metrics: [
      { label: 'Webhook SLA', value: '99.99%' },
      { label: 'Max Retry Buffer', value: '72 Hours' },
      { label: 'Signature Check', value: 'HMAC-SHA256' },
    ],
    codeSample: `// Webhook Signature & Idempotency Pipeline
export async function handlePaymentWebhook(req: Request) {
  const sig = req.headers.get('x-gateway-signature');
  verifyHmac(req.rawBody, sig, process.env.SECRET_KEY);
  await markTransactionSettled(req.body.referenceId);
}`,
  },
];

export function InteractiveSystem() {
  const [selectedLayerId, setSelectedLayerId] = useState('frontend');
  const activeLayer = layers.find((l) => l.id === selectedLayerId) || layers[0];

  return (
    <section id="system" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="System Architecture"
          title="How Marvel Technologies Connects"
          highlight="The Complete Digital Stack."
          subtitle="Explore the interactive layers of our architectural blueprint—from client viewports to cloud data persistence."
        />

        {/* Layer Selector Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {layers.map((layer) => {
            const isSelected = layer.id === selectedLayerId;
            return (
              <button
                key={layer.id}
                onClick={() => setSelectedLayerId(layer.id)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-mono transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(0,102,255,0.4)] border border-blue-400'
                    : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {layer.name}
              </button>
            );
          })}
        </div>

        {/* Interactive Architecture Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details Panel */}
          <div className="lg:col-span-6 rounded-3xl bg-[#090e1c] border border-white/15 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
                {activeLayer.badge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                {activeLayer.headline}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {activeLayer.description}
              </p>

              {/* Technologies Badges */}
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                  Core Technologies in this Layer:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeLayer.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.05] text-slate-200 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Telemetry Strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
              {activeLayer.metrics.map((m) => (
                <div key={m.label}>
                  <div className="text-lg sm:text-xl font-bold font-mono text-cyan-400">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-slate-400 uppercase font-mono mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Live Code & Diagram Terminal */}
          <div className="lg:col-span-6 rounded-3xl bg-[#03060f] border border-white/15 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" />
                <span>layer-spec.{activeLayer.id}.ts</span>
              </div>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                Validated
              </span>
            </div>

            <pre className="p-4 rounded-xl bg-black/60 font-mono text-xs sm:text-sm text-cyan-300 overflow-x-auto leading-relaxed my-4 border border-white/5">
              <code>{activeLayer.codeSample}</code>
            </pre>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Standard: Strict TypeScript · Zero Runtime Errors</span>
              <span className="text-blue-400 font-bold">Marvel Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
