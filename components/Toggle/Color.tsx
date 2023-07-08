import * as React from 'react'
import { Box, IconButton } from '@mui/material'
import { useTheme } from 'next-themes'

import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { ThemeContext } from '@src/context/ThemeContext'
// import { useContext } from 'react'

// const ColorModeContext = React.createContext({
//   value: '',
//   toggleColorMode: (e: React.MouseEvent) => {
//     // const mode = e.currentTarget as HTML.dataset.mode
//     const mode = (e.currentTarget as HTMLButtonElement).dataset.mode
//     setCookie('darkMode', mode === 'dark' ? 'dark' : 'light')
//     console.log(mode)
//     return mode
//   },
// })

function ToggleColor() {
  const { theme, setTheme } = useTheme()

  // const theme = getCookie('theme')
  // const { theme, setTheme } = useTheme()
  // const [themeText, setThemeText] = React.useState(theme)
  // console.log({ mode })
  // console.log({ toggle })

  // const changeMode = React.useCallback(() => {
  const changeMode = React.useCallback(() => {
    const _theme = theme == 'dark' ? 'light' : 'dark'
    setTheme(_theme)
    // setTheme()
  }, [theme])

  // console.log(useTheme)

  const DarkMode = (): React.ReactElement => {
    return theme === 'dark' ? (
      <Brightness7Icon fontSize="small" />
    ) : (
      <Brightness4Icon fontSize="small" />
    )
  }

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 0,
        mt: 2,
        mb: 0,
        fontSize: 'small',
      }}
    >
      <IconButton
        size="small"
        sx={{ mr: 1 }}
        onClick={changeMode}
        color="inherit"
      >
        <DarkMode />
      </IconButton>
    </Box>
  )
}

export { ToggleColor }
