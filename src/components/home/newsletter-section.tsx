"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, Gift, Bell, Percent } from 'lucide-react'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    toast({
      title: "Inscrição realizada!",
      description: "Você receberá nossas promoções e novidades em breve.",
    })
    
    setEmail('')
  }

  const benefits = [
    {
      icon: Percent,
      title: 'Descontos Exclusivos',
      description: 'Até 30% OFF em promoções especiais'
    },
    {
      icon: Bell,
      title: 'Novidades em Primeira Mão',
      description: 'Seja o primeiro a saber dos novos sabores'
    },
    {
      icon: Gift,
      title: 'Ofertas Especiais',
      description: 'Promoções exclusivas para assinantes'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Mail className="h-16 w-16 mx-auto mb-4 text-orange-200" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Fique Por Dentro das Novidades
            </h2>
            <p className="text-orange-100 text-lg">
              Cadastre-se em nossa newsletter e receba promoções exclusivas, 
              novos sabores e ofertas especiais direto no seu e-mail
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="newsletter-email" className="block text-sm font-medium mb-2">
                        Seu melhor e-mail
                      </label>
                      <Input
                        id="newsletter-email"
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-white text-orange-600 hover:bg-orange-50">
                      <Mail className="mr-2 h-4 w-4" />
                      Quero Receber Ofertas
                    </Button>
                  </form>
                  
                  <p className="text-xs text-orange-200 mt-3 text-center">
                    Não enviamos spam. Você pode cancelar a qualquer momento.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-orange-100 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
