import { createContext, useState } from 'react'

export const ThemeContext = createContext({
  isOverflowHidden: true,
  setIsOverflowHidden: () => {}
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOverflowHidden, setIsOverflowHidden] = useState(true)

  return (
    <ThemeContext.Provider
      value={{ isOverflowHidden, setIsOverflowHidden: () => setIsOverflowHidden(isOverflowHidden) }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
