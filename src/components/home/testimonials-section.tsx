"use client"

import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star, ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaCarouselType } from 'embla-carousel'

const testimonials = [
  {
    name: 'Maria Santos',
    role: 'Cliente Fiel',
    rating: 5,
    comment:
      'Os melhores pastéis da cidade! A massa é sempre crocante e o recheio na medida certa. Recomendo demais!',
    image: '/placeholder-user.jpg',
  },
  {
    name: 'João Silva',
    role: 'Empresário',
    rating: 5,
    comment:
      'Sempre peço para o escritório. A entrega é rápida e a qualidade, excepcional. A coxinha de frango é perfeita!',
    image: '/placeholder-user.jpg',
  },
  {
    name: 'Ana Costa',
    role: 'Estudante',
    rating: 5,
    comment:
      'Preço justo e um sabor incrível. O atendimento da equipe é sempre muito atencioso. Virei cliente fiel!',
    image: '/placeholder-user.jpg',
  },
  {
    name: 'Pedro Oliveira',
    role: 'Chef de Cozinha',
    rating: 5,
    comment:
      'Como profissional da área, posso dizer que a qualidade dos ingredientes e o preparo são impecáveis. Parabéns!',
    image: '/placeholder-user.jpg',
  },
  {
    name: 'Carlos Souza',
    role: 'Turista',
    rating: 5,
    comment: 'Encontrei a pastelaria por acaso e foi uma surpresa maravilhosa! O pastel de palmito é divino.',
    image: '/placeholder-user.jpg',
  },
]

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 1, align: 'start' })
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="text-left">
                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-gray-800">
                    O Que Nossos Clientes Dizem
                </h2>
                <p className="text-gray-600 max-w-2xl md:text-lg">
                    A satisfação de quem prova nossos salgados é a nossa maior recompensa.
                </p>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={scrollPrev}
                    disabled={prevBtnDisabled}
                    className="rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-orange-50 disabled:opacity-50"
                >
                    <ArrowLeft />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={scrollNext}
                    disabled={nextBtnDisabled}
                    className="rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-orange-50 disabled:opacity-50"
                >
                    <ArrowRight />
                </Button>
            </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] pl-4">
                <Card className="h-full w-full overflow-hidden rounded-2xl shadow-sm bg-orange-50/60 border border-orange-100">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                    <p className="text-gray-700 italic mb-6 flex-grow">
                        &quot;{testimonial.comment}&quot;
                    </p>
                    <div className="flex items-center mt-auto">
                        <Avatar className="h-12 w-12 mr-4 border-2 border-orange-200">
                        <AvatarImage src={testimonial.image} />
                        <AvatarFallback>AV</AvatarFallback>
                        </Avatar>
                        <div>
                        <div className="font-bold text-gray-800">
                            {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-500">
                            {testimonial.role}
                        </div>
                        </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

