"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import {
  Shield, Eye, Users, FileText, Bell, Scale, Lock, Clock,
  UserCheck, ArrowRightLeft, Ban, Mail, CheckCircle2,
} from "lucide-react";

/* ── Data Subject Rights (from Cookies page GDPR section) ──────────── */
const dataSubjectRights = [
  { icon: Eye, title: "Right to Access", color: "#2563EB", desc: "Data subjects reserve the right to request and obtain confirmation that data is or is not being collected on them and if so, exactly what data is being collected, how, where, and for what purposes. This data can be manually requested via info@uptech.org.uk and provided in an electronic format free of charge." },
  { icon: Users, title: "Right to Be Forgotten", color: "#22C55E", desc: "Should data subjects at any time wish to withdraw their consent and no longer allow UK-PAKISTAN TECH COUNCIL LTD (UPTECH) International to store their personal data, this request can be manually made via info@uptech.org.uk Please be sure to include the full name (including any prefixes) and email address of whom the data is in reference too, so that all data relating to the data subject in question can be accurately removed." },
  { icon: FileText, title: "Data Portability", color: "#C41E3A", desc: "Similar to the Right to Access, Data Portability requires that data subjects are able to request, obtain, and/or transfer possession of collected data at any time. As mentioned above, this data can be manually requested via info@uptech.org.uk and provided in an electronic format free of charge. Should the data subject wish to transfer the possession of the data stored by UK-PAKISTAN TECH COUNCIL LTD (UPTECH), please be sure to also include the full name (including any prefixes) and the relevant contact information relating to the individual or organization whom you wish the data to be transferred to." },
  { icon: Bell, title: "Breach Notification", color: "#2563EB", desc: "Should UK-PAKISTAN TECH COUNCIL LTD (UPTECH) encounter a breach/unauthorized access of personal data that is likely to \u201Cresult in a risk for the rights and freedoms of individuals\u201D, UK-PAKISTAN TECH COUNCIL LTD (UPTECH) will ensure that a notification is made within 72 hours of becoming aware of the breach." },
];

const yourRights = [
  { icon: Eye, title: "Right of Access", color: "#2563EB", desc: "You have a right to request access to the personal data that we hold about you. You also have the right to request a copy of the information we hold about you, and we will provide you with this unless legal exceptions apply. If you want to access your information, please send a description of the information you want to see and proof of your identity by email: info@uptech.org.uk" },
  { icon: UserCheck, title: "Right to Correction", color: "#22C55E", desc: "We shall update, archive or securely delete information if it goes out of date. You have the right to have inaccurate or incomplete information we hold about you corrected." },
  { icon: Lock, title: "Right to Restrict Use", color: "#C41E3A", desc: "You have a right to ask us to restrict the processing of some or all your personal information if there is a disagreement about its accuracy or we\u2019re not lawfully allowed to use it." },
  { icon: Ban, title: "Right of Erasure", color: "#2563EB", desc: "You may ask us to delete some or all your personal information and in certain cases, and subject to certain exceptions; we will do so as far as we are required to. In many cases, we will anonymize that information, rather than delete it." },
  { icon: ArrowRightLeft, title: "Right to Portability", color: "#22C55E", desc: "If we are processing your personal information (1) based on your consent, or in order to enter into or carry out a contract with you, and (2) the processing is being done by automated means, you may ask us to provide it to you or another service provider in a machine-readable format." },
  { icon: Scale, title: "Right to Object", color: "#C41E3A", desc: "You have the right to object to processing where we are using your personal information (1) based on legitimate interests, (2) for direct marketing or (3) for statistical/research purposes." },
];

const lawfulBases = [
  { icon: FileText, title: "Performance of a Contract", color: "#2563EB", desc: "Where we are entering into a contract with you or performing our obligations under it, for example when you became a \u2018paying\u2019 member of our network." },
  { icon: Scale, title: "Legal Obligation", color: "#22C55E", desc: "Where necessary, we can comply with a legal or regulatory obligation to which we are subject." },
  { icon: CheckCircle2, title: "Legitimate Interests", color: "#C41E3A", desc: "Where it is reasonably necessary to achieve our legitimate interests, i.e. those required for running UPTIB as a B2B strategic networking organization in pursuit of our shared aims and ideals." },
  { icon: Mail, title: "Specific Consent", color: "#2563EB", desc: "Where you have provided specific consent to us using your personal information in a certain way, such as to send you email, text and/or contact via telephone." },
];

