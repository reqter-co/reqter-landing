import styled from "styled-components";
import tw from "twin.macro";
// import { xs } from "@Utils/mediaQueries";
import Section from "@Shared/components/Section";

export const Wrapper = styled(Section)`
  ${tw`py-20`}
`;
export const Title = styled.h1`
  ${tw`text-4xl text-gray-900 font-bold text-center `}
`;
export const Info = styled.h3`
  ${tw`max-w-2xl m-auto mt-3 text-base font-semibold text-center mb-10`}
`;
export const Container = styled.div`
  ${tw`m-auto mt-5 max-w-5xl`};
`;
