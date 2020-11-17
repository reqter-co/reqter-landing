import styled from "styled-components";
import tw, { theme } from "twin.macro";
import { md, sm } from "@Utils/mediaQueries";
type Props = {
  isSticky?: boolean;
  isTransparent?: boolean;
  selected?: boolean;
  css?: any;
};
export const Wrapper = styled.header<Props>`
  height: 90px;
  ${tw`w-full z-50 w-full`};
  background-color: ${({ isSticky, isTransparent }) =>
    !isTransparent
      ? theme`colors.white`
      : isSticky
      ? "rgba(255,255,255,1)"
      : `transparent`};
  top: 0;
  position: fixed;
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
export const MenuItem = styled.li<{ className?: string }>`
  ${tw`font-bold px-6 cursor-pointer text-black text-base`}
`;
export const Actions = styled.div`
  ${tw`absolute right-0`};
  ${md} {
    right: 15px;
  }
`;
export const NavBarIcon = styled.div`
  ${tw`text-3xl pr-5 cursor-pointer hidden`};
  ${sm} {
    ${tw`block`}
  }
`;
