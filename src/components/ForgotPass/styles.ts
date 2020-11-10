import styled from "styled-components";
import tw from "twin.macro";
import { xs } from "@Utils/mediaQueries";
import SocialButton from "@Shared/components/SocialButton";
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
export const ForgotPassword = styled.div`
  ${tw`text-gray-900 text-sm`}
`;
export const Submit = styled.button`
  ${tw`bg-primary-light-color text-white py-3 rounded mt-5 text-lg hover:bg-primary-light-hover-color`};
`;

export const SignupRow = styled.div`
  ${tw`flex items-center mt-4 justify-center`};
`;
export const SignupText = styled.h3`
  ${tw`text-gray-700 text-sm`};
`;
export const SignupLinkText = styled.div`
  ${tw`text-secondary-light-color text-sm`};
  margin-inline-start: 5px;
`;
