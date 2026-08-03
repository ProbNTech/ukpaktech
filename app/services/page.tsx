import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { ServiceGrid } from "@/components/ServiceGrid";
import type { Metadata } from "next";
import { GlobalCTA } from "@/components/GlobalCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore UPTECH's comprehensive services, business networks, SME support, digital marketing, overseas employment, mentorship, and business support.",
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
        image="/image/banners/services.jpg"
      />

      {/* Stats Bar */}
      <section className="bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "6", label: "Core Services", color: "#2563EB" },
              { value: "500+", label: "Companies Supported", color: "#22C55E" },
              { value: "15+", label: "Countries Reached", color: "#C41E3A" },
              { value: "£150M+", label: "Value Created", color: "#2563EB" },
            ].map((stat) => (
              <div key={stat.label} className="group relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl" style={{ background: `linear-gradient(to right, ${stat.color}, ${stat.color}60)` }} />
                <div
                  className="font-heading font-extrabold text-3xl sm:text-4xl mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <p className="text-[#5A5F72] text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <Section variant="light">
        <AnimatedSection>
          <div>
            <p className="text-base font-semibold text-[#2563EB] uppercase tracking-wider mb-3">What we offer</p>
            <h2 className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl leading-snug mb-6">
              End-to-End Support for the UK–Pakistan Tech Ecosystem
            </h2>
            <p className="text-[#3D4152] text-base leading-relaxed mb-5">
              UPTECH provides a comprehensive suite of services designed to support technology companies, startups, and professionals at every stage of their journey. From business networks and mentorship to investment support and overseas employment, we deliver the infrastructure, connections, and expertise that drive cross-border growth.
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
      <GlobalCTA
        label="Get Started"
        title="Ready to Access Our Full Suite of Services?"
        subtitle="Join UPTECH and unlock access to business networks, mentorship, investment support, marketing, employment, and more."
        primaryButtonText="Become a Member"
        primaryButtonLink="/membership"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}
