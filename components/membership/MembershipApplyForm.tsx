"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  AlertCircle,
  Building2,
  UserRound,
  ShieldCheck,
  Globe,
  MapPin,
  Phone,
  Mail,
  RotateCcw,
  X,
  Upload,
  Loader2,
  FileText,
  Layers,
} from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";

/* ─── Option lists (mirror lib/vendorService.ts) ─── */
const COMPANY_TYPES = ["Software House", "Agency", "Consultancy", "Outsourcing", "Other"];
const SERVICE_OPTIONS = [
  "Software Development - Web",
  "Software Development - Mobile",
  "Software Development - SaaS",
  "UI/UX Design",
  "Cloud Services - AWS",
  "Cloud Services - Azure",
  "Cloud Services - GCP",
  "DevOps",
  "AI & Machine Learning",
  "Cybersecurity",
  "QA & Testing",
  "ERP/CRM Development",
  "API Integrations",
];

const DESCRIPTION_MAX = 220;

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

const hasCityList = (country: string) => country === "uk" || country === "pakistan";

/* ─── All other countries (alphabetical, UK and Pakistan pinned separately) ─── */
const otherCountries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
  "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
  "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
  "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile",
  "China", "Colombia", "Comoros", "Congo (Brazzaville)", "Congo (Kinshasa)",
  "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
  "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea",
  "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland",
  "France", "Gabon", "Gambia", "Georgia", "Germany",
  "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
  "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq",
  "Ireland", "Israel", "Italy", "Jamaica", "Japan",
  "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait",
  "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
  "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
  "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
  "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro",
  "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru",
  "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
  "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman",
  "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay",
  "Peru", "Philippines", "Poland", "Portugal", "Qatar",
  "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
  "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
  "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
  "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
  "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan",
  "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
  "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
  "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
  "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United States",
  "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela",
  "Vietnam", "Yemen", "Zambia", "Zimbabwe",
];

/* ─── Shared styles ─── */
const baseInputClass =
  "w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border text-[#0F172A] text-[15px] placeholder:text-[#94A3B8] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/15 hover:border-[#94A3B8] transition-all duration-200 shadow-sm";
const baseSelectClass =
  "w-full pl-11 pr-10 py-3.5 rounded-xl bg-white border text-[#0F172A] text-[15px] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/15 hover:border-[#94A3B8] transition-all duration-200 appearance-none cursor-pointer shadow-sm";

/* ─── Form data type ─── */
interface FormData {
  orgName: string;
  companyType: string;
  companyTypeOther: string;
  country: string;
  city: string;
  cityOther: string;
  website: string;
  shortDescription: string;
  personName: string;
  personEmail: string;
  personPhone: string;
  termsAccepted: boolean;
  membershipTermsAccepted: boolean;
  arbitrationAccepted: boolean;
}

const initialFormData: FormData = {
  orgName: "",
  companyType: "",
  companyTypeOther: "",
  country: "",
  city: "",
  cityOther: "",
  website: "",
  shortDescription: "",
  personName: "",
  personEmail: "",
  personPhone: "",
  termsAccepted: false,
  membershipTermsAccepted: false,
  arbitrationAccepted: false,
};

/* ─── Draft persistence ─── */
const DRAFT_STORAGE_KEY = "uptech:membershipDraft";
const DRAFT_TTL_MS = 14 * 24 * 60 * 60 * 1000;
const CONSENT_FIELDS: ReadonlyArray<keyof FormData> = [
  "termsAccepted",
  "membershipTermsAccepted",
  "arbitrationAccepted",
];

type DraftPayload = {
  savedAt: number;
  formData: Record<string, string>;
  services: string[];
  logoUrl: string;
};

