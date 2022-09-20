import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#613DC1",
    secondary: "#858AE3",
    text: "#424242",
    cancel: "#CC5A71",
    error: "#FA718D",
  },
  shades: {
    primary: {
      d2: "#181326",
      d1: "#392963",
      l1: "#B399F7",
      l2: "#EFE9FF",
    },
    error: {
      d2: "#8A0924",
      d1: "#AB344C",
      l1: "#FFA5B7",
      l2: "#FFD0DA",
    },
  },
  fontSizes: {
    largest: "2.2rem",
    large: "1.4rem",
    medium: "1rem",
  },
  fontWeights: {
    regular: 400,
    semiBold: 500,
    bold: 700,
  },
};
