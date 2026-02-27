"use client";

import { Target, Globe2, Users, Shield } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const trustItems = [
  { icon: Target, title: "AI, FinTech, Cloud, Cybersecurity", description: "Focused on cutting-edge technology sectors", color: "#2563EB" },
  { icon: Globe2, title: "UK and Pakistan", description: "Active across both nations", color: "#22C55E" },
  { icon: Users, title: "Built by Leaders", description: "Professionals, entrepreneurs, and technology leaders", color: "#2563EB" },
  { icon: Shield, title: "Ethical Governance", description: "Committed to transparency and long-term impact", color: "#22C55E" },
];

export function TrustCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {trustItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(6px)" }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : { opacity: 0, y: 30, scale: 0.95, filter: "blur(6px)" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative"
          >
            <div className="relative h-full bg-white rounded border border-gray-100 p-6 shadow-md hover:shadow-lg hover:border-[#2563EB]/20 transition-all duration-500 overflow-hidden">
              {/* Animated left accent line on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" style={{ background: item.color }} />
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 border group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundColor: `${item.color}10`, borderColor: `${item.color}20` }}
              >
                <Icon className="w-6 h-6" style={{ color: item.color }} />
              </div>
              <div className="relative z-10">
                <h3 className="font-heading font-semibold text-lg mb-2 text-[#1F2937]">{item.title}</h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
