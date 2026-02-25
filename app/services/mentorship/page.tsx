"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { Lightbulb, Globe, Compass, CheckCircle2, ChevronDown, Users, Clock, Award, Target } from "lucide-react";
import { useState } from "react";

const stats = [
  { value: "75+", label: "Active Mentors" },
  { value: "200+", label: "Startups Mentored" },
  { value: "12", label: "Countries Represented" },
  { value: "92%", label: "Founder Satisfaction" },
];

const advantages = [
  {
    icon: Lightbulb,
    title: "Help Build the Future",
    description: "Your insights and experience can be pivotal in helping founders overcome obstacles and scale their businesses effectively, having a direct impact on their success.",
    features: ["Shape the next generation of tech leaders", "Direct impact on startup outcomes", "Contribute to the UK–Pakistan tech ecosystem"],
  },
  {
    icon: Compass,
    title: "Enhance Your Horizons",
    description: "Mentoring enables you to examine existing challenges from different perspectives, honing your own strategic thinking and problem-solving skills.",
    features: ["Fresh perspectives on industry challenges", "Sharpen your leadership skills", "Stay connected to emerging trends"],
  },
  {
    icon: Globe,
    title: "Access a Global Community",
    description: "Join our diverse network spanning several countries and tech industries. Connect with forward-thinking individuals and organisations worldwide.",
    features: ["Cross-border mentor network", "Industry events and summits", "Peer learning opportunities"],
  },
];

const mentorRoles = [
  {
    title: "Being an Advisor",
    icon: Target,
    description: "Work closely with startups on a weekly basis and form part of our Advisory Board for the duration of the programme. Advisor mentors meet participating teams face-to-face, play a role in selection, and choose which startups to engage with.",
    commitment: "Weekly sessions throughout the programme",
    responsibilities: ["Weekly 1:1 sessions with founders", "Participate in startup selection", "Advisory Board membership", "Face-to-face team meetings"],
  },
  {
    title: "Being an Expert",
    icon: Award,
    description: "For those who don't have time to dedicate to a particular team, our secondary pool of standby experts work with one or more startups on an ad-hoc basis. They provide niche advice, troubleshoot problems, and make introductions to their personal network.",
    commitment: "As-needed basis, when it best suits",
    responsibilities: ["Ad-hoc expert consultations", "Niche problem-solving sessions", "Network introductions", "Specialist workshops"],
  },
];

const processSteps = [
  { number: "01", title: "Apply", description: "Submit your application with your expertise, industry background, and areas where you can add the most value.", outcome: "Application reviewed" },
  { number: "02", title: "Onboard", description: "Complete our mentor onboarding including orientation, toolkit access, and introduction to the current cohort.", outcome: "Mentor activated" },
  { number: "03", title: "Match", description: "We match you with startups based on your expertise, industry focus, and the startup's specific needs.", outcome: "Startup matched" },
  { number: "04", title: "Mentor", description: "Begin your mentoring journey — guiding founders through challenges, strategy, and growth.", outcome: "Impact delivered" },
];

const mentorProfiles = [
  { title: "Technology Leaders", description: "CTOs, VPs of Engineering, and technical founders with deep product and engineering expertise." },
  { title: "Business Strategists", description: "CEOs, Managing Directors, and strategy consultants with scaling and market entry experience." },
  { title: "Investment Experts", description: "VCs, angel investors, and fund managers who understand fundraising from both sides." },
  { title: "Domain Specialists", description: "Industry experts in FinTech, HealthTech, EdTech, AI, and other high-growth sectors." },
];

const faqs = [
  { question: "What is the time commitment for mentors?", answer: "Advisor mentors commit to weekly sessions (typically 1–2 hours) throughout the programme duration (usually 3–6 months). Expert mentors engage on an ad-hoc basis, typically 2–4 hours per month as needed." },
  { question: "Do mentors receive compensation?", answer: "Mentoring is primarily a volunteer role driven by a desire to give back to the ecosystem. However, mentors gain access to our global network, exclusive events, and the opportunity to identify early-stage investment opportunities." },
  { question: "How are mentors matched with startups?", answer: "We use a combination of expertise mapping, industry alignment, and mutual preference to create optimal mentor-startup matches. Both mentors and founders have input in the matching process." },
  { question: "Can I mentor remotely?", answer: "Yes, we support both in-person and remote mentoring. Many of our cross-border mentoring relationships are conducted virtually, with in-person sessions arranged around key events and milestones." },
  { question: "How do I become a mentor?", answer: "Apply through our membership portal or contact us directly. We look for professionals with 5+ years of relevant experience, a genuine desire to support founders, and availability to commit to the programme structure." },
];

