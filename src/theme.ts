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
      styleOverrides: {
        root: {
          disableRipple: true,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          // boxShadow: 'none',
          borderRadius: 5,
          // ...(ownerState.variant === 'contained' &&
          //   ownerState.color === 'info' && {
          //     color: '#fff',
          //   }),
          ...(ownerState.variant === 'text' &&
            ownerState.color === 'primary' && {
              '&:hover': { backgroundColor: 'transparent', color: '#202020' },
            }),
        }),
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
    // MuiListItemIcon: {
    //   styleOverrides: {
    //     root: {
    //       minWidth: '42px',
    //     },
    //   },
    // },
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
  components: {
    MuiCard: {
      defaultProps: {
        // sx: {
        //   borderColor: '#4e4e4e !important',
        // },
      },
      styleOverrides: {
        root: {
          borderColor: '#4e4e4e !important',
        },
      },
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
    --mui-palette-primary-main: #1976d2;
    --mui-palette-primary-light: #42a5f5;
    --mui-palette-primary-dark: #1565c0;
    --mui-palette-primary-contrastText: #fff;

    /* Colors */
    --blue-primary: #1c7ed6;
    --green-primary: #22b8cf;

    --pink-primary: #e64980;
    --orange-primary: #fd7e14;

    /* Gradients */
    --gradient-primary: linear-gradient(
      52deg,
      var(--blue-primary) 3%,
      var(--green-primary) 97%
    );
    --gradient-warning: linear-gradient(
      45deg,
      var(--pink-primary) 3%,
      var(--orange-primary) 97%
    );
    --gradient-success: linear-gradient(15deg, #4c6ef5 0%, #15aabf 100%);
    --gradient-info: linear-gradient(45deg, #4c6ef5 0%, #15aabf 100%);

    /* Shadows / Box Shadow */
    --drop-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.1),
      0px 8px 10px 1px rgba(0, 0, 0, 0.1), 0px 3px 14px 2px rgba(0, 0, 0, 0.1);

    --drop-shadow-light: 0px 5px 5px -3px rgba(0, 0, 0, 0.1),
      0px 4px 4px 1px rgba(0, 0, 0, 0.1), 0px 3px 10px 2px rgba(0, 0, 0, 0.1);

    --bg-gradient-bluish: linear-gradient(
      -90deg,
      #a258c1,
      #0374bd 47%,
      #29b9c9
    );

    --img-paper-dot: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAANklEQVQoU2NkIBIwEqmOgXyFU6dObQDZkp2dDaZhAMVEmCKYJLJi8hSCTCLKanwhQL6vcZkKAMbtEAuAaq67AAAAAElFTkSuQmCC');

    body {
      /* background-color: #fff; */
      color: #121212;
    }
  }

  [data-theme='dark'] {
    body {
      /* background-color: #121212; */
      color: #ffffff;
    }
  }
`
