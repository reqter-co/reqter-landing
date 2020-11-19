import styled from "styled-components";
import tw, { theme } from "twin.macro";

export const Wrapper = styled.div`
  ${tw`flex flex-col items-center fixed`}
  z-index: 999999;
  min-width: 300px;
  max-width: 500px;

  &.top-right {
    top: 12px;
    right: 12px;
  }

  &.bottom-right {
    bottom: 12px;
    right: 12px;
  }

  &.top-left {
    top: 12px;
    left: 12px;
  }

  &.bottom-left {
    bottom: 12px;
    left: 12px;
  }
  &.bottom-center {
    bottom: 12px;
    left: 50%;
  }
`;
export const ItemWrapper = styled.div`
  ${tw`flex items-center w-full bg-black-light p-5 py-4 text-white mx-5 my-2 rounded shadow cursor-pointer`}
  &:hover {
    ${tw`shadow-2xl`}
  }

  &.top-right {
    transition: transform 0.6s ease-in-out;
    animation: toast-in-right 0.3s;
  }

  &.bottom-right {
    transition: transform 0.6s ease-in-out;
    animation: toast-in-right 0.3s;
  }

  &.top-left {
    transition: transform 0.6s ease-in;
    animation: toast-in-left 0.3s;
  }

  &.bottom-left {
    transition: transform 0.6s ease-in;
    animation: toast-in-left 0.3s;
  }
  &.bottom-center {
    transform: translateX(-50%);
    transition: transform 0.6s ease-in;
    animation: toast-in-bottom 0.3s;
  }

  @keyframes toast-in-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes toast-in-left {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes toast-in-bottom {
    from {
      transform: translate(-50%, 100%);
    }
    to {
      transform: translate(-50%, 0);
    }
  }
`;
export const IconBox = styled.div<{ type: string }>`
  ${tw`text-2xl`};
  padding-inline-end: 10px;
  display: ${({ type }) => (type === "default" ? "none" : "flex")};
  color: ${({ type }) =>
    type === "success"
      ? theme`colors.green.500`
      : type === "error"
      ? theme`colors.red.500`
      : type === "warning"
      ? theme`colors.orange.500`
      : type === "info"
      ? theme`colors.blue.600`
      : theme`colors.black`};
`;
export const TextBox = styled.div``;
export const Title = styled.h1`
  ${tw`font-bold`}
`;
export const Description = styled.h3`
  ${tw`text-sm mt-1`}
`;
