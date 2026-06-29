import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { CompleteForm } from "@/components/portfolio/CompleteForm";

export const metadata: Metadata = {
  title: "Complete Your Profile | UPTECH Portfolio",
  robots: { index: false, follow: false },
};

export default async function PortfolioCompletePage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  if (!token) {
    return (
      <Section variant="light">
        <div className="max-w-xl mx-auto text-center py-16">
          <h1 className="font-heading font-bold text-2xl text-[#0F172A] mb-3">
            Missing link
          </h1>
          <p className="text-[#475569]">
            This page needs the secure link we emailed you. Please open it from
            your inbox, or{" "}
            <Link href="/membership#apply" className="text-[#2563EB] font-semibold hover:underline">
              apply for membership
            </Link>
            .
          </p>
        </div>
      </Section>
    );
  }

  return (
    <Section variant="light">
      <CompleteForm token={token} />
    </Section>
  );
}
