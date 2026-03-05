"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import HeroSection from "@/components/ui/hero-section-9";
import { GlobalCTA } from "@/components/GlobalCTA";
import { CheckCircle2, Globe, Handshake, BarChart3, Users, Target, ChevronDown, Search, GitBranch, MessageSquare, TrendingUp } from "lucide-react";
import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useRouter } from "next/navigation";

const heroStats = [
  { value: "60+", label: "Countries Connected", icon: <Globe className="h-5 w-5 text-muted-foreground" /> },
  { value: "500+", label: "Partner Organisations", icon: <Users className="h-5 w-5 text-muted-foreground" /> },
  { value: "3,000+", label: "Business Introductions", icon: <MessageSquare className="h-5 w-5 text-muted-foreground" /> },
  { value: "\u00A350M+", label: "Deals Facilitated", icon: <BarChart3 className="h-5 w-5 text-muted-foreground" /> },
];

const whyChooseUs = [
  { icon: Handshake, title: "Strategic Connections", description: "We ensure that every event brings together the right founders and the right investors who can help them scale.", color: "#2563EB" },
  { icon: Globe, title: "Comprehensive Support", description: "From event design to investor outreach, branding, post-event follow-up and deal tracking, we handle every step.", color: "#22C55E" },
  { icon: BarChart3, title: "Proven Results", description: "Our track record of funding success speaks for itself.", color: "#C41E3A" },
  { icon: Users, title: "Global Ecosystem", description: "A growing network of VCs, angels, incubators, and ecosystem partners across continents.", color: "#2563EB" },
  { icon: Target, title: "Data-Driven Insights", description: "We use analytics to identify high-potential startups and investor interests.", color: "#22C55E" },
];

const partners = [
  { title: "Venture Capital & Private Equity Firms" },
  { title: "Angel Networks & Family Offices" },
  { title: "Government Startup Missions" },
  { title: "University Incubators & Accelerators" },
  { title: "Corporate Innovation & R&D Divisions" },
];

const processSteps = [
  { number: "01", title: "Discovery", description: "We learn about your business, goals, target markets, and growth stage to understand your needs.", outcome: "Tailored profile created", icon: Search, color: "#2563EB" },
  { number: "02", title: "Matching", description: "Using our database and network intelligence, we identify the most relevant connections for your business.", outcome: "Curated shortlist prepared", icon: GitBranch, color: "#22C55E" },
  { number: "03", title: "Introduction", description: "We facilitate warm introductions through events, meetings, or direct outreach to matched partners.", outcome: "Meetings arranged", icon: MessageSquare, color: "#C41E3A" },
  { number: "04", title: "Follow-Through", description: "We track outcomes, facilitate follow-ups, and ensure connections translate into tangible business results.", outcome: "Deals tracked & supported", icon: TrendingUp, color: "#2563EB" },
];

const targetMarket = [
  "Early-stage startups (Seed to Series A)",
  "Venture capital firms, angel investors, and family offices",
  "Accelerators, incubators, and innovation hubs",
  "Corporate innovation and CSR programs",
  "Government and development agencies supporting entrepreneurship",
];

const revenueModel = [
  "Event organization fees (B2B contracts)",
  "Sponsorship packages",
  "Ticketing and participation fees",
  "Partnership retainers for recurring event programs",
];

const faqs = [
  { question: "How do I access the business network?", answer: "All UPTECH members get automatic access to our business network. Once you join, our team will schedule an onboarding call to understand your needs and start making connections." },
  { question: "What markets do you cover?", answer: "Our primary focus is the UK\u2013Pakistan corridor, but our network extends across Europe, Middle East, Africa, and North America through our Enterprise Europe Network partnership and global investor relationships." },
  { question: "How are introductions facilitated?", answer: "We facilitate introductions through a mix of curated events, one-to-one meetings, virtual connects, and our partner platform. Each introduction is warm and contextualised to maximise success." },
  { question: "Is there a cost beyond membership?", answer: "Core networking services are included in your UPTECH membership. Premium services such as bespoke matchmaking, dedicated advisory, and event sponsorships are available as add-ons." },
];

const faqColors = ["#2563EB", "#22C55E", "#C41E3A", "#2563EB"];

