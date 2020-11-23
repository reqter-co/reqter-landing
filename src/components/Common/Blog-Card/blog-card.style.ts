import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.article`
  ${tw`flex flex-col mb-5 w-1/2 no-underline p-2 px-3 hover:shadow-lg cursor-pointer`};
  ${tw`phone:w-full`};
`;

export const ImageBox = styled.div`
  ${tw`overflow-hidden rounded-lg mb-5`};
  max-height: 300px;
`;

export const Image = styled.img`
  ${tw`w-full`};
  object-fit: cover;
`;

export const Title = styled.h1`
  ${tw`text-2xl font-bold flex-1`};
  ${tw`phone:text-2xl`}
`;
export const Description = styled.h3`
  ${tw`text-gray-900 my-5 leading-7`};
`;

export const Footer = styled.div`
  ${tw`flex justify-between w-full items-center`}
`;

export const Date = styled.div`
  ${tw`text-sm text-gray-500`};
`;
