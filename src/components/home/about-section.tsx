"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, Users, Award, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  {
    icon: Clock,
    title: "Tradição de 29 Anos",
    description: "Desde 1995 servindo os melhores pastéis com receitas tradicionais"
  },
  {
    icon: Users,
    title: "Mais de 50 Mil Clientes",
    description: "Uma família que cresce a cada dia com clientes satisfeitos"
  },
  {
    icon: Award,
    title: "Prêmios e Reconhecimentos",
    description: "Eleito o melhor pastel da região por 3 anos consecutivos"
  },
  {
    icon: Heart,
    title: "Feito com Amor",
    description: "Cada pastel é preparado com carinho e ingredientes selecionados"
  }
]

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-orange-100 text-orange-700">Nossa História</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Uma Tradição de
              <span className="gradient-text block">Sabor e Qualidade</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Há quase três décadas, a Pastelaria Delícia tem sido sinônimo de qualidade 
              e tradição. Nossa paixão por criar os melhores pastéis do Brasil nos move 
              todos os dias a buscar a perfeição em cada receita.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-none shadow-none">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-6 h-6 text-orange-500" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-2">{feature.title}</h3>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <Image 
                src="/placeholder.svg?height=600&width=500" 
                alt="Nossa cozinha tradicional" 
                width={500}
                height={600}
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold text-orange-500 mb-1">29</div>
                <div className="text-gray-600 font-medium">Anos de Tradição</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
