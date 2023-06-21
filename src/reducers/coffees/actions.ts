import { coffeesInCartTypes } from './reducer'

interface ADD_COFFEE_IN_CART {
  type: 'ADD_COFFEE_IN_CART'
  payload: {
    data: coffeesInCartTypes
  }
}
interface CHANGE_AMOUNT_COFFEE_IN_CART {
  type: 'CHANGE_AMOUNT_COFFEE_IN_CART'
  payload: {
    id: string
    operation: 'add' | 'substract'
  }
}
interface REMOVE_COFFEE_IN_CART {
  type: 'REMOVE_COFFEE_IN_CART'
  payload: {
    id: string
  }
}
interface INIT_RESTORE {
  type: 'INIT_RESTORE'
  payload: {
    data: coffeesInCartTypes[]
  }
}

export type Actions =
  | ADD_COFFEE_IN_CART
  | CHANGE_AMOUNT_COFFEE_IN_CART
  | REMOVE_COFFEE_IN_CART
  | INIT_RESTORE

export function InitRestore(data: coffeesInCartTypes[]): Actions {
  return {
    type: 'INIT_RESTORE',
    payload: {
      data,
    },
  }
}

export function AddCoffeeInCart(data: coffeesInCartTypes): Actions {
  return {
    type: 'ADD_COFFEE_IN_CART',
    payload: {
      data,
    },
  }
}
export function changeAmountCoffeeInCart(
  id: string,
  operation: 'add' | 'substract',
): Actions {
  return {
    type: 'CHANGE_AMOUNT_COFFEE_IN_CART',
    payload: {
      id,
      operation,
    },
  }
}
export function RemoveCoffeeInCart(id: string): Actions {
  return {
    type: 'REMOVE_COFFEE_IN_CART',
    payload: {
      id,
    },
  }
}
