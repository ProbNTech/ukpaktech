"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { CheckCircle2, ChevronDown, Megaphone, Globe, PenTool, Calendar, Mail, BarChart3, TrendingUp, Eye, Users, Zap } from "lucide-react";
import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

const stats = [
  { value: "150+", label: "Products Promoted", color: "#2563EB" },
  { value: "12M+", label: "Audience Reach", color: "#22C55E" },
  { value: "40+", label: "Campaign Launches", color: "#8b5cf6" },
  { value: "8x", label: "Avg. ROI", color: "#f59e0b" },
];

const offerings = [
  { icon: Megaphone, color: "#C41E3A", title: "Product & Solutions Showcase", description: "Feature your software products, digital platforms, and services through Council channels, events, and curated industry showcases.", features: ["Featured product listings", "Demo day presentations", "Industry showcase placement"] },
  { icon: Globe, color: "#22C55E", title: "Cross-Border Promotion", description: "Reach new audiences in the UK, Europe, Middle East, and Africa through targeted marketing campaigns and strategic partnerships.", features: ["Multi-market campaigns", "Localised messaging", "Partner network amplification"] },
  { icon: PenTool, color: "#8b5cf6", title: "Content & Thought Leadership", description: "Publish articles, case studies, and insights to position your company as an industry leader.", features: ["Ghostwritten articles", "Case study creation", "Expert commentary placement"] },
  { icon: Calendar, color: "#f59e0b", title: "Event Marketing", description: "Promote your brand at Council events, exhibitions, and trade delegations with premium visibility packages.", features: ["Speaking opportunities", "Exhibition booths", "Sponsored networking sessions"] },
  { icon: Mail, color: "#2563EB", title: "Digital Campaigns", description: "Leverage Council digital channels including email, social media, and the web platform for targeted outreach.", features: ["Email marketing campaigns", "Social media promotion", "Website feature placement"] },
  { icon: BarChart3, color: "#ef4444", title: "Market Intelligence", description: "Access insights on buyer preferences, competitive landscape, and market trends to refine your marketing strategy.", features: ["Market reports", "Competitor analysis", "Buyer persona insights"] },
];

const steps = [
  { number: "01", title: "Onboard", description: "Join the hub and share your product portfolio, target markets, and growth objectives.", outcome: "Strategy brief prepared", color: "#2563EB" },
  { number: "02", title: "Strategy", description: "We develop a tailored cross-border marketing strategy aligned with your business goals.", outcome: "Campaign plan approved", color: "#22C55E" },
  { number: "03", title: "Execute", description: "Launch campaigns across Council channels, events, and partner networks.", outcome: "Campaigns live", color: "#8b5cf6" },
  { number: "04", title: "Grow", description: "Track results, optimise performance, and scale your international presence.", outcome: "ROI measured & scaled", color: "#f59e0b" },
];

const results = [
  { icon: Eye, color: "#2563EB", metric: "12M+", title: "Impressions Delivered", description: "Across email, social, web, and event channels for member products." },
  { icon: Users, color: "#22C55E", metric: "3,500+", title: "Qualified Leads Generated", description: "Warm leads delivered to member companies through targeted campaigns." },
  { icon: TrendingUp, color: "#f59e0b", metric: "8x", title: "Average Campaign ROI", description: "Return on investment across digital and event marketing programs." },
  { icon: Zap, color: "#ef4444", metric: "72hrs", title: "Average Campaign Launch", description: "From brief to live campaign across Council channels." },
];

const targetAudience = [
  { title: "Tech SMEs", description: "Looking to expand into international markets with limited marketing budgets.", color: "#2563EB" },
  { title: "Scale-Ups", description: "Seeking brand visibility, lead generation, and market positioning across borders.", color: "#22C55E" },
  { title: "Established Firms", description: "Promoting new products or entering new regional markets via Council channels.", color: "#f59e0b" },
  { title: "SaaS Companies", description: "Targeting UK, European, and Middle Eastern buyers for subscription software.", color: "#8b5cf6" },
];

const faqs = [
  { question: "What types of products can be promoted?", answer: "We promote software products, digital platforms, SaaS solutions, technology services, and hardware products from our member companies. The product must be from a Council member or partner organisation." },
  { question: "How much does it cost?", answer: "Core marketing services are included in UPTECH membership. Premium packages \u2014 including dedicated campaigns, event sponsorship, and bespoke content creation \u2014 are available as add-ons with transparent pricing." },
  { question: "What channels do you use for promotion?", answer: "We use Council email newsletters (10,000+ subscribers), social media channels, the UPTECH website, partner networks, and our events program including summits, exhibitions, and trade delegations." },
  { question: "How do you measure campaign success?", answer: "We provide detailed analytics including impressions, click-through rates, lead generation, and ROI metrics. Monthly reports track campaign performance against agreed KPIs." },
];

const faqColors = ["#2563EB", "#8b5cf6", "#22C55E", "#f59e0b"];

