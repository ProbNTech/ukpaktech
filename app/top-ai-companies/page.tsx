import type { Metadata } from "next";
import { CompanyDirectoryHero } from "@/components/directory/CompanyDirectoryHero";
import { DirectoryStats } from "@/components/directory/DirectoryStats";
import { FeaturedGrid } from "@/components/directory/FeaturedGrid";
import { DirectoryView } from "@/components/directory/DirectoryView";
import { DirectorySEOContent } from "@/components/directory/DirectorySEOContent";
import { FAQSection } from "@/components/directory/FAQSection";
import { directoryFaqs } from "@/components/directory/directoryFaqs";
import { getAllAICompanies, getTopAICompanies, searchAICompanies } from "@/lib/companyService";
import { getCountryOptions, getServiceOptions } from "@/lib/companyFilters";

export const metadata: Metadata = {
  title: "Top AI Companies",
  description:
    "Discover leading AI development, automation, machine learning, and software companies. Compare ratings, services, and locations across the UK, Europe, and Pakistan.",
  alternates: { canonical: "/top-ai-companies" },
  // Directory pages are built but not live yet, keep them out of search
  // engines until the real data source is connected and they are added to
  // the navigation and sitemap.
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: {
    title: "Top AI Companies | UPTECH Directory",
    description:
      "A curated directory of top AI development, automation, and machine learning companies, with ratings, reviews, and service breakdowns.",
    url: "/top-ai-companies",
  },
};

// Reflect admin list/unlist/delete actions within a few minutes.
export const revalidate = 300;

export default async function TopAICompaniesPage() {
  const [featured, all, page1] = await Promise.all([
    getTopAICompanies(6),
    getAllAICompanies(),
    searchAICompanies({ page: 1, pageSize: 30 }),
  ]);

  return (
    <>
      <CompanyDirectoryHero
        eyebrow="AI Companies"
        title="Top AI Companies"
        subtitle="Discover leading AI development, automation, machine learning, and software companies, with verified ratings, services, and locations to help you shortlist faster."
      />

      <DirectoryStats companies={all} />

      <FeaturedGrid
        companies={featured}
        eyebrow="Featured"
        title="Highest-rated AI companies"
        description="A curated selection of the top six AI firms by rating and verified review volume."
      />

      <DirectoryView
        directory="ai"
        initialCompanies={page1.companies}
        initialTotal={page1.total}
        countryOptions={getCountryOptions(all)}
        serviceOptions={getServiceOptions(all)}
        layout="grid"
        heading="All AI companies"
        initialSort="rating"
      />

      <DirectorySEOContent subject="AI Companies" />

      <FAQSection faqs={directoryFaqs} />
    </>
  );
}
