import { createContext, useState } from 'react'

export const ThemeContext = createContext({})

export const ThemeProvider = ({ children }: any) => {
  const [value, setValue] = useState('dark')

  const toggle = () => {
    setValue((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ value, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
