import React from 'react';
import { Badge } from './Badge';

interface SectionHeadingProps {
  badge?: string;
  badgeDot?: boolean;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  badge,
  badgeDot = true,
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'} mb-8 sm:mb-12 lg:mb-16 ${className}`}>
      {badge && (
        <div
          className="mb-2.5 sm:mb-4 dc-reveal"
          data-reveal="dropdown"
          style={{ '--reveal-delay': '0ms' } as React.CSSProperties}
        >
          <Badge variant="cyan" dot={badgeDot}>
            {badge}
          </Badge>
        </div>
      )}

      <h2
        className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.18] sm:leading-[1.15] dc-reveal"
        data-reveal="zoom-out"
        style={{ '--reveal-delay': '75ms' } as React.CSSProperties}
      >
        {title}{' '}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          className="mt-2.5 sm:mt-4 text-xs sm:text-base text-slate-400 max-w-2xl leading-relaxed font-normal dc-reveal"
          data-reveal="fade-scale"
          style={{ '--reveal-delay': '140ms' } as React.CSSProperties}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
