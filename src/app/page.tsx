'use client'
import { CoffeeCart } from '@/components/coffeeCard'
import { Hero } from '@/components/hero'
import { useMyQueryQuery } from '@/generated/graphql'

export default function Home() {
  const [{ data }] = useMyQueryQuery({})

  console.log(data)

  return (
    <>
      <Hero />
      <aside>
        <h3 className="mb-8 font-ballo2 text-3xl font-extrabold leading-tight text-base-subtitle">
          Nossos cafés
        </h3>
        <main className="grid grid-cols-4 gap-8">
          <CoffeeCart />
          <CoffeeCart />
          <CoffeeCart />
          <CoffeeCart />
          <CoffeeCart />
          <CoffeeCart />
          <CoffeeCart />
          <CoffeeCart />
          <CoffeeCart />
        </main>
      </aside>
    </>
  )
}
