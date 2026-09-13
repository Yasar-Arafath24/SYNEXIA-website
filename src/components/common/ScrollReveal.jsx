import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal — Lightweight IntersectionObserver scroll animation wrapper
 * 
 * Rules:
 * - Triggers once when scrolled into view
 * - Respects prefers-reduced-motion for accessibility
 * - Fallback to immediate display if IntersectionObserver is unavailable
 * - Customizable delay for staggered sequences
 */
export default function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0,
  as: Component = 'div',
  threshold = 0.1,
  rootMargin = '0px 0px -40px 0px',
  ...props 
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Accessibility check: immediately reveal if user prefers reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    if (!('IntersectionObserver' in window)) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [threshold, rootMargin]);

  return (
    <Component
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal-on-scroll ${isRevealed ? 'is-revealed' : ''} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
