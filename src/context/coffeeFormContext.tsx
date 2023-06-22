'use client'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface coffeesFormContextTypes {
  location: string
  handleLocation: (local: string) => void
}

export const coffeesFormContext = createContext({} as coffeesFormContextTypes)

export function CoffeeFormProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState('')

  useEffect(() => {
    const getLocationFromInputCep = localStorage.getItem(
      'Coffee-delivery: location-1.0.0',
    )
    if (getLocationFromInputCep && JSON.parse(getLocationFromInputCep)) {
      setLocation(
        JSON.parse(localStorage.getItem('Coffee-delivery: location-1.0.0')!),
      )
    }
  }, [])

  function handleLocation(local: string) {
    if (local !== '') {
      const stateJSON = JSON.stringify(local)
      localStorage.setItem('Coffee-delivery: location-1.0.0', stateJSON)
    }
    setLocation(local)
  }

  return (
    <coffeesFormContext.Provider value={{ location, handleLocation }}>
      {children}
    </coffeesFormContext.Provider>
  )
}
