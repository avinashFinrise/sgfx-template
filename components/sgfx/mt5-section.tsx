import Image from "next/image"

export function MT5Section() {
  return (
    <section className="bg-white  ">
      <div className="container mx-auto max-w-3xl">
        <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-6">
          {/* Left Content */}
          <div className="py-4 md:py-8 lg:pt-12 text-center md:text-left">
            <h2 className="text-[#001523] text-xl md:text-2xl lg:text-[32px] font-bold mb-4 leading-tight text-center px-8 md:px-0 md:text-left">
              Experience seamless trading<br className="hidden md:block" />
              with SGFX MT5.
            </h2>
            
            {/* MetaTrader 5 Logo */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/metatrader5.png"
                alt="MetaTrader 5"
                width={140}
                height={36}
                className="h-10 md:h-14 w-auto object-contain"
                // style={{ width: 'auto', height: 'auto'}}
              />
            </div>
          </div>

          
          <div className="relative flex justify-center md:justify-end items-end md:items-end m-0 p-0">
  
  {/* Glow background */}
  <div className="absolute inset-0 bg-green-400 blur-2xl opacity-50 scale-60 rounded-full" />

  <Image
    src="/images/register-phone.png"
    alt="SGFX MT5 Trading Platform"
    width={200}
    height={380}
    className="relative w-58 md:w-54 lg:w-68 h-auto object-contain"
  />
</div>
         
        </div>
      </div>
    </section>
  )
}
