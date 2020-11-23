import { sm } from "@Utils/mediaQueries";
import styled from "styled-components";
import tw from "twin.macro";
export const Wrapper = styled.div`
  ${tw`fixed w-full h-full bg-white left-0 top-0 h-screen hidden`};
  z-index: 5000;
  ${sm} {
    ${tw`flex flex-col`}
  }
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
  ${tw`bg-gray-100 p-10 mt-5 flex justify-center items-center`};
  height: 150px;
`;

export const LoginSwitcherContainer = styled.div`
  ${tw`flex flex-col justify-center items-center`};
`;
export const UserIcon = styled.div`
  width: 55px;
  height: 55px;
  ${tw`rounded-full border-2 border-gray-800 flex items-center justify-center shadow mb-3`}
`;
export const UserImage = styled.img`
  width: 55px;
  height: 55px;
  ${tw`rounded-full shadow border-4 border-white`}
`;
export const Name = styled.div`
  ${tw`text-xl font-bold flex items-center`};
`;
export const LogoutLink = styled.div`
  ${tw`text-gray-800 mt-3 text-lg`};
`;

export const Menu = styled.ul`
  ${tw`flex flex-col  mt-5`};
`;

export const MenuItem = styled.li<{ css?: any }>`
  ${tw`py-2 text-xl font-bold w-full self-stretch`};
  padding-inline-start: 20px;
`;
