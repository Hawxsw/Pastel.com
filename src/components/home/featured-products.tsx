"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, Plus, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { useCart } from '@/contexts/cart-context'
import { useToast } from '@/hooks/use-toast'
import { Card, CardContent } from '../ui/card'

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  rating: number
  category: string
  isNew?: boolean
  isPopular?: boolean
}

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Pastel de Carne',
    description: 'Carne moída temperada com cebola e temperos especiais',
    price: 8.50,
    image: '/golden-fried-pastel.png',
    rating: 4.8,
    category: 'Salgados',
    isPopular: true
  },
  {
    id: '2',
    name: 'Pastel de Queijo',
    description: 'Queijo mussarela derretido em massa crocante',
    price: 7.00,
    image: '/cheese-pastel.png',
    rating: 4.9,
    category: 'Salgados',
    isPopular: true
  },
  {
    id: '3',
    name: 'Pastel de Frango',
    description: 'Frango desfiado com catupiry e temperos',
    price: 9.00,
    image: '/creamy-chicken-pastel.png',
    rating: 4.7,
    category: 'Salgados'
  },
  {
    id: '4',
    name: 'Pastel de Palmito',
    description: 'Palmito refogado com queijo e ervas',
    price: 8.00,
    image: '/palm-heart-pastel-vegetarian.png',
    rating: 4.6,
    category: 'Vegetarianos'
  },
  {
    id: '5',
    name: 'Pastel Doce de Banana',
    description: 'Banana com canela e açúcar cristal',
    price: 6.50,
    image: '/banana-cinnamon-pastel.png',
    rating: 4.8,
    category: 'Doces',
    isNew: true
  },
  {
    id: '6',
    name: 'Pastel de Chocolate',
    description: 'Chocolate cremoso com cobertura de açúcar',
    price: 7.50,
    image: '/chocolate-pastel-dessert.png',
    rating: 4.9,
    category: 'Doces',
    isNew: true
  }
]

export function FeaturedProducts() {
  const { addItem } = useCart()
  const { toast } = useToast()
  const [favorites, setFavorites] = useState<string[]>([])

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    })
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho.`,
    })
  }

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  return (
    <section className="py-10 sm:py-20 bg-white">
      <div className="container mx-auto px-2 sm:px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Nossos <span className="gradient-text">Destaques</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra os sabores mais pedidos pelos nossos clientes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img 
                    src={product.image || "/placeholder.svg"} 
                    alt={product.name}
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    {product.isNew && (
                      <Badge className="bg-green-500 text-xs sm:text-sm">Novo</Badge>
                    )}
                    {product.isPopular && (
                      <Badge className="bg-red-500 text-xs sm:text-sm">Popular</Badge>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart 
                      className={`w-4 h-4 ${
                        favorites.includes(product.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-600'
                      }`} 
                    />
                  </Button>
                </div>
                
                <CardContent className="p-4 sm:p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{product.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2 sm:mb-4 text-sm sm:text-base">{product.description}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg sm:text-2xl font-bold text-orange-500">
                      R$ {product.price.toFixed(2)}
                    </span>
                    <Button 
                      onClick={() => handleAddToCart(product)}
                      className="group"
                    >
                      <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform" />
                      Adicionar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline">
            Ver Todos os Produtos
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
