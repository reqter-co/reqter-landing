import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`flex flex-col bg-white flex-1 shadow rounded p-6`};
  margin-inline-start: 20px;
`;
export const Title = styled.h1`
  ${tw`font-semibold text-2xl border-b border-gray-300 pb-3`};
`;
