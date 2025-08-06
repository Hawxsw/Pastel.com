"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-300 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-red-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-yellow-300 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-gray-600">Mais de 10.000 clientes satisfeitos</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Os Melhores
              <span className="gradient-text block">Pastéis</span>
              do Brasil
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Sabores únicos, massa crocante e ingredientes frescos. 
              Experimente a tradição brasileira em cada mordida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/produtos">
                <Button size="lg" className="pulse-glow group">
                  Ver Cardápio
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Fazer Pedido
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">50+</div>
                <div className="text-gray-600">Sabores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">30min</div>
                <div className="text-gray-600">Entrega</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">24/7</div>
                <div className="text-gray-600">Atendimento</div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative float-animation">
              <Image
                width={400} 
                height={400}
                src="/golden-pastels.png" 
                alt="Pastéis deliciosos" 
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                Novo!
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
