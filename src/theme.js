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
      light: "rgb(102, 102, 102)",
    },
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
    },
    h2: {
      // fontFamily: roboto.style.fontFamily,
      fontWeight: "600",
    },
    h3: {
      // fontFamily: roboto.style.fontFamily,
      fontWeight: "600",
    },
    h4: {
      // fontFamily: roboto.style.fontFamily,
      fontWeight: "600",
    },
    h5: {
      // fontFamily: roboto.style.fontFamily,
      fontWeight: "600",
    },
    h6: {
      // fontFamily: roboto.style.fontFamily,
      fontWeight: "600",
    },
  },
});

export default theme;