function loadDraft(): DraftPayload | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(DRAFT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as DraftPayload;
    if (!parsed || typeof parsed.savedAt !== "number") return null;
    if (Date.now() - parsed.savedAt > DRAFT_TTL_MS) {
      window.localStorage.removeItem(DRAFT_STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function clearDraft() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(DRAFT_STORAGE_KEY);
  } catch {
    // ignore
  }
}

function hasMeaningfulContent(
  formData: FormData,
  services: string[],
  logoUrl: string
): boolean {
  if (services.length > 0 || logoUrl) return true;
  for (const [key, val] of Object.entries(formData)) {
    if (CONSENT_FIELDS.includes(key as keyof FormData)) continue;
    if (typeof val === "string" && val.trim() !== "") return true;
  }
  return false;
}

/* ─── Numbered step header ─── */
function StepHeader({
  index,
  icon: Icon,
  title,
  hint,
  color = "#2563EB",
}: {
  index: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  hint?: string;
  color?: string;
}) {
  return (
    <div className="flex items-center gap-3.5 mb-5">
      <div
        className="relative w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${color}DD 100%)`,
          boxShadow: `0 8px 22px -6px ${color}66`,
        }}
      >
        <Icon className="w-5 h-5 text-white" strokeWidth={2} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2.5 mb-0.5">
          <span
            className="text-[10px] font-bold tracking-[0.18em] uppercase"
            style={{ color }}
          >
            Step {index}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-[#E2E8F0] to-transparent" />
        </div>
        <h3 className="font-heading font-bold text-[1.05rem] sm:text-[1.15rem] text-[#0F172A] leading-tight">
          {title}
          {hint && (
            <span className="ml-2 text-[13px] font-normal text-[#64748B]">
              {hint}
            </span>
          )}
        </h3>
      </div>
    </div>
  );
}

