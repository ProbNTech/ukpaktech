"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { Building2, Landmark, FileCheck, FileText, Shield, Scale, Database, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";

const stats = [
  { value: "300+", label: "Companies Supported" },
  { value: "50+", label: "Legal Partners" },
  { value: "\u00A3100M+", label: "Investment Documented" },
  { value: "99%", label: "Compliance Rate" },
];

const services = [
  {
    icon: Building2,
    title: "Company Registration",
    description: "We will provide assistance and guidance for the registration of the startups in UK.",
    features: ["UK company formation", "Director & shareholder setup", "Registered office address", "Post-incorporation compliance"],
  },
  {
    icon: Landmark,
    title: "Companies House Integration",
    description: "Easily update shareholder records and automatically file with Companies House, keeping your cap table accurate, compliant, and always up to date.",
    features: ["Automated filing", "Shareholder register management", "Annual return preparation", "Real-time cap table updates"],
  },
  {
    icon: FileCheck,
    title: "S/EIS Advance Assurance",
    description: "Check your eligibility and apply seamlessly in-app. Once you\u2019ve raised funds, submit your compliance statements right there, we\u2019ll handle all correspondence with HMRC for you.",
    features: ["Eligibility assessment", "Application preparation", "HMRC correspondence", "Compliance statement filing"],
  },
  {
    icon: FileText,
    title: "Investment Documents",
    description: "Includes all the investment agreements needed to execute your round \u2014 including a term sheet, Advance Subscription Agreement, or convertible loan note.",
    features: ["Term sheet drafting", "SHA & SSA preparation", "Convertible note agreements", "Board resolution templates"],
  },
  {
    icon: Shield,
    title: "Intellectual Property Rights",
    description: "It is essential to protect your creation in the growing trend of piracy. We, thus, take care of providing you with the intellectual & property rights to safeguard your startup.",
    features: ["Trademark registration", "Patent application support", "IP strategy development", "Infringement protection"],
  },
  {
    icon: Scale,
    title: "Legal & Accounting Support",
    description: "The sound legal and accounting advice plays an important role in the smooth running of the business. We would be providing the incubates with the necessary legal & accounting support for their seamless development.",
    features: ["Legal advisory", "Tax planning & compliance", "Financial reporting", "Regulatory guidance"],
  },
  {
    icon: Database,
    title: "Data Rooms",
    description: "Share key documents with prospective investors via a secure digital vault.",
    features: ["Secure document hosting", "Investor access controls", "Activity tracking & analytics", "Due diligence organisation"],
  },
];

const processSteps = [
  { number: "01", title: "Consultation", description: "Book a free consultation to discuss your business needs and identify the services you require.", outcome: "Needs assessed" },
  { number: "02", title: "Proposal", description: "Receive a tailored service proposal with clear deliverables, timelines, and pricing.", outcome: "Scope agreed" },
  { number: "03", title: "Execution", description: "Our team and partners deliver the services \u2014 keeping you informed at every stage.", outcome: "Services delivered" },
  { number: "04", title: "Ongoing Support", description: "Continued access to support, compliance monitoring, and advisory as your business grows.", outcome: "Long-term partnership" },
];

const whyUptech = [
  { title: "Startup-First Approach", description: "Every service is designed with startups and growing companies in mind \u2014 no unnecessary complexity." },
  { title: "Trusted Partners", description: "We work with vetted legal, accounting, and compliance professionals with deep startup experience." },
  { title: "Cross-Border Expertise", description: "Understanding of both UK and Pakistan business environments, regulations, and best practices." },
  { title: "Member Pricing", description: "UPTECH members receive preferential rates across all business support services." },
];

const faqs = [
  { question: "Who are the service partners?", answer: "We work with vetted law firms, accounting practices, and compliance specialists who have deep experience with technology startups and cross-border businesses. All partners are selected for their expertise, responsiveness, and value for money." },
  { question: "Are these services included in membership?", answer: "Initial consultation and basic guidance are included in UPTECH membership. Execution services (company formation, legal drafting, accounting) are provided at preferential member rates through our partner network." },
  { question: "Can you help with international company registration?", answer: "Yes, we support company registration in the UK, Pakistan, and other jurisdictions through our network of international legal partners. We can also advise on optimal corporate structures for cross-border operations." },
  { question: "How long does company registration take?", answer: "UK company registration typically takes 24\u201348 hours through our expedited service. More complex structures (including S/EIS advance assurance) may take 4\u20138 weeks depending on HMRC processing times." },
  { question: "Do you offer ongoing accounting services?", answer: "Yes, through our accounting partners we offer bookkeeping, management accounts, year-end filing, tax returns, and VAT registration and returns. Packages are available for startups, SMEs, and growing companies." },
];

export default function BusinessSupportPage() {
  return (
    <div>
      <PageHero
        title="Business Support Services"
        subtitle="These services will be offered directly and through our partners"
        image="/image/london-images/legal-documents.jpg"
      >
        <div className="flex flex-wrap gap-4 mt-2">
          <Button href="/membership" variant="glass" showArrow>Access Services</Button>
          <Button href="/contact" variant="ghost">Get in Touch</Button>
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
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-3">Offered directly and through our partners</p>
            <h2 className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl lg:text-3xl leading-snug mb-6">
              Essential Business Infrastructure for Startups and Growing Companies
            </h2>
            <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed mb-5">
              Starting and scaling a business involves navigating a complex landscape of legal, financial, and operational requirements. UPTECH&apos;s Business Support Services remove the friction &mdash; giving you access to trusted professionals and streamlined processes so you can focus on building your product and growing your business.
            </p>
            <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed">
              Whether you&apos;re registering a company, protecting intellectual property, preparing for investment, or managing compliance &mdash; our team and partners are here to help at every stage.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Services Grid */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Services"
            title="What We Offer"
            subtitle="Seven core business support services covering the full startup lifecycle."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300 flex flex-col">
                  <Icon className="w-7 h-7 text-[#2563EB] mb-4" />
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{service.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#3D4152] leading-relaxed mb-4 flex-1">{service.description}</p>
                  <ul className="space-y-1.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-[#3D4152]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] flex-shrink-0 mt-0.5" />
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

      {/* How It Works */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Process"
            title="How It Works"
            subtitle="A simple, structured process from consultation to ongoing support."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
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

      {/* Why Choose UPTECH */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Advantages"
            title="Why Choose UPTECH"
            subtitle="What makes our business support services different."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUptech.map((item) => (
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
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about our business support services."
          />
          <FAQSection faqs={faqs} />
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">Get Started</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Need Business Support? Let&apos;s Talk.
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Whether you&apos;re registering a company, protecting IP, or preparing for investment &mdash; our team and partners are here to help you build on solid foundations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>Become a Member</Button>
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
