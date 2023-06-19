import './globals.css'
import { ReactNode } from 'react'
import { Baloo_2 as ballo2Font, Roboto } from 'next/font/google'
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

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${ballo2.variable} ${roboto.variable} font-roboto`}>
        <div className="flex w-full justify-center pb-8">
          <div className="w-full max-w-6xl">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
