"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Is my money safe with SGFX?",
    answer: "Yes. SGFX is regulated by the SCA (UAE). Client funds are held in segregated bank accounts, completely separate from company funds."
  },
  {
    question: "How do I withdraw my funds?",
    answer: "Withdrawals are processed within 24 hours via bank transfer, card, or e-wallet. Same method as deposit."
  },
  {
    question: "What is the minimum deposit?",
    answer: "$100 is the minimum deposit. If you want to deposit less than $100 please contact customer support. The 100% bonus applies to your first deposit on any account type."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(2)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 relative"
      style={{
        backgroundImage: "url('/images/faq-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#2a2a2a",
      }}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-[#ffffff] text-2xl md:text-2xl px-5 font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`border rounded-lg overflow-hidden transition-colors ${
                  isOpen
                    ? "border-[#001523] bg-[#001523]"
                    : "border-gray-200 bg-white"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full flex items-center justify-between p-2 text-left transition-colors ${
                    isOpen
                      ? "bg-[#001523] hover:bg-[#002a3d]"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <span
                    className={`font-medium text-md md:text-sm ${
                      isOpen ? "text-white" : "text-[#001523]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-white flex-shrink-0 ml-2" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#6b7280] flex-shrink-0 ml-2" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-3 pb-3 bg-[#001523]">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}