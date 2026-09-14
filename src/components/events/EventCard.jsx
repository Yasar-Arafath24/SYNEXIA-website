import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import EventBadge from './EventBadge';

/**
 * EventCard — Compact and Full preview card for SYNEXIA'26
 * 
 * Rules:
 * - Event number (01, 02, etc.)
 * - Event name + Subtitle/format
 * - Event category badge
 * - One-line description
 * - View Details button
 * - White surface, 1px subtle border, rounded-card, minimal shadow
 */
export default function EventCard({ 
  event, 
  className = '', 
  staggerClass = '',
  compact = true
}) {
  if (!event) return null;

  const targetUrl = `/events/${event.slug || event.id}`;

  return (
    <article
      id={event.slug || event.id}
      className={`brand-card p-6 sm:p-7 pl-7 sm:pl-8 flex flex-col justify-between relative overflow-hidden group transition-all duration-300 ${staggerClass} ${className}`}
    >
      {/* Asymmetric Accent: Thin Magenta Vertical Line on Left */}
      <div className="absolute left-0 top-0 bottom-0 w-[3.5px] bg-brand-magenta transition-all duration-300 group-hover:w-[4.5px]" />

      <div>
        {/* Top Meta: Small Navy Event Number & Category Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-mono font-bold tracking-wider text-brand-navy">
            {event.eventNumber ? `EVENT ${event.eventNumber}` : (event.number ? `EVENT ${event.number}` : 'EVENT')}
          </span>
          <EventBadge category={event.categoryName || event.category} />
        </div>

        {/* Large Event Title & Subtitle */}
        <div className="mb-2.5">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-brand-navy group-hover:text-brand-blue transition-colors duration-200 line-clamp-1">
            {event.title}
          </h3>
          {event.subTitle && (
            <span className="text-[11px] font-bold tracking-widest uppercase text-brand-magenta font-mono block mt-1">
              {event.subTitle}
            </span>
          )}
        </div>

        {/* Date & Mode Meta Badges */}
        <div className="flex flex-wrap items-center gap-1.5 mb-3 text-[11px] font-mono">
          <span className="inline-flex items-center px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold border border-slate-200/80">
            {event.date || "Oct 14, 2026"}
          </span>
          {event.isHybrid ? (
            <span className="inline-flex items-center px-2 py-0.5 rounded bg-brand-magenta/10 text-brand-magenta font-bold border border-brand-magenta/30">
              Online & Offline
            </span>
          ) : (
            <span className="inline-flex items-center px-2 py-0.5 rounded bg-brand-navy/5 text-brand-navy font-semibold border border-brand-navy/15">
              Offline
            </span>
          )}
          {event.isOnlineFree && (
            <span className="inline-flex items-center px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
              Online Free
            </span>
          )}
          {event.prizes && event.prizes[0] && (
            <span className="inline-flex items-center px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-bold border border-amber-200">
              Top: {event.prizes[0].amount}
            </span>
          )}
          {event.hasExcitingPrizes && (
            <span className="inline-flex items-center px-2 py-0.5 rounded bg-pink-50 text-brand-magenta font-bold border border-pink-200">
              Exciting Prizes
            </span>
          )}
        </div>

        {/* One-Line Description */}
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-2">
          {event.shortDescription || event.description}
        </p>
      </div>

      {/* Action CTA: View Details */}
      <div className="pt-2 border-t border-slate-100">
        <Link
          to={targetUrl}
          className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-button bg-slate-50 hover:bg-brand-navy text-brand-navy hover:text-white text-xs sm:text-sm font-semibold transition-all duration-200 border border-slate-200 group-hover:border-brand-navy"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
