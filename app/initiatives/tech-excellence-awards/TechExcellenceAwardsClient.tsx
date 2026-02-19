"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";

const categories = [
  { title: "Innovator of the Year", tag: "Individual", description: "Recognising exceptional innovation and breakthrough contributions to technology." },
  { title: "Woman in Tech Leadership Award", tag: "Individual", description: "Celebrating outstanding female leaders driving technology transformation." },
  { title: "Emerging Young Technologist", tag: "Individual", description: "Honouring promising young talent making significant impact in tech." },
  { title: "Tech Educator / Mentor of the Year", tag: "Individual", description: "Recognising educators and mentors shaping the next generation of tech leaders." },
  { title: "Emerging AI / FinTech Leader", tag: "Individual", description: "Celebrating leaders at the forefront of AI and financial technology." },
  { title: "Startup of the Year", tag: "Startup", description: "Recognising exceptional startups from Pakistan, UK, or joint ventures." },
  { title: "Best UK–Pakistan Collaboration Project", tag: "Collaboration", description: "Honouring outstanding collaborative projects between both nations." },
  { title: "Excellence in AI / FinTech / HealthTech / EdTech", tag: "Sector", description: "Recognising sector-specific excellence across key technology domains." },
  { title: "R&D Excellence Award", tag: "Research", description: "Celebrating groundbreaking research and development achievements." },
  { title: "Tech for Social Impact", tag: "Impact", description: "Honouring technology solutions that create positive social change." },
  { title: "Outstanding Digital Export Achievement", tag: "Achievement", description: "Recognising exceptional success in digital exports and international growth." },
  { title: "Lifetime Contribution to Tech Diplomacy", tag: "Special Recognition", description: "Celebrating lifelong dedication to strengthening UK–Pakistan tech relations." },
];

const nominationSteps = [
  { number: "01", title: "Eligibility", description: "Review category requirements and ensure nominee meets eligibility criteria.", outcome: "Confirmed eligibility" },
  { number: "02", title: "Submission", description: "Complete nomination form with supporting documentation and evidence of achievement.", outcome: "Submission received" },
  { number: "03", title: "Evaluation", description: "Independent jury reviews and scores nominations based on established merit criteria.", outcome: "Scored and ranked" },
  { number: "04", title: "Recognition", description: "Winners announced and celebrated at the annual UK–Pakistan Tech Excellence Awards ceremony.", outcome: "Publicly recognised" },
];

const evaluationCriteria = [
  "Innovation and originality of contribution",
  "Impact and scalability of the work",
  "Cross-border collaboration and inclusivity",
  "Sustainability and export potential",
];

const faqs = [
  { question: "Who can nominate?", answer: "Nominations are open to individuals, organisations, and institutions with knowledge of exceptional achievements in UK–Pakistan technology collaboration. Self-nominations are also welcome." },
  { question: "Who is eligible?", answer: "Eligibility varies by category. Generally, nominees should have demonstrated significant contributions to technology innovation, cross-border collaboration, or digital leadership within the UK–Pakistan tech ecosystem." },
  { question: "Is this invite-only?", answer: "No, the awards are open to all eligible nominations. We encourage submissions from across the UK–Pakistan tech community." },
  { question: "How are winners selected?", answer: "Winners are selected through a transparent evaluation process by an independent jury of 6–10 senior experts from both the UK and Pakistan, using merit-based scoring across multiple criteria." },
  { question: "When will nominations close?", answer: "Nomination deadlines will be announced soon. Please check back for updates or contact us for the latest information." },
];

