import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ProductCatalog } from '@/components/products/product-catalog'

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <ProductCatalog />
      </main>
      <Footer />
    </div>
  )
}
