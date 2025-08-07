"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Maria Santos',
      role: 'Cliente há 5 anos',
      rating: 5,
      comment: 'Os melhores pastéis da cidade! A massa é sempre crocante e o recheio generoso. Recomendo demais!',
      avatar: 'MS'
    },
    {
      name: 'João Silva',
      role: 'Empresário',
      rating: 5,
      comment: 'Sempre peço para o escritório. Entrega rápida e qualidade excepcional. A coxinha de frango é perfeita!',
      avatar: 'JS'
    },
    {
      name: 'Ana Costa',
      role: 'Estudante',
      rating: 5,
      comment: 'Preço justo e sabor incrível. O atendimento é sempre muito atencioso. Virei cliente fiel!',
      avatar: 'AC'
    },
    {
      name: 'Pedro Oliveira',
      role: 'Chef de Cozinha',
      rating: 5,
      comment: 'Como profissional da área, posso dizer que a qualidade é impecável. Ingredientes frescos e preparo perfeito.',
      avatar: 'PO'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Mais de 15.000 clientes satisfeitos compartilham suas experiências
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <Quote className="h-6 w-6 text-orange-200 absolute -top-2 -left-1" />
                    <p className="text-gray-600 text-sm italic pl-4">
                      {testimonial.comment}
                    </p>
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
