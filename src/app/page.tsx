import { CoffeeCart } from '@/components/coffeeCard'
import { Hero } from '@/components/hero'
import { stripe } from '@/lib/client'
import Stripe from 'stripe'

export const revalidate = 60 * 60 * 24 * 3 // 3 dias

export default async function Home() {
  const res = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const coffees = res.data.map((coffee) => {
    const price = coffee.default_price as Stripe.Price
    const metadata = coffee.metadata as Stripe.Metadata
    return {
      id: coffee.id,
      name: coffee.name,
      typeCoffe: metadata.tipoCoffee?.split(' - '),
      coffeeImage: coffee.images[0],
      description: coffee.description,
      price: price.unit_amount && price.unit_amount / 100,
      defaultPriceId: price.id,
    }
  })

  return (
    <>
      <Hero />
      <aside>
        <h3 className="mb-8 font-ballo2 text-3xl font-extrabold leading-tight text-base-subtitle">
          Nossos cafés
        </h3>
        <main className="grid grid-cols-4 gap-8 max-desktop:grid-cols-3 max-[840px]:grid-cols-2 max-[540px]:grid-cols-1">
          {coffees &&
            coffees.map((coffee) => {
              return <CoffeeCart coffee={coffee} key={coffee.id} />
            })}
        </main>
      </aside>
    </>
  )
}
