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
export default function CoordinatorCard({ 
  coordinator, 
  featured = false, 
  size = 'auto', 
  className = '' 
}) {
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

  // Sizing definitions for responsive, well-balanced photo presentation
  const isLarge = size === 'lg' || (size === 'auto' && featured);
  const isMedium = size === 'md' || (!isLarge && size !== 'sm');

  const avatarSizeClasses = isLarge
    ? 'w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52'
    : isMedium
    ? 'w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36'
    : 'w-24 h-24 sm:w-28 sm:h-28';

  const initialTextClasses = isLarge
    ? 'text-4xl sm:text-5xl md:text-6xl'
    : isMedium
    ? 'text-2xl sm:text-3xl'
    : 'text-xl sm:text-2xl';

  return (
    <article
      className={`brand-card p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden group ${
        featured ? 'border-slate-300 shadow-subtle ring-1 ring-brand-navy/5' : 'border-slate-200'
      } ${className}`}
    >
      {/* Top Subtle Brand Accent Line (Activates with slow, elegant fade on hover) */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-brand-navy via-brand-blue to-brand-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-out z-10" />

      {/* AVATAR OR PHOTO CONTAINER WITH SLOW AMBIENT BRAND HALO */}
      <div className="relative mb-6 z-10">
        {/* Slow Ambient Glow Aura */}
        <div 
          className="absolute -inset-2 rounded-full bg-gradient-to-tr from-brand-navy/30 via-brand-blue/25 to-brand-magenta/35 opacity-0 group-hover:opacity-100 blur-md transition-all duration-700 ease-out pointer-events-none"
        />

        {/* Outer Ring & Frame */}
        <div className="relative p-1 rounded-full bg-gradient-to-tr from-brand-navy/80 via-brand-blue to-brand-magenta ring-4 ring-white shadow-md transition-transform duration-700 ease-out group-hover:scale-[1.02]">
          {image ? (
            <div className={`${avatarSizeClasses} rounded-full overflow-hidden bg-slate-100 ring-2 ring-white/80`}>
              <img
                src={image}
                alt={name}
                loading="lazy"
                className="w-full h-full rounded-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-104"
              />
            </div>
          ) : (
            <div
              className={`${avatarSizeClasses} rounded-full flex items-center justify-center font-display font-extrabold ${initialTextClasses} tracking-tight select-none transition-all duration-500 ${
                featured
                  ? 'bg-brand-navy text-white'
                  : 'bg-slate-50 text-brand-navy border border-brand-navy/15 group-hover:text-brand-magenta'
              }`}
            >
              {initials || name?.slice(0, 2).toUpperCase()}
            </div>
          )}
        </div>

        {/* Small diagonal geometric status badge on avatar */}
        <span 
          aria-hidden="true"
          className="absolute bottom-1 right-2 sm:right-3 w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full bg-brand-magenta ring-2 ring-white shadow-sm flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        </span>
      </div>

      {/* NAME — Space Grotesk Bold */}
      <div className="flex items-center justify-center gap-1.5 mb-1.5 z-10">
        <h3 className="text-xl sm:text-2xl font-bold font-display text-brand-navy tracking-tight group-hover:text-brand-blue transition-colors duration-400">
          {name}
        </h3>
      </div>

      {/* ROLE BADGE */}
      <span className="inline-block text-xs sm:text-sm font-semibold text-brand-magenta tracking-wider uppercase font-mono px-2.5 py-0.5 rounded-full bg-brand-magenta/5 border border-brand-magenta/15 mb-3">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-button bg-slate-50 hover:bg-brand-navy text-slate-700 hover:text-white text-xs sm:text-sm font-mono font-medium transition-all duration-200 border border-slate-200 group-hover:border-brand-navy shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-brand-magenta flex-shrink-0 transition-colors group-hover:text-brand-magenta-light" />
            <span>{phone}</span>
          </a>
        </div>
      )}
    </article>
  );
}
