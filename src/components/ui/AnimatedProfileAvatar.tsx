'use client';

import React from 'react';
import { Terminal, Cpu, Network, Zap, Shield, CheckCircle2, Activity } from 'lucide-react';

interface AnimatedProfileAvatarProps {
  type: 'ezedin' | 'sudeys';
  className?: string;
}

export function AnimatedProfileAvatar({ type, className = '' }: AnimatedProfileAvatarProps) {
  if (type === 'ezedin') {
    return (
      <div className={`relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#060e22] via-[#040916] to-[#02050c] select-none ${className}`}>
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,210,255,0.18),transparent_65%)] pointer-events-none" />
        
        {/* Subtle animated cyber grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

        {/* Orbiting Rotating HUD Ring */}
        <div className="absolute inset-4 sm:inset-6 rounded-full border border-dashed border-cyan-500/25 animate-[spin_24s_linear_infinite] pointer-events-none" />
        <div className="absolute inset-10 sm:inset-12 rounded-full border border-cyan-400/15 animate-[spin_16s_linear_infinite_reverse] pointer-events-none" />

        {/* Central Animated Vector Character */}
        <div className="relative z-10 w-full max-w-[170px] sm:max-w-[200px] h-[180px] sm:h-[210px] flex items-center justify-center">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-[0_0_25px_rgba(0,180,255,0.35)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="ez-face" x1="100" y1="50" x2="100" y2="125" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38bdf8" stopOpacity="0.2" />
                <stop offset="1" stopColor="#0284c7" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="ez-visor" x1="70" y1="78" x2="130" y2="78" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00f2fe" />
                <stop offset="0.5" stopColor="#4facfe" />
                <stop offset="1" stopColor="#00c6ff" />
              </linearGradient>
              <linearGradient id="ez-hoodie" x1="100" y1="120" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0f172a" />
                <stop offset="0.5" stopColor="#090e1c" />
                <stop offset="1" stopColor="#030712" />
              </linearGradient>
              <linearGradient id="ez-circuit" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38bdf8" stopOpacity="0.6" />
                <stop offset="1" stopColor="#818cf8" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Circuit Background Flow Lines */}
            <path
              d="M 25 100 L 60 100 L 75 125 M 175 100 L 140 100 L 125 125 M 100 20 L 100 45"
              stroke="url(#ez-circuit)"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              className="opacity-40 animate-pulse"
            />

            {/* Shoulders & Developer Cyber Hoodie */}
            <path
              d="M 40 200 C 40 152 65 132 82 125 L 100 142 L 118 125 C 135 132 160 152 160 200 Z"
              fill="url(#ez-hoodie)"
              stroke="#00d2ff"
              strokeWidth="1.5"
              strokeOpacity="0.4"
            />
            {/* Hoodie Inner Trim & Neon Seam */}
            <path
              d="M 78 127 L 100 155 L 122 127"
              stroke="#00d2ff"
              strokeWidth="2"
              strokeLinecap="round"
              className="drop-shadow-[0_0_8px_#00d2ff]"
            />
            <path
              d="M 100 155 L 100 200"
              stroke="#00d2ff"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              strokeOpacity="0.6"
            />

            {/* Neck / Collar */}
            <rect x="91" y="112" width="18" height="20" rx="3" fill="#0c182e" stroke="#0284c7" strokeWidth="1" />

            {/* Head & Face Contour */}
            <path
              d="M 72 70 C 72 45 84 35 100 35 C 116 35 128 45 128 70 C 128 96 117 114 100 114 C 83 114 72 96 72 70 Z"
              fill="url(#ez-face)"
              stroke="#38bdf8"
              strokeWidth="1.8"
              className="drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]"
            />

            {/* Short Tech Hair Silhouette */}
            <path
              d="M 70 65 C 68 45 80 32 100 32 C 120 32 132 45 130 65 C 124 48 114 42 100 42 C 86 42 76 48 70 65 Z"
              fill="#061226"
            />

            {/* Glowing Tech Visor / Augmented Glasses with Pulse */}
            <rect
              x="69"
              y="68"
              width="62"
              height="18"
              rx="9"
              fill="url(#ez-visor)"
              className="animate-pulse"
              style={{ filter: 'drop-shadow(0 0 10px #00f2fe)' }}
            />
            {/* Visor Glare & Crosshairs */}
            <line x1="78" y1="77" x2="122" y2="77" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.8" />
            <circle cx="86" cy="77" r="2.5" fill="#ffffff" />
            <circle cx="114" cy="77" r="2.5" fill="#ffffff" />

            {/* Chin / Smile hint */}
            <path d="M 94 99 Q 100 102 106 99" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.7" />
          </svg>
        </div>

        {/* Floating Futuristic Hologram Pills */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 backdrop-blur-md shadow-lg animate-pulse max-w-[130px] truncate">
          <Terminal className="w-3 h-3 text-cyan-400 shrink-0" />
          <span className="truncate">Next.js 16 · TS</span>
        </div>

        <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-[10px] font-mono text-blue-300 backdrop-blur-md shadow-lg">
          <Activity className="w-3 h-3 text-emerald-400 animate-spin" />
          <span>Core Architect</span>
        </div>

        {/* Live Audio / Code Telemetry Wave at Bottom */}
        <div className="absolute bottom-3 left-4 flex items-end gap-0.5 h-4 pointer-events-none opacity-80">
          <span className="w-1 bg-cyan-400 rounded-full animate-[pulse_1s_ease-in-out_infinite] h-2" />
          <span className="w-1 bg-cyan-400 rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-4" />
          <span className="w-1 bg-cyan-400 rounded-full animate-[pulse_1.2s_ease-in-out_infinite] h-3" />
          <span className="w-1 bg-cyan-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite] h-1.5" />
        </div>
      </div>
    );
  }

  // Profile 2: Sudeys Ibrahim (Operations & Agile Execution Lead)
  return (
    <div className={`relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#100b24] via-[#09071c] to-[#04030d] select-none ${className}`}>
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(168,85,247,0.18),transparent_65%)] pointer-events-none" />

      {/* Subtle animated cyber grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Orbiting Rotating Radar Rings */}
      <div className="absolute inset-4 sm:inset-6 rounded-full border border-dashed border-purple-500/25 animate-[spin_28s_linear_infinite] pointer-events-none" />
      <div className="absolute inset-10 sm:inset-12 rounded-full border border-indigo-400/20 animate-[spin_18s_linear_infinite_reverse] pointer-events-none" />

      {/* Central Animated Vector Character */}
      <div className="relative z-10 w-full max-w-[170px] sm:max-w-[200px] h-[180px] sm:h-[210px] flex items-center justify-center">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="si-face" x1="100" y1="50" x2="100" y2="125" gradientUnits="userSpaceOnUse">
              <stop stopColor="#c084fc" stopOpacity="0.22" />
              <stop offset="1" stopColor="#7e22ce" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="si-suit" x1="100" y1="120" x2="100" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1e1b4b" />
              <stop offset="0.5" stopColor="#0f0d26" />
              <stop offset="1" stopColor="#04020c" />
            </linearGradient>
            <linearGradient id="si-headset" x1="120" y1="50" x2="150" y2="90" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00d2ff" />
              <stop offset="1" stopColor="#c084fc" />
            </linearGradient>
            <linearGradient id="si-network" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="#c084fc" stopOpacity="0.6" />
              <stop offset="1" stopColor="#38bdf8" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* Network Flow & Telemetry Nodes in Background */}
          <path
            d="M 30 80 Q 60 60 70 85 M 170 80 Q 140 60 130 85 M 100 15 L 100 35"
            stroke="url(#si-network)"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            className="opacity-40 animate-pulse"
          />
          <circle cx="30" cy="80" r="3" fill="#c084fc" className="animate-ping" />
          <circle cx="170" cy="80" r="3" fill="#38bdf8" className="animate-ping" />

          {/* Executive Cyber Blazer & Collar */}
          <path
            d="M 40 200 C 40 150 64 130 82 124 L 100 158 L 118 124 C 136 130 160 150 160 200 Z"
            fill="url(#si-suit)"
            stroke="#a855f7"
            strokeWidth="1.5"
            strokeOpacity="0.45"
          />
          {/* Cybernetic Lapel & Sharp Tie Inlay */}
          <path
            d="M 82 124 L 100 168 L 118 124"
            stroke="#c084fc"
            strokeWidth="2"
            strokeLinecap="round"
            className="drop-shadow-[0_0_8px_#c084fc]"
          />
          <path
            d="M 100 150 L 100 200"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />

          {/* Neck / Collar */}
          <rect x="91" y="110" width="18" height="20" rx="3" fill="#130e2e" stroke="#7e22ce" strokeWidth="1" />

          {/* Head & Face Contour */}
          <path
            d="M 72 70 C 72 45 84 35 100 35 C 116 35 128 45 128 70 C 128 96 117 114 100 114 C 83 114 72 96 72 70 Z"
            fill="url(#si-face)"
            stroke="#c084fc"
            strokeWidth="1.8"
            className="drop-shadow-[0_0_15px_rgba(192,132,252,0.3)]"
          />

          {/* Clean Executive Hair Cut */}
          <path
            d="M 70 65 C 68 44 80 32 100 32 C 120 32 132 44 130 65 C 125 46 115 40 100 40 C 85 40 75 46 70 65 Z"
            fill="#090518"
          />

          {/* Smart Comms Headset / Earpiece Interface */}
          <path
            d="M 126 58 C 132 58 136 64 136 72 C 136 80 132 84 126 84"
            stroke="url(#si-headset)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-pulse"
          />
          <path
            d="M 132 78 L 114 96"
            stroke="#00d2ff"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="drop-shadow-[0_0_6px_#00d2ff]"
          />
          <circle cx="114" cy="96" r="3" fill="#00d2ff" className="animate-ping" />

          {/* Confident Tech Eye Accents */}
          <path d="M 82 72 Q 88 70 94 72" stroke="#e9d5ff" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 106 72 Q 112 70 118 72" stroke="#e9d5ff" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="88" cy="76" r="2" fill="#38bdf8" />
          <circle cx="112" cy="76" r="2" fill="#38bdf8" />

          {/* Subtle Smile */}
          <path d="M 94 98 Q 100 102 106 98" stroke="#c084fc" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8" />
        </svg>
      </div>

      {/* Floating Futuristic Hologram Pills */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-[10px] font-mono text-purple-300 backdrop-blur-md shadow-lg animate-pulse max-w-[130px] truncate">
        <Network className="w-3 h-3 text-purple-400 shrink-0" />
        <span className="truncate">Agile · Ops</span>
      </div>

      <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/40 text-[10px] font-mono text-indigo-300 backdrop-blur-md shadow-lg">
        <Shield className="w-3 h-3 text-cyan-400 shrink-0" />
        <span>Quality Assured</span>
      </div>

      {/* Live Operations Pulse Dots at Bottom */}
      <div className="absolute bottom-3 left-4 flex items-center gap-1.5 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-[10px] font-mono text-emerald-400 font-semibold tracking-wide">Sync Live</span>
      </div>
    </div>
  );
}
