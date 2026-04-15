"use client"

import { useState, useRef } from "react"
import Image from "next/image"

const accountTypes = [
  {
    name: "Standard",
    subtitle: "Spreads From 1.5 pips",
    icon: "/images/Standard-AC.svg",
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
    icon: "/images/Elite-AC.svg",
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
    icon: "/images/ECN-AC.svg",
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
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return

    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const deltaY = Math.abs(e.changedTouches[0].clientY - touchStartY.current)

    // Only swipe if horizontal movement is dominant (avoids interfering with scroll)
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > deltaY) {
      if (deltaX < 0) {
        // Swipe left → next
        setActiveIndex((prev) => (prev + 1) % accountTypes.length)
      } else {
        // Swipe right → prev
        setActiveIndex((prev) => (prev - 1 + accountTypes.length) % accountTypes.length)
      }
    }

    touchStartX.current = null
    touchStartY.current = null
  }

  return (
    <section className="bg-gradient-to-br from-[#0B3B73] via-[#156AE4] to-[#0A1F3F] py-10 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">

        {/* Title */}
        <h2 className="text-white text-3xl md:text-3xl font-bold text-center mb-2">
          Account Type
        </h2>

        {/* Mobile Carousel — touch/swipe */}
        <div className="md:hidden">
          {/* pt-6 gives room for the overflowing icon above the card */}
          <div
            className="pt-2"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {accountTypes.map((account, index) => (
                  // px-4 gives the card some breathing room from screen edges
                  <div key={index} className="w-full flex-shrink-0 px-1">
                    <AccountCard account={account} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {accountTypes.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 pt-2">
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
    // mt-5 + pb-0 ensure the icon pops above without clipping
    <div className="relative mt-5">
      <div className="rounded-2xl p-[1px] bg-gradient-to-b from-white/40 to-white/10">
        <div className="rounded-2xl bg-gradient-to-b from-[#1E63C6] to-[#0B3B73] p-6 text-white shadow-xl">

          {/* Icon — positioned relative to the outer wrapper so overflow is visible */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2">
            <div className="w-13 h-13 rounded-full border border-white/50 bg-[#000000] flex items-center justify-center">
              <Image src={account.icon} alt={account.name} width={34} height={34} />
            </div>
          </div>

          {/* Header */}
          <div className="text-center mt-6 mb-5">
            <h3 className="text-2xl font-bold">{account.name}</h3>
            <p className="text-xl text-white/80">{account.subtitle}</p>
          </div>

          {/* Features */}
          <div className="space-y-2 text-xs mb-6">
            {account.features.map((feature, idx) => (
              <div key={idx} className="flex justify-between border-b border-white/10 pb-1">
                <span className="flex items-center text-base gap-2 text-white/80">
                  <span className="text-green-400 text-[12px]">✔</span>
                  {feature.label}
                </span>
                <span className="font-semibold text-base">{feature.value}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="w-full bg-[#1F2937] hover:bg-black text-white font-semibold py-2 rounded-full text-lg transition-colors">
            Open Account
          </button>

        </div>
      </div>
    </div>
  )
}