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
      dark: "rgb(167, 167, 167)",
      light: "#f2f2f2",
    },
    success: { main: "#198754" },
    info: { main: "#0dcaf0" },
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
      fontWeight: "400",
      lineHeight: 1.5,
    },
    h5: {
      // fontFamily: roboto.style.fontFamily,
      fontWeight: "400",
      lineHeight: 1.5,
    },
    h6: {
      // fontFamily: roboto.style.fontFamily,
      fontWeight: "400",
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
    // MuiListItemButton: {
    //   styleOverrides: {
    //     // Name of the slot
    //     root: {
    //       width: "36px",
    //     },
    //   },
    // },
    MuiListItemIcon: {
      styleOverrides: {
        // Name of the slot
        root: {
          minWidth: "42px",
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        // Name of the slot
        root: {
          fontWeight: "400",
        },
      },
    },
  },
});

export default theme;
