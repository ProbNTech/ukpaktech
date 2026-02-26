"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const tradeDelegationIntro = "The UK-Pakistan Tech Council organises trade delegations to connect technology companies with key stakeholders, potential partners, investors, and government representatives in both the UK and Pakistan. These delegations provide members with a strategic platform to explore new markets, forge partnerships, and drive business growth.";

const tradeDelegationBenefits = [
  { title: "Market Access", description: "Gain first-hand exposure to emerging opportunities in cross-border technology markets.", color: "#2563EB" },
  { title: "Business Development", description: "Meet corporates, investors, regulators, and policymakers to explore collaborations and partnerships.", color: "#22C55E" },
  { title: "Networking Opportunities", description: "Build relationships with industry leaders, innovators, and decision-makers.", color: "#8b5cf6" },
  { title: "Insights & Intelligence", description: "Learn about local market trends, regulatory frameworks, and business opportunities.", color: "#f59e0b" },
];

const exhibitionIntro = "The UK-Pakistan Tech Council organises and participates in high-impact exhibition events to showcase innovation, foster collaboration, and create business opportunities across the UK and Pakistan. These events provide members with a platform to present their technology solutions, connect with potential clients and partners, and gain visibility in key markets.";

const exhibitionBenefits = [
  { title: "Showcase Your Solutions", description: "Present software, platforms, and digital products to a targeted audience of corporates, investors, and industry leaders.", color: "#2563EB" },
  { title: "Network & Collaborate", description: "Meet decision-makers, potential partners, and cross-border stakeholders.", color: "#22C55E" },
  { title: "Gain Market Insights", description: "Stay updated on emerging trends, technologies, and opportunities in both markets.", color: "#8b5cf6" },
  { title: "Build Brand Visibility", description: "Increase awareness of your company\u2019s expertise and innovation capabilities.", color: "#f59e0b" },
];

const exhibitionWhyItMatters = "Exhibition events create a dynamic environment where innovation meets opportunity. By participating, members can accelerate business growth, forge strategic partnerships, and strengthen their presence in the UK-Pakistan technology corridor. Connect. Showcase. Grow.";

const offerItems = [
  { title: "Event Organisation", description: "End-to-end planning and execution of trade delegations and technology exhibitions.", color: "#2563EB" },
  { title: "Participant Matching", description: "Strategic matching of UK and Pakistan businesses for meaningful partnerships.", color: "#22C55E" },
  { title: "Venue Coordination", description: "Premium venues and facilities for exhibitions and networking events.", color: "#8b5cf6" },
  { title: "Business Development", description: "Support for B2B meetings and partnership development opportunities.", color: "#f59e0b" },
  { title: "Market Insights", description: "Access to market intelligence and cross-border business opportunities.", color: "#C41E3A" },
  { title: "Growth Opportunities", description: "Platforms to showcase products and expand into new markets.", color: "#06b6d4" },
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
  { number: "03", title: "Participate", description: "Join delegations and exhibitions to build partnerships and explore new markets.", color: "#8b5cf6" },
];

const stats = [
  { value: "20+", label: "delegations facilitated", color: "#2563EB" },
  { value: "500+", label: "participants connected", color: "#22C55E" },
  { value: "12+", label: "exhibitions supported", color: "#8b5cf6" },
  { value: "2", label: "bilateral markets", color: "#f59e0b" },
];

export default function TradeDelegationsAndExhibitionsClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-[#0B0F1A]">
      {/* ── Hero Section ── */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <Image
          src="/image/london-images/professional-networking.jpg"
          alt="Trade Delegations & Exhibitions"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,14,30,0.85)] via-[rgba(10,14,30,0.7)] to-[#0B0F1A]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E] mb-5">
              UPTECH Ecosystem
            </p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-[1.05] mb-6">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ffffff 0%, #22C55E 50%, #2563EB 100%)",
                }}
              >
                Trade Delegations &amp; Exhibitions
              </span>
            </h1>
            <div className="max-w-2xl backdrop-blur-md bg-white/[0.05] border border-white/[0.1] rounded-2xl p-6 mb-8">
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
                Facilitating cross-border trade delegations and technology exhibitions to strengthen UK–Pakistan partnerships.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/events" variant="primary" size="lg" showArrow>
                View Events
              </Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="relative bg-[#0E1221]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative backdrop-blur-md bg-white/[0.04] border border-white/[0.08] rounded-xl p-6 hover:-translate-y-1 hover:border-white/[0.15] transition-all duration-300"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl"
                  style={{ background: `linear-gradient(to right, ${stat.color}, ${stat.color}60)` }}
                />
                <div
                  className="absolute -top-1 left-4 right-4 h-4 rounded-full opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500"
                  style={{ background: stat.color }}
                />
                <div
                  className="font-heading font-extrabold text-3xl sm:text-4xl mb-2"
                  style={{
                    color: stat.color,
                    textShadow: `0 0 30px ${stat.color}40`,
                  }}
                >
                  {stat.value}
                </div>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trade Delegation Section ── */}
      <section className="relative bg-[#0B0F1A]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="max-w-4xl mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-5">
                Trade Delegations
              </p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-snug mb-6">
                Connecting Technology Companies Across Borders
              </h2>
              <div className="h-px bg-gradient-to-r from-[#2563EB]/40 via-[#22C55E]/20 to-transparent mb-8" />
              <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                {tradeDelegationIntro}
              </p>
            </div>

            {/* Trade Delegation For Members */}
            <div className="mb-8">
              <h3 className="font-heading font-bold text-white text-lg mb-6">For Members</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {tradeDelegationBenefits.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:-translate-y-1 hover:border-white/[0.15] transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: `linear-gradient(to right, ${item.color}, ${item.color}60)` }}
                  />
                  <div className="p-6">
                    <h4 className="font-heading font-bold text-white text-base mb-2" style={{ color: item.color }}>
                      {item.title}
                    </h4>
                    <div className="h-px bg-white/10 mb-3" />
                    <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Exhibition Events Section ── */}
      <section className="relative bg-[#131942]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#8b5cf6]/5 blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="max-w-4xl mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E] mb-5">
                Exhibition Events
              </p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-snug mb-6">
                High-Impact Exhibition Events
              </h2>
              <div className="h-px bg-gradient-to-r from-[#22C55E]/40 via-[#22C55E]/10 to-transparent mb-8" />
              <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                {exhibitionIntro}
              </p>
            </div>

            {/* Exhibition For Members */}
            <div className="mb-8">
              <h3 className="font-heading font-bold text-white text-lg mb-6">For Members</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-14">
              {exhibitionBenefits.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:-translate-y-1 hover:border-white/[0.15] transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: `linear-gradient(to right, ${item.color}, ${item.color}60)` }}
                  />
                  <div className="p-6">
                    <h4 className="font-heading font-bold text-white text-base mb-2" style={{ color: item.color }}>
                      {item.title}
                    </h4>
                    <div className="h-px bg-white/10 mb-3" />
                    <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Why It Matters */}
            <div className="relative backdrop-blur-md bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#22C55E] via-[#2563EB] to-[#8b5cf6]" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-20 bg-gradient-to-b from-[#22C55E]/10 to-transparent blur-xl pointer-events-none" />
              <h3 className="relative font-heading font-bold text-white text-lg mb-4">Why It Matters</h3>
              <div className="relative h-px bg-white/[0.06] mb-4" />
              <p className="relative text-white/60 text-base sm:text-lg leading-relaxed">
                {exhibitionWhyItMatters}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── What We Offer ── */}
      <section className="relative bg-[#0E1221]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E] mb-4">
                What We Offer
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Services and Support
              </h2>
              <div className="h-px bg-gradient-to-r from-[#22C55E]/40 via-[#22C55E]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed">
                Comprehensive support for trade delegations and technology exhibitions from planning to execution.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offerItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:-translate-y-1 hover:border-white/[0.15] transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: `linear-gradient(to right, ${item.color}, ${item.color}60)` }}
                  />
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-white text-base mb-2 group-hover:text-[#22C55E] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <div className="h-px bg-white/10 mb-3" />
                    <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Benefits & How It Works ── */}
      <section className="relative bg-[#131942]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f59e0b] mb-4">
                  Participation
                </p>
                <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl leading-tight mb-4">
                  Benefits of Participating
                </h2>
                <div className="h-px bg-gradient-to-r from-[#f59e0b]/40 via-[#f59e0b]/10 to-transparent mb-4 max-w-xs" />
                <p className="text-white/40 text-sm mb-6">
                  Why join our trade delegations and exhibitions.
                </p>
                <ul className="space-y-0">
                  {benefits.map((item) => (
                    <li key={item} className="flex items-start gap-3 py-4 border-b border-white/[0.08] last:border-b-0">
                      <CheckCircle2 className="w-4 h-4 text-[#f59e0b] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b5cf6] mb-4">
                  Process
                </p>
                <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl leading-tight mb-4">
                  How It Works
                </h2>
                <div className="h-px bg-gradient-to-r from-[#8b5cf6]/40 via-[#8b5cf6]/10 to-transparent mb-4 max-w-xs" />
                <p className="text-white/40 text-sm mb-6">
                  Three simple steps to join our delegations and exhibitions.
                </p>
                <div className="space-y-0">
                  {howItWorks.map((step) => (
                    <div key={step.number} className="group flex gap-6 py-5 border-t border-white/[0.08] last:border-b">
                      <div className="relative flex-shrink-0">
                        <div
                          className="absolute inset-[-4px] rounded-full opacity-30 group-hover:opacity-60 blur-md transition-opacity duration-500"
                          style={{ background: step.color }}
                        />
                        <div
                          className="relative w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold border"
                          style={{
                            background: `${step.color}25`,
                            borderColor: `${step.color}50`,
                            boxShadow: `0 0 20px ${step.color}30`,
                          }}
                        >
                          {step.number}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-white text-sm mb-1 group-hover:text-[#2563EB] transition-colors duration-200">
                          {step.title}
                        </h4>
                        <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
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
      <section className="relative bg-[#0B0F1A]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-4">
                  On the Ground
                </p>
                <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl leading-tight mb-4">
                  Leading From the Front
                </h2>
                <div className="h-px bg-gradient-to-r from-[#2563EB]/40 via-[#2563EB]/10 to-transparent mb-6 max-w-xs" />
                <p className="text-white/60 text-base leading-relaxed">
                  UPTECH Founder &amp; CEO Khalil Choudhary personally leads trade delegations and represents the Council at international summits, ensuring our members have direct access to decision-makers and opportunities at the highest level.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/[0.06]">
                <Image src="/image/ceo/khalil-choudhary-summit.jpg" alt="Khalil Choudhary at international business summit" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A]/60 via-transparent to-transparent" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-[#0E1221] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 bg-[#22C55E]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-15 bg-[#2563EB]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E] mb-5">
                Get Involved
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                Join Our Next Delegation
              </h2>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
                Connect with technology leaders and explore cross-border opportunities through UPTECH&apos;s trade delegations and exhibitions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/events" variant="primary" size="lg" showArrow>
                  View Events
                </Button>
                <Button href="/contact" variant="glass" size="lg" showArrow>
                  Contact Us
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
