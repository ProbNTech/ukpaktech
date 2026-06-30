"use client";

import Link from "next/link";

const items = [
  { text: "UPTECH, The UK–Pakistan Tech Forum", href: "/about" },
  { text: "Services for UK companies and Pakistani companies", href: "/services" },
  { text: "Arbitration framework under the UK Arbitration Act 1996", href: "/arbitration/framework" },
  { text: "Member code of conduct, published and binding", href: "/code-of-conduct" },
  { text: "Trusted Partner Certification for member companies", href: "/initiatives/trusted-partner-certification" },
  { text: "Apply for UPTECH membership", href: "/membership#apply" },
];

export function TopTicker() {
  const content = items.map((item, i) => (
    <Link
      key={i}
      href={item.href}
      className="inline-flex items-center shrink-0 hover:text-white transition-colors duration-200"
    >
      <span className="text-[11px] sm:text-xs font-medium tracking-wide">
        {item.text}
      </span>
      <span className="mx-5 text-[#C41E3A] text-[8px] select-none" aria-hidden="true">
        ◆
      </span>
    </Link>
  ));

  return (
    <div
      className="relative w-full h-[30px] bg-gradient-to-r from-[#0f1a3a] via-[#1a2b5e] to-[#0f1a3a] overflow-hidden flex items-center text-white/80"
      role="marquee"
      aria-label="Latest announcements"
    >
      <div className="animate-ticker-scroll flex items-center whitespace-nowrap will-change-transform">
        {content}
        {content}
      </div>
    </div>
  );
}
