"use client";

import { useEffect, useState } from "react";
import { Loader2, X } from "lucide-react";

const STATUS_OPTIONS = ["pending", "invited", "portfolio_pending", "listed"];
const COMPANY_TYPES = ["Software House", "Agency", "Consultancy", "Outsourcing", "Other"];
const COMPANY_SIZES = ["1-10", "11-50", "51-200", "201-500", "500+"];
const CONTACT_METHODS = ["Email", "Phone", "WhatsApp", "Teams", "Slack"];
const PM_METHODOLOGIES = ["Agile", "Scrum", "Kanban", "Hybrid"];
const PAYMENT_TERMS_OPTIONS = ["Immediately", "30 days", "45 days"];
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

const STRING_FIELDS = [
  "status",
  "slug",
  "company_name",
  "website",
  "company_type",
  "company_size",
  "year_established",
  "country",
  "city",
  "business_address",
  "postal_code",
  "registration_no",
  "org_phone",
  "whatsapp",
  "short_description",
  "logo_url",
  "contact_name",
  "contact_job_title",
  "contact_email",
  "contact_phone",
  "contact_nationality",
  "preferred_contact_method",
  "operational_contact_name",
  "operational_contact_job_title",
  "operational_contact_email",
  "operational_contact_phone",
  "operational_contact_method",
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
] as const;

const inputClass =
  "w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#D8D5CF] text-[#0F172A] text-sm focus:outline-none focus:ring-4 focus:ring-[#2563EB]/15 focus:border-[#2563EB] transition-all";
const labelClass = "block text-xs font-semibold text-[#64748B] mb-1.5 uppercase tracking-wide";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="border border-[#E2E8F0] rounded-xl p-4 space-y-4">
      <legend className="px-2 text-sm font-bold text-[#0F172A]">{title}</legend>
      {children}
    </fieldset>
  );
}

interface VendorFormModalProps {
  mode: "create" | "edit";
  vendor?: Record<string, unknown> | null;
  adminKey: string;
  onClose: () => void;
  onSaved: () => void;
}

