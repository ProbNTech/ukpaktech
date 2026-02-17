"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

const events = [
  {
    title: "Pakistan Business Summit @ Davos 2025",
    date: "20–24 January 2025",
    location: "Davos, Switzerland",
    summary: "High-level sideline summit during WEF week focusing on bilateral trade and investment.",
    image: "/image/events/pakistan-business-summit-davos-2025.jpg",
  },
  {
    title: "UK–Pakistan Business Summit 2025",
    date: "21 November 2025",
    location: "The Cumberland Hotel, London, United Kingdom",
    summary: "Flagship bilateral business summit fostering cross-sector collaborations and policy discussions.",
    image: "/image/events/uk-pakistan-business-summit-2025.jpg",
  },
  {
    title: "DHA Peshawar UK Road Show 2025",
    date: "4–10 May 2025",
    location: "London, Birmingham, Manchester, Slough",
    summary: "Diaspora investment roadshow connecting UK-based investors with development opportunities.",
    image: "/image/events/DHA-Peshawar-UK-Road-Show-2025.jpg",
  },
];

export function EventPreview() {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {events.map((event, index) => {
        const imageFailed = imageErrors[index];

        return (
          <Link key={index} href="/events" className="group block">
            <div className="relative h-full rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
              <div className="aspect-video bg-[#F8FAFC] relative overflow-hidden">
                {!imageFailed && (
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    onError={() => setImageErrors((prev) => ({ ...prev, [index]: true }))}
                  />
                )}

                <div className="absolute left-4 top-4 z-10 rounded-full bg-[#2563EB] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-sm">
                  <span>EVENT</span>
                </div>

                {imageFailed && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#F8FAFC]">
                    <div className="text-center">
                      <Calendar className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                      <span className="text-xs font-medium text-gray-400">Event Image</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2563EB]/5 border border-[#2563EB]/15 mb-4">
                  <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span className="text-xs font-semibold text-[#2563EB]">{event.date}</span>
                </div>

                <h3 className="font-heading font-semibold text-xl mb-2 text-[#1F2937] group-hover:text-[#2563EB] transition-colors duration-300 line-clamp-2">{event.title}</h3>
                <p className="text-sm text-[#4B5563] mb-4 leading-relaxed line-clamp-2">{event.summary}</p>

                <div className="flex items-start gap-2 text-sm text-[#4B5563] mb-4">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#2563EB]" />
                  <span className="line-clamp-2">{event.location}</span>
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-[#2563EB] group-hover:gap-3 transition-all duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
