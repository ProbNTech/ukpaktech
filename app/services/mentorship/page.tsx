"use client";

import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Lightbulb, Globe, Compass, CheckCircle2, ChevronDown, Users, Clock, Award, Target } from "lucide-react";
import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

const stats = [
  { value: "75+", label: "Active Mentors" },
  { value: "200+", label: "Startups Mentored" },
  { value: "12", label: "Countries Represented" },
  { value: "92%", label: "Founder Satisfaction" },
];

const advantages = [
  {
    icon: Lightbulb,
    title: "Help Build the Future",
    color: "#2563EB",
    description: "As a mentor, your insights and experience can be pivotal in helping founders overcome obstacles and scale their businesses effectively, having a direct impact on their success.",
    features: ["Shape the next generation of tech leaders", "Direct impact on startup outcomes", "Contribute to the UK\u2013Pakistan tech ecosystem"],
  },
  {
    icon: Compass,
    title: "Enhance Your Horizons",
    color: "#C41E3A",
    description: "Mentoring enables you to examine existing challenges from different perspectives, not only providing startups with innovative solutions but also honing your own strategic thinking and problem-solving skills.",
    features: ["Fresh perspectives on industry challenges", "Sharpen your leadership skills", "Stay connected to emerging trends"],
  },
  {
    icon: Globe,
    title: "Access to a Global Community",
    color: "#22C55E",
    description: "Join our diverse network spanning several countries and Tech industries. Connect with forward-thinking individuals and organizations worldwide, enabling potential collaboration, partnerships, or even new business opportunities.",
    features: ["Cross-border mentor network", "Industry events and summits", "Peer learning opportunities"],
  },
];

const mentorRoles = [
  {
    title: "Being an Advisor",
    icon: Target,
    color: "#2563EB",
    description: "Work closely with startups on a weekly basis and will often form part of our Advisory Board for the duration of the program. All advisory mentors will get the opportunity time to meet participating teams face-to-face, play a role in selection, and then decide which startups they want to engage with.",
    commitment: "Weekly sessions throughout the programme",
    responsibilities: ["Weekly 1:1 sessions with founders", "Participate in startup selection", "Advisory Board membership", "Face-to-face team meetings"],
  },
  {
    title: "Being an Expert",
    icon: Award,
    color: "#C41E3A",
    description: "For those who don\u2019t have time to dedicate themselves to a particular team, we have a secondary pool of standby experts that will work with one or more startups on an ad-hoc basis. They provide niche advice, troubleshoot problems startups face, and provide introductions to their personal network. The time commitment is on an as-needed basis when best suits.",
    commitment: "As-needed basis, when it best suits",
    responsibilities: ["Ad-hoc expert consultations", "Niche problem-solving sessions", "Network introductions", "Specialist workshops"],
  },
];

const processSteps = [
  { number: "01", title: "Apply", icon: Target, color: "#2563EB", description: "Submit your application with your expertise, industry background, and areas where you can add the most value.", outcome: "Application reviewed" },
  { number: "02", title: "Onboard", icon: Users, color: "#22C55E", description: "Complete our mentor onboarding including orientation, toolkit access, and introduction to the current cohort.", outcome: "Mentor activated" },
  { number: "03", title: "Match", icon: Compass, color: "#C41E3A", description: "We match you with startups based on your expertise, industry focus, and the startup\u2019s specific needs.", outcome: "Startup matched" },
  { number: "04", title: "Mentor", icon: Award, color: "#22C55E", description: "Begin your mentoring journey \u2014 guiding founders through challenges, strategy, and growth.", outcome: "Impact delivered" },
];

const mentorProfiles = [
  { title: "Technology Leaders", description: "CTOs, VPs of Engineering, and technical founders with deep product and engineering expertise.", color: "#2563EB" },
  { title: "Business Strategists", description: "CEOs, Managing Directors, and strategy consultants with scaling and market entry experience.", color: "#C41E3A" },
  { title: "Investment Experts", description: "VCs, angel investors, and fund managers who understand fundraising from both sides.", color: "#22C55E" },
  { title: "Domain Specialists", description: "Industry experts in FinTech, HealthTech, EdTech, AI, and other high-growth sectors.", color: "#2563EB" },
];

