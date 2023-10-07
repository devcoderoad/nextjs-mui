import { Roboto, Poppins } from 'next/font/google'
import { ThemeOptions, createTheme } from '@mui/material/styles'
import { css } from '@mui/material'
import { deepOrange } from '@mui/material/colors'

export const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

export const getThemeTokens: ThemeOptions = {
  typography: {
    fontFamily: poppins.style.fontFamily,
    h1: {
      fontWeight: '600',
      lineHeight: 1.5,
    },
    h2: {
      fontWeight: '600',
      lineHeight: 1.5,
    },
    h3: {
      fontWeight: '600',
      lineHeight: 1.5,
    },
    h4: {
      fontWeight: '600',
      lineHeight: 1.5,
    },
    h5: {
      fontWeight: '600',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: '400',
      lineHeight: 1.5,
    },
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableTouchRipple: true,
        disableFocusRipple: true,
      },
      styleOverrides: {
        root: {
          ':hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: '42px',
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          fontWeight: '400',
          color: '#b0afaf',
          textTransform: 'uppercase',
          fontSize: '12px',
          letterSpacing: '.5px',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontWeight: 500,
          color: '#929292',
          a: {
            color: '#929292',
          },
        },
      },
    },
    // MuiAppBar: {
    //   styleOverrides: {
    //     colorPrimary: {
    //       backgroundColor: 'transparent',
    //     },
    //   },
    // },
    // MuiDivider: {
    //   styleOverrides: {
    //     middle: {
    //       borderTop: '1px solid green !important',
    //       borderLeft: '1px solid green !important',
    //     },
    //   },
    // },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
    easing: {
      // This is the most common easing curve.
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
}

export const lightTheme = createTheme({
  ...getThemeTokens,
  palette: {
    mode: 'light',
    primary: {
      main: '#3c988f',
      dark: '#1b1c23',
      light: '#63ACA5',
    },
    secondary: {
      main: '#929292',
      dark: '#555555',
      light: '#f2f2f2',
    },
    success: { main: '#198754' },
    info: { main: '#2e9cf2' },
    warning: { main: '#ffc107' },
    error: {
      main: deepOrange[900],
    },
    // background: {
    //   default: '#f2f2f2',
    // },
  },
})

export const darkTheme = createTheme({
  ...getThemeTokens,
  palette: {
    mode: 'dark',
    primary: {
      main: '#3c988f',
      dark: '#1b1c23',
      light: '#63ACA5',
    },
    secondary: {
      main: '#929292',
      dark: '#555555',
      light: '#f2f2f2',
    },
    success: { main: '#198754' },
    info: { main: '#2e9cf2' },
    warning: { main: '#ffc107' },
    error: {
      main: deepOrange[900],
    },
    background: {
      paper: '#252525',
      // default: '#252525',
    },
  },
  // components: {
  //   MuiPaper: {
  //     styleOverrides: {
  //       root: {
  //         backgroundColor: '#212121',
  //       },
  //     },
  //   },
  // },
})

export const globalStyles = css`
  :root {
    body {
      /* background-color: #fff; */
      color: #121212;
    }
  }

  [data-theme='dark'] {
    body {
      /* background-color: #121212; */
      color: #fff;
    }
  }
`
