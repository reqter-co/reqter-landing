import styled from "styled-components";
import tw from "twin.macro";
import { xs } from "@Utils/mediaQueries";
import Section from "@Shared/components/Section";
export const Wrapper = styled(Section)`
  ${tw`flex flex-col my-5`}
`;
export const FaqContainer = styled.div`
  ${tw`flex flex-wrap max-w-5xl m-auto`}
`;

export const FAQItemWrapper = styled.div`
  ${tw`flex flex-col w-1/2 p-10 py-8`};
  ${tw`phone:w-full px-6`}
`;
export const Title = styled.h1`
  ${tw`text-2xl font-black mb-5`}
`;
export const Description = styled.h1`
  ${tw`text-base`}
`;
