"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { TrendingUp, Wallet, Users, Gift, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";

const stats = [
  { value: "200+", label: "SMEs Supported" },
  { value: "\u00A325M+", label: "Revenue Generated" },
  { value: "4", label: "Key Markets" },
  { value: "85%", label: "Member Satisfaction" },
];

const pillars = [
  {
    icon: TrendingUp,
    title: "Generating Sales",
    description: "Get exclusive insights and expert tips to help your tech SME grow in private and public sector markets both in the UK, Europe, Middle East & African continents.",
    features: ["Sales strategy workshops", "Lead generation tools", "Market access programs", "Procurement opportunities"],
  },
  {
    icon: Wallet,
    title: "Access to Finance Opportunities",
    description: "Specialist insight from investors, finance experts and founders on access finance to grow your business. Find the latest opportunities, including funding and partnership opportunities.",
    features: ["Investor introductions", "Grant applications support", "Financial modelling guidance", "Pitch preparation"],
  },
  {
    icon: Users,
    title: "Talent",
    description: "Find support and insights for accessing the talent you need to scale your business.",
    features: ["Talent matching services", "HR advisory support", "Skills development programs", "Remote team building"],
  },
  {
    icon: Gift,
    title: "Member Offers",
    description: "Get the latest exclusive benefits for UPTECH Members only.",
    features: ["Software discounts", "Event priority access", "Partner service deals", "Free consulting hours"],
  },
];

const markets = [
  { name: "United Kingdom", description: "Access UK government contracts, corporate partnerships, and a thriving startup ecosystem.", flag: "\uD83C\uDDEC\uD83C\uDDE7" },
  { name: "Europe", description: "Expand into European markets through our Enterprise Europe Network partnership.", flag: "\uD83C\uDDEA\uD83C\uDDFA" },
  { name: "Middle East", description: "Tap into the Gulf\u2019s rapidly growing technology sector and investment ecosystem.", flag: "\uD83C\uDDE6\uD83C\uDDEA" },
  { name: "Africa", description: "Enter emerging African markets with the fastest-growing tech adoption rates globally.", flag: "\uD83C\uDDF3\uD83C\uDDEC" },
];

const growthSteps = [
  { number: "01", title: "Join & Onboard", description: "Become a member and complete your company profile. Our team schedules a strategy call to understand your needs.", outcome: "Personalised growth plan" },
  { number: "02", title: "Access Resources", description: "Unlock sales tools, finance guides, talent networks, and exclusive member offers tailored to your growth stage.", outcome: "Resources activated" },
  { number: "03", title: "Connect & Grow", description: "Attend events, receive introductions, and participate in programs designed to accelerate your growth.", outcome: "Connections made" },
  { number: "04", title: "Scale & Expand", description: "Leverage your network, market insights, and support to scale into new markets and revenue streams.", outcome: "Revenue scaled" },
];

const whoIsThisFor = [
  { title: "Early-Stage Startups", description: "Pre-seed to Series A companies looking to validate, grow, and secure their first major contracts." },
  { title: "Scale-Ups", description: "Companies with product-market fit seeking to accelerate growth and expand into new geographies." },
  { title: "Established SMEs", description: "Mature businesses exploring cross-border opportunities, partnerships, and new revenue channels." },
  { title: "Tech Freelancers", description: "Independent professionals looking to transition into building their own technology companies." },
];

const faqs = [
  { question: "What size companies qualify for SME Hub?", answer: "The SME Hub is designed for technology companies with fewer than 250 employees. Whether you\u2019re a solo founder or a growing team, we have programs tailored to your stage." },
  { question: "What markets can SME Hub help me enter?", answer: "Our primary focus is the UK, Europe, Middle East, and Africa. We provide market intelligence, regulatory guidance, and warm introductions to help you navigate each market effectively." },
  { question: "Are the resources included in membership?", answer: "Yes, core SME Hub resources are included in your UPTECH membership. Premium services like dedicated advisory, bespoke market research, and concierge introductions are available as add-ons." },
  { question: "How quickly can I expect results?", answer: "Most members see meaningful connections within the first 30 days. Sales pipeline impact typically materialises within 3\u20136 months, depending on your growth stage and market readiness." },
];

