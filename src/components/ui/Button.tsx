'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconRight,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.15, y: y * 0.15 });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const baseStyles =
    'relative inline-flex items-center justify-center font-semibold transition-all duration-300 select-none rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#040711] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden active:scale-[0.98]';

  const sizes = {
    sm: 'text-xs px-4 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3 gap-2.5',
  }[size];

  const variants = {
    primary:
      'bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-[0_0_25px_rgba(0,102,255,0.4)] hover:shadow-[0_0_35px_rgba(0,210,255,0.6)] border border-blue-400/40 hover:scale-[1.02]',
    secondary:
      'bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700/60 hover:border-slate-500 shadow-sm hover:scale-[1.02]',
    outline:
      'bg-transparent hover:bg-white/[0.08] text-slate-200 border border-white/20 hover:border-cyan-400/50 hover:text-white hover:scale-[1.02]',
    ghost: 'bg-transparent hover:bg-white/[0.08] text-slate-300 hover:text-white',
  }[variant];

  const content = (
    <>
      {/* Subtle Shimmer overlay on hover */}
      {variant === 'primary' && (
        <span
          className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent"
          aria-hidden="true"
        />
      )}
      {icon && <span className="shrink-0 relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {iconRight && (
        <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 relative z-10">
          {iconRight}
        </span>
      )}
    </>
  );

  const styleTransform =
    offset.x !== 0 || offset.y !== 0
      ? { transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }
      : undefined;

  if (href) {
    return (
      <Link
        ref={btnRef as React.Ref<HTMLAnchorElement>}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={styleTransform}
        className={`${baseStyles} ${sizes} ${variants} ${className} group`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={btnRef as React.Ref<HTMLButtonElement>}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={styleTransform}
      className={`${baseStyles} ${sizes} ${variants} ${className} group`}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
