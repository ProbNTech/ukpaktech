"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { motion, useReducedMotion } from "framer-motion";
import {
  Users,
  Network,
  Building2,
  CheckCircle2,
  Star,
  Globe,
  ArrowRight,
  DollarSign,
  Lightbulb,
  Eye,
  Megaphone,
  Handshake,
  CalendarDays,
  BarChart3,
  GraduationCap,
  MapPin,
  FileText,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";

/* ─── Data ─── */

const membershipBenefits = [
  { icon: Globe, title: "Industry Access", description: "Engage with key decision-makers, regulators, and thought leaders across the UK, Europe and Pakistan.", color: "#2563EB" },
  { icon: Network, title: "Networking & Collaboration", description: "Connect with startups, scale-ups, corporates, and accelerators.", color: "#22C55E" },
  { icon: Eye, title: "Market Visibility", description: "Promote your products, services, and solutions through Council channels, digital campaigns, and cross-border events.", color: "#C41E3A" },
  { icon: DollarSign, title: "Funding & Investment Support", description: "Receive guidance and access to startup funding, Series A and B investment, and accelerator programs.", color: "#2563EB" },
  { icon: Users, title: "Talent & Employment Opportunities", description: "Leverage overseas contract employment programs to access global tech talent.", color: "#22C55E" },
  { icon: Lightbulb, title: "Thought Leadership", description: "Position your organisation as a leader in technology through speaking opportunities, published insights, and policy engagement.", color: "#C41E3A" },
  { icon: Building2, title: "Business Incubation Centres", description: "Members have access to shared boardrooms, office space, and other resources in our London office. Additional fees may apply.", color: "#2563EB" },
  { icon: Megaphone, title: "Sponsorships", description: "To increase exposure in both markets and demonstrate commitment to the bilateral relationship, UPTECH offers sponsorship opportunities exclusive to our member companies.", color: "#22C55E" },
  { icon: Handshake, title: "Business Matchmaking", description: "B2B meetings with international companies, partner introductions, collaboration opportunities with technology firms, and client acquisition support.", color: "#C41E3A" },
  { icon: CalendarDays, title: "Technology Events", description: "Participate in international technology conferences, business networking events, startup showcase programs, and innovation forums.", color: "#2563EB" },
  { icon: BarChart3, title: "Research & Market Intelligence", description: "Access IT market reports, technology trends and opportunities, and sector-specific research insights covering key European technology markets.", color: "#22C55E" },
  { icon: GraduationCap, title: "Talent & Collaboration", description: "Collaborate with universities, research institutions, innovation hubs, and technology accelerators to support innovation and knowledge exchange.", color: "#C41E3A" },
];

const suitableFor = [
  "Technology companies (SMEs and large enterprises)",
  "Innovation centres and incubators",
  "Investors and venture funds",
  "Government agencies and public sector bodies",
  "Academic and research institutions",
];

const europeanMarkets = [
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "France", flag: "🇫🇷" },
  { name: "Switzerland", flag: "🇨🇭" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "Poland", flag: "🇵🇱" },
  { name: "Estonia", flag: "🇪🇪" },
  { name: "Latvia", flag: "🇱🇻" },
  { name: "Lithuania", flag: "🇱🇹" },
];

