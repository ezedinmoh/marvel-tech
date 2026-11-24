import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'cyan' | 'purple' | 'slate' | 'emerald';
  className?: string;
  dot?: boolean;
}

export function Badge({
  children,
  variant = 'blue',
  className = '',
  dot = false,
}: BadgeProps) {
  const variants = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    purple: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    slate: 'bg-slate-800/80 text-slate-300 border-slate-700/50',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  }[variant];

  const dotColors = {
    blue: 'bg-blue-400',
    cyan: 'bg-cyan-400',
    purple: 'bg-indigo-400',
    slate: 'bg-slate-400',
    emerald: 'bg-emerald-400 animate-pulse',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-md ${variants} ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColors}`} />}
      {children}
    </span>
  );
}
