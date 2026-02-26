"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import {
  Shield, Lock, Eye, FileText, Clock, Users,
  CheckCircle2, Scale, Database, UserCheck,
  Fingerprint, Bell, BarChart3, AlertTriangle,
} from "lucide-react";

/* ── Retention data ───────────────────────────────────────────────── */
const retentionData = [
  { category: "Members", period: "Through the contract period & up to 24 months after this has ended", color: "#2563EB" },
  { category: "Prospects", period: "Up to 24 months from last contact", color: "#22C55E" },
  { category: "Statutory Board Members", period: "Whilst serving and up to 6 months after term", color: "#8b5cf6" },
  { category: "Advisory Board Members", period: "Whilst serving and up to 6 months after term", color: "#C41E3A" },
  { category: "Stakeholders", period: "Whilst serving and up to 6 months after term", color: "#f59e0b" },
  { category: "Suppliers", period: "Through the contract period & up to 24 months after this has ended", color: "#2563EB" },
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
  const shouldReduceMotion = useReducedMotion();

  const scrollToSection = (id: string) => {
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
      <section className="relative overflow-hidden min-h-[520px]">
        <Image
          src="/image/london-images/data-security-privacy.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: "linear-gradient(135deg, rgba(10,14,30,0.92) 0%, rgba(10,14,30,0.72) 50%, rgba(10,14,30,0.50) 100%)",
          }}
        />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 z-[2] opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 60V0h60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 xl:px-20 pt-20 pb-16">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/60">Data Protection</span>
            </div>
          </motion.div>

          <motion.h1
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] text-white mb-6 max-w-3xl"
          >
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60a5fa]">
              Policy
            </span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-lg text-white/50 max-w-2xl leading-relaxed"
          >
            How we collect, use, and protect your personal information.
          </motion.p>
        </div>
      </section>

      {/* ── Introduction + Quick Nav ─────────────────────────────────── */}
      <section id="introduction" className="relative bg-[#0B0F1A] py-16 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-3">Privacy Notice</p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                Introduction
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#2563EB] to-transparent mb-4" />
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2"
              >
                <div className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white pt-2">Our Commitment to Your Privacy</h3>
                  </div>
                  <div className="h-px bg-white/[0.06] mb-5" />
                  <p className="text-sm text-white/50 leading-relaxed mb-5">
                    The UK-PAKISTAN TECH COUNCIL LTD (UPTECH) is the UK&apos;s leading organization for promoting opportunities and increasing bi-later trade and investment in between UK and Pakistan. We are committed to protecting the privacy of your Personal Information. This policy sets out how we collect, use and transfer your Personal Information, the security measures we employ to protect such data and your rights and choices with regards to access or use of such data.
                  </p>
                  <p className="text-sm text-white/50 leading-relaxed">
                    This policy explains when and why we collect personal information about you, how we use it, the conditions under which we may disclose it to others, how we keep it safe and secure and your rights and choices in relation to your information.
                  </p>
                </div>
              </motion.div>

              {/* Quick Navigation */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/20 to-transparent" />
                <h3 className="font-heading font-bold text-base text-white mb-5">Quick Navigation</h3>
                <div className="h-px bg-white/[0.06] mb-5" />
                <nav className="space-y-1.5">
                  {navSections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollToSection(s.id)}
                      className="w-full text-left px-3 py-2.5 text-xs font-medium transition-all duration-200 border-l-2 border-transparent text-white/40 hover:text-white/70 hover:border-white/10 hover:bg-white/[0.03] rounded-r-lg"
                    >
                      {s.label}
                    </button>
                  ))}
                </nav>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── How Do We Collect Information ─────────────────────────────── */}
      <section id="collection" className="relative py-16 overflow-hidden" style={{ backgroundColor: "#0E1221" }}>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 60V0h60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 right-1/3 w-96 h-96 opacity-[0.03]" style={{ background: "radial-gradient(circle, #22C55E, transparent 60%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/30 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#22C55E] mb-3">Data Collection</p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                How Do We Collect Information from You?
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#22C55E] to-transparent mb-4" />
              <p className="text-white/40 text-base max-w-2xl">
                We obtain information about you in the following ways:
              </p>
            </div>

            <div className="space-y-5">
              {/* Direct Information */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full bg-gradient-to-b from-[#22C55E] to-[#22C55E]/40 opacity-40" />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-5 h-5 text-[#22C55E]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-white pt-2">Information You Give Us Directly</h3>
                </div>
                <p className="text-sm text-white/40 leading-relaxed">
                  For example, we may obtain information about you when you decide to become a member, partner or key stakeholder of UPTIB or take part in one of our events, or when you register to receive one of our newsletters. UPTIB collects information directly from individuals or from the parent companies of the individuals. The information could be collected through emails, phone calls, online registration forms, event registration forms and face-to-face meetings. UPTIB collects personal data about individuals when there is a legitimate basis, a contract or when such information is provided on a voluntary basis.
                </p>
              </motion.div>

              {/* Third Parties */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.06 }}
                className="relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full bg-gradient-to-b from-[#2563EB] to-[#2563EB]/40 opacity-40" />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-white pt-2">Third-Party Referrals & Networking</h3>
                </div>
                <p className="text-sm text-white/40 leading-relaxed mb-4">
                  Your information may be shared with us by third parties (i.e. a referral from an existing member or a referral as part of a contract we are delivering) or by one of our Partners. In all cases the person sharing your information should be already known to you and have obtained your permission.
                </p>
                <p className="text-sm text-white/40 leading-relaxed mb-4">
                  We also receive data through networking (e.g. by you giving us a business card or by you attending one of our events) and we will add these details, if relevant, onto our internal CRM management system.
                </p>
                <p className="text-sm text-white/40 leading-relaxed">
                  If you contact us using the Contact Form on our website, we will email you in response to that request and if relevant records that information in our CRM system.
                </p>
              </motion.div>

              {/* Website Visit */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.12 }}
                className="relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full bg-gradient-to-b from-[#8b5cf6] to-[#8b5cf6]/40 opacity-40" />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-[#8b5cf6]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-white pt-2">When You Visit Our Website</h3>
                </div>
                <p className="text-sm text-white/40 leading-relaxed mb-4">
                  We, like many companies, automatically collect the following information:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#8b5cf6] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-sm text-white/50 leading-relaxed">Technical information, including the type of device you&apos;re using, the IP address, browser and operating system being used to connect your computer to the internet.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#8b5cf6] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-sm text-white/50 leading-relaxed">Information about your visit to this website, for example we collect information about pages you visit and how you navigate the website, i.e. length of visits to certain pages, services you viewed and searched for, referral sources (e.g. how you arrived at our website).</span>
                  </li>
                </ul>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.18 }}
                className="relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full bg-gradient-to-b from-[#C41E3A] to-[#C41E3A]/40 opacity-40" />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C41E3A]/10 border border-[#C41E3A]/20 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-[#C41E3A]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-white pt-2">Social Media</h3>
                </div>
                <p className="text-sm text-white/40 leading-relaxed">
                  When you interact with us on social media platforms such as LinkedIn and Twitter we may obtain information about you (for example, when you publicly tag us in an event photo). The information we receive will depend on the privacy preferences you have set on those types of platforms.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── What Type of Information Is Collected ─────────────────────── */}
      <section id="info-type" className="relative bg-[#0B0F1A] py-16 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-3">Data Types</p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                What Type of Information Is Collected from You?
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#2563EB] to-transparent mb-4" />
            </div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 overflow-hidden max-w-4xl"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-lg text-white pt-2">Personal Information We Collect</h3>
              </div>
              <div className="h-px bg-white/[0.06] mb-5" />
              <p className="text-sm text-white/40 leading-relaxed mb-3">
                The personal information we collect, store and use might include:
              </p>
              <p className="text-sm text-white/50 leading-relaxed">
                Your name and contact details (including postal address, email address and telephone number). The name of the organization you work for and the events you attend. We do not collect sensitive data about you, other than dietary / any special access requirements for the purposes of event planning.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── How and Why Is Your Information Used ──────────────────────── */}
      <section id="how-used" className="relative py-16 overflow-hidden" style={{ backgroundColor: "#0E1221" }}>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 60V0h60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/30 to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 opacity-[0.03]" style={{ background: "radial-gradient(circle, #8b5cf6, transparent 60%)" }} />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8b5cf6] mb-3">Data Usage</p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                How and Why Is Your Information Used?
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#8b5cf6] to-transparent mb-4" />
              <p className="text-white/40 text-base max-w-2xl">
                We may use your information for a number of different purposes, which may include:
              </p>
            </div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 overflow-hidden max-w-4xl"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/20 to-transparent" />
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
                    <CheckCircle2 className="w-4 h-4 text-[#8b5cf6] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-sm text-white/50 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── How Long Is Your Information Kept For ─────────────────────── */}
      <section id="retention" className="relative py-16 overflow-hidden" style={{ backgroundColor: "#131942" }}>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/30 to-transparent" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 opacity-[0.03]" style={{ background: "radial-gradient(circle, #f59e0b, transparent 60%)" }} />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#f59e0b] mb-3">Retention Periods</p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                How Long Is Your Information Kept For?
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#f59e0b] to-transparent mb-4" />
              <p className="text-white/40 text-base max-w-3xl">
                We keep your information for no longer than is necessary for the purposes it was collected for. The length of time we retain your personal information is determined by operational and legal considerations. For example, we are legally required to hold some types of information to fulfil our statutory and regulatory obligations (e.g. health/safety and tax/accounting purposes). We review our retention periods on a regular basis:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {retentionData.map((item, i) => (
                <motion.div
                  key={item.category}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
                >
                  <div
                    className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full transition-opacity duration-300 opacity-40 group-hover:opacity-100"
                    style={{ background: `linear-gradient(to bottom, ${item.color}, ${item.color}40)` }}
                  />
                  <div
                    className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${item.color}10`, border: `1px solid ${item.color}20` }}
                  >
                    <Clock className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-white mb-2">{item.category}</h3>
                  <div className="h-px bg-white/[0.06] mb-3" />
                  <p className="text-sm text-white/40 leading-relaxed">{item.period}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Who Has Access to Your Information ────────────────────────── */}
      <section id="access" className="relative bg-[#0B0F1A] py-16 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/30 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#22C55E] mb-3">Data Access</p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                Who Has Access to Your Information?
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#22C55E] to-transparent mb-4" />
            </div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 overflow-hidden max-w-4xl"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent" />
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-[#22C55E]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-lg text-white pt-2">Data Sharing Practices</h3>
              </div>
              <div className="h-px bg-white/[0.06] mb-5" />
              <ul className="space-y-4">
                {[
                  "We do not sell or rent your information to third parties.",
                  "We do not share your information with third parties for marketing purposes.",
                  "We may pass your information to our associates for the purpose of completing tasks on your behalf.",
                  "We have secure cloud service providers to manage our customer details and service records.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-sm text-white/50 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Lawful Processing ────────────────────────────────────────── */}
      <section id="lawful" className="relative py-16 overflow-hidden" style={{ backgroundColor: "#0E1221" }}>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 60V0h60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />
        <div className="absolute top-0 right-1/4 w-96 h-96 opacity-[0.03]" style={{ background: "radial-gradient(circle, #2563EB, transparent 60%)" }} />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 opacity-[0.03]" style={{ background: "radial-gradient(circle, #8b5cf6, transparent 60%)" }} />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-3">Legal Basis</p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                Lawful Processing
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#2563EB] to-transparent mb-4" />
              <p className="text-white/40 text-base max-w-3xl">
                Data protection law requires us to rely on one or more lawful grounds to process your personal information. We consider the following grounds to be relevant:
              </p>
            </div>

            <div className="space-y-5 max-w-5xl">
              {/* Performance of a contract */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full bg-gradient-to-b from-[#2563EB] to-[#2563EB]/40 opacity-40" />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-white pt-2">Performance of a Contract</h3>
                </div>
                <p className="text-sm text-white/40 leading-relaxed">
                  Where we are entering into a contract with you or performing our obligations under it, for example when you became a &apos;paying&apos; member of our network.
                </p>
              </motion.div>

              {/* Legal obligation */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.06 }}
                className="relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full bg-gradient-to-b from-[#22C55E] to-[#22C55E]/40 opacity-40" />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center flex-shrink-0">
                    <Scale className="w-5 h-5 text-[#22C55E]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-white pt-2">Legal Obligation</h3>
                </div>
                <p className="text-sm text-white/40 leading-relaxed">
                  Where necessary, we can comply with a legal or regulatory obligation to which we are subject.
                </p>
              </motion.div>

              {/* Legitimate interests */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.12 }}
                className="relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full bg-gradient-to-b from-[#8b5cf6] to-[#8b5cf6]/40 opacity-40" />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center flex-shrink-0">
                    <Fingerprint className="w-5 h-5 text-[#8b5cf6]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-white pt-2">Legitimate Interests</h3>
                </div>
                <p className="text-sm text-white/40 leading-relaxed mb-4">
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
                      <CheckCircle2 className="w-4 h-4 text-[#8b5cf6] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-sm text-white/50 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-5">
                  <p className="text-sm text-white/40 leading-relaxed">
                    When we legitimately process your personal information in this way, we consider and balance any potential impact on you (both positive and negative), and your rights under data protection laws. We will not use your personal information where our interests are overridden by the impact on you, for example, where use would be excessively intrusive (unless, for instance, we are otherwise required or permitted to by law).
                  </p>
                </div>
              </motion.div>

              {/* Specific Consent */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.18 }}
                className="relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full bg-gradient-to-b from-[#C41E3A] to-[#C41E3A]/40 opacity-40" />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C41E3A]/10 border border-[#C41E3A]/20 flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-5 h-5 text-[#C41E3A]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-white pt-2">Specific Consent</h3>
                </div>
                <p className="text-sm text-white/40 leading-relaxed">
                  Where you have provided specific consent to us using your personal information in a certain way, such as to send you email, text and/or contact via telephone.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Marketing Communications & Building Profiles ──────────────── */}
      <section id="marketing" className="relative bg-[#0B0F1A] py-16 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/30 to-transparent" />
        <div className="absolute top-0 left-1/3 w-96 h-96 opacity-[0.03]" style={{ background: "radial-gradient(circle, #f59e0b, transparent 60%)" }} />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#f59e0b] mb-3">Communications</p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                Marketing Communications
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#f59e0b] to-transparent mb-4" />
            </div>

            <div className="grid lg:grid-cols-2 gap-6 max-w-5xl">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/20 to-transparent" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center flex-shrink-0">
                    <Bell className="w-5 h-5 text-[#f59e0b]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">Marketing</h3>
                </div>
                <div className="h-px bg-white/[0.06] mb-5" />
                <p className="text-sm text-white/40 leading-relaxed mb-5">
                  We may use your contact details to provide you with information about the vital work we do for the UK and Pakistan business community and additional opportunities to support us or to work together on projects, if we think it may be of interest to you.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold tracking-[0.1em] uppercase text-[#f59e0b] mb-2">Email</h4>
                    <p className="text-sm text-white/40 leading-relaxed">
                      You may opt out of our marketing communications at any time by clicking the unsubscribed link at the end of our marketing emails.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-[0.1em] uppercase text-[#f59e0b] mb-2">Post</h4>
                    <p className="text-sm text-white/40 leading-relaxed">
                      We may occasionally send you marketing communications by post unless you have told us that you would prefer not to hear from us, under your access rights request (details listed below).
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Building Profiles */}
              <motion.div
                id="profiles"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-[#22C55E]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">Building Profiles</h3>
                </div>
                <div className="h-px bg-white/[0.06] mb-5" />
                <p className="text-sm text-white/40 leading-relaxed mb-4">
                  We may analyze your personal information to create a profile of your interests and preferences so that we can tailor and target our communications in a way that is timely and relevant to you {"\u2013"} an example of this would be where interest in one of our Special Interest Groups (SIGs) has been expressed by you. This allows us to be more focused, efficient, and cost effective with our resources and reduces the risk of someone receiving information they may find inappropriate or irrelevant.
                </p>
                <p className="text-sm text-white/40 leading-relaxed mb-4">
                  We{"\u2019"}re committed to putting you in control of your data, please refer to your rights, below.
                </p>
                <p className="text-sm text-white/40 leading-relaxed">
                  We may also use your personal information to detect and reduce fraud and credit risk.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Your Rights ──────────────────────────────────────────────── */}
      <section id="rights" className="relative py-16 overflow-hidden" style={{ backgroundColor: "#0E1221" }}>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 60V0h60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C41E3A]/30 to-transparent" />
        <div className="absolute top-0 right-1/3 w-96 h-96 opacity-[0.03]" style={{ background: "radial-gradient(circle, #C41E3A, transparent 60%)" }} />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 opacity-[0.03]" style={{ background: "radial-gradient(circle, #2563EB, transparent 60%)" }} />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C41E3A] mb-3">Data Subject Rights</p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                Your Rights
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#C41E3A] to-transparent mb-4" />
              <p className="text-white/40 text-base max-w-3xl">
                Under UK data protection law, you have certain rights over the personal information that we hold about you. Here is a summary of the rights that we think apply:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 max-w-5xl">
              {/* Right of Access */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full bg-gradient-to-b from-[#2563EB] to-[#2563EB]/40 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#2563EB10", border: "1px solid #2563EB20" }}>
                  <Eye className="relative z-10 w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-base text-white mb-2">Right of Access</h3>
                <div className="h-px bg-white/[0.06] mb-3" />
                <p className="text-sm text-white/40 leading-relaxed">
                  You have a right to request access to the personal data that we hold about you. You also have the right to request a copy of the information we hold about you, and we will provide you with this unless legal exceptions apply. If you want to access your information, please send a description of the information you want to see and proof of your identity by email:{" "}
                  <a href="mailto:info@uptech.org.uk" className="text-[#2563EB] hover:text-[#60A5FA] transition-colors">info@uptech.org.uk</a>
                </p>
              </motion.div>

              {/* Right to Correction */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.06 }}
                className="group relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full bg-gradient-to-b from-[#22C55E] to-[#22C55E]/40 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#22C55E10", border: "1px solid #22C55E20" }}>
                  <FileText className="relative z-10 w-5 h-5 text-[#22C55E]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-base text-white mb-2">Right to Correction</h3>
                <div className="h-px bg-white/[0.06] mb-3" />
                <p className="text-sm text-white/40 leading-relaxed">
                  We shall update, archive or securely delete information if it goes out of date. You have the right to have inaccurate or incomplete information we hold about you corrected.
                </p>
              </motion.div>

              {/* Right to Restrict Use */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.12 }}
                className="group relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full bg-gradient-to-b from-[#8b5cf6] to-[#8b5cf6]/40 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#8b5cf610", border: "1px solid #8b5cf620" }}>
                  <Shield className="relative z-10 w-5 h-5 text-[#8b5cf6]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-base text-white mb-2">Right to Restrict Use</h3>
                <div className="h-px bg-white/[0.06] mb-3" />
                <p className="text-sm text-white/40 leading-relaxed">
                  You have a right to ask us to restrict the processing of some or all your personal information if there is a disagreement about its accuracy or we{"\u2019"}re not lawfully allowed to use it.
                </p>
              </motion.div>

              {/* Right of Erasure */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.18 }}
                className="group relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full bg-gradient-to-b from-[#C41E3A] to-[#C41E3A]/40 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#C41E3A10", border: "1px solid #C41E3A20" }}>
                  <AlertTriangle className="relative z-10 w-5 h-5 text-[#C41E3A]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-base text-white mb-2">Right of Erasure</h3>
                <div className="h-px bg-white/[0.06] mb-3" />
                <p className="text-sm text-white/40 leading-relaxed">
                  You may ask us to delete some or all your personal information and in certain cases, and subject to certain exceptions; we will do so as far as we are required to. In many cases, we will anonymize that information, rather than delete it.
                </p>
              </motion.div>

              {/* Right to Portability */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.24 }}
                className="group relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full bg-gradient-to-b from-[#f59e0b] to-[#f59e0b]/40 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#f59e0b10", border: "1px solid #f59e0b20" }}>
                  <Database className="relative z-10 w-5 h-5 text-[#f59e0b]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-base text-white mb-2">Right to Data Portability</h3>
                <div className="h-px bg-white/[0.06] mb-3" />
                <p className="text-sm text-white/40 leading-relaxed">
                  If we are processing your personal information (1) based on your consent, or in order to enter into or carry out a contract with you, and (2) the processing is being done by automated means, you may ask us to provide it to you or another service provider in a machine-readable format.
                </p>
              </motion.div>

              {/* Right to Object */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="group relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full bg-gradient-to-b from-[#2563EB] to-[#2563EB]/40 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#2563EB10", border: "1px solid #2563EB20" }}>
                  <Scale className="relative z-10 w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-base text-white mb-2">Right to Object</h3>
                <div className="h-px bg-white/[0.06] mb-3" />
                <p className="text-sm text-white/40 leading-relaxed">
                  You have the right to object to processing where we are using your personal information (1) based on legitimate interests, (2) for direct marketing or (3) for statistical/research purposes.
                </p>
              </motion.div>
            </div>

            {/* Exercise your rights callout */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="relative bg-gradient-to-br from-[#2563EB]/10 to-[#8b5cf6]/10 border border-[#2563EB]/20 rounded-xl p-6 mt-8 overflow-hidden max-w-5xl"
            >
              <div className="absolute top-0 right-0 w-24 h-24 opacity-20" style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }} />
              <div className="relative">
                <p className="text-sm text-white/50 leading-relaxed mb-4">
                  If you want to exercise any of the above rights, please email us at{" "}
                  <a href="mailto:info@uptech.org.uk" className="text-[#2563EB] hover:text-[#60A5FA] transition-colors">info@uptech.org.uk</a>
                  {" "}and clearly state in the email subject line: RIGHTS REQUEST. We may be required to ask for further information and/or evidence of identity. We will endeavor to respond fully to all requests within 10 working days of your request, however if we are unable to do so we will contact you with reasons for the delay.
                </p>
                <p className="text-sm text-white/50 leading-relaxed">
                  Please note that exceptions apply to a number of these rights, and not all rights will be applicable in all circumstances. For more details we recommend you consult the guidance published by the UK{"\u2019"}s Information Commissioner{"\u2019"}s Office,{" "}
                  <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:text-[#60A5FA] transition-colors">https://ico.org.uk</a>.
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Keeping Your Information Safe & Security ──────────────────── */}
      <section id="security" className="relative py-16 overflow-hidden" style={{ backgroundColor: "#131942" }}>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/30 to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 opacity-[0.03]" style={{ background: "radial-gradient(circle, #22C55E, transparent 60%)" }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 opacity-[0.03]" style={{ background: "radial-gradient(circle, #2563EB, transparent 60%)" }} />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#22C55E] mb-3">Data Protection</p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                Keeping Your Information Safe
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#22C55E] to-transparent mb-4" />
            </div>

            <div className="grid lg:grid-cols-2 gap-6 max-w-5xl">
              {/* Keeping Information Safe */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#22C55E]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">Technical & Organisational Controls</h3>
                </div>
                <div className="h-px bg-white/[0.06] mb-5" />
                <p className="text-sm text-white/40 leading-relaxed mb-4">
                  When you give us personal information, we take steps to ensure that appropriate technical and organizational controls are in place to protect it.
                </p>
                <p className="text-sm text-white/40 leading-relaxed">
                  Any sensitive information such as credit or debit card details is encrypted and protected with the following software 128 Bit encryption on SSL. When you are on a secure page, a lock icon will appear on the bottom of web browsers such as Microsoft Internet Explorer. This information will be stored by a third party. We have carried out due diligence with the organization.
                </p>
              </motion.div>

              {/* Security */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">Security</h3>
                </div>
                <div className="h-px bg-white/[0.06] mb-5" />
                <p className="text-sm text-white/40 leading-relaxed mb-4">
                  UPTECH uses reasonable measures to safeguard personal information. We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to only those employees, contractors or agents who have a legitimate business need to have access to that data. The employees, contractors or agents will process your personal data in accordance with our instructions. They will be subject to a duty of confidentiality and due care with respect to handling personal data. We have put in place procedures to deal with any suspected data security breach and will notify you and any applicable regulator of a suspected breach where we are legally required to do so.
                </p>
                <p className="text-sm text-white/40 leading-relaxed mb-4">
                  Emails are transmitted normally over the Internet, and this can never be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, we cannot guarantee the security of any information you transmit to us, and you do so at your own risk. Once we receive your information, we will make our best effort to ensure its security on our systems. Where we have given (or where you have chosen) a password which enables you to access certain parts of our website, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Contact CTA — Gradient dark section ──────────────────────── */}
      <section id="contact" className="relative overflow-hidden py-20" style={{ background: "linear-gradient(135deg, #0B0F1A 0%, #131942 50%, #0B0F1A 100%)" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />
        {/* Glow orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05]" style={{ background: "radial-gradient(circle, #2563EB, transparent 50%)" }} />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-4">Get in Touch</p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                Contact Information
              </h2>
              <p className="text-white/40 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
                For any questions about this Privacy Policy or our treatment of your Personal Information, please contact{" "}
                <a href="mailto:info@uptech.org.uk" className="text-[#2563EB] hover:text-[#60A5FA] transition-colors">info@uptech.org.uk</a>
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg" showArrow>Contact Us</Button>
                <Button href="/gdpr" variant="glass" size="lg" showArrow>GDPR Policy</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
