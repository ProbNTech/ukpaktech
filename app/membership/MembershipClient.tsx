"use client";

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion } from "framer-motion";
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
      />

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
                className="flex items-start gap-4 bg-white border border-[#D8D5CF] p-5"
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
