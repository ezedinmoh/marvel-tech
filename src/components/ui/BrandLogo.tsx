'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'mark' | 'compact';
  asLink?: boolean;
}

export function BrandLogo({
  className = '',
  size = 'md',
  variant = 'full',
  asLink = true,
}: BrandLogoProps) {
  const [imageError, setImageError] = useState(false);

  // Dimensions based on size with exact 1.84:1 official mark aspect ratio
  const dimensions = {
    sm: { iconWidth: 40, iconHeight: 22, text: 'text-sm sm:text-base', sub: 'text-[9px]' },
    md: { iconWidth: 48, iconHeight: 26, text: 'text-base sm:text-lg', sub: 'text-[10px]' },
    lg: { iconWidth: 72, iconHeight: 39, text: 'text-lg sm:text-xl', sub: 'text-[11px]' },
  }[size];

  const content = (
    <div className={`flex items-center gap-2 sm:gap-3 select-none shrink-0 ${className}`}>
      {/* Official Supplied Marvel Technologies Brand Mark */}
      {!imageError ? (
        <div className="relative flex items-center justify-center shrink-0">
          <Image
            src="/brand/marvel-logo.png"
            alt="Marvel Technologies Logo"
            width={dimensions.iconWidth}
            height={dimensions.iconHeight}
            className="object-contain drop-shadow-[0_0_12px_rgba(0,166,255,0.35)] transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
            priority
          />
        </div>
      ) : (
        /* Bespoke Geometric Marvel Monogram Mark Fallback */
        <div
          className="relative flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-400 p-[1.5px] shadow-[0_0_20px_rgba(0,102,255,0.35)] shrink-0"
          style={{ width: dimensions.iconHeight, height: dimensions.iconHeight }}
        >
          <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#040711]">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3/4 h-3/4 text-white"
            >
              <path
                d="M6 24V8L16 17L26 8V24M16 17V24"
                stroke="url(#marvel-gradient)"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="marvel-gradient" x1="6" y1="8" x2="26" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00D2FF" />
                  <stop offset="0.5" stopColor="#0066FF" />
                  <stop offset="1" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      )}

      {/* Brand Logotype Typography */}
      {variant !== 'mark' && (
        <div className="flex flex-col shrink-0 min-w-0">
          <div className="flex items-center gap-1 sm:gap-1.5 leading-none">
            <span className={`font-black tracking-tight text-white uppercase ${dimensions.text}`}>
              Marvel
            </span>
            <span className={`font-light tracking-wide text-cyan-400 uppercase ${dimensions.text}`}>
              Tech
            </span>
          </div>
          <span
            className={`font-mono uppercase tracking-[0.22em] text-slate-400 font-medium mt-0.5 hidden sm:block ${dimensions.sub}`}
          >
            Technologies
          </span>
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link href="#hero" className="inline-flex items-center hover:opacity-95 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
}
