import { Roboto, Poppins } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      // main: "#556cd6",
      // main: "#6E9CE2",
      main: "#3c988f",
      dark: "#1b1c23",
      light: "#63ACA5",
    },
    secondary: {
      // main: "#f2f2f2",
      main: "#929292",
      dark: "#555555",
      light: "#f2f2f2",
    },
    success: { main: "#198754" },
    info: { main: "#2e9cf2" }, //"#0dcaf0"
    warning: { main: "#ffc107" },
    danger: { main: "#dc3545" },
    light: { main: "#f8f9fa" },
    dark: { main: "#212529" },
    error: {
      main: red.A400,
    },
  },
  typography: {
    // fontFamily: roboto.style.fontFamily,
    fontFamily: poppins.style.fontFamily,
    h1: {
      // fontFamily: roboto.style.fontFamily,
      fontWeight: "600",
      lineHeight: 1.5,
    },
    h2: {
      // fontFamily: roboto.style.fontFamily,
      fontWeight: "600",
      lineHeight: 1.5,
    },
    h3: {
      // fontFamily: roboto.style.fontFamily,
      fontWeight: "600",
      lineHeight: 1.5,
    },
    h4: {
      // fontFamily: roboto.style.fontFamily,
      fontWeight: "600",
      lineHeight: 1.5,
    },
    h5: {
      // fontFamily: roboto.style.fontFamily,
      fontWeight: "600",
      lineHeight: 1.5,
    },
    h6: {
      // fontFamily: roboto.style.fontFamily,
      fontWeight: "400",
      lineHeight: 1.5,
    },
    h7: {
      // fontFamily: roboto.style.fontFamily,
      fontWeight: "600",
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
          ":hover": {
            backgroundColor: "transparent",
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
    // MuiListItemButton: {
    //   styleOverrides: {
    //     // Name of the slot
    //     root: {
    //       width: "36px",
    //     },
    //   },
    // },
    // MuiPaper: {
    //   defaultProps: {
    //     elevation: 0,
    //   },
    //   styleOverrides: {
    //     root: {
    //       elevation: 1,
    //     },
    //   },
    // },
    // MuiPopover: {
    //   defaultProps: {
    //     elevation: 1,

    //   },
    // },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "42px",
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          fontWeight: "400",
          color: "#b0afaf",
          textTransform: "uppercase",
          fontSize: "12px",
          letterSpacing: ".5px",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontWeight: 500,
          color: "#929292",
          a: {
            color: "#929292",
          },
        },
      },
    },
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
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
});

export default theme;
