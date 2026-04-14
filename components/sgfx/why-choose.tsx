"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: <div className="text-[#13AA7A] text-2xl md:text-3xl font-bold">0%</div>,
    title: "Zero Commission",
    subtitle: "and Swap Free"
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#13AA7A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3v18h18" /><path d="M7 14l4-4 4 4 5-6" />
      </svg>
    ),
    title: "Spreads from 0.0",
    subtitle: "pips and Leverage up to 1:500"
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#13AA7A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <path d="M16 3.13a4 4 0 010 7.75" /><path d="M21 21v-2a4 4 0 00-3-3.85" />
      </svg>
    ),
    title: "Backed by trusted",
    subtitle: "execution and 24/5 support"
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#13AA7A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const goTo = (index: number) => {
    setCurrent((index + features.length) % features.length)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(timerRef.current!)
  }, [])

  return (
    <section className="bg-[#000000] py-6 md:py-8 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-3xl">
<h2 className="text-white text-2xl md:text-xl font-bold text-center mb-6 mx-6">
          Why Traders choose SGFX?
        </h2>
        {/* Logo — mobile only, above the features */}
       <div className="relative flex justify-center mb-5 overflow-hidden md:hidden">
  <Image
    src="/images/sgfx-logo.png"
    alt="SGFX logo"
    width={260}
    height={78}
    className="w-80 h-auto"
    style={{
      filter: "brightness(1.4) contrast(0.85) drop-shadow(0 0 12px rgba(21,106,228,0.3))",
    }}
  />
  <div className="absolute inset-0 shine-mask pointer-events-none" />
</div>


        

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-4 gap-3 mb-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-linear-to-bl from-[#156AE4] to-[#001523] rounded-lg p-4 text-center flex flex-col items-center justify-center h-40"
            >
              <div className="w-12 h-12 rounded-full bg-[#156AE4]/10 flex items-center justify-center mb-2">
                {feature.icon}
              </div>
              <h3 className="text-white text-xs font-semibold leading-tight">{feature.title}</h3>
              <p className="text-white text-xs font-semibold leading-tight">{feature.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
<div className="md:hidden mb-4 px-8">
  <div className="relative overflow-hidden rounded-lg h-44">
    {features.map((feature, index) => (
      <div
        key={index}
        className={`absolute inset-0 bg-linear-to-bl from-[#156AE4] to-[#001523] rounded-lg p-5 flex flex-col items-center justify-center transition-all duration-500 ease-in-out
          ${index === current
            ? "opacity-100 translate-x-0"
            : index < current
            ? "opacity-0 -translate-x-8 pointer-events-none"
            : "opacity-0 translate-x-8 pointer-events-none"
          }`}
      >
        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-1">
          {feature.icon}
        </div>
        <h3 className="text-white text-xs font-semibold leading-tight text-center">{feature.title}</h3>
        <p className="text-white text-xs font-semibold leading-tight text-center">{feature.subtitle}</p>
      </div>
    ))}
  </div>

  {/* Dot indicators */}
  {/* <div className="flex justify-center gap-1.5 mt-3">
    {features.map((_, i) => (
      <button
        key={i}
        onClick={() => goTo(i)}
        className={`h-1.5 rounded-full transition-all duration-300 ${
          i === current ? "w-4 bg-[#156AE4]" : "w-1.5 bg-[#333]"
        }`}
        aria-label={`Go to slide ${i + 1}`}
      />
    ))}
  </div> */}
</div>

        {/* Logo watermark — desktop only */}
        <div className="relative hidden md:flex justify-center mb-4 overflow-hidden">
          <Image
            src="/images/sgfx-logo.png"
            alt="sgfx logo watermark"
            width={200}
            height={60}
            className="w-50 md:w-58 h-auto"
           
             style={{
      filter: "brightness(1.4) contrast(0.85) drop-shadow(0 0 12px rgba(21,106,228,0.3))",
    }}
          />
          <div className="absolute inset-0 shine-mask pointer-events-none" />
        </div>

        <div className="flex justify-center">
          <button className="bg-[#156AE4] hover:bg-[#1259c0] text-white font-semibold px-4 py-1 rounded-2xl text-md transition-colors">
            TRADE NOW
          </button>
        </div>
      </div>
    </section>
  )
}