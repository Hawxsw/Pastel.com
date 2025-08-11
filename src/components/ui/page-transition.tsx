'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

// Diferentes tipos de animação baseados na rota
const getPageVariants = (pathname: string) => {
  // Página inicial - animação suave de fade
  if (pathname === '/') {
    return {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  }
  
  // Página de produtos - animação de slide da direita
  if (pathname === '/produtos') {
    return {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -30 },
      transition: { duration: 0.4, ease: 'easeInOut' }
    }
  }
  
  // Página sobre - animação de escala
  if (pathname === '/sobre') {
    return {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.05 },
      transition: { duration: 0.4, ease: 'easeInOut' }
    }
  }
  
  // Página de contato - animação de slide de baixo
  if (pathname === '/contato') {
    return {
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -40 },
      transition: { duration: 0.4, ease: 'easeInOut' }
    }
  }
  
  // Página de checkout - animação de fade com blur
  if (pathname === '/checkout') {
    return {
      initial: { opacity: 0, filter: 'blur(10px)' },
      animate: { opacity: 1, filter: 'blur(0px)' },
      exit: { opacity: 0, filter: 'blur(10px)' },
      transition: { duration: 0.5, ease: 'easeInOut' }
    }
  }
  
  // Animação padrão para outras páginas
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4, ease: 'easeInOut' }
  }
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const variants = getPageVariants(pathname)

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
} 