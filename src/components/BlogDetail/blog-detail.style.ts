import styled from "styled-components";
import tw from "twin.macro";

export const BlogDetailContainer = styled.div`
  ${tw`flex flex-col max-w-5xl mx-auto`};
  margin-top: -40px;
`;

export const Date = styled.div`
  ${tw`text-gray-600 text-center`};
`;
export const Image = styled.img`
  ${tw`max-w-4xl m-auto mt-16 w-full`};
`;
