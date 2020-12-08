import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div<{ css: any }>`
  ${tw`h-full w-full flex flex-1 justify-center items-center`};
  div {
    ${tw`flex justify-center items-center relative`};
    span {
      ${tw`text-primary-light-hover-color px-2 font-bold cursor-pointer`};
    }
    input {
      ${tw`absolute left-0 opacity-0 cursor-pointer`};
    }
  }
`;
