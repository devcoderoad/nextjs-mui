// import React, { useContext, useEffect, useState } from 'react'
// import Head from 'next/head'
// import { AppProps } from 'next/app'

// import { ThemeProvider } from '@mui/material/styles'
// // import { useTheme, ThemeProvider as ColorModeProvider } from 'next-themes'
// import { useTheme, ThemeProvider as NextThemeProvider } from 'next-themes'
// // import { getCookie, setCookie } from 'cookies-next'

// // import { createTheme, ThemeProvider } from '@mui/material/styles'
// import CssBaseline from '@mui/material/CssBaseline'
// import { CacheProvider, EmotionCache } from '@emotion/react'
// import { getDesignTokens } from '@src/theme'

// import createEmotionCache from '@src/createEmotionCache'

// import {
//   ThemeProvider as ColorModeProvider,
//   ThemeContext,
// } from '@src/context/ThemeContext'

// // import { darkTheme, globalStyles, lightTheme } from "../../theme";

// // Client-side cache, shared for the whole session of the user in the browser.
// const clientSideEmotionCache = createEmotionCache()

// export interface MyAppProps extends AppProps {
//   emotionCache?: EmotionCache
// }

// export default function MyApp(props: MyAppProps) {
//   const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
//   const { resolvedTheme } = useTheme()
//   const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light')

//   console.log({ resolvedTheme })

//   useEffect(() => {
//     resolvedTheme === 'light'
//       ? setCurrentTheme('light')
//       : setCurrentTheme('dark')
//   }, [resolvedTheme])

//   const value = useContext(ThemeContext)

//   return (
//     <NextThemeProvider>
//       <CacheProvider value={emotionCache}>
//         <Head>
//           <meta name="viewport" content="initial-scale=1, width=device-width" />
//         </Head>
//         {/* <ColorModeProvider themes={['light', 'dark']}> */}
//         {/* <ThemeProvider theme={themeMui}> */}
//         {/* <ThemeProvider theme={getDesignTokens('light')}> */}
//         <ThemeProvider theme={getDesignTokens(currentTheme)}>
//           {/* <ThemeProvider theme={currentTheme}> */}
//           {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//           <CssBaseline />
//           <Component {...pageProps} />
//         </ThemeProvider>
//         {/* </ColorModeProvider> */}
//       </CacheProvider>
//     </NextThemeProvider>
//   )
// }

import { FC } from 'react'
import { EmotionCache } from '@emotion/react'
import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import PageProvider from '@/src/helpers/PageProvider'

export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const App: FC<MUIAppProps> = ({ Component, pageProps, emotionCache }) => (
  <SessionProvider session={pageProps.session}>
    <PageProvider emotionCache={emotionCache}>
      <Component {...pageProps} />
    </PageProvider>
  </SessionProvider>
)

export default App
