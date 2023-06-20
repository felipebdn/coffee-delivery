import { CoffeeContextProvider } from '@/context/coffeesContext'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return <CoffeeContextProvider>{children}</CoffeeContextProvider>
}
