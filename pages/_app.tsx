import React, { useContext } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import { ThemeProvider } from '@mui/material/styles'
// import { useTheme, ThemeProvider as ColorModeProvider } from 'next-themes'
// import { useTheme, ThemeProvider } from 'next-themes'
import { getCookie, setCookie } from 'cookies-next'

// import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { getDesignTokens } from '@src/theme'

import createEmotionCache from '@src/createEmotionCache'

import {
  ThemeProvider as ColorModeProvider,
  ThemeContext,
} from '@src/context/ThemeContext'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

function useSsr() {
  const isDOM =
    typeof window !== 'undefined' &&
    window.document &&
    window.document.documentElement

  return {
    isBrowser: isDOM,
    isServer: !isDOM,
  }
}

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const { isBrowser, isServer } = useSsr()
  const value = useContext(ThemeContext)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {/* <ColorModeProvider themes={['light', 'dark']}> */}
      {/* <ThemeProvider theme={themeMui}> */}
      {/* <ThemeProvider theme={getDesignTokens('light')}> */}
      <ThemeProvider theme={getDesignTokens('light')}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      {/* </ColorModeProvider> */}
    </CacheProvider>
  )
}
