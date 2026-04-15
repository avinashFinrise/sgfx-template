import Image from "next/image"
export function Hero() {
  return (
    <section className="relative bg-linear-to-bl from-[#156AE4] to-[#001523] lg:flex lg:flex-col">
      {/* SCA Licensed Badge */}
      <div className="flex justify-center pt-1 pb-1 bg-black">
        <div className="flex items-center gap-1.5 text-shadow-sm">
          <svg className="w-5 h-5 text-[#0DB561]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L3.5 6v5.8c0 5.2 4 9.8 8.5 11.2 4.5-1.4 8.5-6 8.5-11.2V6L12 2z" />
            <path
              d="M9.7 12.6l2.1 2.1 4.8-4.8"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-medium text-white">SCA Licensed</span>
        </div>
      </div>

      {/* Only desktop gets full-width padding and flex-1 stretch */}
      <div className="container mx-auto px-4 md:px-8 lg:px-20 xl:px-28 pb-6 pt-4 md:py-30 lg:py-39 max-w-5xl lg:max-w-none lg:flex-1 lg:flex lg:flex-col">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:flex-1">

          {/* Right — coins image */}
          <div className="order-1 lg:order-2 lg:w-[55%] flex justify-center lg:justify-end mt-4 lg:mt-0 lg:self-stretch lg:items-center">
            <Image
              src="/images/coins.png"
              alt="Currency coins - Dollar, Euro, Pound, Rupee, Yen"
              width={560}
              height={440}
              className="w-full max-w-[260px] md:max-w-[320px] lg:max-w-[520px] xl:max-w-[560px] object-contain"
              priority
            />
          </div>

          {/* Left — text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left lg:w-[45%] z-10">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 leading-[1.15]">
              Trade Forex
            </h1>
            <p className="text-white font-medium text-2xl md:text-3xl lg:text-4xl mb-0.5">
              with 100% Deposit Bonus
            </p>
            <p className="text-white font-medium text-2xl md:text-3xl lg:text-4xl mb-5">
              Upto $25,000
            </p>
            <button className="bg-[#13AA7A] hover:bg-[#0f9369] text-white font-semibold px-2 py-1 lg:px-8 lg:py-3 rounded-2xl text-lg lg:text-xl uppercase tracking-wide transition-colors">
              CLAIM BONUS
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}