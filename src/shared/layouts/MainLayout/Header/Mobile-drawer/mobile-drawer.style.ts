import { zoomInAnim } from "@Shared/animations";
import { sm } from "@Utils/mediaQueries";
import styled from "styled-components";
import tw from "twin.macro";
export const Wrapper = styled.div`
  ${tw`fixed w-full h-full bg-white left-0 top-0 h-screen hidden`};
  z-index: 5000;
  ${sm} {
    ${tw`flex flex-col`}
  }
  animation: ${zoomInAnim} 0.5s;
`;
export const Header = styled.div`
  ${tw`relative flex items-center`};
  height: 90px;
`;
export const CloseIcon = styled.div`
  ${tw`absolute text-5xl font-black`};
  right: 30px;
`;
export const LoginBox = styled.div`
  ${tw`bg-gray-100 py-10 px-5 mt-5 flex justify-center items-center`};
  height: 150px;
`;

export const LoginSwitcherContainer = styled.div`
  ${tw`flex w-full items-center`};
`;
export const UserIcon = styled.div`
  ${tw`rounded-full border-2 border-gray-500 text-gray-500 flex items-center justify-center shadow text-4xl`};
  width: 80px;
  height: 80px;
`;
export const UserImage = styled.img`
  ${tw`rounded-full shadow border-4 border-white`}
  width: 80px;
  height: 80px;
`;
export const TextBox = styled.div`
  ${tw`flex flex-col px-3`};
`;
export const Name = styled.div`
  ${tw`text-xl font-bold flex items-center`};
  &:last-child {
    ${tw`text-lg font-normal`};
  }
`;
export const LogoutLink = styled.div`
  ${tw`py-2 text-xl font-bold w-full self-stretch text-secondary-dark-color`};
  padding-inline-start: 20px;
`;

export const Menu = styled.ul`
  ${tw`flex flex-col  mt-5`};
`;

export const MenuItem = styled.li<{ css?: any }>`
  ${tw`py-2 text-xl font-bold w-full self-stretch`};
  padding-inline-start: 20px;
`;
