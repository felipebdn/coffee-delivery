import { produce } from 'immer'
import { Actions } from './actions'

export interface coffeesInCartTypes {
  id: string
  coffeeName: string
  amountCoffees: number
  coverUrl: string
  price: number
}
export const initialValues: coffeesInCartTypes[] = [
  {
    id: '',
    coffeeName: '',
    amountCoffees: 0,
    coverUrl: '',
    price: 0,
  },
]
export function CoffeesReducer(
  state: coffeesInCartTypes[],
  actions: Actions,
): coffeesInCartTypes[] {
  switch (actions.type) {
    case 'ADD_COFFEE_IN_CART':
      return produce(state, (draft) => {
        const isCoffeeInCart = draft.findIndex((coffee) => {
          return coffee.id === actions.payload.data.id
        })
        if (!isCoffeeInCart) draft.push(actions.payload.data)
      })
    case 'CHANGE_AMOUNT_COFFEE_IN_CART':
      return produce(state, (draft) => {
        const findIndexCoffeeInCart = draft.findIndex((coffee) => {
          return coffee.id === actions.payload.id
        })
        if (actions.payload.operation === 'add') {
          draft[findIndexCoffeeInCart].amountCoffees++
        }
        if (actions.payload.operation === 'substract') {
          if (draft[findIndexCoffeeInCart].amountCoffees >= 0) {
            draft[findIndexCoffeeInCart].amountCoffees--
          }
        }
      })
    case 'REMOVE_COFFEE_IN_CART':
      return produce(state, (draft) => {
        draft.filter((coffee) => {
          return coffee.id !== actions.payload.id
        })
      })
    default:
      return state
  }
}