export default function BusinessNetworksPage() {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {/* â”€â”€ Hero Section â”€â”€ */}
      <HeroSection
        title={
          <>
            Business <span className="text-primary">Networks</span>
          </>
        }
        subtitle="The world's largest business network."
        description="Connect with vetted founders, corporates, investors, and ecosystem partners through curated introductions, high-impact events, and cross-border programmes designed to turn conversations into partnerships."
        actions={[
          { text: "Become a Member", onClick: () => router.push("/membership"), variant: "default" },
          { text: "Get in Touch", onClick: () => router.push("/contact"), variant: "outline" },
        ]}
        stats={heroStats}
        images={[
          "/image/services/business-networks/collage-1.webp",
          "/image/services/business-networks/collage-2.webp",
          "/image/services/business-networks/collage-3.webp",
          "/image/services/business-networks/collage-4.webp",
          "/image/services/business-networks/collage-5.webp",
          "/image/services/business-networks/collage-6.webp",
        ]}
        className="bg-[var(--bg-default)]"
      />

      {/* â”€â”€ Intro Section with Sidebar â”€â”€ */}
      <section className="relative bg-[#EEECEA]">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#2563EB]" />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-3">
                <SectionHeader label="Overview" title="The World's Largest Business Network" color="blue" />
                <p className="text-[#5A5F72] text-lg leading-relaxed mb-4">
                  Our specialists provide access to comprehensive and tailored advice covering both the UK and international markets. They build on a heritage of collaboration with the Enterprise Europe Network, the most extensive association of innovation and growth support organizations around the world. This advice ranges from sourcing and establishing connections with new collaborators and potential partners, to information on local regulations. To find partners via Enterprise Europe Network, please see the section &apos;Live global partnering opportunities&apos; below.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-white border border-[#D8D5CF] rounded-xl p-8 shadow-md sticky top-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#2563EB15", border: "1px solid #2563EB30" }}>
                      <Globe className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">Enterprise Europe Network</h3>
                  </div>
                  <div className="h-px bg-[#D8D5CF] mb-4" />
                  <p className="text-base text-[#5A5F72] leading-relaxed mb-4">
                    Access live global partnering opportunities through the Enterprise Europe Network &mdash; the most extensive association of innovation and growth support organisations worldwide.
                  </p>
                  <ul className="space-y-2 mb-5">
                    {["Live partnering database", "Cross-border advisory", "Innovation audits", "Market intelligence"].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-base text-[#5A5F72]">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant="glass">Explore Opportunities</Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* â”€â”€ Why Choose Us â”€â”€ */}
      <section className="relative bg-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#2563EB]" />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <SectionHeader label="Advantages" title="Why Choose Us" subtitle="Five reasons organisations trust UPTECH to build their international network." color="green" />
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
                    className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                    <div className="p-6">
                      <div className="relative mb-5">
                        <div className="relative w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                          <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#2563EB] transition-colors duration-200">{item.title}</h3>
                      <div className="h-px bg-[#D8D5CF] mb-3" />
                      <p className="text-[#5A5F72] text-base leading-relaxed">{item.description}</p>
                    </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* â”€â”€ How It Works â”€â”€ */}
      <section className="relative bg-[#EEECEA]">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#2563EB]" />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <SectionHeader label="Process" title="How It Works" subtitle="A structured, results-driven approach to building your international network." color="blue" />
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
                    className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-5">
                        <div className="relative">
                          <div className="relative w-10 h-10 rounded-full flex items-center justify-center text-white text-base font-bold border" style={{ background: `${step.color}25`, borderColor: `${step.color}50` }}>
                            {step.number}
                          </div>
                        </div>
                        <div className="relative">
                          <div className="relative w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${step.color}15`, border: `1px solid ${step.color}30` }}>
                            <Icon className="w-5 h-5" style={{ color: step.color }} strokeWidth={1.5} />
                          </div>
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#2563EB] transition-colors duration-200">{step.title}</h3>
                      <p className="text-[#5A5F72] text-base leading-relaxed mb-4">{step.description}</p>
                      <div className="flex items-center gap-2 pt-3 border-t border-[#D8D5CF]">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: step.color }} strokeWidth={2} />
                        <span className="text-base font-semibold" style={{ color: step.color }}>{step.outcome}</span>
                      </div>
                    </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* â”€â”€ Partners & Target Market â”€â”€ */}
      <section className="relative bg-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#22C55E]" />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <SectionHeader label="Collaborations" title="Our Partners" subtitle="We proudly collaborate with:" color="blue" />
                <div className="space-y-3">
                  {partners.map((partner, i) => (
                    <motion.div
                      key={partner.title}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                    >
                      <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                      <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                      <div className="p-5 flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-heading font-bold text-[#1C1F2E] text-base">{partner.title}</h4>
                        </div>
                      </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <SectionHeader label="Audience" title="Target Market" subtitle="Our network is designed for organisations at every growth stage." color="green" />
                <ul className="space-y-0">
                  {targetMarket.map((item) => (
                    <li key={item} className="flex items-start gap-3 py-4 border-b border-[#D8D5CF] last:border-b-0">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-[#5A5F72] text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* â”€â”€ Revenue Model â”€â”€ */}
      <section className="relative bg-[#EEECEA]">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-[120px] opacity-5 bg-[#C41E3A]" />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <SectionHeader label="Revenue" title="Revenue Model" color="red" />
            <ul className="space-y-0">
              {revenueModel.map((item) => (
                <li key={item} className="flex items-start gap-3 py-4 border-b border-[#D8D5CF] last:border-b-0">
                  <CheckCircle2 className="w-4 h-4 text-[#C41E3A] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-[#5A5F72] text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* â”€â”€ FAQ â”€â”€ */}
      <section className="relative bg-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20 relative z-10">
          <AnimatedSection>
            <SectionHeader label="FAQ" title="Frequently Asked Questions" subtitle="Common questions about UPTECH Business Networks." color="red" />
            <FAQSection faqs={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* â”€â”€ CTA Section â”€â”€ */}
      <GlobalCTA
        label="Join the Network"
        title="Ready to Expand Your Network Across Continents?"
        subtitle="Join the UPTECH business network and unlock strategic connections, market insights, and partnership opportunities across the UK, Pakistan, Europe, Middle East, and Africa."
        primaryButtonText="Become a Member"
        primaryButtonLink="/membership"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
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
                className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-base font-bold transition-colors duration-300"
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
