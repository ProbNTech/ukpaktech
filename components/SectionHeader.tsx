import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  label?: string;
  subtitle?: string | ReactNode;
  className?: string;
}

export function SectionHeader({ title, label, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`mb-10 lg:mb-12 ${className}`}>
      {label && (
        <p className="text-sm font-semibold text-[#2563EB] mb-2 tracking-wide uppercase">{label}</p>
      )}
      <div className="flex items-center gap-5 mb-5">
        <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-[2.6rem] leading-none shrink-0 whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 h-px bg-[#1C1F2E]/25 min-w-0" />
      </div>
      {subtitle && (
        <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed max-w-3xl">{subtitle}</p>
      )}
    </div>
  );
}
