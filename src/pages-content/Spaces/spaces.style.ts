import styled from "styled-components";
import tw from "twin.macro";
export const Wrapper = styled.div`
  ${tw`flex flex-col`};
`;

export const Title = styled.h1`
  ${tw`text-3xl font-bold`};
`;
export const Description = styled.h3`
  ${tw`text-base mb-6`};
`;
export const SpacesContainer = styled.div`
  ${tw`flex pb-10 flex-wrap`};
`;
