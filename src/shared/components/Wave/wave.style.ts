import styled from "styled-components";
import { theme } from "twin.macro";

export const Wrapper = styled.div`
  .header {
    margin: auto;
    width: 100%;
    text-align: center;
    background: linear-gradient(
      60deg,
      ${theme`colors.primary-light-color`} 0%,
      ${theme`colors.secondary-dark-color`} 100%
    );
    color: white;
  }

  .waves {
    position: relative;
    width: 100%;
    height: 15vh;
    margin-bottom: -7px; /*Fix for safari gap*/
    min-height: 100px;
    max-height: 150px;
  }

  .content {
    position: relative;
    height: 20vh;
    text-align: center;
    background-color: white;
  }

  /* Animation */

  .parallax > use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(85px, 0, 0);
    }
  }
  /*Shrinking for mobile*/
  @media (max-width: 768px) {
    .waves {
      height: 40px;
      min-height: 40px;
    }
    .content {
      height: 30vh;
    }
    h1 {
      font-size: 24px;
    }
  }
`;
