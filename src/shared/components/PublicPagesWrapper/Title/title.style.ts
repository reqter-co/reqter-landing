import styled from "styled-components";
import tw from "twin.macro";
import { sm, xs } from "@Utils/mediaQueries";

export const Text = styled.h1`
  ${tw`text-center text-5xl max-w-4xl m-auto font-black`};
  ${sm} {
    ${tw`mx-3`};
  }
  ${xs} {
    ${tw`text-4xl`};
  }
`;
