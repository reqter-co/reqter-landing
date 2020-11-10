import styled from "styled-components";
import tw, { theme } from "twin.macro";
export const Input = styled.input<{ hasError?: boolean }>`
  ${tw`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight mb-4`}
  &:focus {
  }
  &:focus {
    ${tw`outline-none shadow`}
    border: ${({ hasError }) =>
      hasError
        ? `2px solid ${theme`colors.red.500`}`
        : `2px solid ${theme`colors.gray.200`}`};
  }
  border: ${({ hasError }) =>
    hasError
      ? `2px solid ${theme`colors.red.500`}`
      : `2px solid ${theme`colors.gray.200`}`};
`;
