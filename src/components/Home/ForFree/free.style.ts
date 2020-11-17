import styled from "styled-components";
import tw from "twin.macro";
import { xs, sm, md } from "@Utils/mediaQueries";
import Section from "@Shared/components/Section";

export const Wrapper = styled(Section)`
  ${tw`py-20 pb-10`};
  ${xs} {
    ${tw`py-10`};
  }
`;

export const Container = styled.div`
  ${tw`flex flex-col justify-center items-center text-white`};
`;

export const Title = styled.h1`
  ${tw`font-bold text-4xl `};
  ${md} {
    ${tw`text-4xl`};
  }
  ${xs} {
    ${tw`text-center`};
  }
`;
export const Description = styled.div`
  ${tw`text-lg mt-4 font-semibold text-center`};
  ${sm} {
    ${tw`text-2xl px-4`};
  }
  ${xs} {
    ${tw`text-sm`};
  }
`;