export function VendorFormModal({ mode, vendor, adminKey, onClose, onSaved }: VendorFormModalProps) {
  const [form, setForm] = useState<Record<string, string>>({ status: "listed" });
  const [services, setServices] = useState<string[]>([]);
  const [industries, setIndustries] = useState<string[]>([]);
  const [fixedPrice, setFixedPrice] = useState(false);
  const [retainer, setRetainer] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [membershipTermsAccepted, setMembershipTermsAccepted] = useState(false);
  const [arbitrationAccepted, setArbitrationAccepted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const v = (k: string) => form[k] ?? "";
  const set = (k: string, val: string) => setForm((f) => ({ ...f, [k]: val }));

  useEffect(() => {
    if (!vendor) return;
    const next: Record<string, string> = {};
    for (const f of STRING_FIELDS) {
      if (vendor[f] != null) next[f] = String(vendor[f]);
    }
    setForm(next);
    setServices(Array.isArray(vendor.services) ? (vendor.services as string[]) : []);
    setIndustries(Array.isArray(vendor.industries) ? (vendor.industries as string[]) : []);
    setFixedPrice(vendor.fixed_price === true);
    setRetainer(vendor.retainer === true);
    setTermsAccepted(vendor.terms_accepted === true);
    setMembershipTermsAccepted(vendor.membership_terms_accepted === true);
    setArbitrationAccepted(vendor.arbitration_accepted === true);
  }, [vendor]);

  function toggle(list: string[], setList: (v: string[]) => void, item: string) {
    setList(list.includes(item) ? list.filter((x) => x !== item) : [...list, item]);
  }

  async function save() {
    setSaving(true);
    setError("");
    try {
      const payload = {
        ...form,
        services,
        industries,
        fixed_price: fixedPrice,
        retainer,
        terms_accepted: termsAccepted,
        membership_terms_accepted: membershipTermsAccepted,
        arbitration_accepted: arbitrationAccepted,
      };
      const res = await fetch("/api/portfolio/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-key": adminKey },
        body: JSON.stringify(
          mode === "create"
            ? { action: "create", vendor: payload }
            : { action: "update", id: vendor?.id, vendor: payload }
        ),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed.");
      onSaved();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-start justify-center overflow-y-auto py-8 px-4">
      <div className="w-full max-w-4xl bg-[#F8FAFC] rounded-2xl shadow-xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0] bg-white rounded-t-2xl sticky top-0 z-10">
          <h2 className="font-heading font-bold text-lg text-[#0F172A]">
            {mode === "create" ? "Add New Vendor" : `Edit — ${vendor?.company_name ?? ""}`}
          </h2>
          <button onClick={onClose} className="text-[#64748B] hover:text-[#0F172A]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">{error}</p>
          )}

          <Section title="Status & Identity">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Status</label>
                <select className={inputClass} value={v("status")} onChange={(e) => set("status", e.target.value)}>
                  {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>Slug (public URL)</label>
                <input className={inputClass} value={v("slug")} onChange={(e) => set("slug", e.target.value)} placeholder="auto-generated if left blank" />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass}>Company Name *</label>
                <input className={inputClass} value={v("company_name")} onChange={(e) => set("company_name", e.target.value)} />
              </div>
            </div>
          </Section>

          <Section title="Company Information">
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label className={labelClass}>Website</label><input className={inputClass} value={v("website")} onChange={(e) => set("website", e.target.value)} /></div>
              <div>
                <label className={labelClass}>Company Type</label>
                <select className={inputClass} value={v("company_type")} onChange={(e) => set("company_type", e.target.value)}>
                  <option value="">Select…</option>
                  {COMPANY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>Company Size</label>
                <select className={inputClass} value={v("company_size")} onChange={(e) => set("company_size", e.target.value)}>
                  <option value="">Select…</option>
                  {COMPANY_SIZES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div><label className={labelClass}>Year Established</label><input className={inputClass} value={v("year_established")} onChange={(e) => set("year_established", e.target.value)} /></div>
              <div><label className={labelClass}>Country</label><input className={inputClass} value={v("country")} onChange={(e) => set("country", e.target.value)} /></div>
              <div><label className={labelClass}>City</label><input className={inputClass} value={v("city")} onChange={(e) => set("city", e.target.value)} /></div>
              <div><label className={labelClass}>Registration No.</label><input className={inputClass} value={v("registration_no")} onChange={(e) => set("registration_no", e.target.value)} /></div>
              <div><label className={labelClass}>Postal Code</label><input className={inputClass} value={v("postal_code")} onChange={(e) => set("postal_code", e.target.value)} /></div>
              <div><label className={labelClass}>Org Phone</label><input className={inputClass} value={v("org_phone")} onChange={(e) => set("org_phone", e.target.value)} /></div>
              <div><label className={labelClass}>WhatsApp</label><input className={inputClass} value={v("whatsapp")} onChange={(e) => set("whatsapp", e.target.value)} /></div>
              <div className="sm:col-span-2"><label className={labelClass}>Business Address</label><textarea className={inputClass} rows={2} value={v("business_address")} onChange={(e) => set("business_address", e.target.value)} /></div>
              <div className="sm:col-span-2"><label className={labelClass}>Short Description</label><textarea className={inputClass} rows={2} value={v("short_description")} onChange={(e) => set("short_description", e.target.value)} /></div>
              <div className="sm:col-span-2"><label className={labelClass}>Logo URL</label><input className={inputClass} value={v("logo_url")} onChange={(e) => set("logo_url", e.target.value)} placeholder="https://…" /></div>
            </div>
          </Section>

          <Section title="Primary Contact (President, CTO, COO)">
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label className={labelClass}>Full Name</label><input className={inputClass} value={v("contact_name")} onChange={(e) => set("contact_name", e.target.value)} /></div>
              <div><label className={labelClass}>Job Title</label><input className={inputClass} value={v("contact_job_title")} onChange={(e) => set("contact_job_title", e.target.value)} /></div>
              <div><label className={labelClass}>Email</label><input className={inputClass} value={v("contact_email")} onChange={(e) => set("contact_email", e.target.value)} /></div>
              <div><label className={labelClass}>Phone</label><input className={inputClass} value={v("contact_phone")} onChange={(e) => set("contact_phone", e.target.value)} /></div>
              <div><label className={labelClass}>Nationality</label><input className={inputClass} value={v("contact_nationality")} onChange={(e) => set("contact_nationality", e.target.value)} /></div>
              <div>
                <label className={labelClass}>Preferred Communication</label>
                <select className={inputClass} value={v("preferred_contact_method")} onChange={(e) => set("preferred_contact_method", e.target.value)}>
                  <option value="">Select…</option>
                  {CONTACT_METHODS.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
          </Section>

          <Section title="Operational Contact (Manager)">
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label className={labelClass}>Full Name</label><input className={inputClass} value={v("operational_contact_name")} onChange={(e) => set("operational_contact_name", e.target.value)} /></div>
              <div><label className={labelClass}>Job Title</label><input className={inputClass} value={v("operational_contact_job_title")} onChange={(e) => set("operational_contact_job_title", e.target.value)} /></div>
              <div><label className={labelClass}>Email</label><input className={inputClass} value={v("operational_contact_email")} onChange={(e) => set("operational_contact_email", e.target.value)} /></div>
              <div><label className={labelClass}>Phone</label><input className={inputClass} value={v("operational_contact_phone")} onChange={(e) => set("operational_contact_phone", e.target.value)} /></div>
              <div>
                <label className={labelClass}>Preferred Communication</label>
                <select className={inputClass} value={v("operational_contact_method")} onChange={(e) => set("operational_contact_method", e.target.value)}>
                  <option value="">Select…</option>
                  {CONTACT_METHODS.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
          </Section>

          <Section title="Industry Focus">
            <div className="grid sm:grid-cols-2 gap-2">
              {INDUSTRY_OPTIONS.map((s) => (
                <label key={s} className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer text-sm ${industries.includes(s) ? "border-[#2563EB] bg-[#2563EB]/5" : "border-[#D8D5CF] bg-white"}`}>
                  <input type="checkbox" checked={industries.includes(s)} onChange={() => toggle(industries, setIndustries, s)} className="w-4 h-4 accent-[#2563EB]" />
                  {s}
                </label>
              ))}
            </div>
            <div><label className={labelClass}>Any Others</label><input className={inputClass} value={v("other_industries")} onChange={(e) => set("other_industries", e.target.value)} /></div>
          </Section>

          <Section title="Services Offered">
            <div className="grid sm:grid-cols-2 gap-2">
              {SERVICE_OPTIONS.map((s) => (
                <label key={s} className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer text-sm ${services.includes(s) ? "border-[#2563EB] bg-[#2563EB]/5" : "border-[#D8D5CF] bg-white"}`}>
                  <input type="checkbox" checked={services.includes(s)} onChange={() => toggle(services, setServices, s)} className="w-4 h-4 accent-[#2563EB]" />
                  {s}
                </label>
              ))}
            </div>
            <div><label className={labelClass}>Other Services</label><input className={inputClass} value={v("other_services")} onChange={(e) => set("other_services", e.target.value)} /></div>
          </Section>

          <Section title="Technical Expertise">
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label className={labelClass}>Primary Tech Stack</label><input className={inputClass} value={v("primary_stack")} onChange={(e) => set("primary_stack", e.target.value)} /></div>
              <div><label className={labelClass}>Secondary Tech Stack</label><input className={inputClass} value={v("secondary_stack")} onChange={(e) => set("secondary_stack", e.target.value)} /></div>
              <div className="sm:col-span-2"><label className={labelClass}>Specialised Skills</label><input className={inputClass} value={v("specialised_skills")} onChange={(e) => set("specialised_skills", e.target.value)} /></div>
            </div>
          </Section>

          <Section title="Portfolio & Experience">
            <div><label className={labelClass}>Key Projects Delivered</label><textarea className={inputClass} rows={2} value={v("key_projects")} onChange={(e) => set("key_projects", e.target.value)} /></div>
            <div><label className={labelClass}>Industries Served</label><input className={inputClass} value={v("industries_served")} onChange={(e) => set("industries_served", e.target.value)} /></div>
            <div><label className={labelClass}>Case Studies / Portfolio Links</label><textarea className={inputClass} rows={2} value={v("portfolio_links")} onChange={(e) => set("portfolio_links", e.target.value)} /></div>
          </Section>

          <Section title="Team & Capacity">
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label className={labelClass}>Total Technical Staff</label><input className={inputClass} value={v("total_tech_staff")} onChange={(e) => set("total_tech_staff", e.target.value)} /></div>
              <div><label className={labelClass}>Monthly Delivery Capacity</label><input className={inputClass} value={v("monthly_capacity")} onChange={(e) => set("monthly_capacity", e.target.value)} /></div>
              <div className="sm:col-span-2"><label className={labelClass}>Team Structure</label><input className={inputClass} value={v("team_structure")} onChange={(e) => set("team_structure", e.target.value)} /></div>
            </div>
          </Section>

          <Section title="Pricing & Engagement Model">
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label className={labelClass}>Hourly Rate Range</label><input className={inputClass} value={v("hourly_rate")} onChange={(e) => set("hourly_rate", e.target.value)} /></div>
              <div><label className={labelClass}>Minimum Project Size</label><input className={inputClass} value={v("min_project_size")} onChange={(e) => set("min_project_size", e.target.value)} /></div>
            </div>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2 text-sm text-[#334155]">
                <input type="checkbox" checked={fixedPrice} onChange={(e) => setFixedPrice(e.target.checked)} className="w-4 h-4 accent-[#2563EB]" /> Offers fixed-price projects
              </label>
              <label className="flex items-center gap-2 text-sm text-[#334155]">
                <input type="checkbox" checked={retainer} onChange={(e) => setRetainer(e.target.checked)} className="w-4 h-4 accent-[#2563EB]" /> Offers retainer model
              </label>
            </div>
          </Section>

          <Section title="Payment Terms">
            <div className="flex flex-wrap gap-3">
              {PAYMENT_TERMS_OPTIONS.map((t) => (
                <label key={t} className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer text-sm ${v("payment_terms") === t ? "border-[#2563EB] bg-[#2563EB]/5" : "border-[#D8D5CF] bg-white"}`}>
                  <input type="radio" name="payment_terms" checked={v("payment_terms") === t} onChange={() => set("payment_terms", t)} className="w-4 h-4 accent-[#2563EB]" />
                  {t}
                </label>
              ))}
            </div>
          </Section>

          <Section title="Compliance & Certifications">
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label className={labelClass}>Security Certifications</label><input className={inputClass} value={v("security_certs")} onChange={(e) => set("security_certs", e.target.value)} /></div>
              <div><label className={labelClass}>Data Protection Compliance</label><input className={inputClass} value={v("data_compliance")} onChange={(e) => set("data_compliance", e.target.value)} /></div>
              <div className="sm:col-span-2"><label className={labelClass}>Insurance Coverage</label><input className={inputClass} value={v("insurance")} onChange={(e) => set("insurance", e.target.value)} /></div>
            </div>
          </Section>

          <Section title="Operational Details">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Preferred PM Methodology</label>
                <select className={inputClass} value={v("pm_methodology")} onChange={(e) => set("pm_methodology", e.target.value)}>
                  <option value="">Select…</option>
                  {PM_METHODOLOGIES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div><label className={labelClass}>Time Zone & Working Hours</label><input className={inputClass} value={v("timezone_hours")} onChange={(e) => set("timezone_hours", e.target.value)} /></div>
              <div className="sm:col-span-2"><label className={labelClass}>Tools Used</label><input className={inputClass} value={v("tools_used")} onChange={(e) => set("tools_used", e.target.value)} /></div>
            </div>
          </Section>

          <Section title="Additional Information">
            <div><label className={labelClass}>Own Solutions (SaaS)</label><textarea className={inputClass} rows={2} value={v("own_saas")} onChange={(e) => set("own_saas", e.target.value)} /></div>
            <div><label className={labelClass}>Clients & Additional Notes</label><textarea className={inputClass} rows={2} value={v("client_notes")} onChange={(e) => set("client_notes", e.target.value)} /></div>
          </Section>

          <Section title="Consents">
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2 text-sm text-[#334155]">
                <input type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} className="w-4 h-4 accent-[#2563EB]" /> Terms
              </label>
              <label className="flex items-center gap-2 text-sm text-[#334155]">
                <input type="checkbox" checked={membershipTermsAccepted} onChange={(e) => setMembershipTermsAccepted(e.target.checked)} className="w-4 h-4 accent-[#2563EB]" /> Membership Terms
              </label>
              <label className="flex items-center gap-2 text-sm text-[#334155]">
                <input type="checkbox" checked={arbitrationAccepted} onChange={(e) => setArbitrationAccepted(e.target.checked)} className="w-4 h-4 accent-[#2563EB]" /> Arbitration
              </label>
            </div>
          </Section>
        </div>

        <div className="flex gap-3 px-6 py-4 border-t border-[#E2E8F0] bg-white rounded-b-2xl sticky bottom-0">
          <button onClick={onClose} className="flex-1 border border-[#D8D5CF] text-[#334155] font-semibold py-2.5 rounded-xl hover:border-[#94A3B8] transition-colors">
            Cancel
          </button>
          <button
            onClick={save}
            disabled={saving || !v("company_name").trim()}
            className="flex-1 flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold py-2.5 rounded-xl disabled:opacity-60 transition-colors"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
            {mode === "create" ? "Create Vendor" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
