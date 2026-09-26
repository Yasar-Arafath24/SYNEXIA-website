import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Mail } from 'lucide-react';
import { SYMPOSIUM_CONFIG } from '../../data/symposiumData';
import { siteConfig } from '../../data/siteConfig';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const instagramUrl = siteConfig.instagramUrl || "https://www.instagram.com/egs_synexia?stkn=djljZ3V5YXdxdXlp";
  const emailAddress = siteConfig.email || "synexia.csbs@gmail.com";

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800">
          
          {/* Institutional and Symposium Identity */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold font-display text-white tracking-tight">
                {siteConfig.symposiumName || SYMPOSIUM_CONFIG.name}
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-100">
              {siteConfig.collegeName || SYMPOSIUM_CONFIG.organizer.institution}
            </p>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              {siteConfig.departmentName || SYMPOSIUM_CONFIG.organizer.department}
            </p>
          </div>

          {/* Minimal Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
            <Link
              to="/"
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/technical-events"
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              Technical Events
            </Link>
            <Link
              to="/non-technical-events"
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              Non-Technical Events
            </Link>
            <Link
              to="/contact"
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              to="/register"
              className="text-brand-magenta-light hover:text-white font-semibold transition-colors duration-200"
            >
              Register
            </Link>
          </nav>
        </div>

        {/* Social & Key Highlights Bar */}
        <div className="py-6 border-b border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
              Official Links:
            </span>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-950/60 via-pink-950/60 to-brand-magenta/40 border border-pink-500/40 text-pink-300 hover:text-white hover:border-pink-400 transition-all duration-200 text-xs font-semibold group shadow-sm"
              aria-label="Official SYNEXIA Instagram Profile (@egs_synexia)"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-pink-400 group-hover:scale-110 transition-transform duration-200" />
              <span>@egs_synexia</span>
              <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
            </a>

            <a
              href={`mailto:${emailAddress}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 hover:border-brand-magenta/60 text-slate-200 hover:text-white transition-all duration-200 text-xs font-semibold group shadow-sm"
              aria-label={`Official SYNEXIA Email (${emailAddress})`}
            >
              <Mail className="w-3.5 h-3.5 text-brand-magenta-light group-hover:scale-110 transition-transform duration-200" />
              <span>{emailAddress}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2.5 text-xs text-slate-300">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/80 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-magenta" />
              Oct 15, 2026
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-950/40 border border-emerald-800/50 text-emerald-300 font-medium">
              Food Provided to All Participants
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-950/40 border border-blue-800/50 text-blue-300 font-medium">
              Participation Certificate
            </span>
          </div>
        </div>

        {/* Bottom Minimal Copyright & Developer Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="space-y-1 text-center sm:text-left">
            <p>
              © {currentYear} {SYMPOSIUM_CONFIG.name}. {SYMPOSIUM_CONFIG.organizer.department}, {SYMPOSIUM_CONFIG.organizer.institution}.
            </p>
            <p className="text-slate-300 text-xs font-medium flex items-center justify-center sm:justify-start gap-1.5 flex-wrap">
              <span>Developed by</span>
              <a
                href="https://www.linkedin.com/in/yasar-arafath-365490333/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-200 hover:text-blue-400 font-semibold transition-colors group"
                aria-label="Yasar Arafath LinkedIn Profile"
              >
                <span>Yasar Arafath</span>
                <LinkedInIcon className="w-3.5 h-3.5 text-[#0A66C2] group-hover:scale-110 transition-transform" />
              </a>
            </p>
          </div>
          <p className="text-slate-400 text-[11px]">
            {SYMPOSIUM_CONFIG.organizer.institutionSubtext}
          </p>
        </div>
      </div>
    </footer>
  );
}
