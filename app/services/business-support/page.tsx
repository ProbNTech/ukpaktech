"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { Building2, Landmark, FileCheck, FileText, Shield, Scale, Database, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

const stats = [
  { value: "300+", label: "Companies Supported", color: "#2563EB" },
  { value: "50+", label: "Legal Partners", color: "#22C55E" },
  { value: "\u00A3100M+", label: "Investment Documented", color: "#C41E3A" },
  { value: "99%", label: "Compliance Rate", color: "#2563EB" },
];

const services = [
  {
    icon: Building2,
    color: "#2563EB",
    title: "Company Registration",
    description: "We will provide assistance and guidance for the registration of the startups in UK.",
    features: ["UK company formation", "Director & shareholder setup", "Registered office address", "Post-incorporation compliance"],
  },
  {
    icon: Landmark,
    color: "#22C55E",
    title: "Companies House Integration",
    description: "Easily update shareholder records and automatically file with Companies House, keeping your cap table accurate, compliant, and always up to date.",
    features: ["Automated filing", "Shareholder register management", "Annual return preparation", "Real-time cap table updates"],
  },
  {
    icon: FileCheck,
    color: "#C41E3A",
    title: "S/EIS Advance Assurance",
    description: "Check your eligibility and apply seamlessly in-app. Once you\u2019ve raised funds, submit your compliance statements right there, we\u2019ll handle all correspondence with HMRC for you.",
    features: ["Eligibility assessment", "Application preparation", "HMRC correspondence", "Compliance statement filing"],
  },
  {
    icon: FileText,
    color: "#2563EB",
    title: "Investment Documents",
    description: "Includes all the investment agreements needed to execute your round \u2014 including a term sheet, Advance Subscription Agreement, or convertible loan note.",
    features: ["Term sheet drafting", "SHA & SSA preparation", "Convertible note agreements", "Board resolution templates"],
  },
  {
    icon: Shield,
    color: "#C41E3A",
    title: "Intellectual Property Rights",
    description: "It is essential to protect your creation in the growing trend of piracy. We, thus, take care of providing you with the intellectual & property rights to safeguard your startup.",
    features: ["Trademark registration", "Patent application support", "IP strategy development", "Infringement protection"],
  },
  {
    icon: Scale,
    color: "#ef4444",
    title: "Legal & Accounting Support",
    description: "The sound legal and accounting advice plays an important role in the smooth running of the business. We would be providing the incubates with the necessary legal & accounting support for their seamless development.",
    features: ["Legal advisory", "Tax planning & compliance", "Financial reporting", "Regulatory guidance"],
  },
  {
    icon: Database,
    color: "#22C55E",
    title: "Data Rooms",
    description: "Share key documents with prospective investors via a secure digital vault.",
    features: ["Secure document hosting", "Investor access controls", "Activity tracking & analytics", "Due diligence organisation"],
  },
];

const processSteps = [
  { number: "01", title: "Consultation", description: "Book a free consultation to discuss your business needs and identify the services you require.", outcome: "Needs assessed", color: "#2563EB" },
  { number: "02", title: "Proposal", description: "Receive a tailored service proposal with clear deliverables, timelines, and pricing.", outcome: "Scope agreed", color: "#22C55E" },
  { number: "03", title: "Execution", description: "Our team and partners deliver the services \u2014 keeping you informed at every stage.", outcome: "Services delivered", color: "#C41E3A" },
  { number: "04", title: "Ongoing Support", description: "Continued access to support, compliance monitoring, and advisory as your business grows.", outcome: "Long-term partnership", color: "#2563EB" },
];

const whyUptech = [
  { title: "Startup-First Approach", description: "Every service is designed with startups and growing companies in mind \u2014 no unnecessary complexity.", color: "#2563EB" },
  { title: "Trusted Partners", description: "We work with vetted legal, accounting, and compliance professionals with deep startup experience.", color: "#22C55E" },
  { title: "Cross-Border Expertise", description: "Understanding of both UK and Pakistan business environments, regulations, and best practices.", color: "#C41E3A" },
  { title: "Member Pricing", description: "UPTECH members receive preferential rates across all business support services.", color: "#2563EB" },
];

