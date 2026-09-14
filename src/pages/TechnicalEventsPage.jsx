import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Lock, 
  Unlock, 
  Bug, 
  Code, 
  Send, 
  Target, 
  Sparkles, 
  Cpu, 
  Layers,
  Users,
  Calendar,
  Globe,
  MapPin,
  Utensils,
  Award,
  ExternalLink,
  QrCode,
  Trophy,
  Gift
} from 'lucide-react';
import { technicalEvents } from '../data/events';
import { siteConfig } from '../data/siteConfig';
import PageHero from '../components/common/PageHero';
import PrimaryButton from '../components/common/PrimaryButton';
import RegistrationModal from '../components/common/RegistrationModal';
import ScrollReveal from '../components/common/ScrollReveal';
import Seo from '../components/common/Seo';

export default function TechnicalEventsPage() {
  const [activeEvent, setActiveEvent] = useState(null);
  const codenex = technicalEvents.find((e) => e.id === 'codenex') || technicalEvents[0];
  const syntaxStrike = technicalEvents.find((e) => e.id === 'syntax-strike') || technicalEvents[1];
  const presentix = technicalEvents.find((e) => e.id === 'presentix') || technicalEvents[2];

  return (
    <div className="bg-white min-h-screen">
      <Seo title="Technical Events | SYNEXIA'26" description="Compete in SYNEXIA'26 technical tracks — CODENEX hackathon, SYNTAX STRIKE debugging, and PRESENTIX presentation with cash prizes and certificates." />
      {/* PAGE HERO */}
      <PageHero
        badge="Competitive Tracks"
        title="TECHNICAL EVENTS"
        subtitle="Compete. Build. Debug. Present."
        breadcrumbs={[{ label: "Technical Events" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Key Participant Entitlements Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-navy/10 text-brand-navy flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-brand-navy" />
            </div>
            <div>
              <span className="block text-xs font-mono font-bold uppercase tracking-wider text-brand-magenta">
                Schedule & Entitlements
              </span>
              <p className="text-sm sm:text-base font-bold font-display text-brand-navy">
                OCT 14: PRESENTIX Online • OCT 15: All Technical & Non-Technical Events On-Campus
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold shadow-sm">
              <Utensils className="w-3.5 h-3.5 text-emerald-600" />
              Food Provided to All Participants
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-800 border border-blue-200 text-xs font-semibold shadow-sm">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              Participation Certificate for All
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* EVENT 01: CODENEX (HACKATHON)                                             */}
        {/* ========================================================================= */}
        <ScrollReveal 
          as="section"
          id="codenex" 
          className="brand-card p-6 sm:p-10 lg:p-12 relative overflow-hidden border-slate-200"
        >
          {/* Asymmetric Accent: Thin Magenta Vertical Line & Top Navy Accent Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[3.5px] bg-brand-magenta" />
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-brand-navy" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Desktop Left: Large Event Title & Key Meta */}
            <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-bold tracking-wider text-brand-navy uppercase">
                  EVENT {codenex.eventNumber || '01'}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-navy/10 text-brand-navy border border-brand-navy/20">
                  {codenex.categoryName || 'Technical'}
                </span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-navy tracking-tight leading-[1.05]">
                  {codenex.title}
                </h2>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-brand-magenta uppercase block mt-1.5">
                  {codenex.subTitle}
                </span>
              </div>

              {/* Visually Distinct "CODENEX TWIST" Accent Badge */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-magenta/10 via-brand-magenta/15 to-brand-navy/10 border border-brand-magenta/30 text-brand-navy shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-brand-magenta text-white flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 animate-pulse" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-brand-magenta leading-tight">
                      Special Feature
                    </span>
                    <span className="text-sm font-bold font-display text-brand-navy leading-tight">
                      CODENEX TWIST
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>Date: <strong className="text-slate-800">October 15, 2026</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-navy flex-shrink-0" />
                  <span>Mode: <strong className="text-slate-800">Offline (On-Campus)</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand-navy flex-shrink-0" />
                  <span>Team Size: <strong className="text-slate-800">{codenex.teamSize}</strong></span>
                </div>
              </div>

              {/* CODENEX PRIZES BOX */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-300/60 text-brand-navy">
                <div className="flex items-center gap-2 mb-2.5">
                  <Trophy className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800">
                    Cash Prizes & Honors
                  </span>
                </div>
                <div className="space-y-1.5 text-xs font-semibold">
                  <div className="flex items-center justify-between py-1 px-2 rounded-lg bg-white/80 border border-amber-200/70 shadow-2xs">
                    <span className="text-amber-900 font-bold">1st Prize</span>
                    <span className="font-mono text-brand-navy font-bold">5,000 RS + Certificate</span>
                  </div>
                  <div className="flex items-center justify-between py-1 px-2 rounded-lg bg-white/60 border border-slate-200/60">
                    <span className="text-slate-700">2nd Prize</span>
                    <span className="font-mono text-brand-navy font-bold">3,000 RS + Certificate</span>
                  </div>
                  <div className="flex items-center justify-between py-1 px-2 rounded-lg bg-white/60 border border-slate-200/60">
                    <span className="text-slate-700">3rd Prize</span>
                    <span className="font-mono text-brand-navy font-bold">1,000 RS + Certificate</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <PrimaryButton 
                  href={codenex.registrationUrl || siteConfig.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={ExternalLink}
                  className="w-full sm:w-auto"
                >
                  Register for CODENEX
                </PrimaryButton>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-button bg-slate-100 hover:bg-slate-200 text-brand-navy text-xs sm:text-sm font-semibold border border-slate-200 transition-colors"
                >
                  <QrCode className="w-4 h-4 text-brand-magenta" />
                  <span>Scan QR</span>
                </Link>
              </div>
            </div>

            {/* Desktop Right: Description & Rules */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Description */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Event Overview
                </h3>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  {codenex.description}
                </p>
              </div>

              {/* KEY RULES */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-base font-bold font-display text-brand-navy uppercase tracking-wider mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-navy" />
                  KEY RULES
                </h3>

                <ol className="space-y-3">
                  {codenex.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start text-sm sm:text-base text-slate-700 leading-relaxed">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-brand-navy text-xs font-mono font-bold flex items-center justify-center flex-shrink-0 mr-3.5 mt-0.5 border border-slate-200">
                        {idx + 1}
                      </span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ol>
              </div>

            </div>

          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* EVENT 02: SYNTAX STRIKE (DEBUGGING)                                       */}
        {/* ========================================================================= */}
        <ScrollReveal 
          as="section"
          id="syntax-strike" 
          className="brand-card p-6 sm:p-10 lg:p-12 relative overflow-hidden border-slate-200"
        >
          {/* Asymmetric Accent: Thin Magenta Vertical Line & Top Navy Accent Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[3.5px] bg-brand-magenta" />
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-brand-navy" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Desktop Left: Large Event Title & Key Meta */}
            <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-bold tracking-wider text-brand-navy uppercase">
                  EVENT {syntaxStrike.eventNumber || '02'}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-navy/10 text-brand-navy border border-brand-navy/20">
                  {syntaxStrike.categoryName || 'Technical'}
                </span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-navy tracking-tight leading-[1.05]">
                  {syntaxStrike.title}
                </h2>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-brand-magenta uppercase block mt-1.5">
                  {syntaxStrike.subTitle}
                </span>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>Date: <strong className="text-slate-800">October 15, 2026</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-navy flex-shrink-0" />
                  <span>Mode: <strong className="text-slate-800">Offline (On-Campus)</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand-navy flex-shrink-0" />
                  <span>Team Size: <strong className="text-slate-800">{syntaxStrike.teamSize}</strong></span>
                </div>
              </div>

              {/* SYNTAX STRIKE PRIZES BOX */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-300/60 text-brand-navy">
                <div className="flex items-center gap-2 mb-2.5">
                  <Trophy className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800">
                    Cash Prizes & Honors
                  </span>
                </div>
                <div className="space-y-1.5 text-xs font-semibold">
                  <div className="flex items-center justify-between py-1 px-2 rounded-lg bg-white/80 border border-amber-200/70 shadow-2xs">
                    <span className="text-amber-900 font-bold">1st Prize</span>
                    <span className="font-mono text-brand-navy font-bold">5,000 RS + Certificate</span>
                  </div>
                  <div className="flex items-center justify-between py-1 px-2 rounded-lg bg-white/60 border border-slate-200/60">
                    <span className="text-slate-700">2nd Prize</span>
                    <span className="font-mono text-brand-navy font-bold">3,000 RS + Certificate</span>
                  </div>
                  <div className="flex items-center justify-between py-1 px-2 rounded-lg bg-white/60 border border-slate-200/60">
                    <span className="text-slate-700">3rd Prize</span>
                    <span className="font-mono text-brand-navy font-bold">1,000 RS + Certificate</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <PrimaryButton 
                  href={syntaxStrike.registrationUrl || siteConfig.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={ExternalLink}
                  className="w-full sm:w-auto"
                >
                  Register for SYNTAX STRIKE
                </PrimaryButton>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-button bg-slate-100 hover:bg-slate-200 text-brand-navy text-xs sm:text-sm font-semibold border border-slate-200 transition-colors"
                >
                  <QrCode className="w-4 h-4 text-brand-magenta" />
                  <span>Scan QR</span>
                </Link>
              </div>
            </div>

            {/* Desktop Right: Description, Progression & Rules */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Description */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Event Overview
                </h3>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  {syntaxStrike.description}
                </p>
              </div>

              {/* Prominently Displayed Progression: Minimalist & Visually Interesting */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-navy mb-4">
                  Unlock-Based Progression System
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  {/* Step 1 */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex sm:flex-col items-center sm:text-center justify-between sm:justify-center relative group hover:border-brand-navy transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-brand-navy/10 text-brand-navy flex items-center justify-center mb-0 sm:mb-2 mr-3 sm:mr-0 flex-shrink-0">
                      <Bug className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold font-display text-brand-navy">
                      Find the Bug
                    </span>
                    <span className="text-slate-400 sm:hidden">→</span>
                  </div>

                  {/* Step 2 */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex sm:flex-col items-center sm:text-center justify-between sm:justify-center relative group hover:border-brand-navy transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-brand-navy/10 text-brand-navy flex items-center justify-center mb-0 sm:mb-2 mr-3 sm:mr-0 flex-shrink-0">
                      <Code className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold font-display text-brand-navy">
                      Fix the Code
                    </span>
                    <span className="text-slate-400 sm:hidden">→</span>
                  </div>

                  {/* Step 3 */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex sm:flex-col items-center sm:text-center justify-between sm:justify-center relative group hover:border-brand-navy transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-brand-navy/10 text-brand-navy flex items-center justify-center mb-0 sm:mb-2 mr-3 sm:mr-0 flex-shrink-0">
                      <Send className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold font-display text-brand-navy">
                      Submit
                    </span>
                    <span className="text-slate-400 sm:hidden">→</span>
                  </div>

                  {/* Step 4 */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-brand-magenta/10 to-brand-magenta/5 border border-brand-magenta/30 flex sm:flex-col items-center sm:text-center justify-between sm:justify-center relative group">
                    <div className="w-9 h-9 rounded-lg bg-brand-magenta text-white flex items-center justify-center mb-0 sm:mb-2 mr-3 sm:mr-0 flex-shrink-0">
                      <Unlock className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold font-display text-brand-navy">
                      Unlock the Next Bug
                    </span>
                    <span className="text-brand-magenta sm:hidden">✓</span>
                  </div>
                </div>
              </div>

              {/* KEY RULES */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-base font-bold font-display text-brand-navy uppercase tracking-wider mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-navy" />
                  KEY RULES
                </h3>

                <ol className="space-y-3">
                  {syntaxStrike.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start text-sm sm:text-base text-slate-700 leading-relaxed">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-brand-navy text-xs font-mono font-bold flex items-center justify-center flex-shrink-0 mr-3.5 mt-0.5 border border-slate-200">
                        {idx + 1}
                      </span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ol>
              </div>

            </div>

          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* EVENT 03: PRESENTIX (ARTICLE PRESENTATION)                                */}
        {/* ========================================================================= */}
        <ScrollReveal 
          as="section"
          id="presentix" 
          className="brand-card p-6 sm:p-10 lg:p-12 relative overflow-hidden border-slate-200"
        >
          {/* Asymmetric Accent: Thin Magenta Vertical Line & Top Navy Accent Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[3.5px] bg-brand-magenta" />
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-brand-navy" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Desktop Left: Large Event Title & Key Meta */}
            <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-bold tracking-wider text-brand-navy uppercase">
                  EVENT {presentix.eventNumber || '03'}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-navy/10 text-brand-navy border border-brand-navy/20">
                  {presentix.categoryName || 'Technical'}
                </span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-navy tracking-tight leading-[1.05]">
                  {presentix.title}
                </h2>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-brand-magenta uppercase block mt-1.5">
                  {presentix.subTitle}
                </span>
              </div>

              {/* Visually Distinct Hybrid Mode Feature Badge */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-magenta/15 via-pink-50 to-brand-navy/10 border border-brand-magenta/30 text-brand-navy shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-brand-magenta text-white flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-brand-magenta leading-tight">
                      Dual Mode Schedule
                    </span>
                    <span className="text-xs sm:text-sm font-bold font-display text-brand-navy leading-tight">
                      Online (Oct 14) • Offline (Oct 15)
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span>Online Contest: <strong className="text-emerald-700 font-bold">October 14, 2026 (Free)</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-navy flex-shrink-0" />
                  <span>Offline Contest: <strong className="text-brand-navy font-bold">October 15, 2026</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Mode: <strong className="text-slate-800">Online (Oct 14) & Offline (Oct 15)</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand-navy flex-shrink-0" />
                  <span>Team Size: <strong className="text-slate-800">{presentix.teamSize}</strong></span>
                </div>
              </div>

              {/* 100% FREE ONLINE PARTICIPATION CALLOUT */}
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs font-bold font-display uppercase tracking-wider">
                    Online Mode (Oct 14) is 100% Free!
                  </span>
                </div>
                <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                  Registering PRESENTIX to contest in Online mode on October 14 is completely free of charge. Offline presentations take place on-campus on October 15.
                </p>
              </div>

              {/* PRESENTIX PRIZES BOX */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-300/60 text-brand-navy">
                <div className="flex items-center gap-2 mb-2.5">
                  <Trophy className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800">
                    Cash Prizes & Honors
                  </span>
                </div>
                <div className="space-y-1.5 text-xs font-semibold">
                  <div className="flex items-center justify-between py-1 px-2 rounded-lg bg-white/80 border border-amber-200/70 shadow-2xs">
                    <span className="text-amber-900 font-bold">1st Prize</span>
                    <span className="font-mono text-brand-navy font-bold">5,000 RS + Certificate</span>
                  </div>
                  <div className="flex items-center justify-between py-1 px-2 rounded-lg bg-white/60 border border-slate-200/60">
                    <span className="text-slate-700">2nd Prize</span>
                    <span className="font-mono text-brand-navy font-bold">3,000 RS + Certificate</span>
                  </div>
                  <div className="flex items-center justify-between py-1 px-2 rounded-lg bg-white/60 border border-slate-200/60">
                    <span className="text-slate-700">3rd Prize</span>
                    <span className="font-mono text-brand-navy font-bold">1,000 RS + Certificate</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <PrimaryButton 
                  href={presentix.registrationUrl || siteConfig.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={ExternalLink}
                  className="w-full sm:w-auto"
                >
                  Register for PRESENTIX
                </PrimaryButton>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-button bg-slate-100 hover:bg-slate-200 text-brand-navy text-xs sm:text-sm font-semibold border border-slate-200 transition-colors"
                >
                  <QrCode className="w-4 h-4 text-brand-magenta" />
                  <span>Scan QR</span>
                </Link>
              </div>
            </div>

            {/* Desktop Right: Description, Domains, Core Objectives & Rules */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Description */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Event Overview
                </h3>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  {presentix.description}
                </p>
              </div>

              {/* SECTION: AVAILABLE DOMAINS (Compact Chips) */}
              <div className="pt-4 border-t border-slate-100">
                <div className="mb-4">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-navy">
                    AVAILABLE DOMAINS
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Select a topic spanning any of the following approved AI specialization domains:
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {presentix.availableDomains.map((domain, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-50 text-slate-800 border border-slate-200/90 hover:border-brand-magenta hover:bg-white hover:text-brand-navy transition-all duration-200 shadow-subtle"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-magenta mr-2" />
                      {domain}
                    </span>
                  ))}
                </div>
              </div>

              {/* CORE OBJECTIVE */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-navy mb-3">
                  CORE OBJECTIVE
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-3 font-medium">
                  Participants must:
                </p>

                <ul className="space-y-2 text-sm sm:text-base text-slate-700">
                  {presentix.coreObjectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start">
                      <Target className="w-4 h-4 text-brand-navy flex-shrink-0 mr-3 mt-1" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* KEY RULES */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-base font-bold font-display text-brand-navy uppercase tracking-wider mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-navy" />
                  KEY RULES
                </h3>

                <ul className="space-y-3">
                  {presentix.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start text-sm sm:text-base text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-brand-navy flex-shrink-0 mr-3 mt-0.5" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>

      {/* Reusable Accessible Registration Modal */}
      <RegistrationModal
        isOpen={Boolean(activeEvent)}
        onClose={() => setActiveEvent(null)}
        eventName={activeEvent?.title}
        customRegistrationUrl={activeEvent?.registrationUrl || siteConfig.registrationUrl}
      />
    </div>
  );
}
