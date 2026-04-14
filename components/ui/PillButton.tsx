import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PillButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "blue";
}

export function PillButton({ href, children, variant = "dark" }: PillButtonProps) {
  const base = "inline-flex items-center gap-2 px-7 py-3 rounded-full text-base font-semibold transition-colors duration-300";
  const styles = variant === "blue"
    ? "bg-[#2563EB] text-white hover:bg-[#1d4ed8]"
    : "bg-[#1C1F2E] text-white hover:bg-[#2563EB]";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
      <ChevronRight className="w-4 h-4" />
    </Link>
  );
}
