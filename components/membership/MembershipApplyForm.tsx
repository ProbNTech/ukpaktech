"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";

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

/* ─── City lists per country ─── */
const ukCities = [
  "London", "Manchester", "Birmingham", "Leeds", "Edinburgh",
  "Glasgow", "Bristol", "Cambridge", "Oxford", "Belfast",
  "Cardiff", "Nottingham", "Sheffield", "Liverpool",
];

const pakistanCities = [
  "Islamabad", "Lahore", "Karachi", "Rawalpindi", "Peshawar",
  "Faisalabad", "Multan", "Sialkot", "Quetta", "Hyderabad",
];

function citiesFor(country: string): string[] {
  if (country === "uk") return ukCities;
  if (country === "pakistan") return pakistanCities;
  return [];
}

/* ─── Shared styles ─── */
const baseInputClass = "w-full px-4 py-3.5 rounded-xl bg-[#F8F8F7] border text-[#1C1F2E] text-[15px] placeholder:text-[#9A9EAF] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#2563EB]/10 hover:border-[#B0B3BE] transition-all duration-300";
const baseSelectClass = "w-full px-4 py-3.5 rounded-xl bg-[#F8F8F7] border text-[#1C1F2E] text-[15px] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#2563EB]/10 hover:border-[#B0B3BE] transition-all duration-300 appearance-none cursor-pointer";

/* ─── Form data type ─── */
interface FormData {
  orgName: string;
  registrationNo: string;
  whatsapp: string;
  address: string;
  country: string;
  city: string;
  cityOther: string;
  orgPhone: string;
  website: string;
  employees: string;
  coreProducts: string;
  otherSector: string;
  orgProfile: string;
  personName: string;
  personJobTitle: string;
  personEmail: string;
  personNationality: string;
  termsAccepted: boolean;
  membershipTermsAccepted: boolean;
  arbitrationAccepted: boolean;
}

const initialFormData: FormData = {
  orgName: "",
  registrationNo: "",
  whatsapp: "",
  address: "",
  country: "",
  city: "",
  cityOther: "",
  orgPhone: "",
  website: "",
  employees: "",
  coreProducts: "",
  otherSector: "",
  orgProfile: "",
  personName: "",
  personJobTitle: "",
  personEmail: "",
  personNationality: "",
  termsAccepted: false,
  membershipTermsAccepted: false,
  arbitrationAccepted: false,
};

