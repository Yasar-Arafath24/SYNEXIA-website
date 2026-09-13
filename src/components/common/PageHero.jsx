import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/**
 * PageHero — Brand Design System
 * 
 * Rules:
 * - Very large and bold hero title (Space Grotesk)
 * - Minimalist white background with subtle dot grid
 * - Restrained fade-up animation
 * - Clean breadcrumb navigation
 */
export default function PageHero({
  badge,
  title,
  subtitle,
  children,
  breadcrumbs = [],
  className = ''
}) {
  return (
    <div className={`relative bg-white border-b border-slate-200 overflow-hidden ${className}`}>
      {/* Background subtle technical grid */}
      <div className="absolute inset-0 bg-grid-minimal opacity-60 pointer-events-none" />
      
      {/* Subtle SYNEXIA Diagonal Geometry Accents */}
      <div className="absolute -top-16 right-0 w-80 h-80 pointer-events-none opacity-20 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-bl from-brand-navy via-brand-navy/50 to-transparent transform rotate-45 translate-x-20 -translate-y-8" />
      </div>
      <div className="absolute top-1/2 -left-16 w-72 h-72 pointer-events-none opacity-15 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-tr from-brand-magenta via-brand-magenta/40 to-transparent transform -rotate-45" />
      </div>
      <div className="absolute top-20 right-12 w-24 h-[1.5px] bg-gradient-to-r from-transparent via-brand-magenta to-brand-navy transform -rotate-12 pointer-events-none opacity-30 hidden md:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-20 animate-fade-up">
        {/* Optional Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center text-xs sm:text-sm text-slate-500 mb-6 font-medium">
            <Link to="/" className="hover:text-brand-navy transition-colors">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400" />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-brand-navy transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-brand-navy font-semibold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-magenta/10 text-brand-magenta border border-brand-magenta/20 uppercase tracking-wider">
                {badge}
              </span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-brand-navy tracking-tight leading-[1.1]">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed">
              {subtitle}
            </p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </div>
  );
}