const faqs = [
  { question: "What is the time commitment for mentors?", answer: "Advisor mentors commit to weekly sessions (typically 1\u20132 hours) throughout the programme duration (usually 3\u20136 months). Expert mentors engage on an ad-hoc basis, typically 2\u20134 hours per month as needed." },
  { question: "Do mentors receive compensation?", answer: "Mentoring is primarily a volunteer role driven by a desire to give back to the ecosystem. However, mentors gain access to our global network, exclusive events, and the opportunity to identify early-stage investment opportunities." },
  { question: "How are mentors matched with startups?", answer: "We use a combination of expertise mapping, industry alignment, and mutual preference to create optimal mentor-startup matches. Both mentors and founders have input in the matching process." },
  { question: "Can I mentor remotely?", answer: "Yes, we support both in-person and remote mentoring. Many of our cross-border mentoring relationships are conducted virtually, with in-person sessions arranged around key events and milestones." },
  { question: "How do I become a mentor?", answer: "Apply through our membership portal or contact us directly. We look for professionals with 5+ years of relevant experience, a genuine desire to support founders, and availability to commit to the programme structure." },
];

const sidebarItems = [
  { title: "Strategic Guidance", desc: "Help founders navigate critical decisions on product, market, and growth strategy.", color: "#2563EB" },
  { title: "Network Access", desc: "Open doors to investors, partners, customers, and talent through warm introductions.", color: "#C41E3A" },
  { title: "Accountability", desc: "Keep founders focused on execution with regular check-ins and milestone tracking.", color: "#22C55E" },
];

const faqColors = ["#2563EB", "#C41E3A", "#22C55E", "#2563EB", "#C41E3A"];

