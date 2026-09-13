import React from 'react';
import { CheckCircle2, AlertCircle, FileText, QrCode, CreditCard, HelpCircle } from 'lucide-react';
import { SYMPOSIUM_CONFIG } from '../data/symposiumData';
import PageHero from '../components/common/PageHero';
import RegistrationCard from '../components/events/RegistrationCard';
import EventRuleList from '../components/events/EventRuleList';

export default function RegistrationPage() {
  const reg = SYMPOSIUM_CONFIG.registration;

  const registrationSteps = [
    {
      step: "01",
      title: "Review Guidelines & Tracks",
      desc: "Browse through technical and non-technical tracks to identify events fitting your technical proficiency."
    },
    {
      step: "02",
      title: "Submit Registration Form",
      desc: "Fill in individual or team delegate details via the official Google Form provided on this page."
    },
    {
      step: "03",
      title: "Confirm & Preserve Acknowledgement",
      desc: "Retain a copy or screenshot of the submission confirmation message or email acknowledgement."
    },
    {
      step: "04",
      title: "On-Campus Verification",
      desc: "Present your valid institutional ID card at the registration counter on the symposium morning."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        badge="Participant Portal"
        title="Symposium Registration"
        subtitle="Complete your registration for SYNEXIA'26 and secure your participation."
        breadcrumbs={[{ label: "Registration" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        
        {/* Step-by-Step Flow */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Registration Workflow
            </h3>
            <p className="text-sm text-slate-600">
              Follow these simple steps to ensure your seat at {SYMPOSIUM_CONFIG.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {registrationSteps.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative">
                <span className="text-3xl font-extrabold text-brand-navy/20 block mb-2">{item.step}</span>
                <h4 className="font-bold text-slate-900 text-base mb-1.5">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Central Registration Card with Google Form & QR Code Hooks */}
        <section>
          <RegistrationCard />
        </section>

        {/* General Regulations & Guidelines */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <EventRuleList
              rules={reg.generalInstructions}
              title="General Delegate Guidelines & Policies"
            />
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 text-brand-navy font-bold text-base mb-3">
                <HelpCircle className="w-5 h-5" />
                <span>Need Registration Assistance?</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                If you encounter any difficulty with registration forms or delegate confirmation, please contact our help desk.
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                <p><strong>Email:</strong> {SYMPOSIUM_CONFIG.contacts.generalEmail}</p>
                <p><strong>Helpline:</strong> {SYMPOSIUM_CONFIG.contacts.helplinePhone}</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
