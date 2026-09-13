/**
 * Centralized Data Configuration for SYNEXIA'26
 * 
 * Synchronized with src/data/siteConfig.js and src/data/events.js
 * for single-point content and registration management.
 */

import { siteConfig } from './siteConfig';
import { coordinators } from './coordinators';
import { technicalEvents, nonTechnicalEvents, allEvents } from './events';

export const SYMPOSIUM_CONFIG = {
  name: siteConfig.symposiumName,
  edition: "2026",
  type: "International Symposium",
  logo: siteConfig.synexiaLogo,
  
  // Date & Venue Settings
  schedule: {
    isDateAnnounced: true,
    dateDisplay: "October 14, 2026",
    isoDate: "2026-10-14",
    time: "9:00 AM – 5:00 PM",
    reportingTime: "8:30 AM",
    allEventsDate: "October 14, 2026",
    presentixDates: "October 14 – 15, 2026",
    specialScheduleNote: "Symposium date for all events is October 14. Only PRESENTIX is conducted in both Online and Offline mode across October 14 & 15.",
  },

  // Highlighted Participant Perks
  perks: {
    freeFood: "Free Food (Complimentary lunch & refreshments) provided for all participants",
    certificate: "Participation Certificate provided for all registered participants",
  },

  // Social Links
  social: {
    instagram: siteConfig.instagramUrl,
    instagramHandle: siteConfig.instagramHandle,
  },
  
  venue: {
    institution: siteConfig.collegeName,
    campus: "Main Campus",
    auditorium: "Campus Auditorium",
    address: "Old Nagore Road, Thethi village, Nagapattinam - 611 002, Tamil Nadu, India",
    mapsUrl: "https://maps.google.com/?q=E.G.S.+Pillay+Engineering+College+Nagapattinam",
  },

  // Organizing Authority
  organizer: {
    institution: siteConfig.collegeName,
    institutionSubtext: "An Autonomous Institution | Affiliated to Anna University",
    accreditations: "NBA Tier I Accreditation for All Eligible Programs | NAAC Grade A++",
    regulatory: "Approved by AICTE, New Delhi | Recognized by UGC",
    bannerImage: siteConfig.collegeLogo,
    department: siteConfig.departmentName,
    departmentShort: "Dept. of CSE & Business Systems",
    departmentOverview: "The Department of Computer Science Engineering and Business Systems at EGS Pillay Engineering College bridges computation, artificial intelligence, and corporate enterprise strategy.",
  },

  // Centralized Registration Information (Tied to siteConfig.js)
  registration: {
    isOpen: Boolean(siteConfig.registrationUrl && siteConfig.registrationUrl.length > 0),
    deadline: "October 12, 2026",
    fee: "Free Registration",
    symposiumDate: "October 14, 2026",
    googleFormUrl: siteConfig.registrationUrl,
    qrCodeImage: siteConfig.qrCodePath,
    benefits: [
      "Free Food provided for all participating delegates",
      "Official Participation Certificate for all participants",
      "Cash Prizes and Merit Certificates for podium winners",
      "Symposium Delegate Kit & Handout",
      "Hands-on technical interaction with academic and industry experts"
    ],
    generalInstructions: [
      "Participants must carry their valid College / University ID card at all times.",
      "Formal or smart-casual dress code is mandatory inside the campus.",
      "Participants must report at the registration desk prior to the event schedule.",
      "Decisions made by the judging panels and faculty coordinators are final.",
      "Any form of malpractice or plagiarism will result in immediate disqualification."
    ]
  },

  // Contact Information (Derived from official coordinators)
  contacts: {
    generalEmail: "",
    helplinePhone: coordinators.president.phone,
    facultyCoordinators: [
      {
        name: coordinators.staffCoordinator.name,
        role: coordinators.staffCoordinator.role,
        designation: coordinators.staffCoordinator.designation,
        department: coordinators.staffCoordinator.department,
        phone: coordinators.staffCoordinator.phone
      }
    ],
    studentCoordinators: [
      {
        name: coordinators.president.name,
        role: coordinators.president.role,
        department: coordinators.president.year,
        phone: coordinators.president.phone
      },
      {
        name: coordinators.secretary.name,
        role: coordinators.secretary.role,
        department: coordinators.secretary.year,
        phone: coordinators.secretary.phone
      },
      {
        name: coordinators.technicalHead.name,
        role: coordinators.technicalHead.role,
        department: coordinators.technicalHead.year,
        phone: coordinators.technicalHead.phone
      },
      {
        name: coordinators.nonTechnicalHead.name,
        role: coordinators.nonTechnicalHead.role,
        department: coordinators.nonTechnicalHead.year,
        phone: coordinators.nonTechnicalHead.phone
      }
    ]
  },

  // Official Event Categories
  eventCategories: [
    { 
      id: "technical", 
      name: "Technical Events", 
      title: "TECHNICAL EVENTS",
      description: "Challenge your technical skills through coding, debugging, and AI-focused presentation.",
      badgeColor: "bg-brand-navy/10 text-brand-navy",
      path: "/technical-events"
    },
    { 
      id: "non-technical", 
      name: "Non-Technical Events", 
      title: "NON-TECHNICAL EVENTS",
      description: "Compete, strategize, and collaborate through engaging team-based challenges.",
      badgeColor: "bg-brand-magenta/10 text-brand-magenta",
      path: "/non-technical-events"
    }
  ],

  // Official Event Catalog (Consumes centralized events from events.js)
  events: allEvents
};

export { technicalEvents, nonTechnicalEvents, allEvents } from './events';
export { siteConfig } from './siteConfig';
export { coordinators } from './coordinators';
