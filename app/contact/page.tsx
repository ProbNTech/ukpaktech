"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  Mail, MapPin, Clock, Globe2, Users, Briefcase,
  Handshake, HelpCircle, ArrowUpRight, Send,
  Megaphone, Calendar, Phone, Zap, Shield,
} from "lucide-react";

/* ── Contact info cards ──────────────────────────────────────────── */
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@uptech.org.uk",
    href: "mailto:info@uptech.org.uk",
    color: "#2563EB",
    glow: "rgba(37,99,235,0.15)",
  },
  {
    icon: MapPin,
    label: "United Kingdom",
    value: "London, UK",
    href: null,
    color: "#22C55E",
    glow: "rgba(34,197,94,0.15)",
  },
  {
    icon: Globe2,
    label: "Pakistan",
    value: "Islamabad, PK",
    href: null,
    color: "#C41E3A",
    glow: "rgba(196,30,58,0.15)",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "2–3 Business Days",
    href: null,
    color: "#2563EB",
    glow: "rgba(37,99,235,0.15)",
  },
];

/* ── Enquiry types ───────────────────────────────────────────────── */
const enquiryTypes = [
  { icon: Handshake, label: "Partnerships", desc: "Strategic alliances, joint ventures, and bilateral collaboration opportunities.", color: "#2563EB" },
  { icon: Users, label: "Membership", desc: "Join UPTECH as an individual, startup, SME, or corporate member.", color: "#22C55E" },
  { icon: Megaphone, label: "Sponsorship", desc: "Sponsor events, programmes, and initiatives across the UK–Pakistan corridor.", color: "#C41E3A" },
  { icon: Calendar, label: "Events & Media", desc: "Event participation, press enquiries, and media partnerships.", color: "#2563EB" },
  { icon: HelpCircle, label: "General Enquiry", desc: "Anything else — we're happy to help with your questions.", color: "#22C55E" },
];

/* ── What happens next steps ─────────────────────────────────────── */
const nextSteps = [
  { step: "01", title: "Received", text: "Your message is logged by our team immediately.", icon: Mail, color: "#2563EB" },
  { step: "02", title: "Reviewed", text: "A relevant team member reviews your enquiry.", icon: Shield, color: "#22C55E" },
  { step: "03", title: "Responded", text: "We respond within 2–3 business days.", icon: Zap, color: "#C41E3A" },
];

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        label="Contact Us"
        title="Get in Touch"
        subtitle="Whether you're looking to partner, join, sponsor, or simply learn more — we'd love to hear from you."
        image="/image/banners/banner2.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership/apply">Apply for Membership</ShinyButton>
          <Button href="#enquiry-types" variant="glass">Enquiry Types</Button>
        </div>
      </PageHero>

      {/* ── Contact Info Cards ─────────────────────────────────────────── */}
      <section className="relative z-20 bg-white py-10">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="group relative rounded-xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-xl p-6">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                        style={{ backgroundColor: `${item.color}10`, border: `1px solid ${item.color}20` }}
                      >
                        <Icon className="w-4.5 h-4.5" style={{ color: item.color }} strokeWidth={1.5} />
                      </div>
                      <p className="text-base font-bold tracking-[0.2em] uppercase text-[#7A7E8F] mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-heading font-bold text-base text-[#1C1F2E] hover:text-[#2563EB] transition-colors inline-flex items-center gap-1">
                          {item.value}
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <p className="font-heading font-bold text-base text-[#1C1F2E]">{item.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Enquiry Types ─────────────────────────────────────────────── */}
      <section id="enquiry-types" className="relative bg-[#E8E6E3] py-10 overflow-hidden">
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader
              label="How can we help"
              title="Enquiry Types"
              subtitle="Select the category that best describes your enquiry for the fastest response."
              color="blue"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {enquiryTypes.map((type, i) => {
                const Icon = type.icon;
                return (
                  <motion.div
                    key={type.label}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="group relative bg-white border border-[#D8D5CF] rounded-xl p-5 hover:shadow-lg hover:border-[#2563EB]/20 transition-all duration-300 overflow-hidden"
                  >
                    {/* Left accent */}
                    <div
                      className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      style={{ background: `linear-gradient(to bottom, ${type.color}, ${type.color}40)` }}
                    />

                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ backgroundColor: `${type.color}10`, border: `1px solid ${type.color}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: type.color }} strokeWidth={1.5} />
                    </div>

                    <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-1.5">{type.label}</h3>
                    <p className="text-base text-[#475569] leading-relaxed">{type.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Form + Sidebar ────────────────────────────────────────────── */}
      <section className="relative py-10 overflow-hidden bg-white">
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader
              label="Write to us"
              title="Send a Message"
              subtitle="Fill in the form below and a member of our team will get back to you."
              color="blue"
            />

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-12">
              {/* Form */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <ContactForm />
              </motion.div>

              {/* Sidebar */}
              <div className="space-y-5">
                {/* What happens next */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative bg-white border border-[#D8D5CF] rounded-2xl p-7 overflow-hidden shadow-sm"
                >
                  <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-5">What Happens Next?</h3>
                  <div className="h-px bg-[#D8D5CF] mb-5" />
                  <div className="space-y-5">
                    {nextSteps.map((step) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.step} className="flex items-start gap-4">
                          <div
                            className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: `${step.color}10`, border: `1px solid ${step.color}20` }}
                          >
                            <Icon className="w-4 h-4" style={{ color: step.color }} strokeWidth={1.5} />
                          </div>
                          <div>
                            <span className="text-base font-bold tracking-[0.15em] uppercase text-[#7A7E8F]">{step.step}</span>
                            <p className="text-base text-[#475569] leading-relaxed mt-0.5">{step.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Direct email card */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative bg-white border border-[#D8D5CF] rounded-2xl p-7 overflow-hidden shadow-sm"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#22C55E]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-[#1C1F2E]">Prefer Email?</h3>
                      <p className="text-base text-[#7A7E8F] mt-0.5">Reach us directly anytime</p>
                    </div>
                  </div>
                  <a
                    href="mailto:info@uptech.org.uk"
                    className="inline-flex items-center gap-2 text-base font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                  >
                    info@uptech.org.uk
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>

                {/* Membership CTA card */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative bg-[#2563EB]/5 border border-[#2563EB]/15 rounded-2xl p-7 overflow-hidden"
                >
                  <div className="relative">
                    <Briefcase className="w-6 h-6 text-[#2563EB] mb-3" strokeWidth={1.5} />
                    <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-1">Ready to Join?</h3>
                    <p className="text-base text-[#475569] mb-5 leading-relaxed">Become a member and unlock the full UPTECH network.</p>
                    <Button href="/membership/apply" variant="primary" size="sm">
                      Apply Now
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <GlobalCTA
        label="Connect with Us"
        title="Let’s Build the Future Together"
        subtitle="Whether you represent a startup, corporation, government body, or academic institution — UPTECH is your gateway to the UK–Pakistan technology partnership."
        primaryButtonText="Apply for Membership"
        primaryButtonLink="/membership/apply"
        secondaryButtonText="About UPTECH"
        secondaryButtonLink="/about"
      />
    </div>
  );
}
