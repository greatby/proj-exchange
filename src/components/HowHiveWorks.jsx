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
      <h2 className="text-center text-3xl md:text-[3rem] font-[Monotype] text-[#003E47] mb-16">
        How can Hiive work for you?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-10 flex flex-col justify-between min-h-[400px]"
          >
            <div>
              <h3 className="text-[1.5rem] font-semibold text-[#003E47] mb-4 leading-[1.8rem]">
                {card.title}
              </h3>
              <p className="text-[1rem] font-light text-gray-600 mb-6 leading-normal">{card.desc}</p>

              <ul className="space-y-3">
                {card.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FiCheck size={20} className="text-[#FF6B5A] font-semibold shrink-0 mt-1" />
                    <span className="text-gray-700 text-[14.5px] leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-8 w-fit border border-[#FF6B5A] text-[#FF6B5A] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#FF6B5A] hover:text-white transition">
              {card.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
