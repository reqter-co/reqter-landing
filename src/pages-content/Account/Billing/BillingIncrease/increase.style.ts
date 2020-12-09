import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`flex flex-col pb-8`};
`;
export const Title = styled.h1`
  ${tw`pt-6 pb-2`};
`;
export const PricesList = styled.div`
  ${tw`flex justify-between`};
`;
export const PerContainer = styled.div`
  ${tw`w-1/4 flex flex-col p-5 py-4 bg-gray-200 justify-center rounded`};
  margin-inline-end: 10px;
`;
export const PerTitle = styled.div`
  ${tw`font-semibold text-xl text-gray-700`};
`;
export const PerValue = styled.div`
  ${tw`text-gray-600`};
`;
export const Form = styled.form`
  ${tw`mt-20 flex items-center`};
`;
export const PayTitle = styled.h1`
  ${tw`mb-2`};
`;
