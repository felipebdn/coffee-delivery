'use client'
import Image from 'next/image'
import ImageDelivery from '../../assets/images/delivery.png'
import { OrderInfoSuccess } from '@/components/OrderInfoSuccess'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect } from 'react'
import axios from 'axios'

export default function Success() {
  const router = useRouter()
  const SearchParams = useSearchParams()
  const sessionId = SearchParams.get('session_id')

  if (!sessionId) {
    router.push('/')
  }

  const getSession = useCallback(async () => {
    try {
      const res = await axios.get('/api/session', {
        params: {
          sessionId,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }, [sessionId])

  useEffect(() => {
    getSession()
  }, [getSession])

  return (
    <section className="flex w-full flex-col gap-10">
      <header className="flex flex-col gap-2">
        <h3 className="font-ballo2 text-3xl font-extrabold leading-tight text-yellow-dark">
          Uhu! Pedido confirmado
        </h3>
        <p className="text-sm font-normal leading-tight text-base-subtitle">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </header>
      <main className="flex items-center justify-between gap-24">
        <OrderInfoSuccess />
        <aside>
          <Image
            src={ImageDelivery}
            alt="Entregador de moto lenvando seu pedido"
          />
        </aside>
      </main>
    </section>
  )
}
