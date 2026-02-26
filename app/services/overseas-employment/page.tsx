"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { CheckCircle2, Building2, User, ChevronDown, Globe, Briefcase, Shield, TrendingUp, Clock, Award } from "lucide-react";
import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

const stats = [
  { value: "500+", label: "Placements Made", color: "#2563EB" },
  { value: "120+", label: "Partner Companies", color: "#22C55E" },
  { value: "15+", label: "Countries Covered", color: "#8b5cf6" },
  { value: "95%", label: "Satisfaction Rate", color: "#f59e0b" },
];

const employerBenefits = [
  { title: "Skilled Professionals", description: "Access skilled technology professionals for contract-based roles" },
  { title: "Flexible Teams", description: "Build flexible, high-performing teams without long-term commitments" },
  { title: "Fast Matching", description: "Save time and connect with pre-qualified talent networks" },
  { title: "Outsourcing Options", description: "Explore outsourcing and managed service partnerships" },
  { title: "International Expertise", description: "Expand your business with international expertise and collaboration" },
];

const professionalBenefits = [
  { title: "Global Opportunities", description: "Discover exciting international contract opportunities" },
  { title: "Cutting-Edge Projects", description: "Gain exposure to international and cutting-edge global technology projects" },
  { title: "Network Building", description: "Build your network and experience Cross-border industry networks" },
  { title: "Skill Development", description: "Develop skills while working with top-tier companies" },
  { title: "Career Pathways", description: "Professional development pathways" },
];

const processSteps = [
  { number: "01", title: "Register", description: "Create your profile as an employer or professional. Share your requirements, skills, and preferences.", outcome: "Profile activated", color: "#2563EB" },
  { number: "02", title: "Match", description: "Our team uses AI-assisted matching and manual curation to find the best fit for both parties.", outcome: "Shortlist prepared", color: "#8b5cf6" },
  { number: "03", title: "Interview", description: "Facilitated introductions and interviews between matched employers and professionals.", outcome: "Candidates selected", color: "#22C55E" },
  { number: "04", title: "Onboard", description: "We handle contracts, compliance, and onboarding to ensure a smooth start for all parties.", outcome: "Placement confirmed", color: "#f59e0b" },
];

const sectors = [
  { icon: Globe, color: "#2563EB", title: "Software Development", description: "Full-stack, frontend, backend, mobile, and cloud engineering professionals." },
  { icon: Shield, color: "#C41E3A", title: "Cybersecurity", description: "Security analysts, penetration testers, and compliance specialists." },
  { icon: TrendingUp, color: "#22C55E", title: "Data & AI", description: "Data scientists, ML engineers, and AI specialists for advanced analytics projects." },
  { icon: Briefcase, color: "#8b5cf6", title: "Product & Design", description: "Product managers, UX designers, and UI engineers for digital products." },
  { icon: Clock, color: "#f59e0b", title: "DevOps & Cloud", description: "DevOps engineers, cloud architects, and infrastructure specialists." },
  { icon: Award, color: "#ef4444", title: "FinTech & HealthTech", description: "Domain specialists for regulated industries including finance and healthcare." },
];

const faqs = [
  { question: "What types of contracts are available?", answer: "We facilitate fixed-term contracts (3\u201312 months), project-based engagements, and contract-to-hire arrangements. Contract terms are flexible and can be tailored to the needs of both employers and professionals." },
  { question: "How is compliance handled?", answer: "We manage all compliance aspects including work permits, tax obligations, employment law, and contractual agreements. Our legal team ensures all placements comply with UK and Pakistan employment regulations." },
  { question: "What skill levels are available?", answer: "Our talent pool ranges from mid-level professionals with 3+ years of experience to senior specialists and technical leads with 10+ years. We also support graduate placements through our partnership programs." },
  { question: "How long does the matching process take?", answer: "Typical matching takes 2\u20134 weeks from requirement submission to candidate shortlist. For urgent requirements, we offer an expedited process that can deliver candidates within 5\u20137 business days." },
  { question: "What are the costs for employers?", answer: "Employer fees are based on the contract value and duration. UPTECH members receive preferential rates. Contact us for a detailed pricing structure tailored to your requirements." },
];

const faqColors = ["#2563EB", "#8b5cf6", "#22C55E", "#f59e0b", "#C41E3A"];

