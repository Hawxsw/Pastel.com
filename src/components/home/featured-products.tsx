"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, Star } from 'lucide-react'
import Image from 'next/image'
import { useCart } from '../../hooks/cart-provider'
import { useToast } from '@/hooks/use-toast'

const featuredProducts = [
	{
		id: 1,
		name: 'Pastel de Carne',
		image: '/golden-fried-pastel.png',
		description: 'Pastel crocante recheado com carne temperada e cebola',
		price: 8.5,
		rating: 4.8,
		type: 'pastel',
		popular: true,
	},
	{
		id: 2,
		name: 'Coxinha de Frango',
		image: '/chicken-drumstick.png',
		description: 'Coxinha tradicional com frango desfiado e catupiry',
		price: 6.0,
		rating: 4.9,
		type: 'coxinha',
		popular: true,
	},
	{
		id: 3,
		name: 'Pastel de Carne com Queijo',
		image: '/shrimp-pastel-seafood.png',
		description: 'Pastel cremoso recheado com carne e queijo',
		price: 12.0,
		rating: 4.7,
		type: 'pastel',
		popular: false,
	},
	{
		id: 4,
		name: 'Pastel de Queijo',
		image: '/cheese-pastel.jpeg',
		description: 'Pastel dourado com queijo derretido',
		price: 7.0,
		rating: 4.6,
		type: 'pastel',
		popular: false,
	},
]

export function FeaturedProducts() {
	const { addItem } = useCart()
	const { toast } = useToast()

	const handleAddToCart = (product: typeof featuredProducts[0]) => {
		addItem({
			id: product.id,
			name: product.name,
			price: product.price,
			quantity: 1,
			image: product.image,
		})

		toast({
			title: 'Produto adicionado!',
			description: `${product.name} foi adicionado ao carrinho.`,
		})
	}

	return (
		<section className="py-16 bg-white">
			<div className="container px-4 md:px-6">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
						Nossos Produtos em Destaque
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Experimente nossos salgados mais populares, feitos fresquinhos todos
						os dias
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{featuredProducts.map((product) => (
						<Card
							key={product.id}
							className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
						>
							<CardContent className="p-0">
								<div className="relative h-48 overflow-hidden">
									<Image
										src={product.image}
										alt={product.name}
										fill
										className="object-cover transition-transform group-hover:scale-105"
									/>
									{product.popular && (
										<Badge className="absolute top-2 left-2 bg-orange-600">
											Popular
										</Badge>
									)}
								</div>

								<div className="p-4">
									<div className="flex items-center justify-between mb-2">
										<h3 className="font-semibold text-lg">{product.name}</h3>
										<div className="flex items-center space-x-1">
											<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
											<span className="text-sm text-gray-600">
												{product.rating}
											</span>
										</div>
									</div>

									<p className="text-gray-600 text-sm mb-4">
										{product.description}
									</p>

									<div className="flex items-center justify-between">
										<span className="text-2xl font-bold text-orange-600">
											R$ {product.price.toFixed(2)}
										</span>

										<Button
											size="sm"
											onClick={() => handleAddToCart(product)}
											className="bg-orange-600 hover:bg-orange-700"
										>
											<Plus className="h-4 w-4 mr-1" />
											Adicionar
										</Button>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
