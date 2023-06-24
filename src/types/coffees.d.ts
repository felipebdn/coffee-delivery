export interface coffeesTypes {
  id: string
  name: string
  typeCoffe: string[]
  coffeeImage: string
  description: string | null
  price: number | null
  defaultPriceId: string
}
export interface PageProps {
  params?: any
  searchParams?: any
}
