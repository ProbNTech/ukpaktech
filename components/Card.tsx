import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "light" | "dark" | "alt";
}

export function Card({ children, className = "", hover = false, variant = "light" }: CardProps) {
  const baseStyles = "rounded border p-7 transition-all duration-300 relative";
  const variantMap = {
    light: "bg-white border-[#D8D5CF] text-[#1C1F2E]",
    dark: "bg-[#1C1F2E] border-transparent text-white",
    alt: "bg-[#F5F2EE] border-[#D8D5CF] text-[#1C1F2E]",
  };
  const variantStyles = variantMap[variant];
  const hoverClass = hover ? "hover:-translate-y-1 cursor-pointer" : "";

  return (
    <div className={`${baseStyles} ${variantStyles} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}
