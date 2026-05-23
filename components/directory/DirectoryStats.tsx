import { LucideIcon, Building2, Star, MessageSquare, Globe } from "lucide-react";
import type { DirectoryCompany } from "@/data/companies";

interface DirectoryStatsProps {
  companies: DirectoryCompany[];
}

interface Stat {
  icon: LucideIcon;
  label: string;
  value: string;
  color: string;
}

export function DirectoryStats({ companies }: DirectoryStatsProps) {
  const count = companies.length;
  const reviews = companies.reduce((sum, c) => sum + c.reviewCount, 0);
  const avgRating = count
    ? (companies.reduce((sum, c) => sum + c.rating, 0) / count).toFixed(1)
    : "—";
  const locations = new Set(companies.map((c) => c.country)).size;

  const stats: Stat[] = [
    { icon: Building2, label: "Listed companies", value: String(count), color: "#2563EB" },
    { icon: Star, label: "Average rating", value: avgRating, color: "#F59E0B" },
    { icon: MessageSquare, label: "Verified reviews", value: reviews.toLocaleString("en-GB"), color: "#06B6D4" },
    { icon: Globe, label: "Locations covered", value: String(locations), color: "#22C55E" },
  ];

  return (
    <section
      className="relative py-10 sm:py-12 bg-white border-y border-[#F1F5F9]"
      aria-label="Directory statistics"
    >
      <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="relative rounded-2xl bg-white border border-[#E5E7EB] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(15,23,42,0.12)]"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                  aria-hidden="true"
                  style={{
                    background: `linear-gradient(90deg, ${s.color}, ${s.color}40)`,
                  }}
                />
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3"
                  style={{ background: `${s.color}15`, color: s.color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <p
                  className="font-heading font-extrabold text-2xl sm:text-3xl leading-none"
                  style={{ color: s.color }}
                >
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-[#64748B]">{s.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
