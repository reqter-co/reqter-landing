import styled from "styled-components";
import tw from "twin.macro";

export const SidebarContainer = styled.div`
  ${tw`flex flex-col bg-white shadow rounded-lg overflow-hidden`};
  width: 300px;
`;

export const Menu = styled.div<{ css: any }>`
  ${tw`flex items-center p-8 text-base font-semibold cursor-pointer transition duration-300 box-content`};
  &:hover {
    ${tw`bg-gray-100`};
  }
`;
