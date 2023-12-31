'use client'
import {
  AddCoffeeInCart,
  InitRestore,
  RemoveCoffeeInCart,
  changeAmountCoffeeInCart,
  rezetCoffeeInCart,
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
  handleRezetCoffeeInCart: () => void
}

export const coffeeContext = createContext({} as coffeeContextTypes)

export function CoffeeContextProvider({ children }: { children: ReactNode }) {
  const [cartCoffees, dispatch] = useReducer(
    CoffeesReducer,
    [] as coffeesInCartTypes[],
  )

  useEffect(() => {
    const getItemFromLocalStorage = localStorage.getItem(
      'Coffee-delivery: coffee-cards-2.0.0',
    )
    if (getItemFromLocalStorage && JSON.parse(getItemFromLocalStorage)) {
      dispatch(
        InitRestore(
          JSON.parse(
            localStorage.getItem('Coffee-delivery: coffee-cards-2.0.0')!,
          ),
        ),
      )
    }
  }, [])
  useEffect(() => {
    if (cartCoffees !== initialValues) {
      const stateJSON = JSON.stringify(cartCoffees)
      localStorage.setItem('Coffee-delivery: coffee-cards-2.0.0', stateJSON)
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
  function handleRezetCoffeeInCart() {
    dispatch(rezetCoffeeInCart())
  }

  return (
    <coffeeContext.Provider
      value={{
        handleRezetCoffeeInCart,
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
