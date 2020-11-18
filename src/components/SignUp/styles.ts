import styled from "styled-components";
import tw from "twin.macro";
import { xs } from "@Utils/mediaQueries";
export const Logo = styled.div`
  ${tw`text-secondary-light-color font-semibold p-2 text-lg border border-secondary-light-color text-center rounded-lg`};
  width: 120px;
`;
export const Content = styled.form`
  ${tw`flex-1 flex flex-col m-auto justify-center w-full px-10`}
  ${xs} {
    ${tw`px-5`}
  }
`;
export const Title = styled.h1`
  ${tw`text-4xl font-semibold`}
  ${xs} {
    ${tw`text-3xl`}
  }
`;

export const Description = styled.h3`
  ${tw`text-gray-700 mb-10`}
`;
export const Submit = styled.button`
  ${tw`bg-secondary-light-color text-white py-3 rounded mt-5 text-lg`};
  &:hover {
    ${tw`bg-orange-600`};
  }
`;
export const TextLine = styled.p`
  ${tw`text-gray-500`};
  margin: 25px 10px 0 10px;
  font-size: 13px;
  &:before {
    display: inline-block;
    content: " ";
    height: 2px;
    width: 20%;
    ${tw`bg-gray-200`};
    margin-inline-end: 6%;
    ${xs} {
      width: 15%;
    }
  }

  &:after {
    display: inline-block;
    content: " ";
    height: 2px;
    width: 20%;
    margin-inline-start: 6%;
    ${tw`bg-gray-200`}
    ${xs} {
      width: 15%;
    }
  }
`;

export const SocialButtons = styled.div`
  ${tw`flex mt-3`};
`;
export const Button = styled.button`
  ${tw`bg-gray-100 flex-1 text-center py-3 flex items-center justify-center text-lg`};
  &:hover {
    ${tw`bg-gray-200`};
  }
  &:first-child {
    margin-inline-end: 10px;
  }
`;

export const HavLoginBox = styled.div`
  ${tw`flex items-center mt-4 justify-center`};
`;
export const SignupText = styled.h3`
  ${tw`text-gray-700 text-sm`};
`;
export const SignupLinkText = styled.div`
  ${tw`text-primary-light-color text-sm`};
  margin-inline-start: 5px;
`;
