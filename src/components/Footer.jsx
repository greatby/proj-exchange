"use client";

import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { TbBrandX } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="w-full font-inter border-t bg-[#f9f9f9] text-[#5A5A5A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-start gap-52">
          {/* Logo + subtitle */}
          <div className="flex flex-col gap-3 max-w-[260px]">
            <div className="flex items-center gap-2">
              {/* Replace with your correct logo */}
              <svg
                viewBox="0 0 400 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height="49px"
              >
                <path
                  d="M39.8844 0L0 22.9132V36.8L39.8844 13.8868L79.3103 36.8V22.9132L39.8844 0Z"
                  fill="#F15F61"
                ></path>
                <path
                  d="M0 48.7601L11.9195 41.8601V61.8701L39.6551 78.2001L67.62 61.8701V41.8601L79.0811 48.7601V68.7701L39.6551 92.0001L0 68.7701V48.7601Z"
                  fill="#19434F"
                ></path>
                <g clip-path="url(#clip0_418_6)">
                  <path
                    d="M390.803 50.949C390.061 48.4469 389.595 46.1647 388.716 44.0751C384.927 35.139 376.773 31.1797 367.439 32.362C356.073 33.7918 348.825 41.7105 347.864 53.3136C347.397 58.8127 347.946 64.1468 350.033 69.3435C353.328 77.5646 362.387 83.3662 371.255 82.7613C375.483 82.4588 379.464 81.5515 382.896 78.8844C385.614 76.7673 387.343 74.0452 388.222 70.7732C388.524 69.6459 389.046 69.371 390.116 69.3985C393.026 69.4809 395.937 69.426 399.176 69.426C398.682 71.2407 398.353 72.8354 397.776 74.3476C394.317 83.6961 387.453 89.1402 377.872 91.1474C370.294 92.7422 362.827 92.1372 355.744 88.7828C349.1 85.6483 344.295 80.6441 341.385 73.9077C337.184 64.1743 336.745 54.111 340.232 44.1576C344.323 32.362 352.669 25.2682 365.16 23.3435C371.612 22.3536 377.817 23.0685 383.747 25.928C389.65 28.7601 393.795 33.2968 396.568 39.1534C399.533 45.4499 400.137 52.1588 400.027 59.0052C400.027 59.775 399.698 60.05 398.957 60.05C397.227 60.0225 395.47 60.05 393.74 60.05C382.759 60.05 371.777 60.05 360.795 60.05C358.983 60.05 358.956 60.05 358.956 58.2353C358.956 56.3106 359.011 54.3859 358.928 52.4612C358.873 51.2514 359.258 50.894 360.466 50.894C369.855 50.949 379.217 50.9215 388.606 50.9215C389.183 50.949 389.759 50.949 390.803 50.949Z"
                    fill="#19434F"
                  ></path>
                  <path
                    d="M175.067 90.7076C175.067 89.9102 175.067 89.3053 175.067 88.7279C175.067 76.08 175.067 63.432 175.067 50.7841C175.067 48.392 175.204 48.6944 173.035 48.6944C159.912 48.6944 146.789 48.6944 133.638 48.6944C133.034 48.6944 132.458 48.6944 131.634 48.6944C131.634 46.6048 131.634 44.5976 131.634 42.6179C131.634 39.3185 131.634 39.3185 134.929 39.3185C147.695 39.3185 160.461 39.3185 173.227 39.3185C175.067 39.3185 175.067 39.3185 175.067 37.4213C175.067 25.5157 175.094 13.6102 175.039 1.67711C175.039 0.357325 175.396 -0.0551077 176.714 -0.000116681C178.993 0.109865 181.299 0.109865 183.578 -0.000116681C184.813 -0.0551077 185.115 0.38482 185.088 1.56713C185.06 13.1152 185.06 24.6634 185.06 36.2115C185.06 53.7536 185.06 71.2958 185.06 88.8379C185.06 90.7076 185.06 90.7076 183.221 90.7076C180.585 90.7351 177.949 90.7076 175.067 90.7076Z"
                    fill="#19434F"
                  ></path>
                  <path
                    d="M112.169 0.0273438C115.463 0.0273438 118.374 0.0273438 121.311 0.0273438C121.998 0.0273438 122.354 0.247308 122.3 0.989687C122.272 1.34713 122.3 1.73207 122.3 2.08951C122.3 30.9598 122.3 59.8301 122.3 88.6729C122.3 89.3053 122.3 89.9377 122.3 90.7076C119.005 90.7076 115.93 90.735 112.828 90.6801C112.608 90.6801 112.306 90.2676 112.224 89.9927C112.114 89.6627 112.196 89.2778 112.196 88.8928C112.196 59.8851 112.196 30.8773 112.196 1.89704C112.169 1.31963 112.169 0.742227 112.169 0.0273438Z"
                    fill="#19434F"
                  ></path>
                  <path
                    d="M304.733 90.7075C301.439 90.7075 298.446 90.735 295.426 90.6525C295.124 90.6525 294.712 90.0476 294.548 89.6352C291.445 81.9089 288.371 74.1827 285.296 66.429C280.738 54.9908 276.181 43.5527 271.651 32.1145C270.827 30.0799 270.031 28.0452 269.235 25.983C269.043 25.4881 268.905 24.9657 268.686 24.2783C272.063 24.2783 275.275 24.2508 278.46 24.3333C278.789 24.3333 279.256 24.8557 279.42 25.2407C283.539 35.7989 287.629 46.3847 291.72 56.9705C295.564 66.8689 299.407 76.7673 303.251 86.6657C303.717 87.903 304.157 89.1677 304.733 90.7075Z"
                    fill="#19434F"
                  ></path>
                  <path
                    d="M241.643 24.3884C244.856 24.3884 247.958 24.3884 251.17 24.3884C251.17 46.4673 251.17 68.5187 251.17 90.7351C248.177 90.7351 245.24 90.7626 242.275 90.7076C242.028 90.7076 241.671 90.2677 241.561 89.9652C241.424 89.6353 241.534 89.2504 241.534 88.8654C241.534 68.0238 241.534 47.1822 241.534 26.3406C241.534 25.6807 241.588 25.0758 241.643 24.3884Z"
                    fill="#19434F"
                  ></path>
                  <path
                    d="M208.204 90.7076C208.204 68.5462 208.204 46.5223 208.204 24.4159C208.561 24.3884 208.89 24.306 209.247 24.306C211.663 24.306 214.107 24.361 216.523 24.2785C217.593 24.251 217.95 24.6359 217.813 25.6257C217.786 25.8182 217.813 25.9832 217.813 26.1757C217.813 47.0722 217.813 67.9413 217.813 88.8379C217.813 89.7548 217.813 90.222 217.593 90.4602C217.364 90.7076 216.898 90.7076 215.946 90.7076C213.42 90.7351 210.867 90.7076 208.204 90.7076Z"
                    fill="#19434F"
                  ></path>
                  <path
                    d="M329.25 24.3885C322.524 41.5182 315.88 58.483 309.126 75.7501C308.714 74.8703 308.44 74.3204 308.22 73.743C306.957 70.5535 305.694 67.364 304.514 64.147C304.267 63.4596 304.239 62.5248 304.514 61.8374C308.989 49.8494 313.546 37.8888 318.049 25.8733C318.488 24.7185 319.009 24.2235 320.3 24.2785C322.771 24.3885 325.242 24.306 327.713 24.306C328.152 24.306 328.591 24.361 329.25 24.3885Z"
                    fill="#19434F"
                  ></path>
                  <path
                    d="M206.776 6.4064C206.776 2.83198 209.494 0.0549316 212.926 0.0549316C216.385 0.0824272 219.186 2.99695 219.131 6.54387C219.076 10.0633 216.303 12.7854 212.789 12.7304C209.384 12.6754 206.749 9.92582 206.776 6.4064Z"
                    fill="#19434F"
                  ></path>
                  <path
                    d="M246.366 0.0549316C249.852 0.0549316 252.653 2.88697 252.653 6.46139C252.653 9.98081 249.935 12.7304 246.421 12.7304C243.016 12.7304 240.326 9.98081 240.298 6.48888C240.243 2.91447 242.934 0.0824272 246.366 0.0549316Z"
                    fill="#19434F"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_418_6">
                    <rect
                      width="287.858"
                      height="92"
                      fill="white"
                      transform="translate(112.142)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="text-[1.125rem]">The marketplace for private stock</p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-12 text-sm">
            {/* Overview */}
            <div>
              <h4 className="font-semibold text-[#969696] mb-4">Overview</h4>
              <ul className="space-y-3 text-black">
                <li>
                  <Link href="#">Issuers</Link>
                </li>
                <li>
                  <Link href="#">Investors</Link>
                </li>
                <li>
                  <Link href="#">Sellers</Link>
                </li>
                <li>
                  <Link href="#">Hiive50</Link>
                </li>
                <li>
                  <Link href="#">Browse Companies</Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-[#969696] mb-4">Resources</h4>
              <ul className="space-y-3 text-black">
                <li>
                  <Link href="#">Articles</Link>
                </li>
                <li>
                  <Link href="#">Reports</Link>
                </li>
                <li>
                  <Link href="#">Guides</Link>
                </li>
                <li>
                  <Link href="#">Brand Guidelines</Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold text-[#969696] mb-4">
                Let's connect
              </h4>
              <ul className="space-y-3 text-black">
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center gap-1">
                    Careers (We're hiring!) →
                  </Link>
                </li>
              </ul>

              {/* Social icons */}
              <div className="flex items-center gap-5 mt-5 text-xl text-[#003E47]">
                <Link href="#">
                  <FaLinkedinIn />
                </Link>
                <Link href="#">
                  <FiInstagram />
                </Link>
                <Link href="#">
                  <TbBrandX />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-gray-300" />

        {/* Legal links */}
        <div className="flex gap-6 text-lg mb-6">
          <Link href="#" className="hover:underline">
            Privacy
          </Link>
          <Link href="#" className="hover:underline">
            Disclosures
          </Link>
          <Link href="#" className="hover:underline">
            Terms of Use
          </Link>
        </div>

        {/* Footer Disclaimer */}
        <p className="text-xs leading-6 opacity-80 max-w-5xl">
          Securities are offered by Hiive Markets Limited, member of FINRA /
          SIPC and registered exempt market dealer in Ontario, British Columbia,
          Alberta, Saskatchewan, Manitoba and Nova Scotia. Brokerage fees may
          apply. Find Hiive on BrokerCheck. Hiive does not conduct or solicit
          brokerage activities in any jurisdiction where it is not registered or
          otherwise authorized to do so.
          <br />
          <br />© The Hiive Company Limited 2025. All rights reserved. By using
          this site, you accept our Terms of Use and Privacy Policy.
        </p>
      </div>
    </footer>
  );
}
