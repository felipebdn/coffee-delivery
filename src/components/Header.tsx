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
  const { location, handleLocation, handleDeleteLocation } =
    useContext(coffeesFormContext)
  const [stringLocation, setStringLocation] = useState('')
  const [inputFocus, setInputFocus] = useState(false)
  const [inputError, setInputError] = useState(false)

  console.log(inputError)

  const setCurrentLocationFromCep = useCallback(async () => {
    if (location) {
      const data = await GetDataCep(location)
      if (data?.cep) {
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

    if (data?.cep) {
      handleLocation(cep)
      const stringLocation = `${data.localidade}, ${data.uf}`
      setStringLocation(stringLocation)
      setInputError(false)
    } else {
      setInputError(true)
    }
  }
  function resetCepLocation() {
    handleDeleteLocation()
    setStringLocation('')
  }

  return (
    <header className="flex w-full justify-between py-4  md:py-8">
      <a href="/">
        <Image src={logo} alt="" height={40} />
      </a>
      <div className="flex gap-3">
        {stringLocation ? (
          <div className="group relative flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-md bg-purple-light p-2 text-sm text-purple-dark transition-transform min-[370px]:group-hover:-translate-x-12">
              <MapPin size={22} />
              <p>{stringLocation}</p>
            </div>
            <button
              onClick={resetCepLocation}
              className="absolute right-0 -z-10 flex rounded-md bg-error-color bg-opacity-60 p-2 text-base-subtitle outline-none transition-transform group-hover:z-10 max-[370px]:group-hover:translate-y-12"
            >
              <X size={22} />
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(SubmitCep)}
            className="relative flex items-center gap-2"
          >
            <div
              data-inputfocus={inputFocus}
              className="relative flex h-full items-center gap-2 rounded-md bg-purple-light p-2 text-sm text-purple-dark transition-transform data-[inputfocus=true]:-translate-x-12"
            >
              <Edit3
                size={22}
                data-inputfocus={inputFocus}
                className="max-[370px]:data-[inputfocus=true]:hidden"
              />
              <input
                type="string"
                autoComplete="off"
                onFocus={() => setInputFocus(true)}
                maxLength={8}
                {...register('cep', {
                  onBlur: () => setInputFocus(false),
                })}
                className="peer flex h-full w-24 bg-transparent outline-none placeholder:text-sm placeholder:text-purple-dark"
                placeholder="Digite seu cep"
              />
            </div>
            <span
              data-inputfocus={inputFocus}
              data-error={inputError}
              className="absolute left-0 -z-10 px-2 text-xs leading-tight text-error-color transition-transform max-[370px]:data-[error=true]:translate-y-8 max-[370px]:data-[inputfocus=true]:-translate-x-12 min-[370px]:data-[error=true]:-translate-x-full min-[370px]:data-[error=true]:data-[inputfocus=true]:-translate-x-[calc(100%+48px)] min-[370px]:data-[inputfocus=true]:-translate-x-12"
            >
              Digite um cep válido!
            </span>
            <button
              type="submit"
              data-inputfocus={inputFocus}
              className="absolute right-0 -z-10 flex rounded-md bg-purple-light p-2 text-base-subtitle outline-none transition-all delay-75 data-[inputfocus=true]:z-10"
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
