"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Users, Briefcase, Banknote, Calendar } from "lucide-react";
import { useState } from "react";

const categoryIcons: Record<string, typeof HelpCircle> = {
  General: HelpCircle,
  Membership: Users,
  "Programs & Services": Briefcase,
  "Funding & Grants": Banknote,
  "Events & Networking": Calendar,
};

const categoryColors: Record<string, string> = {
  General: "text-[#2563EB] bg-[#2563EB]/10",
  Membership: "text-[#22C55E] bg-[#22C55E]/10",
  "Programs & Services": "text-[#C41E3A] bg-[#C41E3A]/10",
  "Funding & Grants": "text-[#2563EB] bg-[#2563EB]/10",
  "Events & Networking": "text-[#22C55E] bg-[#22C55E]/10",
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

export default function FAQsPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about UPTECH, membership, programmes, funding, and more."
        image="/image/london-images/governance-ethics.jpg"
      />

      {faqCategories.map((cat, catIdx) => {
        const Icon = categoryIcons[cat.category] || HelpCircle;
        const colorClass = categoryColors[cat.category] || "text-[#2563EB] bg-[#2563EB]/10";
        return (
          <Section key={cat.category} variant={catIdx % 2 === 0 ? "light" : "alt"}>
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${colorClass}`}>
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-[#1C1F2E] text-2xl">{cat.category}</h2>
                  <p className="text-sm text-[#7A7E8F]">{cat.faqs.length} questions</p>
                </div>
              </div>
              <FAQAccordion faqs={cat.faqs} shouldReduceMotion={shouldReduceMotion} accentColor={colorClass.split(" ")[0].replace("text-[", "").replace("]", "")} />
            </AnimatedSection>
          </Section>
        );
      })}
    </div>
  );
}

function FAQAccordion({
  faqs,
  shouldReduceMotion,
  accentColor,
}: {
  faqs: { question: string; answer: string }[];
  shouldReduceMotion: boolean | null;
  accentColor: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <motion.div
            key={faq.question}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`border-t border-[#D8D5CF] last:border-b ${isOpen ? "bg-white rounded -mx-4 px-4 border-l-4 border-l-[#2563EB]" : ""}`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between py-5 text-left gap-4"
            >
              <span className={`font-heading font-semibold text-base ${isOpen ? "text-[#2563EB]" : "text-[#1C1F2E]"}`}>
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#2563EB]" : "text-[#7A7E8F]"}`}
              />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pb-5 text-[#3D4152] text-sm leading-relaxed">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
