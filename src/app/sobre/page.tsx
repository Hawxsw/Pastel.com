'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, Award, Users, ChefHat, Star } from 'lucide-react'
import Image from 'next/image'
import Lottie from 'lottie-react'
import clockAnimation from '../../../public/Lottie/clock.json'
import heartAnimation from '../../../public/Lottie/heart.json'
import usersAnimation from '../../../public/Lottie/users.json'

const ClockIcon = (props: { className?: string }) => (
  <Lottie animationData={clockAnimation} loop={true} {...props} />
)
const HeartIcon = (props: { className?: string }) => (
  <Lottie animationData={heartAnimation} loop={true} {...props} />
)
const UsersIcon = (props: { className?: string }) => (
  <Lottie  animationData={usersAnimation} loop={true} {...props} />
)

// Componente de medalha animada
const AwardIcon = (props: { className?: string }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-full opacity-0 group-hover:opacity-40 blur-lg transition-all duration-700 group-hover:scale-110"></div>
    <Award 
      className={`${props.className} relative z-10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3`}
      style={{
        filter: 'drop-shadow(0 0 8px rgba(251, 146, 60, 0.6))',
        animation: 'medalGlow 4s ease-in-out infinite'
      }}
    />
    <div 
      className="absolute inset-0 medal-shine rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      style={{ pointerEvents: 'none' }}
    ></div>
  </div>
)

export default function SobrePage() {
  const features = [
    {
      icon: HeartIcon,
      title: 'Feito com Amor',
      description: 'Cada salgado é preparado com carinho e ingredientes selecionados'
    },
    {
      icon: AwardIcon,
      title: 'Qualidade Premium',
      description: 'Reconhecidos como a melhor pastelaria da região há 5 anos consecutivos'
    },
    {
      icon: ClockIcon,
      title: 'Sempre Fresquinho',
      description: 'Produção contínua durante todo o dia para garantir frescor'
    },
    {
      icon: UsersIcon,
      title: 'Tradição Familiar',
      description: 'Receitas passadas de geração em geração desde 1985'
    }
  ]

  const timeline = [
    {
      year: '1985',
      title: 'O Início',
      description: 'Fundação da primeira loja com apenas 3 tipos de pastéis'
    },
    {
      year: '1995',
      title: 'Expansão',
      description: 'Abertura da segunda unidade e criação de novos sabores'
    },
    {
      year: '2010',
      title: 'Modernização',
      description: 'Renovação completa e implementação de novos equipamentos'
    },
    {
      year: '2024',
      title: 'Era Digital',
      description: 'Lançamento da Pastel.com para vendas online'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      
      <section className="py-24 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-orange-500 text-white px-6 py-2 rounded-full shadow-lg">Nossa História</Badge>
            <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl mb-8 text-gray-900 leading-tight drop-shadow-lg">
              Sobre a <span className="text-orange-600">Pastel.com</span>
            </h1>
            <p className="text-gray-700 max-w-4xl mx-auto text-2xl leading-relaxed">
              Há mais de 38 anos, a Pastel.com tem sido o ponto de encontro dos amantes de salgados. 
              Nossa paixão pela culinária tradicional brasileira nos move a criar experiências únicas de sabor.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-fade-in">
            <div>
              <h2 className="text-5xl font-bold mb-10 text-gray-800">Nossa Missão</h2>
              <p className="text-gray-700 mb-10 text-xl leading-relaxed">
                Proporcionar momentos de alegria e satisfação através de salgados artesanais de alta qualidade, 
                mantendo viva a tradição da culinária brasileira e criando memórias afetivas em cada cliente.
              </p>
              
              <div className="grid grid-cols-2 gap-10 mb-10">
                <div className="text-center">
                  <div className="text-5xl font-bold text-orange-600">50+</div>
                  <div className="text-md text-gray-600">Variedades</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-orange-600">1000+</div>
                  <div className="text-md text-gray-600">Pedidos/Mês</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-orange-600">38+</div>
                  <div className="text-md text-gray-600">Anos de Tradição</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-orange-600">4.8</div>
                  <div className="text-md text-gray-600 flex items-center justify-center">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                    Avaliação
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-200 to-yellow-200 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Image
                  src="/pastelaria-tradicional-cozinha.png"
                  alt="Cozinha da Pastel.com"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-6 text-gray-800">
              O Que Nos Torna Especiais
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-xl">
              Conheça os pilares que sustentam nossa tradição e qualidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-10">
                  <div className="w-24 h-24 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg overflow-hidden relative">
                    <feature.icon className="h-12 w-12 text-orange-700" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 text-lg">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-6 text-gray-800">
              Nossa Jornada
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-xl">
              Acompanhe os marcos importantes da nossa história
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-orange-400 h-full"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pr-10 text-right' : 'pl-10 text-left'}`}>
                    <Card className="hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      <CardContent className="p-8">
                        <div className="text-3xl font-bold text-orange-600 mb-3">{item.year}</div>
                        <h3 className="font-bold text-xl mb-3 text-gray-800">{item.title}</h3>
                        <p className="text-gray-600 text-base">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-700 rounded-full border-6 border-white shadow-xl"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-6 text-gray-800">
              Nossa Equipe
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-xl">
              Conheça as pessoas por trás dos sabores que você ama
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-10">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg">
                  <ChefHat className="h-16 w-16 text-orange-700" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-gray-800">Chef Maria Silva</h3>
                <p className="text-orange-600 text-lg mb-4">Fundadora & Chef Principal</p>
                <p className="text-gray-600 text-lg">
                  Responsável pelas receitas tradicionais e criação de novos sabores há 38 anos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-10">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg">
                  <Users className="h-16 w-16 text-orange-700" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-gray-800">João Santos</h3>
                <p className="text-orange-600 text-lg mb-4">Gerente de Operações</p>
                <p className="text-gray-600 text-lg">
                  Garante que todos os processos mantenham o padrão de qualidade da Pastel.com.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-10">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg">
                  <Heart className="h-16 w-16 text-orange-700" />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-gray-800">Ana Costa</h3>
                <p className="text-orange-600 text-lg mb-4">Atendimento ao Cliente</p>
                <p className="text-gray-600 text-lg">
                  Cuida para que cada cliente tenha a melhor experiência possível.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
