"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Calendar, Cookie, Users } from 'lucide-react'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
}



export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pastelaria-pattern.png')] opacity-[0.03]" />
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center justify-center rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-600"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Sabor que atravessa gerações
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-gray-800"
            >
              O Melhor Pastel
              <span className="text-orange-500 block mt-2">da Cidade</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto max-w-[600px] text-gray-600 md:text-xl lg:mx-0"
            >
              Descubra sabores únicos em nossa pastelaria. Pastéis crocantes,
              coxinhas suculentas e muito mais, feitos com amor e ingredientes
              frescos.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-105">
                <Link href="/produtos">
                  Ver Cardápio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-gray-600 hover:bg-gray-100">
                <Link href="/sobre">Nossa História</Link>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="w-full pt-8"
            >
              <div className="grid grid-cols-3 gap-4 text-center divide-x divide-gray-200">
                <div className="flex flex-col items-center">
                  <Calendar className="h-6 w-6 mb-2 text-orange-500" />
                  <div className="text-2xl font-bold text-gray-800">35+</div>
                  <div className="text-sm text-gray-500">Anos</div>
                </div>
                <div className="flex flex-col items-center">
                  <Cookie className="h-6 w-6 mb-2 text-orange-500" />
                  <div className="text-2xl font-bold text-gray-800">50+</div>
                  <div className="text-sm text-gray-500">Opções</div>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="h-6 w-6 mb-2 text-orange-500" />
                  <div className="text-2xl font-bold text-gray-800">10k+</div>
                  <div className="text-sm text-gray-500">Clientes</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:flex items-center justify-center relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ ease: "linear", duration: 40, repeat: Infinity }}
              className="absolute w-[500px] h-[500px] bg-orange-100/80 rounded-full blur-2xl opacity-70"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: ["-10px", "10px"],
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.25, 1, 0.5, 1],
                y: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
              }}
              className="relative w-[450px] h-[450px] xl:w-[500px] xl:h-[500px]"
            >
              <Image
                src="/golden-fried-pastel.png"
                alt="Pastel dourado e crocante"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
