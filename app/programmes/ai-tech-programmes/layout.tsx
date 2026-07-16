import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Tech Programmes",
  description: "Explore UPTECH's AI and technology training programmes, certifications, and career development opportunities.",
  openGraph: {
    title: "AI & Tech Programmes | UPTECH",
    description: "Explore UPTECH's AI and technology training programmes and certifications.",
  },
};

export default function ProgramsAITechLayout({ children }: { children: React.ReactNode }) {
  return children;
}
