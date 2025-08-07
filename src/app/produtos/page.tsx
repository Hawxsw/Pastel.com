"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Plus, Star, Search } from 'lucide-react'
import Image from 'next/image'
import { useCart } from '@/hooks/cart-provider'
import { useToast } from '@/hooks/use-toast'

const allProducts = [
  {
    id: 1,
    name: 'Pastel de Carne',
    description: 'Pastel crocante recheado com carne temperada e cebola',
    price: 8.50,
    image: '/golden-fried-pastel.png',
    rating: 4.8,
    type: 'pastel',
    category: 'pasteis',
    popular: true
  },
  {
    id: 2,
    name: 'Coxinha de Frango',
    description: 'Coxinha tradicional com frango desfiado e catupiry',
    price: 6.00,
    image: '/chicken-drumstick.png',
    rating: 4.9,
    type: 'coxinha',
    category: 'coxinhas',
    popular: true
  },
  {
    id: 4,
    name: 'Pastel de Queijo',
    description: 'Pastel dourado com queijo derretido',
    price: 7.00,
    image: '/cheese-pastel.jpeg',
    rating: 4.6,
    type: 'pastel',
    category: 'pasteis',
    popular: false
  },
  {
    id: 5,
    name: 'Pastel de Palmito',
    description: 'Pastel vegano com palmito refogado',
    price: 9.00,
    rating: 4.5,
    image: '/vegan-palm-heart-pastel.jpg',
    type: 'pastel',
    category: 'pasteis',
    popular: false
  },
  {
    id: 6,
    name: 'Coxinha de Catupiry',
    description: 'Coxinha cremosa recheada apenas com catupiry',
    price: 5.50,
    image: '/chicken-drumstick.png',
    rating: 4.4,
    type: 'coxinha',
    category: 'coxinhas',
    popular: false
  },
  {
    id: 8,
    name: 'Pastel de Pizza',
    description: 'Pastel com recheio de pizza: queijo, presunto e orégano',
    price: 10.00,
    rating: 4.7,
    image: '/pizza-pastel.jpg',
    type: 'pastel',
    category: 'pasteis',
    popular: true
  }
]

export default function ProdutosPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [sortBy, setSortBy] = useState('popular')
  
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (product: typeof allProducts[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    })
    
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho.`,
    })
  }

  const filteredProducts = allProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'popular':
        default:
          return b.popular ? 1 : -1
      }
    })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 md:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Nossos Produtos
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Explore nossa variedade completa de salgados artesanais, feitos fresquinhos todos os dias.
          </p>
        </div>

        {/* Filtros */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todas as Categorias</SelectItem>
              <SelectItem value="pasteis">Pastéis</SelectItem>
              <SelectItem value="coxinhas">Coxinhas</SelectItem>
              <SelectItem value="risoles">Risoles</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Mais Populares</SelectItem>
              <SelectItem value="price-low">Menor Preço</SelectItem>
              <SelectItem value="price-high">Maior Preço</SelectItem>
              <SelectItem value="rating">Melhor Avaliação</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  {product.popular && (
                    <Badge className="absolute top-2 left-2 bg-orange-600">
                      Popular
                    </Badge>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">
                      R$ {product.price.toFixed(2)}
                    </span>
                    
                    <Button 
                      size="sm" 
                      onClick={() => handleAddToCart(product)}
                      className="bg-orange-600 hover:bg-orange-700"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Adicionar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum produto encontrado.</p>
            <p className="text-gray-400">Tente ajustar os filtros de busca.</p>
          </div>
        )}
      </div>
    </div>
  )
}
