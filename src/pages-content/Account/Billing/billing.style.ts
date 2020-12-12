import styled from "styled-components";
import tw, { theme } from "twin.macro";

export const Wrapper = styled.div`
  ${tw`flex flex-col bg-white flex-1 shadow rounded px-6`};
`;
export const Header = styled.div`
  ${tw`flex border-b border-gray-300 pt-2`};
  height: 60px;
`;
export const Tabs = styled.div`
  ${tw`flex`};
`;
export const TabItem = styled.div<{ selected?: boolean }>`
  ${tw`flex items-center  text-gray-700 cursor-pointer hover:text-black transition duration-300`};
  margin-inline-end: 20px;
  font-size: 17px;
  border-bottom: ${({ selected }) =>
    selected
      ? `2px solid ${theme`colors.primary-light-color`}`
      : "2px solid transparent"};
  font-weight: ${({ selected }) => (selected ? `bold` : "normal")};
`;
