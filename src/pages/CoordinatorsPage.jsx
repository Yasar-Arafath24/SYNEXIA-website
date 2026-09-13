import React from 'react';
import { coordinators } from '../data/coordinators';
import CoordinatorCard from '../components/CoordinatorCard';
import { Shield, Sparkles, GraduationCap, Users } from 'lucide-react';
import ScrollReveal from '../components/common/ScrollReveal';

export default function CoordinatorsPage() {
  const { president, secretary, technicalHead, nonTechnicalHead, staffCoordinator } = coordinators;

  return (
    <div className="bg-white min-h-screen">
      
      {/* ========================================================================= */}
      {/* HERO SECTION WITH ABSTRACT SYNEXIA-INSPIRED GEOMETRIC DECORATION           */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200 pt-12 pb-16 sm:pt-16 sm:pb-20">
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-minimal opacity-50 pointer-events-none" />

        {/* Subtle CSS-based Diagonal Geometry Decoration inspired by SYNEXIA ribbon */}
        <div className="absolute -top-16 right-0 w-80 h-80 pointer-events-none opacity-20 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-bl from-brand-navy via-brand-navy/60 to-transparent transform rotate-45 translate-x-20 -translate-y-8" />
        </div>
        <div className="absolute top-1/2 -left-16 w-72 h-72 pointer-events-none opacity-15 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-tr from-brand-magenta via-brand-magenta/40 to-transparent transform -rotate-45" />
        </div>
        {/* Subtle diagonal accent ribbons */}
        <div className="absolute top-24 right-16 w-24 h-[2px] bg-gradient-to-r from-transparent via-brand-magenta to-brand-navy transform -rotate-12 pointer-events-none opacity-40 hidden md:block" />
        <div className="absolute top-32 right-12 w-16 h-[1.5px] bg-brand-navy/30 transform -rotate-12 pointer-events-none hidden md:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/15 text-brand-navy text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5 text-brand-magenta" />
            Organizing Committee
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display text-brand-navy tracking-tight mb-3">
            COORDINATORS
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            Meet the team behind SYNEXIA'26
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MAIN COORDINATORS SECTIONS                                                */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">

        {/* ----------------------------------------------------------------------- */}
        {/* SECTION 1: CORE TEAM (President & Secretary — Stronger Emphasis)        */}
        {/* ----------------------------------------------------------------------- */}
        <ScrollReveal as="section">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-slate-200" />
            <div className="text-center">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-magenta block mb-1">
                Executive Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-brand-navy">
                CORE TEAM
              </h2>
            </div>
            <div className="h-[1px] w-12 bg-slate-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <CoordinatorCard 
              coordinator={president} 
              featured={true}
            />
            <CoordinatorCard 
              coordinator={secretary} 
              featured={true}
            />
          </div>
        </ScrollReveal>

        {/* ----------------------------------------------------------------------- */}
        {/* SECTION 2: EVENT HEADS (Technical & Non-Technical)                      */}
        {/* ----------------------------------------------------------------------- */}
        <ScrollReveal as="section">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-slate-200" />
            <div className="text-center">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-navy/60 block mb-1">
                Domain Operations
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-brand-navy">
                EVENT HEADS
              </h2>
            </div>
            <div className="h-[1px] w-12 bg-slate-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <CoordinatorCard 
              coordinator={technicalHead} 
              featured={false}
            />
            <CoordinatorCard 
              coordinator={nonTechnicalHead} 
              featured={false}
            />
          </div>
        </ScrollReveal>

        {/* ----------------------------------------------------------------------- */}
        {/* SECTION 3: STAFF COORDINATOR (Prominent Centered Card)                  */}
        {/* ----------------------------------------------------------------------- */}
        <ScrollReveal as="section">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-slate-200" />
            <div className="text-center">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-navy/60 block mb-1">
                Faculty Oversight
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-brand-navy">
                STAFF COORDINATOR
              </h2>
            </div>
            <div className="h-[1px] w-12 bg-slate-200" />
          </div>

          <div className="max-w-md mx-auto">
            <CoordinatorCard 
              coordinator={staffCoordinator} 
              featured={true}
            />
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
