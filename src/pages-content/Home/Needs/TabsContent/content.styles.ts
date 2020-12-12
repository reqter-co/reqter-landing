import { zoomInAnim } from "@Shared/animations";
import styled from "styled-components";
import tw from "twin.macro";
import { md, sm, xs } from "@Utils/mediaQueries";

export const ContentWrapper = styled.div<{ isHiddenMobileSize: boolean }>`
  ${tw`flex m-auto mt-10 max-w-5xl`};
  animation: ${zoomInAnim} 1s;
  ${md} {
    ${tw`px-5`};
  }
  ${xs} {
    ${tw`flex-col`};
    display: ${({ isHiddenMobileSize }) =>
      isHiddenMobileSize ? "none" : "flex"};
  }
`;
export const Left = styled.div`
  ${tw`flex-1`};
  padding-inline-end: 20px;
  ${xs} {
    ${tw`p-0 order-2`};
  }
`;
export const Title = styled.h1`
  ${tw`font-bold text-3xl mt-10`};
`;
export const Info = styled.p`
  ${tw`text-gray-800 max-w-lg mt-4`}
`;
export const Right = styled.div`
  ${tw`p-1`};
  ${sm} {
    width: 40%;
  }
  ${xs} {
    ${tw`w-full order-1`};
  }
`;
export const Image = styled.img`
  ${tw`w-full mt-5`};
  max-width: 400px;
`;
