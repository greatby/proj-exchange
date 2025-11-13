// "use client";
// import { useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import Link from "next/link";

// export default function Navbar() {
//   const [search, setSearch] = useState("");

//   return (
//     <nav className="fixed font-inter top-0 left-0 w-full bg-[#003E47] text-white z-50">
//       <div className="flex items-center justify-between py-4 px-8 lg:px-20">
//         {/* Logo */}
//         <div className="text-2xl flex items-center gap-6 font-semibold tracking-tight">
//           <Link href="/">
//             <span className="flex items-center gap-1">
//               <svg
//                 viewBox="0 0 101 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 height="24px"
//               >
//                 <path
//                   d="M10.07.348 0 6.114v3.494l10.07-5.766 9.956 5.766V6.114L10.07.348Z"
//                   fill="#EF5D60"
//                 ></path>
//                 <path
//                   d="m0 12.617 3.01-1.736v5.035l7.003 4.11 7.061-4.11v-5.035l2.894 1.736v5.036l-9.955 5.845L0 17.653v-5.036Z"
//                   fill="#fff"
//                 ></path>
//                 <g clip-path="url(#hiivelogo__a)" fill="#fff">
//                   <path d="M98.678 13.17c-.188-.63-.305-1.204-.527-1.73-.957-2.249-3.016-3.245-5.373-2.947-2.87.36-4.7 2.352-4.942 5.272-.118 1.384.02 2.726.547 4.034.832 2.069 3.12 3.529 5.359 3.376 1.067-.076 2.073-.304 2.94-.975a3.74 3.74 0 0 0 1.344-2.041c.076-.284.208-.353.478-.346.735.02 1.47.007 2.288.007-.125.456-.208.857-.354 1.238-.873 2.352-2.606 3.723-5.026 4.228-1.913.4-3.798.249-5.587-.596-1.677-.788-2.89-2.048-3.625-3.743-1.061-2.45-1.172-4.981-.291-7.486 1.032-2.968 3.14-4.754 6.294-5.238 1.629-.249 3.196-.07 4.693.65 1.49.713 2.537 1.855 3.237 3.329.749 1.584.902 3.272.874 4.995 0 .194-.083.263-.271.263-.436-.007-.88 0-1.317 0h-8.318c-.458 0-.465 0-.465-.457 0-.484.014-.968-.007-1.453-.014-.304.084-.394.388-.394 2.371.014 4.735.007 7.106.007.146.007.291.007.555.007ZM44.204 23.175V13.128c0-.601.035-.525-.513-.525H33.237v-1.53c0-.83 0-.83.832-.83h9.67c.465 0 .465 0 .465-.477 0-2.996.007-5.992-.007-8.995 0-.332.09-.436.423-.422.575.028 1.158.028 1.733 0 .312-.014.388.097.381.394-.007 2.906-.007 5.812-.007 8.718v13.243c0 .47 0 .47-.464.47-.666.008-1.331 0-2.059 0ZM28.322.355h2.309c.173 0 .263.056.25.243-.008.09 0 .186 0 .276V23.175c-.832 0-1.609.006-2.392-.007-.056 0-.132-.104-.153-.173-.027-.083-.007-.18-.007-.277V.826c-.007-.145-.007-.29-.007-.47ZM76.945 23.175c-.832 0-1.588.007-2.35-.014-.076 0-.18-.152-.222-.256-.783-1.945-1.56-3.889-2.336-5.84-1.151-2.878-2.302-5.757-3.446-8.635-.207-.512-.408-1.024-.61-1.543-.048-.124-.083-.256-.138-.429.852 0 1.663-.007 2.468.014.083 0 .2.131.242.228 1.04 2.657 2.073 5.321 3.106 7.985l2.911 7.473c.118.31.23.63.375 1.017ZM61.015 6.486h2.405v16.696c-.755 0-1.497.007-2.246-.007-.062 0-.152-.11-.18-.187-.035-.083-.007-.18-.007-.276V6.978c0-.166.014-.319.028-.492ZM52.571 23.174V6.492c.09-.007.174-.028.264-.028.61 0 1.227.014 1.837-.007.27-.007.36.09.326.34-.007.048 0 .09 0 .138v15.768c0 .231 0 .349-.056.409-.058.062-.176.062-.416.062-.638.007-1.282 0-1.955 0ZM83.135 6.486c-1.698 4.31-3.376 8.58-5.081 12.925-.104-.222-.173-.36-.229-.506-.319-.802-.638-1.605-.936-2.414a.879.879 0 0 1 0-.582c1.13-3.016 2.281-6.026 3.418-9.05.11-.29.242-.415.568-.4.624.027 1.248.006 1.872.006.11 0 .222.014.388.02ZM52.211 1.962c0-.9.686-1.599 1.553-1.599.873.007 1.58.74 1.566 1.633a1.561 1.561 0 0 1-1.6 1.557c-.86-.014-1.526-.706-1.519-1.591ZM62.207.363c.88 0 1.587.713 1.587 1.612 0 .886-.686 1.578-1.573 1.578-.86 0-1.54-.692-1.546-1.57-.014-.9.666-1.613 1.532-1.62Z"></path>
//                 </g>
//                 <defs>
//                   <clipPath id="hiivelogo__a">
//                     <path
//                       fill="#fff"
//                       transform="translate(28.316 .348)"
//                       d="M0 0h72.684v23.151H0z"
//                     ></path>
//                   </clipPath>
//                 </defs>
//               </svg>
//             </span>
//           </Link>
//           <div className="hidden md:flex items-center gap-8 text-[0.9rem] font-medium">
//             <Link href="#" className="hover:text-[#FF6B5A]">
//               Issuers
//             </Link>
//             <Link href="#" className="hover:text-[#FF6B5A]">
//               Investors
//             </Link>
//             <Link href="#" className="hover:text-[#FF6B5A]">
//               Sellers
//             </Link>
//             <Link href="#" className="hover:text-[#FF6B5A]">
//               Marketplace
//             </Link>
//             <Link href="#" className="hover:text-[#FF6B5A]">
//               Insights
//             </Link>
//             <Link href="#" className="hover:text-[#FF6B5A]">
//               About
//             </Link>
//           </div>
//         </div>

