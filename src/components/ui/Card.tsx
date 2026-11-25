'use client';

import React, { useRef, useState } from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
  glow?: boolean;
  spotlight?: boolean;
  className?: string;
}

export function Card({
  children,
  hoverable = true,
  glow = false,
  spotlight = true,
  className = '',
  ...props
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!spotlight || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-2xl bg-[#090e1c]/85 border border-white/[0.08] backdrop-blur-xl transition-[transform,background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
        hoverable ? 'hover:border-white/[0.22] hover:bg-[#0e162c]/95 hover:-translate-y-1' : ''
      } ${
        glow ? 'shadow-[0_0_30px_rgba(0,102,255,0.12)] hover:shadow-[0_0_40px_rgba(0,102,255,0.25)]' : ''
      } ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      {spotlight && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 210, 255, 0.12), transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Content wrapper with relative positioning so it sits above the spotlight */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
