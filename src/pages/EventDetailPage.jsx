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
  ExternalLink
} from 'lucide-react';
import { SYMPOSIUM_CONFIG } from '../data/symposiumData';
import { siteConfig } from '../data/siteConfig';
import { allEvents } from '../data/events';
import PageHero from '../components/common/PageHero';
import EventBadge from '../components/events/EventBadge';
import EventRuleList from '../components/events/EventRuleList';
import PrimaryButton from '../components/common/PrimaryButton';
import SecondaryButton from '../components/common/SecondaryButton';

export default function EventDetailPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const event = allEvents.find(
    (e) => e.slug === eventId || e.id === eventId
  );

  if (!event) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
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