const retentionPeriods = [
  { category: "Members", period: "Through the contract period & up to 24 months after this has ended" },
  { category: "Prospects", period: "Up to 24 months from last contact" },
  { category: "Statutory Board Members", period: "Whilst serving and up to 6 months after term" },
  { category: "Advisory Board Members", period: "Whilst serving and up to 6 months after term" },
  { category: "Stakeholders", period: "Whilst serving and up to 6 months after term" },
  { category: "Suppliers", period: "Through the contract period & up to 24 months after this has ended" },
];

export default function GDPRPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[520px]">
        <Image src="/image/london-images/data-security-privacy.jpg" alt="" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(135deg, rgba(10,14,30,0.92) 0%, rgba(10,14,30,0.72) 50%, rgba(10,14,30,0.50) 100%)" }} />
        <div className="absolute inset-0 z-[2] opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 60V0h60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 xl:px-20 pt-20 pb-16">
          <motion.div initial={shouldReduceMotion ? {} : { opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/60">Data Protection</span>
            </div>
          </motion.div>
          <motion.h1 initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] text-white mb-6 max-w-3xl">
            GDPR{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60a5fa]">Compliance</span>
          </motion.h1>
          <motion.p initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="text-lg text-white/50 max-w-2xl leading-relaxed">Our commitment to data protection and your rights under the General Data Protection Regulation.</motion.p>
        </div>
      </section>

      {/* ── Data Subject Rights — Light section ─────────────────────── */}
      <section className="relative bg-[#EEECEA] py-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-3">GDPR Compliance</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">Data Subject Rights</h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#2563EB] to-transparent mb-4" />
              <p className="text-[#7A7E8F] text-base max-w-3xl">GDPR compliance requires data subjects to be granted certain rights. What follows is not an exhaustive list, but those rights that are relevant to the collection, processing, and storage of personal data on{" "}<a href="https://www.uptech.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:text-[#60A5FA] transition-colors">www.uptech.org.uk</a></p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {dataSubjectRights.map((right, i) => {
                const Icon = right.icon;
                return (
                  <motion.div key={right.title} initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: i * 0.06 }} className="group relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden shadow-sm">
                    <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full transition-opacity duration-300 opacity-40 group-hover:opacity-100" style={{ background: `linear-gradient(to bottom, ${right.color}, ${right.color}40)` }} />
                    <div className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${right.color}10`, border: `1px solid ${right.color}20` }}>
                      <div className="absolute inset-[-6px] rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500" style={{ backgroundColor: right.color }} />
                      <Icon className="relative z-10 w-5 h-5" style={{ color: right.color }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{right.title}</h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-base text-[#7A7E8F] leading-relaxed">{right.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Your Rights — Light alt section ─────────── */}
      <section className="relative py-10 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#22C55E] mb-3">Your Rights</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">Rights Under UK Data Protection Law</h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#22C55E] to-transparent mb-4" />
              <p className="text-[#7A7E8F] text-base max-w-3xl">Under UK data protection law, you have certain rights over the personal information that we hold about you. Here is a summary of the rights that we think apply:</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {yourRights.map((right, i) => {
                const Icon = right.icon;
                return (
                  <motion.div key={right.title} initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: i * 0.06 }} className="group relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden shadow-sm">
                    <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full transition-opacity duration-300 opacity-40 group-hover:opacity-100" style={{ background: `linear-gradient(to bottom, ${right.color}, ${right.color}40)` }} />
                    <div className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${right.color}10`, border: `1px solid ${right.color}20` }}>
                      <div className="absolute inset-[-6px] rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500" style={{ backgroundColor: right.color }} />
                      <Icon className="relative z-10 w-5 h-5" style={{ color: right.color }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{right.title}</h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-base text-[#7A7E8F] leading-relaxed">{right.desc}</p>
                  </motion.div>
                );
              })}
            </div>
            <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.4, delay: 0.3 }} className="mt-8 relative bg-gradient-to-br from-[#22C55E]/10 to-[#2563EB]/10 border border-[#22C55E]/20 rounded-xl p-6 overflow-hidden max-w-4xl">
              <div className="relative">
                <Mail className="w-5 h-5 text-[#22C55E] mb-3" strokeWidth={1.5} />
                <p className="text-[#5A5F72] text-sm leading-relaxed">If you want to exercise any of the above rights, please email us at{" "}<a href="mailto:info@uptech.org.uk" className="text-[#22C55E] hover:text-[#4ade80] transition-colors">info@uptech.org.uk</a>{" "}and clearly state in the email subject line: RIGHTS REQUEST. We may be required to ask for further information and/or evidence of identity. We will endeavor to respond fully to all requests within 10 working days of your request, however if we are unable to do so we will contact you with reasons for the delay.</p>
                <p className="text-[#7A7E8F] text-sm leading-relaxed mt-4">Please note that exceptions apply to a number of these rights, and not all rights will be applicable in all circumstances. For more details we recommend you consult the guidance published by the UK{"\u2019"}s Information Commissioner{"\u2019"}s Office,{" "}<a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#22C55E] hover:text-[#4ade80] transition-colors">https://ico.org.uk</a>.</p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Lawful Processing — Light section ─────────────────── */}
      <section className="relative bg-[#EEECEA] py-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-3">Legal Basis</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">Lawful Processing</h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#2563EB] to-transparent mb-4" />
              <p className="text-[#7A7E8F] text-base max-w-3xl">Data protection law requires us to rely on one or more lawful grounds to process your personal information. We consider the following grounds to be relevant:</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5 max-w-5xl">
              {lawfulBases.map((basis, i) => {
                const Icon = basis.icon;
                return (
                  <motion.div key={basis.title} initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: i * 0.06 }} className="group relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden shadow-sm">
                    <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full transition-opacity duration-300 opacity-40 group-hover:opacity-100" style={{ background: `linear-gradient(to bottom, ${basis.color}, ${basis.color}40)` }} />
                    <div className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${basis.color}10`, border: `1px solid ${basis.color}20` }}>
                      <div className="absolute inset-[-6px] rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500" style={{ backgroundColor: basis.color }} />
                      <Icon className="relative z-10 w-5 h-5" style={{ color: basis.color }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{basis.title}</h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-base text-[#7A7E8F] leading-relaxed">{basis.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Data Retention — Light alt section ───────────────────────── */}
      <section className="relative py-10 overflow-hidden bg-[#F5F4F2]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C41E3A]/20 to-transparent" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C41E3A] mb-3">Retention Policy</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">Data Retention</h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#C41E3A] to-transparent mb-4" />
              <p className="text-[#7A7E8F] text-base max-w-3xl">We keep your information for no longer than is necessary for the purposes it was collected for. The length of time we retain your personal information is determined by operational and legal considerations.</p>
            </div>
            <div className="max-w-4xl">
              <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.4 }} className="grid grid-cols-[1fr_2fr] gap-4 px-6 py-4 mb-2">
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C41E3A]">Category</div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C41E3A]">Retention Period</div>
              </motion.div>
              {retentionPeriods.map((item, i) => (
                <motion.div key={item.category} initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group grid grid-cols-[1fr_2fr] gap-4 relative bg-white border border-[#D8D5CF] rounded-xl px-6 py-5 mb-3 hover:shadow-md transition-all duration-300 overflow-hidden shadow-sm">
                  <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full transition-opacity duration-300 opacity-40 group-hover:opacity-100 bg-gradient-to-b from-[#C41E3A] to-[#C41E3A]/25" />
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#C41E3A]/10 border border-[#C41E3A]/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-[#C41E3A]" strokeWidth={1.5} />
                    </div>
                    <span className="font-heading font-bold text-sm text-[#1C1F2E]">{item.category}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-base text-[#7A7E8F] leading-relaxed">{item.period}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Security — Light section ────────────────────────────────── */}
      <section className="relative bg-white py-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#22C55E] mb-3">Data Security</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">Security Measures</h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#22C55E] to-transparent mb-4" />
            </div>
            <div className="max-w-4xl">
              <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#22C55E]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E] pt-2">Safeguarding Your Data</h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <p className="text-base text-[#5A5F72] leading-relaxed">UPTECH uses reasonable measures to safeguard personal information. We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to only those employees, contractors or agents who have a legitimate business need to have access to that data.</p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Contact CTA — Gradient dark section ───────────────────── */}
      <section className="relative overflow-hidden py-12" style={{ background: "linear-gradient(135deg, #0B0F1A 0%, #131942 50%, #0B0F1A 100%)" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05]" style={{ background: "radial-gradient(circle, #2563EB, transparent 50%)" }} />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-4">Get in Touch</p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">Contact Us</h2>
              <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-4">For any questions about this Privacy Policy or our treatment of your Personal Information, please contact{" "}<a href="mailto:info@uptech.org.uk" className="text-[#2563EB] hover:text-[#60A5FA] transition-colors">info@uptech.org.uk</a></p>
              <div className="flex flex-wrap gap-4 mt-10">
                <Button href="/contact" variant="primary" size="lg" showArrow>Contact Us</Button>
                <Button href="/membership/apply" variant="glass" size="lg" showArrow>Apply for Membership</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
