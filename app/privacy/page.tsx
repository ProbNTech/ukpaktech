"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Shield, Lock, Eye, FileText, Clock, Users,
  CheckCircle2, Scale, Database, UserCheck,
  Fingerprint, Bell, BarChart3, AlertTriangle,
} from "lucide-react";
import { useState } from "react";

/* ── Retention data ───────────────────────────────────────────────── */
const retentionData = [
  { category: "Members", period: "Through the contract period & up to 24 months after this has ended" },
  { category: "Prospects", period: "Up to 24 months from last contact" },
  { category: "Statutory Board Members", period: "Whilst serving and up to 6 months after term" },
  { category: "Advisory Board Members", period: "Whilst serving and up to 6 months after term" },
  { category: "Stakeholders", period: "Whilst serving and up to 6 months after term" },
  { category: "Suppliers", period: "Through the contract period & up to 24 months after this has ended" },
];

/* ── Quick nav sections ───────────────────────────────────────────── */
const navSections = [
  { id: "introduction", label: "Introduction" },
  { id: "collection", label: "How We Collect" },
  { id: "info-type", label: "Information Type" },
  { id: "how-used", label: "How Info Is Used" },
  { id: "retention", label: "Retention Periods" },
  { id: "access", label: "Who Has Access" },
  { id: "lawful", label: "Lawful Processing" },
  { id: "marketing", label: "Marketing" },
  { id: "profiles", label: "Building Profiles" },
  { id: "rights", label: "Your Rights" },
  { id: "security", label: "Security" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPage() {
  const [activeNav, setActiveNav] = useState("introduction");

  const scrollToSection = (id: string) => {
    setActiveNav(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        image="/image/london-images/data-security-privacy.jpg"
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
      />

      {/* ── Introduction + Quick Nav ─────────────────────────────────── */}
      <Section variant="light" id="introduction">
        <AnimatedSection>
          <SectionHeader
            label="Privacy Notice"
            title="Introduction"
          />

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="bg-white border border-[#D8D5CF] rounded p-8">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E] pt-2">Our Commitment to Your Privacy</h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <p className="text-sm text-[#3D4152] leading-relaxed mb-5">
                  The UK-PAKISTAN TECH COUNCIL LTD (UPTECH) is the UK&apos;s leading organization for promoting opportunities and increasing bi-later trade and investment in between UK and Pakistan. We are committed to protecting the privacy of your Personal Information. This policy sets out how we collect, use and transfer your Personal Information, the security measures we employ to protect such data and your rights and choices with regards to access or use of such data.
                </p>
                <p className="text-sm text-[#3D4152] leading-relaxed">
                  This policy explains when and why we collect personal information about you, how we use it, the conditions under which we may disclose it to others, how we keep it safe and secure and your rights and choices in relation to your information.
                </p>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-5">Quick Navigation</h3>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <nav className="space-y-1.5">
                {navSections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className={`w-full text-left px-3 py-2.5 text-xs font-medium transition-all duration-200 border-l-2 rounded-r-lg ${
                      activeNav === s.id
                        ? "border-[#2563EB] text-[#2563EB] bg-[#2563EB]/[0.06]"
                        : "border-transparent text-[#3D4152] hover:text-[#1C1F2E] hover:border-[#D8D5CF] hover:bg-[#EEECEA]"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── How Do We Collect Information ─────────────────────────────── */}
      <Section variant="alt" id="collection">
        <AnimatedSection>
          <SectionHeader
            label="Data Collection"
            title="How Do We Collect Information from You?"
            subtitle="We obtain information about you in the following ways:"
          />

          <div className="space-y-5">
            {/* Direct Information */}
            <div className="bg-white border border-[#D8D5CF] rounded p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-base text-[#1C1F2E] pt-2">Information You Give Us Directly</h3>
              </div>
              <p className="text-sm text-[#3D4152] leading-relaxed">
                For example, we may obtain information about you when you decide to become a member, partner or key stakeholder of UPTIB or take part in one of our events, or when you register to receive one of our newsletters. UPTIB collects information directly from individuals or from the parent companies of the individuals. The information could be collected through emails, phone calls, online registration forms, event registration forms and face-to-face meetings. UPTIB collects personal data about individuals when there is a legitimate basis, a contract or when such information is provided on a voluntary basis.
              </p>
            </div>

            {/* Third Parties */}
            <div className="bg-white border border-[#D8D5CF] rounded p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-base text-[#1C1F2E] pt-2">Third-Party Referrals & Networking</h3>
              </div>
              <p className="text-sm text-[#3D4152] leading-relaxed mb-4">
                Your information may be shared with us by third parties (i.e. a referral from an existing member or a referral as part of a contract we are delivering) or by one of our Partners. In all cases the person sharing your information should be already known to you and have obtained your permission.
              </p>
              <p className="text-sm text-[#3D4152] leading-relaxed mb-4">
                We also receive data through networking (e.g. by you giving us a business card or by you attending one of our events) and we will add these details, if relevant, onto our internal CRM management system.
              </p>
              <p className="text-sm text-[#3D4152] leading-relaxed">
                If you contact us using the Contact Form on our website, we will email you in response to that request and if relevant records that information in our CRM system.
              </p>
            </div>

            {/* Website Visit */}
            <div className="bg-white border border-[#D8D5CF] rounded p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-base text-[#1C1F2E] pt-2">When You Visit Our Website</h3>
              </div>
              <p className="text-sm text-[#3D4152] leading-relaxed mb-4">
                We, like many companies, automatically collect the following information:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-sm text-[#3D4152] leading-relaxed">Technical information, including the type of device you&apos;re using, the IP address, browser and operating system being used to connect your computer to the internet.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-sm text-[#3D4152] leading-relaxed">Information about your visit to this website, for example we collect information about pages you visit and how you navigate the website, i.e. length of visits to certain pages, services you viewed and searched for, referral sources (e.g. how you arrived at our website).</span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="bg-white border border-[#D8D5CF] rounded p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-base text-[#1C1F2E] pt-2">Social Media</h3>
              </div>
              <p className="text-sm text-[#3D4152] leading-relaxed">
                When you interact with us on social media platforms such as LinkedIn and Twitter we may obtain information about you (for example, when you publicly tag us in an event photo). The information we receive will depend on the privacy preferences you have set on those types of platforms.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── What Type of Information Is Collected ─────────────────────── */}
      <Section variant="light" id="info-type">
        <AnimatedSection>
          <SectionHeader
            label="Data Types"
            title="What Type of Information Is Collected from You?"
          />

          <div className="bg-white border border-[#D8D5CF] rounded p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                <Database className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1C1F2E] pt-2">Personal Information We Collect</h3>
            </div>
            <div className="h-px bg-[#D8D5CF] mb-5" />
            <p className="text-sm text-[#3D4152] leading-relaxed mb-3">
              The personal information we collect, store and use might include:
            </p>
            <p className="text-sm text-[#3D4152] leading-relaxed">
              Your name and contact details (including postal address, email address and telephone number). The name of the organization you work for and the events you attend. We do not collect sensitive data about you, other than dietary / any special access requirements for the purposes of event planning.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── How and Why Is Your Information Used ──────────────────────── */}
      <Section variant="alt" id="how-used">
        <AnimatedSection>
          <SectionHeader
            label="Data Usage"
            title="How and Why Is Your Information Used?"
            subtitle="We may use your information for a number of different purposes, which may include:"
          />

          <div className="bg-white border border-[#D8D5CF] rounded p-8">
            <ul className="space-y-3">
              {[
                "providing you with the services and information you asked for.",
                "processing orders, such as event attendance, that you have submitted.",
                "carrying out our obligations under any contracts entered between you and us.",
                "keeping a record of your relationship with us.",
                "conducting analysis so we can understand how we can improve our services;",
                "checking for updated contact details against third party sources, such as LinkedIn so we can stay in touch if you move.",
                "seeking your views or comments on the services we provide.",
                "notifying you of changes to our services.",
                "sending you communications which you have requested or that may be of interest to you.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-sm text-[#3D4152] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── How Long Is Your Information Kept For ─────────────────────── */}
      <Section variant="light" id="retention">
        <AnimatedSection>
          <SectionHeader
            label="Retention Periods"
            title="How Long Is Your Information Kept For?"
            subtitle="We keep your information for no longer than is necessary for the purposes it was collected for. The length of time we retain your personal information is determined by operational and legal considerations. For example, we are legally required to hold some types of information to fulfil our statutory and regulatory obligations (e.g. health/safety and tax/accounting purposes). We review our retention periods on a regular basis:"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {retentionData.map((item) => (
              <div
                key={item.category}
                className="bg-white border border-[#D8D5CF] rounded p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{item.category}</h3>
                <div className="h-px bg-[#D8D5CF] mb-3" />
                <p className="text-sm text-[#3D4152] leading-relaxed">{item.period}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Who Has Access to Your Information ────────────────────────── */}
      <Section variant="alt" id="access">
        <AnimatedSection>
          <SectionHeader
            label="Data Access"
            title="Who Has Access to Your Information?"
          />

          <div className="bg-white border border-[#D8D5CF] rounded p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1C1F2E] pt-2">Data Sharing Practices</h3>
            </div>
            <div className="h-px bg-[#D8D5CF] mb-5" />
            <ul className="space-y-4">
              {[
                "We do not sell or rent your information to third parties.",
                "We do not share your information with third parties for marketing purposes.",
                "We may pass your information to our associates for the purpose of completing tasks on your behalf.",
                "We have secure cloud service providers to manage our customer details and service records.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-sm text-[#3D4152] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Lawful Processing ────────────────────────────────────────── */}
      <Section variant="light" id="lawful">
        <AnimatedSection>
          <SectionHeader
            label="Legal Basis"
            title="Lawful Processing"
            subtitle="Data protection law requires us to rely on one or more lawful grounds to process your personal information. We consider the following grounds to be relevant:"
          />

          <div className="space-y-5">
            {/* Performance of a contract */}
            <div className="bg-white border border-[#D8D5CF] rounded p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-base text-[#1C1F2E] pt-2">Performance of a Contract</h3>
              </div>
              <p className="text-sm text-[#3D4152] leading-relaxed">
                Where we are entering into a contract with you or performing our obligations under it, for example when you became a &apos;paying&apos; member of our network.
              </p>
            </div>

            {/* Legal obligation */}
            <div className="bg-white border border-[#D8D5CF] rounded p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                  <Scale className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-base text-[#1C1F2E] pt-2">Legal Obligation</h3>
              </div>
              <p className="text-sm text-[#3D4152] leading-relaxed">
                Where necessary, we can comply with a legal or regulatory obligation to which we are subject.
              </p>
            </div>

            {/* Legitimate interests */}
            <div className="bg-white border border-[#D8D5CF] rounded p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                  <Fingerprint className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-base text-[#1C1F2E] pt-2">Legitimate Interests</h3>
              </div>
              <p className="text-sm text-[#3D4152] leading-relaxed mb-4">
                Where it is reasonably necessary to achieve our legitimate interests, i.e. those required for running UPTIB as a B2B strategic networking organization in pursuit of our shared aims and ideals. For example, to:
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  "broker connections where there is mutual benefit in doing so",
                  "send postal communications which we think will be of interest to you;",
                  "conduct research to better understand the priorities of our membership and to represent accurately the UK and Pakistan business community.",
                  "contact you to seek your views or comments on emerging political or economic issues.",
                  "enhance, modify, personalize, or otherwise improve our services /communications for the benefit of our members, partners and stakeholders; and understand better how people interact with our website.",
                  "invite you to event(s) that we may think are relevant to you in your professional capacity.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-sm text-[#3D4152] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-[#EEECEA] border border-[#D8D5CF] rounded p-5">
                <p className="text-sm text-[#3D4152] leading-relaxed">
                  When we legitimately process your personal information in this way, we consider and balance any potential impact on you (both positive and negative), and your rights under data protection laws. We will not use your personal information where our interests are overridden by the impact on you, for example, where use would be excessively intrusive (unless, for instance, we are otherwise required or permitted to by law).
                </p>
              </div>
            </div>

            {/* Specific Consent */}
            <div className="bg-white border border-[#D8D5CF] rounded p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-base text-[#1C1F2E] pt-2">Specific Consent</h3>
              </div>
              <p className="text-sm text-[#3D4152] leading-relaxed">
                Where you have provided specific consent to us using your personal information in a certain way, such as to send you email, text and/or contact via telephone.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Marketing Communications & Building Profiles ──────────────── */}
      <Section variant="alt" id="marketing">
        <AnimatedSection>
          <SectionHeader
            label="Communications"
            title="Marketing Communications"
          />

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                  <Bell className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">Marketing</h3>
              </div>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <p className="text-sm text-[#3D4152] leading-relaxed mb-5">
                We may use your contact details to provide you with information about the vital work we do for the UK and Pakistan business community and additional opportunities to support us or to work together on projects, if we think it may be of interest to you.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold tracking-[0.1em] uppercase text-[#2563EB] mb-2">Email</h4>
                  <p className="text-sm text-[#3D4152] leading-relaxed">
                    You may opt out of our marketing communications at any time by clicking the unsubscribed link at the end of our marketing emails.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-[0.1em] uppercase text-[#2563EB] mb-2">Post</h4>
                  <p className="text-sm text-[#3D4152] leading-relaxed">
                    We may occasionally send you marketing communications by post unless you have told us that you would prefer not to hear from us, under your access rights request (details listed below).
                  </p>
                </div>
              </div>
            </div>

            {/* Building Profiles */}
            <div id="profiles" className="bg-white border border-[#D8D5CF] rounded p-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">Building Profiles</h3>
              </div>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <p className="text-sm text-[#3D4152] leading-relaxed mb-4">
                We may analyze your personal information to create a profile of your interests and preferences so that we can tailor and target our communications in a way that is timely and relevant to you {"\u2013"} an example of this would be where interest in one of our Special Interest Groups (SIGs) has been expressed by you. This allows us to be more focused, efficient, and cost effective with our resources and reduces the risk of someone receiving information they may find inappropriate or irrelevant.
              </p>
              <p className="text-sm text-[#3D4152] leading-relaxed mb-4">
                We{"\u2019"}re committed to putting you in control of your data, please refer to your rights, below.
              </p>
              <p className="text-sm text-[#3D4152] leading-relaxed">
                We may also use your personal information to detect and reduce fraud and credit risk.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Your Rights ──────────────────────────────────────────────── */}
      <Section variant="light" id="rights">
        <AnimatedSection>
          <SectionHeader
            label="Data Subject Rights"
            title="Your Rights"
            subtitle="Under UK data protection law, you have certain rights over the personal information that we hold about you. Here is a summary of the rights that we think apply:"
          />

          <div className="grid md:grid-cols-2 gap-5">
            {/* Right of Access */}
            <div className="bg-white border border-[#D8D5CF] rounded p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-4">
                <Eye className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">Right of Access</h3>
              <div className="h-px bg-[#D8D5CF] mb-3" />
              <p className="text-sm text-[#3D4152] leading-relaxed">
                You have a right to request access to the personal data that we hold about you. You also have the right to request a copy of the information we hold about you, and we will provide you with this unless legal exceptions apply. If you want to access your information, please send a description of the information you want to see and proof of your identity by email:{" "}
                <a href="mailto:info@uptech.org.uk" className="text-[#2563EB] hover:text-[#1d4ed8] transition-colors">info@uptech.org.uk</a>
              </p>
            </div>

            {/* Right to Correction */}
            <div className="bg-white border border-[#D8D5CF] rounded p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">Right to Correction</h3>
              <div className="h-px bg-[#D8D5CF] mb-3" />
              <p className="text-sm text-[#3D4152] leading-relaxed">
                We shall update, archive or securely delete information if it goes out of date. You have the right to have inaccurate or incomplete information we hold about you corrected.
              </p>
            </div>

            {/* Right to Restrict Use */}
            <div className="bg-white border border-[#D8D5CF] rounded p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">Right to Restrict Use</h3>
              <div className="h-px bg-[#D8D5CF] mb-3" />
              <p className="text-sm text-[#3D4152] leading-relaxed">
                You have a right to ask us to restrict the processing of some or all your personal information if there is a disagreement about its accuracy or we{"\u2019"}re not lawfully allowed to use it.
              </p>
            </div>

            {/* Right of Erasure */}
            <div className="bg-white border border-[#D8D5CF] rounded p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">Right of Erasure</h3>
              <div className="h-px bg-[#D8D5CF] mb-3" />
              <p className="text-sm text-[#3D4152] leading-relaxed">
                You may ask us to delete some or all your personal information and in certain cases, and subject to certain exceptions; we will do so as far as we are required to. In many cases, we will anonymize that information, rather than delete it.
              </p>
            </div>

            {/* Right to Portability */}
            <div className="bg-white border border-[#D8D5CF] rounded p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-4">
                <Database className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">Right to Data Portability</h3>
              <div className="h-px bg-[#D8D5CF] mb-3" />
              <p className="text-sm text-[#3D4152] leading-relaxed">
                If we are processing your personal information (1) based on your consent, or in order to enter into or carry out a contract with you, and (2) the processing is being done by automated means, you may ask us to provide it to you or another service provider in a machine-readable format.
              </p>
            </div>

            {/* Right to Object */}
            <div className="bg-white border border-[#D8D5CF] rounded p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-4">
                <Scale className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">Right to Object</h3>
              <div className="h-px bg-[#D8D5CF] mb-3" />
              <p className="text-sm text-[#3D4152] leading-relaxed">
                You have the right to object to processing where we are using your personal information (1) based on legitimate interests, (2) for direct marketing or (3) for statistical/research purposes.
              </p>
            </div>
          </div>

          {/* Exercise your rights callout */}
          <div className="bg-white border border-[#2563EB]/20 rounded p-6 mt-8">
            <p className="text-sm text-[#3D4152] leading-relaxed mb-4">
              If you want to exercise any of the above rights, please email us at{" "}
              <a href="mailto:info@uptech.org.uk" className="text-[#2563EB] hover:text-[#1d4ed8] transition-colors">info@uptech.org.uk</a>
              {" "}and clearly state in the email subject line: RIGHTS REQUEST. We may be required to ask for further information and/or evidence of identity. We will endeavor to respond fully to all requests within 10 working days of your request, however if we are unable to do so we will contact you with reasons for the delay.
            </p>
            <p className="text-sm text-[#3D4152] leading-relaxed">
              Please note that exceptions apply to a number of these rights, and not all rights will be applicable in all circumstances. For more details we recommend you consult the guidance published by the UK{"\u2019"}s Information Commissioner{"\u2019"}s Office,{" "}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:text-[#1d4ed8] transition-colors">https://ico.org.uk</a>.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Keeping Your Information Safe & Security ──────────────────── */}
      <Section variant="alt" id="security">
        <AnimatedSection>
          <SectionHeader
            label="Data Protection"
            title="Keeping Your Information Safe"
          />

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Keeping Information Safe */}
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">Technical & Organisational Controls</h3>
              </div>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <p className="text-sm text-[#3D4152] leading-relaxed mb-4">
                When you give us personal information, we take steps to ensure that appropriate technical and organizational controls are in place to protect it.
              </p>
              <p className="text-sm text-[#3D4152] leading-relaxed">
                Any sensitive information such as credit or debit card details is encrypted and protected with the following software 128 Bit encryption on SSL. When you are on a secure page, a lock icon will appear on the bottom of web browsers such as Microsoft Internet Explorer. This information will be stored by a third party. We have carried out due diligence with the organization.
              </p>
            </div>

            {/* Security */}
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">Security</h3>
              </div>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <p className="text-sm text-[#3D4152] leading-relaxed mb-4">
                UPTECH uses reasonable measures to safeguard personal information. We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to only those employees, contractors or agents who have a legitimate business need to have access to that data. The employees, contractors or agents will process your personal data in accordance with our instructions. They will be subject to a duty of confidentiality and due care with respect to handling personal data. We have put in place procedures to deal with any suspected data security breach and will notify you and any applicable regulator of a suspected breach where we are legally required to do so.
              </p>
              <p className="text-sm text-[#3D4152] leading-relaxed">
                Emails are transmitted normally over the Internet, and this can never be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, we cannot guarantee the security of any information you transmit to us, and you do so at your own risk. Once we receive your information, we will make our best effort to ensure its security on our systems. Where we have given (or where you have chosen) a password which enables you to access certain parts of our website, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Contact CTA ──────────────────────────────────────────────── */}
      <Section variant="dark" id="contact">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] mb-2 tracking-wide uppercase">Get in Touch</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Contact Information
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
              For any questions about this Privacy Policy or our treatment of your Personal Information, please contact{" "}
              <a href="mailto:info@uptech.org.uk" className="text-[#2563EB] hover:text-[#60A5FA] transition-colors">info@uptech.org.uk</a>
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg" showArrow className="bg-[#2563EB] hover:bg-[#1d4ed8]">Contact Us</Button>
              <Button href="/gdpr" variant="glass" size="lg" showArrow>GDPR Policy</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
