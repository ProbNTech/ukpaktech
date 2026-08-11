"use client";

import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Loader2,
  Check,
  X,
  Building2,
  RefreshCw,
  Eye,
  Plus,
  Pencil,
  Undo2,
  Trash2,
  Inbox,
  MailCheck,
  ClipboardList,
  CheckCircle2,
  LayoutDashboard,
  LogOut,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { VendorFormModal } from "@/components/portfolio/VendorFormModal";
import { Pagination } from "@/components/directory/Pagination";

const STATUS_TABS = [
  { key: "pending", label: "Membership requests", icon: Inbox, accent: "#D97706" },
  { key: "invited", label: "Members (profile pending)", icon: MailCheck, accent: "#2563EB" },
  { key: "portfolio_pending", label: "Portfolio review", icon: ClipboardList, accent: "#7C3AED" },
  { key: "listed", label: "Listed", icon: CheckCircle2, accent: "#059669" },
  { key: "trash", label: "Trash", icon: Trash2, accent: "#DC2626" },
] as const;

const PAGE_SIZE = 30;

interface VendorRow {
  id: string;
  status: string;
  slug: string;
  company_name: string;
  website?: string;
  company_type?: string;
  contact_name?: string;
  contact_email?: string;
  contact_phone?: string;
  services?: string[];
  primary_stack?: string;
  industries_served?: string;
  business_address?: string;
  key_projects?: string;
  team_structure?: string;
  updated_at?: string;
  deleted_at?: string | null;
  [k: string]: unknown;
}

const KEY_STORAGE = "uptech:portfolioAdminKey";

function formatDate(value?: string | null): string {
  if (!value) return "—";
  const d = new Date(value);
  return Number.isNaN(d.getTime())
    ? "—"
    : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

/**
 * Grouped, section-labelled detail view — every field the Edit modal can write,
 * shown read-only here so View always reflects the full stored record, not a subset.
 */
function VendorDetailPanel({ v }: { v: VendorRow }) {
  const groups: [string, [string, unknown][]][] = [
    [
      "Status & Identity",
      [
        ["Status", v.status],
        ["Slug", v.slug],
      ],
    ],
    [
      "Company Information",
      [
        ["Company Type", v.company_type],
        ["Company Size", v.company_size],
        ["Year Established", v.year_established],
        ["Country", v.country],
        ["City", v.city],
        ["Registration No.", v.registration_no],
        ["Postal Code", v.postal_code],
        ["Org Phone", v.org_phone],
        ["WhatsApp", v.whatsapp],
        ["Business Address", v.business_address],
        ["Short Description", v.short_description],
      ],
    ],
    [
      "Primary Contact",
      [
        ["Name", v.contact_name],
        ["Job Title", v.contact_job_title],
        ["Email", v.contact_email],
        ["Phone", v.contact_phone],
        ["Nationality", v.contact_nationality],
        ["Preferred Communication", v.preferred_contact_method],
      ],
    ],
    [
      "Operational Contact",
      [
        ["Name", v.operational_contact_name],
        ["Job Title", v.operational_contact_job_title],
        ["Email", v.operational_contact_email],
        ["Phone", v.operational_contact_phone],
        ["Preferred Communication", v.operational_contact_method],
      ],
    ],
    [
      "Industry & Services",
      [
        [
          "Industry Focus",
          [...(Array.isArray(v.industries) ? v.industries : []), v.other_industries].filter(Boolean).join(", "),
        ],
        ["Services", [...(v.services ?? []), v.other_services].filter(Boolean).join(", ")],
      ],
    ],
    [
      "Expertise & Portfolio",
      [
        ["Primary Stack", v.primary_stack],
        ["Secondary Stack", v.secondary_stack],
        ["Specialised Skills", v.specialised_skills],
        ["Key Projects Delivered", v.key_projects],
        ["Industries Served", v.industries_served],
        ["Case Studies / Portfolio Links", v.portfolio_links],
      ],
    ],
    [
      "Team, Pricing & Payment",
      [
        ["Total Technical Staff", v.total_tech_staff],
        ["Monthly Delivery Capacity", v.monthly_capacity],
        ["Team Structure", v.team_structure],
        ["Hourly Rate Range", v.hourly_rate],
        ["Minimum Project Size", v.min_project_size],
        ["Fixed-Price Projects", v.fixed_price ? "Yes" : "No"],
        ["Retainer Model", v.retainer ? "Yes" : "No"],
        ["Payment Terms", v.payment_terms],
      ],
    ],
    [
      "Compliance & Operations",
      [
        ["Security Certifications", v.security_certs],
        ["Data Protection Compliance", v.data_compliance],
        ["Insurance Coverage", v.insurance],
        ["Preferred PM Methodology", v.pm_methodology],
        ["Tools Used", v.tools_used],
        ["Time Zone & Working Hours", v.timezone_hours],
      ],
    ],
    [
      "Additional Information",
      [
        ["Own Solutions (SaaS)", v.own_saas],
        ["Clients & Additional Notes", v.client_notes],
        [
          "Consents Accepted",
          [
            v.terms_accepted && "Terms",
            v.membership_terms_accepted && "Membership",
            v.arbitration_accepted && "Arbitration",
          ]
            .filter(Boolean)
            .join(", "),
        ],
      ],
    ],
    [
      "Timeline",
      [
        ["Created", formatDate(v.created_at as string | undefined)],
        ["Invited", formatDate(v.invited_at as string | undefined)],
        ["Approved", formatDate(v.approved_at as string | undefined)],
        ["Last Updated", formatDate(v.updated_at as string | undefined)],
        ["Trashed At", v.deleted_at ? formatDate(v.deleted_at as string) : ""],
      ],
    ],
  ];

  return (
    <div className="p-5 grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {groups.map(([title, fields]) => {
        const visible = fields.filter(([, val]) => val);
        if (!visible.length) return null;
        return (
          <div key={title} className="bg-white rounded-xl border border-[#E2E8F0] p-4">
            <h4 className="text-xs font-bold text-[#2563EB] uppercase tracking-wide mb-2.5">{title}</h4>
            <dl className="space-y-2 text-sm">
              {visible.map(([label, val]) => (
                <div key={String(label)}>
                  <dt className="text-xs text-[#94A3B8]">{String(label)}</dt>
                  <dd className="text-[#0F172A] break-words">{String(val)}</dd>
                </div>
              ))}
            </dl>
          </div>
        );
      })}
      {v.slug && (
        <a
          href={`/portfolio/${v.slug}`}
          target="_blank"
          rel="noreferrer"
          className="sm:col-span-2 xl:col-span-3 inline-flex items-center gap-1.5 text-[#2563EB] font-medium hover:underline text-sm"
        >
          Open public profile →
        </a>
      )}
    </div>
  );
}

