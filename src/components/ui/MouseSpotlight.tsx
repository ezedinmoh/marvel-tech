'use client';

import React, { useEffect, useRef, useState } from 'react';

export function MouseSpotlight() {
  const [mounted, setMounted] = useState(false);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const isVisible = useRef(false);

  useEffect(() => {
    // Only run on desktop/devices with a fine pointer (mouse)
    const isPointerFine = window.matchMedia('(pointer: fine)').matches;
    if (!isPointerFine) return;

    setMounted(true);

    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible.current) {
        isVisible.current = true;
        currentPos.current = { x: e.clientX, y: e.clientY };
        if (spotlightRef.current) {
          spotlightRef.current.style.opacity = '1';
        }
      }
    };

    const onMouseLeave = () => {
      isVisible.current = false;
      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = '0';
      }
    };

    // Smooth Lerp loop for fluid physics-based cursor trailing
    const updateSpotlight = () => {
      if (isVisible.current && spotlightRef.current) {
        const lerpFactor = 0.14;
        currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerpFactor;
        currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerpFactor;

        spotlightRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(updateSpotlight);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    animationFrameId = requestAnimationFrame(updateSpotlight);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={spotlightRef}
      className="fixed top-0 left-0 pointer-events-none z-30 transition-opacity duration-500 opacity-0 will-change-transform"
      style={{
        width: '640px',
        height: '640px',
      }}
      aria-hidden="true"
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 210, 255, 0.07) 0%, rgba(0, 102, 255, 0.03) 40%, transparent 70%)',
          filter: 'blur(35px)',
        }}
      />
    </div>
  );
}
