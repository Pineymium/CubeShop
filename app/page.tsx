import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProductGrid } from "@/components/product-grid"
import { Features } from "@/components/features"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/components/cart-context"

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <ProductGrid />
          <Features />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