//         {/* Menu Links */}

//         {/* Search + Auth */}
//         <div className="flex items-center gap-4">
//           {/* Search Box */}
//           <div className="relative hidden md:flex items-center">
//             <FiSearch className="absolute left-3 text-gray-400" size={16} />
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               type="text"
//               placeholder="Search companies"
//               className="bg-white text-gray-900 rounded-md pl-9 pr-4 py-2 w-52 focus:outline-none focus:ring-2 focus:ring-gray-300"
//             />
//           </div>

//           {/* Auth Buttons */}
//           <Link href="/login" className="text-sm hover:text-gray-300">
//             Sign In
//           </Link>

//           <Link
//             href="/signup"
//             className="bg-[#FF6B5A] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#ff5743]"
//           >
//             Sign Up
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }
"use client";

import { useState } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { IoClose, IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Dropdowns
  const [openInvestors, setOpenInvestors] = useState(false);
  const [openMarketplace, setOpenMarketplace] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);

  return (
    <nav className="fixed font-inter top-0 left-0 w-full bg-[#003E47] text-white z-50">
      <div className="flex items-center justify-between py-4 px-8 lg:px-20">
        {/* Mobile Menu Icon */}
        <button
          className="text-3xl md:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <IoMenu />
        </button>

        {/* Logo */}
        <div className="text-2xl flex items-center gap-6 font-semibold tracking-tight">
          <Link href="/">
            <span className="flex items-center gap-1 cursor-pointer">
              {/* Your SVG logo unchanged */}
              <svg
                viewBox="0 0 101 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
              >
                <path
                  d="M10.07.348 0 6.114v3.494l10.07-5.766 9.956 5.766V6.114L10.07.348Z"
                  fill="#EF5D60"
                ></path>
                <path
                  d="m0 12.617 3.01-1.736v5.035l7.003 4.11 7.061-4.11v-5.035l2.894 1.736v5.036l-9.955 5.845L0 17.653v-5.036Z"
                  fill="#fff"
                ></path>
                <g clip-path="url(#hiivelogo__a)" fill="#fff">
                  <path d="M98.678 13.17c-.188-.63-.305-1.204-.527-1.73-.957-2.249-3.016-3.245-5.373-2.947-2.87.36-4.7 2.352-4.942 5.272-.118 1.384.02 2.726.547 4.034.832 2.069 3.12 3.529 5.359 3.376 1.067-.076 2.073-.304 2.94-.975a3.74 3.74 0 0 0 1.344-2.041c.076-.284.208-.353.478-.346.735.02 1.47.007 2.288.007-.125.456-.208.857-.354 1.238-.873 2.352-2.606 3.723-5.026 4.228-1.913.4-3.798.249-5.587-.596-1.677-.788-2.89-2.048-3.625-3.743-1.061-2.45-1.172-4.981-.291-7.486 1.032-2.968 3.14-4.754 6.294-5.238 1.629-.249 3.196-.07 4.693.65 1.49.713 2.537 1.855 3.237 3.329.749 1.584.902 3.272.874 4.995 0 .194-.083.263-.271.263-.436-.007-.88 0-1.317 0h-8.318c-.458 0-.465 0-.465-.457 0-.484.014-.968-.007-1.453-.014-.304.084-.394.388-.394 2.371.014 4.735.007 7.106.007.146.007.291.007.555.007ZM44.204 23.175V13.128c0-.601.035-.525-.513-.525H33.237v-1.53c0-.83 0-.83.832-.83h9.67c.465 0 .465 0 .465-.477 0-2.996.007-5.992-.007-8.995 0-.332.09-.436.423-.422.575.028 1.158.028 1.733 0 .312-.014.388.097.381.394-.007 2.906-.007 5.812-.007 8.718v13.243c0 .47 0 .47-.464.47-.666.008-1.331 0-2.059 0ZM28.322.355h2.309c.173 0 .263.056.25.243-.008.09 0 .186 0 .276V23.175c-.832 0-1.609.006-2.392-.007-.056 0-.132-.104-.153-.173-.027-.083-.007-.18-.007-.277V.826c-.007-.145-.007-.29-.007-.47ZM76.945 23.175c-.832 0-1.588.007-2.35-.014-.076 0-.18-.152-.222-.256-.783-1.945-1.56-3.889-2.336-5.84-1.151-2.878-2.302-5.757-3.446-8.635-.207-.512-.408-1.024-.61-1.543-.048-.124-.083-.256-.138-.429.852 0 1.663-.007 2.468.014.083 0 .2.131.242.228 1.04 2.657 2.073 5.321 3.106 7.985l2.911 7.473c.118.31.23.63.375 1.017ZM61.015 6.486h2.405v16.696c-.755 0-1.497.007-2.246-.007-.062 0-.152-.11-.18-.187-.035-.083-.007-.18-.007-.276V6.978c0-.166.014-.319.028-.492ZM52.571 23.174V6.492c.09-.007.174-.028.264-.028.61 0 1.227.014 1.837-.007.27-.007.36.09.326.34-.007.048 0 .09 0 .138v15.768c0 .231 0 .349-.056.409-.058.062-.176.062-.416.062-.638.007-1.282 0-1.955 0ZM83.135 6.486c-1.698 4.31-3.376 8.58-5.081 12.925-.104-.222-.173-.36-.229-.506-.319-.802-.638-1.605-.936-2.414a.879.879 0 0 1 0-.582c1.13-3.016 2.281-6.026 3.418-9.05.11-.29.242-.415.568-.4.624.027 1.248.006 1.872.006.11 0 .222.014.388.02ZM52.211 1.962c0-.9.686-1.599 1.553-1.599.873.007 1.58.74 1.566 1.633a1.561 1.561 0 0 1-1.6 1.557c-.86-.014-1.526-.706-1.519-1.591ZM62.207.363c.88 0 1.587.713 1.587 1.612 0 .886-.686 1.578-1.573 1.578-.86 0-1.54-.692-1.546-1.57-.014-.9.666-1.613 1.532-1.62Z"></path>
                </g>
                <defs>
                  <clipPath id="hiivelogo__a">
                    <path
                      fill="#fff"
                      transform="translate(28.316 .348)"
                      d="M0 0h72.684v23.151H0z"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
            </span>
          </Link>

          {/* Desktop Menu */}
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-[1rem] font-medium">
            <Link href="#" className="hover:text-[#FF6B5A]">
              Issuers
            </Link>

            {/* Investors Dropdown */}
            <div className="relative group">
              <div className="hover:text-[#FF6B5A] cursor-pointer">
                Investors
              </div>
              <div className="absolute left-0 mt-2 bg-white text-black shadow-xl rounded-md w-40 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Overview
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Hiive Funds
                </Link>
              </div>
            </div>

            <Link href="#" className="hover:text-[#FF6B5A]">
              Sellers
            </Link>

            {/* Marketplace Dropdown */}
            <div className="relative group">
              <div className="hover:text-[#FF6B5A] cursor-pointer">
                Marketplace
              </div>
              <div className="absolute left-0 mt-2 bg-white text-black shadow-xl rounded-md w-40 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  All Companies
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Hiive50
                </Link>
              </div>
            </div>

            <Link href="#" className="hover:text-[#FF6B5A]">
              Insights
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <div className="hover:text-[#FF6B5A] cursor-pointer">About</div>
              <div className="absolute left-0 mt-2 bg-white text-black shadow-xl rounded-md w-40 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Our Story
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Careers
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right section (Search + Auth) */}
        <div className=" hidden md:flex  items-center gap-4">
          {/* Search Box */}
          <div className="relative hidden md:flex items-center">
            <FiSearch className="absolute left-3 text-gray-400" size={16} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search companies"
              className="bg-white text-[1rem] text-gray-900 rounded-md pl-9 pr-4 w-76 h-10 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <Link
            href="/login"
            className="text-sm hidden md:flex hover:text-gray-300"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="bg-[#FF6B5A] hidden md:flex px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#ff5743]"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* MOBILE SLIDE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white text-black z-50 p-6 overflow-y-auto">
          {/* Close button */}
          <button
            className="text-3xl mb-6"
            onClick={() => setMobileOpen(false)}
          >
            <IoClose />
          </button>

          {/* Mobile links */}
          <div className="flex flex-col gap-6 text-[1.1rem]">
            <Link href="#" className="font-medium">
              Issuers
            </Link>

            {/* Investors accordion */}
            <div>
              <div
                className="flex justify-between items-center font-medium cursor-pointer"
                onClick={() => setOpenInvestors(!openInvestors)}
              >
                Investors{" "}
                {openInvestors ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </div>
              {openInvestors && (
                <div className="ml-4 mt-2 flex flex-col gap-2 text-gray-700">
                  <Link href="#">Overview</Link>
                  <Link href="#">Hiive Funds</Link>
                </div>
              )}
            </div>

            <Link href="#" className="font-medium">
              Sellers
            </Link>

            {/* Marketplace accordion */}
            <div>
              <div
                className="flex justify-between items-center font-medium cursor-pointer"
                onClick={() => setOpenMarketplace(!openMarketplace)}
              >
                Marketplace{" "}
                {openMarketplace ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </div>
              {openMarketplace && (
                <div className="ml-4 mt-2 flex flex-col gap-2 text-gray-700">
                  <Link href="#">All Companies</Link>
                  <Link href="#">Hiive50</Link>
                </div>
              )}
            </div>

            <Link href="#" className="font-medium">
              Insights
            </Link>

            {/* About accordion */}
            <div>
              <div
                className="flex justify-between items-center font-medium cursor-pointer"
                onClick={() => setOpenAbout(!openAbout)}
              >
                About {openAbout ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </div>
              {openAbout && (
                <div className="ml-4 mt-2 flex flex-col gap-2 text-gray-700">
                  <Link href="#">Our Story</Link>
                  <Link href="#">Careers</Link>
                </div>
              )}
            </div>
          </div>

          {/* Bottom auth buttons */}
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/login" className="border px-6 py-2 rounded-full">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="bg-[#FF6B5A] px-6 py-2 rounded-full text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
