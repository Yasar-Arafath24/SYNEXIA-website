import React from 'react';
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Clock, 
  Building2
} from 'lucide-react';
import { SYMPOSIUM_CONFIG } from '../data/symposiumData';
import { coordinators } from '../data/coordinators';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import CoordinatorCard from '../components/CoordinatorCard';
import ScrollReveal from '../components/common/ScrollReveal';

export default function ContactPage() {
  const venue = SYMPOSIUM_CONFIG.venue;

  const studentCoordinators = [
    coordinators.president,
    coordinators.secretary,
    coordinators.technicalHead,
    coordinators.nonTechnicalHead,
  ];

  const staffCoordinator = coordinators.staffCoordinator;

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        badge="Helpdesk & Location"
        title="Contact & Venue"
        subtitle={`Reach out to the ${SYMPOSIUM_CONFIG.name} organizing committee or navigate to our campus.`}
        breadcrumbs={[{ label: "Contact" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        
        {/* COORDINATORS DIRECTORY */}
        <section>
          <SectionTitle
            badge="Organizing Committee"
            badgeVariant="navy"
            title="Symposium Coordinators"
            subtitle="Get in touch with our faculty and student coordinators for queries regarding tracks, participation, and logistics. Tap the number to call directly."
            align="left"
            className="mb-10"
          />

          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {studentCoordinators.map((coordinator, idx) => (
                <CoordinatorCard
                  key={coordinator.id}
                  coordinator={coordinator}
                  featured={idx === 0}
                />
              ))}
            </div>
          </ScrollReveal>

          {/* STAFF COORDINATOR — Separated Below the Student Coordinators */}
          <ScrollReveal className="mt-12">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-[1px] w-10 sm:w-14 bg-slate-200" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-navy/60 block">
                Faculty Oversight
              </span>
              <div className="h-[1px] w-10 sm:w-14 bg-slate-200" />
            </div>

            <div className="max-w-md mx-auto">
              <CoordinatorCard
                coordinator={staffCoordinator}
                featured={true}
              />
            </div>
          </ScrollReveal>
        </section>

        {/* VENUE & LOCATION INFORMATION */}
        <section id="venue" className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-semibold uppercase tracking-wider">
                Symposium Venue
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {venue.institution}
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Hosted at the main campus of {venue.institution}. The campus is easily accessible from Nagapattinam bus terminus and railway station.
              </p>

              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                  <span>{venue.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-brand-navy flex-shrink-0 mt-0.5" />
                  <span>Hall: {venue.auditorium}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Reporting Time: {SYMPOSIUM_CONFIG.schedule.reportingTime}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-navy text-white text-sm font-semibold hover:bg-slate-900 transition-all shadow-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
                </a>
              </div>
            </div>

            {/* Travel Directions Helper Card */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-soft">
              <h3 className="text-lg font-bold text-slate-900 mb-4">How to Reach the Campus</h3>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div>
                  <strong className="block text-slate-900 font-semibold mb-1">By Railway:</strong>
                  <span>Nagapattinam Railway Station (NGT) is located approximately 5 km from the campus, connected via frequent local town buses and taxis.</span>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <strong className="block text-slate-900 font-semibold mb-1">By Bus / Road:</strong>
                  <span>Direct buses are available towards Nagore / Karaikal. Request a drop at the EGS Pillay College bus stop.</span>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
