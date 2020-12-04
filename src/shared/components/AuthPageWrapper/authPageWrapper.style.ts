import { sm } from "@Utils/mediaQueries";
import styled from "styled-components";
import tw from "twin.macro";
export const Wrapper = styled.div`
  ${tw`pt-32 w-full flex-1 flex flex-col`};
  background-color: whitesmoke;
`;
export const Content = styled.div`
  ${tw`max-w-6xl m-auto flex flex-col tab-land:px-5 w-full`}
`;
export const Title = styled.h1`
  ${tw`text-3xl font-bold`};
`;
export const Description = styled.h3`
  ${tw`text-base mb-6`};
`;
export const Children = styled.div`
  ${tw`h-full w-full`};
  min-height: 400px;
  ${sm} {
    min-height: 100;
  }
`;
