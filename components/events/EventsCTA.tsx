"use client";

import { Button } from "@/components/Button";

export function EventsCTA() {
  return (
    <section className="bg-[#1C1F2E] py-20 md:py-24">
      <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#22C55E] mb-4">
            Get involved
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-none text-white mb-5">
            Join UPTECH Today
          </h2>
          <div className="h-px bg-white/20 mb-6" />
          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl">
            Become part of a trusted network shaping the future of UK–Pakistan technology collaboration.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/membership" variant="primary" size="lg" showArrow>
              Become a Member
            </Button>
            <Button href="/contact" variant="glass" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
