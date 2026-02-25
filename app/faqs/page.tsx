"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqCategories = [
  {
    category: "General",
    faqs: [
      { question: "What is UPTECH?", answer: "UPTECH (UK–Pakistan Tech Council) is a strategic platform strengthening technology, innovation, and digital trade between the United Kingdom and Pakistan. We connect companies, investors, professionals, and policymakers across both ecosystems." },
      { question: "Who can join UPTECH?", answer: "UPTECH is open to technology companies, startups, investors, professionals, researchers, and organisations with an interest in the UK–Pakistan technology corridor. Both individuals and companies can apply for membership." },
      { question: "Where is UPTECH based?", answer: "UPTECH operates across both the UK and Pakistan, with presence in London and Islamabad. Our programmes and events take place in both countries and online." },
      { question: "How can I get involved?", answer: "You can get involved by becoming a member, attending our events, applying for our programmes, or partnering with us. Visit our membership page or contact us to learn more." },
    ],
  },
  {
    category: "Membership",
    faqs: [
      { question: "What are the membership tiers?", answer: "We offer individual and corporate membership tiers, each with different levels of access to resources, events, programmes, and networking opportunities. Contact us for the latest membership structure and pricing." },
      { question: "What benefits do members receive?", answer: "Members receive access to exclusive events, networking opportunities, business support services, mentorship programmes, funding guidance, trade delegations, and discounts on partner services." },
      { question: "How do I apply for membership?", answer: "You can apply for membership through our website. Complete the application form, and our team will review your application and get back to you within 5–10 business days." },
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
      { question: "How long does the funding application process take?", answer: "Initial applications are reviewed within 2–4 weeks. The full process — including due diligence and funding decision — typically takes 6–12 weeks depending on the funding type and complexity of the proposal." },
      { question: "What are the eligibility criteria?", answer: "Eligible projects should be technology-focused with clear innovation potential, demonstrate alignment with UK–Pakistan partnership objectives, and have a viable business model or research proposal with an experienced team." },
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
  return (
    <div>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about UPTECH, membership, programmes, funding, and more."
        image="/image/london-images/governance-ethics.jpg"
      />

      {faqCategories.map((cat, catIdx) => (
        <Section key={cat.category} variant={catIdx % 2 === 0 ? "light" : "alt"}>
          <AnimatedSection>
            <SectionHeader
              label={cat.category}
              title={cat.category}
              subtitle={`Common questions about ${cat.category.toLowerCase()}.`}
            />
            <FAQAccordion faqs={cat.faqs} />
          </AnimatedSection>
        </Section>
      ))}
    </div>
  );
}

function FAQAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
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
