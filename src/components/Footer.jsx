"use client";

import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { TbBrandX } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-[#f9f9f9] text-[#5A5A5A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">

        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* Logo + subtitle */}
          <div className="flex flex-col gap-3 max-w-[260px]">
            <div className="flex items-center gap-2">
              {/* Replace with your correct logo */}
              <img src="/logo.svg" alt="Hiive Logo" className="h-10" />
            </div>
            <p className="text-sm">The marketplace for private stock</p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-12 text-sm">

            {/* Overview */}
            <div>
              <h4 className="font-semibold text-[#003E47] mb-4">Overview</h4>
              <ul className="space-y-2">
                <li><Link href="#">Issuers</Link></li>
                <li><Link href="#">Investors</Link></li>
                <li><Link href="#">Sellers</Link></li>
                <li><Link href="#">Hiive50</Link></li>
                <li><Link href="#">Browse Companies</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-[#003E47] mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="#">Articles</Link></li>
                <li><Link href="#">Reports</Link></li>
                <li><Link href="#">Guides</Link></li>
                <li><Link href="#">Brand Guidelines</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold text-[#003E47] mb-4">Let's connect</h4>
              <ul className="space-y-2">
                <li><Link href="#">Contact Us</Link></li>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#" className="flex items-center gap-1">
                  Careers (We're hiring!) →
                </Link></li>
              </ul>

              {/* Social icons */}
              <div className="flex items-center gap-5 mt-5 text-xl text-[#003E47]">
                <Link href="#"><FaLinkedinIn /></Link>
                <Link href="#"><FiInstagram /></Link>
                <Link href="#"><TbBrandX /></Link>
              </div>
            </div>

          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-gray-300" />

        {/* Legal links */}
        <div className="flex gap-6 text-sm mb-6">
          <Link href="#" className="hover:underline">Privacy</Link>
          <Link href="#" className="hover:underline">Disclosures</Link>
          <Link href="#" className="hover:underline">Terms of Use</Link>
        </div>

        {/* Footer Disclaimer */}
        <p className="text-xs leading-6 opacity-80 max-w-5xl">
          Securities are offered by Hiive Markets Limited, member of FINRA / SIPC and registered exempt 
          market dealer in Ontario, British Columbia, Alberta, Saskatchewan, Manitoba and Nova Scotia.
          Brokerage fees may apply. Find Hiive on BrokerCheck. Hiive does not conduct or solicit brokerage 
          activities in any jurisdiction where it is not registered or otherwise authorized to do so.
          <br /><br />
          © The Hiive Company Limited 2025. All rights reserved. By using this site, you accept our
          Terms of Use and Privacy Policy.
        </p>
      </div>
    </footer>
  );
}
