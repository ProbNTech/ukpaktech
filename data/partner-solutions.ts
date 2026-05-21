export interface PartnerSolution {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  image: string;
  href: string;
  partnerName: string;
  partnerSlug: string;
  partnerLogo?: string;
  featured: boolean;
  order: number;
}

export const partnerSolutions: PartnerSolution[] = [
  {
    id: 1,
    slug: "clinic-management-system",
    name: "Clinic Management System",
    tagline: "End-to-end clinic operations, digitised.",
    description:
      "A complete software suite for clinics and small hospitals — appointment scheduling, patient records, billing, pharmacy, and reporting in one secure platform built for Pakistani and UK healthcare workflows.",
    category: "HealthTech",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    href: "https://probntech.com",
    partnerName: "Prob N Tech",
    partnerSlug: "prob-n-tech",
    partnerLogo: "/image/members/prob-n-tech.svg",
    featured: true,
    order: 1,
  },
  {
    id: 2,
    slug: "letpsyc",
    name: "LetPsyc",
    tagline: "Practitioner-focused mental health assessments.",
    description:
      "Pakistan's first AI-assisted mental health assessment platform for psychologists and psychiatrists — structured intake, validated scales, and longitudinal patient tracking.",
    category: "HealthTech",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
    href: "https://lettech.pk",
    partnerName: "LetTech",
    partnerSlug: "lettech",
    partnerLogo: "/image/members/letTechLogo.png",
    featured: true,
    order: 2,
  },
  {
    id: 3,
    slug: "velvonix-automation-suite",
    name: "Velvonix Automation Suite",
    tagline: "AI workflows for operations teams.",
    description:
      "Plug-and-play AI automation for finance, retail, and healthcare operations — invoice processing, document intake, and customer triage that ship in days, not quarters.",
    category: "AI & Data",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    href: "https://velvonix.com",
    partnerName: "Velvonix",
    partnerSlug: "velvonix",
    partnerLogo: "/image/members/velvonix.png",
    featured: true,
    order: 3,
  },
];
