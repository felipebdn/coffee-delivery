'use client'
import Image from 'next/image'
import logo from '../assets/images/logo.svg'
import { MapPin, ShoppingCart } from 'lucide-react'
import { useContext } from 'react'
import { coffeeContext } from '@/context/coffeesContext'

export function Header() {
  const { cartCoffees } = useContext(coffeeContext)

  const amountCoffeeInCart = (): number => {
    if (cartCoffees) return cartCoffees.length
    return 0
  }

  return (
    <header className="flex w-full justify-between py-8">
      <a href="/">
        <Image src={logo} alt="" height={40} />
      </a>
      <div className="flex gap-3">
        <div className="flex items-center gap-1 rounded-md bg-purple-light p-2 text-sm text-purple-dark">
          <MapPin size={22} />
          Porto Alegre, RS
        </div>
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
