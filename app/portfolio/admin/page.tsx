"use client";

import { useCallback, useEffect, useState } from "react";
import { Loader2, Check, X, Building2, RefreshCw, Eye } from "lucide-react";

const STATUS_TABS = [
  { key: "pending", label: "Membership requests" },
  { key: "invited", label: "Members (profile pending)" },
  { key: "portfolio_pending", label: "Portfolio review" },
  { key: "listed", label: "Listed" },
] as const;

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
  [k: string]: unknown;
}

const KEY_STORAGE = "uptech:portfolioAdminKey";

export default function PortfolioAdminPage() {
  const [adminKey, setAdminKey] = useState("");
  const [authed, setAuthed] = useState(false);
  const [tab, setTab] = useState<string>("pending");
  const [vendors, setVendors] = useState<VendorRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [acting, setActing] = useState<string | null>(null);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem(KEY_STORAGE) : null;
    if (saved) {
      setAdminKey(saved);
      setAuthed(true);
    }
  }, []);

  const load = useCallback(
    async (key: string, status: string) => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`/api/portfolio/admin?status=${status}`, {
          headers: { "x-admin-key": key },
        });
        if (res.status === 401) {
          setError("Wrong admin key.");
          setAuthed(false);
          localStorage.removeItem(KEY_STORAGE);
          return;
        }
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to load.");
        setVendors(data.vendors || []);
        localStorage.setItem(KEY_STORAGE, key);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load.");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    if (authed && adminKey) load(adminKey, tab);
  }, [authed, adminKey, tab, load]);

  async function act(
    id: string,
    action: "approve" | "approve-portfolio" | "reject" | "unlist"
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
      setVendors((cur) => cur.filter((v) => v.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Action failed.");
    } finally {
      setActing(null);
    }
  }

  if (!authed) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setAuthed(true);
          }}
          className="w-full max-w-sm bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-8 space-y-5"
        >
          <h1 className="font-heading font-bold text-xl text-[#0F172A]">Portfolio Admin</h1>
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

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading font-bold text-2xl text-[#0F172A]">
          Portfolio Admin
        </h1>
        <button
          onClick={() => load(adminKey, tab)}
          className="inline-flex items-center gap-2 text-sm text-[#64748B] hover:text-[#2563EB]"
        >
          <RefreshCw className="w-4 h-4" /> Refresh
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-8 border-b border-[#E2E8F0]">
        {STATUS_TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${
              tab === t.key
                ? "border-[#2563EB] text-[#2563EB]"
                : "border-transparent text-[#64748B] hover:text-[#0F172A]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

      {loading ? (
        <div className="text-center py-20 text-[#64748B]">
          <Loader2 className="w-7 h-7 animate-spin mx-auto mb-3 text-[#2563EB]" /> Loading…
        </div>
      ) : vendors.length === 0 ? (
        <div className="text-center py-20 text-[#64748B]">Nothing here.</div>
      ) : (
        <div className="space-y-4">
          {vendors.map((v) => (
            <div key={v.id} className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 p-5">
                {v.logo_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={String(v.logo_url)} alt="" className="w-12 h-12 object-contain rounded-lg border border-[#F1F5F9]" />
                ) : (
                  <div className="w-12 h-12 rounded-lg bg-[#F1F5F9] flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#94A3B8]" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[#0F172A] truncate">{v.company_name}</h3>
                  <p className="text-sm text-[#64748B] truncate">
                    {v.company_type} · {v.contact_email}
                  </p>
                </div>
                <button
                  onClick={() => setExpanded(expanded === v.id ? null : v.id)}
                  className="inline-flex items-center gap-1.5 text-sm text-[#64748B] hover:text-[#2563EB] px-3 py-2"
                >
                  <Eye className="w-4 h-4" /> {expanded === v.id ? "Hide" : "View"}
                </button>
                <div className="flex flex-wrap gap-2">
                  {tab === "pending" && (
                    <button
                      disabled={acting === v.id}
                      onClick={() => act(v.id, "approve")}
                      className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-3 py-2 rounded-lg disabled:opacity-60"
                    >
                      <Check className="w-4 h-4" /> Approve &amp; invite
                    </button>
                  )}
                  {tab === "invited" && (
                    <span className="text-xs text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg self-center">
                      Listed as member — awaiting profile
                    </span>
                  )}
                  {tab === "portfolio_pending" && (
                    <button
                      disabled={acting === v.id}
                      onClick={() => act(v.id, "approve-portfolio")}
                      className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-3 py-2 rounded-lg disabled:opacity-60"
                    >
                      <Check className="w-4 h-4" /> Approve &amp; list
                    </button>
                  )}
                  {tab === "listed" && (
                    <button
                      disabled={acting === v.id}
                      onClick={() => act(v.id, "unlist")}
                      className="inline-flex items-center gap-1.5 bg-white border border-amber-200 text-amber-700 hover:bg-amber-50 text-sm font-medium px-3 py-2 rounded-lg disabled:opacity-60"
                    >
                      Unlist
                    </button>
                  )}
                  <button
                    disabled={acting === v.id}
                    onClick={() => {
                      if (
                        window.confirm(
                          `Permanently delete ${v.company_name} and its logo? This cannot be undone.`
                        )
                      )
                        act(v.id, "reject");
                    }}
                    className="inline-flex items-center gap-1.5 bg-white border border-red-200 text-red-600 hover:bg-red-50 text-sm font-medium px-3 py-2 rounded-lg disabled:opacity-60"
                  >
                    <X className="w-4 h-4" /> Reject &amp; delete
                  </button>
                </div>
              </div>

              {expanded === v.id && (
                <div className="border-t border-[#E2E8F0] bg-[#F8FAFC] p-5 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                  {[
                    ["Website", v.website],
                    ["Contact", v.contact_name],
                    ["Job Title", v.contact_job_title],
                    ["Email", v.contact_email],
                    ["Phone", v.contact_phone],
                    ["Org Phone", v.org_phone],
                    ["Country", v.country],
                    ["City", v.city],
                    ["Company Size", v.company_size],
                    ["Reg No.", v.registration_no],
                    ["Address", v.business_address],
                    ["Consents", [
                      v.terms_accepted && "Terms",
                      v.membership_terms_accepted && "Membership",
                      v.arbitration_accepted && "Arbitration",
                    ].filter(Boolean).join(", ")],
                    ["Description", v.short_description],
                    ["Services", (v.services ?? []).join(", ")],
                    ["Primary Stack", v.primary_stack],
                    ["Industries", v.industries_served],
                    ["Key Projects", v.key_projects],
                    ["Team", v.team_structure],
                  ]
                    .filter(([, val]) => val)
                    .map(([label, val]) => (
                      <div key={String(label)}>
                        <span className="font-semibold text-[#64748B]">{String(label)}: </span>
                        <span className="text-[#0F172A]">{String(val)}</span>
                      </div>
                    ))}
                  {v.slug && (
                    <a
                      href={`/portfolio/${v.slug}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#2563EB] font-medium hover:underline col-span-full"
                    >
                      Open public profile →
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
