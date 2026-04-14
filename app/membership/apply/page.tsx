"use client";

import { useState, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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
  ArrowLeft,
  Star,
  SkipForward,
  AlertCircle,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

/* ─── Step definitions ─── */
const steps = [
  { label: "Membership Type", icon: Star, color: "#2563EB" },
  { label: "Organisation", icon: Building2, color: "#2563EB" },
  { label: "Industry", icon: Briefcase, color: "#22C55E" },
  { label: "Locations", icon: MapPin, color: "#C41E3A" },
  { label: "Profile", icon: FileText, color: "#2563EB" },
  { label: "CEO Contact", icon: User, color: "#C41E3A" },
  { label: "Primary Contact", icon: Mail, color: "#2563EB" },
  { label: "Secondary Contact", icon: Users, color: "#2563EB" },
  { label: "Pakistan Contact", icon: Globe, color: "#22C55E" },
  { label: "Review & Submit", icon: Send, color: "#C41E3A" },
];

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

/* ─── Shared styles ─── */
const baseInputClass = "w-full px-4 py-3.5 rounded-xl bg-[#F8F8F7] border text-[#1C1F2E] text-[15px] placeholder:text-[#9A9EAF] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#2563EB]/10 hover:border-[#B0B3BE] transition-all duration-300";
const baseSelectClass = "w-full px-4 py-3.5 rounded-xl bg-[#F8F8F7] border text-[#1C1F2E] text-[15px] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#2563EB]/10 hover:border-[#B0B3BE] transition-all duration-300 appearance-none cursor-pointer";

/* ─── Form data type ─── */
interface FormData {
  membershipType: string;
  orgName: string;
  registrationNo: string;
  tradeOrgName: string;
  tradeOrgMemberNo: string;
  cnic: string;
  whatsapp: string;
  address: string;
  postcode: string;
  country: string;
  orgPhone: string;
  website: string;
  revenue: string;
  employees: string;
  coreProducts: string;
  otherSector: string;
  otherUkCity: string;
  otherPakCity: string;
  ukEmployees: string;
  pakEmployees: string;
  orgProfile: string;
  ceoFirstName: string;
  ceoLastName: string;
  ceoJobTitle: string;
  ceoNationality: string;
  ceoEmail: string;
  ceoPhone: string;
  ceoMobile: string;
  ceoLinkedin: string;
  primaryFirstName: string;
  primaryLastName: string;
  primaryJobTitle: string;
  primaryNationality: string;
  primaryEmail: string;
  primaryPhone: string;
  secondaryFirstName: string;
  secondaryLastName: string;
  secondaryJobTitle: string;
  secondaryEmail: string;
  secondaryPhone: string;
  secondaryMobile: string;
  pakFirstName: string;
  pakLastName: string;
  pakJobTitle: string;
  pakEmail: string;
  pakPhone: string;
  pakAddress: string;
  referrerName: string;
  referrerOrg: string;
  referrerEmail: string;
  referrerPhone: string;
  termsAccepted: boolean;
  membershipTermsAccepted: boolean;
  arbitrationAccepted: boolean;
}

const initialFormData: FormData = {
  membershipType: "",
  orgName: "",
  registrationNo: "",
  tradeOrgName: "",
  tradeOrgMemberNo: "",
  cnic: "",
  whatsapp: "",
  address: "",
  postcode: "",
  country: "",
  orgPhone: "",
  website: "",
  revenue: "",
  employees: "",
  coreProducts: "",
  otherSector: "",
  otherUkCity: "",
  otherPakCity: "",
  ukEmployees: "",
  pakEmployees: "",
  orgProfile: "",
  ceoFirstName: "",
  ceoLastName: "",
  ceoJobTitle: "",
  ceoNationality: "",
  ceoEmail: "",
  ceoPhone: "",
  ceoMobile: "",
  ceoLinkedin: "",
  primaryFirstName: "",
  primaryLastName: "",
  primaryJobTitle: "",
  primaryNationality: "",
  primaryEmail: "",
  primaryPhone: "",
  secondaryFirstName: "",
  secondaryLastName: "",
  secondaryJobTitle: "",
  secondaryEmail: "",
  secondaryPhone: "",
  secondaryMobile: "",
  pakFirstName: "",
  pakLastName: "",
  pakJobTitle: "",
  pakEmail: "",
  pakPhone: "",
  pakAddress: "",
  referrerName: "",
  referrerOrg: "",
  referrerEmail: "",
  referrerPhone: "",
  termsAccepted: false,
  membershipTermsAccepted: false,
  arbitrationAccepted: false,
};

export default function MembershipApplicationForm() {
  const shouldReduceMotion = useReducedMotion();
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [ukOffices, setUkOffices] = useState<string[]>([]);
  const [pakOffices, setPakOffices] = useState<string[]>([]);
  const [mailingList, setMailingList] = useState(true);
  const [memberDirectory, setMemberDirectory] = useState(true);
  const [websiteLink, setWebsiteLink] = useState(true);
  const [publiclyListed, setPubliclyListed] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [shake, setShake] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  /* ─── Field update helper ─── */
  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
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

  /* ─── Validation helpers ─── */
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone: string) => /^[+]?[\d\s()-]{7,}$/.test(phone);

  /* ─── Per-step validation ─── */
  const validateStep = useCallback((step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 0: // Membership Type
        if (!formData.membershipType) newErrors.membershipType = "Please select a membership type";
        break;

      case 1: // Organisation Details
        if (!formData.orgName.trim()) newErrors.orgName = formData.membershipType === "individual" ? "Full name is required" : "Organisation name is required";
        if (formData.membershipType === "individual" && !formData.cnic.trim()) newErrors.cnic = "CNIC is required";
        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.postcode.trim()) newErrors.postcode = "Postcode is required";
        if (!formData.country) newErrors.country = "Please select a country";
        if (!formData.orgPhone.trim()) newErrors.orgPhone = "Phone number is required";
        else if (!isValidPhone(formData.orgPhone)) newErrors.orgPhone = "Please enter a valid phone number";
        if (!formData.coreProducts.trim()) newErrors.coreProducts = "Please describe your core products/services";
        if (formData.website && !/^https?:\/\/.+/.test(formData.website)) newErrors.website = "Please enter a valid URL (starting with http:// or https://)";
        break;

      case 2: // Industry Sectors
        if (selectedSectors.length === 0 && !formData.otherSector.trim()) newErrors.sectors = "Please select at least one sector or specify other";
        break;

      case 3: // Office Locations — no strict required fields
        break;

      case 4: // Organisation Profile — no strict required fields
        break;

      case 5: // CEO Contact
        if (!formData.ceoFirstName.trim()) newErrors.ceoFirstName = "First name is required";
        if (!formData.ceoLastName.trim()) newErrors.ceoLastName = "Last name is required";
        if (!formData.ceoJobTitle.trim()) newErrors.ceoJobTitle = "Job title is required";
        if (!formData.ceoEmail.trim()) newErrors.ceoEmail = "Email address is required";
        else if (!isValidEmail(formData.ceoEmail)) newErrors.ceoEmail = "Please enter a valid email address";
        if (!formData.ceoPhone.trim()) newErrors.ceoPhone = "Phone number is required";
        else if (!isValidPhone(formData.ceoPhone)) newErrors.ceoPhone = "Please enter a valid phone number";
        if (formData.ceoEmail && formData.ceoEmail.trim() && !isValidEmail(formData.ceoEmail)) newErrors.ceoEmail = "Please enter a valid email address";
        if (formData.ceoLinkedin && !/^https?:\/\/.+/.test(formData.ceoLinkedin)) newErrors.ceoLinkedin = "Please enter a valid LinkedIn URL";
        break;

      case 6: // Primary Contact — optional step
      case 7: // Secondary Contact — optional step
      case 8: // Pakistan Contact — optional step
        break;

      case 9: // Review & Submit
        if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept the terms and conditions";
        if (!formData.membershipTermsAccepted) newErrors.membershipTermsAccepted = "You must accept the membership terms";
        if (!formData.arbitrationAccepted) newErrors.arbitrationAccepted = "You must accept the arbitration framework";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, selectedSectors]);

  /* ─── Scroll to form area (not page top) ─── */
  const scrollToForm = () => {
    if (formRef.current) {
      const y = formRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  /* ─── Navigation ─── */
  const nextStep = () => {
    if (!validateStep(currentStep)) {
      setShake(true);
      setTimeout(() => setShake(false), 600);
      scrollToForm();
      return;
    }
    if (currentStep < steps.length - 1) {
      setDirection(1);
      setErrors({});
      setCurrentStep((s) => s + 1);
      setTimeout(scrollToForm, 50);
    }
  };

  const skipStep = () => {
    if (currentStep < steps.length - 1) {
      setDirection(1);
      setErrors({});
      setCurrentStep((s) => s + 1);
      setTimeout(scrollToForm, 50);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setErrors({});
      setCurrentStep((s) => s - 1);
      setTimeout(scrollToForm, 50);
    }
  };

  const goToStep = (step: number) => {
    if (step <= currentStep) {
      setDirection(step > currentStep ? 1 : -1);
      setErrors({});
      setCurrentStep(step);
      setTimeout(scrollToForm, 50);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(9)) {
      setShake(true);
      setTimeout(() => setShake(false), 600);
      scrollToForm();
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      const payload = {
        ...formData,
        selectedSectors,
        ukOffices,
        pakOffices,
        mailingList,
        memberDirectory,
        websiteLink,
        publiclyListed,
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
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  /* ─── Step transition variants ─── */
  const stepVariants = {
    enter: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  /* ─── Dynamic class helpers ─── */
  const inputClass = (field: string) =>
    `${baseInputClass} ${errors[field] ? "border-[#C41E3A] bg-[#C41E3A]/[0.02] focus:border-[#C41E3A]/60 focus:ring-2 focus:ring-[#C41E3A]/10" : "border-[#D8D5CF] focus:border-[#2563EB]/40"}`;

  const selectClassFn = (field: string) =>
    `${baseSelectClass} ${errors[field] ? "border-[#C41E3A] bg-[#C41E3A]/[0.02] focus:border-[#C41E3A]/60 focus:ring-2 focus:ring-[#C41E3A]/10" : "border-[#D8D5CF] focus:border-[#2563EB]/40"}`;

  /* ─── Error message component ─── */
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

  /* ─── Section header for each step ─── */
  const StepHeader = ({ stepIndex }: { stepIndex: number }) => {
    const step = steps[stepIndex];
    const Icon = step.icon;
    return (
      <div className="flex items-center gap-4 mb-8">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-sm"
          style={{
            background: `linear-gradient(135deg, ${step.color}15, ${step.color}08)`,
            borderColor: `${step.color}25`,
            boxShadow: `0 2px 8px ${step.color}12`,
          }}
        >
          <Icon className="w-6 h-6" style={{ color: step.color }} strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: step.color }}>
            Step {stepIndex + 1} of {steps.length}
          </p>
          <h2 className="font-heading font-extrabold text-2xl text-[#1C1F2E]">{step.label}</h2>
        </div>
      </div>
    );
  };

  /* ─── Validation notice banner ─── */
  const ErrorBanner = () => {
    const count = Object.keys(errors).length;
    if (count === 0) return null;
    return (
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 p-4 mb-6 rounded-xl bg-[#C41E3A]/[0.04] border border-[#C41E3A]/15"
      >
        <div className="w-8 h-8 rounded-lg bg-[#C41E3A]/10 flex items-center justify-center flex-shrink-0">
          <AlertCircle className="w-4 h-4 text-[#C41E3A]" />
        </div>
        <p className="text-sm text-[#C41E3A] font-medium">
          {count === 1
            ? "Please complete the required field highlighted below."
            : `Please complete the ${count} required fields highlighted below.`}
        </p>
      </motion.div>
    );
  };

  /* ─── Navigation buttons ─── */
  const StepNav = ({ showSkip = false }: { showSkip?: boolean }) => (
    <div className="flex items-center justify-between mt-10 pt-8 border-t border-[#E8E6E3]">
      <button
        type="button"
        onClick={prevStep}
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[15px] transition-all duration-300 ${
          currentStep === 0
            ? "text-[#B0B3BE] cursor-not-allowed"
            : "text-[#3D4152] hover:bg-[#F0EFED] border border-[#D8D5CF] hover:border-[#B0B3BE] hover:-translate-y-0.5"
        }`}
        disabled={currentStep === 0}
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>
      <div className="flex items-center gap-3">
        {showSkip && (
          <button
            type="button"
            onClick={skipStep}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-[15px] text-[#7A7E8F] hover:text-[#3D4152] hover:bg-[#F0EFED] transition-all duration-300"
          >
            Skip
            <SkipForward className="w-4 h-4" />
          </button>
        )}
        {currentStep < steps.length - 1 && (
          <motion.button
            type="button"
            onClick={nextStep}
            animate={shake ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : {}}
            transition={{ duration: 0.5 }}
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-[15px] text-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${steps[currentStep].color}, ${steps[currentStep].color}dd)`,
            }}
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            Continue
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        )}
      </div>
    </div>
  );

  return (
    <div>
      {/* ── Hero ── */}
      <PageHero
        align="center"
        label="Membership Application"
        title="Join the UK-Pakistan Tech Council"
        subtitle="Complete the application form below. UPTECH reserves the right to review and approve all membership applications. Membership is valid for one year from the date of payment."
        image="/image/banners/banner16.jpg"
      />

      {/* ── Success Message ── */}
      {formSubmitted && (
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
                href="/membership"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-bold rounded-xl hover:bg-[#2563EB]/90 transition-all"
              >
                Back to Membership Overview
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </Section>
      )}

      {/* ── Multi-step Form ── */}
      {!formSubmitted && (
        <Section variant="light">
          <div ref={formRef}>
          {/* ── Step Progress ── */}
          <div className="mb-8">
            {/* Desktop: full step bar */}
            <div className="hidden lg:flex items-center justify-between mb-0">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isActive = i === currentStep;
                const isCompleted = i < currentStep;
                const isFuture = i > currentStep;
                return (
                  <div key={step.label} className="flex items-center flex-1 last:flex-none">
                    <button
                      type="button"
                      onClick={() => goToStep(i)}
                      className={`flex flex-col items-center gap-2 relative ${
                        isFuture ? "cursor-not-allowed" : "cursor-pointer group"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                          isActive
                            ? "shadow-lg scale-105"
                            : isCompleted
                            ? "scale-100"
                            : "scale-95"
                        }`}
                        style={{
                          backgroundColor: isActive
                            ? step.color
                            : isCompleted
                            ? `${step.color}15`
                            : "#F5F4F2",
                          borderColor: isActive
                            ? step.color
                            : isCompleted
                            ? step.color
                            : "#D8D5CF",
                          boxShadow: isActive ? `0 4px 16px ${step.color}35` : "none",
                        }}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-6 h-6" style={{ color: step.color }} strokeWidth={2} />
                        ) : (
                          <Icon
                            className="w-6 h-6"
                            style={{ color: isActive ? "white" : isFuture ? "#B0B3BE" : "#5A5F72" }}
                            strokeWidth={isActive ? 2 : 1.5}
                          />
                        )}
                      </div>
                      <span
                        className={`text-xs font-semibold transition-colors whitespace-nowrap ${
                          isActive ? "text-[#1C1F2E]" : isCompleted ? "text-[#5A5F72]" : "text-[#9A9EAF]"
                        }`}
                      >
                        {step.label}
                      </span>
                    </button>
                    {/* Connector line between steps */}
                    {i < steps.length - 1 && (
                      <div className="flex-1 h-0.5 mx-2 mt-[-22px] rounded-full overflow-hidden bg-[#E8E6E3]">
                        <motion.div
                          className="h-full rounded-full bg-[#2563EB]"
                          initial={false}
                          animate={{ width: isCompleted ? "100%" : "0%" }}
                          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile: compact progress */}
            <div className="lg:hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center border-2"
                    style={{
                      backgroundColor: steps[currentStep].color,
                      borderColor: steps[currentStep].color,
                      boxShadow: `0 4px 14px ${steps[currentStep].color}35`,
                    }}
                  >
                    {(() => { const Icon = steps[currentStep].icon; return <Icon className="w-5 h-5 text-white" strokeWidth={2} />; })()}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#7A7E8F]">
                      Step {currentStep + 1} of {steps.length}
                    </p>
                    <p className="text-sm font-bold text-[#1C1F2E]">{steps[currentStep].label}</p>
                  </div>
                </div>
                <span className="text-sm font-bold" style={{ color: steps[currentStep].color }}>
                  {Math.round(((currentStep + 1) / steps.length) * 100)}%
                </span>
              </div>
              {/* Step dots */}
              <div className="flex items-center gap-1.5">
                {steps.map((step, i) => (
                  <div
                    key={step.label}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentStep ? "flex-[2]" : "flex-1"
                    }`}
                    style={{
                      backgroundColor: i <= currentStep ? step.color : "#E8E6E3",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Form card */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="bg-white border border-[#D8D5CF] rounded-2xl p-8 sm:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)] min-h-[400px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentStep}
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: shouldReduceMotion ? 0.15 : 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                >

                  {/* ══════════════════════════════════════════════════
                      STEP 1: Membership Type
                  ══════════════════════════════════════════════════ */}
                  {currentStep === 0 && (
                    <div>
                      <StepHeader stepIndex={0} />
                      <ErrorBanner />
                      <p className="text-[#5A5F72] text-base mb-6">
                        Select the membership category that best fits your organisation.
                      </p>
                      <div className={`grid sm:grid-cols-2 gap-3 ${errors.membershipType ? "ring-2 ring-[#C41E3A]/20 rounded-2xl p-1" : ""}`}>
                        {membershipTiers.map((tier) => (
                          <label
                            key={tier.value}
                            className={`
                              relative flex items-start gap-3.5 p-5 rounded-xl border-2 cursor-pointer transition-all duration-300
                              ${formData.membershipType === tier.value
                                ? "bg-[#2563EB]/[0.04] border-[#2563EB]/40 shadow-[0_4px_16px_rgba(37,99,235,0.08)]"
                                : "bg-[#F8F8F7] border-[#E8E6E3] hover:border-[#B0B3BE] hover:bg-white"
                              }
                            `}
                          >
                            <div className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                              formData.membershipType === tier.value
                                ? "border-[#2563EB] bg-[#2563EB]"
                                : "border-[#D8D5CF]"
                            }`}>
                              {formData.membershipType === tier.value && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-2 h-2 rounded-full bg-white"
                                />
                              )}
                            </div>
                            <input
                              type="radio"
                              name="membershipType"
                              value={tier.value}
                              checked={formData.membershipType === tier.value}
                              onChange={(e) => updateField("membershipType", e.target.value)}
                              className="sr-only"
                            />
                            <div>
                              <span className="block text-[15px] font-bold text-[#1C1F2E]">{tier.label}</span>
                              <span className="block text-sm text-[#7A7E8F] mt-0.5">{tier.fee}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                      <FieldError field="membershipType" />
                      <p className="text-sm text-[#7A7E8F] mt-4">
                        Membership fees will be confirmed upon application review. All fees exclude applicable taxes.
                      </p>
                      <StepNav />
                    </div>
                  )}

                  {/* ══════════════════════════════════════════════════
                      STEP 2: Organisation Details
                  ══════════════════════════════════════════════════ */}
                  {currentStep === 1 && (
                    <div>
                      <StepHeader stepIndex={1} />
                      <ErrorBanner />
                      <p className="text-[#5A5F72] text-base mb-6">
                        {formData.membershipType === "individual"
                          ? "Provide your personal details."
                          : "Provide details about your company or institution."}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-6">
                        {formData.membershipType === "individual" ? (
                          <>
                            <div className="sm:col-span-2">
                              <label className="block text-base font-medium text-[#3D4152] mb-2">
                                Full Name <span className="text-[#C41E3A]">*</span>
                              </label>
                              <input
                                type="text"
                                value={formData.orgName}
                                onChange={(e) => updateField("orgName", e.target.value)}
                                placeholder="Enter your full name"
                                className={inputClass("orgName")}
                              />
                              <FieldError field="orgName" />
                            </div>
                            <div>
                              <label className="block text-base font-medium text-[#3D4152] mb-2">
                                CNIC <span className="text-[#C41E3A]">*</span>
                              </label>
                              <input
                                type="text"
                                value={formData.cnic}
                                onChange={(e) => updateField("cnic", e.target.value)}
                                placeholder="XXXXX-XXXXXXX-X"
                                className={inputClass("cnic")}
                              />
                              <FieldError field="cnic" />
                            </div>
                            <div>
                              <label className="block text-base font-medium text-[#3D4152] mb-2">
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
                          </>
                        ) : (
                          <>
                            <div className="sm:col-span-2">
                              <label className="block text-base font-medium text-[#3D4152] mb-2">
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
                            <div>
                              <label className="block text-base font-medium text-[#3D4152] mb-2">
                                Registration No.
                              </label>
                              <input
                                type="text"
                                value={formData.registrationNo}
                                onChange={(e) => updateField("registrationNo", e.target.value)}
                                placeholder="Company registration number"
                                className={inputClass("registrationNo")}
                              />
                            </div>
                            <div>
                              <label className="block text-base font-medium text-[#3D4152] mb-2">
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
                            <div>
                              <label className="block text-base font-medium text-[#3D4152] mb-2">
                                Trade Organisation Affiliation
                              </label>
                              <input
                                type="text"
                                value={formData.tradeOrgName}
                                onChange={(e) => updateField("tradeOrgName", e.target.value)}
                                placeholder="e.g. PASHA, P@SHA"
                                className={inputClass("tradeOrgName")}
                              />
                            </div>
                            <div>
                              <label className="block text-base font-medium text-[#3D4152] mb-2">
                                Trade Org Membership No.
                              </label>
                              <input
                                type="text"
                                value={formData.tradeOrgMemberNo}
                                onChange={(e) => updateField("tradeOrgMemberNo", e.target.value)}
                                placeholder="Membership number"
                                className={inputClass("tradeOrgMemberNo")}
                              />
                            </div>
                          </>
                        )}
                        <div className="sm:col-span-2">
                          <label className="block text-base font-medium text-[#3D4152] mb-2">
                            {formData.membershipType === "individual" ? "Residential Address" : "Registered Business Address"} <span className="text-[#C41E3A]">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.address}
                            onChange={(e) => updateField("address", e.target.value)}
                            placeholder="Street address, city, country"
                            className={inputClass("address")}
                          />
                          <FieldError field="address" />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">
                            Postcode <span className="text-[#C41E3A]">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.postcode}
                            onChange={(e) => updateField("postcode", e.target.value)}
                            placeholder="e.g. SW1A 1AA"
                            className={inputClass("postcode")}
                          />
                          <FieldError field="postcode" />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">
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
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">
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
                          <label className="block text-base font-medium text-[#3D4152] mb-2">Website</label>
                          <input
                            type="url"
                            value={formData.website}
                            onChange={(e) => updateField("website", e.target.value)}
                            placeholder="https://www.example.com"
                            className={inputClass("website")}
                          />
                          <FieldError field="website" />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">Annual Revenue (GBP)</label>
                          <div className="relative">
                            <select
                              value={formData.revenue}
                              onChange={(e) => updateField("revenue", e.target.value)}
                              className={selectClassFn("revenue")}
                            >
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
                          <label className="block text-base font-medium text-[#3D4152] mb-2">Number of Employees</label>
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
                        <div className="sm:col-span-2">
                          <label className="block text-base font-medium text-[#3D4152] mb-2">
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
                      </div>

                      {/* Public listing preferences */}
                      <div className="mt-8 pt-6 border-t border-[#D8D5CF]">
                        <p className="text-base font-medium text-[#3D4152] mb-4">Listing Preferences</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" checked={websiteLink} onChange={(e) => setWebsiteLink(e.target.checked)} className="accent-[#2563EB]" />
                            <span className="text-base text-[#5A5F72] group-hover:text-[#3D4152]">Link my website on the UPTECH website</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" checked={publiclyListed} onChange={(e) => setPubliclyListed(e.target.checked)} className="accent-[#2563EB]" />
                            <span className="text-base text-[#5A5F72] group-hover:text-[#3D4152]">Are you publicly listed?</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" checked={memberDirectory} onChange={(e) => setMemberDirectory(e.target.checked)} className="accent-[#2563EB]" />
                            <span className="text-base text-[#5A5F72] group-hover:text-[#3D4152]">List on UPTECH member directory</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" checked={mailingList} onChange={(e) => setMailingList(e.target.checked)} className="accent-[#2563EB]" />
                            <span className="text-base text-[#5A5F72] group-hover:text-[#3D4152]">Receive UPTECH updates and notices</span>
                          </label>
                        </div>
                      </div>
                      <StepNav />
                    </div>
                  )}

                  {/* ══════════════════════════════════════════════════
                      STEP 3: Industry Sectors
                  ══════════════════════════════════════════════════ */}
                  {currentStep === 2 && (
                    <div>
                      <StepHeader stepIndex={2} />
                      <ErrorBanner />
                      <p className="text-[#5A5F72] text-base mb-6">
                        Select the sectors that best represent your organisation&apos;s activities.
                      </p>
                      <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 ${errors.sectors ? "ring-1 ring-[#C41E3A]/30 rounded-xl p-1" : ""}`}>
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
                      <div className="mt-4">
                        <label className="block text-base font-medium text-[#3D4152] mb-2">Other (please specify)</label>
                        <input
                          type="text"
                          value={formData.otherSector}
                          onChange={(e) => updateField("otherSector", e.target.value)}
                          placeholder="Enter other sectors"
                          className={inputClass("otherSector")}
                        />
                      </div>
                      <StepNav />
                    </div>
                  )}

                  {/* ══════════════════════════════════════════════════
                      STEP 4: Office Locations
                  ══════════════════════════════════════════════════ */}
                  {currentStep === 3 && (
                    <div>
                      <StepHeader stepIndex={3} />
                      <p className="text-[#5A5F72] text-base mb-6">
                        Select all cities where your organisation has offices.
                      </p>

                      {/* UK Offices */}
                      <div className="mb-8">
                        <p className="text-sm font-bold text-[#2563EB] uppercase tracking-wider mb-3">United Kingdom</p>
                        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                          {ukCities.map((city) => (
                            <label
                              key={city}
                              className={`
                                flex items-center justify-center px-3 py-2 rounded-lg border cursor-pointer transition-all text-sm text-center
                                ${ukOffices.includes(city)
                                  ? "bg-[#2563EB]/10 border-[#2563EB]/30 text-[#2563EB] font-medium"
                                  : "bg-[#F5F4F2] border-[#D8D5CF] text-[#5A5F72] hover:border-[#3D4152]"
                                }
                              `}
                            >
                              <input type="checkbox" checked={ukOffices.includes(city)} onChange={() => toggleUkOffice(city)} className="sr-only" />
                              {city}
                            </label>
                          ))}
                        </div>
                        <div className="mt-3">
                          <input
                            type="text"
                            value={formData.otherUkCity}
                            onChange={(e) => updateField("otherUkCity", e.target.value)}
                            placeholder="Other UK city"
                            className={`${inputClass("otherUkCity")} sm:w-64`}
                          />
                        </div>
                      </div>

                      {/* Pakistan Offices */}
                      <div className="mb-8">
                        <p className="text-sm font-bold text-[#22C55E] uppercase tracking-wider mb-3">Pakistan</p>
                        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
                          {pakistanCities.map((city) => (
                            <label
                              key={city}
                              className={`
                                flex items-center justify-center px-3 py-2 rounded-lg border cursor-pointer transition-all text-sm text-center
                                ${pakOffices.includes(city)
                                  ? "bg-[#22C55E]/10 border-[#22C55E]/30 text-[#22C55E] font-medium"
                                  : "bg-[#F5F4F2] border-[#D8D5CF] text-[#5A5F72] hover:border-[#3D4152]"
                                }
                              `}
                            >
                              <input type="checkbox" checked={pakOffices.includes(city)} onChange={() => togglePakOffice(city)} className="sr-only" />
                              {city}
                            </label>
                          ))}
                        </div>
                        <div className="mt-3">
                          <input
                            type="text"
                            value={formData.otherPakCity}
                            onChange={(e) => updateField("otherPakCity", e.target.value)}
                            placeholder="Other Pakistan city"
                            className={`${inputClass("otherPakCity")} sm:w-64`}
                          />
                        </div>
                      </div>

                      {/* Employee counts */}
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">Employees in the UK</label>
                          <input
                            type="number"
                            min="0"
                            value={formData.ukEmployees}
                            onChange={(e) => updateField("ukEmployees", e.target.value)}
                            placeholder="0"
                            className={inputClass("ukEmployees")}
                          />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">Employees in Pakistan</label>
                          <input
                            type="number"
                            min="0"
                            value={formData.pakEmployees}
                            onChange={(e) => updateField("pakEmployees", e.target.value)}
                            placeholder="0"
                            className={inputClass("pakEmployees")}
                          />
                        </div>
                      </div>
                      <StepNav />
                    </div>
                  )}

                  {/* ══════════════════════════════════════════════════
                      STEP 5: Organisation Profile
                  ══════════════════════════════════════════════════ */}
                  {currentStep === 4 && (
                    <div>
                      <StepHeader stepIndex={4} />
                      <p className="text-[#5A5F72] text-base mb-6">
                        This profile will be used for the UPTECH membership directory (max 100 words).
                      </p>
                      <textarea
                        rows={6}
                        maxLength={800}
                        value={formData.orgProfile}
                        onChange={(e) => updateField("orgProfile", e.target.value)}
                        placeholder="Provide a brief description of your organisation, its mission, and key activities..."
                        className={`${inputClass("orgProfile")} resize-none`}
                      />
                      <p className="text-sm text-[#7A7E8F] mt-3">
                        UPTECH reserves the right to edit profiles that exceed 100 words.
                        Please send your high-resolution logo to{" "}
                        <a href="mailto:info@uptech.org.uk" className="text-[#2563EB] hover:underline">
                          info@uptech.org.uk
                        </a>{" "}
                        if you would like to be listed on the member directory.
                      </p>
                      <StepNav />
                    </div>
                  )}

                  {/* ══════════════════════════════════════════════════
                      STEP 6: CEO / Principal Contact
                  ══════════════════════════════════════════════════ */}
                  {currentStep === 5 && (
                    <div>
                      <StepHeader stepIndex={5} />
                      <ErrorBanner />
                      <p className="text-[#5A5F72] text-base mb-6">
                        Primary decision-maker for the organisation.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">
                            First Name <span className="text-[#C41E3A]">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.ceoFirstName}
                            onChange={(e) => updateField("ceoFirstName", e.target.value)}
                            placeholder="First name"
                            className={inputClass("ceoFirstName")}
                          />
                          <FieldError field="ceoFirstName" />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">
                            Last Name <span className="text-[#C41E3A]">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.ceoLastName}
                            onChange={(e) => updateField("ceoLastName", e.target.value)}
                            placeholder="Last name"
                            className={inputClass("ceoLastName")}
                          />
                          <FieldError field="ceoLastName" />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">
                            Job Title <span className="text-[#C41E3A]">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.ceoJobTitle}
                            onChange={(e) => updateField("ceoJobTitle", e.target.value)}
                            placeholder="e.g. CEO, Managing Director"
                            className={inputClass("ceoJobTitle")}
                          />
                          <FieldError field="ceoJobTitle" />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">Nationality</label>
                          <input
                            type="text"
                            value={formData.ceoNationality}
                            onChange={(e) => updateField("ceoNationality", e.target.value)}
                            placeholder="e.g. British, Pakistani"
                            className={inputClass("ceoNationality")}
                          />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">
                            Email Address <span className="text-[#C41E3A]">*</span>
                          </label>
                          <input
                            type="email"
                            value={formData.ceoEmail}
                            onChange={(e) => updateField("ceoEmail", e.target.value)}
                            placeholder="name@company.com"
                            className={inputClass("ceoEmail")}
                          />
                          <FieldError field="ceoEmail" />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">
                            Phone Number <span className="text-[#C41E3A]">*</span>
                          </label>
                          <input
                            type="tel"
                            value={formData.ceoPhone}
                            onChange={(e) => updateField("ceoPhone", e.target.value)}
                            placeholder="+44 7XXX XXXXXX"
                            className={inputClass("ceoPhone")}
                          />
                          <FieldError field="ceoPhone" />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">Mobile Number</label>
                          <input
                            type="tel"
                            value={formData.ceoMobile}
                            onChange={(e) => updateField("ceoMobile", e.target.value)}
                            placeholder="+44 7XXX XXXXXX"
                            className={inputClass("ceoMobile")}
                          />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">LinkedIn Profile</label>
                          <input
                            type="url"
                            value={formData.ceoLinkedin}
                            onChange={(e) => updateField("ceoLinkedin", e.target.value)}
                            placeholder="https://linkedin.com/in/..."
                            className={inputClass("ceoLinkedin")}
                          />
                          <FieldError field="ceoLinkedin" />
                        </div>
                      </div>
                      <StepNav />
                    </div>
                  )}

                  {/* ══════════════════════════════════════════════════
                      STEP 7: Primary Contact
                  ══════════════════════════════════════════════════ */}
                  {currentStep === 6 && (
                    <div>
                      <StepHeader stepIndex={6} />
                      <p className="text-[#5A5F72] text-base mb-6">
                        Main point of contact for UPTECH correspondence (if different from CEO).
                      </p>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">First Name</label>
                          <input
                            type="text"
                            value={formData.primaryFirstName}
                            onChange={(e) => updateField("primaryFirstName", e.target.value)}
                            placeholder="First name"
                            className={inputClass("primaryFirstName")}
                          />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">Last Name</label>
                          <input
                            type="text"
                            value={formData.primaryLastName}
                            onChange={(e) => updateField("primaryLastName", e.target.value)}
                            placeholder="Last name"
                            className={inputClass("primaryLastName")}
                          />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">Job Title</label>
                          <input
                            type="text"
                            value={formData.primaryJobTitle}
                            onChange={(e) => updateField("primaryJobTitle", e.target.value)}
                            placeholder="e.g. Head of Operations"
                            className={inputClass("primaryJobTitle")}
                          />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">Nationality</label>
                          <input
                            type="text"
                            value={formData.primaryNationality}
                            onChange={(e) => updateField("primaryNationality", e.target.value)}
                            placeholder="e.g. British, Pakistani"
                            className={inputClass("primaryNationality")}
                          />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">Email Address</label>
                          <input
                            type="email"
                            value={formData.primaryEmail}
                            onChange={(e) => updateField("primaryEmail", e.target.value)}
                            placeholder="name@company.com"
                            className={inputClass("primaryEmail")}
                          />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">Phone Number</label>
                          <input
                            type="tel"
                            value={formData.primaryPhone}
                            onChange={(e) => updateField("primaryPhone", e.target.value)}
                            placeholder="+44 7XXX XXXXXX"
                            className={inputClass("primaryPhone")}
                          />
                        </div>
                      </div>
                      <StepNav showSkip />
                    </div>
                  )}

                  {/* ══════════════════════════════════════════════════
                      STEP 8: Secondary Contact (Optional)
                  ══════════════════════════════════════════════════ */}
                  {currentStep === 7 && (
                    <div>
                      <StepHeader stepIndex={7} />
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-4">
                        Optional
                      </div>
                      <p className="text-[#5A5F72] text-base mb-6">
                        Additional point of contact for your organisation.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">First Name</label>
                          <input
                            type="text"
                            value={formData.secondaryFirstName}
                            onChange={(e) => updateField("secondaryFirstName", e.target.value)}
                            placeholder="First name"
                            className={inputClass("secondaryFirstName")}
                          />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">Last Name</label>
                          <input
                            type="text"
                            value={formData.secondaryLastName}
                            onChange={(e) => updateField("secondaryLastName", e.target.value)}
                            placeholder="Last name"
                            className={inputClass("secondaryLastName")}
                          />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">Job Title</label>
                          <input
                            type="text"
                            value={formData.secondaryJobTitle}
                            onChange={(e) => updateField("secondaryJobTitle", e.target.value)}
                            placeholder="e.g. CFO, Director"
                            className={inputClass("secondaryJobTitle")}
                          />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">Email Address</label>
                          <input
                            type="email"
                            value={formData.secondaryEmail}
                            onChange={(e) => updateField("secondaryEmail", e.target.value)}
                            placeholder="name@company.com"
                            className={inputClass("secondaryEmail")}
                          />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">Phone Number</label>
                          <input
                            type="tel"
                            value={formData.secondaryPhone}
                            onChange={(e) => updateField("secondaryPhone", e.target.value)}
                            placeholder="+44 7XXX XXXXXX"
                            className={inputClass("secondaryPhone")}
                          />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">Mobile Number</label>
                          <input
                            type="tel"
                            value={formData.secondaryMobile}
                            onChange={(e) => updateField("secondaryMobile", e.target.value)}
                            placeholder="+44 7XXX XXXXXX"
                            className={inputClass("secondaryMobile")}
                          />
                        </div>
                      </div>
                      <StepNav showSkip />
                    </div>
                  )}

                  {/* ══════════════════════════════════════════════════
                      STEP 9: Pakistan Contact (Optional)
                  ══════════════════════════════════════════════════ */}
                  {currentStep === 8 && (
                    <div>
                      <StepHeader stepIndex={8} />
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22C55E]/10 text-[#22C55E] text-xs font-bold uppercase tracking-wider mb-4">
                        Optional
                      </div>
                      <p className="text-[#5A5F72] text-base mb-6">
                        If your organisation has operations in Pakistan.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">First Name</label>
                          <input
                            type="text"
                            value={formData.pakFirstName}
                            onChange={(e) => updateField("pakFirstName", e.target.value)}
                            placeholder="First name"
                            className={inputClass("pakFirstName")}
                          />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">Last Name</label>
                          <input
                            type="text"
                            value={formData.pakLastName}
                            onChange={(e) => updateField("pakLastName", e.target.value)}
                            placeholder="Last name"
                            className={inputClass("pakLastName")}
                          />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">Job Title</label>
                          <input
                            type="text"
                            value={formData.pakJobTitle}
                            onChange={(e) => updateField("pakJobTitle", e.target.value)}
                            placeholder="e.g. Country Manager"
                            className={inputClass("pakJobTitle")}
                          />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">Email Address</label>
                          <input
                            type="email"
                            value={formData.pakEmail}
                            onChange={(e) => updateField("pakEmail", e.target.value)}
                            placeholder="name@company.com"
                            className={inputClass("pakEmail")}
                          />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">Phone Number</label>
                          <input
                            type="tel"
                            value={formData.pakPhone}
                            onChange={(e) => updateField("pakPhone", e.target.value)}
                            placeholder="+92 XXX XXXXXXX"
                            className={inputClass("pakPhone")}
                          />
                        </div>
                        <div>
                          <label className="block text-base font-medium text-[#3D4152] mb-2">Pakistan Office Address</label>
                          <input
                            type="text"
                            value={formData.pakAddress}
                            onChange={(e) => updateField("pakAddress", e.target.value)}
                            placeholder="Full address"
                            className={inputClass("pakAddress")}
                          />
                        </div>
                      </div>
                      <StepNav showSkip />
                    </div>
                  )}

                  {/* ══════════════════════════════════════════════════
                      STEP 10: Referral + Terms & Submit
                  ══════════════════════════════════════════════════ */}
                  {currentStep === 9 && (
                    <div>
                      <StepHeader stepIndex={9} />
                      <ErrorBanner />

                      {/* Referral section */}
                      <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C41E3A]/10 text-[#C41E3A] text-xs font-bold uppercase tracking-wider mb-4">
                          Referral — Optional
                        </div>
                        <p className="text-[#5A5F72] text-base mb-6">
                          If you were referred by an existing UPTECH member.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-base font-medium text-[#3D4152] mb-2">Referrer&apos;s Name</label>
                            <input
                              type="text"
                              value={formData.referrerName}
                              onChange={(e) => updateField("referrerName", e.target.value)}
                              placeholder="Full name"
                              className={inputClass("referrerName")}
                            />
                          </div>
                          <div>
                            <label className="block text-base font-medium text-[#3D4152] mb-2">Organisation</label>
                            <input
                              type="text"
                              value={formData.referrerOrg}
                              onChange={(e) => updateField("referrerOrg", e.target.value)}
                              placeholder="Organisation name"
                              className={inputClass("referrerOrg")}
                            />
                          </div>
                          <div>
                            <label className="block text-base font-medium text-[#3D4152] mb-2">Email Address</label>
                            <input
                              type="email"
                              value={formData.referrerEmail}
                              onChange={(e) => updateField("referrerEmail", e.target.value)}
                              placeholder="referrer@company.com"
                              className={inputClass("referrerEmail")}
                            />
                          </div>
                          <div>
                            <label className="block text-base font-medium text-[#3D4152] mb-2">Phone Number</label>
                            <input
                              type="tel"
                              value={formData.referrerPhone}
                              onChange={(e) => updateField("referrerPhone", e.target.value)}
                              placeholder="+44 XXXX XXXXXX"
                              className={inputClass("referrerPhone")}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Terms & Submit */}
                      <div className="border-t border-[#D8D5CF] pt-8">
                        <div className="bg-gradient-to-br from-[#2563EB]/5 via-[#22C55E]/5 to-[#C41E3A]/5 rounded-xl p-8 text-center">
                          <h3 className="font-heading font-extrabold text-xl text-[#1C1F2E] mb-4">
                            Submit Your Application
                          </h3>
                          <p className="text-[#5A5F72] mb-6 text-base leading-relaxed">
                            Please review and accept the following agreements to submit your application.
                            Membership is non-transferable. Payment details will be provided upon application approval.
                          </p>

                          {/* ── Agreement checkboxes ── */}
                          <div className="flex flex-col gap-4 max-w-lg mx-auto text-left mb-8">
                            {/* 1. Terms, Privacy & Code of Conduct */}
                            <label className={`flex items-start gap-3 cursor-pointer ${errors.termsAccepted ? "ring-1 ring-[#C41E3A]/30 rounded-lg p-3" : ""}`}>
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

                            {/* 2. Membership Terms & Conditions */}
                            <label className={`flex items-start gap-3 cursor-pointer ${errors.membershipTermsAccepted ? "ring-1 ring-[#C41E3A]/30 rounded-lg p-3" : ""}`}>
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

                            {/* 3. Arbitration & Dispute Resolution */}
                            <label className={`flex items-start gap-3 cursor-pointer ${errors.arbitrationAccepted ? "ring-1 ring-[#C41E3A]/30 rounded-lg p-3" : ""}`}>
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
                              className="flex items-center gap-3 p-4 mb-6 rounded-xl bg-[#C41E3A]/[0.04] border border-[#C41E3A]/15"
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
                            <a href="mailto:membership@uptech.org.uk" className="text-[#2563EB] hover:underline">
                              membership@uptech.org.uk
                            </a>
                          </p>
                        </div>
                      </div>

                      {/* Back button only on final step */}
                      <div className="flex items-center mt-10 pt-8 border-t border-[#D8D5CF]">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#3D4152] hover:bg-[#E8E6E3] border border-[#D8D5CF] transition-all"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          Back
                        </button>
                      </div>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>
          </form>
          </div>
        </Section>
      )}
    </div>
  );
}
