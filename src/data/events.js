/**
 * Centralized Event Data for SYNEXIA'26
 * 
 * Department of Computer Science and Business Systems
 * E.G.S. Pillay Engineering College
 * 
 * Structure:
 * technicalEvents = [
 *   {
 *     id,
 *     number,
 *     title,
 *     type,
 *     description,
 *     rules,
 *     domains,
 *     objective,
 *     registrationUrl
 *   }
 * ]
 * 
 * nonTechnicalEvents = [
 *   {
 *     id,
 *     number,
 *     title,
 *     type,
 *     description,
 *     rules,
 *     registrationUrl
 *   }
 * ]
 */

import { siteConfig } from './siteConfig';
import { coordinators } from './coordinators';

export const technicalEvents = [
  // =========================================================================
  // EVENT 01: CODENEX (HACKATHON)
  // =========================================================================
  {
    id: "codenex",
    number: "01",
    eventNumber: "01",
    slug: "codenex",
    title: "CODENEX",
    type: "HACKATHON",
    subTitle: "HACKATHON",
    category: "technical",
    categoryName: "Technical",
    description: "CODENEX is a fast-paced innovation challenge where teams develop a technology-based solution for a real-world problem and adapt to an unexpected CODENEX TWIST introduced during the event.",
    shortDescription: "Develop a technology-based solution for a real-world problem and adapt to an unexpected CODENEX TWIST.",
    rules: [
      "Teams must have 2–3 participants.",
      "Prior registration is mandatory.",
      "Teams must work only on their assigned problem statement.",
      "Solutions must be developed independently without sharing with other teams.",
      "Internet access may be provided.",
      "Only the permitted AI tools — Claude, Antigravity, and ChatGPT — may be used.",
      "Participants must be able to explain their implementation.",
      "Final submission must include the Twist adaptation.",
      "Each participant must bring their own laptop.",
      "Judges' decision is final."
    ],
    prizes: [
      { position: "1st Prize", amount: "5,000 RS", perk: "Certificate", highlight: true },
      { position: "2nd Prize", amount: "3,000 RS", perk: "Certificate" },
      { position: "3rd Prize", amount: "1,000 RS", perk: "Certificate" }
    ],
    domains: [],
    availableDomains: [],
    objective: [],
    coreObjectives: [],
    registrationUrl: "",
    hasTwist: true,
    twistBadge: "CODENEX TWIST",
    date: "October 15, 2026",
    mode: "Offline (On-Campus)",
    modeBadge: "Offline",
    teamSize: "2–3 Participants",
    venue: "Main Computing Center",
    coordinators: [
      { 
        name: coordinators.technicalHead.name, 
        role: coordinators.technicalHead.role, 
        contact: coordinators.technicalHead.phone 
      }
    ]
  },

  // =========================================================================
  // EVENT 02: SYNTAX STRIKE (DEBUGGING)
  // =========================================================================
  {
    id: "syntax-strike",
    number: "02",
    eventNumber: "02",
    slug: "syntax-strike",
    title: "SYNTAX STRIKE",
    type: "DEBUGGING",
    subTitle: "DEBUGGING",
    category: "technical",
    categoryName: "Technical",
    description: "SYNEXIA: Syntax Strike is a fast-paced debugging challenge where participants identify and fix programming errors through an unlock-based progression system.",
    shortDescription: "Identify and fix programming errors through an unlock-based progression system.",
    rules: [
      "Each team must have 2 participants.",
      "Teams must use their assigned Team ID.",
      "Challenges must be solved in order; skipping is not allowed.",
      "Solutions must not be shared with other teams.",
      "Only organizer-approved programming languages may be used.",
      "AI tools are not permitted, as the event directly evaluates debugging skills.",
      "Participants must compete using the custom software developed by the organizing committee.",
      "Any attempt to interfere with other teams, manipulate submissions, or exploit the platform will result in disqualification.",
      "Organizers may verify suspicious submissions.",
      "Judges' and event coordinators' decisions are final."
    ],
    progressionSteps: [
      "Find the Bug",
      "Fix the Code",
      "Submit",
      "Unlock the Next Bug"
    ],
    prizes: [
      { position: "1st Prize", amount: "5,000 RS", perk: "Certificate", highlight: true },
      { position: "2nd Prize", amount: "3,000 RS", perk: "Certificate" },
      { position: "3rd Prize", amount: "1,000 RS", perk: "Certificate" }
    ],
    domains: [],
    availableDomains: [],
    objective: [],
    coreObjectives: [],
    registrationUrl: "",
    date: "October 15, 2026",
    mode: "Offline (On-Campus)",
    modeBadge: "Offline",
    teamSize: "2 Participants",
    venue: "Dept. Programming Lab",
    coordinators: [
      { 
        name: coordinators.technicalHead.name, 
        role: coordinators.technicalHead.role, 
        contact: coordinators.technicalHead.phone 
      }
    ]
  },

  // =========================================================================
  // EVENT 03: PRESENTIX (ARTICLE PRESENTATION)
  // =========================================================================
  {
    id: "presentix",
    number: "03",
    eventNumber: "03",
    slug: "presentix",
    title: "PRESENTIX",
    type: "ARTICLE PRESENTATION",
    subTitle: "ARTICLE PRESENTATION",
    category: "technical",
    categoryName: "Technical",
    description: "PRESENTIX is an intellectual article presentation forum where participants explore, structure, and defend innovative perspectives across critical AI and business domains.",
    shortDescription: "Present and defend cutting-edge research and solutions across emerging AI domains.",
    rules: [
      "The article must be original; plagiarism results in disqualification.",
      "All sources must be properly cited.",
      "Significant use of Generative AI must be disclosed, if required by organizers.",
      "The article and presentation must be consistent.",
      "Participants must join 10 minutes before the event.",
      "Presentation time is strictly enforced.",
      "Participants must keep a backup PDF.",
      "Network/internet issues will not automatically extend presentation time.",
      "Fabricated research results will result in disqualification.",
      "Participants must answer questions related to their own article.",
      "Judges' decision is final."
    ],
    domains: [
      "AI & Machine Learning",
      "Generative AI & LLMs",
      "AI in Business & Management",
      "AI & Cybersecurity",
      "AI in Finance & FinTech",
      "AI in Healthcare",
      "AI in E-Commerce & Marketing",
      "AI & Industry 4.0",
      "AI, IoT & Edge Computing",
      "AI & Robotics",
      "AI in Education",
      "AI in Agriculture",
      "AI & Sustainability / Green Technology",
      "AI & Smart Cities",
      "AI Ethics, Privacy & Responsible AI"
    ],
    availableDomains: [
      "AI & Machine Learning",
      "Generative AI & LLMs",
      "AI in Business & Management",
      "AI & Cybersecurity",
      "AI in Finance & FinTech",
      "AI in Healthcare",
      "AI in E-Commerce & Marketing",
      "AI & Industry 4.0",
      "AI, IoT & Edge Computing",
      "AI & Robotics",
      "AI in Education",
      "AI in Agriculture",
      "AI & Sustainability / Green Technology",
      "AI & Smart Cities",
      "AI Ethics, Privacy & Responsible AI"
    ],
    objective: [
      "Identify a relevant AI/business problem.",
      "Research existing industry and academic approaches.",
      "Analyze the role and application of AI.",
      "Present a technically sound solution, framework, or perspective.",
      "Defend their ideas through Q&A."
    ],
    coreObjectives: [
      "Identify a relevant AI/business problem.",
      "Research existing industry and academic approaches.",
      "Analyze the role and application of AI.",
      "Present a technically sound solution, framework, or perspective.",
      "Defend their ideas through Q&A."
    ],
    prizes: [
      { position: "1st Prize", amount: "5,000 RS", perk: "Certificate", highlight: true },
      { position: "2nd Prize", amount: "3,000 RS", perk: "Certificate" },
      { position: "3rd Prize", amount: "1,000 RS", perk: "Certificate" }
    ],
    isOnlineFree: true,
    onlineFreeNote: "Registering the PRESENTIX to contest online is completely free!",
    registrationUrl: "",
    date: "Oct 14 (Online) & Oct 15 (Offline)",
    dates: ["October 14, 2026", "October 15, 2026"],
    onlineDate: "October 14, 2026",
    offlineDate: "October 15, 2026",
    mode: "Online (Oct 14) & Offline (Oct 15)",
    modeBadge: "Online: Oct 14 • Offline: Oct 15",
    isHybrid: true,
    hybridNote: "PRESENTIX is conducted in two modes: Online Mode on October 14, 2026 and Offline Mode on October 15, 2026. Online participation is 100% Free.",
    teamSize: "Author & Co-Author",
    venue: "Seminar Hall I & Virtual Platform",
    coordinators: [
      { 
        name: coordinators.technicalHead.name, 
        role: coordinators.technicalHead.role, 
        contact: coordinators.technicalHead.phone 
      }
    ]
  }
];

