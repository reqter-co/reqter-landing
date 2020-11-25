import styled from "styled-components";
import tw from "twin.macro";
// import { xs } from "@Utils/mediaQueries";
import Section from "@Shared/components/Section";
import { xs } from "@Utils/mediaQueries";

export const Wrapper = styled(Section)`
  ${tw`py-20`}
`;
export const Container = styled.div`
  ${tw`m-auto mt-5 max-w-5xl`};
`;
export const MobileContent = styled.div`
  ${tw`hidden`};
  ${xs} {
    ${tw`flex flex-col`};
  }
`;
