'use client'
import Image from 'next/image'
import logo from '../assets/images/logo.svg'
import { Edit3, MapPin, Search, ShoppingCart } from 'lucide-react'
import { useCallback, useContext, useEffect, useState } from 'react'
import { coffeeContext } from '@/context/coffeesContext'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { GetDataCep } from '@/lib/getDataCep'
import { coffeesFormContext } from '@/context/coffeeFormContext'

const cepSchema = zod.object({
  cep: zod.string().min(8).max(8),
})

type cepChemaType = zod.infer<typeof cepSchema>

export function Header() {
  const { cartCoffees } = useContext(coffeeContext)
  const { location, handleLocation } = useContext(coffeesFormContext)
  const [stringLocation, setStringLocation] = useState('')

  const setCurrentLocationFromCep = useCallback(async () => {
    if (location) {
      const data = await GetDataCep(location)
      const stringLocation = `${data.localidade}, ${data.uf}`
      setStringLocation(stringLocation)
    }
  }, [location])

  useEffect(() => {
    setCurrentLocationFromCep()
  }, [setCurrentLocationFromCep])

  const { handleSubmit, register } = useForm<cepChemaType>({
    resolver: zodResolver(cepSchema),
  })

  const amountCoffeeInCart = (): number => {
    if (cartCoffees) return cartCoffees.length
    return 0
  }

  async function SubmitCep({ cep }: cepChemaType) {
    const data = await GetDataCep(cep)
    const stringLocation = `${data.localidade}, ${data.uf}`
    handleLocation(cep)
    setStringLocation(stringLocation)
  }

  return (
    <header className="flex w-full justify-between py-4  md:py-8">
      <a href="/">
        <Image src={logo} alt="" height={40} />
      </a>
      <div className="flex gap-3">
        {stringLocation ? (
          <div className="flex items-center gap-1 rounded-md bg-purple-light p-2 text-sm text-purple-dark">
            <MapPin size={22} />
            <p>{stringLocation}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(SubmitCep)}
            className="flex items-center gap-2"
          >
            <div className="flex items-center gap-2 rounded-md bg-purple-light p-2 text-sm text-purple-dark">
              <Edit3 size={22} />
              <input
                type="text"
                {...register('cep')}
                className="h-full flex-1 bg-transparent outline-none placeholder:text-sm placeholder:text-purple-dark"
                placeholder="Digite seu cep"
              />
            </div>
            <button
              type="submit"
              className="relative flex rounded-md bg-purple-light p-2 text-base-subtitle"
            >
              <Search size={22} />
            </button>
          </form>
        )}
        <a
          href="/checkout"
          className="relative flex rounded-md bg-yellow-light p-2 text-yellow-dark"
        >
          <ShoppingCart size={22} />
          {amountCoffeeInCart() > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-dark text-xs font-bold leading-tight text-white">
              {amountCoffeeInCart()}
            </span>
          )}
        </a>
      </div>
    </header>
  )
}