export default function OverseasEmploymentPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-[#0B0F1A]">
      {/* ── Hero Section ── */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <Image
          src="/image/london-images/global-workforce.jpg"
          alt="Overseas Employment"
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
                Overseas Contract Employment Opportunities
              </span>
            </h1>
            <div className="max-w-2xl backdrop-blur-md bg-white/[0.05] border border-white/[0.1] rounded-2xl p-6 mb-8">
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
                The UK-Pakistan Tech Council facilitates skilled technology professionals with high-value overseas contract opportunities, helping both employers and talent thrive in global markets.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>Get Connected</Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>Learn More</Button>
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
                <p className="text-white/50 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="relative bg-[#0B0F1A]">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-10 bg-[#2563EB]" />
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-5">Overview</p>
              <h2 className="font-heading font-extrabold text-white/90 text-xl sm:text-2xl lg:text-3xl leading-snug mb-8">
                Our Focus
              </h2>
              <div className="h-px bg-gradient-to-r from-[#2563EB]/40 via-[#22C55E]/20 to-transparent mb-8" />
              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-5">
                We support ethical, compliant, and commercially viable pathways that connect skilled professionals with long-term, short-term and project-based opportunities across UK, Europe, Middle East and Pakistan.
              </p>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                We prioritise transparency, compliance, and long-term relationship building. Our goal is to create structured, sustainable talent mobility between the UK, Europe, Middle East and Pakistan&apos;s technology sectors. By enabling overseas contract employment, we strengthen collaboration, accelerate knowledge exchange, and support innovation across both ecosystems.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── For Employers & For Professionals ── */}
      <section className="relative bg-[#0E1221]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-[120px] opacity-10 bg-[#22C55E]" />
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Employers */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group relative backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:-translate-y-1 hover:border-white/[0.15] transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "linear-gradient(to right, #2563EB, #2563EB60)" }} />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="relative">
                      <div className="absolute inset-[-8px] rounded-xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500" style={{ background: "#2563EB" }} />
                      <div className="relative w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "#2563EB15", border: "1px solid #2563EB30", boxShadow: "0 0 20px #2563EB10" }}>
                        <Building2 className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white">For Employers</h3>
                  </div>
                  <div className="h-px bg-white/10 mb-5" />
                  <p className="text-sm text-white/50 leading-relaxed mb-5">
                    Find the Right Talent, Fast &mdash; We help organisations:
                  </p>
                  <div className="space-y-4">
                    {employerBenefits.map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                          <p className="text-xs text-white/40 leading-relaxed mt-0.5">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Professionals */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
                className="group relative backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:-translate-y-1 hover:border-white/[0.15] transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "linear-gradient(to right, #22C55E, #22C55E60)" }} />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="relative">
                      <div className="absolute inset-[-8px] rounded-xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500" style={{ background: "#22C55E" }} />
                      <div className="relative w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "#22C55E15", border: "1px solid #22C55E30", boxShadow: "0 0 20px #22C55E10" }}>
                        <User className="w-5 h-5 text-[#22C55E]" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white">For Professionals</h3>
                  </div>
                  <div className="h-px bg-white/10 mb-5" />
                  <p className="text-sm text-white/50 leading-relaxed mb-5">
                    Grow Your Career Globally &mdash; We provide access to:
                  </p>
                  <div className="space-y-4">
                    {professionalBenefits.map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                          <p className="text-xs text-white/40 leading-relaxed mt-0.5">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="relative bg-[#131942]">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-10 bg-[#8b5cf6]" />
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b5cf6] mb-4">Process</p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">How It Works</h2>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#8b5cf6]/40 mb-4" />
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed">A structured, compliant process from registration to placement.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:-translate-y-1 hover:border-white/[0.15] transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(to right, ${step.color}, ${step.color}60)` }} />
                  <div className="p-6">
                    <div className="relative mb-5">
                      <div className="absolute inset-[-4px] rounded-full opacity-30 group-hover:opacity-60 blur-md transition-opacity duration-500" style={{ background: step.color }} />
                      <div className="relative w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold border" style={{ background: `${step.color}25`, borderColor: `${step.color}50`, boxShadow: `0 0 20px ${step.color}30` }}>
                        {step.number}
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-white text-base mb-2 group-hover:text-[#2563EB] transition-colors duration-200">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">{step.description}</p>
                    <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: step.color }} strokeWidth={2} />
                      <span className="text-xs font-semibold" style={{ color: step.color }}>{step.outcome}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Technology Sectors ── */}
      <section className="relative bg-[#0B0F1A]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-10 bg-[#2563EB]" />
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E] mb-4">Sectors</p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">Technology Sectors We Cover</h2>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#22C55E] to-[#22C55E]/40 mb-4" />
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed">Our talent pool spans the full spectrum of modern technology disciplines.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((sector, i) => {
                const Icon = sector.icon;
                return (
                  <motion.div
                    key={sector.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group relative backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:-translate-y-1 hover:border-white/[0.15] transition-all duration-300"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(to right, ${sector.color}, ${sector.color}60)` }} />
                    <div className="p-6">
                      <div className="relative mb-4">
                        <div className="absolute inset-[-8px] rounded-xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500" style={{ background: sector.color }} />
                        <div className="relative w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${sector.color}15`, border: `1px solid ${sector.color}30`, boxShadow: `0 0 20px ${sector.color}10` }}>
                          <Icon className="w-5 h-5" style={{ color: sector.color }} strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-white text-base mb-2 group-hover:text-[#2563EB] transition-colors duration-200">{sector.title}</h3>
                      <div className="h-px bg-white/10 mb-3" />
                      <p className="text-sm text-white/50 leading-relaxed">{sector.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative bg-[#0E1221]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f59e0b] mb-4">FAQ</p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">Frequently Asked Questions</h2>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#f59e0b]/40 mb-4" />
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed">Common questions about overseas contract employment.</p>
            </div>
            <FAQSection faqs={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative bg-[#131942] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 bg-[#2563EB]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-15 bg-[#22C55E]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-5">Get Started</p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                Get connected. Access opportunities. Grow your impact.
              </h2>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
                Overseas contract employment through the Council provides a trusted, compliant, and efficient way to connect talent with opportunity. Our goal is to accelerate growth, enhance careers, and strengthen the UK-Pakistan tech ecosystem through high-quality contract placements.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/membership" variant="primary" size="lg" showArrow>Get Connected</Button>
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
            className="group relative backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:border-white/[0.12] transition-all duration-300"
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
              <span className="font-heading font-semibold text-white text-base flex-1">{faq.question}</span>
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
                    <div className="h-px bg-white/[0.08] mb-4" />
                    <p className="text-white/60 text-sm leading-[1.8]">{faq.answer}</p>
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
