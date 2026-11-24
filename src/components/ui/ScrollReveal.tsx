'use client';

import React, { useEffect, useRef } from 'react';

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
  threshold = 0.12,
  className = '',
  once = true,
  style,
  ...props
}: ScrollRevealProps) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    // If mobile screen or reduced motion, reveal immediately
    if (
      typeof window !== 'undefined' &&
      (window.innerWidth < 769 || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    ) {
      el.classList.add('is-revealed');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-revealed');
          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          el.classList.remove('is-revealed');
        }
      },
      {
        threshold,
        rootMargin: '100px 0px 50px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  const customStyle: React.CSSProperties = {
    ...style,
    ...(delay > 0 ? { transitionDelay: `${delay}ms` } : {}),
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
 * Automatically monitors all elements on the page with .dc-reveal
 */
export function GlobalScrollReveal() {
  useEffect(() => {
    // If mobile screen or reduced motion, reveal all elements immediately
    if (
      typeof window !== 'undefined' &&
      (window.innerWidth < 769 || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    ) {
      document.querySelectorAll('.dc-reveal').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '100px 0px 50px 0px',
      }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll('.dc-reveal:not(.is-revealed)');
      elements.forEach((el) => observer.observe(el));
    };

    observeAll();

    // Re-scan when DOM changes dynamically (e.g. tabs or filters)
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
