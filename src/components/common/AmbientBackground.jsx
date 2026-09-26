import React, { useEffect, useState } from 'react';

/**
 * AmbientBackground — Interactive cybernetic glow and subtle ambient aurora
 * Adds depth and a futuristic atmosphere to the overall website without compromising contrast or readability.
 */
export default function AmbientBackground() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Check if device supports fine hover (desktop mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointer(mediaQuery.matches);

    if (!mediaQuery.matches) return;

    let rafId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none"
    >
      {/* Interactive Cursor Spotlight (Only on desktop pointer devices) */}
      {isPointer && mousePos.x >= 0 && (
        <div
          className="fixed w-[600px] h-[600px] rounded-full transition-opacity duration-300 pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background: 'radial-gradient(circle, rgba(192, 19, 104, 0.045) 0%, rgba(27, 77, 155, 0.03) 35%, transparent 70%)',
          }}
        />
      )}

      {/* Floating Ambient Aurora Orbs */}
      <div className="absolute -top-32 right-[-10%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-brand-magenta/8 to-brand-blue/6 blur-[120px] animate-pulse-slow" />
      <div className="absolute top-[35%] -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-brand-navy/6 to-brand-blue/8 blur-[140px] animate-float-slow" />
      <div className="absolute top-[70%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-brand-magenta/6 via-brand-blue/5 to-transparent blur-[130px] animate-pulse-slow" />
    </div>
  );
}
