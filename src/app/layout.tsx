import { ReactNode } from 'react'
import './globals.css'
import { Baloo_2 as ballo2Font, Roboto } from 'next/font/google'
import Image from 'next/image'
import logo from '../assets/images/logo.svg'

const ballo2 = ballo2Font({ subsets: ['latin'], weight: ['700', '800'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Coffee Delivery',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${ballo2.className} ${roboto.className}`}>
        <div className="flex w-full justify-center">
          <div className="w-full max-w-6xl">
            <header>
              <a href="/">
                <Image src={logo} alt="" />
              </a>
            </header>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
