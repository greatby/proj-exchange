"use client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#003E47] text-white z-50">
      <div className="flex items-center justify-between py-4 px-8 lg:px-16">
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-tight">
          <Link href="/">
            <span className="flex items-center gap-1">
              <span className="w-5 h-5 bg-red-500 rounded-sm"></span>
              Hiive
            </span>
          </Link>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex items-center gap-8 text-[1rem] font-medium">
          <Link href="#" className="hover:text-[#FF6B5A]">Issuers</Link>
          <Link href="#" className="hover:text-[#FF6B5A]">Investors</Link>
          <Link href="#" className="hover:text-[#FF6B5A]">Sellers</Link>
          <Link href="#" className="hover:text-[#FF6B5A]">Marketplace</Link>
          <Link href="#" className="hover:text-[#FF6B5A]">Insights</Link>
          <Link href="#" className="hover:text-[#FF6B5A]">About</Link>
        </div>

        {/* Search + Auth */}
        <div className="flex items-center gap-4">
          {/* Search Box */}
          <div className="relative hidden md:flex items-center">
            <FiSearch className="absolute left-3 text-gray-400" size={16} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search companies"
              className="bg-white text-gray-900 rounded-md pl-9 pr-4 py-2 w-52 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Auth Buttons */}
          <Link href="/login" className="text-sm hover:text-gray-300">
            Sign In
          </Link>

          <Link
            href="/signup"
            className="bg-[#FF6B5A] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#ff5743]"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
