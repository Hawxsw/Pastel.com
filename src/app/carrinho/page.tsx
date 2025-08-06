import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ShoppingCartPage } from '@/components/cart/shopping-cart-page'

export default function CartPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <ShoppingCartPage />
      </main>
      <Footer />
    </div>
  )
}
