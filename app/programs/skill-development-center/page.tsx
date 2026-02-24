"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";

const trustItems = ["UK aligned curriculum", "Industry mentors", "Practical projects", "Career support", "Cross-border collaboration"];

const programs = [
  { title: "AI & Tech Certifications", subtitle: "Industry-recognised vendor-aligned certification tracks", bullets: ["Vendor aligned tracks", "Hands on labs", "Final assessment and badge"] },
  { title: "Sector Specific Skill Training", subtitle: "Specialised programs for key industries", bullets: ["Healthcare, fintech, logistics, public sector, manufacturing", "Use cases and toolkits", "Mini capstone per sector"] },
  { title: "Student Tutoring Services", subtitle: "Personalised learning support for students", bullets: ["Fundamentals to advanced", "Code reviews and debugging help", "Weekly learning plans"] },
  { title: "Competitive Exam Support", subtitle: "Comprehensive preparation for exams and interviews", bullets: ["GRE, IELTS, tech interviews, CS fundamentals", "Mock tests and feedback", "Resource library"] },
  { title: "Internship Programs", subtitle: "Real-world experience with leading companies", bullets: ["Partner placements", "Portfolio projects", "Reference ready mentorship"] },
];

const pathwaySteps = [
  { number: "01", title: "Assess", description: "Complete skill assessments and identify your learning goals and current proficiency level.", outcome: "Personalised learning roadmap" },
  { number: "02", title: "Train", description: "Participate in structured training programs with hands-on labs and expert mentorship.", outcome: "Industry-relevant skills" },
  { number: "03", title: "Build", description: "Create portfolio projects and capstone assignments that demonstrate your capabilities.", outcome: "Portfolio-ready projects" },
  { number: "04", title: "Launch", description: "Access career support, internship placements, and job readiness programs.", outcome: "Career-ready profile" },
];

const tracks = [
  { title: "AI Engineering Track", duration: "12 weeks", level: "Intermediate to Advanced", commitment: "15–20 hours/week", build: "Build production-ready AI models and deploy ML pipelines" },
  { title: "Data and Automation Track", duration: "10 weeks", level: "Beginner to Intermediate", commitment: "12–15 hours/week", build: "Build data pipelines, automation scripts, and analytics dashboards" },
  { title: "Cloud and Cyber Foundations", duration: "8 weeks", level: "Beginner", commitment: "10–12 hours/week", build: "Build secure cloud infrastructure and implement security best practices" },
];

const outcomes = [
  { value: "30+", label: "mentor hours per cohort" },
  { value: "6–10", label: "projects per learner" },
  { value: "8 week", label: "job readiness sprint" },
  { value: "100+", label: "cross border mentor network" },
];


const faqs = [
  { question: "Who is this program for?", answer: "Our programs are designed for students, professionals, and career changers looking to build or enhance their tech skills. Whether you're a beginner or looking to advance your career, we have tracks suited to your level." },
  { question: "Do I need prior experience?", answer: "No prior experience is required for our beginner tracks. We offer programs for all skill levels, from fundamentals to advanced specialisation. Our assessment process helps match you with the right program." },
  { question: "Are programs online or onsite?", answer: "We offer both online and hybrid learning options to accommodate different schedules and locations. Most programs include live sessions, recorded content, and hands-on labs accessible remotely." },
  { question: "What is the value of certifications?", answer: "Our certifications are industry-recognised and aligned with vendor standards. They demonstrate practical skills and are valued by employers in both UK and Pakistani tech markets." },
  { question: "How do I become eligible for internships?", answer: "Internship eligibility is based on program completion, performance in assessments, and portfolio quality. We work with partner organisations to match qualified candidates with relevant opportunities." },
  { question: "What about pricing and scholarships?", answer: "We offer various pricing tiers and scholarship opportunities for eligible candidates. Please contact us through the portal or membership application to discuss options and financial support programs." },
];

