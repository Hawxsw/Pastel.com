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
import { AnimatedContainer } from '@/components/ui/animated-container'

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
          // Sort popular items first, then by name for consistency
          if (a.popular && !b.popular) return -1;
          if (!a.popular && b.popular) return 1;
          return a.name.localeCompare(b.name);
      }
    })

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-white">
      <div className="container px-4 md:px-6 py-16 lg:py-24"> {/* Increased vertical padding */}
        <AnimatedContainer delay={0.1} direction="up">
          <div className="text-center mb-16"> {/* Increased bottom margin */}
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"> {/* Larger text, more line height */}
              Delícias Fresquinhas, Feitas para Você!
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"> {/* Larger text, wider max-width, more line height */}
              Explore nossa variedade completa de salgados artesanais, feitos com carinho e os melhores ingredientes, fresquinhos todos os dias.
            </p>
          </div>
        </AnimatedContainer>

        {/* Filtros */}
        <AnimatedContainer delay={0.2} direction="up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-5 bg-white rounded-xl shadow-lg border border-gray-100"> {/* Stronger shadow, rounded corners, border */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200">
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
              <SelectTrigger className="border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200">
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
        </AnimatedContainer>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <AnimatedContainer 
              key={product.id} 
              delay={0.3 + (index * 0.1)} 
              direction="up"
            >
              <Card 
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
              >
              <CardContent className="p-0">
                <div className="relative w-full aspect-video overflow-hidden rounded-t-xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-110 duration-300"
                  />
                  {product.popular && (
                    <Badge className="absolute top-3 left-3 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md z-10">
                      Popular
                    </Badge>
                  )}
                </div>
                
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-xl text-gray-800">{product.name}</h3>
                    <div className="flex items-center space-x-1 bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-3xl font-extrabold text-orange-600">
                      R$ {product.price.toFixed(2)}
                    </span>
                    
                    <Button 
                      size="lg" 
                      onClick={() => handleAddToCart(product)}
                      className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center"
                    >
                      <Plus className="h-5 w-5 mr-2" />
                      Adicionar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            </AnimatedContainer>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <AnimatedContainer delay={0.2} direction="up">
            <div className="text-center py-20 bg-white rounded-xl shadow-lg mt-10"> {/* Added background, shadow, and margin-top */}
              <p className="text-gray-500 text-2xl font-semibold mb-3">Ops! Nenhum produto encontrado.</p>
              <p className="text-gray-400 text-lg">Tente ajustar os filtros de busca ou explore outras categorias.</p>
            </div>
          </AnimatedContainer>
        )}
      </div>
    </div>
  )
}