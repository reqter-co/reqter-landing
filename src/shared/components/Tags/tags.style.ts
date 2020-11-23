import styled from "styled-components";
import tw from "twin.macro";
import { xs } from "@Utils/mediaQueries";

export const TagsContainer = styled.div<{ css: any }>`
  ${tw`flex w-full mt-5 flex-wrap phone:px-5`};
`;
export const TagItem = styled.div<{ css: any }>`
  ${tw`text-black bg-secondary-light-color py-1 px-2 rounded font-bold text-center mb-3`};
  margin-inline-end: 10px;
  ${xs} {
    width: calc(50% - 10px);
  }
`;
