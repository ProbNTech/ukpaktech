"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const tradeDelegationIntro = "The UK-Pakistan Tech Council organises trade delegations to connect technology companies with key stakeholders, potential partners, investors, and government representatives in both the UK and Pakistan. These delegations provide members with a strategic platform to explore new markets, forge partnerships, and drive business growth.";

const tradeDelegationBenefits = [
  { title: "Market Access", description: "Gain first-hand exposure to emerging opportunities in cross-border technology markets.", color: "#2563EB" },
  { title: "Business Development", description: "Meet corporates, investors, regulators, and policymakers to explore collaborations and partnerships.", color: "#22C55E" },
  { title: "Networking Opportunities", description: "Build relationships with industry leaders, innovators, and decision-makers.", color: "#C41E3A" },
  { title: "Insights & Intelligence", description: "Learn about local market trends, regulatory frameworks, and business opportunities.", color: "#2563EB" },
];

const exhibitionIntro = "The UK-Pakistan Tech Council organises and participates in high-impact exhibition events to showcase innovation, foster collaboration, and create business opportunities across the UK and Pakistan. These events provide members with a platform to present their technology solutions, connect with potential clients and partners, and gain visibility in key markets.";

const exhibitionBenefits = [
  { title: "Showcase Your Solutions", description: "Present software, platforms, and digital products to a targeted audience of corporates, investors, and industry leaders.", color: "#2563EB" },
  { title: "Network & Collaborate", description: "Meet decision-makers, potential partners, and cross-border stakeholders.", color: "#22C55E" },
  { title: "Gain Market Insights", description: "Stay updated on emerging trends, technologies, and opportunities in both markets.", color: "#C41E3A" },
  { title: "Build Brand Visibility", description: "Increase awareness of your company\u2019s expertise and innovation capabilities.", color: "#2563EB" },
];

const exhibitionWhyItMatters = "Exhibition events create a dynamic environment where innovation meets opportunity. By participating, members can accelerate business growth, forge strategic partnerships, and strengthen their presence in the UK-Pakistan technology corridor. Connect. Showcase. Grow.";

const offerItems = [
  { title: "Event Organisation", description: "End-to-end planning and execution of trade delegations and technology exhibitions.", color: "#2563EB" },
  { title: "Participant Matching", description: "Strategic matching of UK and Pakistan businesses for meaningful partnerships.", color: "#22C55E" },
  { title: "Venue Coordination", description: "Premium venues and facilities for exhibitions and networking events.", color: "#C41E3A" },
  { title: "Business Development", description: "Support for B2B meetings and partnership development opportunities.", color: "#2563EB" },
  { title: "Market Insights", description: "Access to market intelligence and cross-border business opportunities.", color: "#22C55E" },
  { title: "Growth Opportunities", description: "Platforms to showcase products and expand into new markets.", color: "#C41E3A" },
];

const benefits = [
  "Direct access to key decision-makers and industry leaders",
  "Opportunities to showcase products and services to targeted audiences",
  "Strategic networking with potential partners and clients",
  "Market insights and cross-border business intelligence",
  "Platform for establishing thought leadership",
];

const howItWorks = [
  { number: "01", title: "Register Interest", description: "Express your interest in upcoming delegations and exhibitions through the portal.", color: "#2563EB" },
  { number: "02", title: "Get Matched", description: "We connect you with relevant participants and opportunities aligned to your goals.", color: "#22C55E" },
  { number: "03", title: "Participate", description: "Join delegations and exhibitions to build partnerships and explore new markets.", color: "#C41E3A" },
];

const stats = [
  { value: "20+", label: "delegations facilitated", color: "#2563EB" },
  { value: "500+", label: "participants connected", color: "#22C55E" },
  { value: "12+", label: "exhibitions supported", color: "#C41E3A" },
  { value: "2", label: "bilateral markets", color: "#2563EB" },
];

export default function TradeDelegationsAndExhibitionsClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-[#EEECEA]">
      {/* ── Hero Section ── */}
      <PageHero
        label="UPTECH Ecosystem"
        title="Trade Delegations & Exhibitions"
        subtitle="Facilitating cross-border trade delegations and technology exhibitions to strengthen UK–Pakistan partnerships."
        image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=2400&q=85&auto=format&fit=crop"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/events">View Events</ShinyButton>
          <Button href="/contact" variant="glass">
            Contact Us
          </Button>
        </div>
      </PageHero>

      {/* ── Stats Bar ── */}
      <section className="relative bg-[#EEECEA]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div
                  className="font-heading font-extrabold text-3xl sm:text-4xl mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <p className="text-[#5A5F72] text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trade Delegation Section ── */}
      <section className="relative bg-[#EEECEA]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <div className="max-w-4xl mb-8">
              <SectionHeader
                label="Trade Delegations"
                title="Connecting Technology Companies Across Borders"
                color="blue"
                subtitle={tradeDelegationIntro}
              />
            </div>

            {/* Trade Delegation For Members */}
            <div className="mb-5">
              <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-4">For Members</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {tradeDelegationBenefits.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative rounded-2xl border border-[#D8D5CF]/60 p-px">
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="group relative bg-white rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 shadow-sm"
                >
                  <div className="p-6">
                    <h4 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2" style={{ color: item.color }}>
                      {item.title}
                    </h4>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-[#5A5F72] text-base leading-relaxed">{item.description}</p>
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Exhibition Events Section ── */}
      <section className="relative bg-[#E8E6E3]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <div className="max-w-4xl mb-8">
              <SectionHeader
                label="Exhibition Events"
                title="High-Impact Exhibition Events"
                color="green"
                subtitle={exhibitionIntro}
              />
            </div>

            {/* Exhibition For Members */}
            <div className="mb-5">
              <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-4">For Members</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {exhibitionBenefits.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative rounded-2xl border border-[#D8D5CF]/60 p-px">
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="group relative bg-white rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 shadow-sm"
                >
                  <div className="p-6">
                    <h4 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2" style={{ color: item.color }}>
                      {item.title}
                    </h4>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-[#5A5F72] text-base leading-relaxed">{item.description}</p>
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Why It Matters */}
            <div className="relative bg-white border border-[#D8D5CF] shadow-md rounded-2xl p-8 overflow-hidden">
              <h3 className="relative font-heading font-bold text-[#1C1F2E] text-lg mb-4">Why It Matters</h3>
              <div className="relative h-px bg-[#D8D5CF] mb-4" />
              <p className="relative text-[#5A5F72] text-lg leading-relaxed">
                {exhibitionWhyItMatters}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── What We Offer ── */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <div className="mb-8">
              <SectionHeader
                label="What We Offer"
                title="Services and Support"
                color="green"
                subtitle="Comprehensive support for trade delegations and technology exhibitions from planning to execution."
              />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offerItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative rounded-2xl border border-[#D8D5CF]/60 p-px">
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="group relative bg-white rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 shadow-sm"
                >
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#22C55E] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-[#5A5F72] text-base leading-relaxed">{item.description}</p>
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Benefits & How It Works ── */}
      <section className="relative bg-[#E8E6E3]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <SectionHeader
                  label="Participation"
                  title="Benefits of Participating"
                  color="red"
                  subtitle="Why join our trade delegations and exhibitions."
                />
                <ul className="space-y-0">
                  {benefits.map((item) => (
                    <li key={item} className="flex items-start gap-3 py-4 border-b border-[#D8D5CF] last:border-b-0">
                      <CheckCircle2 className="w-4 h-4 text-[#C41E3A] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-[#3D4152] text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <SectionHeader
                  label="Process"
                  title="How It Works"
                  color="blue"
                  subtitle="Three simple steps to join our delegations and exhibitions."
                />
                <div className="space-y-0">
                  {howItWorks.map((step) => (
                    <div key={step.number} className="group flex gap-6 py-5 border-t border-[#D8D5CF] last:border-b">
                      <div className="relative flex-shrink-0">
                        <div
                          className="relative w-10 h-10 rounded-full flex items-center justify-center text-base font-bold border"
                          style={{
                            background: `${step.color}15`,
                            borderColor: `${step.color}50`,
                            color: step.color,
                          }}
                        >
                          {step.number}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-[#1C1F2E] text-base mb-1 group-hover:text-[#2563EB] transition-colors duration-200">
                          {step.title}
                        </h4>
                        <p className="text-[#5A5F72] text-base leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CEO at Summit ── */}
      <section className="relative bg-[#EEECEA]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
              <div>
                <SectionHeader
                  label="On the Ground"
                  title="Leading From the Front"
                  color="blue"
                />
                <p className="text-[#3D4152] text-lg leading-relaxed">
                  UPTECH Founder &amp; CEO Khalil Choudhary personally leads trade delegations and represents the Council at international summits, ensuring our members have direct access to decision-makers and opportunities at the highest level.
                </p>
              </div>
              <div className="relative aspect-[4/3] max-h-[480px] overflow-hidden rounded-xl border border-[#D8D5CF] shadow-md">
                <Image src="/image/ceo/khalil-choudhary-summit.jpg" alt="Khalil Choudhary at international business summit" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 600px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <GlobalCTA
        label="Get Involved"
        title="Join Our Next Delegation"
        subtitle="Connect with technology leaders and explore cross-border opportunities through UPTECH trade delegations and exhibitions."
        primaryButtonText="View Events"
        primaryButtonLink="/events"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}
