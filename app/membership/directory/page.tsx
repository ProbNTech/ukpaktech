import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { MemberDirectory } from "@/components/MemberDirectory";

export const metadata: Metadata = {
  title: "Membership Directory",
  description:
    "Browse the UPTECH membership directory — technology companies, investors, academic institutions, and professionals driving UK–Pakistan bilateral growth.",
  openGraph: {
    title: "Membership Directory | UPTECH",
    description:
      "Browse the UPTECH membership directory — technology companies, investors, academic institutions, and professionals.",
  },
};

export default function MembershipDirectoryPage() {
  return (
    <>
      <PageHero
        title="Membership Directory"
        subtitle="Browse our growing network of technology companies, investors, academic institutions, and professionals shaping the UK–Pakistan technology corridor."
        image="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=2400&q=85&auto=format&fit=crop"
      />

      <MemberDirectory />
    </>
  );
}
