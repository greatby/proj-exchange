"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-[#FF5A5A] py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Left text */}
        <h2 className="text-3xl md:text-[3.75rem] font-[Monotype] font-normal leading-tight text-white max-w-3xl">
          Welcome to the global pre-IPO marketplace.
        </h2>

        {/* Right buttons */}
        <div className="flex items-center gap-12">
          {/* Left CTA */}
          <div className="flex flex-col items-center text-white">
            <p className="text-[14px] mb-2 font-medium text-white">Got a question?</p>
            <p className="text-[14px] -mt-2 mb-4 font-medium text-white">Let's chat</p>

            <Link
              href="#"
              className="bg-white text-[#FF5A5A] px-8 py-3 rounded-full font-semibold text-[14px] hover:bg-[#ffe9e9] transition"
            >
              Demo
            </Link>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-[1px] h-16 bg-white/50" />

          {/* Right CTA */}
          <div className="flex flex-col items-center text-white">
            <p className="text-[14px] mb-2 font-medium text-white">Start trading</p>
            <p className="text-[14px] -mt-2 mb-4 font-medium text-white">today</p>

            <Link
              href="#"
              className="bg-white text-[#FF5A5A] px-8 py-3 rounded-full font-semibold text-[14px] hover:bg-[#ffe9e9] transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
