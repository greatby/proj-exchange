"use client";
import { FiCheck } from "react-icons/fi";

export default function HowHiiveWorks() {
  const cards = [
    {
      title: "Investors & Funds",
      desc: "Take the friction out of secondary trading with real time quotes on the most liquid private stocks.",
      points: [
        "Access a central marketplace",
        "Deal direct with your counterparty",
        "Anonymity until you transact",
      ],
      button: "Learn More",
    },
    {
      title: "Sellers",
      desc: "Selling shares has never been this easy. Match with a buyer, and agree on a deal in a few simple steps.",
      points: [
        "Instant price discovery",
        "Fixed and competitive fees",
        "Anonymity until you sell",
        "Seamless transaction process",
      ],
      button: "Learn More",
    },
    {
      title: "Issuers",
      desc: "Manage your stock’s market, without the cost and complexity of a tender offer process.",
      points: [
        "Approve all buyers and sellers",
        "Enjoy a compliant venue for secondaries",
        "Specify price and volume parameters",
        "Consolidate your cap table using batched transfers and Hiive Funds",
      ],
      button: "Learn More",
    },
  ];

  return (
    <section
      className="w-full py-28 px-6 lg:px-24"
      style={{
        background: "linear-gradient(156deg, #ebf2f4 17.7%, #f6f6f6 95.06%)",
      }}
    >
      <h2 className="text-center text-3xl md:text-[3rem] font-platin text-[#323232] mb-16">
        How can Hiive work for you?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-10 flex flex-col justify-between min-h-[400px]"
          >
            <div>
              <h3 className="text-[1.5rem] font-inter font-semibold text-[#1a202c] mb-4 leading-[1.8rem]">
                {card.title}
              </h3>
              <p className="text-[1rem] font-inter font-light text-gray-900 mb-6 leading-normal">
                {card.desc}
              </p>

              <ul className="space-y-4">
                {card.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    {/* <FiCheck size={20} className="text-[#FF6B5A] font-semibold shrink-0 mt-1" /> */}
                    <svg
                      viewBox="0 0 39 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5">
                      <path
                        d="M35.8522 13.8497L16.2898 33.4107C16.0634 33.6371 15.7947 33.8166 15.4989 33.9392C15.2031 34.0617 14.8861 34.1248 14.566 34.1248C14.2458 34.1248 13.9288 34.0617 13.6331 33.9392C13.3373 33.8166 13.0686 33.6371 12.8422 33.4107L1.93135 22.4419C1.47504 21.9849 1.21875 21.3655 1.21875 20.7197C1.21875 20.0738 1.47504 19.4544 1.93135 18.9974L5.5876 15.3412C6.04315 14.8855 6.66059 14.6287 7.30491 14.627C7.94924 14.6253 8.56803 14.8788 9.026 15.332L14.6079 20.7052L14.6246 20.7219L28.7515 6.80229C29.2083 6.34737 29.8267 6.09196 30.4714 6.09196C31.1161 6.09196 31.7346 6.34737 32.1914 6.80229L35.8476 10.3915C36.0759 10.6177 36.2572 10.8869 36.3811 11.1835C36.505 11.4801 36.569 11.7982 36.5694 12.1197C36.5698 12.4411 36.5067 12.7594 36.3836 13.0563C36.2605 13.3532 36.0799 13.6229 35.8522 13.8497Z"
                        fill="#F15F61"
                      ></path>
                    </svg>
                    <span className="text-gray-700 font-inter text-[14.5px] leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-8 min-w-[200px] min-h-[60px] w-fit border-2 border-[#FF6B5A] text-[#FF6B5A] px-6 py-3 rounded-full text-[18px] font-medium hover:bg-[#FF6B5A] hover:text-white transition">
              {card.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
