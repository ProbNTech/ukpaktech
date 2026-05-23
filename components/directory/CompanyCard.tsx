import { MapPin, ExternalLink, BadgeCheck, ArrowUpRight } from "lucide-react";
import type { DirectoryCompany } from "@/data/companies";
import { RatingStars } from "./RatingStars";
import { CompanyLogo } from "./CompanyLogo";

interface CompanyCardProps {
  company: DirectoryCompany;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <article
      className="group relative flex h-full flex-col rounded-2xl bg-white border border-[#E5E7EB] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-12px_rgba(37,99,235,0.18)] hover:border-[#2563EB]/30"
      aria-labelledby={`company-${company.id}-title`}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
        aria-hidden="true"
        style={{ background: "linear-gradient(90deg, #2563EB, #06B6D4)" }}
      />

      {/* Header: logo + name + rating */}
      <div className="flex items-start gap-4">
        <CompanyLogo name={company.name} logoUrl={company.logoUrl} size={56} />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3
              id={`company-${company.id}-title`}
              className="font-heading font-bold text-[#0F172A] text-lg leading-tight truncate"
            >
              {company.name}
            </h3>
            {company.verified && (
              <span
                className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#DBEAFE] px-2 py-0.5 text-[11px] font-semibold text-[#1D4ED8]"
                title="Verified by source"
              >
                <BadgeCheck className="w-3 h-3" /> Verified
              </span>
            )}
          </div>
          <div className="mt-1.5">
            <RatingStars rating={company.rating} reviewCount={company.reviewCount} />
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="mt-4 flex items-center gap-1.5 text-sm text-[#475569]">
        <MapPin className="w-4 h-4 text-[#2563EB]" />
        <span className="truncate">{company.location}</span>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-[#475569] line-clamp-3">
        {company.description}
      </p>

      {/* Service tags */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {company.services.slice(0, 4).map((s) => (
          <span
            key={s}
            className="inline-block rounded-full bg-[#F1F5F9] px-2.5 py-1 text-[11px] font-medium text-[#334155]"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Spacer push */}
      <div className="mt-auto" />

      {/* Actions */}
      <div className="mt-5 flex flex-wrap items-center gap-2 pt-4 border-t border-[#F1F5F9]">
        {company.clutchProfileUrl ? (
          <a
            href={company.clutchProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1D4ED8] transition-colors"
            aria-label={`View ${company.name} profile on Clutch`}
          >
            View Profile <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span
            className="inline-flex items-center gap-1.5 rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-semibold text-[#64748B] cursor-not-allowed select-none"
            aria-disabled="true"
            title="A live profile link will appear once the directory sync is connected."
          >
            Profile coming soon
          </span>
        )}
        {company.websiteUrl && (
          <a
            href={company.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#CBD5E1] px-4 py-2 text-sm font-semibold text-[#0F172A] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
            aria-label={`Visit ${company.name} website`}
          >
            Visit Website <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
        <span className="ml-auto text-[11px] uppercase tracking-wider text-[#94A3B8]">
          Data source: {company.source}
        </span>
      </div>
    </article>
  );
}
