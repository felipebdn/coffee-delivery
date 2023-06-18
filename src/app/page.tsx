'use client'
import { CoffeeCart } from '@/components/coffeeCard'
import { Hero } from '@/components/hero'
import { gql, useQuery } from 'urql'

export default function Home() {
  const TESTE = useQuery({
    query: gql`
      query Teste {
        coffeesPlural {
          createdAt
          name
          id
          price
          typeCoffeesPlural(orderBy: typeName_ASC) {
            createdAt
            id
            typeName
          }
        }
      }
    `,
  })

  console.log(TESTE)

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
