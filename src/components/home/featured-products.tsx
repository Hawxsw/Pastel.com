"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, Star } from 'lucide-react'
import Image from 'next/image'
import { useCart } from '../../hooks/cart-provider'
import { useToast } from '@/hooks/use-toast'
import { motion, Variants } from 'framer-motion'

const featuredProducts = [
  {
    id: 1,
    name: 'Pastel de Carne',
    image: '/golden-fried-pastel.png',
    description: 'Crocante, recheado com carne moída e temperos frescos.',
    price: 7.0,
    rating: 4.8,
    popular: true,
  },
  {
    id: 2,
    name: 'Coxinha de Frango',
    image: '/chicken-drumstick.png',
    description: 'Massa cremosa com recheio de frango desfiado e catupiry.',
    price: 8.5,
    rating: 4.9,
    popular: true,
  },
  {
    id: 3,
    name: 'Risole de Camarão',
    image: '/golden-fried-risole.jpg',
    description: 'Risole dourado com um recheio cremoso de camarão.',
    price: 9.0,
    rating: 4.7,
    popular: false,
  },
  {
    id: 4,
    name: 'Pastel de Queijo',
    image: '/cheese-pastel.jpeg',
    description: 'Simplesmente irresistível, com queijo mussarela derretido.',
    price: 7.0,
    rating: 4.6,
    popular: false,
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export function FeaturedProducts() {
  const { addItem, openCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (product: (typeof featuredProducts)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    })

    toast({
      title: 'Produto adicionado!',
      description: `${product.name} foi adicionado ao carrinho.`,
    })

    openCart()
  }

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-gray-800">
            Nossos Produtos em Destaque
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto md:text-lg">
            Experimente nossos salgados mais populares, preparados com os
            melhores ingredientes e muito carinho.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Card className="group w-full h-full flex flex-col overflow-hidden rounded-2xl shadow-sm border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardContent className="p-0 flex flex-col flex-grow">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    {product.popular && (
                      <Badge className="absolute top-3 left-3 bg-orange-500 text-white border-2 border-white shadow-md">
                        Popular
                      </Badge>
                    )}
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-lg text-gray-800">
                        {product.name}
                      </h3>
                      <div className="flex items-center space-x-1 text-orange-500">
                        <Star className="h-5 w-5 fill-current" />
                        <span className="text-sm font-semibold">
                          {product.rating}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-500 text-sm mb-4 flex-grow">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <span className="text-2xl font-bold text-orange-500">
                        R$ {product.price.toFixed(2)}
                      </span>

                      <Button
                        size="icon"
                        onClick={() => handleAddToCart(product)}
                        className="bg-orange-100 text-orange-500 rounded-full h-10 w-10 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:scale-110 hover:rotate-12"
                      >
                        <Plus className="h-5 w-5" />
                        <span className="sr-only">Adicionar ao carrinho</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
