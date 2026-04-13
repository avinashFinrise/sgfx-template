import Image from "next/image"

const features = [
  {
    icon: (
      <div className="text-[#13AA7A] text-2xl md:text-3xl font-bold">0%</div>
    ),
    title: "Zero Commission",
    subtitle: "and Swap Free"
  },
  {
    icon: (
      <svg className="w-7 h-7 md:w-8 md:h-8 text-[#13AA7A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 4 4 5-6" />
      </svg>
    ),
    title: "Spreads from 0.0",
    subtitle: "pips and Leverage up to 1:500"
  },
  {
    icon: (
      <svg className="w-7 h-7 md:w-8 md:h-8 text-[#13AA7A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <path d="M16 3.13a4 4 0 010 7.75" />
        <path d="M21 21v-2a4 4 0 00-3-3.85" />
      </svg>
    ),
    title: "Backed by trusted",
    subtitle: "execution and 24/5 support"
  },
  {
    icon: (
      <svg className="w-7 h-7 md:w-8 md:h-8 text-[#13AA7A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3v18h18" />
        <rect x="7" y="10" width="3" height="8" fill="currentColor" stroke="none" />
        <rect x="12" y="6" width="3" height="12" fill="currentColor" stroke="none" />
        <rect x="17" y="13" width="3" height="5" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: "200+ tradeable",
    subtitle: "instruments with high liquidity"
  }
]

export function WhyChoose() {
  return (
    <section className="bg-[#000000] py-6 md:py-8 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-white text-base md:text-lg font-bold text-center mb-6">
          Why Traders choose SGFX?
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3 mb-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-linear-to-bl from-[#156AE4] to-[#001523] rounded-lg p-3 md:p-4 text-center flex flex-col items-center align-middle justify-center h-38 md:h-40" 
            >
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#156AE4]/10 flex items-center justify-center mb-2">
                {feature.icon}
              </div>
              <h3 className="text-white text-[10px] md:text-xs font-semibold leading-tight">
                {feature.title}
              </h3>
              <p className="text-white text-[10px] md:text-xs font-semibold leading-tight">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* SGFX Watermark - using the actual logo with opacity */}
        <div className="relative flex justify-center mb-4 overflow-hidden">
          <Image
    src="/images/sgfx-logo.png"
    alt="sgfx logo watermark"
    width={200}
    height={60}
    className="w-50 md:w-58 h-auto"
    aria-hidden="true"
  />

  {/* Shine layer */}
  <div className="absolute inset-0 shine-mask pointer-events-none" />
        </div>

        {/* Trade Now Button */}
        <div className="flex justify-center">
          <button className="bg-[#156AE4] hover:bg-[#1259c0] text-white font-semibold px-4 py-1 rounded-2xl text-md transition-colors">
            TRADE NOW
          </button>
        </div>
      </div>
    </section>
  )
}
