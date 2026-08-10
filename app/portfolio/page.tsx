import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { listPublicVendors, type PublicVendor } from "@/lib/vendorService";

export const metadata: Metadata = {
  title: "Technology Vendor Portfolio | UPTECH",
  description:
    "Browse vetted technology vendors in the UPTECH portfolio — software houses, agencies, and consultancies across web, mobile, cloud, AI, and more.",
  openGraph: {
    title: "Technology Vendor Portfolio | UPTECH",
    description:
      "Browse vetted technology vendors in the UPTECH portfolio across web, mobile, cloud, AI, and more.",
  },
};

// Render per-request instead of prerendering at build time — this page reads
// live from Supabase, which isn't reachable during `next build` on Hostinger.
export const dynamic = "force-dynamic";

export default async function PortfolioPage() {
  let vendors: PublicVendor[] = [];
  let loadFailed = false;
  try {
    vendors = await listPublicVendors();
  } catch (err) {
    console.error("Portfolio listing failed:", err);
    loadFailed = true;
  }

  return (
    <>
      <PageHero
        title="Technology Vendor Portfolio"
        subtitle="Discover vetted technology partners across web, mobile, cloud, AI, and more — each profile reviewed by the UPTECH team."
        image="/image/banners/banner100.png"
      />

      <Section variant="light">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <p className="text-[#475569] max-w-2xl">
            Are you a technology company? Get listed in front of UK & Pakistan
            buyers.
          </p>
          <Link
            href="/membership#apply"
            className="inline-flex items-center justify-center bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
          >
            List your company
          </Link>
        </div>

        {loadFailed ? (
          <div className="text-center py-20 text-[#6B7280]">
            The portfolio is temporarily unavailable. Please try again shortly.
          </div>
        ) : (
          <PortfolioGrid vendors={vendors} />
        )}
      </Section>
    </>
  );
}
