// import tw from "twin.macro";
import styled from "styled-components";

export const CircleSpinner = styled.span<{ [key in string]: string }>`
  & {
    width: 1.3rem;
    height: 1.3rem;
    border-top-color: white;
    border-left-color: white;

    /* Additional spinner styles */
    animation: spinner 400ms linear infinite;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-style: solid;
    border-width: 2px;
    border-radius: 50%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    &.spinner-large {
      width: 5rem;
      height: 5rem;
      border-width: 6px;
    }

    &.spinner-slow {
      animation: spinner 1s linear infinite;
    }

    &.spinner-blue {
      border-top-color: #09d;
      border-left-color: #09d;
    }
  }

  /* Animation styles */
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
