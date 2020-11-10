import styled from "styled-components";
import tw from "twin.macro";
import { xs } from "@Utils/mediaQueries";
import Section from "@Shared/components/Section";

export const Wrapper = styled(Section)`
  ${tw`py-20`}
`;
export const Title = styled.h1`
  ${tw`text-5xl text-gray-900 font-bold text-center`}
`;
export const Container = styled.div`
  ${tw`flex flex-wrap justify-between mt-5`};
  ${xs} {
    ${tw`flex-col`}
  }
`;
export const ItemWrapper = styled.div`
  ${tw`flex flex-col items-center text-center`};
  padding-inline-end: 30px;
  width: 33.33%;
  ${xs} {
    padding: 0 10px;
  }
`;
export const Icon = styled.div`
  max-width: 150px;
  svg {
    width: 200px;
    height: 200px;
  }
`;
export const ItemTitle = styled.h2`
  ${tw`text-2xl text-gray-800 font-semibold`};
`;
export const Description = styled.h3`
  ${tw`text-gray-700 text-base mt-4`}
`;
