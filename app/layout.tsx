import { Inter as FontSans } from "next/font/google"
import { Metadata } from "next"
import './globals.css'
import { cn } from "@/lib/utils"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "JamesDocs",
  description: "An interactive collaborative document editor similar to google Docs, but with my own twist",
}

export default function RootLayout({ children }: {children: React.ReactNode  }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#3371ff",
          fontSize: '16px'
        }}}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable
          )}
          >
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
