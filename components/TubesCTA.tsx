"use client";

import dynamic from "next/dynamic";

const TubesCursor = dynamic(
  () => import("@/components/ui/tube-cursor").then((m) => ({ default: m.TubesCursor })),
  { ssr: false }
);

export function TubesCTA({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative z-[2] overflow-hidden bg-[#0B0F1A] text-white">
      <TubesCursor
        initialColors={["#2563EB", "#22C55E", "#C41E3A"]}
        lightColors={["#3b82f6", "#4ade80", "#E74C5E", "#60a5fa"]}
        lightIntensity={220}
        className="min-h-[420px] md:min-h-[480px]"
      >
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 md:py-20">
          {children}
        </div>
      </TubesCursor>
    </section>
  );
}
