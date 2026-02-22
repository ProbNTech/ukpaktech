"use client";

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  Users,
  Network,
  Award,
  TrendingUp,
  Building2,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Target,
  Send,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export default function MembershipClient() {
  const shouldReduceMotion = useReducedMotion();

  const keyBenefits = [
    {
      icon: Network,
      title: "Exclusive Networking",
      description: "Connect with leading technology professionals, founders, and executives across UK and Pakistan.",
    },
    {
      icon: Award,
      title: "Recognition & Visibility",
      description: "Gain recognition in the UK–Pakistan technology ecosystem through our platforms and events.",
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Access funding, resources, market insights, and collaboration opportunities.",
    },
    {
      icon: Target,
      title: "Strategic Partnerships",
      description: "Build strategic partnerships and explore cross-border business opportunities.",
    },
  ];

  const eligibilityPoints = [
    "Professionals working in technology, innovation, or related sectors",
    "Organizations with interest in UK–Pakistan technology collaboration",
    "Academic institutions and research organizations",
    "Startups and enterprises seeking cross-border opportunities",
  ];

  const whoCanJoin = [
    {
      icon: Briefcase,
      title: "Technology Professionals",
      description: "CTOs, tech leaders, engineers, and technology executives.",
    },
    {
      icon: Building2,
      title: "Enterprises & Organizations",
      description: "Companies seeking UK–Pakistan technology partnerships.",
    },
    {
      icon: GraduationCap,
      title: "Academic Institutions",
      description: "Universities and research organizations.",
    },
    {
      icon: Users,
      title: "Startups & Entrepreneurs",
      description: "Founders and early-stage companies.",
    },
  ];

  const membershipCategories = [
    {
      title: "Individual Professional",
      description: "For technology professionals and executives.",
      features: ["Access to exclusive events", "Member portal", "Networking opportunities"],
    },
    {
      title: "Startup/Company",
      description: "For startups and small to medium enterprises.",
      features: ["All individual benefits", "Company profile listing", "Partnership opportunities"],
    },
    {
      title: "Enterprise",
      description: "For large organizations and corporations.",
      features: ["All company benefits", "Priority event access", "Strategic partnership support"],
    },
    {
      title: "Academic Institution",
      description: "For universities and research organizations.",
      features: ["All enterprise benefits", "Research collaboration", "Student program access"],
    },
  ];

  const membershipPlans = [
    {
      name: "Individual Professional",
      price: "TBD",
      period: "Annual",
      features: [
        "Access to exclusive events and networking",
        "Member portal access",
        "Industry insights and resources",
        "Collaboration opportunities",
        "Newsletter and updates",
      ],
    },
    {
      name: "Startup/Company",
      price: "TBD",
      period: "Annual",
      features: [
        "All Individual Professional benefits",
        "Company profile on UPTECH platform",
        "Priority event registration",
        "Partnership matching services",
        "Market access support",
      ],
    },
    {
      name: "Enterprise",
      price: "TBD",
      period: "Annual",
      features: [
        "All Startup/Company benefits",
        "Strategic partnership facilitation",
        "Custom collaboration programs",
        "Thought leadership opportunities",
        "Dedicated account support",
      ],
    },
    {
      name: "Academic Institution",
      price: "TBD",
      period: "Annual",
      features: [
        "All Enterprise benefits",
        "Research collaboration programs",
        "Student internship opportunities",
        "Academic event participation",
        "Knowledge transfer initiatives",
      ],
    },
  ];

  const procedureSteps = [
    {
      step: "01",
      title: "Review Eligibility",
      description: "Ensure you meet the membership criteria for your chosen category.",
    },
    {
      step: "02",
      title: "Submit Application",
      description: "Complete the membership application form through our portal.",
    },
    {
      step: "03",
      title: "Review Process",
      description: "Our team reviews your application and verifies information.",
    },
    {
      step: "04",
      title: "Approval & Onboarding",
      description: "Upon approval, complete onboarding and gain access to member benefits.",
    },
  ];

  const benefitsGroups = [
    {
      title: "Networking & Events",
      items: [
        "Exclusive member-only events",
        "Networking sessions with industry leaders",
        "Annual UK–Pakistan Business Summit access",
        "Regional meetups and workshops",
      ],
    },
    {
      title: "Platform & Resources",
      items: [
        "Member portal access",
        "Industry reports and insights",
        "Market research and analysis",
        "Resource library and tools",
      ],
    },
    {
      title: "Partnership & Collaboration",
      items: [
        "Partnership matching services",
        "Cross-border collaboration opportunities",
        "Strategic partnership facilitation",
        "Joint venture support",
      ],
    },
    {
      title: "Recognition & Visibility",
      items: [
        "Company profile on UPTECH platform",
        "Thought leadership opportunities",
        "Awards and recognition programs",
        "Media and press opportunities",
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <PageHero
        title="Become a Member"
        subtitle="Join a trusted network shaping the future of UK–Pakistan technology collaboration."
        image="/image/london-images/1.jpg"
      />

      {/* Application Form */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeader
                label="Apply Now"
                title="Membership Application"
                subtitle="Fill in your details and our team will review your application within 3–5 business days."
              />
              <div className="space-y-4 mt-2">
                {[
                  { step: "01", text: "Submit your application below" },
                  { step: "02", text: "Our team reviews your profile" },
                  { step: "03", text: "Receive approval & onboard" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <span className="text-xs font-bold text-[#2563EB] tabular-nums pt-0.5">{item.step}</span>
                    <span className="text-sm text-[#3D4152] leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <MembershipForm />
          </div>
        </AnimatedSection>
      </Section>

      {/* Key Benefits */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Why join"
            title="Key Benefits"
            subtitle="Unlock opportunities to connect, grow, and lead in the UK–Pakistan technology ecosystem."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card variant="light" className="h-full">
                    <Icon className="w-7 h-7 text-[#2563EB] mb-5" />
                    <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2">{benefit.title}</h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-sm text-[#3D4152] leading-relaxed">{benefit.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* Eligibility */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Criteria"
            title="Eligibility"
            subtitle="Who can become a UPTECH member."
          />
          <div className="grid md:grid-cols-2 gap-4">
            {eligibilityPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white border border-[#D8D5CF] rounded p-5"
              >
                <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                <span className="text-base text-[#3D4152] leading-relaxed">{point}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Who Can Join */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Open to"
            title="Who Can Join"
            subtitle="Membership is open to a diverse range of stakeholders."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoCanJoin.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card variant="light" className="h-full">
                    <Icon className="w-7 h-7 text-[#2563EB] mb-5" />
                    <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2">{item.title}</h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-sm text-[#3D4152] leading-relaxed">{item.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* Membership Categories */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Types"
            title="Membership Categories"
            subtitle="Choose the membership type that best fits your needs."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2">{category.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#3D4152] mb-4 leading-relaxed">{category.description}</p>
                  <ul className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#3D4152]">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Membership Plans */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Plans"
            title="Membership Plans"
            subtitle="Comprehensive membership options designed for different needs."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="light" className="h-full flex flex-col">
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-2xl font-heading font-bold text-[#2563EB]">{plan.price}</span>
                    <span className="text-xs text-[#7A7E8F]">/{plan.period}</span>
                  </div>
                  <div className="h-px bg-[#D8D5CF] mb-4" />
                  <ul className="space-y-3 flex-1 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#3D4152]">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="primary" size="md" className="w-full mt-auto">
                    Apply Now
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Procedure */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Process"
            title="Membership Procedure"
            subtitle="A straightforward process to join UPTECH."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {procedureSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <p className="text-3xl font-heading font-bold text-[#2563EB] mb-4">{step.step}</p>
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2">{step.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#3D4152] leading-relaxed">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Full Benefits List */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Benefits"
            title="Complete Benefits Overview"
            subtitle="Comprehensive benefits available to all UPTECH members."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {benefitsGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="light" className="h-full">
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-4">{group.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-4" />
                  <ul className="space-y-3">
                    {group.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#3D4152] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#22C55E] mb-4">
              Apply today
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-none text-white mb-5">
              Ready to Join UPTECH?
            </h2>
            <div className="h-px bg-white/20 mb-6" />
            <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl">
              Apply for membership today and become part of a trusted network shaping the future of UK–Pakistan technology collaboration.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href={siteConfig.portalUrl} variant="primary" size="lg" showArrow>
                Apply for Membership
              </Button>
              <Button href="/contact" variant="glass" size="lg">
                Get in Touch
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}

type FormState = "idle" | "submitting" | "success" | "error";

function MembershipForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    jobTitle: "",
    membershipType: "",
    linkedin: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    // Placeholder: swap for your actual submission endpoint
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  };

  const inputBase =
    "w-full bg-[#EEECEA] border border-[#D8D5CF] text-[#1C1F2E] placeholder-[#7A7E8F] text-sm px-4 py-3 rounded transition-all duration-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 focus:bg-white outline-none";

  const labelBase = "block text-[10px] font-semibold tracking-[0.13em] uppercase text-[#7A7E8F] mb-2";

  if (state === "success") {
    return (
      <div className="border border-[#D8D5CF] bg-white rounded p-10 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#22C55E]/10 mb-5">
          <svg className="w-6 h-6 text-[#22C55E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading font-bold text-xl text-[#1C1F2E] mb-2">Application Received</h3>
        <p className="text-[#3D4152] text-sm leading-relaxed">
          Thank you for applying. Our team will review your application and be in touch within 3–5 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#D8D5CF]">
        {/* Full Name */}
        <div className="bg-[#FAFAF9] p-6">
          <label htmlFor="mem-name" className={labelBase}>
            Full Name <span className="text-[#C41E3A]">*</span>
          </label>
          <input id="mem-name" name="name" type="text" required placeholder="Jane Smith"
            value={form.name} onChange={handleChange} className={inputBase} />
        </div>

        {/* Email */}
        <div className="bg-[#FAFAF9] p-6">
          <label htmlFor="mem-email" className={labelBase}>
            Email Address <span className="text-[#C41E3A]">*</span>
          </label>
          <input id="mem-email" name="email" type="email" required placeholder="jane@example.com"
            value={form.email} onChange={handleChange} className={inputBase} />
        </div>

        {/* Phone */}
        <div className="bg-[#FAFAF9] p-6">
          <label htmlFor="mem-phone" className={labelBase}>Phone Number</label>
          <input id="mem-phone" name="phone" type="tel" placeholder="+44 7000 000000"
            value={form.phone} onChange={handleChange} className={inputBase} />
        </div>

        {/* Organisation */}
        <div className="bg-[#FAFAF9] p-6">
          <label htmlFor="mem-organisation" className={labelBase}>Organisation</label>
          <input id="mem-organisation" name="organisation" type="text" placeholder="Your company or institution"
            value={form.organisation} onChange={handleChange} className={inputBase} />
        </div>

        {/* Job Title */}
        <div className="bg-[#FAFAF9] p-6">
          <label htmlFor="mem-jobTitle" className={labelBase}>Job Title / Role</label>
          <input id="mem-jobTitle" name="jobTitle" type="text" placeholder="e.g. CTO, Founder, Director"
            value={form.jobTitle} onChange={handleChange} className={inputBase} />
        </div>

        {/* Membership Type */}
        <div className="bg-[#FAFAF9] p-6">
          <label htmlFor="mem-membershipType" className={labelBase}>
            Membership Type <span className="text-[#C41E3A]">*</span>
          </label>
          <select id="mem-membershipType" name="membershipType" required
            value={form.membershipType} onChange={handleChange}
            className={`${inputBase} appearance-none cursor-pointer`}>
            <option value="" disabled>Select a type</option>
            <option value="Individual Professional">Individual Professional</option>
            <option value="Startup / Company">Startup / Company</option>
            <option value="Enterprise">Enterprise</option>
            <option value="Academic Institution">Academic Institution</option>
          </select>
        </div>

        {/* LinkedIn */}
        <div className="bg-[#FAFAF9] p-6 sm:col-span-2">
          <label htmlFor="mem-linkedin" className={labelBase}>LinkedIn Profile URL</label>
          <input id="mem-linkedin" name="linkedin" type="url" placeholder="https://linkedin.com/in/yourprofile"
            value={form.linkedin} onChange={handleChange} className={inputBase} />
        </div>

        {/* Why join */}
        <div className="bg-[#FAFAF9] p-6 sm:col-span-2">
          <label htmlFor="mem-message" className={labelBase}>
            Why do you want to join UPTECH? <span className="text-[#C41E3A]">*</span>
          </label>
          <textarea id="mem-message" name="message" required rows={4}
            placeholder="Tell us about yourself and your interest in the UK–Pakistan tech ecosystem..."
            value={form.message} onChange={handleChange}
            className={`${inputBase} resize-none`} />
        </div>
      </div>

      {/* Footer row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-t-0 border-[#D8D5CF] bg-white px-6 py-5">
        <p className="text-[11px] text-[#7A7E8F] leading-relaxed max-w-xs">
          We review all applications within 3–5 business days. <span className="text-[#C41E3A]">*</span> Required fields.
        </p>
        <Button type="submit" variant="primary" size="md" disabled={state === "submitting"} className="shrink-0">
          {state === "submitting" ? "Submitting…" : (
            <><span>Submit Application</span><Send className="w-3.5 h-3.5" /></>
          )}
        </Button>
      </div>
    </form>
  );
}
