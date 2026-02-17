"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface Event {
  title: string;
  date: string;
  location: string;
  summary: string;
  image: string;
}

interface EventGridProps {
  events: Event[];
  hideBadge?: boolean;
}

export function EventGrid({ events, hideBadge = false }: EventGridProps) {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>(
    {}
  );
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event, index) => {
        const imageFailed = imageErrors[index];

        return (
          <motion.div
            key={index}
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group"
          >
            <div className="relative h-full rounded-2xl bg-white overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-[#2563EB]/20">
              {/* Image */}
              <div className="aspect-[4/3] bg-[#F0F4F8] relative overflow-hidden">
                {!imageFailed && (
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={() =>
                      setImageErrors((prev) => ({ ...prev, [index]: true }))
                    }
                  />
                )}

                {!hideBadge && (
                  <div className="absolute top-3 left-3 z-10">
                    <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm">
                      <span className="text-xs font-bold text-[#1F2937] tracking-wide uppercase">
                        Event
                      </span>
                    </div>
                  </div>
                )}

                {imageFailed && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#F8FAFC]">
                    <div className="text-center">
                      <Calendar className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                      <span className="text-xs font-medium text-gray-400">
                        Event Image
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-[#2563EB]/5 border-[#2563EB]/15 mb-4">
                  <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span className="text-xs font-semibold text-[#2563EB]">
                    {event.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg mb-3 text-[#1F2937] group-hover:text-[#2563EB] transition-colors duration-300 line-clamp-2 leading-snug">
                  {event.title}
                </h3>

                {/* Summary */}
                <p
                  className="text-sm mb-4 leading-relaxed line-clamp-2"
                  style={{ color: "#4B5563" }}
                >
                  {event.summary}
                </p>

                {/* Location */}
                {event.location && (
                  <div className="flex items-start gap-2 text-sm mb-5">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#2563EB]" />
                    <span style={{ color: "#4B5563" }} className="line-clamp-1">
                      {event.location}
                    </span>
                  </div>
                )}

                {/* Learn more link */}
                <div className="flex items-center gap-2 text-sm font-semibold text-[#2563EB] group-hover:gap-3 transition-all duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Bottom green border */}
              <div className="h-[2px] w-full bg-[#22C55E]" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
