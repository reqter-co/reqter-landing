import styled from "styled-components";
import tw, { theme } from "twin.macro";
type Props = {
  bgColor?: string;
  bgImage?: string;
};
export const Wrapper = styled.div<Props>`
  background: ${({ bgColor, bgImage }) =>
    bgImage ? `url(${bgImage})` : bgColor ? bgColor : theme`colors.white`};
  ${tw`py-20 bg-cover`}
`;
export const Content = styled.div`
  ${tw`flex flex-col max-w-6xl m-auto`}
`;
export const Title = styled.div`
  ${tw`text-4xl font-semibold text-center text-black px-5 phone:text-3xl`}
`;
export const Description = styled.div`
  ${tw`max-w-lg m-auto mt-3 text-base font-semibold text-center`}
`;
