import styled from "styled-components";
import tw from "twin.macro";
// import { xs } from "@Utils/mediaQueries";
import Section from "@Shared/components/Section";

export const Wrapper = styled(Section)`
  ${tw`py-20`};
`;
export const Title = styled.h1`
${tw`text-4xl text-gray-900 font-bold text-center`}
`;
export const Container = styled.div`
  ${tw`flex flex-wrap relative justify-between m-auto mt-5 max-w-5xl`};
`;
