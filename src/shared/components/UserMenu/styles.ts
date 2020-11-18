import styled from "styled-components";
import tw from "twin.macro";
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
  ${tw`text-base flex items-center`};
  margin-inline-start: 5px;
`;
export const MenuWrapper = styled.ul`
  ${tw`absolute bg-white shadow rounded-lg shadow border border-gray-100`};
  width: 200px;
  direction: ${({ direction }: { direction: string }) => direction};
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
