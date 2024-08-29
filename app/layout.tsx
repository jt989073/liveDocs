
import { Inter as FontSans } from "next/font/google"
import { Metadata } from "next"
import './globals.css'
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "LiveDocs",
  description: "An interactive document editor similar to google Docs, but with my own twist",
}

export default function RootLayout({ children }: {children: React.ReactNode  }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
