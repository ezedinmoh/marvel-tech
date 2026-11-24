'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  badge?: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, badge, children }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090e1c] border border-white/15 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,102,255,0.25)] z-10">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            {badge && (
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
                {badge}
              </span>
            )}
            <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-slate-300 leading-relaxed space-y-4">{children}</div>
      </div>
    </div>
  );
}
