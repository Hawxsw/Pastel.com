"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function CategoriesSection() {
  const categories = [
    {
      name: 'Pastéis',
      description: 'Crocantes e saborosos',
      count: '25+ sabores',
      image: '/cheese-pastel.jpeg',
      color: 'from-orange-400 to-red-400'
    },
    {
      name: 'Coxinhas',
      description: 'Tradicionais e cremosas',
      count: '12+ variedades',
      image: '/chicken-drumstick.png',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      name: 'Risoles',
      description: 'Recheios especiais',
      count: '8+ opções',
      image: '/golden-fried-risole.jpg',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Empadas',
      description: 'Massa artesanal',
      count: '6+ sabores',
      image: '/empada.jpg',
      color: 'from-amber-400 to-orange-500'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Nossas Categorias
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore nossa variedade de salgados artesanais, cada um com seu sabor único
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`relative h-48 bg-gradient-to-br ${category.color}`}>
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-sm font-medium text-gray-800">{category.count}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    
                    <Button asChild variant="outline" className="w-full group-hover:bg-orange-600 hover:bg-orange-600 group-hover:text-white transition-colors">
                      <Link href="/produtos">
                        Ver Produtos
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
