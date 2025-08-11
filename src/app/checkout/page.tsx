"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { 
  CheckCircle, 
  CreditCard, 
  MapPin, 
  Clock, 
  Truck, 
  Shield, 
  ArrowLeft,
  ShoppingBag,
  Calendar,
  User,
  Search,
  Loader2
} from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { useToast } from '@/hooks/use-toast'
import { useCart } from '@/hooks/cart-provider'
import { useCEP } from '@/hooks/use-cep'
import { AnimatedCard } from '@/components/ui/animated-card'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface CheckoutForm {
  nome: string
  email: string
  telefone: string
  endereco: string
  numero: string
  bairro: string
  cidade: string
  cep: string
  observacoes: string
}

interface PaymentMethod {
  id: string
  name: string
  icon: React.ReactNode
  description: string
}

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<CheckoutForm>({
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    numero: '',
    bairro: '',
    cidade: '',
    cep: '',
    observacoes: ''
  })
  const [selectedPayment, setSelectedPayment] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderConfirmed, setOrderConfirmed] = useState(false)
  const [orderNumber, setOrderNumber] = useState('')
  
  const { toast } = useToast()
  const { items, total, clearCart } = useCart()
  const { cepData, isLoading: cepLoading, error: cepError, fetchCEP } = useCEP()
  const cepTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  useEffect(() => {
    if (cepData && !cepLoading) {
      toast({
        title: "CEP encontrado!",
        description: "Clique em 'Aplicar' para preencher automaticamente os campos.",
      })
    }
  }, [cepData, cepLoading, toast])

  useEffect(() => {
    return () => {
      if (cepTimeoutRef.current) {
        clearTimeout(cepTimeoutRef.current)
      }
    }
  }, [])

  const paymentMethods: PaymentMethod[] = [
    {
      id: 'pix',
      name: 'PIX',
      icon: <CreditCard className="w-6 h-6" />,
      description: 'Pagamento instantâneo'
    },
    {
      id: 'card',
      name: 'Cartão de Crédito',
      icon: <CreditCard className="w-6 h-6" />,
      description: 'Visa, Mastercard, Elo'
    },
    {
      id: 'money',
      name: 'Dinheiro',
      icon: <CreditCard className="w-6 h-6" />,
      description: 'Pagamento na entrega'
    }
  ]

  const deliveryFee = 5
  const totalWithDelivery = total + deliveryFee

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    
    if (name === 'cep') {
      const formattedValue = formatCEP(value)
      setFormData({
        ...formData,
        [name]: formattedValue
      })
      
      if (formattedValue.length === 9) {
        if (cepTimeoutRef.current) {
          clearTimeout(cepTimeoutRef.current)
        }
        cepTimeoutRef.current = setTimeout(() => {
          fetchCEP(formattedValue)
        }, 500)
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

  const handleCEPBlur = () => {
    if (formData.cep && !cepData) {
      fetchCEP(formData.cep)
    }
  }

  const applyCEPData = () => {
    if (cepData) {
      setFormData({
        ...formData,
        endereco: cepData.logradouro,
        bairro: cepData.bairro,
        cidade: cepData.localidade,
        cep: cepData.cep
      })
    }
  }

  const formatCEP = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 5) {
      return numbers
    }
    return `${numbers.slice(0, 5)}-${numbers.slice(5, 8)}`
  }

  const handleNextStep = () => {
    if (currentStep === 1 && validatePersonalData()) {
      setCurrentStep(2)
    } else if (currentStep === 2 && selectedPayment) {
      setCurrentStep(3)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const validatePersonalData = () => {
    return formData.nome && formData.email && formData.telefone && 
           formData.endereco && formData.numero && formData.bairro && formData.cidade && formData.cep
  }

  const handleConfirmOrder = async () => {
    setIsProcessing(true)
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const newOrderNumber = `PED-${Date.now().toString().slice(-6)}`
    setOrderNumber(newOrderNumber)
    setOrderConfirmed(true)
    clearCart()
    
    toast({
      title: "Pedido confirmado!",
      description: `Seu pedido #${newOrderNumber} foi realizado com sucesso!`,
    })
    
    setIsProcessing(false)
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  if (orderConfirmed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedCard className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm" delay={0.1}>
            <CardContent className="p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
              >
                <CheckCircle className="w-12 h-12 text-green-600" />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold text-gray-800 mb-4"
              >
                Pedido Confirmado!
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-600 mb-8"
              >
                Número do pedido: <span className="font-bold text-orange-600">#{orderNumber}</span>
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid md:grid-cols-3 gap-6 mb-8"
              >
                <div className="flex items-center justify-center space-x-3 p-4 bg-blue-50 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <div className="text-left">
                    <p className="font-semibold text-blue-800">Tempo estimado</p>
                    <p className="text-sm text-blue-600">30-45 minutos</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-3 p-4 bg-green-50 rounded-lg">
                  <Truck className="w-6 h-6 text-green-600" />
                  <div className="text-left">
                    <p className="font-semibold text-green-800">Entrega</p>
                    <p className="text-sm text-green-600">Em preparação</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-3 p-4 bg-orange-50 rounded-lg">
                  <Shield className="w-6 h-6 text-orange-600" />
                  <div className="text-left">
                    <p className="font-semibold text-orange-800">Segurança</p>
                    <p className="text-sm text-orange-600">Pedido protegido</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <Link href="/">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                    Voltar ao Início
                  </Button>
                </Link>
              </motion.div>
            </CardContent>
          </AnimatedCard>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar</span>
            </Button>
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep >= 1 ? 'bg-orange-600 text-white' : 'bg-gray-300'
              }`}>
                1
              </div>
              <span className={currentStep >= 1 ? 'text-orange-600 font-semibold' : 'text-gray-500'}>
                Dados Pessoais
              </span>
            </div>
            
            <div className="w-8 h-1 bg-gray-300 rounded"></div>
            
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep >= 2 ? 'bg-orange-600 text-white' : 'bg-gray-300'
              }`}>
                2
              </div>
              <span className={currentStep >= 2 ? 'text-orange-600 font-semibold' : 'text-gray-500'}>
                Pagamento
              </span>
            </div>
            
            <div className="w-8 h-1 bg-gray-300 rounded"></div>
            
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep >= 3 ? 'bg-orange-600 text-white' : 'bg-gray-300'
              }`}>
                3
              </div>
              <span className={currentStep >= 3 ? 'text-orange-600 font-semibold' : 'text-gray-500'}>
                Confirmação
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {currentStep === 1 && (
              <AnimatedCard className="border-0 shadow-xl bg-white/90 backdrop-blur-sm" delay={0.1}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <User className="w-6 h-6 text-orange-600" />
                    <span>Dados Pessoais</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        className="border-gray-300 focus:border-orange-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        className="border-gray-300 focus:border-orange-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone *
                      </label>
                      <Input
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        placeholder="(16) 99999-9999"
                        className="border-gray-300 focus:border-orange-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CEP *
                      </label>
                      <div className="relative">
                        <Input
                          name="cep"
                          value={formData.cep}
                          onChange={handleInputChange}
                          onBlur={handleCEPBlur}
                          placeholder="14400-000"
                          className="border-gray-300 focus:border-orange-500 pr-10"
                        />
                        {cepLoading && (
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <Loader2 className="w-4 h-4 animate-spin text-orange-600" />
                          </div>
                        )}
                        {!cepLoading && formData.cep && (
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <Search className="w-4 h-4 text-gray-400" />
                          </div>
                        )}
                      </div>
                      {cepError && (
                        <p className="text-sm text-red-600 mt-1">{cepError}</p>
                      )}
                      {cepData && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 p-3 bg-green-50 border border-green-200 rounded-lg"
                        >
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-green-800">
                              <p className="font-medium">{cepData.logradouro}</p>
                              <p>{cepData.bairro}, {cepData.localidade} - {cepData.uf}</p>
                            </div>
                            <Button
                              type="button"
                              size="sm"
                              onClick={applyCEPData}
                              className="bg-green-600 hover:bg-green-700 text-white"
                            >
                              Aplicar
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                  
                                     <div className="grid md:grid-cols-3 gap-4">
                     <div className="md:col-span-2">
                       <label className="block text-sm font-medium text-gray-700 mb-2">
                         Endereço *
                       </label>
                       <Input
                         name="endereco"
                         value={formData.endereco}
                         onChange={handleInputChange}
                         placeholder="Rua, avenida, etc."
                         className="border-gray-300 focus:border-orange-500"
                       />
                     </div>
                     
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-2">
                         Número *
                       </label>
                       <Input
                         name="numero"
                         value={formData.numero}
                         onChange={handleInputChange}
                         placeholder="123"
                         className="border-gray-300 focus:border-orange-500"
                       />
                     </div>
                   </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bairro *
                      </label>
                      <Input
                        name="bairro"
                        value={formData.bairro}
                        onChange={handleInputChange}
                        placeholder="Nome do bairro"
                        className="border-gray-300 focus:border-orange-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cidade *
                      </label>
                      <Input
                        name="cidade"
                        value={formData.cidade}
                        onChange={handleInputChange}
                        placeholder="Franca"
                        className="border-gray-300 focus:border-orange-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Observações
                    </label>
                    <Input
                      name="observacoes"
                      value={formData.observacoes}
                      onChange={handleInputChange}
                      placeholder="Instruções especiais para entrega"
                      className="border-gray-300 focus:border-orange-500"
                    />
                  </div>
                </CardContent>
              </AnimatedCard>
            )}

            {currentStep === 2 && (
              <AnimatedCard className="border-0 shadow-xl bg-white/90 backdrop-blur-sm" delay={0.1}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <CreditCard className="w-6 h-6 text-orange-600" />
                    <span>Forma de Pagamento</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {paymentMethods.map((method) => (
                    <motion.div
                      key={method.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          selectedPayment === method.id
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedPayment(method.id)}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`p-2 rounded-lg ${
                            selectedPayment === method.id
                              ? 'bg-orange-100 text-orange-600'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {method.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-800">{method.name}</h3>
                            <p className="text-sm text-gray-600">{method.description}</p>
                          </div>
                          {selectedPayment === method.id && (
                            <CheckCircle className="w-6 h-6 text-orange-600" />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </AnimatedCard>
            )}

            {currentStep === 3 && (
              <AnimatedCard className="border-0 shadow-xl bg-white/90 backdrop-blur-sm" delay={0.1}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-600" />
                    <span>Confirmação do Pedido</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-orange-600" />
                      <span>Endereço de Entrega</span>
                    </h3>
                                         <div className="text-gray-600 space-y-1">
                       <p className="font-medium">{formData.nome}</p>
                       <p>{formData.endereco}, {formData.numero}</p>
                       <p>{formData.bairro}, {formData.cidade}</p>
                       <p>CEP: {formData.cep}</p>
                       <p>Tel: {formData.telefone}</p>
                     </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                      <CreditCard className="w-5 h-5 text-orange-600" />
                      <span>Forma de Pagamento</span>
                    </h3>
                    <p className="text-gray-600">
                      {paymentMethods.find(m => m.id === selectedPayment)?.name}
                    </p>
                  </div>
                  
                  {formData.observacoes && (
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">Observações</h3>
                      <p className="text-gray-600">{formData.observacoes}</p>
                    </div>
                  )}
                </CardContent>
              </AnimatedCard>
            )}

            <div className="flex justify-between">
              {currentStep > 1 && (
                <Button
                  variant="outline"
                  onClick={handlePreviousStep}
                  className="border-gray-300 hover:bg-gray-50"
                >
                  Voltar
                </Button>
              )}
              
              {currentStep < 3 ? (
                <Button
                  onClick={handleNextStep}
                  disabled={
                    (currentStep === 1 && !validatePersonalData()) ||
                    (currentStep === 2 && !selectedPayment)
                  }
                  className="bg-orange-600 hover:bg-orange-700 ml-auto"
                >
                  Continuar
                </Button>
              ) : (
                <Button
                  onClick={handleConfirmOrder}
                  disabled={isProcessing}
                  className="bg-green-600 hover:bg-green-700 ml-auto"
                >
                  {isProcessing ? 'Processando...' : 'Confirmar Pedido'}
                </Button>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <AnimatedCard className="border-0 shadow-xl bg-white/90 backdrop-blur-sm" delay={0.2}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <ShoppingBag className="w-6 h-6 text-orange-600" />
                  <span>Resumo do Pedido</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-600">🍕</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-600">Qtd: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-semibold text-gray-800">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                ))}
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>{formatCurrency(total)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Taxa de entrega</span>
                    <span>{formatCurrency(deliveryFee)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold text-gray-800">
                    <span>Total</span>
                    <span>{formatCurrency(totalWithDelivery)}</span>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-yellow-50" delay={0.3}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                  <h3 className="font-semibold text-gray-800">Tempo de Entrega</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Tempo estimado de entrega: <span className="font-semibold">30-45 minutos</span>
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Pedidos até 19h</span>
                </div>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </div>
  )
} 