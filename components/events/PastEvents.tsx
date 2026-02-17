"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

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

export function PastEvents({ events }: PastEventsProps) {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => {
        const imageFailed = imageErrors[index];

        return (
          <motion.div
            key={index}
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 0, y: 30 }
            }
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={
              shouldReduceMotion
                ? {}
                : { y: -4, transition: { duration: 0.3 } }
            }
            className="group"
          >
            <div className="relative h-full rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-lg hover:shadow-xl hover:border-gray-200 transition-all duration-500">
              {/* Event Image */}
              <div className="aspect-video bg-gradient-to-br from-[#2563EB]/20 to-[#22C55E]/15 relative overflow-hidden">
                {!imageFailed && (
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={() => {
                      setImageErrors((prev) => ({ ...prev, [index]: true }));
                    }}
                  />
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC]/80 via-transparent to-transparent" />

                {/* Premium badge */}
                <div className="absolute top-3 left-3 z-10">
                  <div className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 shadow-lg">
                    <span className="text-xs font-bold text-white tracking-wide uppercase">
                      Past Event
                    </span>
                  </div>
                </div>

                {/* Fallback */}
                {imageFailed && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2563EB]/20 to-[#22C55E]/15">
                    <div className="text-center">
                      <Calendar className="w-10 h-10 text-[#2563EB]/50 mx-auto mb-2" />
                      <span className="text-xs font-medium text-[#475569]">
                        Event Image
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Event Content */}
              <div className="p-6">
                {/* Date chip */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2563EB]/20 border border-[#2563EB]/30 mb-4">
                  <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span className="text-xs font-semibold text-[#2563EB]">
                    {event.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl mb-3 text-[#0F172A] group-hover:text-[#2563EB] transition-colors duration-300 line-clamp-2">
                  {event.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-[#475569] mb-4 leading-relaxed line-clamp-2">
                  {event.summary}
                </p>

                {/* Location */}
                <div className="flex items-start gap-2 text-sm text-[#475569]">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#2563EB]" />
                  <span className="line-clamp-2">{event.location}</span>
                </div>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl border-2 border-[#2563EB]/30 shadow-[0_0_20px_rgba(37,99,235,0.2)]" />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
