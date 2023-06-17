import Image from 'next/image'
import logo from '../assets/images/logo.svg'
import { MapPin, ShoppingCart } from 'lucide-react'

export function Header() {
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
          className="flex rounded-md bg-yellow-light p-2 text-yellow-dark"
        >
          <ShoppingCart size={22} />
        </a>
      </div>
    </header>
  )
}
