import { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  variant?: "light" | "alt";
  className?: string;
  id?: string;
}

export function Section({ children, variant = "light", className = "", id }: SectionProps) {
  const bgClass = variant === "alt"
    ? "bg-[#F8FAFC] text-[#0F172A] section-transition"
    : "bg-white text-[#0F172A] section-transition";

  return (
    <section id={id} className={`${bgClass} ${className}`}>
      <div className="relative z-10">
        <Container className="py-20 md:py-28 lg:py-32">{children}</Container>
      </div>
    </section>
  );
}
