import styled from "styled-components";
import tw from "twin.macro";
import { xs, sm, md } from "@Utils/mediaQueries";
export const Wrapper = styled.div`
  background-color: #2c3040;
`;
export const Container = styled.div`
  ${tw`py-16 flex items-center max-w-6xl m-auto`};
  ${md} {
    ${tw`px-4`};
  }
  ${sm} {
    ${tw`flex-col items-stretch`};
  }
`;
export const Left = styled.div`
  ${tw`flex`};
  margin-inline-end: 100px;
  ${md} {
    margin-inline-end: 50px;
  }
  ${sm} {
    ${tw`mb-5 justify-center items-center`};
    margin-inline-end: 0px;
  }
`;
export const SocialIcon = styled.a`
  ${tw`rounded-full flex items-center justify-center bg-gray-900 text-3xl text-white cursor-pointer`};
  margin-inline-end: 20px;
  width: 66px;
  height: 66px;
  background: rgba(255, 255, 255, 0.06);
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.13);
  }
`;
export const Right = styled.div`
  ${tw`flex-1 flex justify-between items-center`};
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
  ${tw`text-white mb-2 flex items-center cursor-pointer`};
  &:hover {
    ${tw`underline`};
  }
  ${xs} {
    ${tw`mb-4`}
  }
`;
export const CompanyName = styled.div`
  ${tw`text-white mb-2`};
`;

export const Logo = styled.div`
  ${tw`cursor-pointer bg-primary-light-color text-white text-2xl px-5 py-1 rounded font-semibold`}
`;
