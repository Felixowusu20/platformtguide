"use client";
import { useState } from "react";

export default function SearchEngine() {
  const [query, setQuery] = useState("");

  return (
    <section className="w-full flex flex-col items-center py-10 px-2 md:px-0">
      <h2 className="text-xl md:text-2xl font-bold text-[#22305a] mb-6 text-center tracking-tight">
        Schools with Deadlines Approaching
      </h2>
      <div className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-3">
        <input
          type="text"
          placeholder="Search schools, courses, or deadlines..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-3 rounded-l-lg rounded-r-lg sm:rounded-r-none border border-[#FDBE33] focus:border-[#22305a] outline-none text-base shadow-md bg-white/80 placeholder:text-gray-400 transition-all"
        />
        <button
          className="mt-2 sm:mt-0 sm:ml-0 px-6 py-3 rounded-r-lg rounded-l-lg sm:rounded-l-none bg-[#FDBE33] text-[#22305a] font-semibold text-base shadow hover:bg-[#fbbf24] transition-colors border border-[#FDBE33]"
        >
          Search
        </button>
      </div>
    </section>
  );
}
