"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ShoppingCart, Menu, ChefHat } from 'lucide-react'
import { useCart } from '@/hooks/cart-provider'
import { CartSheet } from '../home/cart-sheet'
import { Separator } from '../ui/separator'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/produtos', label: 'Produtos' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { items, isCartOpen, openCart, closeCart } = useCart()
  const pathname = usePathname()

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <ChefHat className="h-7 w-7 text-orange-500" />
          <span className="font-bold text-xl text-gray-800">Pastel.com</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-orange-500',
                pathname === link.href
                  ? 'text-orange-500'
                  : 'text-muted-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-full"
            onClick={openCart}
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-orange-500 text-white">
                {totalItems}
              </Badge>
            )}
            <span className="sr-only">Abrir carrinho</span>
          </Button>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="w-full rounded-t-2xl h-auto">
              <SheetHeader>
                <Link
                  href="/"
                  className="flex items-center justify-center space-x-2 mb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ChefHat className="h-7 w-7 text-orange-500" />
                  <span className="font-bold text-xl text-gray-800">
                    Pastel.com
                  </span>
                </Link>
                <Separator />
              </SheetHeader>
              <nav className="flex flex-col space-y-2 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      'text-lg font-medium p-3 rounded-md transition-colors hover:bg-gray-100 text-center',
                      pathname === link.href
                        ? 'text-orange-500 bg-orange-50'
                        : 'text-muted-foreground',
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <CartSheet open={isCartOpen} onOpenChange={(open) => !open && closeCart()} />
    </header>
  )
}
