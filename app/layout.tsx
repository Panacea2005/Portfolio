import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

import { Playfair_Display, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Panacea - AI Engineer & Web Developer",
  description: "AI Engineer and Web Developer creating intelligent digital solutions through cutting-edge technology and innovative design",
  generator: "v0.app",
  keywords: ["AI Engineer", "Web Developer", "Machine Learning", "Full Stack Developer", "Artificial Intelligence", "Portfolio", "Panacea"],
  authors: [{ name: "Panacea" }],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: "Panacea - AI Engineer & Web Developer",
    description: "AI Engineer and Web Developer creating intelligent digital solutions through cutting-edge technology and innovative design",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
