import styled from "styled-components";
import tw from "twin.macro";
import { xs, sm, md } from "@Utils/mediaQueries";
export const Wrapper = styled.div`
  // background-color: #2c3040;
  background-color: whitesmoke;
  ${tw`py-5`};
`;
export const Container = styled.div`
  ${tw`py-16 flex max-w-6xl m-auto`};
  ${md} {
    ${tw`px-4`};
  }
  ${sm} {
    ${tw`flex-col items-stretch`};
  }
`;
export const Left = styled.div`
  max-width: 350px;
  ${tw`flex flex-col`};
  margin-inline-end: 100px;
  div {
    &:first-child {
      ${tw`font-semibold text-lg text-justify`};
      margin-bottom: 20px;
    }
  }
  ${md} {
    margin-inline-end: 50px;
  }
  ${sm} {
    ${tw`mb-5 justify-center items-center`};
    margin-inline-end: 0px;
  }
`;
export const SocialIcon = styled.a`
  ${tw`bg-secondary-light-color rounded-full flex items-center justify-center  text-2xl text-secondary-dark-color cursor-pointer mt-10`};
  margin-inline-end: 20px;
  width: 60px;
  height: 60px;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  transition: all 0.2s ease;
  &:hover {
    ${tw`bg-secondary-dark-color text-white`};
  }
`;
export const Right = styled.div`
  ${tw`flex-1 flex justify-between `};
  ${xs} {
    ${tw`flex-col items-stretch`}
  }
`;
export const Column = styled.div`
  ${tw`flex flex-col`};
  ${xs} {
    ${tw`items-center`}
  }
`;
export const Link = styled.a`
  ${tw`mb-2 flex items-center cursor-pointer`};
  &:hover {
    ${tw`underline`};
  }
  ${xs} {
    ${tw`mb-4`}
  }
`;
export const CompanyName = styled.div`
  ${tw`mb-2`};
`;

export const Logo = styled.div`
  ${tw`cursor-pointer bg-primary-light-color text-white text-2xl px-5 py-1 rounded font-semibold`}
`;
