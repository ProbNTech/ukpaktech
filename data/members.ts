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
