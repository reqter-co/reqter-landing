import { createGlobalStyle } from "styled-components";
import tw, { theme } from "twin.macro";
export const GlobalStyles = createGlobalStyle`
   body {
    ${tw`font-vazir`}
  },
  :root {
    --bg-color: ${theme`colors.black`}
  }

`;
