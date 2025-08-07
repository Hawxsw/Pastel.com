"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { MapPin, Phone, Clock, Mail, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { Textarea } from '@/components/ui/textarea'

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    mensagem: ''
  })
  
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simular envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    })
    
    // Limpar formulário
    setFormData({
      nome: '',
      telefone: '',
      email: '',
      mensagem: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-200 text-orange-900">Fale Conosco</Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              Entre em Contato
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Estamos sempre prontos para atendê-lo. Faça seu pedido, tire suas dúvidas ou nos dê sugestões!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-orange-700" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Localização</h3>
                <p className="text-gray-600 text-sm">
                  Rua das Delícias, 123<br />
                  Centro - São Paulo, SP<br />
                  CEP: 01234-567
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-orange-700" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Telefones</h3>
                <p className="text-gray-600 text-sm">
                  (11) 1234-5678<br />
                  WhatsApp: (11) 91234-5678<br />
                  Delivery: (11) 98765-4321
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-orange-700" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Horário</h3>
                <p className="text-gray-600 text-sm">
                  Segunda a Sexta: 7h às 19h<br />
                  Sábado: 7h às 18h<br />
                  Domingo: 8h às 16h
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-orange-700" />
                </div>
                <h3 className="font-semibold text-lg mb-2">E-mail</h3>
                <p className="text-gray-600 text-sm">
                  contato@pastel.com<br />
                  pedidos@pastel.com<br />
                  suporte@pastel.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-orange-600" />
                  <span>Envie uma Mensagem</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
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
                      />
                    </div>
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
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
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem *
                    </label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Sua mensagem, pedido especial ou sugestão..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Como Chegar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                      <p className="text-gray-600">Mapa Interativo</p>
                      <p className="text-sm text-gray-500">Rua das Delícias, 123 - Centro</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Transporte Público:</strong> Metrô Sé (5 min a pé)</p>
                    <p><strong>Estacionamento:</strong> Disponível na rua</p>
                    <p><strong>Acessibilidade:</strong> Local adaptado para PCD</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Redes Sociais</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Siga-nos nas redes sociais para ficar por dentro das novidades e promoções!
                  </p>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="flex items-center space-x-2">
                      <Instagram className="h-4 w-4" />
                      <span>@pastel.com</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center space-x-2">
                      <Facebook className="h-4 w-4" />
                      <span>Pastel.com</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center space-x-2">
                      <Twitter className="h-4 w-4" />
                      <span>@pastelcom</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Taxa de entrega:</span>
                      <span className="text-sm text-orange-600">R$ 5,00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Pedido mínimo:</span>
                      <span className="text-sm text-orange-600">R$ 25,00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Tempo médio:</span>
                      <span className="text-sm text-orange-600">30-45 min</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Raio de entrega:</span>
                      <span className="text-sm text-orange-600">5 km</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Vocês fazem encomendas para festas?</h3>
                <p className="text-gray-600 text-sm">
                  Sim! Fazemos encomendas para festas e eventos. Entre em contato com 48h de antecedência.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Qual o prazo de entrega?</h3>
                <p className="text-gray-600 text-sm">
                  O prazo médio de entrega é de 30 a 45 minutos, dependendo da localização e demanda.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Vocês têm opções veganas?</h3>
                <p className="text-gray-600 text-sm">
                  Sim! Temos pastéis de palmito, queijo vegano e outras opções para veganos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Como posso acompanhar meu pedido?</h3>
                <p className="text-gray-600 text-sm">
                  Após confirmar o pedido, você receberá atualizações por WhatsApp sobre o status da entrega.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
