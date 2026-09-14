import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import PrimaryButton from '../components/common/PrimaryButton';
import SecondaryButton from '../components/common/SecondaryButton';
import { SYMPOSIUM_CONFIG } from '../data/symposiumData';
import Seo from '../components/common/Seo';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-16">
      <Seo title="Page Not Found | SYNEXIA'26" description="The requested page could not be found. Return to the SYNEXIA'26 portal home." />
      <div className="max-w-md text-center">
        <span className="text-6xl sm:text-7xl font-extrabold text-brand-navy/20 block mb-4">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
          The page you requested could not be found or may have been moved. Return to the {SYMPOSIUM_CONFIG.name} portal home.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <PrimaryButton to="/" icon={Home} iconPosition="left">
            Back to Home
          </PrimaryButton>
          <SecondaryButton to="/events">
            Browse Events
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}
