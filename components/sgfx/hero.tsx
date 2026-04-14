import Image from "next/image"

export function Hero() {
  return (
    <section className="relative bg-linear-to-bl from-[#156AE4] to-[#001523]">
      {/* SCA Licensed Badge */}
      <div className="flex justify-center pt-1 pb-1 bg-black">
        <div className="flex items-center gap-1.5 text-shadow-sm">
        <svg
  className="w-5 h-5 text-[#0DB561]"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  {/* Wide shield (balanced proportions) */}
  <path d="M12 2L3.5 6v5.8c0 5.2 4 9.8 8.5 11.2 4.5-1.4 8.5-6 8.5-11.2V6L12 2z" />

  {/* Perfectly centered white tick */}
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

      <div className="container mx-auto px-4 md:px-8 lg:px-12 pb-4 pt-4 md:pt-6 max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center justify-between">
  
  {/* Right Content - Currency Coins */}
  <div className="order-1 lg:order-2 lg:w-[55%] flex justify-center lg:justify-end mt-4 lg:mt-0">
    <Image
      src="/images/coins.png"
      alt="Currency coins - Dollar, Euro, Pound, Rupee, Yen"
      width={380}
      height={300}
      className="w-full max-w-[260px] md:max-w-[320px] lg:max-w-[380px] object-contain"
      priority
    />
  </div>

  {/* Left Content */}
  <div className="order-2 lg:order-1 text-center lg:text-left lg:w-[45%] z-10">
    <h1 className="text-white text-4xl md:text-5xl lg:text-[55px] font-bold mb-2 leading-[1.15]">
      Trade Forex
    </h1>
    <p className="text-white font-medium text-2xl md:text-3xl mb-0.5">
      with 100% Deposit Bonus
    </p>
    <p className="text-white font-medium text-2xl md:text-3xl mb-5">
      Upto $25,000
    </p>
    <button className="bg-[#13AA7A] hover:bg-[#0f9369] text-white font-semibold px-2 py-1 rounded-2xl text-lg uppercase tracking-wide transition-colors">
      CLAIM BONUS
    </button>
  </div>

</div>

        
      </div>
    </section>
  )
}
