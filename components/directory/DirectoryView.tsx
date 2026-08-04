"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import type { CompanyCategory, DirectoryCompany } from "@/data/companies";
import { CompanyCard } from "./CompanyCard";
import { CompanyListItem } from "./CompanyListItem";
import { CompanyFilters, type FilterState } from "./CompanyFilters";
import { EmptyState } from "./EmptyState";
import { Pagination } from "./Pagination";

interface DirectoryViewProps {
  /** Which Supabase-backed directory to query — see app/api/directory/search/route.ts. */
  directory: "it" | "ai" | "pakistan";
  /** Server-fetched first page (default filters, page 1) — avoids a client round-trip on first paint. */
  initialCompanies: DirectoryCompany[];
  initialTotal: number;
  /** Facet option lists, computed by the page from the full dataset (not just the loaded page). */
  countryOptions: string[];
  serviceOptions: string[];
  categoryOptions?: CompanyCategory[];
  /** "grid"premium card grid. "list"directory-style rows. */
  layout?: "grid" | "list";
  pageSize?: number;
  initialSort?: FilterState["sort"];
  /** Optional fixed-position heading rendered above the filter bar. */
  heading?: string;
  /** Show the Category dropdown (industry filter). */
  showCategoryFilter?: boolean;
}

const DEFAULT_STATE: FilterState = {
  search: "",
  country: "",
  service: "",
  category: "",
  minRating: 0,
  sort: "rating",
};

export function DirectoryView({
  directory,
  initialCompanies,
  initialTotal,
  countryOptions,
  serviceOptions,
  categoryOptions,
  layout = "grid",
  pageSize = 30,
  initialSort = "rating",
  heading,
  showCategoryFilter = false,
}: DirectoryViewProps) {
  const [state, setState] = useState<FilterState>({ ...DEFAULT_STATE, sort: initialSort });
  const [page, setPage] = useState(1);
  const [companies, setCompanies] = useState(initialCompanies);
  const [total, setTotal] = useState(initialTotal);
  const [loading, setLoading] = useState(false);

  // initialCompanies/initialTotal already reflect this exact query (default
  // filters, page 1), so skip the redundant fetch on mount.
  const skipNextFetch = useRef(true);
  const requestId = useRef(0);

  useEffect(() => {
    if (skipNextFetch.current) {
      skipNextFetch.current = false;
      return;
    }

    const id = ++requestId.current;
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          directory,
          page: String(page),
          pageSize: String(pageSize),
          sort: state.sort,
        });
        if (state.search) params.set("search", state.search);
        if (state.country) params.set("country", state.country);
        if (state.service) params.set("service", state.service);
        if (state.category) params.set("category", state.category);
        if (state.minRating) params.set("minRating", String(state.minRating));

        const res = await fetch(`/api/directory/search?${params.toString()}`);
        const data = await res.json();
        if (id !== requestId.current) return; // a newer request superseded this one
        setCompanies(data.companies ?? []);
        setTotal(data.total ?? 0);
      } catch (err) {
        console.error("Directory search failed:", err);
      } finally {
        if (id === requestId.current) setLoading(false);
      }
    }, 300); // debounces rapid typing/filter changes into one request

    return () => clearTimeout(timer);
  }, [directory, page, pageSize, state]);

  const handleStateChange = (next: FilterState) => {
    setState(next);
    setPage(1);
  };

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <section className="py-8 lg:py-10 bg-[#F8FAFF]" aria-label="Company directory listings">
      <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
        {heading && (
          <h2 className="font-heading font-extrabold text-[#0F172A] text-2xl sm:text-3xl tracking-tight mb-6">
            {heading}
          </h2>
        )}

        <CompanyFilters
          state={state}
          onChange={handleStateChange}
          countryOptions={countryOptions}
          serviceOptions={serviceOptions}
          categoryOptions={categoryOptions}
          resultCount={total}
        />

        <div className="relative mt-8" aria-busy={loading}>
          {loading && (
            <div className="absolute inset-0 z-10 flex items-start justify-center pt-16 bg-white/60 backdrop-blur-[1px] rounded-2xl">
              <Loader2 className="w-8 h-8 text-[#2563EB] animate-spin" aria-label="Loading companies…" />
            </div>
          )}

          {companies.length === 0 ? (
            <EmptyState onReset={() => handleStateChange({ ...DEFAULT_STATE, sort: state.sort })} />
          ) : layout === "grid" ? (
            <div
              className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 transition-opacity ${loading ? "opacity-60" : ""}`}
            >
              {companies.map((c) => (
                <CompanyCard key={c.id} company={c} />
              ))}
            </div>
          ) : (
            <div className={`space-y-4 transition-opacity ${loading ? "opacity-60" : ""}`}>
              {companies.map((c, i) => (
                <CompanyListItem key={c.id} company={c} rank={(page - 1) * pageSize + i + 1} />
              ))}
            </div>
          )}
        </div>

        {total > pageSize && (
          <div className={`mt-10 transition-opacity ${loading ? "opacity-50 pointer-events-none" : ""}`}>
            <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
          </div>
        )}
      </div>
    </section>
  );
}
