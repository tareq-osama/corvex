import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import AppSidebar from "@/components/sidebar"
import { AppHeader } from "@/components/app-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Corvex®",
  description: "Agencies Long Waited Client Porta",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <div className="flex h-screen w-screen">
              <AppSidebar />
              <SidebarInset className="flex flex-col flex-1 overflow-hidden">
                <AppHeader
                  currentPage="Data Fetching"
                  parentPage={{
                    title: "Building Your Application",
                    href: "#"
                  }}
                />
                <main className="flex-1 overflow-auto p-4">
                  {children}
                </main>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}