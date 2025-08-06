"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    comment: "Os melhores pastéis que já comi! A massa é sempre crocante e o recheio é abundante. Já sou cliente há mais de 10 anos e nunca me decepcionei.",
    location: "São Paulo, SP"
  },
  {
    id: 2,
    name: "João Santos",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    comment: "Entrega sempre rápida e os pastéis chegam quentinhos. O atendimento é excelente e os preços são justos. Recomendo de olhos fechados!",
    location: "Rio de Janeiro, RJ"
  },
  {
    id: 3,
    name: "Ana Costa",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    comment: "Descobri a Pastelaria Delícia através de uma amiga e me apaixonei! O pastel de frango com catupiry é simplesmente divino. Virei cliente fiel!",
    location: "Belo Horizonte, MG"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            O que nossos <span className="gradient-text">clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mais de 50 mil clientes satisfeitos compartilham suas experiências
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-orange-500 mb-4" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.comment}"
                  </p>

                  <div className="flex items-center">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">4.9</div>
              <div className="flex items-center justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-gray-600">Avaliação Média</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">50K+</div>
              <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">98%</div>
              <div className="text-sm text-gray-600">Recomendação</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
