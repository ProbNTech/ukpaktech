import { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  variant?: "light" | "alt" | "dark";
  className?: string;
  id?: string;
}

export function Section({ children, variant = "light", className = "", id }: SectionProps) {
  const variantMap = {
    light: "bg-white text-[#0F172A] section-transition",
    alt: "bg-[#F8FAFC] text-[#0F172A] section-transition",
    dark: "bg-[#0B1F3A] text-white section-transition",
  };
  const bgClass = variantMap[variant];

  return (
    <section id={id} className={`${bgClass} ${className}`}>
      <div className="relative z-10">
        <Container className="py-20 md:py-28 lg:py-32">{children}</Container>
      </div>
    </section>
  );
}
