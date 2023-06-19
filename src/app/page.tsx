import { CoffeeCart } from '@/components/coffeeCard'
import { Hero } from '@/components/hero'
import { graphqlClient } from '@/lib/graphql-client'

export default function Home() {
  async function teste() {
    const res = await getSdk(graphqlClient)
    console.log(res)
  }

  teste()

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
