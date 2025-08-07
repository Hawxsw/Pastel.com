"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'
import Link from 'next/link'

export function LocationSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Visite Nossa Loja
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Venha conhecer nossa loja física e experimente nossos salgados fresquinhos, 
              feitos na hora com todo carinho e tradição.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold">Endereços</div>
                  <div className="text-gray-600">Rua Manoel Francisco Mello 469, vila São Sebastião, Franca - SP</div>
                  <div className="text-gray-600">Rua São Paulo 1306, vila Aparecida, Franca - SP</div>

                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold">Horário de Funcionamento</div>
                  <div className="text-gray-600">Seg-Sex: 9:30h-19h | Sáb: 9:30h-18h</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold">Telefone</div>
                  <div className="text-gray-600">+55 16 99219-4491</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-orange-600 hover:bg-orange-700">
                <Link href="/contato">
                  <Navigation className="mr-2 h-4 w-4" />
                  Como Chegar
                </Link>
              </Button>
              
              <Button variant="outline" asChild>
                <Link href="tel:+5516992194491">
                  <Phone className="mr-2 h-4 w-4" />
                  Ligar Agora
                </Link>
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Nossa Localização</h3>
                  <p className="text-gray-600">Centro de São Paulo</p>
                  <p className="text-sm text-gray-500 mt-2">Clique em &quot;Como Chegar&quot; para ver o mapa</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
