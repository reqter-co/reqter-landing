import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.article`
  ${tw`flex flex-col mb-5 w-1/2 no-underline p-2 px-3`};
  ${tw`phone:w-full`};
  a {
    ${tw`flex flex-col w-full items-start h-full`};
    text-decoration: none !important;
  }
  * {
  }
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

export const Tags = styled.div`
  ${tw`flex w-full mt-5`};
`;

export const TagItem = styled.div`
  ${tw`text-black text-xs bg-secondary-light-color py-1 px-2 rounded`};
  margin-inline-end: 10px;
`;
export const Footer = styled.div`
  ${tw`flex justify-between w-full`}
`;

export const Date = styled.div`
  ${tw`text-lg`};
`;
