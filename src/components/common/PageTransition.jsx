import React from 'react';
import { useLocation } from 'react-router-dom';

/**
 * PageTransition — Restrained page entrance animation on route transition
 */
export default function PageTransition({ children }) {
  const location = useLocation();

  return (
    <div key={location.pathname} className="animate-fade-up">
      {children}
    </div>
  );
}
