"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  { title: "Governments", description: "Facilitating policy alignment and bilateral technology cooperation between UK and Pakistani government bodies.", color: "#2563EB" },
  { title: "Enterprises & Investors", description: "Supporting cross-border trade, investment facilitation, and market access for businesses and capital.", color: "#22C55E" },
  { title: "Startups & Academia", description: "Fostering innovation, talent development, and research collaboration between both nations.", color: "#C41E3A" },
];

const whyJoin = [
  "Exclusive network of leading technology professionals",
  "Strategic partnerships and collaboration opportunities",
  "Access to funding, resources, and market insights",
  "Platform for thought leadership and industry influence",
  "Cross-border innovation and knowledge exchange",
];

const recognitionItems = [
  { title: "Innovation", description: "Celebrating exceptional achievements in technology innovation and cross-border development.", color: "#C41E3A" },
  { title: "Collaboration", description: "Recognising successful partnerships that strengthen the UK–Pakistan tech corridor.", color: "#2563EB" },
  { title: "Leadership", description: "Honouring individuals and organisations driving digital transformation.", color: "#22C55E" },
];

const benefits = [
  { title: "Connect with Leading Minds", description: "Access an exclusive network of tech leaders, founders, and executives across both nations.", color: "#2563EB" },
  { title: "Launch New Products", description: "Platform to showcase innovations and reach key stakeholders across the corridor.", color: "#22C55E" },
  { title: "Establish Thought Leadership", description: "Position your organisation as a leader in the UK–Pakistan tech ecosystem.", color: "#C41E3A" },
  { title: "Boost Brand Awareness", description: "Increase visibility and recognition across both markets simultaneously.", color: "#2563EB" },
];

const attendees = [
  "C-suite executives and senior management",
  "Chief technology officers and tech leads",
  "Startup founders and entrepreneurs",
  "Venture capitalists and angel investors",
  "Senior technology directors and professionals",
  "Thought leaders and domain experts",
  "Corporate innovation and strategy heads",
  "Business development and partnership directors",
];

const partnerLogos = [
  "/image/sponsor-logos/7.png",
  "/image/sponsor-logos/8.png",
  "/image/sponsor-logos/9.png",
  "/image/sponsor-logos/10.png",
  "/image/sponsor-logos/11.png",
  "/image/sponsor-logos/12.png",
];

export default function UKPakistanTechnologyPartnershipClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-[#EEECEA]">
      {/* ── Hero Section ── */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <Image
          src="/image/london-images/tower-bridge-wide.jpg"
          alt="UK–Pakistan Technology Partnership"
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
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-5">
              UPTECH Ecosystem
            </p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-[1.05] mb-6">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ffffff 0%, #2563EB 50%, #22C55E 100%)",
                }}
              >
                UK–Pakistan Technology Partnership
              </span>
            </h1>
            <div className="max-w-2xl backdrop-blur-md bg-white/[0.05] border border-white/[0.1] rounded-2xl p-6 mb-8">
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
                Strengthening bilateral technology collaboration between the United Kingdom and Pakistan.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>
                Become a Member
              </Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-5">
                  Our Vision
                </p>
                <p className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl lg:text-3xl leading-snug mb-6">
                  The UK–Pakistan Technology Partnership is a strategic collaboration framework designed to strengthen technology, innovation, and digital trade between the United Kingdom and Pakistan.
                </p>
                <div className="h-px bg-gradient-to-r from-[#2563EB]/40 via-[#2563EB]/20 to-transparent mb-5" />
                <p className="text-[#3D4152] text-lg leading-relaxed mb-4">
                  By connecting governments, enterprises, investors, startups, and academia, we create a powerful network that enables technology-led growth, fosters innovation, and builds lasting bridges between our two nations.
                </p>
                <p className="text-[#3D4152] text-lg leading-relaxed">
                  This partnership facilitates cross-border cooperation, knowledge exchange, and joint initiatives that drive sustainable growth in both nations&apos; technology ecosystems.
                </p>
              </div>
              <div className="bg-white border border-[#D8D5CF] shadow-md rounded-xl p-8">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-5">Partnership Pillars</h3>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <ul className="space-y-3">
                  {["Governments", "Enterprises & Investors", "Startups & Academia"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-[#3D4152] text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Who We Connect ── */}
      <section className="relative bg-[#EEECEA]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E] mb-4">
                Partnership Overview
              </p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Who We Connect
              </h2>
              <div className="h-px bg-gradient-to-r from-[#22C55E]/40 via-[#22C55E]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-[#7A7E8F] text-lg max-w-2xl leading-relaxed">
                Connecting governments, enterprises, investors, startups, and academia to drive technology-led growth.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative bg-white border border-[#D8D5CF] shadow-sm rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: `linear-gradient(to right, ${pillar.color}, ${pillar.color}60)` }}
                  />
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#2563EB] transition-colors duration-200">
                      {pillar.title}
                    </h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-[#5A5F72] text-base leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CEO at Conference ── */}
      <section className="relative bg-[#E8E6E3]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#D8D5CF] shadow-md">
                <Image src="/image/ceo/khalil-choudhary-conference.jpg" alt="Khalil Choudhary at UK-Pakistan technology conference" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-4">
                  Our Leadership
                </p>
                <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl leading-tight mb-4">
                  Driving Partnership at the Highest Level
                </h2>
                <div className="h-px bg-gradient-to-r from-[#2563EB]/40 via-[#2563EB]/10 to-transparent mb-6 max-w-xs" />
                <p className="text-[#3D4152] text-lg leading-relaxed mb-4">
                  UPTECH Founder &amp; CEO Khalil Choudhary actively engages with government officials, industry leaders, and international organisations to strengthen the UK–Pakistan technology corridor.
                </p>
                <p className="text-[#3D4152] text-lg leading-relaxed">
                  Through conferences, trade missions, and bilateral summits, UPTECH creates high-level networking opportunities that drive meaningful partnerships and collaboration.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Recognition ── */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C41E3A] mb-4">
                Recognition Program
              </p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Recognising Excellence
              </h2>
              <div className="h-px bg-gradient-to-r from-[#C41E3A]/40 via-[#C41E3A]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-[#7A7E8F] text-lg max-w-2xl leading-relaxed">
                Celebrating Pakistan&apos;s contributions to the UK tech sector through prestigious recognition.
              </p>
            </div>
            <p className="text-[#3D4152] text-lg leading-relaxed mb-6 max-w-3xl">
              Our recognition program celebrates exceptional achievements in technology innovation, cross-border collaboration, and leadership that strengthens the UK–Pakistan tech corridor.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {recognitionItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative bg-white border border-[#D8D5CF] shadow-sm rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: `linear-gradient(to right, ${item.color}, ${item.color}60)` }}
                  />
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2" style={{ color: item.color }}>
                      {item.title}
                    </h3>
                    <p className="text-[#5A5F72] text-base leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Unlock Opportunities ── */}
      <section className="relative bg-[#EEECEA]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-4">
                Why Partner With Us
              </p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Unlock Opportunities
              </h2>
              <div className="h-px bg-gradient-to-r from-[#2563EB]/40 via-[#2563EB]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-[#7A7E8F] text-lg max-w-2xl leading-relaxed">
                Benefits of joining the UK–Pakistan Technology Partnership.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative bg-white border border-[#D8D5CF] shadow-sm rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: `linear-gradient(to right, ${benefit.color}, ${benefit.color}60)` }}
                  />
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#2563EB] transition-colors duration-200">
                      {benefit.title}
                    </h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-[#5A5F72] text-base leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Membership & Attendees ── */}
      <section className="relative bg-[#E8E6E3]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E] mb-4">
                  Membership
                </p>
                <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl leading-tight mb-4">
                  Why UK–Pakistan Tech Council
                </h2>
                <div className="h-px bg-gradient-to-r from-[#22C55E]/40 via-[#22C55E]/10 to-transparent mb-4 max-w-xs" />
                <p className="text-[#7A7E8F] text-base mb-5">
                  An invite-only community of UK-based Pakistan tech leaders, founders, investors, and executives.
                </p>
                <ul className="space-y-0">
                  {whyJoin.map((item) => (
                    <li key={item} className="flex items-start gap-3 py-4 border-b border-[#D8D5CF] last:border-b-0">
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-[#3D4152] text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C41E3A] mb-4">
                  Community
                </p>
                <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl leading-tight mb-4">
                  Typical Attendees
                </h2>
                <div className="h-px bg-gradient-to-r from-[#C41E3A]/40 via-[#C41E3A]/10 to-transparent mb-4 max-w-xs" />
                <p className="text-[#7A7E8F] text-base mb-5">
                  Join a community of distinguished technology leaders and innovators.
                </p>
                <ul className="space-y-0">
                  {attendees.map((item) => (
                    <li key={item} className="flex items-start gap-3 py-3 border-b border-[#D8D5CF] last:border-b-0">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C41E3A] flex-shrink-0" />
                      <span className="text-[#3D4152] text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C41E3A] mb-4">
                Partners
              </p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Our Partners Make Us Stronger
              </h2>
              <div className="h-px bg-gradient-to-r from-[#C41E3A]/40 via-[#C41E3A]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-[#7A7E8F] text-lg max-w-2xl leading-relaxed">
                Collaborating with leading organisations to drive innovation and strengthen the UK–Pakistan tech corridor.
              </p>
            </div>
            <p className="text-[#3D4152] text-lg leading-relaxed mb-6 max-w-3xl">
              Our strategic partnerships with governments, enterprises, investors, and academic institutions enable us to create meaningful impact and drive sustainable growth across both nations.
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {partnerLogos.map((logo, i) => (
                <motion.div
                  key={logo}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="aspect-square bg-[#F5F4F2] border border-[#D8D5CF] rounded-xl flex items-center justify-center p-3 hover:border-[#2563EB]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="relative w-full h-full">
                    <Image src={logo} alt={`Partner logo ${i + 1}`} fill className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" sizes="120px" />
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-[#0B0F1A] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 bg-[#2563EB]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-15 bg-[#22C55E]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-5">
                Join the Partnership
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
                Strengthen the Corridor. Build the Future.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl">
                Join us in building a stronger technology partnership between the UK and Pakistan.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/membership/apply" variant="primary" size="lg" showArrow>
                  Apply for Membership
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
