import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`flex flex-col pb-8`};
`;
export const Title = styled.h1`
  ${tw`pt-6 pb-2`};
`;
export const PricesList = styled.div`
  ${tw`flex phone:flex-col justify-between mt-2`};
`;
export const PerContainer = styled.div`
  ${tw`w-1/4 phone:w-full phone:mb-3 flex p-2  border border-gray-300 rounded items-center`};
  margin-inline-end: 10px;
`;
export const IconBox = styled.div`
  ${tw`bg-gray-200 p-3 flex justify-center items-center rounded`};
  margin-inline-end: 15px;
`;
export const Values = styled.div`
  ${tw`flex flex-col`};
`;
export const InputGroup = styled.div`
  ${tw`flex flex-col flex-1 phone:p-0`};
  padding-inline-end: 20px;
`;
export const PerTitle = styled.div`
  ${tw`font-semibold text-sm text-gray-700`};
`;
export const PerValue = styled.div`
  ${tw`text-gray-600 text-sm`};
`;
export const Form = styled.form`
  ${tw`mt-20 phone:mt-10 flex phone:flex-col phone:items-stretch items-center`};
`;
export const PayTitle = styled.h1`
  ${tw`mb-2`};
`;
