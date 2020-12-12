import styled from "styled-components";
import tw from "twin.macro";
import { sm, xs } from "@Utils/mediaQueries";

export const Text = styled.h3`
  ${tw`text-center max-w-3xl leading-relaxed text-xl m-auto mt-5`};
  ${sm} {
    ${tw`px-5`};
  }
  ${xs} {
    ${tw`text-lg`};
  }
`;
