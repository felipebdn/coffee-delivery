'use client'
import Image from 'next/image'
import logo from '../assets/images/logo.svg'
import { Edit3, MapPin, Search, ShoppingCart, X } from 'lucide-react'
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
      if (data) {
        const stringLocation = `${data.localidade}, ${data.uf}`
        setStringLocation(stringLocation)
      }
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
    handleLocation(cep)
    if (data) {
      const stringLocation = `${data.localidade}, ${data.uf}`
      setStringLocation(stringLocation)
    }
  }
  function resetCepLocation() {
    handleLocation('')
  }

  return (
    <header className="flex w-full justify-between py-4  md:py-8">
      <a href="/">
        <Image src={logo} alt="" height={40} />
      </a>
      <div className="flex gap-3">
        {stringLocation ? (
          <div className="group relative flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-md bg-purple-light p-2 text-sm text-purple-dark transition-transform min-[500px]:group-hover:-translate-x-12">
              <MapPin size={22} />
              <p>{stringLocation}</p>
            </div>
            <button
              onClick={resetCepLocation}
              className="absolute right-0 -z-10 flex rounded-md bg-error-color bg-opacity-60 p-2 text-base-subtitle outline-none group-hover:z-10 max-[499px]:transition-transform max-[499px]:group-hover:translate-y-12"
            >
              <X size={22} />
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(SubmitCep)}
            className="relative flex items-center gap-2"
          >
            <div className="peer flex min-w-fit items-center gap-2 rounded-md bg-purple-light p-2 text-sm text-purple-dark transition-transform min-[500px]:focus-within:-translate-x-12">
              <Edit3 size={22} />
              <input
                type="text"
                autoComplete="off"
                {...register('cep')}
                className="flex h-full w-24 min-w-fit bg-transparent outline-none placeholder:text-sm placeholder:text-purple-dark"
                placeholder="Digite seu cep"
              />
            </div>
            <button
              type="submit"
              className="absolute right-0 -z-10 flex rounded-md bg-purple-light p-2 text-base-subtitle transition-transform peer-focus-within:z-10 max-[499px]:peer-focus-within:translate-y-12"
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
