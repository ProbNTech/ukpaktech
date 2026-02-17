import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "light" | "dark";
}

export function Card({ children, className = "", hover = false }: CardProps) {
  const baseStyles = "rounded-2xl border p-7 transition-all duration-500 relative overflow-hidden group/card";
  const variantStyles = "bg-white border-gray-100 text-[#0F172A] shadow-md";
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
