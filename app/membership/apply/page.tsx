"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Send,
  User,
  Building2,
  Mail,
  Phone,
  Globe,
  MapPin,
  Briefcase,
  FileText,
  CheckCircle2,
  ChevronDown,
  Users,
  CreditCard,
  ArrowRight,
  Shield,
  Linkedin,
  Star,
} from "lucide-react";

/* ─── Animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const itemFade = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } },
};


/* ─── Membership tiers data ─── */
const membershipTiers = [
  { value: "chairmans-circle", label: "Chairman's Circle Membership", fee: "By Invitation" },
  { value: "corporate", label: "Corporate Membership", fee: "Contact for pricing" },
  { value: "sme-scaleup", label: "SME / Scale-up Membership", fee: "Contact for pricing" },
  { value: "startup", label: "Startup Membership", fee: "Contact for pricing" },
  { value: "associates", label: "Associates Membership", fee: "Contact for pricing" },
  { value: "academic", label: "Academic Institutions", fee: "Contact for pricing" },
  { value: "individual", label: "Individual Membership", fee: "Contact for pricing" },
];

/* ─── Industry sectors ─── */
const sectors = [
  "Artificial Intelligence & Machine Learning",
  "Software Development & SaaS",
  "Cybersecurity",
  "Cloud Computing & Infrastructure",
  "FinTech & Digital Banking",
  "HealthTech & BioTech",
  "EdTech & E-Learning",
  "E-Commerce & Retail Tech",
  "Clean Technology & GreenTech",
  "Telecommunications",
  "Data Analytics & Big Data",
  "IoT & Smart Systems",
  "Blockchain & Web3",
  "Consulting & Professional Services",
  "Manufacturing & Industrial Tech",
  "Logistics & Supply Chain Tech",
  "Legal & Regulatory Tech",
  "Real Estate & PropTech",
  "Media & Creative Technology",
  "Government & Public Sector",
  "Academic & Research",
  "Non-Profit & Social Enterprise",
];

/* ─── Office locations ─── */
const ukCities = [
  "London", "Manchester", "Birmingham", "Leeds", "Edinburgh",
  "Glasgow", "Bristol", "Cambridge", "Oxford", "Belfast",
  "Cardiff", "Nottingham", "Sheffield", "Liverpool",
];

const pakistanCities = [
  "Islamabad", "Lahore", "Karachi", "Rawalpindi", "Peshawar",
  "Faisalabad", "Multan", "Sialkot", "Quetta", "Hyderabad",
];

