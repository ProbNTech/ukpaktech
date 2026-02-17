import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
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
  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 relative overflow-hidden group";

  const sizes = {
    sm: "px-5 py-2.5 text-sm rounded-xl",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-2xl",
  };

  const variants = {
    primary: "bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-md hover:shadow-lg hover:-translate-y-0.5",
    secondary: "border-2 border-[#22C55E] text-[#16A34A] hover:bg-[#22C55E] hover:text-white hover:shadow-md hover:-translate-y-0.5",
    ghost: "text-[#2563EB] hover:bg-[#2563EB]/10 hover:-translate-y-0.5",
  };

  const classNameWithoutRounded = className.replace(/\brounded-[\w-]+\b/g, '').trim();
  const classes = `${baseStyles} ${sizes[size]} ${variants[variant]} ${classNameWithoutRounded}`;

  const shineEffect = variant === "primary" ? (
    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
  ) : null;

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {shineEffect}
          <span className="relative z-10 flex items-center gap-2">
            {children}
            {showArrow && <ArrowRight className="w-4 h-4" />}
          </span>
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {shineEffect}
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {showArrow && <ArrowRight className="w-4 h-4" />}
        </span>
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {shineEffect}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && <ArrowRight className="w-4 h-4" />}
      </span>
    </button>
  );
}
