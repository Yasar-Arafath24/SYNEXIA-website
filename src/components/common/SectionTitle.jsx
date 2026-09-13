import React from 'react';

/**
 * SectionTitle — Brand Design System
 * 
 * Rules:
 * - Bold and compact section heading (Space Grotesk)
 * - Restrained badge pill with subtle borders
 * - Clean whitespace and comfortable reading size
 */
export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
  badgeVariant = 'navy' // 'navy' | 'magenta' | 'default'
}) {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  const badgeStyles = {
    navy: 'bg-brand-navy/5 text-brand-navy border-brand-navy/15',
    magenta: 'bg-brand-magenta/5 text-brand-magenta border-brand-magenta/20',
    default: 'bg-slate-100 text-slate-700 border-slate-200'
  };

  return (
    <div className={`max-w-3xl ${alignClasses} ${className}`}>
      {badge && (
        <div className="inline-flex items-center mb-3">
          <span className={`inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full border ${badgeStyles[badgeVariant] || badgeStyles.navy} tracking-wider uppercase`}>
            {badge}
          </span>
        </div>
      )}
      
      {title && (
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-brand-navy leading-tight">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
