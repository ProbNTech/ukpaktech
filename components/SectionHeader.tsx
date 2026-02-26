import { ReactNode } from "react";

const bannerThemes = {
  blue: { bg: "linear-gradient(135deg, #1a2b5e 0%, #0f1a3a 100%)", accent: "#3b82f6", accentTo: "#1a2b5e", label: "#60a5fa" },
  red: { bg: "linear-gradient(135deg, #C41E3A 0%, #8b1525 100%)", accent: "#E74C5E", accentTo: "#C41E3A", label: "#F9A8B4" },
  green: { bg: "linear-gradient(135deg, #15803d 0%, #22C55E 100%)", accent: "#22c55e", accentTo: "#15803d", label: "#86efac" },
};

interface SectionHeaderProps {
  title: string;
  label?: string;
  subtitle?: string | ReactNode;
  className?: string;
  color?: "blue" | "red" | "green";
}

export function SectionHeader({ title, label, subtitle, className = "", color = "blue" }: SectionHeaderProps) {
  const theme = bannerThemes[color];
  return (
    <div className={`mb-4 lg:mb-5 ${className}`}>
      <div className="relative overflow-hidden rounded mb-3 -mx-2 sm:-mx-4" style={{ background: theme.bg }}>
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: `linear-gradient(to bottom, ${theme.accent}, ${theme.accentTo})` }} />
        <div className="absolute top-0 right-0 w-40 h-full opacity-[0.06]" style={{ background: "radial-gradient(circle at 80% 30%, white 0%, transparent 70%)" }} />
        <div className="py-5 px-7 sm:px-10 pl-8 sm:pl-12">
          {label && (
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1.5" style={{ color: theme.label }}>{label}</p>
          )}
          <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-[2.2rem] leading-tight">
            {title}
          </h2>
        </div>
      </div>
      {subtitle && (
        <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed max-w-3xl">{subtitle}</p>
      )}
    </div>
  );
}
