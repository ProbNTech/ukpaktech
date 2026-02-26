"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Shield, Eye, Users, FileText, Bell, Scale, Lock, Clock,
  UserCheck, ArrowRightLeft, Ban, Mail, CheckCircle2,
} from "lucide-react";

/* ── Data Subject Rights (from Cookies page GDPR section) ──────────── */
const dataSubjectRights = [
  {
    icon: Eye,
    title: "Right to Access",
    desc: "Data subjects reserve the right to request and obtain confirmation that data is or is not being collected on them and if so, exactly what data is being collected, how, where, and for what purposes. This data can be manually requested via info@uptech.org.uk and provided in an electronic format free of charge.",
  },
  {
    icon: Users,
    title: "Right to Be Forgotten",
    desc: "Should data subjects at any time wish to withdraw their consent and no longer allow UK-PAKISTAN TECH COUNCIL LTD (UPTECH) International to store their personal data, this request can be manually made via info@uptech.org.uk Please be sure to include the full name (including any prefixes) and email address of whom the data is in reference too, so that all data relating to the data subject in question can be accurately removed.",
  },
  {
    icon: FileText,
    title: "Data Portability",
    desc: "Similar to the Right to Access, Data Portability requires that data subjects are able to request, obtain, and/or transfer possession of collected data at any time. As mentioned above, this data can be manually requested via info@uptech.org.uk and provided in an electronic format free of charge. Should the data subject wish to transfer the possession of the data stored by UK-PAKISTAN TECH COUNCIL LTD (UPTECH), please be sure to also include the full name (including any prefixes) and the relevant contact information relating to the individual or organization whom you wish the data to be transferred to.",
  },
  {
    icon: Bell,
    title: "Breach Notification",
    desc: "Should UK-PAKISTAN TECH COUNCIL LTD (UPTECH) encounter a breach/unauthorized access of personal data that is likely to \u201Cresult in a risk for the rights and freedoms of individuals\u201D, UK-PAKISTAN TECH COUNCIL LTD (UPTECH) will ensure that a notification is made within 72 hours of becoming aware of the breach.",
  },
];

/* ── Your Rights (from Privacy Policy) ─────────────────────────────── */
const yourRights = [
  {
    icon: Eye,
    title: "Right of Access",
    desc: "You have a right to request access to the personal data that we hold about you. You also have the right to request a copy of the information we hold about you, and we will provide you with this unless legal exceptions apply. If you want to access your information, please send a description of the information you want to see and proof of your identity by email: info@uptech.org.uk",
  },
  {
    icon: UserCheck,
    title: "Right to Correction",
    desc: "We shall update, archive or securely delete information if it goes out of date. You have the right to have inaccurate or incomplete information we hold about you corrected.",
  },
  {
    icon: Lock,
    title: "Right to Restrict Use",
    desc: "You have a right to ask us to restrict the processing of some or all your personal information if there is a disagreement about its accuracy or we\u2019re not lawfully allowed to use it.",
  },
  {
    icon: Ban,
    title: "Right of Erasure",
    desc: "You may ask us to delete some or all your personal information and in certain cases, and subject to certain exceptions; we will do so as far as we are required to. In many cases, we will anonymize that information, rather than delete it.",
  },
  {
    icon: ArrowRightLeft,
    title: "Right to Portability",
    desc: "If we are processing your personal information (1) based on your consent, or in order to enter into or carry out a contract with you, and (2) the processing is being done by automated means, you may ask us to provide it to you or another service provider in a machine-readable format.",
  },
  {
    icon: Scale,
    title: "Right to Object",
    desc: "You have the right to object to processing where we are using your personal information (1) based on legitimate interests, (2) for direct marketing or (3) for statistical/research purposes.",
  },
];

/* ── Lawful Processing Bases ───────────────────────────────────────── */
const lawfulBases = [
  {
    icon: FileText,
    title: "Performance of a Contract",
    desc: "Where we are entering into a contract with you or performing our obligations under it, for example when you became a \u2018paying\u2019 member of our network.",
  },
  {
    icon: Scale,
    title: "Legal Obligation",
    desc: "Where necessary, we can comply with a legal or regulatory obligation to which we are subject.",
  },
  {
    icon: CheckCircle2,
    title: "Legitimate Interests",
    desc: "Where it is reasonably necessary to achieve our legitimate interests, i.e. those required for running UPTIB as a B2B strategic networking organization in pursuit of our shared aims and ideals.",
  },
  {
    icon: Mail,
    title: "Specific Consent",
    desc: "Where you have provided specific consent to us using your personal information in a certain way, such as to send you email, text and/or contact via telephone.",
  },
];

/* ── Data Retention Periods ────────────────────────────────────────── */
const retentionPeriods = [
  { category: "Members", period: "Through the contract period & up to 24 months after this has ended" },
  { category: "Prospects", period: "Up to 24 months from last contact" },
  { category: "Statutory Board Members", period: "Whilst serving and up to 6 months after term" },
  { category: "Advisory Board Members", period: "Whilst serving and up to 6 months after term" },
  { category: "Stakeholders", period: "Whilst serving and up to 6 months after term" },
  { category: "Suppliers", period: "Through the contract period & up to 24 months after this has ended" },
];

