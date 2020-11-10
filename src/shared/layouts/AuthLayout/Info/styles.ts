import styled from "styled-components";
import tw from "twin.macro";
import { sm } from "@Utils/mediaQueries";
export const Wrapper = styled.div`
  ${tw`flex flex-col justify-center items-center bg-primary-light-color text-white`};
  flex: 1.5;
  ${sm} {
    ${tw`hidden`};
  }
`;
export const Title = styled.h1`
  ${tw`text-5xl font-semibold max-w-lg`};
`;
export const Description = styled.h3`
  ${tw`text-gray-100 max-w-lg`};
`;
export const Image = styled.img`
  ${tw`max-w-lg`};
`;
