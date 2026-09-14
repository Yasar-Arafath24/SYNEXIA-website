import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Users, 
  Clock, 
  MapPin, 
  Layers, 
  Phone, 
  CheckCircle2, 
  Sparkles,
  Bug,
  Code,
  Send,
  Unlock,
  Target,
  Calendar,
  Globe,
  ExternalLink,
  Trophy,
  Gift
} from 'lucide-react';
import { SYMPOSIUM_CONFIG } from '../data/symposiumData';
import { siteConfig } from '../data/siteConfig';
import { allEvents } from '../data/events';
import PageHero from '../components/common/PageHero';
import EventBadge from '../components/events/EventBadge';
import EventRuleList from '../components/events/EventRuleList';
import PrimaryButton from '../components/common/PrimaryButton';
import SecondaryButton from '../components/common/SecondaryButton';
import Seo from '../components/common/Seo';

export default function EventDetailPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const event = allEvents.find(
    (e) => e.slug === eventId || e.id === eventId
  );

  if (!event) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <Seo title="Event Not Found | SYNEXIA'26" description="The requested SYNEXIA'26 event could not be found." />
        <h2 className="text-2xl font-bold font-display text-brand-navy mb-2">Event Not Found</h2>
        <p className="text-slate-600 mb-6">The event you are looking for does not exist or has not been listed yet.</p>
        <SecondaryButton to="/events" icon={ArrowLeft} iconPosition="left">
          Back to Events Catalog
        </SecondaryButton>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Seo
        title={`${event.title} | SYNEXIA'26 Events`}
        description={event.shortDescription || event.description}
      />
      <PageHero
        badge={event.categoryName || event.category}
        title={event.title}
        subtitle={event.shortDescription}
        breadcrumbs={[
          { label: event.category === 'technical' ? "Technical Events" : "Events", to: event.category === 'technical' ? "/technical-events" : "/events" },
          { label: event.title }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview / Detailed Description */}
            <div className="brand-card p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold font-display text-brand-navy">Event Overview</h3>
                {event.hasTwist && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-magenta/10 text-brand-magenta border border-brand-magenta/20 text-xs font-mono font-bold uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    CODENEX TWIST
                  </span>
                )}
              </div>
              <p className="text-slate-700 leading-relaxed text-base">
                {event.description}
              </p>
            </div>

            {/* SYNTAX STRIKE Progression System if present */}
            {event.progressionSteps && (
              <div className="brand-card p-6 sm:p-8">
                <h3 className="text-base font-bold font-display text-brand-navy uppercase tracking-wider mb-4">
                  Unlock-Based Progression System
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <Bug className="w-4 h-4 text-brand-navy mx-auto mb-1.5" />
                    <span className="text-xs font-bold font-display text-brand-navy block">Find the Bug</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <Code className="w-4 h-4 text-brand-navy mx-auto mb-1.5" />
                    <span className="text-xs font-bold font-display text-brand-navy block">Fix the Code</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <Send className="w-4 h-4 text-brand-navy mx-auto mb-1.5" />
                    <span className="text-xs font-bold font-display text-brand-navy block">Submit</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-brand-magenta/10 border border-brand-magenta/30 text-center">
                    <Unlock className="w-4 h-4 text-brand-magenta mx-auto mb-1.5" />
                    <span className="text-xs font-bold font-display text-brand-navy block">Unlock the Next Bug</span>
                  </div>
                </div>
              </div>
            )}

            {/* PRESENTIX Domains if present */}
            {event.availableDomains && (
              <div className="brand-card p-6 sm:p-8">
                <h3 className="text-base font-bold font-display text-brand-navy uppercase tracking-wider mb-2">
                  Available Domains
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Select a topic from any of the following authorized specializations:
                </p>
                <div className="flex flex-wrap gap-2">
                  {event.availableDomains.map((domain, idx) => (
                    <span key={idx} className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-50 text-slate-800 border border-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-magenta mr-2" />
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* PRESENTIX Core Objectives if present */}
            {event.coreObjectives && (
              <div className="brand-card p-6 sm:p-8">
                <h3 className="text-base font-bold font-display text-brand-navy uppercase tracking-wider mb-3">
                  Core Objective
                </h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {event.coreObjectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start">
                      <Target className="w-4 h-4 text-brand-navy flex-shrink-0 mr-2.5 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* PRIZES SECTION (if event has prizes list) */}
            {event.prizes && event.prizes.length > 0 && (
              <div className="brand-card p-6 sm:p-8 border-amber-300/80 bg-gradient-to-br from-amber-500/5 via-white to-transparent">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-brand-navy uppercase tracking-wider">
                      Event Prizes & Honors
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">
                      Merit recognition & monetary awards
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {event.prizes.map((prize, idx) => (
                    <div 
                      key={idx} 
                      className={`p-4 rounded-xl border text-center ${
                        prize.highlight 
                          ? 'bg-amber-50/80 border-amber-300 shadow-sm ring-1 ring-amber-400/30' 
                          : 'bg-white border-slate-200'
                      }`}
                    >
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        {prize.position}
                      </span>
                      <div className="text-xl sm:text-2xl font-black font-display text-brand-navy">
                        {prize.amount}
                      </div>
                      <span className="inline-block text-xs font-semibold text-emerald-700 mt-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
                        + {prize.perk}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NON-TECHNICAL EXCITING PRIZES NOTICE */}
            {event.hasExcitingPrizes && (
              <div className="brand-card p-6 sm:p-7 border-brand-magenta/40 bg-gradient-to-br from-brand-magenta/5 via-white to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-magenta/15 text-brand-magenta flex items-center justify-center flex-shrink-0">
                    <Gift className="w-5 h-5 text-brand-magenta" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-display text-brand-navy uppercase tracking-wider">
                      Exciting Prizes & Certificates
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-0.5">
                      {event.prizesNote || "Exciting prizes and merit certificates will be awarded to podium winners!"}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Rules and Guidelines */}
            <EventRuleList
              rules={event.rules}
              title="Key Rules & Guidelines"
            />

          </div>

          {/* Sidebar Meta Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Event Quick Info Card */}
            <div className="brand-card p-6 sm:p-7 sticky top-24 bg-slate-50/50">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <span className="text-xs font-bold font-display uppercase tracking-wider text-slate-500">Status</span>
                <EventBadge status={event.status} variant="status" />
              </div>

              <div className="space-y-4 text-sm mb-8">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-brand-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-slate-500 font-medium">Team Size</span>
                    <strong className="text-brand-navy font-semibold">{event.teamSize || 'To be announced'}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-slate-500 font-medium">Event Date</span>
                    <strong className="text-brand-navy font-semibold">{event.date || 'October 14, 2026'}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-slate-500 font-medium">Event Mode</span>
                    <strong className="text-brand-navy font-semibold">{event.mode || 'Offline (On-Campus)'}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-slate-500 font-medium">Track Venue</span>
                    <strong className="text-brand-navy font-semibold">{event.venue || 'Campus Venue TBA'}</strong>
                  </div>
                </div>

                {/* ONLINE 100% FREE CALLOUT IN SIDEBAR */}
                {event.isOnlineFree && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 mt-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold font-display uppercase tracking-wide">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>100% Free Online Entry</span>
                    </div>
                    <p className="text-[11px] text-emerald-800 mt-1 leading-snug">
                      Online contest entry for {event.title} is completely free!
                    </p>
                  </div>
                )}

                {/* PRIZE POOL PREVIEW IN SIDEBAR */}
                {event.prizes && event.prizes.length > 0 && (
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-300/60 text-brand-navy mt-2">
                    <div className="flex items-center justify-between text-xs font-bold font-display uppercase tracking-wide text-amber-900">
                      <span className="flex items-center gap-1.5">
                        <Trophy className="w-4 h-4 text-amber-600" />
                        Top Prize
                      </span>
                      <span className="font-mono text-brand-navy font-black">{event.prizes[0].amount}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <PrimaryButton
                  href={event.registrationUrl || siteConfig.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={ExternalLink}
                  className="w-full"
                >
                  Register Online Now
                </PrimaryButton>
                <SecondaryButton
                  to="/register"
                  className="w-full"
                >
                  Scan QR / Register Portal
                </SecondaryButton>
                <SecondaryButton
                  to={event.category === 'technical' ? "/technical-events" : "/non-technical-events"}
                  icon={ArrowLeft}
                  iconPosition="left"
                  className="w-full"
                >
                  Back to {event.category === 'technical' ? "Technical Events" : "Non-Technical Events"}
                </SecondaryButton>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
