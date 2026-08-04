import type { Metadata } from "next";
import { PakistanCompaniesHero } from "@/components/directory/PakistanCompaniesHero";
import { DirectoryStats } from "@/components/directory/DirectoryStats";
import { IndustriesSpotlight } from "@/components/directory/IndustriesSpotlight";
import { TechEcosystem } from "@/components/directory/TechEcosystem";
import { CurationCriteria } from "@/components/directory/CurationCriteria";
import { FeaturedCompanySpotlight } from "@/components/directory/FeaturedCompanySpotlight";
import { DirectoryView } from "@/components/directory/DirectoryView";
import { DirectorySEOContent } from "@/components/directory/DirectorySEOContent";
import { FAQSection } from "@/components/directory/FAQSection";
import { directoryFaqs } from "@/components/directory/directoryFaqs";
import {
  getAllPakistanTopCompanies,
  getTopPakistanCompanies,
  searchPakistanCompanies,
} from "@/lib/companyService";
import { getCountryOptions, getServiceOptions, getCategoryOptions } from "@/lib/companyFilters";
import type { DirectoryCompany } from "@/data/companies";

export const metadata: Metadata = {
  title: "Pakistan's Top AI & IT Companies",
  description:
    "Discover Pakistan's top AI & IT companies, software, cloud, cybersecurity, data, and AI specialists. Filter A–Z, search, or browse by industry to shortlist faster.",
  alternates: { canonical: "/pakistan-top-companies" },
  openGraph: {
    title: "Pakistan's Top AI & IT Companies | UPTECH",
    description:
      "A curated directory of Pakistan's top AI and IT companies, with services, locations, and category filters.",
    url: "/pakistan-top-companies",
  },
};

// Reflect newly approved members within a minute.
export const revalidate = 60;

export default async function PakistanTopCompaniesPage() {
  const [featured, all, page1] = await Promise.all([
    // Pull every editorial-pinned company; the carousel handles 1 or N.
    getTopPakistanCompanies(20),
    // Best-effort — the page still renders (empty) if Supabase is briefly unreachable.
    getAllPakistanTopCompanies().catch((err) => {
      console.error("Member directory load failed:", err);
      return [] as DirectoryCompany[];
    }),
    searchPakistanCompanies({ page: 1, pageSize: 30, sort: "name" }).catch((err) => {
      console.error("Member directory search failed:", err);
      return { companies: [] as DirectoryCompany[], total: 0, page: 1, pageSize: 30 };
    }),
  ]);

  const countryCount = new Set(all.map((c) => c.country).filter(Boolean)).size;

  return (
    <>
      <PakistanCompaniesHero
        eyebrow="Pakistan's Top Companies"
        title="Pakistan's Top AI & IT Companies"
        subtitle="A curated showcase of AI, software, cloud, and consulting specialists driving Pakistan's technology sector and the UK–Pakistan corridor. Search by name, filter by industry, or browse alphabetically to find the right partner."
        companyCount={all.length}
        countryCount={countryCount}
      />

      <DirectoryStats companies={all} />

      <IndustriesSpotlight companies={all} />

      <TechEcosystem companies={all} />

      <CurationCriteria />

      <FeaturedCompanySpotlight companies={featured} />

      <div id="all-companies">
        <DirectoryView
          directory="pakistan"
          initialCompanies={page1.companies}
          initialTotal={page1.total}
          countryOptions={getCountryOptions(all)}
          serviceOptions={getServiceOptions(all)}
          categoryOptions={getCategoryOptions(all)}
          layout="grid"
          heading="All companies"
          initialSort="name"
          showCategoryFilter
        />
      </div>

      <DirectorySEOContent subject="AI & IT Companies in Pakistan" />

      <FAQSection faqs={directoryFaqs} />
    </>
  );
}
