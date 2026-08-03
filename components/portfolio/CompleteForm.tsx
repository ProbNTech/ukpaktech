"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, Upload, AlertTriangle } from "lucide-react";

/* Option lists mirror lib/vendorService.ts (kept in sync manually). */
const COMPANY_TYPES = ["Software House", "Agency", "Consultancy", "Outsourcing", "Other"];
const COMPANY_SIZES = ["1-10", "11-50", "51-200", "201-500", "500+"];
const CONTACT_METHODS = ["Email", "Phone", "WhatsApp", "Teams", "Slack"];
const PM_METHODOLOGIES = ["Agile", "Scrum", "Kanban", "Hybrid"];
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
const INDUSTRY_OPTIONS = [
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
const PAYMENT_TERMS_OPTIONS = ["Immediately", "30 days", "45 days"];

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white border border-[#D8D5CF] text-[#0F172A] text-[15px] placeholder:text-[#94A3B8] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/15 focus:border-[#2563EB] hover:border-[#94A3B8] transition-all duration-200 shadow-sm";
const labelClass = "block text-sm font-semibold text-[#334155] mb-2";

type Profile = Record<string, unknown>;

const STEP_TITLES = [
  "Company Information",
  "Primary Contact Details (President, CTO, COO)",
  "Operational Contact Details (Manager)",
  "Industry Focus",
  "Services Offered",
  "Technical Expertise",
  "Portfolio & Experience",
  "Team & Capacity",
  "Pricing & Engagement Model",
  "Payment Terms",
  "Compliance & Certifications",
  "Operational Details",
  "Additional Information",
];
const TOTAL_STEPS = STEP_TITLES.length;

const STRING_FIELDS = [
  "website",
  "company_type",
  "contact_name",
  "contact_email",
  "contact_phone",
  "business_address",
  "company_size",
  "year_established",
  "preferred_contact_method",
  "contact_job_title",
  "operational_contact_name",
  "operational_contact_job_title",
  "operational_contact_email",
  "operational_contact_phone",
  "operational_contact_method",
  "short_description",
  "other_services",
  "other_industries",
  "primary_stack",
  "secondary_stack",
  "specialised_skills",
  "key_projects",
  "industries_served",
  "portfolio_links",
  "total_tech_staff",
  "team_structure",
  "monthly_capacity",
  "hourly_rate",
  "min_project_size",
  "payment_terms",
  "security_certs",
  "data_compliance",
  "insurance",
  "pm_methodology",
  "tools_used",
  "timezone_hours",
  "own_saas",
  "client_notes",
  "logo_url",
] as const;

function SectionCard({
  step,
  title,
  children,
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#2563EB] text-white font-bold text-sm">
          {step}
        </span>
        <h3 className="font-heading font-bold text-lg sm:text-xl text-[#0F172A]">
          {title}
        </h3>
      </div>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

export function CompleteForm({ token }: { token: string }) {
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [form, setForm] = useState<Record<string, string>>({});
  const [services, setServices] = useState<string[]>([]);
  const [industries, setIndustries] = useState<string[]>([]);
  const [fixedPrice, setFixedPrice] = useState(false);
  const [retainer, setRetainer] = useState(false);
  const [logoUrl, setLogoUrl] = useState("");
  const [uploadingLogo, setUploadingLogo] = useState(false);

  const [step, setStep] = useState(1);

  const [saving, setSaving] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [savedNote, setSavedNote] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const v = (k: string) => form[k] ?? "";
  const set = (k: string, val: string) => setForm((f) => ({ ...f, [k]: val }));

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch(
          `/api/portfolio/complete?token=${encodeURIComponent(token)}`
        );
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Could not load your profile.");
        if (!active) return;
        const vendor = data.vendor as Profile;
        setCompanyName(String(vendor.company_name ?? ""));
        const next: Record<string, string> = {};
        for (const f of STRING_FIELDS) {
          if (vendor[f] != null) next[f] = String(vendor[f]);
        }
        setForm(next);
        setServices(Array.isArray(vendor.services) ? (vendor.services as string[]) : []);
        setIndustries(Array.isArray(vendor.industries) ? (vendor.industries as string[]) : []);
        setFixedPrice(vendor.fixed_price === true);
        setRetainer(vendor.retainer === true);
        setLogoUrl(String(vendor.logo_url ?? ""));
      } catch (err) {
        if (active)
          setLoadError(err instanceof Error ? err.message : "Could not load your profile.");
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [token]);

  function toggleService(s: string) {
    setServices((cur) =>
      cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]
    );
  }

  function toggleIndustry(s: string) {
    setIndustries((cur) =>
      cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]
    );
  }

  async function uploadLogo(file: File) {
    setUploadingLogo(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("token", token);
      fd.append("file", file);
      const res = await fetch("/api/portfolio/logo", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed.");
      setLogoUrl(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Logo upload failed.");
    } finally {
      setUploadingLogo(false);
    }
  }

  function buildProfile(): Profile {
    const profile: Profile = { ...form };
    profile.services = services;
    profile.industries = industries;
    profile.fixed_price = fixedPrice;
    profile.retainer = retainer;
    profile.logo_url = logoUrl;
    return profile;
  }

  async function persist(submit: boolean) {
    setError("");
    setSavedNote("");
    if (submit) setSubmitting(true);
    else setSaving(true);
    try {
      const res = await fetch("/api/portfolio/complete", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, submit, profile: buildProfile() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not save.");
      if (submit) setSubmitted(true);
      else setSavedNote("Draft saved — you can return to this link anytime.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save.");
    } finally {
      setSaving(false);
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20 text-[#64748B]">
        <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-[#2563EB]" />
        Loading your profile…
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="max-w-xl mx-auto text-center bg-white rounded-2xl border border-amber-200 shadow-sm p-10">
        <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
        <h3 className="font-heading font-bold text-xl text-[#0F172A] mb-3">
          Link problem
        </h3>
        <p className="text-[#475569]">{loadError}</p>
        <Link
          href="/membership#apply"
          className="inline-block mt-6 text-[#2563EB] font-semibold hover:underline"
        >
          Apply for membership →
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-10">
        <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-5" />
        <h3 className="font-heading font-bold text-2xl text-[#0F172A] mb-3">
          Profile submitted!
        </h3>
        <p className="text-[#475569] leading-relaxed">
          Thanks — <strong>{companyName}</strong>&apos;s profile is now with our team
          for review. We&apos;ll be in touch, and once approved your company will
          appear on the UPTECH portfolio.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center mb-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#2563EB]">
          Capability Profile
        </p>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#0F172A] mt-1">
          {companyName}
        </h2>
        <p className="text-[#64748B] mt-2 text-sm">
          Complete as much as you can. You can save a draft and return anytime via your link.
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="font-semibold text-[#0F172A]">
            Step {step} of {TOTAL_STEPS} — {STEP_TITLES[step - 1]}
          </span>
          <span className="text-[#94A3B8]">{Math.round((step / TOTAL_STEPS) * 100)}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-[#E2E8F0] overflow-hidden">
          <div
            className="h-full bg-[#2563EB] transition-all duration-300"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>
      </div>

      {step === 1 && (
      <SectionCard step={1} title="Company Information">
        <div>
          <label className={labelClass}>Company Name</label>
          <input className={`${inputClass} bg-[#F8FAFC] cursor-not-allowed`} value={companyName} disabled readOnly />
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Website</label>
            <input className={inputClass} value={v("website")} onChange={(e) => set("website", e.target.value)} placeholder="https://example.com" />
          </div>
          <div>
            <label className={labelClass}>Company Type</label>
            <select className={inputClass} value={v("company_type")} onChange={(e) => set("company_type", e.target.value)}>
              <option value="">Select…</option>
              {COMPANY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClass}>Company Size (Employees)</label>
            <select className={inputClass} value={v("company_size")} onChange={(e) => set("company_size", e.target.value)}>
              <option value="">Select…</option>
              {COMPANY_SIZES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClass}>Year Established</label>
            <input className={inputClass} value={v("year_established")} onChange={(e) => set("year_established", e.target.value)} placeholder="e.g. 2018" />
          </div>
        </div>
        <div>
          <label className={labelClass}>Short Description <span className="text-[#94A3B8] font-normal">(shown on your directory card)</span></label>
          <textarea className={inputClass} rows={2} value={v("short_description")} onChange={(e) => set("short_description", e.target.value)} placeholder="One or two sentences about what your company does" />
        </div>
        <div>
          <label className={labelClass}>Registered Business Address</label>
          <textarea className={inputClass} rows={2} value={v("business_address")} onChange={(e) => set("business_address", e.target.value)} placeholder="Street, city, country, postcode" />
        </div>
        <div>
          <label className={labelClass}>Company Logo</label>
          <div className="flex items-center gap-4">
            {logoUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={logoUrl} alt="Logo preview" className="w-16 h-16 object-contain rounded-lg border border-[#E2E8F0] bg-white p-1" />
            )}
            <label className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#D8D5CF] bg-white text-sm font-medium text-[#334155] hover:border-[#2563EB] cursor-pointer transition-colors">
              {uploadingLogo ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
              {uploadingLogo ? "Uploading…" : logoUrl ? "Replace logo" : "Upload logo"}
              <input type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadLogo(f); }} />
            </label>
            <span className="text-xs text-[#94A3B8]">PNG, JPG, WEBP or SVG · max 2MB</span>
          </div>
        </div>
      </SectionCard>
      )}

      {step === 2 && (
      <SectionCard step={2} title="Primary Contact Details (President, CTO, COO)">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Full Name</label>
            <input className={inputClass} value={v("contact_name")} onChange={(e) => set("contact_name", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Job Title</label>
            <input className={inputClass} value={v("contact_job_title")} onChange={(e) => set("contact_job_title", e.target.value)} placeholder="e.g. CEO" />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input type="email" className={inputClass} value={v("contact_email")} onChange={(e) => set("contact_email", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Phone</label>
            <input className={inputClass} value={v("contact_phone")} onChange={(e) => set("contact_phone", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Preferred Communication Method</label>
            <select className={inputClass} value={v("preferred_contact_method")} onChange={(e) => set("preferred_contact_method", e.target.value)}>
              <option value="">Select…</option>
              {CONTACT_METHODS.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>
      </SectionCard>
      )}

      {step === 3 && (
      <SectionCard step={3} title="Operational Contact Details (Manager)">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Full Name</label>
            <input className={inputClass} value={v("operational_contact_name")} onChange={(e) => set("operational_contact_name", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Job Title</label>
            <input className={inputClass} value={v("operational_contact_job_title")} onChange={(e) => set("operational_contact_job_title", e.target.value)} placeholder="e.g. Operations Manager" />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input type="email" className={inputClass} value={v("operational_contact_email")} onChange={(e) => set("operational_contact_email", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Phone</label>
            <input className={inputClass} value={v("operational_contact_phone")} onChange={(e) => set("operational_contact_phone", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Preferred Communication Method</label>
            <select className={inputClass} value={v("operational_contact_method")} onChange={(e) => set("operational_contact_method", e.target.value)}>
              <option value="">Select…</option>
              {CONTACT_METHODS.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>
      </SectionCard>
      )}

      {step === 4 && (
      <SectionCard step={4} title="Industry Focus">
        <div className="grid sm:grid-cols-2 gap-3">
          {INDUSTRY_OPTIONS.map((s) => (
            <label key={s} className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-colors ${industries.includes(s) ? "border-[#2563EB] bg-[#2563EB]/5" : "border-[#D8D5CF] bg-white hover:border-[#94A3B8]"}`}>
              <input type="checkbox" checked={industries.includes(s)} onChange={() => toggleIndustry(s)} className="w-4 h-4 accent-[#2563EB]" />
              <span className="text-sm text-[#334155]">{s}</span>
            </label>
          ))}
        </div>
        <div>
          <label className={labelClass}>Any Others</label>
          <input className={inputClass} value={v("other_industries")} onChange={(e) => set("other_industries", e.target.value)} placeholder="Anything not listed above" />
        </div>
      </SectionCard>
      )}

      {step === 5 && (
      <SectionCard step={5} title="Services Offered">
        <div className="grid sm:grid-cols-2 gap-3">
          {SERVICE_OPTIONS.map((s) => (
            <label key={s} className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-colors ${services.includes(s) ? "border-[#2563EB] bg-[#2563EB]/5" : "border-[#D8D5CF] bg-white hover:border-[#94A3B8]"}`}>
              <input type="checkbox" checked={services.includes(s)} onChange={() => toggleService(s)} className="w-4 h-4 accent-[#2563EB]" />
              <span className="text-sm text-[#334155]">{s}</span>
            </label>
          ))}
        </div>
        <div>
          <label className={labelClass}>Other Services</label>
          <input className={inputClass} value={v("other_services")} onChange={(e) => set("other_services", e.target.value)} placeholder="Anything not listed above" />
        </div>
      </SectionCard>
      )}

      {step === 6 && (
      <SectionCard step={6} title="Technical Expertise">
        <div>
          <label className={labelClass}>Primary Tech Stack</label>
          <input className={inputClass} value={v("primary_stack")} onChange={(e) => set("primary_stack", e.target.value)} placeholder="e.g. React, Node.js, PostgreSQL" />
        </div>
        <div>
          <label className={labelClass}>Secondary Tech Stack</label>
          <input className={inputClass} value={v("secondary_stack")} onChange={(e) => set("secondary_stack", e.target.value)} />
        </div>
        <div>
          <label className={labelClass}>Specialised Skills</label>
          <input className={inputClass} value={v("specialised_skills")} onChange={(e) => set("specialised_skills", e.target.value)} placeholder="AI, Blockchain, IoT, AR/VR, etc." />
        </div>
      </SectionCard>
      )}

      {step === 7 && (
      <SectionCard step={7} title="Portfolio & Experience">
        <div>
          <label className={labelClass}>Key Projects Delivered</label>
          <textarea className={inputClass} rows={3} value={v("key_projects")} onChange={(e) => set("key_projects", e.target.value)} />
        </div>
        <div>
          <label className={labelClass}>Industries Served</label>
          <input className={inputClass} value={v("industries_served")} onChange={(e) => set("industries_served", e.target.value)} placeholder="e.g. Fintech, Healthcare, Retail" />
        </div>
        <div>
          <label className={labelClass}>Case Studies / Portfolio Links</label>
          <textarea className={inputClass} rows={2} value={v("portfolio_links")} onChange={(e) => set("portfolio_links", e.target.value)} placeholder="One URL per line" />
        </div>
      </SectionCard>
      )}

      {step === 8 && (
      <SectionCard step={8} title="Team & Capacity">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Total Technical Staff</label>
            <input className={inputClass} value={v("total_tech_staff")} onChange={(e) => set("total_tech_staff", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Monthly Delivery Capacity</label>
            <input className={inputClass} value={v("monthly_capacity")} onChange={(e) => set("monthly_capacity", e.target.value)} placeholder="Hours or team availability" />
          </div>
        </div>
        <div>
          <label className={labelClass}>Team Structure</label>
          <input className={inputClass} value={v("team_structure")} onChange={(e) => set("team_structure", e.target.value)} placeholder="Developers, QA, PMs, Designers, DevOps…" />
        </div>
      </SectionCard>
      )}

      {step === 9 && (
      <SectionCard step={9} title="Pricing & Engagement Model">
        <div>
          <label className={labelClass}>Hourly Rate Range</label>
          <input className={inputClass} value={v("hourly_rate")} onChange={(e) => set("hourly_rate", e.target.value)} placeholder="e.g. $25–$50/hr" />
        </div>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2 text-sm text-[#334155]">
            <input type="checkbox" checked={fixedPrice} onChange={(e) => setFixedPrice(e.target.checked)} className="w-4 h-4 accent-[#2563EB]" />
            Offers fixed-price projects
          </label>
          <label className="flex items-center gap-2 text-sm text-[#334155]">
            <input type="checkbox" checked={retainer} onChange={(e) => setRetainer(e.target.checked)} className="w-4 h-4 accent-[#2563EB]" />
            Offers retainer model
          </label>
        </div>
        <div>
          <label className={labelClass}>Minimum Project Size</label>
          <input className={inputClass} value={v("min_project_size")} onChange={(e) => set("min_project_size", e.target.value)} />
        </div>
      </SectionCard>
      )}

      {step === 10 && (
      <SectionCard step={10} title="Payment Terms">
        <p className="text-sm text-[#64748B] -mt-2">
          All payments will become due as per agreed milestone &amp; acceptance of work by client.
        </p>
        <div className="flex flex-wrap gap-3">
          {PAYMENT_TERMS_OPTIONS.map((t) => (
            <label key={t} className={`flex items-center gap-2 px-4 py-3 rounded-xl border cursor-pointer transition-colors ${v("payment_terms") === t ? "border-[#2563EB] bg-[#2563EB]/5" : "border-[#D8D5CF] bg-white hover:border-[#94A3B8]"}`}>
              <input type="radio" name="payment_terms" checked={v("payment_terms") === t} onChange={() => set("payment_terms", t)} className="w-4 h-4 accent-[#2563EB]" />
              <span className="text-sm text-[#334155]">{t}</span>
            </label>
          ))}
        </div>
      </SectionCard>
      )}

      {step === 11 && (
      <SectionCard step={11} title="Compliance & Certifications">
        <div>
          <label className={labelClass}>Security Certifications</label>
          <input className={inputClass} value={v("security_certs")} onChange={(e) => set("security_certs", e.target.value)} placeholder="ISO, SOC2, etc." />
        </div>
        <div>
          <label className={labelClass}>Data Protection Compliance</label>
          <input className={inputClass} value={v("data_compliance")} onChange={(e) => set("data_compliance", e.target.value)} placeholder="GDPR, HIPAA, etc." />
        </div>
        <div>
          <label className={labelClass}>Insurance Coverage</label>
          <input className={inputClass} value={v("insurance")} onChange={(e) => set("insurance", e.target.value)} placeholder="Professional Liability, Cyber Insurance" />
        </div>
      </SectionCard>
      )}

      {step === 12 && (
      <SectionCard step={12} title="Operational Details">
        <div>
          <label className={labelClass}>Preferred PM Methodology</label>
          <select className={inputClass} value={v("pm_methodology")} onChange={(e) => set("pm_methodology", e.target.value)}>
            <option value="">Select…</option>
            {PM_METHODOLOGIES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>Tools Used</label>
          <input className={inputClass} value={v("tools_used")} onChange={(e) => set("tools_used", e.target.value)} placeholder="Jira, Asana, GitHub, Slack…" />
        </div>
        <div>
          <label className={labelClass}>Time Zone & Working Hours</label>
          <input className={inputClass} value={v("timezone_hours")} onChange={(e) => set("timezone_hours", e.target.value)} placeholder="e.g. GMT+5, 9am–6pm" />
        </div>
      </SectionCard>
      )}

      {step === 13 && (
      <SectionCard step={13} title="Additional Information">
        <div>
          <label className={labelClass}>Your Own Solutions (SaaS)</label>
          <textarea className={inputClass} rows={2} value={v("own_saas")} onChange={(e) => set("own_saas", e.target.value)} placeholder="List any SaaS products you own" />
        </div>
        <div>
          <label className={labelClass}>Clients & Additional Notes</label>
          <textarea className={inputClass} rows={3} value={v("client_notes")} onChange={(e) => set("client_notes", e.target.value)} />
        </div>
      </SectionCard>
      )}

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
          {error}
        </p>
      )}
      {savedNote && (
        <p className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg px-4 py-3">
          {savedNote}
        </p>
      )}

      <div className="sticky bottom-4 flex flex-col sm:flex-row gap-3 bg-white/90 backdrop-blur rounded-2xl border border-[#E2E8F0] shadow-lg p-4">
        {step > 1 && (
          <button
            onClick={() => setStep((s) => s - 1)}
            className="flex-1 flex items-center justify-center gap-2 border border-[#D8D5CF] text-[#334155] font-semibold py-3 rounded-xl hover:border-[#94A3B8] transition-colors"
          >
            Back
          </button>
        )}
        <button
          onClick={() => persist(false)}
          disabled={saving || submitting}
          className="flex-1 flex items-center justify-center gap-2 border border-[#2563EB] text-[#2563EB] font-semibold py-3 rounded-xl hover:bg-[#2563EB]/5 disabled:opacity-60 transition-colors"
        >
          {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
          Save draft
        </button>
        {step < TOTAL_STEPS ? (
          <button
            onClick={() => setStep((s) => s + 1)}
            className="flex-1 flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold py-3 rounded-xl transition-colors"
          >
            Continue
          </button>
        ) : (
          <button
            onClick={() => persist(true)}
            disabled={saving || submitting}
            className="flex-1 flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold py-3 rounded-xl disabled:opacity-60 transition-colors"
          >
            {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
            Submit for review
          </button>
        )}
      </div>
    </div>
  );
}
