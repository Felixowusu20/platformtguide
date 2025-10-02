"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/hero1.jpg",
    caption: "Discover Top Universities in Ghana",
  },
  {
    image: "/hero4.jpg",
    caption: "Find Your Dream Course & Career Path",
  },
  {
    image: "/hero1.jpg",
    caption: "Apply Easily to Accredited Institutions",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <section className="relative w-full h-[320px] md:h-[420px] lg:h-[520px] flex items-center justify-center overflow-hidden bg-[#0e1e40]">
        {slides.map((slide, idx) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <Image
              src={slide.image}
              alt={slide.caption}
              fill
              className="object-cover w-full h-full opacity-70"
              priority={idx === 0}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
              <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg text-center px-4">
                {slide.caption}
              </h2>
            </div>
          </div>
        ))}
        {/* Carousel indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full border border-white bg-white/60 transition-all duration-300 ${idx === current ? "bg-[#FDBE33] scale-110" : "bg-white/30"}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>
      {/* Call to Action Button */}
      <div className="-mt-8 md:-mt-12 z-30 flex justify-center w-full">
        <button
          className="px-6 md:px-10 py-2.5 md:py-3 rounded-full bg-[#fdbe3340] text-[#22305a] font-bold text-base md:text-lg shadow-lg hover:bg-[#FDBE33] hover:text-[#0e1e40] hover:scale-105 transition-all border-2 border-[#FDBE33] backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#FDBE33] focus:ring-offset-2"
        >
          Start Buying
        </button>
      </div>
    </div>
  );
}
