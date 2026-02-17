import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "light" | "dark" | "alt";
}

export function Card({ children, className = "", hover = false, variant = "light" }: CardProps) {
  const baseStyles = "rounded-2xl border p-7 transition-all duration-500 relative overflow-hidden group/card";
  const variantMap = {
    light: "bg-white border-gray-100 text-[#0F172A] shadow-md",
    dark: "bg-[#0B1F3A] border-white/10 text-white shadow-md",
    alt: "bg-gray-50 border-gray-200 text-[#0F172A] shadow-sm",
  };
  const variantStyles = variantMap[variant];
  const hoverClass = hover
    ? "hover:-translate-y-1.5 hover:shadow-lg hover:border-[#2563EB]/20 cursor-pointer"
    : "";

  return (
    <div className={`${baseStyles} ${variantStyles} ${hoverClass} ${className}`}>
      {hover && (
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
      )}
      {children}
    </div>
  );
}
