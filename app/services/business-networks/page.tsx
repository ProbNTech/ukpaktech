"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2, Globe, Handshake, BarChart3, Users, Target, Lightbulb, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const stats = [
  { value: "60+", label: "Countries Connected" },
  { value: "500+", label: "Partner Organisations" },
  { value: "3,000+", label: "Business Introductions" },
  { value: "£50M+", label: "Deals Facilitated" },
];

const whyChooseUs = [
  { icon: Handshake, title: "Strategic Connections", description: "Every event brings together the right founders and the right investors who can help them scale." },
  { icon: Globe, title: "Comprehensive Support", description: "From event design to investor outreach, branding, post-event follow-up and deal tracking — we handle every step." },
  { icon: BarChart3, title: "Proven Results", description: "Our track record of funding success speaks for itself across multiple markets." },
  { icon: Users, title: "Global Ecosystem", description: "A growing network of VCs, angels, incubators, and ecosystem partners across continents." },
  { icon: Target, title: "Data-Driven Insights", description: "We use analytics to identify high-potential startups and investor interests." },
  { icon: Lightbulb, title: "Cross-Border Expertise", description: "Deep understanding of both UK and Pakistan markets, regulations, and business cultures." },
];

const partners = [
  { title: "Venture Capital & Private Equity Firms", description: "Access to tier-1 VC funds and PE firms across London, Karachi, and global hubs." },
  { title: "Angel Networks & Family Offices", description: "Curated introductions to angel investors and family offices seeking tech opportunities." },
  { title: "Government Startup Missions", description: "Partnerships with government-backed trade missions and startup support programs." },
  { title: "University Incubators & Accelerators", description: "Collaboration with leading academic incubation and acceleration programs." },
  { title: "Corporate Innovation & R&D Divisions", description: "Connect with corporate innovation labs and R&D divisions seeking partnerships." },
];

const processSteps = [
  { number: "01", title: "Discovery", description: "We learn about your business, goals, target markets, and growth stage to understand your needs.", outcome: "Tailored profile created" },
  { number: "02", title: "Matching", description: "Using our database and network intelligence, we identify the most relevant connections for your business.", outcome: "Curated shortlist prepared" },
  { number: "03", title: "Introduction", description: "We facilitate warm introductions through events, meetings, or direct outreach to matched partners.", outcome: "Meetings arranged" },
  { number: "04", title: "Follow-Through", description: "We track outcomes, facilitate follow-ups, and ensure connections translate into tangible business results.", outcome: "Deals tracked & supported" },
];

const targetMarket = [
  "Early-stage startups (Seed to Series A)",
  "Venture capital firms, angel investors, and family offices",
  "Accelerators, incubators, and innovation hubs",
  "Corporate innovation and CSR programs",
  "Government and development agencies supporting entrepreneurship",
];

const faqs = [
  { question: "How do I access the business network?", answer: "All UPTECH members get automatic access to our business network. Once you join, our team will schedule an onboarding call to understand your needs and start making connections." },
  { question: "What markets do you cover?", answer: "Our primary focus is the UK–Pakistan corridor, but our network extends across Europe, Middle East, Africa, and North America through our Enterprise Europe Network partnership and global investor relationships." },
  { question: "How are introductions facilitated?", answer: "We facilitate introductions through a mix of curated events, one-to-one meetings, virtual connects, and our partner platform. Each introduction is warm and contextualised to maximise success." },
  { question: "Is there a cost beyond membership?", answer: "Core networking services are included in your UPTECH membership. Premium services such as bespoke matchmaking, dedicated advisory, and event sponsorships are available as add-ons." },
];

