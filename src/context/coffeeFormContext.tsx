'use client'
import { CheckoutTypes } from '@/app/checkout/page'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface coffeesFormContextTypes {
  location: string
  handleLocation: (local: string) => void
  dataForm: CheckoutTypes
  handleDataForm: (data: CheckoutTypes) => void
  handleDeleteLocation: () => void
}

export const coffeesFormContext = createContext({} as coffeesFormContextTypes)

export function CoffeeFormProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState('')
  const [dataForm, setDataForm] = useState({} as CheckoutTypes)

  useEffect(() => {
    const getLocationFromInputCep = localStorage.getItem(
      'Coffee-delivery: location-2.0.0',
    )
    if (getLocationFromInputCep && JSON.parse(getLocationFromInputCep)) {
      setLocation(
        JSON.parse(localStorage.getItem('Coffee-delivery: location-2.0.0')!),
      )
    }
    const getDataForm = localStorage.getItem('Coffee-delivery: formData-2.0.0')
    if (getDataForm && JSON.parse(getDataForm)) {
      setDataForm(
        JSON.parse(localStorage.getItem('Coffee-delivery: formData-2.0.0')!),
      )
    }
  }, [])

  function handleLocation(local: string) {
    if (local !== '') {
      const stateJSON = JSON.stringify(local)
      localStorage.setItem('Coffee-delivery: location-2.0.0', stateJSON)
    }
    setLocation(local)
  }

  function handleDataForm(data: CheckoutTypes) {
    const stateJSON = JSON.stringify(data)
    localStorage.setItem('Coffee-delivery: formData-2.0.0', stateJSON)
    setDataForm(data)
  }

  function handleDeleteLocation() {
    setLocation('')
    localStorage.removeItem('Coffee-delivery: location-2.0.0')
  }

  return (
    <coffeesFormContext.Provider
      value={{
        handleDeleteLocation,
        handleDataForm,
        dataForm,
        location,
        handleLocation,
      }}
    >
      {children}
    </coffeesFormContext.Provider>
  )
}
