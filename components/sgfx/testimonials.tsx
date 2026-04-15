"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sonam Tavkar",
    text: "One of the best things is that deposits and withdrawals are processed efficiently, which builds trust and confidence. Customer support is responsive and helpful. Overall, it's a solid choice for both beginners and experienced traders.",
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
  },
  {
    name: "Ahmed Khan",
    text: "Great experience with SGFX so far. The platform is easy to use, spreads are tight, and withdrawals are fast. Perfect for beginners and experienced traders alike.",
    rating: 5
  },
  {
    name: "Sara M",
    text: "SGFX offers smooth trading on MT5 with competitive spreads. I especially like how quick and hassle-free the withdrawal process is.",
    rating: 5
  },
  {
    name: "John Deer",
    text: "Very reliable broker. Account setup was simple, and customer support is responsive. Trading conditions are solid for forex and stocks.",
    rating: 4
  },
  {
    name: "Fatima A",
    text: "I’ve been using SGFX for a few months—execution is fast and pricing is fair. Definitely a trustworthy broker in the UAE.",
    rating: 5
  },
  {
    name: "Omar Hassan",
    text: "User-friendly platform with great features. The demo account helped me learn before going live. Highly recommend SGFX for new traders.",
    rating: 5
  },
  {
    name: "Daniel Estephan",
    text: "Deposits and withdrawals are seamless with SGFX. Spreads are low, and leverage options are flexible. Overall a good trading experience.",
    rating: 5
  },
  {
    name: "Lina Sidny",
    text: "SGFX stands out for its transparency and ease of use. MT5 platform works smoothly, and I’ve had no issues so far.",
    rating: 4
  },
  {
    name: "Hassan Tarik",
    text: "Good broker with fast execution and decent spreads. Customer support is helpful and resolves issues quickly.",
    rating: 5
  },
  {
    name: "Emily W",
    text: "I like how easy it is to start trading with SGFX. The process is straightforward, and the platform is stable.",
    rating: 5
  },
  {
    name: "Yousef Ali",
    text: "Professional and efficient broker. Withdrawals are processed quickly, and the trading environment is reliable. Would recommend SGFX.",
    rating: 5
  }
];


export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const isDraggingRef = useRef(false)
  const dragStartX = useRef(0)
  const dragStartLeft = useRef(0)
  const currentIndexRef = useRef(0)  // ← keep a ref in sync for use inside intervals

  const getVisibleCount = () =>
    typeof window !== "undefined" && window.innerWidth <= 700 ? 1 : 3

  const getMaxIndex = () => Math.max(0, testimonials.length - getVisibleCount())

  const updateThumb = (idx: number) => {
    if (!wrapRef.current || !thumbRef.current) return
    const max = getMaxIndex()
    const wrapW = wrapRef.current.offsetWidth
    const thumbW = Math.max(32, wrapW * (1 / (max + 1)))
    thumbRef.current.style.width = `${thumbW}px`
    const travel = wrapW - thumbW
    thumbRef.current.style.left = `${max === 0 ? 0 : (idx / max) * travel}px`
  }

  const goTo = useCallback((idx: number) => {
    const max = getMaxIndex()
    const clamped = Math.max(0, Math.min(idx, max))
    currentIndexRef.current = clamped   // ← keep ref in sync
    setCurrentIndex(clamped)
    if (!trackRef.current) return
    const cardWidth = (trackRef.current.children[0] as HTMLElement)?.offsetWidth ?? 0
    trackRef.current.style.transform = `translateX(-${clamped * (cardWidth + 12)}px)`
    updateThumb(clamped)
  }, [])

  const stopAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current)
  }

  const startAuto = useCallback(() => {
    stopAuto()
    autoRef.current = setInterval(() => {
      const max = getMaxIndex()           // ← recalculated fresh each tick
      const prev = currentIndexRef.current  // ← read from ref, not stale closure
      const next = prev >= max ? 0 : prev + 1
      goTo(next)
    }, 3000)
  }, [goTo])

  useEffect(() => {
    startAuto()
    return stopAuto
  }, [startAuto])

  const onThumbMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true
    dragStartX.current = e.clientX
    dragStartLeft.current = parseFloat(thumbRef.current?.style.left ?? "0")
    stopAuto()
    e.preventDefault()
  }

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !wrapRef.current || !thumbRef.current) return
      const wrapW = wrapRef.current.offsetWidth
      const thumbW = thumbRef.current.offsetWidth
      const travel = wrapW - thumbW
      const newLeft = Math.max(0, Math.min(travel, dragStartLeft.current + e.clientX - dragStartX.current))
      goTo(Math.round((newLeft / travel) * getMaxIndex()))
    }
    const onUp = () => {
      if (isDraggingRef.current) { isDraggingRef.current = false; startAuto() }
    }
    document.addEventListener("mousemove", onMove)
    document.addEventListener("mouseup", onUp)
    return () => {
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseup", onUp)
    }
  }, [goTo, startAuto])

  const onWrapClick = (e: React.MouseEvent) => {
    if (!wrapRef.current || !thumbRef.current) return
    const rect = wrapRef.current.getBoundingClientRect()
    const thumbW = thumbRef.current.offsetWidth
    const travel = wrapRef.current.offsetWidth - thumbW
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left - thumbW / 2) / travel))
    goTo(Math.round(ratio * getMaxIndex()))
    startAuto()
  }

  return (
    <section className="bg-[#3DB98A] py-8 md:py-10 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-white text-2xl font-bold text-center mb-6">Testimonials</h2>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-3 transition-transform duration-500 ease-in-out"
          >
            {testimonials.map((t, i) => (
              <div key={i} className="flex-shrink-0 w-full md:w-[calc((100%-24px)/3)]">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots — mobile only */}
        <div className="flex md:hidden justify-center gap-1.5 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); startAuto() }}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === currentIndex ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Scrollbar slider — desktop only */}
        <div
          ref={wrapRef}
          onClick={onWrapClick}
          className="relative hidden md:block h-1.5 bg-white/25 rounded-full mt-4 max-w-xs mx-auto cursor-pointer"
        >
          <div
            ref={thumbRef}
            onMouseDown={onThumbMouseDown}
            className="absolute top-0 h-full bg-white rounded-full cursor-grab active:cursor-grabbing transition-[left] duration-300"
          />
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <h3 className="text-white text-xl font-bold mb-0.5">Start Trading with confidence</h3>
          <p className="text-white/80 text-sm mb-4">Open an Account in minutes</p>
          <button className="border-2 border-[#156AE4] bg-[#156AE4] hover:bg-[#156AE4]/70 text-white font-bold px-6 py-2 rounded-2xl text-sm transition-colors uppercase">
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