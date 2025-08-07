"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ShoppingCart, Menu, ChefHat } from 'lucide-react'
import { useCart } from '@/hooks/cart-provider'
import { CartSheet } from '../home/cart-sheet'

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { items } = useCart()
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <ChefHat className="h-6 w-6 text-orange-600" />
          <span className="font-bold text-xl">Pastel.com</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Início
          </Link>
          <Link href="/produtos" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Produtos
          </Link>
          <Link href="/sobre" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Sobre
          </Link>
          <Link href="/contato" className="text-sm font-medium hover:text-orange-600 transition-colors">
            Contato
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="h-4 w-4" />
            {totalItems > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                {totalItems}
              </Badge>
            )}
          </Button>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="sm">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/" className="text-sm font-medium">Início</Link>
                <Link href="/produtos" className="text-sm font-medium">Produtos</Link>
                <Link href="/sobre" className="text-sm font-medium">Sobre</Link>
                <Link href="/contato" className="text-sm font-medium">Contato</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <CartSheet open={isCartOpen} onOpenChange={setIsCartOpen} />
    </header>
  )
}
