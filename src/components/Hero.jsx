export default function Hero() {
  return (
    <section className="w-full bg-[#003E47] text-white flex flex-col items-center justify-center text-center h-[80vh] px-6">
      <h1 className="text-4xl md:text-[70px] pt-12 font-[Monotype] font-medium leading-tight max-w-4xl">
        Hiive is the marketplace
        <br /> for private stock.
      </h1>

      <p className="mt-6 text-lg md:text-[1.5rem] font-medium text-gray-200 max-w-2xl">
        The liquidity platform for venture-backed companies and
        <br /> their shareholders.
      </p>

      <button className="mt-10 bg-[#FF6B5A] hover:bg-[#ff5743] text-white font-semibold px-10 py-3 rounded-full text-lg">
        Get started
      </button>
    </section>
  );
}
