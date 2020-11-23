import styled from "styled-components";
import tw from "twin.macro";
import Section from "@Shared/components/Section";
// import { xs, sm, md } from "@Utils/mediaQueries";

export const Wrapper = styled(Section)`
${tw`w-full mt-10`}
`;
export const Container = styled.div`
  ${tw`flex flex-wrap  mt-10 max-w-6xl mx-auto`}
`;
