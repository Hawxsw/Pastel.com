"use client"

import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, Users, Clock, Award } from 'lucide-react'
import { motion } from 'framer-motion'

export function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      number: '50K+',
      label: 'Salgados Vendidos',
      description: 'Este mês'
    },
    {
      icon: Users,
      number: '15K+',
      label: 'Clientes Satisfeitos',
      description: 'E crescendo'
    },
    {
      icon: Clock,
      number: '25min',
      label: 'Tempo Médio',
      description: 'De entrega'
    },
    {
      icon: Award,
      number: '4.9★',
      label: 'Avaliação',
      description: 'Dos clientes'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-600">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.description}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
