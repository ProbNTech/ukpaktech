import type { Metadata } from "next";
import { CompanyDirectoryHero } from "@/components/directory/CompanyDirectoryHero";
import { DirectoryStats } from "@/components/directory/DirectoryStats";
import { FeaturedGrid } from "@/components/directory/FeaturedGrid";
import { DirectoryView } from "@/components/directory/DirectoryView";
import { DirectorySEOContent } from "@/components/directory/DirectorySEOContent";
import { FAQSection } from "@/components/directory/FAQSection";
import { directoryFaqs } from "@/components/directory/directoryFaqs";
import { getAllITCompanies, getTopITCompanies, searchITCompanies } from "@/lib/companyService";
import { getCountryOptions, getServiceOptions } from "@/lib/companyFilters";

export const metadata: Metadata = {
  title: "Top IT Companies",
  description:
    "Browse top IT services, software development, cloud, cybersecurity, and data companies, ratings, reviews, services, and locations in one place.",
  alternates: { canonical: "/top-it-companies" },
  // Directory pages are built but not live yet, keep them out of search
  // engines until the real data source is connected and they are added to
  // the navigation and sitemap.
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: {
    title: "Top IT Companies | UPTECH Directory",
    description:
      "A directory of the top-rated IT, software, cloud, and cybersecurity companies, compare ratings, services, and locations side-by-side.",
    url: "/top-it-companies",
  },
};

// Reflect admin list/unlist/delete actions within a few minutes.
export const revalidate = 300;

export default async function TopITCompaniesPage() {
  const [featured, all, page1] = await Promise.all([
    getTopITCompanies(6),
    getAllITCompanies(),
    searchITCompanies({ page: 1, pageSize: 30 }),
  ]);

  return (
    <>
      <CompanyDirectoryHero
        eyebrow="IT Companies"
        title="Top IT Companies"
        subtitle="Compare leading IT services, software, cloud, and cybersecurity firms. Filter by location, service, and rating to find the right partner quickly."
      />

      <DirectoryStats companies={all} />

      <FeaturedGrid
        companies={featured}
        eyebrow="Featured"
        title="Highest-rated IT companies"
        description="The top six IT companies in the directory, ranked by rating and verified review volume."
      />

      <DirectoryView
        directory="it"
        initialCompanies={page1.companies}
        initialTotal={page1.total}
        countryOptions={getCountryOptions(all)}
        serviceOptions={getServiceOptions(all)}
        layout="grid"
        heading="All IT companies"
        initialSort="rating"
      />

      <DirectorySEOContent subject="IT Companies" />

      <FAQSection faqs={directoryFaqs} />
    </>
  );
}
