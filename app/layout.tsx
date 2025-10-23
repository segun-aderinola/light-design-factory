import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Instrument_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _instrumentSans = Instrument_Sans({ subsets: ["latin"], weight: ["700"] })

export const metadata: Metadata = {
  title: "Light Design Factory",
  description: "AI-powered interior design that transforms your space",
  generator: "Segun Aderinola",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navbar />
        <div className="pt-20">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
