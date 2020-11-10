import { keyframes } from "styled-components";
export const zoomInAnim = keyframes`
  from {
    opacity:0;
    transform: scale(0);
  }
  to {
    opacity:1;
    transform: scale(1);
  }
`;
