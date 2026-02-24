"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Network, Store, Megaphone, Plane, Users, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Network,
    title: "Business Networks",
    description:
      "Access the world's largest business network with strategic connections, partners, and tailored market advice.",
    href: "/services/business-networks",
  },
  {
    icon: Store,
    title: "SME Hub",
    description:
      "Your one-stop shop for generating sales, accessing finance, finding talent, and unlocking member-only offers.",
    href: "/services/sme-hub",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Hub",
    description:
      "Promote your software solutions and tech services across the UK, Europe, Middle East and Africa.",
    href: "/services/digital-marketing",
  },
  {
    icon: Plane,
    title: "Overseas Employment",
    description:
      "Contract employment opportunities connecting skilled tech professionals with international employers.",
    href: "/services/overseas-employment",
  },
  {
    icon: Users,
    title: "Mentorship",
    description:
      "Connect with experienced entrepreneurs and industry experts who guide startups from idea to scale.",
    href: "/services/mentorship",
  },
  {
    icon: Briefcase,
    title: "Business Support",
    description:
      "Company registration, legal & accounting, IP protection, investment documents, and data rooms.",
    href: "/services/business-support",
  },
];

function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: (typeof services)[0];
  index: number;
  isInView: boolean;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={service.href} className="block h-full">
        <div className="relative h-full bg-white rounded border border-gray-100 overflow-hidden shadow-md hover:shadow-xl hover:border-[#2563EB]/20 hover:-translate-y-1 transition-all duration-500 p-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 border bg-[#2563EB]/5 border-[#2563EB]/15 group-hover:scale-110 transition-transform duration-500">
            <Icon className="w-6 h-6 text-[#2563EB]" />
          </div>

          <h3 className="font-heading font-semibold text-xl mb-3 text-[#0F172A] group-hover:text-[#2563EB] transition-colors duration-300">
            {service.title}
          </h3>

          <p className="text-[#475569] mb-6 leading-relaxed text-sm">
            {service.description}
          </p>

          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB]">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ServiceGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} isInView={isInView} />
      ))}
    </div>
  );
}
