import React from 'react';
import { Award, BookOpen, Target, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SYMPOSIUM_CONFIG } from '../data/symposiumData';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHero
        badge="Institutional Legacy"
        title={`About ${SYMPOSIUM_CONFIG.name}`}
        subtitle="Learn about the institution, department, and vision driving this international symposium."
        breadcrumbs={[{ label: "About" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* SECTION 1: INSTITUTIONAL OVERVIEW */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-semibold uppercase tracking-wider">
              Autonomous Institution
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {SYMPOSIUM_CONFIG.organizer.institution}
            </h2>

            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              E.G.S. Pillay Engineering College, established in Nagapattinam, is an autonomous institution affiliated to Anna University. It stands as a beacon of high-quality technical education, research, and innovation in the coastal delta region of Tamil Nadu.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="block text-xs font-bold text-brand-magenta uppercase tracking-wider mb-1">Accreditation</span>
                <span className="text-sm font-semibold text-slate-900">NBA Tier-I Accredited</span>
                <p className="text-xs text-slate-500 mt-1">For all eligible engineering programs.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1">Institutional Grade</span>
                <span className="text-sm font-semibold text-slate-900">NAAC Grade A++</span>
                <p className="text-xs text-slate-500 mt-1">Highest tier institutional assessment.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-soft text-center">
              <img
                src={SYMPOSIUM_CONFIG.organizer.bannerImage}
                alt="E.G.S. Pillay Engineering College"
                className="w-full h-auto object-contain rounded-xl mb-4 bg-white p-4 border border-slate-200"
              />
              <p className="text-xs text-slate-500 font-medium">
                {SYMPOSIUM_CONFIG.organizer.regulatory}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: DEPARTMENT SPOTLIGHT */}
        <section className="bg-slate-50/70 rounded-3xl border border-slate-200 p-8 sm:p-12">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-magenta/10 text-brand-magenta text-xs font-semibold uppercase tracking-wider mb-4">
              Organizing Department
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              {SYMPOSIUM_CONFIG.organizer.department}
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              {SYMPOSIUM_CONFIG.organizer.departmentOverview}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-navy/10 text-brand-navy flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To emerge as an apex department cultivating agile engineering graduates proficient in computer systems, emerging algorithms, and strategic business leadership.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-magenta/10 text-brand-magenta flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Interdisciplinary Focus</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Blending core computer science disciplines with enterprise finance, supply chain analytics, operations research, and modern digital economy systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Industry Preparedness</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Empowering students with hands-on exposure through symposiums, collaborative technical tracks, hackathons, and corporate mentorship.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: ABOUT SYNEXIA */}
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <SectionTitle
            badge="The Symposium"
            badgeVariant="navy"
            title={`What is ${SYMPOSIUM_CONFIG.name}?`}
            subtitle={`${SYMPOSIUM_CONFIG.name} is the flagship international symposium organized to bring together pioneering minds in computer science, business systems, and modern technology.`}
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-6">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <CheckCircle2 className="w-5 h-5 text-brand-navy flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm text-slate-900">Knowledge Exchange</strong>
                <p className="text-xs text-slate-600">Engage in technical discourse, research discussions, and real-world problem formulations.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <CheckCircle2 className="w-5 h-5 text-brand-magenta flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm text-slate-900">Competitive Excellence</strong>
                <p className="text-xs text-slate-600">Participate in rigorously evaluated technical tracks and creative contests.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
