import React from 'react';

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Top Hero Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent blur-3xl opacity-70" />

      {/* Mid Right Subtle Ambient Cyan Glow */}
      <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] opacity-40" />

      {/* Mid Left Subtle Indigo Glow */}
      <div className="absolute top-[65%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] opacity-40" />

      {/* Bottom Gradient Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-700/10 blur-3xl opacity-50" />
    </div>
  );
}
