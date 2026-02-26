"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
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
        image="/image/london-images/corporate-office-building.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/membership/apply" variant="glass" showArrow>Apply for Membership</Button>
          <Button href="#enquiry-types" variant="glass" showArrow>Enquiry Types</Button>
        </div>
      </PageHero>

      {/* ── Contact Info Cards ─────────────────────────────────────────── */}
      <section className="relative z-20 -mt-1">
        <div
          className="border-y"
          style={{
            background: "linear-gradient(135deg, rgba(28,31,46,0.95) 0%, rgba(15,18,32,0.98) 100%)",
            borderColor: "rgba(255,255,255,0.06)",
          }}
        >
          <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group relative bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-xl p-5 hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at 50% 50%, ${item.glow}, transparent 70%)` }} />
                    <div className="relative">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                        style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}25` }}
                      >
                        <Icon className="w-4.5 h-4.5" style={{ color: item.color }} strokeWidth={1.5} />
                      </div>
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-heading font-bold text-sm text-white hover:text-[#2563EB] transition-colors inline-flex items-center gap-1">
                          {item.value}
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <p className="font-heading font-bold text-sm text-white">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Enquiry Types — Dark with glass cards ─────────────────────── */}
      <section className="relative bg-[#0B0F1A] py-10 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "40px 40px" }} />
        {/* Top gradient accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />

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
                    className="group relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
                  >
                    {/* Left accent */}
                    <div
                      className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full transition-opacity duration-300 opacity-40 group-hover:opacity-100"
                      style={{ background: `linear-gradient(to bottom, ${type.color}, ${type.color}40)` }}
                    />

                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ backgroundColor: `${type.color}10`, border: `1px solid ${type.color}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: type.color }} strokeWidth={1.5} />
                    </div>

                    <h3 className="font-heading font-bold text-sm text-white mb-1.5">{type.label}</h3>
                    <p className="text-sm text-white/35 leading-relaxed">{type.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Form + Sidebar — Dark tech section ────────────────────────── */}
      <section className="relative py-10 overflow-hidden" style={{ backgroundColor: "#0E1221" }}>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 60V0h60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "60px 60px" }} />
        {/* Glowing orb accents */}
        <div className="absolute top-0 left-1/4 w-96 h-96 opacity-[0.03]" style={{ background: "radial-gradient(circle, #2563EB, transparent 60%)" }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 opacity-[0.03]" style={{ background: "radial-gradient(circle, #2563EB, transparent 60%)" }} />

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
                {/* What happens next — glass card */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 overflow-hidden"
                >
                  {/* Subtle top border glow */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />

                  <h3 className="font-heading font-bold text-base text-white mb-5">What Happens Next?</h3>
                  <div className="h-px bg-white/[0.06] mb-5" />
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
                            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/30">{step.step}</span>
                            <p className="text-sm text-white/50 leading-relaxed mt-0.5">{step.text}</p>
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
                  className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 overflow-hidden"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#22C55E]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm text-white">Prefer Email?</h3>
                      <p className="text-xs text-white/30 mt-0.5">Reach us directly anytime</p>
                    </div>
                  </div>
                  <a
                    href="mailto:info@uptech.org.uk"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#60a5fa] transition-colors"
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
                  className="relative bg-gradient-to-br from-[#2563EB]/10 to-[#2563EB]/10 border border-[#2563EB]/20 rounded-2xl p-7 overflow-hidden"
                >
                  {/* Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-20" style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }} />

                  <div className="relative">
                    <Briefcase className="w-6 h-6 text-[#2563EB] mb-3" strokeWidth={1.5} />
                    <h3 className="font-heading font-bold text-sm text-white mb-1">Ready to Join?</h3>
                    <p className="text-xs text-white/40 mb-5 leading-relaxed">Become a member and unlock the full UPTECH network.</p>
                    <Button href="/membership/apply" variant="glass" size="sm" showArrow>
                      Apply Now
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA — Gradient dark section ──────────────────────────────── */}
      <section className="relative overflow-hidden py-12" style={{ background: "linear-gradient(135deg, #0B0F1A 0%, #131942 50%, #0B0F1A 100%)" }}>
        {/* Animated gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />
        {/* Glow orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05]" style={{ background: "radial-gradient(circle, #2563EB, transparent 50%)" }} />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-4">Connect with Us</p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                Let&apos;s Build the Future Together
              </h2>
              <p className="text-white/40 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                Whether you represent a startup, corporation, government body, or academic institution — UPTECH is your gateway to the UK–Pakistan technology partnership.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/membership/apply" variant="primary" size="lg" showArrow>Apply for Membership</Button>
                <Button href="/about" variant="glass" size="lg" showArrow>About UPTECH</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
