import styled from "styled-components";
import tw from "twin.macro";

export const SidebarContainer = styled.div`
  ${tw`flex flex-col overflow-hidden tab-port:hidden`};
  width: 250px;
`;

export const Menu = styled.div<{ css: any }>`
  ${tw`flex items-center py-4 text-base text-gray-800 cursor-pointer transition duration-300 box-content`};
  &:hover {
    ${tw`text-gray-900`};
  }
`;
