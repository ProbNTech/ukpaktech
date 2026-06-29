"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Building2, MapPin, ExternalLink, BadgeCheck } from "lucide-react";
import type { PublicVendor } from "@/lib/vendorService";

function locationLabel(v: PublicVendor): string {
  return [v.city, v.country].filter(Boolean).join(", ");
}

export function PortfolioGrid({ vendors }: { vendors: PublicVendor[] }) {
  const [query, setQuery] = useState("");
  const [service, setService] = useState("");
  const [type, setType] = useState("");

  const allServices = useMemo(() => {
    const set = new Set<string>();
    vendors.forEach((v) => (v.services ?? []).forEach((s) => set.add(s)));
    return Array.from(set).sort();
  }, [vendors]);

  const allTypes = useMemo(() => {
    const set = new Set<string>();
    vendors.forEach((v) => v.company_type && set.add(v.company_type));
    return Array.from(set).sort();
  }, [vendors]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return vendors.filter((v) => {
      if (type && v.company_type !== type) return false;
      if (service && !(v.services ?? []).includes(service)) return false;
      if (!q) return true;
      const haystack = [
        v.company_name,
        v.short_description,
        v.industries_served,
        v.primary_stack,
        v.specialised_skills,
        locationLabel(v),
        (v.services ?? []).join(" "),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [vendors, query, service, type]);

  const selectClass =
    "px-4 py-2.5 rounded-lg border border-[#D8D5CF] bg-white text-base text-[#1C1F2E] focus:outline-none focus:border-[#2563EB] cursor-pointer";

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search companies, tech, industries…"
            className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-[#D8D5CF] bg-white text-base text-[#1C1F2E] focus:outline-none focus:border-[#2563EB]"
          />
        </div>
        <select className={selectClass} value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">All services</option>
          {allServices.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <select className={selectClass} value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">All types</option>
          {allTypes.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <p className="text-sm text-[#6B7280] mb-6">
        {filtered.length} {filtered.length === 1 ? "company" : "companies"}
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-[#6B7280]">
          No companies match your filters yet.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((v) => {
            const location = locationLabel(v);
            const description = v.short_description || v.industries_served;
            const tags = v.services ?? [];
            return (
              <div
                key={v.id}
                className="group relative bg-white rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all p-6 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  {v.logo_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={v.logo_url}
                      alt={v.company_name}
                      className="w-16 h-16 object-contain rounded-xl border border-[#F1F5F9] bg-white p-1.5 flex-shrink-0"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-[#F1F5F9] flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-[#94A3B8]" />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading font-bold text-lg text-[#0F172A] leading-snug group-hover:text-[#2563EB] transition-colors">
                      {/* Title links through to the full profile; stretched overlay below makes the whole card clickable */}
                      <Link href={`/portfolio/${v.slug}`} className="before:absolute before:inset-0 before:rounded-2xl before:content-['']">
                        {v.company_name}
                      </Link>
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      {v.company_type && (
                        <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full border border-[#F59E0B]/40 text-[#B45309] bg-[#F59E0B]/10">
                          {v.company_type}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 text-[12px] font-medium text-[#16A34A]">
                        <BadgeCheck className="w-3.5 h-3.5" />
                        Verified member
                      </span>
                    </div>
                  </div>
                </div>

                {location && (
                  <p className="flex items-center gap-1.5 text-sm text-[#475569] mb-3">
                    <MapPin className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                    {location}
                  </p>
                )}

                {description && (
                  <p className="text-sm text-[#475569] line-clamp-3 mb-4">
                    {description}
                  </p>
                )}

                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {tags.slice(0, 4).map((s) => (
                      <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-[#F1F5F9] text-[#475569] font-medium">
                        {s.replace("Software Development - ", "").replace("Cloud Services - ", "")}
                      </span>
                    ))}
                    {tags.length > 4 && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-[#F1F5F9] text-[#64748B]">
                        +{tags.length - 4}
                      </span>
                    )}
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between gap-3 pt-4 mt-auto border-t border-[#F1F5F9]">
                  {v.website ? (
                    <a
                      href={v.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F172A] px-4 py-2 rounded-lg border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
                    >
                      Visit Website
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span />
                  )}
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#94A3B8]">
                    UPTECH Verified Member
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