export default function TechExcellenceAwardsClient() {
  return (
    <div>
      <PageHero
        title="UK–Pakistan Tech Excellence Awards"
        subtitle="Celebrating Innovation, Partnership, and Digital Leadership across Two Nations."
      />

      {/* About */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl leading-snug mb-6">
                The UK–Pakistan Tech Excellence Awards celebrate the outstanding achievements of individuals, teams, and organisations driving innovation and digital transformation across both nations.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                These awards recognise excellence in technology development, cross-border collaboration, and leadership that strengthens the UK–Pakistan tech corridor.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed">
                By honouring innovators, educators, startups, and established companies, the awards program highlights the transformative power of technology partnerships and inspires the next generation of tech leaders.
              </p>
            </div>
            <div className="bg-white border border-[#D8D5CF] p-8">
              <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-5">What the Awards Stand For</h3>
              <div className="h-px bg-[#1C1F2E]/15 mb-5" />
              <ul className="space-y-4">
                {[
                  { title: "Recognition", desc: "Celebrating outstanding achievements in technology and innovation across both nations." },
                  { title: "Bilateral Collaboration", desc: "Highlighting successful partnerships that strengthen UK–Pakistan tech relations." },
                  { title: "Global Visibility", desc: "Elevating award winners to international recognition and new opportunities." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <div>
                      <span className="font-semibold text-[#1C1F2E] text-sm">{item.title}</span>
                      <p className="text-[#3D4152] text-xs leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Award Categories */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Award Categories"
            title="Categories"
            subtitle="Recognising excellence across diverse dimensions of technology innovation and leadership."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.title} className="bg-white border border-[#D8D5CF] p-6 hover:border-[#2563EB]/40 transition-colors duration-300 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-sm flex-1 pr-3">{category.title}</h3>
                  <span className="text-xs font-semibold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 flex-shrink-0">{category.tag}</span>
                </div>
                <div className="h-px bg-[#1C1F2E]/15 mb-3" />
                <p className="text-[#3D4152] text-sm leading-relaxed flex-1">{category.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Nomination Process */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Nomination Process"
            title="How to Nominate"
            subtitle="A transparent, structured process designed to identify and celebrate true excellence."
          />
          <div className="grid md:grid-cols-4 gap-8">
            {nominationSteps.map((step) => (
              <div key={step.number} className="border-t-2 border-[#2563EB] pt-5">
                <span className="text-xs font-bold text-[#2563EB] tabular-nums block mb-2">{step.number}</span>
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{step.title}</h3>
                <p className="text-[#3D4152] text-sm leading-relaxed mb-3">{step.description}</p>
                <span className="text-xs font-semibold text-[#2563EB]">→ {step.outcome}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Judging */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeader
                label="Judging"
                title="Evaluation Process"
                subtitle="Transparent, merit-based scoring by an independent jury of senior experts."
              />
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                All nominations are evaluated by an independent jury of 6–10 senior experts from both the UK and Pakistan. The judging process is designed to be transparent, merit-based, and free from bias.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed mb-6">
                Our jury members bring decades of combined experience in technology, innovation, business, and cross-border collaboration.
              </p>
              <h3 className="font-heading font-bold text-[#1C1F2E] text-sm uppercase tracking-wide mb-4">Evaluation Criteria</h3>
              <ul className="space-y-0">
                {evaluationCriteria.map((criterion) => (
                  <li key={criterion} className="flex items-start gap-3 py-3 border-b border-[#1C1F2E]/10 last:border-b-0">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[#3D4152] text-sm">{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white border border-[#D8D5CF] p-6 sticky top-8">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-3">Independent Jury</h3>
                <div className="h-px bg-[#1C1F2E]/15 mb-4" />
                <p className="text-[#3D4152] text-sm leading-relaxed mb-4">
                  6–10 senior experts from both the UK and Pakistan with decades of combined experience in technology, innovation, and cross-border collaboration.
                </p>
                <p className="text-xs text-[#7A7E8F] italic">Transparent, merit-based evaluation process</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* FAQ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about the UK–Pakistan Tech Excellence Awards."
          />
          <FAQSection faqs={faqs} />
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">Submit a Nomination</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Nominate the Innovators Shaping the UK–Pakistan Tech Corridor
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Help us recognise exceptional individuals and organisations driving technology excellence and cross-border collaboration.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>Submit a Nomination</Button>
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
