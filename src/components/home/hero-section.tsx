"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pastelaria-pattern.png')] opacity-5" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center space-x-2 text-orange-700 mb-4">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium">Desde 1985</span>
              <Sparkles className="h-5 w-5" />
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Os Melhores
              <span className="text-orange-600 block">Salgados da Cidade</span>
            </h1>
            
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Descubra sabores únicos em nossa pastelaria tradicional. 
              Pastéis crocantes, coxinhas suculentas e muito mais, feitos com amor e ingredientes frescos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/produtos">
                Ver Produtos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg">
              <Link href="/sobre">Conheça Nossa História</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">11+</div>
              <div className="text-sm text-gray-600">Anos de Tradição</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">50+</div>
              <div className="text-sm text-gray-600">Tipos de Salgados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">1000+</div>
              <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
