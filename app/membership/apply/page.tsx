"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import {
  Send,
  User,
  Building2,
  Mail,
  Globe,
  MapPin,
  Briefcase,
  FileText,
  CheckCircle2,
  ChevronDown,
  Users,
  ArrowRight,
  Shield,
  Star,
} from "lucide-react";

/* ─── Animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
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

/* ─── Shared input class ─── */
const inputClass =
  "w-full px-4 py-3 rounded bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder:text-[#7A7E8F] focus:outline-none focus:border-[#2563EB] transition-all";

const selectClass =
  "w-full px-4 py-3 rounded bg-white border border-[#D8D5CF] text-[#1C1F2E] focus:outline-none focus:border-[#2563EB] transition-all appearance-none";

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
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════ */}
      <PageHero
        image="/image/membership-banner.jpg"
        title={
          <>
            Join the UK--Pakistan<br />
            <span className="text-[#2563EB]">Tech Council</span>
          </>
        }
        subtitle="Complete the application form below. UPTECH reserves the right to review and approve all membership applications. Membership is valid for one year from the date of payment."
      />

      {/* ═══════════════════════════════════════════════════════
          SUCCESS MESSAGE
      ═══════════════════════════════════════════════════════ */}
      {formSubmitted && (
        <Section variant="light">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto bg-white border border-[#22C55E]/30 rounded p-10 text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#22C55E]/10 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-[#22C55E]" />
            </div>
            <h2 className="text-2xl font-bold text-[#1C1F2E] mb-3">Application Submitted Successfully</h2>
            <p className="text-[#3D4152] max-w-lg mx-auto mb-6">
              Thank you for your interest in joining UPTECH. Our membership team will review your
              application and contact you within 5 business days regarding next steps and payment information.
            </p>
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded hover:bg-[#1d4ed8] transition-all font-medium"
            >
              Back to Membership Overview <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </Section>
      )}

      {/* ═══════════════════════════════════════════════════════
          APPLICATION FORM
      ═══════════════════════════════════════════════════════ */}
      {!formSubmitted && (
        <Section variant="light">
          <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-10">

            {/* ── Section 1: Membership Type ─────────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-white border border-[#D8D5CF] rounded p-8 sm:p-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1C1F2E]">Membership Type</h2>
                  <p className="text-sm text-[#7A7E8F]">Select the membership category that best fits your organisation</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {membershipTiers.map((tier) => (
                  <label
                    key={tier.value}
                    className={`
                      relative flex items-start gap-3 p-4 rounded border cursor-pointer transition-all duration-200
                      ${selectedTier === tier.value
                        ? "bg-[#2563EB]/5 border-[#2563EB]/40"
                        : "bg-[#EEECEA] border-[#D8D5CF] hover:border-[#1C1F2E]/20"
                      }
                    `}
                  >
                    <input
                      type="radio"
                      name="membershipType"
                      value={tier.value}
                      checked={selectedTier === tier.value}
                      onChange={(e) => setSelectedTier(e.target.value)}
                      className="mt-1 accent-[#2563EB]"
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
              className="bg-white border border-[#D8D5CF] rounded p-8 sm:p-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#8b5cf6]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1C1F2E]">Organisation Details</h2>
                  <p className="text-sm text-[#7A7E8F]">Information about your company or institution</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">
                    Organisation Name <span className="text-[#C41E3A]">*</span>
                  </label>
                  <input type="text" required placeholder="Enter your organisation name" className={inputClass} />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">
                    Registered Business Address <span className="text-[#C41E3A]">*</span>
                  </label>
                  <input type="text" required placeholder="Street address, city, country" className={inputClass} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">
                    Postcode <span className="text-[#C41E3A]">*</span>
                  </label>
                  <input type="text" required placeholder="e.g. SW1A 1AA" className={inputClass} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">
                    Country <span className="text-[#C41E3A]">*</span>
                  </label>
                  <div className="relative">
                    <select required className={selectClass}>
                      <option value="">Select country</option>
                      <option value="uk">United Kingdom</option>
                      <option value="pakistan">Pakistan</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A7E8F] pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">
                    Phone Number <span className="text-[#C41E3A]">*</span>
                  </label>
                  <input type="tel" required placeholder="+44 20 XXXX XXXX" className={inputClass} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Website</label>
                  <input type="url" placeholder="https://www.example.com" className={inputClass} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">
                    Annual Revenue (GBP)
                  </label>
                  <div className="relative">
                    <select className={selectClass}>
                      <option value="">Select range</option>
                      <option value="under-100k">Under £100,000</option>
                      <option value="100k-500k">£100,000 – £500,000</option>
                      <option value="500k-1m">£500,000 – £1,000,000</option>
                      <option value="1m-5m">£1,000,000 – £5,000,000</option>
                      <option value="5m-25m">£5,000,000 – £25,000,000</option>
                      <option value="over-25m">Over £25,000,000</option>
                      <option value="prefer-not">Prefer not to say</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A7E8F] pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Number of Employees</label>
                  <div className="relative">
                    <select className={selectClass}>
                      <option value="">Select range</option>
                      <option value="1-10">1 – 10</option>
                      <option value="11-50">11 – 50</option>
                      <option value="51-200">51 – 200</option>
                      <option value="201-500">201 – 500</option>
                      <option value="501-1000">501 – 1,000</option>
                      <option value="over-1000">Over 1,000</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A7E8F] pointer-events-none" />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">
                    Core Products / Services <span className="text-[#C41E3A]">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe your core products and services"
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>

              {/* Public listing preferences */}
              <div className="mt-8 pt-6 border-t border-[#D8D5CF]">
                <p className="text-sm font-medium text-[#1C1F2E] mb-4">Listing Preferences</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={websiteLink}
                      onChange={(e) => setWebsiteLink(e.target.checked)}
                      className="accent-[#2563EB]"
                    />
                    <span className="text-sm text-[#3D4152] group-hover:text-[#1C1F2E]">
                      Link my website on the UPTECH website
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={publiclyListed}
                      onChange={(e) => setPubliclyListed(e.target.checked)}
                      className="accent-[#2563EB]"
                    />
                    <span className="text-sm text-[#3D4152] group-hover:text-[#1C1F2E]">
                      Are you publicly listed?
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={memberDirectory}
                      onChange={(e) => setMemberDirectory(e.target.checked)}
                      className="accent-[#2563EB]"
                    />
                    <span className="text-sm text-[#3D4152] group-hover:text-[#1C1F2E]">
                      List on UPTECH member directory
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={mailingList}
                      onChange={(e) => setMailingList(e.target.checked)}
                      className="accent-[#2563EB]"
                    />
                    <span className="text-sm text-[#3D4152] group-hover:text-[#1C1F2E]">
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
              className="bg-white border border-[#D8D5CF] rounded p-8 sm:p-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[#22C55E]/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-[#22C55E]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1C1F2E]">Industry Sectors</h2>
                  <p className="text-sm text-[#7A7E8F]">Select the sectors that best represent your organisation&apos;s activities</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {sectors.map((sector) => (
                  <label
                    key={sector}
                    className={`
                      flex items-center gap-2 px-3 py-2.5 rounded border cursor-pointer transition-all text-xs
                      ${selectedSectors.includes(sector)
                        ? "bg-[#22C55E]/5 border-[#22C55E]/40 text-[#22C55E]"
                        : "bg-[#EEECEA] border-[#D8D5CF] text-[#3D4152] hover:border-[#1C1F2E]/20"
                      }
                    `}
                  >
                    <input
                      type="checkbox"
                      checked={selectedSectors.includes(sector)}
                      onChange={() => toggleSector(sector)}
                      className="sr-only"
                    />
                    <span className={`w-3.5 h-3.5 rounded flex-shrink-0 border flex items-center justify-center ${selectedSectors.includes(sector) ? "bg-[#22C55E] border-[#22C55E]" : "border-[#D8D5CF]"}`}>
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
                <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Other (please specify)</label>
                <input type="text" placeholder="Enter other sectors" className={inputClass} />
              </div>
            </motion.div>

            {/* ── Section 4: Office Locations ────────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-white border border-[#D8D5CF] rounded p-8 sm:p-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#f59e0b]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1C1F2E]">Office Locations</h2>
                  <p className="text-sm text-[#7A7E8F]">Select all cities where your organisation has offices</p>
                </div>
              </div>

              {/* UK Offices */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-3">
                  United Kingdom
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                  {ukCities.map((city) => (
                    <label
                      key={city}
                      className={`
                        flex items-center justify-center px-3 py-2 rounded border cursor-pointer transition-all text-xs text-center
                        ${ukOffices.includes(city)
                          ? "bg-[#2563EB]/5 border-[#2563EB]/40 text-[#2563EB] font-medium"
                          : "bg-[#EEECEA] border-[#D8D5CF] text-[#3D4152] hover:border-[#1C1F2E]/20"
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
                    className={`${inputClass} sm:w-64 text-sm`}
                  />
                </div>
              </div>

              {/* Pakistan Offices */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-[#22C55E] uppercase tracking-wider mb-3">
                  Pakistan
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
                  {pakistanCities.map((city) => (
                    <label
                      key={city}
                      className={`
                        flex items-center justify-center px-3 py-2 rounded border cursor-pointer transition-all text-xs text-center
                        ${pakOffices.includes(city)
                          ? "bg-[#22C55E]/5 border-[#22C55E]/40 text-[#22C55E] font-medium"
                          : "bg-[#EEECEA] border-[#D8D5CF] text-[#3D4152] hover:border-[#1C1F2E]/20"
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
                    className={`${inputClass} sm:w-64 text-sm`}
                  />
                </div>
              </div>

              {/* Employee counts */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">
                    Employees in the UK
                  </label>
                  <input type="number" min="0" placeholder="0" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">
                    Employees in Pakistan
                  </label>
                  <input type="number" min="0" placeholder="0" className={inputClass} />
                </div>
              </div>
            </motion.div>

            {/* ── Section 5: Organisation Profile ────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-white border border-[#D8D5CF] rounded p-8 sm:p-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1C1F2E]">Organisation Profile</h2>
                  <p className="text-sm text-[#7A7E8F]">This profile will be used for the UPTECH membership directory (max 100 words)</p>
                </div>
              </div>

              <textarea
                rows={5}
                maxLength={800}
                placeholder="Provide a brief description of your organisation, its mission, and key activities..."
                className={`${inputClass} resize-none`}
              />
              <p className="text-xs text-[#7A7E8F] mt-2">
                UPTECH reserves the right to edit profiles that exceed 100 words.
                Please send your high-resolution logo to{" "}
                <a href="mailto:info@uptechcouncil.org" className="text-[#2563EB] hover:underline">
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
              className="bg-white border border-[#D8D5CF] rounded p-8 sm:p-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[#C41E3A]/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-[#C41E3A]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1C1F2E]">CEO / Principal Representative</h2>
                  <p className="text-sm text-[#7A7E8F]">Primary decision-maker for the organisation</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">
                    First Name <span className="text-[#C41E3A]">*</span>
                  </label>
                  <input type="text" required placeholder="First name" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">
                    Last Name <span className="text-[#C41E3A]">*</span>
                  </label>
                  <input type="text" required placeholder="Last name" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">
                    Job Title <span className="text-[#C41E3A]">*</span>
                  </label>
                  <input type="text" required placeholder="e.g. CEO, Managing Director" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Nationality</label>
                  <input type="text" placeholder="e.g. British, Pakistani" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">
                    Email Address <span className="text-[#C41E3A]">*</span>
                  </label>
                  <input type="email" required placeholder="name@company.com" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">
                    Phone Number <span className="text-[#C41E3A]">*</span>
                  </label>
                  <input type="tel" required placeholder="+44 7XXX XXXXXX" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Mobile Number</label>
                  <input type="tel" placeholder="+44 7XXX XXXXXX" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">LinkedIn Profile</label>
                  <input type="url" placeholder="https://linkedin.com/in/..." className={inputClass} />
                </div>
              </div>
            </motion.div>

            {/* ── Section 7: Primary Contact ──────────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-white border border-[#D8D5CF] rounded p-8 sm:p-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1C1F2E]">Primary Contact Person</h2>
                  <p className="text-sm text-[#7A7E8F]">Main point of contact for UPTECH correspondence (if different from CEO)</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">First Name</label>
                  <input type="text" placeholder="First name" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Last Name</label>
                  <input type="text" placeholder="Last name" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Job Title</label>
                  <input type="text" placeholder="e.g. Head of Operations" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Nationality</label>
                  <input type="text" placeholder="e.g. British, Pakistani" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Email Address</label>
                  <input type="email" placeholder="name@company.com" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Phone Number</label>
                  <input type="tel" placeholder="+44 7XXX XXXXXX" className={inputClass} />
                </div>
              </div>
            </motion.div>

            {/* ── Section 8: Secondary Contact ───────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-white border border-[#D8D5CF] rounded p-8 sm:p-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#8b5cf6]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1C1F2E]">Secondary Contact (Optional)</h2>
                  <p className="text-sm text-[#7A7E8F]">Additional point of contact for your organisation</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">First Name</label>
                  <input type="text" placeholder="First name" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Last Name</label>
                  <input type="text" placeholder="Last name" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Job Title</label>
                  <input type="text" placeholder="e.g. CFO, Director" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Email Address</label>
                  <input type="email" placeholder="name@company.com" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Phone Number</label>
                  <input type="tel" placeholder="+44 7XXX XXXXXX" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Mobile Number</label>
                  <input type="tel" placeholder="+44 7XXX XXXXXX" className={inputClass} />
                </div>
              </div>
            </motion.div>

            {/* ── Section 9: Pakistan Contact (Where applicable) ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-white border border-[#D8D5CF] rounded p-8 sm:p-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[#22C55E]/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-[#22C55E]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1C1F2E]">Main Contact in Pakistan (Optional)</h2>
                  <p className="text-sm text-[#7A7E8F]">If your organisation has operations in Pakistan</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">First Name</label>
                  <input type="text" placeholder="First name" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Last Name</label>
                  <input type="text" placeholder="Last name" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Job Title</label>
                  <input type="text" placeholder="e.g. Country Manager" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Email Address</label>
                  <input type="email" placeholder="name@company.com" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Phone Number</label>
                  <input type="tel" placeholder="+92 XXX XXXXXXX" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Pakistan Office Address</label>
                  <input type="text" placeholder="Full address" className={inputClass} />
                </div>
              </div>
            </motion.div>

            {/* ── Section 10: Referral ──────────────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-white border border-[#D8D5CF] rounded p-8 sm:p-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[#C41E3A]/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#C41E3A]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#1C1F2E]">Referred By (Optional)</h2>
                  <p className="text-sm text-[#7A7E8F]">If you were referred by an existing UPTECH member</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Referrer&apos;s Name</label>
                  <input type="text" placeholder="Full name" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Organisation</label>
                  <input type="text" placeholder="Organisation name" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Email Address</label>
                  <input type="email" placeholder="referrer@company.com" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1F2E] mb-2">Phone Number</label>
                  <input type="tel" placeholder="+44 XXXX XXXXXX" className={inputClass} />
                </div>
              </div>
            </motion.div>

            {/* ── Terms & Submit ──────────────────────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-[#1C1F2E] rounded p-8 sm:p-10 text-white"
            >
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Submit Your Application</h2>
                <p className="text-white/60 mb-8 text-sm leading-relaxed">
                  By submitting this form, you confirm that the information provided is accurate and agree
                  to UPTECH&apos;s{" "}
                  <Link href="/terms" className="text-[#2563EB] hover:underline">Terms &amp; Conditions</Link>,{" "}
                  <Link href="/privacy" className="text-[#2563EB] hover:underline">Privacy Policy</Link>, and{" "}
                  <Link href="/code-of-conduct" className="text-[#2563EB] hover:underline">Code of Conduct</Link>.
                  Membership is non-transferable. Payment details will be provided upon application approval.
                </p>

                <label className="flex items-start gap-3 text-left mb-8 max-w-lg mx-auto">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 accent-[#2563EB]"
                  />
                  <span className="text-sm text-white/80">
                    I confirm the above information is accurate and I agree to UPTECH&apos;s Terms &amp; Conditions,
                    Privacy Policy, and Code of Conduct. <span className="text-[#C41E3A]">*</span>
                  </span>
                </label>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-10 py-4 bg-[#2563EB] text-white font-bold rounded hover:bg-[#1d4ed8] transition-all shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  Submit Application
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-white/40 mt-6">
                  Our membership team will review your application and respond within 5 business days.
                  For enquiries, contact{" "}
                  <a href="mailto:membership@uptechcouncil.org" className="text-[#2563EB] hover:underline">
                    membership@uptechcouncil.org
                  </a>
                </p>
              </div>
            </motion.div>

          </form>
        </Section>
      )}
    </>
  );
}
