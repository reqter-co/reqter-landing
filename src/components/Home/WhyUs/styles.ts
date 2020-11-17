import styled from "styled-components";
import tw from "twin.macro";
import { sm, xs } from "@Utils/mediaQueries";
import Section from "@Shared/components/Section";

export const Wrapper = styled(Section)`
  ${tw`py-20`};
  ${xs} {
    ${tw`py-10`};
  }
`;
export const Title = styled.h1`
  ${tw`text-5xl text-gray-900 font-bold`}
`;
export const Container = styled.div`
  ${tw`flex flex-wrap max-w-4xl m-auto mt-10`};
  ${sm} {
    padding-inline-start: 10px;
  }
  ${xs} {
    ${tw`flex-col px-5`}
  }
`;

export const Icon = styled.div`
  ${tw`text-4xl text-white`};
`;
export const TextContainer = styled.div`
  ${tw`mt-16 flex flex-col flex-1 transition duration-500`};
  transform: translateY(150px);
  ${xs} {
    transform: translateY(0px);
    ${tw`translate-y-0`}
  }
`;
export const ItemTitle = styled.h2`
  ${tw`text-2xl font-semibold`};
`;
export const Description = styled.h3`
  ${tw`text-base my-4 opacity-0 flex-1 transition duration-500`};
  ${xs} {
    ${tw`opacity-100`}
  }
`;

export const ItemWrapper = styled.div<{ bgColor: string }>`
  ${tw`flex flex-col text-white rounded-lg shadow-2xl cursor-pointer px-4 py-6 overflow-hidden transition duration-500`};
  margin-inline-end: 30px;
  width: calc(33.33% - 30px);
  background-color: ${({ bgColor }) => bgColor};
  ${sm} {
    margin-inline-end: 15px;
    width: calc(33.33% - 15px);
  }
  &:hover {
    transform: translateY(-20px);
    ${TextContainer} {
      transform: translateY(0px);
    }
    ${Description} {
      ${tw`opacity-100 transition duration-500`}
    }
  }
  ${xs} {
    ${tw`m-0 w-full mb-5`}
  }
`;
