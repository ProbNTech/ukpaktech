"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { Building2, Landmark, FileCheck, FileText, Shield, Scale, Database } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Company Registration",
    description:
      "Assistance and guidance for the registration of startups in the UK — from formation to compliance.",
  },
  {
    icon: Landmark,
    title: "Companies House Integration",
    description:
      "Easily update shareholder records and automatically file with Companies House, keeping your cap table accurate, compliant, and always up to date.",
  },
  {
    icon: FileCheck,
    title: "S/EIS Advance Assurance",
    description:
      "Check your eligibility and apply seamlessly. Once you've raised funds, submit compliance statements — we handle all correspondence with HMRC.",
  },
  {
    icon: FileText,
    title: "Investment Documents",
    description:
      "All investment agreements needed to execute your round — including term sheets, Advance Subscription Agreements, and convertible loan notes.",
  },
  {
    icon: Shield,
    title: "Intellectual Property Rights",
    description:
      "Protect your creations in the growing trend of piracy. We provide intellectual and property rights to safeguard your startup.",
  },
  {
    icon: Scale,
    title: "Legal & Accounting Support",
    description:
      "Sound legal and accounting advice plays an important role in smooth business operations. We provide the necessary support for seamless development.",
  },
  {
    icon: Database,
    title: "Data Rooms",
    description:
      "Share key documents with prospective investors via a secure digital vault — organised, accessible, and confidential.",
  },
];

export default function BusinessSupportPage() {
  return (
    <div>
      <PageHero
        title="Business Support Services"
        subtitle="From company registration to legal support, IP protection to data rooms — we provide the essential business infrastructure startups need to succeed."
        image="/image/london-images/london-eye-thames.jpg"
      >
        <div className="flex flex-wrap gap-4 mt-2">
          <Button href="/membership" variant="glass" showArrow>Access Services</Button>
          <Button href="/contact" variant="ghost">Get in Touch</Button>
        </div>
      </PageHero>

      {/* Intro */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Offered directly and through our partners"
            title="Essential Business Infrastructure"
            subtitle="These services are designed to remove the operational friction that slows down startups and growing businesses."
          />
        </AnimatedSection>
      </Section>

      {/* Services Grid */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white border border-[#D8D5CF] rounded p-6 flex flex-col">
                  <Icon className="w-7 h-7 text-[#2563EB] mb-4" />
                  <h3 className="font-heading font-bold text-[#1C1F2E] mb-2">{service.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#3D4152] leading-relaxed flex-1">{service.description}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="light">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-2xl text-[#1C1F2E] mb-4">Need Business Support?</h2>
            <p className="text-[#3D4152] leading-relaxed mb-6">
              Whether you&apos;re registering a company, protecting IP, or preparing for investment — our team and partners are here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/membership" variant="primary" showArrow>Become a Member</Button>
              <Button href="/contact" variant="secondary">Contact Us</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
