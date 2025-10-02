"use client";
export function AboutUs() {
  return (
    <div className="text-[#475569] text-base md:text-lg leading-relaxed mt-4">
      TertiaryGuide is the premier product of Alphafind. At Alphafind, we are on a mission to transform the lives of tertiary students through our unwavering commitment to their well-being. Our dedication is rooted in the belief that every student deserves two essential pillars of success: comfort and companionship. We understand the challenges students face daily, and we’ve crafted a suite of innovative technological solutions designed to make their academic, social, and emotional journeys easier and more enjoyable. We don’t just provide products and services; we provide a community where students can thrive. Alphafind is more than a company; it’s a dynamic and empathetic partner on your educational journey, passionately dedicated to creating a brighter future for the next generation. Join the Alphafind community today and experience the genuine care and support that sets us apart.
    </div>
  );
}

export function Mission() {
  return (
    <div className="text-[#475569] text-base md:text-lg leading-relaxed mt-4">
      Our mission is to empower every tertiary student in Africa with the resources, support, and opportunities they need to succeed. We strive to break down barriers to education, foster innovation, and build a connected community that uplifts and inspires.
    </div>
  );
}

export function Vision() {
  return (
    <div className="text-[#475569] text-base md:text-lg leading-relaxed mt-4">
      Our vision is to be the leading platform for tertiary education support in Africa, recognized for our commitment to student success, technological excellence, and positive social impact.
    </div>
  );
}

import { useState } from "react";

const tabs = [
  { label: "About", value: "about" },
  { label: "Mission", value: "mission" },
  { label: "Vision", value: "vision" },
];

export default function Allabout() {
  const [active, setActive] = useState("about");
  return (
    <section className="w-full py-12 px-2 md:px-0 flex flex-col items-center bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-[#22305a] text-center mb-2">
        What Drives Us
        <span className="block w-16 h-1 bg-[#FDBE33] mx-auto mt-2 rounded" />
      </h2>
      <div className="w-full max-w-4xl mt-8">
        <div className="flex border-b border-[#e5e7eb] justify-center gap-6 md:gap-16">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActive(tab.value)}
              className={`pb-2 px-2 md:px-6 font-semibold text-base md:text-lg transition-colors relative ${
                active === tab.value
                  ? "text-[#22305a] border-b-2 border-[#FDBE33]"
                  : "text-[#2563eb] border-b-2 border-transparent hover:text-[#FDBE33]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-4">
          {active === "about" && <AboutUs />}
          {active === "mission" && <Mission />}
          {active === "vision" && <Vision />}
        </div>
      </div>
    </section>
  );
}
