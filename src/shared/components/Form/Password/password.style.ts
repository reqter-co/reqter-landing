import styled from "styled-components";
import tw, { theme } from "twin.macro";
export const Wrapper = styled.div<{ hasError?: boolean }>`
  ${tw`bg-white flex mb-4 border-2 border-gray-300 rounded w-full`}
  height: 50px;
  border: ${({ hasError }) =>
    hasError
      ? `2px solid ${theme`colors.red.500`}`
      : `2px solid ${theme`colors.gray.300`}`};
`;
export const Input = styled.input`
  ${tw`flex-1 px-4 text-gray-800 bg-transparent h-full outline-none border-none shadow-none`}
`;
export const PasswordVisibility = styled.div`
  width: 50px;
  height: 100%;
  ${tw`flex justify-center items-center text-black text-2xl cursor-pointer`}
`;
