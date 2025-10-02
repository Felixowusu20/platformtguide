
"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Banson Doe",
    company: "Horizon Ventures",
    image: "/tguide.jpg",
    text: "Tertiary Guide made my university application process seamless. Their resources and support are unmatched!",
    stars: 5,
  },
  {
    name: "John Doe",
    company: "Omega Solutions",
    image: "/ug.png",
    text: "I found all the information I needed for my tertiary journey in one place. Highly recommended!",
    stars: 5,
  },
  {
    name: "John Doe",
    company: "Acme Solutions",
    image: "/knust.png",
    text: "The guidance and tips from Tertiary Guide helped me make the right choices for my future.",
    stars: 5,
  },
];


export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<any>(null);
  const slideCount = testimonials.length;
  const interval = 5000; // 5 seconds

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, interval);
    return () => clearTimeout(timeoutRef.current);
  }, [current, slideCount]);

  // For sliding animation
  const getTranslate = () => `translateX(-${current * 100}%)`;

  return (
    <section className="w-full py-16 bg-[#f8faff]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: getTranslate() }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-8 flex-1 max-w-sm min-w-[320px] flex flex-col items-center text-center border border-[#f0f2fa] mx-4"
                style={{ flex: '0 0 100%' }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, idx) => (
                    <FaStar key={idx} className="text-[#ffbe33]" />
                  ))}
                </div>
                <p className="text-[#22305a] text-sm mb-6 min-h-[72px]">{t.text}</p>
                <div className="flex items-center gap-3 mt-auto">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-[#ffbe33] bg-white"
                  />
                  <div className="text-left">
                    <div className="font-bold text-[#22305a]">{t.name}</div>
                    <div className="text-xs text-[#b0b8c9]">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Dots navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === current ? "bg-[#22305a]" : "bg-[#dbeafe]"
              }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}