export default function SkillDevelopmentCenterPage() {
  return (
    <div>
      <PageHero
        title="Skill Development Center"
        subtitle="Comprehensive training programs designed to build world-class tech capabilities and accelerate your career."
        image="/image/london-images/membership-city-aerial.jpg"
      />

      {/* Trust Strip */}
      <section className="bg-[#E8E6E3] border-b border-[#1C1F2E]/10 py-5">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="flex flex-wrap gap-6 items-center">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-[#3D4152]">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] flex-shrink-0" strokeWidth={2} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <Section variant="light">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl leading-snug mb-6">
              UPTECH&apos;s Skill Development Center provides comprehensive training programs designed to build world-class tech capabilities across the UK and Pakistan.
            </p>
            <p className="text-[#3D4152] text-base leading-relaxed mb-5">
              Our Skill Development Center offers industry-recognised certifications, specialised training, and personalised mentorship to empower individuals and organisations with cutting-edge technology skills.
            </p>
            <p className="text-[#3D4152] text-base leading-relaxed">
              Through strategic partnerships with leading tech companies and educational institutions, we deliver programs that bridge the skills gap and create pathways for career advancement.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Programs Grid */}
      <Section variant="alt" id="programs">
        <AnimatedSection>
          <SectionHeader
            label="Training Programs"
            title="Our Programs"
            subtitle="Comprehensive skill development initiatives designed to accelerate your tech career."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <div key={program.title} className="bg-white border border-[#D8D5CF] rounded p-6 flex flex-col hover:border-[#2563EB]/40 transition-colors duration-300">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-1">{program.title}</h3>
                <p className="text-[#7A7E8F] text-xs mb-3">{program.subtitle}</p>
                <div className="h-px bg-[#1C1F2E]/15 mb-4" />
                <ul className="space-y-2 flex-1">
                  {program.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-[#3D4152] text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Learning Pathway */}
      <Section variant="light" id="pathway">
        <AnimatedSection>
          <SectionHeader
            label="Your Journey"
            title="Learning Pathway"
            subtitle="A structured journey from assessment to career launch."
          />
          <div className="grid md:grid-cols-4 gap-8">
            {pathwaySteps.map((step) => (
              <div key={step.number} className="border-t-2 border-[#2563EB] pt-5">
                <span className="text-xs font-bold text-[#2563EB] tabular-nums block mb-2">{step.number}</span>
                <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">{step.title}</h3>
                <p className="text-[#3D4152] text-sm leading-relaxed mb-3">{step.description}</p>
                <span className="text-xs font-semibold text-[#2563EB]">→ {step.outcome}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Flagship Tracks */}
      <Section variant="alt" id="tracks">
        <AnimatedSection>
          <SectionHeader
            label="Flagship Tracks"
            title="Intensive Training Tracks"
            subtitle="Intensive programs designed to build expertise in high-demand tech domains."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {tracks.map((track) => (
              <div key={track.title} className="bg-white border border-[#D8D5CF] rounded p-6 flex flex-col hover:border-[#2563EB]/40 transition-colors duration-300">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-4">{track.title}</h3>
                <div className="space-y-2 mb-5">
                  <div className="flex justify-between text-sm border-b border-[#1C1F2E]/10 pb-2">
                    <span className="text-[#7A7E8F]">Duration</span>
                    <span className="text-[#1C1F2E] font-medium">{track.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-[#1C1F2E]/10 pb-2">
                    <span className="text-[#7A7E8F]">Level</span>
                    <span className="text-[#1C1F2E] font-medium">{track.level}</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-[#1C1F2E]/10 pb-2">
                    <span className="text-[#7A7E8F]">Commitment</span>
                    <span className="text-[#1C1F2E] font-medium">{track.commitment}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-[#7A7E8F] uppercase tracking-wider mb-1">What you build</p>
                  <p className="text-[#3D4152] text-sm leading-relaxed">{track.build}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Outcomes */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Results"
            title="Program Outcomes"
            subtitle="Measurable results that accelerate your career growth."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome) => (
              <div key={outcome.label} className="border-t-2 border-[#2563EB] pt-4">
                <div className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl mb-1">{outcome.value}</div>
                <p className="text-[#3D4152] text-sm">{outcome.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>


      {/* FAQ */}
      <Section variant="light" id="faq">
        <AnimatedSection>
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our programs."
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
              Ready to Transform Your Career?
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Join UPTECH&apos;s Skill Development Center and unlock your potential in the tech industry. Start your journey today with world-class training and mentorship.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>Apply for Training</Button>
              <Button href="/membership" variant="glass" size="lg" showArrow>Partner with UPTECH</Button>
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
