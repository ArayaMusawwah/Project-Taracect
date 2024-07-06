'use client'

import React, { useContext, useRef, useState } from 'react'
import { createContext } from 'react'

type IActivator = {
  isActive: boolean
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
  aboutRef: React.MutableRefObject<HTMLDivElement | null>
}

const ActivatorContext = createContext<IActivator | undefined>(undefined)

export const ActivatorProvider = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const aboutRef = useRef<HTMLDivElement>(null)

  return (
    <ActivatorContext.Provider value={{ isActive, setIsActive, aboutRef }}>
      {children}
    </ActivatorContext.Provider>
  )
}

export const useActivatorContext = () => {
  const context = useContext(ActivatorContext)

  if (!context) throw new Error('useActivatorContext must be used within a ActivatorProvider')

  return context
}
