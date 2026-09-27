import React from 'react';

/**
 * RobotMascot — Official SYNEXIA'26 Mascot Robot Design Element
 * Features the signature thumbs-up AI robot with dual-color eyes (cyan & magenta).
 * 
 * Props:
 * - size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero'
 * - flip: boolean (flips horizontally so it peeks from the right edge)
 * - speechBubble: string (optional tooltip/speech badge)
 * - speechPosition: 'top' | 'left' | 'right'
 * - floating: boolean (gentle hover float animation)
 * - className: string
 */
export default function RobotMascot({
  size = 'md',
  flip = false,
  speechBubble = null,
  speechPosition = 'top',
  floating = false,
  className = '',
  alt = 'SYNEXIA Mascot Robot',
}) {
  const sizeClasses = {
    xs: 'w-10 h-auto',
    sm: 'w-14 sm:w-16 h-auto',
    md: 'w-20 sm:w-24 h-auto',
    lg: 'w-28 sm:w-32 lg:w-36 h-auto',
    xl: 'w-36 sm:w-44 lg:w-48 h-auto',
    hero: 'w-40 sm:w-52 lg:w-64 h-auto',
  };

  const selectedSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none pointer-events-none group/mascot ${
        floating ? 'animate-robot-float' : ''
      } ${className}`}
    >
      {/* Optional Speech Bubble */}
      {speechBubble && (
        <div
          className={`absolute z-20 pointer-events-auto whitespace-nowrap px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-md text-xs font-bold font-display text-brand-navy flex items-center gap-1.5 transition-all duration-300 ${
            speechPosition === 'top'
              ? '-top-9 left-1/2 -translate-x-1/2'
              : speechPosition === 'left'
              ? 'top-1/2 -translate-y-1/2 right-full mr-2.5'
              : 'top-1/2 -translate-y-1/2 left-full ml-2.5'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-magenta animate-pulse" />
          <span>{speechBubble}</span>
          {/* Bubble tail */}
          <div
            className={`absolute w-2 h-2 bg-white border-slate-200/90 transform rotate-45 ${
              speechPosition === 'top'
                ? 'bottom-[-5px] left-1/2 -translate-x-1/2 border-r border-b'
                : speechPosition === 'left'
                ? 'right-[-5px] top-1/2 -translate-y-1/2 border-r border-t'
                : 'left-[-5px] top-1/2 -translate-y-1/2 border-l border-b'
            }`}
          />
        </div>
      )}

      {/* The Exact Robot Image — Sticky / Stationary */}
      <img
        src="/assets/synexia-robot.png"
        alt={alt}
        loading="lazy"
        className={`${selectedSize} object-contain filter drop-shadow-[0_4px_10px_rgba(11,27,61,0.12)] ${
          flip ? 'scale-x-[-1]' : ''
        }`}
      />
    </div>
  );
}
