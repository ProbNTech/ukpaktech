"use client";

import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { motion, useReducedMotion } from "framer-motion";
import {
  UserCheck, Briefcase, GraduationCap, Calendar, Banknote,
  Mail, CheckCircle2, Rocket,
} from "lucide-react";

const gettingStartedSteps = [
  "Complete your member profile with company details and logo",
  "Browse the membership directory to connect with peers",
  "Subscribe to our newsletter for the latest updates",
  "Review the Code of Conduct and community guidelines",
];

const guidanceSections = [
  {
    icon: Briefcase,
    title: "Accessing Services",
    accent: "border-[#2563EB]",
    content: "As a member, you have access to a range of services including business networks, mentorship, digital marketing support, business support, and more. Visit the Services section of the website to explore what is available and contact our team for personalised support.",
  },
  {
    icon: GraduationCap,
    title: "Participating in Programmes",
    accent: "border-[#22C55E]",
    content: "UPTECH runs regular programmes including AI & Tech Programs, Skill Development, and Incubation. Programme applications are announced through our newsletter and events page. Members receive priority access and preferential rates for all programmes.",
  },
  {
    icon: Calendar,
    title: "Events & Networking",
    accent: "border-[#2563EB]",
    content: "Stay active in the UPTECH community by attending events, roundtables, and trade delegations. Member-exclusive events are marked in the events calendar. We encourage members to actively participate, share their expertise, and build meaningful connections.",
  },
  {
    icon: Banknote,
    title: "Funding & Grants",
    accent: "border-[#22C55E]",
    content: "Members can apply for funding through our Funding & Grants programmes. Visit the funding page for current opportunities, eligibility criteria, and application guidance. Our team is available to support you through the application process.",
  },
];

export default function MembersGuidancePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      <PageHero
        title="Members Guidance"
        subtitle="A guide for UPTECH members on how to access services, participate in programmes, and make the most of your membership."
        image="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=2400&q=85&auto=format&fit=crop"
      />

      {/* Getting Started */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Member Handbook"
            title="Getting Started"
            subtitle="Welcome to UPTECH. Once your membership is confirmed, follow these steps to get the most out of your membership."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gettingStartedSteps.map((step, i) => (
              <motion.div
                key={step}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border-t-2 border-[#2563EB] bg-white rounded p-6"
              >
                <span className="text-2xl font-heading font-bold text-[#2563EB] mb-3 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[#3D4152] text-base leading-relaxed">{step}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Guidance Sections */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Your Membership"
            title="How to Make the Most of UPTECH"
            subtitle="Explore the services, programmes, events, and funding available to you as a member."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {guidanceSections.map((section, i) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`bg-white border border-[#D8D5CF] border-l-4 ${section.accent} rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300`}
                >
                  <Icon className="w-6 h-6 text-[#2563EB] mb-3" strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{section.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-[#3D4152] text-base leading-relaxed">{section.content}</p>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* Communication & Support */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <Mail className="w-8 h-8 text-[#2563EB] mb-4" strokeWidth={1.5} />
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl leading-tight mb-4">
              Communication & Support
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              For any questions, support requests, or feedback, contact our membership team at{" "}
              <a href="mailto:info@uptech.org.uk" className="text-[#2563EB] hover:text-[#60A5FA] transition-colors">
                info@uptech.org.uk
              </a>.
              We aim to respond to all member enquiries within 2 business days.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership/apply" variant="primary" size="lg" showArrow>Apply for Membership</Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>Contact Us</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
