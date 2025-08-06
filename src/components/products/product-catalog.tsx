"use client"

import { useState, useMemo } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Star, Plus, Heart, Search, Filter } from 'lucide-react'
import { motion } from 'framer-motion'
import { useCart } from '@/contexts/cart-context'
import { useToast } from '@/hooks/use-toast'
import Link from 'next/link'

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

const allProducts: Product[] = [
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
  },
  {
    id: '7',
    name: 'Pastel de Camarão',
    description: 'Camarão refogado com temperos especiais',
    price: 12.00,
    image: '/shrimp-pastel-seafood.png',
    rating: 4.9,
    category: 'Frutos do Mar'
  },
  {
    id: '8',
    name: 'Pastel de Pizza',
    description: 'Molho de tomate, queijo e orégano',
    price: 8.50,
    image: '/pizza-pastel-tomato-cheese.png',
    rating: 4.5,
    category: 'Salgados'
  },
  {
    id: '9',
    name: 'Pastel de Bacalhau',
    description: 'Bacalhau desfiado com batata e cebola',
    price: 11.00,
    image: '/cod-fish-pastel-traditional.png',
    rating: 4.7,
    category: 'Frutos do Mar'
  },
  {
    id: '10',
    name: 'Pastel de Romeu e Julieta',
    description: 'Queijo com goiabada, uma combinação clássica',
    price: 7.00,
    image: '/placeholder.svg?height=300&width=300',
    rating: 4.6,
    category: 'Doces'
  }
]

const categories = ['Todos', 'Salgados', 'Doces', 'Vegetarianos', 'Frutos do Mar']

export function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [sortBy, setSortBy] = useState('name')
  const [favorites, setFavorites] = useState<string[]>([])
  
  const { addItem } = useCart()
  const { toast } = useToast()

  const filteredProducts = useMemo(() => {
    let filtered = allProducts

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by category
    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, sortBy])

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
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Nosso <span className="gradient-text">Cardápio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra todos os nossos sabores únicos e irresistíveis
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-lg mb-12"
        >
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Buscar pastéis..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Nome</SelectItem>
                <SelectItem value="price-low">Menor Preço</SelectItem>
                <SelectItem value="price-high">Maior Preço</SelectItem>
                <SelectItem value="rating">Avaliação</SelectItem>
              </SelectContent>
            </Select>

            {/* Results Count */}
            <div className="flex items-center justify-center bg-gray-100 rounded-lg px-4 py-2">
              <Filter className="w-4 h-4 mr-2 text-gray-600" />
              <span className="text-gray-600">{filteredProducts.length} produtos</span>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                <div className="relative">
                  <Link href={`/produtos/${product.id}`}>
                    <img 
                      src={product.image || "/placeholder.svg"} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </Link>
                  <div className="absolute top-3 left-3 flex gap-2">
                    {product.isNew && (
                      <Badge className="bg-green-500">Novo</Badge>
                    )}
                    {product.isPopular && (
                      <Badge className="bg-red-500">Popular</Badge>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white"
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
                
                <CardContent className="p-4 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{product.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  
                  <Link href={`/produtos/${product.id}`}>
                    <h3 className="text-lg font-bold mb-2 hover:text-orange-500 transition-colors cursor-pointer">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-orange-500">
                      R$ {product.price.toFixed(2)}
                    </span>
                    <Button 
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                      className="group"
                    >
                      <Plus className="w-4 h-4 mr-1 group-hover:rotate-90 transition-transform" />
                      Adicionar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">Nenhum produto encontrado</h3>
            <p className="text-gray-600">Tente ajustar os filtros ou buscar por outro termo</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
