"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Clock, Percent, Gift, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export function PromotionsSection() {
  const promotions = [
    {
      icon: Users,
      title: 'Combo Casal',
      description: '2 hambúrgueres + 1 guarana 1L',
      originalPrice: 'R$ 31,00',
      salePrice: 'R$ 24,00',
      discount: '22,58% OFF',
      color: 'bg-pink-500',
      animated: true
    },
    {
      icon: Clock,
      title: 'Happy Hour',
      description: 'Segunda a Sexta das 15h às 17h',
      originalPrice: 'R$ 8,50',
      salePrice: 'R$ 6,90',
      discount: 'Pastéis',
      color: 'bg-orange-500'
    },
    {
      icon: Gift,
      title: 'Primeira Compra',
      description: 'Ganhe 20% de desconto na primeira compra online',
      originalPrice: '',
      salePrice: '20% OFF',
      discount: 'Cupom: BEMVINDO',
      color: 'bg-green-500'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Promoções Especiais
          </h2>
          <p className="text-orange-100 max-w-2xl mx-auto text-lg">
            Aproveite nossas ofertas imperdíveis e economize nos seus salgados favoritos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promotions.map((promo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${promo.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {promo.animated ? (
                      <motion.div
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                      >
                        <promo.icon className="h-8 w-8 text-white" />
                      </motion.div>
                    ) : (
                      <promo.icon className="h-8 w-8 text-white" />
                    )}
                  </div>
                  
                  <Badge className="mb-3 bg-white/20 text-white border-white/30">
                    {promo.discount}
                  </Badge>
                  
                  <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                  <p className="text-orange-100 mb-4 text-sm">{promo.description}</p>
                  
                  <div className="mb-4">
                    {promo.originalPrice && (
                      <div className="text-orange-200 line-through text-sm">{promo.originalPrice}</div>
                    )}
                    <div className="text-2xl font-bold">{promo.salePrice}</div>
                  </div>
                  
                  <Button className="w-full bg-white text-orange-600 hover:bg-orange-50">
                    Aproveitar Oferta
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
