import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Building2, Globe, ArrowLeft, Check } from "lucide-react";
import { Section } from "@/components/Section";
import { getPublicVendorBySlug, type PublicVendor } from "@/lib/vendorService";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  let vendor: PublicVendor | null = null;
  try {
    vendor = await getPublicVendorBySlug(slug);
  } catch {
    vendor = null;
  }
  if (!vendor) return { title: "Vendor not found | UPTECH Portfolio" };
  return {
    title: `${vendor.company_name} | UPTECH Portfolio`,
    description:
      vendor.short_description ||
      vendor.industries_served ||
      `${vendor.company_name} — technology vendor on the UPTECH portfolio.`,
  };
}

function Detail({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null;
  return (
    <div>
      <dt className="text-sm font-semibold text-[#64748B]">{label}</dt>
      <dd className="text-[#0F172A] mt-1 whitespace-pre-line">{value}</dd>
    </div>
  );
}

export default async function VendorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let vendor: PublicVendor | null = null;
  try {
    vendor = await getPublicVendorBySlug(slug);
  } catch {
    vendor = null;
  }
  if (!vendor) notFound();

  return (
    <Section variant="light">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-[#64748B] hover:text-[#2563EB] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to portfolio
        </Link>

        {/* Header */}
        <div className="flex items-start gap-5 mb-10">
          {vendor.logo_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={vendor.logo_url} alt={vendor.company_name} className="w-20 h-20 object-contain rounded-xl border border-[#E2E8F0] bg-white p-2" />
          ) : (
            <div className="w-20 h-20 rounded-xl bg-[#F1F5F9] flex items-center justify-center">
              <Building2 className="w-8 h-8 text-[#94A3B8]" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h1 className="font-heading font-bold text-3xl text-[#0F172A]">
              {vendor.company_name}
            </h1>
            {(() => {
              const meta = [
                vendor.company_type,
                vendor.company_size && `${vendor.company_size} employees`,
                vendor.year_established && `Est. ${vendor.year_established}`,
                [vendor.city, vendor.country].filter(Boolean).join(", ") || null,
              ].filter(Boolean);
              return meta.length ? (
                <p className="mt-2 text-[#64748B]">{meta.join("  ·  ")}</p>
              ) : null;
            })()}
            {vendor.website && (
              <a
                href={vendor.website.startsWith("http") ? vendor.website : `https://${vendor.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-[#2563EB] font-medium hover:underline"
              >
                <Globe className="w-4 h-4" /> Visit website
              </a>
            )}
          </div>
        </div>

        {/* Lead description */}
        {vendor.short_description && (
          <p className="text-lg text-[#475569] leading-relaxed mb-10 max-w-3xl">
            {vendor.short_description}
          </p>
        )}

        {/* Services */}
        {(vendor.services ?? []).length > 0 && (
          <div className="mb-10">
            <h2 className="font-heading font-bold text-xl text-[#0F172A] mb-4">Services</h2>
            <div className="flex flex-wrap gap-2">
              {(vendor.services ?? []).map((s) => (
                <span key={s} className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-[#2563EB]/8 text-[#2563EB] font-medium">
                  <Check className="w-3.5 h-3.5" /> {s}
                </span>
              ))}
            </div>
            {vendor.other_services && (
              <p className="text-sm text-[#475569] mt-3">Also: {vendor.other_services}</p>
            )}
          </div>
        )}

        {/* Details grid */}
        <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-6 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-8">
          <Detail label="Primary Tech Stack" value={vendor.primary_stack} />
          <Detail label="Secondary Tech Stack" value={vendor.secondary_stack} />
          <Detail label="Specialised Skills" value={vendor.specialised_skills} />
          <Detail label="Industries Served" value={vendor.industries_served} />
          <Detail label="Key Projects" value={vendor.key_projects} />
          <Detail label="Case Studies / Links" value={vendor.portfolio_links} />
          <Detail label="Team Structure" value={vendor.team_structure} />
          <Detail label="PM Methodology" value={vendor.pm_methodology} />
          <Detail label="Tools Used" value={vendor.tools_used} />
          <Detail label="Own SaaS Solutions" value={vendor.own_saas} />
          <Detail label="Location" value={vendor.business_address} />
        </dl>
      </div>
    </Section>
  );
}