export default function SMEHubPage() {
  return (
    <div>
      <PageHero
        title="SME Hub"
        subtitle="Whether you're growing your business, entering new markets, securing public sector contracts, or boosting sales, SME Hub provides the support, connections, and insights you need. Our hub is your one-stop shop for overcoming challenges and unlocking new opportunities."
        image="/image/london-images/entrepreneur-sme.jpg"
      >
        <div className="flex flex-wrap gap-4 mt-2">
          <Button href="/membership" variant="glass" showArrow>Join the Hub</Button>
          <Button href="/contact" variant="ghost">Learn More</Button>
        </div>
      </PageHero>

      {/* Stats Bar */}
      <section className="relative z-[1] bg-[#1C1F2E]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl mb-1">{stat.value}</p>
                <p className="text-white/60 text-xs sm:text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <Section variant="light">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-3">Your one-stop shop</p>
            <h2 className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl lg:text-3xl leading-snug mb-6">
              Comprehensive Support for Growing Technology SMEs
            </h2>
            <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed">
              Whether you&apos;re growing your business, entering new markets, securing public sector contracts, or boosting sales, SME Hub provides the support, connections, and insights you need. Our hub is your one-stop shop for overcoming challenges and unlocking new opportunities.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Four Pillars */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Core Pillars"
            title="Four Pillars of Support"
            subtitle="Everything you need to grow, all in one place."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="bg-white border border-[#D8D5CF] rounded p-8 hover:border-[#2563EB]/40 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-7 h-7 text-[#2563EB]" />
                    <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">{pillar.title}</h3>
                  </div>
                  <div className="h-px bg-[#D8D5CF] mb-4" />
                  <p className="text-sm text-[#3D4152] leading-relaxed mb-5">{pillar.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {pillar.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[#3D4152]">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* Markets */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Markets"
            title="Where We Operate"
            subtitle="Helping tech SMEs grow across key global markets."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {markets.map((market) => (
              <div key={market.name} className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300">
                <p className="text-3xl mb-3">{market.flag}</p>
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{market.name}</h3>
                <div className="h-px bg-[#D8D5CF] mb-3" />
                <p className="text-sm text-[#3D4152] leading-relaxed">{market.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Your Growth Journey */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Process"
            title="Your Growth Journey"
            subtitle="A structured pathway from onboarding to scaling your business internationally."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {growthSteps.map((step) => (
              <div key={step.number} className="border-t-2 border-[#2563EB] pt-5">
                <span className="text-xs font-bold text-[#2563EB] tabular-nums block mb-2">{step.number}</span>
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{step.title}</h3>
                <p className="text-[#3D4152] text-sm leading-relaxed mb-3">{step.description}</p>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                  <span className="text-xs font-semibold text-[#22C55E]">{step.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Who Is This For */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="For You"
            title="Who Is This For"
            subtitle="SME Hub is built for technology companies at every growth stage."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoIsThisFor.map((item) => (
              <div key={item.title} className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{item.title}</h3>
                <div className="h-px bg-[#D8D5CF] mb-3" />
                <p className="text-sm text-[#3D4152] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* FAQ */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about the SME Hub."
          />
          <FAQSection faqs={faqs} />
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">Start Growing</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Ready to Accelerate Your SME&apos;s Growth?
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Join the SME Hub and gain access to sales insights, finance opportunities, talent networks, and exclusive member benefits across four key global markets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>Join the Hub</Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>Contact Us</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}

function FAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={faq.question} className="border-t border-[#1C1F2E]/15 last:border-b">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between py-5 text-left gap-4"
          >
            <span className="font-heading font-semibold text-[#1C1F2E] text-base">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-[#7A7E8F] flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
            />
          </button>
          {openIndex === index && (
            <div className="pb-5 text-[#3D4152] text-sm leading-relaxed">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
