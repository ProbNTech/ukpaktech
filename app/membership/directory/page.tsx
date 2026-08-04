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

// Reflect admin list/unlist/delete actions within a few minutes.
export const revalidate = 300;

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
