import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`flex flex-col mb-20`};
`;

export const Content = styled.div`
  ${tw`max-w-6xl flex flex-col m-auto`};
`;

export const Header = styled.div`
  ${tw`self-center font-black text-center text-4xl border-b-4 border-primary-light-color mb-20 pb-5`};
  ${tw`phone:mx-5 phone:text-3xl`}
`;

export const Row = styled.div<{ css: any }>`
  ${tw`flex phone:flex-col`};
`;

export const Left = styled.div`
  ${tw`flex justify-center`}
`;

export const Image = styled.img`
  max-width: 450px;
  ${tw`w-full`}
`;

export const Right = styled.div`
  ${tw`flex-1 flex flex-col justify-center p-10 px-16 phone:p-5`};
`;

export const Title = styled.h1`
  ${tw`text-3xl font-bold`};
  ${tw`phone:text-2xl`}
`;
export const Description = styled.h3`
  ${tw`text-gray-900 my-5 leading-10`};
`;
