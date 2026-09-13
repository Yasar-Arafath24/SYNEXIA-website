import React from 'react';
import { Shield, Award, CheckCircle2, AlertTriangle } from 'lucide-react';
import { SYMPOSIUM_CONFIG } from '../data/symposiumData';
import PageHero from '../components/common/PageHero';
import EventRuleList from '../components/events/EventRuleList';

export default function GuidelinesPage() {
  const codeOfConduct = [
    "All delegates must carry their valid original College / University ID Card at all times on campus.",
    "Decorum, respect, and mutual collegiality must be maintained throughout technical sessions and campus interactions.",
    "Usage of electronic equipment, mobile phones, or laptops inside competition rooms is subject to individual track rules.",
    "Any form of copyright infringement, plagiarism, or unauthorized code assistance will lead to automatic disqualification.",
    "Participants must report to their respective venues at least 15 minutes prior to track commencement.",
    "The decision of the judges and faculty conveners is final, conclusive, and non-negotiable."
  ];

  const certificationRules = [
    "Certificates of Participation will be awarded to registered delegates who actively participate in their scheduled track.",
    "Podium winners (1st, 2nd, and 3rd where applicable) will receive Merit Certificates and designated Cash Prizes.",
    "Delegates must collect their certificates during the valedictory session; unattended certificates will not be reissued."
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        badge="Official Code of Conduct"
        title="Symposium Guidelines & Policies"
        subtitle={`Rules, participant decorum, and operational guidelines for ${SYMPOSIUM_CONFIG.name}.`}
        breadcrumbs={[{ label: "Guidelines" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        
        {/* Important Notice Callout */}
        <div className="flex items-start gap-4 p-6 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 text-sm leading-relaxed">
          <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-base text-amber-950 mb-1">Campus Regulations & Decorum</h4>
            <p>
              E.G.S. Pillay Engineering College enforces a strictly disciplined academic environment. All visiting delegates are requested to cooperate with campus security personnel and event student volunteers.
            </p>
          </div>
        </div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <EventRuleList
            rules={codeOfConduct}
            title="General Participant Code of Conduct"
          />

          <EventRuleList
            rules={certificationRules}
            title="Certification & Award Policies"
          />
        </div>

      </div>
    </div>
  );
}
