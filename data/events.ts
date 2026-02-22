export interface Event {
  slug: string;
  title: string;
  category: "London" | "Pakistan" | "UPTECH";
  tag: string;
  status: "upcoming" | "past";
  date: string;
  dateISO: string;
  time?: string;
  location: string;
  venue?: string;
  price?: string;
  image: string;
  officialLink?: string;
  excerpt: string;
  body: string[];
  agenda?: { time: string; title: string }[];
  speakers?: { name: string; title: string; image?: string }[];
  relatedSlugs?: string[];
}

export const events: Event[] = [

  /* ------------------------------------------------------------------ */
  /*  Pakistan — Government-Level IT & Tech Events 2026                  */
  /* ------------------------------------------------------------------ */
  {
    slug: "nextgen-digital-summit-karachi-2026",
    title: "NextGen Digital Summit 2026",
    category: "Pakistan",
    tag: "Summit",
    status: "upcoming",
    date: "February 25–26, 2026",
    dateISO: "2026-02-25",
    location: "Karachi, Pakistan",
    image: "/image/Events%20%26%20Engagements/nextgen.webp",
    officialLink: "https://alliancepakistan.org/event/nextgen-digital-summit/",
    excerpt:
      "Organized with regulatory support to define Pakistan's roadmap for 5G readiness, smart cities, and digital governance.",
    body: [
      "The NextGen Digital Summit 2026 is Pakistan's premier platform for policymakers, regulators, and industry leaders to shape the nation's digital future. Organized with the direct involvement of Pakistan's telecommunications regulator and allied government bodies, the summit sets the strategic direction for the country's 5G readiness programme, full-fibre connectivity rollout, and smart city infrastructure development.",
      "The two-day event in Karachi brings together ministers, senior regulators, global telecom executives, and technology innovators to deliberate on the policy, investment, and infrastructure requirements needed to make Pakistan's next-generation digital ambitions a reality. Key tracks include smart city planning for Karachi and Lahore, rural and peri-urban connectivity, cybersecurity governance for critical national infrastructure, and international best practices in digital economy development.",
      "For UK–Pakistan technology partners, the NextGen Digital Summit provides direct access to senior Pakistani government decision-makers overseeing the nation's most consequential technology investment programmes. UPTECH facilitates UK delegation participation and can introduce members to senior officials attending the summit.",
    ],
    relatedSlugs: [
      "asocio-digital-summit-2026",
      "itcn-asia-karachi-2026",
      "innovation-2026",
    ],
  },
  {
    slug: "itcn-asia-karachi-2026",
    title: "28th ITCN Asia Karachi 2026",
    category: "Pakistan",
    tag: "Expo",
    status: "upcoming",
    date: "September 22–24, 2026",
    dateISO: "2026-09-22",
    location: "Expo Centre Karachi",
    venue: "Expo Centre Karachi",
    image: "/image/Events%20%26%20Engagements/ITCN.webp",
    officialLink: "https://itcnasia.com/karachi/",
    excerpt:
      "Held under the patronage of the SIFC and MoITT, featuring the Global CISO Summit and AI Beyond Borders conferences alongside 3,500+ global brands.",
    body: [
      "ITCN Asia is Pakistan's largest and most internationally recognised IT and telecommunications exhibition, organised under the patronage of the Special Investment Facilitation Council (SIFC) and the Ministry of IT and Telecommunication (MoITT). The 28th edition in 2026 brings together over 3,500 global technology brands and expects more than 70,000 trade visitors across three days at the Expo Centre Karachi.",
      "The summit's premium conference programme includes the Global CISO Summit — a closed-door convening of chief information security officers from Pakistan's largest organisations and international cybersecurity firms — and AI Beyond Borders, a high-level forum on how artificial intelligence is reshaping global technology markets and Pakistan's role within them. Both events attract C-suite decision-makers who represent the most commercially valuable contacts for UK technology companies seeking Pakistani enterprise clients.",
      "ITCN Asia's government endorsement from both SIFC and MoITT gives the event an authority that no other Pakistani technology event matches, making it the single most important annual event for UK companies at any stage of their Pakistan market entry strategy.",
    ],
    relatedSlugs: [
      "asocio-digital-summit-2026",
      "ideas-2026",
      "nextgen-digital-summit-karachi-2026",
    ],
  },
  {
    slug: "asocio-digital-summit-2026",
    title: "ASOCIO Digital Summit 2026",
    category: "Pakistan",
    tag: "Summit",
    status: "upcoming",
    date: "November 2026",
    dateISO: "2026-11-01",
    location: "Islamabad / Lahore, Pakistan",
    image: "/image/Events%20%26%20Engagements/ASOCIO.webp",
    officialLink: "https://www.asocio.org/",
    excerpt:
      "Pakistan hosts this premier regional inter-governmental summit for the first time, bringing technology leadership from 24 ASOCIO member countries.",
    body: [
      "The ASOCIO Digital Summit 2026 marks a historic milestone for Pakistan's technology sector — the country has won the bid to host this premier regional event for the first time, bringing delegations from all 24 member nations of the Asian-Oceanian Computing Industry Organisation to Pakistan. ASOCIO members include Australia, Japan, China, Malaysia, Singapore, India, South Korea, and 17 other high-growth technology markets.",
      "The summit will deliberate on digital policy frameworks, AI governance standards, cross-border data flows, intellectual property protection for digital products, and innovation ecosystem development across the Asia-Pacific and Oceanian region. Pakistan's successful hosting bid represents an unprecedented international endorsement of the country's technology sector maturity.",
      "For UK technology companies with Asia-Pacific regional ambitions, ASOCIO 2026 — hosted in Pakistan — creates a unique convergence opportunity: simultaneous access to senior technology relationships across 24 markets through a single event, in a country where UPTECH provides exceptional institutional support for UK delegations.",
    ],
    relatedSlugs: [
      "itcn-asia-karachi-2026",
      "ideas-2026",
      "nextgen-digital-summit-karachi-2026",
    ],
  },
  {
    slug: "ideas-2026",
    title: "IDEAS 2026 – Cyber & Emerging Tech Track",
    category: "Pakistan",
    tag: "Conference",
    status: "upcoming",
    date: "November 24–27, 2026",
    dateISO: "2026-11-24",
    location: "Karachi Expo Centre",
    venue: "Karachi Expo Centre",
    image: "/image/Events%20%26%20Engagements/IDEAS2026.webp",
    officialLink: "https://ideaspakistan.gov.pk/",
    excerpt:
      "Organized by the Ministry of Defence Production with a dedicated 'Cyber & Emerging Tech' pavilion covering AI, quantum computing, and cybersecurity.",
    body: [
      "IDEAS — the International Defence Exhibition & Seminar — is Pakistan's most internationally prominent defence and security technology event, held biennially at Karachi Expo Centre under the direct authority of the Ministry of Defence Production. The 2026 edition significantly expands its scope to feature a dedicated 'Cyber & Emerging Tech' track and pavilion, addressing AI, quantum computing, cybersecurity infrastructure, secure communications, and dual-use technology development.",
      "The Cyber & Emerging Tech track brings together cyber defence specialists, AI researchers, quantum technology developers, and critical infrastructure security professionals from Pakistan and internationally. The format combines exhibition of cutting-edge technologies with high-level conference sessions examining the commercial and geopolitical dimensions of emerging technology in defence, government, and critical national infrastructure contexts.",
      "For UK technology companies in cybersecurity, AI safety, quantum technologies, and secure communications — sectors with both commercial and defence applications — IDEAS 2026 provides a rare opportunity to engage with Pakistani government technology decision-makers at the most senior levels. UPTECH can facilitate appropriate introductions for qualified member companies seeking to participate in the B2G meeting programme.",
    ],
    relatedSlugs: [
      "asocio-digital-summit-2026",
      "itcn-asia-karachi-2026",
      "digigov-expo-2026",
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  United Kingdom — Government-Level IT Events 2026 (London)          */
  /* ------------------------------------------------------------------ */
  {
    slug: "innovation-2026",
    title: "Innovation 2026",
    category: "London",
    tag: "Conference",
    status: "upcoming",
    date: "March 24–25, 2026",
    dateISO: "2026-03-24",
    location: "ExCeL London",
    venue: "ExCeL London",
    image: "/image/Events%20%26%20Engagements/innovation_2026.webp",
    officialLink: "https://innovation.globalgovernmentforum.com/",
    excerpt:
      "Co-hosted by the Cabinet Office and DSIT, focusing on AI-driven transformation of public services and digital governance across government.",
    body: [
      "Innovation 2026 is co-hosted by the UK Cabinet Office, the Civil Service, and the Department for Science, Innovation and Technology (DSIT), making it one of the most significant government-convened technology events in the UK annual calendar. The forum brings together senior civil servants, technology industry leaders, and international government delegations to explore how artificial intelligence, data, and emerging technologies are fundamentally transforming the delivery of public services.",
      "The 2026 programme focuses on three transformative agendas: the practical implementation of AI across government departments at enterprise scale, the redesign of public service delivery models around citizen-centric digital experiences, and the governance and accountability frameworks required to deploy technology responsibly across the public sector. High-level keynotes from Cabinet ministers and DSIT technology leads are complemented by practical case studies from early-adopter government departments.",
      "For the UK–Pakistan technology partnership, Innovation 2026 is a rare opportunity to engage directly with the UK government's digital strategy. Pakistani government technology officials gain insight into the UK's public sector digitalisation approach, while UK technology companies can position themselves at the heart of the government innovation agenda at the highest levels.",
    ],
    relatedSlugs: [
      "govtech-summit-2026",
      "building-the-smarter-state-2026",
      "digigov-expo-2026",
    ],
  },
  {
    slug: "govtech-summit-2026",
    title: "The GovTech Summit 2026",
    category: "London",
    tag: "Summit",
    status: "upcoming",
    date: "April 16, 2026",
    dateISO: "2026-04-16",
    location: "Westminster, London",
    venue: "Westminster, London",
    image: "/image/Events%20%26%20Engagements/govtech.webp",
    officialLink: "https://www.govtechsummit.eu/",
    excerpt:
      "Connects senior government innovators with technology pioneers to reform public service procurement and accelerate digital transformation.",
    body: [
      "The GovTech Summit 2026 is convened in Westminster to advance the agenda of government technology transformation, bringing together permanent secretaries, chief digital officers, government chief technology officers, and the pioneering companies modernising public services across the UK and internationally. The summit is widely regarded as the UK government technology sector's highest-quality convening — focused on outcomes rather than announcements.",
      "The programme centres on the most pressing challenges facing government technology programmes in 2026: scaling AI adoption beyond pilot programmes and into operational delivery, modernising legacy systems without disrupting critical public services, building digital and data skills capacity within government organisations, and designing procurement frameworks that enable genuine innovation rather than entrench incumbent suppliers.",
      "The GovTech Summit's Westminster location and its access to the most senior figures in UK government technology make it the most direct engagement point for companies seeking to understand and shape the UK public sector market. For Pakistani companies with government-scale technology solutions — in digital identity, AI-powered services, data analytics, or citizen platforms — the summit provides critical insight into UK government procurement priorities.",
    ],
    relatedSlugs: [
      "innovation-2026",
      "building-the-smarter-state-2026",
      "government-transformation-summit-2026",
    ],
  },
  {
    slug: "building-the-smarter-state-2026",
    title: "Building the Smarter State 2026",
    category: "London",
    tag: "Conference",
    status: "upcoming",
    date: "May 13, 2026",
    dateISO: "2026-05-13",
    location: "London",
    image: "/image/Events%20%26%20Engagements/Building_smater_state.webp",
    officialLink: "https://www.techuk.org/what-we-deliver/events/building-the-smarter-state-2026-delivering-world-leading-public-services.html",
    excerpt:
      "techUK's flagship conference for public sector DDaT leaders, backed by the Central Government and focused on AI-driven public service delivery.",
    body: [
      "Building the Smarter State is techUK's flagship annual conference for senior public sector digital, data, and technology (DDaT) leaders. The 2026 edition — themed 'Delivering World-Leading Public Services' — brings together government chief technology officers, heads of digital transformation, and senior programme managers alongside the technology companies driving the most impactful public sector programmes in the UK.",
      "techUK, as the UK's premier technology trade association and the voice of the UK tech sector to government, designs the conference to provide DDaT leaders with access to cutting-edge solutions, peer case studies, and authoritative research. Speakers include senior DSIT officials, technology leaders from NHS Digital, HMRC, and the Government Digital Service (GDS), providing delegates with direct insight into the government's technology agenda and investment priorities.",
      "For Pakistani government technology officials and Pakistani companies with public sector technology expertise, Building the Smarter State is one of the most substantive access points to the UK's GovTech ecosystem. The conference's proximity to government technology buying decisions makes it a high-priority event for any organisation seeking to position itself within the UK public sector market.",
    ],
    relatedSlugs: [
      "innovation-2026",
      "govtech-summit-2026",
      "digigov-expo-2026",
    ],
  },
  {
    slug: "government-transformation-summit-2026",
    title: "Government Transformation Summit 2026",
    category: "London",
    tag: "Summit",
    status: "upcoming",
    date: "June 25, 2026",
    dateISO: "2026-06-25",
    location: "Westminster, London",
    venue: "Westminster, London",
    image: "/image/Events%20%26%20Engagements/gov_transformation_summit_2026.webp",
    officialLink: "https://summit.government-transformation.com/",
    excerpt:
      "Unites 200+ senior government leaders in data and digital delivery to reimagine the modern state through responsible AI and technology.",
    body: [
      "The Government Transformation Summit is one of the most exclusive gatherings in the UK public sector calendar, convening over 200 of the most senior government transformation leaders from across Whitehall and the devolved administrations for a focused day of strategic dialogue in Westminster. Unlike broader industry conferences, the summit is explicitly designed for senior government decision-makers, creating a uniquely candid environment for peer-to-peer discussion of transformation challenges and breakthroughs.",
      "The 2026 programme examines the fundamental architecture of modern government: how data becomes the operating system of a responsive state, how AI can augment government decision-making without compromising democratic accountability, and how digital delivery capabilities can be built and sustained within government organisations operating under significant resource and legacy constraints. Speakers include senior figures who have led landmark transformation programmes within UK and international governments.",
      "For UPTECH and its members, the Government Transformation Summit provides strategic intelligence on where the UK government's digital transformation agenda is heading over the next three to five years — essential context for Pakistani companies and government officials seeking to build relevant capabilities and position themselves effectively within the UK–Pakistan technology partnership.",
    ],
    relatedSlugs: [
      "govtech-summit-2026",
      "building-the-smarter-state-2026",
      "digigov-expo-2026",
    ],
  },
  {
    slug: "digigov-expo-2026",
    title: "DigiGov Expo 2026",
    category: "London",
    tag: "Expo",
    status: "upcoming",
    date: "September 23–24, 2026",
    dateISO: "2026-09-23",
    location: "ExCeL London",
    venue: "ExCeL London",
    image: "/image/Events%20%26%20Engagements/DigiGovExpo.webp",
    officialLink: "https://www.digital-government.co.uk/",
    excerpt:
      "Developed with DSIT and GDS, featuring an international 'Government Village' showcasing digital projects and actionable strategies for digital public services.",
    body: [
      "DigiGov Expo is the UK's leading exhibition and conference dedicated to digital government transformation, developed in partnership with the Department for Science, Innovation and Technology (DSIT) and the Government Digital Service (GDS). The 2026 edition at ExCeL London features a dedicated Government Village where UK government departments showcase live digital transformation projects alongside hundreds of technology companies presenting solutions across the full spectrum of public sector technology.",
      "The conference programme focuses on actionable strategies rather than aspirational visions, with sessions examining successful case studies from UK government, lessons from international digital government leaders including Estonia, Singapore, and Denmark, and practical frameworks for measuring and demonstrating the value of technology investment in public services. The international Government Village brings together digital government delegations from across Europe, the Middle East, and Asia-Pacific.",
      "DigiGov Expo's combination of exhibition scale, conference depth, and international reach makes it the most comprehensive annual showcase of digital government globally. For Pakistani government officials and technology companies, the Expo provides both inspiration and practical intelligence on what world-class digital government looks like in operational practice — and the technology partnerships that make it possible.",
    ],
    relatedSlugs: [
      "government-transformation-summit-2026",
      "building-the-smarter-state-2026",
      "govtech-summit-2026",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Utility functions                                                   */
/* ------------------------------------------------------------------ */

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug);
}

export function getUpcomingEvents(): Event[] {
  return events
    .filter((e) => e.status === "upcoming")
    .sort((a, b) => a.dateISO.localeCompare(b.dateISO));
}

export function getPastEvents(): Event[] {
  return events
    .filter((e) => e.status === "past")
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO));
}

export function getEventsByCategory(category: Event["category"]): Event[] {
  return events.filter((e) => e.category === category);
}

export function getRelatedEvents(slugs: string[]): Event[] {
  return slugs
    .map((slug) => getEventBySlug(slug))
    .filter((e): e is Event => e !== undefined)
    .slice(0, 3);
}
