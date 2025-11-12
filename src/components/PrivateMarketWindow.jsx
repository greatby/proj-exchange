"use client";
import Link from "next/link";
import { FiEye, FiTrendingUp } from "react-icons/fi"; // react-icons as you prefer

export default function PrivateMarketWindow() {
  return (
    <section className="w-full py-24 px-6 lg:px-20 bg-[#003E47] text-white">
      {/* Title + Subtitle */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl md:text-[3rem] font-[Monotype] leading-tight">
          Your window into the private market
        </h2>
        <p className="mt-6 text-[1.15rem] text-gray-200 leading-[2rem]">
          From data analytics to unflinching commentary on the most contentious issues in VC
          secondaries, we aim to give you vision in an opaque market.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#FF6B5A] pt-12">

        {/* Left Section */}
        <div>
          <FiEye size={42} className="text-[#FF6B5A] mb-4" />
          <h3 className="text-xl font-semibold mb-4">Commentary</h3>

          <Link href="#" className="block text-sm font-medium text-[#FF6B5A] hover:underline">
            View all articles →
          </Link>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col gap-4 border-x border-gray-600 px-8">
          <Link href="#" className="hover:underline">
            What to watch out for when investing in SPVs →
          </Link>
          <Link href="#" className="hover:underline">
            Figma’s IPO left billions on the table. What could it have done differently? →
          </Link>
          <Link href="#" className="hover:underline">
            Tender offers vs. market-based liquidity: what every private company should know →
          </Link>
        </div>

        {/* Right Section */}
        <div>
          <FiTrendingUp size={42} className="text-[#FF6B5A] mb-4" />
          <h3 className="text-xl font-semibold mb-4">Market reports</h3>

          <Link href="#" className="block hover:underline">
            2025 Annual State of the Private Market →
          </Link>
          <Link href="#" className="block hover:underline mt-2">
            AI, Crypto Fueling Transformation of Secondaries Market →
          </Link>
          <Link href="#" className="block hover:underline mt-2">
            Buyers are coming back →
          </Link>

          <Link href="#" className="block text-sm font-medium text-[#FF6B5A] mt-6 hover:underline">
            View all reports →
          </Link>
        </div>

      </div>
    </section>
  );
}
