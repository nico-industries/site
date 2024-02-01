import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { getServerSession } from "next-auth"
import SessionProvider from "@/components/providers/SessionProvider"
import Navbar from "@/components/Navbar"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import authOptions from "@/app/api/auth/options"
import { Separator } from "@/components/ui/separator"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Skurczybyki Dashboard",
    template: "%s | Skurczybyki Dashboard",
  },
  description: "Skurczybyki Discord Bot Dashboard",
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
            <Separator />
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
