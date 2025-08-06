"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useCart } from '@/contexts/cart-context'
import { useToast } from '@/hooks/use-toast'
import Link from 'next/link'

export function ShoppingCartPage() {
  const { items, updateQuantity, removeItem, total, clearCart } = useCart()
  const { toast } = useToast()
  const [couponCode, setCouponCode] = useState('')
  const [discount, setDiscount] = useState(0)

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id)
      toast({
        title: "Produto removido",
        description: "O produto foi removido do carrinho.",
      })
    } else {
      updateQuantity(id, newQuantity)
    }
  }

  const handleRemoveItem = (id: string, name: string) => {
    removeItem(id)
    toast({
      title: "Produto removido",
      description: `${name} foi removido do carrinho.`,
    })
  }

  const applyCoupon = () => {
    const validCoupons = {
      'DESCONTO10': 0.1,
      'PRIMEIRA': 0.15,
      'FIDELIDADE': 0.2
    }

    if (validCoupons[couponCode as keyof typeof validCoupons]) {
      setDiscount(validCoupons[couponCode as keyof typeof validCoupons])
      toast({
        title: "Cupom aplicado!",
        description: `Desconto de ${(validCoupons[couponCode as keyof typeof validCoupons] * 100)}% aplicado.`,
      })
    } else {
      toast({
        title: "Cupom inválido",
        description: "O cupom informado não é válido.",
        variant: "destructive"
      })
    }
  }

  const finalTotal = total * (1 - discount)
  const deliveryFee = total > 30 ? 0 : 5

  if (items.length === 0) {
    return (
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-md mx-auto"
          >
            <div className="text-8xl mb-6">🛒</div>
            <h1 className="text-3xl font-bold mb-4">Carrinho Vazio</h1>
            <p className="text-gray-600 mb-8">
              Parece que você ainda não adicionou nenhum pastel ao seu carrinho.
            </p>
            <Link href="/produtos">
              <Button size="lg" className="group">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Ver Produtos
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Seu Carrinho</h1>
          <p className="text-gray-600">{items.length} {items.length === 1 ? 'item' : 'itens'} no carrinho</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Itens do Pedido</CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Limpar Carrinho
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <img 
                      src={item.image || "/placeholder.svg"} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    
                    <div className="flex-grow">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-orange-500 font-bold">
                        R$ {item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="text-right">
                      <p className="font-bold">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveItem(item.id, item.name)}
                        className="text-red-600 hover:text-red-700 mt-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Coupon */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Cupom de Desconto
                  </label>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Digite o cupom"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    />
                    <Button onClick={applyCoupon} variant="outline">
                      Aplicar
                    </Button>
                  </div>
                  {discount > 0 && (
                    <Badge className="mt-2 bg-green-500">
                      Desconto de {(discount * 100)}% aplicado!
                    </Badge>
                  )}
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>R$ {total.toFixed(2)}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Desconto</span>
                      <span>-R$ {(total * discount).toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span>Taxa de Entrega</span>
                    <span>
                      {deliveryFee === 0 ? (
                        <Badge className="bg-green-500">Grátis</Badge>
                      ) : (
                        `R$ ${deliveryFee.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-orange-500">
                      R$ {(finalTotal + deliveryFee).toFixed(2)}
                    </span>
                  </div>
                </div>

                {total < 30 && (
                  <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-700">
                    💡 Adicione mais R$ {(30 - total).toFixed(2)} para ganhar frete grátis!
                  </div>
                )}

                <Link href="/checkout">
                  <Button className="w-full" size="lg">
                    Finalizar Pedido
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>

                <Link href="/produtos">
                  <Button variant="outline" className="w-full">
                    Continuar Comprando
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
