import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`flex flex-col py-4`};
  min-height: 200px;
`;

export const Sum = styled.div`
  ${tw`flex justify-end`};
`;

export const List = styled.div`
  ${tw`flex flex-col mt-5`};
`;
export const ItemContainer = styled.div`
  ${tw`flex p-3 mb-2 border border-gray-200 items-center`};
`;
export const Number = styled.div`
  ${tw`bg-primary-light-color flex justify-center items-center text-white`};
  width: 25px;
  height: 25px;
`;
export const Date = styled.div`
  ${tw`flex-1 px-3 text-sm`};
`;
export const Price = styled.div`
  ${tw`flex-1`};
`;
export const Status = styled.div`
  ${tw`flex-1`};
  span {
    ${tw`text-green-600 p-1 text-sm`};
  }
`;
