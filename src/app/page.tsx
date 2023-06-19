import { CoffeeCart } from '@/components/coffeeCard'
import { Hero } from '@/components/hero'
import { gql, graphqlClient } from '../lib/client'
import { getSdk } from '@/codegen/graphql'

export const revalidate = 0

export const GetTest = gql`
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
`
export default async function Home() {
  const {Teste} = await getSdk(graphqlClient)

  const data = await Teste()

  
  

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
