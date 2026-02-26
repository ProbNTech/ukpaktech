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
    light: "bg-[#EEECEA] text-[#1C1F2E]",
    alt: "bg-[#E8E6E3] text-[#1C1F2E]",
    dark: "bg-[#1C1F2E] text-white",
  };
  const bgClass = variantMap[variant];

  return (
    <section id={id} className={`${bgClass} ${className}`}>
      <Container className="py-10 lg:py-14">{children}</Container>
    </section>
  );
}
