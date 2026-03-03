"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface Event {
  title: string;
  date: string;
  location: string;
  summary: string;
  image: string;
}

interface PastEventsProps {
  events: Event[];
}

function PastEventCard({ event, index }: { event: Event; index: number }) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const detailVariants = {
    hidden: { opacity: 0, height: 0, marginTop: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      marginTop: "0.75rem",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? {} : { y: -6 }}
      className="cursor-pointer"
    >
      <div className="group block h-full overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl border border-[#D8D5CF]/40">
        {/* Image with gradient overlay */}
        <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-[#2563EB]/20 to-[#22C55E]/15">
          {!imageError && (
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          {/* Past Event badge */}
          <span className="absolute top-3 left-3 px-3 py-1 text-white text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-sm bg-[#1C1F2E]/80 z-10">
            Past Event
          </span>

          {/* Fallback */}
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Calendar className="w-10 h-10 text-[#2563EB]/50" />
            </div>
          )}
        </div>

        {/* Card body */}
        <div className="p-5">
          {/* Date + location row */}
          <div className="flex items-center gap-2 text-xs text-[#7A7E8F] mb-2">
            <time className="font-medium">{event.date}</time>
            <span>&bull;</span>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#C41E3A]" />
              <span>Completed</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-heading font-bold text-lg text-[#1C1F2E] leading-snug line-clamp-2 group-hover:text-[#2563EB] transition-colors duration-200">
            {event.title}
          </h3>

          {/* Animated details reveal on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                key="details"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={detailVariants}
                className="overflow-hidden"
              >
                <p className="text-sm text-[#3D4152] leading-relaxed line-clamp-3">{event.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full border border-[#C41E3A]/30 bg-[#C41E3A]/10 px-2.5 py-0.5 text-xs font-semibold text-[#C41E3A]">
                    Past Event
                  </span>
                  {event.location && (
                    <span className="inline-flex items-center rounded-full border border-[#D8D5CF] bg-[#F5F5F4] px-2.5 py-0.5 text-xs font-semibold text-[#3D4152]">
                      {event.location.split(",")[0]}
                    </span>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[#D8D5CF]/60 px-5 py-3">
          <span className="text-xs font-semibold text-[#2563EB] inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
            View details <ChevronRight className="w-3.5 h-3.5" />
          </span>
          <div className="h-1.5 w-1.5 rounded-full bg-[#C41E3A]" />
        </div>
      </div>
    </motion.div>
  );
}

export function PastEvents({ events }: PastEventsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => (
        <PastEventCard key={index} event={event} index={index} />
      ))}
    </div>
  );
}