export default function MembershipApplyForm() {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [shake, setShake] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => {
      const next = { ...prev, [field]: value };
      if (field === "country") {
        next.city = "";
        next.cityOther = "";
      }
      return next;
    });
    if (errors[field as string]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as string];
        return next;
      });
    }
  };

  const toggleSector = (sector: string) => {
    setSelectedSectors((prev) =>
      prev.includes(sector) ? prev.filter((s) => s !== sector) : [...prev, sector]
    );
    if (errors.sectors) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.sectors;
        return next;
      });
    }
  };

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone: string) => /^[+]?[\d\s()-]{7,}$/.test(phone);

  const validateAll = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.orgName.trim()) newErrors.orgName = "Organisation name is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.country) newErrors.country = "Please select a country";
    if (formData.country === "other") {
      if (!formData.cityOther.trim()) newErrors.cityOther = "Please enter your city";
    } else if (formData.country) {
      if (!formData.city) newErrors.city = "Please select a city";
      if (formData.city === "other" && !formData.cityOther.trim()) {
        newErrors.cityOther = "Please enter your city";
      }
    }
    if (!formData.orgPhone.trim()) newErrors.orgPhone = "Phone number is required";
    else if (!isValidPhone(formData.orgPhone)) newErrors.orgPhone = "Please enter a valid phone number";
    if (!formData.coreProducts.trim()) newErrors.coreProducts = "Please describe your core products/services";
    if (formData.website && !/^https?:\/\/.+/.test(formData.website)) {
      newErrors.website = "Please enter a valid URL (starting with http:// or https://)";
    }

    if (selectedSectors.length === 0 && !formData.otherSector.trim()) {
      newErrors.sectors = "Please select at least one sector or specify other";
    }

    if (formData.personEmail && !isValidEmail(formData.personEmail)) {
      newErrors.personEmail = "Please enter a valid email address";
    }

    if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept the terms and conditions";
    if (!formData.membershipTermsAccepted) newErrors.membershipTermsAccepted = "You must accept the membership terms";
    if (!formData.arbitrationAccepted) newErrors.arbitrationAccepted = "You must accept the arbitration framework";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const scrollToFirstError = () => {
    const firstKey = Object.keys(errors)[0];
    if (firstKey) {
      const el = document.querySelector(`[data-field="${firstKey}"]`);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top: y, behavior: "smooth" });
        return;
      }
    }
    if (formRef.current) {
      const y = formRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) {
      setShake(true);
      setTimeout(() => setShake(false), 600);
      setTimeout(scrollToFirstError, 50);
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      const payload = {
        ...formData,
        selectedSectors,
      };
      const res = await fetch("/api/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }
      setFormSubmitted(true);
      if (formRef.current) {
        const y = formRef.current.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (field: string) =>
    `${baseInputClass} ${errors[field] ? "border-[#C41E3A] bg-[#C41E3A]/[0.02] focus:border-[#C41E3A]/60 focus:ring-2 focus:ring-[#C41E3A]/10" : "border-[#D8D5CF] focus:border-[#2563EB]/40"}`;

  const selectClassFn = (field: string) =>
    `${baseSelectClass} ${errors[field] ? "border-[#C41E3A] bg-[#C41E3A]/[0.02] focus:border-[#C41E3A]/60 focus:ring-2 focus:ring-[#C41E3A]/10" : "border-[#D8D5CF] focus:border-[#2563EB]/40"}`;

  const FieldError = ({ field }: { field: string }) => {
    if (!errors[field]) return null;
    return (
      <motion.p
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-1.5 mt-2 text-[13px] font-medium text-[#C41E3A]"
      >
        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
        {errors[field]}
      </motion.p>
    );
  };

  const errorCount = Object.keys(errors).length;
  const ErrorBanner = () => {
    if (errorCount === 0) return null;
    return (
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="flex items-start gap-3 p-4 rounded-xl bg-[#C41E3A]/[0.05] border border-[#C41E3A]/20"
        role="alert"
      >
        <div className="w-8 h-8 rounded-lg bg-[#C41E3A]/10 flex items-center justify-center flex-shrink-0">
          <AlertCircle className="w-4 h-4 text-[#C41E3A]" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-[#C41E3A]">
            {errorCount === 1
              ? "Please complete the required field highlighted below."
              : `Please complete the ${errorCount} required fields highlighted below.`}
          </p>
        </div>
      </motion.div>
    );
  };

  const sectionAnim = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
      };

  const cityOptions = citiesFor(formData.country);

  return (
    <section id="apply" className="scroll-mt-24">
      {formSubmitted ? (
        <Section variant="light">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-white border border-[#D8D5CF] rounded-2xl p-10 sm:p-14 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
                className="relative w-20 h-20 mx-auto mb-6"
              >
                <div className="absolute inset-0 rounded-full bg-[#22C55E]/10 animate-ping opacity-20" />
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center shadow-[0_8px_32px_rgba(34,197,94,0.3)]">
                  <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
              </motion.div>
              <h2 className="font-heading font-extrabold text-2xl text-[#1C1F2E] mb-3">
                Application Submitted Successfully
              </h2>
              <p className="text-[#5A5F72] text-base leading-relaxed mb-8">
                Thank you for your interest in joining UPTECH. Our membership team will review your
                application and contact you within 5 business days regarding next steps and payment information.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-bold rounded-xl hover:bg-[#2563EB]/90 transition-all"
              >
                Return to homepage
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </Section>
      ) : (
        <Section variant="light">
          <AnimatedSection>
            <SectionHeader
              label="Membership Application"
              title="Apply for Membership"
              subtitle="Tell us about your organisation. UPTECH will review your application and respond within 5 business days."
              color="blue"
            />
          </AnimatedSection>
          <div ref={formRef}>
            <form onSubmit={handleSubmit} noValidate className="w-full">
              <div className="bg-white border border-[#D8D5CF] rounded-2xl p-8 sm:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)] space-y-10">

                <ErrorBanner />

                {/* SECTION 1 — Organisation */}
                <motion.section {...sectionAnim}>
                  <div className="space-y-5">
                    <div data-field="orgName">
                      <label className="block text-sm font-medium text-[#3D4152] mb-2">
                        Organisation Name <span className="text-[#C41E3A]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.orgName}
                        onChange={(e) => updateField("orgName", e.target.value)}
                        placeholder="Enter your organisation name"
                        className={inputClass("orgName")}
                      />
                      <FieldError field="orgName" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#3D4152] mb-2">Number of Employees</label>
                        <div className="relative">
                          <select
                            value={formData.employees}
                            onChange={(e) => updateField("employees", e.target.value)}
                            className={selectClassFn("employees")}
                          >
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

                      <div>
                        <label className="block text-sm font-medium text-[#3D4152] mb-2">
                          Registration No.
                        </label>
                        <input
                          type="text"
                          value={formData.registrationNo}
                          onChange={(e) => updateField("registrationNo", e.target.value)}
                          placeholder="Company reg. number"
                          className={inputClass("registrationNo")}
                        />
                      </div>

                      <div data-field="country">
                        <label className="block text-sm font-medium text-[#3D4152] mb-2">
                          Country <span className="text-[#C41E3A]">*</span>
                        </label>
                        <div className="relative">
                          <select
                            value={formData.country}
                            onChange={(e) => updateField("country", e.target.value)}
                            className={selectClassFn("country")}
                          >
                            <option value="">Select country</option>
                            <option value="uk">United Kingdom</option>
                            <option value="pakistan">Pakistan</option>
                            <option value="other">Other</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A7E8F] pointer-events-none" />
                        </div>
                        <FieldError field="country" />
                      </div>

                      <div data-field="city">
                        <label className="block text-sm font-medium text-[#3D4152] mb-2">
                          City <span className="text-[#C41E3A]">*</span>
                        </label>
                        {formData.country === "other" ? (
                          <input
                            type="text"
                            value={formData.cityOther}
                            onChange={(e) => updateField("cityOther", e.target.value)}
                            placeholder="Enter your city"
                            className={inputClass("cityOther")}
                          />
                        ) : (
                          <div className="relative">
                            <select
                              value={formData.city}
                              onChange={(e) => updateField("city", e.target.value)}
                              disabled={!formData.country}
                              className={`${selectClassFn("city")} ${!formData.country ? "opacity-60 cursor-not-allowed" : ""}`}
                            >
                              <option value="">
                                {formData.country ? "Select city" : "Select a country first"}
                              </option>
                              {cityOptions.map((city) => (
                                <option key={city} value={city}>{city}</option>
                              ))}
                              {formData.country && <option value="other">Other</option>}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A7E8F] pointer-events-none" />
                          </div>
                        )}
                        {formData.country && formData.country !== "other" && formData.city === "other" && (
                          <input
                            type="text"
                            value={formData.cityOther}
                            onChange={(e) => updateField("cityOther", e.target.value)}
                            placeholder="Enter your city"
                            className={`${inputClass("cityOther")} mt-2`}
                          />
                        )}
                        <FieldError field="city" />
                        <FieldError field="cityOther" />
                      </div>
                    </div>

                    <div data-field="address">
                      <label className="block text-sm font-medium text-[#3D4152] mb-2">
                        Registered Business Address <span className="text-[#C41E3A]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => updateField("address", e.target.value)}
                        placeholder="Street address"
                        className={inputClass("address")}
                      />
                      <FieldError field="address" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                      <div data-field="orgPhone">
                        <label className="block text-sm font-medium text-[#3D4152] mb-2">
                          Phone Number <span className="text-[#C41E3A]">*</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.orgPhone}
                          onChange={(e) => updateField("orgPhone", e.target.value)}
                          placeholder="+44 20 XXXX XXXX"
                          className={inputClass("orgPhone")}
                        />
                        <FieldError field="orgPhone" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#3D4152] mb-2">
                          WhatsApp
                        </label>
                        <input
                          type="tel"
                          value={formData.whatsapp}
                          onChange={(e) => updateField("whatsapp", e.target.value)}
                          placeholder="+92 3XX XXXXXXX"
                          className={inputClass("whatsapp")}
                        />
                      </div>

                      <div data-field="website">
                        <label className="block text-sm font-medium text-[#3D4152] mb-2">Website</label>
                        <input
                          type="url"
                          value={formData.website}
                          onChange={(e) => updateField("website", e.target.value)}
                          placeholder="https://www.example.com"
                          className={inputClass("website")}
                        />
                        <FieldError field="website" />
                      </div>
                    </div>

                    <div data-field="coreProducts">
                      <label className="block text-sm font-medium text-[#3D4152] mb-2">
                        Core Products / Services <span className="text-[#C41E3A]">*</span>
                      </label>
                      <textarea
                        rows={3}
                        value={formData.coreProducts}
                        onChange={(e) => updateField("coreProducts", e.target.value)}
                        placeholder="Describe your core products and services"
                        className={`${inputClass("coreProducts")} resize-none`}
                      />
                      <FieldError field="coreProducts" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#3D4152] mb-2">
                        Organisation profile <span className="text-[#7A7E8F] font-normal">— used for the member directory, max 100 words</span>
                      </label>
                      <textarea
                        rows={4}
                        maxLength={800}
                        value={formData.orgProfile}
                        onChange={(e) => updateField("orgProfile", e.target.value)}
                        placeholder="Provide a brief description of your organisation, its mission, and key activities..."
                        className={`${inputClass("orgProfile")} resize-none`}
                      />
                      <p className="text-sm text-[#7A7E8F] mt-3">
                        UPTECH reserves the right to edit profiles that exceed 100 words.
                        Please send your high-resolution logo to{" "}
                        <a href="mailto:info@ukpaktech.org.uk" className="text-[#2563EB] hover:underline">
                          info@ukpaktech.org.uk
                        </a>{" "}
                        if you would like to be listed on the member directory.
                      </p>
                    </div>
                  </div>
                </motion.section>

                {/* SECTION 2 — Industry Sectors */}
                <motion.section {...sectionAnim}>
                  <p className="block text-sm font-medium text-[#3D4152] mb-3">
                    Industry sectors <span className="text-[#7A7E8F] font-normal">— select all that apply</span>
                  </p>
                  <div data-field="sectors" className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 ${errors.sectors ? "ring-1 ring-[#C41E3A]/30 rounded-xl p-1" : ""}`}>
                    {sectors.map((sector) => (
                      <label
                        key={sector}
                        className={`
                          flex items-center gap-2 px-3 py-2.5 rounded-lg border cursor-pointer transition-all text-sm
                          ${selectedSectors.includes(sector)
                            ? "bg-[#22C55E]/10 border-[#22C55E]/30 text-[#22C55E]"
                            : "bg-[#F5F4F2] border-[#D8D5CF] text-[#5A5F72] hover:border-[#3D4152] hover:text-[#3D4152]"
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
                  <FieldError field="sectors" />
                  <div className="mt-4 max-w-xl">
                    <label className="block text-sm font-medium text-[#3D4152] mb-2">Other (please specify)</label>
                    <input
                      type="text"
                      value={formData.otherSector}
                      onChange={(e) => updateField("otherSector", e.target.value)}
                      placeholder="Enter other sectors"
                      className={inputClass("otherSector")}
                    />
                  </div>
                </motion.section>

                {/* SECTION 3 — Your Information */}
                <motion.section {...sectionAnim}>
                  <p className="block text-sm font-medium text-[#3D4152] mb-3">
                    Your details <span className="text-[#7A7E8F] font-normal">— all optional</span>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#3D4152] mb-2">Name</label>
                      <input
                        type="text"
                        value={formData.personName}
                        onChange={(e) => updateField("personName", e.target.value)}
                        placeholder="Your full name"
                        className={inputClass("personName")}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#3D4152] mb-2">Job Title</label>
                      <input
                        type="text"
                        value={formData.personJobTitle}
                        onChange={(e) => updateField("personJobTitle", e.target.value)}
                        placeholder="e.g. CEO, Managing Director"
                        className={inputClass("personJobTitle")}
                      />
                    </div>
                    <div data-field="personEmail">
                      <label className="block text-sm font-medium text-[#3D4152] mb-2">Email</label>
                      <input
                        type="email"
                        value={formData.personEmail}
                        onChange={(e) => updateField("personEmail", e.target.value)}
                        placeholder="name@company.com"
                        className={inputClass("personEmail")}
                      />
                      <FieldError field="personEmail" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#3D4152] mb-2">Nationality</label>
                      <input
                        type="text"
                        value={formData.personNationality}
                        onChange={(e) => updateField("personNationality", e.target.value)}
                        placeholder="e.g. British, Pakistani"
                        className={inputClass("personNationality")}
                      />
                    </div>
                  </div>
                </motion.section>

                {/* SECTION 4 — Terms & Submit */}
                <motion.section {...sectionAnim}>
                  <div className="bg-gradient-to-br from-[#2563EB]/5 via-[#22C55E]/5 to-[#C41E3A]/5 rounded-xl p-8 text-center">
                    <p className="text-[#5A5F72] mb-6 text-base leading-relaxed max-w-xl mx-auto">
                      Membership is non-transferable. Payment details will be provided upon application approval.
                    </p>

                    <div className="flex flex-col gap-4 max-w-lg mx-auto text-left mb-8">
                      <label
                        data-field="termsAccepted"
                        className={`flex items-start gap-3 cursor-pointer ${errors.termsAccepted ? "ring-1 ring-[#C41E3A]/30 rounded-lg p-3" : ""}`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.termsAccepted}
                          onChange={(e) => updateField("termsAccepted", e.target.checked)}
                          className="mt-1 accent-[#2563EB] w-4 h-4"
                        />
                        <span className="text-sm text-[#3D4152] leading-relaxed">
                          I confirm the above information is accurate and I agree to UPTECH&apos;s{" "}
                          <Link href="/terms" className="text-[#2563EB] hover:underline">Terms &amp; Conditions</Link>,{" "}
                          <Link href="/privacy" className="text-[#2563EB] hover:underline">Privacy Policy</Link>, and{" "}
                          <Link href="/code-of-conduct" className="text-[#2563EB] hover:underline">Code of Conduct</Link>.
                          <span className="text-[#C41E3A]"> *</span>
                        </span>
                      </label>
                      {errors.termsAccepted && (
                        <p className="flex items-center gap-1.5 text-sm text-[#C41E3A] -mt-2 ml-7">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          {errors.termsAccepted}
                        </p>
                      )}

                      <label
                        data-field="membershipTermsAccepted"
                        className={`flex items-start gap-3 cursor-pointer ${errors.membershipTermsAccepted ? "ring-1 ring-[#C41E3A]/30 rounded-lg p-3" : ""}`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.membershipTermsAccepted}
                          onChange={(e) => updateField("membershipTermsAccepted", e.target.checked)}
                          className="mt-1 accent-[#2563EB] w-4 h-4"
                        />
                        <span className="text-sm text-[#3D4152] leading-relaxed">
                          I accept the{" "}
                          <a href="/membership/terms" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline">
                            Membership Terms &amp; Conditions
                          </a>, including fee structure, non-transferability, and disciplinary procedure.
                          <span className="text-[#C41E3A]"> *</span>
                        </span>
                      </label>
                      {errors.membershipTermsAccepted && (
                        <p className="flex items-center gap-1.5 text-sm text-[#C41E3A] -mt-2 ml-7">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          {errors.membershipTermsAccepted}
                        </p>
                      )}

                      <label
                        data-field="arbitrationAccepted"
                        className={`flex items-start gap-3 cursor-pointer ${errors.arbitrationAccepted ? "ring-1 ring-[#C41E3A]/30 rounded-lg p-3" : ""}`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.arbitrationAccepted}
                          onChange={(e) => updateField("arbitrationAccepted", e.target.checked)}
                          className="mt-1 accent-[#2563EB] w-4 h-4"
                        />
                        <span className="text-sm text-[#3D4152] leading-relaxed">
                          I acknowledge and accept the{" "}
                          <a href="/arbitration/framework" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline">
                            Arbitration &amp; Dispute Resolution Framework
                          </a>{" "}governed under the Arbitration Act 1996 (UK).
                          <span className="text-[#C41E3A]"> *</span>
                        </span>
                      </label>
                      {errors.arbitrationAccepted && (
                        <p className="flex items-center gap-1.5 text-sm text-[#C41E3A] -mt-2 ml-7">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          {errors.arbitrationAccepted}
                        </p>
                      )}
                    </div>

                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 p-4 mb-6 rounded-xl bg-[#C41E3A]/[0.04] border border-[#C41E3A]/15 max-w-xl mx-auto"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#C41E3A]/10 flex items-center justify-center flex-shrink-0">
                          <AlertCircle className="w-4 h-4 text-[#C41E3A]" />
                        </div>
                        <p className="text-sm font-medium text-[#C41E3A]">{submitError}</p>
                      </motion.div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={submitting || !formData.termsAccepted || !formData.membershipTermsAccepted || !formData.arbitrationAccepted}
                      animate={shake ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : {}}
                      transition={{ duration: 0.5 }}
                      className={`group relative inline-flex items-center gap-3 px-10 py-4 font-bold text-[15px] rounded-xl transition-all duration-300 overflow-hidden ${submitting || !formData.termsAccepted || !formData.membershipTermsAccepted || !formData.arbitrationAccepted ? "bg-[#D1D5DB] text-[#9CA3AF] cursor-not-allowed shadow-none" : "bg-gradient-to-r from-[#2563EB] to-[#22C55E] text-white hover:shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(37,99,235,0.2)]"}`}
                    >
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      {submitting ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Application
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </motion.button>

                    <p className="text-sm text-[#7A7E8F] mt-6">
                      Our membership team will review your application and respond within 5 business days.
                      For enquiries, contact{" "}
                      <a href="mailto:membership@ukpaktech.org.uk" className="text-[#2563EB] hover:underline">
                        membership@ukpaktech.org.uk
                      </a>
                    </p>
                  </div>
                </motion.section>

              </div>
            </form>
          </div>
        </Section>
      )}
    </section>
  );
}
