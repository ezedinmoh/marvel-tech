'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export type RevealDirection =
  | 'up'
  | 'down'
  | 'left'
  | 'right'
  | 'scale'
  | 'fade-scale'
  | 'zoom-in'
  | 'zoom-out'
  | 'dropdown'
  | 'fade';

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number; // milliseconds
  duration?: number; // milliseconds
  threshold?: number;
  className?: string;
  once?: boolean;
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration,
  threshold = 0,
  className = '',
  once = true,
  style,
  ...props
}: ScrollRevealProps) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    if (
      typeof window === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      el.classList.remove('dc-will-animate');
      el.classList.add('is-revealed');
      return;
    }

    if (delay > 0) {
      el.style.setProperty('--reveal-delay', `${Math.min(delay, 220)}ms`);
    }

    const vh = window.innerHeight || document.documentElement.clientHeight;
    const rect = el.getBoundingClientRect();

    if (rect.top <= vh + 10) {
      el.classList.remove('dc-will-animate');
      el.classList.add('dc-animating', 'is-revealed');
      return;
    }

    el.classList.add('dc-will-animate');

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentVh = window.innerHeight || document.documentElement.clientHeight;
        if (entry.isIntersecting || entry.boundingClientRect.top <= currentVh + 25) {
          el.classList.remove('dc-will-animate');
          el.classList.add('dc-animating', 'is-revealed');
          if (once) {
            observer.unobserve(el);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px 25px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [delay, threshold, once]);

  const customStyle: React.CSSProperties = {
    ...style,
    ...(duration ? { animationDuration: `${duration}ms` } : {}),
  };

  return (
    <div
      ref={elRef}
      data-reveal={direction}
      className={`dc-reveal ${className}`}
      style={customStyle}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Global Scroll Reveal Initializer
 * Coordinates scroll-triggered keyframe choreography across all `.dc-reveal` elements:
 * - `.dc-reveal` base CSS is ALWAYS `opacity: 1` (zero blank/empty screen risk).
 * - Only genuinely offscreen elements below `window.innerHeight + 10` get `.dc-will-animate`.
 * - Fires right as elements enter the bottom of the screen so zoom-in, zoom-out,
 *   fade-scale, dropdown, and stagger effects are visibly experienced while scrolling.
 * - Includes rAF scroll/resize sweepers + post-scroll failsafe so skipped or
 *   anchor-jumped elements never stay invisible.
 */
export function GlobalScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const revealAllImmediately = () => {
      document.querySelectorAll('.dc-reveal').forEach((el) => {
        el.classList.remove('dc-will-animate');
        el.classList.add('is-revealed');
      });
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealAllImmediately();
      return;
    }

    const syncDelayVar = (el: Element) => {
      const htmlEl = el as HTMLElement;
      // Preserve explicit CSS var if set, otherwise convert inline transitionDelay cleanly
      if (!htmlEl.style.getPropertyValue('--reveal-delay')) {
        const inlineDelay = htmlEl.style.transitionDelay;
        if (inlineDelay) {
          const parsed = parseFloat(inlineDelay);
          const ms = inlineDelay.endsWith('ms') ? parsed : parsed * 1000;
          if (!Number.isNaN(ms) && ms > 0) {
            htmlEl.style.setProperty('--reveal-delay', `${Math.min(ms, 220)}ms`);
          }
          // Clear inline transitionDelay so Card hover states remain instantaneous
          htmlEl.style.transitionDelay = '';
        }
      }
    };

    const triggerReveal = (el: Element, rect?: DOMRect) => {
      syncDelayVar(el);
      const r = rect || el.getBoundingClientRect();
      el.classList.remove('dc-will-animate');
      if (r.bottom < -40) {
        // Already scrolled completely past (e.g., anchor jump) — skip animation, keep visible
        el.classList.add('is-revealed');
      } else {
        el.classList.add('dc-animating', 'is-revealed');
      }
    };

    const checkPendingElements = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      document.querySelectorAll('.dc-reveal.dc-will-animate').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= vh + 25) {
          triggerReveal(el, rect);
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const vh = window.innerHeight || document.documentElement.clientHeight;
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.boundingClientRect.top <= vh + 25) {
            triggerReveal(entry.target, entry.boundingClientRect);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px 25px 0px',
      }
    );

    const armOffscreenElements = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const elements = document.querySelectorAll('.dc-reveal:not(.is-revealed)');

      elements.forEach((el) => {
        syncDelayVar(el);
        const rect = el.getBoundingClientRect();
        if (rect.top <= vh + 10) {
          // Visible or above fold right now: never hide it!
          el.classList.remove('dc-will-animate');
          el.classList.add('is-revealed');
        } else {
          el.classList.add('dc-will-animate');
          observer.observe(el);
        }
      });
    };

    armOffscreenElements();

    let rafPending = false;
    let settleTimer: ReturnType<typeof setTimeout> | null = null;

    const handleViewportChange = () => {
      if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(() => {
          checkPendingElements();
          rafPending = false;
        });
      }
      if (settleTimer) clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        checkPendingElements();
      }, 220);
    };

    window.addEventListener('scroll', handleViewportChange, { passive: true });
    window.addEventListener('resize', handleViewportChange, { passive: true });
    window.addEventListener('hashchange', handleViewportChange, { passive: true });

    // Re-scan cleanly if React dynamically mounts new cards (e.g., project filters / language switch)
    const mutationObserver = new MutationObserver(() => {
      checkPendingElements();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      document
        .querySelectorAll('.dc-reveal:not(.is-revealed):not(.dc-will-animate)')
        .forEach((el) => {
          syncDelayVar(el);
          const rect = el.getBoundingClientRect();
          if (rect.top <= vh + 25) {
            el.classList.remove('dc-will-animate');
            el.classList.add('is-revealed');
          } else {
            el.classList.add('dc-will-animate');
            observer.observe(el);
          }
        });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      if (settleTimer) clearTimeout(settleTimer);
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('scroll', handleViewportChange);
      window.removeEventListener('resize', handleViewportChange);
      window.removeEventListener('hashchange', handleViewportChange);
    };
  }, [pathname]);

  return null;
}