const whoShouldJoin = [
  { image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=85&auto=format&fit=crop", title: "Startups & Scale-ups", description: "Access funding, mentorship, market entry support, and collaboration opportunities.", color: "#2563EB" },
  { image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=85&auto=format&fit=crop", title: "SMEs & Technology Firms", description: "Grow your network, promote solutions, and explore cross-border opportunities.", color: "#22C55E" },
  { image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=85&auto=format&fit=crop", title: "Corporates & Investors", description: "Discover high-potential startups, engage in partnerships, and participate in innovation programs.", color: "#C41E3A" },
];

const whoCanBecomeMembers = [
  "IT companies and software firms",
  "Technology startups",
  "Research organizations",
  "Digital service providers",
  "IT professionals and consultants",
  "IT Professionals with computer and related education",
  "Contract and consulting employees",
  "AI/IT professionals or freelancers",
  "IT enabled support services providers",
  "Students: IT, management and related fields",
];

const eligibilityMethods = [
  { title: "By Nomination", description: "Any Pakistani IT professional or student residing in Pakistan and UK shall be eligible to hold the membership status of UPTECH.", color: "#2563EB" },
  { title: "Nominated by two Existing Members", description: "Referrals will be reviewed by the UPTECH team to ensure alignment with UPTECH values.", color: "#22C55E" },
  { title: "By Application", description: "Holding the title: Founder, Chairperson, Managing Director, Managing Partner, C-Suite or equivalent title: Age criterion: 30 \u2013 55 years Revenue: USD 1 million or above", color: "#C41E3A" },
];

const membershipTiers = [
  {
    name: "Chairman\u2019s Circle Membership",
    highlight: true,
    description: "For established corporates, venture capitalists, and institutional investors",
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
    description: "Any Company, Corporation, Firm, Concern or other legal business entity in UK and Pakistan actively engaged in the AI & Information Technology industry",
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
    description: "Any Company, Association, Council shall apply for membership in the \u2018Associate\u2019 Category.",
    features: [],
  },
  {
    name: "Academic Institutions",
    highlight: false,
    description: "Any Institution, Academy, Company, Corporation, Firm actively engaged in Information Technology",
    features: [],
  },
  {
    name: "Individual Membership",
    highlight: false,
    description: "Those who are working in advancing the theory or application of Computer Science, Information Technology or other related disciplines.",
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
  { title: "Early-Bird Discount", description: "Reduced fees for members who join within a specified period.", color: "#2563EB", icon: "https://cdn-icons-png.flaticon.com/512/6897/6897039.png" },
  { title: "Startup & SME Discount", description: "Special rates for early-stage and small to medium-sized technology businesses.", color: "#22C55E", icon: "https://cdn-icons-png.flaticon.com/512/6897/6897100.png" },
  { title: "Group / Corporate Discount", description: "Reduced rates for multiple memberships within the same organisation or group.", color: "#C41E3A", icon: "https://cdn-icons-png.flaticon.com/512/6897/6897122.png" },
  { title: "Cross-Border Collaboration Discount", description: "Incentives for organisations actively engaging in UK-Pakistan technology partnerships.", color: "#2563EB", icon: "https://cdn-icons-png.flaticon.com/512/6897/6897177.png" },
];

const pakistanToUkServices = [
  "Individual Consultations",
  "Government Relations",
  "Partners and Channels",
  "Delegations and Missions",
];

/* ─── Component ─── */

export default function MembershipClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="content-body">
      {/* ── Hero ── */}
      <PageHero
        label="Membership"
        title="At UK Pakistan Tech Council, Membership Means Business"
        subtitle="Whether your priorities are to network with the industry and key stakeholders, to help shape policy, or to have access to insights that help your business to grow, UPTECH membership will positively impact your organisation in whatever way matters most to you."
        image="/image/banners/banner3.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership/apply">Apply Now</ShinyButton>
          <Button href="#tiers" variant="glass">View Tiers</Button>
        </div>
      </PageHero>

      {/* ── Intro ── */}
      <Section variant="light">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <AnimatedSection>
            <SectionHeader label="About UPTECH Membership" title="Why UPTECH?" color="blue" />
            <p className="text-[#3D4152] leading-relaxed mb-8">
              UPTECH is a non-governmental, results-focused business council that is committed to your organization&#39;s bilateral success in Technology, business, trade, and investment. We offer a range of both universal as well as custom-built services to our UK and Pakistani corporate members, including on-the-ground UK market support for Pakistani businesses; policy guidelines and regulatory analysis; and one-stop-shop Business Incubation Centre packages.
            </p>

            <h3 className="font-heading font-bold text-2xl text-[#1C1F2E] mb-5">
              Membership is suitable for
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {suitableFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-3 bg-white border border-[#D8D5CF] rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5" />
                  <span className="text-base text-[#5A5F72] leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border-2 border-[#2563EB]/15">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=85&auto=format&fit=crop"
                alt="Professionals collaborating in a modern office"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* ── Who Should Join ── */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Who Should Join" title="Who Should Join" color="red" />
          <div className="grid md:grid-cols-3 gap-6">
            {whoShouldJoin.map((item, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-full"
              >
                <div className="relative h-full bg-white rounded-2xl border border-[#D8D5CF] overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-7">
                    <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2">{item.title}</h3>
                    <div className="h-px mb-3" style={{ background: `linear-gradient(to right, ${item.color}30, transparent)` }} />
                    <p className="text-base text-[#5A5F72] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Membership Benefits ── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Membership Benefits" title="Membership Benefits" color="green" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative h-full rounded-2xl border border-[#D8D5CF]/60 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <GlowingEffect
                    spread={40}
                    glow
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <div className="relative h-full bg-white rounded-2xl p-7">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: `${benefit.color}12`, border: `1px solid ${benefit.color}25` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: benefit.color }} />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2">{benefit.title}</h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-base text-[#5A5F72] leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Market Access ── */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Market Access" title="Access to UK & European Markets" color="blue" subtitle="Members gain access to opportunities in major European technology markets. UPTECH helps members identify potential clients, partners, and collaboration opportunities." />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {europeanMarkets.map((market, index) => (
              <motion.div
                key={market.name}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-white border border-[#D8D5CF] rounded-xl p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-3xl mb-2 block">{market.flag}</span>
                <span className="text-base font-semibold text-[#1C1F2E]">{market.name}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Membership Tiers ── */}
      <Section variant="light" id="tiers">
        <AnimatedSection>
          <SectionHeader label="Membership Levels" title="Membership Tiers & Benefits" color="blue" subtitle="Choose the membership tier that best fits your organisation and goals." />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {membershipTiers.slice(0, 3).map((tier, index) => (
              <TierCard key={index} tier={tier} index={index} shouldReduceMotion={shouldReduceMotion} />
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {membershipTiers.slice(3, 6).map((tier, index) => (
              <TierCard key={index + 3} tier={tier} index={index + 3} shouldReduceMotion={shouldReduceMotion} />
            ))}
          </div>
          <div className="grid md:grid-cols-1 gap-6 max-w-md mx-auto">
            {membershipTiers.slice(6).map((tier, index) => (
              <TierCard key={index + 6} tier={tier} index={index + 6} shouldReduceMotion={shouldReduceMotion} />
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Eligibility ── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Eligibility" title="Eligibility Criteria" color="red" />

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {eligibilityMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-full"
              >
                <div className="relative h-full bg-white rounded-2xl border border-[#D8D5CF] p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-heading font-bold text-lg mb-3" style={{ color: method.color }}>
                    {method.title}
                  </h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-base text-[#5A5F72] leading-relaxed">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <h3 className="font-heading font-bold text-2xl text-[#1C1F2E] mb-5">
            Who can become{" "}
            <span className="text-[#22C55E]">Members</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {whoCanBecomeMembers.map((point, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-start gap-4 bg-white border border-[#D8D5CF] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                </div>
                <span className="text-base text-[#5A5F72] leading-relaxed pt-1">{point}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Membership Fees ── */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Membership Fees" title="Membership Fees" color="red" />

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 lg:p-10 shadow-sm text-center">
              <p className="text-base text-[#3D4152] leading-relaxed mb-6">
                The UK-Pakistan Tech Council offers flexible membership plans designed to suit technology startups, SMEs, scale-ups, and corporates. Our membership fees provide access to a wealth of benefits, including networking, industry insights, cross-border opportunities, funding support, and promotional platforms.
              </p>

              <div className="border border-[#C41E3A]/20 rounded-xl p-6 mb-6 bg-[#C41E3A]/[0.03]">
                <p className="text-lg text-[#3D4152] leading-relaxed font-medium text-center">
                  Invest in your growth. Gain access to cross-border opportunities, funding, and strategic networks.
                </p>
              </div>

              <p className="text-base text-[#5A5F72] leading-relaxed">
                The first step towards membership is always a meeting with our Membership team where we can determine your annual fee. For further information please contact{" "}
                <a
                  href="mailto:membership@uptech.org.uk"
                  className="text-[#2563EB] hover:text-[#3b82f6] transition-colors underline underline-offset-2"
                >
                  membership@uptech.org.uk
                </a>{" "}
                or complete the online enquiry form and the Membership team will be in touch to set up a meeting.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Membership Discounts ── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Discounts" title="Membership Discounts" color="green" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipDiscounts.map((discount, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-full"
              >
                <div className="relative h-full bg-white rounded-2xl border border-[#D8D5CF] p-7 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="flex justify-center mb-5">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${discount.color}08`, border: `1px solid ${discount.color}15` }}
                    >
                      <Image
                        src={discount.icon}
                        alt={discount.title}
                        width={52}
                        height={52}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-3">{discount.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3 mx-auto max-w-[60px]" />
                  <p className="text-base text-[#5A5F72] leading-relaxed">{discount.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Cross-Border Market Entry ── */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Cross-Border Support" title="Cross-Border Market Entry" color="red" />
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pakistan → UK */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="relative h-full"
            >
              <div className="relative h-full bg-white rounded-2xl border border-[#D8D5CF] p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#22C55E]/10 border border-[#22C55E]/25">
                    <ArrowRight className="w-4 h-4 text-[#22C55E]" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#1C1F2E]">
                    For Pakistan Companies entering UK
                  </h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <p className="text-base text-[#5A5F72] leading-relaxed mb-5">
                  Launching and maintaining momentum in UK/Europe is key for organizations investing in these regions. UPTECH offers practical solutions for Pakistani organizations entering UK/European that are designed to meet your needs.
                </p>
                <ul className="space-y-3">
                  {pakistanToUkServices.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-base">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#22C55E]" />
                      <span className="text-[#3D4152]">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* UK → Pakistan */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="relative h-full"
            >
              <div className="relative h-full bg-white rounded-2xl border border-[#D8D5CF] p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#2563EB]/10 border border-[#2563EB]/25">
                    <ArrowRight className="w-4 h-4 text-[#2563EB]" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#1C1F2E]">
                    For UK Companies entering Pakistan
                  </h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <p className="text-base text-[#5A5F72] leading-relaxed">
                  UK/Europe companies entering Pakistani take many forms, such as greenfield investment and technology partnerships. UPTECH is a critical partner when entering Pakistan.
                </p>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Membership Documents ── */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Documents" title="Membership Documents" color="blue" subtitle="Review the key documents governing UPTECH membership and partnership." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Membership Terms & Conditions", description: "Rules, obligations, fees, and policies governing your UPTECH membership.", href: "/membership/terms", color: "#2563EB" },
              { title: "Sales Commission Agreement", description: "Terms for UPTECH promoting and selling your products/services in UK and European markets.", href: "/membership/commission-agreement", color: "#22C55E" },
              { title: "Memorandum of Understanding", description: "Framework for institutional partnerships between UPTECH and trade organisations.", href: "/services/corporate-partnerships/mou", color: "#C41E3A" },
            ].map((doc) => (
              <motion.a
                key={doc.title}
                href={doc.href}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white border border-[#D8D5CF] rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 block"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${doc.color}10`, border: `1px solid ${doc.color}25` }}>
                  <FileText className="w-5 h-5" style={{ color: doc.color }} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2 group-hover:text-[#2563EB] transition-colors duration-200">{doc.title}</h3>
                <div className="h-px bg-[#D8D5CF] mb-3" />
                <p className="text-base text-[#5A5F72] leading-relaxed mb-4">{doc.description}</p>
                <span className="inline-flex items-center gap-2 text-base font-semibold" style={{ color: doc.color }}>
                  View Document <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </motion.a>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Why Membership Matters ── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Why It Matters"
            title="Why Membership Matters"
            color="green"
            subtitle="Membership with the Council provides more than just networking — it's a gateway to growth, visibility, and influence in the UK-Pakistan technology corridor. Our members gain practical support, strategic connections, and market insights that accelerate business success and cross-border collaboration. Join today. Connect, grow, and lead the future of UK-Pakistan technology."
          />
        </AnimatedSection>
      </Section>

      {/* ── CTA ── */}
      <GlobalCTA
        label="Join Today"
        title="Ready to Join UPTECH?"
        subtitle="Membership with the Council provides more than just networking — it's a gateway to growth, visibility, and influence in the UK–Pakistan technology corridor."
        primaryButtonText="Apply for Membership"
        primaryButtonLink="/membership/apply"
        secondaryButtonText="Get in Touch"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TIER CARD COMPONENT
═══════════════════════════════════════════════════════════════ */

function TierCard({
  tier,
  index,
  shouldReduceMotion,
}: {
  tier: {
    name: string;
    highlight: boolean;
    description: string;
    features: string[];
  };
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  const tierColors: Record<string, string> = {
    "Chairman\u2019s Circle Membership": "#2563EB",
    "Corporate Membership": "#22C55E",
    "SME / Scale-up Membership": "#C41E3A",
    "Startup Membership": "#2563EB",
    Associates: "#22C55E",
    "Academic Institutions": "#C41E3A",
    "Individual Membership": "#2563EB",
  };

  const color = tierColors[tier.name] || "#2563EB";

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative h-full"
    >
      <div className="relative h-full bg-white rounded-2xl border border-[#D8D5CF] p-7 flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
        {/* Premium badge for Chairman's Circle */}
        {tier.highlight && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 mb-4 self-start">
            <Star className="w-3 h-3 text-[#2563EB]" />
            <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#2563EB]">Premium</span>
          </div>
        )}

        <h3 className="font-heading font-bold text-xl mb-2" style={{ color }}>
          {tier.name}
        </h3>
        <p className="text-base mb-5 leading-relaxed text-[#5A5F72]">
          {tier.description}
        </p>

        <div className="h-px mb-5" style={{ background: `linear-gradient(to right, ${color}20, transparent)` }} />

        {tier.features.length > 0 && (
          <ul className="space-y-3 flex-1 mb-7">
            {tier.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-base">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color }} />
                <span className="text-[#3D4152]">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {tier.features.length === 0 && <div className="flex-1 mb-7" />}

        {tier.highlight ? (
          <a
            href="/membership/apply"
            className="group/btn relative inline-flex items-center justify-center gap-2.5 w-full px-7 py-3.5 rounded-xl font-heading font-bold text-base text-white bg-[#2563EB] hover:bg-[#1d4ed8] transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Apply Now
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
          </a>
        ) : (
          <a
            href="/membership/apply"
            className="inline-flex items-center justify-center gap-2.5 w-full px-7 py-3.5 rounded-xl font-heading font-bold text-base border border-[#D8D5CF] text-[#3D4152] bg-[#F5F4F2] hover:bg-[#EEECEA] hover:text-[#1C1F2E] transition-all duration-300"
          >
            Apply Now
          </a>
        )}
      </div>
    </motion.div>
  );
}
