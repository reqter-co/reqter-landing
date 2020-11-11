import styled from "styled-components";
import tw from "twin.macro";
// import { xs } from "@Utils/mediaQueries";

export const ContentWrapper = styled.div`
  ${tw`flex m-auto mt-20 max-w-5xl `}
`;
export const Left = styled.div`
  ${tw`flex-1`}
`;
export const Title = styled.h1`
  ${tw`font-semibold text-4xl mt-10`}
`;
export const Info = styled.p`
  ${tw`text-gray-800 max-w-sm`}
`;
export const Right = styled.div`
  ${tw`p-1`}
`;
export const Image = styled.img`
  ${tw`w-full`};
  width: 450px;
`;
