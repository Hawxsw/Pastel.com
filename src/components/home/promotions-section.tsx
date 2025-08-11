"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Clock, Gift, Users } from 'lucide-react'
import { motion, Variants } from 'framer-motion'

const promotions = [
  {
    icon: Users,
    title: 'Combo Casal',
    description: '2 pastéis + 1 porção de fritas + 2 refrigerantes.',
    discount: '20% OFF',
  },
  {
    icon: Clock,
    title: 'Happy Hour do Pastel',
    description: 'Segunda a Sexta, das 17h às 19h, pastéis com preços especiais.',
    discount: 'Até 30%',
  },
  {
    icon: Gift,
    title: 'Cupom de Boas-Vindas',
    description: 'Use o cupom BEMVINDO25 na sua primeira compra online.',
    discount: '25% OFF',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function PromotionsSection() {
  return (
    <section className="py-20 bg-orange-50/50 text-gray-800 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Promoções Especiais
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto md:text-lg">
            Aproveite nossas ofertas imperdíveis e economize nos seus salgados
            favoritos.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {promotions.map((promo) => (
            <motion.div key={promo.title} variants={itemVariants}>
              <Card className="group relative w-full h-full flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-200/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="absolute top-0 right-0 overflow-hidden w-28 h-28">
                  <div className="absolute top-0 left-0 w-2 h-2 bg-orange-500 shadow-lg shadow-orange-500/50"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-orange-500 shadow-lg shadow-orange-500/50"></div>
                  <div className="w-40 h-10 bg-orange-500 absolute top-7 -right-10 transform rotate-45 text-center flex items-center justify-center shadow-lg shadow-orange-500/50">
                    <span className="text-white font-bold text-sm">
                      {promo.discount}
                    </span>
                  </div>
                </div>

                <CardContent className="p-8 flex flex-col flex-grow items-center text-center">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: 'easeInOut',
                      delay: Math.random() * 0.5,
                    }}
                    className="mb-6 w-20 h-20 rounded-full flex items-center justify-center bg-orange-100/80 border border-orange-200/80 shadow-inner"
                  >
                    <promo.icon className="h-10 w-10 text-orange-500" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {promo.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {promo.description}
                  </p>

                  <Button className="w-full mt-auto font-bold text-white rounded-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/50 transform group-hover:scale-105">
                    Aproveitar Oferta
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
