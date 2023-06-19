import { CoffeeCart } from '@/components/coffeeCard'
import { Hero } from '@/components/hero'
import { gql, graphqlClient } from '../lib/client'
import { Coffees, getSdk } from '@/codegen/graphql'

export const revalidate = 0

export const GetTest = gql`
  query Teste {
    coffeesPlural {
      createdAt
      name
      id
      price
      description
      typeCoffeesPlural(orderBy: typeName_ASC) {
        createdAt
        id
        typeName
      }
      coffeeImage {
        id
        url
      }
    }
  }
`
export default async function Home() {
  const { GetCoffees } = await getSdk(graphqlClient)

  const { coffeesPlural }: { coffeesPlural: Coffees[] } = await GetCoffees()

  console.log(coffeesPlural)

  return (
    <>
      <Hero />
      <aside>
        <h3 className="mb-8 font-ballo2 text-3xl font-extrabold leading-tight text-base-subtitle">
          Nossos cafés
        </h3>
        <main className="grid grid-cols-4 gap-8">
          {coffeesPlural &&
            coffeesPlural.map((coffee) => {
              return <CoffeeCart coffee={coffee} key={coffee.id} />
            })}
        </main>
      </aside>
    </>
  )
}
