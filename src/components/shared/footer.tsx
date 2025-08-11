import Link from 'next/link'
import { ChefHat, Facebook, Instagram, Twitter, Phone, MapPin, Clock, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f97316%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-600/10 via-transparent to-transparent" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <ChefHat className="h-10 w-10 text-orange-500 group-hover:text-orange-400 transition-all duration-300 transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl group-hover:bg-orange-400/30 transition-all duration-300" />
                </div>
                <div>
                  <span className="font-bold text-3xl bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    Pastel.com
                  </span>
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-500 mt-1" />
                </div>
              </div>
              
              <p className="text-gray-300 text-base leading-relaxed max-w-sm">
                Os melhores salgados online desde 2024. Sabor que atravessa gerações, 
                feito com amor e ingredientes frescos.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                ].map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="group relative p-3 bg-gray-800/50 hover:bg-orange-500/20 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-gray-300 group-hover:text-orange-400 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-yellow-500/0 group-hover:from-orange-500/10 group-hover:to-yellow-500/10 rounded-xl transition-all duration-300" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="font-bold text-xl text-white relative">
                Links Rápidos
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
              </h3>
              <div className="space-y-4">
                {[
                  { href: "/", label: "Início" },
                  { href: "/produtos", label: "Produtos" },
                  { href: "/sobre", label: "Sobre" },
                  { href: "/contato", label: "Contato" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1"
                  >
                    <div className="w-1 h-1 bg-orange-500 rounded-full group-hover:w-3 transition-all duration-300" />
                    <span className="text-base font-medium">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Products */}
            <div className="space-y-6">
              <h3 className="font-bold text-xl text-white relative">
                Nossos Produtos
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
              </h3>
              <div className="space-y-4">
                {[
                  "Pastéis Tradicionais",
                  "Coxinhas Gourmet", 
                  "Risoles Especiais",
                  "Empadas Artesanais",
                  "Salgados Veganos",
                  "Combos Promocionais"
                ].map((product, index) => (
                  <div
                    key={index}
                    className="group flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-all duration-300"
                  >
                    <div className="w-1 h-1 bg-orange-500 rounded-full group-hover:scale-150 transition-all duration-300" />
                    <span className="text-base">{product}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="font-bold text-xl text-white relative">
                Informações de Contato
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
              </h3>
                             <div className="space-y-4">
                 {[
                   { icon: MapPin, text: "Rua Manoel Francisco Mello 469", subtext: "Vila São Sebastião, Franca - SP" },
                   { icon: MapPin, text: "Rua São Paulo 1306", subtext: "Vila Aparecida, Franca - SP" },
                   { icon: Phone, text: "+55 16 99219-4491", subtext: "WhatsApp disponível" },
                   { icon: Clock, text: "Seg-Sex: 9:30h-19h", subtext: "Sáb: 9:30h-18h" },
                 ].map((contact, index) => (
                  <div key={index} className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/30 transition-all duration-300">
                    <div className="flex-shrink-0 p-2 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition-all duration-300">
                      <contact.icon className="h-4 w-4 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-gray-200 font-medium text-sm">{contact.text}</p>
                      <p className="text-gray-400 text-xs">{contact.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative border-t border-gray-800/50 bg-gradient-to-r from-gray-900/50 via-gray-800/50 to-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>&copy; {new Date().getFullYear()} Pastel.com. Todos os direitos reservados.</span>
                <Heart className="h-4 w-4 text-orange-500 animate-pulse" />
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  Política de Privacidade
                </Link>
                <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  Termos de Uso
                </Link>
                <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
