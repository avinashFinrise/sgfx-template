"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const accountTypes = [
  {
    name: "Standard",
    subtitle: "Spreads From 1.5 pips",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    features: [
      { label: "Min. deposit", value: "$100" },
      { label: "Min. volume per trade", value: "0.01" },
      { label: "Max Leverage", value: "1:500" },
      { label: "Spread type", value: "Variable" },
      { label: "Spread", value: "From 1.5" },
      { label: "Swap Free", value: "Yes" },
      { label: "Commission", value: "0%" },
    ]
  },
  {
    name: "Elite",
    subtitle: "Spreads From 0.8 pips",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    features: [
      { label: "Min. deposit", value: "$5000" },
      { label: "Min. volume per trade", value: "0.01" },
      { label: "Max Leverage", value: "1:300" },
      { label: "Spread type", value: "Variable" },
      { label: "Spread", value: "From 0.8" },
      { label: "Swap Free", value: "Yes" },
      { label: "Commission", value: "0%" },
    ]
  },
  {
    name: "ECN",
    subtitle: "Raw Spreads From 0 pips",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    features: [
      { label: "Min. deposit", value: "$25000" },
      { label: "Min. volume per trade", value: "0.01" },
      { label: "Max Leverage", value: "1:300" },
      { label: "Spread type", value: "Raw" },
      { label: "Spread", value: "From 0" },
      { label: "Swap Free", value: "Yes" },
      { label: "Commission", value: "$8 Rounds" },
    ]
  }
]

export function AccountTypes() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % accountTypes.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + accountTypes.length) % accountTypes.length)
  }

  return (
    <section className="bg-gradient-to-br from-[#0B3B73] via-[#156AE4] to-[#0A1F3F] py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        
        {/* Title */}
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-10">
          Account Type
        </h2>

        {/* Mobile Carousel */}
        <div className="md:hidden ">
          <div className="relative ">
            
            <button
              onClick={prevSlide}
              className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 p-2 rounded-full"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 p-2 rounded-full"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>

            <div className="overflow-x-hidden overflow-y-visible  mx-6 relative">
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {accountTypes.map((account, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2 ">
                    <AccountCard account={account} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {accountTypes.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {accountTypes.map((account, index) => (
            <AccountCard key={index} account={account} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AccountCard({ account }: { account: typeof accountTypes[0] }) {
  return (
<div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-white/40 to-white/10 overflow-visible">
      
     <div className="rounded-2xl bg-gradient-to-b from-[#1E63C6] to-[#0B3B73] p-6 text-white shadow-xl relative overflow-visible">

        {/* Icon */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 ">
          <div className="w-10 h-10 rounded-full border border-white/50 bg-[#0B3B73] flex items-center justify-center ">
            {account.icon}
          </div>
        </div>

        {/* Header */}
        <div className="text-center mt-6 mb-5">
          <h3 className="text-lg font-bold">{account.name}</h3>
          <p className="text-xs text-white/80">{account.subtitle}</p>
        </div>

        {/* Features */}
        <div className="space-y-2 text-xs mb-6">
          {account.features.map((feature, idx) => (
            <div key={idx} className="flex justify-between border-b border-white/10 pb-1">
              <span className="flex items-center gap-2 text-white/80">
                <span className="text-green-400 text-[10px]">✔</span>
                {feature.label}
              </span>
              <span className="font-semibold">{feature.value}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="w-full bg-[#1F2937] hover:bg-black text-white font-semibold py-2 rounded-full text-sm">
          Open Account
        </button>

      </div>
    </div>
  )
}