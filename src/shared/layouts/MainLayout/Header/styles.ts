import styled from "styled-components";
import tw, { theme } from "twin.macro";
import { md } from "@Utils/mediaQueries";
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
  ${tw`cursor-pointer absolute left-0 bg-primary-light-color text-white text-2xl px-5 py-1 rounded font-semibold`}
  ${md} {
    left: 10px;
  }
`;
export const Menu = styled.ul`
  ${tw`flex justify-center absolute right-0 items-center`};
  direction: rtl;
`;
export const MenuItem = styled.li<{ className?: string }>`
  ${tw`font-bold px-6 cursor-pointer text-black text-lg `}
`;
