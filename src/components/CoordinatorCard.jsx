import React from 'react';
import { Phone, Briefcase, GraduationCap, Building2 } from 'lucide-react';

/**
 * CoordinatorCard — Phase 7 Reusable Coordinator Component
 * 
 * Rules:
 * - NO profile photographs.
 * - Circular initials avatar with SYNEXIA visual identity (Deep Navy, Blue, Magenta accent).
 * - Name (Space Grotesk), Role, Year/Department, Designation (if present).
 * - Clickable phone link: <a href="tel:..." aria-label="Call [Name]">.
 * - Only renders existing fields with zero empty labels.
 * - Restrained hover elevation and smooth 300ms transition.
 */
export default function CoordinatorCard({ coordinator, featured = false, className = '' }) {
  if (!coordinator) return null;

  const {
    name,
    role,
    year,
    designation,
    department,
    phone,
    tel,
    initials,
    image
  } = coordinator;

  const cleanTel = tel || (phone ? phone.replace(/[^+\d]/g, '') : '');

  return (
    <article
      className={`brand-card p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 group hover:-translate-y-1 hover:border-brand-magenta/40 hover:shadow-hover-card ${
        featured ? 'border-slate-300 shadow-subtle' : 'border-slate-200'
      } ${className}`}
    >
      {/* Top Subtle Brand Accent Line (Activates smoothly on hover) */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-brand-navy via-brand-blue to-brand-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />

      {/* AVATAR OR PHOTO */}
      <div className="relative mb-5">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover object-top ring-2 ring-brand-magenta/60 ring-offset-4 ring-offset-white shadow-sm group-hover:ring-brand-magenta transition-all duration-300"
          />
        ) : (
          <div
            className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center font-display font-extrabold text-2xl sm:text-3xl tracking-tight transition-all duration-300 select-none ${
              featured
                ? 'bg-brand-navy text-white ring-2 ring-brand-magenta/60 ring-offset-4 ring-offset-white shadow-sm group-hover:ring-brand-magenta'
                : 'bg-slate-50 text-brand-navy border-2 border-brand-navy/15 ring-2 ring-brand-magenta/30 ring-offset-2 ring-offset-white group-hover:border-brand-magenta group-hover:text-brand-magenta'
            }`}
          >
            {initials || name?.slice(0, 2).toUpperCase()}
          </div>
        )}

        {/* Small diagonal geometric marker on avatar */}
        <span className="absolute bottom-0 right-1 w-3.5 h-3.5 rounded-full bg-brand-magenta ring-2 ring-white" />
      </div>

      {/* NAME — Space Grotesk Bold */}
      <div className="flex items-center justify-center gap-1.5 mb-1">
        <h3 className="text-xl sm:text-2xl font-bold font-display text-brand-navy tracking-tight group-hover:text-brand-blue transition-colors duration-200">
          {name}
        </h3>
      </div>

      {/* ROLE */}
      <span className="inline-block text-xs sm:text-sm font-semibold text-brand-magenta tracking-wide uppercase font-mono mb-3">
        {role}
      </span>

      {/* DESIGNATION if available */}
      {designation && (
        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-700 font-medium mb-1">
          <Briefcase className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <span>{designation}</span>
        </div>
      )}

      {/* YEAR / DEPARTMENT if available */}
      {(year || department) && (
        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 font-normal mb-5">
          <GraduationCap className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <span>{year || department}</span>
        </div>
      )}

      {/* PHONE NUMBER (Clickable, Accessible, display formatted number) */}
      {phone && (
        <div className="mt-auto pt-4 border-t border-slate-100 w-full flex justify-center">
          <a
            href={`tel:${cleanTel}`}
            aria-label={`Call ${name} at ${phone}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-button bg-slate-50 hover:bg-brand-navy text-slate-700 hover:text-white text-xs sm:text-sm font-mono font-medium transition-all duration-200 border border-slate-200 group-hover:border-brand-navy"
          >
            <Phone className="w-3.5 h-3.5 text-brand-magenta flex-shrink-0 transition-colors group-hover:text-brand-magenta-light" />
            <span>{phone}</span>
          </a>
        </div>
      )}
    </article>
  );
}
