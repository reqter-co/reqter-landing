import styled from "styled-components";
import tw from "twin.macro";
import { md, sm } from "@Utils/mediaQueries";
type Props = {
  isSticky?: boolean;
  isTransparent?: boolean;
  selected?: boolean;
  css?: any;
};
export const Wrapper = styled.header<Props>`
  ${tw`w-full z-50 w-full bg-white top-0 fixed`};
  height: 80px;
`;
export const Content = styled.div`
  ${tw`max-w-6xl m-auto h-full flex items-center relative`};
`;
export const Logo = styled.div`
  ${tw`cursor-pointer absolute left-0`}
  ${md} {
    left: 20px;
  }
  width: 120px;
`;
export const Menu = styled.ul`
  ${tw`flex justify-center absolute items-center`};
  left: 150px;
  ${sm} {
    ${tw`hidden`}
  }
`;
export const MenuItem = styled.li<{ css?: any }>`
  ${tw`font-bold px-6 cursor-pointer transition duration-300 text-base`}
`;
export const Actions = styled.div`
  ${tw`absolute right-0`};
  ${md} {
    right: 15px;
  }
  max-width: 200px;
`;
export const NavBarIcon = styled.div`
  ${tw`text-3xl pr-5 cursor-pointer hidden`};
  ${sm} {
    ${tw`block`}
  }
`;
export const UserMenuContainer = styled.ul`
  ${tw`flex text-black p-3 items-center`};
  margin-left: 140px;
  margin-right: 220px;
`;
export const UserMenuItem = styled.li`
  margin-inline-end: 20px;
  ${tw``};
  a {
    ${tw`flex items-center hover:text-gray-600`};
  }
`;

export const Text = styled.div`
  ${tw`font-semibold px-2`};
`;

export const Value = styled.div`
  ${tw`font-semibold`};
`;
