import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, QrCode } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

/**
 * RegistrationModal — Accessible modal for quick registration
 * 
 * Rules:
 * - Shows QR Code
 * - "Scan to Register"
 * - "Register Online" button (opens in new tab)
 * - Close using X button
 * - Close when clicking backdrop
 * - Support Escape key
 * - Trap focus inside the modal while open
 * - Restore focus on close
 * - Fully responsive on mobile
 */
export default function RegistrationModal({ 
  isOpen, 
  onClose, 
  eventName,
  customRegistrationUrl 
}) {
  const formUrl = customRegistrationUrl || siteConfig.registrationUrl;
  const qrCodePath = siteConfig.qrCodePath;
  const hasFormUrl = Boolean(formUrl && formUrl.trim().length > 0);
  const hasQrCode = Boolean(qrCodePath && qrCodePath.trim().length > 0);
  const dialogRef = useRef(null);
  const previouslyFocused = useRef(null);

  // Save the element that opened the modal, focus the dialog on open,
  // and restore focus to that element when the modal closes.
  useEffect(() => {
    if (isOpen) {
      previouslyFocused.current = document.activeElement;
      dialogRef.current?.focus();
    } else {
      previouslyFocused.current?.focus?.();
    }
  }, [isOpen]);

  // Close on Escape key + lock background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Trap Tab navigation inside the dialog while it is open
  const handleDialogKeyDown = (e) => {
    if (e.key !== 'Tab') return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    const focusables = dialog.querySelectorAll(
      'a[href], button:not([disabled])'
    );
    if (focusables.length === 0) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;

    if (e.shiftKey && (active === first || !dialog.contains(active))) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && (active === last || !dialog.contains(active))) {
      e.preventDefault();
      first.focus();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div 
        ref={dialogRef}
        tabIndex={-1}
        onKeyDown={handleDialogKeyDown}
        className="relative bg-white rounded-card max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 animate-fade-up overflow-hidden focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close (X) Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close registration modal"
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-brand-navy hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <span className="text-[11px] font-mono font-bold tracking-widest text-brand-magenta uppercase px-2.5 py-0.5 rounded-full bg-brand-magenta/10 border border-brand-magenta/20 inline-block mb-2">
            SYNEXIA'26 Registration
          </span>
          <h3 id="modal-title" className="text-xl sm:text-2xl font-bold font-display text-brand-navy">
            {eventName ? `Register for ${eventName}` : "REGISTER FOR SYNEXIA'26"}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Scan via mobile camera or proceed with the online application form.
          </p>
        </div>

        {/* QR Code Section */}
        <div className="flex flex-col items-center p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-6">
          {hasQrCode ? (
            <div className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-subtle mb-2.5">
              <img
                src={qrCodePath}
                alt="Registration QR Code"
                className="w-44 h-44 object-contain rounded-lg"
              />
            </div>
          ) : (
            <div className="w-44 h-44 rounded-xl bg-white border border-dashed border-slate-300 flex flex-col items-center justify-center p-4 text-center mb-2.5">
              <QrCode className="w-10 h-10 text-slate-300 stroke-[1.5] mb-1" />
              <span className="text-xs font-semibold text-slate-600">QR Code Placeholder</span>
              <span className="text-[10px] text-slate-400 mt-0.5">siteConfig.qrCodePath</span>
            </div>
          )}
          <span className="text-xs font-bold font-display text-brand-navy uppercase tracking-wider">
            Scan to Register
          </span>
        </div>

        {/* Minimalist OR Divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-[1px] bg-slate-200 flex-grow" />
          <span className="text-xs font-mono font-bold text-slate-400 uppercase">OR</span>
          <div className="h-[1px] bg-slate-200 flex-grow" />
        </div>

        {/* Action Button */}
        <div>
          {hasFormUrl ? (
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-button bg-brand-navy text-white hover:bg-brand-navy-light hover:border-brand-magenta hover:shadow-subtle border border-brand-navy font-bold text-sm transition-all duration-300 transform active:scale-98"
            >
              <span>Register Online</span>
              <ExternalLink className="w-4 h-4 text-brand-magenta-light" />
            </a>
          ) : (
            <div className="p-3 rounded-button bg-slate-50 border border-slate-200 text-xs text-slate-500 font-mono text-center">
              Configure Google Form in siteConfig.js
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
