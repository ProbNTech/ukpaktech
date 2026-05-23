import { MapPin, ExternalLink, BadgeCheck, ArrowUpRight } from "lucide-react";
import type { DirectoryCompany } from "@/data/companies";
import { RatingStars } from "./RatingStars";
import { CompanyLogo } from "./CompanyLogo";

interface CompanyListItemProps {
  company: DirectoryCompany;
  rank?: number;
}

export function CompanyListItem({ company, rank }: CompanyListItemProps) {
  return (
    <article
      className="group flex flex-col sm:flex-row gap-5 rounded-2xl bg-white border border-[#E5E7EB] p-5 sm:p-6 transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-[0_10px_30px_-15px_rgba(37,99,235,0.18)]"
      aria-labelledby={`row-${company.id}-title`}
    >
      <div className="flex items-start gap-4 sm:w-[280px] shrink-0">
        {typeof rank === "number" && (
          <span className="font-heading font-extrabold text-xl text-[#94A3B8] w-7 shrink-0 leading-none mt-3">
            {String(rank).padStart(2, "0")}
          </span>
        )}
        <CompanyLogo name={company.name} logoUrl={company.logoUrl} size={56} />
        <div className="min-w-0">
          <h3
            id={`row-${company.id}-title`}
            className="font-heading font-bold text-[#0F172A] text-lg leading-tight"
          >
            {company.name}
            {company.verified && (
              <BadgeCheck
                className="inline-block w-4 h-4 ml-1 text-[#2563EB] align-text-bottom"
                aria-label="Verified"
              />
            )}
          </h3>
          <div className="mt-1 flex items-center gap-1.5 text-sm text-[#475569]">
            <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
            <span className="truncate">{company.location}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <RatingStars
          rating={company.rating}
          reviewCount={company.reviewCount}
          size="md"
        />
        <p className="mt-2 text-sm leading-relaxed text-[#475569] line-clamp-2">
          {company.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {company.services.slice(0, 5).map((s) => (
            <span
              key={s}
              className="inline-block rounded-full bg-[#F1F5F9] px-2.5 py-1 text-[11px] font-medium text-[#334155]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-row sm:flex-col items-stretch sm:items-end gap-2 sm:justify-center shrink-0">
        {company.clutchProfileUrl ? (
          <a
            href={company.clutchProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1D4ED8] transition-colors"
          >
            View Profile <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-semibold text-[#64748B] cursor-not-allowed select-none"
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
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#CBD5E1] px-4 py-2 text-sm font-semibold text-[#0F172A] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
          >
            Website <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}
