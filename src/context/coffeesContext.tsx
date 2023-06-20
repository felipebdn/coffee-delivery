import { CoffeesReducer, initialValues } from '@/reducers/coffees/reducer'
import { ReactNode, createContext, useReducer } from 'react'

interface coffeeContextTypes {}

export const coffeeContext = createContext({} as coffeeContextTypes)

export function CoffeeContextProvider({ children }: { children: ReactNode }) {
  const [coffeeData, dispatch] = useReducer(CoffeesReducer, initialValues)

  return <coffeeContext.Provider value={{}}>{children}</coffeeContext.Provider>
}