export default function MentorshipPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {/* ── Hero Section ── */}
      <PageHero
        label="UPTECH Service"
        title="Connecting Those Who Made It With the Ones on Their Way"
        subtitle="We provide a pool of experts who will mentor the incubates and guide startups with their experience. Our domain-specific and generic network of mentors would acknowledge the challenges faced by the incubates and give them advice in their fields of expertise."
        image="/image/london-images/coding-development.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/membership" variant="glass" showArrow>Become a Mentor</Button>
          <Button href="/contact" variant="glass" showArrow>Find a Mentor</Button>
        </div>
      </PageHero>

      {/* ================================================================
          STATS BAR
          ================================================================ */}
      <section className="relative bg-[#EEECEA]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const colors = ["#2563EB", "#C41E3A", "#22C55E", "#2563EB"];
              const color = colors[i % colors.length];
              return (
                <motion.div
                  key={stat.label}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl"
                    style={{ background: `linear-gradient(to right, ${color}, ${color}60)` }}
                  />
                  <div
                    className="font-heading font-extrabold text-3xl sm:text-4xl mb-2"
                    style={{ color }}
                  >
                    {stat.value}
                  </div>
                  <p className="text-[#5A5F72] text-sm">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          INTRO + SIDEBAR - Light background with white sidebar card
          ================================================================ */}
      <section className="relative bg-[#EEECEA] overflow-hidden">
        {/* Subtle background grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-3">
                <SectionHeader label="Be The backbone of great startups" title="Shaping the Future by Empowering Innovators" color="blue" />
                <p className="text-[#5A5F72] text-lg leading-relaxed mb-5">
                  Innovators are everywhere, but they need a little push from someone who knows what it takes to make their dreams come true. That&apos;s where our mentors come in shaping the future by empowering innovators around the world with their wisdom and experience. If you&apos;ve ever had the privilege of meeting a mentor who changed your life, you know how important mentors can be. Mentors help us find our path and shape us for the future by showing us what&apos;s possible.
                </p>
              </div>

              {/* Sidebar -- What Mentors Provide (White card) */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-[#D8D5CF] rounded-2xl p-8 shadow-md sticky top-8">
                  {/* Subtle top accent */}
                  <div className="absolute -top-px left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/50 to-transparent" />
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-5">What Mentors Provide</h3>
                  <div className="h-px bg-[#D8D5CF] mb-5" />
                  <ul className="space-y-5">
                    {sidebarItems.map((item, i) => (
                      <motion.li
                        key={item.title}
                        className="relative flex items-start gap-3 pl-4"
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                      >
                        {/* Left accent border */}
                        <div
                          className="absolute top-0 bottom-0 left-0 w-1 rounded-r-full"
                          style={{ background: `linear-gradient(to bottom, ${item.color}, ${item.color}40)` }}
                        />
                        {/* Icon */}
                        <div className="relative flex-shrink-0 mt-0.5">
                          <div
                            className="relative w-7 h-7 rounded-xl flex items-center justify-center"
                            style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                          >
                            <CheckCircle2 className="w-4 h-4" style={{ color: item.color }} strokeWidth={2} />
                          </div>
                        </div>
                        <div>
                          <span className="font-semibold text-[#1C1F2E] text-base">{item.title}</span>
                          <p className="text-[#7A7E8F] text-sm leading-relaxed mt-0.5">{item.desc}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          ADVANTAGES - White cards with colored top borders
          ================================================================ */}
      <section className="relative bg-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C41E3A]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader label="Benefits" title="Advantages of Being a Mentor" subtitle="Mentoring isn't just about giving — it's about growing together." color="red" />

            <div className="grid md:grid-cols-3 gap-6">
              {advantages.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="group relative bg-white rounded-2xl border border-[#D8D5CF] p-6 hover:-translate-y-1 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-lg hover:border-[#2563EB]/30"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    {/* Gradient top border */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(to right, ${item.color}, ${item.color}00)` }}
                    />

                    <div className="relative z-[1]">
                      {/* Icon container */}
                      <div
                        className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                      >
                        <Icon className="w-6 h-6 relative z-[1]" style={{ color: item.color }} />
                      </div>

                      <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2">{item.title}</h3>
                      <div className="h-px bg-[#D8D5CF] mb-3" />
                      <p className="text-base text-[#5A5F72] leading-relaxed mb-4">{item.description}</p>
                      <ul className="space-y-2">
                        {item.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-[#5A5F72]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          MENTOR ROLES - White cards with strong visual separation
          ================================================================ */}
      <section className="relative bg-[#EEECEA] overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader label="Roles" title="How Mentors Work with Startups" subtitle="As a mentor with us, you get to work closely with ambitious innovators. Many are building businesses for the first time and need guidance across different areas. This is where you step in. Whether you're a successful founder or an industry specialist, this is your chance to support the next generation of entrepreneurs and learn along the way." color="blue" />

            <div className="grid md:grid-cols-2 gap-6">
              {mentorRoles.map((role, i) => {
                const Icon = role.icon;
                return (
                  <motion.div
                    key={role.title}
                    className="group relative bg-white rounded-2xl border border-[#D8D5CF] p-8 hover:-translate-y-1 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-lg hover:border-[#2563EB]/30"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    {/* Gradient top border */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(to right, ${role.color}, transparent)` }}
                    />

                    <div className="relative z-[1]">
                      <div className="flex items-center gap-4 mb-4">
                        {/* Icon */}
                        <div
                          className="relative w-14 h-14 rounded-xl flex items-center justify-center"
                          style={{ background: `${role.color}12`, border: `1px solid ${role.color}25` }}
                        >
                          <Icon className="w-7 h-7 relative z-[1]" style={{ color: role.color }} />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-xl text-[#1C1F2E]">{role.title}</h3>
                          <div
                            className="inline-flex items-center gap-1.5 mt-1 text-xs font-medium"
                            style={{ color: `${role.color}CC` }}
                          >
                            <Clock className="w-3 h-3" />
                            {role.commitment}
                          </div>
                        </div>
                      </div>

                      <div className="h-px bg-[#D8D5CF] mb-4" />
                      <p className="text-base text-[#5A5F72] leading-relaxed mb-5">{role.description}</p>

                      <ul className="grid grid-cols-2 gap-3">
                        {role.responsibilities.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-base text-[#5A5F72]">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: role.color }} />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          PROCESS STEPS - Numbered circles on white cards
          ================================================================ */}
      <section className="relative bg-white overflow-hidden">
        {/* Connecting line decoration */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D8D5CF] to-transparent pointer-events-none hidden lg:block" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader label="Process" title="How to Become a Mentor" subtitle="A clear four-step pathway from application to impact." color="green" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    className="group relative bg-white rounded-2xl border border-[#D8D5CF] p-6 hover:-translate-y-1 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-lg hover:border-[#2563EB]/30"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    {/* Gradient top border */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(to right, ${step.color}, ${step.color}00)` }}
                    />

                    <div className="relative z-[1]">
                      <div className="flex items-center gap-3 mb-5">
                        {/* Numbered circle */}
                        <div className="relative">
                          <div
                            className="relative w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold border-2"
                            style={{
                              background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`,
                              borderColor: `${step.color}60`,
                            }}
                          >
                            {step.number}
                          </div>
                        </div>
                        {/* Icon */}
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center"
                          style={{ background: `${step.color}12`, border: `1px solid ${step.color}20` }}
                        >
                          <Icon className="w-4 h-4" style={{ color: step.color }} />
                        </div>
                      </div>

                      <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">{step.title}</h3>
                      <p className="text-[#5A5F72] text-base leading-relaxed mb-4">{step.description}</p>

                      {/* Outcome badge */}
                      <div
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                        style={{ background: `${step.color}12`, border: `1px solid ${step.color}25` }}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" style={{ color: step.color }} />
                        <span className="text-xs font-semibold" style={{ color: step.color }}>{step.outcome}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          MENTOR PROFILES - White cards with colored left accents
          ================================================================ */}
      <section className="relative bg-[#EEECEA] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#22C55E]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader label="Profiles" title="Who We're Looking For" subtitle="We welcome mentors from diverse backgrounds and disciplines." color="blue" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mentorProfiles.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="group relative bg-white rounded-2xl border border-[#D8D5CF] p-6 pl-8 hover:-translate-y-1 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-lg hover:border-[#2563EB]/30"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {/* Left accent border */}
                  <div
                    className="absolute top-4 bottom-4 left-0 w-1 rounded-r-full"
                    style={{ background: `linear-gradient(to bottom, ${item.color}, ${item.color}30)` }}
                  />

                  <div className="relative z-[1]">
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">{item.title}</h3>
                    <p className="text-[#5A5F72] text-base leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          FAQ - White accordion cards with colored numbered badges
          ================================================================ */}
      <section className="relative bg-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader label="FAQ" title="Frequently Asked Questions" subtitle="Common questions about our mentorship programme." color="red" />

            <div className="max-w-3xl mx-auto">
              <FAQSection faqs={faqs} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          CTA - Gradient glow effects on dark
          ================================================================ */}
      <section className="relative bg-[#0B0F1A]/80 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image src="/image/london-images/mentoring-coaching.jpg" alt="Mentorship background" fill className="object-cover" sizes="100vw" />
        </div>
        {/* Multi-color glow orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#2563EB]/10 rounded-full blur-[120px]" />
          <div className="absolute top-10 right-0 w-[350px] h-[350px] bg-[#C41E3A]/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-[#22C55E]/5 rounded-full blur-[80px]" />
        </div>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 backdrop-blur-sm mb-6"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                <span className="text-[#2563EB] text-xs font-semibold uppercase tracking-wider">Make an Impact</span>
              </motion.div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                  Ready to Shape the Next Generation of{" "}
                </span>
                <span className="bg-gradient-to-r from-[#2563EB] via-[#C41E3A] to-[#22C55E] bg-clip-text text-transparent">
                  Tech Leaders?
                </span>
              </h2>

              <p className="text-white/50 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                Whether you&apos;re an experienced founder or an industry specialist, this is your chance to support ambitious entrepreneurs and learn along the way.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/membership" variant="primary" size="lg" showArrow className="!bg-gradient-to-r !from-[#2563EB] !to-[#22C55E] hover:!shadow-[0_0_40px_rgba(37,99,235,0.3)]">
                  Join as a Mentor
                </Button>
                <Button href="/contact" variant="glass" size="lg" showArrow>Contact Us</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

/* ================================================================
   FAQ Accordion Component - White cards
   ================================================================ */
function FAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const color = faqColors[index % faqColors.length];

        return (
          <motion.div
            key={faq.question}
            className="group relative bg-white rounded-2xl border border-[#D8D5CF] overflow-hidden transition-all duration-300 shadow-sm"
            style={isOpen ? { borderColor: `${color}30` } : {}}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            {/* Subtle top glow when open */}
            {isOpen && (
              <div
                className="absolute -top-px left-4 right-4 h-[1px]"
                style={{ background: `linear-gradient(to right, transparent, ${color}50, transparent)` }}
              />
            )}

            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center gap-4 py-5 px-6 text-left"
            >
              {/* Numbered badge - colored */}
              <span
                className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-300"
                style={
                  isOpen
                    ? { background: color, color: "#fff", boxShadow: `0 0 20px ${color}40` }
                    : { background: `${color}15`, color, border: `1px solid ${color}25` }
                }
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="font-heading font-semibold text-[#1C1F2E] text-base flex-1">
                {faq.question}
              </span>

              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                style={isOpen ? { background: `${color}15` } : { background: "transparent" }}
              >
                <ChevronDown
                  className="w-4 h-4 transition-transform duration-300"
                  style={{
                    color: isOpen ? color : "#7A7E8F",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 pl-[4.75rem]">
                    <div className="h-px bg-[#D8D5CF] mb-4" />
                    <p className="text-[#5A5F72] text-base leading-[1.8]">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
