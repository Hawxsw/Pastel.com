import { useState, useCallback } from 'react'

interface CEPData {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}

export function useCEP() {
  const [cepData, setCepData] = useState<CEPData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchCEP = useCallback(async (cep: string) => {
    if (!cep || cep.length < 8) {
      setCepData(null)
      setError(null)
      return
    }

    const cleanCEP = cep.replace(/\D/g, '')
    
    if (cleanCEP.length !== 8) {
      setCepData(null)
      setError(null)
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cleanCEP}/json/`)
      const data = await response.json()

      if (data.erro) {
        setError('CEP não encontrado')
        setCepData(null)
      } else {
        setCepData(data)
        setError(null)
      }
    } catch (err) {
      setError('Erro ao buscar CEP')
      setCepData(null)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    cepData,
    isLoading,
    error,
    fetchCEP
  }
} 