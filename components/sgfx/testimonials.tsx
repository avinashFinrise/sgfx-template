"use client"

import { useState, useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sonam Tavkar",
    text: "One of the best thing is the Deposits and withdrawals are processed efficiently, which builds trust and confidence. Customer support is responsive and helpful. Overall, it's a solid choice for both beginners and experienced traders.",
    rating: 5
  },
  {
    name: "Shelley Mendez",
    text: "I joined SGFX six months ago as a beginner trader. At first, I focused on Forex because it is the most liquid market. Over time, I also started trading precious metals like gold and silver. The experience has helped me gain confidence as a trader, and the support team has always helped me.",
    rating: 5
  },
  {
    name: "Lokesh Preemal",
    text: "Been trading with SGFX for about one year, mainly focusing on Forex currency pairs like EUR/USD and GBP/USD. The spreads are competitive, and the execution speed is reliable even during high-volatility market sessions. Deposits were processed quickly, and withdrawals were handled within a reasonable timeframe.",
    rating: 5
  }
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (!trackRef.current) return
    const { scrollLeft, scrollWidth } = trackRef.current
    const idx = Math.round(scrollLeft / (scrollWidth / testimonials.length))
    setActiveIndex(idx)
  }

  const scrollToIndex = (i: number) => {
    if (!trackRef.current) return
    const { scrollWidth } = trackRef.current
    trackRef.current.scrollTo({ left: (scrollWidth / testimonials.length) * i, behavior: "smooth" })
  }

  return (
    <section className="bg-[#3DB98A] py-8 md:py-10 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-white text-2xl md:text-2xl font-bold text-center mb-6">
          Testimonials
        </h2>

        {/* Mobile Scroll Carousel */}
        <div className="md:hidden">
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="snap-center flex-shrink-0 w-full px-2">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 mt-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  index === activeIndex ? "bg-white" : "bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8">
          <h3 className="text-white text-xl font-bold mb-0.5">
            Start Trading with confidence
          </h3>
          <p className="text-white/80 text-md. mb-4">
            Open an Account in minutes
          </p>
          <button className="border-2 border-[#156AE4] bg-[#156AE4] hover:bg-[#156AE4]/10 text-white font-bold px-2 py-1 rounded-2xl text-md transition-colors uppercase">
            TRY FREE DEMO
          </button>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-[#2E9E72] border border-[#cde2da] rounded-xl p-4 flex flex-col h-full">
      <div className="bg-[#1b8a5d] text-white text-md font-semibold px-2 py-1 rounded-2xl mb-3 m-auto text-center w-max">
        {testimonial.name}
      </div>
      <p className="text-white text-sm leading-relaxed mb-3 text-center flex-grow">
        {testimonial.text}
      </p>
      <div className="flex gap-0.5 justify-center pt-3 border-t border-[#1b8a5d]">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-[#FFC107] text-[#FFC107]" />
        ))}
      </div>
    </div>
  )
}