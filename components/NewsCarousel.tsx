"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { NewsCard, NewsCardProps } from "./NewsCard";

interface NewsCarouselProps {
  articles: NewsCardProps[];
}

export default function NewsCarousel({ articles }: NewsCarouselProps) {
  return (
    <div className="relative">

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}

        navigation={{
          nextEl: ".news-next",
          prevEl: ".news-prev"
        }}

        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {articles.map((article, i) => (
          <SwiperSlide key={article.slug}>
            <NewsCard {...article} index={i} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Buttons Bottom Left */}

     <div className="flex justify-end gap-3 mt-6">

  {/* Prev */}
  <button className="news-prev group w-11 h-11 flex items-center justify-center rounded-full bg-[#16a34a] shadow-md hover:scale-105 transition-all duration-300">
    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-white transition-transform duration-300 group-hover:-translate-x-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>

  </button>

  {/* Next */}
  <button className="news-next group w-11 h-11 flex items-center justify-center rounded-full bg-[#16a34a] shadow-md hover:scale-105 transition-all duration-300">

    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>

  </button>

</div>

    </div>
  );
}
