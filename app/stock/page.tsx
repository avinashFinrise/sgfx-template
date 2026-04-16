import { Header } from "@/components/sgfx/header"
import { Hero } from "@/components/sgfx/hero"
import { WhyChoose } from "@/components/sgfx/why-choose"
import { MT5Section } from "@/components/sgfx/mt5-section"
import { AccountTypes } from "@/components/sgfx/account-types"
import { AccountOpening } from "@/components/sgfx/account-opening"
import { Testimonials } from "@/components/sgfx/testimonials"
import { FAQ } from "@/components/sgfx/faq"
import { Footer } from "@/components/sgfx/footer"
import { TrustBadges } from "@/components/sgfx/trust-badges"

export default function StockPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero title="Trade Stocks" />
      
        <TrustBadges />
      <WhyChoose />
      <MT5Section />
      <AccountTypes />
      <AccountOpening />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
