"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '../../hooks/cart-provider'
import Image from 'next/image'
import { Separator } from '../ui/separator'
import { useRouter } from 'next/navigation'

interface CartSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartSheet({ open, onOpenChange }: CartSheetProps) {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart()
  const router = useRouter()

  const handleCheckout = () => {
    onOpenChange(false)
    router.push('/checkout')
  }

  if (items.length === 0) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent className="w-full sm:max-w-md flex flex-col">
          <SheetHeader>
            <SheetTitle>Seu Carrinho</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col items-center justify-center h-full text-center bg-gray-50/50 rounded-lg p-8">
            <ShoppingBag className="h-24 w-24 text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Seu carrinho está vazio
            </h3>
            <p className="text-gray-500 mt-2 mb-6">
              Adicione produtos para vê-los aqui.
            </p>
            <Button
              onClick={() => onOpenChange(false)}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Começar a Comprar
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col bg-gray-50/50">
        <SheetHeader className="px-6 pt-6 pb-4">
          <SheetTitle className="text-2xl font-bold text-gray-800">
            Seu Carrinho
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6">
          <div className="space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex items-center space-x-4">
                  <Image
                    src={item.image || '/placeholder.svg'}
                    alt={item.name}
                    width={72}
                    height={72}
                    className="rounded-lg border object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-orange-600 font-medium">
                      R$ {item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-gray-600 hover:bg-gray-200"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Badge
                        variant="secondary"
                        className="px-3 py-1 text-base"
                      >
                        {item.quantity}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-gray-600 hover:bg-gray-200"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-red-500 hover:bg-red-100"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <SheetFooter className="bg-white mt-auto p-6 space-y-4 rounded-t-2xl shadow-inner">
          <div className="flex justify-between items-center text-lg">
            <span className="font-medium text-gray-600">Total:</span>
            <span className="text-2xl font-bold text-orange-600">
              R$ {total.toFixed(2)}
            </span>
          </div>
          <Separator />
          <div className="space-y-3">
            <Button
              className="w-full h-12 text-base font-bold bg-orange-500 hover:bg-orange-600 text-white"
              onClick={handleCheckout}
            >
              Finalizar Pedido
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              className="w-full text-gray-500 hover:text-red-600"
              onClick={clearCart}
            >
              Limpar Carrinho
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
