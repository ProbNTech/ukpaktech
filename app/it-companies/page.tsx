import type { Metadata } from "next";
import { CompanyDirectoryHero } from "@/components/directory/CompanyDirectoryHero";
import { DirectoryStats } from "@/components/directory/DirectoryStats";
import { DirectoryView } from "@/components/directory/DirectoryView";
import { DirectorySEOContent } from "@/components/directory/DirectorySEOContent";
import { FAQSection } from "@/components/directory/FAQSection";
import { directoryFaqs } from "@/components/directory/directoryFaqs";
import { getAllITCompanies, getDefaultITCompaniesPage } from "@/lib/companyService";
import { getCountryOptions, getServiceOptions } from "@/lib/companyFilters";
import type { DirectoryCompany } from "@/data/companies";

export const metadata: Metadata = {
  title: "All IT Companies",
  description:
    "Browse the full directory of IT, software, cloud, cybersecurity, and data companies. Filter by service, rating, and location to build a shortlist.",
  alternates: { canonical: "/it-companies" },
  // Directory pages are built but not live yet, keep them out of search
  // engines until the real data source is connected and they are added to
  // the navigation and sitemap.
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: {
    title: "All IT Companies | UPTECH Directory",
    description:
      "The full directory of IT, software, cloud, and cybersecurity companies, searchable, filterable, and ready for shortlisting.",
    url: "/it-companies",
  },
};

// Render per-request instead of prerendering at build time — this page reads
// live from Supabase, which isn't reachable during `next build` on Hostinger.
export const dynamic = "force-dynamic";

export default async function AllITCompaniesPage() {
  // Best-effort — the page still renders (empty) if Supabase is briefly unreachable.
  const [companies, page1] = await Promise.all([
    getAllITCompanies().catch((err) => {
      console.error("IT companies load failed:", err);
      return [] as DirectoryCompany[];
    }),
    getDefaultITCompaniesPage().catch((err) => {
      console.error("IT companies search failed:", err);
      return { companies: [] as DirectoryCompany[], total: 0, page: 1, pageSize: 30 };
    }),
  ]);

  return (
    <>
      <CompanyDirectoryHero
        eyebrow="Directory"
        title="All IT Companies"
        subtitle="The complete directory of IT, software, cloud, cybersecurity, and data companies. Use search, filters, and sort to build your shortlist."
      />

      <DirectoryStats companies={companies} />

      <DirectoryView
        directory="it"
        initialCompanies={page1.companies}
        initialTotal={page1.total}
        countryOptions={getCountryOptions(companies)}
        serviceOptions={getServiceOptions(companies)}
        layout="list"
        pageSize={30}
        heading="Browse all companies"
        initialSort="rating"
      />

      <DirectorySEOContent subject="IT Companies" />

      <FAQSection faqs={directoryFaqs} />
    </>
  );
}
