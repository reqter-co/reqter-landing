import styled from "styled-components";
import tw from "twin.macro";
import { xs } from "@Utils/mediaQueries";

export const TabsContainer = styled.ul`
  ${tw`flex m-auto mt-5 border-2 border-primary-light-color rounded-lg`}
`;
export const TabItem = styled.li`
  ${tw`p-4 px-6 text-primary-light-color font-semibold`};
  &:first-child {
    ${tw`bg-primary-light-color text-white`};
  }
`;
