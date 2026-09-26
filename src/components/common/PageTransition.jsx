import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * PageTransition — Unique Cyber Laser Runner & Optical De-blur Transition
 * 
 * Features:
 * - Streaking neon brand gradient runner on route change
 * - Smooth optical de-blur & soft lift page reveal
 * - Respects prefers-reduced-motion
 */
export default function PageTransition({ children }) {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState(location.pathname);

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative">
      {/* Top Cyber Laser Runner on Route Navigation */}
      <div 
        key={`laser-${activeRoute}`}
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none overflow-hidden"
      >
        <div className="h-full w-full bg-gradient-to-r from-brand-navy via-brand-blue to-brand-magenta animate-laser-runner shadow-[0_0_10px_rgba(192,19,104,0.7)]" />
      </div>

      {/* Main Page Content with unique deblur-lift transition */}
      <div key={`content-${activeRoute}`} className="page-transition-unique">
        {children}
      </div>
    </div>
  );
}