export const nonTechnicalEvents = [
  // =========================================================================
  // EVENT 01: NEXAHUNT (TREASURE & LOGIC HUNT)
  // =========================================================================
  {
    id: "nexahunt",
    number: "01",
    eventNumber: "01",
    slug: "nexahunt",
    title: "NEXAHUNT",
    type: "TREASURE & LOGIC HUNT",
    subTitle: "TREASURE & LOGIC HUNT",
    category: "non-technical",
    categoryName: "Non-Technical",
    description: "A fun team-based challenge where participants solve clues, complete tasks, and follow the trail to discover the hidden treasure. The team that finds it first wins!",
    shortDescription: "A fun team-based challenge where participants solve clues, complete tasks, and follow the trail to discover the hidden treasure. The team that finds it first wins!",
    rules: [
      "Participants must play in teams.",
      "Each team must play the clues in the given order.",
      "Teams must solve the clues/tasks to move to the next stage.",
      "No cheating or outside help is allowed.",
      "Clues must not be damaged, moved, or shared with other teams.",
      "Teams must follow the time limits.",
      "The team that finds the treasure first will be the winners.",
      "Judges' decisions are final."
    ],
    registrationUrl: "",
    hasExcitingPrizes: true,
    prizesNote: "Exciting Prizes & Certificates for Podium Winners!",
    date: "October 15, 2026",
    mode: "Offline (On-Campus)",
    modeBadge: "Offline",
    teamSize: "Team Based",
    venue: "Campus Grounds & Courtyard",
    coordinators: [
      { 
        name: coordinators.nonTechnicalHead.name, 
        role: coordinators.nonTechnicalHead.role, 
        contact: coordinators.nonTechnicalHead.phone 
      }
    ]
  },

  // =========================================================================
  // EVENT 02: SYNERX AUCTION (CRICKET SQUAD AUCTION)
  // =========================================================================
  {
    id: "synerx-auction",
    number: "02",
    eventNumber: "02",
    slug: "synerx-auction",
    title: "SynerX Auction",
    type: "CRICKET SQUAD AUCTION",
    subTitle: "CRICKET SQUAD AUCTION",
    category: "non-technical",
    categoryName: "Non-Technical",
    description: "A thrilling auction game where teams compete to build their dream cricket squad through strategic bidding. Build the strongest team within the given budget and win the auction!",
    shortDescription: "A thrilling auction game where teams compete to build their dream cricket squad through strategic bidding.",
    rules: [
      "Each team will get a fixed budget.",
      "Players will be introduced one by one.",
      "Teams can bid for the players they want.",
      "The highest bidder gets the player.",
      "Teams must build their squad within the given budget.",
      "Once a player is bought, the bid cannot be cancelled.",
      "Teams must follow the minimum/maximum squad limit.",
      "The team with the best squad and remaining budget strategy will be declared the winner."
    ],
    registrationUrl: "",
    hasExcitingPrizes: true,
    prizesNote: "Exciting Prizes & Certificates for Winning Squads!",
    date: "October 15, 2026",
    mode: "Offline (On-Campus)",
    modeBadge: "Offline",
    teamSize: "Team Based",
    venue: "Auditorium Annex",
    coordinators: [
      { 
        name: coordinators.nonTechnicalHead.name, 
        role: coordinators.nonTechnicalHead.role, 
        contact: coordinators.nonTechnicalHead.phone 
      }
    ]
  }
];

export const allEvents = [...technicalEvents, ...nonTechnicalEvents];
