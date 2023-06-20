interface coffeesInCartTypes {
  id: string
  coffeeName: string
  amountCoffees: number
  coverUrl: string
  price: string
}

export const initialValues: coffeesInCartTypes[] = [
  {
    id: '',
    coffeeName: '',
    amountCoffees: 0,
    coverUrl: '',
    price: '',
  },
]

export function CoffeesReducer(
  state: coffeesInCartTypes[],
  actions: any,
): coffeesInCartTypes[] {
  return state
}
