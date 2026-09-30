import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, 
  ExternalLink, 
  Code2, 
  Sparkles, 
  Trophy, 
  CheckCircle2, 
  Calendar,
  Award,
  Utensils,
  Laptop,
  Megaphone,
  Gift,
  Phone,
  MapPin,
  Tag,
  Ticket,
  Check,
  ArrowUpRight,
  Building2
} from 'lucide-react';
import { coordinators } from '../data/coordinators';
import { SYMPOSIUM_CONFIG } from '../data/symposiumData';
import { siteConfig } from '../data/siteConfig';
import { technicalEvents, nonTechnicalEvents } from '../data/events';
import PrimaryButton from '../components/common/PrimaryButton';
import SecondaryButton from '../components/common/SecondaryButton';
import EventCard from '../components/events/EventCard';
import RobotMascot from '../components/common/RobotMascot';
import ScrollReveal from '../components/common/ScrollReveal';
import Seo from '../components/common/Seo';

export default function HomePage() {
  const hasRegistrationUrl = Boolean(siteConfig.registrationUrl && siteConfig.registrationUrl.trim().length > 0);

  const telLink = (phone) => `tel:${String(phone).replace(/[^+\d]/g, '')}`;

  const studentContactList = [
    coordinators.president,
    coordinators.secretary,
    coordinators.technicalHead,
    coordinators.nonTechnicalHead,
  ].map((c) => ({
    name: c.name,
    role: `${c.role} • ${c.year}`,
    phone: c.phone,
    type: 'student',
    initials: c.initials,
    image: c.image,
  }));

  const staffContact = {
    name: coordinators.staffCoordinator.name,
    role: `${coordinators.staffCoordinator.designation} • ${coordinators.staffCoordinator.department}`,
    phone: coordinators.staffCoordinator.phone,
    type: 'faculty',
    initials: coordinators.staffCoordinator.initials,
    image: coordinators.staffCoordinator.image,
  };

  const renderContactCard = (contact, idx) => (
    <a
      key={idx}
      href={telLink(contact.phone)}
      className="brand-card p-6 flex flex-col items-center text-center relative overflow-hidden group border-slate-200"
    >
      {/* Top indicator with brand gradient (slow fade on hover) */}
      <div className={`absolute top-0 left-0 right-0 h-[2.5px] ${contact.type === 'faculty' ? 'bg-gradient-to-r from-brand-navy via-brand-blue to-brand-navy' : 'bg-gradient-to-r from-brand-navy via-brand-blue to-brand-magenta'} opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-out z-10`} />

      {/* Photo with Slow Halo Ring */}
      <div className="relative mb-4 z-10">
        {/* Glow */}
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-brand-navy/30 via-brand-blue/20 to-brand-magenta/30 opacity-0 group-hover:opacity-100 blur-md transition-all duration-700 ease-out pointer-events-none" />

        <div className="relative p-1 rounded-full bg-gradient-to-tr from-brand-navy/80 via-brand-blue to-brand-magenta ring-2 ring-white shadow-sm transition-transform duration-700 ease-out group-hover:scale-[1.02]">
          {contact.image ? (
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-slate-100 ring-2 ring-white/90">
              <img
                src={contact.image}
                alt={contact.name}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-104"
              />
            </div>
          ) : (
            <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full ${
              contact.type === 'faculty'
                ? 'bg-brand-navy text-white'
                : 'bg-slate-50 text-brand-navy border border-brand-navy/15'
            } flex items-center justify-center font-display font-extrabold text-2xl tracking-tight transition-transform duration-500`}>
              {contact.initials}
            </div>
          )}
        </div>

        {/* Small status dot */}
        <span 
          aria-hidden="true"
          className="absolute bottom-0 right-1.5 w-3.5 h-3.5 rounded-full bg-brand-magenta ring-2 ring-white shadow-sm flex items-center justify-center"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        </span>
      </div>

      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-magenta px-2 py-0.5 rounded-full bg-brand-magenta/5 border border-brand-magenta/15 mb-2">
        {contact.type === 'faculty' ? 'Staff' : 'Student'} Coordinator
      </span>

      <h3 className="text-base sm:text-lg font-bold font-display text-brand-navy leading-tight mb-1 group-hover:text-brand-blue transition-colors">
        {contact.name}
      </h3>

      <p className="text-xs text-slate-500 mb-4 leading-snug">
        {contact.role}
      </p>

      <span className="mt-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-button bg-slate-50 border border-slate-200 group-hover:border-brand-navy group-hover:bg-brand-navy group-hover:text-white text-xs font-mono font-medium text-slate-700 transition-all duration-200">
        <Phone className="w-3.5 h-3.5 text-brand-magenta group-hover:text-brand-magenta-light transition-colors" />
        <span>{contact.phone}</span>
      </span>
    </a>
  );

  return (
    <div className="bg-white min-h-screen">
      <Seo title="SYNEXIA'26 | International Symposium | EGS Pillay Engineering College" description="Join SYNEXIA'26, the international symposium by the Department of CSE & Business Systems, EGS Pillay Engineering College. Technical & non-technical events, cash prizes, food provided to all participants on October 10 & 14, 2026." />
      
      {/* ========================================================================= */}
      {/* SECTION 1 — HERO                                                          */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200 pt-10 pb-20 sm:pt-14 sm:pb-28">
        
        {/* Subtle Minimalist Background Grid */}
        <div className="absolute inset-0 bg-grid-minimal opacity-50 pointer-events-none" />

        {/* Subtle Diagonal Geometry Element Inspired by SYNEXIA Logo */}
        <div className="absolute -top-24 right-0 w-96 h-96 pointer-events-none overflow-hidden opacity-25">
          <div className="w-full h-full bg-gradient-to-bl from-brand-navy via-brand-navy/60 to-transparent transform rotate-45 translate-x-24 -translate-y-12" />
        </div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 pointer-events-none overflow-hidden opacity-15">
          <div className="w-full h-full bg-gradient-to-tr from-brand-magenta via-brand-magenta/40 to-transparent transform -rotate-45" />
        </div>
        
        {/* Subtle Diagonal Accent Lines */}
        <div className="absolute top-28 right-12 w-32 h-[2px] bg-gradient-to-r from-transparent via-brand-magenta to-brand-navy transform -rotate-12 pointer-events-none opacity-40 hidden md:block" />
        <div className="absolute top-36 right-8 w-20 h-[1.5px] bg-brand-navy/30 transform -rotate-12 pointer-events-none hidden md:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Visually-hidden page heading for document structure / SEO */}
          <h1 className="sr-only">
            SYNEXIA'26 International Symposium, EGS Pillay Engineering College
          </h1>

          {/* Top: EGS Pillay Engineering College Institutional Header Asset */}
          <div className="mb-6 sm:mb-8 md:mb-10 flex justify-center animate-fade-up">
            <div className="w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl px-3 sm:px-6 py-3.5 sm:py-5 md:py-6 rounded-2xl bg-white border border-slate-200/90 shadow-subtle hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center">
              <div className="w-full flex items-center justify-center">
                <img
                  src={siteConfig.collegeLogo || SYMPOSIUM_CONFIG.organizer.bannerImage}
                  alt="EGS Pillay Engineering College"
                  className="w-full h-auto max-h-24 sm:max-h-36 md:max-h-48 lg:max-h-56 object-contain mx-auto block scale-[1.03] sm:scale-100 transition-transform duration-300"
                />
              </div>

              {/* Mobile institutional clarity subtitle to ensure 100% legibility on small screens */}
              <div className="mt-2.5 sm:hidden text-center pt-2 border-t border-slate-100 w-full">
                <p className="text-[11px] font-display font-black text-brand-navy tracking-wide uppercase leading-tight">
                  
                </p>
                <p className="text-[9px] font-mono text-slate-500 tracking-wider mt-0.5">
                  
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">

            {/* Department Label (Small Institutional Text) */}
            <div className="mb-3 animate-fade-up stagger-1">
              <h2 className="text-xs sm:text-sm md:text-base font-bold font-display uppercase tracking-widest text-brand-navy">
                {siteConfig.departmentName}
              </h2>
            </div>

            {/* "PRESENTS" */}
            <div className="mb-6 animate-fade-up stagger-2">
              <span className="inline-block text-xs font-mono font-bold tracking-[0.25em] text-brand-magenta uppercase px-3 py-1 rounded-full bg-brand-magenta/5 border border-brand-magenta/20">
                PRESENTS
              </span>
            </div>

            {/* Prominent Official SYNEXIA Logo Asset */}
            <div className="my-6 flex justify-center animate-fade-up stagger-3">
              <div className="p-4 sm:p-6 rounded-card bg-white border border-slate-200 shadow-subtle hover:border-slate-300 transition-all duration-300 scale-on-hover">
                <img
                  src={siteConfig.synexiaLogo || SYMPOSIUM_CONFIG.logo}
                  alt="SYNEXIA association logo"
                  className="h-16 sm:h-24 md:h-28 lg:h-32 w-auto object-contain mx-auto"
                />
              </div>
            </div>

            {/* Supporting Text: International Symposium */}
            <div className="mb-4 animate-fade-up stagger-4">
              <p className="text-lg sm:text-xl md:text-2xl font-bold font-display text-brand-navy tracking-tight">
                {SYMPOSIUM_CONFIG.type}
              </p>
            </div>

            {/* Official Date Badge */}
            <div className="mb-5 flex justify-center animate-fade-up stagger-4">
              <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/90 shadow-subtle text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-brand-navy font-bold font-display">
                  <Calendar className="w-4 h-4 text-brand-magenta" />
                  <span className="tracking-wide">SYMPOSIUM DATES: OCTOBER 10 & 14, 2026</span>
                </div>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="text-slate-700 text-xs font-mono font-medium">
                  OCT 10: <strong className="text-brand-navy">ALL EVENTS ON-CAMPUS</strong> | OCT 14: <strong className="text-emerald-700">PRESENTIX ONLINE</strong>
                </span>
              </div>
            </div>

            {/* Participant Perks: Food & Participation Certificate */}
            <div className="mb-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold animate-fade-up stagger-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 shadow-sm">
                <Utensils className="w-4 h-4 text-emerald-600" />
                <span>Food Provided to All Participants</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 shadow-sm">
                <Award className="w-4 h-4 text-blue-600" />
                <span>Participation Certificate for All</span>
              </div>
            </div>

            {/* Official Robot Mascot Element on Landing Page — Sticky / Stationary */}
            <div className="mb-8 flex justify-center items-center animate-fade-up stagger-4">
              <div className="relative inline-flex items-center gap-3.5 sm:gap-4 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-white border border-slate-200/90 shadow-subtle hover:border-brand-magenta/40 hover:shadow-md transition-all duration-300">
                <div className="relative">
                  <RobotMascot 
                    size="md" 
                    speechBubble="Welcome to SYNEXIA'26! 👍" 
                    speechPosition="top" 
                  />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-magenta">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Official AI Mascot</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold font-display text-brand-navy leading-tight">
                    Meet SYNEX — Your Symposium Guide
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    5 Exciting Tracks • Oct 10 (Offline) & Oct 14 (Online) • Food & Certificates Included
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-up stagger-5">
              <PrimaryButton
                to="/technical-events"
                icon={ArrowRight}
                className="w-full sm:w-auto text-sm sm:text-base px-6 py-3"
              >
                Explore Technical Events
              </PrimaryButton>
              
              <SecondaryButton
                to="/non-technical-events"
                icon={ArrowRight}
                className="w-full sm:w-auto text-sm sm:text-base px-6 py-3"
              >
                Explore Non-Technical Events
              </SecondaryButton>

              <Link
                to="/register"
                className="w-full sm:w-auto inline-flex items-center justify-center text-sm sm:text-base font-semibold px-6 py-3 rounded-button bg-brand-magenta text-white hover:bg-brand-magenta/90 hover:shadow-subtle transition-all duration-300 active:scale-98"
              >
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>

            {/* IMPORTANT REQUIREMENT CARD (Prominent & Visible for CODENEX Event) */}
            <div className="mt-10 sm:mt-12 max-w-2xl sm:max-w-3xl mx-auto animate-fade-up stagger-5 text-left">
              <div className="brand-card p-6 sm:p-8 bg-white border-2 border-brand-magenta/40 shadow-md relative overflow-hidden group hover:border-brand-magenta transition-all duration-300">
                {/* Asymmetric Left Magenta Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-magenta" />

                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-magenta/10 text-brand-magenta flex items-center justify-center flex-shrink-0 ring-1 ring-brand-magenta/20">
                    <Laptop className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  <div className="space-y-2 flex-grow">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold tracking-wider uppercase text-brand-magenta px-2.5 py-0.5 rounded-md bg-brand-magenta/10 border border-brand-magenta/20">
                        Important Requirement
                      </span>
                      <span className="text-xs font-mono font-bold text-brand-navy uppercase px-2 py-0.5 rounded bg-brand-navy/5">
                        CODENEX (Hackathon)
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-display text-brand-navy leading-snug">
                      Mandatory Laptop & AI Tool Requirement
                    </h3>

                    <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-semibold">
                      "The participant must bring their own laptop for CODENEX event with mentioned AI tool as downloaded in advance."
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                      <span className="text-slate-500 font-medium">Permitted AI Tools:</span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 font-mono font-bold border border-slate-200">Claude</span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 font-mono font-bold border border-slate-200">Antigravity</span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 font-mono font-bold border border-slate-200">ChatGPT</span>
                    </div>

                    <div className="pt-2">
                      <Link 
                        to="/technical-events#codenex" 
                        className="inline-flex items-center text-xs sm:text-sm font-bold text-brand-magenta hover:text-brand-navy transition-colors gap-1.5 animated-underline"
                      >
                        <span>View CODENEX Track Details & Rules</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* IMPORTANT ANNOUNCEMENT CARD: FREE ONLINE PRESENTIX & EXCITING PRIZES FOR NON-TECHNICAL */}
            <div className="mt-5 max-w-2xl sm:max-w-3xl mx-auto animate-fade-up stagger-5 text-left">
              <div className="brand-card p-6 sm:p-8 bg-white border-2 border-brand-navy/30 shadow-md relative overflow-hidden group hover:border-brand-navy transition-all duration-300">
                {/* Asymmetric Left Navy Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-navy" />

                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-navy/10 text-brand-navy flex items-center justify-center flex-shrink-0 ring-1 ring-brand-navy/20">
                    <Megaphone className="w-6 h-6 sm:w-7 sm:h-7 text-brand-navy" />
                  </div>

                  <div className="space-y-3 flex-grow">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold tracking-wider uppercase text-brand-navy px-2.5 py-0.5 rounded-md bg-brand-navy/10 border border-brand-navy/20">
                        Important Announcement
                      </span>
                      <span className="text-xs font-mono font-bold text-emerald-700 uppercase px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">
                        100% Free Online Entry
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-display text-brand-navy leading-snug">
                      Free Online PRESENTIX & Exciting Prizes for Non-Technical Events
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className="flex items-center gap-2 text-xs font-bold font-display text-brand-navy uppercase mb-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>PRESENTIX Online Contest</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          Offline mode will be held on-campus on <strong>Oct 10</strong>, and <span className="text-emerald-700 font-bold">Online Mode (Oct 14) is completely FREE</span>!
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className="flex items-center gap-2 text-xs font-bold font-display text-brand-navy uppercase mb-1">
                          <Gift className="w-4 h-4 text-brand-magenta" />
                          <span>Non-Technical Arena</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          There will be <strong className="text-brand-magenta">Exciting Prizes & Certificates</strong> for all Non-Technical event winners!
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Link 
                        to="/technical-events#presentix" 
                        className="inline-flex items-center text-xs sm:text-sm font-bold text-brand-navy hover:text-brand-magenta transition-colors gap-1.5 animated-underline"
                      >
                        <span>Learn more about PRESENTIX</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-slate-300 hidden sm:inline">•</span>
                      <Link 
                        to="/non-technical-events" 
                        className="inline-flex items-center text-xs sm:text-sm font-bold text-brand-magenta hover:text-brand-navy transition-colors gap-1.5 animated-underline"
                      >
                        <span>Explore Non-Technical Events</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* REGISTRATION FEES CARD (Clean White, High-Impact Important Card)          */}
            {/* ========================================================================= */}
            <div className="mt-6 max-w-2xl sm:max-w-3xl mx-auto animate-fade-up stagger-5 text-left">
              <div className="rounded-3xl bg-white text-slate-900 border-2 border-slate-900 shadow-xl relative overflow-hidden group hover:border-brand-magenta transition-all duration-300">
                {/* Thick Top Accent Bar with Brand Gradient */}
                <div className="h-2 w-full bg-gradient-to-r from-brand-navy via-brand-blue to-brand-magenta" />

                <div className="p-6 sm:p-8">
                  {/* Header Row: Official Badge & Pulsing Registration Status */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-200">
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-xl bg-brand-navy text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Tag className="w-4 h-4 text-white" />
                      </span>
                      <div>
                        <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-brand-magenta block">
                          Official Announcement
                        </span>
                        <h4 className="text-xs sm:text-sm font-extrabold font-display tracking-tight text-brand-navy">
                          SYMPOSIUM DELEGATE FEE
                        </h4>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-300">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                      REGISTRATION OPEN
                    </span>
                  </div>

                  {/* Main Body: Headline + Centered Big Price Banner */}
                  <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display tracking-tight text-brand-navy leading-tight">
                        REGISTRATION FEES
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1 max-w-md leading-relaxed">
                        One single registration fee covers full entry to all registered technical and non-technical events.
                      </p>
                    </div>

                    {/* Prominent Price Pill: Bold, Crisp, Clean */}
                    <div className="flex-shrink-0 self-start md:self-auto bg-slate-50 border-2 border-brand-navy/20 rounded-2xl px-6 py-4 text-center md:text-right shadow-sm group-hover:border-brand-magenta transition-colors">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 block mb-0.5">
                        ENTRY FEE
                      </span>
                      <div className="flex items-baseline justify-center md:justify-end gap-1">
                        <span className="text-4xl sm:text-5xl font-black font-display tracking-tight text-brand-navy">
                          ₹100
                        </span>
                        <span className="text-sm sm:text-base font-display font-bold text-slate-600">
                          / head
                        </span>
                      </div>
                      <div className="mt-2 inline-flex items-center justify-center w-full px-3 py-0.5 rounded-full bg-brand-magenta text-white font-mono font-bold text-xs tracking-wider uppercase shadow-sm">
                        tech / non-tech
                      </div>
                    </div>
                  </div>

                  {/* Inclusions Footer */}
                  <div className="pt-5 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="flex items-center gap-2.5 text-xs text-slate-800 font-medium">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>Technical Events Entry</span>
                    </div>

                    <div className="flex items-center gap-2.5 text-xs text-slate-800 font-medium">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>Non-Technical Events Entry</span>
                    </div>

                    <div className="flex items-center gap-2.5 text-xs text-slate-900 font-bold">
                      <div className="w-5 h-5 rounded-full bg-brand-magenta/15 text-brand-magenta flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-brand-magenta">Food and Certificate will be provided</span>
                    </div>
                  </div>

                  {/* Mascot Robot giving thumbs-up to ₹100 registration fee */}
                  <div className="absolute -bottom-1 -right-2 pointer-events-none select-none z-10 transition-all duration-500 ease-out group-hover:translate-x-[-4px] group-hover:-translate-y-1">
                    <RobotMascot 
                      size="md" 
                      flip={true} 
                      className="opacity-80 group-hover:opacity-100 transition-opacity" 
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 1.5 — ABOUT SYNEXIA'26 (Below Landing Page & Above Explore)       */}
      {/* ========================================================================= */}
      <section id="about" className="relative py-20 sm:py-28 bg-white border-b border-slate-200 overflow-hidden">
        {/* Subtle low-transparency campus watermark background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
          <img
            src="/assets/college-campus.png"
            alt=""
            className="w-full h-full object-cover object-center opacity-[0.05] filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
        </div>

        <ScrollReveal className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: Narrative & Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/15 text-brand-navy text-xs font-mono font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-brand-magenta" />
                <span>About The Symposium</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-brand-navy tracking-tight leading-tight">
                Empowering Visionary Minds at <span className="bg-gradient-to-r from-brand-navy via-brand-blue to-brand-magenta bg-clip-text text-transparent">SYNEXIA'26</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                <strong className="text-brand-navy font-semibold">SYNEXIA'26</strong> is an International Symposium organized by the Department of Computer Science and Business Systems (CSBS) at EGS Pillay Engineering College, Nagapattinam. Scheduled for October 10 and 14, 2026, the two-day event features a hybrid format with on-campus competitions on October 10 and an online paper presentation on October 14. The symposium offers a single ₹100 registration fee covering full access to all registered tracks, along with guaranteed certificates and food for all participants.
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                The event includes five major competitions divided across technical and non-technical domains. Technical tracks feature CODENEX (an AI-driven hackathon with cash prizes up to ₹5,000), SYNTAX STRIKE (a multi-level debugging challenge), and PRESENTIX (an article presentation contest that is completely free to join in its online mode). Non-technical offerings include NEXAHUNT, a team logic and treasure hunt, and SynerX Auction, a cricket squad bidding strategy game.
              </p>

              {/* 4 Feature Badges in 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-brand-navy/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy/10 text-brand-navy flex items-center justify-center shrink-0">
                    <Ticket className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Single ₹100 Entry Fee</div>
                    <div className="text-[11px] text-slate-500">Access to all registered tracks</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-brand-magenta/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-brand-magenta/10 text-brand-magenta flex items-center justify-center shrink-0">
                    <Utensils className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Guaranteed Food & Certificate</div>
                    <div className="text-[11px] text-slate-500">Provided for all registered participants</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-brand-navy/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy/10 text-brand-navy flex items-center justify-center shrink-0">
                    <Laptop className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Hybrid Event Structure</div>
                    <div className="text-[11px] text-slate-500">Oct 10 On-Campus • Oct 14 Online</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-brand-magenta/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-brand-magenta/10 text-brand-magenta flex items-center justify-center shrink-0">
                    <Trophy className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">5 Major Competitions</div>
                    <div className="text-[11px] text-slate-500">Technical & Non-Technical Domains</div>
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                {hasRegistrationUrl ? (
                  <a
                    href={siteConfig.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl bg-brand-navy text-white hover:bg-brand-navy-light shadow-subtle hover:shadow-md transition-all active:scale-[0.98]"
                  >
                    <span>Register for ₹100</span>
                    <ExternalLink className="w-4 h-4 text-brand-magenta-light" />
                  </a>
                ) : (
                  <Link
                    to="/register"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl bg-brand-navy text-white hover:bg-brand-navy-light shadow-subtle hover:shadow-md transition-all active:scale-[0.98]"
                  >
                    <span>Register for ₹100</span>
                    <ArrowRight className="w-4 h-4 text-brand-magenta-light" />
                  </Link>
                )}

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl bg-white text-slate-800 border border-slate-200 hover:border-brand-navy/40 hover:bg-slate-50 hover:text-brand-navy transition-all active:scale-[0.98]"
                >
                  <span>Institutional Legacy</span>
                  <ArrowUpRight className="w-4 h-4 text-brand-magenta" />
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: Featured College Photo Card with Low Transparency */}
            <div className="lg:col-span-5">
              <div className="relative group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-soft transition-all duration-500 hover:shadow-card-hover">
                
                {/* Photo showcase with low transparency overlay */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900/5">
                  <img
                    src="/assets/college-campus.png"
                    alt="EGS Pillay Engineering College Campus, Nagapattinam"
                    className="w-full h-full object-cover object-center opacity-30 group-hover:opacity-45 transition-all duration-700 filter contrast-110 saturate-[0.85] group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Soft white gradient scrim for UI harmony */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200 shadow-xs text-xs font-semibold text-brand-navy">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Host Institution</span>
                  </div>

                  <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy/90 text-white text-[11px] font-mono font-semibold shadow-xs">
                    <span>Autonomous</span>
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-6 sm:p-7 bg-white relative border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-brand-magenta uppercase tracking-wider mb-2">
                    <Building2 className="w-4 h-4" />
                    <span>E.G.S. Pillay Engineering College</span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-brand-navy tracking-tight mb-2">
                    Nagapattinam, Tamil Nadu
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 flex items-center gap-1.5 mb-5">
                    <MapPin className="w-3.5 h-3.5 text-brand-magenta shrink-0" />
                    <span>Affiliated to Anna University • NAAC A++ • NBA Accredited</span>
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <div>
                      <span className="font-semibold text-slate-900">Host Department:</span>
                      <p className="text-slate-500 mt-0.5">Computer Science & Business Systems</p>
                    </div>
                    <Link
                      to="/about"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-brand-navy hover:text-brand-magenta transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2 — EVENT CATEGORY: "Explore SYNEXIA'26"                          */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-brand-navy px-3 py-1 rounded-full bg-brand-navy/5 border border-brand-navy/15 inline-block mb-3">
              Event Categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-brand-navy tracking-tight">
              Explore SYNEXIA'26
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* TECHNICAL EVENTS CARD */}
            <div className="brand-card p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group border-slate-200 hover:border-brand-navy transition-all duration-300">
              {/* Subtle top indicator */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-navy" />
              
              <div>
                <div className="w-12 h-12 rounded-button bg-brand-navy/10 text-brand-navy flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                  <Code2 className="w-6 h-6" />
                </div>

                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-navy/60 block mb-1">
                  Track 01
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-brand-navy mb-3">
                  TECHNICAL EVENTS
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                  Challenge your technical skills through coding, debugging, and AI-focused presentation.
                </p>
              </div>

              <div>
                <Link
                  to="/technical-events"
                  className="inline-flex items-center text-sm sm:text-base font-bold font-display text-brand-navy group-hover:text-brand-blue transition-colors gap-2 animated-underline"
                >
                  <span>Explore Events</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Mascot Robot Design Element */}
              <div className="absolute -bottom-1 -right-2 pointer-events-none select-none z-10 transition-all duration-500 ease-out group-hover:translate-x-[-4px] group-hover:-translate-y-1">
                <RobotMascot 
                  size="md" 
                  flip={true} 
                  className="opacity-75 group-hover:opacity-100 transition-opacity" 
                />
              </div>
            </div>

            {/* NON-TECHNICAL EVENTS CARD */}
            <div className="brand-card p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group border-slate-200 hover:border-brand-magenta transition-all duration-300">
              {/* Subtle top indicator */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-magenta" />
              
              <div>
                <div className="w-12 h-12 rounded-button bg-brand-magenta/10 text-brand-magenta flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                  <Trophy className="w-6 h-6" />
                </div>

                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-magenta/70 block mb-1">
                  Track 02
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold font-display text-brand-navy mb-3">
                  NON-TECHNICAL EVENTS
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                  Compete, strategize, and collaborate through engaging team-based challenges.
                </p>
              </div>

              <div>
                <Link
                  to="/non-technical-events"
                  className="inline-flex items-center text-sm sm:text-base font-bold font-display text-brand-magenta hover:text-brand-magenta-800 transition-colors gap-2 animated-underline"
                >
                  <span>Explore Events</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Mascot Robot Design Element */}
              <div className="absolute -bottom-1 -right-2 pointer-events-none select-none z-10 transition-all duration-500 ease-out group-hover:translate-x-[-4px] group-hover:-translate-y-1">
                <RobotMascot 
                  size="md" 
                  flip={true} 
                  className="opacity-75 group-hover:opacity-100 transition-opacity" 
                />
              </div>
            </div>

          </div>

        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3 — EVENT PREVIEW (Compact Cards)                                 */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-brand-navy px-3 py-1 rounded-full bg-brand-navy/5 border border-brand-navy/15 inline-block mb-3">
              Symposium Schedule
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-brand-navy tracking-tight mb-2">
              Featured Events
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore the five official competitive events structured for SYNEXIA'26.
            </p>
          </div>

          {/* Technical Events Subsection */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-100">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-navy" />
              <h3 className="text-lg font-bold font-display text-brand-navy uppercase tracking-wider">
                Technical Tracks
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {technicalEvents.map((event, idx) => (
                <EventCard
                  key={event.id}
                  event={event}
                  staggerClass={`animate-fade-up stagger-${idx + 1}`}
                  compact={true}
                />
              ))}
            </div>
          </div>

          {/* Non-Technical Events Subsection */}
          <div>
            <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-100">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-magenta" />
              <h3 className="text-lg font-bold font-display text-brand-navy uppercase tracking-wider">
                Non-Technical Tracks
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {nonTechnicalEvents.map((event, idx) => (
                <EventCard
                  key={event.id}
                  event={event}
                  staggerClass={`animate-fade-up stagger-${idx + 1}`}
                  compact={true}
                />
              ))}
            </div>
          </div>

        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4 — CONTACT US                                                     */}
      {/* ========================================================================= */}
      <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-brand-navy px-3 py-1 rounded-full bg-brand-navy/5 border border-brand-navy/15 inline-block mb-3">
              Helpdesk
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-brand-navy tracking-tight mb-2">
              Contact Us
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Reach out to our coordinators for queries regarding tracks, participation, and logistics. Tap any contact to call directly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {studentContactList.map(renderContactCard)}
          </div>

          {/* STAFF COORDINATOR — Separated Below the Student Coordinators */}
          <div className="mt-12">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-[1px] w-10 sm:w-14 bg-slate-200" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-navy/60 block">
                Faculty Oversight
              </span>
              <div className="h-[1px] w-10 sm:w-14 bg-slate-200" />
            </div>

            <div className="max-w-xs mx-auto">
              {renderContactCard(staffContact, 'staff')}
            </div>
          </div>

          {/* MAP — Embedded Google Map of the Venue */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="brand-card p-6 sm:p-8 overflow-hidden border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-brand-navy mb-1">
                    FIND OUR CAMPUS
                  </h3>
                  <p className="text-sm text-slate-600">
                    {SYMPOSIUM_CONFIG.venue.institution} — {SYMPOSIUM_CONFIG.venue.address}
                  </p>
                </div>
                <a
                  href={SYMPOSIUM_CONFIG.venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-button bg-brand-navy text-white text-xs sm:text-sm font-semibold hover:bg-brand-navy-light transition-all shadow-sm"
                >
                  <MapPin className="w-4 h-4 text-brand-magenta-light" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4 ml-0.5 opacity-70" />
                </a>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-subtle">
                <iframe
                  title={`${SYMPOSIUM_CONFIG.name} Venue Map`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(SYMPOSIUM_CONFIG.venue.institution)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full"
                />
              </div>
            </div>
          </div>

        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5 — REGISTRATION CTA                                              */}
      {/* ========================================================================= */}
      <section id="register" className="py-20 sm:py-28 bg-slate-50/80">
        <ScrollReveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="brand-card p-8 sm:p-14 relative overflow-hidden shadow-subtle border-slate-200">
            {/* Minimalist SYNEXIA geometric lines */}
            <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-20 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-bl from-brand-navy to-transparent transform rotate-45 translate-x-12 -translate-y-8" />
            </div>
            <div className="absolute bottom-0 left-0 w-28 h-28 pointer-events-none opacity-15 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-tr from-brand-magenta to-transparent transform -rotate-45 -translate-x-8 translate-y-8" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-brand-navy tracking-tight mb-4">
                Ready to enter SYNEXIA'26?
              </h2>

              {/* Text */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                Register for your preferred events and be part of the experience.
              </p>

              {/* REGISTER NOW Button — Linked to siteConfig.registrationUrl */}
              <div>
                {hasRegistrationUrl ? (
                  <a
                    href={siteConfig.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-button bg-brand-navy text-white hover:bg-brand-navy-light hover:border-brand-magenta hover:shadow-subtle border border-brand-navy font-bold text-base sm:text-lg transition-all duration-300 transform active:scale-98 group"
                  >
                    <span>REGISTER NOW</span>
                    <ExternalLink className="w-5 h-5 text-brand-magenta-light transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                ) : (
                  <div className="space-y-4">
                    <Link
                      to="/register"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-button bg-brand-navy text-white hover:bg-brand-navy-light hover:border-brand-magenta hover:shadow-subtle border border-brand-navy font-bold text-base sm:text-lg transition-all duration-300 transform active:scale-98 group"
                    >
                      <span>REGISTER NOW</span>
                      <ArrowRight className="w-5 h-5 text-brand-magenta-light transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                    <p className="text-xs text-slate-500">
                      (Google Form URL is configured in <code className="font-mono text-brand-navy">src/data/siteConfig.js</code>)
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>

        </ScrollReveal>
      </section>

    </div>
  );
}
