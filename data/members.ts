export interface Member {
  name: string;
  slug: string;
  logo?: string;
  logoScale?: number;
  website: string;
  description: string;
  companyType: string;
  sectors: string[];
  technologies: string[];
  location: string;
  founded?: string;
  /**
   * Primary directory category, chosen to reflect what the company actually
   * delivers. Drives the Category filter on /pakistan-top-companies.
   */
  category?:
    | "AI & Automation"
    | "Software Development"
    | "SaaS Products"
    | "Consulting"
    | "Cybersecurity"
    | "Cloud";
  /** When true, the member is pinned in the Featured grid on /pakistan-top-companies. */
  featured?: boolean;
}

export const members: Member[] = [
  {
    name: "Prob N Tech",
    slug: "prob-n-tech",
    logo: "/image/members/prob-n-tech.svg",
    website: "https://probntech.com",
    description:
      "AI-powered automation, custom software, and digital growth systems that help teams work faster and grow consistently.",
    companyType: "Software & Services",
    sectors: ["Artificial Intelligence", "Digital Transformation"],
    technologies: ["AI & Machine Learning", "Automation", "Custom Software"],
    location: "Faisalabad, Pakistan",
    founded: "2023",
    category: "AI & Automation",
    featured: true,
  },
  {
    name: "LetTech",
    slug: "lettech",
    logo: "/image/members/letTechLogo.png",
    website: "https://lettech.pk",
    description:
      "Peshawar-based problem-first technology company building AI-powered SaaS products for Pakistan's most underserved industries — starting with LetPsyc, the country's first practitioner-focused mental health assessment platform.",
    companyType: "SaaS / Platform",
    sectors: ["Artificial Intelligence", "HealthTech", "EdTech"],
    technologies: ["AI & Machine Learning", "Custom Software", "Automation"],
    location: "Peshawar, Pakistan",
    founded: "2025",
    category: "SaaS Products",
  },
  {
    name: "Velvonix",
    slug: "velvonix",
    logo: "/image/members/velvonix.png",
    website: "https://velvonix.com",
    description:
      "AI-powered digital agency delivering intelligent automation, custom software, mobile and web applications, and cloud infrastructure for businesses across finance, healthcare, retail, and education.",
    companyType: "Consultancy",
    sectors: ["Artificial Intelligence", "FinTech", "HealthTech", "Digital Transformation"],
    technologies: ["AI & Machine Learning", "Cloud & DevOps", "Custom Software", "Mobile Development"],
    location: "Faisalabad, Pakistan",
    category: "AI & Automation",
    featured: true,
  },
  {
    name: "Aulysius",
    slug: "aulysius",
    logo: "/image/members/aulysiusLogo.avif",
    website: "https://www.aulysius.com",
    description:
      "Project Management-as-a-Service (PMaaS) consultancy and certified solution partners for Miro, Make, Asana and Airtable. London, Dubai and Hong Kong-based team helping B2B enterprises plan, execute and report on projects end-to-end.",
    companyType: "Consultancy",
    sectors: ["Artificial Intelligence", "FinTech", "HealthTech", "EdTech", "Digital Transformation"],
    technologies: ["AI & Machine Learning", "Automation", "Data Analytics", "Custom Software"],
    location: "London, United Kingdom",
    category: "Consulting",
  },
  {
    name: "Genetech Solutions",
    slug: "genetech-solutions",
    logo: "/image/members/genetech-solutions.svg",
    website: "https://www.genetechsolutions.com",
    description:
      "Karachi-based digital transformation partner with 20+ years of experience building bespoke web and mobile applications, AI-powered solutions, cybersecurity and dedicated product engineering teams for global clients.",
    companyType: "Software & Services",
    sectors: ["Artificial Intelligence", "FinTech", "HealthTech", "EdTech", "E-Commerce", "Cybersecurity", "Digital Transformation"],
    technologies: ["AI & Machine Learning", "Cloud & DevOps", "Custom Software", "Mobile Development"],
    location: "Karachi, Pakistan",
    category: "Software Development",
  },
  {
    name: "TECH Pakistan",
    slug: "tech-pakistan",
    website: "",
    description:
      "Karachi-based IT services organisation working across multiple verticals, with a focus on FinTech and software development & SaaS.",
    companyType: "Software & Services",
    sectors: ["FinTech", "Digital Transformation"],
    technologies: ["Custom Software"],
    location: "Karachi, Pakistan",
    category: "Software Development",
  },
  {
    name: "AI Next Technologies",
    slug: "ai-next-technologies",
    logo: "/image/members/ai-next-technologies.png",
    website: "https://ai-next.co",
    description:
      "Karachi-based team of AI experts delivering AI-powered automation and data-driven solutions, with a focus on banking and financial institutions, retail, healthcare, and insurance.",
    companyType: "Software & Services",
    sectors: ["Artificial Intelligence", "FinTech", "HealthTech", "E-Commerce", "Digital Transformation"],
    technologies: ["AI & Machine Learning", "Automation", "Data Analytics", "Custom Software"],
    location: "Karachi, Pakistan",
    category: "AI & Automation",
  },
  {
    name: "Call IT Studio",
    slug: "call-it-studio",
    logo: "/image/members/call-it-studio.png",
    website: "https://callitweb-25c85.web.app",
    description:
      "Lahore-based full-service creative and digital agency providing branding, graphic design, social media management, content creation, digital marketing, SEO, website design and development, event management, and telemarketing.",
    companyType: "Software & Services",
    sectors: ["Digital Transformation", "E-Commerce"],
    technologies: ["Custom Software", "Data Analytics"],
    location: "Lahore, Pakistan",
    category: "Software Development",
  },
  {
    name: "ALGORYC",
    slug: "algoryc",
    logo: "/image/members/algoryc.png",
    website: "https://www.algoryc.com",
    description:
      "Islamabad-based AI and full-stack software house building ML pipelines, NLP and computer-vision engines, cloud and automation solutions; operates as the AI subsidiary of Eastern Tech.",
    companyType: "Software & Services",
    sectors: ["Artificial Intelligence", "Digital Transformation"],
    technologies: ["AI & Machine Learning", "Cloud & DevOps", "Automation", "Custom Software"],
    location: "Islamabad, Pakistan",
    category: "AI & Automation",
  },
  {
    name: "Agency 360 Advertisers",
    slug: "agency-360-advertisers",
    website: "https://agency360ads.com",
    description:
      "Rawalpindi-based digital advertising and branding agency running social-media marketing, creative design and data-driven campaigns to grow brands online.",
    companyType: "Software & Services",
    sectors: ["Digital Transformation", "E-Commerce"],
    technologies: ["Data Analytics", "Custom Software"],
    location: "Rawalpindi, Pakistan",
    category: "Software Development",
  },
  {
    name: "Agility & Innovation",
    slug: "agility-innovation",
    logo: "/image/members/agility-innovation.png",
    website: "https://www.agiinnov.com",
    description:
      "Islamabad-based custom software, web and mobile app development house with ERP and managed information-security practices, plus GPS asset-tracking and mobile-device-management products.",
    companyType: "Software & Services",
    sectors: ["Cybersecurity", "Digital Transformation"],
    technologies: ["Custom Software", "Mobile Development", "IoT", "Cloud & DevOps"],
    location: "Islamabad, Pakistan",
    category: "Software Development",
  },
  {
    name: "AG Consultraining",
    slug: "ag-consultraining",
    logo: "/image/members/ag-consultraining.webp",
    website: "https://agconsultraining.com",
    description:
      "Karachi-based IT consultancy and training firm specialising in ERP (Odoo/SAP), business intelligence (Power BI, Tableau) and LMS, with staffing, payroll and HR outsourcing.",
    companyType: "Consultancy",
    sectors: ["EdTech", "Digital Transformation"],
    technologies: ["Data Analytics", "Custom Software"],
    location: "Karachi, Pakistan",
    category: "Consulting",
  },
  {
    name: "Artificial Intelligence Education Foundation (AIEF)",
    slug: "aief",
    logo: "/image/members/aief.png",
    website: "https://www.aiedu.org.pk",
    description:
      "Lahore-based non-profit AI education foundation running AI certifications, international AI championships, workshops and member chapters to develop AI talent across Pakistan.",
    companyType: "Academic & Research",
    sectors: ["Artificial Intelligence", "EdTech"],
    technologies: ["AI & Machine Learning"],
    location: "Lahore, Pakistan",
    category: "AI & Automation",
  },
  {
    name: "Atom Global",
    slug: "atom-global",
    logo: "/image/members/atom-global.png",
    website: "https://atom-global.com",
    description:
      "Islamabad-based digital-transformation and customer-experience consultancy building AI- and IoT-enabled business and transaction/payment solutions.",
    companyType: "Consultancy",
    sectors: ["Artificial Intelligence", "FinTech", "Digital Transformation"],
    technologies: ["AI & Machine Learning", "IoT", "Automation"],
    location: "Islamabad, Pakistan",
    category: "Consulting",
  },
  {
    name: "AutomatIQ Labs",
    slug: "automatiq-labs",
    logo: "/image/members/automatiq-labs.webp",
    website: "https://automatiqlabs.com",
    description:
      "Lahore-based done-for-you AI automation agency building custom AI workflows, chatbots and voice agents to eliminate repetitive business tasks.",
    companyType: "Software & Services",
    sectors: ["Artificial Intelligence", "Digital Transformation"],
    technologies: ["AI & Machine Learning", "Automation"],
    location: "Lahore, Pakistan",
    category: "AI & Automation",
  },
  {
    name: "Aibuz",
    slug: "aibuz",
    website: "https://aibuz.org",
    description:
      "Karachi-based end-to-end ICT services and outsourcing provider covering hosting and domains, internet marketing, media production, enterprise services and IT outsourcing.",
    companyType: "Software & Services",
    sectors: ["Digital Transformation", "E-Commerce"],
    technologies: ["Cloud & DevOps", "Custom Software"],
    location: "Karachi, Pakistan",
    category: "Software Development",
  },
  {
    name: "AlphaVenture",
    slug: "alphaventure",
    logo: "/image/members/alphaventure.png",
    website: "https://alphaventure.com",
    description:
      "Karachi-based AI and digital product studio that designs and ships brands, websites and software platforms spanning legal AI, SaaS, e-pharmacy and enterprise data tools.",
    companyType: "SaaS / Platform",
    sectors: ["Artificial Intelligence", "HealthTech", "Digital Transformation"],
    technologies: ["AI & Machine Learning", "Custom Software", "Data Analytics"],
    location: "Karachi, Pakistan",
    category: "AI & Automation",
  },
  {
    name: "Alif Analytics",
    slug: "alif-analytics",
    logo: "/image/members/alif-analytics.png",
    website: "https://alifanalytics.com",
    description:
      "Islamabad-based technology consultancy offering advisory and strategy, software development, cloud DevOps, AI, data analytics and robotic process automation (RPA).",
    companyType: "Consultancy",
    sectors: ["Artificial Intelligence", "Digital Transformation"],
    technologies: ["AI & Machine Learning", "Cloud & DevOps", "Data Analytics", "Automation"],
    location: "Islamabad, Pakistan",
    category: "Consulting",
  },
  {
    name: "AgileTech Studio",
    slug: "agiletech-studio",
    logo: "/image/members/agiletech-studio.png",
    website: "https://www.agiletechstudio.com",
    description:
      "Lahore-based IT services house delivering custom software, mobile apps, web development, analytics, cloud/DevOps and product design.",
    companyType: "Software & Services",
    sectors: ["Digital Transformation"],
    technologies: ["Custom Software", "Mobile Development", "Cloud & DevOps", "Data Analytics"],
    location: "Lahore, Pakistan",
    category: "Software Development",
  },
  {
    name: "AURA Concept Creator",
    slug: "aura-concept-creator",
    logo: "/image/members/aura-concept-creator.png",
    website: "https://auraconceptcreator.com",
    description:
      "Karachi-based digital marketing and creative agency offering SEO, PPC, social-media management, content creation, design and video editing.",
    companyType: "Software & Services",
    sectors: ["Digital Transformation", "E-Commerce"],
    technologies: ["Data Analytics", "Custom Software"],
    location: "Karachi, Pakistan",
    category: "Software Development",
  },
  {
    name: "Agnitus Technology",
    slug: "agnitus-technology",
    logo: "/image/members/agnitus-technology.png",
    website: "https://www.agnitustechnology.com",
    description:
      "Islamabad-based outsourced software and web development house (.NET, PHP, SQL, cloud and mobile apps) also offering white-label services and SEO.",
    companyType: "Software & Services",
    sectors: ["Digital Transformation"],
    technologies: ["Custom Software", "Cloud & DevOps", "Mobile Development"],
    location: "Islamabad, Pakistan",
    category: "Software Development",
  },
  {
    name: "AnZ Technologies",
    slug: "anz-technologies",
    logo: "/image/members/anz-technologies.png",
    website: "https://www.anztech.net",
    description:
      "Lahore-based IT consulting and corporate-training firm handling pre-sales, solution design, documentation and bid/tender management, with training in blockchain, AI and data analytics.",
    companyType: "Consultancy",
    sectors: ["Artificial Intelligence", "EdTech", "Digital Transformation"],
    technologies: ["Blockchain", "AI & Machine Learning", "Data Analytics"],
    location: "Lahore, Pakistan",
    category: "Consulting",
  },
  {
    name: "Analytix Camp",
    slug: "analytix-camp",
    logo: "/image/members/analytix-camp.png",
    website: "https://analytixcamp.com",
    description:
      "Karachi-based online training platform offering certification courses in data analytics, Excel, Power BI, SQL, Python, financial modeling and AI.",
    companyType: "Academic & Research",
    sectors: ["Artificial Intelligence", "EdTech"],
    technologies: ["Data Analytics", "AI & Machine Learning"],
    location: "Karachi, Pakistan",
    category: "Consulting",
  },
  {
    name: "Quantum Bytes Solutions",
    slug: "quantum-bytes-solutions",
    website: "https://q-bsolutions.com",
    description:
      "Faisalabad-based technology company delivering AI and machine learning, software development and SaaS, FinTech and digital-banking solutions, and cloud computing and infrastructure to help businesses build scalable digital systems.",
    companyType: "Software & Services",
    sectors: ["Artificial Intelligence", "FinTech", "Digital Transformation"],
    technologies: ["AI & Machine Learning", "Custom Software", "Cloud & DevOps"],
    location: "Faisalabad, Pakistan",
    category: "AI & Automation",
  },
  {
    name: "Arbob Tech Team",
    slug: "arbob-tech-team",
    website: "https://arbobtechteam.com",
    description:
      "Gilgit-based technology company specialising in software development, AI, cloud computing, web and mobile development, DevOps and digital marketing, with products including 8HR (HRMS) and 8POS (restaurant point-of-sale).",
    companyType: "Software & Services",
    sectors: ["Artificial Intelligence", "Digital Transformation"],
    technologies: ["AI & Machine Learning", "Cloud & DevOps", "Custom Software", "Mobile Development"],
    location: "Gilgit, Pakistan",
    category: "Software Development",
  },
  {
    name: "AlphaBOLD",
    slug: "alphabold",
    logo: "/image/members/alphabold.webp",
    website: "https://www.alphabold.com",
    description:
      "Lahore-based Microsoft-focused digital transformation partner delivering consulting, implementation (Dynamics 365, NetSuite), custom development (Power Apps, Azure), managed services, and AI-driven data analytics and Power BI solutions.",
    companyType: "Consultancy",
    sectors: ["Artificial Intelligence", "Digital Transformation"],
    technologies: ["AI & Machine Learning", "Cloud & DevOps", "Custom Software", "Data Analytics"],
    location: "Lahore, Pakistan",
    category: "Consulting",
  },
  {
    name: "Alliance Tech",
    slug: "alliance-tech",
    logo: "/image/members/alliance-tech.jpg",
    website: "https://alliancetechltd.uk",
    description:
      "Lahore-based technology and digital transformation company providing AI-powered business solutions, custom web and mobile app development, healthcare marketing, SEO, AI chatbots, CRM integration, e-commerce and cloud solutions.",
    companyType: "Software & Services",
    sectors: ["Artificial Intelligence", "HealthTech", "Digital Transformation"],
    technologies: ["AI & Machine Learning", "Automation", "Custom Software", "Mobile Development"],
    location: "Lahore, Pakistan",
    category: "AI & Automation",
  },
  {
    name: "A2Z Creatorz",
    slug: "a2z-creatorz",
    logo: "/image/members/a2z-creatorz.png",
    website: "https://www.a2zcreatorz.com",
    description:
      "Karachi-based digital transformation company with 18+ years of experience delivering custom software, web and mobile applications, e-commerce, AI and chatbots, cloud services, cybersecurity and public-sector portals across Pakistan, the UK, UAE, Saudi Arabia and Canada.",
    companyType: "Software & Services",
    sectors: ["Artificial Intelligence", "E-Commerce", "Cybersecurity", "Digital Transformation"],
    technologies: ["AI & Machine Learning", "Cloud & DevOps", "Custom Software", "Mobile Development"],
    location: "Karachi, Pakistan",
    category: "Software Development",
  },
  {
    name: "Bitsclan IT Solutions",
    slug: "bitsclan-it-solutions",
    logo: "/image/members/bitsclan.svg",
    website: "https://www.bitsclan.com",
    description:
      "Lahore-based IT firm delivering AI-powered business automations, intelligent workflows and advanced web and mobile app solutions, blending innovation with proven IT strategies for scalable growth.",
    companyType: "Software & Services",
    sectors: ["Artificial Intelligence", "FinTech", "Digital Transformation"],
    technologies: ["AI & Machine Learning", "Automation", "Custom Software", "Cloud & DevOps"],
    location: "Lahore, Pakistan",
    category: "AI & Automation",
  },
  {
    name: "Bharmal System Designers",
    slug: "bharmal-system-designers",
    logo: "/image/members/bharmal-systems.png",
    website: "https://bharmalsystems.com",
    description:
      "Karachi-based IT services provider offering products such as a Financial Accounting System, HRMS, School Management System, CRM and LMS, alongside AI, mobile development, data analytics and web development services.",
    companyType: "Software & Services",
    sectors: ["Artificial Intelligence", "EdTech", "Digital Transformation"],
    technologies: ["Custom Software", "AI & Machine Learning", "Data Analytics", "Mobile Development"],
    location: "Karachi, Pakistan",
    category: "Software Development",
  },
];

/* ── Filter option lists ──────────────────────────────────────── */

export const companyTypes = [
  "Software & Services",
  "SaaS / Platform",
  "Consultancy",
  "Investment & VC",
  "Academic & Research",
  "Government & Policy",
];

export const sectorOptions = [
  "Artificial Intelligence",
  "FinTech",
  "HealthTech",
  "EdTech",
  "E-Commerce",
  "Digital Transformation",
  "Cybersecurity",
  "CleanTech",
  "AgriTech",
];

export const technologyOptions = [
  "AI & Machine Learning",
  "Blockchain",
  "Cloud & DevOps",
  "IoT",
  "Automation",
  "Custom Software",
  "Data Analytics",
  "Mobile Development",
];
