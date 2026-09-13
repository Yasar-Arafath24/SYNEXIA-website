import React from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Navigation, 
  ExternalLink, 
  Clock, 
  Building2, 
  GraduationCap, 
  UserCheck 
} from 'lucide-react';
import { SYMPOSIUM_CONFIG } from '../data/symposiumData';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';

export default function ContactPage() {
  const contacts = SYMPOSIUM_CONFIG.contacts;
  const venue = SYMPOSIUM_CONFIG.venue;

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
            subtitle="Get in touch with our faculty and student coordinators for queries regarding tracks, participation, and logistics."
            align="left"
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Faculty Coordinators */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-6 h-6 text-brand-navy" />
                <h3 className="text-xl font-bold text-slate-900">Faculty Coordinators</h3>
              </div>

              <div className="space-y-4">
                {contacts.facultyCoordinators.map((fac, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <h4 className="font-bold text-slate-900">{fac.name}</h4>
                    <p className="text-xs text-slate-500 mb-3">{fac.role} • {fac.department}</p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs text-slate-600">
                      <span className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-brand-navy" />
                        {fac.phone}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-brand-magenta" />
                        {fac.email}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Coordinators */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <UserCheck className="w-6 h-6 text-brand-magenta" />
                <h3 className="text-xl font-bold text-slate-900">Student Coordinators</h3>
              </div>

              <div className="space-y-4">
                {contacts.studentCoordinators.map((stu, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <h4 className="font-bold text-slate-900">{stu.name}</h4>
                    <p className="text-xs text-slate-500 mb-3">{stu.role}</p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs text-slate-600">
                      <span className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-brand-navy" />
                        {stu.phone}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-brand-magenta" />
                        {stu.email}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
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
