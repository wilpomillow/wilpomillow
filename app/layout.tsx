import type { Metadata } from "next"
import { Keania_One, Electrolize } from "next/font/google"
import "./styles/globals.css"

const keania = Keania_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-keania",
  display: "swap"
})

const electrolize = Electrolize({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-electrolize",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Wilpo Millow",
  description: "Wilpo Millow — portfolio",
  icons: {
    icon: "/images/favicon.png"
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${keania.variable} ${electrolize.variable}`}>
      <body>{children}</body>
    </html>
  )
}
