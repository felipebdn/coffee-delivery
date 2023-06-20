interface addCoffeeInCart {
  type: 'ADD_COFFEE_IN_CART'
  payload: {
    id: string
    amount: number
  }
}

export type Actions = addCoffeeInCart

export function AddCoffeeInCart(id: string, amount: number): Actions {
  return {
    type: 'ADD_COFFEE_IN_CART',
    payload: {
      id,
      amount,
    },
  }
}

export function RemoveCoffeeInCart(id: string, amount: number): Actions {
  return {
    type: 'ADD_COFFEE_IN_CART',
    payload: {
      id,
      amount,
    },
  }
}