export default function MentorshipPage() {
  return (
    <div>
      <PageHero
        title="Mentorship"
        subtitle="Connecting those who made it with the ones on their way. Our domain-specific network of mentors guides startups with their experience and expertise."
        image="/image/london-images/mentoring-coaching.jpg"
      >
        <div className="flex flex-wrap gap-4 mt-2">
          <Button href="/membership" variant="glass" showArrow>Become a Mentor</Button>
          <Button href="/contact" variant="ghost">Find a Mentor</Button>
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
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-3">The backbone of great startups</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl leading-snug mb-6">
                Shaping the Future by Empowering Innovators
              </h2>
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                Innovators are everywhere, but they need a little push from someone who knows what it takes to make their dreams come true. That&apos;s where our mentors come in — shaping the future by empowering innovators around the world with their wisdom and experience.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                Our mentorship programme connects experienced technology leaders, business strategists, and investment experts with ambitious founders building the next generation of cross-border technology companies.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed">
                Whether you&apos;re a seasoned founder looking to give back, or an early-stage startup seeking guidance — our programme creates meaningful, structured mentoring relationships that drive real results.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white border border-[#D8D5CF] p-8 sticky top-8">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-5">What Mentors Provide</h3>
                <div className="h-px bg-[#1C1F2E]/15 mb-5" />
                <ul className="space-y-4">
                  {[
                    { title: "Strategic Guidance", desc: "Help founders navigate critical decisions on product, market, and growth strategy." },
                    { title: "Network Access", desc: "Open doors to investors, partners, customers, and talent through warm introductions." },
                    { title: "Accountability", desc: "Keep founders focused on execution with regular check-ins and milestone tracking." },
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
          </div>
        </AnimatedSection>
      </Section>

      {/* Advantages */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Benefits"
            title="Advantages of Being a Mentor"
            subtitle="Mentoring isn't just about giving — it's about growing together."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#2563EB] mb-4" />
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2">{item.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#3D4152] leading-relaxed mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((f) => (
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

      {/* Mentor Roles */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Roles"
            title="How Mentors Work with Startups"
            subtitle="As a mentor, you get to work closely with ambitious innovators building businesses for the first time."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {mentorRoles.map((role) => {
              const Icon = role.icon;
              return (
                <div key={role.title} className="bg-white border border-[#D8D5CF] rounded p-8 hover:border-[#2563EB]/40 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-7 h-7 text-[#2563EB]" />
                    <h3 className="font-heading font-bold text-xl text-[#1C1F2E]">{role.title}</h3>
                  </div>
                  <div className="h-px bg-[#D8D5CF] mb-4" />
                  <p className="text-sm text-[#3D4152] leading-relaxed mb-5">{role.description}</p>
                  <p className="text-xs text-[#2563EB] font-semibold uppercase tracking-wide mb-4">{role.commitment}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {role.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-[#3D4152]">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* How to Become a Mentor */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Process"
            title="How to Become a Mentor"
            subtitle="A clear four-step pathway from application to impact."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="border-t-2 border-[#2563EB] pt-5">
                <span className="text-xs font-bold text-[#2563EB] tabular-nums block mb-2">{step.number}</span>
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{step.title}</h3>
                <p className="text-[#3D4152] text-sm leading-relaxed mb-3">{step.description}</p>
                <span className="text-xs font-semibold text-[#22C55E]">&rarr; {step.outcome}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Who We're Looking For */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Profiles"
            title="Who We're Looking For"
            subtitle="We welcome mentors from diverse backgrounds and disciplines."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentorProfiles.map((item) => (
              <div key={item.title} className="border-t-2 border-[#1C1F2E] pt-4">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{item.title}</h3>
                <p className="text-[#3D4152] text-sm leading-relaxed">{item.description}</p>
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
            subtitle="Common questions about our mentorship programme."
          />
          <FAQSection faqs={faqs} />
        </AnimatedSection>
      </Section>

      {/* CTA — Dark */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">Make an Impact</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Ready to Shape the Next Generation of Tech Leaders?
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Whether you&apos;re an experienced founder or an industry specialist, this is your chance to support ambitious entrepreneurs and learn along the way.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>Join as a Mentor</Button>
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
