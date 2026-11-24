'use client';

import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function SmoothScroll({ children }: { children?: React.ReactNode }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 0.75,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    window.__lenis = lenis;

    const updateScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    lenis.on('scroll', updateScroll);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);
    window.addEventListener('scroll', updateScroll, { passive: true });

    // Handle smooth anchor clicks with navbar offset
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const targetEl = document.querySelector(href);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(targetEl as HTMLElement, { offset: -90 });
          window.history.pushState(null, '', href);
        }
      }
    };

    // Handle browser back/forward buttons (popstate and hashchange)
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash && hash.length > 1) {
        const targetEl = document.querySelector(hash);
        if (targetEl) {
          lenis.scrollTo(targetEl as HTMLElement, { offset: -90 });
        }
      } else if (!hash || hash === '#' || hash === '') {
        lenis.scrollTo(0);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('hashchange', handleHashNavigation);
    window.addEventListener('popstate', handleHashNavigation);

    return () => {
      delete window.__lenis;
      lenis.destroy();
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', updateScroll);
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('hashchange', handleHashNavigation);
      window.removeEventListener('popstate', handleHashNavigation);
    };
  }, []);

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 transition-all duration-75 ease-out shadow-[0_0_12px_rgba(0,210,255,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      {children}
    </>
  );
}
