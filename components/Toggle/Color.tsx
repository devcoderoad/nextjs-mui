'use client'
// import * as React from 'react'
import {
  Box,
  Button,
  // IconButton,
  MenuItem,
  Select,
  // Typography,
  css,
} from '@mui/material'

import { useTheme } from 'next-themes'

// import Brightness4Icon from '@mui/icons-material/Brightness4'
// import Brightness7Icon from '@mui/icons-material/Brightness7'
// import { ThemeContext } from '@src/context/ThemeContext'

// import { useContext } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useState, useEffect } from 'react'

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
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  // const { theme, setTheme } = useTheme()
  const { theme, resolvedTheme, setTheme } = useTheme()
  // const theme = getCookie('theme')
  // const { theme, setTheme } = useTheme()
  // const [themeText, setThemeText] = React.useState(theme)
  // console.log({ mode })
  // console.log({ toggle })

  // const changeMode = React.useCallback(() => {
  // const changeMode = React.useCallback(() => {
  //   const _theme = theme == 'dark' ? 'light' : 'dark'
  //   setTheme(_theme)
  //   // setTheme()
  // }, [theme])

  // console.log(useTheme)

  // const DarkMode = (): React.ReactElement => {
  //   return theme === 'dark' ? (
  //     <LightModeIcon fontSize="small" />
  //   ) : (
  //     <DarkModeIcon fontSize="small" />
  //   )
  // }

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 0,
        mt: 2,
        mb: 0,
        fontSize: 'small',
      }}
    >
      {/* <IconButton
        size="small"
        sx={{ mr: 1 }}
        onClick={changeMode}
        color="inherit"
      >
        <DarkMode />
      </IconButton> */}
      {/* <Typography variant="h6" gutterBottom>
        {resolvedTheme !== theme ? `${theme} (${resolvedTheme})` : theme} mode
      </Typography> */}
      {isClient ? (
        <>
          {/* <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={theme}
            onChange={(a) => setTheme(a.target.value)}
          >
            <MenuItem value="system">System</MenuItem>
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
          </Select> */}
          <Button
            size="small"
            css={css`
              background: linear-gradient(
                to top right,
                #2a48f3 0%,
                #c32cc2 100%
              );
            `}
            variant="contained"
            endIcon={
              resolvedTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />
            }
            onClick={() =>
              setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
            }
          >
            {resolvedTheme === 'light' ? 'dark' : 'light'}
          </Button>
        </>
      ) : (
        ''
      )}
    </Box>
  )
}

export { ToggleColor }
