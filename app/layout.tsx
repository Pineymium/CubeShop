import type { Metadata } from "next"
import "./globals.css"
import { CartProvider } from "@/components/cart-context"

export const metadata: Metadata = {
  title: "متجر المكعبات - مكعبات السرعة",
  description: "أفضل مكعبات السرعة من العلامات التجارية الرائدة",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
