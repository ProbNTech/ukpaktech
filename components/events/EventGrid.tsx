"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/* Brand-color mapping for event tags */
const tagColors: Record<string, string> = {
  Summit: "#2563EB",
  Expo: "#22C55E",
  Conference: "#C41E3A",
  Workshop: "#EAB308",
  Webinar: "#2563EB",
  Forum: "#22C55E",
};

function getTagColor(tag?: string): string {
  return tag ? (tagColors[tag] || "#2563EB") : "#2563EB";
}

interface Event {
  title: string;
  date: string;
  location: string;
  summary: string;
  image: string;
  slug?: string;
  tag?: string;
}

interface EventGridProps {
  events: Event[];
  hideBadge?: boolean;
}

function EventCard({ event, index, hideBadge }: { event: Event; index: number; hideBadge: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const color = getTagColor(event.tag);

  const detailVariants = {
    hidden: { opacity: 0, height: 0, marginTop: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      marginTop: "0.75rem",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const card = (
    <div className="group block h-full overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl border border-[#D8D5CF]/40">
      {/* Image with gradient overlay */}
      <div className="relative h-44 w-full overflow-hidden bg-[#1C1F2E]">
        {event.image ? (
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <>
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)",
                backgroundSize: "12px 12px",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              {event.tag && (
                <span className="text-white/25 text-base font-semibold uppercase tracking-widest">{event.tag}</span>
              )}
            </div>
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Tag badge on image */}
        {event.tag && !hideBadge && (
          <span
            className="absolute top-3 left-3 px-3 py-1 text-white text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-sm z-10"
            style={{ background: `${color}CC` }}
          >
            {event.tag}
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="p-5">
        {/* Date + location row */}
        <div className="flex items-center gap-2 text-xs text-[#7A7E8F] mb-2">
          <time className="font-medium">{event.date}</time>
          {event.location && (
            <>
              <span>&bull;</span>
              <span className="line-clamp-1">{event.location}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-lg text-[#1C1F2E] leading-snug line-clamp-2 group-hover:text-[#2563EB] transition-colors duration-200">
          {event.title}
        </h3>

        {/* Animated summary reveal on hover */}
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
                {event.tag && (
                  <span
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                    style={{ background: `${color}15`, color, borderColor: `${color}30` }}
                  >
                    {event.tag}
                  </span>
                )}
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
          Learn more <ChevronRight className="w-3.5 h-3.5" />
        </span>
        <div
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  );

  return (
    <motion.div
      key={index}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -6 }}
      className="cursor-pointer"
    >
      {event.slug ? (
        <Link href={`/events/${event.slug}`} className="block h-full">
          {card}
        </Link>
      ) : (
        card
      )}
    </motion.div>
  );
}

export function EventGrid({ events, hideBadge = false }: EventGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => (
        <EventCard key={index} event={event} index={index} hideBadge={hideBadge} />
      ))}
    </div>
  );
}
