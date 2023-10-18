'use client'
import { ReactNode } from 'react'
import { Provider } from 'jotai'

const JotaiProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider>{children}</Provider>
}

export default JotaiProvider
