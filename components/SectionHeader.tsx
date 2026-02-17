import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  children?: ReactNode;
  accent?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  className = "",
  align = "left",
  children,
  accent = true,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`mb-12 md:mb-16 ${alignClass} ${className}`}>
      {accent && (
        <div className={`mb-5 flex ${align === "center" ? "justify-center" : ""}`}>
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-[#2563EB] to-[#22C55E]" />
        </div>
      )}
      <h2 className="font-heading font-bold mb-5 text-[#2563EB]">{title}</h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed text-[#4B5563] ${align === "center" ? "mx-auto" : ""} max-w-2xl`}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
