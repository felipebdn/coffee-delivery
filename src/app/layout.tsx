'use client'
import './globals.css'
import { ReactNode } from 'react'
import { Provider } from 'urql'
import { Baloo_2 as ballo2Font, Roboto } from 'next/font/google'
import { client, ssrCache } from '@/lib/urql'
import { Header } from '@/components/Header'

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
  const urqlState = ssrCache.extractData()
  if (urqlState) {
    ssrCache.restoreData(urqlState)
  }

  return (
    <html lang="pt-BR">
      <body className={`${ballo2.variable} ${roboto.variable} font-roboto`}>
        <div className="flex w-full justify-center pb-8">
          <div className="w-full max-w-6xl">
            <Provider value={client}>
              <Header />
              {children}
            </Provider>
          </div>
        </div>
      </body>
    </html>
  )
}
