import styled from "styled-components";
import tw from "twin.macro";
import { xs, sm, md } from "@Utils/mediaQueries";
export const Wrapper = styled.div`
  background-color: ;
  ${tw`py-5 bg-black-light`};
  ${xs} {
    ${tw`py-0`};
  }
`;
export const Container = styled.div`
  ${tw`py-16 flex max-w-6xl m-auto text-white`};
  ${md} {
    ${tw`px-4`};
  }
  ${sm} {
    ${tw`flex-col items-stretch`};
  }
  ${xs} {
    ${tw`py-10`};
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
      ${sm} {
        margin-inline-end: 20px;
      }
      ${xs} {
        margin-bottom: 10px;
      }
    }
  }
  ${md} {
    margin-inline-end: 50px;
  }
  ${sm} {
    ${tw`mb-5 justify-center items-center flex-row`};
    margin-inline-end: 0px;
    max-width: 100%;
  }
  ${xs} {
    ${tw`flex-col`}
  }
`;
export const SocialIcon = styled.a`
  ${tw`rounded-full flex items-center justify-center text-2xl text-white cursor-pointer mt-10`};
  margin-inline-end: 20px;
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.2);
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  transition: all 0.2s ease;
  &:hover {
    ${tw`bg-secondary-dark-color`};
  }
  ${sm} {
    ${tw`mt-0`};
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
  display: none;
`;
