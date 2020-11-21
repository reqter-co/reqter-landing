import styled from "styled-components";
import tw from "twin.macro";
import { xs } from "@Utils/mediaQueries";

export const Wrapper = styled.div`
  ${tw`m-auto flex bg-black-light rounded-lg p-8 max-w-4xl text-white my-10 px-10 tab-port:mx-5 tab-port:flex-col`};
  ${tw`phone:p-4`}
`;
export const Left = styled.div`
  ${tw`flex flex-col flex-1`}
`;
export const Title = styled.h1`
  ${tw`text-4xl font-bold`};
  ${tw`phone:text-3xl`}
`;
export const Price = styled.h1`
  ${tw`text-6xl font-bold my-5`};
  ${tw`phone:text-5xl phone:my-3`}
`;
export const Info = styled.h3`
  ${tw`mb-3`}
`;
export const Right = styled.div`
  ${tw`flex flex-col`};
  ${tw`phone:mt-3`}
`;
export const FeatureItem = styled.div`
  ${tw`flex items-center my-4`};
  ${tw`phone:my-2`}
`;
export const IconBox = styled.div`
  ${tw`text-primary-light-color text-xl`}
`;
export const Text = styled.h3`
  ${tw`font-semibold px-4 text-lg`}
`;
