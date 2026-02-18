import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "glass";
  href?: string;
  children: ReactNode;
  showArrow?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  href,
  children,
  showArrow = false,
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 rounded-full";

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const variants = {
    primary: "bg-[#1C1F2E] text-white hover:bg-[#2563EB]",
    secondary: "border border-[#1C1F2E] text-[#1C1F2E] hover:bg-[#1C1F2E] hover:text-white",
    ghost: "text-[#1C1F2E] underline underline-offset-4 hover:text-[#2563EB]",
    glass: "border border-white text-white hover:bg-white hover:text-[#1C1F2E]",
  };

  const classes = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;
  const arrow = showArrow ? <ChevronRight className="w-4 h-4" /> : null;

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}{arrow}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}{arrow}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}{arrow}
    </button>
  );
}
