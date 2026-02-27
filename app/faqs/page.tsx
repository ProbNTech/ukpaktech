"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Users, Briefcase, Banknote, Calendar, MessageCircle } from "lucide-react";
import { useState } from "react";
import { GlobalCTA } from "@/components/GlobalCTA";

const categoryIcons: Record<string, typeof HelpCircle> = {
  General: HelpCircle,
  Membership: Users,
  "Programs & Services": Briefcase,
  "Funding & Grants": Banknote,
  "Events & Networking": Calendar,
};

const categoryMeta: Record<string, { color: string; border: string; bg: string; desc: string }> = {
  General: { color: "#2563EB", border: "border-[#2563EB]", bg: "bg-[#2563EB]", desc: "Learn about UPTECH, our mission, and how to get involved." },
  Membership: { color: "#22C55E", border: "border-[#22C55E]", bg: "bg-[#22C55E]", desc: "Tiers, benefits, application process, and cancellation policy." },
  "Programs & Services": { color: "#C41E3A", border: "border-[#C41E3A]", bg: "bg-[#C41E3A]", desc: "Training, mentorship, incubation, and business support." },
  "Funding & Grants": { color: "#2563EB", border: "border-[#2563EB]", bg: "bg-[#2563EB]", desc: "Investment stages, eligibility criteria, and application timelines." },
  "Events & Networking": { color: "#22C55E", border: "border-[#22C55E]", bg: "bg-[#22C55E]", desc: "Conferences, sponsorship, speaking opportunities, and networking." },
};

const faqCategories = [
  {
    category: "General",
    faqs: [
      { question: "What is UPTECH?", answer: "UPTECH (UK\u2013Pakistan Tech Council) is a strategic platform strengthening technology, innovation, and digital trade between the United Kingdom and Pakistan. We connect companies, investors, professionals, and policymakers across both ecosystems." },
      { question: "Who can join UPTECH?", answer: "UPTECH is open to technology companies, startups, investors, professionals, researchers, and organisations with an interest in the UK\u2013Pakistan technology corridor. Both individuals and companies can apply for membership." },
      { question: "Where is UPTECH based?", answer: "UPTECH operates across both the UK and Pakistan, with presence in London and Islamabad. Our programmes and events take place in both countries and online." },
      { question: "How can I get involved?", answer: "You can get involved by becoming a member, attending our events, applying for our programmes, or partnering with us. Visit our membership page or contact us to learn more." },
    ],
  },
  {
    category: "Membership",
    faqs: [
      { question: "What are the membership tiers?", answer: "We offer individual and corporate membership tiers, each with different levels of access to resources, events, programmes, and networking opportunities. Contact us for the latest membership structure and pricing." },
      { question: "What benefits do members receive?", answer: "Members receive access to exclusive events, networking opportunities, business support services, mentorship programmes, funding guidance, trade delegations, and discounts on partner services." },
      { question: "How do I apply for membership?", answer: "You can apply for membership through our website. Complete the application form, and our team will review your application and get back to you within 5\u201310 business days." },
      { question: "Can I cancel my membership?", answer: "Yes, you can cancel your membership at any time by contacting our membership team. Membership fees are non-refundable for the current billing period." },
    ],
  },
  {
    category: "Programs & Services",
    faqs: [
      { question: "What programmes does UPTECH offer?", answer: "We offer AI & Tech Programs, Skill Development Centre training, Incubation & Collective Startups support, mentorship, business networks, digital marketing hub services, overseas employment facilitation, and business support services." },
      { question: "Are programmes free for members?", answer: "Many core programmes are included in membership. Some premium services, specialised training, and intensive accelerator programmes may have additional fees. Members always receive preferential rates." },
      { question: "How do I apply for a programme?", answer: "Applications for specific programmes are accepted through our website or during open application windows. Check individual programme pages for current availability and application deadlines." },
      { question: "Can non-members access services?", answer: "Some events and resources are available to non-members. However, full access to programmes, mentorship, and business support services requires active membership." },
    ],
  },
  {
    category: "Funding & Grants",
    faqs: [
      { question: "What types of funding are available?", answer: "We offer pre-seed and seed investment, Series A/B growth capital facilitation, R&D grants, innovation grants, and bilateral project funding. The type of funding depends on your stage, sector, and project objectives." },
      { question: "How long does the funding application process take?", answer: "Initial applications are reviewed within 2\u20134 weeks. The full process \u2014 including due diligence and funding decision \u2014 typically takes 6\u201312 weeks depending on the funding type and complexity of the proposal." },
      { question: "What are the eligibility criteria?", answer: "Eligible projects should be technology-focused with clear innovation potential, demonstrate alignment with UK\u2013Pakistan partnership objectives, and have a viable business model or research proposal with an experienced team." },
      { question: "Can I apply for multiple funding streams?", answer: "Yes, you can apply for multiple funding streams simultaneously, provided you meet the eligibility criteria for each. Our team can advise on the most appropriate funding mix." },
    ],
  },
  {
    category: "Events & Networking",
    faqs: [
      { question: "What types of events does UPTECH host?", answer: "We host conferences, roundtables, webinars, trade delegations, networking events, awards ceremonies, workshops, and hackathons across the UK and Pakistan." },
      { question: "Are events open to non-members?", answer: "Some events are open to the public, while others are exclusive to UPTECH members. Event listings indicate whether registration is open to all or members only." },
      { question: "How can I speak at an UPTECH event?", answer: "If you are interested in speaking, moderating, or presenting at an UPTECH event, please contact our events team with your topic, bio, and any relevant materials. We welcome proposals from industry leaders and experts." },
      { question: "Can my company sponsor an event?", answer: "Yes, we offer sponsorship opportunities for our events and programmes. Sponsorship packages include branding, speaking slots, exhibition space, and delegate access. Contact us for details." },
    ],
  },
];

