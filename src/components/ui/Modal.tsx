'use client';

import React, { useEffect, useRef } from 'react';
import { X, ArrowLeft } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  badge?: string;
  size?: 'md' | 'lg' | 'xl' | '2xl' | '5xl';
  children: React.ReactNode;
}

export function Modal({
  isOpen,
  onClose,
  title,
  badge,
  size = '5xl',
  children,
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // 1. Pause Lenis smooth scroll so outside doesn't scroll
    if (typeof window !== 'undefined' && window.__lenis) {
      window.__lenis.stop();
    }

    // 2. Lock body & html scroll
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // 3. Keyboard handlers (ESC to close)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // 4. Browser Back Button integration (popstate)
    const modalHistoryState = { modalOpen: true, timestamp: Date.now() };
    window.history.pushState(modalHistoryState, '');

    const handlePopState = (e: PopStateEvent) => {
      onClose();
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      // Restore Lenis smooth scroll
      if (typeof window !== 'undefined' && window.__lenis) {
        window.__lenis.start();
      }
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    md: 'max-w-md',
    lg: 'max-w-2xl',
    xl: 'max-w-3xl',
    '2xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
  }[size];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
      data-lenis-prevent="true"
    >
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
        data-lenis-prevent="true"
      />

      {/* Modal Dialog Box */}
      <div
        ref={dialogRef}
        data-lenis-prevent="true"
        className={`relative w-full ${sizeClasses} max-h-[92vh] flex flex-col rounded-2xl sm:rounded-3xl bg-[#080d1d] border border-white/15 shadow-[0_0_60px_rgba(0,102,255,0.3)] z-10 overflow-hidden overscroll-contain animate-in fade-in zoom-in-95 duration-200`}
      >
        {/* Sticky Modal Top Bar with explicit Back button & Close X */}
        <div className="shrink-0 flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 bg-[#060b17]/95 border-b border-white/10 gap-3 backdrop-blur-md z-20">
          <div className="flex items-center gap-3 min-w-0">
            {/* Top Back / Return button */}
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/20 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
              title="Return / Close"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Back</span>
            </button>

            <div className="min-w-0">
              {badge && (
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-blue-500/10 text-cyan-400 border border-blue-500/20 mb-1">
                  {badge}
                </span>
              )}
              <h3 className="text-base sm:text-xl font-bold text-white tracking-tight truncate">
                {title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content Body with independent scroll & Lenis prevention */}
        <div
          data-lenis-prevent="true"
          className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 text-slate-300 leading-relaxed space-y-4 overscroll-contain"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {children}
        </div>

        {/* Sticky Modal Footer with Cancel & Return button */}
        <div className="shrink-0 flex items-center justify-between px-5 sm:px-8 py-3.5 bg-[#060b17]/95 border-t border-white/10 text-xs backdrop-blur-md z-20">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white font-medium transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Close & Return to Projects</span>
          </button>

          <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
            Press ESC or click outside to dismiss
          </span>
        </div>
      </div>
    </div>
  );
}
