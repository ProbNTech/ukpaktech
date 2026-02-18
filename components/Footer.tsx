import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Youtube, ChevronRight } from "lucide-react";


export function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* Top accent line — same as Hero bottom border */}
      <div className="relative z-20 h-[3px] bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#E11D48]" />

      {/* Main Footer */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/footer/uk_building.jpg"
            alt="UK cityscape"
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={80}
          />
          {/* Lighter overlay */}
          <div className="absolute inset-0 bg-[#0B1F3A]/75" />
        </div>

        {/* Footer Content */}
        <div className="relative z-10">
          <div className="px-8 sm:px-12 lg:px-16 xl:px-20 pt-16 pb-10">
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
              {/* Column 1: Logo + Description + Socials */}
              <div className="lg:col-span-4">
                <Link href="/" className="flex items-center gap-3 mb-5 group">
                  <Image
                    src="/image/main-logo/mainlogo.png"
                    alt="UPTECH Logo"
                    width={50}
                    height={50}
                    className="h-[50px] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="font-heading font-bold text-xl text-white">
                    UPTECH
                  </span>
                </Link>
                <p className="text-white/60 mb-7 max-w-sm leading-relaxed text-[15px]">
                  A strategic platform strengthening technology, innovation, and
                  digital trade between the United Kingdom and Pakistan.
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, label: "LinkedIn" },
                    { icon: Twitter, label: "Twitter" },
                    { icon: Youtube, label: "YouTube" },
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#22C55E]/30 hover:border-[#22C55E]/50 transition-all duration-300"
                        aria-label={social.label}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading font-semibold text-white text-sm mb-5">
                    <Link href="/about" className="hover:text-[#22C55E] transition-colors duration-300 inline-flex items-center gap-1">
                      About <ChevronRight className="w-3 h-3" />
                    </Link>
                  </h3>
                  <h3 className="font-heading font-semibold text-white text-sm mb-5">
                    <Link href="/events" className="hover:text-[#22C55E] transition-colors duration-300 inline-flex items-center gap-1">
                      Events <ChevronRight className="w-3 h-3" />
                    </Link>
                  </h3>
                  <h3 className="font-heading font-semibold text-white text-sm mb-5">
                    <Link href="/membership" className="hover:text-[#22C55E] transition-colors duration-300 inline-flex items-center gap-1">
                      Membership <ChevronRight className="w-3 h-3" />
                    </Link>
                  </h3>
                  <h3 className="font-heading font-semibold text-white text-sm mb-5">
                    <Link href="/contact" className="hover:text-[#22C55E] transition-colors duration-300 inline-flex items-center gap-1">
                      Contact <ChevronRight className="w-3 h-3" />
                    </Link>
                  </h3>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-white text-sm mb-5">
                    <Link href="/membership" className="hover:text-[#22C55E] transition-colors duration-300 inline-flex items-center gap-1">
                      Register <ChevronRight className="w-3 h-3" />
                    </Link>
                  </h3>
                  <h3 className="font-heading font-semibold text-white text-sm mb-5">
                    <Link href="/events" className="hover:text-[#22C55E] transition-colors duration-300 inline-flex items-center gap-1">
                      Updates &amp; Insights <ChevronRight className="w-3 h-3" />
                    </Link>
                  </h3>
                  <h3 className="font-heading font-semibold text-white text-sm mb-5">
                    <Link href="/membership" className="hover:text-[#22C55E] transition-colors duration-300 inline-flex items-center gap-1">
                      Membership Directory <ChevronRight className="w-3 h-3" />
                    </Link>
                  </h3>
                </div>
              </div>

              {/* Column 3: Contact + Governance */}
              <div className="lg:col-span-4">
                <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
                  Contact us
                </h3>
                <div className="space-y-3 text-white/60 text-sm leading-relaxed">
                  <p>
                    <span className="text-white/80 font-medium">Email:</span>{" "}
                    <a
                      href="mailto:info@uptechcouncil.org"
                      className="hover:text-[#22C55E] transition-colors duration-300"
                    >
                      info@uptechcouncil.org
                    </a>
                  </p>
                  <div>
                    <p className="text-white/60">UK–Pakistan Tech Council</p>
                    <p className="text-white/60">London, United Kingdom</p>
                    <p className="text-white/60">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white pt-7">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white">
                <p style={{ color: "#FFFFFF" }}>
                  Copyright &copy; {new Date().getFullYear()} UK&ndash;Pakistan
                  Tech Council. All rights reserved.
                </p>
                <div className="flex gap-6">
                  <Link
                    href="/privacy"
                    className="text-white hover:text-[#22C55E] transition-colors duration-300"
                  >
                    Privacy policy
                  </Link>
                  <span className="text-white">|</span>
                  <Link
                    href="/terms"
                    className="text-white hover:text-[#22C55E] transition-colors duration-300"
                  >
                    Terms
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
