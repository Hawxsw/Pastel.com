import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h2 className="text-4xl font-bold mb-4">Página Não Encontrada</h2>
      <p className="text-lg mb-8">Não conseguimos encontrar a página que você está procurando.</p>
      <Link href="/" className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors duration-300">
        Voltar para a página inicial
      </Link>
    </div>
  )
}