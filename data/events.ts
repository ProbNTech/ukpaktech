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
  /*  UPTECH Flagship Events                                              */
  /* ------------------------------------------------------------------ */
  {
    slug: "pakistan-business-summit-davos-2025",
    title: "Pakistan Business Summit @ Davos 2025",
    category: "UPTECH",
    tag: "Summit",
    status: "past",
    date: "20–24 January 2025",
    dateISO: "2025-01-20",
    location: "Davos, Switzerland",
    image: "/image/events/Pakistan-Business-Summit-Davos-2025.jpg",
    excerpt:
      "High-level sideline summit during the World Economic Forum week in Davos, focusing on bilateral trade, investment, and Pakistan's economic transformation.",
    body: [
      "The Pakistan Business Summit at Davos 2025 served as the premier platform for showcasing Pakistan's investment landscape to the world's most influential business leaders and policymakers gathered for the World Economic Forum's Annual Meeting. Held in the margins of WEF week, the summit attracted senior executives, sovereign fund managers, and government ministers from across the globe.",
      "Sessions focused on Pakistan's digital economy transformation, the untapped potential of its technology sector, and the strategic importance of UK–Pakistan bilateral trade. The event featured curated roundtables connecting Pakistani government officials directly with international investors, creating structured pathways for deal flow and partnership agreements.",
      "The UK–Pakistan Tech Council played a central role in facilitating introductions and business-to-business meetings throughout the event, reinforcing UPTECH's position as the premier bridge institution between both nations' technology ecosystems.",
    ],
    relatedSlugs: [
      "uk-pakistan-business-summit-2025",
      "uk-pakistan-tech-innovation-summit",
      "cross-border-investment-dialogue",
    ],
  },
  {
    slug: "uk-pakistan-business-summit-2025",
    title: "UK–Pakistan Business Summit 2025",
    category: "UPTECH",
    tag: "Summit",
    status: "past",
    date: "21–22 November 2025",
    dateISO: "2025-11-21",
    location: "The Cumberland Hotel, London, United Kingdom",
    venue: "The Cumberland Hotel",
    image: "/image/events/UK-Pakistan-Business-Summit-2025.jpg",
    excerpt:
      "Flagship bilateral business summit in London with plenary sessions, sector panels, and B2B meetings covering technology, manufacturing, and energy.",
    body: [
      "The UK–Pakistan Business Summit 2025 brought together over 600 delegates across two days of intensive dialogue at The Cumberland Hotel in London. As the UPTECH flagship annual event, the summit convened senior leaders from technology, finance, manufacturing, energy, and government to advance the bilateral agenda.",
      "The Summit's technology track produced landmark outcomes, including a memorandum of understanding between three UK university research institutes and the National University of Sciences and Technology (NUST) in Islamabad, creating a joint research programme in applied AI and data science. A £200 million bilateral technology investment agreement was also signed, marking the largest structured tech investment programme between the two nations to date.",
      "Looking ahead from the summit, the Council confirmed expansion plans to include Birmingham and Manchester sessions, and announced a new mentorship programme pairing established UK tech leaders with Pakistani founders, with the first cohort to begin in Q1 2026.",
    ],
    agenda: [
      { time: "09:00 – 09:30", title: "Registration & Welcome Coffee" },
      { time: "09:30 – 10:00", title: "Opening Ceremony & Ministerial Addresses" },
      { time: "10:00 – 11:00", title: "Keynote: The UK–Pakistan Digital Trade Agenda" },
      { time: "11:00 – 12:30", title: "Panel: Technology, Innovation & Investment Corridors" },
      { time: "12:30 – 13:30", title: "Networking Lunch" },
      { time: "13:30 – 15:00", title: "Sector Roundtables: FinTech, HealthTech, CleanTech" },
      { time: "15:00 – 16:30", title: "B2B Meeting Programme" },
      { time: "16:30 – 17:00", title: "Closing Remarks & Investment Agreement Signing" },
    ],
    relatedSlugs: [
      "pakistan-business-summit-davos-2025",
      "uk-pakistan-tech-innovation-summit",
      "cross-border-investment-dialogue",
    ],
  },
  {
    slug: "dha-peshawar-uk-road-show-2025",
    title: "DHA Peshawar UK Road Show 2025",
    category: "UPTECH",
    tag: "Delegation",
    status: "past",
    date: "4–10 May 2025",
    dateISO: "2025-05-04",
    location: "London, Birmingham, Manchester, Slough",
    image: "/image/events/DHA-Peshawar-UK-Road-Show-2025.jpg",
    excerpt:
      "Diaspora investment roadshow connecting UK-based investors with development opportunities across London, Birmingham, Manchester, and Slough.",
    body: [
      "The DHA Peshawar UK Road Show 2025 was a landmark week-long initiative spanning four major British cities, designed to connect the British-Pakistani diaspora community with credible investment opportunities in one of Pakistan's most ambitious urban development projects.",
      "The roadshow featured dedicated presentations, one-to-one meetings, and panel discussions tailored for UK-based investors, professionals, and members of the diaspora. Each city stop was carefully structured to address the specific interests and concerns of local communities, from financial returns and legal frameworks to infrastructure timelines and livability standards.",
      "UPTECH facilitated key introductions and provided institutional validation for the initiative, helping diaspora investors navigate the process with confidence. The roadshow concluded with a substantial pipeline of investment commitments and a renewed interest in Pakistan's property and infrastructure development sector among the British-Pakistani community.",
    ],
    relatedSlugs: [
      "uk-pakistan-business-summit-2025",
      "pakistan-business-summit-davos-2025",
      "uk-pakistan-tech-innovation-summit",
    ],
  },
  {
    slug: "global-business-leadership-forum",
    title: "Global Business Leadership Forum",
    category: "UPTECH",
    tag: "Forum",
    status: "past",
    date: "2025",
    dateISO: "2025-06-01",
    location: "United Kingdom",
    image: "/image/eventgallery/event-4.jpg",
    excerpt:
      "Bringing together global business leaders for dialogue on UK–Pakistan technology and trade, showcasing investment opportunities and sustainable growth.",
    body: [
      "The Global Business Leadership Forum served as a high-level convening of senior executives and institutional leaders from across the UK and Pakistan, focused on unlocking the next phase of bilateral technology and trade collaboration.",
      "The forum placed particular emphasis on showcasing Pakistan's emerging technology sector to an international audience, with presentations from leading Pakistani tech companies, government representatives, and academic institutions. Participants engaged in structured dialogue sessions examining the scalable investment opportunities in AI, fintech, and digital infrastructure.",
      "UPTECH's role as organiser and convenor reinforced the Council's mandate to create meaningful, high-impact platforms for bilateral engagement at the highest levels of business and government.",
    ],
    relatedSlugs: [
      "uk-pakistan-business-summit-2025",
      "uk-pakistan-tech-innovation-summit",
      "cross-border-investment-dialogue",
    ],
  },
  {
    slug: "inspiring-pakistan-davos-pavilion-2025",
    title: "Inspiring Pakistan at Davos Pavilion",
    category: "UPTECH",
    tag: "Summit",
    status: "past",
    date: "20–24 January 2025",
    dateISO: "2025-01-20",
    location: "Davos, Switzerland",
    image: "/image/events/Pakistan-Business-Summit-Davos-2025.jpg",
    excerpt:
      "Pakistan Pavilion at the World Economic Forum highlighting the nation's strengths, resilience, and investment opportunities to international leaders.",
    body: [
      "The Pakistan Pavilion at the World Economic Forum in Davos 2025 provided a prominent platform to challenge prevailing perceptions of Pakistan and present the country's remarkable economic resilience, digital transformation story, and investment potential to the most concentrated gathering of global decision-makers in the world.",
      "The Pavilion featured daily programming including ministerial addresses, CEO roundtables, and curated one-to-one meetings between Pakistani officials and international investors. Thematic sessions covered sectors from technology and energy to agriculture and infrastructure, projecting a comprehensive and nuanced picture of the Pakistan opportunity.",
      "UPTECH participated in the Pavilion programming, contributing to sessions focused on the UK–Pakistan technology corridor and facilitating introductions that would later yield tangible investment commitments and partnership agreements.",
    ],
    relatedSlugs: [
      "pakistan-business-summit-davos-2025",
      "uk-pakistan-business-summit-2025",
      "global-business-leadership-forum",
    ],
  },
  {
    slug: "single-country-expo-2025",
    title: "Single Country Expo 2025",
    category: "UPTECH",
    tag: "Expo",
    status: "past",
    date: "April 2025",
    dateISO: "2025-04-01",
    location: "Pakistan House, Manchester, United Kingdom",
    venue: "Pakistan House",
    image: "/image/past-events/1ev.jpg",
    excerpt:
      "Month-long expo at Pakistan House Manchester facilitating B2B meetings between Pakistani businesses and UK distributors.",
    body: [
      "The Single Country Expo 2025 at Pakistan House Manchester was a month-long trade showcase that brought together leading Pakistani exporters with UK distributors, buyers, and retailers in a structured, high-engagement commercial environment.",
      "The expo was co-organised with the Pak-UK Business Council and featured sector-specific presentation days covering food and beverages, textiles, light manufacturing, and technology services. Each day's programme included product demonstrations, commercial presentations, and facilitated B2B meeting slots designed to advance discussions from initial interest to serious commercial dialogue.",
      "By hosting the expo at the established Pakistan House venue in Manchester, organisers ensured strong attendance from the city's significant British-Pakistani business community, creating an authentic and commercially productive environment for cross-border trade development.",
    ],
    relatedSlugs: [
      "dha-peshawar-uk-road-show-2025",
      "uk-pakistan-business-summit-2025",
      "global-business-leadership-forum",
    ],
  },
  {
    slug: "uk-pakistan-tech-export-strategies-webinar-2025",
    title: "UK–Pakistan Tech & Export Strategies Webinar",
    category: "UPTECH",
    tag: "Webinar",
    status: "past",
    date: "15 January 2025",
    dateISO: "2025-01-15",
    location: "Online",
    image: "/image/past-events/2ev.jpg",
    excerpt:
      "Export and marketing strategies for the UK market: webinar for Pakistani businesses on entering and scaling in the UK technology landscape.",
    body: [
      "The UK–Pakistan Tech & Export Strategies Webinar was an online masterclass designed specifically for Pakistani technology companies seeking to establish or expand their presence in the UK market. The session attracted over 200 participants from across Pakistan's technology ecosystem, including startup founders, senior executives, and government trade officials.",
      "Expert speakers from UK trade organisations, marketing agencies, and established British-Pakistani technology companies provided actionable insights on market entry strategies, regulatory compliance, customer acquisition, and building credibility with UK enterprise buyers. Particular attention was given to the nuances of UK procurement processes and the importance of establishing local presence and partnerships.",
      "The webinar marked the opening event of UPTECH's 2025 programme calendar and set the tone for a year of practical, commercially focused knowledge-sharing across the bilateral technology community.",
    ],
    relatedSlugs: [
      "uk-pakistan-business-summit-2025",
      "single-country-expo-2025",
      "uk-pakistan-tech-innovation-summit",
    ],
  },
  {
    slug: "uk-pakistan-technology-partnership-conference-2024",
    title: "UK–Pakistan Technology Partnership Conference",
    category: "UPTECH",
    tag: "Conference",
    status: "past",
    date: "2024",
    dateISO: "2024-10-01",
    location: "United Kingdom",
    image: "/image/past-events/4ev.jpg",
    excerpt:
      "Conference strengthening technology partnerships and innovation ties between the UK and Pakistan, with sessions on digital trade and startup ecosystems.",
    body: [
      "The UK–Pakistan Technology Partnership Conference 2024 was a landmark convening that brought together over 300 delegates from both nations to advance the bilateral technology agenda at a critical moment of economic transformation for Pakistan.",
      "The conference programme featured keynote addresses from senior figures in both governments, followed by thematic panels on digital trade frameworks, startup ecosystem development, talent mobility, and research collaboration. Breakout sessions allowed delegates to engage in depth on specific sectors including fintech, healthcare technology, and agricultural technology.",
      "The conference produced a jointly agreed set of recommendations — the Partnership Technology Communiqué — submitted to relevant ministries in both the UK and Pakistan as a practical framework for accelerating bilateral digital trade and investment in the years ahead.",
    ],
    relatedSlugs: [
      "uk-pakistan-business-summit-2025",
      "leaders-islamabad-uk-pakistan-dialogue-2024",
      "global-business-leadership-forum",
    ],
  },
  {
    slug: "leaders-islamabad-uk-pakistan-dialogue-2024",
    title: "Leaders in Islamabad – UK Pakistan Dialogue",
    category: "UPTECH",
    tag: "Dialogue",
    status: "past",
    date: "2024",
    dateISO: "2024-09-01",
    location: "Islamabad, Pakistan",
    image: "/image/past-events/5ev.jpg",
    excerpt:
      "High-level dialogue in Islamabad bringing together UK and Pakistani leaders to advance bilateral technology, trade, and investment collaboration.",
    body: [
      "The Leaders in Islamabad dialogue brought senior UK business and technology figures to Pakistan's capital for an immersive programme of government meetings, site visits, and structured bilateral discussions. The delegation included technology executives, investors, trade officials, and policy advisors.",
      "The dialogue format — grounded in Islamabad's corridors of power — provided a uniquely direct channel for UK leaders to engage with Pakistan's government at the highest levels, building personal relationships and institutional understanding that underpins long-term bilateral commitment.",
      "Key outcomes included agreed frameworks for accelerated visa processing for technology professionals, a commitment to a joint cybersecurity cooperation mechanism, and the establishment of a dedicated digital trade desk within the UK High Commission in Islamabad to support ongoing business facilitation.",
    ],
    relatedSlugs: [
      "uk-pakistan-technology-partnership-conference-2024",
      "uk-pakistan-business-summit-2025",
      "cross-border-investment-dialogue",
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  UPTECH Upcoming / Planned Events                                   */
  /* ------------------------------------------------------------------ */
  {
    slug: "uk-pakistan-tech-innovation-summit",
    title: "UK–Pakistan Tech Innovation Summit 2026",
    category: "UPTECH",
    tag: "Summit",
    status: "upcoming",
    date: "June 15, 2026",
    dateISO: "2026-06-15",
    time: "09:00 – 17:00 BST",
    location: "Queen Elizabeth II Centre, London, UK",
    venue: "Queen Elizabeth II Centre",
    price: "Free for Members / £95 General Admission",
    image: "/image/eventgallery/event-1.jpg",
    excerpt:
      "A flagship forum bringing together founders, policymakers, and enterprise leaders to explore cross-border collaboration, digital trade, and UK–Pakistan partnerships.",
    body: [
      "The UK–Pakistan Tech Innovation Summit is the premier annual gathering of the UK–Pakistan Tech Council. Now in its third edition, the Summit convenes over 500 delegates from both nations — including technology founders, institutional investors, policymakers, academic researchers, and enterprise leaders.",
      "This year's programme focuses on three critical themes: AI-driven economic transformation, cross-border digital trade frameworks, and sustainable technology investment corridors. Delegates will engage in keynote sessions, interactive workshops, curated networking, and live showcases of breakthrough technologies from both nations.",
      "The Summit also serves as the stage for the annual UK–Pakistan Tech Excellence Awards, recognising outstanding contributions to bilateral innovation and growth. UPTECH members receive priority access, reserved seating at all headline sessions, and exclusive access to the post-summit reception.",
    ],
    agenda: [
      { time: "08:30 – 09:00", title: "Registration & Networking Breakfast" },
      { time: "09:00 – 09:30", title: "Opening Ceremony & Welcome Remarks" },
      { time: "09:30 – 10:30", title: "Keynote: AI & the Future of Bilateral Trade" },
      { time: "10:30 – 11:00", title: "Networking Break" },
      { time: "11:00 – 12:30", title: "Panel: Cross-Border Investment Opportunities" },
      { time: "12:30 – 13:30", title: "Lunch & Exhibition" },
      { time: "13:30 – 15:00", title: "Workshop: Market Entry Strategies for Tech Companies" },
      { time: "15:00 – 15:30", title: "Afternoon Break" },
      { time: "15:30 – 16:30", title: "Fireside Chat: Founders Building Across Borders" },
      { time: "16:30 – 17:00", title: "Closing Remarks & Tech Excellence Awards" },
    ],
    relatedSlugs: [
      "cross-border-investment-dialogue",
      "digital-policy-regulatory-forum",
      "london-tech-week-2026",
    ],
  },
  {
    slug: "cross-border-investment-dialogue",
    title: "Cross-Border Investment Dialogue 2026",
    category: "UPTECH",
    tag: "Dialogue",
    status: "upcoming",
    date: "July 22, 2026",
    dateISO: "2026-07-22",
    time: "10:00 – 16:00 BST",
    location: "The Shard, London, UK",
    venue: "The Shard",
    price: "Invitation Only",
    image: "/image/eventgallery/event-2.jpg",
    excerpt:
      "Private roundtables connecting UK and Pakistani investors with high-growth technology companies to unlock funding, partnerships, and expansion opportunities.",
    body: [
      "The Cross-Border Investment Dialogue is an invitation-only gathering designed to facilitate meaningful connections between UK and Pakistani investors, fund managers, and high-growth technology companies seeking cross-border expansion.",
      "The format includes structured roundtable sessions, one-to-one investor meetings, and curated deal-flow presentations. Each participating company has been pre-screened and matched with relevant capital partners to maximise the quality of engagement.",
      "This year's Dialogue will spotlight opportunities in FinTech, HealthTech, AI infrastructure, and climate technology — sectors where bilateral investment corridors show the strongest growth potential. Attendance is strictly by invitation to maintain the quality and confidentiality of commercial discussions.",
    ],
    agenda: [
      { time: "09:30 – 10:00", title: "Arrival & Registration" },
      { time: "10:00 – 10:45", title: "Opening: State of UK–Pakistan Tech Investment" },
      { time: "10:45 – 12:00", title: "Roundtable A: FinTech & Digital Banking" },
      { time: "12:00 – 13:00", title: "Networking Lunch" },
      { time: "13:00 – 14:15", title: "Roundtable B: HealthTech & AI Infrastructure" },
      { time: "14:15 – 15:30", title: "One-to-One Investor Meetings" },
      { time: "15:30 – 16:00", title: "Closing Remarks & Next Steps" },
    ],
    relatedSlugs: [
      "uk-pakistan-tech-innovation-summit",
      "digital-policy-regulatory-forum",
      "ai-summit-london-2026",
    ],
  },
  {
    slug: "digital-policy-regulatory-forum",
    title: "Digital Policy & Regulatory Forum 2026",
    category: "UPTECH",
    tag: "Forum",
    status: "upcoming",
    date: "September 10, 2026",
    dateISO: "2026-09-10",
    time: "09:30 – 16:30 PKT",
    location: "Islamabad Convention Centre, Pakistan",
    venue: "Islamabad Convention Centre",
    price: "Free",
    image: "/image/eventgallery/event-3.jpg",
    excerpt:
      "Institutional discussions between regulators and industry leaders focused on enabling innovation through transparent, future-ready policy frameworks.",
    body: [
      "The Digital Policy & Regulatory Forum convenes senior policymakers, regulatory advisors, legal professionals, and technology industry leaders from the UK and Pakistan for a full-day programme of structured dialogue.",
      "The Forum addresses the most pressing regulatory challenges affecting cross-border technology operations — including data governance, digital taxation, intellectual property protection, and AI ethics frameworks. Each session is designed to produce concrete, actionable recommendations rather than general declarations.",
      "Outputs from the Forum directly inform the Council's annual Policy Brief, submitted to relevant government bodies in both nations as a practical roadmap for enabling bilateral digital trade and innovation. Delegates include senior government officials, regulatory agency representatives, and technology industry leaders.",
    ],
    agenda: [
      { time: "09:00 – 09:30", title: "Registration" },
      { time: "09:30 – 10:30", title: "Keynote: Digital Governance in an AI-First World" },
      { time: "10:30 – 12:00", title: "Panel: Cross-Border Data Governance" },
      { time: "12:00 – 13:00", title: "Lunch Break" },
      { time: "13:00 – 14:30", title: "Workshop: IP Protection for Tech Companies" },
      { time: "14:30 – 15:00", title: "Break" },
      { time: "15:00 – 16:00", title: "Panel: AI Ethics & Responsible Innovation" },
      { time: "16:00 – 16:30", title: "Closing Statements & Policy Brief Launch" },
    ],
    relatedSlugs: [
      "uk-pakistan-tech-innovation-summit",
      "cross-border-investment-dialogue",
      "asocio-digital-summit-2026",
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  London Events 2026                                                 */
  /* ------------------------------------------------------------------ */
  {
    slug: "bett-uk-2026",
    title: "Bett UK 2026",
    category: "London",
    tag: "Conference",
    status: "past",
    date: "January 21–23, 2026",
    dateISO: "2026-01-21",
    time: "Wed 08:15–17:00, Thu 08:30–17:00, Fri 08:30–16:00 GMT",
    location: "ExCeL London",
    venue: "ExCeL London",
    price: "Free",
    image: "/image/eventgallery/event-1.jpg",
    officialLink: "https://uk.bettshow.com/",
    excerpt:
      "The world's leading education technology forum, with 400+ speakers exploring how technology is transforming higher education and global government policy.",
    body: [
      "Bett UK is the world's most influential EdTech event, bringing together educators, technology providers, policymakers, and innovators from over 100 countries for three intensive days at ExCeL London. The 2026 edition features more than 400 world-class speakers and hundreds of exhibitors showcasing the latest tools transforming education globally.",
      "For the UK–Pakistan technology community, Bett UK represents a significant opportunity to explore education technology solutions relevant to Pakistan's ambitious digital education agenda. Pakistan's school-age population of over 50 million and its government's commitment to EdTech integration make bilateral EdTech collaboration one of the most commercially and socially impactful corridors in the partnership.",
      "UPTECH encourages members with interests in education technology, digital literacy programmes, and government-scale EdTech procurement to attend Bett UK as part of their broader UK sector engagement strategy.",
    ],
    relatedSlugs: [
      "tech-show-london-2026",
      "punjab-education-summit-2026",
      "uk-pakistan-tech-innovation-summit",
    ],
  },
  {
    slug: "nextgen-digital-summit-karachi-2026",
    title: "NextGen Digital Summit Karachi 2026",
    category: "Pakistan",
    tag: "Summit",
    status: "past",
    date: "February 25–26, 2026",
    dateISO: "2026-02-25",
    time: "09:00 – 17:00 PKT",
    location: "Karachi, Pakistan",
    image: "/image/eventgallery/event-2.jpg",
    officialLink: "https://alliancepakistan.org/event/nextgen-digital-summit/",
    excerpt:
      "A critical gathering for policymakers and industry leaders shaping Pakistan's 5G readiness, fiber rollouts, smart city infrastructure, and digital governance.",
    body: [
      "The NextGen Digital Summit in Karachi is Pakistan's premier platform for advancing the nation's digital connectivity agenda. The 2026 edition brings together telecommunications regulators, government ministers, technology executives, and international standards bodies to address the most pressing questions around Pakistan's 5G rollout strategy and full-fibre deployment.",
      "Key thematic tracks include digital governance and policy reform, the digital economy's global competitiveness, smart city infrastructure planning for Karachi and other major urban centres, and cybersecurity trust frameworks for critical national infrastructure. The summit features international delegations from countries that have successfully executed large-scale connectivity transformations.",
      "For the UK–Pakistan technology community, the NextGen Digital Summit is a critical intelligence-gathering opportunity. UK-based telecommunications firms, infrastructure investors, and digital governance consultancies will find direct pathways to senior Pakistani government and industry decision-makers through this forum.",
    ],
    relatedSlugs: [
      "asocio-digital-summit-2026",
      "connected-britain-2026",
      "itcn-asia-karachi-2026",
    ],
  },
  {
    slug: "tech-show-london-2026",
    title: "Tech Show London 2026",
    category: "London",
    tag: "Expo",
    status: "past",
    date: "March 4–5, 2026",
    dateISO: "2026-03-04",
    time: "Wed 09:00–17:00, Thu 09:30–17:00 GMT",
    location: "ExCeL London",
    venue: "ExCeL London",
    price: "Free",
    image: "/image/eventgallery/event-3.jpg",
    officialLink: "https://www.techshowlondon.co.uk/",
    excerpt:
      "The UK's most significant B2B technology expo, co-locating five major events with 450+ exhibitors and 17,000+ attendees.",
    body: [
      "Tech Show London is the UK's largest B2B technology event, bringing together five co-located expos under one roof at ExCeL London: Cloud & AI Infrastructure, DevOps Live, Cloud & Cyber Security, Big Data & AI World, and Data Centre World. The 2026 edition expects over 17,340 attendees and features more than 450 exhibitors from across the global technology industry.",
      "For Pakistani technology companies seeking to establish credibility and visibility in the UK B2B market, Tech Show London offers unparalleled access to enterprise IT decision-makers, procurement leaders, and technology buyers across virtually every sector of the UK economy. The co-location model means a single registration provides access to all five simultaneous events.",
      "UPTECH recommends Tech Show London as a priority market engagement event for Pakistani IT services companies, software houses, and technology product companies looking to build their UK pipeline. The event's focus on cloud, AI, and cybersecurity aligns directly with Pakistan's established areas of technology expertise and the fastest-growing bilateral technology trade categories.",
    ],
    relatedSlugs: [
      "aws-summit-london-2026",
      "london-tech-week-2026",
      "ai-summit-london-2026",
    ],
  },
  {
    slug: "punjab-education-summit-2026",
    title: "Punjab Education Summit 2026",
    category: "Pakistan",
    tag: "Summit",
    status: "past",
    date: "March 26–28, 2026",
    dateISO: "2026-03-26",
    time: "09:00 – 17:00 PKT",
    location: "Lahore, Pakistan",
    price: "Free (By Invitation)",
    image: "/image/eventgallery/event-4.jpg",
    officialLink: "https://punjabeducationsummit.pesrp.edu.pk/",
    excerpt:
      "Government of Punjab's premier EdTech forum integrating digital solutions to improve learning outcomes and benchmarking against international best practices.",
    body: [
      "The Punjab Education Summit 2026 (PES-2026) is organised by the School Education Department, Government of Punjab, and stands as Pakistan's most significant government-led platform for education technology reform and policy dialogue. The summit convenes education ministers, global EdTech leaders, curriculum specialists, and public-private partnership architects for three days of structured programming.",
      "The 2026 edition places education technology integration at the centre of its agenda — exploring scalable solutions for improved learning outcomes across Punjab's network of thousands of schools. International best practices from the UK, Singapore, and Finland feature prominently in the programme, with specific sessions on AI-assisted teaching tools, digital assessment platforms, and data-driven school management systems.",
      "The summit represents a direct government procurement signal for EdTech solutions at scale. UK-based education technology companies with proven solutions for government-scale implementation will find the Punjab Education Summit an invaluable forum for establishing government relationships and understanding procurement pathways.",
    ],
    relatedSlugs: [
      "bett-uk-2026",
      "nextgen-digital-summit-karachi-2026",
      "mera-brand-pakistan-expo-2026",
    ],
  },
  {
    slug: "aws-summit-london-2026",
    title: "AWS Summit London 2026",
    category: "London",
    tag: "Summit",
    status: "upcoming",
    date: "April 22, 2026",
    dateISO: "2026-04-22",
    time: "08:00 – 18:30 BST",
    location: "ExCeL London",
    venue: "ExCeL London",
    price: "Free",
    image: "/image/eventgallery/event-1.jpg",
    officialLink: "https://aws.amazon.com/events/summits/london/",
    excerpt:
      "Premier gathering for the cloud community focusing on practical generative AI implementation, cloud-native architecture, and data sovereignty.",
    body: [
      "The AWS Summit London 2026 is the most significant Amazon Web Services event in the UK, drawing tens of thousands of cloud practitioners, architects, developers, and business leaders to ExCeL London for a day of learning, networking, and innovation. The 2026 edition centres on three themes that are directly shaping the UK–Pakistan technology corridor: practical generative AI implementation at enterprise scale, cloud-native architecture for regulated industries, and data sovereignty solutions within the AWS ecosystem.",
      "For Pakistani technology companies already working within the AWS ecosystem — or those considering cloud platform strategy — the Summit provides unrivalled access to the latest product roadmaps, best practice case studies, and direct conversations with AWS technical and business teams. The event also serves as a critical market intelligence gathering opportunity for understanding how UK enterprise buyers are approaching cloud transformation.",
      "UPTECH members attending AWS Summit London are encouraged to connect with the Council's team at the event, where we facilitate introductions between Pakistani cloud-native companies and UK enterprise contacts actively seeking technology partners in the AWS ecosystem.",
    ],
    relatedSlugs: [
      "tech-show-london-2026",
      "london-tech-week-2026",
      "dtx-london-2026",
    ],
  },
  {
    slug: "sxsw-london-2026",
    title: "SXSW London 2026",
    category: "London",
    tag: "Festival",
    status: "upcoming",
    date: "June 1–6, 2026",
    dateISO: "2026-06-01",
    time: "All day (venue-dependent)",
    location: "Shoreditch, London (Christ Church, Truman Brewery & venues)",
    price: "From £900 (Festival Pass) / £1,560 (Platinum Pass)",
    image: "/image/eventgallery/event-2.jpg",
    officialLink: "https://www.sxswlondon.com/",
    excerpt:
      "The historic European debut of the legendary Austin-based festival, featuring expansive tracks on AI, Healthtech, Frontier Technologies, and the Creator Economy.",
    body: [
      "SXSW London 2026 marks the historic European debut of one of the world's most influential innovation and culture festivals. Spanning six days and multiple iconic venues across London, SXSW London brings together the full creative and technological spectrum — from AI pioneers and healthtech entrepreneurs to musicians, filmmakers, and policy innovators.",
      "The festival's four primary tracks are directly relevant to the UK–Pakistan technology agenda: AI & The New Human Experience explores how artificial intelligence is reshaping industries and societies; Healthtech examines digital health solutions for emerging and developed markets; Frontier Technologies covers robotics, quantum computing, and next-generation connectivity; and the Creator Economy investigates the commercial models underpinning digital content and platform businesses.",
      "For UK–Pakistan tech professionals, SXSW London represents an extraordinary networking and positioning opportunity. The festival's global media attention and diverse, senior attendee base make it an ideal venue for Pakistani technology innovators to raise their international profile and build relationships with global partners, investors, and collaborators.",
    ],
    relatedSlugs: [
      "london-tech-week-2026",
      "ai-summit-london-2026",
      "uk-pakistan-tech-innovation-summit",
    ],
  },
  {
    slug: "london-tech-week-2026",
    title: "London Tech Week 2026",
    category: "London",
    tag: "Festival",
    status: "upcoming",
    date: "June 8–12, 2026",
    dateISO: "2026-06-08",
    time: "Main conference June 8–10; fringe events June 8–12 BST",
    location: "Olympia London + 70+ venues across London",
    venue: "Olympia London",
    price: "From £300 (Campus Pass) / £1,500+ (Full Access)",
    image: "/image/eventgallery/event-3.jpg",
    officialLink: "https://londontechweek.com/",
    excerpt:
      "Europe's flagship technology festival attracting 30,000+ innovators and 400 world-class speakers, including the CEOs of Perplexity, ElevenLabs, and Wayve.",
    body: [
      "London Tech Week is Europe's most important technology event, drawing over 30,000 innovators, investors, founders, and policymakers from more than 100 countries to Olympia London and 70+ fringe venues across the capital. The 2026 edition features over 400 world-class speakers, including the CEOs of Perplexity, ElevenLabs, and Wayve, alongside ministers, venture capitalists, and enterprise leaders shaping the global technology agenda.",
      "For the UK–Pakistan technology community, London Tech Week represents the single highest-value market engagement opportunity in the UK calendar. Pakistan's growing reputation as a technology services hub and emerging market for international investment makes the nation's presence at London Tech Week increasingly significant — and UPTECH works to ensure Pakistani technology companies, investors, and government representatives participate meaningfully in the week's programming.",
      "The week includes a packed fringe programme of bilateral events, dinners, and roundtables. UPTECH typically hosts or co-hosts UK–Pakistan focused sessions during London Tech Week, creating a focused corridor of engagement within the broader festival that delivers direct value for Council members and their partners.",
    ],
    relatedSlugs: [
      "sxsw-london-2026",
      "ai-summit-london-2026",
      "uk-pakistan-tech-innovation-summit",
    ],
  },
  {
    slug: "ai-summit-london-2026",
    title: "The AI Summit London 2026",
    category: "London",
    tag: "Summit",
    status: "upcoming",
    date: "June 10–11, 2026",
    dateISO: "2026-06-10",
    time: "Wed 08:00–18:00, Thu 08:00–17:00 BST",
    location: "Tobacco Dock, London",
    venue: "Tobacco Dock",
    price: "From £125 (Campus Pass) / £100–£2,499 (Delegate)",
    image: "/image/eventgallery/event-4.jpg",
    officialLink: "https://london.theaisummit.com/",
    excerpt:
      "Part of the global AI Summit Series, bringing together 5,000+ attendees and 300+ speakers from Mastercard, Vodafone, and AstraZeneca on enterprise AI deployment.",
    body: [
      "The AI Summit London is the world's leading event for enterprise AI deployment and ROI, hosting over 5,000 attendees and more than 300 speakers from organisations including Mastercard, Vodafone, AstraZeneca, and the UK Government's AI Office. The 2026 event at the spectacular Tobacco Dock venue runs alongside London Tech Week, maximising value for attendees navigating the capital's peak technology calendar.",
      "The Summit's central question — how do large organisations move from AI experimentation to enterprise-scale value creation — is directly relevant to Pakistani technology companies building AI capabilities for global enterprise clients. Sessions cover practical AI implementation, responsible AI governance, sector-specific AI applications in financial services, healthcare, and manufacturing, and the talent and infrastructure requirements for AI-enabled business transformation.",
      "For UPTECH members developing AI products or services, the AI Summit provides unparalleled access to the enterprise buyers and procurement decision-makers who will shape AI adoption curves over the next three to five years. The event also provides critical intelligence on UK regulatory direction for AI, which will increasingly influence the frameworks within which Pakistani companies operating in the UK market must operate.",
    ],
    relatedSlugs: [
      "london-tech-week-2026",
      "sxsw-london-2026",
      "cross-border-investment-dialogue",
    ],
  },
  {
    slug: "salesforce-world-tour-london-2026",
    title: "Salesforce World Tour London 2026",
    category: "London",
    tag: "Conference",
    status: "upcoming",
    date: "June 18, 2026",
    dateISO: "2026-06-18",
    time: "09:00 – 18:00 BST",
    location: "ExCeL London",
    venue: "ExCeL London",
    price: "Free (Registration Required)",
    image: "/image/eventgallery/event-1.jpg",
    officialLink: "https://www.salesforce.com/uk/events/world-tour/london/",
    excerpt:
      "Salesforce's flagship global roadshow focusing on Agentic AI, Data Cloud advancements, and CRM innovation with live demos and keynote sessions.",
    body: [
      "Salesforce World Tour London is one of the highest-attendance technology events in the UK annual calendar, drawing thousands of Salesforce customers, partners, and developers to ExCeL London for a day of product announcements, live demonstrations, and high-profile keynote sessions. The 2026 edition centres on Agentforce — Salesforce's vision for agentic AI — alongside the latest Data Cloud capabilities and next-generation CRM innovations.",
      "For Pakistani Salesforce partners and consultancies — a significant and growing segment of Pakistan's IT export industry — World Tour London represents a vital opportunity to understand the platform roadmap, connect with the UK Salesforce ecosystem, and position themselves to serve UK Salesforce customers seeking implementation and customisation expertise.",
      "The event also provides valuable intelligence for Pakistani technology companies building products or services that integrate with the Salesforce platform, as well as for those exploring how enterprise CRM and AI capabilities can be leveraged to improve their own operations in competitive UK and international markets.",
    ],
    relatedSlugs: [
      "london-tech-week-2026",
      "dtx-london-2026",
      "tech-show-london-2026",
    ],
  },
  {
    slug: "textile-asia-international-fair-2026",
    title: "32nd Textile Asia International Fair 2026",
    category: "Pakistan",
    tag: "Expo",
    status: "upcoming",
    date: "July 3–5, 2026",
    dateISO: "2026-07-03",
    time: "10:00 – 18:00 PKT",
    location: "Lahore Expo Centre",
    venue: "Lahore Expo Centre",
    price: "Free (Visitor Registration)",
    image: "/image/eventgallery/event-2.jpg",
    officialLink: "https://www.textileasia.com.pk/",
    excerpt:
      "Biannual industry show focused on textile sector modernisation through the latest garment machinery, digital printing, and IoT-enabled manufacturing.",
    body: [
      "The 32nd Textile Asia International Fair at Lahore Expo Centre is Pakistan's premier platform for the textile and garment manufacturing sector, attracting buyers, suppliers, machinery manufacturers, and technology providers from across Asia, Europe, and North America. The 2026 biannual edition focuses on the intersection of traditional manufacturing expertise and digital transformation.",
      "Key exhibition categories include advanced garment machinery, digital fabric printing technologies, IoT-enabled production floor management systems, sustainable manufacturing solutions, and quality assurance technologies. The fair reflects Pakistan's textile industry's growing recognition that technology adoption — from AI-powered quality control to digital supply chain management — is essential for maintaining global competitiveness.",
      "For UK technology companies with solutions applicable to manufacturing modernisation, the Textile Asia fair provides direct access to buyers and decision-makers in Pakistan's single largest export sector. The fair also signals significant opportunities for Pakistani tech companies developing manufacturing software and IoT solutions to showcase capabilities to an international industry audience.",
    ],
    relatedSlugs: [
      "mera-brand-pakistan-expo-2026",
      "pakistan-auto-show-2026",
      "itcn-asia-karachi-2026",
    ],
  },
  {
    slug: "mera-brand-pakistan-expo-2026",
    title: "Mera Brand Pakistan Expo 2026",
    category: "Pakistan",
    tag: "Expo",
    status: "upcoming",
    date: "August 14–16, 2026",
    dateISO: "2026-08-14",
    time: "10:00 – 20:00 PKT",
    location: "Lahore Expo Centre",
    venue: "Lahore Expo Centre",
    price: "Free",
    image: "/image/eventgallery/event-3.jpg",
    officialLink: "https://pakexcel.com/",
    excerpt:
      "National movement for economic self-reliance showcasing locally manufactured tech solutions, with a Knowledge Lounge for youth tech competitions.",
    body: [
      "The Mera Brand Pakistan Expo 2026 is a national celebration of Pakistani innovation and economic self-reliance, bringing together locally manufactured products, services, and technologies under a single inspirational banner at Lahore Expo Centre. The three-day event is timed to coincide with Pakistan's Independence Day celebrations, lending it a powerful sense of national purpose.",
      "The technology pavilion at Mera Brand Pakistan is a vibrant showcase of Pakistani software companies, app developers, hardware innovators, and digital services providers — many of them small and medium enterprises presenting their capabilities to a national and international audience for the first time. The Knowledge and Learning Lounge features a packed programme of youth-focused tech meetups, coding competitions, and startup pitch events for young Pakistani entrepreneurs and founders.",
      "For UK-based Pakistani diaspora entrepreneurs and investors, Mera Brand Pakistan provides an authentic window into the grassroots innovation ecosystem developing across Pakistan's major cities. UPTECH uses the expo as an opportunity to identify emerging Pakistani technology companies with international growth potential for introduction to our UK member network.",
    ],
    relatedSlugs: [
      "pakistan-auto-show-2026",
      "itcn-asia-karachi-2026",
      "hbl-pasha-ict-awards-2026",
    ],
  },
  {
    slug: "pakistan-auto-show-2026",
    title: "21st Pakistan Auto Show (PAPS) 2026",
    category: "Pakistan",
    tag: "Expo",
    status: "upcoming",
    date: "September 18–20, 2026",
    dateISO: "2026-09-18",
    time: "10:00 – 19:00 PKT",
    location: "International Expo Centre Lahore",
    venue: "International Expo Centre Lahore",
    price: "Free (Public Entry)",
    image: "/image/eventgallery/event-4.jpg",
    officialLink: "https://pakistanautoshow.com/",
    excerpt:
      "Under the theme 'Industrial Pakistan', the 2026 show focuses on EVs, hydrogen solutions, and advanced manufacturing tech, with 250,000+ visitors expected.",
    body: [
      "The 21st Pakistan Auto Show (PAPS) 2026 is Pakistan's most significant automotive and mobility event, held under the theme 'Industrial Pakistan' to signal the sector's strategic ambition to transition from assembly to advanced manufacturing. The show expects over 250,000 visitors and participation from more than 150 international exhibitors across the three-day event at the International Expo Centre Lahore.",
      "The 2026 edition places unprecedented emphasis on electric vehicles, hydrogen fuel cell technology, and intelligent manufacturing systems — areas where UK expertise and Pakistani manufacturing scale create compelling partnership opportunities. Dedicated pavilions for EV charging infrastructure, battery technology, and smart factory solutions reflect the industry's recognition that Pakistan's automotive future is fundamentally a technology story.",
      "For UK companies in the EV supply chain, clean mobility technology, and industrial IoT sectors, PAPS 2026 represents an early-mover opportunity to establish relationships with Pakistan's automotive industry before competitive pressure intensifies. UPTECH can facilitate introductions to key industry figures and government representatives attending the show.",
    ],
    relatedSlugs: [
      "textile-asia-international-fair-2026",
      "itcn-asia-karachi-2026",
      "mera-brand-pakistan-expo-2026",
    ],
  },
  {
    slug: "connected-britain-2026",
    title: "Connected Britain 2026",
    category: "London",
    tag: "Conference",
    status: "upcoming",
    date: "September 9–10, 2026",
    dateISO: "2026-09-09",
    time: "08:45 – 17:00 BST (both days)",
    location: "ExCeL London",
    venue: "ExCeL London",
    price: "Free (Visitor) / Paid (Conference)",
    image: "/image/eventgallery/event-1.jpg",
    officialLink: "https://www.terrapinn.com/conference/connected-britain/index.stm",
    excerpt:
      "The UK's largest digital economy event, focusing on 5G, full-fiber rollouts, and next-generation connectivity with 8,000 industry leaders and 450 speakers.",
    body: [
      "Connected Britain is the UK's most important annual gathering for digital connectivity professionals, hosting over 8,000 industry leaders and 450 speakers from the public and private sectors across two days at ExCeL London. The 2026 event focuses on three transformative themes: the national 5G rollout strategy, full-fibre broadband deployment to underserved communities, and the infrastructure requirements for next-generation AI-dependent connectivity.",
      "The conference is a critical intelligence and relationship-building forum for UK telecommunications operators, infrastructure investors, technology vendors, and government digital policy teams. For Pakistani telecommunications companies and infrastructure providers, Connected Britain offers an unparalleled opportunity to understand the UK's connectivity agenda and identify partnership opportunities with UK operators investing in network modernisation.",
      "Pakistan's own ambitious connectivity agenda — including its 5G licensing programme and rural broadband expansion — creates natural areas of mutual learning and potential technology transfer with the UK market. UPTECH highlights Connected Britain as a key event for members in the telecommunications, connectivity infrastructure, and smart city technology sectors.",
    ],
    relatedSlugs: [
      "nextgen-digital-summit-karachi-2026",
      "dtx-london-2026",
      "london-tech-week-2026",
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
    time: "10:00 – 18:00 PKT (daily)",
    location: "Expo Centre Karachi",
    venue: "Expo Centre Karachi",
    price: "Free (Visitor Registration)",
    image: "/image/eventgallery/event-2.jpg",
    officialLink: "https://itcnasia.com/karachi/",
    excerpt:
      "Pakistan's largest IT and telecom festival with 3,500+ global brands, 70,000+ trade visitors, and forums like the Global CISO Summit and AI Beyond Borders.",
    body: [
      "ITCN Asia is Pakistan's largest and most internationally recognised information technology and telecommunications exhibition, organised under the patronage of the Special Investment Facilitation Council (SIFC). The 28th edition in 2026 features over 3,500 global brands, expects more than 70,000 trade visitors, and hosts a packed programme of high-level conferences and forums over three days at Expo Centre Karachi.",
      "The 2026 edition's premium conference programme includes the Global CISO Summit — a closed-door gathering of chief information security officers from Pakistan's largest organisations and international cybersecurity firms — and AI Beyond Borders, a conference exploring how artificial intelligence is reshaping global technology markets and Pakistan's role within them. Both forums attract C-suite decision-makers who represent the most commercially valuable contacts for UK technology companies seeking Pakistani enterprise clients.",
      "For UK technology companies at any stage of their Pakistan market entry, ITCN Asia is the single most important annual event. The concentration of Pakistani enterprise buyers, government technology procurement officials, and international technology partners under one roof in Karachi creates a density of commercial opportunity that justifies significant investment in exhibition space and delegation travel.",
    ],
    relatedSlugs: [
      "asocio-digital-summit-2026",
      "nextgen-digital-summit-karachi-2026",
      "connected-britain-2026",
    ],
  },
  {
    slug: "hbl-pasha-ict-awards-2026",
    title: "HBL P@SHA ICT Awards 2026",
    category: "Pakistan",
    tag: "Awards",
    status: "upcoming",
    date: "September/October 2026",
    dateISO: "2026-09-01",
    time: "Evening Gala Ceremony (TBD)",
    location: "Lahore or Islamabad (TBD)",
    price: "By Invitation",
    image: "/image/eventgallery/event-3.jpg",
    officialLink: "https://pashaictawards.com/",
    excerpt:
      "The definitive 'Made in Pakistan' recognition platform for innovative software and digital services, with winners advancing to the Asia-Pacific APICTA Awards.",
    body: [
      "The HBL P@SHA ICT Awards are Pakistan's most prestigious technology awards, organised by the Pakistan Software Houses Association (P@SHA) and now in their most significant edition to date. The awards serve as the definitive recognition platform for Pakistani software companies, digital service providers, and e-governance innovators, celebrating homegrown excellence across categories including enterprise software, mobile applications, fintech, healthtech, and social impact technology.",
      "Winners of the P@SHA ICT Awards are put forward to represent Pakistan at the Asia-Pacific ICT Alliance (APICTA) Awards — providing Pakistani technology companies with a direct pathway to international recognition and the relationships that accompany it. The gala ceremony, historically held in Lahore or Islamabad, is one of Pakistan's most high-profile technology industry events.",
      "For UK-based Pakistani diaspora technology entrepreneurs and investors, the P@SHA ICT Awards provide an annual spotlight on Pakistan's most innovative companies — many of which represent early-stage investment or acquisition opportunities. UPTECH monitors award winners closely and works to connect outstanding Pakistani technology companies with interested UK partners and investors.",
    ],
    relatedSlugs: [
      "itcn-asia-karachi-2026",
      "mera-brand-pakistan-expo-2026",
      "asocio-digital-summit-2026",
    ],
  },
  {
    slug: "dtx-london-2026",
    title: "DTX London 2026",
    category: "London",
    tag: "Expo",
    status: "upcoming",
    date: "October 14–15, 2026",
    dateISO: "2026-10-14",
    time: "09:30 – 17:30 (Day 1) / 09:30 – 16:30 (Day 2) BST",
    location: "ExCeL London",
    venue: "ExCeL London",
    price: "Free",
    image: "/image/eventgallery/event-4.jpg",
    officialLink: "https://www.dtxevents.io/london",
    excerpt:
      "Cornerstone event for IT leaders covering practical strategies for scaling AI, strengthening cyber defence, and optimising data stacks for the modern enterprise.",
    body: [
      "DTX London — the Digital Transformation EXPO — is the UK's leading event for senior IT decision-makers navigating the convergence of artificial intelligence, cybersecurity, and data infrastructure. The 2026 edition at ExCeL London focuses on the intersection of technology, people, and operational change, drawing thousands of C-suite technology leaders, enterprise architects, and digital transformation practitioners.",
      "The event's three core themes — scaling AI responsibly in enterprise environments, building resilient cyber defence capabilities, and optimising data and analytics stacks — map directly onto the areas where Pakistani technology companies have built strong international reputations. Pakistani IT services and consulting firms with expertise in enterprise AI implementation, cybersecurity, and data engineering will find DTX London a highly relevant market engagement opportunity.",
      "DTX London also serves as a critical intelligence source on the UK enterprise technology investment agenda. Understanding where UK IT budgets are being directed in 2026 and beyond provides Pakistani technology companies with the market intelligence needed to position their services and products against real buyer demand rather than assumed need.",
    ],
    relatedSlugs: [
      "connected-britain-2026",
      "aws-summit-london-2026",
      "gartner-it-conference-london-2026",
    ],
  },
  {
    slug: "ideas-2026",
    title: "IDEAS 2026 – International Defence Exhibition & Seminar",
    category: "Pakistan",
    tag: "Conference",
    status: "upcoming",
    date: "November 24–27, 2026",
    dateISO: "2026-11-24",
    time: "09:00 – 17:00 PKT (daily)",
    location: "Karachi Expo Centre",
    venue: "Karachi Expo Centre",
    price: "By Invitation / Accreditation",
    image: "/image/eventgallery/event-1.jpg",
    officialLink: "https://ideaspakistan.gov.pk/",
    excerpt:
      "The 13th edition features a dedicated 'Cyber & Emerging Tech' track on AI, quantum computing, and cybersecurity, attracting top-level international delegations.",
    body: [
      "IDEAS — the International Defence Exhibition & Seminar — is Pakistan's most internationally prominent defence and security technology event, held biennially at Karachi Expo Centre. The 13th edition in 2026 expands significantly beyond traditional defence procurement to feature a dedicated 'Cyber & Emerging Tech' track that addresses AI, quantum computing, cybersecurity infrastructure, and dual-use technology development.",
      "The Cyber & Emerging Tech track brings together cyber defence professionals, AI researchers, quantum technology developers, and critical infrastructure security specialists from Pakistan and internationally. The format combines exhibition of cutting-edge technologies with high-level conference sessions examining the geopolitical and commercial dimensions of emerging technology in defence and national security contexts.",
      "For UK technology companies operating in cybersecurity, AI safety, quantum technologies, and secure communications — sectors with both commercial and defence applications — IDEAS 2026 provides a rare opportunity to engage with Pakistani government technology decision-makers at the highest levels. The B2B and B2G meeting programme is managed through formal channels, and UPTECH can facilitate appropriate introductions for qualified member companies.",
    ],
    relatedSlugs: [
      "asocio-digital-summit-2026",
      "itcn-asia-karachi-2026",
      "gartner-it-conference-london-2026",
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
    time: "09:00 – 17:00 PKT (daily, TBD)",
    location: "Islamabad / Lahore (TBD)",
    price: "Delegate Registration (TBD)",
    image: "/image/eventgallery/event-2.jpg",
    officialLink: "https://www.asocio.org/",
    excerpt:
      "Pakistan hosts this premier regional summit for the first time, bringing technology leadership from 24 member countries to deliberate on digital policy and AI.",
    body: [
      "The ASOCIO Digital Summit 2026 marks a historic milestone for Pakistan's technology sector: the country has won its bid to host this premier regional event for the first time, bringing it to Islamabad or Lahore in November 2026. ASOCIO — the Asian-Oceanian Computing Industry Organisation — represents the technology industries of 24 member nations including Australia, Japan, China, Malaysia, Singapore, and India, making this summit one of the most internationally diverse technology events ever held in Pakistan.",
      "The summit will bring together technology leadership delegations from all 24 member countries to deliberate on digital policy frameworks, AI governance standards, cross-border data flows, and innovation ecosystem development across the Asia-Pacific region. Pakistan's successful hosting bid represents an enormous vote of confidence in the country's technology sector and its readiness to lead regional digital policy dialogue.",
      "For UK technology companies with Asia-Pacific regional ambitions, the ASOCIO summit — hosted in Pakistan — creates a unique convergence opportunity. Engaging with ASOCIO 2026 means simultaneous access to relationships across 24 high-growth technology markets through a single event in a country where UPTECH has deep institutional relationships and can provide exceptional support for UK delegations.",
    ],
    relatedSlugs: [
      "itcn-asia-karachi-2026",
      "nextgen-digital-summit-karachi-2026",
      "digital-policy-regulatory-forum",
    ],
  },
  {
    slug: "gartner-it-conference-london-2026",
    title: "Gartner IT Infrastructure & Cloud Strategies Conference 2026",
    category: "London",
    tag: "Conference",
    status: "upcoming",
    date: "November 16–17, 2026",
    dateISO: "2026-11-16",
    time: "08:30 – 17:30 GMT (both days)",
    location: "London, United Kingdom",
    price: "Paid (Contact Gartner for pricing)",
    image: "/image/eventgallery/event-3.jpg",
    officialLink: "https://www.gartner.com/en/conferences/emea/infrastructure-operations-cloud-uk",
    excerpt:
      "Exclusive summit for I&O leaders offering data-driven insights into automated operations, hybrid cloud solutions, and AI reshaping IT infrastructure.",
    body: [
      "The Gartner IT Infrastructure, Operations & Cloud Strategies Conference is the UK's most exclusive gathering of senior IT infrastructure and operations leaders, convened to share Gartner's latest research findings and facilitate peer-to-peer learning among the most experienced I&O professionals in UK enterprise.",
      "The 2026 programme focuses on three transformative forces reshaping enterprise IT: the automation of operations through AI and machine learning, the management of hybrid and multi-cloud environments at scale, and the strategic implications of agentic AI for IT infrastructure design and governance. Gartner analysts present proprietary research, Magic Quadrant findings, and Hype Cycle assessments that directly inform enterprise technology investment decisions.",
      "For Pakistani technology companies selling into UK enterprise IT environments, the Gartner conference provides critical intelligence on the frameworks and language that senior IT buyers use to evaluate technology investments. Understanding Gartner's positioning is essential for any company seeking to win in UK enterprise sales, and UPTECH highlights this conference as a key market intelligence opportunity for member companies with enterprise IT products or services.",
    ],
    relatedSlugs: [
      "dtx-london-2026",
      "connected-britain-2026",
      "aws-summit-london-2026",
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
