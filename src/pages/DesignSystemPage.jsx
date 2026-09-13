import React, { useState } from 'react';
import { 
  Palette, 
  Type, 
  Layers, 
  Sparkles, 
  Check, 
  ArrowRight, 
  ExternalLink, 
  ShieldCheck, 
  Maximize2,
  Copy
} from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionTitle from '../components/common/SectionTitle';
import PrimaryButton from '../components/common/PrimaryButton';
import SecondaryButton from '../components/common/SecondaryButton';
import EventCard from '../components/events/EventCard';
import EventBadge from '../components/events/EventBadge';
import { SYMPOSIUM_CONFIG } from '../data/symposiumData';

export default function DesignSystemPage() {
  const [copiedToken, setCopiedToken] = useState(null);

  const copyToken = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(text);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const tokens = [
    { name: '--navy', hex: '#0B1B3D', role: 'Primary Brand Color', bgClass: 'bg-[#0B1B3D]', textClass: 'text-white' },
    { name: '--blue', hex: '#1B4D9B', role: 'Secondary Color', bgClass: 'bg-[#1B4D9B]', textClass: 'text-white' },
    { name: '--magenta', hex: '#C01368', role: 'Accent / Vibrant Pink', bgClass: 'bg-[#C01368]', textClass: 'text-white' },
    { name: '--background', hex: '#FFFFFF', role: 'Canvas Background', bgClass: 'bg-[#FFFFFF] border border-slate-200', textClass: 'text-slate-900' },
    { name: '--surface', hex: '#F8FAFC', role: 'Supporting Off-White', bgClass: 'bg-[#F8FAFC] border border-slate-200', textClass: 'text-slate-900' },
    { name: '--text', hex: '#0F172A', role: 'Dark Navy / Charcoal Text', bgClass: 'bg-[#0F172A]', textClass: 'text-white' },
    { name: '--muted', hex: '#64748B', role: 'Muted Slate Text', bgClass: 'bg-[#64748B]', textClass: 'text-white' },
    { name: '--border', hex: '#E2E8F0', role: 'Thin 1px Subtle Border', bgClass: 'bg-[#E2E8F0]', textClass: 'text-slate-800' },
  ];

  const sampleEvent = SYMPOSIUM_CONFIG.events[0];

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        badge="Phase 1 Deliverable"
        title="SYNEXIA'26 Brand Design System"
        subtitle="Visual identity specifications, CSS design tokens, typography scales, button behaviors, and responsive breakpoint guidelines."
        breadcrumbs={[{ label: "Design System" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* 1. BRAND ASSETS VERIFICATION */}
        <section>
          <SectionTitle
            badge="Official Visual Assets"
            badgeVariant="navy"
            title="1. Official Brand Assets Verification"
            subtitle="The two supplied official visual assets are directly integrated from the project's public folder without redrawing, approximation, or AI reproduction."
            align="left"
            className="mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Asset 1: SYNEXIA Logo */}
            <div className="brand-card p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold font-display uppercase tracking-wider text-brand-navy">
                  Asset 1: Association Logo
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                  Original Asset Loaded
                </span>
              </div>
              <div className="p-8 bg-slate-50 rounded-card border border-slate-200 flex items-center justify-center min-h-[160px] mb-4">
                <img
                  src="/assets/synexia-logo.jpg"
                  alt="Official SYNEXIA Logo"
                  className="max-h-20 w-auto object-contain image-reveal"
                />
              </div>
              <div className="text-xs text-slate-500 space-y-1 font-mono">
                <p>Path: <code>/assets/synexia-logo.jpg</code></p>
                <p>Colors Identified: Deep Navy (#0B1B3D), Royal Blue (#1B4D9B), Magenta (#C01368)</p>
              </div>
            </div>

            {/* Asset 2: College Banner */}
            <div className="brand-card p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold font-display uppercase tracking-wider text-brand-navy">
                  Asset 2: Institutional Banner & Accreditations
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                  Original Asset Loaded
                </span>
              </div>
              <div className="p-6 bg-slate-50 rounded-card border border-slate-200 flex items-center justify-center min-h-[160px] mb-4">
                <img
                  src="/assets/egspec-banner.png"
                  alt="Official Institutional Banner"
                  className="max-h-16 w-auto object-contain image-reveal"
                />
              </div>
              <div className="text-xs text-slate-500 space-y-1 font-mono">
                <p>Path: <code>/assets/egspec-banner.png</code></p>
                <p>Accreditations: NBA Tier I, NAAC Grade A++, AICTE, Anna Univ, ISO 9001</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. DESIGN TOKENS & CSS VARIABLES */}
        <section>
          <SectionTitle
            badge="Color Architecture"
            badgeVariant="magenta"
            title="2. Reusable CSS Design Tokens"
            subtitle="Global CSS variables defined in :root for consistent brand identity across the entire symposium platform."
            align="left"
            className="mb-8"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tokens.map((token) => (
              <div key={token.name} className="brand-card p-5">
                <div className={`h-24 rounded-button ${token.bgClass} mb-4 flex items-end p-3 transition-transform duration-200 hover:scale-[1.02]`}>
                  <span className={`text-xs font-mono font-bold ${token.textClass}`}>
                    {token.hex}
                  </span>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold font-mono text-brand-navy">{token.name}</span>
                    <button
                      onClick={() => copyToken(`var(${token.name})`)}
                      className="p-1 rounded text-slate-400 hover:text-brand-magenta transition-colors"
                      title="Copy CSS variable"
                    >
                      {copiedToken === `var(${token.name})` ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{token.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. TYPOGRAPHY HIERARCHY */}
        <section>
          <SectionTitle
            badge="Typography System"
            badgeVariant="navy"
            title="3. Typography Hierarchy"
            subtitle="Modern geometric display font (Space Grotesk) paired with comfortable, readable body copy (Inter)."
            align="left"
            className="mb-8"
          />

          <div className="brand-card p-8 space-y-8 divide-y divide-slate-100">
            {/* Hero Title */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Display / Hero Title — Space Grotesk Bold (48px - 64px)
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-brand-navy tracking-tight leading-tight">
                SYNEXIA'26 Symposium
              </h1>
            </div>

            {/* Section Headings */}
            <div className="pt-6">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Section Heading — Space Grotesk Bold (28px - 36px)
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-brand-navy tracking-tight">
                Department of Computer Science Engineering & Business Systems
              </h2>
            </div>

            {/* Card / Subsection Headings */}
            <div className="pt-6">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Card & Subsection Heading — Space Grotesk Semi-Bold (20px - 24px)
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-brand-navy">
                Autonomous Technical Excellence & Industry Analytics
              </h3>
            </div>

            {/* Body Text */}
            <div className="pt-6">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Body Copy — Inter Regular (16px, Line Height 1.6)
              </span>
              <p className="text-base text-slate-700 leading-relaxed max-w-3xl">
                The symposium establishes a collaborative forum between visionary academic researchers and enterprise business leaders. High contrast typography guarantees readability across both desktop workstations and mobile handhelds.
              </p>
            </div>
          </div>
        </section>

        {/* 4. BUTTON SYSTEM SPECIFICATION */}
        <section>
          <SectionTitle
            badge="Micro-Interactions"
            badgeVariant="magenta"
            title="4. Button Design System"
            subtitle="Buttons engineered strictly with Navy base, Magenta hover/accent treatments, and 200-300ms transitions."
            align="left"
            className="mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Primary Button Demo */}
            <div className="brand-card p-6 sm:p-8">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-navy font-bold block mb-2">
                Primary Button
              </span>
              <p className="text-xs text-slate-500 mb-6">
                Navy background (`#0B1B3D`), White text, Magenta hover/accent treatment with 300ms transition.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <PrimaryButton icon={ArrowRight}>
                  Register for Symposium
                </PrimaryButton>
                <PrimaryButton disabled>
                  Disabled State
                </PrimaryButton>
              </div>
              <div className="p-3 bg-slate-50 rounded-button text-xs font-mono text-slate-600">
                Hover to see magenta border, subtle glow & bottom accent line.
              </div>
            </div>

            {/* Secondary Button Demo */}
            <div className="brand-card p-6 sm:p-8">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-navy font-bold block mb-2">
                Secondary Button
              </span>
              <p className="text-xs text-slate-500 mb-6">
                White background, Navy border (`#0B1B3D`), Navy text, Smooth 200-300ms hover transition.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <SecondaryButton icon={ExternalLink}>
                  Explore Guidelines
                </SecondaryButton>
                <SecondaryButton disabled>
                  Disabled State
                </SecondaryButton>
              </div>
              <div className="p-3 bg-slate-50 rounded-button text-xs font-mono text-slate-600">
                Hover to inspect subtle slate lift and border intensification.
              </div>
            </div>
          </div>
        </section>

        {/* 5. CARD PRIMITIVES & RESTRAINED ANIMATIONS */}
        <section>
          <SectionTitle
            badge="Cards & Animations"
            badgeVariant="navy"
            title="5. Cards & Restrained Animations"
            subtitle="White surfaces, 1px subtle borders, minimal shadows, 16px radius, and subtle hover elevations."
            align="left"
            className="mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="brand-card p-6 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-brand-navy font-bold block">
                  Animation Rules
                </span>
                <div className="space-y-3 text-xs text-slate-600">
                  <div className="p-3 rounded-button bg-slate-50 border border-slate-200">
                    <strong className="block text-brand-navy mb-1">Restrained fade-up / slide-up:</strong>
                    <span>Smooth 450ms opacity & translateY(14px) curves without bouncy keyframes.</span>
                  </div>
                  <div className="p-3 rounded-button bg-slate-50 border border-slate-200">
                    <strong className="block text-brand-navy mb-1">scale-on-hover:</strong>
                    <span>Ultra subtle scale(1.02) on interactive focal points.</span>
                  </div>
                  <div className="p-3 rounded-button bg-slate-50 border border-slate-200">
                    <strong className="block text-brand-navy mb-1">animated-underline:</strong>
                    <span className="animated-underline text-brand-navy font-medium ml-1">
                      Hover over me to see magenta underline
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                Live EventCard Implementation
              </span>
              <div className="max-w-md">
                <EventCard event={sampleEvent} />
              </div>
            </div>
          </div>
        </section>

        {/* 6. RESPONSIVE BREAKPOINT MATRIX */}
        <section>
          <SectionTitle
            badge="Device Adaptation"
            badgeVariant="magenta"
            title="6. Responsive Viewport Matrix"
            subtitle="Built to maintain academic clarity and flawless layout across all target viewports."
            align="left"
            className="mb-8"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-4 rounded-button bg-slate-50 border border-slate-200 text-center">
              <span className="block text-xs font-mono text-slate-400">Mobile XS</span>
              <span className="text-base font-bold font-display text-brand-navy">390px</span>
              <span className="block text-[11px] text-slate-500 mt-1">iPhone standard</span>
            </div>
            <div className="p-4 rounded-button bg-slate-50 border border-slate-200 text-center">
              <span className="block text-xs font-mono text-slate-400">Mobile Max</span>
              <span className="text-base font-bold font-display text-brand-navy">430px</span>
              <span className="block text-[11px] text-slate-500 mt-1">iPhone Pro Max</span>
            </div>
            <div className="p-4 rounded-button bg-slate-50 border border-slate-200 text-center">
              <span className="block text-xs font-mono text-slate-400">Tablet</span>
              <span className="text-base font-bold font-display text-brand-navy">768px</span>
              <span className="block text-[11px] text-slate-500 mt-1">iPad Portrait</span>
            </div>
            <div className="p-4 rounded-button bg-slate-50 border border-slate-200 text-center">
              <span className="block text-xs font-mono text-slate-400">Desktop S</span>
              <span className="text-base font-bold font-display text-brand-navy">1024px</span>
              <span className="block text-[11px] text-slate-500 mt-1">Compact Laptop</span>
            </div>
            <div className="p-4 rounded-button bg-slate-50 border border-slate-200 text-center">
              <span className="block text-xs font-mono text-slate-400">Desktop M</span>
              <span className="text-base font-bold font-display text-brand-navy">1280px</span>
              <span className="block text-[11px] text-slate-500 mt-1">HD Display</span>
            </div>
            <div className="p-4 rounded-button bg-slate-50 border border-slate-200 text-center">
              <span className="block text-xs font-mono text-slate-400">Desktop L</span>
              <span className="text-base font-bold font-display text-brand-navy">1440px+</span>
              <span className="block text-[11px] text-slate-500 mt-1">Widescreen Monitor</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
