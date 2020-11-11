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
export const move_wave = keyframes`
0% {
  transform: translateX(0) translateZ(0) scaleY(1);
}
50% {
  transform: translateX(-25%) translateZ(0) scaleY(0.55);
}
100% {
  transform: translateX(-50%) translateZ(0) scaleY(1);
}
`;
