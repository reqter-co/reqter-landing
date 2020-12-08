import styled from "styled-components";
import tw from "twin.macro";
// import { xs, sm, md } from "@Utils/mediaQueries";

export const Btn = styled.button<{ [key in string]: unknown }>`
  ${tw`flex justify-center items-center focus:border-none outline-none rounded font-bold`};
  &:focus {
    ${tw`outline-none border-none shadow-none`};
  }
  a {
    width: 100%;
    text-align: center;
  }
`;
