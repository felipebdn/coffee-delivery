'use client'
import {
  AddCoffeeInCart,
  InitRestore,
  RemoveCoffeeInCart,
  changeAmountCoffeeInCart,
} from '@/reducers/coffees/actions'
import {
  CoffeesReducer,
  coffeesInCartTypes,
  initialValues,
} from '@/reducers/coffees/reducer'
import { ReactNode, createContext, useEffect, useReducer } from 'react'

interface coffeeContextTypes {
  cartCoffees: coffeesInCartTypes[]
  handleChangeAmountCoffeeInCart: (
    id: string,
    operation: 'add' | 'substract',
  ) => void
  handleAddCoffeeInCart: (data: coffeesInCartTypes) => void
  handleRemoveCoffeeInCart: (id: string) => void
}

export const coffeeContext = createContext({} as coffeeContextTypes)

export function CoffeeContextProvider({ children }: { children: ReactNode }) {
  const [cartCoffees, dispatch] = useReducer(CoffeesReducer, initialValues)
  useEffect(() => {
    const getItemFromLocalStorage = localStorage.getItem(
      'Coffee-delivery: coffee-cards-1.0.0',
    )
    if (getItemFromLocalStorage && JSON.parse(getItemFromLocalStorage)) {
      dispatch(
        InitRestore(
          JSON.parse(
            localStorage.getItem('Coffee-delivery: coffee-cards-1.0.0')!,
          ),
        ),
      )
    }
  }, [])
  useEffect(() => {
    if (cartCoffees !== initialValues) {
      const stateJSON = JSON.stringify(cartCoffees)
      localStorage.setItem('Coffee-delivery: coffee-cards-1.0.0', stateJSON)
    }
  }, [cartCoffees])

  function handleChangeAmountCoffeeInCart(
    id: string,
    operation: 'add' | 'substract',
  ) {
    dispatch(changeAmountCoffeeInCart(id, operation))
  }
  function handleAddCoffeeInCart(data: coffeesInCartTypes) {
    dispatch(AddCoffeeInCart(data))
  }
  function handleRemoveCoffeeInCart(id: string) {
    dispatch(RemoveCoffeeInCart(id))
  }

  return (
    <coffeeContext.Provider
      value={{
        cartCoffees,
        handleChangeAmountCoffeeInCart,
        handleAddCoffeeInCart,
        handleRemoveCoffeeInCart,
      }}
    >
      {children}
    </coffeeContext.Provider>
  )
}
