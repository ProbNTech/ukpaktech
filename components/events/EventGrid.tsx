"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

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

export function EventGrid({ events, hideBadge = false }: EventGridProps) {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => {
        const imageFailed = imageErrors[index];

        const card = (
          <div className="relative h-full bg-white border border-[#D8D5CF] hover:border-[#2563EB]/40 transition-colors duration-300">
            {/* Tag badge */}
            {event.tag && !hideBadge && (
              <div className="absolute top-3 left-3 z-10 px-2 py-1 bg-[#2563EB] text-white text-[10px] font-bold uppercase tracking-wider">
                {event.tag}
              </div>
            )}

            {/* Image */}
            <div className="aspect-[4/3] bg-[#D8D5CF] relative overflow-hidden">
              {!imageFailed && (
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onError={() => setImageErrors((prev) => ({ ...prev, [index]: true }))}
                />
              )}
              {imageFailed && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#E8E6E3]">
                  <Calendar className="w-10 h-10 text-[#7A7E8F]" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Date */}
              <div className="flex items-center gap-2 text-xs font-semibold text-[#2563EB] uppercase tracking-wide mb-3">
                <Calendar className="w-3.5 h-3.5" />
                {event.date}
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-lg mb-2 text-[#1C1F2E] group-hover:text-[#2563EB] transition-colors duration-200 line-clamp-2 leading-snug">
                {event.title}
              </h3>

              {/* Summary */}
              <p className="text-sm mb-4 leading-relaxed line-clamp-2 text-[#3D4152]">
                {event.summary}
              </p>

              {/* Location */}
              {event.location && (
                <div className="flex items-start gap-2 text-sm mb-5 text-[#3D4152]">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#2563EB]" />
                  <span className="line-clamp-1">{event.location}</span>
                </div>
              )}

              <div className="h-px bg-[#D8D5CF] mb-4" />

              {/* Learn more */}
              <div className="flex items-center gap-2 text-sm font-semibold text-[#2563EB] group-hover:gap-3 transition-all duration-200">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
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
            className="group"
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
      })}
    </div>
  );
}
