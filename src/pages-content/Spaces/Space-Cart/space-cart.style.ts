import { md, sm, xs } from "@Utils/mediaQueries";
import styled from "styled-components";
import tw from "twin.macro";
export const CartWrapper = styled.div`
  ${tw`bg-white shadow rounded-lg p-3 mb-5 cursor-pointer transition duration-300 hover:shadow-lg flex flex-col`};
  height: 180px;
  width: calc(20% - 10px);
  margin-inline-end: 10px;
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
  height: 77%;
  object-fit: cover;
`;
