import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Instagram, Facebook, ChevronRight, MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import { FooterContactForm } from "./FooterContactForm";
import { WHATSAPP_HREF, WHATSAPP_DISPLAY } from "./ui/WhatsAppButton";


export function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* Top accent line */}
    <div className="relative z-20 h-[3px] bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#E11D48] rounded-full" />

      {/* Main Footer */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/footer/newukimage.jpeg"
            alt="London Skyline at Night"
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={85}
            priority
          />
          {/* Dark overlay for text visibility */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Footer Content */}
        <div className="relative z-10">
          <div className="px-8 sm:px-12 lg:px-16 xl:px-20 pt-16 pb-10">
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
              {/* Column 1: Logo + Description + Follow Us */}
              <div className="md:col-span-2 lg:col-span-4">
                <Link href="/" className="flex items-center gap-3 mb-5 group">
                  <Image
                    src="/logo.svg"
                    alt="UPTECH Logo"
                    width={50}
                    height={50}
                    className="h-[50px] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="font-heading font-bold text-2xl text-white">
                    UPTECH
                  </span>
                </Link>
                <p className="text-white mb-7 leading-relaxed text-base drop-shadow-md">
                  UPTECH is the leading platform bringing together people, companies, and organizations from the UK and Pakistan to unlock the transformative potential of digital technology. With a diverse membership spanning startups, SMEs, corporates, and research institutions, the Forum fosters a vibrant network for innovation, collaboration, and knowledge exchange across business, government, and stakeholders to create positive impact for society, the economy, and the wider world.
                </p>

                {/* Registration */}
                <p className="text-white mb-7 leading-relaxed text-base drop-shadow-md">
                  Registered in England as UK&ndash;Pakistan Trade and Investment Board Ltd. Registration No. 15417151 &middot; T/A UK&ndash;Pakistan Tech Forum (UPTECH).
                </p>

                {/* Follow Us */}
                <h3 className="font-heading font-semibold text-white text-base uppercase tracking-wider mb-4 drop-shadow-md">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, label: "Facebook", href: "#" },
                    { icon: Linkedin, label: "LinkedIn", href: "#" },
                    { icon: Twitter, label: "X (Twitter)", href: "#" },
                    { icon: Instagram, label: "Instagram", href: "#" },
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-12 h-12 rounded-full bg-white/30 border-2 border-white flex items-center justify-center text-white hover:text-white hover:bg-[#22C55E]/60 hover:border-[#22C55E] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 transition-all duration-300 drop-shadow-lg"
                        aria-label={social.label}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div className="lg:col-span-2">
                <h3 className="font-heading font-semibold text-white text-lg uppercase tracking-wider mb-5 drop-shadow-md">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {[
                    { label: "About", href: "/about" },
                    { label: "Services", href: "/services" },
                    { label: "Membership", href: "/membership" },
                    { label: "Products", href: "/products" },
                    { label: "Events", href: "/events" },
                    { label: "Mentorship", href: "/services/mentorship" },
                    { label: "Funding", href: "/ecosystem/funding-and-grants" },
                    { label: "FAQs", href: "/faqs" },
                    { label: "News", href: "/news" },
                    { label: "Contact", href: "/contact" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white hover:text-[#22C55E] transition-colors duration-300 inline-flex items-center gap-1.5 text-base drop-shadow-md"
                      >
                        <ChevronRight className="w-3 h-3" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Useful Links */}
              <div className="lg:col-span-2">
                <h3 className="font-heading font-semibold text-white text-lg uppercase tracking-wider mb-5 drop-shadow-md">
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
                        className="text-white hover:text-[#22C55E] transition-colors duration-300 inline-flex items-center gap-1.5 text-base drop-shadow-md"
                      >
                        <ChevronRight className="w-3 h-3" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: Contact Form + Contact Us */}
              <div className="md:col-span-2 lg:col-span-4">
                <h3 className="font-heading font-semibold text-white text-lg uppercase tracking-wider mb-5 drop-shadow-md">
                  Send Us a Message
                </h3>
                <FooterContactForm />

                {/* Contact Us — glass card below the form */}
                <div className="mt-8">
                  <h3 className="font-heading font-semibold text-white text-lg uppercase tracking-wider mb-4 drop-shadow-md">
                    Contact Us
                  </h3>
                  <div className="rounded-xl bg-slate-950/55 backdrop-blur-md border border-white/15 divide-y divide-white/[0.08] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
                    {/* Address */}
                    <div className="flex items-start gap-3 px-4 py-3.5 hover:bg-white/[0.04] transition-colors duration-200">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#22C55E]/25 border border-[#22C55E]/55 flex items-center justify-center shadow-[0_4px_12px_rgba(34,197,94,0.2)]">
                        <MapPin className="w-4 h-4 text-[#4ADE80]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-white/75 text-[10.5px] uppercase tracking-[0.18em] font-bold leading-tight">Address</p>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=136+Westbourne+Terrace,+London+W2+6QB,+United+Kingdom"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-white text-[14px] leading-snug mt-1 drop-shadow-sm hover:text-[#4ADE80] transition-colors duration-200"
                        >
                          136 Westbourne Terrace, London W2 6QB, United Kingdom
                        </a>
                      </div>
                    </div>

                    {/* Telephone */}
                    <div className="flex items-center gap-3 px-4 py-3.5 hover:bg-white/[0.04] transition-colors duration-200">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#2563EB]/25 border border-[#2563EB]/55 flex items-center justify-center shadow-[0_4px_12px_rgba(37,99,235,0.2)]">
                        <Phone className="w-4 h-4 text-[#93C5FD]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-white/75 text-[10.5px] uppercase tracking-[0.18em] font-bold leading-tight">Telephone</p>
                        <a
                          href="tel:02074024071"
                          className="text-white text-[14px] font-medium hover:text-[#4ADE80] transition-colors duration-200 drop-shadow-sm"
                        >
                          0207 402 4071
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-center gap-3 px-4 py-3.5 hover:bg-white/[0.04] transition-colors duration-200">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#22C55E]/25 border border-[#22C55E]/55 flex items-center justify-center shadow-[0_4px_12px_rgba(34,197,94,0.2)]">
                        <MessageCircle className="w-4 h-4 text-[#4ADE80]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-white/75 text-[10.5px] uppercase tracking-[0.18em] font-bold leading-tight">WhatsApp</p>
                        <a
                          href={WHATSAPP_HREF}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white text-[14px] font-medium hover:text-[#4ADE80] transition-colors duration-200 drop-shadow-sm"
                        >
                          {WHATSAPP_DISPLAY}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3 px-4 py-3.5 hover:bg-white/[0.04] transition-colors duration-200">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#E11D48]/25 border border-[#E11D48]/55 flex items-center justify-center shadow-[0_4px_12px_rgba(225,29,72,0.2)]">
                        <Mail className="w-4 h-4 text-[#FDA4AF]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-white/75 text-[10.5px] uppercase tracking-[0.18em] font-bold leading-tight">Email</p>
                        <a
                          href="mailto:info@ukpaktech.org.uk"
                          className="text-[#FDA4AF] text-[14px] font-semibold hover:text-white transition-colors duration-200 break-all drop-shadow-sm"
                        >
                          info@ukpaktech.org.uk
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="border-t border-white/30 pt-7 mb-7">
              <p className="text-white/90 text-sm leading-relaxed drop-shadow-md">
                <span className="font-semibold text-white">Disclaimer:</span> The UK&ndash;Pakistan Technology Forum (UPTECH) provides information on this website for general informational purposes only. While we endeavour to keep all content accurate and up to date, UPTECH makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information, products, services, or related materials contained on this website. Any reliance you place on such information is strictly at your own risk. UPTECH shall not be liable for any loss or damage arising from the use of this website. External links are provided for convenience and do not signify endorsement. All intellectual property rights in the content of this website are owned by or licensed to UPTECH unless otherwise stated.
              </p>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/30 pt-7">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-base text-white drop-shadow-md">
                <p style={{ color: "#FFFFFF" }}>
                  Copyright &copy; {new Date().getFullYear()} UK&ndash;Pakistan
                  Tech Forum. All rights reserved.
                </p>
                <div className="flex flex-wrap gap-4 text-base">
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
