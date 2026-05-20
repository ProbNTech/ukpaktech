export interface Member {
  name: string;
  slug: string;
  logo?: string;
  website: string;
  description: string;
  companyType: string;
  sectors: string[];
  technologies: string[];
  location: string;
  founded?: string;
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
  },
  {
    name: "Velvonix",
    slug: "velvonix",
    website: "https://velvonix.com",
    description:
      "AI-powered digital agency delivering intelligent automation, custom software, mobile and web applications, and cloud infrastructure for businesses across finance, healthcare, retail, and education.",
    companyType: "Consultancy",
    sectors: ["Artificial Intelligence", "FinTech", "HealthTech", "Digital Transformation"],
    technologies: ["AI & Machine Learning", "Cloud & DevOps", "Custom Software", "Mobile Development"],
    location: "New York, USA",
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