export default function PortfolioAdminPage() {
  const [adminKey, setAdminKey] = useState("");
  const [authed, setAuthed] = useState(false);
  const [tab, setTab] = useState<string>("pending");
  const [page, setPage] = useState(1);
  const [vendors, setVendors] = useState<VendorRow[]>([]);
  const [total, setTotal] = useState(0);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [acting, setActing] = useState<string | null>(null);
  const [modal, setModal] = useState<{ mode: "create" | "edit"; vendor?: VendorRow | null } | null>(null);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem(KEY_STORAGE) : null;
    if (saved) {
      setAdminKey(saved);
      setAuthed(true);
    }
  }, []);

  // Guards against out-of-order responses: an older, slower (possibly failing) request
  // can otherwise resolve after a newer one and clobber good state with a stale error.
  const requestId = useRef(0);

  const load = useCallback(async (key: string, status: string, pageArg: number) => {
    const id = ++requestId.current;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `/api/portfolio/admin?status=${status}&page=${pageArg}&pageSize=${PAGE_SIZE}`,
        { headers: { "x-admin-key": key } }
      );
      if (id !== requestId.current) return;
      if (res.status === 401) {
        setError("Wrong admin key.");
        setAuthed(false);
        localStorage.removeItem(KEY_STORAGE);
        return;
      }
      const data = await res.json();
      if (id !== requestId.current) return;
      if (!res.ok) throw new Error(data.error || "Failed to load.");
      if ((data.vendors ?? []).length === 0 && pageArg > 1) {
        setPage(pageArg - 1);
        return;
      }
      setVendors(data.vendors || []);
      setTotal(data.total ?? 0);
      setCounts(data.counts ?? {});
      localStorage.setItem(KEY_STORAGE, key);
    } catch (err) {
      if (id !== requestId.current) return;
      setError(err instanceof Error ? err.message : "Failed to load.");
    } finally {
      if (id === requestId.current) setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authed && adminKey) load(adminKey, tab, page);
  }, [authed, adminKey, tab, page, load]);

  function switchTab(key: string) {
    if (key === tab) return;
    setExpanded(null);
    setTab(key);
    setPage(1);
  }

  /** Fully signs out: clears the in-memory key too, so the login form is genuinely empty
   * and submitting it again requires retyping (not just re-submitting stale state). */
  function signOut() {
    setAuthed(false);
    setAdminKey("");
    setVendors([]);
    setTotal(0);
    setCounts({});
    setExpanded(null);
    setError("");
    setTab("pending");
    setPage(1);
    localStorage.removeItem(KEY_STORAGE);
  }

  async function act(
    id: string,
    action: "approve" | "approve-portfolio" | "reject" | "unlist" | "restore" | "permanent-delete"
  ) {
    setActing(id);
    try {
      const res = await fetch("/api/portfolio/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-key": adminKey },
        body: JSON.stringify({ id, action }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Action failed.");
      await load(adminKey, tab, page);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Action failed.");
    } finally {
      setActing(null);
    }
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setAuthed(true);
          }}
          className="w-full max-w-sm bg-white rounded-2xl border border-[#E2E8F0] shadow-xl p-8 space-y-5"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#2563EB] flex items-center justify-center shrink-0">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <h1 className="font-heading font-bold text-xl text-[#0F172A]">UPTECH Admin</h1>
          </div>
          <input
            type="password"
            value={adminKey}
            onChange={(e) => setAdminKey(e.target.value)}
            placeholder="Admin key"
            className="w-full px-4 py-3 rounded-xl border border-[#D8D5CF] focus:outline-none focus:border-[#2563EB]"
            autoFocus
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold py-3 rounded-xl transition-colors">
            Enter
          </button>
        </form>
      </div>
    );
  }

  const isTrash = tab === "trash";
  const activeTabMeta = STATUS_TABS.find((t) => t.key === tab) ?? STATUS_TABS[0];
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <div className="min-h-screen bg-[#F1F5F9] lg:flex lg:h-screen lg:overflow-hidden">
      {/* ── Sidebar ──
          Pinned via a fixed-height flex shell (not `position: sticky`) so it stays put
          regardless of the global `overflow-x: hidden` on html/body, which can otherwise
          break sticky positioning. Only the content pane to the right scrolls. */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:shrink-0 bg-[#0F172A] text-white lg:h-full">
        <div className="px-6 py-6 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.svg"
              alt="UPTECH logo"
              width={40}
              height={40}
              className="h-9 w-auto object-contain shrink-0"
            />
            <div className="min-w-0">
              <p className="font-heading font-bold text-sm leading-none truncate text-white">UPTECH Admin</p>
              <p className="text-xs text-white/50 mt-1">Portfolio pipeline</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {STATUS_TABS.map((t) => {
            const Icon = t.icon;
            const active = tab === t.key;
            const count = counts[t.key] ?? 0;
            return (
              <button
                key={t.key}
                onClick={() => switchTab(t.key)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" style={{ color: active ? t.accent : undefined }} />
                <span className="flex-1 text-left truncate">{t.label}</span>
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    active ? "bg-white/15" : "bg-white/5 text-white/50"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="px-3 py-4 border-t border-white/10 space-y-1">
          <button
            onClick={() => setModal({ mode: "create" })}
            className="w-full inline-flex items-center gap-2 justify-center bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-medium px-3 py-2.5 rounded-xl transition-colors"
          >
            <Plus className="w-4 h-4" /> Add company
          </button>
          <button
            onClick={signOut}
            className="w-full inline-flex items-center gap-2 justify-center bg-red-600/10 border border-red-600/30 text-red-400 hover:bg-red-600 hover:border-red-600 hover:text-white text-sm font-medium px-3 py-2.5 rounded-xl transition-colors"
          >
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="flex-1 min-w-0 lg:h-full lg:overflow-y-auto">
        <div className="sticky top-0 z-20 bg-white border-b border-[#E2E8F0] px-4 sm:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <h1 className="font-heading font-bold text-lg text-[#0F172A] truncate">{activeTabMeta.label}</h1>
              <p className="text-sm text-[#64748B] mt-0.5">
                {total} {total === 1 ? "company" : "companies"}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setModal({ mode: "create" })}
                className="lg:hidden inline-flex items-center gap-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-medium px-3 py-2 rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4" /> Add
              </button>
              <button
                onClick={() => load(adminKey, tab, page)}
                className="inline-flex items-center gap-2 text-sm text-[#64748B] hover:text-[#0F172A] px-3 py-2 rounded-lg hover:bg-[#F1F5F9] transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} /> Refresh
              </button>
              <button
                onClick={signOut}
                className="lg:hidden inline-flex items-center gap-1.5 text-sm text-red-600 border border-red-200 hover:bg-red-600 hover:border-red-600 hover:text-white px-3 py-2 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile tab strip */}
          <div className="lg:hidden flex gap-2 mt-4 overflow-x-auto pb-1 -mx-1 px-1">
            {STATUS_TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => switchTab(t.key)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  tab === t.key
                    ? "bg-[#0F172A] text-white border-[#0F172A]"
                    : "bg-white text-[#64748B] border-[#E2E8F0]"
                }`}
              >
                {t.label} <span className="opacity-70">{counts[t.key] ?? 0}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 sm:px-8 py-6 max-w-7xl mx-auto">
          {/* Stat cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
            {STATUS_TABS.map((t) => {
              const Icon = t.icon;
              const active = tab === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => switchTab(t.key)}
                  className={`text-left bg-white rounded-2xl border p-4 transition-all ${
                    active ? "border-[#2563EB] shadow-md" : "border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-sm"
                  }`}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${t.accent}1A` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: t.accent }} />
                  </div>
                  <p className="font-heading font-bold text-2xl text-[#0F172A] leading-none">
                    {counts[t.key] ?? 0}
                  </p>
                  <p className="text-xs text-[#64748B] mt-1.5 truncate">{t.label}</p>
                </button>
              );
            })}
          </div>

          {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

          {loading && vendors.length === 0 ? (
            <div className="text-center py-20 text-[#64748B]">
              <Loader2 className="w-7 h-7 animate-spin mx-auto mb-3 text-[#2563EB]" /> Loading…
            </div>
          ) : vendors.length === 0 ? (
            <div className="text-center py-20 text-[#64748B] bg-white rounded-2xl border border-[#E2E8F0]">
              Nothing here.
            </div>
          ) : (
            <div className="relative" aria-busy={loading}>
              {loading && (
                <div className="absolute inset-0 z-10 flex items-start justify-center pt-16 bg-white/60 backdrop-blur-[1px] rounded-2xl">
                  <Loader2 className="w-7 h-7 text-[#2563EB] animate-spin" aria-label="Loading…" />
                </div>
              )}

              <div
                className={`bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden transition-opacity ${
                  loading ? "opacity-60" : ""
                }`}
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                        <th className="text-left font-semibold text-[#64748B] text-xs uppercase tracking-wide px-5 py-3">
                          Company
                        </th>
                        <th className="text-left font-semibold text-[#64748B] text-xs uppercase tracking-wide px-5 py-3 hidden md:table-cell">
                          Type
                        </th>
                        <th className="text-left font-semibold text-[#64748B] text-xs uppercase tracking-wide px-5 py-3 hidden lg:table-cell">
                          Contact
                        </th>
                        <th className="text-left font-semibold text-[#64748B] text-xs uppercase tracking-wide px-5 py-3 hidden xl:table-cell">
                          Updated
                        </th>
                        <th className="text-right font-semibold text-[#64748B] text-xs uppercase tracking-wide px-5 py-3">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F1F5F9]">
                      {vendors.map((v) => {
                        const isOpen = expanded === v.id;
                        return (
                          <Fragment key={v.id}>
                            <tr className="hover:bg-[#F8FAFC]/70 transition-colors align-top">
                              <td className="px-5 py-4">
                                <div className="flex items-center gap-3 min-w-[180px]">
                                  {v.logo_url ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                      src={String(v.logo_url)}
                                      alt=""
                                      className="w-10 h-10 object-contain rounded-lg border border-[#F1F5F9] shrink-0"
                                    />
                                  ) : (
                                    <div className="w-10 h-10 rounded-lg bg-[#F1F5F9] flex items-center justify-center shrink-0">
                                      <Building2 className="w-4 h-4 text-[#94A3B8]" />
                                    </div>
                                  )}
                                  <div className="min-w-0">
                                    <p className="font-semibold text-[#0F172A] truncate">{v.company_name}</p>
                                    <p className="text-xs text-[#64748B] truncate md:hidden">
                                      {v.company_type || v.contact_email}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-5 py-4 hidden md:table-cell text-[#334155]">
                                {v.company_type || "—"}
                              </td>
                              <td className="px-5 py-4 hidden lg:table-cell">
                                <p className="text-[#0F172A] truncate max-w-[220px]">{v.contact_name || "—"}</p>
                                <p className="text-xs text-[#64748B] truncate max-w-[220px]">{v.contact_email}</p>
                              </td>
                              <td className="px-5 py-4 hidden xl:table-cell text-[#64748B] text-xs whitespace-nowrap">
                                {formatDate(v.updated_at)}
                              </td>
                              <td className="px-5 py-4">
                                <div className="flex flex-wrap items-center justify-end gap-1.5">
                                  <button
                                    onClick={() => setExpanded(isOpen ? null : v.id)}
                                    className="inline-flex items-center gap-1 text-xs font-medium text-[#64748B] hover:text-[#2563EB] px-2 py-1.5 rounded-lg hover:bg-[#F1F5F9] transition-colors"
                                  >
                                    <Eye className="w-3.5 h-3.5" />
                                    {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                                  </button>
                                  {!isTrash && (
                                    <button
                                      onClick={() => setModal({ mode: "edit", vendor: v })}
                                      className="inline-flex items-center gap-1 bg-white border border-[#D8D5CF] text-[#334155] hover:border-[#2563EB] hover:text-[#2563EB] text-xs font-medium px-2.5 py-1.5 rounded-lg transition-colors"
                                    >
                                      <Pencil className="w-3.5 h-3.5" /> Edit
                                    </button>
                                  )}
                                  {tab === "pending" && (
                                    <button
                                      disabled={acting === v.id}
                                      onClick={() => act(v.id, "approve")}
                                      className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium px-2.5 py-1.5 rounded-lg disabled:opacity-60"
                                    >
                                      <Check className="w-3.5 h-3.5" /> Approve &amp; invite
                                    </button>
                                  )}
                                  {tab === "invited" && (
                                    <span className="text-xs text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-1.5 rounded-lg whitespace-nowrap">
                                      Awaiting profile
                                    </span>
                                  )}
                                  {tab === "portfolio_pending" && (
                                    <button
                                      disabled={acting === v.id}
                                      onClick={() => act(v.id, "approve-portfolio")}
                                      className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium px-2.5 py-1.5 rounded-lg disabled:opacity-60"
                                    >
                                      <Check className="w-3.5 h-3.5" /> Approve &amp; list
                                    </button>
                                  )}
                                  {tab === "listed" && (
                                    <button
                                      disabled={acting === v.id}
                                      onClick={() => act(v.id, "unlist")}
                                      className="inline-flex items-center gap-1 bg-white border border-amber-200 text-amber-700 hover:bg-amber-50 text-xs font-medium px-2.5 py-1.5 rounded-lg disabled:opacity-60"
                                    >
                                      Unlist
                                    </button>
                                  )}
                                  {isTrash ? (
                                    <>
                                      <button
                                        disabled={acting === v.id}
                                        onClick={() => act(v.id, "restore")}
                                        className="inline-flex items-center gap-1 bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50 text-xs font-medium px-2.5 py-1.5 rounded-lg disabled:opacity-60"
                                      >
                                        <Undo2 className="w-3.5 h-3.5" /> Restore
                                      </button>
                                      <button
                                        disabled={acting === v.id}
                                        onClick={() => {
                                          if (
                                            window.confirm(
                                              `Permanently delete ${v.company_name} and its logo? This cannot be undone.`
                                            )
                                          )
                                            act(v.id, "permanent-delete");
                                        }}
                                        className="inline-flex items-center gap-1 bg-white border border-red-200 text-red-600 hover:bg-red-50 text-xs font-medium px-2.5 py-1.5 rounded-lg disabled:opacity-60"
                                      >
                                        <Trash2 className="w-3.5 h-3.5" /> Delete Permanently
                                      </button>
                                    </>
                                  ) : (
                                    <button
                                      disabled={acting === v.id}
                                      onClick={() => {
                                        const confirmMsg =
                                          tab === "listed"
                                            ? `Delete ${v.company_name}? This moves it to Trash.`
                                            : `Move ${v.company_name} to Trash?`;
                                        if (window.confirm(confirmMsg)) act(v.id, "reject");
                                      }}
                                      className="inline-flex items-center gap-1 bg-white border border-red-200 text-red-600 hover:bg-red-50 text-xs font-medium px-2.5 py-1.5 rounded-lg disabled:opacity-60"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                      {tab === "listed" ? "Delete" : "Reject & delete"}
                                    </button>
                                  )}
                                </div>
                              </td>
                            </tr>
                            {isOpen && (
                              <tr>
                                <td colSpan={5} className="bg-[#F8FAFC] border-t border-b border-[#F1F5F9] p-0">
                                  <VendorDetailPanel v={v} />
                                </td>
                              </tr>
                            )}
                          </Fragment>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {totalPages > 1 && (
            <div className={`mt-6 transition-opacity ${loading ? "opacity-50 pointer-events-none" : ""}`}>
              <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
            </div>
          )}
        </div>
      </div>

      {modal && (
        <VendorFormModal
          mode={modal.mode}
          vendor={modal.vendor}
          adminKey={adminKey}
          onClose={() => setModal(null)}
          onSaved={() => {
            setModal(null);
            load(adminKey, tab, page);
          }}
        />
      )}
    </div>
  );
}
