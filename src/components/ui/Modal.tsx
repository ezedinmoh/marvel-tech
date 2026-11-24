'use client';

import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ArrowLeft } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  badge?: string;
  closeLabel?: string;
  size?: 'md' | 'lg' | 'xl' | '2xl' | '5xl';
  children: React.ReactNode;
}

export function Modal({
  isOpen,
  onClose,
  title,
  badge,
  closeLabel = 'Close & Return',
  size = '5xl',
  children,
}: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const scrollPosRef = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    // 1. Pause Lenis completely
    if (typeof window !== 'undefined' && window.__lenis) {
      window.__lenis.stop();
    }

    // 2. Physical scroll lock on document.body using fixed position at current scroll offset
    scrollPosRef.current = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosRef.current}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // 3. Escape key closes modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // 4. Browser Back button integration (popstate)
    const modalHistoryState = { modalOpen: true, timestamp: Date.now() };
    window.history.pushState(modalHistoryState, '');

    const handlePopState = () => {
      onClose();
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      // Restore physical scroll and position
      const scrollY = Math.abs(parseInt(document.body.style.top || '0', 10));
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.scrollTo(0, scrollY || scrollPosRef.current);

      if (typeof window !== 'undefined' && window.__lenis) {
        window.__lenis.start();
        window.__lenis.scrollTo(scrollY || scrollPosRef.current, { immediate: true });
      }

      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const sizeClasses = {
    md: 'max-w-md',
    lg: 'max-w-2xl',
    xl: 'max-w-3xl',
    '2xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
  }[size];

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-5 md:p-8 overflow-hidden select-text"
      data-lenis-prevent="true"
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
      {/* Full viewport backdrop dimming */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-xl transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
        data-lenis-prevent="true"
        onWheel={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onTouchMove={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      />

      {/* Modal Dialog Box / Android Bottom Sheet on mobile */}
      <div
        data-lenis-prevent="true"
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        className={`relative w-full ${sizeClasses} h-[92vh] sm:h-[88vh] sm:max-h-[760px] flex flex-col rounded-t-[28px] sm:rounded-3xl bg-[#080d1d] border-t sm:border border-white/20 shadow-[0_0_80px_rgba(0,102,255,0.4)] z-10 overflow-hidden overscroll-contain animate-in slide-in-from-bottom-8 sm:zoom-in-95 duration-200`}
      >
        {/* Android drag handle on mobile */}
        <div className="w-12 h-1.5 bg-white/25 rounded-full mx-auto my-2 sm:hidden shrink-0" />

        {/* Sticky Fixed Header */}
        <div className="shrink-0 flex items-center justify-between px-4 sm:px-7 py-3 sm:py-4 bg-[#060b17] border-b border-white/10 gap-3 z-20">
          <div className="flex items-center gap-3 min-w-0">
            {/* Top Back button */}
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
              title="Return / Close"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>

            <div className="min-w-0">
              {badge && (
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-blue-500/15 text-cyan-300 border border-blue-500/30 mb-0.5">
                  {badge}
                </span>
              )}
              <h3 className="text-sm sm:text-lg font-bold text-white tracking-tight truncate">
                {title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content Body with independent scroll */}
        <div
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          className="flex-1 min-h-0 overflow-y-auto px-5 sm:px-7 py-5 text-slate-300 leading-relaxed space-y-4 overscroll-contain custom-modal-scrollbar"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {children}
        </div>

        {/* Sticky Fixed Footer */}
        <div className="shrink-0 flex items-center justify-between px-5 sm:px-7 py-3 bg-[#060b17] border-t border-white/10 text-xs z-20">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-slate-300 hover:text-white font-medium transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{closeLabel}</span>
          </button>

          <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
            ESC or click outside to dismiss
          </span>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
