"use client"

import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  whileHover?: boolean
}

export function AnimatedCard({ 
  children, 
  className = "", 
  delay = 0,
  whileHover = true 
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: "easeOut"
      }}
      whileHover={whileHover ? {
        y: -5,
        transition: { duration: 0.2 }
      } : undefined}
    >
      <Card className={className}>
        {children}
      </Card>
    </motion.div>
  )
}

interface AnimatedIconCardProps {
  icon: ReactNode
  title: string
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedIconCard({ 
  icon, 
  title, 
  children, 
  className = "",
  delay = 0 
}: AnimatedIconCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: "easeOut"
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <Card className={`group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm ${className}`}>
        <CardContent className="p-8 text-center">
          <motion.div 
            className="w-16 h-16 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-2xl flex items-center justify-center mx-auto mb-6"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.div>
          <h3 className="font-bold text-xl mb-4 text-gray-800">{title}</h3>
          {children}
        </CardContent>
      </Card>
    </motion.div>
  )
} 