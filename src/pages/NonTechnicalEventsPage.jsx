import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Compass, 
  Footprints, 
  Gavel, 
  Coins, 
  Trophy, 
  Users, 
  Sparkles,
  ShieldAlert,
  Target,
  Calendar,
  ExternalLink,
  QrCode,
  Utensils,
  Award,
  Gift
} from 'lucide-react';
import { nonTechnicalEvents } from '../data/events';
import { siteConfig } from '../data/siteConfig';
import PageHero from '../components/common/PageHero';
import PrimaryButton from '../components/common/PrimaryButton';
import RegistrationModal from '../components/common/RegistrationModal';
import ScrollReveal from '../components/common/ScrollReveal';
import Seo from '../components/common/Seo';

export default function NonTechnicalEventsPage() {
  const [activeEvent, setActiveEvent] = useState(null);
  const nexahunt = nonTechnicalEvents.find((e) => e.id === 'nexahunt') || nonTechnicalEvents[0];
  const synerxAuction = nonTechnicalEvents.find((e) => e.id === 'synerx-auction') || nonTechnicalEvents[1];

  return (
    <div className="bg-white min-h-screen">
      <Seo title="Non-Technical Events | SYNEXIA'26" description="Play, strategize, and compete in SYNEXIA'26 non-technical tracks — NEXAHUNT treasure hunt and SynerX Auction with exciting prizes." />
      {/* PAGE HERO */}
      <PageHero
        badge="Enterprise & Creative Arena"
        title="NON-TECHNICAL EVENTS"
        subtitle="Play. Strategize. Compete."
        breadcrumbs={[{ label: "Non-Technical Events" }]}
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
                All Non-Technical Events on October 15, 2026 • Offline (On-Campus)
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
        {/* EVENT 01: NEXAHUNT                                                        */}
        {/* ========================================================================= */}
        <ScrollReveal 
          as="section"
          id="nexahunt"
          className="brand-card p-6 sm:p-10 lg:p-12 relative overflow-hidden border-slate-200"
        >
          {/* Asymmetric Accent: Thin Magenta Vertical Line & Top Accent */}
          <div className="absolute left-0 top-0 bottom-0 w-[3.5px] bg-brand-magenta" />
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-brand-magenta" />

          {/* Abstract Clue / Route Trail Background Graphic (Subtle & Energetic) */}
          <div className="absolute -top-10 -right-10 w-80 h-80 pointer-events-none opacity-[0.06] overflow-hidden">
            <svg viewBox="0 0 200 200" className="w-full h-full text-brand-magenta stroke-current fill-none">
              <path d="M 20,40 Q 80,10 120,60 T 180,140" strokeWidth="4" strokeDasharray="6,6" />
              <circle cx="20" cy="40" r="8" fill="currentColor" />
              <circle cx="120" cy="60" r="8" fill="currentColor" />
              <circle cx="180" cy="140" r="10" fill="currentColor" />
              <polygon points="175,130 185,130 180,120" fill="currentColor" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Desktop Left: Title, Key Meta & Clue/Trail Abstract Graphic Card */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-bold tracking-wider text-brand-navy uppercase">
                  EVENT {nexahunt.eventNumber || '01'}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-magenta/10 text-brand-magenta border border-brand-magenta/20">
                  {nexahunt.categoryName || 'Non-Technical'}
                </span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-navy tracking-tight leading-[1.05]">
                  {nexahunt.title}
                </h2>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-brand-magenta uppercase block mt-1.5">
                  {nexahunt.subTitle}
                </span>
              </div>

              {/* Clue / Route / Treasure Visual Motif Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-brand-magenta/5 via-slate-50 to-brand-navy/5 border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-magenta text-white flex items-center justify-center flex-shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold font-display text-brand-navy">
                      Checkpoint Trail
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      Sequential Logic Discovery
                    </span>
                  </div>
                </div>

                {/* Minimalist Trail Visual Sequence */}
                <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-mono">
                  <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-subtle">
                    <Footprints className="w-3.5 h-3.5 mx-auto mb-1 text-brand-navy" />
                    <span>Follow Clues</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-subtle">
                    <MapPin className="w-3.5 h-3.5 mx-auto mb-1 text-brand-blue" />
                    <span>Crack Tasks</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-brand-magenta/40 text-brand-magenta shadow-subtle font-bold">
                    <Trophy className="w-3.5 h-3.5 mx-auto mb-1 text-brand-magenta" />
                    <span>Find Treasure</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2 text-xs text-slate-600">
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
                  <span>Participation: <strong className="text-slate-800">{nexahunt.teamSize}</strong></span>
                </div>
              </div>

              {/* EXCITING PRIZES HIGHLIGHT */}
              <div className="p-3.5 rounded-xl bg-gradient-to-br from-brand-magenta/10 via-pink-50 to-transparent border border-brand-magenta/30 text-brand-navy">
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4 text-brand-magenta flex-shrink-0" />
                  <span className="text-xs font-bold font-display uppercase tracking-wider text-brand-magenta">
                    Exciting Prizes Awaiting!
                  </span>
                </div>
                <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                  Podium winners will be awarded <strong>Exciting Prizes & Merit Certificates</strong>!
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <PrimaryButton 
                  href={nexahunt.registrationUrl || siteConfig.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={ExternalLink}
                  className="w-full sm:w-auto"
                >
                  Register for NEXAHUNT
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
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  {nexahunt.description}
                </p>
              </div>

              {/* KEY RULES */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-base font-bold font-display text-brand-navy uppercase tracking-wider mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-magenta" />
                  KEY RULES
                </h3>

                <ul className="space-y-3.5">
                  {nexahunt.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start text-sm sm:text-base text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-brand-magenta flex-shrink-0 mr-3.5 mt-0.5" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* EVENT 02: SynerX Auction                                                  */}
        {/* ========================================================================= */}
        <ScrollReveal 
          as="section"
          id="synerx-auction"
          className="brand-card p-6 sm:p-10 lg:p-12 relative overflow-hidden border-slate-200"
        >
          {/* Asymmetric Accent: Thin Magenta Vertical Line & Top Accent */}
          <div className="absolute left-0 top-0 bottom-0 w-[3.5px] bg-brand-magenta" />
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-brand-navy" />

          {/* Abstract Auction / Cricket Stadium Geometry Graphic */}
          <div className="absolute -bottom-10 -right-10 w-80 h-80 pointer-events-none opacity-[0.05] overflow-hidden">
            <svg viewBox="0 0 200 200" className="w-full h-full text-brand-navy stroke-current fill-none">
              <ellipse cx="100" cy="100" rx="90" ry="60" strokeWidth="4" />
              <ellipse cx="100" cy="100" rx="60" ry="40" strokeWidth="2" strokeDasharray="4,4" />
              <line x1="100" y1="75" x2="100" y2="125" strokeWidth="3" />
              <line x1="90" y1="85" x2="110" y2="85" strokeWidth="2" />
              <line x1="90" y1="115" x2="110" y2="115" strokeWidth="2" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Desktop Left: Title, Key Meta & Auction Abstract Graphic Card */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-bold tracking-wider text-brand-navy uppercase">
                  EVENT {synerxAuction.eventNumber || '02'}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-magenta/10 text-brand-magenta border border-brand-magenta/20">
                  {synerxAuction.categoryName || 'Non-Technical'}
                </span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-navy tracking-tight leading-[1.05]">
                  {synerxAuction.title}
                </h2>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-brand-magenta uppercase block mt-1.5">
                  {synerxAuction.subTitle}
                </span>
              </div>

              {/* Auction & Strategic Bidding Motif Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-brand-navy/5 via-slate-50 to-brand-magenta/5 border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-navy text-white flex items-center justify-center flex-shrink-0">
                    <Gavel className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold font-display text-brand-navy">
                      Strategic Bidding Arena
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      Virtual Capital Allocation
                    </span>
                  </div>
                </div>

                {/* Minimalist Auction Mechanism Pills */}
                <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-mono">
                  <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-subtle">
                    <Coins className="w-3.5 h-3.5 mx-auto mb-1 text-brand-magenta" />
                    <span>Fixed Budget</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-subtle">
                    <Users className="w-3.5 h-3.5 mx-auto mb-1 text-brand-navy" />
                    <span>Live Bids</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-subtle">
                    <Trophy className="w-3.5 h-3.5 mx-auto mb-1 text-emerald-600" />
                    <span>Best Squad</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2 text-xs text-slate-600">
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
                  <span>Participation: <strong className="text-slate-800">{synerxAuction.teamSize}</strong></span>
                </div>
              </div>

              {/* EXCITING PRIZES HIGHLIGHT */}
              <div className="p-3.5 rounded-xl bg-gradient-to-br from-brand-navy/10 via-slate-50 to-transparent border border-brand-navy/30 text-brand-navy">
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4 text-brand-navy flex-shrink-0" />
                  <span className="text-xs font-bold font-display uppercase tracking-wider text-brand-navy">
                    Exciting Prizes Awaiting!
                  </span>
                </div>
                <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                  Winning cricket squads will be awarded <strong>Exciting Prizes & Certificates</strong>!
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <PrimaryButton 
                  href={synerxAuction.registrationUrl || siteConfig.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={ExternalLink}
                  className="w-full sm:w-auto"
                >
                  Register for SynerX Auction
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
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  {synerxAuction.description}
                </p>
              </div>

              {/* KEY RULES */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-base font-bold font-display text-brand-navy uppercase tracking-wider mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-navy" />
                  KEY RULES
                </h3>

                <ul className="space-y-3.5">
                  {synerxAuction.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start text-sm sm:text-base text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-brand-navy flex-shrink-0 mr-3.5 mt-0.5" />
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
