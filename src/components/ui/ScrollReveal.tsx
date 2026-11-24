'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
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
      window.innerWidth < 769 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      el.classList.remove('dc-reveal-pending');
      el.classList.add('is-revealed');
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight + 180) {
      el.classList.remove('dc-reveal-pending');
      el.classList.add('is-revealed');
      return;
    }

    el.classList.add('dc-reveal-pending');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top <= window.innerHeight + 200) {
          el.classList.remove('dc-reveal-pending');
          el.classList.add('is-revealed');
          if (once) {
            observer.unobserve(el);
          }
        }
      },
      {
        threshold,
        rootMargin: '250px 0px 250px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  const customStyle: React.CSSProperties = {
    ...style,
    ...(delay > 0 ? { transitionDelay: `${Math.min(delay, 160)}ms` } : {}),
    ...(duration ? { transitionDuration: `${duration}ms` } : {}),
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
 * Bulletproof reveal coordinator:
 * - Elements default to visible (`opacity: 1`) so content NEVER appears blank/empty.
 * - Only genuinely below-the-fold desktop elements are armed with `.dc-reveal-pending`.
 * - Triggered eagerly by IntersectionObserver (250px margin) + rAF scroll/resize failsafe.
 */
export function GlobalScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const revealAllImmediately = () => {
      document.querySelectorAll('.dc-reveal').forEach((el) => {
        el.classList.remove('dc-reveal-pending');
        el.classList.add('is-revealed');
      });
    };

    const isMobileOrReduced =
      window.innerWidth < 769 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isMobileOrReduced) {
      revealAllImmediately();
      return;
    }

    const revealElement = (el: Element) => {
      el.classList.remove('dc-reveal-pending');
      el.classList.add('is-revealed');
    };

    const checkVisibleElements = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const pending = document.querySelectorAll('.dc-reveal:not(.is-revealed)');
      pending.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Reveal if inside viewport, within 220px below fold, or already scrolled past above
        if (rect.top <= vh + 220) {
          revealElement(el);
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const vh = window.innerHeight || document.documentElement.clientHeight;
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.boundingClientRect.top <= vh + 240) {
            revealElement(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '250px 0px 250px 0px',
      }
    );

    const scanAndArmElements = () => {
      if (window.innerWidth < 769) {
        revealAllImmediately();
        return;
      }

      const vh = window.innerHeight || document.documentElement.clientHeight;
      const elements = document.querySelectorAll('.dc-reveal:not(.is-revealed)');

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= vh + 200) {
          revealElement(el);
        } else {
          el.classList.add('dc-reveal-pending');
          observer.observe(el);
        }
      });
    };

    // Initial scan
    scanAndArmElements();

    // rAF-throttled scroll & resize handler to catch fast scrolls, Lenis jumps, or scrollbar drags
    let rafPending = false;
    const handleScrollOrResize = () => {
      if (window.innerWidth < 769) {
        revealAllImmediately();
        return;
      }
      if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(() => {
          checkVisibleElements();
          rafPending = false;
        });
      }
    };

    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });
    window.addEventListener('hashchange', handleScrollOrResize, { passive: true });

    // Re-scan when DOM changes dynamically (language switch, project filters, tabs)
    const mutationObserver = new MutationObserver(() => {
      checkVisibleElements();
      // Only observe newly mounted below-fold nodes without hiding anything already visible
      const vh = window.innerHeight || document.documentElement.clientHeight;
      document
        .querySelectorAll('.dc-reveal:not(.is-revealed):not(.dc-reveal-pending)')
        .forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top <= vh + 220) {
            revealElement(el);
          } else {
            el.classList.add('dc-reveal-pending');
            observer.observe(el);
          }
        });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
      window.removeEventListener('hashchange', handleScrollOrResize);
    };
  }, [pathname]);

  return null;
}
