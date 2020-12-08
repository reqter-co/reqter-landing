import styled from "styled-components";
import tw, { theme } from "twin.macro";
export const Input = styled.input<{ hasError?: boolean }>`
  ${tw`bg-white appearance-none border-2 border-gray-300 rounded w-full py-3 px-4 text-gray-800 leading-tight mb-4`}
  &:focus {
  }
  &:focus {
    ${tw`outline-none`}
    border: ${({ hasError }) =>
      hasError
        ? `2px solid ${theme`colors.red.500`}`
        : `2px solid ${theme`colors.gray.300`}`};
  }
  border: ${({ hasError }) =>
    hasError
      ? `2px solid ${theme`colors.red.500`}`
      : `2px solid ${theme`colors.gray.300`}`};
`;
