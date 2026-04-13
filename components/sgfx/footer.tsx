export function Footer() {
  return (
    <footer className="bg-white py-4 px-4 md:px-8 lg:px-12 border-t border-gray-100 pb-12">
      <div className="container mx-auto max-w-4xl">
        <div className="text-[8px] md:text-[10px] text-[#333333] space-y-2 leading-relaxed">
          <div>
            <span className="font-bold text-[#001523]">Risk Warning:</span>
            <p className="mt-0.5">
              Trading Contracts for Difference (CFDs) involves high risk due to their complex nature and margin trading. There is a possibility of losing your entire capital, and these products may not be suitable for everyone. Understand the associated risks and seek independent expert advice if needed. Only speculate with funds you can afford to lose. Assess whether this type of trading aligns with your circumstances and resources. Avoid putting your entire account balance into a single trade. Refer to the full risk disclosure on our website.
            </p>
          </div>

          <div>
            <span className="font-bold text-[#001523]">Disclaimer:</span>{" "}
            <span>The information on this page is for informational purposes only and should not be considered a recommendation or advice. Past performance, whether actual or simulated, is not a reliable indicator of future results. Customers are solely responsible for all business or investments executed at Spectra Global.</span>
          </div>

          <div>
            <span className="font-bold text-[#001523]">Regional Restrictions:</span>{" "}
            <span>Our services are not available to residents of certain jurisdictions, including Iran, North Korea, Myanmar, Russia, the United States, and countries on the grey list.</span>
          </div>

          <div className="pt-1.5">
            <p>
              Spectra Global LTD (MU) is regulated by the Financial Services Commission of the Republic of Mauritius with an Investment Dealer License, Registration Number: 1984533 & License Number: GB22201302.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
