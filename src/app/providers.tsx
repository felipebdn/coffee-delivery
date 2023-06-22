import { CoffeeFormProvider } from '@/context/coffeeFormContext'
import { CoffeeContextProvider } from '@/context/coffeesContext'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CoffeeContextProvider>
      <CoffeeFormProvider>{children}</CoffeeFormProvider>
    </CoffeeContextProvider>
  )
}
