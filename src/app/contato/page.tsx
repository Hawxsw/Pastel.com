"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { MapPin, MessageCircle, Instagram, Facebook, Twitter, Send, CheckCircle, Star } from 'lucide-react'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { Textarea } from '@/components/ui/textarea'
import dynamic from 'next/dynamic'
import { locations } from '@/hooks/use-map'
import { AnimatedCard, AnimatedIconCard } from '@/components/ui/animated-card'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import clockAnimation from '../../../public/Lottie/clock.json'
import phoneAnimation from '../../../public/Lottie/phone.json'
import locationAnimation from '../../../public/Lottie/location.json'
import mailAnimation from '../../../public/Lottie/mail.json'

const ClockIcon = (props: { className?: string }) => (
  <Lottie animationData={clockAnimation} loop={true} {...props} />
)
const PhoneIcon = (props: { className?: string }) => (
  <Lottie animationData={phoneAnimation} loop={true} {...props} />
)
const LocationIcon = (props: { className?: string }) => (
  <Lottie animationData={locationAnimation} loop={true} {...props} />
)
const MailIcon = (props: { className?: string }) => (
  <Lottie animationData={mailAnimation} loop={true} {...props} />
)

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    mensagem: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const MapClient = dynamic(() => import('@/components/home/map-client'), { ssr: false })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    })
    
    setFormData({
      nome: '',
      telefone: '',
      email: '',
      mensagem: ''
    })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: LocationIcon,
      title: "Localização",
      details: [
        "Rua Manoel Francisco Mello 469",
        "Vila São Sebastião - Franca, SP",
        "Rua São Paulo 1306",
        "Vila Aparecida - Franca, SP"
      ]
    },
    {
      icon: PhoneIcon,
      title: "Telefones",
      details: [
        "(16) 99219-4491",
        "WhatsApp: (16) 99219-4491"
      ]
    },
    {
      icon: ClockIcon,
      title: "Horário",
      details: [
        "Segunda a Sexta: 9:30h às 19h",
        "Sábado: 9:30h às 18h"
      ]
    },
    {
      icon: MailIcon,
      title: "E-mail",
      details: [
        "contato@pastel.com",
        "pedidos@pastel.com"
      ]
    }
  ]

  const faqs = [
    {
      question: "Vocês fazem encomendas para festas?",
      answer: "Sim! Fazemos encomendas para festas e eventos. Entre em contato com 48h de antecedência."
    },
    {
      question: "Qual o prazo de entrega?",
      answer: "O prazo médio de entrega é de 30 a 45 minutos, dependendo da localização e demanda."
    },
    {
      question: "Vocês têm opções veganas?",
      answer: "Sim! Temos pastéis de palmito, queijo vegano e outras opções para veganos."
    },
    {
      question: "Como posso acompanhar meu pedido?",
      answer: "Após confirmar o pedido, você receberá atualizações por WhatsApp sobre o status da entrega."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-yellow-600/10"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-orange-200 text-orange-900 hover:bg-orange-300 transition-colors">
              Fale Conosco
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Entre em Contato
            </h1>
            <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Estamos sempre prontos para atendê-lo. Faça seu pedido, tire suas dúvidas ou nos dê sugestões!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {contactInfo.map((info, index) => (
              <AnimatedIconCard
                key={index}
                icon={<info.icon className="h-8 w-8 text-orange-700" />}
                title={info.title}
                delay={index * 0.1}
              >
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </AnimatedIconCard>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedCard className="border-0 shadow-xl bg-white/90 backdrop-blur-sm" delay={0.2}>
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-xl flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-orange-700" />
                  </div>
                  <span>Envie uma Mensagem</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="nome" className="block text-sm font-semibold text-gray-700">
                        Nome Completo *
                      </label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        className="h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700">
                        Telefone *
                      </label>
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        required
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className="h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700">
                      Mensagem *
                    </label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Sua mensagem, pedido especial ou sugestão..."
                      className="min-h-[120px] border-gray-200 focus:border-orange-500 focus:ring-orange-500 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="h-5 w-5" />
                        <span>Enviar Mensagem</span>
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </AnimatedCard>

            <motion.div 
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <AnimatedCard className="border-0 shadow-xl bg-white/90 backdrop-blur-sm" delay={0.3}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-orange-600" />
                    <span>Como Chegar</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <MapClient locations={locations} height="300px" className="rounded-lg overflow-hidden" />
                  <div className="mt-4 space-y-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Transporte Público: Metrô Sé (5 min a pé)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Estacionamento: Disponível na rua</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Acessibilidade: Local adaptado para PCD</span>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-yellow-50" delay={0.4}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-lg flex items-center justify-center">
                      <Star className="h-4 w-4 text-orange-700" />
                    </div>
                    <span>Redes Sociais</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Siga-nos nas redes sociais para ficar por dentro das novidades e promoções!
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    <Button asChild variant="outline" size="lg" className="justify-start h-12 hover:bg-orange-50 hover:border-orange-300 transition-colors">
                      <a href="https://www.instagram.com/pastel.com" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-5 w-5 mr-3 text-pink-600" />
                        <span>@pastel.com</span>
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="justify-start h-12 hover:bg-blue-50 hover:border-blue-300 transition-colors">
                      <a href="https://www.facebook.com/pastel.com" target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-5 w-5 mr-3 text-blue-600" />
                        <span>Pastel.com</span>
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="justify-start h-12 hover:bg-sky-50 hover:border-sky-300 transition-colors">
                      <a href="https://twitter.com/pastelcom" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-5 w-5 mr-3 text-sky-600" />
                        <span>@pastelcom</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50" delay={0.5}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-200 to-emerald-200 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-700" />
                    </div>
                    <span>Delivery</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                      <span className="text-sm font-semibold">Taxa de entrega:</span>
                      <span className="text-sm font-bold text-green-600">R$ 5,00</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                      <span className="text-sm font-semibold">Pedido mínimo:</span>
                      <span className="text-sm font-bold text-green-600">R$ 25,00</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                      <span className="text-sm font-semibold">Tempo médio:</span>
                      <span className="text-sm font-bold text-green-600">30-45 min</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                      <span className="text-sm font-semibold">Raio de entrega:</span>
                      <span className="text-sm font-bold text-green-600">5 km</span>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {faqs.map((faq, index) => (
              <AnimatedCard key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm" delay={index * 0.1}>
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-4 text-gray-800 flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-orange-700">{index + 1}</span>
                    </div>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
