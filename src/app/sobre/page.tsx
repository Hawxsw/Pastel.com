import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, Award, Clock, Users, ChefHat, Star } from 'lucide-react'
import Image from 'next/image'

export default function SobrePage() {
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
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-200 text-orange-900">Nossa História</Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              Sobre a Pastel.com
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Há mais de 38 anos, a Pastel.com tem sido o ponto de encontro dos amantes de salgados. 
              Nossa paixão pela culinária tradicional brasileira nos move a criar experiências únicas de sabor.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Proporcionar momentos de alegria e satisfação através de salgados artesanais de alta qualidade, 
                mantendo viva a tradição da culinária brasileira e criando memórias afetivas em cada cliente.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">50+</div>
                  <div className="text-sm text-gray-600">Variedades</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">1000+</div>
                  <div className="text-sm text-gray-600">Pedidos/Mês</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">38+</div>
                  <div className="text-sm text-gray-600">Anos de Tradição</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">4.8</div>
                  <div className="text-sm text-gray-600 flex items-center justify-center">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                    Avaliação
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-200 to-yellow-200 rounded-2xl overflow-hidden">
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

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              O Que Nos Torna Especiais
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça os pilares que sustentam nossa tradição e qualidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Nossa Jornada
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Acompanhe os marcos importantes da nossa história
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-orange-600 mb-2">{item.year}</div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Nossa Equipe
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça as pessoas por trás dos sabores que você ama
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <ChefHat className="h-12 w-12 text-orange-700" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Chef Maria Silva</h3>
                <p className="text-orange-600 text-sm mb-2">Fundadora & Chef Principal</p>
                <p className="text-gray-600 text-sm">
                  Responsável pelas receitas tradicionais e criação de novos sabores há 38 anos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-orange-700" />
                </div>
                <h3 className="font-semibold text-lg mb-2">João Santos</h3>
                <p className="text-orange-600 text-sm mb-2">Gerente de Operações</p>
                <p className="text-gray-600 text-sm">
                  Garante que todos os processos mantenham o padrão de qualidade da Pastel.com.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-orange-700" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Ana Costa</h3>
                <p className="text-orange-600 text-sm mb-2">Atendimento ao Cliente</p>
                <p className="text-gray-600 text-sm">
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
