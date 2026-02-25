import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
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
        image="/image/london-images/corporate-office-building.jpg"
      />

      {/* Stats Bar */}
      <section className="relative z-[1] bg-[#1C1F2E]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "6", label: "Core Services" },
              { value: "500+", label: "Companies Supported" },
              { value: "15+", label: "Countries Reached" },
              { value: "£150M+", label: "Value Created" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl mb-1">{stat.value}</p>
                <p className="text-white/60 text-xs sm:text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <Section variant="light">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-3">What we offer</p>
            <h2 className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl leading-snug mb-6">
              End-to-End Support for the UK–Pakistan Tech Ecosystem
            </h2>
            <p className="text-[#3D4152] text-base leading-relaxed mb-5">
              UPTECH provides a comprehensive suite of services designed to support technology companies, startups, and professionals at every stage of their journey. From business networks and mentorship to investment support and overseas employment — we deliver the infrastructure, connections, and expertise that drive cross-border growth.
            </p>
            <p className="text-[#3D4152] text-base leading-relaxed">
              Each service is delivered directly by UPTECH or through our vetted partner network, ensuring quality, compliance, and real results.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Services Grid */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Explore"
            title="All Services"
            subtitle="Click on any service to learn more about how we can help."
          />
          <ServiceGrid />
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">Get Started</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Ready to Access Our Full Suite of Services?
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Join UPTECH and unlock access to business networks, mentorship, investment support, marketing, employment, and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>Become a Member</Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>Contact Us</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
