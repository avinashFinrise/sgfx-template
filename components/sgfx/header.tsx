"use client"

import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white py-0 px-4 md:px-8 lg:px-12 flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <Image
          src="/images/sgfx-logo-filled.png"
          alt="SGFX Logo"
          width={100}
          height={90}
          className="h-10 md:h-12 w-auto"
          priority
        />
      </Link>
      <Link
        href="#"
        className="border border-[#001523] text-[#ffffff] bg-[#001523] hover:bg-[#ffffff] hover:text-[#001523] text-[12px] font-medium px-4 py-0.5 rounded-2xl transition-colors uppercase tracking-wider"
      >
        REGISTER
      </Link>
    </header>
  )
}