export default function MembershipApplicationForm() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedTier, setSelectedTier] = useState("");
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [ukOffices, setUkOffices] = useState<string[]>([]);
  const [pakOffices, setPakOffices] = useState<string[]>([]);
  const [mailingList, setMailingList] = useState(true);
  const [memberDirectory, setMemberDirectory] = useState(true);
  const [websiteLink, setWebsiteLink] = useState(true);
  const [publiclyListed, setPubliclyListed] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleSector = (sector: string) => {
    setSelectedSectors((prev) =>
      prev.includes(sector) ? prev.filter((s) => s !== sector) : [...prev, sector]
    );
  };

  const toggleUkOffice = (city: string) => {
    setUkOffices((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  };

  const togglePakOffice = (city: string) => {
    setPakOffices((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen bg-[#EEECEA] text-[#1C1F2E] overflow-hidden">
      {/* ── Ambient background ────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-blue-600/[0.02] blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#2563EB]/[0.02] blur-[120px]" />
      </div>

      {/* ═══════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=2400&q=85&auto=format&fit=crop"
            alt="UPTECH Membership Application"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A]/80 via-[#0B0F1A]/70 to-[#EEECEA]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 pt-28 pb-14 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={itemFade}
              className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400 mb-4"
            >
              Membership Application
            </motion.p>
            <motion.h1
              variants={itemFade}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6"
            >
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                Join the UK–Pakistan
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#2563EB] to-[#22C55E] bg-clip-text text-transparent">
                Tech Council
              </span>
            </motion.h1>
            <motion.p
              variants={itemFade}
              className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              Complete the application form below. UPTECH reserves the right to review and approve
              all membership applications. Membership is valid for one year from the date of payment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SUCCESS MESSAGE
      ═══════════════════════════════════════════════════════ */}
      {formSubmitted && (
        <section className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 -mt-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center shadow-sm"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-[#1C1F2E] mb-3">Application Submitted Successfully</h2>
            <p className="text-[#5A5F72] max-w-lg mx-auto mb-6">
              Thank you for your interest in joining UPTECH. Our membership team will review your
              application and contact you within 5 business days regarding next steps and payment information.
            </p>
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F5F4F2] border border-[#D8D5CF] rounded-lg text-[#1C1F2E] hover:bg-white transition-all"
            >
              Back to Membership Overview <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════
          APPLICATION FORM
      ═══════════════════════════════════════════════════════ */}
      {!formSubmitted && (
        <section className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 pb-14">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* ── Section 1: Membership Type ─────────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-white border border-[#D8D5CF] rounded-2xl p-8 sm:p-10 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Star className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1C1F2E]">Membership Type</h2>
                  <p className="text-base text-[#7A7E8F]">Select the membership category that best fits your organisation</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {membershipTiers.map((tier) => (
                  <label
                    key={tier.value}
                    className={`
                      relative flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200
                      ${selectedTier === tier.value
                        ? "bg-blue-500/10 border-blue-500/30"
                        : "bg-[#F5F4F2] border-[#D8D5CF] hover:border-[#3D4152]"
                      }
                    `}
                  >
                    <input
                      type="radio"
                      name="membershipType"
                      value={tier.value}
                      checked={selectedTier === tier.value}
                      onChange={(e) => setSelectedTier(e.target.value)}
                      className="mt-1 accent-blue-500"
                      required
                    />
                    <div>
                      <span className="block text-sm font-semibold text-[#1C1F2E]">{tier.label}</span>
                      <span className="block text-xs text-[#7A7E8F] mt-0.5">{tier.fee}</span>
                    </div>
                  </label>
                ))}
              </div>

              <p className="text-xs text-[#7A7E8F] mt-4">
                Membership fees will be confirmed upon application review. All fees exclude applicable taxes.
              </p>
            </motion.div>

            {/* ── Section 2: Organisation Details ────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-white border border-[#D8D5CF] rounded-2xl p-8 sm:p-10 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1C1F2E]">Organisation Details</h2>
                  <p className="text-base text-[#7A7E8F]">Information about your company or institution</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                  <label className="block text-base font-medium text-[#3D4152] mb-2">
                    Organisation Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your organisation name"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-base font-medium text-[#3D4152] mb-2">
                    Registered Business Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Street address, city, country"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">
                    Postcode <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. SW1A 1AA"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">
                    Country <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all appearance-none"
                    >
                      <option value="" className="bg-white">Select country</option>
                      <option value="uk" className="bg-white">United Kingdom</option>
                      <option value="pakistan" className="bg-white">Pakistan</option>
                      <option value="other" className="bg-white">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A7E8F] pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+44 20 XXXX XXXX"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">Website</label>
                  <input
                    type="url"
                    placeholder="https://www.example.com"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">
                    Annual Revenue (GBP)
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all appearance-none">
                      <option value="" className="bg-white">Select range</option>
                      <option value="under-100k" className="bg-white">Under £100,000</option>
                      <option value="100k-500k" className="bg-white">£100,000 – £500,000</option>
                      <option value="500k-1m" className="bg-white">£500,000 – £1,000,000</option>
                      <option value="1m-5m" className="bg-white">£1,000,000 – £5,000,000</option>
                      <option value="5m-25m" className="bg-white">£5,000,000 – £25,000,000</option>
                      <option value="over-25m" className="bg-white">Over £25,000,000</option>
                      <option value="prefer-not" className="bg-white">Prefer not to say</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A7E8F] pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">Number of Employees</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all appearance-none">
                      <option value="" className="bg-white">Select range</option>
                      <option value="1-10" className="bg-white">1 – 10</option>
                      <option value="11-50" className="bg-white">11 – 50</option>
                      <option value="51-200" className="bg-white">51 – 200</option>
                      <option value="201-500" className="bg-white">201 – 500</option>
                      <option value="501-1000" className="bg-white">501 – 1,000</option>
                      <option value="over-1000" className="bg-white">Over 1,000</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A7E8F] pointer-events-none" />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-base font-medium text-[#3D4152] mb-2">
                    Core Products / Services <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe your core products and services"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all resize-none"
                  />
                </div>
              </div>

              {/* Public listing preferences */}
              <div className="mt-8 pt-6 border-t border-[#D8D5CF]">
                <p className="text-base font-medium text-[#3D4152] mb-4">Listing Preferences</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={websiteLink}
                      onChange={(e) => setWebsiteLink(e.target.checked)}
                      className="accent-blue-500"
                    />
                    <span className="text-sm text-[#5A5F72] group-hover:text-[#3D4152]">
                      Link my website on the UPTECH website
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={publiclyListed}
                      onChange={(e) => setPubliclyListed(e.target.checked)}
                      className="accent-blue-500"
                    />
                    <span className="text-sm text-[#5A5F72] group-hover:text-[#3D4152]">
                      Are you publicly listed?
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={memberDirectory}
                      onChange={(e) => setMemberDirectory(e.target.checked)}
                      className="accent-blue-500"
                    />
                    <span className="text-sm text-[#5A5F72] group-hover:text-[#3D4152]">
                      List on UPTECH member directory
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={mailingList}
                      onChange={(e) => setMailingList(e.target.checked)}
                      className="accent-blue-500"
                    />
                    <span className="text-sm text-[#5A5F72] group-hover:text-[#3D4152]">
                      Receive UPTECH updates and notices
                    </span>
                  </label>
                </div>
              </div>
            </motion.div>

            {/* ── Section 3: Industry Sectors ────────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-white border border-[#D8D5CF] rounded-2xl p-8 sm:p-10 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1C1F2E]">Industry Sectors</h2>
                  <p className="text-base text-[#7A7E8F]">Select the sectors that best represent your organisation&apos;s activities</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {sectors.map((sector) => (
                  <label
                    key={sector}
                    className={`
                      flex items-center gap-2 px-3 py-2.5 rounded-lg border cursor-pointer transition-all text-xs
                      ${selectedSectors.includes(sector)
                        ? "bg-green-500/10 border-green-500/30 text-green-300"
                        : "bg-white/[0.02] border-white/[0.06] text-[#5A5F72] hover:border-[#3D4152] hover:text-[#3D4152]"
                      }
                    `}
                  >
                    <input
                      type="checkbox"
                      checked={selectedSectors.includes(sector)}
                      onChange={() => toggleSector(sector)}
                      className="sr-only"
                    />
                    <span className={`w-3.5 h-3.5 rounded flex-shrink-0 border flex items-center justify-center ${selectedSectors.includes(sector) ? "bg-green-500 border-green-500" : "border-[#D8D5CF]"}`}>
                      {selectedSectors.includes(sector) && (
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span className="leading-tight">{sector}</span>
                  </label>
                ))}
              </div>

              <div className="mt-4">
                <label className="block text-base font-medium text-[#3D4152] mb-2">Other (please specify)</label>
                <input
                  type="text"
                  placeholder="Enter other sectors"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                />
              </div>
            </motion.div>

            {/* ── Section 4: Office Locations ────────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-white border border-[#D8D5CF] rounded-2xl p-8 sm:p-10 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#C41E3A]/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#C41E3A]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1C1F2E]">Office Locations</h2>
                  <p className="text-base text-[#7A7E8F]">Select all cities where your organisation has offices</p>
                </div>
              </div>

              {/* UK Offices */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
                  United Kingdom
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                  {ukCities.map((city) => (
                    <label
                      key={city}
                      className={`
                        flex items-center justify-center px-3 py-2 rounded-lg border cursor-pointer transition-all text-xs text-center
                        ${ukOffices.includes(city)
                          ? "bg-blue-500/10 border-blue-500/30 text-blue-300"
                          : "bg-[#F5F4F2] border-[#D8D5CF] text-[#5A5F72] hover:border-[#3D4152]"
                        }
                      `}
                    >
                      <input
                        type="checkbox"
                        checked={ukOffices.includes(city)}
                        onChange={() => toggleUkOffice(city)}
                        className="sr-only"
                      />
                      {city}
                    </label>
                  ))}
                </div>
                <div className="mt-3">
                  <input
                    type="text"
                    placeholder="Other UK city"
                    className="w-full sm:w-64 px-4 py-2.5 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] text-sm placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 transition-all"
                  />
                </div>
              </div>

              {/* Pakistan Offices */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-3">
                  Pakistan
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
                  {pakistanCities.map((city) => (
                    <label
                      key={city}
                      className={`
                        flex items-center justify-center px-3 py-2 rounded-lg border cursor-pointer transition-all text-xs text-center
                        ${pakOffices.includes(city)
                          ? "bg-green-500/10 border-green-500/30 text-green-300"
                          : "bg-[#F5F4F2] border-[#D8D5CF] text-[#5A5F72] hover:border-[#3D4152]"
                        }
                      `}
                    >
                      <input
                        type="checkbox"
                        checked={pakOffices.includes(city)}
                        onChange={() => togglePakOffice(city)}
                        className="sr-only"
                      />
                      {city}
                    </label>
                  ))}
                </div>
                <div className="mt-3">
                  <input
                    type="text"
                    placeholder="Other Pakistan city"
                    className="w-full sm:w-64 px-4 py-2.5 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] text-sm placeholder:text-[#9A9EAF] focus:outline-none focus:border-green-500/50 transition-all"
                  />
                </div>
              </div>

              {/* Employee counts */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">
                    Employees in the UK
                  </label>
                  <input
                    type="number"
                    min="0"
                    placeholder="0"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">
                    Employees in Pakistan
                  </label>
                  <input
                    type="number"
                    min="0"
                    placeholder="0"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-green-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
              </div>
            </motion.div>

            {/* ── Section 5: Organisation Profile ────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-white border border-[#D8D5CF] rounded-2xl p-8 sm:p-10 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1C1F2E]">Organisation Profile</h2>
                  <p className="text-base text-[#7A7E8F]">This profile will be used for the UPTECH membership directory (max 100 words)</p>
                </div>
              </div>

              <textarea
                rows={5}
                maxLength={800}
                placeholder="Provide a brief description of your organisation, its mission, and key activities..."
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all resize-none"
              />
              <p className="text-xs text-[#7A7E8F] mt-2">
                UPTECH reserves the right to edit profiles that exceed 100 words.
                Please send your high-resolution logo to{" "}
                <a href="mailto:info@uptechcouncil.org" className="text-blue-400 hover:underline">
                  info@uptechcouncil.org
                </a>{" "}
                if you would like to be listed on the member directory.
              </p>
            </motion.div>

            {/* ── Section 6: CEO / Principal Contact ─────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-white border border-[#D8D5CF] rounded-2xl p-8 sm:p-10 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-rose-500/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1C1F2E]">CEO / Principal Representative</h2>
                  <p className="text-base text-[#7A7E8F]">Primary decision-maker for the organisation</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="First name"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">
                    Last Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Last name"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">
                    Job Title <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CEO, Managing Director"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">Nationality</label>
                  <input
                    type="text"
                    placeholder="e.g. British, Pakistani"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+44 7XXX XXXXXX"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="+44 7XXX XXXXXX"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">LinkedIn Profile</label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/..."
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
              </div>
            </motion.div>

            {/* ── Section 7: Primary Contact ──────────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-white border border-[#D8D5CF] rounded-2xl p-8 sm:p-10 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1C1F2E]">Primary Contact Person</h2>
                  <p className="text-base text-[#7A7E8F]">Main point of contact for UPTECH correspondence (if different from CEO)</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">Job Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Head of Operations"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">Nationality</label>
                  <input
                    type="text"
                    placeholder="e.g. British, Pakistani"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+44 7XXX XXXXXX"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
              </div>
            </motion.div>

            {/* ── Section 8: Secondary Contact ───────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-white border border-[#D8D5CF] rounded-2xl p-8 sm:p-10 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1C1F2E]">Secondary Contact (Optional)</h2>
                  <p className="text-base text-[#7A7E8F]">Additional point of contact for your organisation</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">Job Title</label>
                  <input
                    type="text"
                    placeholder="e.g. CFO, Director"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+44 7XXX XXXXXX"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="+44 7XXX XXXXXX"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
              </div>
            </motion.div>

            {/* ── Section 9: Pakistan Contact (Where applicable) ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-white border border-[#D8D5CF] rounded-2xl p-8 sm:p-10 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1C1F2E]">Main Contact in Pakistan (Optional)</h2>
                  <p className="text-base text-[#7A7E8F]">If your organisation has operations in Pakistan</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">Job Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Country Manager"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+92 XXX XXXXXXX"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">Pakistan Office Address</label>
                  <input
                    type="text"
                    placeholder="Full address"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
              </div>
            </motion.div>

            {/* ── Section 10: Referral ──────────────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-white border border-[#D8D5CF] rounded-2xl p-8 sm:p-10 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1C1F2E]">Referred By (Optional)</h2>
                  <p className="text-base text-[#7A7E8F]">If you were referred by an existing UPTECH member</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">Referrer&apos;s Name</label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">Organisation</label>
                  <input
                    type="text"
                    placeholder="Organisation name"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="referrer@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#3D4152] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+44 XXXX XXXXXX"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#9A9EAF] focus:outline-none focus:border-blue-500/50 focus:bg-[#F5F4F2] transition-all"
                  />
                </div>
              </div>
            </motion.div>

            {/* ── Terms & Submit ──────────────────────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-gradient-to-b from-blue-50 to-green-50 border border-[#D8D5CF] rounded-2xl p-8 sm:p-10 shadow-sm"
            >
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-[#1C1F2E] mb-4">Submit Your Application</h2>
                <p className="text-[#5A5F72] mb-8 text-sm leading-relaxed">
                  By submitting this form, you confirm that the information provided is accurate and agree
                  to UPTECH&apos;s{" "}
                  <Link href="/terms" className="text-blue-400 hover:underline">Terms &amp; Conditions</Link>,{" "}
                  <Link href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link>, and{" "}
                  <Link href="/code-of-conduct" className="text-blue-400 hover:underline">Code of Conduct</Link>.
                  Membership is non-transferable. Payment details will be provided upon application approval.
                </p>

                <label className="flex items-start gap-3 text-left mb-8 max-w-lg mx-auto">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 accent-blue-500"
                  />
                  <span className="text-sm text-[#3D4152]">
                    I confirm the above information is accurate and I agree to UPTECH&apos;s Terms &amp; Conditions,
                    Privacy Policy, and Code of Conduct. <span className="text-red-400">*</span>
                  </span>
                </label>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                >
                  <Send className="w-5 h-5" />
                  Submit Application
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-[#7A7E8F] mt-6">
                  Our membership team will review your application and respond within 5 business days.
                  For enquiries, contact{" "}
                  <a href="mailto:membership@uptechcouncil.org" className="text-blue-400 hover:underline">
                    membership@uptechcouncil.org
                  </a>
                </p>
              </div>
            </motion.div>

          </form>
        </section>
      )}
    </main>
  );
}
