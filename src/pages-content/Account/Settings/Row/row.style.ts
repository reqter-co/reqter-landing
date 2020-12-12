import { xs } from "@Utils/mediaQueries";
import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`flex py-5 items-center w-full`};
  &:not(:last-child) {
    ${tw`border-b border-gray-200`};
  }
`;
export const TextsBox = styled.div`
  ${tw`flex-1 flex flex-col`};
`;
export const Title = styled.h1`
  ${tw`font-semibold mb-3 text-base`};
`;
export const Description = styled.h3`
  ${tw`text-gray-800 text-sm`};
`;
export const Actions = styled.div<{ isXsFullWidth?: boolean }>`
  ${tw`flex phone:w-full`};
  ${xs} {
    width: ${({ isXsFullWidth }) => (isXsFullWidth ? "100%" : "auto")};
  }
`;
