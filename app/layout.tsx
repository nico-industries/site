import authOptions from "@/app/api/auth/options"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SessionProvider from "@/components/providers/SessionProvider"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import type { Metadata } from "next"
import { getServerSession } from "next-auth"
import { Inter } from "next/font/google"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Nico Dashboard",
    template: "%s | Nico Dashboard",
  },
  description: "Nico Discord Bot Dashboard",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
