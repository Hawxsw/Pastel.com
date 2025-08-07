import Link from 'next/link'
import { ChefHat, Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-6 w-6 text-orange-600" />
              <span className="font-bold text-xl">Pastel.com</span>
            </div>
            <p className="text-gray-400">
              Os melhores salgados online desde 2024.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-orange-600 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-orange-600 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-orange-600 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-orange-600">Início</Link>
              <Link href="/produtos" className="block text-gray-400 hover:text-orange-600">Produtos</Link>
              <Link href="/sobre" className="block text-gray-400 hover:text-orange-600">Sobre</Link>
              <Link href="/contato" className="block text-gray-400 hover:text-orange-600">Contato</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Produtos</h3>
            <div className="space-y-2 text-gray-400">
              <p>Pastéis</p>
              <p>Coxinhas</p>
              <p>Risoles</p>
              <p>Empadas</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-gray-400">
              <p>Rua das Delícias, 123</p>
              <p>Centro - São Paulo, SP</p>
              <p>(11) 1234-5678</p>
              <p>contato@pastel.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Pastel.com. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
