'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedContainerProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

const directionVariants = {
  up: { y: 40, opacity: 0 },
  down: { y: -40, opacity: 0 },
  left: { x: 40, opacity: 0 },
  right: { x: -40, opacity: 0 }
}

export function AnimatedContainer({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.6,
  direction = 'up' 
}: AnimatedContainerProps) {
  return (
    <motion.div
      initial={directionVariants[direction]}
      animate={{ 
        y: 0, 
        x: 0, 
        opacity: 1 
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 