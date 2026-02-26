"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Users,
  Network,
  TrendingUp,
  Building2,
  Briefcase,
  CheckCircle2,
  Send,
  User,
  Mail,
  Phone,
  Linkedin,
  MessageSquare,
  ChevronDown,
  Sparkles,
  Star,
  Globe,
  ArrowRight,
  DollarSign,
  Lightbulb,
  Eye,
  Megaphone,
  Rocket,
  BadgePercent,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export default function MembershipClient() {
  const membershipBenefits = [
    {
      icon: Globe,
      title: "Industry Access",
      description:
        "Engage with key decision-makers, regulators, and thought leaders across the UK, Europe and Pakistan.",
      color: "#2563EB",
    },
    {
      icon: Network,
      title: "Networking & Collaboration",
      description:
        "Connect with startups, scale-ups, corporates, and accelerators.",
      color: "#22C55E",
    },
    {
      icon: Eye,
      title: "Market Visibility",
      description:
        "Promote your products, services, and solutions through Council channels, digital campaigns, and cross-border events.",
      color: "#8b5cf6",
    },
    {
      icon: DollarSign,
      title: "Funding & Investment Support",
      description:
        "Receive guidance and access to startup funding, Series A and B investment, and accelerator programs.",
      color: "#f59e0b",
    },
    {
      icon: Users,
      title: "Talent & Employment Opportunities",
      description:
        "Leverage overseas contract employment programs to access global tech talent.",
      color: "#C41E3A",
    },
    {
      icon: Lightbulb,
      title: "Thought Leadership",
      description:
        "Position your organisation as a leader in technology through speaking opportunities, published insights, and policy engagement.",
      color: "#2563EB",
    },
    {
      icon: Building2,
      title: "Business Incubation Centres",
      description:
        "Members have access to shared boardrooms, office space, and other resources in our London office. Additional fees may apply.",
      color: "#22C55E",
    },
    {
      icon: Megaphone,
      title: "Sponsorships",
      description:
        "To increase exposure in both markets and demonstrate commitment to the bilateral relationship, CCBC offers sponsorship opportunities exclusive to our member companies.",
      color: "#8b5cf6",
    },
  ];

  const suitableFor = [
    "Technology companies (SMEs and large enterprises)",
    "Innovation centres and incubators",
    "Investors and venture funds",
    "Government agencies and public sector bodies",
    "Academic and research institution",
  ];

  const whoShouldJoin = [
    {
      icon: Rocket,
      title: "Startups & Scale-ups",
      description:
        "Access funding, mentorship, market entry support, and collaboration opportunities.",
      color: "#2563EB",
    },
    {
      icon: Briefcase,
      title: "SMEs & Technology Firms",
      description:
        "Grow your network, promote solutions, and explore cross-border opportunities.",
      color: "#22C55E",
    },
    {
      icon: TrendingUp,
      title: "Corporates & Investors",
      description:
        "Discover high-potential startups, engage in partnerships, and participate in innovation programs",
      color: "#f59e0b",
    },
  ];

  const whoCanBecomeMembers = [
    "IT Professionals with computer and related education",
    "12+ education and graduation in any field for support service professionals",
    "Contract and consulting employees",
    "AI/IT professionals or freelancers",
    "Functional and related industry professionals",
    "IT enabled support Services providers",
    "Students: IT, management and related fields",
  ];

  const eligibilityMethods = [
    {
      title: "By Nomination",
      description:
        "Any Pakistani IT professional or student residing in Pakistan and UK shall be eligible to hold the membership status of UPTECH.",
      color: "#2563EB",
    },
    {
      title: "Nominated by two Existing Members",
      description:
        "Referrals will be reviewed by the UPTECH team to ensure alignment with UPTECH values.",
      color: "#22C55E",
    },
    {
      title: "By Application",
      description:
        "Holding the title: Founder, Chairperson, Managing Director, Managing Partner, C-Suite or equivalent title: Age criterion: 30 \u2013 55 years Revenue: USD 1 million or above",
      color: "#8b5cf6",
    },
  ];

  const membershipTiers = [
    {
      name: "Chairman\u2019s Circle Membership",
      highlight: true,
      description:
        "For established corporates, venture capitalists, and institutional investors",
      features: [
        "Access to senior-level members of UPTECH",
        "A seat on UPTECH board of directors",
        "Priority invitations to CEO-level briefings and bilateral meetings",
        "Leadership opportunities in executive trade missions, annual meetings, and events",
        "Increased visibility for company branding",
        "Participation in setting Council\u2019s advocacy goals and strategic planning",
        "Advocacy assistance to resolve company-specific trade or investment issues",
        "All Corporate Membership benefits listed below",
      ],
    },
    {
      name: "Corporate Membership",
      highlight: false,
      description:
        "Any Company, Corporation, Firm, Concern or other legal business entity in UK and Pakistan actively engaged in the AI & Information Technology industry",
      features: [
        "Participation on the Council\u2019s policy task forces",
        "Assistance with securing appointments for company executives visiting UK",
        "Opportunities to participate in Council members-only events, executive trade missions, and briefings",
        "Policy papers and sector-specific advocacy updates",
        "UPTECH economy and policy updates",
      ],
    },
    {
      name: "SME / Scale-up Membership",
      highlight: false,
      description: "For growing technology businesses",
      features: [
        "Full access to industry forums, funding opportunities, overseas contract programs, and marketing support",
        "Inclusion in cross-border collaborations and accelerator programs",
      ],
    },
    {
      name: "Startup Membership",
      highlight: false,
      description: "Designed for early-stage technology companies",
      features: [
        "Access to funding programs, SME Connect, and digital promotion channels",
        "Participation in networking events and mentorship programs",
      ],
    },
    {
      name: "Associates",
      highlight: false,
      description:
        "Any Company, Association, Council shall apply for membership in the \u2018Associate\u2019 Category.",
      features: [],
    },
    {
      name: "Academic Institutions",
      highlight: false,
      description:
        "Any Institution, Academy, Company, Corporation, Firm actively engaged in Information Technology",
      features: [],
    },
    {
      name: "Individual Membership",
      highlight: false,
      description:
        "Those who are working in advancing the theory or application of Computer Science, Information Technology or other related disciplines.",
      features: [
        "Extensive Networking Opportunities",
        "Collaborate Nationwide",
        "Leadership Development",
        "Stay Ahead in Technology",
        "Share Your Expertise",
        "Fellowships recognition",
      ],
    },
  ];

  const membershipDiscounts = [
    {
      title: "Early-Bird Discount",
      description:
        "Reduced fees for members who join within a specified period.",
      color: "#2563EB",
    },
    {
      title: "Startup & SME Discount",
      description:
        "Special rates for early-stage and small to medium-sized technology businesses.",
      color: "#22C55E",
    },
    {
      title: "Group / Corporate Discount",
      description:
        "Reduced rates for multiple memberships within the same organisation or group.",
      color: "#8b5cf6",
    },
    {
      title: "Cross-Border Collaboration Discount",
      description:
        "Incentives for organisations actively engaging in UK-Pakistan technology partnerships.",
      color: "#f59e0b",
    },
  ];

  const pakistanToUkServices = [
    "Individual Consultations",
    "Government Relations",
    "Partners and Channels",
    "Delegations and Missions",
  ];

  return (
    <div>
      {/* ── Intro / About Membership ─────────────────────────────── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="About UPTECH Membership"
            title="Membership Means Business"
            subtitle="Whether your priorities are to network with the industry and key stakeholders, to help shape policy, or to have access to insights that help your business to grow, UPTECH membership will positively impact your organisation in whatever way matters most to you."
          />
          <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed max-w-4xl mb-10">
            UPTECH is a non-governmental, results-focused business council that is committed to your organization&apos;s bilateral success in Technology, business, trade, and investment. We offer a range of both universal as well as custom-built services to our UK and Pakistani corporate members, including on-the-ground UK market support for Pakistani businesses; policy guidelines and regulatory analysis; and one-stop-shop Business Incubation Centre packages.
          </p>

          {/* Suitable For */}
          <div>
            <h3 className="font-heading font-bold text-xl text-[#1C1F2E] mb-6">
              Membership is suitable for
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {suitableFor.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white border border-[#D8D5CF] rounded p-4"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#3D4152] leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Who Should Join ──────────────────────────────────────── */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Who Should Join"
            title="Who Should Join"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {whoShouldJoin.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#D8D5CF] rounded p-8"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: `${item.color}12`,
                      border: `1px solid ${item.color}25`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2">
                    {item.title}
                  </h3>
                  <div
                    className="h-px mb-3"
                    style={{
                      background: `linear-gradient(to right, ${item.color}30, transparent)`,
                    }}
                  />
                  <p className="text-sm text-[#3D4152] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Membership Benefits (8 items) ────────────────────────── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Membership Benefits"
            title="Membership Benefits"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#D8D5CF] rounded p-8"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: `${benefit.color}12`,
                      border: `1px solid ${benefit.color}25`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: benefit.color }} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2">
                    {benefit.title}
                  </h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#3D4152] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Membership Tiers ─────────────────────────────────────── */}
      <Section variant="alt" id="tiers">
        <AnimatedSection>
          <SectionHeader
            label="Membership Levels"
            title="Membership Tiers"
            subtitle="Choose the membership tier that best fits your organisation and goals."
          />

          {/* First row: Chairman's Circle + Corporate + SME */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {membershipTiers.slice(0, 3).map((tier, index) => (
              <TierCard key={index} tier={tier} index={index} />
            ))}
          </div>
          {/* Second row: Startup + Associates + Academic */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {membershipTiers.slice(3, 6).map((tier, index) => (
              <TierCard key={index + 3} tier={tier} index={index + 3} />
            ))}
          </div>
          {/* Individual Membership - centered */}
          <div className="grid md:grid-cols-1 gap-6 max-w-md mx-auto">
            {membershipTiers.slice(6).map((tier, index) => (
              <TierCard key={index + 6} tier={tier} index={index + 6} />
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Eligibility ──────────────────────────────────────────── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Eligibility"
            title="Eligibility Criteria"
          />

          {/* Eligibility Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {eligibilityMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white border border-[#D8D5CF] rounded p-8 relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${method.color}, transparent)`,
                  }}
                />
                <h3
                  className="font-heading font-bold text-lg mb-3"
                  style={{ color: method.color }}
                >
                  {method.title}
                </h3>
                <div className="h-px bg-[#D8D5CF] mb-3" />
                <p className="text-sm text-[#3D4152] leading-relaxed">
                  {method.description}
                </p>
              </div>
            ))}
          </div>

          {/* Who Can Become Members */}
          <div>
            <h3 className="font-heading font-bold text-2xl text-[#1C1F2E] mb-8">
              Who can become Members
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {whoCanBecomeMembers.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white border border-[#D8D5CF] rounded p-5"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                  </div>
                  <span className="text-base text-[#3D4152] leading-relaxed pt-1">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Membership Fees ──────────────────────────────────────── */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Membership Fees"
            title="Membership Fees"
          />

          <div className="max-w-4xl">
            <div className="bg-white border border-[#D8D5CF] rounded p-8 lg:p-10">
              <p className="text-base text-[#3D4152] leading-relaxed mb-6">
                The UK-Pakistan Tech Council offers flexible membership plans designed to suit technology startups, SMEs, scale-ups, and corporates. Our membership fees provide access to a wealth of benefits, including networking, industry insights, cross-border opportunities, funding support, and promotional platforms.
              </p>

              <div className="bg-[#EEECEA] border border-[#D8D5CF] rounded p-6 mb-6">
                <p className="text-lg text-[#1C1F2E] leading-relaxed font-medium text-center">
                  Invest in your growth. Gain access to cross-border opportunities, funding, and strategic networks.
                </p>
              </div>

              <p className="text-sm text-[#3D4152] leading-relaxed">
                The first step towards membership is always a meeting with our Membership team where we can determine your annual fee. For further information please contact{" "}
                <a
                  href="mailto:membership@uptech.org.uk"
                  className="text-[#2563EB] hover:underline transition-colors"
                >
                  membership@uptech.org.uk
                </a>{" "}
                or complete the online enquiry form and the Membership team will be in touch to set up a meeting.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Membership Discounts ─────────────────────────────────── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Discounts"
            title="Membership Discounts"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {membershipDiscounts.map((discount, index) => (
              <div
                key={index}
                className="bg-white border border-[#D8D5CF] rounded p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: `${discount.color}12`,
                      border: `1px solid ${discount.color}25`,
                    }}
                  >
                    <BadgePercent
                      className="w-4 h-4"
                      style={{ color: discount.color }}
                    />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">
                    {discount.title}
                  </h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-4" />
                <p className="text-sm text-[#3D4152] leading-relaxed">
                  {discount.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Cross-Border Market Entry ────────────────────────────── */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Cross-Border Support"
            title="Cross-Border Market Entry"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pakistan Companies entering UK */}
            <div className="bg-white border border-[#D8D5CF] rounded p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#22C55E] to-transparent" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#22C55E]/10 border border-[#22C55E]/25">
                  <ArrowRight className="w-4 h-4 text-[#22C55E]" />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#1C1F2E]">
                  For Pakistan Companies entering UK
                </h3>
              </div>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <p className="text-sm text-[#3D4152] leading-relaxed mb-6">
                Launching and maintaining momentum in UK/Europe is key for organizations investing in these regions. UPTECH offers practical solutions for Pakistani organizations entering UK/European that are designed to meet your needs.
              </p>
              <ul className="space-y-3">
                {pakistanToUkServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#22C55E]" />
                    <span className="text-[#3D4152]">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* UK Companies entering Pakistan */}
            <div className="bg-white border border-[#D8D5CF] rounded p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#2563EB]/10 border border-[#2563EB]/25">
                  <ArrowRight className="w-4 h-4 text-[#2563EB]" />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#1C1F2E]">
                  For UK Companies entering Pakistan
                </h3>
              </div>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <p className="text-sm text-[#3D4152] leading-relaxed">
                UK/Europe companies entering Pakistani take many forms, such as greenfield investment and technology partnerships. UPTECH is a critical partner when entering Pakistan.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Why Membership Matters ───────────────────────────────── */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-[#2563EB] mb-2 tracking-wide uppercase">
              Why It Matters
            </p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-[2.6rem] leading-none mb-6">
              Why Membership Matters
            </h2>
            <div className="w-full h-px bg-white/20 mb-6" />
            <p className="text-lg text-white/70 leading-relaxed">
              Membership with the Council provides more than just networking, it&apos;s a gateway to growth, visibility, and influence in the UK-Pakistan technology corridor. Our members gain practical support, strategic connections, and market insights that accelerate business success and cross-border collaboration. Join today. Connect, grow, and lead the future of UK-Pakistan technology.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Application Form ─────────────────────────────────────── */}
      <Section variant="light" id="membership-form">
        <AnimatedSection>
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
            {/* Left column - info */}
            <div>
              <SectionHeader
                label="Apply Now"
                title="Membership Application"
              />
              <p className="text-[#3D4152] text-sm leading-relaxed mb-8">
                Fill in your details and our team will review your application
                within 3{"\u2013"}5 business days.
              </p>

              {/* Steps */}
              <div className="space-y-5">
                {[
                  { step: "01", text: "Submit your application below", color: "#2563EB" },
                  { step: "02", text: "Our team reviews your profile", color: "#22C55E" },
                  { step: "03", text: "Receive approval & onboard", color: "#8b5cf6" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
                      style={{
                        backgroundColor: `${item.color}15`,
                        border: `1px solid ${item.color}30`,
                        color: item.color,
                      }}
                    >
                      {item.step}
                    </div>
                    <span className="text-sm text-[#3D4152] leading-relaxed pt-1.5">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - form */}
            <MembershipForm />
          </div>
        </AnimatedSection>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="bg-white border border-[#D8D5CF] rounded p-12 lg:p-16">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#2563EB] mb-2 tracking-wide uppercase">
                Join Today
              </p>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-none text-[#1C1F2E] mb-5">
                Ready to Join UPTECH?
              </h2>
              <div className="h-px bg-[#D8D5CF] mb-6" />
              <p className="text-lg text-[#3D4152] leading-relaxed mb-10 max-w-xl">
                Membership with the Council provides more than just networking, it&apos;s a gateway to growth, visibility, and influence in the UK-Pakistan technology corridor. Join today. Connect, grow, and lead the future of UK-Pakistan technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  href={siteConfig.portalUrl}
                  variant="primary"
                  size="lg"
                  showArrow
                >
                  Apply for Membership
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   TIER CARD COMPONENT
════════════════════════════════════════════════════════════════ */

function TierCard({
  tier,
  index,
}: {
  tier: {
    name: string;
    highlight: boolean;
    description: string;
    features: string[];
  };
  index: number;
}) {
  const tierColors: Record<string, string> = {
    "Chairman\u2019s Circle Membership": "#2563EB",
    "Corporate Membership": "#22C55E",
    "SME / Scale-up Membership": "#8b5cf6",
    "Startup Membership": "#f59e0b",
    Associates: "#C41E3A",
    "Academic Institutions": "#2563EB",
    "Individual Membership": "#22C55E",
  };

  const color = tierColors[tier.name] || "#2563EB";

  return (
    <div className="group relative h-full">
      <div
        className={`relative h-full rounded p-8 flex flex-col ${
          tier.highlight
            ? "bg-[#1C1F2E] border-2 border-[#2563EB]"
            : "bg-white border border-[#D8D5CF]"
        }`}
      >
        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] rounded-t"
          style={{
            background: tier.highlight
              ? `linear-gradient(90deg, #2563EB, #8b5cf6, #22C55E)`
              : `linear-gradient(90deg, transparent, ${color}, transparent)`,
          }}
        />

        {/* Highlight badge */}
        {tier.highlight && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 mb-4 self-start">
            <Star className="w-3 h-3 text-[#2563EB]" />
            <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#2563EB]">
              Premium
            </span>
          </div>
        )}

        <h3
          className="font-heading font-bold text-xl mb-2"
          style={{ color: tier.highlight ? "white" : color }}
        >
          {tier.name}
        </h3>
        <p className={`text-sm mb-5 leading-relaxed ${tier.highlight ? "text-white/60" : "text-[#3D4152]"}`}>
          {tier.description}
        </p>

        <div
          className={`h-px mb-5 ${tier.highlight ? "bg-white/10" : "bg-[#D8D5CF]"}`}
        />

        {tier.features.length > 0 && (
          <ul className="space-y-3 flex-1 mb-7">
            {tier.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                  style={{ color: tier.highlight ? "#22C55E" : color }}
                />
                <span className={tier.highlight ? "text-white/70" : "text-[#3D4152]"}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}

        {tier.features.length === 0 && <div className="flex-1 mb-7" />}

        {tier.highlight ? (
          <Button href="#membership-form" variant="primary" size="md" showArrow className="w-full justify-center">
            Apply Now
          </Button>
        ) : (
          <Button href="#membership-form" variant="secondary" size="md" className="w-full justify-center">
            Apply Now
          </Button>
        )}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   MEMBERSHIP FORM - White theme
════════════════════════════════════════════════════════════════ */

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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  };

  const inputBase =
    "w-full bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder-[#3D4152]/40 text-sm pl-11 pr-4 py-3.5 rounded transition-all duration-200 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20";

  /* Success state */
  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="bg-white border border-[#D8D5CF] rounded overflow-hidden">
          <div className="h-1 w-full bg-gradient-to-r from-[#22C55E] via-[#2563EB] to-[#22C55E]" />
          <div className="px-10 py-20 text-center">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#22C55E]/10 flex items-center justify-center border border-[#22C55E]/30">
                <CheckCircle2
                  className="w-8 h-8 text-[#22C55E]"
                  strokeWidth={1.8}
                />
              </div>
            </div>
            <h3 className="font-heading font-bold text-2xl text-[#1C1F2E] mb-3">
              Application Received
            </h3>
            <p className="text-[#3D4152] text-sm leading-relaxed max-w-sm mx-auto">
              Thank you for applying. Our team will review your application and
              be in touch within 3{"\u2013"}5 business days.
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  /* Form state */
  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="bg-white border border-[#D8D5CF] rounded overflow-hidden">
        {/* Top accent */}
        <div className="h-1 w-full bg-gradient-to-r from-[#2563EB] via-[#8b5cf6] to-[#2563EB]" />

        {/* Personal Details Section */}
        <div className="px-7 pt-8 pb-2">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-6 h-6 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center">
              <User className="w-3 h-3 text-[#2563EB]" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#3D4152]/50">
              Personal Details
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="mem-name"
                className="block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 text-[#3D4152]"
              >
                Full Name <span className="text-[#C41E3A]">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3D4152]/30" />
                <input
                  id="mem-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="mem-email"
                className="block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 text-[#3D4152]"
              >
                Email Address <span className="text-[#C41E3A]">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3D4152]/30" />
                <input
                  id="mem-email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section divider */}
        <div className="mx-7 my-5">
          <div className="h-px bg-[#D8D5CF]" />
        </div>

        {/* Organisation Details Section */}
        <div className="px-7 pb-2">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-6 h-6 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center">
              <Building2 className="w-3 h-3 text-[#22C55E]" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#3D4152]/50">
              Organisation Details
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Phone */}
            <div>
              <label
                htmlFor="mem-phone"
                className="block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 text-[#3D4152]"
              >
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3D4152]/30" />
                <input
                  id="mem-phone"
                  name="phone"
                  type="tel"
                  placeholder="+44 7000 000000"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>
            </div>

            {/* Organisation */}
            <div>
              <label
                htmlFor="mem-organisation"
                className="block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 text-[#3D4152]"
              >
                Organisation
              </label>
              <div className="relative">
                <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3D4152]/30" />
                <input
                  id="mem-organisation"
                  name="organisation"
                  type="text"
                  placeholder="Your company or institution"
                  value={form.organisation}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>
            </div>

            {/* Job Title */}
            <div>
              <label
                htmlFor="mem-jobTitle"
                className="block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 text-[#3D4152]"
              >
                Job Title / Role
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3D4152]/30" />
                <input
                  id="mem-jobTitle"
                  name="jobTitle"
                  type="text"
                  placeholder="e.g. CTO, Founder, Director"
                  value={form.jobTitle}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>
            </div>

            {/* Membership Type */}
            <div>
              <label
                htmlFor="mem-membershipType"
                className="block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 text-[#3D4152]"
              >
                Membership Type <span className="text-[#C41E3A]">*</span>
              </label>
              <div className="relative">
                <Sparkles className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3D4152]/30" />
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-[#3D4152]/30" />
                <select
                  id="mem-membershipType"
                  name="membershipType"
                  required
                  value={form.membershipType}
                  onChange={handleChange}
                  className={`${inputBase} pr-10 appearance-none cursor-pointer`}
                >
                  <option value="" disabled>
                    Select a tier
                  </option>
                  <option value="Chairman's Circle Membership">Chairman&apos;s Circle Membership</option>
                  <option value="Corporate Membership">Corporate Membership</option>
                  <option value="SME / Scale-up Membership">SME / Scale-up Membership</option>
                  <option value="Startup Membership">Startup Membership</option>
                  <option value="Associates">Associates</option>
                  <option value="Academic Institutions">Academic Institutions</option>
                  <option value="Individual Membership">Individual Membership</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Section divider */}
        <div className="mx-7 my-5">
          <div className="h-px bg-[#D8D5CF]" />
        </div>

        {/* LinkedIn & Message Section */}
        <div className="px-7 pb-7">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-6 h-6 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center">
              <MessageSquare className="w-3 h-3 text-[#8b5cf6]" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#3D4152]/50">
              Additional Information
            </span>
          </div>

          {/* LinkedIn */}
          <div className="mb-5">
            <label
              htmlFor="mem-linkedin"
              className="block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 text-[#3D4152]"
            >
              LinkedIn Profile URL
            </label>
            <div className="relative">
              <Linkedin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3D4152]/30" />
              <input
                id="mem-linkedin"
                name="linkedin"
                type="url"
                placeholder="https://linkedin.com/in/yourprofile"
                value={form.linkedin}
                onChange={handleChange}
                className={inputBase}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="mem-message"
              className="block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 text-[#3D4152]"
            >
              Why do you want to join UPTECH?{" "}
              <span className="text-[#C41E3A]">*</span>
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3.5 top-4 w-4 h-4 text-[#3D4152]/30" />
              <textarea
                id="mem-message"
                name="message"
                required
                rows={4}
                placeholder="Tell us about yourself and your interest in the UK\u2013Pakistan tech ecosystem..."
                value={form.message}
                onChange={handleChange}
                className="w-full bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder-[#3D4152]/40 text-sm pl-11 pr-4 py-3.5 rounded transition-all duration-200 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#D8D5CF] bg-[#EEECEA] px-7 py-5">
          <p className="text-[11px] text-[#3D4152]/60 leading-relaxed max-w-xs">
            We review all applications within 3{"\u2013"}5 business days.{" "}
            <span className="text-[#C41E3A]">*</span> Required fields.
          </p>
          <button
            type="submit"
            disabled={state === "submitting"}
            className="shrink-0 inline-flex items-center gap-2.5 px-7 py-3 rounded-full font-heading font-bold text-sm text-white bg-[#1C1F2E] hover:bg-[#2563EB] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state === "submitting" ? (
              <span className="flex items-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear",
                  }}
                  className="inline-block w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full"
                />
                Submitting...
              </span>
            ) : (
              <>
                Submit Application
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
