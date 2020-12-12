import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`flex flex-col py-4 bg-white flex-1 shadow rounded p-6`};
`;
export const Title = styled.h1`
  ${tw`font-semibold text-2xl border-b border-gray-300 pb-3 mb-5`};
`;

export const FormContainer = styled.form`
  ${tw`flex flex-col `};
`;
export const Info = styled.p`
  ${tw`mb-6`};
`;
export const Row = styled.div`
  ${tw`flex phone:flex-col`};
  div:first-child {
    margin-inline-end: 10px;
  }
`;
