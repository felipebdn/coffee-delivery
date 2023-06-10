import { ReactNode } from 'react'
import './globals.css'
import { Baloo_2 as ballo2Font, Roboto } from 'next/font/google'
import Image from 'next/image'
import logo from '../assets/images/logo.svg'
import { MapPin, ShoppingCart } from 'lucide-react'

const ballo2 = ballo2Font({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--ballo-2',
})
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--roboto',
})

export const metadata = {
  title: 'Coffee Delivery',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${ballo2.variable} ${roboto.variable} font-roboto`}>
        <div className="flex w-full justify-center">
          <div className="w-full max-w-6xl">
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
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