export default function BusinessNetworksPage() {
  return (
    <div>
      <PageHero
        title="Business Networks"
        subtitle="Access the world's largest business network with strategic connections, comprehensive advice, and tailored market support across the UK and international markets."
        image="/image/london-images/business-networking-event.jpg"
      >
        <div className="flex flex-wrap gap-4 mt-2">
          <Button href="/membership" variant="glass" showArrow>Become a Member</Button>
          <Button href="/contact" variant="ghost">Get in Touch</Button>
        </div>
      </PageHero>

      {/* Stats Bar */}
      <section className="relative z-[1] bg-[#1C1F2E]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl mb-1">{stat.value}</p>
                <p className="text-white/60 text-xs sm:text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro — 2-column with sidebar */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-3">Overview</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl leading-snug mb-6">
                The World&apos;s Largest Business Network — Tailored for the UK–Pakistan Tech Corridor
              </h2>
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                Our specialists provide access to comprehensive and tailored advice covering both the UK and international markets. They build on a heritage of collaboration with the Enterprise Europe Network, the most extensive association of innovation and growth support organisations around the world.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                This advice ranges from sourcing and establishing connections with new collaborators and potential partners, to information on local regulations and market entry strategies.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed">
                Whether you&apos;re a startup seeking your first international client, or an enterprise expanding into new geographies — our network delivers the introductions, insights, and institutional support you need to succeed.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white border border-[#D8D5CF] p-8 sticky top-8">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-[#2563EB]" />
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">Enterprise Europe Network</h3>
                </div>
                <div className="h-px bg-[#1C1F2E]/15 mb-4" />
                <p className="text-sm text-[#3D4152] leading-relaxed mb-4">
                  Access live global partnering opportunities through the Enterprise Europe Network — the most extensive association of innovation and growth support organisations worldwide.
                </p>
                <ul className="space-y-2 mb-5">
                  {["Live partnering database", "Cross-border advisory", "Innovation audits", "Market intelligence"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#3D4152]">
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button href="/contact" variant="secondary" showArrow>Explore Opportunities</Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Why Choose Us */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Advantages"
            title="Why Choose Us"
            subtitle="Six reasons organisations trust UPTECH to build their international network."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#2563EB] mb-4" />
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{item.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#3D4152] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* How It Works */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Process"
            title="How It Works"
            subtitle="A structured, results-driven approach to building your international network."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="border-t-2 border-[#2563EB] pt-5">
                <span className="text-xs font-bold text-[#2563EB] tabular-nums block mb-2">{step.number}</span>
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{step.title}</h3>
                <p className="text-[#3D4152] text-sm leading-relaxed mb-3">{step.description}</p>
                <span className="text-xs font-semibold text-[#22C55E]">&rarr; {step.outcome}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Partners & Target Market — 2-column */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                label="Collaborations"
                title="Our Partners"
                subtitle="We work with the best in the ecosystem to deliver results."
              />
              <div className="space-y-4">
                {partners.map((partner) => (
                  <div key={partner.title} className="bg-white border border-[#D8D5CF] rounded p-5 hover:border-[#2563EB]/40 transition-colors duration-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-heading font-bold text-[#1C1F2E] text-sm mb-1">{partner.title}</h4>
                        <p className="text-xs text-[#3D4152] leading-relaxed">{partner.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader
                label="Audience"
                title="Who Is This For"
                subtitle="Our network is designed for organisations at every growth stage."
              />
              <ul className="space-y-0">
                {targetMarket.map((item) => (
                  <li key={item} className="flex items-start gap-3 py-4 border-b border-[#1C1F2E]/10 last:border-b-0">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[#3D4152] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* FAQ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about UPTECH Business Networks."
          />
          <FAQSection faqs={faqs} />
        </AnimatedSection>
      </Section>

      {/* CTA — Dark */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">Join the Network</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Ready to Expand Your Network Across Continents?
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Join the UPTECH business network and unlock strategic connections, market insights, and partnership opportunities across the UK, Pakistan, Europe, Middle East, and Africa.
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

function FAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={faq.question} className="border-t border-[#1C1F2E]/15 last:border-b">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between py-5 text-left gap-4"
          >
            <span className="font-heading font-semibold text-[#1C1F2E] text-base">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-[#7A7E8F] flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
            />
          </button>
          {openIndex === index && (
            <div className="pb-5 text-[#3D4152] text-sm leading-relaxed">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
