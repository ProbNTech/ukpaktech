import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skill Development Centre",
  description: "UPTECH's Skill Development Centre offering professional training, workshops, and skill-building programmes for UK–Pakistan tech professionals.",
  openGraph: {
    title: "Skill Development Centre | UPTECH",
    description: "Professional training and skill-building programmes for UK–Pakistan tech professionals.",
  },
};

export default function SkillDevLayout({ children }: { children: React.ReactNode }) {
  return children;
}
