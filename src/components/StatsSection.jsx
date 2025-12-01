export default function StatsSection() {
  const stats = [
    {
      value: "$110M+",
      label: "of monthly transaction volume",
      bg: "bg-[linear-gradient(90deg,#C2D9DF_0%,#F9F9F9_160%)]",
    },
    {
      value: ">50%",
      label: "of US decacorns with at least one trade on Hiive",
      bg: "bg-[linear-gradient(90deg,#EBF2F4_40%,#F2F2EC_120%)]",
    },
    {
      value: ">80%",
      label: "of tier-1 VCs work with Hiive",
      bg: "bg-[linear-gradient(90deg,#F2F2EC_0%,#F2F2EC_100%)]",
    },
    {
      value: "$3B+",
      label: "of live securities orders",
      bg: "bg-[linear-gradient(90deg,#F2F2EC_0%,#EBF2F4_100%)]",
    },
  ];

  return (
    <>
    
    <section className="w-full bg-[#F9FAF5] pt-20 px-6 md:px-12 text-center flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-platin font-medium text-[#003E47] max-w-4xl">
        Join the thousands of companies and
        <br /> shareholders generating liquidity on Hiive.
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full max-w-6xl">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} rounded-[6px_6px_0px_0px] p-10 flex flex-col items-center text-center`}
          >
            <h3 className="text-[2.75rem] font-inter font-medium text-[#003E47]">{item.value}</h3>
            <p className="text-gray-800 font-inter mt-3 text-[1.125rem] font-normal leading-snug">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Footer note */}
    </section>
      <p className="text-[11px] px-24 text-left font-normal text-gray-400 mt-2 max-w-4xl leading-relaxed">
        *Based on a 12 month rolling average. Source: CB insights list of US unicorn companies,
        Republic’s list of tier-1 venture capital firms.<br />
        Last updated on: September 3, 2025
      </p>
    </>
  );
}
