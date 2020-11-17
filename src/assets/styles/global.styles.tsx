import { createGlobalStyle } from "styled-components";
import tw, { theme } from "twin.macro";
export const GlobalStyles = createGlobalStyle`
   body {
    ${tw`font-vazir`}
  },
  :root {
    --bg-color: ${theme`colors.black`}
  }
  .logo-cls-1 {
    fill: #3784ff;
  }
  .logo-cls-2,
  .logo-cls-3 {
    fill: none;
    stroke: #fff;
    strokemiterlimit: 10;
  }
  .logo-cls-2 {
    stroke-width: 8.44px;
  }
  .logo-cls-3 {
    stroke-width: 4.22px;
  }
  .logo-cls-4 {
    fill: #44bcb1;
  }

`;
