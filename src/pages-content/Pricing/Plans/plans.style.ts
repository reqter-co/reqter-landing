import styled from "styled-components";
import tw from "twin.macro";
import { sm} from "@Utils/mediaQueries";
import Section from "@Shared/components/Section";

export const Wrapper = styled(Section)`
  ${tw`flex flex-col`}
`;
export const PlansContainer = styled.div`
  ${tw`flex justify-center flex-wrap`};
`;
export const PriceTypeSwitcher = styled.div`
  ${tw`flex m-auto mb-10 shadow rounded overflow-hidden`};
  width: 250px;
`;
export const PriceTypeItem = styled.div<{ css: any }>`
  ${tw`flex flex-1 items-center justify-center p-3 cursor-pointer`};
`;

export const PlanItemWrapper = styled.div<{ css?: any }>`
  ${tw`flex flex-col p-5 rounded shadow cursor-pointer hover:shadow-lg border-2 border-transparent hover:border-primary-light-color transition duration-300`};

  margin-inline-end: 20px;
  width: calc(25% - 20px);
  ${sm} {
    margin-inline-end: 0px;
    margin: 0 10px;
    ${tw`mb-5`};
    width: calc(50% - 20px);
  }
  ${tw`phone:w-full`}
`;
export const Title = styled.h1`
  ${tw`text-3xl font-bold`}
`;
export const Description = styled.h1`
  ${tw`text-base flex-1`}
`;
export const Price = styled.h3`
  ${tw`text-3xl font-bold mt-3`}
`;
export const Type = styled.div`
  ${tw`text-sm border-b-2 border-gray-200 pb-3`}
`;
export const Properties = styled.div`
  ${tw`flex flex-col my-5`}
`;
export const PropertiesRow = styled.div`
  ${tw`flex justify-between`}
`;
export const Key = styled.h3`
  ${tw`text-sm`}
`;
export const Value = styled.h3`
  ${tw`font-semibold  text-lg`}
`;