const totalQuestions = faqCategories.reduce((sum, cat) => sum + cat.faqs.length, 0);

export default function FAQsPage() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToCategory = (category: string) => {
    const id = `faq-${category.toLowerCase().replace(/[^a-z]/g, "-")}`;
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <div>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about UPTECH, membership, programmes, funding, and more."
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=2400&q=85&auto=format&fit=crop"
      />

      {/* Stats Bar */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: String(faqCategories.length), label: "Categories" },
              { value: String(totalQuestions), label: "Questions Answered" },
              { value: "24/7", label: "Online Access" },
              { value: "5–10", label: "Days Response Time" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <p className="font-heading font-extrabold text-3xl text-[#1C1F2E]">{stat.value}</p>
                <p className="text-base text-[#7A7E8F]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Category Navigation Grid */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Browse topics" title="Select a Category" subtitle="Click any topic below to jump directly to that section." />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
            {faqCategories.map((cat, i) => {
              const Icon = categoryIcons[cat.category] || HelpCircle;
              const meta = categoryMeta[cat.category];
              return (
                <motion.button
                  key={cat.category}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  onClick={() => scrollToCategory(cat.category)}
                  className="group text-left bg-white rounded-xl border border-[#D8D5CF] p-5 hover:border-[#2563EB]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `${meta.color}10`, border: `1px solid ${meta.color}15` }}>
                    <Icon className="w-5 h-5" style={{ color: meta.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-sm mb-1 group-hover:text-[#2563EB] transition-colors duration-200">{cat.category}</h3>
                  <p className="text-sm text-[#7A7E8F] leading-relaxed hidden sm:block">{meta.desc}</p>
                  <p className="text-[10px] font-bold text-[#D8D5CF] uppercase tracking-wider mt-2">{cat.faqs.length} questions</p>
                </motion.button>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* FAQ Sections */}
      {faqCategories.map((cat, catIdx) => {
        const Icon = categoryIcons[cat.category] || HelpCircle;
        const meta = categoryMeta[cat.category];
        const sectionId = `faq-${cat.category.toLowerCase().replace(/[^a-z]/g, "-")}`;

        return (
          <section key={cat.category} id={sectionId} className="scroll-mt-24">
            <Section variant={catIdx % 2 === 0 ? "light" : "alt"}>
              <AnimatedSection>
                {/* Category Header */}
                <div className="flex items-start gap-5 mb-8">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-[-4px] rounded-xl blur-lg opacity-30" style={{ background: meta.color }} />
                    <div className="relative w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${meta.color}10`, border: `1px solid ${meta.color}20` }}>
                      <Icon className="w-6 h-6" style={{ color: meta.color }} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl">{cat.category}</h2>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white" style={{ background: meta.color }}>
                        {cat.faqs.length} Q&A
                      </span>
                    </div>
                    <p className="text-sm text-[#7A7E8F] leading-relaxed">{meta.desc}</p>
                  </div>
                </div>

                {/* Accordion */}
                <FAQAccordion
                  faqs={cat.faqs}
                  shouldReduceMotion={shouldReduceMotion}
                  color={meta.color}
                />
              </AnimatedSection>
            </Section>
          </section>
        );
      })}

      {/* CTA */}
      <GlobalCTA
        label="Still Have Questions?"
        title="We’re Here to Help"
        subtitle="Can’t find the answer you’re looking for? Our team is ready to assist with any questions about UPTECH, membership, programmes, or partnerships."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Apply for Membership"
        secondaryButtonLink="/membership/apply"
      />
    </div>
  );
}

function FAQAccordion({
  faqs,
  shouldReduceMotion,
  color,
}: {
  faqs: { question: string; answer: string }[];
  shouldReduceMotion: boolean | null;
  color: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <motion.div
            key={faq.question}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`bg-white rounded-xl border overflow-hidden transition-all duration-300 ${
              isOpen ? "border-transparent shadow-lg" : "border-[#D8D5CF] hover:border-[#D8D5CF]/60"
            }`}
            style={isOpen ? { borderLeft: `3px solid ${color}` } : {}}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center gap-4 p-5 lg:p-6 text-left"
            >
              <span
                className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-colors duration-300"
                style={
                  isOpen
                    ? { background: color, color: "#fff" }
                    : { background: `${color}10`, color }
                }
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={`font-heading font-semibold text-base flex-1 transition-colors duration-200 ${isOpen ? "text-[#1C1F2E]" : "text-[#1C1F2E]"}`}>
                {faq.question}
              </span>
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                style={
                  isOpen
                    ? { background: `${color}10` }
                    : { background: "transparent" }
                }
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
                    <div className="h-px bg-[#D8D5CF]/50 mb-4" />
                    <p className="text-[#3D4152] text-base leading-[1.8]">{faq.answer}</p>
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
