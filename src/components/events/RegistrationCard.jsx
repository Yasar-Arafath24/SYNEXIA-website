import React from 'react';
import { ExternalLink, QrCode, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { SYMPOSIUM_CONFIG } from '../../data/symposiumData';

/**
 * RegistrationCard — Phase 6 Registration Component
 * 
 * Rules:
 * - "REGISTER FOR SYNEXIA'26"
 * - QR code area displaying supplied QR code
 * - "Scan to Register"
 * - OR divider
 * - "Register Online" button opening Google Form in new tab (target="_blank" rel="noopener noreferrer")
 * - If qrCodePath is empty, clean placeholder rather than breaking
 */
export default function RegistrationCard({
  customGoogleFormUrl,
  customQrCodePath,
  className = ''
}) {
  const googleFormUrl = customGoogleFormUrl !== undefined ? customGoogleFormUrl : siteConfig.registrationUrl;
  const qrCodePath = customQrCodePath !== undefined ? customQrCodePath : siteConfig.qrCodePath;
  const hasFormUrl = Boolean(googleFormUrl && googleFormUrl.trim().length > 0);
  const hasQrCode = Boolean(qrCodePath && qrCodePath.trim().length > 0);

  return (
    <div className={`brand-card p-6 sm:p-10 relative overflow-hidden max-w-4xl mx-auto border-slate-200 ${className}`}>
      {/* Decorative SYNEXIA Geometric Accents */}
      <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-20 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-bl from-brand-navy to-transparent transform rotate-45 translate-x-12 -translate-y-8" />
      </div>
      <div className="absolute bottom-0 left-0 w-28 h-28 pointer-events-none opacity-15 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-tr from-brand-magenta to-transparent transform -rotate-45 -translate-x-8 translate-y-8" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        
        {/* Title */}
        <span className="text-xs font-mono font-bold tracking-widest text-brand-magenta uppercase px-3 py-1 rounded-full bg-brand-magenta/5 border border-brand-magenta/20 inline-block mb-3">
          Official Registration
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-brand-navy tracking-tight mb-2">
          REGISTER FOR {siteConfig.symposiumName || "SYNEXIA'26"}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 mb-8 max-w-md mx-auto">
          Scan the official QR code on your mobile device or proceed directly via the online registration form.
        </p>

        {/* Central Registration Panel */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col items-center">
          
          {/* QR Code Section */}
          <div className="flex flex-col items-center">
            {hasQrCode ? (
              <div className="p-3 bg-white rounded-2xl border border-slate-200/90 shadow-subtle mb-3">
                <img
                  src={qrCodePath}
                  alt="SYNEXIA'26 Registration QR Code"
                  className="w-48 h-48 sm:w-56 sm:h-56 object-contain rounded-xl"
                />
              </div>
            ) : (
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-white border border-dashed border-slate-300 flex flex-col items-center justify-center p-4 text-center mb-3">
                <QrCode className="w-12 h-12 text-slate-300 stroke-[1.5] mb-2" />
                <span className="text-xs font-semibold text-slate-600">QR Code Placeholder</span>
                <span className="text-[11px] text-slate-400 mt-1">Configured in siteConfig.js</span>
              </div>
            )}

            <p className="text-sm font-bold font-display text-brand-navy uppercase tracking-wider mb-4">
              Scan to Register
            </p>
          </div>

          {/* Minimalist OR Divider */}
          <div className="w-full max-w-xs flex items-center justify-center gap-3 my-2">
            <div className="h-[1px] bg-slate-200 flex-grow" />
            <span className="text-xs font-mono font-bold text-slate-400 uppercase">OR</span>
            <div className="h-[1px] bg-slate-200 flex-grow" />
          </div>

          {/* Register Online Button */}
          <div className="mt-4 w-full max-w-sm">
            {hasFormUrl ? (
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-button bg-brand-navy text-white hover:bg-brand-navy-light hover:border-brand-magenta hover:shadow-subtle border border-brand-navy font-bold text-sm sm:text-base transition-all duration-300 transform active:scale-98 group cursor-pointer"
              >
                <span>Register Online</span>
                <ExternalLink className="w-4 h-4 text-brand-magenta-light transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            ) : (
              <div className="p-3 rounded-button bg-white border border-slate-200 text-xs text-slate-500 font-mono text-center">
                Google Form link will appear here once configured in siteConfig.js
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