export default function MembershipApplyForm() {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [services, setServices] = useState<string[]>([]);
  const [serviceInput, setServiceInput] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [shake, setShake] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [restoredAt, setRestoredAt] = useState<number | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // Restore draft on mount (client only — consents are intentionally excluded so they must be re-confirmed)
  useEffect(() => {
    const draft = loadDraft();
    if (draft) {
      setFormData((prev) => {
        const merged: FormData = { ...prev };
        for (const key of Object.keys(initialFormData) as Array<keyof FormData>) {
          if (CONSENT_FIELDS.includes(key)) continue;
          const v = draft.formData?.[key as string];
          if (typeof v === "string") {
            (merged[key] as string) = v;
          }
        }
        return merged;
      });
      setServices(Array.isArray(draft.services) ? draft.services : []);
      setLogoUrl(typeof draft.logoUrl === "string" ? draft.logoUrl : "");
      setRestoredAt(draft.savedAt);
    }
    setHydrated(true);
  }, []);

  // Debounced auto-save (skip until hydrated, while submitting, after success, or when empty)
  useEffect(() => {
    if (!hydrated || formSubmitted || submitting) return;
    if (!hasMeaningfulContent(formData, services, logoUrl)) return;

    const t = setTimeout(() => {
      try {
        const persistable = Object.fromEntries(
          Object.entries(formData).filter(([, v]) => typeof v === "string")
        ) as Record<string, string>;
        const payload: DraftPayload = {
          savedAt: Date.now(),
          formData: persistable,
          services,
          logoUrl,
        };
        window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(payload));
      } catch {
        // ignore (quota / private mode)
      }
    }, 600);

    return () => clearTimeout(t);
  }, [formData, services, logoUrl, hydrated, formSubmitted, submitting]);

  const handleStartFresh = () => {
    setFormData(initialFormData);
    setServices([]);
    setServiceInput("");
    setLogoUrl("");
    setErrors({});
    setSubmitError("");
    clearDraft();
    setRestoredAt(null);
  };

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => {
      const next = { ...prev, [field]: value };
      if (field === "country") {
        next.city = "";
        next.cityOther = "";
      }
      if (field === "companyType" && value !== "Other") {
        next.companyTypeOther = "";
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

  const clearServiceError = () => {
    if (errors.services) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.services;
        return next;
      });
    }
  };

  const addService = (raw: string) => {
    const val = raw.trim();
    if (!val) return;
    setServices((cur) =>
      cur.some((x) => x.toLowerCase() === val.toLowerCase()) ? cur : [...cur, val]
    );
    setServiceInput("");
    clearServiceError();
  };

  const removeService = (s: string) => {
    setServices((cur) => cur.filter((x) => x !== s));
  };

  async function uploadLogo(file: File) {
    setUploadingLogo(true);
    setSubmitError("");
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/membership/logo", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed.");
      setLogoUrl(data.url);
      setErrors((prev) => {
        const next = { ...prev };
        delete next.logoUrl;
        return next;
      });
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Logo upload failed.");
    } finally {
      setUploadingLogo(false);
    }
  }

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone: string) => /^[+]?[\d\s()-]{7,}$/.test(phone);

  const validateAll = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.orgName.trim()) newErrors.orgName = "Organisation name is required";
    if (!formData.companyType) newErrors.companyType = "Please select a company type";
    else if (formData.companyType === "Other" && !formData.companyTypeOther.trim()) {
      newErrors.companyTypeOther = "Please specify your company type";
    }
    if (!formData.country) newErrors.country = "Please select a country";
    else if (!hasCityList(formData.country)) {
      if (!formData.cityOther.trim()) newErrors.cityOther = "Please enter your city";
    } else {
      if (!formData.city) newErrors.city = "Please select a city";
      if (formData.city === "other" && !formData.cityOther.trim()) {
        newErrors.cityOther = "Please enter your city";
      }
    }
    if (formData.website && !/^https?:\/\/.+/.test(formData.website)) {
      newErrors.website = "Please enter a valid URL (starting with http:// or https://)";
    }
    if (!formData.shortDescription.trim()) {
      newErrors.shortDescription = "A short description is required";
    } else if (formData.shortDescription.trim().length > DESCRIPTION_MAX) {
      newErrors.shortDescription = `Please keep it under ${DESCRIPTION_MAX} characters`;
    }
    if (services.length === 0) newErrors.services = "Select at least one service";
    if (!logoUrl) newErrors.logoUrl = "Please upload your company logo";

    if (!formData.personName.trim()) newErrors.personName = "Name is required";
    if (!formData.personEmail.trim()) newErrors.personEmail = "Email is required";
    else if (!isValidEmail(formData.personEmail)) newErrors.personEmail = "Please enter a valid email address";
    if (!formData.personPhone.trim()) newErrors.personPhone = "Phone number is required";
    else if (!isValidPhone(formData.personPhone)) newErrors.personPhone = "Please enter a valid phone number";

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
        companyType:
          formData.companyType === "Other"
            ? formData.companyTypeOther.trim()
            : formData.companyType,
        services,
        logoUrl,
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
      clearDraft();
      setRestoredAt(null);
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
    `${baseInputClass} ${
      errors[field]
        ? "border-[#C41E3A] bg-[#FEF2F4] focus:ring-[#C41E3A]/15"
        : "border-[#E2E8F0] focus:border-[#2563EB]"
    }`;

  const selectClassFn = (field: string) =>
    `${baseSelectClass} ${
      errors[field]
        ? "border-[#C41E3A] bg-[#FEF2F4] focus:ring-[#C41E3A]/15"
        : "border-[#E2E8F0] focus:border-[#2563EB]"
    }`;

  const InputIcon = ({ icon: Icon }: { icon: React.ComponentType<{ className?: string; strokeWidth?: number }> }) => (
    <Icon
      className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#94A3B8] pointer-events-none"
      strokeWidth={1.75}
    />
  );

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
        className="flex items-start gap-3 p-4 rounded-xl bg-[#FEF2F4] border border-[#C41E3A]/25"
        role="alert"
      >
        <div className="w-9 h-9 rounded-lg bg-[#C41E3A]/10 flex items-center justify-center flex-shrink-0">
          <AlertCircle className="w-[18px] h-[18px] text-[#C41E3A]" />
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
  const descriptionLength = formData.shortDescription.trim().length;

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
            <div className="relative bg-white border border-[#E2E8F0] rounded-2xl p-10 sm:p-14 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.15)] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#22C55E] via-[#2563EB] to-[#22C55E]" />
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
                className="relative w-20 h-20 mx-auto mb-6"
              >
                <div className="absolute inset-0 rounded-full bg-[#22C55E]/15 animate-ping opacity-30" />
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center shadow-[0_12px_32px_rgba(34,197,94,0.35)]">
                  <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
              </motion.div>
              <h2 className="font-heading font-extrabold text-[1.75rem] text-[#0F172A] mb-3">
                Application Submitted Successfully
              </h2>
              <p className="text-[#475569] text-base leading-relaxed mb-8 max-w-md mx-auto">
                Thank you for your interest in joining UPTECH. Our membership team will review your
                application and contact you within 5 business days regarding next steps.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-bold rounded-xl hover:bg-[#1D4ED8] hover:-translate-y-0.5 transition-all duration-200 shadow-[0_8px_24px_rgba(37,99,235,0.3)]"
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
              subtitle="A few quick details to get your company listed in the UPTECH directory. You can complete a full capability profile after approval."
              color="blue"
            />
          </AnimatedSection>

          <AnimatePresence>
            {restoredAt !== null && (
              <motion.div
                key="draft-banner"
                initial={{ opacity: 0, y: -8, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -8, height: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
                role="status"
              >
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#EFF6FF] via-white to-[#F0F9FF] border border-[#2563EB]/20 shadow-[0_2px_12px_-2px_rgba(37,99,235,0.08)]">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(37,99,235,0.25)]">
                      <RotateCcw className="w-[18px] h-[18px] text-white" strokeWidth={2.25} />
                    </div>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <p className="text-[14.5px] font-semibold text-[#0F172A] leading-snug">
                        We restored your saved draft.
                      </p>
                      <p className="text-[13px] text-[#475569] mt-1 leading-relaxed">
                        Pick up where you left off. Consent checkboxes need to be re-confirmed before submitting.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 sm:ml-2">
                    <button
                      type="button"
                      onClick={handleStartFresh}
                      className="px-3.5 py-2 text-[13px] font-semibold text-[#2563EB] bg-white border border-[#2563EB]/30 rounded-lg hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] hover:shadow-[0_4px_12px_rgba(37,99,235,0.25)] transition-all duration-200"
                    >
                      Start fresh
                    </button>
                    <button
                      type="button"
                      onClick={() => setRestoredAt(null)}
                      aria-label="Dismiss draft notice"
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-[#64748B] hover:text-[#0F172A] hover:bg-white transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={formRef}>
            <form onSubmit={handleSubmit} noValidate className="w-full">
              <div className="relative rounded-3xl border border-[#DBE6FE] p-6 sm:p-9 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)] overflow-hidden bg-gradient-to-br from-[#F0F5FF] via-white to-[#E6EEFE]">
                {/* Soft ambient glows */}
                <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-[#2563EB]/[0.06] blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 -right-24 w-72 h-72 rounded-full bg-[#22C55E]/[0.05] blur-3xl pointer-events-none" />

                {/* Brand accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#C41E3A]" />

                <div className="relative space-y-9 mt-2">
                  <ErrorBanner />

                  {/* SECTION 1 — Company (everything the directory card shows) */}
                  <motion.section {...sectionAnim}>
                    <StepHeader
                      index="01"
                      icon={Building2}
                      title="Company Details"
                      hint="shown on your directory card"
                      color="#2563EB"
                    />

                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div data-field="orgName">
                          <label className="block text-sm font-semibold text-[#334155] mb-2">
                            Company Name <span className="text-[#C41E3A]">*</span>
                          </label>
                          <div className="relative">
                            <InputIcon icon={Building2} />
                            <input
                              type="text"
                              value={formData.orgName}
                              onChange={(e) => updateField("orgName", e.target.value)}
                              placeholder="Enter your company name"
                              className={inputClass("orgName")}
                            />
                          </div>
                          <FieldError field="orgName" />
                        </div>

                        <div data-field="companyType">
                          <label className="block text-sm font-semibold text-[#334155] mb-2">
                            Company Type <span className="text-[#C41E3A]">*</span>
                          </label>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <div className="relative flex-1">
                              <InputIcon icon={Layers} />
                              <select
                                value={formData.companyType}
                                onChange={(e) => updateField("companyType", e.target.value)}
                                className={selectClassFn("companyType")}
                              >
                                <option value="">Select type</option>
                                {COMPANY_TYPES.map((t) => (
                                  <option key={t} value={t}>{t}</option>
                                ))}
                              </select>
                              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
                            </div>
                            {formData.companyType === "Other" && (
                              <div data-field="companyTypeOther" className="relative flex-1">
                                <InputIcon icon={Layers} />
                                <input
                                  type="text"
                                  value={formData.companyTypeOther}
                                  onChange={(e) => updateField("companyTypeOther", e.target.value)}
                                  placeholder="Enter your company type"
                                  className={inputClass("companyTypeOther")}
                                  autoFocus
                                />
                              </div>
                            )}
                          </div>
                          <FieldError field="companyType" />
                          {formData.companyType === "Other" && <FieldError field="companyTypeOther" />}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div data-field="country">
                          <label className="block text-sm font-semibold text-[#334155] mb-2">
                            Country <span className="text-[#C41E3A]">*</span>
                          </label>
                          <div className="relative">
                            <InputIcon icon={Globe} />
                            <select
                              value={formData.country}
                              onChange={(e) => updateField("country", e.target.value)}
                              className={selectClassFn("country")}
                            >
                              <option value="">Select country</option>
                              <option value="" disabled>── Primary ──</option>
                              <option value="uk">United Kingdom</option>
                              <option value="pakistan">Pakistan</option>
                              <option value="" disabled>── All countries ──</option>
                              {otherCountries.map((c) => (
                                <option key={c} value={c}>{c}</option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
                          </div>
                          <FieldError field="country" />
                        </div>

                        <div data-field="city">
                          <label className="block text-sm font-semibold text-[#334155] mb-2">
                            City <span className="text-[#C41E3A]">*</span>
                          </label>
                          {formData.country && !hasCityList(formData.country) ? (
                            <div className="relative">
                              <InputIcon icon={MapPin} />
                              <input
                                type="text"
                                value={formData.cityOther}
                                onChange={(e) => updateField("cityOther", e.target.value)}
                                placeholder="Enter your city"
                                className={inputClass("cityOther")}
                              />
                            </div>
                          ) : (
                            <div className="relative">
                              <InputIcon icon={MapPin} />
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
                              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
                            </div>
                          )}
                          {hasCityList(formData.country) && formData.city === "other" && (
                            <div className="relative mt-2">
                              <InputIcon icon={MapPin} />
                              <input
                                type="text"
                                value={formData.cityOther}
                                onChange={(e) => updateField("cityOther", e.target.value)}
                                placeholder="Enter your city"
                                className={inputClass("cityOther")}
                              />
                            </div>
                          )}
                          <FieldError field="city" />
                          <FieldError field="cityOther" />
                        </div>

                        <div data-field="website">
                          <label className="block text-sm font-semibold text-[#334155] mb-2">Website</label>
                          <div className="relative">
                            <InputIcon icon={Globe} />
                            <input
                              type="url"
                              value={formData.website}
                              onChange={(e) => updateField("website", e.target.value)}
                              placeholder="https://www.example.com"
                              className={inputClass("website")}
                            />
                          </div>
                          <FieldError field="website" />
                        </div>
                      </div>

                      <div data-field="shortDescription">
                        <label className="flex items-center justify-between text-sm font-semibold text-[#334155] mb-2">
                          <span>
                            Short Description <span className="text-[#C41E3A]">*</span>
                          </span>
                          <span className={`text-xs font-normal ${descriptionLength > DESCRIPTION_MAX ? "text-[#C41E3A]" : "text-[#94A3B8]"}`}>
                            {descriptionLength}/{DESCRIPTION_MAX}
                          </span>
                        </label>
                        <div className="relative">
                          <FileText className="absolute left-3.5 top-4 w-[18px] h-[18px] text-[#94A3B8] pointer-events-none" strokeWidth={1.75} />
                          <textarea
                            value={formData.shortDescription}
                            onChange={(e) => updateField("shortDescription", e.target.value)}
                            rows={3}
                            maxLength={DESCRIPTION_MAX + 40}
                            placeholder="One or two sentences about what your company does — this appears on your directory card."
                            className={`${inputClass("shortDescription")} pt-3.5 resize-none`}
                          />
                        </div>
                        <FieldError field="shortDescription" />
                      </div>

                      {/* Logo */}
                      <div data-field="logoUrl">
                        <label className="block text-sm font-semibold text-[#334155] mb-2">
                          Company Logo <span className="text-[#C41E3A]">*</span>
                        </label>
                        <div className="flex items-center gap-4 flex-wrap">
                          {logoUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={logoUrl}
                              alt="Logo preview"
                              className="w-16 h-16 object-contain rounded-xl border border-[#E2E8F0] bg-white p-1"
                            />
                          ) : (
                            <div className="w-16 h-16 rounded-xl border border-dashed border-[#CBD5E1] bg-white flex items-center justify-center">
                              <Building2 className="w-6 h-6 text-[#CBD5E1]" />
                            </div>
                          )}
                          <label className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#D8D5CF] bg-white text-sm font-medium text-[#334155] hover:border-[#2563EB] cursor-pointer transition-colors">
                            {uploadingLogo ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                            {uploadingLogo ? "Uploading…" : logoUrl ? "Replace logo" : "Upload logo"}
                            <input
                              type="file"
                              accept="image/png,image/jpeg,image/webp,image/svg+xml"
                              className="hidden"
                              onChange={(e) => {
                                const f = e.target.files?.[0];
                                if (f) uploadLogo(f);
                                e.target.value = "";
                              }}
                            />
                          </label>
                          <span className="text-xs text-[#94A3B8]">PNG, JPG, WEBP or SVG · max 2MB</span>
                        </div>
                        <FieldError field="logoUrl" />
                      </div>
                    </div>
                  </motion.section>

                  {/* SECTION 2 — Services (the card tags) */}
                  <motion.section {...sectionAnim}>
                    <StepHeader
                      index="02"
                      icon={Layers}
                      title="Services"
                      hint="shown as tags on your card"
                      color="#22A06B"
                    />
                    <div data-field="services">
                      {/* Selected services (removable chips) */}
                      {services.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {services.map((s) => (
                            <span
                              key={s}
                              className="inline-flex items-center gap-1.5 text-[13px] font-medium px-3 py-1.5 rounded-full bg-[#2563EB]/10 text-[#1D4ED8] border border-[#2563EB]/20"
                            >
                              {s}
                              <button
                                type="button"
                                onClick={() => removeService(s)}
                                aria-label={`Remove ${s}`}
                                className="text-[#1D4ED8]/70 hover:text-[#C41E3A] transition-colors"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Type-or-pick input */}
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <InputIcon icon={Layers} />
                          <input
                            type="text"
                            value={serviceInput}
                            onChange={(e) => setServiceInput(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                addService(serviceInput);
                              }
                            }}
                            placeholder="Type a service and press Enter, or pick from below…"
                            className={inputClass("services")}
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => addService(serviceInput)}
                          disabled={!serviceInput.trim()}
                          className="px-5 rounded-xl bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1D4ED8] disabled:bg-[#E2E8F0] disabled:text-[#94A3B8] transition-colors shadow-sm"
                        >
                          Add
                        </button>
                      </div>

                      {/* Quick-pick suggestions (not yet selected) */}
                      {SERVICE_OPTIONS.some((s) => !services.includes(s)) && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {SERVICE_OPTIONS.filter((s) => !services.includes(s)).map((s) => (
                            <button
                              type="button"
                              key={s}
                              onClick={() => addService(s)}
                              className="text-[13px] px-3 py-1.5 rounded-full border border-[#E2E8F0] bg-white text-[#475569] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
                            >
                              + {s}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <FieldError field="services" />
                  </motion.section>

                  {/* SECTION 3 — Your Information */}
                  <motion.section {...sectionAnim}>
                    <StepHeader
                      index="03"
                      icon={UserRound}
                      title="Your Details"
                      color="#C41E3A"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div data-field="personName">
                        <label className="block text-sm font-semibold text-[#334155] mb-2">
                          Name <span className="text-[#C41E3A]">*</span>
                        </label>
                        <div className="relative">
                          <InputIcon icon={UserRound} />
                          <input
                            type="text"
                            value={formData.personName}
                            onChange={(e) => updateField("personName", e.target.value)}
                            placeholder="Your full name"
                            className={inputClass("personName")}
                          />
                        </div>
                        <FieldError field="personName" />
                      </div>
                      <div data-field="personEmail">
                        <label className="block text-sm font-semibold text-[#334155] mb-2">
                          Email <span className="text-[#C41E3A]">*</span>
                        </label>
                        <div className="relative">
                          <InputIcon icon={Mail} />
                          <input
                            type="email"
                            value={formData.personEmail}
                            onChange={(e) => updateField("personEmail", e.target.value)}
                            placeholder="name@company.com"
                            className={inputClass("personEmail")}
                          />
                        </div>
                        <FieldError field="personEmail" />
                      </div>
                      <div data-field="personPhone">
                        <label className="block text-sm font-semibold text-[#334155] mb-2">
                          Mobile / Phone Number <span className="text-[#C41E3A]">*</span>
                        </label>
                        <div className="relative">
                          <InputIcon icon={Phone} />
                          <input
                            type="tel"
                            value={formData.personPhone}
                            onChange={(e) => updateField("personPhone", e.target.value)}
                            placeholder="+44 7XXX XXXXXX"
                            className={inputClass("personPhone")}
                          />
                        </div>
                        <FieldError field="personPhone" />
                      </div>
                    </div>
                  </motion.section>

                  {/* SECTION 4 — Terms & Submit */}
                  <motion.section {...sectionAnim}>
                    <StepHeader
                      index="04"
                      icon={ShieldCheck}
                      title="Confirmation & Submit"
                      color="#2563EB"
                    />

                    <div className="relative">
                      <p className="text-[#475569] mb-5 text-[14.5px] leading-relaxed text-center max-w-xl mx-auto">
                        Membership is non-transferable.
                      </p>

                      <div className="flex flex-col gap-2.5 max-w-2xl mx-auto mb-6">
                        {/* Terms 1 */}
                        <label
                          data-field="termsAccepted"
                          className={`
                            flex items-start gap-3 cursor-pointer p-4 rounded-xl border transition-all duration-200
                            ${errors.termsAccepted
                              ? "border-[#C41E3A]/40 bg-[#FEF2F4]"
                              : formData.termsAccepted
                                ? "border-[#2563EB]/30 bg-white shadow-sm"
                                : "border-[#E2E8F0] bg-white hover:border-[#CBD5E1]"
                            }
                          `}
                        >
                          <span
                            className={`
                              relative mt-0.5 w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200
                              ${formData.termsAccepted ? "bg-[#2563EB] border-[#2563EB]" : "bg-white border-[#CBD5E1]"}
                            `}
                          >
                            <input
                              type="checkbox"
                              checked={formData.termsAccepted}
                              onChange={(e) => updateField("termsAccepted", e.target.checked)}
                              className="sr-only"
                            />
                            {formData.termsAccepted && (
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </span>
                          <span className="text-[13.5px] text-[#334155] leading-relaxed">
                            I confirm the above information is accurate and I agree to UPTECH&apos;s{" "}
                            <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] font-medium hover:underline">Terms &amp; Conditions</a>,{" "}
                            <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] font-medium hover:underline">Privacy Policy</a>, and{" "}
                            <a href="/code-of-conduct" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] font-medium hover:underline">Code of Conduct</a>.
                            <span className="text-[#C41E3A] font-semibold"> *</span>
                          </span>
                        </label>
                        {errors.termsAccepted && (
                          <p className="flex items-center gap-1.5 text-[13px] text-[#C41E3A] -mt-1 ml-4">
                            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                            {errors.termsAccepted}
                          </p>
                        )}

                        {/* Terms 2 */}
                        <label
                          data-field="membershipTermsAccepted"
                          className={`
                            flex items-start gap-3 cursor-pointer p-4 rounded-xl border transition-all duration-200
                            ${errors.membershipTermsAccepted
                              ? "border-[#C41E3A]/40 bg-[#FEF2F4]"
                              : formData.membershipTermsAccepted
                                ? "border-[#2563EB]/30 bg-white shadow-sm"
                                : "border-[#E2E8F0] bg-white hover:border-[#CBD5E1]"
                            }
                          `}
                        >
                          <span
                            className={`
                              relative mt-0.5 w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200
                              ${formData.membershipTermsAccepted ? "bg-[#2563EB] border-[#2563EB]" : "bg-white border-[#CBD5E1]"}
                            `}
                          >
                            <input
                              type="checkbox"
                              checked={formData.membershipTermsAccepted}
                              onChange={(e) => updateField("membershipTermsAccepted", e.target.checked)}
                              className="sr-only"
                            />
                            {formData.membershipTermsAccepted && (
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </span>
                          <span className="text-[13.5px] text-[#334155] leading-relaxed">
                            I accept the{" "}
                            <a href="/membership/terms" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] font-medium hover:underline">
                              Membership Terms &amp; Conditions
                            </a>, including non-transferability and disciplinary procedure.
                            <span className="text-[#C41E3A] font-semibold"> *</span>
                          </span>
                        </label>
                        {errors.membershipTermsAccepted && (
                          <p className="flex items-center gap-1.5 text-[13px] text-[#C41E3A] -mt-1 ml-4">
                            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                            {errors.membershipTermsAccepted}
                          </p>
                        )}

                        {/* Terms 3 */}
                        <label
                          data-field="arbitrationAccepted"
                          className={`
                            flex items-start gap-3 cursor-pointer p-4 rounded-xl border transition-all duration-200
                            ${errors.arbitrationAccepted
                              ? "border-[#C41E3A]/40 bg-[#FEF2F4]"
                              : formData.arbitrationAccepted
                                ? "border-[#2563EB]/30 bg-white shadow-sm"
                                : "border-[#E2E8F0] bg-white hover:border-[#CBD5E1]"
                            }
                          `}
                        >
                          <span
                            className={`
                              relative mt-0.5 w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200
                              ${formData.arbitrationAccepted ? "bg-[#2563EB] border-[#2563EB]" : "bg-white border-[#CBD5E1]"}
                            `}
                          >
                            <input
                              type="checkbox"
                              checked={formData.arbitrationAccepted}
                              onChange={(e) => updateField("arbitrationAccepted", e.target.checked)}
                              className="sr-only"
                            />
                            {formData.arbitrationAccepted && (
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </span>
                          <span className="text-[13.5px] text-[#334155] leading-relaxed">
                            I acknowledge and accept the{" "}
                            <a href="/arbitration/framework" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] font-medium hover:underline">
                              Arbitration &amp; Dispute Resolution Framework
                            </a>{" "}governed under the Arbitration Act 1996 (UK).
                            <span className="text-[#C41E3A] font-semibold"> *</span>
                          </span>
                        </label>
                        {errors.arbitrationAccepted && (
                          <p className="flex items-center gap-1.5 text-[13px] text-[#C41E3A] -mt-1 ml-4">
                            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                            {errors.arbitrationAccepted}
                          </p>
                        )}
                      </div>

                      {submitError && (
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-3 p-4 mb-6 rounded-xl bg-[#FEF2F4] border border-[#C41E3A]/25 max-w-xl mx-auto"
                        >
                          <div className="w-9 h-9 rounded-lg bg-[#C41E3A]/10 flex items-center justify-center flex-shrink-0">
                            <AlertCircle className="w-[18px] h-[18px] text-[#C41E3A]" />
                          </div>
                          <p className="text-sm font-medium text-[#C41E3A]">{submitError}</p>
                        </motion.div>
                      )}

                      <div className="text-center">
                        <motion.button
                          type="submit"
                          disabled={
                            submitting ||
                            uploadingLogo ||
                            !formData.termsAccepted ||
                            !formData.membershipTermsAccepted ||
                            !formData.arbitrationAccepted
                          }
                          animate={shake ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : {}}
                          transition={{ duration: 0.5 }}
                          className={`
                            group relative inline-flex items-center gap-3 px-10 py-4 font-bold text-[15px] rounded-xl transition-all duration-300 overflow-hidden
                            ${submitting || uploadingLogo || !formData.termsAccepted || !formData.membershipTermsAccepted || !formData.arbitrationAccepted
                              ? "bg-[#E2E8F0] text-[#94A3B8] cursor-not-allowed shadow-none"
                              : "bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#2563EB] text-white hover:shadow-[0_12px_36px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 shadow-[0_8px_24px_rgba(37,99,235,0.28)]"
                            }
                          `}
                        >
                          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
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

                        <p className="text-[13px] text-[#64748B] mt-6 leading-relaxed max-w-md mx-auto">
                          Our membership team will review your application and respond within 5 business days.
                          For enquiries, contact{" "}
                          <a href="mailto:membership@ukpaktech.org.uk" className="text-[#2563EB] font-medium hover:underline">
                            membership@ukpaktech.org.uk
                          </a>
                        </p>
                      </div>
                    </div>
                  </motion.section>
                </div>
              </div>
            </form>
          </div>
        </Section>
      )}
    </section>
  );
}
