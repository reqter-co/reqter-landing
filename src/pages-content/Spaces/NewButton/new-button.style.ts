import { md, sm, xs } from "@Utils/mediaQueries";
import styled from "styled-components";
import tw from "twin.macro";
export const Button = styled.div`
  ${tw`bg-white shadow rounded-lg cursor-pointer transition duration-300 hover:font-bold hover:shadow-lg flex flex-col text-5xl justify-center items-center text-primary-light-color`};
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
`;