export default function GDPRPage() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        image="/image/london-images/data-security-privacy.jpg"
        title="GDPR Compliance"
        subtitle="Our commitment to data protection and your rights under the General Data Protection Regulation."
      />

      {/* ── Data Subject Rights ──────────────────────────────────────── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="GDPR Compliance"
            title="Data Subject Rights"
            subtitle={<>GDPR compliance requires data subjects to be granted certain rights. What follows is not an exhaustive list, but those rights that are relevant to the collection, processing, and storage of personal data on{" "}<a href="https://www.uptech.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:text-[#1d4ed8] transition-colors">www.uptech.org.uk</a></>}
          />

          <div className="grid md:grid-cols-2 gap-5">
            {dataSubjectRights.map((right) => {
              const Icon = right.icon;
              return (
                <div
                  key={right.title}
                  className="bg-white border border-[#D8D5CF] rounded p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{right.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#3D4152] leading-relaxed">{right.desc}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Your Rights (Privacy Policy) ─────────────────────────────── */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Your Rights"
            title="Rights Under UK Data Protection Law"
            subtitle="Under UK data protection law, you have certain rights over the personal information that we hold about you. Here is a summary of the rights that we think apply:"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {yourRights.map((right) => {
              const Icon = right.icon;
              return (
                <div
                  key={right.title}
                  className="bg-white border border-[#D8D5CF] rounded p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{right.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#3D4152] leading-relaxed">{right.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Exercising rights note */}
          <div className="mt-8 bg-white border border-[#2563EB]/20 rounded p-6">
            <Mail className="w-5 h-5 text-[#2563EB] mb-3" strokeWidth={1.5} />
            <p className="text-[#3D4152] text-sm leading-relaxed">
              If you want to exercise any of the above rights, please email us at{" "}
              <a href="mailto:info@uptech.org.uk" className="text-[#2563EB] hover:text-[#1d4ed8] transition-colors">info@uptech.org.uk</a>
              {" "}and clearly state in the email subject line: RIGHTS REQUEST. We may be required to ask for further information and/or evidence of identity. We will endeavor to respond fully to all requests within 10 working days of your request, however if we are unable to do so we will contact you with reasons for the delay.
            </p>
            <p className="text-[#3D4152] text-sm leading-relaxed mt-4">
              Please note that exceptions apply to a number of these rights, and not all rights will be applicable in all circumstances. For more details we recommend you consult the guidance published by the UK{"\u2019"}s Information Commissioner{"\u2019"}s Office,{" "}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:text-[#1d4ed8] transition-colors">https://ico.org.uk</a>.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Lawful Processing Basis ──────────────────────────────────── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Legal Basis"
            title="Lawful Processing"
            subtitle="Data protection law requires us to rely on one or more lawful grounds to process your personal information. We consider the following grounds to be relevant:"
          />

          <div className="grid md:grid-cols-2 gap-5">
            {lawfulBases.map((basis) => {
              const Icon = basis.icon;
              return (
                <div
                  key={basis.title}
                  className="bg-white border border-[#D8D5CF] rounded p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{basis.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#3D4152] leading-relaxed">{basis.desc}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Data Retention ───────────────────────────────────────────── */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Retention Policy"
            title="Data Retention"
            subtitle="We keep your information for no longer than is necessary for the purposes it was collected for. The length of time we retain your personal information is determined by operational and legal considerations."
          />

          {/* Retention Table */}
          <div>
            {/* Header row */}
            <div className="grid grid-cols-[1fr_2fr] gap-4 px-6 py-4 mb-2">
              <div className="text-xs font-bold tracking-[0.15em] uppercase text-[#2563EB]">Category</div>
              <div className="text-xs font-bold tracking-[0.15em] uppercase text-[#2563EB]">Retention Period</div>
            </div>

            {retentionPeriods.map((item) => (
              <div
                key={item.category}
                className="grid grid-cols-[1fr_2fr] gap-4 bg-white border border-[#D8D5CF] rounded px-6 py-5 mb-3 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <span className="font-heading font-bold text-sm text-[#1C1F2E]">{item.category}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-[#3D4152] leading-relaxed">{item.period}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Security ─────────────────────────────────────────────────── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Data Security"
            title="Security Measures"
          />

          <div className="bg-white border border-[#D8D5CF] rounded p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1C1F2E] pt-2">Safeguarding Your Data</h3>
            </div>
            <div className="h-px bg-[#D8D5CF] mb-5" />
            <p className="text-sm text-[#3D4152] leading-relaxed">
              UPTECH uses reasonable measures to safeguard personal information. We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to only those employees, contractors or agents who have a legitimate business need to have access to that data.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Contact CTA ──────────────────────────────────────────────── */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] mb-2 tracking-wide uppercase">Get in Touch</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Contact Us
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-4">
              For any questions about this Privacy Policy or our treatment of your Personal Information, please contact{" "}
              <a href="mailto:info@uptech.org.uk" className="text-[#2563EB] hover:text-[#60A5FA] transition-colors">
                info@uptech.org.uk
              </a>
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Button href="/contact" variant="primary" size="lg" showArrow className="bg-[#2563EB] hover:bg-[#1d4ed8]">Contact Us</Button>
              <Button href="/privacy" variant="glass" size="lg" showArrow>Privacy Policy</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
