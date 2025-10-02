"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is TertiaryGuide?",
    answer:
      "TertiaryGuide is an online platform designed to simplify the tertiary education journey. We provide comprehensive information about various educational institutions, their programs, admission requirements, and deadlines. Our platform also offers the convenience of purchasing application forms directly, streamlining the application process.",
  },
  {
    question: "How do I get started with TertiaryGuide?",
    answer:
      "Simply sign up on our platform, explore institutions and programs, and use our tools to guide your application process.",
  },
  {
    question: "Can I apply to multiple institutions through TertiaryGuide?",
    answer:
      "Yes, you can purchase and submit application forms for multiple institutions directly through our platform.",
  },
  {
    question: "Is TertiaryGuide only for students?",
    answer:
      "No, TertiaryGuide is also useful for parents, mentors, and admissions officers who want to support students or manage applications.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="w-full py-12 px-2 sm:px-4 flex flex-col items-center bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-[#22305a] text-center mb-6">
        Frequently Asked Questions
        <span className="block w-24 h-1 bg-[#FDBE33] mx-auto mt-2 rounded" />
      </h2>
      <div className="w-full max-w-3xl space-y-2">
        {faqs.map((faq, idx) => (
          <div
            key={faq.question}
            className="bg-[#f7f7f7] rounded-lg border border-[#e5e7eb] overflow-hidden"
          >
            <button
              className={`w-full text-left px-4 py-4 font-medium text-[#22305a] text-base sm:text-lg focus:outline-none flex items-center justify-between transition hover:bg-[#f3f4f6] ${openIdx === idx ? "border-b border-[#e5e7eb]" : ""}`}
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              aria-expanded={openIdx === idx}
            >
              <span className="underline text-[#22305a]">{faq.question}</span>
              <svg
                className={`w-5 h-5 ml-2 transition-transform duration-300 ${openIdx === idx ? "rotate-180" : "rotate-0"}`}
                fill="none"
                stroke="#FDBE33"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIdx === idx && (
              <div className="px-4 py-4 text-[#475569] text-base bg-white animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// Add this to your CSS (e.g., globals.css) for fade-in animation:
// @keyframes fade-in { from { opacity: 0; transform: translateY(-8px);} to { opacity: 1; transform: none;} }
// .animate-fade-in { animation: fade-in 0.3s ease; }