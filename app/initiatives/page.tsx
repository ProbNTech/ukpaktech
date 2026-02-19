import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { InitiativeGrid } from "@/components/InitiativeGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Initiatives",
  description: "Explore UPTECH's flagship initiatives including People AI, TechMart Global, and more.",
};

export default function InitiativesPage() {
  return (
    <div>
      <PageHero
        title="Initiatives"
        subtitle="UPTECH's flagship initiatives driving innovation and collaboration between the UK and Pakistan."
        image="/image/london-images/6.jpg"
      />
      <Section>
        <SectionHeader label="Our work" title="All Initiatives" />
        <InitiativeGrid />
      </Section>
    </div>
  );
}
