import { TesteQuery } from '@/codegen/graphql'
import { CoffeeCart } from '@/components/coffeeCard'
import { Hero } from '@/components/hero'

export const revalidate = 0

export default async function Home() {

  const res = await fetch(
    process.env.NEXT_PUBLIC_HYGRAPH_URL!,
    {
      method: "POST",
      body: JSON.stringify({
        query: `query Teste {
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
        }`,
      }),
      headers: {
        Authorization: `Bearer ${
          process.env.NEXT_PUBLIC_HYGRAPH_TOKEN as string
        }`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
  )

  const {data} = await res.json()

  console.log(data);
  

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
