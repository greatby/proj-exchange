"use client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function ExploreSearch() {
  const [search, setSearch] = useState("");

  return (
    <section className="w-full max-w-6xl mx-auto my-16 bg-[linear-gradient(90deg,#003E47_0%,#027788_100%)] text-white px-8 lg:px-20 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
      
      {/* Heading */}
      <h2 className="text-3xl lg:text-5xl font-[Monotype] leading-tight max-w-xl">
        Explore over 3,000
        <br /> pre-IPO companies
      </h2>

      {/* Search Box */}
      <div className="relative w-full max-w-lg">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search companies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white text-gray-900 rounded-full py-3 px-12 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

    </section>
  );
}
