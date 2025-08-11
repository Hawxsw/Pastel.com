"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'

const categories = [
  {
    name: 'Pastéis',
    slug: 'pasteis',
    description: 'Crocantes e com recheios variados.',
    count: '25+ sabores',
    image: '/cheese-pastel.jpeg',
  },
  {
    name: 'Coxinhas',
    slug: 'coxinhas',
    description: 'Massa cremosa e recheio suculento.',
    count: '12+ variedades',
    image: '/chicken-drumstick.png',
  },
  {
    name: 'Risoles',
    slug: 'risoles',
    description: 'Dourados e com recheios especiais.',
    count: '8+ opções',
    image: '/golden-fried-risole.jpg',
  },
  {
    name: 'Empadas',
    slug: 'empadas',
    description: 'Massa artesanal que derrete na boca.',
    count: '6+ sabores',
    image: '/empada.jpg',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export function CategoriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-gray-800">
            Nossas Categorias
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto md:text-lg">
            Explore nossa variedade de salgados artesanais, cada um com seu
            sabor único e inconfundível.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.slug}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="group w-full h-full flex flex-col overflow-hidden rounded-2xl shadow-sm border-gray-200 transition-all duration-300 hover:shadow-2xl">
                <CardContent className="p-0 flex flex-col flex-grow">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-5">
                      <h3 className="font-bold text-2xl text-white shadow-md">
                        {category.name}
                      </h3>
                      <p className="text-sm text-white/90 shadow-sm">
                        {category.description}
                      </p>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-800">
                      {category.count}
                    </div>
                  </div>

                  <div className="p-5 bg-gray-50/50">
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full text-orange-500 font-bold hover:bg-orange-100 hover:text-orange-600"
                    >
                      <Link href={`/produtos?categoria=${category.slug}`}>
                        Ver Produtos
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
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
