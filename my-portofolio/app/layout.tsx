import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import CursorTrail from "./components/CursorTrail"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dave's portfolio",
  description: "Dave's personal portofolio ",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white`}>
        <CursorTrail />
        {children}
      </body>
    </html>
  )
}
