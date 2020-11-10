import styled from "styled-components";
import tw from "twin.macro";
import { xs, sm, md } from "@Utils/mediaQueries";
import { zoomInAnim } from "@Shared/animations";

type IProps = {
  img: string;
  direction: string;
};
export const Wrapper = styled.div<IProps>`
  ${tw`w-full bg-contain h-full`};
  z-index: 1;
  background-image: ${({ img, direction }) => `linear-gradient(
    ${direction === "ltr" ? "77deg" : "-77deg"},
    #f7f8fa 0%,
    #f7f8fa 63%,
    transparent 63%
    ),url(${img})`};

  ${sm} {
    ${tw`bg-cover`};
    background-image: ${({ img }) => `url(${img})`};
  }
`;

export const Section = styled.div`
  ${tw`max-w-5xl w-full h-full m-auto`};
  padding-top: 180px;
  ${xs} {
    padding-top: 100px;
  }
`;
export const Content = styled.div`
  ${tw`flex flex-col justify-start`};
  width: 65%;
  padding-inline-end: 30px;
  min-height: 420px;
  ${sm} {
    ${tw`w-full`};
    padding: 0px;
  }
`;
export const Title = styled.h1`
  ${tw`text-black font-bold text-5xl text-center`};
  ${md} {
    ${tw`text-4xl`};
  }
  animation: ${zoomInAnim} 1s;
`;
export const Description = styled.div`
  ${tw`text-lg text-center mt-4 font-semibold`};
  ${sm} {
    ${tw`text-2xl`};
  }
  ${xs} {
    ${tw`text-sm`};
  }
  animation: ${zoomInAnim} 1s;
`;

export const Actions = styled.div`
  ${tw`flex mt-10`};
`;
export const Button = styled.button`
  ${tw`flex mt-10 py-3 px-6 bg-white text-black text-lg rounded-lg outline-none font-semibold shadow-lg hover:shadow-xl`};
  &:first-child {
    margin-inline-end: 10px;
  }
  &:last-child {
    ${tw`bg-primary-light-color text-white`};
  }
`;
