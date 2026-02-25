"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { CheckCircle2, Globe, Handshake, BarChart3, Users, Target, Lightbulb, ChevronDown, Search, GitBranch, MessageSquare, TrendingUp } from "lucide-react";
import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

const stats = [
  { value: "60+", label: "Countries Connected", color: "#2563EB" },
  { value: "500+", label: "Partner Organisations", color: "#22C55E" },
  { value: "3,000+", label: "Business Introductions", color: "#8b5cf6" },
  { value: "\u00A350M+", label: "Deals Facilitated", color: "#f59e0b" },
];

const whyChooseUs = [
  { icon: Handshake, title: "Strategic Connections", description: "Every event brings together the right founders and the right investors who can help them scale.", color: "#2563EB" },
  { icon: Globe, title: "Comprehensive Support", description: "From event design to investor outreach, branding, post-event follow-up and deal tracking \u2014 we handle every step.", color: "#22C55E" },
  { icon: BarChart3, title: "Proven Results", description: "Our track record of funding success speaks for itself across multiple markets.", color: "#C41E3A" },
  { icon: Users, title: "Global Ecosystem", description: "A growing network of VCs, angels, incubators, and ecosystem partners across continents.", color: "#8b5cf6" },
  { icon: Target, title: "Data-Driven Insights", description: "We use analytics to identify high-potential startups and investor interests.", color: "#f59e0b" },
  { icon: Lightbulb, title: "Cross-Border Expertise", description: "Deep understanding of both UK and Pakistan markets, regulations, and business cultures.", color: "#ef4444" },
];

const partners = [
  { title: "Venture Capital & Private Equity Firms", description: "Access to tier-1 VC funds and PE firms across London, Karachi, and global hubs." },
  { title: "Angel Networks & Family Offices", description: "Curated introductions to angel investors and family offices seeking tech opportunities." },
  { title: "Government Startup Missions", description: "Partnerships with government-backed trade missions and startup support programs." },
  { title: "University Incubators & Accelerators", description: "Collaboration with leading academic incubation and acceleration programs." },
  { title: "Corporate Innovation & R&D Divisions", description: "Connect with corporate innovation labs and R&D divisions seeking partnerships." },
];

const processSteps = [
  { number: "01", title: "Discovery", description: "We learn about your business, goals, target markets, and growth stage to understand your needs.", outcome: "Tailored profile created", icon: Search, color: "#2563EB" },
  { number: "02", title: "Matching", description: "Using our database and network intelligence, we identify the most relevant connections for your business.", outcome: "Curated shortlist prepared", icon: GitBranch, color: "#8b5cf6" },
  { number: "03", title: "Introduction", description: "We facilitate warm introductions through events, meetings, or direct outreach to matched partners.", outcome: "Meetings arranged", icon: MessageSquare, color: "#22C55E" },
  { number: "04", title: "Follow-Through", description: "We track outcomes, facilitate follow-ups, and ensure connections translate into tangible business results.", outcome: "Deals tracked & supported", icon: TrendingUp, color: "#f59e0b" },
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
  { question: "What markets do you cover?", answer: "Our primary focus is the UK\u2013Pakistan corridor, but our network extends across Europe, Middle East, Africa, and North America through our Enterprise Europe Network partnership and global investor relationships." },
  { question: "How are introductions facilitated?", answer: "We facilitate introductions through a mix of curated events, one-to-one meetings, virtual connects, and our partner platform. Each introduction is warm and contextualised to maximise success." },
  { question: "Is there a cost beyond membership?", answer: "Core networking services are included in your UPTECH membership. Premium services such as bespoke matchmaking, dedicated advisory, and event sponsorships are available as add-ons." },
];

const faqColors = ["#2563EB", "#8b5cf6", "#22C55E", "#f59e0b"];

