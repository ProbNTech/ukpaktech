import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Youtube, Facebook, ChevronRight } from "lucide-react";


export function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* Top accent line */}
      <div className="relative z-20 h-[3px] bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#E11D48]" />

      {/* Main Footer */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/footer/tower_bridge.jpg"
            alt="Tower Bridge, London"
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={80}
          />
        </div>

        {/* Footer Content */}
        <div className="relative z-10">
          <div className="px-8 sm:px-12 lg:px-16 xl:px-20 pt-16 pb-10">
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
              {/* Column 1: Logo + Description */}
              <div className="lg:col-span-4">
                <Link href="/" className="flex items-center gap-3 mb-5 group">
                  <Image
                    src="/image/main-logo/mainlogo.png"
                    alt="UPTECH Logo"
                    width={50}
                    height={50}
                    className="h-[50px] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="font-heading font-bold text-2xl text-white">
                    UPTECH
                  </span>
                </Link>
                <p className="text-white/90 mb-7 max-w-sm leading-relaxed text-sm">
                  UPTECH is the leading platform bringing together people, companies, and organizations from the UK and Pakistan to unlock the transformative potential of digital technology. With a diverse membership spanning startups, SMEs, corporates, and research institutions, the Council fosters a vibrant network for innovation, collaboration, and knowledge exchange across business, government, and stakeholders to create positive impact for society, the economy, and the wider world.
                </p>

                {/* Follow Us */}
                <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, label: "Facebook", href: "#" },
                    { icon: Linkedin, label: "LinkedIn", href: "#" },
                    { icon: Twitter, label: "X (Twitter)", href: "#" },
                    { icon: Youtube, label: "YouTube", href: "#" },
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#22C55E]/30 hover:border-[#22C55E]/50 transition-all duration-300"
                        aria-label={social.label}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Column 2: Useful Links */}
              <div className="lg:col-span-4">
                <h3 className="font-heading font-semibold text-white text-lg uppercase tracking-wider mb-5">
                  Useful Links
                </h3>
                <ul className="space-y-3">
                  {[
                    { label: "Privacy Policy", href: "/privacy" },
                    { label: "Terms & Conditions", href: "/terms" },
                    { label: "Excellence Management T&Cs", href: "/excellence-management-terms" },
                    { label: "Members Guidance", href: "/members-guidance" },
                    { label: "Cookies Policy", href: "/cookies" },
                    { label: "GDPR Policy", href: "/gdpr" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white hover:text-[#22C55E] transition-colors duration-300 inline-flex items-center gap-1.5 text-base"
                      >
                        <ChevronRight className="w-3 h-3" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Contact + Quick Links */}
              <div className="lg:col-span-4">
                <h3 className="font-heading font-semibold text-white text-lg uppercase tracking-wider mb-5">
                  Contact Us
                </h3>
                <div className="space-y-3 text-white text-base leading-relaxed">
                  <p>
                    <span className="text-white font-medium">Email:</span>{" "}
                    <a
                      href="mailto:info@ukpaktech.org.uk"
                      className="text-[#C41E3A] font-bold hover:text-[#E74C5E] transition-colors duration-300"
                    >
                      info@ukpaktech.org.uk
                    </a>
                  </p>
                  <div>
                    <p className="text-white">UK–Pakistan Tech Council</p>
                    <p className="text-white">London, United Kingdom</p>
                    <p className="text-white">Islamabad, Pakistan</p>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-8">
                  <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
                    Quick Links
                  </h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {[
                      { label: "About", href: "/about" },
                      { label: "Services", href: "/services" },
                      { label: "Membership", href: "/membership" },
                      { label: "Products", href: "/products" },
                      { label: "Events", href: "/events" },
                      { label: "Mentorship", href: "/services/mentorship" },
                      { label: "Funding", href: "/ecosystem/funding-and-grants" },
                      { label: "FAQs", href: "/faqs" },
                      { label: "Jobs", href: "/job-portal" },
                      { label: "Contact", href: "/contact" },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-white/80 hover:text-[#22C55E] transition-colors duration-300 inline-flex items-center gap-1 text-sm"
                        >
                          <ChevronRight className="w-3 h-3" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white pt-7">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-base text-white">
                <p style={{ color: "#FFFFFF" }}>
                  Copyright &copy; {new Date().getFullYear()} UK&ndash;Pakistan
                  Tech Council. All rights reserved.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link href="/privacy" className="text-white hover:text-[#22C55E] transition-colors duration-300">Privacy Policy</Link>
                  <span className="text-white/40">|</span>
                  <Link href="/terms" className="text-white hover:text-[#22C55E] transition-colors duration-300">Terms</Link>
                  <span className="text-white/40">|</span>
                  <Link href="/cookies" className="text-white hover:text-[#22C55E] transition-colors duration-300">Cookies</Link>
                  <span className="text-white/40">|</span>
                  <Link href="/gdpr" className="text-white hover:text-[#22C55E] transition-colors duration-300">GDPR</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