export default function DigitalMarketingPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-[#0B0F1A]">
      {/* ── Hero Section ── */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <Image
          src="/image/london-images/digital-marketing-dashboard.jpg"
          alt="Digital Marketing Hub"
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
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #ffffff 0%, #C41E3A 50%, #f59e0b 100%)" }}>
                Digital Marketing Hub
              </span>
            </h1>
            <div className="max-w-2xl backdrop-blur-md bg-white/[0.05] border border-white/[0.1] rounded-2xl p-6 mb-8">
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
                Promote your software solutions, platforms, and technology services across the UK, Europe, Middle East and Africa. Accelerate cross-border growth with practical, results-driven marketing support.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>Get Started</Button>
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
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-10 bg-[#C41E3A]" />
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-5">Capabilities</p>
              <h2 className="font-heading font-extrabold text-white/90 text-xl sm:text-2xl lg:text-3xl leading-snug mb-8">
                Practical, Results-Driven Marketing for Technology Companies
              </h2>
              <div className="h-px bg-gradient-to-r from-[#C41E3A]/40 via-[#f59e0b]/20 to-transparent mb-8" />
              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-5">
                The Digital Product Marketing Hub is UPTECH&apos;s dedicated platform for promoting member technology products and services to international audiences. We combine our extensive network, event program, and digital channels to deliver measurable marketing results.
              </p>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                Whether you&apos;re launching a new SaaS product, expanding into the Middle East, or positioning your company as a thought leader &mdash; we provide the strategy, channels, and execution support to get you there.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── What We Offer ── */}
      <section className="relative bg-[#0E1221]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-[120px] opacity-10 bg-[#8b5cf6]" />
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E] mb-4">Services</p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">What We Offer</h2>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#22C55E] to-[#22C55E]/40 mb-4" />
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed">Six core marketing services tailored for tech SMEs, scale-ups, and established firms.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offerings.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group relative backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:-translate-y-1 hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(to right, ${item.color}, ${item.color}60)` }} />
                    <div className="p-6 flex flex-col flex-1">
                      <div className="relative mb-5">
                        <div className="absolute inset-[-8px] rounded-xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500" style={{ background: item.color }} />
                        <div className="relative w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30`, boxShadow: `0 0 20px ${item.color}10` }}>
                          <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-white text-base mb-2 group-hover:text-[#2563EB] transition-colors duration-200">{item.title}</h3>
                      <div className="h-px bg-white/10 mb-3" />
                      <p className="text-sm text-white/50 leading-relaxed mb-4 flex-1">{item.description}</p>
                      <ul className="space-y-1.5">
                        {item.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-xs text-white/50">
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
      <section className="relative bg-[#131942]">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-10 bg-[#2563EB]" />
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b5cf6] mb-4">Process</p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">How It Works</h2>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#8b5cf6]/40 mb-4" />
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed">From onboarding to measurable growth &mdash; a clear four-step process.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
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

      {/* ── Results That Speak ── */}
      <section className="relative bg-[#0B0F1A]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-10 bg-[#f59e0b]" />
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f59e0b] mb-4">Impact</p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">Results That Speak</h2>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#f59e0b]/40 mb-4" />
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed">Real numbers from our marketing programs across member companies.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {results.map((item, i) => {
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
                      <div className="relative mb-4">
                        <div className="absolute inset-[-8px] rounded-xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500" style={{ background: item.color }} />
                        <div className="relative w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30`, boxShadow: `0 0 20px ${item.color}10` }}>
                          <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                      </div>
                      <div className="font-heading font-extrabold text-2xl mb-1" style={{ color: item.color, textShadow: `0 0 20px ${item.color}30` }}>
                        {item.metric}
                      </div>
                      <h3 className="font-heading font-bold text-white text-sm mb-2">{item.title}</h3>
                      <div className="h-px bg-white/10 mb-2" />
                      <p className="text-xs text-white/50 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Who Is This For ── */}
      <section className="relative bg-[#0E1221]">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-[120px] opacity-10 bg-[#22C55E]" />
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-4">For You</p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">Who Is This For</h2>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#2563EB] to-[#2563EB]/40 mb-4" />
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed">The Marketing Hub is designed for technology companies ready to grow internationally.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetAudience.map((item, i) => (
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
                    <h3 className="font-heading font-bold text-white text-base mb-2 group-hover:text-[#2563EB] transition-colors duration-200">{item.title}</h3>
                    <div className="h-px bg-white/10 mb-3" />
                    <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative bg-[#131942]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C41E3A] mb-4">FAQ</p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">Frequently Asked Questions</h2>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#C41E3A] to-[#C41E3A]/40 mb-4" />
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed">Common questions about the Digital Product Marketing Hub.</p>
            </div>
            <FAQSection faqs={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative bg-[#0B0F1A] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 bg-[#C41E3A]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-15 bg-[#f59e0b]" />
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
                Ready to Grow Your Market Presence Globally?
              </h2>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
                Join the Digital Product Marketing Hub and start promoting your technology solutions to a global audience across the UK, Europe, Middle East, and Africa.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/membership" variant="primary" size="lg" showArrow>Join the Hub</Button>
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
