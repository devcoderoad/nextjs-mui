import { useTheme } from 'next-themes'
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import { darkTheme, globalStyles, lightTheme } from '@/src/theme'
import { FC, useEffect, useState } from 'react'

const MUIThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { resolvedTheme, theme } = useTheme()

  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  useEffect(() => {
    resolvedTheme === 'light'
      ? setCurrentTheme(lightTheme)
      : setCurrentTheme(darkTheme)
  }, [resolvedTheme])

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      {children}
    </ThemeProvider>
  )
}

export default MUIThemeProvider
