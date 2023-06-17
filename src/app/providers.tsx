'use client'
import { ReactNode } from 'react'
import { Provider } from 'urql'
import { client, ssrCache } from '@/lib/urql'

export function Providers({ children }: { children: ReactNode }) {
  const urqlState = ssrCache.extractData()
  if (urqlState) {
    ssrCache.restoreData(urqlState)
  }
  return <Provider value={client}>{children}</Provider>
}
