"use client";

import {
  FaChartLine,
  FaExchangeAlt,
  FaRobot,
  FaChartPie,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WhyHiive() {
  const features = [
    {
      icon: <FaChartLine size={22} />,
      title: "Discover market pricing",
      desc: "View current and historical data on bids, listings, and private market transactions. Best of all, there is no charge to access Hiive’s massive repository of real-time price data",
    },
    {
      icon: <FaExchangeAlt size={22} />,
      title: "Access the market directly",
      desc: "Connect directly with a deep pool of verified buyers and sellers, and stay in control from start to finish.",
    },
    {
      icon: <FaRobot size={22} />,
      title: "Automate your transaction",
      desc: "Place a bid or list shares for sale. Standardize your fees and automate your agreements. So you can stop chasing brokers, and they can stop chasing you.",
    },
    {
      icon: <FaChartPie size={22} />,
      title: "Manage your market with Hiive",
      desc: "With Hiive, you can pre-approve who buys, who sells, and how much. You can also create trading ranges and windows. You make the rules, and we take care of the rest.",
    },
  ];

  return (
    <section className="w-full py-24 px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-16">
      {/* Left Card */}
      <div className="max-w-lg bg-[#f8f8f4] rounded-xl shadow-md pt-[70px] px-[100px]">
        <h2 className="text-3xl md:text-[3rem] font-normal font-[Monotype] text-[#003E47] mb-4 leading-15">
          Hiive is transparent,
          <br /> centralized, and easy.
        </h2>

        <p className="text-[1.25rem] font-normal text-gray-600 leading-9">
          Buying and selling secondaries the traditional way is a lot of work.
          Hiive gives you simple and direct access to one central meeting place
          for qualified participants.
        </p>

        <Link
          href="#"
          className="inline-block bg-[#FF6B5A] px-6 py-3 rounded-full text-sm font-semibold text-white mt-6 hover:bg-[#ff5743]"
        >
          Get started
        </Link>

        {/* Image */}
        <div className="mt-10">
          <Image
            src="/images/dashboard.webp" /* replace with your image */
            width={500}
            height={320}
            className="rounded-md"
            alt="Hiive dashboard preview"
          />
        </div>
      </div>

      {/* Right side: Feature list */}
      <div className="max-w-xl flex flex-col gap-10">
        {features.map((item, index) => (
          <div key={index} className="flex items-start gap-5">
            <div className="text-[#FF6B5A]">{item.icon}</div>
            <div>
              <h3 className="text-[1.75rem] font-medium text-[#003E47]">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-1 text-[15px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
       
      </div>
    </section>
  );
}
