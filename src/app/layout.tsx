import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/hooks/cart-provider'
import { Header } from '@/components/shared/header'
import { Toaster } from '@/components/ui/sonner'
import { Footer } from '@/components/shared/footer'
import { PageTransition } from '@/components/ui/page-transition'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pastel.com - Os Melhores Salgados da Cidade',
  description: 'Descubra os salgados mais deliciosos da cidade. Pastéis, coxinhas, risoles e muito mais!',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}
