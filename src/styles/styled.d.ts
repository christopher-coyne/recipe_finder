import "styled-components";
import { theme } from "./theme";

// type CustomTheme = typeof theme;

type CustomTheme = {
  colors: {
    primary: string;
    secondary: string;
    text: string;
    cancel: string;
    error: string;
  };
  shades: {
    primary: {
      d2: string;
      d1: string;
      l1: string;
      l2: string;
    };
    error: {
      d2: string;
      d1: string;
      l1: string;
      l2: string;
    };
  };
  fontSizes: {
    largest: string;
    large: string;
    medium: string;
  };
  fontWeights: {
    regular: number;
    semiBold: number;
    bold: number;
  };
};

declare module "styled-components" {
  export type DefaultTheme = CustomTheme;
}