const faqs = [
  { question: "Who are the service partners?", answer: "We work with vetted law firms, accounting practices, and compliance specialists who have deep experience with technology startups and cross-border businesses. All partners are selected for their expertise, responsiveness, and value for money." },
  { question: "Are these services included in membership?", answer: "Initial consultation and basic guidance are included in UPTECH membership. Execution services (company formation, legal drafting, accounting) are provided at preferential member rates through our partner network." },
  { question: "Can you help with international company registration?", answer: "Yes, we support company registration in the UK, Pakistan, and other jurisdictions through our network of international legal partners. We can also advise on optimal corporate structures for cross-border operations." },
  { question: "How long does company registration take?", answer: "UK company registration typically takes 24\u201348 hours through our expedited service. More complex structures (including S/EIS advance assurance) may take 4\u20138 weeks depending on HMRC processing times." },
  { question: "Do you offer ongoing accounting services?", answer: "Yes, through our accounting partners we offer bookkeeping, management accounts, year-end filing, tax returns, and VAT registration and returns. Packages are available for startups, SMEs, and growing companies." },
];

const faqColors = ["#2563EB", "#C41E3A", "#22C55E", "#2563EB", "#C41E3A"];

export default function BusinessSupportPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {/* ── Hero Section ── */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <Image
          src="/image/london-images/legal-documents.jpg"
          alt="Business Support"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,14,30,0.85), rgba(10,14,30,0.65), rgba(10,14,30,1))" }} />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-5">UPTECH Service</p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-[1.05] mb-6">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #ffffff 0%, #2563EB 50%, #22C55E 100%)" }}>
                Business Support Services
              </span>
            </h1>
            <div className="max-w-2xl backdrop-blur-md bg-white/[0.05] border border-white/[0.1] rounded-2xl p-6 mb-8">
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
                These services will be offered directly and through our partners
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>Access Services</Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>Get in Touch</Button>
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
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl" style={{ background: `linear-gradient(to right, ${stat.color}, ${stat.color}60)` }} />
                <div className="absolute -top-1 left-4 right-4 h-4 rounded-full opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500" style={{ background: stat.color }} />
                <div className="font-heading font-extrabold text-3xl sm:text-4xl mb-2" style={{ color: stat.color, textShadow: `0 0 30px ${stat.color}40` }}>
                  {stat.value}
                </div>
                <p className="text-white/50 text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="relative bg-[#EEECEA]">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#2563EB]" />
        <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-4">Offered directly and through our partners</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl lg:text-3xl leading-snug mb-5">
                Essential Business Infrastructure for Startups and Growing Companies
              </h2>
              <div className="h-px bg-gradient-to-r from-[#2563EB]/40 via-[#22C55E]/20 to-transparent mb-5" />
              <p className="text-[#5A5F72] text-lg sm:text-xl leading-relaxed mb-4">
                Starting and scaling a business involves navigating a complex landscape of legal, financial, and operational requirements. UPTECH&apos;s Business Support Services remove the friction &mdash; giving you access to trusted professionals and streamlined processes so you can focus on building your product and growing your business.
              </p>
              <p className="text-[#5A5F72] text-lg sm:text-xl leading-relaxed">
                Whether you&apos;re registering a company, protecting intellectual property, preparing for investment, or managing compliance &mdash; our team and partners are here to help at every stage.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="relative bg-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#2563EB]" />
        <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E] mb-4">Services</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">What We Offer</h2>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#22C55E] to-[#22C55E]/40 mb-4" />
              <p className="text-[#7A7E8F] text-lg sm:text-xl max-w-2xl leading-relaxed">Seven core business support services covering the full startup lifecycle.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group relative bg-white border border-[#D8D5CF] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300 shadow-sm flex flex-col"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(to right, ${service.color}, ${service.color}60)` }} />
                    <div className="p-6 flex flex-col flex-1">
                      <div className="relative mb-5">
                        <div className="relative w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}>
                          <Icon className="w-5 h-5" style={{ color: service.color }} strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#2563EB] transition-colors duration-200">{service.title}</h3>
                      <div className="h-px bg-[#D8D5CF] mb-3" />
                      <p className="text-base text-[#5A5F72] leading-relaxed mb-4 flex-1">{service.description}</p>
                      <ul className="space-y-1.5">
                        {service.features.map((f) => (
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

      {/* ── How It Works ── */}
      <section className="relative bg-[#EEECEA]">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#2563EB]" />
        <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-4">Process</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">How It Works</h2>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#2563EB] to-[#2563EB]/40 mb-4" />
              <p className="text-[#7A7E8F] text-lg sm:text-xl max-w-2xl leading-relaxed">A simple, structured process from consultation to ongoing support.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative bg-white border border-[#D8D5CF] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300 shadow-sm"
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(to right, ${step.color}, ${step.color}60)` }} />
                  <div className="p-6">
                    <div className="relative mb-5">
                      <div className="relative w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold border" style={{ background: `${step.color}25`, borderColor: `${step.color}50` }}>
                        {step.number}
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#2563EB] transition-colors duration-200">{step.title}</h3>
                    <p className="text-[#5A5F72] text-base leading-relaxed mb-4">{step.description}</p>
                    <div className="flex items-center gap-2 pt-3 border-t border-[#D8D5CF]">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: step.color }} strokeWidth={2} />
                      <span className="text-sm font-semibold" style={{ color: step.color }}>{step.outcome}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why Choose UPTECH ── */}
      <section className="relative bg-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#C41E3A]" />
        <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C41E3A] mb-4">Advantages</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">Why Choose UPTECH</h2>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#C41E3A] to-[#C41E3A]/40 mb-4" />
              <p className="text-[#7A7E8F] text-lg sm:text-xl max-w-2xl leading-relaxed">What makes our business support services different.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUptech.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative bg-white border border-[#D8D5CF] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300 shadow-sm"
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(to right, ${item.color}, ${item.color}60)` }} />
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#2563EB] transition-colors duration-200">{item.title}</h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-[#5A5F72] text-base leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative bg-[#EEECEA]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C41E3A] mb-4">FAQ</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">Frequently Asked Questions</h2>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#C41E3A] to-[#C41E3A]/40 mb-4" />
              <p className="text-[#7A7E8F] text-lg sm:text-xl max-w-2xl leading-relaxed">Common questions about our business support services.</p>
            </div>
            <FAQSection faqs={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative bg-[#131942] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 bg-[#2563EB]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-15 bg-[#2563EB]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 lg:py-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-4">Get Started</p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                Need Business Support? Let&apos;s Talk.
              </h2>
              <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
                Whether you&apos;re registering a company, protecting IP, or preparing for investment &mdash; our team and partners are here to help you build on solid foundations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/membership" variant="primary" size="lg" showArrow>Become a Member</Button>
                <Button href="/contact" variant="glass" size="lg" showArrow>Contact Us</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

function FAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const color = faqColors[index % faqColors.length];
        return (
          <motion.div
            key={faq.question}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group relative bg-white border border-[#D8D5CF] rounded-xl overflow-hidden hover:border-[#D8D5CF] transition-all duration-300 shadow-sm"
          >
            <div
              className="absolute top-0 bottom-0 left-0 w-1 transition-opacity duration-300"
              style={{ background: `linear-gradient(to bottom, ${color}, ${color}60)`, opacity: isOpen ? 1 : 0 }}
            />
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center gap-4 p-5 lg:p-6 text-left"
            >
              <span
                className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-colors duration-300"
                style={isOpen ? { background: color, color: "#fff" } : { background: `${color}15`, color }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-heading font-semibold text-[#1C1F2E] text-base flex-1">{faq.question}</span>
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                style={isOpen ? { background: `${color}15` } : { background: "transparent" }}
              >
                <ChevronDown
                  className="w-4.5 h-4.5 transition-transform duration-300"
                  style={{ color: isOpen ? color : "#7A7E8F", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
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
                  <div className="px-5 lg:px-6 pb-5 lg:pb-6 pl-[4.25rem] lg:pl-[4.75rem]">
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
