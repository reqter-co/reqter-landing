import { md, sm, xs } from "@Utils/mediaQueries";
import styled from "styled-components";
import tw from "twin.macro";
export const CartWrapper = styled.div`
  ${tw`bg-white rounded p-3 mb-5 cursor-pointer transition duration-300 hover:shadow flex flex-col`};
  ${tw`border border-gray-200`};
  width: calc(20% - 10px);
  margin-inline-end: 10px;
  height: 180px;
  a {
    ${tw`flex flex-col p-0 flex-1 m-0`};
  }
  ${md} {
    width: calc(25% - 10px);
  }
  ${sm} {
    width: calc(33.33% - 10px);
  }
  ${xs} {
    width: 100%;
    margin: 0;
    margin-bottom: 10px;
  }
  h2 {
    ${tw`text-black text-sm flex-1 flex items-center mt-2 phone:text-lg`};
  }
`;

export const Image = styled.img`
  height: 125px;
  object-fit: cover;
`;
