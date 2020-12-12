import { fadeInUp } from "@Shared/animations";
import styled from "styled-components";
import tw, { theme } from "twin.macro";
export const Wrapper = styled.div`
  ${tw`relative cursor-pointer`}
`;
export const MenuContainer = styled.div`
  ${tw`flex items-center`};
  height: 60px;
`;
export const UserIcon = styled.div`
  width: 45px;
  height: 45px;
  ${tw`rounded-full border-2 border-gray-800 flex items-center justify-center shadow`}
`;
export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  ${tw`rounded-full shadow border-4 border-white`}
`;
export const Name = styled.div`
  ${tw`text-base flex items-center flex-1`};
  margin-inline-start: 5px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
`;
export const MenuWrapper = styled.ul`
  animation: ${fadeInUp} 0.3s;
  ${tw`absolute right-0 bg-white shadow rounded-lg shadow border border-gray-300`};
  width: 200px;
  direction: ${({ direction }: { direction: string }) => direction};
  &::before {
    content: "";
    position: absolute;
    top: -10px;
    right: 20px;
    width: 0px;
    height: 0px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
    z-index: 1003;
  }
  &::after {
    content: "";
    position: absolute;
    top: -12px;
    right: 18px;
    width: 0px;
    height: 0px;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid ${theme`colors.gray.300`};
    z-index: 1002;
  }
`;

export const MenuItem = styled.li`
  ${tw`flex items-center text-sm font-semibold text-gray-800 p-3 border-b border-gray-200 cursor-pointer`};
  &:hover {
    ${tw`bg-gray-300`}
  }
`;
export const MenuIcon = styled.div`
  ${tw`text-gray-500 text-lg`};
  margin-inline-end: 10px;
`;
