import { sm, xs } from "@Utils/mediaQueries";
import styled from "styled-components";
import tw, { theme } from "twin.macro";
// import { xs } from "@Utils/mediaQueries";

export const TabsContainer = styled.ul`
  ${tw`flex m-auto mt-5 bg-gray-200 rounded-lg max-w-4xl overflow-hidden`};
  ${sm} {
    ${tw`mx-3`}
  }
  ${xs} {
    ${tw`hidden`}
  }
`;

export const TabItem = styled.li<{ selected: boolean }>`
  ${tw`p-4 px-6 text-sm font-semibold flex-1 cursor-pointer text-center
       hover:font-bold transition duration-700 ease-in-out`};
  background-color: ${({ selected }) =>
    selected ? theme`colors.primary-light-color` : "transparent"};
  color: ${({ selected }) =>
    selected ? theme`colors.white` : theme`colors.primary-light-color`};
  ${sm} {
    ${tw`px-0`}
  }
`;
