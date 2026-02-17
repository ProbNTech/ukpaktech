"use client";

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { AnimatedUnderline } from "@/components/AnimatedUnderline";
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
  ArrowRight,
  Mail,
  FileText,
  Target,
  Globe2,
  HeartHandshake,
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
    <div className="pt-0">
      {/* Hero Section */}
      <PageHero
        title={
          <span className="relative inline-block">
            Become a Member
            <AnimatedUnderline />
          </span>
        }
        subtitle="Join a trusted network shaping the future of UK–Pakistan technology collaboration."
      />

      {/* Key Benefits */}
      <Section variant="alt">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Key Benefits"
              subtitle="Unlock opportunities to connect, grow, and lead in the UK–Pakistan technology ecosystem"
              align="center"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {keyBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
                >
                  <Card variant="alt" hover className="h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-2xl bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center mb-6">
                        <benefit.icon className="w-8 h-8 text-[#2563EB]" />
                      </div>
                      <h3 className="font-heading font-semibold text-xl mb-3 text-[#0F172A]">{benefit.title}</h3>
                      <p className="text-sm text-[#475569] leading-relaxed">{benefit.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </Section>

      {/* Eligibility */}
      <Section>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Eligibility"
              subtitle="Who can become a UPTECH member"
              align="center"
            />
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {eligibilityPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-[#475569] leading-relaxed">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
      </Section>

      {/* Who Can Join */}
      <Section>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Who Can Join"
              subtitle="Membership is open to a diverse range of stakeholders"
              align="center"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {whoCanJoin.map((item, index) => (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
                >
                  <Card hover className="h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center mb-4">
                        <item.icon className="w-7 h-7 text-[#2563EB]" />
                      </div>
                      <h3 className="font-heading font-semibold text-lg mb-2 text-[#0F172A]">{item.title}</h3>
                      <p className="text-sm text-[#475569] leading-relaxed">{item.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </Section>

      {/* Membership Categories */}
      <Section>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Membership Categories"
              subtitle="Choose the membership type that best fits your needs"
              align="center"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {membershipCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
                >
                  <Card hover className="h-full">
                    <h3 className="font-heading font-bold text-xl mb-2 text-[#0F172A]">{category.title}</h3>
                    <p className="text-sm text-[#475569] mb-4 leading-relaxed">{category.description}</p>
                    <ul className="space-y-2">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#475569]">
                          <CheckCircle2 className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
      </Section>

      {/* Membership Plans */}
      <Section>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Membership Plans"
              subtitle="Comprehensive membership options designed for different needs"
              align="center"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {membershipPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
                >
                  <Card hover className="h-full flex flex-col">
                    <div className="mb-6">
                      <h3 className="font-heading font-bold text-xl mb-2 text-[#0F172A]">{plan.name}</h3>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl font-heading font-bold text-[#2563EB]">{plan.price}</span>
                        <span className="text-sm text-[#64748B]">/{plan.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 flex-1 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[#0F172A]">
                          <CheckCircle2 className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="glass" size="md" className="w-full mt-auto">
                      Apply Now
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </Section>

      {/* Procedure */}
      <Section>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Membership Procedure"
              subtitle="A straightforward process to join UPTECH"
              align="center"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {procedureSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
                >
                  <Card hover className="h-full text-center">
                    <div className="text-4xl font-heading font-bold text-[#2563EB] mb-4">{step.step}</div>
                    <h3 className="font-heading font-semibold text-xl mb-3 text-[#0F172A]">{step.title}</h3>
                    <p className="text-sm text-[#475569] leading-relaxed">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
      </Section>

      {/* Full Benefits List */}
      <Section>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Complete Benefits Overview"
              subtitle="Comprehensive benefits available to all UPTECH members"
              align="center"
            />
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {benefitsGroups.map((group, index) => (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <h3 className="font-heading font-bold text-xl mb-6 text-[#0F172A]">{group.title}</h3>
                    <ul className="space-y-3">
                      {group.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-[#0F172A] leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </Section>

      {/* Get in Touch / Apply CTA */}
      <Section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center py-20">
            <motion.h2
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-[#0F172A]"
            >
              Ready to Join UPTECH?
            </motion.h2>
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-[#475569] mb-10 leading-relaxed"
            >
              Apply for membership today and become part of a trusted network shaping the future of UK–Pakistan technology collaboration.
            </motion.p>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button href={siteConfig.portalUrl} variant="primary" size="lg" showArrow>
                Apply for Membership
              </Button>
              <Button href="/contact" variant="secondary" size="lg" showArrow>
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
      </Section>
    </div>
  );
}
