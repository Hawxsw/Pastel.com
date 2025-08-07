"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, Award, Clock, Users } from 'lucide-react'

export function About() {
  const features = [
    {
      icon: Heart,
      title: 'Feito com Amor',
      description: 'Cada salgado é preparado com carinho e ingredientes selecionados'
    },
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Reconhecidos como a melhor pastelaria da região há 5 anos consecutivos'
    },
    {
      icon: Clock,
      title: 'Sempre Fresquinho',
      description: 'Produção contínua durante todo o dia para garantir frescor'
    },
    {
      icon: Users,
      title: 'Tradição Familiar',
      description: 'Receitas passadas de geração em geração desde 1985'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-orange-200 text-orange-900">Nossa História</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Tradição e Sabor em Cada Mordida
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Proporcionar momentos de alegria e satisfação através de salgados artesanais de alta qualidade, 
            mantendo viva a tradição da culinária brasileira e criando memórias afetivas em cada cliente através da Pastel.com.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-orange-700" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-gray-600 mb-6">
                Proporcionar momentos de alegria e satisfação através de salgados artesanais de alta qualidade, 
                mantendo viva a tradição da culinária brasileira e criando memórias afetivas em cada cliente.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-orange-600">50+</div>
                  <div className="text-sm text-gray-600">Variedades</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">1000+</div>
                  <div className="text-sm text-gray-600">Pedidos/Mês</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-200 to-yellow-200 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">👨‍🍳</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