export default function BusinessNetworksPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-[#0B0F1A]">
      {/* ── Hero Section ── */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <Image
          src="/image/london-images/business-networking-event.jpg"
          alt="Business Networks"
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
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #ffffff 0%, #2563EB 50%, #8b5cf6 100%)" }}>
                Business Networks
              </span>
            </h1>
            <div className="max-w-2xl backdrop-blur-md bg-white/[0.05] border border-white/[0.1] rounded-2xl p-6 mb-8">
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
                Access the world&apos;s largest business network with strategic connections, comprehensive advice, and tailored market support across the UK and international markets.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>Become a Member</Button>
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
                <p className="text-white/50 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro Section with Sidebar ── */}
      <section className="relative bg-[#0B0F1A]">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-10 bg-[#2563EB]" />
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <AnimatedSection>
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-3">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-5">Overview</p>
                <h2 className="font-heading font-extrabold text-white text-xl sm:text-2xl lg:text-3xl leading-snug mb-6">
                  The World&apos;s Largest Business Network &mdash; Tailored for the UK&ndash;Pakistan Tech Corridor
                </h2>
                <div className="h-px bg-gradient-to-r from-[#2563EB]/40 via-[#8b5cf6]/20 to-transparent mb-8" />
                <p className="text-white/60 text-base leading-relaxed mb-5">
                  Our specialists provide access to comprehensive and tailored advice covering both the UK and international markets. They build on a heritage of collaboration with the Enterprise Europe Network, the most extensive association of innovation and growth support organisations around the world.
                </p>
                <p className="text-white/60 text-base leading-relaxed mb-5">
                  This advice ranges from sourcing and establishing connections with new collaborators and potential partners, to information on local regulations and market entry strategies.
                </p>
                <p className="text-white/60 text-base leading-relaxed">
                  Whether you&apos;re a startup seeking your first international client, or an enterprise expanding into new geographies &mdash; our network delivers the introductions, insights, and institutional support you need to succeed.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="backdrop-blur-md bg-white/[0.03] border border-white/[0.08] rounded-xl p-8 sticky top-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#2563EB15", border: "1px solid #2563EB30" }}>
                      <Globe className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white">Enterprise Europe Network</h3>
                  </div>
                  <div className="h-px bg-white/10 mb-4" />
                  <p className="text-sm text-white/50 leading-relaxed mb-4">
                    Access live global partnering opportunities through the Enterprise Europe Network &mdash; the most extensive association of innovation and growth support organisations worldwide.
                  </p>
                  <ul className="space-y-2 mb-5">
                    {["Live partnering database", "Cross-border advisory", "Innovation audits", "Market intelligence"].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-white/50">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant="glass" showArrow>Explore Opportunities</Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="relative bg-[#0E1221]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-[120px] opacity-10 bg-[#8b5cf6]" />
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E] mb-4">Advantages</p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">Why Choose Us</h2>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#22C55E] to-[#22C55E]/40 mb-4" />
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed">Six reasons organisations trust UPTECH to build their international network.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group relative backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:-translate-y-1 hover:border-white/[0.15] transition-all duration-300"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(to right, ${item.color}, ${item.color}60)` }} />
                    <div className="p-6">
                      <div className="relative mb-5">
                        <div className="absolute inset-[-8px] rounded-xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500" style={{ background: item.color }} />
                        <div className="relative w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30`, boxShadow: `0 0 20px ${item.color}10` }}>
                          <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-white text-base mb-2 group-hover:text-[#2563EB] transition-colors duration-200">{item.title}</h3>
                      <div className="h-px bg-white/10 mb-3" />
                      <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="relative bg-[#131942]">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-10 bg-[#2563EB]" />
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b5cf6] mb-4">Process</p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">How It Works</h2>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#8b5cf6]/40 mb-4" />
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed">A structured, results-driven approach to building your international network.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
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
                      <div className="flex items-center justify-between mb-5">
                        <div className="relative">
                          <div className="absolute inset-[-4px] rounded-full opacity-30 group-hover:opacity-60 blur-md transition-opacity duration-500" style={{ background: step.color }} />
                          <div className="relative w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold border" style={{ background: `${step.color}25`, borderColor: `${step.color}50`, boxShadow: `0 0 20px ${step.color}30` }}>
                            {step.number}
                          </div>
                        </div>
                        <div className="relative">
                          <div className="absolute inset-[-6px] rounded-xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500" style={{ background: step.color }} />
                          <div className="relative w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${step.color}15`, border: `1px solid ${step.color}30` }}>
                            <Icon className="w-5 h-5" style={{ color: step.color }} strokeWidth={1.5} />
                          </div>
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-white text-lg mb-2 group-hover:text-[#2563EB] transition-colors duration-200">{step.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-4">{step.description}</p>
                      <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: step.color }} strokeWidth={2} />
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

      {/* ── Partners & Target Market ── */}
      <section className="relative bg-[#0B0F1A]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-10 bg-[#22C55E]" />
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="mb-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-4">Collaborations</p>
                  <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl leading-tight mb-4">Our Partners</h2>
                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#2563EB] to-[#2563EB]/40 mb-4" />
                  <p className="text-white/40 text-base leading-relaxed">We work with the best in the ecosystem to deliver results.</p>
                </div>
                <div className="space-y-4">
                  {partners.map((partner, i) => (
                    <motion.div
                      key={partner.title}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="group relative backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:-translate-y-1 hover:border-white/[0.15] transition-all duration-300"
                    >
                      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "linear-gradient(to right, #2563EB, #2563EB60)" }} />
                      <div className="p-5 flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-heading font-bold text-white text-sm mb-1">{partner.title}</h4>
                          <p className="text-xs text-white/50 leading-relaxed">{partner.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E] mb-4">Audience</p>
                  <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl leading-tight mb-4">Who Is This For</h2>
                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#22C55E] to-[#22C55E]/40 mb-4" />
                  <p className="text-white/40 text-base leading-relaxed">Our network is designed for organisations at every growth stage.</p>
                </div>
                <ul className="space-y-0">
                  {targetMarket.map((item) => (
                    <li key={item} className="flex items-start gap-3 py-4 border-b border-white/[0.08] last:border-b-0">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed">Common questions about UPTECH Business Networks.</p>
            </div>
            <FAQSection faqs={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative bg-[#131942] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 bg-[#2563EB]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-15 bg-[#8b5cf6]" />
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
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-5">Join the Network</p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                Ready to Expand Your Network Across Continents?
              </h2>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
                Join the UPTECH business network and unlock strategic connections, market insights, and partnership opportunities across the UK, Pakistan, Europe, Middle East, and Africa.
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
