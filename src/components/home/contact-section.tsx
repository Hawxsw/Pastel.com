"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    info: "(11) 99999-9999",
    description: "Ligue para fazer seu pedido"
  },
  {
    icon: Mail,
    title: "Email",
    info: "contato@pastelariadelicia.com.br",
    description: "Envie suas dúvidas e sugestões"
  },
  {
    icon: MapPin,
    title: "Endereço",
    info: "Rua dos Pastéis, 123",
    description: "São Paulo, SP - 01234-567"
  },
  {
    icon: Clock,
    title: "Horário",
    info: "Seg - Dom: 10h às 23h",
    description: "Delivery disponível"
  }
]

export function ContactSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Estamos sempre prontos para atender você da melhor forma
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                  <p className="text-orange-400 font-semibold mb-1">{item.info}</p>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Pronto para fazer seu pedido?</h3>
            <p className="mb-6 text-orange-100">
              Experimente nossos deliciosos pastéis e descubra por que somos a escolha favorita de milhares de clientes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-orange-500">
                Ver Cardápio
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
