import {
  Brain,
  Boxes,
  Code2,
  Compass,
  Cloud,
  ShieldAlert,
  Cpu,
  Sparkles,
  Database,
  type LucideIcon,
} from "lucide-react";
import type { CompanyCategory } from "@/data/companies";

export interface CategoryStyle {
  /** Solid brand colour used for accents (top strip, chips). */
  color: string;
  /** Lighter tone used in glows. */
  accent: string;
  /** Two-stop CSS gradient string (used in linear-gradient(...)). */
  gradient: string;
  icon: LucideIcon;
  short: string;
}

const FALLBACK: CategoryStyle = {
  color: "#64748B",
  accent: "#94A3B8",
  gradient: "linear-gradient(135deg, #64748B 0%, #94A3B8 100%)",
  icon: Sparkles,
  short: "Technology",
};

/**
 * Single source of truth for category visual identity.
 * Used by CompanyCard, IndustriesSpotlight, FeaturedSpotlight, filter chips.
 */
export const CATEGORY_STYLE: Record<CompanyCategory, CategoryStyle> = {
  "AI & Automation": {
    color: "#1F4FD8",
    accent: "#6FA9FF",
    gradient: "linear-gradient(135deg, #1F4FD8 0%, #6FA9FF 100%)",
    icon: Brain,
    short: "AI agents, automation pipelines and ML systems.",
  },
  "SaaS Products": {
    color: "#01A95C",
    accent: "#6FE7B4",
    gradient: "linear-gradient(135deg, #01A95C 0%, #6FE7B4 100%)",
    icon: Boxes,
    short: "Productised platforms shipped to underserved markets.",
  },
  "Software Development": {
    color: "#06B6D4",
    accent: "#67E8F9",
    gradient: "linear-gradient(135deg, #06B6D4 0%, #67E8F9 100%)",
    icon: Code2,
    short: "Bespoke web, mobile and enterprise engineering.",
  },
  Consulting: {
    color: "#F59E0B",
    accent: "#FCD34D",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)",
    icon: Compass,
    short: "PMaaS, transformation and strategic delivery.",
  },
  Cybersecurity: {
    color: "#C41E3A",
    accent: "#FCA5A5",
    gradient: "linear-gradient(135deg, #C41E3A 0%, #FCA5A5 100%)",
    icon: ShieldAlert,
    short: "Pen-testing, SOC and managed security.",
  },
  Cloud: {
    color: "#6366F1",
    accent: "#A5B4FC",
    gradient: "linear-gradient(135deg, #6366F1 0%, #A5B4FC 100%)",
    icon: Cloud,
    short: "Cloud-native platforms and DevOps engineering.",
  },
  AI: {
    color: "#7C3AED",
    accent: "#C4B5FD",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #C4B5FD 100%)",
    icon: Cpu,
    short: "Applied AI services.",
  },
  IT: {
    color: "#475569",
    accent: "#94A3B8",
    gradient: "linear-gradient(135deg, #475569 0%, #94A3B8 100%)",
    icon: Sparkles,
    short: "IT support and managed services.",
  },
  Software: {
    color: "#0EA5E9",
    accent: "#7DD3FC",
    gradient: "linear-gradient(135deg, #0EA5E9 0%, #7DD3FC 100%)",
    icon: Code2,
    short: "Custom software delivery.",
  },
  Data: {
    color: "#22C55E",
    accent: "#86EFAC",
    gradient: "linear-gradient(135deg, #22C55E 0%, #86EFAC 100%)",
    icon: Database,
    short: "Data engineering and analytics.",
  },
};

export function getCategoryStyle(category: CompanyCategory | string | undefined): CategoryStyle {
  if (!category) return FALLBACK;
  return CATEGORY_STYLE[category as CompanyCategory] ?? FALLBACK;
}
