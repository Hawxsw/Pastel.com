'use client'
import { useAuth } from "@/contexts/auth-context";
import { useCart } from "@/contexts/cart-context";
import { Badge, Menu, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";


export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { items } = useCart();
    const { user, logout } = useAuth()
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return ((
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">P</span>
                            <span className="font-bold text-xl gradient-text hidden sm:inline">Pastel.com</span>
                        </div>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-orange-500 transition-colors">Início</Link>
                        <Link href="/produtos" className="text-gray-700 hover:text-orange-500 transition-colors">Produtos</Link>
                        <Link href="/sobre" className="text-gray-700 hover:text-orange-500 transition-colors">Sobre</Link>
                        <Link href="/contato" className="text-gray-700 hover:text-orange-500 transition-colors">Contato</Link>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input placeholder="Buscar pastéis..."
                                className="pl-10 w-64"
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 md:space-x-4">
                        {user ? (
                            <div className="hidden md:flex items-center space-x-2">
                                <Link href="/dashboard">
                                    <Button variant="ghost" size="sm">
                                        <User className="w-4 h-4 mr-2" />
                                        {user.name}
                                    </Button>
                                </Link>
                                <Button variant="ghost" size="sm" onClick={logout}>
                                    Sair
                                </Button>
                            </div>
                        ) : (
                            <div className="hidden md:flex items-center space-x-2">
                                <Link href="/login">
                                    <Button variant="ghost" size="sm">Entrar</Button>
                                </Link>
                                <Link href="/registro" >
                                    <Button className="bg-orange-500 hover:bg-orange-600" size="sm">Cadastrar</Button>
                                </Link>
                            </div>
                        )}

                        <Link href="/carrinho">
                            <Button variant="ghost" size="sm" className="relative">
                                <ShoppingCart className="w-5 h-5" />
                                {itemCount > 0 && (
                                    <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 text-xs">
                                        {itemCount}
                                    </Badge>
                                )}
                            </Button>
                        </Link>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="sm" className="md:hidden">
                                    <Menu className="w-5 h-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-full max-w-xs p-0 overflow-x-hidden">
                                <div className="flex flex-col space-y-2 mt-8 px-4">
                                    <Link href="/" className="text-lg font-medium py-2 border-b border-gray-100">Início</Link>
                                    <Link href="/produtos" className="text-lg font-medium py-2 border-b border-gray-100">Produtos</Link>
                                    <Link href="/sobre" className="text-lg font-medium py-2 border-b border-gray-100">Sobre</Link>
                                    <Link href="/contato" className="text-lg font-medium py-2 border-b border-gray-100">Contato</Link>
                                    {user ? (
                                        <>
                                            <Link href="/dashboard" className="text-lg font-medium py-2 border-b border-gray-100">Dashboard</Link>
                                            <Button onClick={logout} variant="outline" className="w-full mt-2">Sair</Button>
                                        </>
                                    ) : (
                                        <>
                                            <Link href="/login">
                                                <Button variant="outline" className="w-full mt-2">Entrar</Button>
                                            </Link>
                                            <Link href="/registro">
                                                <Button className="w-full mt-2">Cadastrar</Button>
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    ))
}