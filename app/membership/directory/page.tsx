import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { MemberDirectory } from "@/components/MemberDirectory";
import { listMemberVendors } from "@/lib/vendorService";

export const metadata: Metadata = {
  title: "Membership Directory",
  description:
    "Browse the UPTECH membership directory, technology companies, investors, academic institutions, and professionals driving UK–Pakistan bilateral growth.",
  openGraph: {
    title: "Membership Directory | UPTECH",
    description:
      "Browse the UPTECH membership directory, technology companies, investors, academic institutions, and professionals.",
  },
};

// Render per-request instead of prerendering at build time — this page reads
// live from Supabase, which isn't reachable during `next build` on Hostinger.
export const dynamic = "force-dynamic";

export default async function MembershipDirectoryPage() {
  const vendors = await listMemberVendors().catch((err) => {
    console.error("Member vendors load failed:", err);
    return [];
  });

  return (
    <>
      <PageHero
        title="Membership Directory"
        subtitle="Browse our growing network of technology companies, investors, academic institutions, and professionals shaping the UK–Pakistan technology corridor."
        image="/image/banners/banner100.png"
      />

      <MemberDirectory vendors={vendors} />
    </>
  );
}
