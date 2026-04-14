import Image from "next/image"

const steps = [
  {
    step: "Step 1: Register",
    image: "/images/Deposite.png",
    alt: "SGFX Registration Screen",
    title: "Open your account",
    description: "Complete your SGFX account opening under 3 minutes. Only email needed.",
    cta: "Open Account",
  },
  {
    step: "Step 2: Fund",
    image: "/images/payment.png",
    alt: "SGFX Payment Methods",
    title: "Deposit funds securely",
    description: "Fund your trading account using 5+ payment methods & enjoy 100% deposit bonus.",
    cta: "Add Fund",
  },
  {
    step: "Step 3: Trade",
    image: "/images/trading.png",
    alt: "SGFX Trading Platform",
    title: "Start trading",
    description: "Access global markets with 200+ tradeable instruments.",
    cta: "Trade Now",
  }
]

export function AccountOpening() {
  return (
    <section className="bg-[#EEEEEE] py-8 md:py-12 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-[#001523] text-2xl md:text-2xl font-bold text-center mb-6">
          Fast Account Opening
        </h2>

        {/* Mobile: Vertical Stack */}
        <div className="flex flex-col gap-6 md:hidden">
          {steps.map((step, index) => (
            <div key={index} className="rounded-xl overflow-hidden border border-gray-100 shadow-sm flex flex-col">
              {/* Dark Header Badge */}
              <div className="bg-[#0a1628]  pt-2 pb-0 flex flex-col items-center">
                <span className="text-white text-md font-semibold tracking-wide mb-2">{step.step}</span>
                {/* Image touches the bottom of this section */}
                <div
                  className="w-full flex justify-center items-end"
                  style={{
                    background: "linear-gradient(135deg, #13AA7A 0%, #156AE4 100%)",
                    // borderRadius: "8px 8px 0 0",
                    minHeight: "180px",
                    paddingTop: "5px",
                  }}
                >
                  <Image
                    src={step.image}
                    alt={step.alt}
                    width={120}
                    height={210}
                    className="w-[360px] h-auto object-contain object-bottom"
                    style={{ display: "block" }}
                  />
                </div>
              </div>

              {/* Content — fixed min-height for alignment */}
              <div className="bg-white px-4 pb-5 pt-4 flex flex-col text-left flex-1">
                <h3 className="text-[#001523] font-bold text-md mb-1">{step.title}</h3>
                <p className="text-[#424244] font-bold text-sm mb-4 leading-relaxed max-w-[300px] ">
                  {step.description}
                </p>

                <button className="bg-[#13AA7A] hover:bg-[#1259c0] text-white font-semibold px-2 py-1 rounded-2xl text-[14px] transition-colors mx-auto w-32">
                  {step.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Horizontal Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 items-stretch">
          {steps.map((step, index) => (
            <div key={index} className="rounded-xl overflow-hidden border border-gray-100 shadow-sm flex flex-col">
              {/* Dark Header + Gradient Image Section */}
              <div className="bg-[#0a1628] pt-3 pb-0 flex flex-col items-center">
                <span className="text-white text-xs font-semibold tracking-wide mb-3">{step.step}</span>
                {/* Gradient background, image pinned to bottom */}
                <div
                  className="w-full flex justify-center items-end"
                  style={{
                    background: "linear-gradient(135deg, #13AA7A 0%, #156AE4 100%)",
                    // borderRadius: "8px 8px 0 0",
                    height: "200px",
                    paddingTop: "20px",
                  }}
                >
                  <Image
                    src={step.image}
                    alt={step.alt}
                    width={130}
                    height={220}
                    className="w-[210px] h-auto object-contain object-bottom"
                    style={{ display: "block" }}
                  />
                </div>
              </div>

              {/* Content — equal height across all cards */}
              <div className="bg-white px-4 pb-5 pt-4 flex flex-col items-center text-center flex-1">
                <h3 className="text-[#001523] font-bold text-sm mb-1.5">{step.title}</h3>
                <p className="text-[#6b7280] text-xs mb-4 leading-relaxed flex-1">
                  {step.description}
                </p>
                <button className="bg-[#13AA7A] hover:bg-[#1259c0] text-white font-semibold px-6 py-1.5 rounded text-xs transition-colors">
                  {step.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}