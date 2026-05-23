import { ReactNode } from "react";
import { ShieldCheck } from "lucide-react";

interface CompanyDirectoryHeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  trustNote?: string;
  children?: ReactNode;
}

export function CompanyDirectoryHero({
  eyebrow = "Company Directory",
  title,
  subtitle,
  trustNote = "Ratings and reviews sourced from Clutch-style provider.",
  children,
}: CompanyDirectoryHeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(900px circle at 8% -10%, rgba(37,99,235,0.10), transparent 55%), radial-gradient(800px circle at 95% 110%, rgba(6,182,212,0.10), transparent 55%), linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)",
      }}
      aria-labelledby="directory-hero-title"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0F172A 0.5px, transparent 0.5px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20 py-16 lg:py-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#DBEAFE] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#2563EB] shadow-sm">
            {eyebrow}
          </span>
          <h1
            id="directory-hero-title"
            className="mt-5 font-heading font-extrabold text-[#0F172A] text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight"
          >
            {title}
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#475569]">
            {subtitle}
          </p>
          {trustNote && (
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-[#64748B]">
              <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
              {trustNote}
            </p>
          )}
        </div>

        {children && <div className="relative mt-8 lg:mt-10">{children}</div>}
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        aria-hidden="true"
        style={{
          background: "linear-gradient(90deg, #2563EB, #06B6D4, transparent)",
        }}
      />
    </section>
  );
}
