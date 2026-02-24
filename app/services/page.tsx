import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceGrid } from "@/components/ServiceGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore UPTECH's comprehensive services — business networks, SME support, digital marketing, overseas employment, mentorship, and business support.",
  openGraph: {
    title: "Services | UPTECH",
    description:
      "Comprehensive services driving UK–Pakistan technology collaboration and growth.",
  },
};

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive support to help technology companies, startups, and professionals connect, grow, and succeed across the UK–Pakistan corridor."
        image="/image/london-images/london-modern-buildings.jpg"
      />
      <Section>
        <SectionHeader label="What we offer" title="All Services" />
        <ServiceGrid />
      </Section>
    </div>
  );
}
