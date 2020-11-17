import styled from "styled-components";
import tw from "twin.macro";
import { xs, sm, md } from "@Utils/mediaQueries";

export const Wrapper = styled.div`
  ${tw`w-full bg-white`};
`;

export const Section = styled.div`
  ${tw`max-w-6xl w-full h-full m-auto flex`};
  padding-top: 180px;
  ${md} {
    ${tw`px-5`}
  }
  ${sm} {
    padding-top: 130px;
  }
  ${xs} {
    ${tw`flex-col`};
  }
`;
export const Left = styled.div`
  ${tw`flex flex-col flex-1`};
`;
export const Title = styled.h1`
  ${tw`text-black font-bold text-4xl `};
  ${md} {
    ${tw`text-4xl`};
  }
`;
export const Description = styled.div`
  ${tw`text-lg mt-4 font-semibold max-w-lg`};
  ${sm} {
    ${tw`text-2xl`};
  }
  ${xs} {
    ${tw`text-sm`};
  }
`;

export const Actions = styled.div`
  ${tw`flex mt-10`};
  ${md} {
    ${tw`px-5`};
  }
  ${sm} {
    ${tw`justify-center px-0`};
  }
  ${xs} {
    ${tw`flex-col`};
  }
`;
export const Button = styled.button`
  ${tw`flex justify-center items-center mt-10 py-3 px-6 bg-white text-center text-black text-lg rounded-lg outline-none font-semibold shadow hover:shadow-xl`};
  &:first-child {
    margin-inline-end: 10px;
    ${xs} {
      margin-inline-end: 0px;
    }
  }
  &:last-child {
    ${tw`bg-primary-light-color text-white`};
  }
  ${sm} {
    ${tw`mt-2`}
  }
`;

export const Right = styled.div`
  ${tw`flex`};
  ${sm} {
    ${tw`justify-center items-center`};
    width: 40%;
  }
  ${xs} {
    ${tw`w-full mt-5`};
  }
`;
export const Image = styled.img`
  ${tw`max-w-lg`};
  ${md} {
    ${tw`max-w-md`};
  }
  ${sm} {
    width: 100%;
  }
`;
