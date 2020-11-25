import styled from "styled-components";
import tw from "twin.macro";
import { xs, sm } from "@Utils/mediaQueries";
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
export const ItemWrapper = styled.div`
  ${tw`flex w-1/3 phone:w-full tab-port:w-1/2 px-3 my-10 flex-col`};
  ${sm} {
    ${tw`w-1/2`};
  }
  ${xs} {
    ${tw`w-full my-5`};
  }
`;
