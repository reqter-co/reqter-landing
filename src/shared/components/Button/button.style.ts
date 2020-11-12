import styled from "styled-components";
import tw from "twin.macro";
// import { xs, sm, md } from "@Utils/mediaQueries";

export const Btn = styled.button<{ [key in string]: unknown }>`
  ${tw`outline-none rounded-lg font-bold`}
`;
